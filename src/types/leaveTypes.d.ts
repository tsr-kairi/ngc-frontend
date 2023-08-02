interface LeaveManagementManager {
  uuid: string;
  employee: EmployeeLite;
  applicationDate: string;
  transaction: 'Granted' | 'Availed';
  transactionDate: string;
  leaveType: 'Earned' | 'Sick' | 'Casual';
  startDatesection: 'firsthalf' | 'secondhalf';
  endDateSection: 'firsthalf' | 'secondhalf';
  fromDate: string;
  toDate: string;
  days: number;
  status: 'Approved' | 'Pending' | 'Rejected';
}

interface EmployeeLite {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
}

interface TLeaveManagementManager {
  data: LeaveManagementManager[];
}
