import { Loading } from 'ionic-angular';
import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { MessageHelper } from './../../providers/message-helper';
import { DataValidation } from './../../Utils/DataValidation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { StringUtils } from '../../Utils/StringUtils';


@IonicPage()
@Component({
  selector: 'page-service-ticket-detail',
  templateUrl: 'service-ticket-detail.html',
})
export class ServiceTicketDetailPage {

  serviceTicketDetail : any = null;
  serviceTicketLog : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataValidation : DataValidation, public msgHelper : MessageHelper,
    public http : HttpProvider,public codes : Codes, public stringUtils : StringUtils,
    public modalCtrl : ModalController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceTicketDetailPage');

    //Fetch the service id from the navigation parameters
    var serviceId = this.navParams.get('serviceId');

    if(this.dataValidation.isEmptyJson(serviceId)){
      this.msgHelper.showErrorDialog('Error !!!','Could not get service id !!! Please go back to the previous page');
      return;
    }


    var requestJson = {
      "serviceid":serviceId
    };

    //Fetch the details from the detail API
    this.http.callApi(requestJson,this.codes.API_GET_SERVICE_DETAILS).then(responseJson => {


      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showErrorDialog('Error !!!','Empty response received from service detail API');
        return;
      }

      this.serviceTicketDetail = responseJson['responsemsg']['tblServiceTicket'];
      this.serviceTicketLog = responseJson['responsemsg']['serviceTicketDetails'];

      

    });





  }

}
