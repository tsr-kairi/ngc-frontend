/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import { createStyles, Paper, Progress, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import {
  IconFileDescription,
  IconSquareRoundedCheckFilled,
} from '@tabler/icons-react';

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
      style={{ maxWidth: 300, padding: '5px', margin: '10px' }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconFileDescription
          size={50}
          strokeWidth={2}
          className={classes.iconStyle}
        />
        <div style={{ marginLeft: 10, width: 200 }}>
          <Text weight={500} size="md" mb={0} pb={0}>
            {element.fileName}
          </Text>
          <Text fz="sm" weight={200}>
            {element.size}
          </Text>
          <Progress value={100} />
        </div>
        <div>
          <IconSquareRoundedCheckFilled size={20} fill="green" />
          <Text size="sm" mt="md">
            100%
          </Text>
        </div>
      </div>
    </Paper>
  ));
  return (
    <div className="">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px',
        }}
      >
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
      </div>
      <Text fz="lg" mt="md" weight={600}>
        Emergency Contact Details
      </Text>
      {items}
    </div>
  );
}
export default Banking;
