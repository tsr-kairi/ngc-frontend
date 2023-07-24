import { ActionIcon, Button } from '@mantine/core';
import { IconCheck, IconSquareRoundedX } from '@tabler/icons-react';
import { MantineReactTable, type MRT_ColumnDef } from 'mantine-react-table';
import { useMemo } from 'react';
import data from './makeData';

export type TimesheetProps = {
  date: string;
  checkin: string;
  checkout: string;
  workHours: string;
  approvedHours: string;
  pendingHours: string;
  rejectedHours: string;
  slots: number;
  task: any;
  approval: 'approved' | 'rejected' | null;
  edit: any;
};

function TimeCard() {
  const columns = useMemo<MRT_ColumnDef<TimesheetProps>[]>(
    () => [
      {
        accessorFn: (row) => new Date(row.date),
        id: 'date',
        header: 'Date',
        filterFn: 'lessThanOrEqualTo',
        sortingFn: 'datetime',

        Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(),
      },
      {
        accessorKey: 'checkin',
        header: 'Checkin',
      },
      {
        accessorKey: 'checkout',
        header: 'Checkout',
      },
      {
        accessorKey: 'workHours',
        header: 'Work Hours',
      },
      {
        accessorKey: 'approvedHours',
        header: 'Approved Hours',
      },
      {
        accessorKey: 'pendingHours',
        header: 'Pending Hours',
      },
      {
        accessorKey: 'rejectedHours',
        header: 'Rejected Hours',
      },
      {
        accessorKey: 'slots',
        header: 'Slots',
      },
      {
        accessorKey: 'task',
        header: 'Task',
      },
      {
        accessorKey: 'approval',
        header: 'Approval',
        Cell: ({ cell }) => {
          const approval = cell.getValue();

          if (approval === 'approved') {
            return (
              <div>
                <Button color="greem">Approved</Button>
              </div>
            );
          }
          if (approval === 'rejected') {
            return (
              <div>
                <Button color="red">Rejected</Button>
              </div>
            );
          }
          return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <ActionIcon mr="md" ml="sm">
                <IconCheck color="green" />
              </ActionIcon>
              <IconSquareRoundedX color="red" />
            </div>
          );
        },
      },
    ],
    []
  );

  // using MRT_Table instead of MantineReactTable if we do not want any of the toolbar features
  return (
    <div style={{ overflow: 'auto', maxWidth: '75vw' }}>
      <MantineReactTable
        columns={columns}
        data={data}
        enableColumnActions={false}
        enableEditing
        enableColumnFilters={false}
        enablePagination={false}
        enableSorting={false}
        positionActionsColumn="last"
        mantineTableProps={{
          highlightOnHover: false,
          withColumnBorders: false,
        }}
      />
    </div>
  );
}

export default TimeCard;
