import { Tabs, TabsProps, rem } from '@mantine/core';
import { IconUser, IconUserShare, IconUsersGroup } from '@tabler/icons-react';

function EmployeeTab(props: TabsProps) {
  return (
    <Tabs
      unstyled
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
          padding: `${theme.spacing.xs} ${theme.spacing.xs}`,
          cursor: 'pointer',
          fontSize: theme.fontSizes.sm,
          display: 'flex',
          alignItems: 'center',

          '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
          },

          '&:not(:first-of-type)': {
            borderLeft: 0,
          },

          '&:first-of-type': {
            borderTopLeftRadius: theme.radius.md,
            borderBottomLeftRadius: theme.radius.md,
          },

          '&:last-of-type': {
            borderTopRightRadius: theme.radius.md,
            borderBottomRightRadius: theme.radius.md,
          },

          '&[data-active]': {
            backgroundColor: theme.colors.blue[9],
            borderColor: theme.colors.blue[9],
            color: theme.white,
          },
        },

        tabIcon: {
          marginRight: theme.spacing.xs,
          display: 'flex',
          alignItems: 'center',
        },

        tabsList: {
          display: 'flex',
        },
      })}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

type TabProps2 = {
  onClose: () => void;
};

function Tab({ onClose }: TabProps2) {
  return (
    <EmployeeTab>
      <Tabs.List>
        <Tabs.Tab
          value="settings"
          icon={<IconUsersGroup size="1rem" onClick={onClose} />}
        >
          All
        </Tabs.Tab>
        <Tabs.Tab
          value="messages"
          icon={<IconUser size="1rem" onClick={onClose} />}
        >
          Internal
        </Tabs.Tab>
        <Tabs.Tab
          value="gallery"
          icon={<IconUserShare size="1rem" onClick={onClose} />}
        >
          External
        </Tabs.Tab>
      </Tabs.List>
    </EmployeeTab>
  );
}

export { EmployeeTab, Tab };
