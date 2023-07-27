/* eslint-disable react/prop-types */
import { Badge, Box, Group, Menu } from '@mantine/core';
import {
  IconCheck,
  IconEdit,
  IconSquareRoundedX,
  IconTrash,
} from '@tabler/icons-react';
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table';
import { useMemo, useState } from 'react';
import data, { ApprovalType, TimesheetProps } from './makeData';

function Timecard() {
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
        // eslint-disable-next-line react/no-unstable-nested-components
        // Cell: () => {
        //   return (
        //     <IconListDetails
        //       color="lightgreen"
        //       style={{
        //         cursor: 'pointer',
        //       }}
        //     />
        //   );
        // },
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

  const table = useMantineReactTable({
    columns,
    data: approvalData,
    enablePagination: true,
    positionToolbarAlertBanner: 'bottom',
    mantineTableProps: {
      highlightOnHover: false,
      withColumnBorders: false,
    },
    enableColumnFilterModes: true,
    enableBottomToolbar: true,
    enableColumnOrdering: true,
    paginateExpandedRows: true,
    enableGrouping: true,
    enablePinning: true,
    enableRowVirtualization: true,
    enableRowActions: true,
    enableStickyHeader: true,
    enableExpanding: true,
    enableExpandAll: true,
    renderRowActionMenuItems: () => (
      <>
        <Menu.Item icon={<IconEdit />}>Edit Timecard</Menu.Item>
        <Menu.Item icon={<IconTrash />}>Delete Timecard</Menu.Item>
      </>
    ),
  });
  return (
    <Box mt="40px" sx={{ overflow: 'auto', width: '100%' }}>
      <MantineReactTable table={table} />
    </Box>
  );
}

export default Timecard;
