import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  Modal,
  MultiSelect,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBrandAngular,
  IconBrandJavascript,
  IconBrandPython,
  IconBrandReact,
} from '@tabler/icons-react';
import Category from './category';

const Skills = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
  { value: 'riot', label: 'Riot' },
  { value: 'next', label: 'Next.js' },
  { value: 'blitz', label: 'Blitz.js' },
];

const categories = [
  {
    title: 'Programming Languages',
    skills: [
      { title: 'JavaScript', logo: <IconBrandJavascript />, certified: true },
      { title: 'Python', logo: <IconBrandPython />, certified: false },
      { title: 'Python', logo: <IconBrandPython />, certified: false },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { title: 'React', logo: <IconBrandReact />, certified: true },
      { title: 'Angular', logo: <IconBrandAngular />, certified: false },
      { title: 'Angular', logo: <IconBrandAngular />, certified: false },
    ],
  },
];

function ProfileSkills() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Container>
      <Flex sx={{ alignItems: 'start', justifyContent: 'space-between' }}>
        <Modal opened={opened} onClose={close} title="Add Skill">
          <Box sx={{ height: '200px' }}>
            <MultiSelect
              data={Skills}
              radius="md"
              my="lg"
              label="Your favorite frameworks/libraries"
              placeholder="Pick all that you like"
              searchable
              nothingFound="Nothing found"
            />
            <Button>Add Skill</Button>
          </Box>
        </Modal>
        <Box>
          {categories.map((category) => (
            <Category
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </Box>

        <Group position="center">
          <Button onClick={open}>Add skill</Button>
        </Group>
      </Flex>
    </Container>
  );
}

export default ProfileSkills;
