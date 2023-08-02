import { Box } from '@mantine/core';
import { useState } from 'react';
import Login2FAState from './components/Login2FAState';
import LoginEmailState from './components/LoginEmailState';
import LoginPasswordState from './components/LoginPasswordState';

function Login() {
  const [toggleLoginState, setToggleLoginState] = useState('email');
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  return (
    <Box
      sx={() => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        // backgroundColor:
        //   theme.colorScheme === 'dark'
        //     ? theme.colors.gray[9]
        //     : theme.colors.gray[3],
      })}
    >
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '500px',
          width: '500px',
          padding: '20px',
          borderRadius: '10px',
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[9]
              : theme.colors.gray[0],
        })}
      >
        {toggleLoginState === 'email' && (
          <LoginEmailState
            setToggleLoginState={setToggleLoginState}
            email={email}
            setEmail={setEmail}
          />
        )}
        {toggleLoginState === 'password' && (
          <LoginPasswordState
            setToggleLoginState={setToggleLoginState}
            email={email}
            // setPassword={setPassword}
          />
        )}
        {toggleLoginState === '2fa' && (
          <Login2FAState
            // setToggleLoginState={setToggleLoginState}
            email={email}
            // password={password}
          />
        )}
        {/* {toggleLoginState === 'force-reset-password' && (
          <ForceResetPasswordState />
        )} */}
      </Box>
    </Box>
  );
}

export default Login;
