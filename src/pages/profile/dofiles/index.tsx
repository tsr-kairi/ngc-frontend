/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-key */
import {
  Box,
  Button,
  Container,
  createStyles,
  FileButton,
  Paper,
  Progress,
  Text,
} from '@mantine/core';
import { IconFiles, IconSquareRoundedCheckFilled } from '@tabler/icons-react';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  iconStyle: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
  },
}));
const documents = [
  {
    fileName: 'Passport',
    size: '200kb',
  },
  {
    fileName: 'Passport',
    size: '200kb',
  },
  {
    fileName: 'Passport',
    size: '200kb',
  },
];

function Dofiles() {
  const [file, setFile] = useState<File | null>(null);
  const { classes } = useStyles();
  const items = documents.map((element) => (
    <Paper
      shadow="xs"
      style={{ maxWidth: 300, padding: '5px', margin: '10px' }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconFiles
          size={50}
          strokeWidth={2}
          color="red"
          className={classes.iconStyle}
        />
        <Box sx={{ marginLeft: 15, width: 200 }}>
          <Text weight={500} size="md" mb={0} pb={0}>
            {element.fileName}
          </Text>
          <Text fz="sm" weight={200}>
            {element.size}
          </Text>
          <Progress value={100} />
        </Box>
        <Box sx={{ paddingLeft: '10px' }}>
          <IconSquareRoundedCheckFilled size={20} fill="green" />
          <Text size="sm" mt="md">
            100%
          </Text>
        </Box>
      </Box>
    </Paper>
  ));
  return (
    <Container>
      {items}
      <FileButton onChange={setFile} accept="image/png,image/jpeg">
        {(props) => (
          <Button m="md" {...props}>
            Upload
          </Button>
        )}
      </FileButton>
      {file && (
        <Text size="sm" align="center" mt="sm">
          Picked file: {file.name}
        </Text>
      )}
    </Container>
  );
}
export default Dofiles;
