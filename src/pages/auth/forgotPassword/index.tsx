/* eslint-disable no-underscore-dangle */
import { Box, Button, Group, Text, TextInput } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import {
  IconAlertCircle,
  IconArrowBackUp,
  IconCheck,
  IconMail,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { z } from 'zod';

const emailType = z.string().email({ message: 'Invalid Email' });

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('email')) {
      setEmail(searchParams.get('email') as string);
    }
  }, [searchParams]);

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const result = emailType.safeParse(email);
    if (!result.success) {
      setEmailError(result.error.format()._errors[0]);
      return;
    }
    setLoading(true);
    // Replace the axios call with your API request
    // Example: fetch(`/auth/forgot/${email}`)
    setTimeout(() => {
      setLoading(false);
      showNotification({
        autoClose: 2000,
        message: 'Password reset link sent to your email',
        color: 'teal',
        icon: <IconCheck />,
      });
    }, 2000);
  };

  return (
    <Box
      sx={() => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
      })}
    >
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '500px',
          width: '500px',
          padding: '20px',
          borderRadius: '10px',
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
        })}
      >
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
        <Text size="lg">Forgot Password?</Text>
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
                  theme.colorScheme === 'dark'
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
            <Text
              component={Link}
              to="/login"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
              size="sm"
              color="dimmed"
            >
              <IconArrowBackUp size={20} stroke={1.5} />
              <div>Back to Login</div>
            </Text>

            <Button
              radius="xs"
              sx={(theme) => ({
                backgroundColor: theme.colors.brand[8],
                padding: '0 1.5rem',
              })}
              type="submit"
              loading={loading}
            >
              Send Reset Link
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
            No Worries, we&apos;ll send you reset instructions.
          </Text>
        </form>
      </Box>
    </Box>
  );
}

export default ForgotPassword;
