import IsMobileScreen from '@/hooks/useIsMobileScreen';
import {
  Box,
  Button,
  createStyles,
  Drawer,
  Pagination,
  Text,
  TextInput,
} from '@mantine/core';
import { getHotkeyHandler, useFocusWithin } from '@mantine/hooks';
import { IconPlus, IconSearch } from '@tabler/icons-react';
import { ChangeEvent, useEffect, useState } from 'react';
import EmployeeTable from './employeeTable';
import OnboardNewEmployee from './onboardNewEmployee';

const useStyles = createStyles((theme) => ({
  drawer: {
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },

  root: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1]
    }`,
  },

  active: {
    backgroundImage: theme.fn.gradient({
      from: theme.colors.brand[8],
      to: theme.colors.brand[9],
    }),
  },

  control: {
    border: '0 !important',
  },

  labelActive: {
    color: `${theme.white} !important`,
  },
}));

function Employee() {
  const [opened, setOpened] = useState(false);
  const [search, setSearch] = useState<string>('');
  const { classes } = useStyles();

  const { ref, focused } = useFocusWithin();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
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
    setSearch('');
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
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
            Employees
          </Text>
          {/* {!IsMobileScreen() && (
            <SegmentedControl
              size="xs"
              color="blue"
              radius="xl"
              classNames={classes}
              value={userType}
              onChange={setUserType}
              data={[
                { label: 'Internal', value: 'internal' },
                { label: 'External', value: 'external' },
                { label: 'All', value: 'all' },
              ]}
            />
          )} */}
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
              placeholder={focused ? 'Search for users' : 'Search... (Press /)'}
              icon={<IconSearch size={14} stroke={1.5} />}
              sx={{
                width: focused ? '25rem' : '10rem',
                transition: 'all 0.3s ease',
              }}
              ref={ref}
              size="xs"
              value={search}
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
            Onboard New Employee
          </Button>
        </Box>
      </div>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Onboard New Employee"
        padding="md"
        size={IsMobileScreen() ? 'xl' : 'md'}
        position="right"
        className={classes.drawer}
      >
        <OnboardNewEmployee setOpened={setOpened} />
      </Drawer>
      {IsMobileScreen() && (
        <TextInput
          placeholder="Search for users"
          mt="sm"
          icon={<IconSearch size={14} stroke={1.5} />}
          value={search}
          onChange={handleChange}
        />
      )}
      {/* {IsMobileScreen() && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '0.5rem',
          }}
        >
          <Badge
            variant={userType === 'all' ? 'filled' : 'outline'}
            size="lg"
            sx={(theme) => ({
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: theme.colors.brand[4],
                color: 'white',
              },
            })}
            onClick={() => setUserType('all')}
          >
            All
          </Badge>
          <Badge
            variant={userType === 'internal' ? 'filled' : 'outline'}
            size="lg"
            sx={(theme) => ({
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: theme.colors.brand[4],
                color: 'white',
              },
            })}
            onClick={() => setUserType('internal')}
          >
            Internal
          </Badge>
          <Badge
            variant={userType === 'external' ? 'filled' : 'outline'}
            size="lg"
            sx={(theme) => ({
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: theme.colors.brand[4],
                color: 'white',
              },
            })}
            onClick={() => setUserType('external')}
          >
            External
          </Badge>
        </Box>
      )} */}

      <EmployeeTable />
      <Pagination
        // page={activePage}
        onChange={() => {
          // setPage(page);
          // setSkip((page - 1) * 25);
        }}
        // total={usersData ? usersData.data.pages : 1}
        size="xs"
        position="right"
        mt={5}
        mb={-5}
        total={0}
      />
    </div>
  );
}

export default Employee;
