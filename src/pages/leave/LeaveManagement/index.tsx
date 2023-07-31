import {
  Box,
  Button,
  Drawer,
  Flex,
  Progress,
  SimpleGrid,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import LeaveCard from '../LeaveCard';
import DrawerContent from './drawerContent';
import Table from './table';

function LeaveManagement() {
  const total = 10;
  const availed = 2;
  const [opened, { open, close }] = useDisclosure(false);

  const availedPercentage = (availed / total) * 100;
  return (
    <div>
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="35%"
        title={`${(
          <>
            Leave Application for <Text color="lightblue">Arvind Kumar</Text>
          </>
        )}`}
      >
        <DrawerContent onClose={close} />
      </Drawer>

      <Flex justify="space-between" my="lg">
        <Text size={30} weight={700}>
          Leave Transaction
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
        <LeaveCard type="Casual" granted={5} availed={1} details="link" />
        <LeaveCard type="Sick" granted={5} availed={1} details="link" />
        <LeaveCard type="Earned" granted={5} availed={1} details="link" />
      </SimpleGrid>
      <Table />
    </div>
  );
}

export default LeaveManagement;
