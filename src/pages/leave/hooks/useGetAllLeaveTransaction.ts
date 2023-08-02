import { TLeaveTransaction } from '@/types/LeaveTransaction-type';
import { useQuery } from '@tanstack/react-query';

const baseUrl = 'http://localhost:8000';

const useGetAllLeaveTransaction = () => {
  return useQuery<TLeaveTransaction>({
    queryKey: ['leaveTransaction'], // refetch whenever the URL changes (columnFilters, globalFilter, sorting, pagination)
    queryFn: () =>
      fetch(`${baseUrl}/leaveTransaction`).then((res) => res.json()),
    keepPreviousData: true, // useful for paginated queries by keeping data from previous pages on screen while fetching the next page
    staleTime: 30_000, // don't refetch previously viewed pages until cache is more than 30 seconds old
  });
};

export default useGetAllLeaveTransaction;
