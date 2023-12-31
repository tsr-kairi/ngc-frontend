import {
  Box,
  Drawer,
  Flex,
  Paper,
  Progress,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export default function LeaveCard({
  type,
  availed,
  granted,
  drawerChildren,
  isDrawerModalOpen = false,
  drawerSize,
  drawerTitle,
  onClick,
}: LeaveCardType) {
  // state prop dealing management
  const [drawerOpen, setDrawerOpen] = useState(isDrawerModalOpen);

  // useEffect dealing management
  useEffect(() => {
    setDrawerOpen(isDrawerModalOpen);
  }, [isDrawerModalOpen]);

  const theme = useMantineTheme();
  const getColorDark = (): string => {
    if (type === 'Casual') return `${theme.colors.error[3]}`;
    if (type === 'Sick') return `${theme.colors.warning[8]}`;
    if (type === 'Earned') return `${theme.colors.success[4]}`;
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
      sx={() => ({
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
          marginTop: '15px',
          marginRight: '13px',
          marginBottom: '12px',
        }}
      >
        <Text size={25} weight={600} color={colorDark}>
          {`${type} leave`}
        </Text>
        <Text
          sx={{
            cursor: 'pointer',
            width: '100px',
          }}
          display="flex"
          color="brand.4"
          size={13}
          weight={700}
          onClick={() => {
            if (onClick) {
              onClick();
            } else {
              setDrawerOpen(true);
            }
          }}
        >
          View Details
          <IconExternalLink size={18} />
        </Text>
        <Box>
          <Flex
            sx={{
              marginBottom: '5px',
              marginTop: '15px',
            }}
            justify="space-between"
          >
            <Text size={15} weight={300}>
              Availed: <b>{availed}</b>
            </Text>
            <Text size={15} weight={400}>
              Granted: <b>{granted}</b>
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
      {/* Normal Drawer */}
      <Drawer
        opened={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title={drawerTitle}
        padding="xl"
        size={drawerSize || 'xl'}
        position="right"
      >
        <Paper>{drawerChildren}</Paper>
      </Drawer>
    </Flex>
  );
}
