import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
    selector:'app-dashboard',
    templateUrl:'./dashboard-component.html',
})

export class DashboardComponent{
    bsValue = new Date();
    bsRangeValue: Date[];
    maxDate = new Date();
    simpleDrop: any = null;
    public modalRef: BsModalRef; // {1}
    constructor(private modalService: BsModalService) {
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        this.bsRangeValue = [this.bsValue, this.maxDate];
    } // {2}
    
    public openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template,Object.assign({}, { class: 'modal-lg modal-right' })); // {3}
  }
  
}
