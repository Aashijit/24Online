import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterServiceManagementPage } from './filter-service-management';

@NgModule({
  declarations: [
    FilterServiceManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(FilterServiceManagementPage),
  ],
})
export class FilterServiceManagementPageModule {}
