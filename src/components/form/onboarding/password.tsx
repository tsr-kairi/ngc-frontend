/* eslint-disable react/jsx-props-no-spreading */
import { Box, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Password() {
  const form = useForm({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
  });

  return (
    <Box>
      <PasswordInput
        required
        type="password"
        label="Password"
        placeholder="Enter your password"
        {...form.getInputProps('password')}
      />
      <PasswordInput
        mt="sm"
        required
        type="password"
        label="Confirm Password"
        placeholder="Enter your confirm password"
        {...form.getInputProps('confirmPassword')}
      />
    </Box>
  );
}
