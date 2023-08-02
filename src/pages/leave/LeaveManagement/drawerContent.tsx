import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Group,
  Menu,
  Select,
  Tabs,
  Text,
  Textarea,
  Divider,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useState } from 'react';
import StyledTabs from './styledTabs';
import { useDisclosure } from '@mantine/hooks';

function formatDateToDisplay(date: Date | null): string {
  if (date) {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    };
    return date.toLocaleDateString('en-GB', options).toUpperCase();
  }
  return 'Pick';
}
function calculateDateDifference(
  start: Date | null,
  end: Date | null
): number | null {
  if (start && end) {
    const diffInMilliseconds = Math.abs(end.getTime() - start.getTime());
    const millisecondsPerDay = 86400000; // Number of milliseconds in a day
    return Math.ceil(diffInMilliseconds / millisecondsPerDay);
  }
  return 0;
}
// Define the type for onClose prop
type DrawerContentProps = {
  onClose: () => void;
};

function DrawerContent({ onClose }: DrawerContentProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const startDate = formatDateToDisplay(value[0]);
  const endDate = formatDateToDisplay(value[1]);
  const dateDifference = calculateDateDifference(value[0], value[1]);

  return (
    <Flex
      direction="column"
      sx={{
        height: '90vh',
      }}
      justify="space-between"
      align="end"
    >
      <Flex
        direction="column"
        gap={30}
        sx={{
          width: '100%',
        }}
        mt="xl"
      >
        <Menu width="95%" opened={opened}>
          <Menu.Dropdown>
            <Menu.Label>Pick the dates</Menu.Label>
            {/* <Menu.Item> */}
            <Center>
              <DatePicker
                styles={{
                  month: { width: '100%' },
                  calendarHeader: { maxWidth: '100%' },
                }}
                onClick={close}
                size="xl"
                maw="100%"
                type="range"
                value={value}
                onChange={setValue}
              />
            </Center>
            {/* </Menu.Item> */}
          </Menu.Dropdown>
          <Menu.Target>
            <Flex
              onClick={open}
              sx={(theme) => ({
                border: `0.11rem solid 
                      ${
                        theme.colorScheme === 'dark'
                          ? theme.colors.gray[7]
                          : theme.colors.dark[1]
                      }
                        `,
                paddingLeft: '10px',
                paddingRight: '10px',
                position: 'relative',
                borderRadius: '2px',
                height: '100px',
                margin: '10px 0px',
              })}
            >
              <Box
                sx={(theme) => ({
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  cursor: 'pointer',
                  width: '50%',
                  zIndex: 10,
                  borderRight: `0.11rem solid 
                      ${
                        theme.colorScheme === 'dark'
                          ? theme.colors.gray[7]
                          : theme.colors.dark[1]
                      }
                        `,
                })}
              >
                <Text>From Date</Text>
                <Text size={25} weight={500}>
                  {startDate}
                </Text>
              </Box>
              <Box
                sx={{
                  display: 'flex', // Use Flexbox
                  alignItems: 'center', // Center vertically
                  position: 'absolute',
                  top: '0',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  justifyContent: 'center', // Center horizontally
                }}
              >
                <Box
                  sx={(theme) => ({
                    padding: '10px 40px',
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[6]
                        : theme.colors.gray[1],
                    border: `0.11rem solid 
                      ${
                        theme.colorScheme === 'dark'
                          ? theme.colors.gray[9]
                          : theme.colors.dark[1]
                      }
                        `,
                    borderRadius: '5px',
                    zIndex: 20,
                  })}
                >
                  <Text size={25} weight={500}>{`${dateDifference} DAYS`}</Text>
                </Box>
              </Box>
              <Box
                sx={{
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  cursor: 'pointer',
                  width: '50%',
                  paddingLeft: '10px',
                  textAlign: 'right',
                  zIndex: 10,
                }}
              >
                <Text>To Date</Text>
                <Text size={25} weight={500}>
                  {endDate}
                </Text>
              </Box>
            </Flex>
          </Menu.Target>
        </Menu>
        <Flex direction="column" mt="md" display="flex">
          <Group position="apart">
            <StyledTabs defaultValue="first">
              <Tabs.List>
                <Tabs.Tab value="first">First Half</Tabs.Tab>
                <Tabs.Tab value="second">Second Half</Tabs.Tab>
              </Tabs.List>
            </StyledTabs>
            <Text>- TO -</Text>
            <StyledTabs defaultValue="second">
              <Tabs.List>
                <Tabs.Tab value="first">First Half</Tabs.Tab>
                <Tabs.Tab value="second">Second Half</Tabs.Tab>
              </Tabs.List>
            </StyledTabs>
          </Group>
          <Divider />
        </Flex>
        <Group
          position="apart"
          // sx={{
          //   width: '80%',
          // }}
        >
          <Select
            label="Select Leave Type"
            placeholder="Pick one"
            data={[
              { value: 'sickleave', label: 'Sick Leave' },
              { value: 'earnedleave', label: 'Earned Leave' },
              { value: 'casualleave', label: 'Casual Leave' },
            ]}
          />
          <Text
            weight={500}
            sx={{
              marginTop: '20px',
            }}
          >
            5 Leaves Available
          </Text>
        </Group>
        <Group grow>
          <Box
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[6]
                  : theme.colors.gray[1],
              border: `0.11rem solid 
                      ${
                        theme.colorScheme === 'dark'
                          ? theme.colors.gray[9]
                          : theme.colors.dark[1]
                      }
                        `,
              padding: '10px 30px',
              borderRadius: '5px',
            })}
          >
            <Text
              sx={(theme) => ({
                color: theme.colors.brand[4],
              })}
            >
              Client Approver
            </Text>
            <Flex gap={20} mt="md">
              <Avatar
                radius="xl"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              />
              <Box>
                <Text size="md">Akash Varma</Text>
                <Text
                  size="xs"
                  weight="lighter"
                  sx={(theme) => ({
                    color: theme.colors.gray[6],
                  })}
                >
                  CEO, Info Tech Ltd.{' '}
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[6]
                  : theme.colors.gray[1],
              border: `0.11rem solid 
                      ${
                        theme.colorScheme === 'dark'
                          ? theme.colors.gray[9]
                          : theme.colors.dark[1]
                      }
                        `,
              padding: '10px 30px',
              borderRadius: '5px',
            })}
          >
            <Text
              sx={(theme) => ({
                color: theme.colors.brand[4],
              })}
            >
              Company Approver
            </Text>
            <Flex gap={20} mt="md">
              <Avatar
                radius="xl"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              />
              <Box>
                <Text size="md">Akash Varma</Text>
                <Text
                  size="xs"
                  weight="lighter"
                  sx={(theme) => ({
                    color: theme.colors.gray[6],
                  })}
                >
                  CEO, Info Tech Ltd.{' '}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Group>
        <Textarea
          placeholder="Please mention the leave reason in details..."
          minRows={10}
        />
      </Flex>
      <Flex gap={10}>
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button>Submit</Button>
      </Flex>
    </Flex>
  );
}

export default DrawerContent;
