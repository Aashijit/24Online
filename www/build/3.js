webpackJsonp([3],{

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageLeadPageModule", function() { return ManageLeadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_lead__ = __webpack_require__(698);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ManageLeadPageModule = /** @class */ (function () {
    function ManageLeadPageModule() {
    }
    ManageLeadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__manage_lead__["a" /* ManageLeadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__manage_lead__["a" /* ManageLeadPage */]),
            ],
        })
    ], ManageLeadPageModule);
    return ManageLeadPageModule;
}());

//# sourceMappingURL=manage-lead.module.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageLeadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_Codes__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils_DataValidation__ = __webpack_require__(149);
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






var ManageLeadPage = /** @class */ (function () {
    function ManageLeadPage(navCtrl, navParams, dataValidation, msgHelper, http, codes, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataValidation = dataValidation;
        this.msgHelper = msgHelper;
        this.http = http;
        this.codes = codes;
        this.modalCtrl = modalCtrl;
        this.leads = null;
        this.emptyLead = false;
    }
    ManageLeadPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ManageLeadPage');
        //Step 1 : Load all the leads
        var requestJson = {};
        if (this.navParams.get('requestJson')) {
            requestJson = this.navParams.get('requestJson');
        }
        this.http.callApi(requestJson, this.codes.API_SEARCH_LEAD).then(function (responseJson) {
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Server error', 'Empty response received from back end server.Please try after some time.');
                return;
            }
            if (responseJson['responsemsg'] == ' No Record Found ') {
                _this.emptyLead = true;
                return;
            }
            _this.leads = responseJson['responsemsg'];
            console.error(_this.leads);
        }, function (error) {
            console.error(error);
            _this.msgHelper.showErrorDialog('Server error', error);
        });
    };
    //Go to details page
    ManageLeadPage.prototype.getDetails = function (lead) {
        //Call the modal page using the lead Id
        var leadModal = this.modalCtrl.create('LeadDetailPage', { 'leadTicketDate': lead });
        leadModal.present();
    };
    ManageLeadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-manage-lead',template:/*ion-inline-start:"/home/aashijit/24Online/src/pages/manage-lead/manage-lead.html"*/'<ion-header>\n  <ion-navbar >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lead Management</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n<p style="text-align: center !important; color: #919191;" *ngIf=\'dataValidation.isEmptyJson(leads) && !emptyLead\'>\n  <ion-spinner name="bubbles"></ion-spinner>\n</p>\n<p style="text-align: center !important; color: #919191;" *ngIf=\'dataValidation.isEmptyJson(leads) && !emptyLead\'>\n  Loading the leads ...\n</p>\n\n<p style="text-align: center !important; margin-top:30% !important" *ngIf="emptyLead">\n  <img src="../../assets/imgs/empty.svg" style="width:  45px !important; height: 45px !important;" />\n  <br/>\n  <span style="color: #aaa !important; font-weight: 500 !important; margin-top: 10px !important"> No records found !!!</span>\n</p>\n  \n\n<ion-list *ngIf=\'!dataValidation.isEmptyJson(leads)\'>\n\n  <ion-item *ngFor=\'let lead of leads\'>\n  <p style="font-size: 15px !important; color:rgb(31, 115, 250) !important; font-weight: 800 !important;"><span style="margin-top:12px !important;">{{lead[\'firstname\']}}</span>\n    <span style="float: right !important; color: #aaa !important; margin-right: 5px !important;" (click)="getDetails(lead)"><ion-icon name="information-circle"></ion-icon></span>\n  </p>\n  <p style="font-size: 12px !important; color: #919191 !important;">{{lead[\'lastname\']}}\n    <span style="float: right !important;"><ion-badge color="dark" style="font-size: 10px !important;">{{lead[\'source\']}}</ion-badge></span>\n    <span style="float: right !important;margin-right: 4px !important"><ion-badge color="danger" style="font-size: 10px !important;">{{lead[\'status\']}}</ion-badge></span>\n  </p>\n  <p style="font-size: 10px !important;">\n  <span><a href="tel:{{lead[\'contactno\']}}" style="text-decoration: none !important;"> <ion-icon name="call"></ion-icon> {{lead[\'contactno\']}}</a></span>\n  &nbsp;&nbsp;\n  <span><a href="tel:{{lead[\'emailid\']}}" style="text-decoration: none !important;"> <ion-icon name="mail"></ion-icon> {{lead[\'emailid\']}}</a></span>\n  </p>\n  <p style="text-align: justify !important; font-size: 12px !important; color: #777 !important;" text-wrap>\n       {{lead[\'comment\']}}\n  </p>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col col-6 style="text-align: center !important; background-color: #fff !important; border-right: 1px solid #ddd !important;"> \n      <button ion-button clear disabled=true>Sort</button>\n    </ion-col>\n    <ion-col col-6 style="text-align: center !important;"> \n      <button ion-button clear (click)="navCtrl.push(\'FilterLeadManagementPage\')">Filter</button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/home/aashijit/24Online/src/pages/manage-lead/manage-lead.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__Utils_DataValidation__["a" /* DataValidation */], __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__["a" /* MessageHelper */],
            __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_0__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* ModalController */]])
    ], ManageLeadPage);
    return ManageLeadPage;
}());

//# sourceMappingURL=manage-lead.js.map

/***/ })

});
//# sourceMappingURL=3.js.map