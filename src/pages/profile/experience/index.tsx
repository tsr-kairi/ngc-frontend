import { Box, Button, Drawer, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import DrawerContent from './drawer';
import { ItimeLineProps } from './experienceTypes';
import TimeLine from './timline';

const data: ItimeLineProps[] = [
  {
    id: 1,
    title: 'Job Title 1',
    company: 'Company 1',
    startDate: 'march 2021',
    endDate: 'apr 2022',
    description: 'Description 1',
  },
  {
    id: 2,
    title: 'Job Title 2',
    company: 'Company 2',
    startDate: 'june 2022',
    endDate: 'july 2023',
    description: `Some Description about the works,
     I hav `,
  },
  // Add more entries as needed
];

function ProfileExperience() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box
      sx={{
        padding: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
      }}
    >
      <div>
        <TimeLine data={data} />
      </div>
      <>
        <Drawer
          opened={opened}
          onClose={close}
          title="Add Experience"
          overlayProps={{ opacity: 0.5, blur: 4 }}
          position="right"
          scrollAreaComponent={ScrollArea.Autosize}
        >
          <DrawerContent />
        </Drawer>
        <Button radius="md" onClick={open}>
          Add Experience
        </Button>
      </>
    </Box>
  );
}

export default ProfileExperience;
