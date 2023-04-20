import { Box, Button, Select, Text, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';

interface OnboardPersonalDetailsProps {
  nextStep: () => void;
  salutation: string;
  setSalutation: (salutation: string | '') => void;
  firstName: string;
  setFirstName: (firstName: string) => void;
  lastName: string;
  setLastName: (lastName: string) => void;
  email: string;
  phone: string;
  setPhone: (phone: string) => void;
  alternativePhone: string;
  setAlternativePhone: (alternativePhone: string) => void;
  alternativeEmail: string;
  setAlternativeEmail: (alternativeEmail: string) => void;
  dob: Date | null;
  setDob: (dob: Date) => void;
  language: string;
  setLanguage: (language: string | '') => void;
  languagesData: { label: string; value: string }[];
}

function PersonalDetails({
  nextStep,
  salutation,
  setSalutation,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  phone,
  setPhone,
  alternativePhone,
  setAlternativePhone,
  alternativeEmail,
  setAlternativeEmail,
  dob,
  setDob,
  language,
  setLanguage,
  languagesData,
}: OnboardPersonalDetailsProps) {
  const handleEditDetails = () => {
    // e.preventDefault();
    // if (!dob) {
    //   setDateOfBirthError(true);
    //   return;
    // }

    nextStep();
  };
  return (
    <form
      onSubmit={handleEditDetails}
      style={{
        width: '100%',
        margin: '2rem 0 0 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '0.5rem',
        }}
      >
        <Box
          sx={{
            width: '30%',
          }}
        >
          <Text
            color="dimmed"
            component="label"
            htmlFor="salutation"
            size="sm"
            weight={500}
            sx={{ display: 'block', marginBottom: '0.25rem' }}
          >
            Salutation*
          </Text>
          <Select
            placeholder="Mr"
            size="sm"
            autoFocus
            variant="unstyled"
            dropdownComponent="div"
            id="salutation"
            required
            sx={(theme) => ({
              border: `1px solid ${
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[5]
                  : theme.colors.dark[3]
              }`,
              borderRadius: '0.25rem',
              padding: '0 0.5rem',
            })}
            data={[
              { value: 'MR', label: 'Mr' },
              { value: 'MS', label: 'Ms' },
              { value: 'MRS', label: 'Mrs' },
              { value: 'DR', label: 'Dr' },
              { value: 'PROF', label: 'Prof' },
            ]}
            value={salutation}
            onChange={(e) => setSalutation(e || '')}
          />
        </Box>
        <Box>
          <Text
            color="dimmed"
            component="label"
            htmlFor="firstname"
            size="sm"
            weight={500}
            sx={{ display: 'block', marginBottom: '0.25rem' }}
          >
            First Name*
          </Text>
          <TextInput
            placeholder="John"
            size="sm"
            autoFocus
            variant="unstyled"
            id="firstname"
            required
            sx={(theme) => ({
              border: `1px solid ${
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[5]
                  : theme.colors.dark[3]
              }`,
              borderRadius: '0.25rem',
              padding: '0 0.5rem',
            })}
            value={firstName}
            onChange={(e) => setFirstName(e.currentTarget.value)}
          />
        </Box>
        <Box>
          <Text
            color="dimmed"
            component="label"
            htmlFor="lastname"
            size="sm"
            weight={500}
            sx={{ display: 'block', marginBottom: '0.25rem' }}
          >
            Last Name*
          </Text>
          <TextInput
            placeholder="Doe"
            size="sm"
            autoFocus
            variant="unstyled"
            id="lastname"
            required
            sx={(theme) => ({
              border: `1px solid ${
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[5]
                  : theme.colors.dark[3]
              }`,
              borderRadius: '0.25rem',
              padding: '0 0.5rem',
            })}
            value={lastName}
            onChange={(e) => setLastName(e.currentTarget.value)}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '0.5rem',
        }}
      >
        <Box
          sx={{
            width: '100%',
          }}
        >
          <Text
            color="dimmed"
            component="label"
            htmlFor="phone"
            size="sm"
            weight={500}
            sx={{ display: 'block', marginBottom: '0.25rem' }}
          >
            Company Mobile Phone*
          </Text>
          <TextInput
            placeholder="+91 9797979797"
            size="sm"
            autoFocus
            variant="unstyled"
            id="phone"
            type="number"
            required
            sx={(theme) => ({
              border: `1px solid ${
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[5]
                  : theme.colors.dark[3]
              }`,
              borderRadius: '0.25rem',
              padding: '0 0.5rem',
            })}
            value={phone}
            onChange={(e) => setPhone(e.currentTarget.value)}
          />
        </Box>
        <Box
          sx={{
            width: '100%',
          }}
        >
          <Text
            color="dimmed"
            component="label"
            htmlFor="email"
            size="sm"
            weight={500}
            sx={{ display: 'block', marginBottom: '0.25rem' }}
          >
            Company Email*
          </Text>
          <TextInput
            placeholder="nexg@abcdefgh.tech"
            size="sm"
            autoFocus
            variant="unstyled"
            id="email"
            sx={(theme) => ({
              border: `1px solid ${
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[5]
                  : theme.colors.dark[3]
              }`,
              borderRadius: '0.25rem',
              padding: '0 0.5rem',
            })}
            value={email}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '0.5rem',
        }}
      >
        <Box
          sx={{
            width: '100%',
          }}
        >
          <Text
            color="dimmed"
            component="label"
            htmlFor="alternate-phone"
            size="sm"
            weight={500}
            sx={{ display: 'block', marginBottom: '0.25rem' }}
          >
            Personal Phone*
          </Text>
          <TextInput
            placeholder="+91 9797979797"
            size="sm"
            autoFocus
            variant="unstyled"
            id="alternate-phone"
            type="number"
            required
            sx={(theme) => ({
              border: `1px solid ${
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[5]
                  : theme.colors.dark[3]
              }`,
              borderRadius: '0.25rem',
              padding: '0 0.5rem',
            })}
            value={alternativePhone}
            onChange={(e) => setAlternativePhone(e.currentTarget.value)}
          />
        </Box>
        <Box
          sx={{
            width: '100%',
          }}
        >
          <Text
            color="dimmed"
            component="label"
            htmlFor="alternate-email"
            size="sm"
            weight={500}
            sx={{ display: 'block', marginBottom: '0.25rem' }}
          >
            Personal Email*
          </Text>
          <TextInput
            placeholder="nexg@abcdefgh.tech"
            size="sm"
            autoFocus
            variant="unstyled"
            id="alternate-email"
            type="email"
            required
            sx={(theme) => ({
              border: `1px solid ${
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[5]
                  : theme.colors.dark[3]
              }`,
              borderRadius: '0.25rem',
              padding: '0 0.5rem',
            })}
            value={alternativeEmail}
            onChange={(e) => setAlternativeEmail(e.currentTarget.value)}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '0.5rem',
        }}
      >
        <Box
          sx={{
            width: '100%',
          }}
        >
          <Text
            color="dimmed"
            component="label"
            htmlFor="date-of-birth"
            size="sm"
            weight={500}
            sx={{ display: 'block', marginBottom: '0.25rem' }}
          >
            Date Of Birth*
          </Text>
          <DateInput
            placeholder="Pick date"
            size="sm"
            autoFocus
            variant="unstyled"
            id="date-of-birth"
            maxDate={
              new Date(
                Date.UTC(
                  new Date().getFullYear() - 18,
                  new Date().getMonth(),
                  new Date().getDate()
                )
              )
            }
            sx={(theme) => ({
              border: `1px solid ${
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[5]
                  : theme.colors.dark[3]
              }`,
              borderRadius: '0.25rem',
              padding: '0 0.5rem',
            })}
            value={dob}
            onChange={(e) => setDob(e || new Date())}
          />
        </Box>
        <Box
          sx={{
            width: '100%',
          }}
        >
          <Text
            color="dimmed"
            component="label"
            htmlFor="language"
            size="sm"
            weight={500}
            sx={{ display: 'block', marginBottom: '0.25rem' }}
          >
            Language
          </Text>
          <Select
            size="sm"
            autoFocus
            variant="unstyled"
            id="language"
            placeholder="Select Language"
            sx={(theme) => ({
              border: `1px solid ${
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[5]
                  : theme.colors.dark[3]
              }`,
              borderRadius: '0.25rem',
              padding: '0 0.5rem',
            })}
            data={languagesData || []}
            value={language}
            onChange={(e) => setLanguage(e || '')}
          />
        </Box>
      </Box>
      <Button
        radius="xs"
        sx={(theme) => ({
          backgroundColor: theme.colors.brand[8],
          padding: '0 1.5rem',
          marginLeft: 'auto',
        })}
        type="submit"
      >
        Next
      </Button>
    </form>
  );
}

export default PersonalDetails;
