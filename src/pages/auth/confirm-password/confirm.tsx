import {
  Paper,
  createStyles,
  PasswordInput,
  Button,
  Title,
  Group,
  MantineProvider,
  Text,
  Loader,
} from '@mantine/core'

import Logo from '@/components/logo'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm, zodResolver } from '@mantine/form'
import { useMemo, useState } from 'react'
import { zResetPassword } from '@/types/login-type'

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
  confirmImg: {
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
  emailInput: {
    // backgroundColor: theme.colors.blue[9],
    '::-ms-input-placeholder': {
      backgroundColor: theme.colors.blue[9],
    },
  },
  backPage: {
    textDecoration: 'none',
    color: '#04334c',
  },
}))
type IResetRequest = {
  password: string
  confirm_password: string
}

function useQuery() {
  const { search } = useLocation()

  return useMemo(() => new URLSearchParams(search), [search])
}

export function ConfirmPassword() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const query = useQuery()
  const navigate = useNavigate()

  const { classes } = useStyles()
  const form = useForm<IResetRequest>({
    validate: zodResolver(zResetPassword),
    initialValues: {
      password: '',
      confirm_password: '',
    },
    validateInputOnChange: true,
    clearInputErrorOnChange: true,
  })

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.formMain} radius={0} p={30} px={80}>
        <Link to={'/dashboard'}>
          <Logo />
        </Link>
        <form>
          <Paper className={classes.formInner} radius={10}>
            <Title
              order={6}
              className={classes.title}
              align="left"
              mt="md"
              mb={50}
            >
              Confirm your <span className={classes.password}>Password</span>
            </Title>
            <PasswordInput
              label="Password"
              placeholder="★★★★★★★★"
              mt="md"
              size="md"
              {...form.getInputProps('password')}
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="★★★★★★★★"
              mt="md"
              size="md"
              mb={10}
              {...form.getInputProps('confirm_password')}
            />
            <Group grow mt={20} position="apart">
              <Link className={classes.backPage} to={'/login'}>
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
                  {!isSubmitting && 'Submit'}
                  {isSubmitting && (
                    <Text>
                      Submitting{''}
                      <Loader variant="dots" color={'white'} size="sm" />
                    </Text>
                  )}
                </Button>
              </MantineProvider>
            </Group>
          </Paper>
        </form>
      </Paper>
    </div>
  )
}

export default ConfirmPassword

//  old confirm img link : https://img.freepik.com/free-vector/login-concept-illustration_114360-757.jpg?w=826&t=st=1660660487~exp=1660661087~hmac=25452a9c404715893a9a1fcb9a5cfc8056a60a06dae96319cdd8cca781672bbb
