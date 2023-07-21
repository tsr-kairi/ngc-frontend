import { RecordsType } from '@/types/RecordType';
import { Box } from '@mantine/core';
import { IconClockHour5 } from '@tabler/icons-react';
import HourMarker from './HourMarker';
import TimeBlock from './TimeBlock';

function TimeLine({ records }: { records: RecordsType[] }) {
  const hours = Array.from({ length: 48 }, (_, i) => i * 0.5);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
      }}
    >
      <IconClockHour5 color="#ccc" />

      <Box
        style={{
          position: 'relative',
          width: '100%',
          height: '20px',
          marginBottom: '.2rem',
        }}
      >
        <TimeBlock records={records} />
        {hours.map((hour) => (
          <HourMarker key={hour} hour={hour} top={-50} />
        ))}
        {hours.map((hour) => (
          <HourMarker key={hour} hour={hour} top={80} />
        ))}
      </Box>
    </Box>
  );
}

export default TimeLine;
