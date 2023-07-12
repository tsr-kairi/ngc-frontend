/* eslint-disable react/jsx-props-no-spreading */

import { TextInput } from '@mantine/core';
import { useForm, UseFormReturnType } from '@mantine/form';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

function FirstNameInput({ form }: { form: UseFormReturnType<FormValues> }) {
  return <TextInput label="First Name" {...form.getInputProps('firstName')} />;
}

function LastNameInput({ form }: { form: UseFormReturnType<FormValues> }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <TextInput label="Last Name" {...form.getInputProps('lastName')} />;
}

function EmailInput({ form }: { form: UseFormReturnType<FormValues> }) {
  return <TextInput label="Email" {...form.getInputProps('email')} />;
}

export default function Personal(): JSX.Element {
  const form = useForm<FormValues>({
    initialValues: { firstName: '', lastName: '', email: '' },
  });

  return (
    <form>
      <FirstNameInput form={form} />
      <LastNameInput form={form} />
      <EmailInput form={form} />
      <button type="submit">Submit</button>
    </form>
  );
}
