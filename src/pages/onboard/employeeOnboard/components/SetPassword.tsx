import {
  Box,
  Button,
  Group,
  PasswordInput,
  Popover,
  Progress,
  Text,
} from '@mantine/core';
import {
  IconAlertCircle,
  IconArrowBackUp,
  IconCheck,
  IconLock,
  IconX,
} from '@tabler/icons-react';
import { useState } from 'react';
import { z } from 'zod';

interface OnboardPasswordProps {
  prevStep: () => void;
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  handleSubmit: () => void;
}

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

function SetPassword({
  prevStep,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  handleSubmit,
}: OnboardPasswordProps) {
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [popoverOpened, setPopoverOpened] = useState(false);

  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      label={requirement.label}
      meets={requirement.re.test(password)}
    />
  ));

  const strength = getStrength(password);
  // eslint-disable-next-line no-nested-ternary
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

  const handleSubmitPassword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setNewPasswordError('');
    setConfirmPasswordError('');
    const passwordCheck = PasswordType.safeParse(password);
    if (!passwordCheck.success) {
      // eslint-disable-next-line no-underscore-dangle
      setNewPasswordError(passwordCheck.error.format()._errors[0]);
      return;
    }

    if (password === confirmPassword) {
      handleSubmit();
    } else {
      setConfirmPasswordError("Passwords don't match");
    }
  };

  return (
    <form
      onSubmit={handleSubmitPassword}
      style={{
        width: '100%',
        margin: '2rem 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '0.25rem',
      }}
    >
      <Box>
        <Text
          color="dimmed"
          component="label"
          htmlFor="your-password"
          size="sm"
          weight={500}
          sx={{ display: 'block', marginBottom: '0.25rem' }}
        >
          Password*
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
                  // eslint-disable-next-line no-nested-ternary
                  newPasswordError
                    ? theme.colors.red[6]
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
          <Popover.Dropdown>
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
              color: theme.colors.red[6],
            })}
            size="xs"
            mt={4}
          >
            <div>{newPasswordError}</div>
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
      </Box>
      <Box>
        <Text
          color="dimmed"
          component="label"
          htmlFor="confirm-password"
          size="sm"
          weight={500}
          sx={{ display: 'block', marginBottom: '0.25rem' }}
        >
          Confirm Password*
        </Text>
        <PasswordInput
          id="confirm-password"
          placeholder="xxxxxxxx"
          size="sm"
          icon={<IconLock size={20} stroke={1} />}
          variant="unstyled"
          onChange={(e) => setConfirmPassword(e.currentTarget.value)}
          sx={(theme) => ({
            border: `1px solid ${
              // eslint-disable-next-line no-nested-ternary
              confirmPasswordError
                ? theme.colors.red[6]
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
              color: theme.colors.red[6],
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
      </Box>
      <Group position="apart">
        <Text
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            cursor: 'pointer',
          }}
          size="sm"
          color="dimmed"
          onClick={prevStep}
        >
          <IconArrowBackUp size={20} stroke={1.5} />
          <div>Go Back</div>
        </Text>
        <Button
          radius="xs"
          sx={(theme) => ({
            backgroundColor: theme.colors.brand[8],
            padding: '0 1.5rem',
            marginLeft: 'auto',
          })}
          type="submit"
        >
          Submit
        </Button>
      </Group>
    </form>
  );
}

export default SetPassword;
