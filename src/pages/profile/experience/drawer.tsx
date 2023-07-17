import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  MultiSelect,
  Select,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { useForm } from '@mantine/form';
import { IconPhotoPlus } from '@tabler/icons-react';
import { useRef, useState } from 'react';

const Skills = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
  { value: 'riot', label: 'Riot' },
  { value: 'next', label: 'Next.js' },
  { value: 'blitz', label: 'Blitz.js' },
];

function DrawerContent() {
  const form = useForm({
    initialValues: {
      title: '',
      CompanyName: '',
      Location: '',
      StartMonth: '',
      StartYear: '',
      EndMonth: '',
      EndYear: '',
      industry: '',
      description: '',
    },
  });

  const openRef = useRef<() => void>(null);
  const [checked, setChecked] = useState(false);
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '15px',
      }}
    >
      <TextInput
        label="Title"
        placeholder="Software Engineer"
        radius="md"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...form.getInputProps('title')}
      />
      <TextInput
        label="Company Name"
        placeholder="Google"
        radius="md"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...form.getInputProps('CompanyName')}
      />
      <Select
        label="Employement Type"
        placeholder="Part Time"
        searchable
        radius="md"
        nothingFound="No options"
        data={[
          { value: 'fulltime', label: 'Full Time' },
          { value: 'parttime', label: 'Part Time' },
          { value: 'freelance', label: 'Internship' },
          { value: 'contract', label: 'Contract' },
        ]}
      />
      <TextInput
        label="Location"
        placeholder="Bangalore"
        radius="md"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...form.getInputProps('Location')}
      />

      <Select
        label="Locarion Type"
        placeholder="Remote"
        searchable
        radius="md"
        nothingFound="No options"
        data={[
          { value: 'remote', label: 'Remote' },
          { value: 'onsite', label: 'Onsite' },
          { value: 'hybrid', label: 'Hybrid' },
        ]}
      />
      {/* <Text size="sm">Start Date</Text> */}
      <Box
        sx={{
          display: 'flex',
          gap: '15px',
          alignItems: 'end',
        }}
      >
        <TextInput
          label="Start Date"
          placeholder="March"
          radius="md"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...form.getInputProps('StartMonth')}
        />
        <TextInput
          placeholder="2021"
          radius="md"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...form.getInputProps('StartYear')}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '15px',
          alignItems: 'end',
        }}
      >
        <TextInput
          label="End Date"
          placeholder="March"
          radius="md"
          disabled={checked}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...form.getInputProps('EndMonth')}
        />
        <TextInput
          placeholder="2021"
          radius="md"
          disabled={checked}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...form.getInputProps('EndYear')}
        />
      </Box>
      <Checkbox
        label="I am still working here"
        color="teal"
        radius="md"
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
      <Textarea
        label="Description"
        placeholder="Description"
        radius="md"
        autosize
        minRows={2}
        maxRows={4}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        <Box>
          <Text sx={{ marginBottom: '0px' }} size="lg" weight="bold">
            Skills
          </Text>
          <Text sx={{ marginTop: '0px' }} size="sm" weight="normal">
            We recommend adding your top 5 used in this role. They will also
            appear in your Skills section
          </Text>
        </Box>
        <MultiSelect
          data={Skills}
          radius="md"
          label="Your favorite frameworks/libraries"
          placeholder="Pick all that you like"
          searchable
          nothingFound="Nothing found"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        <Box>
          <Text sx={{ marginBottom: '0px' }} size="lg" weight="bold">
            Media
          </Text>
          <Text sx={{ marginTop: '0px' }} size="sm" weight="normal">
            Add media like images, documents, sites or presentations{' '}
          </Text>
        </Box>
        <Dropzone onDrop={() => {}} openRef={openRef}>
          <Flex gap="md">
            <IconPhotoPlus size={30} />
            <div>
              <Text size="sm" weight="bold">
                Drag and drop or click to upload
              </Text>
              <Text size="sm" weight="normal">
                Maximum file size is 10mb
              </Text>
            </div>
          </Flex>
        </Dropzone>
      </Box>
      <Button my="lg" type="submit" radius="md">
        Add Experience
      </Button>
    </Container>
  );
}

export default DrawerContent;
