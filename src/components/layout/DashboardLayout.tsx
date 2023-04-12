import { AppShell, Navbar, Text } from '@mantine/core';
import { useState } from 'react';
import DashboardHeader from '../ui/DashboardLayout/Header';

function DashbordLayout() {
  const [opened, setOpened] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <AppShell
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      // navbar={
      //   <DashboardNavbar
      //     navbarOpen={navbarOpen}
      //     setNavbarOpen={setNavbarOpen}
      //   />
      // }
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Text>Application navbar</Text>
        </Navbar>
      }
      header={<DashboardHeader opened={opened} setOpened={setOpened} />}
    >
      <Text>Protected pages gose here...</Text>
    </AppShell>
  );
}
export default DashbordLayout;
