import { Box, Flex, Progress, Text } from '@mantine/core';

export default function LeaveCard({
  type,
  availed,
  details,
  granted,
}: LeaveCardType) {
  const getColorDark = (): string => {
    if (type === 'Casual') return '#b20000';
    if (type === 'Sick') return '#d28b03';
    if (type === 'Earned') return '#039922';
    return 'unknown';
  };

  const getLighterColor = (): string => {
    if (type === 'Casual') return '#FFEFEF';
    if (type === 'Sick') return '#FAECC9';
    if (type === 'Earned') return '#C6FFD3';
    return 'unknown';
  };

  const colorDark = getColorDark();
  const lighterColor = getLighterColor(); // You can adjust the opacity value as needed (0.0 to 1.0)
  const availedPercentage = (availed / granted) * 100;

  return (
    <Flex
      gap="lg"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? `${theme.colors.dark[6]}` : `#fffff`,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        height: 'auto',
        backgroundOpacity: 0.1,
        padding: '10px',
        borderRadius: '10px',
        border: `1px solid ${colorDark}`,
      })}
    >
      <Box
        sx={{
          height: '100%',
          backgroundColor: lighterColor,
          width: '100px',
          display: 'grid',
          placeItems: 'center',
          borderRadius: '10px',
        }}
      >
        <Text weight={700} size={50} color={colorDark}>
          {granted - availed}
        </Text>
      </Box>
      <Box
        sx={{
          width: '100%',
          flex: 1,
        }}
      >
        <Text size={25} weight={600} color={colorDark}>
          {`${type} leave`}
        </Text>
        <Text color="brand" component="a" href={details}>
          view details
        </Text>
        <Box>
          <Flex
            sx={{
              marginBottom: '5px',
            }}
            justify="space-between"
          >
            <Text size={15} weight={300}>
              Availed: {availed}
            </Text>
            <Text size={15} weight={300}>
              Granted: {granted}
            </Text>
          </Flex>
          <Progress
            sections={[
              { value: availedPercentage, color: 'red.3' },
              { value: 100 - availedPercentage, color: 'green.3' },
            ]}
          />
        </Box>
      </Box>
    </Flex>
  );
}
