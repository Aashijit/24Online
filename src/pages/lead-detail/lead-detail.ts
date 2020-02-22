import { DataValidation } from './../../Utils/DataValidation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lead-detail',
  templateUrl: 'lead-detail.html',
})
export class LeadDetailPage {

  leadDetail : any = null;
  leadTicketData : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataValidation : DataValidation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeadDetailPage');

    //Loading the ticket details from the previous page
    this.leadTicketData = this.navParams.get('leadTicketDate');



  }

}
