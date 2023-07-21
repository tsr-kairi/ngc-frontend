import NexGLogoDarkCRM from '@/components/common/logo/LogoDark';
import NexGLogoLightCRM from '@/components/common/logo/LogoLight';
import IsMobileScreen from '@/hooks/useIsMobileScreen';
import {
  Box,
  Burger,
  Divider,
  Group,
  Header,
  MediaQuery,
  Menu,
  TextInput,
  UnstyledButton,
  createStyles,
  rem,
  useMantineColorScheme,
} from '@mantine/core';
import {
  IconChevronDown,
  IconClockFilled,
  IconSearch,
} from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LayoutSidebarIcon from '../Buttons/LayoutSidebarIcon';
import ToggleThemeBtn from '../Buttons/ToggleThemeBtn';
import TimeScheduler from '../TimeScheduler/TimeScheduler';

const useStyles = createStyles(() => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchField: {
    flex: 1,
    width: '290px',
  },
}));

interface HeaderProps {
  opened: boolean;
  setOpened: (val: boolean) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (val: boolean) => void;
}

function DashboardHeader({
  opened,
  setOpened,
  setSidebarCollapsed,
  sidebarCollapsed,
}: HeaderProps) {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  // const [opened, { toggle }] = useDisclosure(false);

  const [, setUserMenuOpened] = useState(false);

  return (
    <Header height={60} px="md" py="xl" className={classes.header}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            width: `${!sidebarCollapsed && '300px'}`,
            paddingRight: `30px`,
            justifyContent: `${
              sidebarCollapsed ? 'flex-start' : 'space-between'
            }`,
            gap: `${!IsMobileScreen() ? '32px' : '0px'}`,
          }}
        >
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened(!opened)}
              size="sm"
              mr="md"
            />
          </MediaQuery>
          <Link to="/">
            {dark ? <NexGLogoLightCRM /> : <NexGLogoDarkCRM />}
          </Link>
          <LayoutSidebarIcon
            collapsed={sidebarCollapsed}
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          />
        </Box>
        {!IsMobileScreen() && (
          <TextInput
            placeholder="Search by any field"
            icon={<IconSearch size={14} stroke={1.5} />}
            radius="xs"
            className={classes.searchField}
          />
        )}
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: `${!IsMobileScreen() ? '1rem' : '0.3rem'}`,
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
        }}
      >
        <ToggleThemeBtn />
        <Divider orientation="vertical" />

        {/*  Time Schedular */}
        <Menu
          width={360}
          position="bottom-end"
          transitionProps={{ transition: 'pop-top-right' }}
          onClose={() => setUserMenuOpened(false)}
          onOpen={() => setUserMenuOpened(true)}
          withinPortal
        >
          <Menu.Target>
            <UnstyledButton>
              <Group spacing={7}>
                <IconClockFilled size={20} stroke={1.5} />
                <IconChevronDown size={rem(12)} stroke={1.5} />
              </Group>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TimeScheduler />
          </Menu.Dropdown>
        </Menu>

        {/* <UserProfileBtn text={`${sidebarCollapsed ? '' : 'Aryan'}`} description={`${sidebarCollapsed ? '' : 'aryan@gmail.com'}`} /> */}
      </Box>
    </Header>
  );
}

export default DashboardHeader;
