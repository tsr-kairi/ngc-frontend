import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Group,
  Modal,
  Select,
  Tabs,
  Text,
  Textarea,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import StyledTabs from './styledTabs';

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

function DrawerContent() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [opened, { open, close }] = useDisclosure(false);

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
      >
        <Modal
          size="auto"
          opened={opened}
          onClose={close}
          title="pick the dates"
        >
          <Center>
            <DatePicker type="range" value={value} onChange={setValue} />
          </Center>
        </Modal>
        <Flex
          sx={{
            border: '1px solid #D4D4D4',
            paddingLeft: '10px',
            paddingRight: '10px',
            position: 'relative',
            borderRadius: '2px',
            height: '100px',
            margin: '10px 0px',
          }}
        >
          <Box
            sx={{
              paddingTop: '10px',
              paddingBottom: '10px',
              cursor: 'pointer',
              width: '50%',
              zIndex: 10,
              borderRight: '1px solid #D4D4D4',
            }}
            onClick={open}
          >
            <Text>From Date</Text>
            <Text size={30} weight={500}>
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
              sx={{
                padding: '10px 40px',
                backgroundColor: '#F1F1F1',
                borderRadius: '5px',
                zIndex: 20,
              }}
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
            onClick={open}
          >
            <Text>To Date</Text>
            <Text size={30} weight={500}>
              {endDate}
            </Text>
          </Box>
        </Flex>
        <Flex justify="space-between">
          <StyledTabs>
            <Tabs.List>
              <Tabs.Tab value="settings">First Half</Tabs.Tab>
              <Tabs.Tab value="messages">Second Half</Tabs.Tab>
            </Tabs.List>
          </StyledTabs>
          <StyledTabs>
            <Tabs.List>
              <Tabs.Tab value="settings">First Half</Tabs.Tab>
              <Tabs.Tab value="messages">Second Half</Tabs.Tab>
            </Tabs.List>
          </StyledTabs>
        </Flex>
        <Group
          grow
          sx={{
            width: '80%',
          }}
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
        <Flex gap={20}>
          <Box
            sx={{
              backgroundColor: '#F4F4F4',
              padding: '10px 30px',
              borderRadius: '5px',
            }}
          >
            <Text
              sx={{
                marginBottom: '5px',
              }}
            >
              Client Approver
            </Text>
            <Flex gap={20}>
              <Avatar size="lg" radius="xl" color="grey" />
              <Box>
                <Text size="md">Akash Varma</Text>
                <Text size="sm">CEO, Info Tech Ltd. </Text>
              </Box>
            </Flex>
          </Box>
          <Box
            sx={{
              backgroundColor: '#F4F4F4',
              padding: '10px 30px',
              borderRadius: '5px',
            }}
          >
            <Text
              sx={{
                marginBottom: '5px',
              }}
            >
              Company Approver
            </Text>
            <Flex gap={20}>
              <Avatar size="lg" radius="xl" color="grey" />
              <Box>
                <Text size="md">Akash Varma</Text>
                <Text size="sm">CEO, Info Tech Ltd. </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Textarea
          placeholder="Please mention the leave reason in details"
          minRows={5}
        />
      </Flex>
      <Flex gap={10}>
        <Button variant="outline">cancel</Button>
        <Button>submit</Button>
      </Flex>
    </Flex>
  );
}

export default DrawerContent;
