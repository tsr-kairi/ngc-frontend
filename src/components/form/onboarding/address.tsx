/* eslint-disable react/jsx-props-no-spreading */
import {
  ActionIcon,
  Box,
  Checkbox,
  Group,
  Select,
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
      pinCode: '',
    },
  });

  return (
    <Box>
      <Box>
        <Group>
          <ActionIcon variant="outline">
            <Text>CA</Text>
          </ActionIcon>
          <Text>Current address </Text>
        </Group>
        <Group position="apart" mt="sm" grow>
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
        </Group>
        <Group position="apart" mt="sm" grow>
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
        </Group>
        <Group position="apart" mt="sm" grow>
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
        </Group>
      </Box>
      <Box mt="xl">
        <Group>
          <Group>
            <ActionIcon variant="outline">
              <Text>PA</Text>
            </ActionIcon>
            <Text>Permanent address</Text>
          </Group>
          <Checkbox
            label={
              <Text sx={{ cursor: 'pointer' }}>
                Is the permanent address same as present address
              </Text>
            }
            color="green"
            style={{ cursor: 'pointer' }}
          />
        </Group>
        <Group position="apart" mt="sm" grow>
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
        </Group>
        <Group position="apart" mt="sm" grow>
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
        </Group>
        <Group position="apart" mt="sm" grow>
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
            type="number"
            label="Pin Code"
            placeholder="Enter your pin code"
            {...form.getInputProps('pinCode')}
          />
        </Group>
      </Box>
    </Box>
  );
}
