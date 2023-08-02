/* eslint-disable no-bitwise */
import {
  Box,
  Button,
  Drawer,
  Flex,
  Loader,
  Progress,
  SimpleGrid,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import LeaveCard from '../LeaveCard';
import useGetAllLeaveManagement from '../hooks/useGetAllLeaveManagement';
import DrawerContent from './drawerContent';
import LeaveManagementList from './leaveManagement-list';
import CasualLeave from '../leaveCategory/casualLeave';

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

export function LeaveManagementUpperHeader() {
  const total = 10;
  const availed = 2;
  const [opened, { open, close }] = useDisclosure(false);

  const availedPercentage = (availed / total) * 100;

  return (
    <div
      style={{
        marginBottom: '20px',
      }}
    >
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="35%"
        title={<CustomTitle />} // Use the custom title component here
      >
        <DrawerContent onClose={close} />
      </Drawer>

      <Flex justify="space-between" my="lg">
        <Text size={30} weight={700}>
          Leave
        </Text>
        <Button onClick={open}>Apply leave</Button>
      </Flex>
      <Box py="lg">
        <Flex
          sx={{
            marginBottom: '5px',
          }}
          justify="space-between"
        >
          <Text size={15} weight={300}>
            Availed: {availed}
          </Text>
          <Text size={15} weight={300}>
            Granted: {total}
          </Text>
        </Flex>
        <Progress
          sections={[
            { value: availedPercentage, color: 'red.3' },
            { value: 100 - availedPercentage, color: 'green.3' },
          ]}
        />
      </Box>
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: 'lg', cols: 2, spacing: 'md' },
          { maxWidth: 'md', cols: 2, spacing: 'sm' },
          { maxWidth: 'sm', cols: 1, spacing: 'sm' },
        ]}
      >
        <LeaveCard
          type="Casual"
          granted={5}
          availed={1}
          drawerTitle="Casual Leave Details"
          drawerChildren={<CasualLeave />}
          drawerSize="50%"
        />
        <LeaveCard
          type="Sick"
          granted={5}
          availed={1}
          drawerTitle="Sick Leave Details"
          drawerChildren={<CasualLeave />}
          drawerSize="50%"
        />
        <LeaveCard
          type="Earned"
          granted={5}
          availed={1}
          drawerTitle="Earned Leave Details"
          drawerChildren={<CasualLeave />}
          drawerSize="50%"
        />
      </SimpleGrid>
    </div>
  );
}

//  main LeaveManagement component
export function LeaveManagement() {
  const { data, isError, isLoading } = useGetAllLeaveManagement();

  if (isError) {
    return <h1>An Error Occurred</h1>;
  }

  if (!isLoading) {
    return (
      <>
        <LeaveManagementUpperHeader />
        <LeaveManagementList data={data?.data ?? []} />
      </>
    );
  }
  return <Loader variant="dots" />;
}
