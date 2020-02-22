import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { MessageHelper } from './../../providers/message-helper';
import { DataValidation } from './../../Utils/DataValidation';
import { Component, KeyValueDiffers } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-manage-lead',
  templateUrl: 'manage-lead.html',
})
export class ManageLeadPage {

  leads : any = null;
  emptyLead : any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataValidation : DataValidation, public msgHelper : MessageHelper,
    public http : HttpProvider,public codes : Codes,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageLeadPage');

    //Step 1 : Load all the leads
    var requestJson={
      //Empty request json
    };

    if(this.navParams.get('requestJson'))
    {
      requestJson = this.navParams.get('requestJson');
    }

    this.http.callApi(requestJson,this.codes.API_SEARCH_LEAD).then(responseJson => {

      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showErrorDialog('Server error','Empty response received from back end server.Please try after some time.');
        return;
      }

      if(responseJson['responsemsg'] ==' No Record Found '){
        this.emptyLead = true;
        return;
      }

      this.leads = responseJson['responsemsg'];

      console.error(this.leads);

    },error => {
      console.error(error);
      this.msgHelper.showErrorDialog('Server error',error);
    });
  }



  //Go to details page
  getDetails(lead : any){
    //Call the modal page using the lead Id
    let leadModal = this.modalCtrl.create('LeadDetailPage',{'leadTicketDate':lead});
    leadModal.present();
  }
}