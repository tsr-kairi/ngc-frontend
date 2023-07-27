/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/no-unstable-nested-components */
import { ActionIcon, Box, Text } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import {
  MRT_Table,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table';
import { useMemo } from 'react';
import data, { RevisionHistoryProps } from './revisionHist';

function TableReview() {
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

  const columns = useMemo<MRT_ColumnDef<RevisionHistoryProps>[]>(
    () => [
      {
        accessorKey: 'lastRevisionDate',
        header: 'Last Revision Date',
        size: 150,
      },
      {
        accessorKey: 'payoutMonth',
        header: 'Payout Month',
        size: 150,
      },
      {
        accessorKey: 'revisionAmount',
        header: 'Revision Amount',
        size: 150,
      },
      {
        accessorKey: 'revisionPercentage',
        header: 'Revision %age',
        size: 150,
      },
      {
        accessorKey: 'currentCTC',
        header: 'Current CTC',
        size: 150,
      },
      {
        accessorKey: 'revisedCTC',
        header: 'Revised CTC',
        size: 150,
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
      <Text fz="xl" weight={700} mb="md" mt="md">
        Salary Revsision
      </Text>
      <MRT_Table table={table} />
    </Box>
  );
}

export default TableReview;
