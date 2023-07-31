import IsMobileScreen from '@/hooks/useIsMobileScreen';
import { Box, Button, Flex, Modal, Text, createStyles } from '@mantine/core';
import { useState } from 'react';
import TimeTableBox from './timetable';
import TimetableForm from './timetableForm';

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
        <Text size={30} weight={700}>
          Time Table
        </Text>
        <Button onClick={() => setOpenedEvent(true)}>Edit TimeTable</Button>
      </Flex>
      <TimeTableBox />
      <Modal
        opened={openedEvent}
        onClose={() => setOpenedEvent(false)}
        title="set time table"
        padding="md"
        size={IsMobileScreen() ? 'xl' : 'lg'}
        className={classes.drawer}
      >
        <TimetableForm />
      </Modal>
    </Box>
  );
}

export default TimeTable;
