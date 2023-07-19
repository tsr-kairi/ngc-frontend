import { Container, Text } from '@mantine/core';

interface CategoryProps {
  title: string;
  skills: string;
}

export default function Category({ title, skills }: CategoryProps) {
  return (
    <Container my="sm" sx={{ paddingLeft: '0px' }}>
      <Text size="xl" weight={700}>
        {title}
      </Text>
      <Text size="xl" weight={700}>
        {skills}
      </Text>
    </Container>
  );
}
