import { Avatar, Flex, Text } from '@mantine/core';

function EmployeeCard({ image, firstName, lastName }: EmployeeLite) {
  return (
    <Flex align="center">
      <Avatar src={image} />
      <Text>{firstName}</Text>
      <Text mx="3px">{lastName}</Text>
    </Flex>
  );
}

export default EmployeeCard;
