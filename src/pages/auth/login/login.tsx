import {
  Anchor,
  Button,
  Checkbox,
  Group,
  MantineProvider,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
  createStyles,
} from '@mantine/core';

import Logo from '@/components/common/logo/LogoDark';
import { zLoginValidation } from '@/types/login-type';
import { useForm, zodResolver } from '@mantine/form';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: '100%',
    width: '100%',
    overflow: 'hidden',
    height: '100vh',

    // [theme.fn.smallerThan('xl')]: {
    //   minHeight: 600,
    // },
    // [theme.fn.smallerThan('xs')]: {
    //   flexDirection: 'column',
    //   minHeight: 600,
    // },
  },
  formMain: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: `100%`,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],

    // [theme.fn.smallerThan('xl')]: {
    //   width: '100%',
    //   padding: '40px',
    // },
    // [theme.fn.smallerThan('lg')]: {
    //   width: '100%',
    //   padding: '40px',
    // },
    // [theme.fn.smallerThan('sm')]: {
    //   width: '100%',
    //   padding: '40px',
    // },
    // [theme.fn.smallerThan('xs')]: {
    //   width: '100%',
    //   padding: '20px',
    // },
  },

  formInner: {
    width: '40%',
    margin: '0 auto',
    padding: 80,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[1],
    // marginTop: '140px',

    [theme.fn.smallerThan('xl')]: {
      width: '50%',
      padding: 30,
      // marginTop: '70px',
    },
    [theme.fn.smallerThan('lg')]: {
      width: '50%',
      padding: 30,
      // marginTop: '70px',
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
  forgotPage: {
    textDecoration: 'none',
    color: theme.colors.brand[9],
  },

  pointer: {
    cursor: 'pointer',
    ':hover': {
      color: theme.colors.brand[8],
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
          <Paper className={classes.formInner} radius={10}>
            <Group position="center">
              <Link to="/">
                <Logo />
              </Link>
              {/* <ToggleThemeBtn /> */}
            </Group>
            <Title
              order={6}
              className={classes.title}
              align="center"
              mt="md"
              mb={50}
            >
              Login with <span className={classes.password}>Email</span> and{' '}
              <span className={classes.password}>Password</span>
            </Title>

            <TextInput
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
                label={
                  <Text className={classes.pointer}>Keep me logged in</Text>
                }
                size="sm"
                required
              />

              <Anchor
                className={classes.forgotPage}
                href="/#/forgot-password"
                weight={700}
              >
                Forgot Password
              </Anchor>
            </Group>
            <MantineProvider inherit>
              <Button
                type="submit"
                // variant="gradient"
                size="md"
                fullWidth
                mt="xl"
                color="indigo"
              >
                Log in
              </Button>
            </MantineProvider>
          </Paper>
        </form>
      </Paper>
    </div>
  );
}

export default Login;
