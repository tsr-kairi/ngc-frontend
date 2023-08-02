import {
  Box,
  Button,
  Flex,
  Loader,
  Progress,
  SimpleGrid,
  Text,
} from '@mantine/core';
import LeaveCard from '../LeaveCard';
import useGetAllLeaveTransaction from '../hooks/useGetAllLeaveTransaction';
import CasualLeave from '../leaveCategory/casualLeave';
import LeaveTransactionList from './LeaveTransaction-list';

export default function LeaveTransactionUpperHeader() {
  const total = 10;
  const availed = 2;
  const availedPercentage = (availed / total) * 100;
  return (
    <Box
      style={{
        marginBottom: '20px',
      }}
    >
      <Flex justify="space-between" my="lg">
        <Text size={30} weight={700}>
          Leave
        </Text>
        <Button>Apply leave</Button>
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
    </Box>
  );
}

//  main LeaveTransaction component
export function LeaveTransaction() {
  const { data, isError, isLoading } = useGetAllLeaveTransaction();

  if (isError) {
    return <h1>An Error Occurred</h1>;
  }

  if (!isLoading) {
    return (
      <>
        <LeaveTransactionUpperHeader />
        <LeaveTransactionList data={data?.data ?? []} />
      </>
    );
  }
  return <Loader variant="dots" />;
}
