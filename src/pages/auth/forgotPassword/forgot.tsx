import {
  Paper,
  createStyles,
  TextInput,
  Button,
  Title,
  Text,
  Group,
  MantineProvider,
  Loader,
} from '@mantine/core';

import Logo from '@/components/logo';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import { useState } from 'react';

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
  forgotImg: {
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
  backPage: {
    textDecoration: 'none',
    color: '#04334c',
    ':hover': {
      color: 'blue',
    },
  },
}));
type IForgotRequest = {
  email: string;
};
export function ForgotPassword() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
        <Link to="/dashboard">
          <Logo />
        </Link>
        <form>
          <Paper className={classes.formInner} radius={10}>
            <Title
              order={1}
              className={classes.title}
              align="left"
              mt="md"
              mb={10}
            >
              Forgot your <span className={classes.password}>Password</span>
            </Title>
            <Text align="left" mb={40} color="grey">
              Please enter your email to get a reset link.
            </Text>

            <TextInput
              label="Email address"
              placeholder="random@gmail.com"
              size="md"
              mb={10}
              required
              type="email"
              {...form.getInputProps('email')}
            />
            <Group grow mt={20} position="apart">
              <Link className={classes.backPage} to="/login">
                Back to login page
              </Link>
              <MantineProvider
                theme={{
                  defaultGradient: {
                    from: '#06E4D0',
                    to: '#06E4D0',
                    deg: 45,
                  },
                }}
              >
                <Button variant="gradient" type="submit" size="md">
                  {!isSubmitting && 'Reset Password'}
                  {isSubmitting && (
                    <Text>
                      Resetting
                      <Loader variant="dots" color="white" size="sm" />
                    </Text>
                  )}
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
