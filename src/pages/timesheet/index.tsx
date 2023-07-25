/* eslint-disable react/jsx-props-no-spreading */

import TimeLine from '@/components/form/timesheet/timecard';
import TimeCard from '@/components/form/timesheet/timeline';
import { Box, Button, Group, rem, Tabs, TabsProps, Text } from '@mantine/core';

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      unstyled
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[0]
              : theme.colors.gray[9],
          border: `${rem(1)} solid ${
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[4]
          }`,
          padding: `${theme.spacing.xs} ${theme.spacing.md}`,
          cursor: 'pointer',
          fontSize: theme.fontSizes.sm,
          display: 'flex',
          alignItems: 'center',

          '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
          },

          '&:not(:first-of-type)': {
            borderLeft: 0,
          },

          '&:first-of-type': {
            borderTopLeftRadius: theme.radius.md,
            borderBottomLeftRadius: theme.radius.md,
          },

          '&:last-of-type': {
            borderTopRightRadius: theme.radius.md,
            borderBottomRightRadius: theme.radius.md,
          },

          '&[data-active]': {
            backgroundColor: theme.colors.blue[7],
            borderColor: theme.colors.blue[7],
            color: theme.white,
          },
        },

        tabIcon: {
          marginRight: theme.spacing.xs,
          display: 'flex',
          alignItems: 'center',
        },

        tabsList: {
          display: 'flex',
        },
      })}
      {...props}
    />
  );
}

function Timesheet1() {
  return (
    <>
      <Text size="lg" weight={400} pl="md">
        Time and Attendance
      </Text>

      <StyledTabs defaultValue="Timeline">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '20px',
          }}
        >
          <Group>
            <Button>Calendar</Button>
            <Button>Calendar</Button>
          </Group>
          <Tabs.List>
            <Tabs.Tab value="Timeline">Timeline</Tabs.Tab>
            <Tabs.Tab value="Timecard">Timecard</Tabs.Tab>
          </Tabs.List>
        </Box>
        <Tabs.Panel value="Timeline" pt="xs">
          <TimeLine />
        </Tabs.Panel>

        <Tabs.Panel value="Timecard" pt="xs">
          <TimeCard />
        </Tabs.Panel>
      </StyledTabs>
    </>
  );
}

export default Timesheet1;
