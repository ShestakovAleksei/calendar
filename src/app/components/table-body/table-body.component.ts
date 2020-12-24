import {Component, Input, OnInit} from '@angular/core';
import {UserRealm} from '../../models/user';
import {DateService} from "../../services/date.service";
import {Day} from "../../models/day";
import {Subject} from "rxjs";
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
  public userRealm = UserRealm;
  name: string | undefined;
  public usersIcon: string = '../../assets/users.png'

  constructor(private dateService: DateService) {
  }

  ngOnInit() {
  }

}
