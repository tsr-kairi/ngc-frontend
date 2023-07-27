/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Divider,
  Group,
  Stack,
  Tabs,
  TabsProps,
  Text,
  rem,
} from '@mantine/core';
import LoanAppTable from './loanAppTable';
import LoanHistTable from './loanHistTable';

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      unstyled
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[1],
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
            borderLeft: 0,
          },

          // '&:first-of-type': {
          //   borderTopLeftRadius: theme.radius.sm,
          //   borderBottomLeftRadius: theme.radius.sm,
          // },

          // '&:last-of-type': {
          //   borderTopRightRadius: theme.radius.md,
          //   borderBottomRightRadius: theme.radius.md,
          // },

          '&[data-active]': {
            backgroundColor: theme.white,

            color: theme.black,
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
      {...props}
    />
  );
}
function SalaryLoan() {
  return (
    <Box>
      <Text fz="xl" weight={700} mb="md">
        Loan
      </Text>
      <Group>
        <Box
          sx={{
            border: '2px groove',
            width: '30vw',

            padding: '5px',
          }}
        >
          <Stack>
            <Group position="apart">
              <Text fz="md" weight={400}>
                Current Salary
              </Text>
              <Text fz="lg" weight={700} mr="md">
                $10000
              </Text>
            </Group>
            <Divider />
            <Group position="apart">
              <Text fz="md" weight={400}>
                Last Loan Amount
              </Text>
              <Text fz="lg" weight={700} mr="md">
                $10000
              </Text>
            </Group>
            <Divider />
            <Group position="apart">
              <Text fz="md" weight={400}>
                EMI Months
              </Text>
              <Text fz="lg" weight={800} mr="md">
                3 Months
              </Text>
            </Group>
            <Divider />
            <Group position="apart">
              <Text fz="md" weight={400}>
                Current Salary(-EMI)
              </Text>
              <Text fz="lg" weight={800} mr="md">
                $10000
              </Text>
            </Group>
            <Divider />
            <Group position="apart">
              <Text fz="md" weight={400}>
                Last Loan Amount
              </Text>
              <Text fz="lg" weight={800} mr="md">
                $10000
              </Text>
            </Group>
          </Stack>
        </Box>
        <Box sx={{ border: '2px groove', width: '40vw', height: '35vh' }}>
          <Group position="apart">
            <Text fz="25px" weight={200} ml="20px">
              Total Credit Limit
              <Text fz="40px" weight={600} color="blue" ml="20px">
                $35,0000
              </Text>
            </Text>

            <Text fz="25px" weight={200} mr="40px">
              Total Credit Limit
              <Text fz="40px" weight={600} color="red" ml="20px">
                $35,0000
              </Text>
            </Text>
          </Group>

          <Text fz="25px" weight={200} ml="24vw" mt="lg">
            Total Credit Limit
            <Text fz="40px" weight={600} color="red" ml="20px">
              $35,0000
            </Text>
          </Text>
        </Box>
      </Group>
      <StyledTabs defaultValue="Loan EMI History" mt="lg">
        <Tabs.List>
          <Tabs.Tab value="Loan EMI History">Loan EMI History</Tabs.Tab>
          <Tabs.Tab value="Loan Application History">
            Loan Application History
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="Loan EMI History" pt="xs">
          <LoanHistTable />
        </Tabs.Panel>
        <Tabs.Panel value="Loan Application History" pt="xs">
          <LoanAppTable />
        </Tabs.Panel>
      </StyledTabs>
    </Box>
  );
}

export default SalaryLoan;
