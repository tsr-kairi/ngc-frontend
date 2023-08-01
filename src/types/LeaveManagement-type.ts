// Define the Leave data interface
export interface LeaveManagement {
  uuid: string;
  applicationDate: string;
  leaveType: 'Earned' | 'Sick' | 'Casual';
  fromDate: string;
  toDate: string;
  days: number;
  status: 'Approved' | 'Pending' | 'Rejected';
}

// Define the complete data interface properties
export interface TLeaveManagement {
  data: LeaveManagement[];
}
