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
          <Text>Social</Text>
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
              <Grid.Col sm={2} lg={7} span={4}>
                <Text c="dimmed">Social Media</Text>
                <Grid.Col sm={2} lg={8} span={4} sx={{ marginTop: '5px' }}>
                  <Badge>LinkedIn</Badge>
                  <Badge>Twitter</Badge>
                  <Badge>Github</Badge>
                  <Badge>Stack Overflow</Badge>
                  <Badge>Medium</Badge>
                  <Badge>Personal Blog</Badge>
                </Grid.Col>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
