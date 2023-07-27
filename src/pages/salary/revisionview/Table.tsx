/* eslint-disable jsx-a11y/control-has-associated-label */
import { Table } from '@mantine/core';

export default function SalaryTable({
  salarys,
  deductions,
}: {
  salarys: SalaryRevision[];
  deductions: SalaryRevision[];
}) {
  const salaryRows = salarys.map((salary) => (
    <tr key={salary.SalaryComponent}>
      <td>{salary.SalaryComponent}</td>
      <td>{salary.currentMonthly}</td>
      <td>{salary.currentAnnual}</td>
      <td>{salary.revisedMonthly}</td>
      <td>{salary.revisedAnnual}</td>
    </tr>
  ));
  const deductionRows = deductions.map((salary) => (
    <tr key={salary.SalaryComponent}>
      <td>{salary.SalaryComponent}</td>
      <td>{salary.currentMonthly}</td>
      <td>{salary.currentAnnual}</td>
      <td>{salary.revisedMonthly}</td>
      <td>{salary.revisedAnnual}</td>
    </tr>
  ));
  const grossSalary = salarys.reduce(
    (acc, curr) => {
      acc.grossSalaryCurrentMonth += curr.currentMonthly;
      acc.grossSalaryCurrentYear += curr.currentAnnual;
      acc.grossSalaryRevisedMonth += curr.revisedMonthly;
      acc.grossSalaryRevisedYear += curr.revisedAnnual;
      return acc;
    },
    {
      grossSalaryCurrentMonth: 0,
      grossSalaryCurrentYear: 0,
      grossSalaryRevisedMonth: 0,
      grossSalaryRevisedYear: 0,
    }
  );
  const grossDeductions = deductions.reduce(
    (acc, curr) => {
      acc.grossSalaryCurrentMonth += curr.currentMonthly;
      acc.grossSalaryCurrentYear += curr.currentAnnual;
      acc.grossSalaryRevisedMonth += curr.revisedMonthly;
      acc.grossSalaryRevisedYear += curr.revisedAnnual;
      return acc;
    },
    {
      grossSalaryCurrentMonth: 0,
      grossSalaryCurrentYear: 0,
      grossSalaryRevisedMonth: 0,
      grossSalaryRevisedYear: 0,
    }
  );

  return (
    <Table highlightOnHover withBorder withColumnBorders>
      <thead>
        <tr
          style={{
            textTransform: 'uppercase',
            fontSize: '40px',
            height: '70px',
            backgroundColor: '#ffffff',
          }}
        >
          <th
            style={{
              borderTop: 'none !important',
              borderLeft: 'none !important',
            }}
          />
          <th colSpan={2}>Current Amount (INR)</th>
          <th colSpan={2}>Revised Amount (INR)</th>
        </tr>
        <tr
          style={{
            textTransform: 'uppercase',
          }}
        >
          <th>Salary Component</th>
          <th>Monthly</th>
          <th>Yearly</th>
          <th>Monthly</th>
          <th>Yearly</th>
        </tr>
      </thead>
      <tbody>
        {salaryRows}
        <tr
          style={{
            height: '70px',
            backgroundColor: '#ffffff',
            fontWeight: 'bold',
          }}
        >
          <td
            style={{
              fontWeight: 'normal',
            }}
          >
            Gross Salary
          </td>
          <td>{grossSalary.grossSalaryCurrentMonth}</td>
          <td>{grossSalary.grossSalaryCurrentYear}</td>
          <td>{grossSalary.grossSalaryRevisedMonth}</td>
          <td>{grossSalary.grossSalaryRevisedYear}</td>
        </tr>
        {deductionRows}
        <tr
          style={{
            height: '70px',
            backgroundColor: '#ffffff',
            fontWeight: 'bold',
          }}
        >
          <td
            style={{
              fontWeight: 'normal',
            }}
          >
            Deductions
          </td>
          <td>{grossDeductions.grossSalaryCurrentMonth}</td>
          <td>{grossDeductions.grossSalaryCurrentYear}</td>
          <td>{grossDeductions.grossSalaryRevisedMonth}</td>
          <td>{grossDeductions.grossSalaryRevisedYear}</td>
        </tr>
        <tr
          style={{
            height: '70px',
            backgroundColor: '#B5D4FF',
            fontWeight: 'bold',
          }}
        >
          <td
            style={{
              fontWeight: 'normal',
            }}
          >
            Net In-Hand Salary
          </td>
          <th>{grossDeductions.grossSalaryCurrentMonth}</th>
          <th>{grossDeductions.grossSalaryCurrentYear}</th>
          <th>{grossDeductions.grossSalaryRevisedMonth}</th>
          <th>{grossDeductions.grossSalaryRevisedYear}</th>
        </tr>
      </tbody>
    </Table>
  );
}
