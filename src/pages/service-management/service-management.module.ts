import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceManagementPage } from './service-management';

@NgModule({
  declarations: [
    ServiceManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceManagementPage),
  ],
})
export class ServiceManagementPageModule {}
