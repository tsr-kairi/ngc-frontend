export type ManageHistoryProps = {
  applicationDate: string;
  leaveType: 'Earned' | 'Sick' | 'Casual';
  fromDate: string;
  toDate: string;
  days: number;
  status: 'Approved' | 'Pending' | 'Rejected';
  transactionDate: string;
};

const data: ManageHistoryProps[] = [
  {
    applicationDate: '19 Jan 2023',
    leaveType: 'Earned',
    fromDate: '19-01-10',
    toDate: '19-01-10',
    days: 4,
    status: 'Approved',
    transactionDate: '19-01-10',
  },
  {
    applicationDate: '19 Jan 2023',
    leaveType: 'Sick',
    fromDate: '19-01-10',
    toDate: '19-01-10',
    days: 4,
    status: 'Pending',
    transactionDate: '19-01-10',
  },
  {
    applicationDate: '19 Jan 2023',
    leaveType: 'Casual',
    fromDate: '19-01-10',
    toDate: '19-01-10',
    days: 4,
    status: 'Rejected',
    transactionDate: '19-01-10',
  },
  {
    applicationDate: '19 Jan 2023',
    leaveType: 'Earned',
    fromDate: '19-01-10',
    toDate: '19-01-10',
    days: 4,
    status: 'Approved',
    transactionDate: '19-01-10',
  },
];

export default data;
