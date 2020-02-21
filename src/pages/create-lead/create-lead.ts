import { DataValidation } from './../../Utils/DataValidation';
import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { MessageHelper } from './../../providers/message-helper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResponseOptions } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-create-lead',
  templateUrl: 'create-lead.html',
})
export class CreateLeadPage {

  firstName : any = null;
  lastName : any = null;
  emailId : any = null;
  contactNo : any = null;
  address1 : any = null;
  groupname : any = null;
  zonename : any = null;
  comment : any = null;
  paymentamount : any = null;
  source : any = null;
  preferredCallTime : any = null;
  closureTime : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public msgHelper : MessageHelper,
    public http : HttpProvider,public codes : Codes,public dataValidation : DataValidation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateLeadPage');


  }


  createLead(){

    //Validation
    //-- Contact number
    if (!this.dataValidation.isValidMobileNumber(this.contactNo)) {
      this.msgHelper.showToast('Invalid mobile number');
      return;
    }

    //-- Email Id
    if (!this.dataValidation.isValidEmailId(this.emailId)) {
      this.msgHelper.showToast('Invalid email id');
      return;
    }

    //Creare the request json

    var requestJson = {
      "firstname": this.firstName,
      "lastname": this.lastName,
      "emailid": this.emailId,
      "contactno": this.contactNo,
      "address1": this.address1,
      "groupname": this.groupname,
      "comment": this.comment,
      "zonename": this.zonename,
      "usertype": "user", //TODO: Need to know from where this info must be fetched
      "paymentamount": this.paymentamount,
      "source": this.source,
      "preferedcalltime": this.preferredCallTime,
      "closertime": this.closureTime
    };

    console.log("Request Json : "+requestJson);
    var loading = this.msgHelper.showWorkingDialog('Creating the lead ...');

    this.http.callApi(requestJson,this.codes.API_CREATE_LEAD).then(responseJson => {

      loading.dismiss();
      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showErrorDialog('Error!!','Empty response received from server !!!');
        return;
      } 

      this.msgHelper.showToast(responseJson['responsemsg']);
      
    },error => {
      console.error(error);
      this.msgHelper.showErrorDialog('Error!!',error);
    });
  }
}