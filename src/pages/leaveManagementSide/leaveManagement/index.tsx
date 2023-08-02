import { Loader } from '@mantine/core';
import useGetAllLeaveManagement from '../hooks/leaveManagement';
import LeaveTable from './table';

function LeaveManagementManager() {
  const { data, isError, isLoading } = useGetAllLeaveManagement();

  if (isError) {
    return <h1>An Error Occurred</h1>;
  }

  if (!isLoading) {
    return <LeaveTable data={data?.data ?? []} />;
  }
  return <Loader variant="dots" />;
}

export default LeaveManagementManager;
