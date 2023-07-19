import { ActionIcon } from '@mantine/core';
import { IconLayoutSidebar, IconLayoutSidebarRight } from '@tabler/icons-react';
import React from 'react';

interface LayoutSidebarIconProps {
  collapsed: boolean;
  onClick: () => void;
}

// eslint-disable-next-line react/function-component-definition
const LayoutSidebarIcon: React.FC<LayoutSidebarIconProps> = ({
  collapsed,
  onClick,
}) => {
  // const { classes } = useStyles();
  return (
    <ActionIcon
      variant="transparent"
      title={`${collapsed ? 'Expand' : 'Collapse'}`}
      onClick={onClick}
    >
      {collapsed ? <IconLayoutSidebar /> : <IconLayoutSidebarRight />}
    </ActionIcon>
  );
};

export default LayoutSidebarIcon;
