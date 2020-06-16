webpackJsonp([18],{

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTicketDetailPageModule", function() { return ServiceTicketDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ticket_detail__ = __webpack_require__(706);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServiceTicketDetailPageModule = /** @class */ (function () {
    function ServiceTicketDetailPageModule() {
    }
    ServiceTicketDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__service_ticket_detail__["a" /* ServiceTicketDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__service_ticket_detail__["a" /* ServiceTicketDetailPage */]),
            ],
        })
    ], ServiceTicketDetailPageModule);
    return ServiceTicketDetailPageModule;
}());

//# sourceMappingURL=service-ticket-detail.module.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceTicketDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_Codes__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils_DataValidation__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Utils_StringUtils__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ServiceTicketDetailPage = /** @class */ (function () {
    function ServiceTicketDetailPage(navCtrl, navParams, dataValidation, msgHelper, http, codes, stringUtils, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataValidation = dataValidation;
        this.msgHelper = msgHelper;
        this.http = http;
        this.codes = codes;
        this.stringUtils = stringUtils;
        this.modalCtrl = modalCtrl;
        this.serviceTicketDetail = null;
        this.serviceTicketLog = null;
    }
    ServiceTicketDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ServiceTicketDetailPage');
        //Fetch the service id from the navigation parameters
        var serviceId = this.navParams.get('serviceId');
        if (this.dataValidation.isEmptyJson(serviceId)) {
            this.msgHelper.showErrorDialog('Error !!!', 'Could not get service id !!! Please go back to the previous page');
            return;
        }
        var requestJson = {
            "serviceid": serviceId
        };
        //Fetch the details from the detail API
        this.http.callApi(requestJson, this.codes.API_GET_SERVICE_DETAILS).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!!', 'Empty response received from service detail API');
                return;
            }
            _this.serviceTicketDetail = responseJson['responsemsg']['tblServiceTicket'];
            _this.serviceTicketLog = responseJson['responsemsg']['serviceTicketDetails'];
        });
    };
    ServiceTicketDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-service-ticket-detail',template:/*ion-inline-start:"E:\24Online\Code\24onlineLatest\24Online\src\pages\service-ticket-detail\service-ticket-detail.html"*/'<ion-content class="popup">\n\n\n\n    <p style="margin-top:35% !important;text-align: center !important; color: #eee;"\n\n        *ngIf=\'dataValidation.isEmptyJson(serviceTicketDetail)\'>\n\n        <ion-spinner name="bubbles" color="light"></ion-spinner>\n\n    </p>\n\n    <p style="text-align: center !important; color: #eee;" *ngIf=\'dataValidation.isEmptyJson(serviceTicketDetail)\'>\n\n        Loading the service details ...\n\n    </p>\n\n\n\n\n\n    <ion-grid *ngIf="!dataValidation.isEmptyJson(serviceTicketDetail)">\n\n        <ion-row nopadding>\n\n          <ion-col style="margin-top: 12px !important; font-size: 18px !important; color:rgb(31, 115, 250) !important;">Service Id : {{serviceTicketDetail[\'serviceid\']}}</ion-col>\n\n          <ion-col style="margin-top: 12px !important; font-size: 18px !important; color:rgb(31, 115, 250) !important;">Lead Id : {{serviceTicketDetail[\'leadid\']}}</ion-col>\n\n          <ion-col style="text-align: right !important;"><button ion-button clear (click)="navCtrl.pop()"><ion-icon name="close-circle"></ion-icon></button></ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n\n\n\n\n      <ion-grid *ngIf="!dataValidation.isEmptyJson(serviceTicketLog)">\n\n\n\n        <ion-item *ngFor="let sTL of serviceTicketLog" style="border-bottom: 1px #ddd !important; margin-bottom: 5px !important; background-color: rgba(0,0,0,0.4) !important;">\n\n            \n\n            <ion-row>\n\n                <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Service detail id</ion-col>\n\n                <ion-col col-7 style="color: #919191 !important;">{{sTL[\'servicedetailid\']}}</ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Comment</ion-col>\n\n                <ion-col col-7 style="color: #919191 !important;"><p style="white-space: normal !important;">{{sTL[\'comment\']}}</p></ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Status</ion-col>\n\n                <ion-col col-7 style="color: #919191 !important;"><ion-badge>{{sTL[\'status\']}}</ion-badge></ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Modify date</ion-col>\n\n                <ion-col col-7 style="color: #919191 !important;">{{sTL[\'modifydate\']}}</ion-col>\n\n            </ion-row>\n\n        </ion-item>\n\n      </ion-grid>\n\n     \n\n      <p style="text-align: center !important; color: #eee !important; font-size: 20px !important;" *ngIf="!dataValidation.isEmptyJson(serviceTicketLog)">\n\n          Service Ticket Detail\n\n      </p>\n\n\n\n      <ion-grid *ngIf="!dataValidation.isEmptyJson(serviceTicketDetail)">\n\n\n\n\n\n        <ion-row>\n\n            <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Created by</ion-col>\n\n            <ion-col col-7 style="color: #919191 !important;">{{serviceTicketDetail[\'createdby\']}}</ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Create date</ion-col>\n\n            <ion-col col-7 style="color: #919191 !important;">{{serviceTicketDetail[\'createdate\']}}</ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Assignee id</ion-col>\n\n            <ion-col col-7 style="color: #919191 !important;">{{serviceTicketDetail[\'assigneeid\']}}</ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Assignee name</ion-col>\n\n            <ion-col col-7 style="color: #919191 !important;">{{serviceTicketDetail[\'assigneename\']}}</ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Zone id</ion-col>\n\n            <ion-col col-7 style="color: #919191 !important;">{{serviceTicketDetail[\'zoneid\']}}</ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">User id</ion-col>\n\n            <ion-col col-7 style="color: #919191 !important;">{{serviceTicketDetail[\'userid\']}}</ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Amount</ion-col>\n\n            <ion-col col-7 style="color: #919191 !important;">{{serviceTicketDetail[\'amount\']}}</ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Comment</ion-col>\n\n            <ion-col col-7 style="color: #919191 !important;">{{serviceTicketDetail[\'comment\']}}</ion-col>\n\n        </ion-row>\n\n\n\n\n\n      </ion-grid>\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\24Online\Code\24onlineLatest\24Online\src\pages\service-ticket-detail\service-ticket-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__Utils_DataValidation__["a" /* DataValidation */], __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__["a" /* MessageHelper */],
            __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_0__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_6__Utils_StringUtils__["a" /* StringUtils */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* ModalController */]])
    ], ServiceTicketDetailPage);
    return ServiceTicketDetailPage;
}());

//# sourceMappingURL=service-ticket-detail.js.map

/***/ })

});
//# sourceMappingURL=18.js.map