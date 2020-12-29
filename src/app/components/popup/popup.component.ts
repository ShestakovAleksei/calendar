import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as moment from 'moment';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @ViewChild('popupRef')
  popupRef!: TemplateRef<any>;

  public modalRef!: BsModalRef;
  public vacationDaysSum!: number;
  public startDate: any;
  public endDate: any;




  constructor(private modalService: BsModalService) {
  }

  getVacationDatesRange(event: any):void{
      if(event.target.classList.contains('popup__dateFrom')){
        this.startDate = event.target.value;
      } else {
        this.endDate = event.target.value;
      }
      if (this.startDate && this.endDate){
        this.vacationDaysSum = Number(moment(this.endDate).format('D'))
          - Number(moment(this.startDate).format('D'));
        if (this.vacationDaysSum < 0){
          [this.startDate, this.endDate] = [this.endDate, this.startDate];
          this.vacationDaysSum = -this.vacationDaysSum
        }
      }
  }




  openModal(template: TemplateRef<any> = this.popupRef): void {
    this.modalRef = this.modalService.show(template);
  }




  ngOnInit(): void {
  }

}
