import { createStyles, Text } from '@mantine/core';

const useStyles = createStyles(() => ({
  FirstParentGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export default function DashBoard() {
  const { classes } = useStyles();

  return (
    <div className={classes.FirstParentGrid}>
      <Text>This is dashboard</Text>
    </div>
  );
}
