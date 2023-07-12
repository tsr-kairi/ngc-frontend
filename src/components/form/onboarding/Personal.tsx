/* eslint-disable react/jsx-props-no-spreading */
import { Box, NumberInput, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Personal() {
  const form = useForm({
    initialValues: {
      age: 0,
      phone: '',
      alternatePhone: '',
      alternateEmail: '',
    },
    validate: {
      age: (value) =>
        value < 18 ? 'You must be at least 18 to register' : null,
    },
  });

  return (
    <Box maw={320} mx="auto">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <NumberInput
          mt="sm"
          label="Age"
          placeholder="Age"
          min={0}
          max={99}
          style={{ flex: 1, marginRight: '10px' }}
          {...form.getInputProps('age')}
        />
        <Select
          mt="sm"
          label="Gender"
          placeholder="Pick one"
          style={{ flex: 1 }}
          data={[
            { value: 'react', label: 'Male' },
            { value: 'ng', label: 'Female' },
          ]}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TextInput
          mt="sm"
          label="Phone"
          placeholder="Phone"
          style={{ flex: 1, marginRight: '10px' }}
          {...form.getInputProps('phone')}
        />
        <TextInput
          mt="sm"
          label="Alternate Phone"
          placeholder="Phone"
          style={{ flex: 1 }}
          {...form.getInputProps('phone')}
        />
      </div>

      <TextInput
        mt="md"
        label="Email"
        placeholder="Alternate Email"
        {...form.getInputProps('email')}
      />
    </Box>
  );
}
