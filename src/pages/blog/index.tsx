import { ActionIcon, Tooltip } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
  type MRT_ColumnFilterFnsState,
  type MRT_ColumnFiltersState,
  type MRT_PaginationState,
  type MRT_SortingState,
} from 'mantine-react-table';
import { useMemo, useState } from 'react';

type User = {
  isActive: boolean;
  name: {
    firstName: string;
    lastName: string;
  };
  hireDate: Date;
  age: number;
  salary: number;
  city: string;
  state: string;
};

type UserApiResponse = {
  data: Array<User>;
  meta: {
    totalRowCount: number;
  };
};

interface Params {
  columnFilterFns: MRT_ColumnFilterFnsState;
  columnFilters: MRT_ColumnFiltersState;
  globalFilter: string;
  sorting: MRT_SortingState;
  pagination: MRT_PaginationState;
}

// custom react-query hook
const useGetUsers = ({
  columnFilterFns,
  columnFilters,
  globalFilter,
  sorting,
  pagination,
}: Params) => {
  // build the URL (https://www.mantine-react-table.com/api/data?start=0&size=10&filters=[]&globalFilter=&sorting=[])
  const fetchURL = new URL('/api/data', 'http://localhost:3000');
  fetchURL.searchParams.set(
    'start',
    `${pagination.pageIndex * pagination.pageSize}`
  );
  fetchURL.searchParams.set('size', `${pagination.pageSize}`);
  fetchURL.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
  fetchURL.searchParams.set(
    'filterModes',
    JSON.stringify(columnFilterFns ?? {})
  );
  fetchURL.searchParams.set('globalFilter', globalFilter ?? '');
  fetchURL.searchParams.set('sorting', JSON.stringify(sorting ?? []));

  return useQuery<UserApiResponse>({
    queryKey: ['users', fetchURL.href], // refetch whenever the URL changes (columnFilters, globalFilter, sorting, pagination)
    queryFn: () => fetch(fetchURL.href).then((res) => res.json()),
    keepPreviousData: true, // useful for paginated queries by keeping data from previous pages on screen while fetching the next page
    staleTime: 30_000, // don't refetch previously viewed pages until cache is more than 30 seconds old
  });
};

function Blog() {
  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorFn: (originalRow) => (originalRow.isActive ? 'true' : 'false'), // must be strings
        id: 'isActive',
        header: 'Account Status',
        filterVariant: 'checkbox',
        Cell: ({ cell }) =>
          cell.getValue() === 'true' ? 'Active' : 'Inactive',
        size: 220,
      },
      {
        accessorFn: (row) => `${row.name.firstName} ${row.name.lastName}`,
        accessorKey: 'name',
        header: 'Name',
        filterVariant: 'text', // default
      },
      {
        accessorFn: (originalRow) => new Date(originalRow.hireDate), // convert to date for sorting and filtering
        id: 'hireDate',
        header: 'Hire Date',
        filterVariant: 'date-range',
        Cell: ({ cell }) => cell.getValue<Date>().toLocaleDateString(), // convert back to string for display
      },
      {
        accessorKey: 'age',
        header: 'Age',
        filterVariant: 'range',
        filterFn: 'between',
        size: 80,
      },
      {
        accessorKey: 'salary',
        header: 'Salary',
        Cell: ({ cell }) =>
          cell.getValue<number>().toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          }),
        filterVariant: 'range-slider',
        filterFn: 'betweenInclusive', // default (or between)
        mantineFilterRangeSliderProps: {
          max: 200_000, // custom max (as opposed to faceted max)
          min: 30_000, // custom min (as opposed to faceted min)
          step: 10_000,
          label: (value) =>
            value.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            }),
        },
      },
      {
        accessorKey: 'city',
        header: 'City',
        filterVariant: 'select',
      },
      {
        accessorKey: 'state',
        header: 'State',
        filterVariant: 'multi-select',
      },
    ],
    []
  );

  // Manage MRT state that we want to pass to our API
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    []
  );
  const [columnFilterFns, setColumnFilterFns] =
    useState<MRT_ColumnFilterFnsState>(
      Object.fromEntries(
        columns.map(({ accessorKey }) => [accessorKey, 'contains'])
      )
    ); // default to "contains" for all columns
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  // call our custom react-query hook
  const { data, isError, isFetching, isLoading, refetch, isSuccess } =
    useGetUsers({
      columnFilterFns,
      columnFilters,
      globalFilter,
      pagination,
      sorting,
    });

  // this will depend on your API response shape
  const fetchedUsers = data?.data ?? [];
  const totalRowCount = data?.meta?.totalRowCount ?? 0;

  const table = useMantineReactTable({
    columns,
    data: fetchedUsers,
    enableColumnFilterModes: true,
    columnFilterModeOptions: ['contains', 'startsWith', 'endsWith'],
    initialState: { showColumnFilters: true },
    manualFiltering: true,
    manualPagination: true,
    manualSorting: true,
    mantineToolbarAlertBannerProps: isError
      ? {
          color: 'red',
          children: 'Error loading data',
        }
      : undefined,
    onColumnFilterFnsChange: setColumnFilterFns,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    renderTopToolbarCustomActions: () => (
      <Tooltip label="Refresh Data">
        <ActionIcon onClick={() => refetch()}>
          <IconRefresh />
        </ActionIcon>
      </Tooltip>
    ),
    rowCount: totalRowCount,
    state: {
      columnFilterFns,
      columnFilters,
      globalFilter,
      isLoading,
      pagination,
      showAlertBanner: isError,
      showProgressBars: isFetching,
      sorting,
    },
  });

  if (isSuccess) {
    // Perform an action when the query is successful
    // eslint-disable-next-line no-console
    console.log('The data is successfully fetched');
  }

  return <MantineReactTable table={table} />;
}

const queryClient = new QueryClient();

function BlogWithReactQueryProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <Blog />
    </QueryClientProvider>
  );
}

export default BlogWithReactQueryProvider;
