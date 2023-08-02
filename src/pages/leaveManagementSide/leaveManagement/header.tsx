import { Box, Button, Drawer, Progress, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import LeaveAppDrawer from './leaveAppDrawer';

// This way you can Use the custom title component for styling purpose in mantine...
function CustomTitle() {
  return (
    <Text display="flex">
      Leave Application for{' '}
      <Text
        ml="xs"
        sx={(theme) => ({
          color: theme.colors.brand[5],
          ':hover': {
            cursor: 'pointer',
            borderBottom: `1px solid ${theme.colors.brand[5]}`,
          },
        })}
      >
        {/* Customize the color here */}
        Arvind Kumar
      </Text>
    </Text>
  );
}

function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Box>
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="50%"
        title={<CustomTitle />} // Use the custom title component here
      >
        <LeaveAppDrawer onClose={close} />
      </Drawer>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text fz="25px" weight={600}>
          Leave Management
        </Text>
        <Button onClick={open}>Apply Leave</Button>
      </Box>
      <Progress
        mt="md"
        size={24}
        sections={[
          {
            value: 33,
            color: '#FFD5D5',
            label: 'Documents',
            tooltip: 'Document – 33 Gb',
          },
          {
            value: 28,
            color: '#EFD5FF',
            label: 'Apps',
            tooltip: 'Apps – 28 Gb',
          },
          {
            value: 39,
            color: '#C6FFD3',
            label: 'Other',
            tooltip: 'Other – 25 Gb',
          },
        ]}
      />
    </Box>
  );
}

export default Header;
