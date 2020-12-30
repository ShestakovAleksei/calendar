import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import * as moment from 'moment';
import {Day} from "../models/day";

@Injectable({
  providedIn: 'root'
})
export class DateService {

  public dateStream$: Subject<moment.Moment>;

  private date!: moment.Moment;
  private lastDayOfMonth: moment.Moment;
  public startDate!: Date;
  public endDate!: Date;
  public vacationDaysSum!: number;

  constructor() {
    this.lastDayOfMonth = moment().endOf('month');
    this.dateStream$ = new Subject();
    this.dateStream$.subscribe(date => this.date = date);
  }

  fillDaysArray(date: moment.Moment): Day[]{
    let currentDate: moment.Moment = moment(date)
    const currentDays: Day[] = [];
    const daysInMonth: number = currentDate.daysInMonth();
    for ( let i = 1; i <= daysInMonth; i++ ){
      const isWeekend = currentDate.isoWeekday() === 6 || currentDate.isoWeekday() === 7;
      const day: Day = {
        date:currentDate.format('D'),
        isDayOff: isWeekend,
        dayName: currentDate.format('dd')
      };
      currentDate.add(1,'d');
      currentDays.push(day);
    }
    return currentDays;
  }

  getVacationDatesRange(event: any): void {
    if (event.target.classList.contains('popup__dateFrom')) {
      this.startDate = event.target.value;
    } else {
      this.endDate = event.target.value;
    }
    if (!this.startDate || !this.endDate) { return; }
    this.vacationDaysSum = Number(moment(this.endDate).format('D'))
      - Number(moment(this.startDate).format('D'));
    if (this.vacationDaysSum >= 0) { return; }
    [this.startDate, this.endDate] = [this.endDate, this.startDate];
    this.vacationDaysSum *= -1;
  }

  switchMonth(direction: number): void {
    direction === -1
      ? this.dateStream$.next(moment(this.date).add(-1, 'M'))
      : this.dateStream$.next(moment(this.date).add(1, 'M'));
  }
}
