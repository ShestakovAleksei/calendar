import { Component, OnInit } from '@angular/core';
import { DateService } from "../../services/date.service";
import * as moment from 'moment';

@Component({
  selector: 'app-month-switcher',
  templateUrl: './month-switcher.component.html',
  styleUrls: ['./month-switcher.component.scss']
})
export class MonthSwitcherComponent implements OnInit {


  public currentMonth!: string;
  public currentYear!: string;
  public date!: moment.Moment;

  public prevMonth!: number;
  public nextMonth!: number;


  constructor(private dateService: DateService) {
  }


  ngOnInit(): void {
    this.nextMonth = 1;
    this.prevMonth = -1;

    this.dateService.dateStream$.subscribe(date => {
      this.date = date;
      this.currentMonth = this.date.format('MMMM');
      this.currentYear = this.date.format('YYYY');
    })
    this.dateService.dateStream$.next(moment());
  }


  switchMonth(direction: number): void {
    this.dateService.switchMonth(direction);
  }


}
