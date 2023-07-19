import { Box, Group, Progress, Text } from '@mantine/core';
import React from 'react';
import ProfileSidebar from '../ui/ProfileLayout/ProfileSidebar';

interface ProfileLayoutProps {
  children: React.ReactNode;
  title: string;
  subTitle: string;
}

function ProfileLayout({ children, title, subTitle }: ProfileLayoutProps) {
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
        <div style={{ paddingTop: '20px' }}>
          <Text fz="xl" weight={900}>
            {title}
          </Text>
          <Text fz="md">{subTitle}</Text>
        </div>
        <div style={{ flex: 1 }}>{children}</div>
      </Box>
    </div>
  );
}

export default ProfileLayout;
