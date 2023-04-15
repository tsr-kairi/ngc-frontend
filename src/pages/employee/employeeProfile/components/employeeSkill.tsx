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

export default function EmployeeSkill() {
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
          <Text>Skill</Text>
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
            <Grid gutter={12}>
              <Grid.Col sm={2} lg={6} span={4}>
                <Text c="dimmed">Technical Skills</Text>
                <Grid.Col sm={2} lg={8} span={4} sx={{ marginTop: '5px' }}>
                  <Badge>Java</Badge>
                  <Badge>Python</Badge>
                  <Badge>SQL</Badge>
                  <Badge>AWS</Badge>
                  <Badge>Docker</Badge>
                  <Badge>Linux</Badge>
                </Grid.Col>
              </Grid.Col>
              <Grid.Col sm={2} lg={6} span={4}>
                <Text c="dimmed">Soft Skills</Text>
                <Grid.Col sm={2} lg={10} span={4} sx={{ marginTop: '5px' }}>
                  <Badge>Communication</Badge>
                  <Badge>Problem-Solving</Badge>
                  <Badge>Leadership</Badge>
                  <Badge>Time Management</Badge>
                </Grid.Col>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
