import { Button, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import OtpInput from '../../otpInput/OtpInput';
import { IconCheck } from '@tabler/icons-react';
import { showNotification } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';

interface TwoFAProps {
  // setToggleLoginState: (val: string) => void;
  email: string;
}

function Login2FAState({ email }: TwoFAProps) {
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState(false);
  const [timer, setTimer] = useState(60);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer === 0) {
        clearInterval(myInterval);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const onChange = (value: string) => setOtp(value);
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const getSecretEmail = (email: string): string => {
    const split = email.split('@');
    let split1 = split[0];
    const avg = split1.length / 2;
    split1 = split1.substring(0, split1.length - avg);
    const split2 = split[1];
    return `${split1}***@${split2}`;
  };

  const resendOtp = () => {
    // Replace the axios call with your API request
    // Example: fetch('/api/resend-otp', { method: 'POST', body: { email, password } })
    setOtpError(false);
  };

  const handleVerify = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (otp) {
      setLoading(true);
      // Replace the axios call with your API request
      // Example: fetch('/api/verify-otp', { method: 'POST', body: { email, password, otp } })
      setTimeout(() => {
        setLoading(false);
        showNotification({
          message: 'Verify successful! You just landed here.',
          color: 'teal',
          icon: <IconCheck />,
        });
        navigate('/');
      }, 2000);
    } else {
      setOtpError(true);
    }
  };

  return (
    <>
      <Text
        weight="lighter"
        sx={{
          letterSpacing: '0.1rem',
          fontSize: '28px',
        }}
        mb="md"
      >
        nex
        <span
          style={{
            color: '#fff',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
          }}
        >
          gen
        </span>
      </Text>
      <Text size="lg">Two Factor Authentication</Text>
      <form onSubmit={handleVerify}>
        <Text size="sm" color="dimmed" my="lg" align="center">
          Enter the OTP sent to {getSecretEmail(email)}
        </Text>
        <OtpInput
          value={otp}
          valueLength={4}
          onChange={onChange}
          otpError={otpError}
          errorMessage="Invalid OTP"
        />
        <Button
          radius="xs"
          sx={(theme) => ({
            backgroundColor: theme.colors.brand[8],
            padding: '0 1.5rem',
            margin: '1rem auto',
            display: 'block',
          })}
          type="submit"
          loading={loading}
        >
          Verify
        </Button>
      </form>

      {timer > 0 ? (
        <Text size="sm" color="dimmed" my="md">
          Resend OTP in {timer} seconds
        </Text>
      ) : (
        <Text
          color="dimmed"
          size="sm"
          my="md"
          sx={(theme) => ({
            cursor: 'pointer',
            ':hover': {
              color: theme.colors.brand[9],
            },
          })}
          onClick={resendOtp}
        >
          Resend OTP
        </Text>
      )}
    </>
  );
}

export default Login2FAState;
