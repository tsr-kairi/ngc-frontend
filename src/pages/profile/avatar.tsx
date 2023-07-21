import { Avatar, Paper, Text } from '@mantine/core';

function AvatarBox() {
  return (
    <Paper
      pl="sm"
      pr="sm"
      mt="sm"
      mb="lg"
      sx={{
        height: '250px',
        width: '100%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Avatar
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
        alt="Avatar"
        size="xl"
        radius="xl"
        color="blue"
      />

      <Text weight={500} mt="md">
        Jsoidhio
      </Text>

      <Text size="sm" color="dimmed">
        UI/UX Designer
      </Text>
    </Paper>
  );
}

export default AvatarBox;
