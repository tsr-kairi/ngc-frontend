import { Box, Group, PasswordInput, Progress, Text } from '@mantine/core';
import { useForm } from '@mantine/form';

function Password() {
  const form = useForm({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
  });
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',

        width: '60%',
      }}
    >
      <Group position="apart" mt="xs">
        <Text fz="sm" color="dimmed">
          Progress
        </Text>
        <Text fz="sm" color="dimmed">
          62%
        </Text>
      </Group>
      <Progress value={62} mt={5} />
      <Text fz="xl" weight={700}>
        Password
      </Text>
      <Text fz="md">Set new Password</Text>
      <Box
        sx={{
          justifyItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          top: '100px',
        }}
      >
        <PasswordInput
          label="Current Password"
          placeholder="Enter your password"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...form.getInputProps('password')}
        />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...form.getInputProps('password')}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Enter your confirm password"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...form.getInputProps('confirmPassword')}
        />
      </Box>
    </Box>
  );
}

export default Password;
