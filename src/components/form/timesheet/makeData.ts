// eslint-disable-next-line import/no-cycle
export type TimesheetProps = {
  uuid: string;
  date: string;
  checkin: string;
  checkout: string;
  workHours: string;
  approvedHours: string;
  pendingHours: string;
  rejectedHours: string;
  task: number | string;
  approval: ApprovalType;
  edit: number;
  subRows?: TimesheetProps[];
};

export type ApprovalType = 'Approved' | 'Rejected' | null;

const data: TimesheetProps[] = [
  {
    uuid: '1',
    date: '2023-01-04T08:03:36.832Z',
    checkin: '3.7',
    checkout: 'Customer Directives Architect',
    workHours: '09:00',
    approvedHours: '09:00',
    pendingHours: '09:00',
    rejectedHours: '09:00',
    task: 0,
    approval: null,
    edit: 4,
    subRows: [
      {
        uuid: '1',
        date: '2023-01-04T08:03:36.832Z',
        checkin: '3.7',
        checkout: 'Test ',
        workHours: '09:00',
        approvedHours: '09:00',
        pendingHours: '09:00',
        rejectedHours: '09:00',
        task: 0,
        approval: null,
        edit: 4,
      },
    ],
  },
  {
    uuid: '2',
    date: '2023-01-04T08:03:36.832Z',
    checkin: '3.7',
    checkout: 'Customer Directives Architect',
    workHours: '09:00',
    approvedHours: '09:00',
    pendingHours: '09:00',
    rejectedHours: '09:00',
    task: 4,
    approval: null,
    edit: 4,
  },
  {
    uuid: '3',
    date: '2023-01-04T08:03:36.832Z',
    checkin: '3.7',
    checkout: 'Customer Directives Architect',
    workHours: '09:00',
    approvedHours: '09:00',
    pendingHours: '09:00',
    rejectedHours: '09:00',
    task: 4,
    approval: null,
    edit: 4,
  },
  {
    uuid: '4',
    date: '2023-01-04T08:03:36.832Z',
    checkin: '3.7',
    checkout: 'Customer Directives Architect',
    workHours: '09:00',
    approvedHours: '09:00',
    pendingHours: '09:00',
    rejectedHours: '09:00',
    task: 4,
    approval: null,
    edit: 4,
  },
  {
    uuid: '5',
    date: '2023-01-04T08:03:36.832Z',
    checkin: '3.7',
    checkout: 'Customer Directives Architect',
    workHours: '09:00',
    approvedHours: '09:00',
    pendingHours: '09:00',
    rejectedHours: '09:00',
    task: 4,
    approval: null,
    edit: 4,
  },
  {
    uuid: '6',
    date: '2023-01-04T08:03:36.832Z',
    checkin: '3.7',
    checkout: 'Customer Directives Architect',
    workHours: '09:00',
    approvedHours: '09:00',
    pendingHours: '09:00',
    rejectedHours: '09:00',
    task: 4,
    approval: null,
    edit: 4,
  },
];

export default data;
