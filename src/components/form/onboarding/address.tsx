/* eslint-disable react/jsx-props-no-spreading */
import { Box, Group, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Address() {
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
    <Box>
      <Group position="apart" mt="md">
        <TextInput
          label="street line 1"
          placeholder="Phone"
          {...form.getInputProps('phone')}
        />
        <TextInput
          label="street line 2"
          placeholder="Phone"
          {...form.getInputProps('phone')}
        />
      </Group>
      <Group position="apart" mt="md">
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
      </Group>
      <Group position="apart" mt="md">
        <Select
          label="Country"
          placeholder="Pick one"
          data={[
            { value: 'react', label: 'Male' },
            { value: 'ng', label: 'Female' },
          ]}
        />
        <TextInput
          label="Pincode"
          placeholder="Phone"
          {...form.getInputProps('phone')}
        />
      </Group>
    </Box>
  );
}
