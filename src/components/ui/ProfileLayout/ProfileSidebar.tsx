import { ActionIcon, Avatar, Box, NavLink, Text } from '@mantine/core';
import {
  Icon2fa,
  IconBellRinging,
  IconDatabaseImport,
  IconFingerprint,
  IconKey,
  IconReceipt2,
  IconSettings,
} from '@tabler/icons-react';
import { useState } from 'react';

const tabs = [
  { link: '', label: 'Notifications', icon: IconBellRinging },
  { link: '', label: 'Billing', icon: IconReceipt2 },
  { link: '', label: 'Security', icon: IconFingerprint },
  { link: '', label: 'SSH Keys', icon: IconKey },
  { link: '', label: 'Databases', icon: IconDatabaseImport },
  { link: '', label: 'Authentication', icon: Icon2fa },
  { link: '', label: 'Other Settings', icon: IconSettings },
];

function ProfileSidebar() {
  const [itemActive, setItemActive] = useState(0);

  const items = tabs.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === itemActive}
      label={item.label}
      href={item.link}
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
    <div style={{ height: '100%', width: '250px' }}>
      <Box
        sx={{
          height: '210px',
          width: '210px',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginBottom: '10px',
          paddingLeft: '60px',
          paddingRight: '30px',
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
        sx={{
          height: '100%',
          width: '210px',
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
