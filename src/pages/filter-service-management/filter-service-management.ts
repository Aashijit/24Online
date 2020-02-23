import { DataValidation } from './../../Utils/DataValidation';
import { MessageHelper } from './../../providers/message-helper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-filter-service-management',
  templateUrl: 'filter-service-management.html',
})
export class FilterServiceManagementPage {

    //Filter options json
    filterOptions : any = {
      'SearchByServiceId':false,
      'SearchByStatus':false,
      'SearchByPopZoneName':false,
      'SearchByUsername':false
    };
  
    //Keep the data
    serviceId : any =  null;
    status : any = null;
    priority : any = null;
    contactNumber : any = null;
    createStartDate : any = null;
    createEndDate : any = null;
    closerStartDate : any = null;
    closerEndDate : any = null;
    popName : any = null;
    zoneName : any = null;
    userName : any = null;
  
    //Initialize the request Json which is to be built.
    requestJson = {};
    
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public msgHelper : MessageHelper, public dataValidation : DataValidation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterServiceManagementPage');
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
    if(this.filterOptions['SearchByServiceId']){
        //Validate the Service Id
        if(this.dataValidation.isEmptyJson(this.serviceId))
        {
          this.msgHelper.showToast('Service Id cannot be empty !!!');
          return;
        }
        this.requestJson['serviceid'] = this.serviceId;
    }

    if(this.filterOptions['SearchByStatus']){
      //Validate the Status
      if(this.dataValidation.isEmptyJson(this.status))
      {
        this.msgHelper.showToast('Status cannot be empty !!!');
        return;
      }
      this.requestJson['status']=this.status;
    }


    if(this.filterOptions['SearchByPopZoneName']){
      //Validate the Pop/Zone name
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


    if(this.filterOptions['SearchByUsername']){
      //Validate the Service Id
      if(this.dataValidation.isEmptyJson(this.userName))
      {
        this.msgHelper.showToast('User name cannot be empty !!!');
        return;
      }
      this.requestJson['UserName'] = this.userName;
  }

    this.navCtrl.setRoot('ServiceManagementPage',{'requestJson':this.requestJson});
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
