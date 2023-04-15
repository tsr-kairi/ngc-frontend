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

interface UserProfileProps {
  name: string;
  varient: 'mobile' | 'desktop';
}

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

function UserProfileBtn({ name, varient }: UserProfileProps) {
  const { classes } = useStyles();

  if (varient === 'mobile') {
    return (
      <Menu position="top">
        <Menu.Target>
          <Group spacing={4} className={classes.userProfile}>
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
              alt={name}
              size="sm"
              radius="xl"
              color="blue"
            />
            <div>
              <Text
                size="md"
                weight={500}
                sx={(theme) => ({
                  color:
                    theme.colorScheme === 'dark'
                      ? theme.colors.gray[1]
                      : theme.colors.dark[6],
                })}
              >
                Rabin Trep
              </Text>
            </div>
          </Group>
        </Menu.Target>
        <Menu.Dropdown className={classes.dropD}>
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
  if (varient === 'desktop') {
    return (
      <Menu position="top" trigger="click" width={200}>
        <Menu.Target>
          {/* <Group spacing="xs" className={classes.profile} p={4}>
            <Avatar src={image} alt={name} radius="xl" size="sm" color={'teal'}>
              {getInitials(name)}
            </Avatar>
            <div>
              <Text
                size="md"
                color={'cyan'}
                weight={500}
                sx={(theme) => ({
                  color:
                    theme.colorScheme === 'dark'
                      ? theme.colors.gray[1]
                      : theme.colors.dark[6],
                })}
              >
                {name}
              </Text>
            </div>
          </Group> */}
          <UnstyledButton className={classes.profile}>
            <Group spacing="xs">
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
                alt={name}
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
    );
  }
  return null;
}
export default UserProfileBtn;
