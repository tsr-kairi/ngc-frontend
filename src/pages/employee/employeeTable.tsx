// lorem20

import { useEffect, useMemo, useState } from 'react';

// MRT Imports
import {
  MantineReactTable,
  MRT_ColumnDef,
  MRT_SortingState,
} from 'mantine-react-table';

// Mantine Imports
import {
  ActionIcon,
  Badge,
  Button,
  createStyles,
  Modal,
  Drawer,
  Menu,
  SegmentedControl,
  Text,
  Tooltip,
} from '@mantine/core';

// Icons Imports
import {
  IconAddressBookOff,
  IconEdit,
  IconPlus,
  IconTrash,
  IconUsersPlus,
  IconUserCircle,
} from '@tabler/icons-react';

// Mock Data
// eslint-disable-next-line import/no-cycle
import data from './mokdata';
import IsMobileScreen from '@/hooks/useIsMobileScreen';
import OnBoardNewEmployee from '../../components/form/employee/onboardNewEmployee';
import OffBoardNewEmployee from '../../components/form/employee/offboardEmployee';
// createStyles import
const useStyles = createStyles(() => ({
  drawer: {
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
}));

export type EmployeeProps = {
  uuid: string;
  lastUpdate: string;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  phone: string;
  roles: string;
};

function Employee() {
  const [isLoading, setIsLoading] = useState(true);
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  const [openedOnBoard, setOpenedOnBoard] = useState(false);
  const [openedOffBoard, setOpenedOffBoard] = useState(false);
  const [employeeType, setEmployeeType] = useState('internal');
  const [createModalOpen, setCreateModalOpen] = useState(false);

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

  const columns = useMemo<MRT_ColumnDef<EmployeeProps>[]>(
    () => [
      {
        accessorFn: (row) => new Date(row.lastUpdate),
        id: 'lastUpdate',
        header: 'Last Update',
        filterFn: 'lessThanOrEqualTo',
        sortingFn: 'datetime',
        visibleMediaQuery: aboveXsMediaQuery,
        Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(),
      },
      {
        accessorFn: (row) => `${row.name.firstName} ${row.name.lastName}`,
        accessorKey: 'name',
        header: 'Name',
        visibleMediaQuery: aboveXsMediaQuery,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        visibleMediaQuery: aboveXsMediaQuery,
      },
      {
        accessorKey: 'phone',
        header: 'Phone',
        visibleMediaQuery: aboveXsMediaQuery,
      },
      {
        accessorKey: 'roles',
        header: 'Roles',
        visibleMediaQuery: aboveXsMediaQuery,
      },
    ],
    [aboveXsMediaQuery]
  );

  return (
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
      initialState={{ showColumnFilters: false }}
      positionToolbarAlertBanner="bottom"
      editingMode="row"
      enableEditing
      enableStickyHeader
      renderRowActionMenuItems={() => (
        <>
          <Menu.Item icon={<IconUserCircle />}>View Profile</Menu.Item>
          <Menu.Item icon={<IconEdit />}>Edit Employee</Menu.Item>
          <Menu.Item icon={<IconTrash />}>Delete Employee</Menu.Item>
          <Menu.Item
            onClick={() => setOpenedOffBoard(true)}
            icon={<IconAddressBookOff />}
          >
            OffBoard Employee
          </Menu.Item>
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
              Employee
            </Text>
            <Tooltip position="right" withArrow label="Onboard Employee">
              <ActionIcon
                variant="subtle"
                onClick={() => setOpenedOnBoard(true)}
              >
                <IconPlus size="2rem" />
              </ActionIcon>
            </Tooltip>
            {!IsMobileScreen() && (
              <SegmentedControl
                size="xs"
                color="blue"
                radius="xl"
                value={employeeType}
                onChange={setEmployeeType}
                data={[
                  { label: 'Internal', value: 'internal' },
                  { label: 'External', value: 'external' },
                  { label: 'All', value: 'all' },
                ]}
              />
            )}
            {IsMobileScreen() && (
              <>
                <Tooltip position="right" withArrow label="Change Employee">
                  <ActionIcon
                    variant="subtle"
                    onClick={() => setCreateModalOpen(true)}
                  >
                    <IconUsersPlus cursor="pointer" />
                  </ActionIcon>
                </Tooltip>
                <Modal
                  title="Select Employee type"
                  opened={createModalOpen}
                  onClose={() => setCreateModalOpen(false)}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginTop: '1rem',
                    }}
                  >
                    <Badge
                      variant={employeeType === 'all' ? 'filled' : 'outline'}
                      size="lg"
                      sx={(theme) => ({
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: theme.colors.brand[4],
                          color: 'white',
                        },
                      })}
                      onClick={() => {
                        setEmployeeType('all');
                        setCreateModalOpen(false);
                      }}
                    >
                      All
                    </Badge>
                    <Badge
                      variant={
                        employeeType === 'internal' ? 'filled' : 'outline'
                      }
                      size="lg"
                      sx={(theme) => ({
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: theme.colors.brand[4],
                          color: 'white',
                        },
                      })}
                      onClick={() => {
                        setEmployeeType('internal');
                        setCreateModalOpen(false);
                      }}
                    >
                      Internal
                    </Badge>
                    <Badge
                      variant={
                        employeeType === 'external' ? 'filled' : 'outline'
                      }
                      size="lg"
                      sx={(theme) => ({
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: theme.colors.brand[4],
                          color: 'white',
                        },
                      })}
                      onClick={() => {
                        setEmployeeType('external');
                        setCreateModalOpen(false);
                      }}
                    >
                      External
                    </Badge>
                  </div>
                </Modal>
              </>
            )}
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

            {/* Onboard Employee Create Drawer */}
            <Drawer
              opened={openedOnBoard}
              onClose={() => setOpenedOnBoard(false)}
              title="Onboard Employee"
              padding="md"
              size={IsMobileScreen() ? 'xl' : 'xl'}
              position="right"
              className={classes.drawer}
            >
              <OnBoardNewEmployee setOpenedOnBoard={setOpenedOnBoard} />
            </Drawer>
            {/* OffBoard Employee Create Drawer */}
            <Drawer
              opened={openedOffBoard}
              onClose={() => setOpenedOffBoard(false)}
              title="OffBoard Employee"
              padding="md"
              size={IsMobileScreen() ? 'xl' : 'xl'}
              position="right"
              className={classes.drawer}
            >
              <OffBoardNewEmployee setOpenedOffBoard={setOpenedOffBoard} />
            </Drawer>
          </div>
        );
      }}
    />
  );
}

export default Employee;
