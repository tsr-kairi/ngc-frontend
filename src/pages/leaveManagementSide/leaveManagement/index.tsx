import { Loader } from '@mantine/core';
import useGetAllLeaveManagement from '../hooks/leaveManagement';
import { ManagerTabs } from './dateTabs';
import Header from './header';
import LeaveTable from './table';

function LeaveManagementManager() {
  const { data, isError, isLoading } = useGetAllLeaveManagement();

  if (isError) {
    return <h1>An Error Occurred</h1>;
  }

  if (!isLoading) {
    return (
      <>
        <Header />
        <ManagerTabs />
        <LeaveTable data={data.data} />
      </>
    );
  }
  return <Loader variant="dots" />;
}

export default LeaveManagementManager;
