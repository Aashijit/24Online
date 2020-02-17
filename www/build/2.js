webpackJsonp([2],{

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(682);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_Codes__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils_DataValidation__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, dataValidation, msgHelper, http, codes) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataValidation = dataValidation;
        this.msgHelper = msgHelper;
        this.http = http;
        this.codes = codes;
        //Set to default
        this.ipAddress = "123.201.20.60";
        this.userName = "avijit.ghosh";
        this.password = "avijit.ghosh";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        //Validate the ip address
        if (!this.dataValidation.isValidIpAddress(this.ipAddress)) {
            this.msgHelper.showErrorDialog('Alert!', 'Invalid Ip Address');
            return;
        }
        //Insert the request into the localstorage
        localStorage.setItem(this.codes.LSK_USERNAME, this.userName);
        localStorage.setItem(this.codes.LSK_PASSWORD, this.password);
        //Create the request json
        var loginRequestJson = {
            "username": this.userName,
            "Password": this.password
        };
        var loading = this.msgHelper.showWorkingDialog('Authenticating User');
        localStorage.setItem(this.codes.LSK_IPADDRESS, this.ipAddress);
        this.http.callApi(loginRequestJson, this.codes.API_AUTHENTICATE_USER).then(function (responseJson) {
            loading.dismiss();
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Server error', 'Empty response received from back end server.Please try after some time.');
                return;
            }
            localStorage.setItem(_this.codes.LSK_USER_INFO_PREFERENCES, JSON.stringify(responseJson));
            _this.msgHelper.showToast('Login Successfull !!!');
            _this.navCtrl.setRoot('HomePage');
        }, function (error) {
            loading.dismiss();
            console.error(error);
            _this.msgHelper.showErrorDialog('Server error', error);
        });
        // this.navCtrl.setRoot(HomePage);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/aashijit/24Online/src/pages/login/login.html"*/'<ion-header>\n  <p class="small-text pl-20 pr-20">\n    <img src="../../assets/imgs/logo.png" style="width: 70px !important;" />\n\n    <span style="float: right !important;">\n      <ion-icon name="notifications" style="margin-top: 10px !important; color: #eee !important;"></ion-icon>\n    </span>\n  </p>\n</ion-header>\n\n<ion-content padding class="background">\n\n  <p class="image-middle-card nomargin">\n\n  </p>\n  <ion-card id="content">\n    <ion-avatar id="user-info">\n      <img id="user-image" src="../../assets/imgs/user.png" />\n    </ion-avatar>\n    <ion-card-content>\n\n      <ion-item>\n        <ion-label color="primary" stacked>IP Address</ion-label>\n        <ion-input type="tel" placeholder="IP address" class="input-underline" [(ngModel)]="ipAddress">\n        </ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label color="primary" stacked>Username</ion-label>\n        <ion-input type="email" placeholder="Your registered username" class="input-underline" [(ngModel)]="userName">\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" stacked>Password</ion-label>\n        <ion-input type="password" placeholder="Your password" class="input-underline" [(ngModel)]="password"></ion-input>\n      </ion-item>\n\n    </ion-card-content>\n    <p style="text-align: right !important; margin-right: 20px !important;">\n      <button ion-button clear (click)="login()">Login</button>\n    </p>\n    <p style="font-size:10px !important">\n      <button ion-button clear>Forgot Password?</button>\n    </p>\n  </ion-card>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <p class="pl-20 pr-20 nomargin">\n    <span style="float: left !important;"><button ion-button clear>Terms and Conditions</button></span>\n    <span\n      style="float: right !important; font-size: 10px !important; color: rgb(0, 0, 0) !important; margin-top: 18px !important;">Copyright\n      &copy;2020 24 Online Info </span>\n  </p>\n\n</ion-footer>'/*ion-inline-end:"/home/aashijit/24Online/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__Utils_DataValidation__["a" /* DataValidation */], __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__["a" /* MessageHelper */],
            __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_0__Utils_Codes__["a" /* Codes */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=2.js.map