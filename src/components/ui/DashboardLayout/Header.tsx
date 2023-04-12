import Logo from '@/components/logo';
import { Box, Burger, Header, MediaQuery, createStyles } from '@mantine/core';
import { Link } from 'react-router-dom';
import ToggleThemeBtn from '../Buttons/ToggleThemeBtn';

const useStyles = createStyles((theme) => ({
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
            <Logo />
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <ToggleThemeBtn />
      </Box>
    </Header>
  );
}

export default DashboardHeader;
