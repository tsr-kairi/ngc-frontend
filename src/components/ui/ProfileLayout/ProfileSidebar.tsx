import { ActionIcon, Avatar, Box, NavLink, Text } from '@mantine/core';
import {
  Icon2fa,
  IconBackpack,
  IconDatabaseImport,
  IconFingerprint,
  IconKey,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const tabs = [
  { link: '/profile/personal', label: 'Personal', icon: IconUser },
  { link: '/profile/education', label: 'Education', icon: IconBackpack },
  { link: '/profile/experience', label: 'Professional', icon: IconFingerprint },
  { link: '', label: 'Banking', icon: IconKey },
  { link: '', label: 'Address', icon: IconDatabaseImport },
  { link: '', label: 'Documents', icon: Icon2fa },
  { link: '', label: 'Skills', icon: IconSettings },
  { link: '', label: 'Settings', icon: IconSettings },
];

function ProfileSidebar() {
  const [itemActive, setItemActive] = useState(0);
  const location = useLocation();

  const currentTabIndex = tabs.findIndex(
    (tab) => tab.link === location.pathname
  );

  // If the current location is found and different from the active item, update the active item
  if (currentTabIndex !== -1 && currentTabIndex !== itemActive) {
    setItemActive(currentTabIndex);
  }
  const items = tabs.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === itemActive}
      label={item.label}
      href={item.link}
      py="md"
      component="a"
      style={{ borderRadius: '5px' }}
      icon={
        <ActionIcon variant="light">
          <item.icon size="1rem" stroke={1.5} />
        </ActionIcon>
      }
      onClick={() => setItemActive(index)}
    />
  ));
  return (
    <div
      style={{
        height: '100%',
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          height: '250px',
          width: '100%',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
          alt="Avatar"
          size="xl"
          radius="xl"
          color="blue"
        />

        <Text weight={500} mt="md">
          Jsoidhio
        </Text>

        <Text size="sm" color="dimmed">
          UI/UX Designer
        </Text>
      </Box>
      <Box
        py="lg"
        px="sm"
        sx={{
          flex: 1,
          width: '100%',
          backgroundColor: 'white',
          paddingTop: '20px',
        }}
      >
        {items}
      </Box>
    </div>
  );
}

export default ProfileSidebar;
