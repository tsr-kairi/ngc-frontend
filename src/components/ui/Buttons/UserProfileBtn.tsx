import IsMobileScreen from '@/hooks/useIsMobileScreen';
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
    padding: theme.spacing.xs,
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
    <>
      {IsMobileScreen() && (
        <Menu position="top" trigger="click" width={200}>
          <Menu.Target>
            <UnstyledButton className={classes.profile}>
              <Group spacing="xs">
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
                  alt="Avatar"
                  size={32}
                  radius="xl"
                  color="blue"
                />
              </Group>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown
            style={{
              width: '100%',
            }}
          >
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
      )}

      {!IsMobileScreen() && (
        <Menu position="top" trigger="click" width={200}>
          <Menu.Target>
            <UnstyledButton className={classes.profile}>
              <Group spacing="xs">
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
                  alt="Avatar"
                  size={32}
                  radius="xl"
                  color="blue"
                />

                <div style={{ flex: 1 }}>
                  <Text size="sm" weight={500}>
                    Rabin Trep
                  </Text>

                  <Text size={11}>rabintrep@gmail.com</Text>
                </div>
              </Group>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown
            style={{
              width: '100%',
            }}
          >
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
      )}
    </>
  );
}
export default UserProfileBtn;
