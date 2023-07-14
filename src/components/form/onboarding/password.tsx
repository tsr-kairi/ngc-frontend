/* eslint-disable react/jsx-props-no-spreading */
import { Box, Group, PasswordInput } from '@mantine/core';
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
      <Group position="apart" mt="sm" grow>
        <PasswordInput
          required
          type="password"
          label="Password"
          placeholder="Enter your password"
          {...form.getInputProps('password')}
        />
        <PasswordInput
          required
          type="password"
          label="Confirm Password"
          placeholder="Enter your confirm password"
          {...form.getInputProps('confirmPassword')}
        />
      </Group>
    </Box>
  );
}
