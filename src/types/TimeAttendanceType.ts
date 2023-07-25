// Define a ClockEntry interface representing the clock-in and clock-out times.
interface ClockEntry {
  clockIn: string;
  clockOut: string;
}

// Define an Entry interface representing the date and time entries.
export interface Entry {
  date: string;
  time: ClockEntry[];
}

// Define the type for the elements array.
export type TimeAttendanceType = Entry[][];
