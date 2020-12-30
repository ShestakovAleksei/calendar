import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DateService } from "../../services/date.service";
import * as moment from 'moment';

@Component ({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @ViewChild ('popupRef')
  popupRef!: TemplateRef<any>;

  public modalRef!: BsModalRef;

  constructor(private modalService: BsModalService, public dateService: DateService) {
  }

  openModal(template: TemplateRef<any> = this.popupRef): void {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
  }
}
