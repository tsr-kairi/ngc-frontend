import { Box, Button, Drawer, Flex, Progress, Text } from '@mantine/core';
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
      <Flex
        sx={{
          position: 'relative',
          marginTop: '10px',
          marginBottom: '3px',
          fontSize: '12px',
          fontWeight: 'lighter',
        }}
      >
        <Text>
          Pending Approval: <b>3</b>
        </Text>
        <Text
          sx={{
            position: 'absolute',
            left: '33%',
          }}
        >
          Rejected: <b>3</b>
        </Text>
        <Text
          sx={{
            position: 'absolute',
            left: `${33 + 28}%`,
          }}
        >
          Approved: <b>3</b>
        </Text>
      </Flex>
      <Progress
        size={24}
        sections={[
          {
            value: 33,
            color: '#FFD5D5',
          },
          {
            value: 28,
            color: '#EFD5FF',
          },
          {
            value: 39,
            color: '#C6FFD3',
          },
        ]}
      />
    </Box>
  );
}

export default Header;
