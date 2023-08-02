interface LeaveManagementManager {
  transaction: 'Granted' | 'Availed';
  transactionDate: string;
  leaveType: 'Earned' | 'Sick' | 'Casual';
  section: 'firsthalf' | 'secondhalf';
  fromDate: string;
  toDate: string;
  days: number;
  expiryDate: string;
}
