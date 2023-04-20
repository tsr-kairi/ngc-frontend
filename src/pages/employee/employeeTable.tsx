/* eslint-disable no-nested-ternary */
import IsMobileScreen from '@/hooks/useIsMobileScreen';
import {
  ActionIcon,
  Avatar,
  Checkbox,
  createStyles,
  Drawer,
  Group,
  ScrollArea,
  Table,
  Text,
  Tooltip,
} from '@mantine/core';
import {
  IconAddressBookOff,
  IconChecks,
  IconCircleDotted,
  IconEdit,
  IconEditOff,
  IconPlayerPause,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OffBoardNewEmployee from '../../components/form/employee/offboardEmployee';

const useStyles = createStyles((theme) => ({
  table: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    borderRadius: 5,
    '@media (max-width: 755px)': {
      minWidth: 1200,
    },
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.dark[2]
    }`,
  },
  drawer: {
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  rowSelected: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.brand[1],
  },

  header: {
    position: 'sticky',
    top: 0,
    zIndex: 5,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[5]
      }`,
    },
  },

  tableRow: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1]
    } !important`,
  },
}));

function EmployeeTable() {
  const { classes, cx } = useStyles();
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);

  const avatarColors = [
    'red',
    'blue',
    'yellow',
    'indigo',
    'pink',
    'teal',
    'cyan',
    'violet',
    'orange',
  ];
  const elements = [
    {
      uuid: 'ggfg7f7fgfgf8g--ytyty',
      lastUpdate: 'Jun 07 2022, 18:27',
      firstName: 'Ravin',
      lastName: 'Trep',
      email: 'ravintrep@gmail.com',
      phone: '+91 8876645893',
      roles: {
        name: 'SUPER-ADMIN',
      },
    },
    {
      uuid: 'ggfg7f7fgfgf8g--gfgf77',
      lastUpdate: 'Jun 07 2022, 18:27',
      firstName: 'Ravin',
      lastName: 'Trep',
      email: 'ravintrep@gmail.com',
      phone: '+91 8876645893',
      roles: {
        name: 'HR',
      },
    },
    {
      uuid: 'ggfg7f7fgfgf8g--fgfgf',
      lastUpdate: 'Jun 07 2022, 18:27',
      firstName: 'Ravin',
      lastName: 'Trep',
      email: 'ravintrep@gmail.com',
      phone: '+91 8876645893',
      roles: {
        name: 'SUPER-ADMIN',
      },
    },
    {
      uuid: 'ggfg7f7fgfgf8g--sds',
      lastUpdate: 'Jun 07 2022, 18:27',
      firstName: 'Ravin',
      lastName: 'Trep',
      email: 'ravintrep@gmail.com',
      phone: '+91 8876645893',
      roles: {
        name: 'CEO',
      },
    },
    {
      uuid: 'ggfg7f7fgfgf8g--dsds',
      lastUpdate: 'Jun 07 2022, 18:27',
      firstName: 'Ravin',
      lastName: 'Trep',
      email: 'ravintrep@gmail.com',
      phone: '+91 8876645893',
      roles: {
        name: 'SUPER-ADMIN',
      },
    },
  ];

  const employeeName = (name: string) => {
    const [firstName, lastName] = name.split(' ');
    return `${firstName[0]}${lastName[0]}`;
  };

  // selected Checkbox
  const [selection, setSelection] = useState(['1']);
  const toggleRow = (uuid: string) =>
    setSelection((current) =>
      current.includes(uuid)
        ? current.filter((item) => item !== uuid)
        : [...current, uuid]
    );
  const toggleAll = () =>
    setSelection((current) =>
      current.length === elements.length
        ? []
        : elements.map((item) => item.uuid)
    );

  const rows = elements.map((item) => {
    const selected = selection.includes(item.uuid);
    return (
      <tr key={item.uuid} className={cx({ [classes.rowSelected]: selected })}>
        <td className={classes.tableRow}>{item.lastUpdate}</td>
        <td className={classes.tableRow}>
          <Group spacing="sm">
            <Avatar
              size="sm"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
              radius="xl"
              color={
                avatarColors[Math.floor(Math.random() * avatarColors.length)]
              }
            >
              {employeeName(`${item.firstName} ${item.lastName}`)}
            </Avatar>
            <Text size="sm" weight={400}>
              {`${item.firstName} ${item.lastName}`}
            </Text>
          </Group>
        </td>
        <td className={classes.tableRow}>{item.email}</td>
        <td className={classes.tableRow}>{item.phone}</td>
        <td
          style={{
            maxWidth: 200,
          }}
          className={classes.tableRow}
        >
          {item.roles.name}
        </td>
        <td className={classes.tableRow}>
          <Checkbox
            checked={selection.includes(item.uuid)}
            onChange={() => toggleRow(item.uuid)}
            transitionDuration={0}
          />
        </td>
        <td className={classes.tableRow}>
          {item.roles.name === 'SUPER-ADMIN' ? (
            <IconChecks color="green" size={18} />
          ) : // eslint-disable-next-line no-nested-ternary
          item.roles.name === 'HR' ? (
            <IconCircleDotted color="yellow" size={18} />
          ) : item.roles.name === 'CEO' ? (
            <IconPlayerPause color="brown" size={18} />
          ) : null}
        </td>
        <td
          className={classes.tableRow}
          style={{
            width: 120,
          }}
        >
          <Group>
            {item.roles.name && (
              <Tooltip label="Edit Employee" withArrow color="gray">
                <ActionIcon
                  color="blue"
                  onClick={() =>
                    navigate(
                      `${
                        item.roles.name === 'SUPER-ADMIN'
                          ? `/employee/edit/${item.uuid}`
                          : ''
                      }`
                    )
                  }
                >
                  {item.roles.name === 'SUPER-ADMIN' ? (
                    <IconEdit size={18} />
                  ) : (
                    <IconEditOff size={18} />
                  )}
                </ActionIcon>
              </Tooltip>
            )}
            <Tooltip
              label="OffBoard Employee"
              withArrow
              color="gray"
              onClick={() => setOpened(true)}
            >
              <ActionIcon color="blue">
                <IconAddressBookOff size={18} />
              </ActionIcon>
            </Tooltip>
          </Group>
        </td>
      </tr>
    );
  });
  return (
    <ScrollArea
      sx={{ height: 'calc(90vh - 100px)', marginTop: '0.5rem' }}
      type="never"
    >
      <Table
        horizontalSpacing="xs"
        verticalSpacing={5}
        highlightOnHover
        fontSize="xs"
        className={classes.table}
      >
        <thead className={classes.header}>
          <tr>
            <th>Last Updated</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Roles</th>
            <th style={{ display: 'flex', gap: '10px' }}>
              Is Active
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === elements.length}
                indeterminate={
                  selection.length > 0 && selection.length !== elements.length
                }
                transitionDuration={0}
              />
            </th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      {/* offBoard employee drawer */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="OffBoard Employee"
        padding="md"
        size={IsMobileScreen() ? 'xl' : 'md'}
        position="right"
        className={classes.drawer}
      >
        <OffBoardNewEmployee setOpened={setOpened} />
      </Drawer>
    </ScrollArea>
  );
}

export default EmployeeTable;
