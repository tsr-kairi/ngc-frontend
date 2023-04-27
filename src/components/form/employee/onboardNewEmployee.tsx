import { Box, Button, MultiSelect, Select, TextInput } from '@mantine/core';
import { FormEvent, useState } from 'react';
import { z } from 'zod';

const emailType = z.string().email({ message: 'Invalid Email' });

function OnboardNewEmployee({
  setOpenedOnBoard,
}: {
  setOpenedOnBoard: (value: boolean) => void;
}) {
  const [salutation, setSalutation] = useState<string>('MR');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<string[]>([]);
  const [inputRolesError, setInputRolesError] = useState('');

  const handleOnboard = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = emailType.safeParse(email);
    if (!result.success) {
      // eslint-disable-next-line no-underscore-dangle
      setEmailError(result.error.format()._errors[0]);
      return;
    }
    if (value.length === 0) {
      setInputRolesError('Please select at least one role');
      return;
    }
    setLoading(true);
  };
  return (
    <form
      onSubmit={handleOnboard}
      style={{
        paddingTop: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Select
        label="Salutation"
        placeholder="NA"
        data={[
          { value: 'MR', label: 'Mr' },
          { value: 'MS', label: 'Ms' },
          { value: 'MRS', label: 'Mrs' },
          { value: 'DR', label: 'Dr' },
          { value: 'PROF', label: 'Prof' },
        ]}
        value={salutation}
        onChange={(event) => setSalutation(event || '')}
        required
      />
      <TextInput
        placeholder="First Name"
        label="First Name"
        required
        value={firstName}
        onChange={(event) => setFirstName(event.currentTarget.value)}
      />
      <TextInput
        placeholder="Last Name"
        label="Last Name"
        value={lastName}
        onChange={(event) => setLastName(event.currentTarget.value)}
        required
      />
      <TextInput
        placeholder="ravin@nexg.tech"
        label="Email"
        value={email}
        onChange={(event) => {
          setEmailError('');
          setEmail(event.currentTarget.value);
        }}
        error={emailError}
        required
      />
      <MultiSelect
        data={[
          { value: 'Admin', label: 'Admin' },
          { value: 'HR', label: 'HR' },
          { value: 'Project Mgr', label: 'Project Mgr' },
          { value: 'CEO', label: 'CEO' },
        ]}
        label="Roles"
        error={inputRolesError}
        required
        placeholder="Select the roles"
        searchable
        nothingFound="Nothing found"
        value={value}
        onChange={(e) => {
          setInputRolesError('');
          setValue(e);
        }}
      />
      <Box
        sx={(theme) => ({
          position: 'absolute',
          bottom: 0,
          borderTop: `1px solid ${
            theme.colorScheme === 'dark'
              ? theme.colors.dark[5]
              : theme.colors.gray[2]
          }`,
          padding: '1rem',
          width: '95%',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '1rem',
        })}
      >
        <Button
          color="dark"
          type="reset"
          radius="xs"
          variant="subtle"
          onClick={() => setOpenedOnBoard(false)}
        >
          Cancel
        </Button>
        <Button color="blue" loading={loading} type="submit" radius="xs">
          Onboard Employee
        </Button>
      </Box>
    </form>
  );
}

export default OnboardNewEmployee;
