/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-pascal-case */
import { ActionIcon, Box } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import {
  MRT_Table,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table';
import { useMemo } from 'react';
import data, { LoanAPPHistoryProps } from './loanAppHist';

function LoanAppTable() {
  const actionColumn = {
    header: 'Actions',
    size: 100,
    Cell: () => (
      <Box>
        <ActionIcon>
          <IconArrowRight />
        </ActionIcon>
      </Box>
    ),
  };

  const columns = useMemo<MRT_ColumnDef<LoanAPPHistoryProps>[]>(
    () => [
      {
        accessorKey: 'applicationDate',
        header: 'Application Date',
        size: 120,
      },
      {
        accessorKey: 'loanAmount',
        header: 'Loan Amount',
        size: 100,
      },
      {
        accessorKey: 'availableCreditLimit',
        header: 'Available Credit Limit',
        size: 130,
      },
      {
        accessorKey: 'reason',
        header: 'Reason',
        size: 150,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 120,
        Cell: ({ cell }) => {
          const status = cell.getValue() as string;
          if (status === 'Approved') {
            return (
              <Box
                sx={{
                  border: '2px solid ',
                  borderColor: '#019923',
                  borderRadius: '25px',
                  width: '100px',
                  padding: '5px',
                  paddingLeft: '18px',
                  color: '#019923',
                }}
              >
                Approved
              </Box>
            );
          }
          if (status === 'Pending') {
            return (
              <Box
                sx={{
                  border: '2px solid ',
                  borderColor: '#D28B02',
                  borderRadius: '25px',
                  width: '100px',
                  padding: '5px',
                  paddingLeft: '20px',
                  color: '#D28B02',
                }}
              >
                Pending
              </Box>
            );
          }
          if (status === 'Rejected') {
            return (
              <Box
                sx={{
                  border: '2px solid ',
                  borderColor: '#B20000',
                  borderRadius: '25px',
                  width: '100px',
                  padding: '5px',
                  paddingLeft: '20px',
                  color: '#B20000',
                }}
              >
                Rejected
              </Box>
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
    mantineTableProps: {
      highlightOnHover: false,
      withColumnBorders: false,
    },
  });

  return (
    <Box sx={{ overflow: 'auto', width: '100%' }}>
      <MRT_Table table={table} />
    </Box>
  );
}

export default LoanAppTable;
