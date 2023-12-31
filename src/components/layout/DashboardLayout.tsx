import { AppShell, ScrollArea } from '@mantine/core';
import { useNetwork } from '@mantine/hooks';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// import DashboardHeader from '../ui/DashboardLayout/Header';
import DashboardHeader from '../ui/DashboardLayout/Header';
import Navbar from '../ui/DashboardLayout/Navbar';

function DashboardLayout() {
  const [opened, setOpened] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { online } = useNetwork();

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
      navbar={
        // <div hidden={opened}>
        <Navbar
          opened={opened}
          setOpened={setOpened}
          setSidebarCollapsed={setSidebarCollapsed}
          sidebarCollapsed={sidebarCollapsed}
        />
        // </div>
      }
      header={
        <div hidden={opened}>
          <DashboardHeader
            opened={opened}
            setOpened={setOpened}
            sidebarCollapsed={sidebarCollapsed}
            setSidebarCollapsed={setSidebarCollapsed}
          />
        </div>
      }
    >
      {online ? (
        <ScrollArea
          type="never"
          style={{
            width: `${!sidebarCollapsed ? 'calc(100vw - 300px)' : '94vw'}`,
            maxWidth: 'calc(100vw - 10vw)',
            height: 'calc(100vh - 95px)',
          }}
        >
          <Outlet />
        </ScrollArea>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <p style={{ fontSize: '40px', opacity: 0.5 }}>You are offline</p>
        </div>
      )}
    </AppShell>
  );
}
export default DashboardLayout;
