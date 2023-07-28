import { Box, Flex, Text } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import { IconDownload } from '@tabler/icons-react';
import { useState } from 'react';
import EmployeeDetail from './employeeDetail';
import PaymentDetail from './paymentDetail';
import SalaryTable from './salaryTable';

function SalaryPayslip() {
  const [value, setValue] = useState<Date | null>(new Date());

  return (
    <Flex
      direction="column"
      justify="space-evenly"
      sx={{
        height: '100%',
      }}
    >
      <Flex
        justify="space-between"
        sx={{
          marginBottom: '20px',
          width: '100%',
        }}
      >
        <Flex>
          <Text size={30}>Payslip for the Month of</Text>
          <Text
            size={30}
            weight={600}
            color="blue.9"
            sx={{
              marginLeft: '10px',
            }}
          >
            {value?.toLocaleString('default', {
              month: 'long',
              year: 'numeric',
            })}
          </Text>
        </Flex>
        <Flex
          gap="md"
          align="center"
          sx={{
            minWidth: '300px',
          }}
        >
          <IconDownload size={30} />
          <MonthPickerInput
            placeholder="Pick dates"
            value={value}
            onChange={setValue}
            style={{ width: '100%' }}
          />
        </Flex>
      </Flex>
      <Flex>
        <Box
          sx={{
            width: '100%',
          }}
        >
          <SalaryTable />
          <Flex
            justify="space-between"
            sx={{
              border: '1px solid #939393',
              marginTop: '20px',
              padding: '25px 10px',
              textTransform: 'uppercase',
            }}
          >
            <Text weight={500} size={17}>
              Gross Earning
            </Text>
            <Text weight={700} size={17}>
              ₹ 1,25,000
            </Text>
          </Flex>
          <Flex
            justify="space-between"
            sx={{
              border: '1px solid #939393',
              padding: '25px 10px',
              borderTop: 'none',
              textTransform: 'uppercase',
            }}
          >
            <Text weight={500} size={17}>
              Gross Deduction
            </Text>
            <Text weight={700} size={17}>
              ₹ 1,25,000
            </Text>
          </Flex>
          <Flex
            justify="space-between"
            sx={{
              marginTop: '20px',
              borderBottom: '1px solid #939393',
              padding: '25px 10px',
              textTransform: 'uppercase',
            }}
          >
            <Box>
              <Text weight={600} size={17}>
                TOTAL NET PAYABLE
              </Text>
              <Text weight={400} size={17}>
                Gross Earnings - Total Deductions
              </Text>
            </Box>
            <Text
              weight={600}
              size={27}
              sx={(theme) => ({
                backgroundColor: `${
                  theme.colorScheme === 'dark' ? 'green' : '#C9FCCB'
                }`,
                color: `${theme.colorScheme === 'dark' ? '#ffffff' : `black`}`,
                padding: '10px 25px',
                borderRadius: '5px',
              })}
            >
              ₹ 98,800
            </Text>
          </Flex>
          <Text
            align="right"
            sx={{
              paddingTop: '10px',
              textTransform: 'uppercase',
            }}
          >
            Amount In Words : ninety Eight thousand eight hundred only
          </Text>
        </Box>
        <Box
          sx={{
            border: '1px solid #939393',
            height: '100%',
            marginLeft: '20px',
          }}
        >
          <EmployeeDetail />
          <PaymentDetail />
        </Box>
      </Flex>
    </Flex>
  );
}

export default SalaryPayslip;
