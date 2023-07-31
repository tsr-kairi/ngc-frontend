import { Box, Text } from '@mantine/core';
import SalaryTable from './Table';

const salary = [
  {
    SalaryComponent: 'Basic',
    currentMonthly: 10000,
    currentAnnual: 120000,
    revisedMonthly: 20000,
    revisedAnnual: 240000,
  },
  {
    SalaryComponent: 'HRA',
    currentMonthly: 10000,
    currentAnnual: 120000,
    revisedMonthly: 20000,
    revisedAnnual: 240000,
  },
  {
    SalaryComponent: 'Conveyance',
    currentMonthly: 10000,
    currentAnnual: 120000,
    revisedMonthly: 20000,
    revisedAnnual: 240000,
  },
  {
    SalaryComponent: 'Special Allowance',
    currentMonthly: 10000,
    currentAnnual: 120000,
    revisedMonthly: 20000,
    revisedAnnual: 240000,
  },
  {
    SalaryComponent: 'LTA',
    currentMonthly: 10000,
    currentAnnual: 120000,
    revisedMonthly: 20000,
    revisedAnnual: 240000,
  },
  {
    SalaryComponent: 'ESIC (Employer)',
    currentMonthly: 10000,
    currentAnnual: 120000,
    revisedMonthly: 20000,
    revisedAnnual: 240000,
  },
];

const deductions = [
  {
    SalaryComponent: 'ESIC (Employee)',
    currentMonthly: 12.011,
    currentAnnual: 144.132,
    revisedMonthly: 12.011,
    revisedAnnual: 144.132,
  },
  {
    SalaryComponent: 'ESIC (Employer)',
    currentMonthly: 12.011,
    currentAnnual: 144.132,
    revisedMonthly: 12.011,
    revisedAnnual: 144.132,
  },
  {
    SalaryComponent: 'EPF (Employee)',
    currentMonthly: 12.011,
    currentAnnual: 144.132,
    revisedMonthly: 12.011,
    revisedAnnual: 144.132,
  },
  {
    SalaryComponent: 'EPF (Employer)',
    currentMonthly: 12.011,
    currentAnnual: 144.132,
    revisedMonthly: 12.011,
    revisedAnnual: 144.132,
  },
  {
    SalaryComponent: 'Professional Tax',
    currentMonthly: 12,
    currentAnnual: 144,
    revisedMonthly: 12,
    revisedAnnual: 144,
  },
  {
    SalaryComponent: 'TDS',
    currentMonthly: 12,
    currentAnnual: 144,
    revisedMonthly: 12,
    revisedAnnual: 144,
  },
];

export default function SalaryRevisionView() {
  return (
    <Box>
      <Text size={30} weight={700}>
        Salary Revision View
      </Text>
      <SalaryTable salarys={salary} deductions={deductions} />
    </Box>
  );
}
