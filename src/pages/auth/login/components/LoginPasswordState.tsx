/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */
import {
  ActionIcon,
  Anchor,
  Button,
  Group,
  PasswordInput,
  Text,
  TextInput,
} from '@mantine/core';
import {
  IconAlertCircle,
  IconEdit,
  IconLock,
  IconMail,
} from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface ToggleLoginStateProps {
  setToggleLoginState: (val: string) => void;
  email: string;
  setPassword: (val: string) => void;
}

function LoginPasswordState({
  setToggleLoginState,
  email,
  setPassword,
}: ToggleLoginStateProps) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setPasswordError(false);
    setLoading(true);
    // Replace the axios call with your API request
    // Example: fetch('/api/login', { method: 'POST', body: { email, password } })
    setTimeout(() => {
      setLoading(false);
      const response = {
        status: 200,
        msg: '',
        data: {
          msg: '',
        },
      }; // Replace this with the response from the server
      if (response?.status !== 200) {
        setErrorMessage(response.data.msg);
        setPasswordError(true);
      } else {
        setToggleLoginState('2fa');
      }
    }, 2000);
  };

  return (
    <>
      <Text
        weight="lighter"
        sx={{
          letterSpacing: '0.1rem',
          fontSize: '28px',
        }}
        mb="md"
      >
        nex
        <span
          style={{
            color: '#fff',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
          }}
        >
          gen
        </span>
      </Text>
      <Text size="lg">Sign in</Text>
      <form
        onSubmit={handleLogin}
        style={{
          width: '100%',
          margin: '2rem 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <div>
          <Text
            color="dimmed"
            component="label"
            htmlFor="your-email"
            size="sm"
            weight={500}
            sx={{ display: 'block', marginBottom: '0.25rem' }}
          >
            Email
          </Text>
          <TextInput
            icon={<IconMail size={20} stroke={1} />}
            rightSection={
              <ActionIcon onClick={() => setToggleLoginState('email')}>
                <IconEdit size={22} stroke={1.5} />
              </ActionIcon>
            }
            size="md"
            variant="unstyled"
            id="your-email"
            value={email}
            // mantine-1k4dnup
            readOnly
            sx={(theme) => ({
              border: `1px solid ${
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[5]
                  : theme.colors.dark[3]
              }`,
              borderRadius: '0.25rem',
            })}
            styles={{
              input: { color: 'gray' },
            }}
          />
        </div>
        <div>
          <Text
            color="dimmed"
            component="label"
            htmlFor="your-password"
            size="sm"
            weight={500}
            sx={{ display: 'block', marginBottom: '0.25rem' }}
          >
            Password
          </Text>
          <PasswordInput
            id="your-password"
            placeholder="xxxxxxxx"
            size="md"
            autoFocus
            icon={<IconLock size={20} stroke={1} />}
            variant="unstyled"
            onChange={(e) => {
              setPasswordError(false);
              setPassword(e.currentTarget.value);
            }}
            sx={(theme) => ({
              border: `1px solid ${
                passwordError
                  ? theme.colors.red[6]
                  : theme.colorScheme === 'dark'
                  ? theme.colors.dark[5]
                  : theme.colors.dark[3]
              }`,
              borderRadius: '0.25rem',
            })}
          />
          {passwordError ? (
            <Text
              sx={(theme) => ({
                color: theme.colors.red[6],
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
              })}
              size="xs"
              mt={4}
            >
              <IconAlertCircle size={14} /> <div>{errorMessage}</div>
            </Text>
          ) : (
            <Text
              size="xs"
              mt={4}
              sx={{
                color: 'transparent',
              }}
            >
              Null
            </Text>
          )}
        </div>
        <Group position="apart" mt="sm">
          <Anchor
            color="dimmed"
            size="sm"
            component={Link}
            to={`/forgot-password?email=${email}`}
          >
            Forgot password?
          </Anchor>
          <Button
            radius="xs"
            sx={(theme) => ({
              backgroundColor: theme.colors.brand[8],
              padding: '0 1.5rem',
            })}
            type="submit"
            loading={loading}
          >
            Login
          </Button>
        </Group>
      </form>
    </>
  );
}

export default LoginPasswordState;
