import { Codes } from './../../Utils/Codes';
import { HttpProvider } from './../../providers/data/data';
import { MessageHelper } from './../../providers/message-helper';
import { DataValidation } from './../../Utils/DataValidation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //Set to default
  ipAddress : any = "123.201.20.60"; 
  userName : any = "avijit.ghosh";
  password : any = "avijit.ghosh";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataValidation : DataValidation, public msgHelper : MessageHelper,
    public http : HttpProvider,public codes : Codes) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){

    //Validate the ip address
    if(!this.dataValidation.isValidIpAddress(this.ipAddress)){
      this.msgHelper.showErrorDialog('Alert!','Invalid Ip Address');
      return;
    }

    //Insert the request into the localstorage
    localStorage.setItem(this.codes.LSK_USERNAME,this.userName);
    localStorage.setItem(this.codes.LSK_PASSWORD,this.password);

    //Create the request json
    var loginRequestJson = {
      "username":this.userName,
      "Password":this.password
    };
    
    var loading = this.msgHelper.showWorkingDialog('Authenticating User');

    localStorage.setItem(this.codes.LSK_IPADDRESS,this.ipAddress);

    this.http.callApi(loginRequestJson,this.codes.API_AUTHENTICATE_USER).then(responseJson => {
      
      loading.dismiss();

      if(this.dataValidation.isEmptyJson(responseJson)){
        this.msgHelper.showErrorDialog('Server error','Empty response received from back end server.Please try after some time.');
        return;
      }

      localStorage.setItem(this.codes.LSK_USER_INFO_PREFERENCES,JSON.stringify(responseJson));

      this.msgHelper.showToast('Login Successfull !!!');
      
      this.navCtrl.setRoot('HomePage');
      
    },error => {
        loading.dismiss();
        console.error(error);
        this.msgHelper.showErrorDialog('Server error',error);
    });

    // this.navCtrl.setRoot(HomePage);
  }

}
