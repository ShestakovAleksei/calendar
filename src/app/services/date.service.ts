import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  private date: moment.Moment | undefined;
  public dateStream$: Subject<moment.Moment>;
  private lastDayofMonth: moment.Moment;

  constructor() {
    this.lastDayofMonth = moment().endOf('month');
    this.dateStream$ = new Subject();
    this.dateStream$.subscribe(date => this.date = date);
  }

  monthSwitcher(direction: number): void {
    direction === -1 ?
      this.dateStream$.next(moment(this.date).add(-1, 'M')):
      this.dateStream$.next(moment(this.date).add(1, 'M'));
  }
}
