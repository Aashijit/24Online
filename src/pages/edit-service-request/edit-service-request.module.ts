import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditServiceRequestPage } from './edit-service-request';

@NgModule({
  declarations: [
    EditServiceRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(EditServiceRequestPage),
  ],
})
export class EditServiceRequestPageModule {}
