import { useState } from 'react';

import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  MantineProvider,
  Group,
  Text,
  Loader,
  Anchor,
} from '@mantine/core';

import Logo from '@/components/logo';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, zodResolver } from '@mantine/form';
import { zLoginValidation } from '@/types/login-type';

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
    backgroundColor: '#32415A',

    [theme.fn.smallerThan('xl')]: {
      width: '40%',
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
    backgroundColor: theme.colors.white,
    marginTop: '140px',

    [theme.fn.smallerThan('xl')]: {
      width: '100%',
      padding: 30,
      marginTop: '70px',
    },
  },

  title: {
    color: theme.black,
    fontFamily: theme.fontFamily,
    fontSize: '1.4rem',
  },
  password: {
    color: '#06E4D0',
    fontWeight: 700,
  },

  // login IMG
  loginImg: {
    width: '100%',
    maxWidth: '50%',
    height: '100vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
  btn: {
    backgroundColor: theme.colors.accent[9],
    ':hover': {
      backgroundColor: theme.colors.accent[8],
      transition: 'all 0.6s ease-in-out',
    },
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
  user_id: string;
  password: string;
};

export function Login() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  // keep me login states
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'false'
  );
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const form = useForm<ILoginRequest>({
    validate: zodResolver(zLoginValidation),
    initialValues: {
      user_id: '',
      password: '',
    },
    validateInputOnChange: true,
    clearInputErrorOnChange: true,
  });

  // const handleSubmit = (
  //   values: ILoginRequest,
  //   event: React.FormEvent<HTMLFormElement>
  // ) => {
  //   // keep me login
  //   event.preventDefault()
  //   login(values)
  //     .then(() => {
  //       navigate('/login')
  //       // Success to Login toast
  //       setTimeout(() => {
  //         showNotification({
  //           title: 'Log In Success!!',
  //           message: 'You are successfully Logged In.',
  //           color: 'green',
  //         })
  //       }, 1000)
  //     })
  //     .catch((error: AxiosError) => {
  //       console.log(error)
  //       navigate('/login')
  //       // Failed to Login toast
  //       setTimeout(() => {
  //         showNotification({
  //           title: 'Log In Failed!!',
  //           message: 'There was some error.',
  //           color: 'red',
  //         })
  //       }, 1000)
  //     })

  //   // keep me login
  //   setIsLoggedIn(true)
  //   if (keepLoggedIn) {
  //     localStorage.setItem('isLoggedIn', 'true')
  //   }
  // }

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.formMain} radius={0} p={30} px={80}>
        <form>
          <Link to="/dashboard">
            {/* <div className={classes.logoImg}> */}
            <Logo />
            {/* </div> */}
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
              {...form.getInputProps('email')}
            />
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              autoComplete="on"
              mt="md"
              size="md"
              // type="password"
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
                  from: '#06E4D0',
                  to: '#06E4D0',
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
