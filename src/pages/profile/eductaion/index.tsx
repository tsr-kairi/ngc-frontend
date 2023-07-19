import { Box, Button, Drawer, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import DrawerContent from './drawerEd';
import { ItimeLineProps } from './educationTypes';
import TimeLine from './edTimeline';

const data: ItimeLineProps[] = [
  {
    id: 1,
    title: 'IIT Bombay',
    company: 'Computer Science',
    startDate: ' 2021',
    endDate: '2022',
    description: 'Description 1',
  },
  {
    id: 2,
    title: 'IIT Bombay',
    company: 'Computer Science',
    startDate: ' 2022',
    endDate: ' 2023',
    description: `Some Description about the works,
     I have done xyz in so and so project and have
      tried working in x part Some Description about 
      the works, I have done xyz in so and so project 
      and have tried working in x part Some Description
       about the works, I have done xyz in so and so project
        and have tried working in x part Some Description about
         the works, I have done xyz in so and so project and have tried working in x part `,
  },
  // Add more entries as needed
];

function Education() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box sx={{ padding: '50px', display: 'flex' }}>
      <div>
        <TimeLine data={data} />
      </div>
      <>
        <Drawer
          opened={opened}
          onClose={close}
          title="Add Education"
          overlayProps={{ opacity: 0.5, blur: 4 }}
          position="right"
          scrollAreaComponent={ScrollArea.Autosize}
        >
          <DrawerContent />
        </Drawer>
        <Button radius="md" onClick={open}>
          Add Education
        </Button>
      </>
    </Box>
  );
}

export default Education;
