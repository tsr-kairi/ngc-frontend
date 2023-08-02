/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import {
  Box,
  Button,
  Center,
  Group,
  Loader,
  PasswordInput,
  Popover,
  Progress,
  Text,
} from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import {
  IconAlertCircle,
  IconArrowBackUp,
  IconArrowNarrowLeft,
  IconCheck,
  IconLock,
  IconX,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { z } from 'zod';

const PasswordType = z
  .string()
  .min(12, { message: 'Password must be at least 12 characters' })
  .max(128, { message: 'Password must be less than 128 characters' })
  .refine(
    (value) => {
      return (
        value.match(/[a-z]/g) &&
        value.match(/[A-Z]/g) &&
        value.match(/[0-9]/g) &&
        value.match(/[^a-zA-Z\d]/g)
      );
    },
    {
      message:
        'Password must contain at least one uppercase, lowercase, number, and special character',
    }
  );

function PasswordRequirement({
  meets,
  label,
}: {
  meets: boolean;
  label: string;
}) {
  return (
    <Text
      color={meets ? 'teal' : 'red'}
      sx={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm"
    >
      {meets ? <IconCheck size={14} /> : <IconX size={14} />}{' '}
      <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

function ResetPassword() {
  const [showResetPassword] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [screenLoading, setScreenLoading] = useState(true);

  const { token } = useParams();
  const navigate = useNavigate();

  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      label={requirement.label}
      meets={requirement.re.test(password)}
    />
  ));

  const strength = getStrength(password);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

  useEffect(() => {
    // Replace the axios call with your API request
    // Example: fetch(`/auth/is_reset_token_valid/${token || ''}`)
    setTimeout(() => {
      setScreenLoading(false);
    }, 2000);
  }, [token]);

  const handleResetPassword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setNewPasswordError('');
    setConfirmPasswordError('');
    const passwordCheck = PasswordType.safeParse(password);
    if (!passwordCheck.success) {
      setNewPasswordError(passwordCheck.error.format()._errors[0]);
      return;
    }
    if (password === confirmPassword) {
      setLoading(true);
      // Replace the axios call with your API request
      // Example: fetch(`/auth/resetPassword/${token || ''}`, {
      //   method: 'PATCH',
      //   body: JSON.stringify({ password, confirm_password: confirmPassword }),
      //   headers: { 'Content-Type': 'application/json' },
      // })
      setTimeout(() => {
        setLoading(false);
        showNotification({
          autoClose: 2000,
          message: 'Password reset successful! Login Again',
          color: 'teal',
          icon: <IconCheck />,
        });
        navigate('/login');
      }, 2000);
    } else {
      setConfirmPasswordError("Passwords don't match");
    }
  };

  if (screenLoading) {
    return (
      <Center style={{ height: '100%', margin: '5rem 0' }}>
        <Loader variant="dots" />
      </Center>
    );
  }
  return showResetPassword ? (
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
        <Text size="lg">Reset Password</Text>
        <form
          onSubmit={handleResetPassword}
          style={{
            width: '100%',
            margin: '2rem 0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '0.25rem',
          }}
        >
          <div>
            <Text
              color="dimmed"
              component="label"
              htmlFor="your-password"
              size="sm"
              weight={500}
              sx={{ display: 'block', marginBottom: '0.25rem' }}
            >
              New Password
            </Text>
            <Popover opened={popoverOpened} position="bottom" width="target">
              <Popover.Target>
                {/* <div> */}
                <PasswordInput
                  id="your-password"
                  placeholder="xxxxxxxx"
                  data-autofocus
                  autoFocus
                  icon={<IconLock size={20} stroke={1} />}
                  variant="unstyled"
                  onChange={(e) => {
                    setPassword(e.currentTarget.value);
                  }}
                  sx={(theme) => ({
                    border: `1px solid ${
                      newPasswordError
                        ? theme.colors.error[5]
                        : theme.colorScheme === 'dark'
                        ? theme.colors.dark[5]
                        : theme.colors.dark[3]
                    }`,
                    borderRadius: '0.25rem',
                  })}
                  value={password}
                  required
                  onFocusCapture={() => setPopoverOpened(true)}
                  onBlurCapture={() => setPopoverOpened(false)}
                />
                {/* </div> */}
              </Popover.Target>
              <Popover.Dropdown mt={8}>
                <Progress
                  color={color}
                  value={strength}
                  size={5}
                  style={{ marginBottom: 10 }}
                />
                <PasswordRequirement
                  label="Includes at least 12 characters"
                  meets={password.length > 11}
                />
                {checks}
              </Popover.Dropdown>
            </Popover>
            {newPasswordError ? (
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
                <IconAlertCircle size={14} /> <div>{newPasswordError}</div>
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
          <div>
            <Text
              color="dimmed"
              component="label"
              htmlFor="confirm-password"
              size="sm"
              weight={500}
              sx={{ display: 'block', marginBottom: '0.25rem' }}
            >
              Confirm Password
            </Text>
            <PasswordInput
              id="confirm-password"
              placeholder="xxxxxxxx"
              icon={<IconLock size={20} stroke={1} />}
              variant="unstyled"
              onChange={(e) => setConfirmPassword(e.currentTarget.value)}
              sx={(theme) => ({
                border: `1px solid ${
                  // eslint-disable-next-line no-nested-ternary
                  confirmPasswordError
                    ? theme.colors.error[5]
                    : theme.colorScheme === 'dark'
                    ? theme.colors.dark[5]
                    : theme.colors.dark[3]
                }`,
                borderRadius: '0.25rem',
              })}
            />
            {confirmPasswordError ? (
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
                <IconAlertCircle size={14} /> <div>{confirmPasswordError}</div>
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
              Reset Password
            </Button>
          </Group>
        </form>
      </Box>
    </Box>
  ) : (
    <>
      <Text size="lg" mt={10} fw={500} color="orange">
        Reset Password Link Expired
      </Text>
      <Text size="sm" align="center">
        Try resetting password with the latest link. In case if you did not get
        one, try contacting the administrator.
      </Text>
      <Text
        span
        component={Link}
        to="/login"
        size="md"
        align="center"
        mt={10}
        sx={(theme) => ({
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          color: theme.colors.brand[9],
          gap: '0.25rem',
        })}
      >
        <IconArrowNarrowLeft stroke={1} />
        <span>Back to login</span>
      </Text>
    </>
  );
}

export default ResetPassword;
