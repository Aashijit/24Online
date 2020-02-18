import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterLeadManagementPage } from './filter-lead-management';

@NgModule({
  declarations: [
    FilterLeadManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(FilterLeadManagementPage),
  ],
})
export class FilterLeadManagementPageModule {}
