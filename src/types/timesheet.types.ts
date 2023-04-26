import { z } from 'zod';

// TimesheetWeeklyData list data
const zTimesheetWeeklyData = z.object({
  key: z.string(),
  date: z.string(),
  hours: z.number(),
  total_hours: z.number(),
  task: z.string(),
});

// TimesheetWeeklyData create list data
const zTimesheetWeeklyDataCreate = z.object({
  key: z.string(),
  date: z.string(),
  hours: z.number(),
  total_hours: z.number(),
  task: z.string(),
});

// TimesheetWeeklyData zod types define
type TTimesheetWeeklyDataCreate = z.infer<typeof zTimesheetWeeklyDataCreate>;
type TTimesheetWeeklyData = z.infer<typeof zTimesheetWeeklyData>;

// TimesheetWeeklyData interface define
interface TTimesheetWeeklyDataFindAll {
  data: TTimesheetWeeklyData[];
}

// TimesheetWeeklyDataCreate response define
interface TTimesheetWeeklyDataCreateResponse {
  data: TTimesheetWeeklyData;
}

// TimesheetWeeklyDataFindById response data define
interface TTimesheetWeeklyDataFindById {
  data: TTimesheetWeeklyData[];
  message: string;
  ok: boolean;
}

// TimesheetWeeklyData type exports
export type {
  TTimesheetWeeklyDataCreate,
  TTimesheetWeeklyData,
  TTimesheetWeeklyDataFindAll,
  TTimesheetWeeklyDataCreateResponse,
  TTimesheetWeeklyDataFindById
};

// TimesheetWeeklyData ZOD exports
export default { zTimesheetWeeklyData };
