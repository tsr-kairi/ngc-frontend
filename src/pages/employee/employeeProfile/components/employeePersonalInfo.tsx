import {
  Badge,
  Box,
  Container,
  createStyles,
  Divider,
  Grid,
  Text,
} from '@mantine/core';
import { IconEdit } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  main: {
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.dark[2]
    }`,
    borderRadius: '8px',
    BorderRadius: '8px',
    marginTop: '10px',
  },
  editIcon: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.dark[4],

    '&:hover': {
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[0]
          : theme.colors.dark[5],
    },
  },
}));

export default function EmployeePersonalInfo() {
  const { classes } = useStyles();

  return (
    <div className={classes.main}>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          <Text>Personal Information</Text>
          <Text sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            Edit Info
            <IconEdit className={classes.editIcon} cursor="pointer" />
          </Text>
        </Box>
        <Divider />
        <Box
          sx={{
            paddingTop: '10px',
            paddingBottom: '10px',
          }}
        >
          <Container fluid>
            <Grid gutter={10} sx={{ gap: '0px' }}>
              <Grid.Col sm={3} lg={2} span={4}>
                <Text c="dimmed">Name</Text>
                <Text fw={500}>Rabin Trep</Text>
              </Grid.Col>
              <Grid.Col sm={3} lg={2} span={4}>
                <Text c="dimmed">Email</Text>
                <Text fw={500}>rabin@gmail.com</Text>
              </Grid.Col>
              <Grid.Col sm={3} lg={2} span={4}>
                <Text c="dimmed">Contact</Text>
                <Text fw={500}>+91 8876 556 908</Text>
              </Grid.Col>
            </Grid>
            <Grid gutter={12} sx={{ gap: '0px' }}>
              <Grid.Col sm={3} lg={2} span={4}>
                <Text c="dimmed">Gender</Text>
                <Text fw={500}>Male</Text>
              </Grid.Col>
              <Grid.Col sm={3} lg={2} span={4}>
                <Text c="dimmed">Marital Status</Text>
                <Text fw={500}>Married</Text>
              </Grid.Col>
              <Grid.Col sm={3} lg={2} span={4}>
                <Text c="dimmed">DOB</Text>
                <Text fw={500}>13/06/1991</Text>
              </Grid.Col>
            </Grid>
            <Grid gutter={12} sx={{ gap: '0px' }}>
              <Grid.Col sm={3} lg={2} span={4}>
                <Text c="dimmed">Emergency Contact</Text>
                <Text fw={500}>+91 6008 777 356</Text>
              </Grid.Col>
              <Grid.Col sm={3} lg={2} span={4}>
                <Text c="dimmed">Languages Spoken</Text>
                <Box sx={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
                  <Badge>Hindi</Badge>
                  <Badge>English</Badge>
                  <Badge>Spanish</Badge>
                </Box>
              </Grid.Col>
              <Grid.Col sm={3} lg={2} span={4}>
                <Text c="dimmed">Nationality</Text>
                <Text fw={500}>Indian</Text>
              </Grid.Col>
            </Grid>

            <Grid gutter={12} sx={{ gap: '0px' }}>
              <Grid.Col sm={3} lg={2} span={4}>
                <Text c="dimmed">Origin</Text>
                <Text fw={500}>Sourced</Text>
              </Grid.Col>
              <Grid.Col sm={3} lg={2} span={4}>
                <Text c="dimmed">Candidate ID</Text>
                <Text fw={500}>CAN-001</Text>
              </Grid.Col>
              <Grid.Col sm={3} lg={2} span={4}>
                <Text c="dimmed">Address</Text>
                <Text fw={500}>176 New Delhi, India 765908</Text>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
