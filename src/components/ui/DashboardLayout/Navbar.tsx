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
  ScrollArea,
} from '@mantine/core';

import {
  IconActivity,
  IconBrandBlogger,
  IconBuildingBank,
  IconCalendarTime,
  IconCoins,
  IconDoorExit,
  IconGauge,
  IconReceipt,
  IconReceiptTax,
  IconSubtask,
  IconTransferOut,
  IconUser,
  IconUserCircle,
  IconUserPlus,
  IconWallet,
} from '@tabler/icons-react';

import { Link, useLocation } from 'react-router-dom';
import UserProfileBtn from '../Buttons/UserProfileBtn';

interface HeaderProps {
  opened: boolean;
  setOpened: (val: boolean) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (val: boolean) => void;
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
    // rightSection: <IconUser size="1rem" stroke={1.5} />,
  },
  { icon: IconCalendarTime, label: 'Timesheet', href: '/timesheet' },
  { icon: IconCalendarTime, label: 'Timesheet', href: '/timetable' },
  {
    icon: IconDoorExit,
    label: 'Leave',
    links: [
      {
        icon: IconSubtask,
        label: 'Leave Management',
        href: '/leave-management',
      },
      {
        icon: IconTransferOut,
        label: 'Leave Transaction',
        href: '/leave-transaction',
      },
    ],
    // rightSection: <IconUser size="1rem" stroke={1.5} />,
  },
  {
    icon: IconWallet,
    label: 'Salary',
    links: [
      {
        icon: IconReceipt,
        label: 'Payslip',
        href: '/salary-payslip',
      },
      {
        icon: IconCoins,
        label: 'Salary Revision',
        href: '/salary-revision',
      },
      {
        icon: IconReceiptTax,
        label: 'Salary Revision Details',
        href: '/salary-revision-view',
      },
      {
        icon: IconBuildingBank,
        label: 'Salary Loan',
        href: '/salary-loan',
      },
    ],
    // rightSection: <IconUser size="1rem" stroke={1.5} />,
  },
];

const smallData = [
  {
    icon: IconUserCircle,
    label: 'Profile',
    href: '/profile',
  },
];

export default function Navbar({
  opened,
  setOpened,
  sidebarCollapsed,
  setSidebarCollapsed,
}: HeaderProps) {
  // const [sidebarCollapsed, setSidebarCollapsed] = useState(false); // Step 1: State to control sidebar visibility
  const location = useLocation();

  // color schema
  const { classes } = useStyles();
  // const { colorScheme } = useMantineColorScheme();
  // const dark = colorScheme === 'dark';

  const items = data.map((item) => (
    <NavLink
      key={item.label}
      component={Link}
      to={item?.href || ''}
      active={location.pathname === `${item.href}`}
      label={sidebarCollapsed ? '' : item.label} // Show label only when the sidebar is expanded
      onClick={() => setSidebarCollapsed(false)}
      // rightSection={sidebarCollapsed && item.rightSection}
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
      onClick={() => setSidebarCollapsed(false)}
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
      px="md"
      sx={{
        height: '100vh',
        overflowY: 'hidden',
        position: 'relative',
        '&::-webkit-scrollbar': {
          width: '60px',
        },
      }}
      w={sidebarCollapsed ? 85 : 300} // Set the width based on the sidebar state
    >
      <ScrollArea
        type="never"
        style={{
          height: 'calc(100vh - 10vh)',
        }}
      >
        <Box
          py="lg"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 100,
          }}
        >
          <Box>
            <Group
              sx={{
                gap: `${!IsMobileScreen() ? '32px' : '0px'}`,
                marginTop: '40px',
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
            </Group>
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
          </Box>
        </Box>
      </ScrollArea>
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
  );
}
