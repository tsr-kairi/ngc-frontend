import { AppShell } from '@mantine/core';
import { useNetwork } from '@mantine/hooks';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardHeader from '../ui/DashboardLayout/Header';
import Navbar from '../ui/DashboardLayout/Navbar';

function DashboardLayout() {
  const [opened, setOpened] = useState(false);
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
        <div hidden={opened}>
          <Navbar />
        </div>
      }
      header={<DashboardHeader opened={opened} setOpened={setOpened} />}
    >
      {online ? (
        <div>
          <Outlet />
        </div>
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