import { Progress, Tabs, TabsProps, rem } from '@mantine/core';
import {
  IconMessageCircle,
  IconPhoto,
  IconSettings,
} from '@tabler/icons-react';
import Address from './address';
import AvatarBox from './avatar';
import Banking from './banking';
import Dofiles from './dofiles';
import Education from './eductaion';
import ProfileExperience from './experience';
import ProfileInfo from './personal';
import ProfileSkills from './skills';

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      orientation="vertical"
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[0]
              : theme.colors.gray[9],
          border: `${rem(1)} solid ${
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[4]
          }`,
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
            // width: '250px',
          },

          '&[data-active]': {
            backgroundColor: theme.colors.blue[7],
            borderColor: theme.colors.blue[7],
            color: theme.white,
          },
        },

        tabsList: {
          marginRight: theme.spacing.md,
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
  return (
    <StyledTabs defaultValue="personal">
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
      <Progress value={50} />
      <Tabs.Panel value="personal">
        <ProfileInfo />
      </Tabs.Panel>
      <Tabs.Panel value="education">
        <Education />
      </Tabs.Panel>
      <Tabs.Panel value="banking">
        <Banking />
      </Tabs.Panel>
      <Tabs.Panel value="experience">
        <ProfileExperience />
      </Tabs.Panel>
      <Tabs.Panel value="documents">
        <Dofiles />
      </Tabs.Panel>
      <Tabs.Panel value="address">
        <Address />
      </Tabs.Panel>
      <Tabs.Panel value="skills">
        <ProfileSkills />
      </Tabs.Panel>
    </StyledTabs>
  );
}
