import { Box, Button, Divider, Flex, Select } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons-react';
import { useState } from 'react';

function TimetableForm() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [date, setDate] = useState<Date | null>(null);
  return (
    <Flex
      direction="column"
      justify="space-between"
      sx={{
        height: '300px',
      }}
    >
      <Box>
        <Select
          placeholder="Select your shift"
          data={[
            { value: 'morning', label: 'Morning Shift' },
            { value: 'evening', label: 'Evening Shift' },
            { value: 'night', label: 'Night Shift' },
          ]}
        />
        <Flex
          justify="start"
          sx={{
            marginTop: '20px',
          }}
        >
          <DatePickerInput
            icon={<IconCalendar size="1.1rem" stroke={1.5} />}
            clearable
            type="range"
            placeholder="Pick dates range"
            value={value}
            onChange={setValue}
            maw={400}
            disabled={date !== null}
            onClick={() => {
              setDate(null);
            }}
            sx={{
              marginRight: '10px',
            }}
          />
          <Divider orientation="vertical" my="5px" />
          <DatePickerInput
            clearable
            icon={<IconCalendar size="1.1rem" stroke={1.5} />}
            placeholder="Pick date range"
            maw={400}
            value={date}
            onChange={setDate}
            disabled={value[0] !== null}
            onClick={() => {
              setValue([null, null]);
            }}
            sx={{
              marginLeft: '10px',
            }}
          />
        </Flex>
      </Box>
      <Button>Save</Button>
    </Flex>
  );
}

export default TimetableForm;
