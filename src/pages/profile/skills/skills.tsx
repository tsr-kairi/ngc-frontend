import { ActionIcon, Container, Flex, Text } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

export interface SkillProps {
  title: string;
  logo: any;
  certified: boolean;
}

export default function Skill({ title, logo, certified }: SkillProps) {
  return (
    <Container
      py="md"
      style={{
        marginTop: '10px',
        padding: '12px',
        border: `2px solid ${certified ? 'green' : 'red'}`,
        borderRadius: '25px',
      }}
    >
      <Flex gap="sm" align="center">
        <ActionIcon color={certified ? 'green' : 'red'}>{logo} </ActionIcon>
        <Text style={{ color: certified ? 'green' : 'red' }}>{title}</Text>
        {certified ? (
          <IconCheck size="22px" color="green" />
        ) : (
          <IconX size="22px" color="red" />
        )}
      </Flex>
    </Container>
  );
}
