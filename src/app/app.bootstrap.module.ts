
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
    imports:[
        CommonModule,
        ModalModule.forRoot(),BsDatepickerModule.forRoot()
    ],
    exports:[ModalModule,BsDatepickerModule]
})

export class AppBootstrapModule{

}


