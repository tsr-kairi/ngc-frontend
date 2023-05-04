import {
  ActionIcon,
  Box,
  Button,
  Group,
  Text,
  TextInput,
  Textarea,
  Tooltip,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { IconCalendar, IconPlus, IconTrash } from '@tabler/icons-react';
import { FormEvent, useState } from 'react';

function TimesheetForm({ setOpened }: { setOpened: (value: boolean) => void }) {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      timesheet: [
        {
          date: '',
          hours: '',
          total_hours: '',
          task: '',
          key: randomId(),
        },
      ],
    },
  });

  // calculateTotalHours function
  const calculateTotalHours = () => {
    let totalHours = 0;
    form.values.timesheet.forEach((item) => {
      totalHours += Number(item.hours);
    });
    return totalHours.toFixed(2);
  };

  const fields = form.values.timesheet.map((item, index) => (
    <Group key={item.key} mt="xs">
      <TextInput
        type="text"
        placeholder={`${index + 1}`}
        variant="unstyled"
        sx={{ width: '18px' }}
      />
      <TextInput
        type="number"
        placeholder="Hours"
        withAsterisk
        sx={{ flex: 0.3 }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...form.getInputProps(`timesheet.${index}.hours`)}
      />
      <Textarea
        size="xs"
        autosize
        withAsterisk
        placeholder="Write your task..."
        style={{ width: '350px' }}
        sx={{ flex: 1 }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...form.getInputProps(`timesheet.${index}.task`)}
      />
      <ActionIcon
        color="red"
        onClick={() => form.removeListItem('timesheet', index)}
      >
        <IconTrash size="1rem" />
      </ActionIcon>
    </Group>
  ));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box mt={10}>
        {fields.length > 0 ? (
          <>
            <Group
              mb="md"
              sx={(theme) => ({
                borderBottom: `1px solid ${
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[5]
                    : theme.colors.gray[2]
                }`,
              })}
              position="apart"
            >
              <Tooltip position="right-start" withArrow label="Pic a date">
                <DatePickerInput
                  placeholder="Pic a date"
                  modalProps={{ withinPortal: true }}
                  mb="xs"
                />
              </Tooltip>
              <ActionIcon color="sky">
                <IconCalendar size={30} />
              </ActionIcon>
            </Group>
            <Group mb="xs">
              <Text weight={500} size="sm" sx={{ flex: 1 }}>
                #
              </Text>
              <Text weight={500} size="sm" sx={{ flex: 5 }}>
                Hours
              </Text>
              <Text weight={500} size="sm" pr={300}>
                Task
              </Text>
            </Group>
          </>
        ) : (
          <Text color="dimmed" align="center">
            No one here...
          </Text>
        )}
        {fields}
        <Group
          position="center"
          mt="md"
          style={{ position: 'absolute', right: '0', top: '95px' }}
        >
          <Button
            onClick={() =>
              form.insertListItem('timesheet', {
                date: '',
                hours: '',
                total_hours: '',
                task: '',
                key: randomId(),
              })
            }
            variant="none"
          >
            <Tooltip
              // color="lightblue"
              position="left-start"
              withArrow
              label="Add new"
            >
              <ActionIcon color="sky">
                <IconPlus size={40} />
              </ActionIcon>
            </Tooltip>
          </Button>
        </Group>
        <Box
          sx={(theme) => ({
            position: 'absolute',
            bottom: 0,
            borderTop: `1px solid ${
              theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
            }`,
            padding: '1rem',
            width: '95%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          })}
        >
          <Group>
            <Text>Total Hours : {calculateTotalHours()}</Text>
          </Group>
          <Group>
            <Button
              color="dark"
              type="reset"
              radius="xs"
              variant="subtle"
              onClick={() => setOpened(false)}
            >
              Cancel
            </Button>
            <Button color="blue" loading={loading} type="submit" radius="xs">
              Submit
            </Button>
          </Group>
        </Box>
      </Box>
    </form>
  );
}

export default TimesheetForm;
