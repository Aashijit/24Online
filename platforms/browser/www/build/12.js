webpackJsonp([12],{

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLeadPageModule", function() { return CreateLeadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_lead__ = __webpack_require__(691);
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

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateLeadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(349);
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
        this.groupname = null;
        this.zonename = null;
        this.comment = null;
        this.paymentamount = null;
        this.source = null;
        this.preferredCallTime = null;
        this.closureTime = null;
        this.i = 0;
        this.images = [];
    }
    CreateLeadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateLeadPage');
    };
    CreateLeadPage.prototype.addPicture = function (check) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: check ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY
        };
        console.error(options);
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.images[_this.i++] = base64Image;
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
        var requestJson = {
            "firstname": this.firstName,
            "lastname": this.lastName,
            "emailid": this.emailId,
            "contactno": this.contactNo,
            "address1": this.address1,
            "groupname": this.groupname,
            "comment": this.comment,
            "zonename": this.zonename,
            "usertype": "user",
            "paymentamount": this.paymentamount,
            "source": this.source,
            "preferedcalltime": this.preferredCallTime,
            "closertime": this.closureTime
        };
        console.log("Request Json : " + requestJson);
        var loading = this.msgHelper.showWorkingDialog('Creating the lead ...');
        this.http.callApi(requestJson, this.codes.API_CREATE_LEAD).then(function (responseJson) {
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
    CreateLeadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-create-lead',template:/*ion-inline-start:"C:\24Online\24Online\src\pages\create-lead\create-lead.html"*/'<ion-header>\n  <ion-navbar >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Create Lead</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list style="text-align: center !important;">\n\n    <ion-item>\n      <ion-label floating>First name</ion-label>\n      <ion-input [(ngModel)]="firstName"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Last name</ion-label>\n      <ion-input [(ngModel)]="lastName"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Email id</ion-label>\n      <ion-input [(ngModel)]="emailId" type="email"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Contact number</ion-label>\n      <ion-input [(ngModel)]="contactNo" type="tel" maxlength=10></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Address Line 1</ion-label>\n      <ion-input [(ngModel)]="address1" ></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Group name</ion-label>\n      <ion-input [(ngModel)]="groupname" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Zone name</ion-label>\n      <ion-input [(ngModel)]="zonename" ></ion-input>\n    </ion-item>\n   \n    <ion-item>\n      <ion-label floating>Payment Amount</ion-label>\n      <ion-input [(ngModel)]="paymentamount"  type="tel"></ion-input>\n    </ion-item>\n\n    \n    <ion-item>\n      <ion-label floating>Source of lead</ion-label>\n      <ion-input [(ngModel)]="source" ></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Preferred call time</ion-label>\n      <ion-datetime displayFormat="D, MMM YYYY H:mm a" pickerFormat="DD/MM/YYYY HH:mm" [(ngModel)]="preferredCallTime"></ion-datetime>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Closure time</ion-label>\n      <ion-datetime displayFormat="D, MMM YYYY H:mm a" pickerFormat="DD/MM/YYYY HH:mm" [(ngModel)]="closureTime"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Comment</ion-label>\n      <ion-textarea [(ngModel)]="comment"  rows="8" cols="20"></ion-textarea>\n    </ion-item>\n\n    <ion-row>\n      <ion-col><button ion-button outline (click)="addPicture(false)">Take Picture &nbsp;<ion-icon name="camera" ></ion-icon></button></ion-col>\n      <ion-col><button ion-button outline (click)="addPicture(true)">Select Image &nbsp;<ion-icon name="image" ></ion-icon></button></ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="!dataValidation.isEmptyJson(images)">\n      <ion-col style="text-align: left !important;" >\n        <span *ngFor="let image of images">\n          <img [src]="image" class="img-resp" />\n      </span>\n      </ion-col>\n    </ion-row>\n\n  <p style="text-align: center !important;">\n    <button ion-button round outline (click)="createLead()">Create Lead</button>\n  </p>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\24Online\24Online\src\pages\create-lead\create-lead.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_message_helper__["a" /* MessageHelper */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */]])
    ], CreateLeadPage);
    return CreateLeadPage;
}());

//# sourceMappingURL=create-lead.js.map

/***/ })

});
//# sourceMappingURL=12.js.map