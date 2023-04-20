import { Box, Paper, Stepper, Text, createStyles } from '@mantine/core';
import { IconLock, IconUserCheck } from '@tabler/icons-react';
import { useState } from 'react';
import PersonalDetails from './components/PersonalDetails';
import SetPassword from './components/SetPassword';
import LogoDark from '@/components/common/logo/LogoDark';
import LogoLight from '@/components/common/logo/LogoLight';
import IsMobileScreen from '@/hooks/useIsMobileScreen';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '10px',
    width: '100%',
    overflow: 'hidden',
    minHeight: '600px',
    maxWidth: '35%',
    padding: '20px',
    margin: 'auto',

    [theme.fn.smallerThan('xl')]: {
      minHeight: '500px',
      width: '100%',
      overflow: 'hidden',
      maxWidth: '90%',
    },
    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
      minHeight: 600,
      width: '100%',
      overflow: 'hidden',
      maxWidth: '99%',
    },
  },
}));

function EmployeeOnboard() {
  const { classes } = useStyles();
  const [salutation, setSalutation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email] = useState('');
  const [phone, setPhone] = useState('');
  const [alternativePhone, setAlternativePhone] = useState('');
  const [alternativeEmail, setAlternativeEmail] = useState('');
  const [dob, setDob] = useState<Date | null>(null);
  const [language, setLanguage] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const handleSubmit = () => {
    // console.log('err');
  };

  return (
    <Paper className={classes.wrapper}>
      <Box>{IsMobileScreen() ? <LogoDark /> : <LogoLight />}</Box>
      <Text size="md" mt={10} mb={10}>
        Onboarding{' '}
        <span style={{ fontWeight: 'bold' }}>abcdefgh@gmail.com</span>
      </Text>
      <Stepper
        size="sm"
        active={active}
        sx={{
          width: '90%',
          marginBottom: '-1rem',
        }}
      >
        <Stepper.Step
          icon={<IconUserCheck size={16} />}
          label="Step 1"
          description="Edit Details"
        />
        <Stepper.Step
          icon={<IconLock size={16} />}
          label="Step 2"
          description="Set Password"
        />
      </Stepper>
      {active === 0 && (
        <PersonalDetails
          nextStep={nextStep}
          salutation={salutation}
          setSalutation={setSalutation}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          phone={phone}
          setPhone={setPhone}
          alternativePhone={alternativePhone}
          setAlternativePhone={setAlternativePhone}
          alternativeEmail={alternativeEmail}
          setAlternativeEmail={setAlternativeEmail}
          dob={dob}
          setDob={setDob}
          language={language}
          setLanguage={setLanguage}
          languagesData={[]}
        />
      )}
      {active === 1 && (
        <SetPassword
          prevStep={prevStep}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          handleSubmit={handleSubmit}
        />
      )}
    </Paper>
  );
}

export default EmployeeOnboard;
