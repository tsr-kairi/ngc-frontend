import NexGLogoDarkCRM from '@/components/common/logo/LogoDark';
import NexGLogoLightCRM from '@/components/common/logo/LogoLight';
import IsMobileScreen from '@/hooks/useIsMobileScreen';
import {
  Box,
  Burger,
  Header,
  MediaQuery,
  createStyles,
  useMantineColorScheme,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import ToggleThemeBtn from '../Buttons/ToggleThemeBtn';
import UserProfileBtn from '../Buttons/UserProfileBtn';

const useStyles = createStyles(() => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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
            gap: `${!IsMobileScreen() ? '40px' : '0px'}`,
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
          {!IsMobileScreen() && <ToggleThemeBtn />}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <UserProfileBtn />
        {IsMobileScreen() && <ToggleThemeBtn />}
      </Box>
    </Header>
  );
}

export default DashboardHeader;
