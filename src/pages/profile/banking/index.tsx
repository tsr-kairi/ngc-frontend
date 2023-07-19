/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Button,
  Container,
  createStyles,
  FileButton,
  Paper,
  Progress,
  SimpleGrid,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconFiles, IconSquareRoundedCheckFilled } from '@tabler/icons-react';
import { useState } from 'react';

// create style for this components
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
function Banking() {
  const [file, setFile] = useState<File | null>(null);
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      age: '',
      phone: '',
      alternatePhone: '',
      alternateEmail: '',
    },
    validate: {
      age: (value) =>
        value < '18' ? 'You must be at least 18 to register' : null,
    },
  });

  const items = documents.map((element) => (
    <Paper
      shadow="xs"
      style={{ maxWidth: 300, padding: '10px', margin: '10px' }}
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
          <Progress mt="10px" value={100} />
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
    <Container className="">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} mb="sm">
        <TextInput
          label="Account number"
          placeholder="90XXXXXX"
          {...form.getInputProps('streetLine1')}
        />
        <TextInput
          label="IFSC Code"
          placeholder="Jane"
          {...form.getInputProps('streetLine2')}
        />
        <TextInput
          label="Bank name"
          placeholder="Jane"
          {...form.getInputProps('streetLine1')}
        />
        <TextInput
          label="Branch name"
          placeholder="Jane"
          {...form.getInputProps('streetLine2')}
        />
      </SimpleGrid>
      <Text fz="lg" mt="md" weight={600}>
        Bank Documents
      </Text>
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
export default Banking;
