import { Box, Divider, Stack, Text } from '@mantine/core';
import TableReview from './tableReview';

function SalaryReview() {
  return (
    <Box>
      <Text fz="xl" weight={700} mb="md">
        Salary Revsision
      </Text>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          border: '2px groove',
          justifyContent: 'space-between',
        }}
        p="md"
      >
        <Stack p="md">
          <Text fz="20px" weight={400}>
            DURATION SINCE LAST REVISION
          </Text>
          <Text fz="25px" weight={500}>
            2 Months
          </Text>
          <Text fz="20px" weight={400} mt="lg">
            LAST REVISION PERCENTAGE
          </Text>
          <Text fz="25px" weight={500}>
            10%
          </Text>
        </Stack>
        <Divider
          orientation="vertical"
          sx={{ height: '100p' }}
          m="lg"
          size="sm"
        />
        <Stack pr="lg" pt="md">
          <Text fz="20px" weight={400}>
            LAST REVISION DATE
          </Text>
          <Text fz="25px" weight={500}>
            1 MAY 2021
          </Text>
          <Text fz="20px" weight={400} mt="lg">
            CTC AFTER LAST REVISION
          </Text>
          <Text fz="25px" weight={600}>
            $98,000
          </Text>
        </Stack>
      </Box>
      <TableReview />
    </Box>
  );
}

export default SalaryReview;
