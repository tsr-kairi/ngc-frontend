/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import {
  Box,
  Button,
  Group,
  PasswordInput,
  Popover,
  Progress,
  Text,
} from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import {
  IconAlertCircle,
  IconCheck,
  IconLock,
  IconX,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

function ForceResetPasswordState() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(password)}
    />
  ));

  const strength = getStrength(password);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

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
      // Replace the fetch call with your API request
      // Example: fetch('/api/reset-password', { method: 'POST', body: { password } })
      setTimeout(() => {
        setLoading(false);
        showNotification({
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

  return (
    <>
      <Text size="lg">Set New Password</Text>
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
        <Group position="right">
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
    </>
  );
}

export default ForceResetPasswordState;
