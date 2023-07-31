/* eslint-disable react/prop-types */
import IsMobileScreen from '@/hooks/useIsMobileScreen';
import {
  ActionIcon,
  Badge,
  Box,
  Drawer,
  Group,
  Menu,
  Text,
  createStyles,
} from '@mantine/core';
import {
  IconCheck,
  IconEdit,
  IconListDetails,
  IconSquareRoundedX,
  IconTrash,
} from '@tabler/icons-react';
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table';
import { useMemo, useState } from 'react';
import CalendarForm from './form/calendarForm';
import data, { ApprovalType, TimesheetProps } from './makeData';

function formatDateToCustomFormat(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const year = date.getFullYear().toString().slice(-2);
  const month = date.toLocaleString('default', { month: 'short' });

  return `${day} ${month} ${year}`;
}

function getDayOfWeek(dateString: string): string {
  const date = new Date(dateString);
  const dayOfWeek = date.toLocaleString('default', { weekday: 'long' });
  return dayOfWeek;
}

const useStyles = createStyles(() => ({
  drawer: {
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
}));
function Timecard() {
  // const [approvalBtn, setApprovalBtn] = useState<ApprovalType>(null);
  const [approvalData, setApprovalData] = useState([...data]); // Replace `[...]` with your actual data array
  // const dividers = Array.from({ length: 9 }, (_, index) => index);
  const [openedEvent, setOpenedEvent] = useState(false);

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
        Cell: ({ cell }) => {
          const number = cell.getValue() as number;
          return (
            <Group>
              <Text>{number}</Text>
              <ActionIcon onClick={() => setOpenedEvent(true)}>
                <IconListDetails
                  color="lightgreen"
                  style={{
                    cursor: 'pointer',
                  }}
                />
              </ActionIcon>
            </Group>
          );
        },
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
        sortingFn: 'datetime',

        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: ({ cell }) => {
          return (
            <Group>
              <Text>{formatDateToCustomFormat(cell.getValue() as string)}</Text>
              <Badge>{getDayOfWeek(cell.getValue() as string)}</Badge>
            </Group>
          );
        },
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
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: true,
    enableSorting: false,
    mantineTableProps: {
      highlightOnHover: false,
      withColumnBorders: false,
    },
    renderRowActionMenuItems: () => (
      <>
        <Menu.Item onClick={() => setOpenedEvent(true)} icon={<IconEdit />}>
          Edit Timecard
        </Menu.Item>
        <Menu.Item icon={<IconTrash />}>Delete Timecard</Menu.Item>
      </>
    ),
  });
  const { classes } = useStyles();
  return (
    <Box mt="40px" sx={{ width: 'calc(100vw - 300px)' }}>
      <MantineReactTable table={table} />
      <Drawer
        opened={openedEvent}
        onClose={() => setOpenedEvent(false)}
        title="Event board"
        padding="md"
        size={IsMobileScreen() ? 'xl' : 'xl'}
        position="right"
        className={classes.drawer}
      >
        <CalendarForm setOpenedEvent={setOpenedEvent} />
      </Drawer>
    </Box>
  );
}

export default Timecard;
