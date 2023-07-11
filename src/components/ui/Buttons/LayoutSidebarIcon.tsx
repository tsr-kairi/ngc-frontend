import IsMobileScreen from '@/hooks/useIsMobileScreen';
import { ActionIcon } from '@mantine/core';
import { IconLayoutSidebar, IconLayoutSidebarRight } from '@tabler/icons-react';

function LayoutSidebarIcon() {
  return (
    <ActionIcon
      variant="transparent"
      title={`${!IsMobileScreen() ? 'Expend' : 'collapse'}`}
    >
      {!IsMobileScreen() ? <IconLayoutSidebar /> : <IconLayoutSidebarRight />}
    </ActionIcon>
  );
}

export default LayoutSidebarIcon;
