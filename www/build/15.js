webpackJsonp([15],{

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadDetailPageModule", function() { return LeadDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lead_detail__ = __webpack_require__(689);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LeadDetailPageModule = /** @class */ (function () {
    function LeadDetailPageModule() {
    }
    LeadDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lead_detail__["a" /* LeadDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lead_detail__["a" /* LeadDetailPage */]),
            ],
        })
    ], LeadDetailPageModule);
    return LeadDetailPageModule;
}());

//# sourceMappingURL=lead-detail.module.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_DataValidation__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeadDetailPage = /** @class */ (function () {
    function LeadDetailPage(navCtrl, navParams, dataValidation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataValidation = dataValidation;
        this.leadDetail = null;
        this.leadTicketData = null;
    }
    LeadDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeadDetailPage');
        //Loading the ticket details from the previous page
        this.leadTicketData = this.navParams.get('leadTicketDate');
    };
    LeadDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-lead-detail',template:/*ion-inline-start:"/home/aashijit/24Online/src/pages/lead-detail/lead-detail.html"*/'\n<ion-content padding class="popup">\n\n\n\n\n\n\n    \n  <p style="text-align: center !important; color: #919191; margin-top:35% !important" *ngIf=\'dataValidation.isEmptyJson(leadTicketData)\'>\n    <ion-spinner name="bubbles"></ion-spinner>\n  </p>\n  <p style="text-align: center !important; color: #919191;" *ngIf=\'dataValidation.isEmptyJson(leadTicketData)\'>\n    Loading the lead detail ...\n  </p>\n\n  <ion-grid *ngIf="!dataValidation.isEmptyJson(leadTicketData)">\n    <ion-row>\n      <ion-col style="margin-top: 12px !important; font-size: 18px !important; color:rgb(31, 115, 250) !important;">Lead Id : {{leadTicketData[\'leadid\']}}</ion-col>\n      <ion-col style="text-align: right !important;"><button ion-button clear (click)="navCtrl.pop()"><ion-icon name="close-circle"></ion-icon></button></ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid *ngIf="!dataValidation.isEmptyJson(leadTicketData)">\n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">First name</ion-col>\n      <ion-col col-7 style="color: #919191 !important;">{{leadTicketData[\'firstname\']}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Last name</ion-col>\n      <ion-col col-7 style="color: #919191 !important;">{{leadTicketData[\'lastname\']}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Source</ion-col>\n      <ion-col col-7 style="color: #919191 !important;">{{leadTicketData[\'source\']}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">State</ion-col>\n      <ion-col col-7 style="color: #919191 !important;">{{leadTicketData[\'state\']}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">City</ion-col>\n      <ion-col col-7 style="color: #919191 !important;">{{leadTicketData[\'city\']}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Country</ion-col>\n      <ion-col col-7 style="color: #919191 !important;">{{leadTicketData[\'country\']}}</ion-col>\n    </ion-row>\n\n    \n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Zipcode</ion-col>\n      <ion-col col-7 style="color: #919191 !important;">{{leadTicketData[\'zipcode\']}}</ion-col>\n    </ion-row>\n        \n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Contact number</ion-col>\n      <ion-col col-7 style="color: #919191 !important;"><a href="tel:leadTicketData[\'contactno\']" style="text-decoration: none !important;">{{leadTicketData[\'contactno\']}}</a></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Email id</ion-col>\n      <ion-col col-7 style="color: #919191 !important;"><a href="mailto:leadTicketData[\'emailid\']" style="text-decoration: none !important;">{{leadTicketData[\'emailid\']}}</a></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Address line 1</ion-col>\n      <ion-col col-7 style="color: #919191 !important;">{{leadTicketData[\'address1\']}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Address line 2</ion-col>\n      <ion-col col-7 style="color: #919191 !important;">{{leadTicketData[\'address2\']}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Address line 3</ion-col>\n      <ion-col col-7 style="color: #919191 !important;">{{leadTicketData[\'address3\']}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Comment</ion-col>\n      <ion-col col-7 style="color: #919191 !important;">{{leadTicketData[\'comment\']}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Latitude</ion-col>\n      <ion-col col-7 style="color: #919191 !important;">{{leadTicketData[\'latitude\']}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Longitude</ion-col>\n      <ion-col col-7 style="color: #919191 !important;">{{leadTicketData[\'longitude\']}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Preferred call time</ion-col>\n      <ion-col col-7 style="color: #919191 !important;">{{leadTicketData[\'preferredcalltime\']}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Payment amount</ion-col>\n      <ion-col col-7 style="color: #919191 !important;">{{leadTicketData[\'paymentamount\']}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Status</ion-col>\n      <ion-col col-7 style="color: #919191 !important;"><ion-badge>{{leadTicketData[\'status\']}}</ion-badge></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Create date</ion-col>\n      <ion-col col-7 style="color: #919191 !important;">{{leadTicketData[\'createdate\']}}</ion-col>\n    </ion-row>\n\n    \n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Modify date</ion-col>\n      <ion-col col-7 style="color: #919191 !important;">{{leadTicketData[\'modifydate\']}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Created by</ion-col>\n      <ion-col col-7 style="color: #919191 !important;">{{leadTicketData[\'createdby\']}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-5 style=" color:rgb(31, 115, 250) !important; font-weight: 600 !important;">Priority</ion-col>\n      <ion-col col-7 style="color: #919191 !important;"><ion-badge>{{leadTicketData[\'priority\']}}</ion-badge></ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/aashijit/24Online/src/pages/lead-detail/lead-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__Utils_DataValidation__["a" /* DataValidation */]])
    ], LeadDetailPage);
    return LeadDetailPage;
}());

//# sourceMappingURL=lead-detail.js.map

/***/ })

});
//# sourceMappingURL=15.js.map