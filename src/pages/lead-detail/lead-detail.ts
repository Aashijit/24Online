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
    public http : HttpProvider,public codes : Codes,public dataValidation : DataValidation,) {
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
    var data = {
      "ticketid":this.leadTicketData['leadid'],
      "file":filename
    };

    this.http.callGetApi(data,this.codes.API_DOWNLOAD_FILE+"?ticketid="+this.leadTicketData['leadid']+"&file="+filename).then(responseJson => {
      console.error(JSON.stringify(responseJson));
    })

    

  }

}
