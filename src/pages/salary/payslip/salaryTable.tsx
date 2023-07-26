import { Flex, Table } from '@mantine/core';

const earnings = [
  { Earnings: 'Basic', Amount: 12.011 },
  { Earnings: 'HRA', Amount: 12.011 },
  { Earnings: 'LTA', Amount: 12.011 },
  { Earnings: 'Special', Amount: 12.011 },
];
const deductions = [
  { Deduction: 'EPF (Employee)', Amount: 12.011 },
  { Deduction: 'EPF (Employee)', Amount: 12.011 },
  { Deduction: 'Professional  Tax', Amount: 12.011 },
  { Deduction: 'TDS', Amount: 12.011 },
  { Deduction: 'ESIC (Employee)', Amount: 12.011 },
  { Deduction: 'ESIC (Employee)', Amount: 12.011 },
];

function EarningsTable() {
  const rows = earnings.map((element) => (
    <tr key={element.Earnings}>
      <td>{element.Earnings}</td>
      <td>{element.Amount}</td>
    </tr>
  ));

  return (
    <Table verticalSpacing="sm">
      <thead>
        <tr>
          <th>Earnings</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

function DeductionTable() {
  const rows = deductions.map((element) => (
    <tr key={element.Deduction}>
      <td>{element.Deduction}</td>
      <td>{element.Amount}</td>
    </tr>
  ));

  return (
    <Table
      verticalSpacing="sm"
      sx={{
        borderLeft: '1px solid #939393',
      }}
    >
      <thead>
        <tr>
          <th>Deductions</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

export default function SalaryTable() {
  return (
    <Flex
      align="start"
      sx={{
        border: '1px solid #939393',
      }}
    >
      <EarningsTable />
      <DeductionTable />
    </Flex>
  );
}
