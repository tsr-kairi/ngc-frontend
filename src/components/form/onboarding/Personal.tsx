/* eslint-disable react/jsx-props-no-spreading */
import { Box, Group, Select, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Personal() {
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

  return (
    <form>
      <Group position="apart" mt="sm" grow>
        <Box>
          <Text
            component="label"
            htmlFor="age"
            size="sm"
            weight={500}
            sx={{ display: 'flex', marginBottom: '0.25rem', gap: '5px' }}
          >
            Age <Text color="red">*</Text>
          </Text>
          <TextInput
            placeholder="Enter your age"
            type="number"
            {...form.getInputProps('age')}
            variant="unstyled"
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
          />
        </Box>
        <Box>
          <Text
            component="label"
            htmlFor="Gender"
            size="sm"
            weight={500}
            sx={{ display: 'flex', marginBottom: '0.25rem', gap: '5px' }}
          >
            Gender <Text color="red">*</Text>
          </Text>
          <Select
            placeholder="Select your gender"
            data={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'others', label: 'Others' },
            ]}
            type="number"
            {...form.getInputProps('gender')}
            variant="unstyled"
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
          />
        </Box>
      </Group>

      <Group position="apart" mt="sm" grow>
        <Box>
          <Text
            component="label"
            htmlFor="Phone"
            size="sm"
            weight={500}
            sx={{ display: 'flex', marginBottom: '0.25rem', gap: '5px' }}
          >
            Phone <Text color="red">*</Text>
          </Text>
          <TextInput
            placeholder="Enter your phone"
            type="number"
            {...form.getInputProps('phone')}
            variant="unstyled"
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
          />
        </Box>
        <Box>
          <Text
            component="label"
            htmlFor="Alternate Phone"
            size="sm"
            weight={500}
            sx={{ display: 'flex', marginBottom: '0.25rem', gap: '5px' }}
          >
            Alternate Phone <Text color="red">*</Text>
          </Text>
          <TextInput
            placeholder="Enter your alternate phone"
            type="number"
            {...form.getInputProps('alternatePhone')}
            variant="unstyled"
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
          />
        </Box>
      </Group>
      <Group position="apart" mt="sm" grow>
        <Box>
          <Text
            component="label"
            htmlFor="Alternate Email"
            size="sm"
            weight={500}
            sx={{ display: 'flex', marginBottom: '0.25rem', gap: '5px' }}
          >
            Alternate Email <Text color="red">*</Text>
          </Text>
          <TextInput
            placeholder="Enter your alternate email"
            type="email"
            {...form.getInputProps('alternateEmail')}
            variant="unstyled"
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
          />
        </Box>
      </Group>
    </form>
  );
}
