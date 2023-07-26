import { Box, Flex, Text } from '@mantine/core';
import EmployeeDetail from './employeeDetail';
import PaymentDetail from './paymentDetail';
import SalaryTable from './salaryTable';

function SalaryPayslip() {
  return (
    <Flex
      direction="column"
      justify="space-evenly"
      sx={{
        height: '100%',
      }}
    >
      <Flex
        sx={{
          marginBottom: '20px',
        }}
      >
        <Flex>
          <Text size={30}>Payslip for the Month of</Text>
          <Text
            size={30}
            weight={600}
            sx={{
              marginLeft: '10px',
            }}
          >
            Jul 2023
          </Text>
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
              sx={{
                backgroundColor: '#C9FCCB',
                padding: '10px 25px',
                borderRadius: '5px',
              }}
            >
              ₹ 98,800
            </Text>
          </Flex>
          <Text
            align="right"
            sx={{
              paddingTop: '10px',
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
