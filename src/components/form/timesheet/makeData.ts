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
  task: any;
  approval: 'approved' | 'rejected' | null;
  edit: any;
};

const data: TimesheetProps[] = [
  {
    date: '2023-01-04T08:03:36.832Z',
    checkin: '3.7',
    checkout: 'Customer Directives Architect',
    workHours: '09:00',
    approvedHours: '09:00',
    pendingHours: '09:00',
    rejectedHours: '09:00',
    slots: 4,
    task: 0,
    approval: 'approved',
    edit: 4,
  },
  {
    date: '2023-01-04T08:03:36.832Z',
    checkin: '3.7',
    checkout: 'Customer Directives Architect',
    workHours: '09:00',
    approvedHours: '09:00',
    pendingHours: '09:00',
    rejectedHours: '09:00',
    slots: 4,
    task: 4,
    approval: null,
    edit: 4,
  },
  {
    date: '2023-01-04T08:03:36.832Z',
    checkin: '3.7',
    checkout: 'Customer Directives Architect',
    workHours: '09:00',
    approvedHours: '09:00',
    pendingHours: '09:00',
    rejectedHours: '09:00',
    slots: 4,
    task: 4,
    approval: null,
    edit: 4,
  },
  {
    date: '2023-01-04T08:03:36.832Z',
    checkin: '3.7',
    checkout: 'Customer Directives Architect',
    workHours: '09:00',
    approvedHours: '09:00',
    pendingHours: '09:00',
    rejectedHours: '09:00',
    slots: 4,
    task: 4,
    approval: 'rejected',
    edit: 4,
  },
  {
    date: '2023-01-04T08:03:36.832Z',
    checkin: '3.7',
    checkout: 'Customer Directives Architect',
    workHours: '09:00',
    approvedHours: '09:00',
    pendingHours: '09:00',
    rejectedHours: '09:00',
    slots: 4,
    task: 4,
    approval: 'approved',
    edit: 4,
  },
];

export default data;
