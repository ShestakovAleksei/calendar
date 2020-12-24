import {Component, Input, OnInit} from '@angular/core';
import {Day} from "../../models/day";
import {Team} from "../../models/team";
import { teams } from "../../dataBase/teamsDB";


@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent implements OnInit {

  @Input() currentDays: Day[] | undefined;
  public teams: Team[] = teams;
  public usersIcon: string = '../../assets/users.png'

  constructor() {
  }


  ngOnInit() {
  }

}
