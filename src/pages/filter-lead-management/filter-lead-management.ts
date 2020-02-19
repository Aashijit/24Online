import { DataValidation } from './../../Utils/DataValidation';
import { MessageHelper } from './../../providers/message-helper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-filter-lead-management',
  templateUrl: 'filter-lead-management.html',
})
export class FilterLeadManagementPage {

  //Filter options json
  filterOptions : any = {
    'SearchByLeadId':false,
    'SearchByStatus':false,
    'SearchByPriority':false,
    'SearchByContactNo':false,
    'SearchByLeadCreateDate':false,
    'SearchByCloserDate':false,
    'SearchByPopZoneName':false
  };

  //Keep the data
  leadId : any =  null;
  status : any = null;
  priority : any = null;
  contactNumber : any = null;
  createStartDate : any = null;
  createEndDate : any = null;
  closerStartDate : any = null;
  closerEndDate : any = null;
  popName : any = null;
  zoneName : any = null;

  //Initialize the request Json which is to be built.
  requestJson = {};
  


  constructor(public navCtrl: NavController, public navParams: NavParams,public msgHelper : MessageHelper, public dataValidation : DataValidation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterLeadManagementPage');
  }


  //TODO: This requires to be done -- when one option is clicked, others will be disabled.
  disableOtherOptions(option : any){
  }

  searchUsingFilter(){

    //Check if more than one option is selected.
    //Remove this if search with more than one option is allowed
    if(this.checkIfMoreThanOneOptionIsSelected())
    {
        this.msgHelper.showToast('Please search with atmost one option !!!');
        return;
    }

    //Else Check which option is selected and grow the filter option accordingly
    if(this.filterOptions['SearchByLeadId']){
        //Validate the Lead Id
        if(this.dataValidation.isEmptyJson(this.leadId))
        {
          this.msgHelper.showToast('Lead Id cannot be empty !!!');
          return;
        }
        this.requestJson['leadid'] = this.leadId;
    }

    if(this.filterOptions['SearchByStatus']){
      //Validate the Lead Id
      if(this.dataValidation.isEmptyJson(this.status))
      {
        this.msgHelper.showToast('Status cannot be empty !!!');
        return;
      }
      this.requestJson['status']=this.status;
    }


    if(this.filterOptions['SearchByPriority']){
      //Validate the Lead Id
      if(this.dataValidation.isEmptyJson(this.status))
      {
        this.msgHelper.showToast('Status cannot be empty !!!');
        return;
      }
      this.requestJson['status']=this.status;
    }



    if(this.filterOptions['SearchByContactNo']){
      //Validate the Lead Id
      if(this.dataValidation.isEmptyJson(this.contactNumber))
      {
        this.msgHelper.showToast('Contact number be empty !!!');
        return;
      }
      this.requestJson['contactno']=this.contactNumber;
    }


    if(this.filterOptions['SearchByLeadCreateDate']){
      //Validate the Create Start Date
      if(this.dataValidation.isEmptyJson(this.createStartDate))
      {
        this.msgHelper.showToast('Create start date cannot be empty !!!');
        return;
      }

      if(this.dataValidation.isEmptyJson(this.createEndDate))
      {
        this.msgHelper.showToast('Create end date cannot be empty !!!');
        return;
      }
      this.requestJson['createdate']=this.createStartDate;
      this.requestJson['todate']=this.createEndDate;
    }   
    //

    if(this.filterOptions['SearchByCloserDate']){
      //Validate the Create Start Date
      if(this.dataValidation.isEmptyJson(this.closerStartDate))
      {
        this.msgHelper.showToast('Closer start date cannot be empty !!!');
        return;
      }

      if(this.dataValidation.isEmptyJson(this.closerEndDate))
      {
        this.msgHelper.showToast('Closer end date cannot be empty !!!');
        return;
      }
      this.requestJson['fromcloserdate']=this.closerStartDate;
      this.requestJson['tocloserdate']=this.closerEndDate;
    }   



    if(this.filterOptions['SearchByPopZoneName']){
      //Validate the Create Start Date
      if(this.dataValidation.isEmptyJson(this.popName))
      {
        this.msgHelper.showToast('Pop name cannot be empty !!!');
        return;
      }

      if(this.dataValidation.isEmptyJson(this.zoneName))
      {
        this.msgHelper.showToast('Zone name cannot be empty !!!');
        return;
      }
      this.requestJson['popname']=this.popName;
      this.requestJson['zonename']=this.zoneName;
    }   

    this.navCtrl.setRoot('ManageLeadPage',{'requestJson':this.requestJson});
  }


  checkIfMoreThanOneOptionIsSelected(){
    var count = 0;
    for(let i=0;i<this.filterOptions.length - 1; i++) {
      if(this.filterOptions[i] == true)
        count++;
    }
    if(count > 1)
    return true;
    return false;
  }
}