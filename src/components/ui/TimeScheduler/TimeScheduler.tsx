import { RecordsType } from '@/types/RecordType';
import { Box, Text, Tooltip } from '@mantine/core';
import { IconCalendarFilled } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import HourMarker from './HourMarker';
import TimeLine from './TimeLine';

function TimeScheduler() {
  const [clockIn, setClockIn] = useState<boolean>(false);
  const [records, setRecords] = useState<RecordsType[]>([
    {
      clockIn: '11:00',
      clockOut: '',
    },
    // {
    //   clockIn: '15:00',
    //   clockOut: '17:55',
    // },
  ]);
  const hours = Array.from({ length: 48 }, (_, i) => i * 0.5);

  const start = '09:00';
  const end = '18:00';
  const timelineWidth = 100;

  const startPercentage =
    ((parseInt(start.split(':')[0], 10) +
      parseInt(start.split(':')[1], 10) / 60) /
      24) *
    timelineWidth;
  const endPercentage =
    ((parseInt(end.split(':')[0], 10) + parseInt(end.split(':')[1], 10) / 60) /
      24) *
    timelineWidth;

  useEffect(() => {
    // console.log('records', records);
  }, [records]);

  const handleTimer = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    // const second = date.getSeconds();
    const time = `${hour}:${minute}`;

    if (!clockIn) {
      // Clocking in
      setRecords([...records, { clockIn: time, clockOut: '' }]);
    } else {
      // Clocking out
      const newRecords = [...records];
      newRecords[newRecords.length - 1].clockOut = time;
      setRecords(newRecords);
    }
    // Toggle clockIn state
    setClockIn(!clockIn);
  };

  return (
    <Box
      sx={{
        width: 360,
        height: 310,
        margin: 'auto',
        padding: '10px',
      }}
    >
      <Box
        onClick={() => handleTimer()}
        sx={(theme) => ({
          border: '1px solid #ccc',
          padding: '10px',
          borderRadius: '5px',
          cursor: 'pointer',
          backgroundColor: clockIn
            ? theme.colors.green[7]
            : theme.colors.pink[1],
          color: clockIn ? '#fff' : '#333',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.75rem',
        })}
      >
        <Text align="center">{clockIn ? 'Clock Out' : 'Clock In'}</Text>
      </Box>

      <Text align="center" mb="md">
        Today
      </Text>
      <Tooltip
        label={
          <Text
            sx={(theme) => ({
              color: theme.colors.gray[8],
              fontSize: '0.75rem',
              fontWeight: 600,
            })}
          >
            IT ({start} - {end})
          </Text>
        }
        color="#dbdbdb"
        withArrow
        arrowPosition="center"
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            marginBottom: '10px',
          }}
        >
          <IconCalendarFilled
            style={{
              color: '#ccc',
            }}
          />
          <Box
            sx={{
              position: 'relative',
              width: `${timelineWidth}%`,
              height: '15px',
              backgroundColor: '#f6f6f6',
            }}
          >
            <Box
              sx={(theme) => ({
                position: 'absolute',
                left: `${startPercentage}%`,
                right: `${timelineWidth - endPercentage}%`,
                height: '15px',
                borderRadius: theme.radius.sm,
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.gray[2]
                    : theme.colors.grape[7],
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 600,
                fontSize: '0.7rem',
                color: theme.colors.gray[2],
              })}
            >
              <Text>
                {start} - {end}
              </Text>
            </Box>
            {hours.map((hour) => (
              <HourMarker key={hour} hour={hour} top={-63} />
            ))}
          </Box>
        </Box>
      </Tooltip>
      <TimeLine records={records} />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '.25rem',
          marginTop: '2rem',
        }}
      >
        <Box
          sx={{
            flex: 6,
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Text
            sx={{
              fontSize: '1.5rem',
              fontWeight: 300,
            }}
          >
            7h32
          </Text>
          <Text fw={300}>worked</Text>
        </Box>
        <Box
          sx={{
            flex: 6,
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Text
            sx={{
              fontSize: '1.5rem',
              color: '#f00',
              fontWeight: 300,
            }}
          >
            -16h26
          </Text>
          <Text fw={300}>to-do</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default TimeScheduler;
