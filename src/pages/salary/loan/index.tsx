/* eslint-disable react/jsx-props-no-spreading */
import {
  ActionIcon,
  Box,
  Button,
  Divider,
  Drawer,
  Flex,
  Group,
  Slider,
  Stack,
  Tabs,
  TabsProps,
  Text,
  Textarea,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconX } from '@tabler/icons-react';
import { useState } from 'react';
import LoanAppTable from './loanAppTable';
import LoanHistTable from './loanHistTable';

export function currencyFormat(numberValue: number): string {
  return numberValue.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
  });
}

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
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState(2000);
  return (
    <Box sx={{ width: '100%' }}>
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="40%"
        withCloseButton={false}
        overlayProps={{ opacity: 0.5 }}
      >
        <Group position="apart" mb="lg">
          <Text fz="25px" weight={400}>
            Leave Application
          </Text>
          <ActionIcon onClick={close}>
            <IconX size="40px" stroke={2} />
          </ActionIcon>
        </Group>
        <Group position="apart" mt="30px" mx="20px" mb="50px">
          <Text fz="20px" weight={400}>
            Loan Amount
            <Text fz="30px" weight={700} mr="md">
              {value}
            </Text>
          </Text>
          <Text fz="20px" weight={400}>
            EMI Months
            <Text fz="30px" weight={700} mr="md">
              3
            </Text>
          </Text>
        </Group>
        <Group position="apart" ml="5px" mr="10px">
          <Text fz="lg" weight={700}>
            0
          </Text>{' '}
          <Text fz="lg" weight={700}>
            10,000
          </Text>
        </Group>
        <Slider
          defaultValue={2000}
          min={1000}
          max={10000}
          value={value}
          onChange={setValue}
          thumbSize={26}
          styles={{
            thumb: {
              borderWidth: rem(8),
              padding: rem(3),
              height: rem(40),
              width: rem(40),
              color: ' #0A4377',
            },
            track: {
              height: rem(20),
              width: rem(600),
            },
          }}
        />
        <Box mt="40px" w="100%">
          <Textarea placeholder="Write a description" minRows={10} />
        </Box>
        <Flex
          justify="flex-end"
          mt="30px"
          sx={{
            position: 'absolute',
            bottom: '30px',
            right: '20px',
            width: '100%',
          }}
        >
          <Button variant="outline" mr="10px" onClick={close}>
            Cancel
          </Button>
          <Button>Apply</Button>
        </Flex>
      </Drawer>
      <Group position="apart" mb="md" mr="lg">
        <Text size={30} weight={700}>
          Loan
        </Text>
        <Button onClick={open}>Apply Leave</Button>
      </Group>
      <Flex gap="lg">
        <Box
          sx={{
            border: '2px groove',
            width: '40%',

            padding: '5px',
          }}
        >
          <Stack>
            <Group position="apart">
              <Text fz="md" weight={400}>
                Current Salary
              </Text>
              <Text fz="lg" weight={700} mr="md">
                {currencyFormat(10000)}
              </Text>
            </Group>
            <Divider />
            <Group position="apart">
              <Text fz="md" weight={400}>
                Last Loan Amount
              </Text>
              <Text fz="lg" weight={700} mr="md">
                {currencyFormat(10000)}
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
                {currencyFormat(10000)}
              </Text>
            </Group>
          </Stack>
        </Box>
        <Box sx={{ border: '2px groove', width: '56%' }}>
          <Flex justify="space-between" align="start">
            <Text fz="25px" weight={200} ml="20px">
              Total Credit Limit
              <Text fz="40px" weight={600} color="blue" ml="20px">
                {currencyFormat(350000)}
              </Text>
            </Text>
            <Box>
              <Text fz="25px" weight={200} mr="40px">
                Total Credit Limit
                <Text fz="40px" weight={600} color="red" ml="20px">
                  {currencyFormat(350000)}
                </Text>
              </Text>
              <Text fz="25px" weight={200} mt="lg">
                Total Credit Limit
                <Text fz="40px" weight={600} color="red" ml="20px">
                  {currencyFormat(350000)}
                </Text>
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <StyledTabs defaultValue="Loan EMI History" mt="lg">
        <Tabs.List>
          <Tabs.Tab value="Loan EMI History">Loan EMI History</Tabs.Tab>
          <Tabs.Tab value="Loan Application History">
            Loan Application History
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="Loan EMI History" pt="xs" pr="md">
          <LoanHistTable />
        </Tabs.Panel>
        <Tabs.Panel value="Loan Application History" pt="xs" pr="md">
          <LoanAppTable />
        </Tabs.Panel>
      </StyledTabs>
    </Box>
  );
}

export default SalaryLoan;
