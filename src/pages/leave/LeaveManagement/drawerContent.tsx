import { Box, Group } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useState } from 'react';

function DrawerContent() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <Box>
      <Group grow>
        <DatePickerInput
          type="range"
          label="Pick dates range"
          placeholder="Pick dates range"
          value={value}
          onChange={setValue}
          mx="auto"
          maw={400}
        />
      </Group>
    </Box>
  );
}

export default DrawerContent;
