import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { MessageHelper } from './../../providers/message-helper';
import { DataValidation } from './../../Utils/DataValidation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { StringUtils } from '../../Utils/StringUtils';



@IonicPage()
@Component({
  selector: 'page-service-management',
  templateUrl: 'service-management.html',
})
export class ServiceManagementPage {

  serviceRequests : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataValidation : DataValidation, public msgHelper : MessageHelper,
    public http : HttpProvider,public codes : Codes, public stringUtils : StringUtils,
    public modalCtrl : ModalController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceManagementPage');

      //Step 1 : Load all the leads
      var requestJson={
        //Empty request json
      };

      //Fetch the request json from the nav params
      if(this.navParams.get('requestJson'))
      {
        requestJson = this.navParams.get('requestJson');
      }
  
      this.http.callApi(requestJson,this.codes.API_SEARCH_SERVICE).then(responseJson => {
  
        if(this.dataValidation.isEmptyJson(responseJson)){
          this.msgHelper.showErrorDialog('Server error','Empty response received from back end server.Please try after some time.');
          return;
        }
  
        this.serviceRequests = responseJson['responsemsg'];

        for(let i=0;i<this.serviceRequests.length;i++){
          this.serviceRequests[i]['createdby'] = this.stringUtils.splitStringInCamelCase(this.serviceRequests[i]['createdby']);
          this.serviceRequests[i]['assigneename'] = this.stringUtils.splitStringInCamelCase(this.serviceRequests[i]['assigneename']);
        }
  
        console.error(this.serviceRequests);
  
      },error => {
        console.error(error);
        this.msgHelper.showErrorDialog('Server error',error);
      });
  }

  getDetails(serviceId){
    //Call the modal page using the service id
    let serviceModal = this.modalCtrl.create('ServiceTicketDetailPage',{'serviceId':serviceId});
    serviceModal.present();
  }


  editServiceRequest(serviceRequest){
    //Call the edit modal page using the service id
    let serviceEditModal = this.modalCtrl.create('EditServiceRequestPage',{'serviceId':serviceRequest['serviceid']});
    serviceEditModal.present();
  }
}