import { Box, Button, Flex, Progress, SimpleGrid, Text } from '@mantine/core';
import LeaveCard from '../LeaveCard';
import TransactionTable from './TransactionTable';

export default function TransactionPage() {
  const total = 10;
  const availed = 2;
  const availedPercentage = (availed / total) * 100;
  return (
    <Box>
      <Flex justify="space-between" my="lg">
        <Text size={30} weight={700}>
          Leave Transaction
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
        <LeaveCard type="Casual" granted={5} availed={1} details="link" />
        <LeaveCard type="Sick" granted={5} availed={1} details="link" />
        <LeaveCard type="Earned" granted={5} availed={1} details="link" />
      </SimpleGrid>
      <TransactionTable />
    </Box>
  );
}
