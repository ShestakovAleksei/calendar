import { Component, OnInit } from '@angular/core';
import { DateService } from "../../services/date.service";
import * as moment from 'moment';

@Component({
  selector: 'app-month-switcher',
  templateUrl: './month-switcher.component.html',
  styleUrls: ['./month-switcher.component.scss']
})
export class MonthSwitcherComponent implements OnInit {
  public currentMonth: string;
  public currentYear: moment.Moment | string;
  date: moment.Moment | undefined;

  constructor(private DateService: DateService) {
    console.log(this.DateService);
    this.currentYear = '';
    this.currentMonth = '';
    this.DateService.dateStream$.subscribe(date => {
      this.date = date;
      this.currentMonth = this.date.format('MMMM');
      this.currentYear = this.date.format('YYYY');
    })
    this.DateService.dateStream$.next(moment());

  }
  ngOnInit(): void {
  }

  monthSwitcher(direction: number): void {
    this.DateService.monthSwitcher(direction);
  }

}
