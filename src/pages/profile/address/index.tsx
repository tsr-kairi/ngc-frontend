/* eslint-disable react/jsx-props-no-spreading */
import {
  Checkbox,
  Container,
  Select,
  SimpleGrid,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Address() {
  const form = useForm({
    initialValues: {
      streetLine1: '',
      streetLine2: '',
      city: '',
      state: '',
      country: '',
      pinCode: 0,
    },
  });

  return (
    <Container>
      {/* <Text fz="lg" weight={700}>
        Address
      </Text>
      <Text fz="sm" weight={300}>
        add you address here
      </Text> */}

      <Text mt="lg" mb="sm" fz="md" weight={520}>
        Present Address
      </Text>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} mb="sm">
        <TextInput
          label="Street line 1"
          placeholder="Enter your “Street” line 1"
          {...form.getInputProps('streetLine1')}
        />
        <TextInput
          label="Street line 2"
          placeholder="Enter your “Street” line 2"
          {...form.getInputProps('streetLine2')}
        />
        <Select
          label="City"
          placeholder="Select your city"
          data={[
            { value: 'gp', label: 'Gajipur' },
            { value: 'kxj', label: 'Karimganj' },
          ]}
          {...form.getInputProps('city')}
        />
        <Select
          label="State"
          placeholder="Select your state"
          data={[
            { value: 'up', label: 'Uttar Pradesh' },
            { value: 'as', label: 'Assam' },
          ]}
          {...form.getInputProps('state')}
        />
        <Select
          label="Country"
          placeholder="Select your country"
          data={[
            { value: 'in', label: 'India' },
            { value: 'usa', label: 'America' },
          ]}
          {...form.getInputProps('country')}
        />
        <TextInput
          label="Pin Code"
          placeholder="Enter your pin code"
          type="number"
          {...form.getInputProps('pinCode')}
        />
      </SimpleGrid>

      <Checkbox mt="md" mb="lg" label="same as permanent address" />

      <Text mt="lg" mb="sm" fz="md" weight={520}>
        Permanent Address
      </Text>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} mb="sm">
        <TextInput
          label="Street line 1"
          placeholder="Enter your “Street” line 1"
          {...form.getInputProps('streetLine1')}
        />
        <TextInput
          label="Street line 2"
          placeholder="Enter your “Street” line 2"
          {...form.getInputProps('streetLine2')}
        />
        <Select
          label="City"
          placeholder="Select your city"
          data={[
            { value: 'gp', label: 'Gajipur' },
            { value: 'kxj', label: 'Karimganj' },
          ]}
          {...form.getInputProps('city')}
        />
        <Select
          label="State"
          placeholder="Select your state"
          data={[
            { value: 'up', label: 'Uttar Pradesh' },
            { value: 'as', label: 'Assam' },
          ]}
          {...form.getInputProps('state')}
        />
        <Select
          label="Country"
          placeholder="Select your country"
          data={[
            { value: 'in', label: 'India' },
            { value: 'usa', label: 'America' },
          ]}
          {...form.getInputProps('country')}
        />
        <TextInput
          label="Pin Code1"
          placeholder="Enter your pin code"
          type="number"
          {...form.getInputProps('pinCode')}
        />
      </SimpleGrid>
    </Container>
  );
}
