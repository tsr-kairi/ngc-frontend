/* eslint-disable react/jsx-props-no-spreading */
import { Select, SimpleGrid, Table, Text, TextInput } from '@mantine/core';
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
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} mb="sm">
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
      </SimpleGrid>
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} mb="sm">
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
        <TextInput
          label="Blood Group"
          placeholder="B+ve"
          {...form.getInputProps('streetLine2')}
        />
      </SimpleGrid>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} mb="sm">
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
      </SimpleGrid>

      {/* <Group position="center" mt="md">
        <Button color="gray" size="md">
          {' '}
          cancel
        </Button>
        <Button size="md"> Confirm</Button>
      </Group> */}

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
