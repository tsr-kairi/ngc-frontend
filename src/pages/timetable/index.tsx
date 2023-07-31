import IsMobileScreen from '@/hooks/useIsMobileScreen';
import { Box, Button, Drawer, Flex, Text, createStyles } from '@mantine/core';
import { useState } from 'react';
import TimeTableBox from './timetable';

const useStyles = createStyles(() => ({
  drawer: {
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
}));
function TimeTable() {
  const [openedEvent, setOpenedEvent] = useState(false);
  const { classes } = useStyles();
  return (
    <Box>
      <Flex align="center" justify="space-between">
        <Text>Time Table</Text>
        <Button onClick={() => setOpenedEvent(true)}>Add</Button>
      </Flex>
      <TimeTableBox />
      <Drawer
        opened={openedEvent}
        onClose={() => setOpenedEvent(false)}
        title="Event board"
        padding="md"
        size={IsMobileScreen() ? 'xl' : 'xl'}
        position="right"
        className={classes.drawer}
      />
    </Box>
  );
}

export default TimeTable;
