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
  IconSwitchHorizontal,
  IconUser,
  IconUserPlus,
} from '@tabler/icons-react';

import { useState } from 'react';
import { Link } from 'react-router-dom';
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
    icon: IconSwitchHorizontal,
    label: 'Profile',
    href: '/profile',
  },
];

export default function Navbar({ opened, setOpened }: HeaderProps) {
  const [itemActive, setItemActive] = useState(0);
  const [subItemActive, setSubItemActive] = useState(0);

  // color schema
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === itemActive}
      label={item.label}
      href={item.href}
      component="a"
      rightSection={item.rightSection}
      icon={
        <ActionIcon variant="light">
          <item.icon size="1rem" stroke={1.5} />
        </ActionIcon>
      }
      onClick={() => setItemActive(index)}
    >
      {item?.links?.map((subItem) => (
        <NavLink
          key={subItem.label}
          active={index === subItemActive}
          label={subItem.label}
          href={subItem.href}
          icon={
            <ActionIcon variant="light">
              <subItem.icon size="1rem" stroke={1.5} />
            </ActionIcon>
          }
          component="a"
          onClick={() => setSubItemActive(index)}
          mt="4px"
        />
      ))}
    </NavLink>
  ));

  const item2 = smallData.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === itemActive}
      label={item.label}
      href={item.href}
      component="a"
      icon={
        <ActionIcon variant="light">
          <item.icon size="1rem" stroke={1.5} />
        </ActionIcon>
      }
      onClick={() => setItemActive(index)}
    />
  ));

  return (
    <Box
      w={300}
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
          <Link to="/">
            {dark ? <NexGLogoLightCRM /> : <NexGLogoDarkCRM />}
          </Link>
          {/* <LayoutSidebarIcon /> */}
          <ToggleThemeBtn />
        </Group>
        <TextInput
          placeholder="Search"
          size="xs"
          icon={<IconSearch size="0.8rem" stroke={1.5} />}
          rightSectionWidth={70}
          styles={{ rightSection: { pointerEvents: 'none' } }}
          mb="sm"
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
        <Box className={classes.footer}>
          <UserProfileBtn />
        </Box>
      </Box>
    </Box>
  );
}
