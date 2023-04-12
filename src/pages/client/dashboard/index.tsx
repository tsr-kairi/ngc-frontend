import { createStyles, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  FirstParentGrid: {
    display: 'flex',
    padding: '10px',
    width: '100%',
    flexDirection: 'column',
    gap: '30px',
  },
  SecParentGrid: {
    display: 'flex',
    gap: '30px',
    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  // main sides
  leftSide: {
    flex: '1',
    gap: '15px',
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
    },
  },
  rightSide: {
    width: '35%',
    gap: '15px',
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
    },
  },
  // left side
  greeting: {
    backgroundColor: theme.colors.grey[0],
    border: `1px solid ${theme.colors.blue[3]}`,
    paddingLeft: '20px',
    // padding: '8px',
    borderRadius: '10px',
    height: '50px',
    '&:hover': {
      backgroundColor: theme.colors.accent[0],
    },
  },
  analyticBoard: {
    backgroundColor: theme.colors.grey[0],
    border: `1px solid ${theme.colors.blue[3]}`,
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: theme.colors.accent[0],
    },
  },
  eventBoard: {
    backgroundColor: theme.colors.grey[0],
    border: `1px solid ${theme.colors.blue[3]}`,
    padding: '10px',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: theme.colors.accent[0],
    },
  },
  // right side
  messageBoard: {
    backgroundColor: theme.colors.grey[0],
    border: `1px solid ${theme.colors.blue[3]}`,
    padding: '10px',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: theme.colors.accent[0],
    },
  },
  unknown: {
    backgroundColor: theme.colors.grey[0],
    border: `1px solid ${theme.colors.blue[3]}`,
    padding: '30px',
    borderRadius: '10px',
    height: '404px',
    '&:hover': {
      backgroundColor: theme.colors.accent[0],
    },
  },
  footer: {
    backgroundColor: theme.colors.grey[0],
    border: `1px solid ${theme.colors.blue[3]}`,
    padding: '10px',
    borderRadius: '10px',
    height: '74px',
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
