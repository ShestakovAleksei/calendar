import {Component, Input, OnInit} from '@angular/core';
import {UserRealm} from '../../models/user';
import {DateService} from "../../services/date.service";
import {Day} from "../../models/day";
import * as moment from "moment";

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent implements OnInit {

  @Input() currentDays: Day[] | undefined;

  constructor(private dateService: DateService) {

  }

  ngOnInit() {
  }

}
