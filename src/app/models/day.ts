import * as moment from "moment";

export interface Day {
  date: moment.Moment | string;
  isDayOff: boolean;
  dayName: string;
}
