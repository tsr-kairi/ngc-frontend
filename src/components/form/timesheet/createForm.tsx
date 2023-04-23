import { ActionIcon, Box, Button, TextInput, Textarea } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { IconPlus } from '@tabler/icons-react';
import { FormEvent, useState } from 'react';

function TimesheetForm({ setOpened }: { setOpened: (value: boolean) => void }) {
  const [loading, setLoading] = useState(false);

  const handleOnboard = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  };
  return (
    <form
      onSubmit={handleOnboard}
      style={{
        paddingTop: '1rem',
        display: 'flex',
        gap: '1rem',
      }}
    >
      <DatePickerInput
        placeholder="Pick a date"
        modalProps={{ withinPortal: true }}
      />
      <TextInput type="number" placeholder="Total Hours" withAsterisk />
      <Textarea
        size="xs"
        autosize
        placeholder="Write your task..."
        style={{ height: '200px' }}
      />
      <ActionIcon
        // style={{
        //   position: 'absolute',
        //   right: '46px',
        // }}
        color="blue"
        // onClick={addNewDoc}
      >
        <IconPlus size={40} />
      </ActionIcon>
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
          justifyContent: 'flex-end',
          gap: '1rem',
        })}
      >
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
      </Box>
    </form>
  );
}

export default TimesheetForm;
