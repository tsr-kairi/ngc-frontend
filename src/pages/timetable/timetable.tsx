import { Box, Divider, useMantineTheme } from '@mantine/core';

interface TimeAttendanceItem {
  date: string;
  timeshift: 'morning' | 'evening' | 'night';
}

function TimeTableBox() {
  const theme = useMantineTheme();
  const elements: TimeAttendanceItem[] = [
    {
      date: '2023-05-01',
      timeshift: 'morning',
    },
    {
      date: '2023-05-02',
      timeshift: 'evening',
    },
    {
      date: '2023-05-03',
      timeshift: 'night',
    },
    {
      date: '2023-05-04',
      timeshift: 'night',
    },
    {
      date: '2023-05-05',
      timeshift: 'morning',
    },
    {
      date: '2023-05-06',
      timeshift: 'evening',
    },
    {
      date: '2023-05-07',
      timeshift: 'night',
    },
    {
      date: '2023-05-08',
      timeshift: 'morning',
    },
    // Add more data for other dates and timeshifts as needed
  ];

  const timelineWidth = 100;

  function formatDate(date: Date) {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear().toString().slice(-2);

    return `${day}-${month}-${year}`;
  }

  function getStartTime(timeshift: TimeAttendanceItem['timeshift']): number {
    if (timeshift === 'morning') {
      return 9; // 9:00 AM
    }
    if (timeshift === 'evening') {
      return 16; // 4:00 PM
    }
    if (timeshift === 'night') {
      return 0; // 8:00 PM
    }
    return 0;
  }

  function getEndTime(timeshift: TimeAttendanceItem['timeshift']): number {
    if (timeshift === 'morning') {
      return 17; // 5:00 PM
    }
    if (timeshift === 'evening') {
      return 23; // 9:00 PM
    }
    if (timeshift === 'night') {
      // For night shift, the end time is 6:00 AM (next day)
      return 8;
    }
    return 0;
  }

  return (
    <Box mt="lg">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          paddingBottom: '25px',
          paddingTop: '10px',
        }}
      >
        <Box
          sx={{
            width: '10%',
            textAlign: 'center',
          }}
        >
          Date
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: `${timelineWidth}%`,
          }}
        >
          {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
            <Box
              key={hour}
              style={{
                width: '4.16%',
              }}
            >
              {hour.toString().padStart(2, '0')}
            </Box>
          ))}
        </Box>
      </Box>
      <Divider orientation="horizontal" />
      <Box>
        {elements.map((item) => {
          const startTime = (
            (getStartTime(item.timeshift) / 24) *
            timelineWidth
          ).toFixed(2);
          const endTime = (
            (getEndTime(item.timeshift) / 24) *
            timelineWidth
          ).toFixed(2) as unknown as number;

          return (
            <>
              <Box
                key={`${item.date}-${item.timeshift}`}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                }}
              >
                <Box sx={{ width: '10%', textAlign: 'center' }}>
                  {formatDate(new Date(item.date))}
                </Box>
                <Box
                  sx={{
                    position: 'relative',
                    width: `${timelineWidth}%`,
                    height: '50px',
                  }}
                >
                  <Box
                    sx={() => ({
                      position: 'absolute',
                      left: `${startTime}%`,
                      right: `${timelineWidth - endTime}%`,
                      background: theme.colors.brand[6],
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontWeight: 600,
                      fontSize: '0.7rem',
                      color: theme.colors.gray[2],
                      zIndex: 10,
                    })}
                  >
                    {/* Show the timeshift value */}
                    {item.timeshift}
                  </Box>
                </Box>
              </Box>
              <Divider orientation="horizontal" />
            </>
          );
        })}
      </Box>
    </Box>
  );
}

export default TimeTableBox;
