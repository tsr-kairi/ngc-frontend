// lorem20
import { Suspense, useEffect, useMemo, useState } from 'react';

// MRT Imports
import {
  MantineReactTable,
  MRT_ColumnDef,
  MRT_SortingState,
} from 'mantine-react-table';

// Mantine Imports
import {
  ActionIcon,
  Button,
  createStyles,
  Drawer,
  Loader,
  Menu,
  Text,
  Tooltip,
} from '@mantine/core';

// Icons Imports
import {
  IconEdit,
  IconPlus,
  IconTrash,
  IconUserCircle,
} from '@tabler/icons-react';

// Mock Data
import CalendarForm from '@/components/form/timesheet/form/calendarForm';
import IsMobileScreen from '@/hooks/useIsMobileScreen';
import data from './mokdata';

// createStyles import
const useStyles = createStyles(() => ({
  drawer: {
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
}));

export type TimesheetProps = {
  date: string;
  checkin: string;
  checkout: string;
  workHours: string;
  approvedHours: string;
  pendingHours: string;
  rejectedHours: string;
  slots: number;
  task: number | string;
  approval: 'approved' | 'rejected' | null;
  edit: number;
};

function OldTimesheet() {
  const [isLoading, setIsLoading] = useState(true);
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  const [opened, setOpened] = useState(false);

  const {
    theme: {
      breakpoints: { xs: xsBreakpoint },
    },
    classes,
  } = useStyles();
  const aboveXsMediaQuery = `(min-width: ${xsBreakpoint})`;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoading(false);
    }
  }, []);

  const columns = useMemo<MRT_ColumnDef<TimesheetProps>[]>(
    () => [
      {
        accessorFn: (row) => new Date(row.date),
        id: 'date',
        header: 'Date',
        filterFn: 'lessThanOrEqualTo',
        sortingFn: 'datetime',
        visibleMediaQuery: aboveXsMediaQuery,
        Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(),
      },
      {
        accessorKey: 'hours',
        header: 'Hours',
        visibleMediaQuery: aboveXsMediaQuery,
      },
      {
        accessorKey: 'task',
        header: 'Task',
        visibleMediaQuery: aboveXsMediaQuery,
      },
    ],
    [aboveXsMediaQuery]
  );

  return (
    <Suspense fallback={<Loader variant="dots" />}>
      <MantineReactTable
        columns={columns}
        data={data}
        enableColumnFilterModes
        enableBottomToolbar
        enableColumnOrdering
        enablePagination
        enableGrouping
        enablePinning
        enableRowVirtualization
        onSortingChange={setSorting}
        state={{ isLoading, sorting }}
        enableRowActions
        enableRowNumbers
        enableRowSelection
        enableEditing
        enableStickyHeader
        memoMode="cells"
        initialState={{ showColumnFilters: false }}
        positionToolbarAlertBanner="bottom"
        renderRowActionMenuItems={() => (
          <>
            <Menu.Item icon={<IconUserCircle />}>View Profile</Menu.Item>
            <Menu.Item icon={<IconEdit />}>Edit Timesheet</Menu.Item>
            <Menu.Item icon={<IconTrash />}>Delete Timesheet</Menu.Item>
          </>
        )}
        renderTopToolbarCustomActions={({ table }) => {
          const handleDeactivate = () => {
            // eslint-disable-next-line array-callback-return
            table.getSelectedRowModel().flatRows.map((row) => {
              // eslint-disable-next-line no-alert
              alert(`deactivating ${row.getValue('name')}`);
            });
          };

          const handleActivate = () => {
            // eslint-disable-next-line array-callback-return
            table.getSelectedRowModel().flatRows.map((row) => {
              // eslint-disable-next-line no-alert
              alert(`activating ${row.getValue('name')}`);
            });
          };

          return (
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Text size={20} weight={500}>
                Timesheet
              </Text>
              <Tooltip position="right" withArrow label="Add new timesheet">
                <ActionIcon variant="subtle" onClick={() => setOpened(true)}>
                  <IconPlus size="2rem" />
                </ActionIcon>
              </Tooltip>
              <Button
                color="red"
                size="xs"
                disabled={!table.getIsSomeRowsSelected()}
                onClick={handleDeactivate}
                variant="filled"
                sx={{ display: IsMobileScreen() ? 'none' : 'block' }}
              >
                Deactivate
              </Button>
              <Button
                color="green"
                size="xs"
                disabled={!table.getIsSomeRowsSelected()}
                onClick={handleActivate}
                variant="filled"
                sx={{ display: IsMobileScreen() ? 'none' : 'block' }}
              >
                Activate
              </Button>

              {/* Timesheet Create Drawer */}
              <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                title="Timesheet"
                padding="md"
                size={IsMobileScreen() ? 'xl' : 'xl'}
                position="right"
                className={classes.drawer}
              >
                <CalendarForm />
              </Drawer>
            </div>
          );
        }}
      />
    </Suspense>
  );
}

export default OldTimesheet;
