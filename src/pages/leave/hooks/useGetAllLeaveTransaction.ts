/* eslint-disable no-console */
import { TLeaveTransaction } from '@/types/LeaveTransaction-type';
import { useQuery } from '@tanstack/react-query';

const useGetAllLeaveTransaction = () => {
  // Define a function to fetch the data
  const fetchData = () =>
    fetch('/api/leaveTransaction.json') // fetch the json file
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json(); // parse it as json
      })
      .catch((error) => {
        console.error(
          'There has been a problem with your fetch operation:',
          error
        );
      });

  // Now, call the useQuery function with the URL string and useQueryKey in string
  return useQuery<TLeaveTransaction>(
    ['leaveTransaction', '/api/leaveTransaction.json'],
    fetchData
  );
};

export default useGetAllLeaveTransaction;
