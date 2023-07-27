import { Box, Flex, Text } from '@mantine/core';

function EmployeeDetail() {
  const employmentData = [
    {
      item1: 'Name',
      desc1: 'Rama',
      item2: 'Joining Date',
      desc2: '01 Jun 2021',
    },
    {
      item1: 'Employee ID',
      desc1: 'NEXG001',
      item2: 'Designation',
      desc2: 'Sr. Software Engineer',
    },
    {
      item1: 'Location',
      desc1: 'Bangalore',
      item2: 'Department',
      desc2: 'Sr. Software Engineer',
    },

    // Add more objects as needed
  ];

  return (
    <Box
      sx={{
        padding: '25px 50px',
      }}
    >
      <Text>Employment</Text>
      {employmentData.map((item) => (
        <Flex
          key={item.item1}
          justify="space-between"
          sx={{
            padding: '10px 0px',
            marginBottom: '10px',
            whiteSpace: 'nowrap',
          }}
        >
          <Box
            sx={{
              width: '50%',
            }}
          >
            <Text color="grey" fw={400}>
              {item.item1}
            </Text>
            <Text fw={500}>{item.desc1}</Text>
          </Box>
          <Box
            sx={{
              marginRight: '50px',
              textAlign: 'left',
            }}
          >
            <Text color="grey">{item.item2}</Text>
            <Text fw={500}>{item.desc2}</Text>
          </Box>
        </Flex>
      ))}
    </Box>
  );
}

export default EmployeeDetail;
