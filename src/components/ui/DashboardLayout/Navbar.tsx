import { createStyles, Navbar, ScrollArea } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import {
  IconAdjustments,
  IconCalendarStats,
  IconFileAnalytics,
  IconGauge,
  IconLock,
  IconNotes,
  IconPresentationAnalytics,
} from '@tabler/icons-react';
import LinksGroup from './NavbarLinksGroup';

interface Props {
  navbarOpen: boolean;
  setNavbarOpen: (value: boolean) => void;
}

const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Market news',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.white,
    borderBottom: `1px solid ${theme.colors.gray[3]}`,
    cursor: 'default',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: 'none',
    },
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },
  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
}));

function DashboardNavbar({ navbarOpen, setNavbarOpen }: Props) {
  const { classes } = useStyles();
  const { height } = useViewportSize();
  const headerVisible = useMediaQuery('(max-width: 768px)');

  const links = mockdata.map((item) => {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <LinksGroup {...item} key={item.label} setNavbarOpen={setNavbarOpen} />
    );
  });

  return (
    <Navbar
      height={headerVisible ? height - 60 : height}
      hiddenBreakpoint="sm"
      hidden={!navbarOpen}
      width={{ sm: 250 }}
      p="md"
      className={classes.navbar}
    >
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
    </Navbar>
  );
}

export default DashboardNavbar;
