import { Camera, CameraOptions } from '@ionic-native/camera';
import { DataValidation } from './../../Utils/DataValidation';
import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { MessageHelper } from './../../providers/message-helper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResponseOptions } from '@angular/http';



@IonicPage()
@Component({
  selector: 'page-lead-detail',
  templateUrl: 'lead-detail.html',
})
export class LeadDetailPage {

  leadDetail : any = null;
  leadTicketData : any = null;
  files : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public msgHelper : MessageHelper,
    public http : HttpProvider,public codes : Codes,public dataValidation : DataValidation    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeadDetailPage');

    //Loading the ticket details from the previous page
    this.leadTicketData = this.navParams.get('leadTicketDate');

    var data = {
      "ticketid":this.leadTicketData['leadid']
    };
    //Fetch the file list
    this.http.callApi(data, this.codes.API_GET_FILE_LIST).then(responseJson => {
      console.error(responseJson);
      this.files = responseJson['responsemsg'];
    })


  }

  download(filename)
  {
    // var data = {
    //   "ticketid":this.leadTicketData['leadid'],
    //   "file":filename
    // };

    // var headers = {
    //   'Content-Type': 'application/json',
    //   'Username' : localStorage.getItem('username'),
    //   'Password' : localStorage.getItem('password')
    // };

    // var ipAddress = localStorage.getItem(this.codes.LSK_IPADDRESS);

    // // this.dwnl.setHeader('*', String("Content-Type"), String("application/json"));
    // // this.dwnl.setHeader('*', String("Username"), localStorage.getItem('username'));
    // // this.dwnl.setHeader('*', String("Password"), localStorage.getItem('password'));


    // var loading = this.msgHelper.showWorkingDialog('Downloading file ...');


    // this.dwnl.downloadFile(
    //   'https://cors-anywhere.herokuapp.com/http://'+ipAddress+this.codes.API_DOWNLOAD_FILE,
    //   { 
    //     data : JSON.stringify(data)
    //   },
    //   { 
    //     header : JSON.stringify(headers)
    //   },
    //   filename
    // ).then(response => {
    //   loading.dismiss();
    //   alert(JSON.stringify(response));
    //   console.error(response);
    // }), error => {
    //   loading.dismiss();
    //   alert(JSON.stringify(error));
    // };

  }

}
