import { useState } from 'react';

import {
  Anchor,
  Button,
  Checkbox,
  Group,
  Loader,
  MantineProvider,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
  createStyles,
} from '@mantine/core';

import Logo from '@/components/logo';
import { zLoginValidation } from '@/types/login-type';
import { useForm, zodResolver } from '@mantine/form';
import { Link } from 'react-router-dom';

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
    backgroundColor: theme.colors.brand[9],

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
    backgroundColor: theme.colors.gray[0],
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
    color: theme.colors.gray[9],
    fontFamily: theme.fontFamily,
    fontSize: '1.4rem',
  },
  password: {
    color: theme.colors.accent[6],
    fontWeight: 700,
  },
  userIdInput: {
    '::-ms-input-placeholder': {
      backgroundColor: theme.colors.blue[9],
    },
  },
  forgotPage: {
    textDecoration: 'none',
    color: theme.colors.blue[9],
  },

  pointer: {
    cursor: 'pointer',
    ':hover': {
      color: theme.colors.blue[8],
    },
  },
}));

// types
type ILoginRequest = {
  email: string;
  password: string;
};

export function Login() {
  const { classes } = useStyles();

  // TODO keep me login states
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'false'
  );
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const form = useForm<ILoginRequest>({
    validate: zodResolver(zLoginValidation),
    initialValues: {
      email: '',
      password: '',
    },
    validateInputOnChange: true,
    clearInputErrorOnChange: true,
  });

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.formMain} radius={0} p={30} px={80}>
        <form>
          <Link to="/">
            <Logo />
          </Link>
          <Paper className={classes.formInner} radius={10}>
            <Title
              order={6}
              className={classes.title}
              align="left"
              mt="md"
              mb={50}
            >
              Login with <span className={classes.password}>Email</span> and{' '}
              <span className={classes.password}>Password</span>
            </Title>

            <TextInput
              className={classes.userIdInput}
              label="Email"
              placeholder="Enter your email"
              size="md"
              type="text"
              autoComplete="on"
              /* eslint-disable react/jsx-props-no-spreading */
              {...form.getInputProps('email')}
            />
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              autoComplete="on"
              mt="md"
              size="md"
              {...form.getInputProps('password')}
            />

            <Group align="center" mt={20} position="apart">
              <Checkbox
                checked={keepLoggedIn}
                onChange={(event) => setKeepLoggedIn(event.target.checked)}
                label={
                  <Text className={classes.pointer}>Keep me logged in</Text>
                }
                size="sm"
                required
              />

              <Anchor
                className={classes.forgotPage}
                href="/forgot-password"
                target="_blank"
                weight={700}
                color="#04334c"
              >
                Forgot Password
              </Anchor>
            </Group>
            <MantineProvider
              inherit
              theme={{
                defaultGradient: {
                  from: '#F7CD5C',
                  to: '#F6C745',
                  deg: 45,
                },
              }}
            >
              {isLoggedIn ? (
                <Button
                  type="submit"
                  variant="gradient"
                  size="md"
                  fullWidth
                  mt="xl"
                  color="indigo"
                  rightIcon={<Loader variant="dots" size="sm" color="#fff" />}
                >
                  Log in
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="gradient"
                  size="md"
                  fullWidth
                  mt="xl"
                  color="indigo"
                >
                  Log in
                </Button>
              )}
            </MantineProvider>
          </Paper>
        </form>
      </Paper>
    </div>
  );
}

export default Login;
