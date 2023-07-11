// import { Box, NavLink } from '@mantine/core';
// import { IconFingerprint, IconGauge } from '@tabler/icons-react';
// import { useState } from 'react';

// export default function NavbarNew(index: 0) {
//   const [active, setActive] = useState(0);
//   return (
//     <Box
//       w={240}
//       sx={{
//         marginTop: '100px',
//       }}
//     >
//       <NavLink
//         component="a"
//         href="/"
//         label="Dashboard"
//         icon={<IconGauge size="1rem" stroke={1.5} />}
//         active={index === active}
//         onClick={() => setActive(index)}
//       />
//       <NavLink
//         label="First parent link"
//         icon={<IconGauge size="1rem" stroke={1.5} />}
//         childrenOffset={28}
//       >
//         <NavLink component="a" href="/employee-profile" label="Employee" />
//         <NavLink component="a" href="/home" label="Second child link" />
//         <NavLink
//           component="a"
//           href="/home"
//           label="Nested parent link"
//           childrenOffset={28}
//         >
//           <NavLink component="a" href="/home" label="First child link" />
//           <NavLink component="a" href="/home" label="Second child link" />
//           <NavLink component="a" href="/home" label="Third child link" />
//         </NavLink>
//       </NavLink>

//       <NavLink
//         label="Second parent link"
//         icon={<IconFingerprint size="1rem" stroke={1.5} />}
//         childrenOffset={28}
//         defaultOpened
//       >
//         <NavLink component="a" href="/home" label="First child link" />
//         <NavLink component="a" href="/home" label="Second child link" />
//         <NavLink component="a" href="/home" label="Third child link" />
//       </NavLink>
//     </Box>
//   );
// }

import { ActionIcon, Box, NavLink } from '@mantine/core';
import {
  IconActivity,
  IconBrandBlogger,
  IconCalendarTime,
  IconChevronRight,
  IconGauge,
  IconUser,
  IconUserPlus,
} from '@tabler/icons-react';

import { useState } from 'react';

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

export default function Navbar() {
  const [itemActive, setItemActive] = useState(0);
  const [subItemActive, setSubItemActive] = useState(0);

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

  return (
    <Box w={300} px="md" sx={{ marginTop: '80px' }}>
      {items}
    </Box>
  );
}
