/* eslint-disable react/function-component-definition */
import Personal from '@/components/form/onboarding/Personal';
import Address from '@/components/form/onboarding/address';
import ToggleThemeBtn from '@/components/ui/Buttons/ToggleThemeBtn';
import { Box, Button, Group, Stepper, Text, createStyles } from '@mantine/core';
import {
  IconAddressBook,
  IconFileImport,
  IconFlagFilled,
  IconLock,
} from '@tabler/icons-react';

import { FC, useState } from 'react';

// create style for this components
const useStyles = createStyles((theme) => ({
  stepperWrapper: {
    display: 'flex',
    overflowY: 'hidden',
    backgroundColor: 'white',
  },
  stepperWrapperOuter: {
    width: '25vw',
    backgroundColor: '#F9FBFC',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    paddingLeft: '36px',
    paddingRight: '36px',
    paddingTop: '20px',
    paddingBottom: '20px',

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
  stepperWrapperInner: {
    display: 'flex',
    flexDirection: 'column',
  },
  outletStyle: {
    width: '100%',
    maxWidth: 707,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '36px',
    marginBottom: '36px',
    height: 'auto',
  },
  stepStyle: {
    paddingBottom: '36px',
  },
}));

interface FormProps {
  activeStep: number;
  setActiveStep: (activeStep: number) => void;
}

const Form: FC<FormProps> = ({ activeStep, setActiveStep }) => {
  let form = null;

  switch (activeStep) {
    case 1:
      form = <Personal />;
      break;
    case 2:
      form = <Address />;
      break;
    case 3:
      form = <Personal />;
      break;
    case 4:
      form = <Personal />;
      break;
    default:
      form = <Personal />;
  }

  return (
    <Box>
      {form}
      {activeStep < 4 ? (
        <Button
          sx={{ marginTop: '55px' }}
          fullWidth
          onClick={() => setActiveStep(activeStep + 1)}
        >
          Continue
        </Button>
      ) : (
        <Button
          sx={{ marginTop: '55px' }}
          fullWidth
          // eslint-disable-next-line no-console
          onClick={() => console.log('Form submitted')}
        >
          Submit
        </Button>
      )}
    </Box>
  );
};

const Onboarding: FC = () => {
  const { classes } = useStyles();
  const [activeStep, setActiveStep] = useState<number>(1);

  type StepProps = {
    icon: React.ReactNode;
    id: number;
    label: string;
    description: string;
  };

  // step data content here
  const stepData: StepProps[] = [
    {
      id: 1,
      label: 'Personal',
      description: 'Please provide your personal details',
      icon: <IconFlagFilled />,
    },
    {
      id: 2,
      label: 'Address',
      description: 'Please provide your address details',
      icon: <IconAddressBook />,
    },
    {
      id: 3,
      label: 'Documents',
      description: 'Add your legal documents and details',
      icon: <IconFileImport />,
    },
    {
      id: 4,
      label: 'Password',
      description: 'Must be at least 8 characters',
      icon: <IconLock />,
    },
  ];

  return (
    <Box className={classes.stepperWrapper}>
      <Box className={classes.stepperWrapperOuter}>
        <Box className={classes.stepperWrapperInner}>
          <Group position="apart" sx={{ paddingBottom: '55px' }}>
            <Text fz="xl" sx={{ textTransform: 'uppercase' }}>
              Nexg
            </Text>
            <ToggleThemeBtn />
          </Group>
          <Stepper
            active={activeStep}
            onStepClick={setActiveStep}
            orientation="vertical"
            color="green"
          >
            {/* steps content mapping here */}
            {stepData.map((step) => {
              return (
                <Stepper.Step
                  className={classes.stepStyle}
                  key={step.id}
                  label={step.label}
                  description={step.description}
                  icon={step.icon}
                />
              );
            })}
          </Stepper>
        </Box>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <small>@nexg copyright 2023</small>
          <small>connect@nexg.tech</small>
        </div>
      </Box>
      <div className={classes.outletStyle}>
        <div>
          <Text
            fz="xl"
            sx={{
              textTransform: 'uppercase',
              paddingBottom: '100px',
              textAlign: 'center',
            }}
            title="text"
          >
            Nexg
          </Text>
          <Form activeStep={activeStep} setActiveStep={setActiveStep} />
        </div>
        <div
          style={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <div
            style={{
              width: '15px',
              height: '15px',
              backgroundColor: '#D9D9D9',
              borderRadius: '100%',
            }}
          />
          <div
            style={{
              width: '15px',
              height: '15px',
              backgroundColor: '#D9D9D9',
              borderRadius: '100%',
            }}
          />
          <div
            style={{
              width: '15px',
              height: '15px',
              backgroundColor: '#D9D9D9',
              borderRadius: '100%',
            }}
          />
          <div
            style={{
              width: '15px',
              height: '15px',
              backgroundColor: '#D9D9D9',
              borderRadius: '100%',
            }}
          />
        </div>
      </div>
    </Box>
  );
};

export default Onboarding;
