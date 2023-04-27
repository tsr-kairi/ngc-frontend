import { Box, Button, Select } from '@mantine/core';
import { FormEvent, useState } from 'react';

function OffBoardEmployee({
  setOpenedOffBoard,
}: {
  setOpenedOffBoard: (value: boolean) => void;
}) {
  const [loading, setLoading] = useState(false);

  const handleOnboard = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        label="Reason for OffBoarding"
        placeholder="NA"
        data={[
          { value: 'Termination', label: 'Termination' },
          { value: 'Resignation', label: 'Resignation' },
          { value: 'End of contracts', label: 'End of contracts' },
        ]}
        required
      />
      <Select
        label="Is OffBoarding mail send to the client"
        placeholder="NA"
        data={[
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' },
        ]}
        required
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
          onClick={() => setOpenedOffBoard(false)}
        >
          Cancel
        </Button>
        <Button color="blue" loading={loading} type="submit" radius="xs">
          OffBoard Employee
        </Button>
      </Box>
    </form>
  );
}

export default OffBoardEmployee;
