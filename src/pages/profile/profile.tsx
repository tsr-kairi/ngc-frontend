import { Tabs, TabsProps } from '@mantine/core';
import {
  IconMessageCircle,
  IconPhoto,
  IconSettings,
} from '@tabler/icons-react';
import { useState } from 'react';
import Address from './address';
import AvatarBox from './avatar';
import Banking from './banking';
import Dofiles from './dofiles';
import Education from './eductaion';
import ProfileExperience from './experience';
import ProfileInfo from './personal';
import ProfileSkills from './skills';
import ProfileTopBar from './topBar';

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[0]
              : theme.colors.gray[9],
          padding: `${theme.spacing.xs} ${theme.spacing.md}`,
          cursor: 'pointer',
          fontSize: theme.fontSizes.sm,
          display: 'flex',
          alignItems: 'center',

          '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
          },

          '&:not(:first-of-type)': {
            width: '250px',
            height: '50px',
            borderRadius: 0,
            border: 'none', // Remove border
          },

          '&:first-of-type': {
            borderTopLeftRadius: theme.radius.sm,
            borderTopRightRadius: theme.radius.sm,
            borderBottomLeftRadius: 0,
            width: '250px',
            height: '50px',
          },

          '&:last-of-type': {
            borderBottomLeftRadius: theme.radius.sm,
            borderBottomRightRadius: theme.radius.sm,
          },

          '&[data-active]': {
            backgroundColor: theme.colors.blue[7],
            borderColor: theme.colors.blue[7],
            color: theme.white,
          },
        },

        tabsList: {
          marginRight: theme.spacing.lg,
          marginLeft: theme.spacing.lg,
          borderRight: 0,
        },
        tabIcon: {
          marginRight: theme.spacing.xs,
          display: 'flex',
          alignItems: 'center',
        },
      })}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

export default function ProfileTabs() {
  const [Progress] = useState(80);
  return (
    <StyledTabs defaultValue="personal" orientation="vertical">
      <Tabs.List>
        <AvatarBox />
        <Tabs.Tab value="personal" icon={<IconSettings size="1rem" />}>
          Personal Details
        </Tabs.Tab>
        <Tabs.Tab value="skills" icon={<IconPhoto size="1rem" />}>
          Skills
        </Tabs.Tab>
        <Tabs.Tab value="education" icon={<IconMessageCircle size="1rem" />}>
          Education
        </Tabs.Tab>
        <Tabs.Tab value="experience" icon={<IconPhoto size="1rem" />}>
          Experience
        </Tabs.Tab>
        <Tabs.Tab value="banking" icon={<IconPhoto size="1rem" />}>
          Banking
        </Tabs.Tab>
        <Tabs.Tab value="address" icon={<IconPhoto size="1rem" />}>
          Address
        </Tabs.Tab>
        <Tabs.Tab value="documents" icon={<IconPhoto size="1rem" />}>
          documents
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="personal">
        <ProfileTopBar
          progress={Progress}
          title="Personal Information"
          subTitle="Add your personal Information over here"
        />
        <ProfileInfo />
      </Tabs.Panel>
      <Tabs.Panel value="education">
        <ProfileTopBar
          progress={Progress}
          title="Education"
          subTitle="Your Education, try adding your important education information here"
        />
        <Education />
      </Tabs.Panel>
      <Tabs.Panel value="banking">
        <ProfileTopBar
          progress={Progress}
          title="Banking"
          subTitle="Please add your company banking details, for any neccessary payments"
        />
        <Banking />
      </Tabs.Panel>
      <Tabs.Panel value="experience">
        <ProfileTopBar
          progress={Progress}
          title="Experience"
          subTitle="Add your work experience here"
        />
        <ProfileExperience />
      </Tabs.Panel>
      <Tabs.Panel value="documents">
        <ProfileTopBar
          progress={Progress}
          title="Documents"
          subTitle="Important documents that are neccessary for the company"
        />
        <Dofiles />
      </Tabs.Panel>
      <Tabs.Panel value="address">
        <ProfileTopBar
          progress={Progress}
          title="Address"
          subTitle="Add your address here"
        />
        <Address />
      </Tabs.Panel>
      <Tabs.Panel value="skills">
        <ProfileTopBar
          progress={Progress}
          title="Skills"
          subTitle="Add can add all your skills here and also get certified for them"
        />
        <ProfileSkills />
      </Tabs.Panel>
    </StyledTabs>
  );
}
