// useLogin with React Query

import { useMutation } from '@tanstack/react-query';
import loginService from '../services/loginService';

const useLogin = () => {
  return useMutation(loginService);
};

export default useLogin;
