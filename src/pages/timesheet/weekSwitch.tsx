import { ActionIcon, Group } from '@mantine/core';
import {
  IconCalendar,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react';
import { useState } from 'react';

function WeekSwitcher() {
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(new Date());

  const getNextWeek = () => {
    const nextWeekStartDate = new Date(currentWeekStart);
    nextWeekStartDate.setDate(nextWeekStartDate.getDate() + 7);
    setCurrentWeekStart(nextWeekStartDate);
  };

  const getPrevWeek = () => {
    const prevWeekStartDate = new Date(currentWeekStart);
    prevWeekStartDate.setDate(prevWeekStartDate.getDate() - 7);
    setCurrentWeekStart(prevWeekStartDate);
  };

  const getStartAndEndOfWeek = (date: Date): { start: Date; end: Date } => {
    const start = new Date(date);
    const end = new Date(date);
    start.setDate(start.getDate() - start.getDay()); // Get the first day of the week (Sunday)
    end.setDate(end.getDate() - end.getDay() + 6); // Get the last day of the week (Saturday)
    return { start, end };
  };

  const { start: weekStart, end: weekEnd } =
    getStartAndEndOfWeek(currentWeekStart);

  const formattedStartDate = `${weekStart.getDate()} ${weekStart.toLocaleString(
    'default',
    {
      month: 'short',
    }
  )}`;

  const formattedEndDate = `${weekEnd.getDate()} ${weekEnd.toLocaleString(
    'default',
    {
      month: 'short',
    }
  )}`;

  const formattedWeekRange = `${formattedStartDate} - ${formattedEndDate} ${weekEnd.getFullYear()}`;

  return (
    <Group>
      <ActionIcon
        sx={(theme) => ({
          border: `1px solid ${
            theme.colorScheme === 'dark'
              ? `${theme.colors.gray[2]}`
              : `${theme.colors.gray[6]}`
          }`,
          color: `${
            theme.colorScheme === 'dark'
              ? `${theme.colors.gray[2]}`
              : `${theme.colors.gray[6]}`
          }`,
        })}
        onClick={getPrevWeek}
      >
        <IconChevronLeft />
      </ActionIcon>
      <Group>
        <p>{formattedWeekRange}</p>
      </Group>
      <ActionIcon
        sx={(theme) => ({
          border: `1px solid ${
            theme.colorScheme === 'dark'
              ? `${theme.colors.gray[2]}`
              : `${theme.colors.gray[6]}`
          }`,
          color: `${
            theme.colorScheme === 'dark'
              ? `${theme.colors.gray[2]}`
              : `${theme.colors.gray[6]}`
          }`,
        })}
        onClick={getNextWeek}
      >
        <IconChevronRight />
      </ActionIcon>
      <IconCalendar />
    </Group>
  );
}

export default WeekSwitcher;
