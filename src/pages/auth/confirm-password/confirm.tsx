import {
  Anchor,
  Button,
  Group,
  MantineProvider,
  Paper,
  PasswordInput,
  Title,
  createStyles,
} from '@mantine/core';

import Logo from '@/components/common/logo/LogoDark';
import { zResetPassword } from '@/types/login-type';
import { useForm, zodResolver } from '@mantine/form';
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
  emailInput: {
    '::-ms-input-placeholder': {
      backgroundColor: theme.colors.brand[9],
    },
  },
  backPage: {
    textDecoration: 'none',
    color: theme.colors.brand[9],
  },
}));
type IResetRequest = {
  password: string;
  confirm_password: string;
};

export function ConfirmPassword() {
  const { classes } = useStyles();
  const form = useForm<IResetRequest>({
    validate: zodResolver(zResetPassword),
    initialValues: {
      password: '',
      confirm_password: '',
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
              order={6}
              className={classes.title}
              align="center"
              mt="md"
              mb={50}
            >
              Confirm your <span className={classes.password}>Password</span>
            </Title>
            <PasswordInput
              label="New Password"
              placeholder="Enter new password"
              mt="md"
              size="md"
              /* eslint-disable react/jsx-props-no-spreading */
              {...form.getInputProps('password')}
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="Enter your confirm password"
              mt="md"
              size="md"
              mb={10}
              {...form.getInputProps('confirm_password')}
            />
            <Group grow mt={20} position="apart">
              <Anchor className={classes.backPage} href="/login">
                Back to login page
              </Anchor>
              <MantineProvider>
                <Button variant="gradient" type="submit" size="md">
                  Submit
                </Button>
              </MantineProvider>
            </Group>
          </Paper>
        </form>
      </Paper>
    </div>
  );
}

export default ConfirmPassword;
