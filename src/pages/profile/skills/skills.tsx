import { Button, Container, Flex, Image, Text } from '@mantine/core';

export interface SkillProps {
  title: string;
  logo: string;
  certified: boolean;
}

export default function Skill({ title, logo, certified }: SkillProps) {
  return (
    <Container py="md" style={{ marginTop: '10px', paddingLeft: '0px' }}>
      <Flex gap="sm" align="center">
        <Image radius="md" src={logo} alt={title} width="25" height="25" />
        <Text>{title}</Text>
        <Button size="sm" color={certified ? 'blue' : 'red'}>
          {certified ? 'Certified' : 'Not Certified'}
        </Button>
      </Flex>
    </Container>
  );
}
