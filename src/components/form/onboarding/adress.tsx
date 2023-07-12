/* eslint-disable react/jsx-props-no-spreading */
import { Box, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Adress() {
  const form = useForm({
    initialValues: {
      streetline1: '',
      streerline2: '',
      city: '',
      state: '',
      country: '',
      pincode: 0,
    },
  });

  return (
    <Box maw={320} mx="auto">
      <TextInput
        mt="sm"
        label="street line 1"
        placeholder="Phone"
        {...form.getInputProps('phone')}
      />
      <TextInput
        mt="sm"
        label="street line 2"
        placeholder="Phone"
        {...form.getInputProps('phone')}
      />
      <Select
        label="City"
        placeholder="Pick one"
        data={[
          { value: 'react', label: 'Male' },
          { value: 'ng', label: 'Female' },
        ]}
      />
      <Select
        label="State"
        placeholder="Pick one"
        data={[
          { value: 'react', label: 'Male' },
          { value: 'ng', label: 'Female' },
        ]}
      />
      <Select
        label="Country"
        placeholder="Pick one"
        data={[
          { value: 'react', label: 'Male' },
          { value: 'ng', label: 'Female' },
        ]}
      />
      <TextInput
        mt="sm"
        label="Pincode"
        placeholder="Phone"
        {...form.getInputProps('phone')}
      />
    </Box>
  );
}
