webpackJsonp([8],{

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, msgHelper, http, codes, dataValidation, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.msgHelper = msgHelper;
        this.http = http;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.camera = camera;
        this.usage = null;
        this.view = true;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad HomePage');
        var data = {};
        this.http.callApi(data, this.codes.API_USAGE_INFO).then(function (responseJson) {
            console.error(JSON.stringify(responseJson));
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error', 'Empty response received from the Server');
                return;
            }
            if (responseJson['responsecode'] == '1') {
                _this.usage = responseJson['responsemsg'];
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\24Online\Code\24onlineLatest\24Online\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <img src="../../assets/imgs/logo.png" style="width: 70px !important;" />\n\n    \n\n  \n\n    <span style="float: right !important;">\n\n      <ion-icon name="notifications" style="margin-top: 15px !important; color: rgb(31, 115, 250) !important; margin-right: 15px !important;"></ion-icon>\n\n    </span>\n\n    \n\n    \n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n\n\n    <ion-card style="background-color: rgba(0,0,0,0.9) !important; color: #fff !important;" *ngIf="!dataValidation.isEmptyJson(usage)">\n\n      <ion-card-content>\n\n        <p style="font-weight: 600 !important;">\n\n          <span style="color: rgb(123, 255, 0) !important;"><ion-icon name="information-circle"></ion-icon></span> \n\n          &nbsp;\n\n         <span style="color: #fff !important;">Usage Information</span> \n\n        </p>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col style="color: dodgerblue !important; font-weight: 600 !important;">\n\n              Download Remaining\n\n            </ion-col>\n\n            <ion-col style="color: #fff !important; font-weight: 600 !important;">\n\n              {{usage[\'downloadremaining\']}}\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col style="color: dodgerblue !important; font-weight: 600 !important;">\n\n              Cycle Total Used\n\n            </ion-col>\n\n            <ion-col style="color: #fff !important; font-weight: 600 !important;">\n\n              {{usage[\'cycletotalused\']}}\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col style="color: dodgerblue !important; font-weight: 600 !important;">\n\n              Download Used\n\n            </ion-col>\n\n            <ion-col style="color: #fff !important; font-weight: 600 !important;">\n\n              {{usage[\'downloadused\']}}\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col style="color: dodgerblue !important; font-weight: 600 !important;">\n\n              Allotted Total\n\n            </ion-col>\n\n            <ion-col style="color: #fff !important; font-weight: 600 !important;">\n\n              {{usage[\'allottedtotal\']}}\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col style="color: dodgerblue !important; font-weight: 600 !important;">\n\n              Cycle Download Remaining\n\n            </ion-col>\n\n            <ion-col style="color: #fff !important; font-weight: 600 !important;">\n\n              {{usage[\'cycledownloadremaining\']}}\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col style="color: dodgerblue !important; font-weight: 600 !important;">\n\n              Allotted Download\n\n            </ion-col>\n\n            <ion-col style="color: #fff !important; font-weight: 600 !important;">\n\n              {{usage[\'allotteddownload\']}}\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col style="color: dodgerblue !important; font-weight: 600 !important;">\n\n              Upload Account Used\n\n            </ion-col>\n\n            <ion-col style="color: #fff !important; font-weight: 600 !important;">\n\n              {{usage[\'uploadaccountused\']}}\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col style="color: dodgerblue !important; font-weight: 600 !important;">\n\n              Total Remaining\n\n            </ion-col>\n\n            <ion-col style="color: #fff !important; font-weight: 600 !important;">\n\n              {{usage[\'totalremaining\']}}\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col style="color: dodgerblue !important; font-weight: 600 !important;">\n\n              Allotted Minutes\n\n            </ion-col>\n\n            <ion-col style="color: #fff !important; font-weight: 600 !important;">\n\n              {{usage[\'allottedminutes\']}}\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col style="color: dodgerblue !important; font-weight: 600 !important;">\n\n              Used Minutes Account Wise\n\n            </ion-col>\n\n            <ion-col style="color: #fff !important; font-weight: 600 !important;">\n\n              {{usage[\'usedminutesaccountwise\']}}\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col style="color: dodgerblue !important; font-weight: 600 !important;">\n\n              Remaining Time\n\n            </ion-col>\n\n            <ion-col style="color: #fff !important; font-weight: 600 !important;">\n\n              {{usage[\'remainingtime\']}}\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col style="color: dodgerblue !important; font-weight: 600 !important;">\n\n              Total Account Used\n\n            </ion-col>\n\n            <ion-col style="color: #fff !important; font-weight: 600 !important;">\n\n              {{usage[\'totalaccountused\']}}\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n\n\n\n\n      </ion-card-content>\n\n    </ion-card>\n\n  \n\n    <p style="position: absolute;\n\n    top: 165px !important;\n\n    left: 38px !important;\n\n    z-index: -100;">\n\n    <img src="../../assets/imgs/logo.png" style="width: 300px !important;" />\n\n  </p>\n\n  </ion-content>'/*ion-inline-end:"E:\24Online\Code\24onlineLatest\24Online\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_message_helper__["a" /* MessageHelper */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_1__Utils_DataValidation__["a" /* DataValidation */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=8.js.map