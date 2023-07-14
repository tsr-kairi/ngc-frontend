/* eslint-disable react/jsx-props-no-spreading */
import {
  ActionIcon,
  Box,
  FileInput,
  Group,
  Select,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Document() {
  const form = useForm({
    initialValues: {
      aadharNo: '',
      aadharScan: '',
      panNo: '',
      panScan: '',
      country: '',
      accountNo: '',
      confirmAccountNo: '',
      ifscCode: '',
      bankName: '',
      branchCode: '',
      passbookScan: '',
    },
  });

  return (
    <Box>
      <Box>
        <Group>
          <ActionIcon variant="outline">
            <Text>PA</Text>
          </ActionIcon>
          <Text>Personal Document</Text>
        </Group>
        <Group position="apart" mt="sm" grow>
          <TextInput
            required
            type="number"
            label="Aadhar No"
            placeholder="Enter your aadhar no"
            {...form.getInputProps('aadharNo')}
          />
          <FileInput
            required
            label="Aadhar Scan"
            placeholder="Choose file"
            {...form.getInputProps('aadharScan')}
          />
        </Group>
        <Group position="apart" mt="sm" grow>
          <TextInput
            required
            type="number"
            label="Pan No"
            placeholder="Enter your pan no"
            {...form.getInputProps('panNo')}
          />
          <FileInput
            required
            label="Pan Scan"
            placeholder="Choose file"
            {...form.getInputProps('panScan')}
          />
        </Group>
      </Box>
      <Box mt="xl">
        <Group>
          <Group>
            <ActionIcon variant="outline">
              <Text>PA</Text>
            </ActionIcon>
            <Text>Bank Document</Text>
          </Group>
        </Group>
        <Group position="apart" mt="sm" grow>
          <TextInput
            required
            type="number"
            label="Account No"
            placeholder="Enter your account no"
            {...form.getInputProps('accountNo')}
          />
          <TextInput
            required
            type="number"
            label="Confirm Account No"
            placeholder="Enter your confirm account no"
            {...form.getInputProps('confirmAccountNo')}
          />
        </Group>
        <Group position="apart" mt="sm" grow>
          <Select
            required
            label="Bank Name"
            placeholder="Select your bank"
            data={[
              { value: 'sbi', label: 'SBI' },
              { value: 'rbi', label: 'RBI' },
            ]}
            {...form.getInputProps('bankName')}
          />
          <TextInput
            required
            type="number"
            label="IFSC Code"
            placeholder="Enter your ifsc code"
            {...form.getInputProps('ifscCode')}
          />
        </Group>
        <Group position="apart" mt="sm" grow>
          <TextInput
            required
            type="number"
            label="Branch Code"
            placeholder="Enter your branch code"
            {...form.getInputProps('branchCode')}
          />
          <FileInput
            required
            label="Passbook Scan"
            placeholder="Choose file"
            {...form.getInputProps('passbookScan')}
          />
        </Group>
      </Box>
    </Box>
  );
}
