/* eslint-disable react/jsx-props-no-spreading */

import Timecard from '@/components/form/timesheet/timecard';
import Timeline from '@/components/form/timesheet/timeline';
import { Box, Pagination, rem, Tabs, TabsProps, Text } from '@mantine/core';
import WeekSwitcher from './weekSwitch';

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
          height: '40px',

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
  // const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  // const [date, setDate] = useState<Date | null>(null);

  return (
    <>
      <Text size={30} weight={700}>
        Time and Attendance
      </Text>

      <StyledTabs defaultValue="Timecard">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          pt="20px"
        >
          <WeekSwitcher />
          <Tabs.List>
            <Tabs.Tab value="Timecard">Timecard</Tabs.Tab>
            <Tabs.Tab value="TimeLine">Timeline</Tabs.Tab>
          </Tabs.List>
        </Box>
        <Tabs.Panel value="Timecard" pt="xs">
          <Timecard />
        </Tabs.Panel>

        <Tabs.Panel value="TimeLine" pt="xs">
          <Timeline />
          <Pagination position="right" total={5} mt="md" />
        </Tabs.Panel>
      </StyledTabs>
    </>
  );
}

export default Timesheet1;
