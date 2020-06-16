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
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  usage : any = null;
  view : boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public msgHelper : MessageHelper,
    public http : HttpProvider,public codes : Codes,public dataValidation : DataValidation,
    public camera : Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    var data = {};
    

    this.http.callApi(data, this.codes.API_USAGE_INFO).then(responseJson => {

      console.error(JSON.stringify(responseJson));
      if(this.dataValidation.isEmptyJson(responseJson))
      {
        this.msgHelper.showErrorDialog('Error','Empty response received from the Server');
        return;
      }

      if(responseJson['responsecode'] == '1')
      {
        this.usage = responseJson['responsemsg'];
      }

    });
    
  }



}
