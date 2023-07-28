/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-pascal-case */
import {
  ActionIcon,
  Badge,
  Box,
  rem,
  Tabs,
  TabsProps,
  Text,
} from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table';
import { useMemo } from 'react';
import data, { ManageHistoryProps } from './manageHist';

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

function Table() {
  const actionColumn = {
    header: 'Actions',
    Cell: () => (
      <Box>
        <ActionIcon>
          <IconArrowRight />
        </ActionIcon>
      </Box>
    ),
  };
  const columns = useMemo<MRT_ColumnDef<ManageHistoryProps>[]>(
    () => [
      {
        accessorKey: 'applicationDate',
        header: 'Application Date',
        size: 150,
      },
      {
        accessorKey: 'leaveType',
        header: 'Leave Type',
        size: 200,
        Cell: ({ cell }) => {
          const leave = cell.getValue() as string;
          if (leave === 'Earned') {
            return (
              <Badge color="green" variant="outline" p="sm">
                Earned
              </Badge>
            );
          }
          if (leave === 'Sick') {
            return (
              <Badge color="yellow" variant="outline" p="sm">
                Sick
              </Badge>
            );
          }
          if (leave === 'Casual') {
            return (
              <Badge color="red" variant="outline" p="sm">
                Casual
              </Badge>
            );
          }
          return null;
        },
      },
      {
        accessorKey: 'fromDate',
        header: 'From Date',
        size: 150,
      },
      {
        accessorKey: 'toDate',
        header: 'To Date',
        size: 150,
      },
      {
        accessorKey: 'days',
        header: 'Days',
        size: 100,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 200,
        Cell: ({ cell }) => {
          const status = cell.getValue() as string;
          if (status === 'Approved') {
            return (
              <Badge color="green" variant="outline" p="sm">
                Approved
              </Badge>
            );
          }
          if (status === 'Pending') {
            return (
              <Badge color="yellow" variant="outline" p="sm">
                Pending
              </Badge>
            );
          }
          if (status === 'Rejected') {
            return (
              <Badge color="red" variant="outline" p="sm">
                Rejected
              </Badge>
            );
          }
          return null;
        },
      },
      {
        ...actionColumn,
      },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data,
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: false,
    enableSorting: false,
    enableFullScreenToggle: false,
    mantineTableProps: {
      highlightOnHover: false,
      withColumnBorders: false,
    },
  });
  return (
    // <div
    // style={{
    // width: `${sidebarCollapsed ? '94vw' : 'calc(100vw - 300px)'}`,
    // height: 'calc(100vh - 95px)',
    // }}
    // >
    <Box mt="40px" sx={{ width: 'calc(100vw - 300px)' }}>
      <StyledTabs defaultValue="Timecard">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '20px',
          }}
        >
          <Text fz="lg" weight={700}>
            Leave History
          </Text>
          <Tabs.List>
            <Tabs.Tab value="Timeline">All</Tabs.Tab>
            <Tabs.Tab value="Timecard">Pending</Tabs.Tab>
            <Tabs.Tab value="Approved">Approved</Tabs.Tab>
            <Tabs.Tab value="Rejected">Rejected</Tabs.Tab>
          </Tabs.List>
        </Box>
      </StyledTabs>
      <MantineReactTable table={table} />
    </Box>
    // </div>
  );
}

export default Table;
