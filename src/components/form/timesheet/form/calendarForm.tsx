import { Box, Button, Flex, Text } from '@mantine/core';
import Timeline from './Records';

const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString(undefined, options);
};

const initialEvents = [
  { id: 1, start: '08:15', end: '12:45', title: 'Event 1' },
  { id: 2, start: '13:30', end: '18:00', title: 'Event 2' },
  // Add more initial events as needed
];

export default function CalendarForm() {
  const currentDate = new Date();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <Text size="xl">Edit Timesheet for: {formatDate(currentDate)}</Text>
      <Flex gap={10}>
        <Button color="red">Reject All</Button>
        <Button color="green">Approve All</Button>
      </Flex>
      {/* <DayView /> */}
      <Box
        sx={{
          height: '800px', // Adjust the height of the timeline as needed
          overflow: 'scroll',
        }}
      >
        <Timeline events={initialEvents} />
      </Box>
    </Box>
  );
}
