/* eslint-disable react/function-component-definition */
import Adress from '@/components/form/onboarding/adress';
import Personal from '@/components/form/onboarding/Personal';
import { Box, Button, Stepper } from '@mantine/core';
import { FC, useState } from 'react';

const boxStyle = {
  maxWidth: 400,
  margin: '0 auto',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '100px',
  height: '100vh',
};

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
      form = <Adress />;
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
    <Box sx={boxStyle}>
      {form}
      {activeStep < 4 ? (
        <Button onClick={() => setActiveStep(activeStep + 1)}>Next</Button>
      ) : (
        // eslint-disable-next-line no-console
        <Button onClick={() => console.log('Form submitted')}>Submit</Button>
      )}
    </Box>
  );
};

const Onboarding: FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div style={{ display: 'flex', backgroundColor: 'white' }}>
      <div style={{ width: '300px' }}>
        <h1>NEXG</h1>
        <Stepper
          active={activeStep}
          onStepClick={setActiveStep}
          orientation="vertical"
          style={{
            backgroundColor: '#F9FBFC',
            width: '25vw',
          }}
        >
          <Stepper.Step
            style={{
              padding: '20px',
              marginLeft: '50px',
              marginTop: '50px',
            }}
            label="Step 1"
            description="Form 1"
          />
          <Stepper.Step
            style={{
              padding: '20px',
              marginLeft: '50px',
              marginTop: '50px',
            }}
            label="Step 2"
            description="Form 2"
          />
          <Stepper.Step
            style={{
              padding: '20px',
              marginLeft: '50px',
              marginTop: '50px',
            }}
            label="Step 3"
            description="Form 3"
          />
          <Stepper.Step
            style={{
              padding: '20px',
              marginLeft: '50px',
              marginTop: '50px',
            }}
            label="Step 4"
            description="Form 4"
          />
        </Stepper>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <small>@nexg copyright 2023</small>
          <small>connect@nexg.tech</small>
        </div>
      </div>

      <Form activeStep={activeStep} setActiveStep={setActiveStep} />
    </div>
  );
};

export default Onboarding;
