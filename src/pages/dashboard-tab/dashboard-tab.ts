import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the DashboardTabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard-tab',
  templateUrl: 'dashboard-tab.html'
})
export class DashboardTabPage {

  homeRoot = 'HomePage'
  ticketRoot = 'ServiceManagementPage'
  leadsRoot = 'ManageLeadPage'


  constructor(public navCtrl: NavController) {}

}
