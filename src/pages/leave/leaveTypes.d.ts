type LeaveType = 'Casual' | 'Sick' | 'Earned';
type LeaveStatus = 'Pending' | 'Approved' | 'Rejected';

interface LeaveCardType {
  type: LeaveType;
  granted: number;
  availed: number;
  details: string;
}
