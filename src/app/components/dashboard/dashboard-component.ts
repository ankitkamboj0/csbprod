import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
    selector:'app-dashboard',
    templateUrl:'./dashboard-component.html',
})

export class DashboardComponent{
    public modalRef: BsModalRef; // {1}
    constructor(private modalService: BsModalService) {} // {2}

    public openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template,Object.assign({}, { class: 'modal right' })); // {3}
  }
}