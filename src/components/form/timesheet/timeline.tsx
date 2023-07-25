import { Entry, TimeAttendanceType } from '@/types/TimeAttendanceType';
import { Box } from '@mantine/core';

function TimeLine() {
  const elements: TimeAttendanceType = [
    [
      {
        date: '2023-05-01',
        time: [
          {
            clockIn: '09:00',
            clockOut: '12:00',
          },
          {
            clockIn: '12:20',
            clockOut: '14:00',
          },
          {
            clockIn: '15:20',
            clockOut: '19:00',
          },
        ],
      },
    ],
    [
      {
        date: '2023-05-02',
        time: [
          {
            clockIn: '10:00',
            clockOut: '12:00',
          },
          {
            clockIn: '12:30',
            clockOut: '14:00',
          },
          {
            clockIn: '14:20',
            clockOut: '19:00',
          },
        ],
      },
    ],
    [
      {
        date: '2023-05-03',
        time: [
          {
            clockIn: '10:05',
            clockOut: '12:10',
          },
          {
            clockIn: '12:40',
            clockOut: '14:15',
          },
          {
            clockIn: '15:25',
            clockOut: '19:10',
          },
        ],
      },
    ],
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

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          border: '0.0625rem solid #dee2e6',
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
                borderLeft: '0.0625rem solid #dee2e6',
                width: '4.16%',
                textAlign: 'center',
              }}
            >
              {hour.toString().padStart(2, '0')}
            </Box>
          ))}
        </Box>
      </Box>

      <Box>
        {elements.map((element) => {
          return element.map((item: Entry) => {
            return (
              <Box
                key={item.date}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  borderBottom: '0.0625rem solid #dee2e6',
                  borderLeft: '0.0625rem solid #dee2e6',
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
                    backgroundColor: '#f6f6f6',
                  }}
                >
                  {item.time.map(
                    (time: { clockIn: string; clockOut: string }) => {
                      return (
                        <Box key={time.clockIn}>
                          <Box
                            sx={(theme) => ({
                              position: 'absolute',
                              left: `${
                                ((parseInt(time.clockIn.split(':')[0], 10) +
                                  parseInt(time.clockIn.split(':')[1], 10) /
                                    60) /
                                  24) *
                                timelineWidth
                              }%`,
                              right: `${
                                timelineWidth -
                                ((parseInt(time.clockOut.split(':')[0], 10) +
                                  parseInt(time.clockOut.split(':')[1], 10) /
                                    60) /
                                  24) *
                                  timelineWidth
                              }%`,
                              background: theme.colors.brand[6],

                              height: '100%',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              fontWeight: 600,
                              fontSize: '0.7rem',
                              color: theme.colors.gray[2],
                            })}
                          />
                        </Box>
                      );
                    }
                  )}
                </Box>
              </Box>
            );
          });
        })}
      </Box>
      {/* </Box> */}
    </Box>
  );
}

export default TimeLine;
