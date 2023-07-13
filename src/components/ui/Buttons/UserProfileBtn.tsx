import {
  Avatar,
  createStyles,
  Group,
  Menu,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { IconLogout, IconSettings, IconUser } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  profile: {
    display: 'block',
    width: '100%',
    paddingX: theme.spacing.xs,
    color: theme.colors.dark[0],

    '&:hover': {
      backgroundColor: theme.colors.dark[8],
    },
  },
  userProfile: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  dropD: {
    // zIndex: 10000,
  },
}));

function UserProfileBtn() {
  const { classes } = useStyles();

  return (
    <Menu position="top" trigger="click" width={200}>
      <Menu.Target>
        <UnstyledButton className={classes.profile}>
          <Group spacing="xs">
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
              alt="Avatar"
              size={28}
              radius="xl"
              color="blue"
            />
            <div style={{ flex: 1 }}>
              <Text size="sm" color="dimmed" weight={500}>
                Aryan
              </Text>

              <Text color="dimmed" size="xs">
                @gmail.com
              </Text>
            </div>
            <IconLogout style={{ color: 'blue' }} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown
        style={{
          width: '100%',
        }}
      >
        <Menu.Label>Rabin Trep</Menu.Label>
        <Menu.Divider />
        <Menu.Item
          icon={<IconSettings size={16} />}
          component={Link}
          to="/profile"
        >
          Account Settings
        </Menu.Item>

        <Menu.Item
          icon={<IconUser size={16} />}
          component={Link}
          to="/employee-profile"
        >
          Employee Profile
        </Menu.Item>

        <Menu.Item color="red" icon={<IconLogout size={16} />}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
export default UserProfileBtn;
