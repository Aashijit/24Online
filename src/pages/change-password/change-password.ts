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
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {

  newpassword : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public msgHelper : MessageHelper,
    public http : HttpProvider,public codes : Codes,public dataValidation : DataValidation,
    public camera : Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }

  changePasword()
  {

    if(this.dataValidation.isEmptyJson(this.newpassword))
    {
      this.msgHelper.showToast('Please enter the password');
      return;
    }

    var data ={
       "newpassword":this.newpassword 
    };

    var loading = this.msgHelper.showWorkingDialog('Changing your password ...');

    this.http.callApi(data, this.codes.API_CHANGE_PASSWORD).then(responseJson => {
      loading.dismiss();
      if(this.dataValidation.isEmptyJson(responseJson))
      {
        this.msgHelper.showErrorDialog('Error','Empty response received.');
        return;
      }
      if(responseJson['responsecode'] == '1')
      {
        this.msgHelper.showToast(responseJson['responsemsg']);
        this.navCtrl.pop();
      }
      else 
      {
        this.msgHelper.showErrorDialog('Error',responseJson['responsemsg']);
        return;
      }
    });
  }
}