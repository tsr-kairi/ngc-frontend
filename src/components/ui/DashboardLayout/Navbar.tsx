import NexGLogoDarkCRM from '@/components/common/logo/LogoDark';
import NexGLogoLightCRM from '@/components/common/logo/LogoLight';
import IsMobileScreen from '@/hooks/useIsMobileScreen';
import {
  ActionIcon,
  Box,
  Burger,
  createStyles,
  Group,
  MediaQuery,
  NavLink,
  rem,
  TextInput,
  useMantineColorScheme,
} from '@mantine/core';

import {
  IconActivity,
  IconBrandBlogger,
  IconCalendarTime,
  IconChevronRight,
  IconGauge,
  IconSearch,
  IconUser,
  IconUserCircle,
  IconUserPlus,
} from '@tabler/icons-react';

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LayoutSidebarIcon from '../Buttons/LayoutSidebarIcon';
import ToggleThemeBtn from '../Buttons/ToggleThemeBtn';
import UserProfileBtn from '../Buttons/UserProfileBtn';

interface HeaderProps {
  opened: boolean;
  setOpened: (val: boolean) => void;
}

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  second: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
  },
  logo: {
    marginLeft: '8px',
  },
}));

const data = [
  {
    icon: IconGauge,
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: IconUser,
    label: 'Employee',
    href: '/employee',
  },
  {
    icon: IconActivity,
    label: 'Activity',
    links: [
      {
        icon: IconUserPlus,
        label: 'Emp Onboard',
        href: '/emponboard',
      },
      {
        icon: IconBrandBlogger,
        label: 'Blog',
        href: '/blog',
      },
    ],
    rightSection: <IconChevronRight size="1rem" stroke={1.5} />,
  },
  { icon: IconCalendarTime, label: 'Timesheet', href: '/timesheet' },
];

const smallData = [
  {
    icon: IconUserCircle,
    label: 'Profile',
    href: '/profile',
  },
];

export default function Navbar({ opened, setOpened }: HeaderProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false); // Step 1: State to control sidebar visibility
  const location = useLocation();

  // color schema
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const items = data.map((item) => (
    <NavLink
      key={item.label}
      component={Link}
      to={item?.href || ''}
      active={location.pathname === `${item.href}`}
      label={sidebarCollapsed ? '' : item.label} // Show label only when the sidebar is expanded
      rightSection={sidebarCollapsed ? item.rightSection : null}
      icon={
        <ActionIcon
          variant="light"
          title={`${sidebarCollapsed ? item.label : null}`}
        >
          <item.icon
            size={sidebarCollapsed ? '1.6rem' : '1rem'} // Increase the icon size when the sidebar is collapsed
            stroke={1.5}
          />
        </ActionIcon>
      }
    >
      {item?.links?.map((subItem) => (
        <NavLink
          key={subItem.label}
          active={location.pathname === `${subItem.href}`}
          label={sidebarCollapsed ? '' : subItem.label} // Show label only when the sidebar is expanded
          component={Link}
          to={subItem?.href || ''}
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          icon={
            <ActionIcon variant="light">
              <subItem.icon
                size={sidebarCollapsed ? '1.6rem' : '1rem'} // Increase the icon size when the sidebar is collapsed
                stroke={1.5}
              />
            </ActionIcon>
          }
          mt="4px"
        />
      ))}
    </NavLink>
  ));

  const item2 = smallData.map((item) => (
    <NavLink
      key={item.label}
      active={location.pathname === `${item.href}`}
      label={sidebarCollapsed ? '' : item.label} // Show label only when the sidebar is expanded
      component={Link}
      to={item?.href || ''}
      icon={
        <ActionIcon
          variant="light"
          title={`${sidebarCollapsed ? item.label : null}`}
        >
          <item.icon
            size={sidebarCollapsed ? '1.6rem' : '1rem'} // Increase the icon size when the sidebar is collapsed
            stroke={1.5}
          />
        </ActionIcon>
      }
    />
  ));

  return (
    <Box
      w={sidebarCollapsed ? 85 : 300} // Set the width based on the sidebar state
      px="md"
      py="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <Box>
        <Group
          sx={{
            gap: `${!IsMobileScreen() ? '32px' : '0px'}`,
          }}
          position="apart"
          mb="md"
        >
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened(!opened)}
              size="sm"
              mr="md"
            />
          </MediaQuery>
          <Link to="/" className={`${sidebarCollapsed ? classes.logo : null}`}>
            {dark ? <NexGLogoLightCRM /> : <NexGLogoDarkCRM />}
          </Link>
          <Group>
            {sidebarCollapsed ? null : <ToggleThemeBtn />}
            {/* Step 3: Add button/icon to toggle the sidebar */}
            <div
              style={{
                marginLeft: `${sidebarCollapsed ? '12px' : '0px'}`,
              }}
            >
              <LayoutSidebarIcon
                collapsed={sidebarCollapsed}
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              />
            </div>
          </Group>
        </Group>
        {/* Search field */}
        <TextInput
          placeholder="Search"
          size="xs"
          icon={<IconSearch size="0.8rem" stroke={1.5} />}
          rightSectionWidth={70}
          styles={{ rightSection: { pointerEvents: 'none' } }}
          mb="sm"
          sx={{
            display: `${sidebarCollapsed ? 'none' : 'block'}`,
          }}
        />
        <Group>{items}</Group>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'column',
        }}
      >
        <Group>{item2}</Group>
        <Box
          className={classes.footer}
          sx={{ paddingLeft: `${sidebarCollapsed ? '10px' : '0px'}` }}
        >
          <UserProfileBtn
            text={`${!sidebarCollapsed ? 'Aryan' : ''}`}
            description={`${!sidebarCollapsed ? 'aryan@gmail.com' : ''}`}
          />
        </Box>
      </Box>
    </Box>
  );
}
