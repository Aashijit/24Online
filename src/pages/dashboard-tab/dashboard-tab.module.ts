import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardTabPage } from './dashboard-tab';

@NgModule({
  declarations: [
    DashboardTabPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardTabPage),
  ]
})
export class DashboardTabPageModule {}
