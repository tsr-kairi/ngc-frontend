import { Avatar, Box, Text } from '@mantine/core';

function AvatarBox() {
  return (
    <Box
      sx={{
        height: '250px',
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '40px',
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
    </Box>
  );
}

export default AvatarBox;
