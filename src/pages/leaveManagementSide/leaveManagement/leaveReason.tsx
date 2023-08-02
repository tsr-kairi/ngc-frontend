import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Group,
  Menu,
  Modal,
  Text,
  Textarea,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import { IconCalendar } from '@tabler/icons-react';
import { useState } from 'react';

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

function LeaveReason() {
  const [opened, { open, close }] = useDisclosure(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const startDate = formatDateToDisplay(dateRange[0]);
  const endDate = formatDateToDisplay(dateRange[1]);
  const dateDifference = calculateDateDifference(dateRange[0], dateRange[1]);
  return (
    <Box>
      <Group
        sx={{
          width: '100%',
          height: '40px',
          marginTop: '20px',
          marginLeft: '10px',
        }}
      >
        <Avatar
          radius="xl"
          size="60px"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
        />
        <Text fz="xl" weight={700}>
          RAMANANDA KAIRI
          <Text fz="md" weight={300}>
            Senior Developer
          </Text>
        </Text>
      </Group>
      <Box mt="40px">
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
                value={dateRange}
                onChange={setDateRange}
              />
            </Center>
            {/* </Menu.Item> */}
          </Menu.Dropdown>
          <Menu.Target>
            <Flex
              onClick={open}
              sx={{
                // border: `0.11rem solid
                //         ${
                //           theme.colorScheme === 'dark'
                //             ? theme.colors.gray[7]
                //             : theme.colors.dark[1]
                //         }
                //           `,
                paddingLeft: '10px',
                paddingRight: '10px',
                position: 'relative',
                // borderRadius: '2px',
                height: '100px',
                margin: '10px 0px',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  cursor: 'pointer',
                  width: '70%',
                  paddingLeft: '10px',
                  zIndex: 10,
                }}
              >
                <Text>From Date</Text>
                <Flex
                  align="center"
                  sx={{
                    position: 'absolute',
                    left: '8px',
                    width: '50%',
                    backgroundColor: '#F5F5F5',
                    padding: '10px',
                  }}
                >
                  <IconCalendar />
                  <Text ml="sm" size={15} weight={500}>
                    {startDate}
                  </Text>
                </Flex>
                <Text mt="50px">First Half</Text>
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
                <Text size={25} weight={500}>{`${dateDifference} DAYS`}</Text>
              </Box>
              <Box
                sx={{
                  position: 'relative',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  cursor: 'pointer',
                  width: '50%',
                  paddingLeft: '10px',
                  textAlign: 'right',
                  zIndex: 10,
                }}
              >
                <Text mr="30px">To Date</Text>
                <Flex
                  align="center"
                  sx={{
                    position: 'absolute',
                    right: '0',
                    width: '70%',
                    backgroundColor: '#F5F5F5',
                    padding: '10px',
                  }}
                >
                  <IconCalendar />
                  <Text ml="sm" size={15} weight={500}>
                    {endDate}
                  </Text>
                </Flex>
                <Text mt="50px">First Half</Text>
              </Box>
            </Flex>
          </Menu.Target>
        </Menu>
      </Box>
      <Textarea
        mt="40px"
        minRows={10}
        placeholder=""
        label="Leave Reason"
        withAsterisk
      />
      <Flex sx={{ position: 'absolute', bottom: '30px', right: '20px' }}>
        <Button mx="md" color="red" onClick={() => setModalOpened(true)}>
          Reject
        </Button>
        <Button>Approve</Button>
      </Flex>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        centered
        withCloseButton={false}
      >
        <Box sx={{ textAlign: 'center', width: '100%' }}>
          <Text fz="xl" weight={500}>
            Rejection Reason
          </Text>
          <Text fz="md" weight={200}>
            Please Provide the Rejection Reason
          </Text>
          <Textarea mt="40px" minRows={6} placeholder="" label="" />
        </Box>
        <Flex
          gap="sm"
          my="md"
          sx={{
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={() => setModalOpened(false)}
            fullWidth
            variant="outline"
          >
            Cancel
          </Button>
          <Button fullWidth>Submit</Button>
        </Flex>
      </Modal>
    </Box>
  );
}
export default LeaveReason;
