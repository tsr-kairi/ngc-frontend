/* eslint-disable react/jsx-props-no-spreading */
import { Box, Group, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Personal() {
  const form = useForm({
    initialValues: {
      age: 0,
      phone: 0,
      alternatePhone: 0,
      alternateEmail: '',
    },
    validate: {
      age: (value) =>
        value < 18 ? 'You must be at least 18 to register' : null,
    },
  });

  return (
    <Box>
      <Group position="apart" mt="sm" grow>
        <TextInput
          label="Age"
          placeholder="Enter your age"
          type="number"
          {...form.getInputProps('age')}
          required
        />
        <Select
          required
          label="Gender"
          placeholder="Select your gender"
          data={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'others', label: 'Others' },
          ]}
        />
      </Group>

      <Group position="apart" mt="sm" grow>
        <TextInput
          required
          label="Phone"
          placeholder="Enter your phone"
          type="number"
          {...form.getInputProps('phone')}
        />
        <TextInput
          required
          label="Alternate Phone"
          placeholder="Enter your alternate phone"
          type="number"
          {...form.getInputProps('alternatePhone')}
        />
      </Group>
      <Group position="apart" mt="sm" grow>
        <TextInput
          required
          label="Email"
          placeholder="Enter your alternate email"
          {...form.getInputProps('alternateEmail')}
        />
      </Group>
    </Box>
  );
}
