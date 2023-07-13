/* eslint-disable react/function-component-definition */
import Personal from '@/components/form/onboarding/Personal';
import Address from '@/components/form/onboarding/address';
import Document from '@/components/form/onboarding/documents';
import Password from '@/components/form/onboarding/password';
import ToggleThemeBtn from '@/components/ui/Buttons/ToggleThemeBtn';
import {
  ActionIcon,
  Box,
  Button,
  Group,
  Stepper,
  Text,
  createStyles,
} from '@mantine/core';
import {
  IconAddressBook,
  IconFileImport,
  IconFlagFilled,
  IconLock,
  IconLogin,
} from '@tabler/icons-react';

import { FC, useState } from 'react';

// create style for this components
const useStyles = createStyles((theme) => ({
  stepperWrapper: {
    display: 'flex',
    overflowY: 'hidden',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.bgSteeperOutletDark
        : theme.colors.bgSteeperOutletLight,
  },
  stepperWrapperOuter: {
    width: '25vw',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.bgStepperNavbarDark
        : theme.colors.bgStepperNavbarLight,
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
  btn: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.bgAccentColor
        : theme.colors.bgAccentColor,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[9]
        : theme.colors.gray[0],
  },
}));

interface FormProps {
  activeStep: number;
  setActiveStep: (activeStep: number) => void;
}

const Form: FC<FormProps> = ({ activeStep, setActiveStep }) => {
  const { classes } = useStyles();
  // forms render
  let form = null;
  switch (activeStep) {
    case 1:
      form = <Personal />;
      break;
    case 2:
      form = <Address />;
      break;
    case 3:
      form = <Document />;
      break;
    case 4:
      form = <Password />;
      break;
    default:
      form = <Personal />;
  }

  // form icon render
  let formIcon = null;
  switch (activeStep) {
    case 1:
      formIcon = (
        <ActionIcon variant="outline">
          <IconFlagFilled size="1.125rem" />
        </ActionIcon>
      );
      break;
    case 2:
      formIcon = (
        <ActionIcon variant="outline">
          <IconAddressBook size="1.125rem" />
        </ActionIcon>
      );
      break;
    case 3:
      formIcon = (
        <ActionIcon variant="outline">
          <IconFileImport size="1.125rem" />
        </ActionIcon>
      );
      break;
    case 4:
      formIcon = (
        <ActionIcon variant="outline">
          <IconLock size="1.125rem" />
        </ActionIcon>
      );
      break;
    default:
      formIcon = (
        <ActionIcon variant="outline">
          <IconLogin size="1.125rem" />
        </ActionIcon>
      );
  }

  return (
    <Box w="100%">
      <Group position="center" style={{ marginBottom: '70px' }}>
        {formIcon}
      </Group>
      {form}
      {activeStep < 4 ? (
        <Group position="center" mt="sm">
          <Button
            sx={{ marginTop: '55px' }}
            w="400px"
            onClick={() => setActiveStep(activeStep + 1)}
            className={classes.btn}
            color="green"
          >
            Continue
          </Button>
        </Group>
      ) : (
        <Group position="center" mt="sm">
          <Button
            sx={{ marginTop: '55px' }}
            w="400px"
            // eslint-disable-next-line no-console
            onClick={() => console.log('Form submitted')}
            className={classes.btn}
            color="green"
          >
            Submit
          </Button>
        </Group>
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

  // step data content goes here
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
            {/* steps content mapping goes here */}
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
        <Form activeStep={activeStep} setActiveStep={setActiveStep} />

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
