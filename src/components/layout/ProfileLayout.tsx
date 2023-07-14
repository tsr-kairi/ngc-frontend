import { Box, Group, Progress, Text } from '@mantine/core';
import React from 'react';
import ProfileSidebar from '../ui/ProfileLayout/ProfileSidebar';

function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
      <ProfileSidebar />
      <Box px="lg" style={{ width: '100%' }}>
        <Group position="apart" mt="xs">
          <Text fz="sm" color="dimmed">
            Progress
          </Text>
          <Text fz="sm" color="dimmed">
            62%
          </Text>
        </Group>
        <Progress value={62} mt={5} />
        {children}
      </Box>
    </div>
  );
}

export default ProfileLayout;
