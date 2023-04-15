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

export default function EmployeeWorkExperience() {
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
          <Text>Work Experience</Text>
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
                <Text c="dimmed">Company</Text>
                <Text fw={500}>XYZ Corporation</Text>
              </Grid.Col>
              <Grid.Col sm={3} lg={2} span={4}>
                <Text c="dimmed">Job Title</Text>
                <Text fw={500}>Senior Systems Analyst</Text>
              </Grid.Col>
              <Grid.Col sm={3} lg={2} span={4}>
                <Text c="dimmed">Dates</Text>
                <Text fw={500}>Jan 2019 - Present</Text>
              </Grid.Col>
            </Grid>
            <Grid gutter={12} sx={{ gap: '0px' }}>
              <Grid.Col sm={3} lg={2} span={4}>
                <Text c="dimmed">Responsibilities</Text>
                <Text fw={500}>Manage network infrastructure</Text>
              </Grid.Col>
              <Grid.Col sm={3} lg={2} span={4}>
                <Text c="dimmed">Projects and Accomplishments</Text>
                <Text fw={500}>Successfully migrated company email system</Text>
              </Grid.Col>
              <Grid.Col sm={3} lg={2} span={4}>
                <Text c="dimmed">Additional Information</Text>
                <Text fw={500}>
                  Received Employee of the Year award in 2020
                </Text>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
