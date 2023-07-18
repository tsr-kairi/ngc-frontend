import {
  Box,
  Button,
  Flex,
  Group,
  Modal,
  MultiSelect,
  SimpleGrid,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
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
      { title: 'JavaScript', logo: '/skills/js.jpeg', certified: true },
      { title: 'Python', logo: '/skills/py.jpeg', certified: false },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { title: 'React', logo: '/skills/rct.jpeg', certified: true },
      { title: 'Angular', logo: '/skills/ang.jpeg', certified: false },
    ],
  },
];

function ProfileSkills() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
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
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} mb="sm">
        {categories.map((category) => (
          <Category
            key={category.title}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </SimpleGrid>
      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </Flex>
  );
}

export default ProfileSkills;
