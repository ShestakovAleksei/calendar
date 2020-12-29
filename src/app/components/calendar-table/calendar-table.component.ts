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
  }


  showPopup(arg: any){
    return arg
  }



  ngOnInit(): void {
    this.dateService.dateStream$.subscribe(date => {
      this.currentDays = this.dateService.fillDaysArray(date);
    })
    this.dateService.dateStream$.next(moment().startOf('month'));
  }

}
