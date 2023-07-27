/* eslint-disable react/jsx-pascal-case */
import {
  MRT_Table,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table';
import { useMemo } from 'react';
import data, { LoanEMIHistoryProps } from './loanHist';
import { Box } from '@mantine/core';

function LoanHistTable() {
  const columns = useMemo<MRT_ColumnDef<LoanEMIHistoryProps>[]>(
    () => [
      {
        accessorKey: 'emiPayDate',
        header: 'EMI Payment Date',
        size: 150,
      },
      {
        accessorKey: 'emiAmount',
        header: 'EMI Amount',
        size: 150,
      },
      {
        accessorKey: 'emiNumber',
        header: 'EMI Number',
        size: 150,
      },
      {
        accessorKey: 'effectiveSalaryPaid',
        header: 'Effective Salary Paid',
        size: 150,
      },
      {
        accessorKey: 'loanAmountDue',
        header: 'Loan Amount Due',
        size: 150,
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

export default LoanHistTable;
