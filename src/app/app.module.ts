import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard-component';
import { AppBootstrapModule } from './app.bootstrap.module';
import {DndModule} from 'ng2-dnd';

// import { SidebarModule } from 'ng-sidebar';
@NgModule({
  declarations: [
    AppComponent,HeaderComponent, DashboardComponent, SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppBootstrapModule,DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


