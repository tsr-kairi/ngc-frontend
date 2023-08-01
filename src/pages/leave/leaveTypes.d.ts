type LeaveType = 'Casual' | 'Sick' | 'Earned';
type LeaveStatus = 'Pending' | 'Approved' | 'Rejected';

interface LeaveCardType {
  type: LeaveType;
  granted: number;
  availed: number;
  // Drawer propsType
  drawerTitle: string;
  drawerChildren: React.ReactNode;
  isDrawerModalOpen?: boolean;
  drawerSize: string | number;

  onClick?: () => void;
}
