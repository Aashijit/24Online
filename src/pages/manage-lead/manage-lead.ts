import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { MessageHelper } from './../../providers/message-helper';
import { DataValidation } from './../../Utils/DataValidation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-manage-lead',
  templateUrl: 'manage-lead.html',
})
export class ManageLeadPage {

  leads : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataValidation : DataValidation, public msgHelper : MessageHelper,
    public http : HttpProvider,public codes : Codes) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageLeadPage');

    //Step 1 : Load all the leads
    var requestJson={
      //Empty request json
    };

    this.http.callApi(requestJson,this.codes.API_SEARCH_LEAD).then(responseJson => {

      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showErrorDialog('Server error','Empty response received from back end server.Please try after some time.');
        return;
      }

      this.leads = responseJson['responsemsg'];

      console.error(this.leads);

    },error => {
      console.error(error);
      this.msgHelper.showErrorDialog('Server error',error);
    });
  }
}