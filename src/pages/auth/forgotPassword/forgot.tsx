import {
  Anchor,
  Button,
  Group,
  MantineProvider,
  Paper,
  Text,
  TextInput,
  Title,
  createStyles,
} from '@mantine/core';

import Logo from '@/components/common/logo/LogoDark';
import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom';
import ToggleThemeBtn from '@/components/ui/Buttons/ToggleThemeBtn';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 800,
    display: 'flex',
    width: '100%',
    overflow: 'hidden',

    [theme.fn.smallerThan('xl')]: {
      minHeight: 600,
    },
    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
      minHeight: 600,
    },
  },
  formMain: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: `100%`,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],

    [theme.fn.smallerThan('xl')]: {
      width: '100%',
      padding: '40px',
    },
    [theme.fn.smallerThan('lg')]: {
      width: '100%',
      padding: '40px',
    },
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
      padding: '40px',
    },
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
      padding: '20px',
    },
  },

  formInner: {
    width: '40%',
    margin: '0 auto',
    padding: 80,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[1],
    marginTop: '140px',

    [theme.fn.smallerThan('xl')]: {
      width: '50%',
      padding: 30,
      marginTop: '70px',
    },
    [theme.fn.smallerThan('lg')]: {
      width: '50%',
      padding: 30,
      marginTop: '70px',
    },
    [theme.fn.smallerThan('sm')]: {
      width: '90%',
      padding: '40px',
    },
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
      padding: '20px',
    },
  },

  title: {
    fontFamily: theme.fontFamily,
    fontSize: '1.4rem',
  },
  password: {
    color: theme.colors.brand[6],
    fontWeight: 700,
  },
  backPage: {
    textDecoration: 'none',
    color: theme.colors.brand[9],
  },
}));
type IForgotRequest = {
  email: string;
};
export function ForgotPassword() {
  const { classes } = useStyles();

  const form = useForm<IForgotRequest>({
    initialValues: {
      email: '',
    },
    validateInputOnChange: true,
    clearInputErrorOnChange: true,
  });

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.formMain} radius={0} p={30} px={80}>
        <form>
          <Paper className={classes.formInner} radius={10}>
            <Group position="center">
              <Link to="/">
                <Logo />
              </Link>
              <ToggleThemeBtn />
            </Group>
            <Title
              order={1}
              className={classes.title}
              align="center"
              mt="md"
              mb={10}
            >
              Forgot your <span className={classes.password}>Password</span>
            </Title>
            <Text align="center" mb={40} color="grey">
              Please enter your email to get a reset link.
            </Text>

            <TextInput
              label="Email address"
              placeholder="random@gmail.com"
              size="md"
              mb={10}
              required
              type="email"
              /* eslint-disable react/jsx-props-no-spreading */
              {...form.getInputProps('email')}
            />
            <Group grow mt={20} position="apart">
              <Anchor className={classes.backPage} href="/login">
                Back to login page
              </Anchor>
              <MantineProvider inherit>
                <Button variant="gradient" type="submit" size="md">
                  Reset Password
                </Button>
              </MantineProvider>
            </Group>
          </Paper>
        </form>
      </Paper>
    </div>
  );
}

export default ForgotPassword;
