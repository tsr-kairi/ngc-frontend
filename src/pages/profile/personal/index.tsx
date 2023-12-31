/* eslint-disable react/jsx-props-no-spreading */
import {
  ActionIcon,
  Box,
  Button,
  Container,
  Flex,
  Modal,
  Select,
  SimpleGrid,
  Table,
  Text,
  TextInput,
  Tooltip,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { IconEdit, IconSquarePlus } from '@tabler/icons-react';
import { useState } from 'react';
import ModalForm from './modalForm';

const elements = [
  { name: 6, relationship: 12.011, phone: 'C', email: 'Carbon' },
  { name: 7, relationship: 14.007, phone: 'N', email: 'Nitrogen' },
  { name: 7, relationship: 14.007, phone: 'N', email: 'Nitrogen' },
  { name: 7, relationship: 14.007, phone: 'N', email: 'Nitrogen' },
  { name: 7, relationship: 14.007, phone: 'N', email: 'Nitrogen' },
  { name: 7, relationship: 14.007, phone: 'N', email: 'Nitrogen' },
  { name: 7, relationship: 14.007, phone: 'N', email: 'Nitrogen' },
  { name: 7, relationship: 14.007, phone: 'N', email: 'Nitrogen' },
  { name: 7, relationship: 14.007, phone: 'N', email: 'Nitrogen' },
  { name: 7, relationship: 14.007, phone: 'N', email: 'Nitrogen' },
  { name: 7, relationship: 14.007, phone: 'N', email: 'Nitrogen' },
  { name: 8, relationship: 14.007, phone: 'N', email: 'Mail' },
  { name: 8, relationship: 14.007, phone: 'N', email: 'Mail' },
  { name: 8, relationship: 14.007, phone: 'N', email: 'Mail' },
  { name: 8, relationship: 14.007, phone: 'N', email: 'Mail' },
  { name: 8, relationship: 14.007, phone: 'N', email: 'Mail' },
  { name: 8, relationship: 14.007, phone: 'N', email: 'Mail' },
  { name: 8, relationship: 14.007, phone: 'N', email: 'Mail' },
  { name: 6, relationship: 14.007, phone: 'N', email: 'Mail' },
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

  const [edit, setEdit] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    // <ScrollArea
    //   h="78vh"
    //   offsetScrollbars
    //   styles={() => ({
    //     scrollbar: {
    //       height: '300px',
    //     },
    //   })}
    // >
    <Container>
      <Flex sx={{ alignItems: 'right', justifyContent: 'end' }}>
        <ActionIcon onClick={() => setEdit(!edit)} variant="subtle">
          <IconEdit size="3rem" />
        </ActionIcon>
      </Flex>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} mb="sm">
        <TextInput
          label="First name"
          placeholder="Jane"
          disabled={!edit}
          {...form.getInputProps('streetLine1')}
        />
        <TextInput
          label="Last name"
          placeholder="Jane"
          disabled={!edit}
          {...form.getInputProps('streetLine2')}
        />
        <TextInput
          label="Email"
          placeholder="Enter your alternate email"
          type="email"
          required
          disabled={!edit}
          {...form.getInputProps('alternateEmail')}
        />
        <TextInput
          label="Alternate Email"
          placeholder="Enter your alternate email"
          type="email"
          required
          disabled={!edit}
          {...form.getInputProps('alternateEmail')}
        />
        <TextInput
          mb="sm"
          type="number"
          label="Phone"
          disabled={!edit}
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
          disabled={!edit}
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
          disabled={!edit}
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
          disabled={!edit}
          {...form.getInputProps('gender')}
        />
        <TextInput
          label="Blood Group"
          placeholder="B+ve"
          disabled={!edit}
          {...form.getInputProps('streetLine2')}
        />
      </SimpleGrid>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} mb="sm">
        <Select
          label="Nationality"
          placeholder="Select your country"
          disabled={!edit}
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
          disabled={!edit}
          data={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'others', label: 'Others' },
          ]}
          required
          {...form.getInputProps('gender')}
        />
      </SimpleGrid>
      <Button
        size="md"
        sx={{
          visibility: `${edit ? 'visible' : 'hidden'}`,
          paddingLeft: '40px',
          paddingRight: '40px',
        }}
      >
        Save Changes
      </Button>

      {/* <Group position="center" mt="md">
        <Button color="gray" size="md">
          {' '}
          cancel
        </Button>
        <Button size="md"> Confirm</Button>
      </Group> */}
      <Flex sx={{ alignItems: 'start', justifyContent: 'space-between' }}>
        <Text fz="lg" mt="sm" mb="md" weight={600}>
          Emergency Contact Details
        </Text>
        <Modal opened={opened} onClose={close} title="Add your Contact Details">
          <Box>
            <ModalForm />
          </Box>
        </Modal>

        <ActionIcon onClick={open} mt="15px">
          <Tooltip label="add contact">
            <IconSquarePlus />
          </Tooltip>
        </ActionIcon>
      </Flex>
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
    </Container>
    // </ScrollArea>
  );
}

export default ProfileInfo;
