import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { MessageHelper } from './../../providers/message-helper';
import { DataValidation } from './../../Utils/DataValidation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { StringUtils } from '../../Utils/StringUtils';


@IonicPage()
@Component({
  selector: 'page-edit-service-request',
  templateUrl: 'edit-service-request.html',
})
export class EditServiceRequestPage {

  serviceId : any = null;
  comment : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataValidation : DataValidation, public msgHelper : MessageHelper,
    public http : HttpProvider,public codes : Codes, public stringUtils : StringUtils,
    public modalCtrl : ModalController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditServiceRequestPage');
    this.serviceId = this.navParams.get('serviceId');
    console.error(this.serviceId);
    if(this.dataValidation.isEmptyJson(this.serviceId)){
      this.msgHelper.showErrorDialog('Error !!!','Sorry!!! Could not find the service id. Please go back !!!');
      this.navCtrl.pop();
      return;
    }
  }


  updateService(){

    //Validate the comment
    if(this.dataValidation.isEmptyJson(this.comment)){
      this.msgHelper.showToast('Please add a comment');
      return;
    }

    var requestJson = {
    "serviceid":this.serviceId,
    "comment":this.comment,
    "username":localStorage.getItem(this.codes.LSK_USERNAME),
    "password":localStorage.getItem(this.codes.LSK_PASSWORD)
    };

    console.debug(requestJson);

    var loading = this.msgHelper.showWorkingDialog('Updating service request : '+this.serviceId+' ...');

    this.http.callApi(requestJson,this.codes.API_UPDATE_SERVICE_REQUEST).then(responseJson => {

      loading.dismiss();
      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showErrorDialog('Error !!!',' Empty response received from Server !!!');
        return;
      }

      this.msgHelper.showToast(responseJson['responsemsg']);
      
      if(responseJson['responsemsg']==" Service Ticket updated Successfully  "){
        this.navCtrl.pop();
      } 



    },error => {
      console.error(error);
      loading.dismiss();
    });
  }

  close(){
    this.navCtrl.pop();
  }
}