// Define the Leave data interface
export interface LeaveTransaction {
  uuid: string;
  transactionDate: string;
  leaveType: 'Earned' | 'Sick' | 'Casual';
  fromDate: string;
  toDate: string;
  days: number;
  expiryDate: string;
}

// Define the complete data interface properties
export interface TLeaveTransaction {
  data: LeaveTransaction[];
}
