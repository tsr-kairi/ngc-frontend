import { useEffect, useMemo, useState } from 'react';

// MRT Imports
import {
  MantineReactTable,
  MRT_ColumnDef,
  MRT_SortingState,
} from 'mantine-react-table';

// Mantine Imports
import { Box, Button, Menu } from '@mantine/core';

// Date Picker Imports
import { DatePickerInput } from '@mantine/dates';

// Icons Imports
import { IconEdit, IconTrash, IconUserCircle } from '@tabler/icons-react';

// Mock Data
// eslint-disable-next-line import/no-cycle
import data from './mokdata';

export type Employee = {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  salary: number;
  startDate: string;
  avatar: string;
};

function Employees() {
  const [isLoading, setIsLoading] = useState(true);
  const [sorting, setSorting] = useState<MRT_SortingState>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoading(false);
    }
  }, []);

  const columns = useMemo<MRT_ColumnDef<Employee>[]>(
    () => [
      {
        id: 'employee', // id used to define `group` column
        header: '',
        columns: [
          {
            accessorFn: (row) => `${row.firstName} ${row.lastName}`, // accessorFn used to join multiple data into a single cell
            id: 'name', // id is still required when using accessorFn instead of accessorKey
            header: 'Name',
            // size: 250,
            // eslint-disable-next-line react/no-unstable-nested-components, react/prop-types
            Cell: ({ renderedCellValue, row }) => (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <img
                  alt="avatar"
                  height={30}
                  // eslint-disable-next-line react/prop-types
                  src={row.original.avatar}
                  style={{ borderRadius: '50%' }}
                />
                <span>{renderedCellValue}</span>
              </Box>
            ),
          },
          {
            accessorKey: 'email', // accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            header: 'Email',
            // size: 300,
          },
          {
            accessorKey: 'jobTitle', // hey a simple column for once
            header: 'Job Title',
            // size: 350,
          },
          {
            accessorFn: (row) => new Date(row.startDate), // convert to Date for sorting and filtering
            id: 'startDate',
            header: 'Start Date',
            filterFn: 'lessThanOrEqualTo',
            sortingFn: 'datetime',
            Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(), // render Date as a string
            // eslint-disable-next-line react/no-unstable-nested-components, react/prop-types
            Header: ({ column }) => <em>{column.columnDef.header}</em>, // custom header markup
            // Custom Date Picker Filter from @mantine/dates
            // eslint-disable-next-line react/no-unstable-nested-components, react/prop-types
            Filter: ({ column }) => (
              <DatePickerInput
                placeholder="Filter by Start Date"
                onChange={(newValue: Date) => {
                  // eslint-disable-next-line react/prop-types
                  column.setFilterValue(newValue);
                }}
                // eslint-disable-next-line react/prop-types
                value={column.getFilterValue() as Date}
                modalProps={{ withinPortal: true }}
              />
            ),
          },
        ],
      },
    ],
    []
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
      onSortingChange={setSorting}
      state={{ isLoading, sorting }}
      enableRowActions
      enableRowNumbers
      enableRowSelection
      initialState={{ showColumnFilters: false }}
      positionToolbarAlertBanner="bottom"
      renderRowActionMenuItems={() => (
        <>
          <Menu.Item icon={<IconUserCircle />}>View Profile</Menu.Item>
          <Menu.Item icon={<IconEdit />}>Edit Employee</Menu.Item>
          <Menu.Item icon={<IconTrash />}>Delete Employee</Menu.Item>
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
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button
              color="red"
              disabled={!table.getIsSomeRowsSelected()}
              onClick={handleDeactivate}
              variant="filled"
            >
              Deactivate
            </Button>
            <Button
              color="green"
              disabled={!table.getIsSomeRowsSelected()}
              onClick={handleActivate}
              variant="filled"
            >
              Activate
            </Button>
          </div>
        );
      }}
    />
  );
}

export default Employees;
