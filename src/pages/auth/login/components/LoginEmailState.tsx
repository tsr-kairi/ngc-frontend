/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */
import { Button, Group, Popover, Text, TextInput } from '@mantine/core';
import { IconAlertCircle, IconMail } from '@tabler/icons-react';
import { useState } from 'react';
import { z } from 'zod';

interface ToggleLoginStateProps {
  setToggleLoginState: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
}

const emailType = z.string().email({ message: 'Invalid Email' });

function LoginEmailState({
  setToggleLoginState,
  email,
  setEmail,
}: ToggleLoginStateProps) {
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const result = emailType.safeParse(email);
    if (!result.success) {
      setEmailError(result.error.format()._errors[0]);
      return;
    }
    setLoading(true);

    // Replace the axios call with your API request
    // Example: fetch('/api/check-email', { method: 'POST', body: { email } })
    setTimeout(() => {
      setLoading(false);
      const emailExists = true; // Replace this with the response from the server
      if (emailExists) {
        setToggleLoginState('password');
      } else {
        setEmailError('Email not found');
      }
    }, 2000);
  };

  return (
    <>
      <Text
        weight="lighter"
        mb="md"
        sx={{
          letterSpacing: '0.1rem',
          fontSize: '28px',
        }}
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
        onSubmit={handleClick}
        style={{
          width: '100%',
          margin: '2rem 0 0 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '2rem',
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
            placeholder="john@nexg.tech"
            icon={<IconMail size={20} stroke={1} />}
            size="md"
            autoFocus
            variant="unstyled"
            id="your-email"
            onChange={(e) => {
              setEmailError('');
              setEmail(e.currentTarget.value);
            }}
            value={email}
            sx={(theme) => ({
              border: `1px solid ${
                emailError
                  ? theme.colors.error[5]
                  : theme.colorScheme === 'dark'
                  ? theme.colors.dark[5]
                  : theme.colors.dark[3]
              }`,
              borderRadius: '0.25rem',
            })}
          />
          {emailError ? (
            <Text
              sx={(theme) => ({
                color: theme.colors.error[5],
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
              })}
              size="xs"
              mt={4}
            >
              <IconAlertCircle size={14} /> <div>{emailError}</div>
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
        <Group position="apart">
          <Popover width={200} position="bottom-start" withArrow shadow="md">
            <Popover.Target>
              <Text
                color="dimmed"
                size="sm"
                sx={{
                  cursor: 'pointer',
                }}
              >
                Forgot Email?
              </Text>
            </Popover.Target>
            <Popover.Dropdown
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[7]
                    : theme.colors.dark[0],
              })}
            >
              <Text size="xs">
                Contact your administrator to retrieve your email.
              </Text>
            </Popover.Dropdown>
          </Popover>

          <Button
            radius="xs"
            sx={(theme) => ({
              backgroundColor: theme.colors.brand[8],
              padding: '0 1.5rem',
            })}
            loading={loading}
            type="submit"
          >
            Next
          </Button>
        </Group>
        <Text
          mt="lg"
          size="sm"
          sx={(theme) => ({
            color:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[4]
                : theme.colors.gray[4],
          })}
        >
          Sign in with your nexg email id.
        </Text>
      </form>
    </>
  );
}

export default LoginEmailState;
