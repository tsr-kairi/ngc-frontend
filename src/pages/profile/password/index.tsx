import { Box, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function ProfilePassword() {
  const form = useForm({
    initialValues: {
      currentPassword: '',
      password: '',
      confirmPassword: '',
    },
  });
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Box
        sx={{
          justifyItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: '100px',
          width: '60%',
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        <PasswordInput
          label="Current Password"
          placeholder="Enter your password"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...form.getInputProps('currentPassword')}
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

export default ProfilePassword;
