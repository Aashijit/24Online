import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceTicketDetailPage } from './service-ticket-detail';

@NgModule({
  declarations: [
    ServiceTicketDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceTicketDetailPage),
  ],
})
export class ServiceTicketDetailPageModule {}
