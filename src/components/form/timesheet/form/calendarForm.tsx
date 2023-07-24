import { Box, Button, Flex, Text } from '@mantine/core';
import { IconAlarmFilled } from '@tabler/icons-react';
import { useEffect, useRef } from 'react';
import Timeline, { type Event } from './Records';

const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString(undefined, options);
};
const initialEvents: Event[] = [
  {
    id: 1,
    start: '08:15',
    end: '11:45',
    accepted: true,
    tasks: [
      { id: 1, description: 'asda' },
      { id: 2, description: 'asfas' },
    ],
  },
  {
    id: 2,
    start: '12:15',
    end: '13:45',
    accepted: false,
    tasks: [
      { id: 1, description: '123' },
      { id: 2, description: 'asfsdffas' },
    ],
  },
  {
    id: 3,
    start: '14:30',
    end: '17:00',
    accepted: null,
    tasks: [{ id: 1, description: 'asd' }],
  },
  // Add more initial events as needed
];

export default function CalendarForm() {
  const currentDate = new Date();
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineRef.current) {
      // Set the initial scroll position to center the timeline
      timelineRef.current.scrollTop =
        timelineRef.current.scrollHeight / 2 -
        timelineRef.current.clientHeight / 2;
    }
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
      }}
    >
      <Text size="xl">Edit Timesheet for: {formatDate(currentDate)}</Text>
      <Flex gap={10} justify="end">
        <Button variant="outline" color="red">
          Reject All
        </Button>
        <Button variant="outline" color="green">
          Approve All
        </Button>
      </Flex>
      {/* <DayView /> */}
      <Box
        sx={{
          height: '700px', // Adjust the height of the timeline as needed
          overflow: 'scroll',
          overflowX: 'hidden',
        }}
        ref={timelineRef}
      >
        <Timeline events={initialEvents} />
      </Box>
      <Flex px="lg" justify="space-between">
        <Box>
          <Text color="dark" weight={400} size={25}>
            Total Hours
          </Text>
          <Text
            weight={300}
            size={20}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconAlarmFilled size={25} style={{ marginRight: '10px' }} />
            08:12
          </Text>
        </Box>
        <Flex gap={10}>
          <Button size="md" variant="outline">
            Cancel
          </Button>
          <Button size="md">Save</Button>
        </Flex>
      </Flex>
    </Box>
  );
}
