import {
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

export default function EmployeeEducationInfo() {
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
          <Text>Educational Information</Text>
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
                <Text c="dimmed">Degree</Text>
                <Text fw={500}>Bachelors in Computer Science</Text>
              </Grid.Col>
              <Grid.Col sm={3} lg={2} span={4}>
                <Text c="dimmed">Certifications</Text>
                <Text fw={500}>CompTIA A+</Text>
              </Grid.Col>
              <Grid.Col sm={3} lg={2} span={4}>
                <Text c="dimmed">Specializations</Text>
                <Text fw={500}>Data Analytics</Text>
              </Grid.Col>
            </Grid>
            <Grid gutter={12} sx={{ gap: '0px' }}>
              <Grid.Col sm={3} lg={2} span={4}>
                <Text c="dimmed">Training and Workshops</Text>
                <Text fw={500}>AWS Certified</Text>
              </Grid.Col>
              <Grid.Col sm={3} lg={2} span={4}>
                <Text c="dimmed">Achievements</Text>
                <Text fw={500}>Received the IT Innovator</Text>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
