import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @ViewChild('popupRef')
  popupRef!: TemplateRef<any>;

  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any> = this.popupRef) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
  }

}
