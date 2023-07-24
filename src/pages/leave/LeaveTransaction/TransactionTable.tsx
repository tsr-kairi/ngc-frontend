/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/prop-types */
import { Box, Text } from '@mantine/core';
import {
  MRT_Table,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table';
import { useMemo } from 'react';
import data, { HistoryProps } from './history';

function TransactionTable() {
  const columns = useMemo<MRT_ColumnDef<HistoryProps>[]>(
    () => [
      {
        accessorKey: 'transaction',
        header: 'Transaction',
        Cell: ({ cell }) => {
          const grant = cell.getValue() as string;
          if (grant === 'Granted') {
            return (
              <Box
                sx={{
                  border: '2px solid green',
                  borderRadius: '25px',
                  width: '100px',
                  paddingLeft: '20px',
                }}
              >
                Granted
              </Box>
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
    enablePagination: false,
    enableSorting: false,
    mantineTableProps: {
      highlightOnHover: false,
      withColumnBorders: false,
    },
  });
  return (
    <Box>
      <Text fz="lg" weight={700} mb="md">
        Leave Transaction
      </Text>
      <MRT_Table table={table} />;
    </Box>
  );
}

export default TransactionTable;
