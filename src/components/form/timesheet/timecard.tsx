/* eslint-disable react/prop-types */
import { Badge, Group } from '@mantine/core';
import { IconCheck, IconSquareRoundedX } from '@tabler/icons-react';
import { MantineReactTable, type MRT_ColumnDef } from 'mantine-react-table';
import { useMemo, useState } from 'react';
import data, { ApprovalType, TimesheetProps } from './makeData';

function TimeCard() {
  // const [approvalBtn, setApprovalBtn] = useState<ApprovalType>(null);
  const [approvalData, setApprovalData] = useState([...data]); // Replace `[...]` with your actual data array

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleApproval = (rowIndex: number, approval: ApprovalType) => {
    const newData = [...approvalData];
    newData[rowIndex].approval = approval;
    setApprovalData(newData);
  };

  const columns = useMemo<MRT_ColumnDef<TimesheetProps>[]>(
    () => [
      {
        accessorKey: 'task',
        header: 'Task',
      },
      {
        accessorKey: 'approval',
        header: 'Approval',
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: ({ cell, row }) => {
          const approval = cell.getValue() as string;

          return (
            <>
              {approval === 'Approved' && <Badge color="green">Approved</Badge>}
              {approval === 'Rejected' && <Badge color="red">Rejected</Badge>}
              {approval === null && (
                <Group>
                  <IconCheck
                    color="green"
                    style={{
                      cursor: 'pointer',
                    }}
                    onClick={() => handleApproval(row.index, 'Approved')}
                  />

                  <IconSquareRoundedX
                    color="red"
                    style={{
                      cursor: 'pointer',
                    }}
                    onClick={() => handleApproval(row.index, 'Rejected')}
                  />
                </Group>
              )}
            </>
          );
        },
      },
      {
        accessorKey: 'slots',
        header: 'Slots',
      },
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
    ],
    [handleApproval]
  );

  return (
    <MantineReactTable
      columns={columns}
      data={approvalData}
      enableColumnFilterModes
      enableBottomToolbar
      enableColumnOrdering
      enablePagination
      enableGrouping
      enablePinning
      enableRowVirtualization
      enableExpanding
      enableExpandAll
    />
  );
}

export default TimeCard;
