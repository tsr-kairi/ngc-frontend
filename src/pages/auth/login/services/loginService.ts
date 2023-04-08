import axios from 'axios';

type LoginData = {
  email: string;
  password: string;
};

const loginService = (data: LoginData) => {
  return new Promise((resolve, reject) => {
    axios
      .post('/auth/login', data)

      .then((response) => {
        resolve(response.data);
      })

      .catch((error) => {
        reject(error);
      });
  });
};

export default loginService;
