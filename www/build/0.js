webpackJsonp([0],{

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceManagementPageModule", function() { return ServiceManagementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_management__ = __webpack_require__(687);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServiceManagementPageModule = /** @class */ (function () {
    function ServiceManagementPageModule() {
    }
    ServiceManagementPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__service_management__["a" /* ServiceManagementPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__service_management__["a" /* ServiceManagementPage */]),
            ],
        })
    ], ServiceManagementPageModule);
    return ServiceManagementPageModule;
}());

//# sourceMappingURL=service-management.module.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceManagementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_Codes__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils_DataValidation__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Utils_StringUtils__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ServiceManagementPage = /** @class */ (function () {
    function ServiceManagementPage(navCtrl, navParams, dataValidation, msgHelper, http, codes, stringUtils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataValidation = dataValidation;
        this.msgHelper = msgHelper;
        this.http = http;
        this.codes = codes;
        this.stringUtils = stringUtils;
        this.serviceRequests = null;
    }
    ServiceManagementPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ServiceManagementPage');
        //Step 1 : Load all the leads
        var requestJson = {};
        this.http.callApi(requestJson, this.codes.API_SEARCH_SERVICE).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Server error', 'Empty response received from back end server.Please try after some time.');
                return;
            }
            _this.serviceRequests = responseJson['responsemsg'];
            for (var i = 0; i < _this.serviceRequests.length; i++) {
                _this.serviceRequests[i]['createdby'] = _this.stringUtils.splitStringInCamelCase(_this.serviceRequests[i]['createdby']);
                _this.serviceRequests[i]['assigneename'] = _this.stringUtils.splitStringInCamelCase(_this.serviceRequests[i]['assigneename']);
            }
            console.error(_this.serviceRequests);
        }, function (error) {
            console.error(error);
            _this.msgHelper.showErrorDialog('Server error', error);
        });
    };
    ServiceManagementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-service-management',template:/*ion-inline-start:"/home/aashijit/24Online/src/pages/service-management/service-management.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Service Management</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <p style="text-align: center !important; color: #919191;" *ngIf=\'dataValidation.isEmptyJson(serviceRequests)\'>\n    <ion-spinner name="bubbles"></ion-spinner>\n  </p>\n  <p style="text-align: center !important; color: #919191;" *ngIf=\'dataValidation.isEmptyJson(serviceRequests)\'>\n    Loading the service requests ...\n  </p>\n\n  <ion-list *ngIf=\'!dataValidation.isEmptyJson(serviceRequests)\'>\n    <ion-item *ngFor=\'let sR of serviceRequests\'>\n      <p style="font-size: 15px !important; color:rgb(31, 115, 250) !important; font-weight: 800 !important;">\n        {{sR[\'createdby\']}}</p>\n      <p style="font-size: 12px !important; color: #919191 !important;">{{sR[\'assigneename\']}}\n        <span style="float: right !important;" *ngIf="sR[\'status\']==\'CLOSE\'">\n          <ion-badge color="light" style="font-size: 10px !important;">{{sR[\'status\']}}</ion-badge>\n        </span>\n        <span style="float: right !important;" *ngIf="sR[\'status\']==\'OPEN\'">\n          <ion-badge color="danger" style="font-size: 10px !important;">{{sR[\'status\']}}</ion-badge>\n        </span>\n        <span style="float: right !important;" *ngIf="sR[\'status\']==\'PENDING\'">\n          <ion-badge color="dark" style="font-size: 10px !important;">{{sR[\'status\']}}</ion-badge>\n        </span>\n      </p>\n      <p style="font-size: 10px !important;">\n        <span style="font-size: 8px !important; color: #919191 !important;">{{sR[\'modifydate\']}}</span>\n      </p>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col col-6\n      style="text-align: center !important; background-color: #fff !important; border-right: 1px solid #ddd !important;">\n      <button ion-button clear>Sort</button>\n    </ion-col>\n    <ion-col col-6 style="text-align: center !important;">\n      <button ion-button clear>Filter</button>\n    </ion-col>\n  </ion-row>\n</ion-footer>'/*ion-inline-end:"/home/aashijit/24Online/src/pages/service-management/service-management.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__Utils_DataValidation__["a" /* DataValidation */], __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__["a" /* MessageHelper */],
            __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_0__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_6__Utils_StringUtils__["a" /* StringUtils */]])
    ], ServiceManagementPage);
    return ServiceManagementPage;
}());

//# sourceMappingURL=service-management.js.map

/***/ })

});
//# sourceMappingURL=0.js.map