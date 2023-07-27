import { Box, Button, Flex, Text } from '@mantine/core';
import { IconAlarmFilled, IconCalendarEvent } from '@tabler/icons-react';
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

export default function CalendarForm({
  setOpenedEvent,
}: {
  setOpenedEvent: (value: boolean) => void;
}) {
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
        height: '90vh',
        justifyContent: 'space-between',
      }}
    >
      <Flex align="center" gap="sm">
        <IconCalendarEvent color="blue" />
        <Text size="xl">Timesheet for {formatDate(currentDate)}</Text>
      </Flex>
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
        <Flex gap="lg">
          <Box>
            <Text color="dark" weight={400} size={15}>
              Total Hours
            </Text>
            <Text
              weight={300}
              size={20}
              color="brand"
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <IconAlarmFilled size={25} style={{ marginRight: '10px' }} />
              08:12
            </Text>
          </Box>
          <Box>
            <Text color="dark" weight={400} size={15}>
              Approved Hours
            </Text>
            <Text
              weight={300}
              size={20}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
              color="green"
            >
              <IconAlarmFilled size={25} style={{ marginRight: '10px' }} />
              08:12
            </Text>
          </Box>
        </Flex>
        <Flex gap={10}>
          <Button
            size="md"
            variant="outline"
            onClick={() => setOpenedEvent(false)}
          >
            Cancel
          </Button>
          <Button size="md">Save</Button>
        </Flex>
      </Flex>
    </Box>
  );
}
