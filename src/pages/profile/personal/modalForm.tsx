import { Button, Container, Flex, SimpleGrid, TextInput } from '@mantine/core';

function ModalForm() {
  return (
    <Container py="lg">
      <Flex gap="md">
        <TextInput mb="sm" label="First Name" placeholder="Rahul" required />{' '}
        <TextInput mb="sm" label="Last Name" placeholder="Kumar" required />
      </Flex>
      <TextInput mb="sm" label="Relation" placeholder="Brother" required />
      <TextInput
        mb="sm"
        type="number"
        label="Phone"
        placeholder="Enter your phone"
        required
      />{' '}
      <TextInput
        mb="sm"
        label="Email"
        type="email"
        placeholder="rahulkumar@gmail.com"
        required
      />
      <SimpleGrid cols={2} sx={{ width: 'full' }}>
        <Button size="md" variant="outline">
          Cancel
        </Button>
        <Button size="md">Save</Button>
      </SimpleGrid>
    </Container>
  );
}

export default ModalForm;
