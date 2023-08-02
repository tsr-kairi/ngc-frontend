/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
import { ListViewLayout } from '@/components/layout/listView.layout';
import { LeaveTransaction } from '@/types/LeaveTransaction-type';
import {
  Badge,
  Menu,
  Text,
  Tooltip,
  UnstyledButton,
  createStyles,
} from '@mantine/core';
import { IconDotsVertical, IconEdit, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Style for the entire ListViewLayoutPage Page
const useStyles = createStyles((theme) => ({
  th: {
    padding: '0 !important',
  },

  LeaveTransactionRowData: {
    border: 'none',
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[1],
    },
  },

  icon: {
    width: 21,
    height: 21,
    borderRadius: 21,
  },
  editIcon: {
    color: theme.colors.brand[6],
    '&:hover': {
      color: theme.colors.dark[6],
    },
  },
  deleteIcon: {
    color: '#FF7676',
    '&:hover': {
      color: '#FF1414',
    },
  },
  user: {},
  userActive: {},
  menuItem: {
    '&:hover': {
      backgroundColor: theme.colors.brand[9],
    },
  },
  userLink: {
    textDecoration: 'none',
    '&:hover': {
      color: theme.colors.brand[6],
    },
  },
}));

interface ILeaveTransactionProps {
  data: LeaveTransaction[];
}

// Rendering the LeaveManagementTable Component
function LeaveTransactionList({ data }: ILeaveTransactionProps) {
  const { classes, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  // Table Rows getElement component Transaction
  const rows = data?.map((row) => (
    <tr key={row?.uuid} className={classes.LeaveTransactionRowData}>
      <td>
        <Menu
          width={230}
          onClose={() => setUserMenuOpened(false)}
          onOpen={() => setUserMenuOpened(true)}
          offset={14}
        >
          <Menu.Target>
            <UnstyledButton
              className={cx(classes.user, {
                [classes.userActive]: userMenuOpened,
              })}
            >
              <Tooltip label="Action" color="blue" withArrow>
                <IconDotsVertical size={16} cursor="pointer" />
              </Tooltip>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Take your action carefully</Menu.Label>

            <Menu.Item
              icon={
                <IconEdit
                  size={14}
                  // stroke={1.5}
                  className={classes.editIcon}
                />
              }
              className={classes.menuItem}
            >
              Edit LeaveTransaction
            </Menu.Item>
            <Menu.Item
              icon={
                <IconTrash
                  size={14}
                  // stroke={1.5}
                  className={classes.deleteIcon}
                />
              }
              className={classes.menuItem}
            >
              Delete LeaveTransaction
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </td>
      <td>{row?.transactionDate ? row?.transactionDate : ''}</td>
      <td>
        <Link
          to={`/LeaveTransaction-details/${row?.uuid}`}
          className={classes.userLink}
        >
          {row?.leaveType === 'Casual' ? (
            <Badge variant="outline" color="green">
              Casual
            </Badge>
          ) : row?.leaveType === 'Earned' ? (
            <Badge variant="outline" color="red">
              Earned
            </Badge>
          ) : row?.leaveType === 'Sick' ? (
            <Badge variant="outline" color="yellow">
              Sick
            </Badge>
          ) : null}
        </Link>
      </td>
      <td>{row?.fromDate ? row?.fromDate : ''}</td>
      <td>{row?.toDate ? row?.toDate : ''}</td>
      <td>{row?.days ? row?.days : ''}</td>
      <td>{row?.expiryDate ? row?.expiryDate : ''}</td>
    </tr>
  ));

  // Returning the Scroll Area as ListViewLayout of Table
  return (
    <ListViewLayout
      title="Leave Transactions"
      isError={false}
      isLoading={false}
      hidePlusButton
    >
      <thead>
        <tr>
          <th>
            <b>Action</b>
          </th>
          <th>
            <b>Transaction Date</b>
          </th>
          <th>
            <b>Leave Type</b>
          </th>
          <th>
            <b>From Date</b>
          </th>
          <th>
            <b>To Date</b>
          </th>
          <th>
            <b>Days</b>
          </th>
          <th>
            <b>Expiry Date</b>
          </th>
        </tr>
      </thead>

      {rows?.length > 0 ? (
        <tbody>{rows}</tbody>
      ) : (
        <Text weight={500} align="center" p={8}>
          No records found
        </Text>
      )}
    </ListViewLayout>
  );
}
export default LeaveTransactionList;
