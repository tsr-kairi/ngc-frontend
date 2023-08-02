/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
import { ListViewLayout } from '@/components/layout/listView.layout';
import { ActionIcon, Badge, Flex, Text, createStyles } from '@mantine/core';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import EmployeeCard from './employeeCard';

// Style for the entire ListViewLayoutPage Page
const useStyles = createStyles((theme) => ({
  th: {
    padding: '0 !important',
  },

  LeaveManagementRowData: {
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

function SimpleCard({ session, date }: { session: string; date: string }) {
  return (
    <Flex>
      <Text mx="sm">{date}</Text>
      {session === 'firsthalf' ? (
        <Badge
          sx={{
            borderRadius: '4px',
            backgroundColor: '#EF641516',
            color: '#EF6415',
            padding: '10px',
          }}
        >
          FH
        </Badge>
      ) : (
        <Badge
          sx={{
            borderRadius: '4px',
            backgroundColor: '#1570EF16',
            color: '#1570EF',
            padding: '10px',
          }}
        >
          SH
        </Badge>
      )}
    </Flex>
  );
}

// Rendering the LeaveManagementTable Component
function LeaveTable({ data }: TLeaveManagementManager) {
  const { classes } = useStyles();

  // Table Rows getElement component management
  const rows = data?.map((row) => (
    <tr key={row?.uuid} className={classes.LeaveManagementRowData}>
      <td>
        <EmployeeCard
          id={row?.employee?.id}
          image={row?.employee?.image}
          firstName={row?.employee?.firstName}
          lastName={row?.employee?.lastName}
        />
      </td>
      <td>{row?.applicationDate ? row?.applicationDate : ''}</td>
      <td>
        {/* <Link
          to={`/LeaveManagement-details/${row?.uuid}`}
          className={classes.userLink}
        > */}
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
        {/* </Link> */}
      </td>
      <td>
        <SimpleCard date={row.fromDate} session={row.startDatesection} />
      </td>
      <td>
        <SimpleCard date={row.toDate} session={row.endDateSection} />
      </td>
      <td>{row.days}</td>
      <td>
        {row?.status === 'Approved' ? (
          <Badge variant="outline" color="green">
            Approved
          </Badge>
        ) : row?.status === 'Pending' ? (
          <Badge variant="outline" color="yellow">
            Pending
          </Badge>
        ) : row?.status === 'Rejected' ? (
          <Badge variant="outline" color="red">
            Rejected
          </Badge>
        ) : null}
      </td>
      <td>
        <ActionIcon>
          <IconArrowNarrowRight />
        </ActionIcon>
      </td>
    </tr>
  ));

  // Returning the Scroll Area as ListViewLayout of Table
  return (
    <ListViewLayout isError={false} isLoading={false} hidePlusButton>
      <thead>
        <tr>
          <th>
            <b>Employee</b>
          </th>
          <th>
            <b>Application Date</b>
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
            <b>Status</b>
          </th>
          <th>
            <b>Action</b>
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
export default LeaveTable;
