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
import ToggleThemeBtn from '../Buttons/ToggleThemeBtn';
import UserProfileBtn from '../Buttons/UserProfileBtn';
import LayoutSidebarIcon from '../Buttons/LayoutSidebarIcon';

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
}

function DashboardHeader({ opened, setOpened }: HeaderProps) {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Header height={60} p="xl" className={classes.header}>
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
          <LayoutSidebarIcon />
          {!IsMobileScreen() && (
            <TextInput
              placeholder="Search by any field"
              icon={<IconSearch size={14} stroke={1.5} />}
              radius="xs"
              className={classes.searchField}
            />
          )}
        </Box>
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
        <UserProfileBtn />
      </Box>
    </Header>
  );
}

export default DashboardHeader;
