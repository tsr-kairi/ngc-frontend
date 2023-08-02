import { Loader } from '@mantine/core';
import useGetAllLeaveTransaction from '../../hooks/useGetAllLeaveTransaction';
import CasualLeaveList from './casualLeaveList';

//  main LeaveManagement component
export default function CasualLeave() {
  const { data, isError, isLoading } = useGetAllLeaveTransaction();

  if (isError) {
    return <h1>An Error Occurred</h1>;
  }

  if (!isLoading) {
    return <CasualLeaveList data={data?.data ?? []} />;
  }
  return <Loader variant="dots" />;
}
