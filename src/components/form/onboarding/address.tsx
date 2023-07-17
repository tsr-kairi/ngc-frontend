/* eslint-disable react/jsx-props-no-spreading */
import {
  ActionIcon,
  Box,
  Checkbox,
  Group,
  Select,
  SimpleGrid,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { ChangeEvent, useState } from 'react';

export default function Address() {
  const [showPermanentAddress, setShowPermanentAddress] = useState(false);
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

  // ShowPermanentAddress handler
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowPermanentAddress(event.target.checked);
  };

  return (
    <Box>
      <Box>
        <Group>
          <ActionIcon variant="outline">
            <Text>CA</Text>
          </ActionIcon>
          <Text>Current address </Text>
        </Group>
        <TextInput
          my="sm"
          label="Street line 1"
          placeholder="Enter your “Street” line 1"
          {...form.getInputProps('streetLine1')}
        />
        <TextInput
          mb="sm"
          label="Street line 2"
          placeholder="Enter your “Street” line 2"
          {...form.getInputProps('streetLine2')}
        />
        <SimpleGrid
          cols={2}
          breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
          mb="sm"
        >
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
        </SimpleGrid>

        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
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
      </Box>
      <Checkbox
        mt="xl"
        label={
          <Text sx={{ cursor: 'pointer' }}>
            {/* Is the permanent address not same as present address */}
            In case of a variance between permanent and current address, kindly
            click to proceed.
          </Text>
        }
        checked={showPermanentAddress}
        onChange={handleCheckboxChange}
      />
      {showPermanentAddress && (
        <Box mt="xl">
          <Group>
            <Group>
              <ActionIcon variant="outline">
                <Text>PA</Text>
              </ActionIcon>
              <Text>Permanent address</Text>
            </Group>
            {/* <Checkbox
            label={
              <Text sx={{ cursor: 'pointer' }}>
                Is the permanent address not same as present address
              </Text>
            }
            onClick={() => setOthersChecked(!othersChecked)}
          /> */}
          </Group>
          <TextInput
            my="sm"
            label="Street line 1"
            placeholder="Enter your “Street” line 1"
            {...form.getInputProps('streetLine1')}
          />
          <TextInput
            mb="sm"
            label="Street line 2"
            placeholder="Enter your “Street” line 2"
            {...form.getInputProps('streetLine2')}
          />
          <SimpleGrid
            cols={2}
            breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
            mb="sm"
          >
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
          </SimpleGrid>
          <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
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
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
}
