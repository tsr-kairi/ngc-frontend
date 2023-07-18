import { ActionIcon, Avatar, Box, NavLink, Text } from '@mantine/core';
import {
  Icon2fa,
  IconBackpack,
  IconDatabaseImport,
  IconKey,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';
import { useState } from 'react';

const tabs = [
  { link: '/profile/personal', label: 'Personal', icon: IconUser },
  { link: '/profile/education', label: 'Education', icon: IconBackpack },
  // { link: '/profile/', label: 'Professional', icon: IconFingerprint },
  { link: '/profile/banking', label: 'Banking', icon: IconKey },
  { link: '/profile/address', label: 'Address', icon: IconDatabaseImport },
  { link: '/profile/documents', label: 'Documents', icon: Icon2fa },
  { link: '/profile/experience', label: 'Experience', icon: IconSettings },
  // { link: '/profile/', label: 'Settings', icon: IconSettings },
];

function ProfileSidebar() {
  const [itemActive, setItemActive] = useState(0);

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
    <Box
      sx={{
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
    </Box>
  );
}

export default ProfileSidebar;
