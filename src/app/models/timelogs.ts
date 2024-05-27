import { User } from "./user";

export interface Timelogs {
    TimeLogsId?: number;
    userid: number; 
    clockIn: Date;
    clockOut?: Date | null;
  }
