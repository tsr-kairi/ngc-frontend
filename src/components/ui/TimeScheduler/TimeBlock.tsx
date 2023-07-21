import { RecordsType } from '@/types/RecordType';
import { Box, Text, Tooltip } from '@mantine/core';

function TimeBlock({ records }: { records: RecordsType[] }) {
  const timelineWidth = 100;

  return (
    <div
      style={{
        position: 'relative',
        width: `${timelineWidth}%`,
        height: '15px',
        backgroundColor: '#f6f6f6',
      }}
    >
      {records.map(
        (record: { clockIn: string; clockOut: string }, index: number) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Box key={index}>
              <Tooltip
                label={
                  <Text
                    sx={(theme) => ({
                      color: theme.colors.gray[8],
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    })}
                  >
                    {record.clockIn} - {record.clockOut}
                  </Text>
                }
                color="#dbdbdb"
                withArrow
                arrowPosition="center"
              >
                <Box
                  sx={(theme) => ({
                    position: 'absolute',
                    left: `${
                      ((parseInt(record.clockIn.split(':')[0], 10) +
                        parseInt(record.clockIn.split(':')[1], 10) / 60) /
                        24) *
                      timelineWidth
                    }%`,
                    right: `${
                      timelineWidth -
                      ((parseInt(record.clockOut.split(':')[0], 10) +
                        parseInt(record.clockOut.split(':')[1], 10) / 60) /
                        24) *
                        timelineWidth
                    }%`,
                    background:
                      'linear-gradient(90deg, rgba(250,0,0,1) 0%, rgba(248,248,248,1) 100%)',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 600,
                    fontSize: '0.7rem',
                    color: theme.colors.gray[2],
                  })}
                />
              </Tooltip>
            </Box>
          );
        }
      )}
    </div>
  );
}

export default TimeBlock;
