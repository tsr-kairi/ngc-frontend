// eslint-disable-next-line import/no-cycle
export type TimesheetProps = {
  date: string;
  checkin: string;
  checkout: string;
  workHours: string;
  approvedHours: string;
  pendingHours: string;
  rejectedHours: string;
  slots: number;
  task: number | string;
  approval: 'approved' | 'rejected' | null;
  edit: number;
};

const data: TimesheetProps[] = [
  {
    date: '2023-01-04T08:03:36.832Z',
    hours: '3.7',
    task: 'Customer Directives Architect',
  },
  {
    date: '2023-01-04T08:03:36.832Z',
    hours: '3.7',
    task: 'Customer Directives Architect',
  },
  {
    date: '2023-01-04T08:03:36.832Z',
    hours: '3.7',
    task: 'Customer Directives Architect',
  },
  {
    date: '2023-01-04T08:03:36.832Z',
    hours: '3.7',
    task: 'Customer Directives Architect',
  },
  {
    date: '2023-01-04T08:03:36.832Z',
    hours: '3.7',
    task: 'Customer Directives Architect',
  },
  {
    date: '2023-01-04T08:03:36.832Z',
    hours: '3.7',
    task: 'Customer Directives Architect',
  },
  {
    date: '2023-01-04T08:03:36.832Z',
    hours: '3.7',
    task: 'Customer Directives Architect',
  },
  {
    date: '2023-01-04T08:03:36.832Z',
    hours: '3.7',
    task: 'Customer Directives Architect',
  },
  {
    date: '2023-01-04T08:03:36.832Z',
    hours: '3.7',
    task: 'Customer Directives Architect',
  },
  {
    date: '2023-01-04T08:03:36.832Z',
    hours: '3.7',
    task: 'Customer Directives Architect',
  },
  {
    date: '2023-01-04T08:03:36.832Z',
    hours: '3.7',
    task: 'Customer Directives Architect',
  },
  {
    date: '2023-01-04T08:03:36.832Z',
    hours: '3.7',
    task: 'Customer Directives Architect',
  },
  {
    date: '2023-01-04T08:03:36.832Z',
    hours: '3.7',
    task: 'Customer Directives Architect',
  },
];

export default data;
