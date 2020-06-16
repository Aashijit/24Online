webpackJsonp([11],{

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditServiceRequestPageModule", function() { return EditServiceRequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_service_request__ = __webpack_require__(696);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditServiceRequestPageModule = /** @class */ (function () {
    function EditServiceRequestPageModule() {
    }
    EditServiceRequestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_service_request__["a" /* EditServiceRequestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_service_request__["a" /* EditServiceRequestPage */]),
            ],
        })
    ], EditServiceRequestPageModule);
    return EditServiceRequestPageModule;
}());

//# sourceMappingURL=edit-service-request.module.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditServiceRequestPage; });
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







var EditServiceRequestPage = /** @class */ (function () {
    function EditServiceRequestPage(navCtrl, navParams, dataValidation, msgHelper, http, codes, stringUtils, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataValidation = dataValidation;
        this.msgHelper = msgHelper;
        this.http = http;
        this.codes = codes;
        this.stringUtils = stringUtils;
        this.modalCtrl = modalCtrl;
        this.serviceId = null;
        this.comment = null;
    }
    EditServiceRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditServiceRequestPage');
        this.serviceId = this.navParams.get('serviceId');
        console.error(this.serviceId);
        if (this.dataValidation.isEmptyJson(this.serviceId)) {
            this.msgHelper.showErrorDialog('Error !!!', 'Sorry!!! Could not find the service id. Please go back !!!');
            this.navCtrl.pop();
            return;
        }
    };
    EditServiceRequestPage.prototype.updateService = function () {
        var _this = this;
        //Validate the comment
        if (this.dataValidation.isEmptyJson(this.comment)) {
            this.msgHelper.showToast('Please add a comment');
            return;
        }
        var requestJson = {
            "serviceid": this.serviceId,
            "comment": this.comment,
            "username": localStorage.getItem(this.codes.LSK_USERNAME),
            "password": localStorage.getItem(this.codes.LSK_PASSWORD)
        };
        console.debug(requestJson);
        var loading = this.msgHelper.showWorkingDialog('Updating service request : ' + this.serviceId + ' ...');
        this.http.callApi(requestJson, this.codes.API_UPDATE_SERVICE_REQUEST).then(function (responseJson) {
            loading.dismiss();
            if (_this.dataValidation.isEmptyJson(responseJson)) {
                _this.msgHelper.showErrorDialog('Error !!!', ' Empty response received from Server !!!');
                return;
            }
            _this.msgHelper.showToast(responseJson['responsemsg']);
            if (responseJson['responsemsg'] == " Service Ticket updated Successfully  ") {
                _this.navCtrl.pop();
            }
        }, function (error) {
            console.error(error);
            loading.dismiss();
        });
    };
    EditServiceRequestPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    EditServiceRequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-edit-service-request',template:/*ion-inline-start:"/home/aashijit/24Online/src/pages/edit-service-request/edit-service-request.html"*/'<ion-content class="popup">\n\n  <ion-card *ngIf="!dataValidation.isEmptyJson(serviceId)">\n    <ion-card-header>Update Service Ticket : {{serviceId}}\n      <span style="float: right !important;" (click)="close()"><ion-icon name="close-circle"></ion-icon></span>\n    </ion-card-header>\n\n   \n\n    <ion-item style="border: 1px solid #ddd !important">\n      <ion-label floating>New Comment</ion-label>\n      <ion-textarea [(ngModel)]="comment" rows="10" columns="20"></ion-textarea>\n    </ion-item>\n\n    <p style="text-align:center !important;">\n      <button ion-button clear (click)="updateService()">Update Service</button>\n    </p>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/aashijit/24Online/src/pages/edit-service-request/edit-service-request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__Utils_DataValidation__["a" /* DataValidation */], __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__["a" /* MessageHelper */],
            __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_0__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_6__Utils_StringUtils__["a" /* StringUtils */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* ModalController */]])
    ], EditServiceRequestPage);
    return EditServiceRequestPage;
}());

//# sourceMappingURL=edit-service-request.js.map

/***/ })

});
//# sourceMappingURL=11.js.map