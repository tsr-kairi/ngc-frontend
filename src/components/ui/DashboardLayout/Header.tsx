import NexGLogoDarkCRM from '@/components/common/logo/LogoDark';
import NexGLogoLightCRM from '@/components/common/logo/LogoLight';
import IsMobileScreen from '@/hooks/useIsMobileScreen';
import {
  Box,
  Burger,
  Divider,
  Header,
  MediaQuery,
  TextInput,
  createStyles,
  useMantineColorScheme,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import LayoutSidebarIcon from '../Buttons/LayoutSidebarIcon';
import ToggleThemeBtn from '../Buttons/ToggleThemeBtn';

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
        {/* <UserProfileBtn text={`${sidebarCollapsed ? '' : 'Aryan'}`} description={`${sidebarCollapsed ? '' : 'aryan@gmail.com'}`} /> */}
      </Box>
    </Header>
  );
}

export default DashboardHeader;
