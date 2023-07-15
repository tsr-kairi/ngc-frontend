/* eslint-disable react/jsx-props-no-spreading */
import { Box, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Personal() {
  const form = useForm({
    initialValues: {
      age: '',
      phone: '',
      alternatePhone: '',
      alternateEmail: '',
    },
    validate: {
      age: (value) =>
        value < '18' ? 'You must be at least 18 to register' : null,
    },
  });

  return (
    <form>
      <Box mt="sm">
        <TextInput
          mb="sm"
          label="Age"
          placeholder="Enter your age"
          type="number"
          required
          {...form.getInputProps('age')}
        />
        <Select
          mb="sm"
          placeholder="Select your gender"
          label="Gender"
          data={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'others', label: 'Others' },
          ]}
          required
          {...form.getInputProps('gender')}
        />
        <TextInput
          mb="sm"
          type="number"
          label="Phone"
          placeholder="Enter your phone"
          {...form.getInputProps('phone')}
          required
        />
        <TextInput
          mb="sm"
          label="Alternate Phone"
          placeholder="Enter your alternate phone"
          type="number"
          required
          {...form.getInputProps('alternatePhone')}
        />
        <TextInput
          label="Alternate Email"
          placeholder="Enter your alternate email"
          type="email"
          required
          {...form.getInputProps('alternateEmail')}
        />
      </Box>
    </form>
  );
}
