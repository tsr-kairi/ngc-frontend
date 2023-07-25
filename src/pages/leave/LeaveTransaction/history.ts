export type HistoryProps = {
  transaction: 'Granted' | 'Availed';
  transactionDate: string;
  leaveType: 'Earned' | 'Sick' | 'Casual';
  fromDate: string;
  toDate: string;
  days: number;
  expiryDate: string;
};

const data: HistoryProps[] = [
  {
    transaction: 'Granted',
    transactionDate: '19-01-10',
    leaveType: 'Earned',
    fromDate: '19-01-10',
    toDate: '19-01-10',
    days: 4,
    expiryDate: '19-01-10',
  },
  {
    transaction: 'Availed',
    transactionDate: '19-01-10',
    leaveType: 'Sick',
    fromDate: '19-01-10',
    toDate: '19-01-10',
    days: 4,
    expiryDate: '19-01-10',
  },
  {
    transaction: 'Granted',
    transactionDate: '19-01-10',
    leaveType: 'Casual',
    fromDate: '19-01-10',
    toDate: '19-01-10',
    days: 4,
    expiryDate: '19-01-10',
  },
];

export default data;
