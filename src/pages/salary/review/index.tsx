import { Box, Divider, Stack, Text } from '@mantine/core';
import { currencyFormat } from '../loan';
import TableReview from './tableReview';

function SalaryReview() {
  return (
    <Box>
      <Text size={30} weight={700} mb="md">
        Salary Revsision
      </Text>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          border: '2px groove',
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
          ml="10vw"
          size="sm"
          mr="30px"
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
            {currencyFormat(98000)}
          </Text>
        </Stack>
      </Box>
      <TableReview />
    </Box>
  );
}

export default SalaryReview;
