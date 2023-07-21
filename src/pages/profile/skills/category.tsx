import { Container, Flex, Text } from '@mantine/core';
import Skill, { SkillProps } from './skills';

interface CategoryProps {
  title: string;
  skills: SkillProps[];
}

export default function Category({ title, skills }: CategoryProps) {
  return (
    <Container my="sm" sx={{ paddingLeft: '0px' }}>
      <Text size="xl" weight={700}>
        {title}
      </Text>
      <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="row"
        wrap="wrap"
      >
        {skills.map((skill) => (
          <Skill
            key={skill.title}
            title={skill.title}
            logo={skill.logo}
            certified={skill.certified}
          />
        ))}
      </Flex>
    </Container>
  );
}
