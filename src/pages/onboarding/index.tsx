/* eslint-disable react/function-component-definition */
import Personal from '@/components/form/onboarding/Personal';
import Address from '@/components/form/onboarding/address';
import Document from '@/components/form/onboarding/documents';
import Password from '@/components/form/onboarding/password';
import ToggleThemeBtn from '@/components/ui/Buttons/ToggleThemeBtn';
import IsMobileScreen from '@/hooks/useIsMobileScreen';
import {
  ActionIcon,
  Box,
  Button,
  Group,
  Stepper,
  Text,
  createStyles,
  useMantineTheme,
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
    [theme.fn.smallerThan('xs')]: {
      height: '100vh',
      overflowY: 'auto',
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    },
  },
  stepperWrapperOuter: {
    width: '25vw',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[1],
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

  outletWrapperStyle: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '20px',
    height: 'auto',
    justifyContent: 'space-between',
  },
  outletStyle: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '36px',
    height: 'auto',
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
      alignItems: 'initial',
    },
  },
  stepStyle: {
    paddingBottom: '36px',
  },
  box: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[1],
    paddingLeft: '75px',
    paddingRight: '75px',
    paddingTop: '75px',
    paddingBottom: '75px',
    marginTop: '55px',
    [theme.fn.smallerThan('xs')]: {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[1],
      padding: '30px',
      paddingTop: '20px',
      paddingBottom: '50px',
      marginTop: '0px',
    },
  },
  formIcon: {
    padding: '10px',
    [theme.fn.smallerThan('xs')]: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[1],
      padding: '15px',
      borderTopRightRadius: '10px',
      borderTopLeftRadius: '10px',
      borderTopRadius: '10px',
    },
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
    case 0:
      form = <Personal />;
      break;
    case 1:
      form = <Address />;
      break;
    case 2:
      form = <Document />;
      break;
    case 3:
      form = <Password />;
      break;
    default:
      form = <Personal />;
  }

  // form icon render
  let formIcon = null;
  switch (activeStep) {
    case 0:
      formIcon = (
        <Group>
          <ActionIcon variant="outline">
            <IconFlagFilled size="1.125rem" />
          </ActionIcon>
          {IsMobileScreen() && <Text>Personal</Text>}
        </Group>
      );
      break;
    case 1:
      formIcon = (
        <Group>
          <ActionIcon variant="outline">
            <IconAddressBook size="1.125rem" />
          </ActionIcon>
          {IsMobileScreen() && <Text>Address</Text>}
        </Group>
      );
      break;
    case 2:
      formIcon = (
        <Group>
          <ActionIcon variant="outline">
            <IconFileImport size="1.125rem" />
          </ActionIcon>
          {IsMobileScreen() && <Text>Documents</Text>}
        </Group>
      );
      break;
    case 3:
      formIcon = (
        <Group>
          <ActionIcon variant="outline">
            <IconLock size="1.125rem" />
          </ActionIcon>
          {IsMobileScreen() && <Text>Password</Text>}
        </Group>
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
      <Group position="center" className={classes.formIcon} w="50%" mx="auto">
        {formIcon}
      </Group>
      <Box w="100%" className={classes.box}>
        {form}
        {activeStep < 3 ? (
          <div style={{ marginTop: '55px' }}>
            {IsMobileScreen() ? (
              <Group position="center" grow>
                <Button
                  onClick={() => setActiveStep(activeStep - 1)}
                  // className={classes.btn}
                >
                  Back
                </Button>
                <Button
                  onClick={() => setActiveStep(activeStep + 1)}
                  // className={classes.btn}
                  // color="green"
                >
                  Continue
                </Button>
              </Group>
            ) : (
              <Group position="center">
                <Button
                  w="400px"
                  onClick={() => setActiveStep(activeStep + 1)}
                  // className={classes.btn}
                  // color="green"
                >
                  Continue
                </Button>
              </Group>
            )}
          </div>
        ) : (
          <div style={{ marginTop: '55px' }}>
            {IsMobileScreen() ? (
              <Group position="apart" grow>
                <Button onClick={() => setActiveStep(activeStep - 1)}>
                  Back
                </Button>
                <Button
                  // eslint-disable-next-line no-console
                  onClick={() => console.log('Form submitted')}
                >
                  Submit
                </Button>
              </Group>
            ) : (
              <Group position="center">
                <Button
                  sx={{ marginTop: '55px' }}
                  w="400px"
                  // eslint-disable-next-line no-console
                  onClick={() => console.log('Form submitted')}
                >
                  Submit
                </Button>
              </Group>
            )}
          </div>
        )}
      </Box>
    </Box>
  );
};

const Onboarding: FC = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [activeStep, setActiveStep] = useState<number>(0);

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
          <Group position="apart" sx={{ paddingBottom: '70px' }}>
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
      <div className={classes.outletWrapperStyle}>
        <div className={classes.outletStyle}>
          {IsMobileScreen() && (
            <Group position="apart" style={{ marginBottom: '55px' }} px="xs">
              <Text fz="xl" sx={{ textTransform: 'uppercase' }}>
                Nexg
              </Text>
              <ToggleThemeBtn />
            </Group>
          )}
          <Form activeStep={activeStep} setActiveStep={setActiveStep} />
        </div>
        <Group
          style={{
            display: 'flex',
            gap: '10px',
          }}
          position="center"
        >
          <div
            style={{
              width: activeStep === 0 ? '28px' : '10px',
              height: '10px',
              backgroundColor:
                activeStep === 0
                  ? `${theme.colors.brand[7]}`
                  : `${
                      theme.colorScheme === 'dark'
                        ? theme.colors.gray[0]
                        : theme.colors.gray[5]
                    }`,
              borderRadius: activeStep === 0 ? '8px' : '100%',
              cursor: 'pointer',
            }}
          />
          <div
            style={{
              width: activeStep === 1 ? '28px' : '10px',
              height: '10px',
              backgroundColor:
                activeStep === 1
                  ? `${theme.colors.brand[7]}`
                  : `${
                      theme.colorScheme === 'dark'
                        ? theme.colors.gray[0]
                        : theme.colors.gray[5]
                    }`,
              borderRadius: activeStep === 1 ? '8px' : '100%',
              cursor: 'pointer',
            }}
          />
          <div
            style={{
              width: activeStep === 2 ? '28px' : '10px',
              height: '10px',
              backgroundColor:
                activeStep === 2
                  ? `${theme.colors.brand[7]}`
                  : `${
                      theme.colorScheme === 'dark'
                        ? theme.colors.gray[0]
                        : theme.colors.gray[5]
                    }`,
              borderRadius: activeStep === 2 ? '8px' : '100%',
              cursor: 'pointer',
            }}
          />
          <div
            style={{
              width: activeStep === 3 ? '28px' : '10px',
              height: '10px',
              backgroundColor:
                activeStep === 3
                  ? `${theme.colors.brand[7]}`
                  : `${
                      theme.colorScheme === 'dark'
                        ? theme.colors.gray[0]
                        : theme.colors.gray[5]
                    }`,
              borderRadius: activeStep === 3 ? '8px' : '100%',
              cursor: 'pointer',
            }}
          />
        </Group>
      </div>
    </Box>
  );
};

export default Onboarding;
