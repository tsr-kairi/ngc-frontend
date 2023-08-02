/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/prop-types */
import { Badge, Box, Text } from '@mantine/core';
import {
  MRT_Table,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table';
import { useMemo } from 'react';
import data from './leave';

function LeaveTable() {
  const columns = useMemo<MRT_ColumnDef<LeaveManagementManager>[]>(
    () => [
      {
        accessorKey: 'transaction',
        header: 'Transaction',
        Cell: ({ cell }) => {
          const grant = cell.getValue() as string;
          if (grant === 'Granted') {
            return (
              <Badge color="green" variant="outline" p="sm">
                Granted
              </Badge>
            );
          }
          if (grant === 'Availed') {
            return (
              <Badge color="red" variant="outline" p="sm">
                Availed
              </Badge>
            );
          }
          return null;
        },
      },
      {
        accessorKey: 'transactionDate',
        header: 'Transaction Date',
      },
      {
        accessorKey: 'leaveType',
        header: 'Leave Type',
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
              <Badge color="black" variant="outline" p="sm">
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
      },
      {
        accessorKey: 'toDate',
        header: 'To Date',
      },
      {
        accessorKey: 'days',
        header: 'Days',
      },
      {
        accessorKey: 'expiryDate',
        header: 'Expiry Date',
      },
    ],
    []
  );
  const table = useMantineReactTable({
    columns,
    data,
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: true,
    enableSorting: false,
    mantineTableProps: {
      highlightOnHover: false,
      withColumnBorders: false,
    },
  });
  return (
    // <ScrollArea
    //   h="56vh"
    //   offsetScrollbars
    //   styles={() => ({
    //     scrollbar: {
    //       height: '300px',
    //     },
    //   })}
    // >
    <Box mt="40px" sx={{ width: 'calc(100vw - 300px)' }}>
      <Text fz="lg" weight={700} mb="md">
        Leave Transaction History
      </Text>
      <MRT_Table table={table} />
    </Box>
    // </ScrollArea>
  );
}

export default LeaveTable;
