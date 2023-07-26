export type LoanAPPHistoryProps = {
  applicationDate: string;
  loanAmount: string;
  availableCreditLimit: string;
  reason: string;
  status: 'Approved' | 'Rejected' | 'Pending';
};

const data: LoanAPPHistoryProps[] = [
  {
    applicationDate: '19 Jan 2023',
    loanAmount: '12000',
    availableCreditLimit: '$82000',
    reason: 'For Some Personal Reason',
    status: 'Approved',
  },
  {
    applicationDate: '19 Jan 2023',
    loanAmount: '12000',
    availableCreditLimit: '$82000',
    reason: 'For Some Personal Reason',
    status: 'Rejected',
  },
  {
    applicationDate: '19 Jan 2023',
    loanAmount: '12000',
    availableCreditLimit: '$82000',
    reason: 'For Some Personal Reason',
    status: 'Pending',
  },
  {
    applicationDate: '19 Jan 2023',
    loanAmount: '12000',
    availableCreditLimit: '$82000',
    reason: 'For Some Personal Reason',
    status: 'Approved',
  },
];

export default data;
