/* eslint-disable react/jsx-props-no-spreading */
import { Button, Group, Select, Table, TextInput, Text } from '@mantine/core';
import { useForm } from '@mantine/form';

const elements = [
  { name: 6, relationship: 12.011, phone: 'C', email: 'Carbon' },
  { name: 7, relationship: 14.007, phone: 'N', email: 'Nitrogen' },
];

function ProfileInfo() {
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

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.name}</td>
      <td>{element.email}</td>
      <td>{element.phone}</td>
      <td>{element.relationship}</td>
    </tr>
  ));

  return (
    <div className="">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px',
        }}
      >
        <TextInput
          label="First name"
          placeholder="Jane"
          {...form.getInputProps('streetLine1')}
        />
        <TextInput
          label="Last name"
          placeholder="Jane"
          {...form.getInputProps('streetLine2')}
        />
        <TextInput
          label="Email"
          placeholder="Enter your alternate email"
          type="email"
          required
          {...form.getInputProps('alternateEmail')}
        />
        <TextInput
          label="Alternate Email"
          placeholder="Enter your alternate email"
          type="email"
          required
          {...form.getInputProps('alternateEmail')}
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
          mb="sm"
          label="Date of Birth"
          placeholder="12/12/12"
          type="number"
          required
          {...form.getInputProps('alternatePhone')}
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
        <Select
          label="Nationality"
          placeholder="Select your country"
          data={[
            { value: 'in', label: 'India' },
            { value: 'usa', label: 'America' },
          ]}
          {...form.getInputProps('country')}
        />
        <Select
          mb="sm"
          placeholder="Marital Status"
          label="Any"
          data={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'others', label: 'Others' },
          ]}
          required
          {...form.getInputProps('gender')}
        />
        <TextInput
          label="Blood Group"
          placeholder="B+ve"
          {...form.getInputProps('streetLine2')}
        />
        <div style={{ paddingTop: '20px' }}>
          <Group>
            <Button color="gray" size="md">
              {' '}
              cancel
            </Button>
            <Button color="violet" size="md">
              {' '}
              Confirm
            </Button>
          </Group>
        </div>
      </div>
      <Text fz="lg" mt="md" weight={600}>
        Emergency Contact Details
      </Text>
      <Table>
        <thead>
          <tr>
            <th>Name </th>
            <th>Relationship</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}

export default ProfileInfo;
