webpackJsonp([9],{

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterServiceManagementPageModule", function() { return FilterServiceManagementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_service_management__ = __webpack_require__(699);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilterServiceManagementPageModule = /** @class */ (function () {
    function FilterServiceManagementPageModule() {
    }
    FilterServiceManagementPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filter_service_management__["a" /* FilterServiceManagementPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filter_service_management__["a" /* FilterServiceManagementPage */]),
            ],
        })
    ], FilterServiceManagementPageModule);
    return FilterServiceManagementPageModule;
}());

//# sourceMappingURL=filter-service-management.module.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterServiceManagementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_DataValidation__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilterServiceManagementPage = /** @class */ (function () {
    function FilterServiceManagementPage(navCtrl, navParams, msgHelper, dataValidation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.msgHelper = msgHelper;
        this.dataValidation = dataValidation;
        //Filter options json
        this.filterOptions = {
            'SearchByServiceId': false,
            'SearchByStatus': false,
            'SearchByPopZoneName': false,
            'SearchByUsername': false
        };
        //Keep the data
        this.serviceId = null;
        this.status = null;
        this.priority = null;
        this.contactNumber = null;
        this.createStartDate = null;
        this.createEndDate = null;
        this.closerStartDate = null;
        this.closerEndDate = null;
        this.popName = null;
        this.zoneName = null;
        this.userName = null;
        //Initialize the request Json which is to be built.
        this.requestJson = {};
    }
    FilterServiceManagementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterServiceManagementPage');
    };
    FilterServiceManagementPage.prototype.searchUsingFilter = function () {
        //Check if more than one option is selected.
        //Remove this if search with more than one option is allowed
        if (this.checkIfMoreThanOneOptionIsSelected()) {
            this.msgHelper.showToast('Please search with atmost one option !!!');
            return;
        }
        //Else Check which option is selected and grow the filter option accordingly
        if (this.filterOptions['SearchByServiceId']) {
            //Validate the Service Id
            if (this.dataValidation.isEmptyJson(this.serviceId)) {
                this.msgHelper.showToast('Service Id cannot be empty !!!');
                return;
            }
            this.requestJson['serviceid'] = this.serviceId;
        }
        if (this.filterOptions['SearchByStatus']) {
            //Validate the Status
            if (this.dataValidation.isEmptyJson(this.status)) {
                this.msgHelper.showToast('Status cannot be empty !!!');
                return;
            }
            this.requestJson['status'] = this.status;
        }
        if (this.filterOptions['SearchByPopZoneName']) {
            //Validate the Pop/Zone name
            if (this.dataValidation.isEmptyJson(this.popName)) {
                this.msgHelper.showToast('Pop name cannot be empty !!!');
                return;
            }
            if (this.dataValidation.isEmptyJson(this.zoneName)) {
                this.msgHelper.showToast('Zone name cannot be empty !!!');
                return;
            }
            this.requestJson['popname'] = this.popName;
            this.requestJson['zonename'] = this.zoneName;
        }
        if (this.filterOptions['SearchByUsername']) {
            //Validate the Service Id
            if (this.dataValidation.isEmptyJson(this.userName)) {
                this.msgHelper.showToast('User name cannot be empty !!!');
                return;
            }
            this.requestJson['UserName'] = this.userName;
        }
        this.navCtrl.setRoot('ServiceManagementPage', { 'requestJson': this.requestJson });
    };
    FilterServiceManagementPage.prototype.checkIfMoreThanOneOptionIsSelected = function () {
        var count = 0;
        for (var i = 0; i < this.filterOptions.length - 1; i++) {
            if (this.filterOptions[i] == true)
                count++;
        }
        if (count > 1)
            return true;
        return false;
    };
    FilterServiceManagementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-filter-service-management',template:/*ion-inline-start:"E:\24Online\Code\24onlineLatest\24Online\src\pages\filter-service-management\filter-service-management.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Filter Services</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <p class="filter-sub-header">\n\n    <ion-row>\n\n      <ion-col>Search by service id</ion-col>\n\n      <ion-col style="text-align: right !important;" class="nopadding"><ion-checkbox mode="ios" [(ngModel)]="filterOptions[\'SearchByServiceId\']"></ion-checkbox></ion-col>\n\n    </ion-row>\n\n  </p>\n\n  <p class="nomargin" *ngIf="filterOptions[\'SearchByServiceId\']">\n\n    <ion-item>\n\n      <ion-label>Service Id</ion-label>\n\n      <ion-input [(ngModel)]="serviceId"></ion-input>\n\n    </ion-item>\n\n  </p>\n\n\n\n\n\n\n\n  <p class="filter-sub-header">\n\n    <ion-row>\n\n      <ion-col>Search by status</ion-col>\n\n      <ion-col style="text-align: right !important;" class="nopadding"><ion-checkbox mode="ios" [(ngModel)]="filterOptions[\'SearchByStatus\']" ></ion-checkbox></ion-col>\n\n    </ion-row>\n\n  </p>\n\n  <p class="nomargin" *ngIf="filterOptions[\'SearchByStatus\']">  \n\n    <ion-item>\n\n      <ion-label>Status</ion-label>\n\n      <ion-select interface="popover" [(ngModel)]="status">\n\n        <ion-option value="CLOSE">Close</ion-option>\n\n        <ion-option value="OPEN">Open</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </p>\n\n\n\n\n\n  <p class="filter-sub-header">\n\n    <ion-row>\n\n      <ion-col>Search by pop/zone name</ion-col>\n\n      <ion-col style="text-align: right !important;" class="nopadding"><ion-checkbox mode="ios" [(ngModel)]="filterOptions[\'SearchByPopZoneName\']"></ion-checkbox></ion-col>\n\n    </ion-row>\n\n  </p>\n\n  <p class="nomargin" *ngIf="filterOptions[\'SearchByPopZoneName\']">\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-item>\n\n          <ion-label>Zonename</ion-label>\n\n          <ion-input></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Popname</ion-label>\n\n          <ion-input></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n  </p>\n\n\n\n\n\n  <p class="filter-sub-header">\n\n    <ion-row>\n\n      <ion-col>Search by username</ion-col>\n\n      <ion-col style="text-align: right !important;" class="nopadding"><ion-checkbox mode="ios" [(ngModel)]="filterOptions[\'SearchByUsername\']"></ion-checkbox></ion-col>\n\n    </ion-row>\n\n  </p>\n\n  <p class="nomargin" *ngIf="filterOptions[\'SearchByUsername\']">\n\n    <ion-item>\n\n      <ion-label>Username</ion-label>\n\n      <ion-input [(ngModel)]="userName"></ion-input>\n\n    </ion-item>\n\n  </p>\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n  <ion-row>\n\n    <ion-col col-6 style="text-align: center !important; background-color: #fff !important; border-right: 1px solid #ddd !important;"> \n\n      <button ion-button clear disabled=true>Reset</button>\n\n    </ion-col>\n\n    <ion-col col-6 style="text-align: center !important;"> \n\n      <button ion-button clear (click)="searchUsingFilter()">Apply</button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-footer>'/*ion-inline-end:"E:\24Online\Code\24onlineLatest\24Online\src\pages\filter-service-management\filter-service-management.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__["a" /* MessageHelper */], __WEBPACK_IMPORTED_MODULE_0__Utils_DataValidation__["a" /* DataValidation */]])
    ], FilterServiceManagementPage);
    return FilterServiceManagementPage;
}());

//# sourceMappingURL=filter-service-management.js.map

/***/ })

});
//# sourceMappingURL=9.js.map