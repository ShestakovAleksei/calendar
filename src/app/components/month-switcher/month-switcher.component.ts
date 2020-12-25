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
  public currentYear: string;
  public date!: moment.Moment;

  constructor(private dateService: DateService) {
    this.currentYear = '';
    this.currentMonth = '';
    this.dateService.dateStream$.subscribe(date => {
      this.date = date;
      this.currentMonth = this.date.format('MMMM');
      this.currentYear = this.date.format('YYYY');
    })
    this.dateService.dateStream$.next(moment());

  }
  ngOnInit(): void {
  }

  switchMonth(direction: number): void {
    this.dateService.monthSwitcher(direction);
  }

}
