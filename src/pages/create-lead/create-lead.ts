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
  selector: 'page-create-lead',
  templateUrl: 'create-lead.html',
})
export class CreateLeadPage {

  firstName : any = null;
  lastName : any = null;
  emailId : any = null;
  contactNo : any = null;
  address1 : any = null;
  address2 : any = null;
  address3 : any = null;
  groupname : any = null;
  zonename : any = null;
  comment : any = null;
  paymentamount : any = null;
  source : any = null;
  preferredCallTime : any = null;
  closureTime : any = null;
  i : any = 0;
  images : any = [];
  image : any = null;
  imageView : any = null;
  pkglist : any = null;
  zonelist : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public msgHelper : MessageHelper,
    public http : HttpProvider,public codes : Codes,public dataValidation : DataValidation,
    public camera : Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateLeadPage');

    var data={};

    this.http.callApi(data,this.codes.API_GET_PACKAGE_LIST).then(responseJson => {
      this.pkglist = [];
       this.pkglist.push(responseJson['responsemsg']['1']);
       this.pkglist.push(responseJson['responsemsg']['2']);
       this.pkglist.push(responseJson['responsemsg']['3']);
       this.pkglist.push(responseJson['responsemsg']['4']);
       this.pkglist.push(responseJson['responsemsg']['5']);
       this.pkglist.push(responseJson['responsemsg']['6']);
       this.pkglist.push(responseJson['responsemsg']['7']);
       this.pkglist.push(responseJson['responsemsg']['8']);

        console.error(this.pkglist);
    });


    this.http.callApi(data,this.codes.API_GET_ZONE_DETAIL_LIST).then(responseJson => {
      this.zonelist = responseJson['data'];
      console.error(this.zonelist);
    });


  }

  addPicture(check){  
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType : !check ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY
    }
    alert(JSON.stringify(options));
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      // alert(base64Image);
      this.imageView = base64Image;
      this.image = this.convertBase64ToBlob(base64Image);
      
      // this.images[this.i++] = base64Image; 
    }, (err) => {
      console.error("Error Encountered" + err);
    });

  }


  createLead(){

    this.closureTime="16/06/2020 22:00";
    this.preferredCallTime="16/06/2020 22:00";

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

    const formdata = new FormData();
    formdata.append("firstname", this.firstName);
    formdata.append("lastname", this.lastName);
    formdata.append("emailid", this.emailId);
    formdata.append("contactno", this.contactNo);
    formdata.append("address1", this.address1);
    formdata.append("address2", this.address2);
    formdata.append("address3", this.address3);
    formdata.append("comment", this.comment);
    formdata.append("zonename", this.zonename);
    formdata.append("usertype", "user");
    formdata.append("paymentamount", this.paymentamount);
    formdata.append("source", this.source);
    formdata.append("preferedcalltime", "16/06/2020 22:00");
    formdata.append("closertime", "16/06/2020 23:00");
    formdata.append("image", this.image);


    console.log("Request Json : "+JSON.stringify(formdata));
    var loading = this.msgHelper.showWorkingDialog('Creating the lead ...');

    this.http.uploadFile(formdata,this.codes.API_CREATE_LEAD).then(responseJson => {


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

  private convertBase64ToBlob(base64: string) {
    const info = this.getInfoFromBase64(base64);
    const sliceSize = 512;
    const byteCharacters = window.atob(info.rawBase64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      byteArrays.push(new Uint8Array(byteNumbers));
    }

    return new Blob(byteArrays, { type: info.mime });
  }

  private getInfoFromBase64(base64: string) {
    const meta = base64.split(',')[0];
    const rawBase64 = base64.split(',')[1].replace(/\s/g, '');
    const mime = /:([^;]+);/.exec(meta)[1];
    const extension = /\/([^;]+);/.exec(meta)[1];

    return {
      mime,
      extension,
      meta,
      rawBase64
    };
  }

}