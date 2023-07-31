/* eslint-disable jsx-a11y/control-has-associated-label */
import { Table, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  headerStyle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    height: '50px',
    backgroundColor: `${
      theme.colorScheme === 'dark' ? `${theme.colors.gray[8]}` : `#ffffff`
    }`,
  },
  endStyle: {
    textTransform: 'uppercase',
    height: '60px',
    backgroundColor: `${
      theme.colorScheme === 'dark'
        ? `${theme.colors.blue[9]}`
        : `${theme.colors.blue[6]}`
    }`,
  },
  cellStyle: {
    fontSize: '16px !important',
    color: `${
      theme.colorScheme === 'dark'
        ? `${theme.colors.gray[0]}`
        : `${theme.colors.gray[8]}}`
    }`,
  },
}));

export default function SalaryTable({
  salarys,
  deductions,
}: {
  salarys: SalaryRevision[];
  deductions: SalaryRevision[];
}) {
  const { classes } = useStyles();
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
  function roundToNearest10(number: number) {
    return Math.ceil(number / 10) * 10;
  }
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
    <Table withBorder withColumnBorders>
      <thead>
        <tr className={classes.headerStyle}>
          <th />
          <th
            style={{
              fontSize: '18px',
            }}
            className={classes.headerStyle}
            colSpan={2}
          >
            Current Amount (INR)
          </th>
          <th
            style={{
              fontSize: '18px',
            }}
            className={classes.headerStyle}
            colSpan={2}
          >
            Revised Amount (INR)
          </th>
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
        <tr className={classes.headerStyle}>
          <td className={classes.cellStyle}>Gross Salary</td>
          <td
            style={{
              fontSize: '20px',
            }}
            className={classes.cellStyle}
          >
            {grossSalary.grossSalaryCurrentMonth}
          </td>
          <td className={classes.cellStyle}>
            {grossSalary.grossSalaryCurrentYear}
          </td>
          <td className={classes.cellStyle}>
            {grossSalary.grossSalaryRevisedMonth}
          </td>
          <td className={classes.cellStyle}>
            {grossSalary.grossSalaryRevisedYear}
          </td>
        </tr>
        {deductionRows}
        <tr className={classes.headerStyle}>
          <td className={classes.cellStyle}>Deductions</td>
          <td className={classes.cellStyle}>
            {grossDeductions.grossSalaryCurrentMonth}
          </td>
          <td className={classes.cellStyle}>
            {grossDeductions.grossSalaryCurrentYear}
          </td>
          <td className={classes.cellStyle}>
            {grossDeductions.grossSalaryRevisedMonth}
          </td>
          <td className={classes.cellStyle}>
            {grossDeductions.grossSalaryRevisedYear}
          </td>
        </tr>
        <tr className={classes.endStyle}>
          <td
            style={{
              fontWeight: 'bold',
              fontSize: '16px',
              color: 'white',
            }}
          >
            Net In-Hand Salary
          </td>
          <th
            style={{
              color: 'white',
              fontSize: '16px',
            }}
          >
            {roundToNearest10(
              grossSalary.grossSalaryCurrentMonth -
                grossDeductions.grossSalaryCurrentMonth
            )}
          </th>
          <th
            style={{
              color: 'white',
              fontSize: '18px',
            }}
          >
            {roundToNearest10(
              grossSalary.grossSalaryCurrentYear -
                grossDeductions.grossSalaryCurrentYear
            )}
          </th>
          <th
            style={{
              color: 'white',
              fontSize: '18px',
            }}
          >
            {roundToNearest10(
              grossSalary.grossSalaryRevisedMonth -
                grossDeductions.grossSalaryRevisedMonth
            )}
          </th>
          <th
            style={{
              color: 'white',
              fontSize: '18px',
            }}
          >
            {roundToNearest10(
              grossSalary.grossSalaryRevisedYear -
                grossDeductions.grossSalaryRevisedYear
            )}
          </th>
        </tr>
      </tbody>
    </Table>
  );
}
