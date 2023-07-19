import { Container, Group, Progress, Text } from '@mantine/core';

function ProfileTopBar({
  title,
  subTitle,
  progress,
}: {
  title: string;
  subTitle: string;
  progress: number;
}) {
  return (
    <Container
      sx={{
        width: '100%',
      }}
    >
      <Group position="apart" mt="xs">
        <Text fz="sm" color="dimmed">
          Progress
        </Text>
        <Text fz="sm" color="dimmed">
          {`${progress}%`}
        </Text>
      </Group>
      <Progress value={progress} mt={5} />
      <div style={{ paddingTop: '20px' }}>
        <Text fz="xl" weight={900}>
          {title}
        </Text>
        <Text fz="md">{subTitle}</Text>
      </div>
    </Container>
  );
}

export default ProfileTopBar;
