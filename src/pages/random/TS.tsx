import {
  ActionIcon,
  Box,
  Button,
  Text,
  Group,
  TextInput,
  createStyles,
  Drawer,
} from '@mantine/core';
import { IconEdit, IconPlus, IconSearch, IconTrash } from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { ChangeEvent, useEffect, useState } from 'react';
import {
  getHotkeyHandler,
  useDebouncedValue,
  useFocusWithin,
} from '@mantine/hooks';
import dayjs from 'dayjs';
import IsMobileScreen from '@/hooks/useIsMobileScreen';
import TimesheetForm from '@/components/form/timesheet/createForm';
import TimesheetData from './mokdata';

const useStyles = createStyles(() => ({
  drawer: {
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
}));

const PAGE_SIZE = 7;

export default function Timesheet() {
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(TimesheetData.slice(0, PAGE_SIZE));
  const [query, setQuery] = useState('');
  const [opened, setOpened] = useState(false);
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: 'slNo',
    direction: 'asc',
  });
  const { ref, focused } = useFocusWithin();

  const [debouncedQuery] = useDebouncedValue(query, 200);

  useEffect(() => {
    setRecords(
      records.filter(({ slNo, date, hours, task }) => {
        if (
          debouncedQuery !== '' &&
          !`${slNo} ${date} ${hours} ${task}`
            .toLowerCase()
            .includes(debouncedQuery.trim().toLowerCase())
        ) {
          return false;
        }
        return true;
      })
    );
  }, [debouncedQuery, records]);

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(TimesheetData.slice(from, to));
  }, [page]);

  const handleSortStatusChange = (status: DataTableSortStatus) => {
    setPage(1);
    setSortStatus(status);
  };

  // search esc
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    document.addEventListener(
      'keydown',
      (e) => {
        if (e.key === 'Escape') {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          ref.current?.blur();
        }
        if (e.key === '/') {
          e.preventDefault();
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          ref.current?.focus();
        }
      },
      true
    );
  }, [ref]);
  const handleClearSearch = () => {
    setQuery('');
  };

  const { isFetching } = useQuery(
    ['timesheet', sortStatus.columnAccessor, sortStatus.direction, page],
    // async () => records({ recordsPerPage: PAGE_SIZE, page, sortStatus }),
    { refetchOnWindowFocus: false }
  );

  const {
    theme: {
      breakpoints: { xs: xsBreakpoint },
    },
    classes,
  } = useStyles();
  const aboveXsMediaQuery = `(min-width: ${xsBreakpoint})`;

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <Text size={20} weight={500}>
            Timesheet
          </Text>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
          }}
        >
          {!IsMobileScreen() && (
            <TextInput
              placeholder={
                focused ? 'Search for timesheet' : 'Search... (Press /)'
              }
              icon={<IconSearch size={14} stroke={1.5} />}
              sx={{
                width: focused ? '25rem' : '10rem',
                transition: 'all 0.3s ease',
              }}
              ref={ref}
              size="xs"
              value={query}
              onChange={handleChange}
              radius="xl"
              onKeyDown={getHotkeyHandler([['Escape', handleClearSearch]])}
            />
          )}
          <Button
            sx={(theme) => ({
              backgroundColor: theme.colors.brand[9],
            })}
            leftIcon={<IconPlus size={14} />}
            size="xs"
            onClick={() => setOpened(true)}
          >
            Add new timesheet
          </Button>
        </Box>
      </div>
      {IsMobileScreen() && (
        <TextInput
          placeholder="Search for timesheet"
          my="sm"
          icon={<IconSearch size={14} stroke={1.5} />}
          ref={ref}
          size="xs"
          value={query}
          onChange={handleChange}
          radius="xl"
          onKeyDown={getHotkeyHandler([['Escape', handleClearSearch]])}
        />
      )}
      <DataTable
        columns={[
          {
            accessor: 'slNo',
            ellipsis: true,
            sortable: true,
          },
          {
            accessor: 'date',
            ellipsis: true,
            sortable: true,
            visibleMediaQuery: aboveXsMediaQuery,
            render: ({ date }) => dayjs(date).format('MMM DD YYYY'),
          },
          {
            accessor: 'hours',
            ellipsis: true,
            sortable: true,
            visibleMediaQuery: aboveXsMediaQuery,
          },
          {
            accessor: 'task',
            ellipsis: true,
            sortable: true,
            visibleMediaQuery: aboveXsMediaQuery,
            // render: ({ birthDate }) => dayjs(birthDate).format('MMM DD YYYY'),
          },
          {
            accessor: 'actions',
            title: 'Action',
            textAlignment: 'right',
            render: () => (
              <Group spacing={4} position="right" noWrap>
                <ActionIcon
                  color="blue"
                  //   onClick={(e: MouseEvent) => {
                  //     e.stopPropagation();
                  //     editInfo(company);
                  //   }}
                >
                  <IconEdit size={16} />
                </ActionIcon>
                <ActionIcon
                  color="red"
                  //   onClick={(e: MouseEvent) => {
                  //     e.stopPropagation();
                  //     deleteCompany(company);
                  //   }}
                >
                  <IconTrash size={16} />
                </ActionIcon>
              </Group>
            ),
          },
        ]}
        records={records}
        borderRadius="sm"
        withBorder
        highlightOnHover
        verticalAlignment="top"
        fetching={isFetching}
        // ! pagination props
        page={page}
        totalRecords={TimesheetData.length}
        recordsPerPage={PAGE_SIZE}
        onPageChange={(p) => setPage(p)}
        // ! sorting props
        sortStatus={sortStatus}
        onSortStatusChange={handleSortStatusChange}
        loaderVariant="oval"
        loaderSize="lg"
        rowBorderColor={(theme) =>
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[1]
        }
        borderColor={(theme) =>
          theme.colorScheme === 'dark'
            ? theme.colors.dark[5]
            : theme.colors.gray[1]
        }
      />
      {/* Timesheet Create Drawer */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add new timesheet"
        padding="md"
        size={IsMobileScreen() ? 'xl' : 'xl'}
        position="right"
        className={classes.drawer}
      >
        <TimesheetForm setOpened={setOpened} />
      </Drawer>
    </>
  );
}
