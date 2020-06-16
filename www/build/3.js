webpackJsonp([3],{

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function() { return MyProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_profile__ = __webpack_require__(704);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyProfilePageModule = /** @class */ (function () {
    function MyProfilePageModule() {
    }
    MyProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_profile__["a" /* MyProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_profile__["a" /* MyProfilePage */]),
            ],
        })
    ], MyProfilePageModule);
    return MyProfilePageModule;
}());

//# sourceMappingURL=my-profile.module.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
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







var MyProfilePage = /** @class */ (function () {
    function MyProfilePage(navCtrl, navParams, msgHelper, http, codes, dataValidation, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.msgHelper = msgHelper;
        this.http = http;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.camera = camera;
        this.profile = null;
    }
    MyProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MyProfilePage');
        var data = {};
        this.http.callApi(data, this.codes.API_USER_INFO).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error', 'Empty response received from the Server');
                return;
            }
            if (responseJson['responsecode'] == '1') {
                _this.profile = responseJson['responsemsg'];
            }
        });
    };
    MyProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-my-profile',template:/*ion-inline-start:"E:\24Online\Code\24onlineLatest\24Online\src\pages\my-profile\my-profile.html"*/'<ion-header>\n\n  <ion-navbar >\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>My Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <ion-grid *ngIf="!dataValidation.isEmptyJson(profile)">\n\n    <ion-row>\n\n      <ion-col col-6 style="color: dodgerblue !important; font-weight: 600 !important;">\n\n        Next Bill Date\n\n      </ion-col>\n\n      <ion-col col-6 style="color: #666 !important; font-weight: 600 !important;">\n\n        {{profile[\'nextbilldate\']}}\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6 style="color: dodgerblue !important; font-weight: 600 !important;">\n\n        Phone\n\n      </ion-col>\n\n      <ion-col col-6 style="color: #666 !important; font-weight: 600 !important;">\n\n        {{profile[\'phone\']}}\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6 style="color: dodgerblue !important; font-weight: 600 !important;">\n\n        Username\n\n      </ion-col>\n\n      <ion-col col-6 style="color: #666 !important; font-weight: 600 !important;">\n\n        {{profile[\'username\']}}\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6 style="color: dodgerblue !important; font-weight: 600 !important;">\n\n        Account Number\n\n      </ion-col>\n\n      <ion-col col-6 style="color: #666 !important; font-weight: 600 !important;">\n\n        {{profile[\'accountno\']}}\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6 style="color: dodgerblue !important; font-weight: 600 !important;">\n\n        Package Name\n\n      </ion-col>\n\n      <ion-col col-6 style="color: #666 !important; font-weight: 600 !important;">\n\n        {{profile[\'packagename\']}}\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6 style="color: dodgerblue !important; font-weight: 600 !important;">\n\n        Name\n\n      </ion-col>\n\n      <ion-col col-6 style="color: #666 !important; font-weight: 600 !important;">\n\n        {{profile[\'name\']}}\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6 style="color: dodgerblue !important; font-weight: 600 !important;">\n\n        Create Date\n\n      </ion-col>\n\n      <ion-col col-6 style="color: #666 !important; font-weight: 600 !important;">\n\n        {{profile[\'createdate\']}}\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6 style="color: dodgerblue !important; font-weight: 600 !important;">\n\n        Date of Birth\n\n      </ion-col>\n\n      <ion-col col-6 style="color: #666 !important; font-weight: 600 !important;">\n\n        {{profile[\'dateofbirth\']}}\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6 style="color: dodgerblue !important; font-weight: 600 !important;">\n\n        IP Address\n\n      </ion-col>\n\n      <ion-col col-6 style="color: #666 !important; font-weight: 600 !important;">\n\n        {{profile[\'ipaddress\']}}\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6 style="color: dodgerblue !important; font-weight: 600 !important;">\n\n        Expiry Date\n\n      </ion-col>\n\n      <ion-col col-6 style="color: #666 !important; font-weight: 600 !important;">\n\n        {{profile[\'expirydate\']}}\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 style="color: dodgerblue !important; font-weight: 600 !important;">\n\n        Email Id\n\n      </ion-col>\n\n      <ion-col col-6 style="color: #666 !important; font-weight: 600 !important;">\n\n        {{profile[\'emailid\']}}\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\24Online\Code\24onlineLatest\24Online\src\pages\my-profile\my-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_message_helper__["a" /* MessageHelper */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */]])
    ], MyProfilePage);
    return MyProfilePage;
}());

//# sourceMappingURL=my-profile.js.map

/***/ })

});
//# sourceMappingURL=3.js.map