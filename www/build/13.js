webpackJsonp([13],{

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLeadPageModule", function() { return CreateLeadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_lead__ = __webpack_require__(694);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateLeadPageModule = /** @class */ (function () {
    function CreateLeadPageModule() {
    }
    CreateLeadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_lead__["a" /* CreateLeadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_lead__["a" /* CreateLeadPage */]),
            ],
        })
    ], CreateLeadPageModule);
    return CreateLeadPageModule;
}());

//# sourceMappingURL=create-lead.module.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateLeadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_message_helper__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateLeadPage = /** @class */ (function () {
    function CreateLeadPage(navCtrl, navParams, msgHelper, http, codes, dataValidation, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.msgHelper = msgHelper;
        this.http = http;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.camera = camera;
        this.firstName = null;
        this.lastName = null;
        this.emailId = null;
        this.contactNo = null;
        this.address1 = null;
        this.address2 = null;
        this.address3 = null;
        this.groupname = null;
        this.zonename = null;
        this.comment = null;
        this.paymentamount = null;
        this.source = null;
        this.preferredCallTime = null;
        this.closureTime = null;
        this.i = 0;
        this.images = [];
        this.image = null;
        this.imageView = null;
        this.pkglist = null;
        this.zonelist = null;
        this.formdata = null;
    }
    CreateLeadPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CreateLeadPage');
        var data = {};
        this.http.callApi(data, this.codes.API_GET_PACKAGE_LIST).then(function (responseJson) {
            _this.pkglist = [];
            _this.pkglist.push(responseJson['responsemsg']['1']);
            _this.pkglist.push(responseJson['responsemsg']['2']);
            _this.pkglist.push(responseJson['responsemsg']['3']);
            _this.pkglist.push(responseJson['responsemsg']['4']);
            _this.pkglist.push(responseJson['responsemsg']['5']);
            _this.pkglist.push(responseJson['responsemsg']['6']);
            _this.pkglist.push(responseJson['responsemsg']['7']);
            _this.pkglist.push(responseJson['responsemsg']['8']);
            console.error(_this.pkglist);
        });
        this.http.callApi(data, this.codes.API_GET_ZONE_DETAIL_LIST).then(function (responseJson) {
            _this.zonelist = responseJson['data'];
            console.error(_this.zonelist);
        });
    };
    CreateLeadPage.prototype.addPicture = function (check) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: !check ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY
        };
        alert(JSON.stringify(options));
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            // alert(base64Image);
            _this.imageView = base64Image;
            _this.image = _this.convertBase64ToBlob(base64Image);
            // this.images[this.i++] = base64Image; 
        }, function (err) {
            console.error("Error Encountered" + err);
        });
    };
    CreateLeadPage.prototype.createLead = function () {
        var _this = this;
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
        this.formdata = new FormData();
        this.formdata.append("firstname", this.firstName);
        this.formdata.append("lastname", this.lastName);
        this.formdata.append("emailid", this.emailId);
        this.formdata.append("contactno", this.contactNo);
        this.formdata.append("address1", this.address1);
        this.formdata.append("address2", this.address2);
        this.formdata.append("address3", this.address3);
        this.formdata.append("comment", this.comment);
        this.formdata.append("zonename", this.zonename);
        this.formdata.append("usertype", "user");
        this.formdata.append("paymentamount", this.paymentamount);
        this.formdata.append("source", this.source);
        this.formdata.append("preferedcalltime", this.preferredCallTime);
        this.formdata.append("closertime", this.closureTime);
        this.formdata.append("image", this.image);
        console.log("Request Json : " + JSON.stringify(this.formdata));
        var loading = this.msgHelper.showWorkingDialog('Creating the lead ...');
        //headers.append('Authorization', 'Bearer ' + token);
        //let options = new RequestOptions({headers: headers});
        this.http.uploadFile(this.formdata, this.codes.API_CREATE_LEAD).then(function (responseJson) {
            loading.dismiss();
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error!!', 'Empty response received from server !!!');
                return;
            }
            _this.msgHelper.showToast(responseJson['responsemsg']);
        }, function (error) {
            console.error(error);
            _this.msgHelper.showErrorDialog('Error!!', error);
        });
    };
    CreateLeadPage.prototype.convertBase64ToBlob = function (base64) {
        var info = this.getInfoFromBase64(base64);
        var sliceSize = 512;
        var byteCharacters = window.atob(info.rawBase64);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            byteArrays.push(new Uint8Array(byteNumbers));
        }
        return new Blob(byteArrays, { type: info.mime });
    };
    CreateLeadPage.prototype.getInfoFromBase64 = function (base64) {
        var meta = base64.split(',')[0];
        var rawBase64 = base64.split(',')[1].replace(/\s/g, '');
        var mime = /:([^;]+);/.exec(meta)[1];
        var extension = /\/([^;]+);/.exec(meta)[1];
        return {
            mime: mime,
            extension: extension,
            meta: meta,
            rawBase64: rawBase64
        };
    };
    CreateLeadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-create-lead',template:/*ion-inline-start:"E:\24Online\Code\24onlineLatest\24Online\src\pages\create-lead\create-lead.html"*/'<ion-header>\n\n  <ion-navbar >\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Create Lead</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-list style="text-align: center !important;">\n\n\n\n    <ion-item>\n\n      <ion-label floating>First name</ion-label>\n\n      <ion-input [(ngModel)]="firstName"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label floating>Last name</ion-label>\n\n      <ion-input [(ngModel)]="lastName"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label floating>Email id</ion-label>\n\n      <ion-input [(ngModel)]="emailId" type="email"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label floating>Contact number</ion-label>\n\n      <ion-input [(ngModel)]="contactNo" type="tel" maxlength=10></ion-input>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label floating>Address Line 1</ion-label>\n\n      <ion-input [(ngModel)]="address1" ></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Address Line 2</ion-label>\n\n      <ion-input [(ngModel)]="address2" ></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Address Line 3</ion-label>\n\n      <ion-input [(ngModel)]="address3" ></ion-input>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label floating>Group name</ion-label>\n\n      <ion-select [(ngModel)]="groupname" interface="popover">\n\n        <p *ngFor="let group of pkglist">\n\n          <ion-option [value]="group[\'groupname\']">\n\n            {{group[\'groupname\']}}\n\n          </ion-option>\n\n        </p>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Zone name</ion-label>\n\n      <ion-select [(ngModel)]="zonename" interface="popover">\n\n        <p *ngFor="let zone of zonelist">\n\n          <ion-option [value]="zone[\'zonename\']">\n\n            {{zone[\'zonename\']}}\n\n          </ion-option>\n\n        </p>\n\n      </ion-select>\n\n    </ion-item>\n\n   \n\n    <ion-item>\n\n      <ion-label floating>Payment Amount</ion-label>\n\n      <ion-input [(ngModel)]="paymentamount"  type="tel"></ion-input>\n\n    </ion-item>\n\n\n\n    \n\n    <ion-item>\n\n      <ion-label floating>Source of lead</ion-label>\n\n      <ion-input [(ngModel)]="source" ></ion-input>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label floating>Preferred call time</ion-label>\n\n      <ion-datetime displayFormat="D, MMM YYYY H:mm a" pickerFormat="DD/MM/YYYY HH:mm" [(ngModel)]="preferredCallTime"></ion-datetime>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label floating>Closure time</ion-label>\n\n      <ion-datetime displayFormat="D, MMM YYYY H:mm a" pickerFormat="DD/MM/YYYY HH:mm" [(ngModel)]="closureTime"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Comment</ion-label>\n\n      <ion-textarea [(ngModel)]="comment"  rows="8" cols="20"></ion-textarea>\n\n    </ion-item>\n\n\n\n    <ion-row>\n\n      <ion-col><button ion-button outline (click)="addPicture(false)">Take Picture &nbsp;<ion-icon name="camera" ></ion-icon></button></ion-col>\n\n      <ion-col><button ion-button outline (click)="addPicture(true)">Select Image &nbsp;<ion-icon name="image" ></ion-icon></button></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row *ngIf="!dataValidation.isEmptyJson(imageView)">\n\n      <ion-col>\n\n        <img [src]="imageView" class="img-resp" />\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <!-- <ion-row *ngIf="!dataValidation.isEmptyJson(images)">\n\n      <ion-col style="text-align: left !important;" >\n\n        <span *ngFor="let image of images">\n\n          <img [src]="image" class="img-resp" />\n\n      </span>\n\n      </ion-col>\n\n    </ion-row> -->\n\n\n\n  <p style="text-align: center !important;">\n\n    <button ion-button round outline (click)="createLead()">Create Lead</button>\n\n  </p>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\24Online\Code\24onlineLatest\24Online\src\pages\create-lead\create-lead.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_message_helper__["a" /* MessageHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_message_helper__["a" /* MessageHelper */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* HttpProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* HttpProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__["a" /* Codes */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__["a" /* Codes */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__["a" /* DataValidation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__["a" /* DataValidation */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */]) === "function" && _g || Object])
    ], CreateLeadPage);
    return CreateLeadPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=create-lead.js.map

/***/ })

});
//# sourceMappingURL=13.js.map