import { Tabs, createStyles } from '@mantine/core';
import {
  IconBook,
  IconBriefcase,
  IconInfoCircle,
  IconSettingsAutomation,
  IconSocial,
} from '@tabler/icons-react';
import EmployeeEducationInfo from './components/employeeEducationInfo';
import EmployeePersonalInfo from './components/employeePersonalInfo';
import EmployeeSkill from './components/employeeSkill';
import EmployeeSocial from './components/employeeSocial';
import EmployeeWorkExperience from './components/employeeWorkExperience';

const useStyles = createStyles((theme) => ({
  main: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: '0',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '20px',
    paddingRight: '20px',

    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  },
}));

export default function EmployeeUserProfileList() {
  const { classes } = useStyles();

  return (
    <div className={classes.main}>
      <Tabs color="orange" defaultValue="personal-information">
        <Tabs.List>
          <Tabs.Tab
            value="personal-information"
            icon={<IconInfoCircle size="0.8rem" />}
          >
            Personal Information
          </Tabs.Tab>
          <Tabs.Tab
            value="educational-information"
            icon={<IconBook size="0.8rem" />}
          >
            Educational Information
          </Tabs.Tab>
          <Tabs.Tab
            value="work-experience"
            icon={<IconBriefcase size="0.8rem" />}
          >
            Work Experience
          </Tabs.Tab>
          <Tabs.Tab
            value="skills"
            icon={<IconSettingsAutomation size="0.8rem" />}
          >
            Skills
          </Tabs.Tab>
          <Tabs.Tab value="social" icon={<IconSocial size="0.8rem" />}>
            Social
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="personal-information" pt="xs">
          <EmployeePersonalInfo />
        </Tabs.Panel>

        <Tabs.Panel value="educational-information" pt="xs">
          <EmployeeEducationInfo />
        </Tabs.Panel>

        <Tabs.Panel value="work-experience" pt="xs">
          <EmployeeWorkExperience />
        </Tabs.Panel>
        <Tabs.Panel value="skills" pt="xs">
          <EmployeeSkill />
        </Tabs.Panel>
        <Tabs.Panel value="social" pt="xs">
          <EmployeeSocial />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
