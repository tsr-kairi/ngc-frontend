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
  createStyles,
  Drawer,
  Menu,
  Modal,
  Text,
  Tooltip,
} from '@mantine/core';

// Icons Imports
import {
  IconAddressBookOff,
  IconEdit,
  IconPlus,
  IconTrash,
  IconUserCircle,
  IconUsersPlus,
} from '@tabler/icons-react';

// Mock Data
// eslint-disable-next-line import/no-cycle
import { Tab } from '@/components/common/tabs/employeeTab';
import IsMobileScreen from '@/hooks/useIsMobileScreen';
import { Link } from 'react-router-dom';
import OffBoardNewEmployee from '../../components/form/employee/offboardEmployee';
import OnBoardNewEmployee from '../../components/form/employee/onboardNewEmployee';

// eslint-disable-next-line import/no-cycle
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
  const [tabModalOpen, setTabModalOpen] = useState(false);

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
    <div
      style={{
        width: 'calc(100vw - 300px)',
      }}
    >
      <MantineReactTable
        columns={columns}
        data={data}
        enableColumnFilterModes
        enableBottomToolbar
        enableColumnOrdering
        enablePagination
        paginateExpandedRows
        enableGrouping
        enablePinning
        enableRowVirtualization
        onSortingChange={setSorting}
        state={{ isLoading, sorting }}
        enableRowNumbers
        initialState={{ showColumnFilters: false }}
        enableDensityToggle={false}
        enableRowActions
        enableStickyHeader
        positionToolbarAlertBanner="bottom"
        mantineSearchTextInputProps={{
          placeholder: `Search ${data.length} rows`,
          sx: { minWidth: '290px', paddingLeft: '10px' },
          variant: 'filled',
        }}
        renderRowActionMenuItems={() => (
          <>
            <Menu.Item
              icon={<IconUserCircle />}
              component={Link}
              to="/employee-profile"
            >
              View Profile
            </Menu.Item>
            <Menu.Item
              onClick={() => setOpenedOffBoard(true)}
              icon={<IconAddressBookOff />}
            >
              OffBoard Employee
            </Menu.Item>
            <Menu.Item icon={<IconEdit />}>Edit Employee</Menu.Item>
            <Menu.Item icon={<IconTrash />}>Delete Employee</Menu.Item>
          </>
        )}
        renderTopToolbarCustomActions={() => {
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
                <Tab onClose={() => setTabModalOpen(false)} />
              )}
              {IsMobileScreen() && (
                <>
                  <Tooltip
                    position="right"
                    withArrow
                    label="Change Employee Type"
                  >
                    <ActionIcon
                      variant="subtle"
                      onClick={() => setTabModalOpen(true)}
                    >
                      <IconUsersPlus cursor="pointer" />
                    </ActionIcon>
                  </Tooltip>
                  <Modal
                    title="Select Employee type"
                    opened={tabModalOpen}
                    onClose={() => setTabModalOpen(false)}
                  >
                    <Tab onClose={() => setTabModalOpen(false)} />
                  </Modal>
                </>
              )}
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
    </div>
  );
}

export default Employee;
