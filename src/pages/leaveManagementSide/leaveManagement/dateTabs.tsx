/* eslint-disable import/prefer-default-export */
import StyledTabs from '@/pages/leave/LeaveManagement/styledTabs';
import { Box, Tabs, Text } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons-react';
import { useState } from 'react';

export function ManagerTabs() {
  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(),
    new Date(new Date().setDate(new Date().getDate() + 7)),
  ]);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Text mr="md" fz="20px" weight={600}>
          Leave Application
        </Text>
        <DatePickerInput
          type="range"
          icon={<IconCalendar size="1.1rem" stroke={1.5} />}
          placeholder="Pick date"
          value={value}
          onChange={setValue}
          mx="auto"
          maw={400}
        />
      </Box>
      <StyledTabs defaultValue="Pending Approval">
        <Tabs.List>
          <Tabs.Tab value="Pending Approval"> Pending Approval</Tabs.Tab>
          <Tabs.Tab value="Rejected"> Pending</Tabs.Tab>
          <Tabs.Tab value="Approved"> Approved</Tabs.Tab>
          <Tabs.Tab value="All"> All </Tabs.Tab>
        </Tabs.List>
      </StyledTabs>
    </Box>
  );
}
