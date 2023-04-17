import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Divider,
  Menu,
  Text,
  Tooltip,
  UnstyledButton,
  createStyles,
} from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconChevronsRight,
  IconDotsVertical,
} from '@tabler/icons-react';

import IsMobileScreen from '@/hooks/useIsMobileScreen';
import { useNavigate } from 'react-router-dom';
import EmployeeUserProfileList from './employeeUserProfileList';

const useStyles = createStyles((theme) => ({
  paper: {
    justifyContent: 'space-between',
  },
  main: {
    margin: 'auto',
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.dark[2]
    }`,
    borderRadius: '8px',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[8]
        : theme.colors.dark[0],
  },
  profileContent: {
    display: 'flex',
    flexDirection: `${!IsMobileScreen() ? 'inherit' : 'column'}`,
    gap: '20px',
  },
  profileContentInner: {
    display: 'flex',
    textAlign: 'left',
    gap: `${IsMobileScreen() ? '10px' : '20px'}`,
  },
}));
export default function EmployeeUserProfile() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.main}>
      <Box p="lg" className={classes.paper}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box className={classes.profileContent}>
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
              size={100}
              radius={100}
              mx="auto"
            />
            <Box className={classes.profileContentInner}>
              <Box
                sx={{
                  textAlign: 'left',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <Text ta="left" fz="xl" weight={500}>
                    Rabin Trep
                  </Text>
                  <Badge radius="xs" color="green">
                    Active
                  </Badge>
                </Box>
                <Text ta="left" c="dimmed" fz="sm">
                  Design Team | UI Designer
                </Text>
                <Box
                  sx={{
                    display: 'flex',
                    marginLeft: '0',
                  }}
                >
                  <ActionIcon variant="transparent">
                    <IconBrandLinkedin size="1rem" />
                  </ActionIcon>
                  <ActionIcon variant="transparent">
                    <IconBrandTwitter size="1rem" />
                  </ActionIcon>
                  <ActionIcon variant="transparent">
                    <IconBrandInstagram size="1rem" />
                  </ActionIcon>
                </Box>
              </Box>
              <Divider orientation="vertical" />
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gapX: '10px' }}
              >
                <Box sx={{ display: 'flex', gap: '10px' }}>
                  <Text c="dimmed">Date of joining :</Text>
                  <Text fw={500}>02/12/2020</Text>
                </Box>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                  <Text c="dimmed">Reported To :</Text>
                  <Text fw={500}>Ravish Jain</Text>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box>
            <Menu width={150} position="right-start" offset={0}>
              <Menu.Target>
                <UnstyledButton>
                  <Tooltip label="Action" color="blue" withArrow>
                    <IconDotsVertical size={16} cursor="pointer" />
                  </Tooltip>
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  icon={<IconChevronsRight size={14} />}
                  // className={classes.menuItem}
                  onClick={() => navigate(-1)}
                >
                  Go Back
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: '20px',
        }}
      >
        <EmployeeUserProfileList />
      </Box>
    </div>
  );
}
