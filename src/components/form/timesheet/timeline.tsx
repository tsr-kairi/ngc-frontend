import { Entry, TimeAttendanceType } from '@/types/TimeAttendanceType';
import { Box, Divider, Text } from '@mantine/core';
import React from 'react';

function Timeline() {
  const dividers = Array.from({ length: 25 }, (_, index) => index);
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
    [
      {
        date: '2023-05-04',
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
    [
      {
        date: '2023-05-05',
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
    [
      {
        date: '2023-05-06',
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
    [
      {
        date: '2023-05-07',
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
    [
      {
        date: '2023-05-08',
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
    [
      {
        date: '2023-05-09',
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
    [
      {
        date: '2023-05-10',
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
    <Box mt="lg">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          // borderBottom: '0.0625rem solid #dee2e6',
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
          {Array.from({ length: 25 }, (_, i) => i).map((hour) => (
            <Box
              key={hour}
              style={{
                // borderLeft: '0.0625rem solid #dee2e6',
                width: '4.16%',
                // textAlign: 'center',
              }}
            >
              {hour.toString().padStart(2, '0')}
            </Box>
          ))}
        </Box>
      </Box>
      <Divider orientation="horizontal" />
      <Box>
        {elements.map((element) => {
          return element.map((item: Entry) => {
            return (
              <>
                <Box
                  key={item.date}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.2rem',
                    // borderBottom: '0.1px solid #dee2e6',
                    // borderRight: '0.0625rem solid #dee2e6',
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
                      // backgroundColor: '#f6f6f6',
                    }}
                  >
                    {/* <Divider orientation="vertical" /> */}
                    {item.time.map(
                      (time: { clockIn: string; clockOut: string }) => {
                        return (
                          <>
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
                                    ((parseInt(
                                      time.clockOut.split(':')[0],
                                      10
                                    ) +
                                      parseInt(
                                        time.clockOut.split(':')[1],
                                        10
                                      ) /
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
                                  zIndex: 10,
                                })}
                              />
                            </Box>
                            {/* Divider */}
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: `${timelineWidth}%`,
                                position: 'absolute',
                                top: '-19px',
                                zIndex: -0.1,
                              }}
                            >
                              {dividers.map((hour) => (
                                <React.Fragment key={hour}>
                                  <Text />
                                  <Divider
                                    orientation="vertical"
                                    style={{
                                      width: '5.16%',
                                      height: 70,
                                    }}
                                  />
                                </React.Fragment>
                              ))}
                            </Box>
                          </>
                        );
                      }
                    )}
                  </Box>
                </Box>
                <Divider orientation="horizontal" />
              </>
            );
          });
        })}
      </Box>
      {/* </Box> */}
    </Box>
  );
}

export default Timeline;
