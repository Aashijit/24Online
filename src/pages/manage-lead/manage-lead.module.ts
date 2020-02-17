import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageLeadPage } from './manage-lead';

@NgModule({
  declarations: [
    ManageLeadPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageLeadPage),
  ],
})
export class ManageLeadPageModule {}
