import {Component, OnInit} from '@angular/core';
import { DateService } from "../../services/date.service";
import { Day } from "../../models/day";
import * as moment from "moment";


@Component({
  selector: 'app-calendar-table',
  templateUrl: './calendar-table.component.html',
  styleUrls: ['./calendar-table.component.scss']
})
export class CalendarTableComponent implements OnInit {


  public currentDays!: Day[];


  constructor(private dateService: DateService) {
    this.dateService.dateStream$.subscribe(date => {
      this.currentDays = this.fillDaysArray(date);
    })
    this.dateService.dateStream$.next(moment().startOf('month'));
  }


  fillDaysArray(date: moment.Moment): Day[]{
    const currentDate: moment.Moment = moment(date)
    const currentDays: Day[] = [];
    const daysInMonth: number = currentDate.daysInMonth();
    for ( let i = 1; i <= daysInMonth; i++ ){
      let dateInfo: moment.Moment | string = currentDate;
      const dayInfo: moment.Moment = moment(dateInfo);
      const isWeekend = dayInfo.isoWeekday() === 6 || dayInfo.isoWeekday() === 7;
      const day: Day = {
        date:dayInfo.format('D'),
        isDayOff: isWeekend,
        dayName: dayInfo.format('dd')
      };
      dateInfo = dateInfo.add(1,'d').format();
      currentDays.push(day);
    }
    return currentDays;
  }

  showPopup(arg: any){
    return arg
  }



  ngOnInit(): void {
  }

}
