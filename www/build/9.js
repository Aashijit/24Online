webpackJsonp([9],{

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterLeadManagementPageModule", function() { return FilterLeadManagementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_lead_management__ = __webpack_require__(693);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilterLeadManagementPageModule = /** @class */ (function () {
    function FilterLeadManagementPageModule() {
    }
    FilterLeadManagementPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filter_lead_management__["a" /* FilterLeadManagementPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filter_lead_management__["a" /* FilterLeadManagementPage */]),
            ],
        })
    ], FilterLeadManagementPageModule);
    return FilterLeadManagementPageModule;
}());

//# sourceMappingURL=filter-lead-management.module.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterLeadManagementPage; });
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




var FilterLeadManagementPage = /** @class */ (function () {
    function FilterLeadManagementPage(navCtrl, navParams, msgHelper, dataValidation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.msgHelper = msgHelper;
        this.dataValidation = dataValidation;
        //Filter options json
        this.filterOptions = {
            'SearchByLeadId': false,
            'SearchByStatus': false,
            'SearchByPriority': false,
            'SearchByContactNo': false,
            'SearchByLeadCreateDate': false,
            'SearchByCloserDate': false,
            'SearchByPopZoneName': false
        };
        //Keep the data
        this.leadId = null;
        this.status = null;
        this.priority = null;
        this.contactNumber = null;
        this.createStartDate = null;
        this.createEndDate = null;
        this.closerStartDate = null;
        this.closerEndDate = null;
        this.popName = null;
        this.zoneName = null;
        //Initialize the request Json which is to be built.
        this.requestJson = {};
    }
    FilterLeadManagementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterLeadManagementPage');
    };
    //TODO: This requires to be done -- when one option is clicked, others will be disabled.
    FilterLeadManagementPage.prototype.disableOtherOptions = function (option) {
    };
    FilterLeadManagementPage.prototype.searchUsingFilter = function () {
        //Check if more than one option is selected.
        //Remove this if search with more than one option is allowed
        if (this.checkIfMoreThanOneOptionIsSelected()) {
            this.msgHelper.showToast('Please search with atmost one option !!!');
            return;
        }
        //Else Check which option is selected and grow the filter option accordingly
        if (this.filterOptions['SearchByLeadId']) {
            //Validate the Lead Id
            if (this.dataValidation.isEmptyJson(this.leadId)) {
                this.msgHelper.showToast('Lead Id cannot be empty !!!');
                return;
            }
            this.requestJson['leadid'] = this.leadId;
        }
        if (this.filterOptions['SearchByStatus']) {
            //Validate the Lead Id
            if (this.dataValidation.isEmptyJson(this.status)) {
                this.msgHelper.showToast('Status cannot be empty !!!');
                return;
            }
            this.requestJson['status'] = this.status;
        }
        if (this.filterOptions['SearchByPriority']) {
            //Validate the Lead Id
            if (this.dataValidation.isEmptyJson(this.status)) {
                this.msgHelper.showToast('Status cannot be empty !!!');
                return;
            }
            this.requestJson['status'] = this.status;
        }
        if (this.filterOptions['SearchByContactNo']) {
            //Validate the Lead Id
            if (this.dataValidation.isEmptyJson(this.contactNumber)) {
                this.msgHelper.showToast('Contact number be empty !!!');
                return;
            }
            this.requestJson['contactno'] = this.contactNumber;
        }
        if (this.filterOptions['SearchByLeadCreateDate']) {
            //Validate the Create Start Date
            if (this.dataValidation.isEmptyJson(this.createStartDate)) {
                this.msgHelper.showToast('Create start date cannot be empty !!!');
                return;
            }
            if (this.dataValidation.isEmptyJson(this.createEndDate)) {
                this.msgHelper.showToast('Create end date cannot be empty !!!');
                return;
            }
            this.requestJson['createdate'] = this.createStartDate;
            this.requestJson['todate'] = this.createEndDate;
        }
        //
        if (this.filterOptions['SearchByCloserDate']) {
            //Validate the Create Start Date
            if (this.dataValidation.isEmptyJson(this.closerStartDate)) {
                this.msgHelper.showToast('Closer start date cannot be empty !!!');
                return;
            }
            if (this.dataValidation.isEmptyJson(this.closerEndDate)) {
                this.msgHelper.showToast('Closer end date cannot be empty !!!');
                return;
            }
            this.requestJson['fromcloserdate'] = this.closerStartDate;
            this.requestJson['tocloserdate'] = this.closerEndDate;
        }
        if (this.filterOptions['SearchByPopZoneName']) {
            //Validate the Create Start Date
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
        this.navCtrl.setRoot('ManageLeadPage', { 'requestJson': this.requestJson });
    };
    FilterLeadManagementPage.prototype.checkIfMoreThanOneOptionIsSelected = function () {
        var count = 0;
        for (var i = 0; i < this.filterOptions.length - 1; i++) {
            if (this.filterOptions[i] == true)
                count++;
        }
        if (count > 1)
            return true;
        return false;
    };
    FilterLeadManagementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-filter-lead-management',template:/*ion-inline-start:"/home/aashijit/24Online/src/pages/filter-lead-management/filter-lead-management.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Filter Leads</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <p class="filter-sub-header">\n    <ion-row>\n      <ion-col>Search by lead id</ion-col>\n      <ion-col style="text-align: right !important;" class="nopadding"><ion-checkbox mode="ios" [(ngModel)]="filterOptions[\'SearchByLeadId\']" (ionChange)="disableOtherOptions(\'SearchByLeadId\')"></ion-checkbox></ion-col>\n    </ion-row>\n  </p>\n  <p class="nomargin" *ngIf="filterOptions[\'SearchByLeadId\']">\n    <ion-item>\n      <ion-label>Label Id</ion-label>\n      <ion-input [(ngModel)]="leadId"></ion-input>\n    </ion-item>\n  </p>\n\n\n\n  <p class="filter-sub-header">\n    <ion-row>\n      <ion-col>Search by status</ion-col>\n      <ion-col style="text-align: right !important;" class="nopadding"><ion-checkbox mode="ios" [(ngModel)]="filterOptions[\'SearchByStatus\']" (ionChange)="disableOtherOptions(\'SearchByStatus\')"></ion-checkbox></ion-col>\n    </ion-row>\n  </p>\n  <p class="nomargin" *ngIf="filterOptions[\'SearchByStatus\']">  \n    <ion-item>\n      <ion-label>Status</ion-label>\n      <ion-select interface="popover" [(ngModel)]="status">\n        <ion-option value="CLOSE">Close</ion-option>\n        <ion-option value="OPEN">Open</ion-option>\n      </ion-select>\n    </ion-item>\n  </p>\n\n\n\n  <p class="filter-sub-header">\n    <ion-row>\n      <ion-col>Search by priority</ion-col>\n      <ion-col style="text-align: right !important;" class="nopadding"><ion-checkbox mode="ios" [(ngModel)]="filterOptions[\'SearchByPriority\']" (ionChange)="disableOtherOptions(\'SearchByPriority\')"></ion-checkbox></ion-col>\n    </ion-row>\n  </p>\n  <p class="nomargin" *ngIf="filterOptions[\'SearchByPriority\']">\n    <ion-item>\n      <ion-label>Priority</ion-label>\n      <ion-select interface="popover" [(ngModel)]="priority">\n        <ion-option value="HIGH">High</ion-option>\n        <ion-option value="LOW">Low</ion-option>\n      </ion-select>\n    </ion-item>\n  </p>\n\n\n\n  <p class="filter-sub-header">\n    <ion-row>\n      <ion-col>Search by contact number</ion-col>\n      <ion-col style="text-align: right !important;" class="nopadding"><ion-checkbox mode="ios" [(ngModel)]="filterOptions[\'SearchByContactNo\']" (ionChange)="disableOtherOptions(\'SearchByContactNo\')"></ion-checkbox></ion-col>\n    </ion-row>\n  </p>\n  <p class="nomargin" *ngIf="filterOptions[\'SearchByContactNo\']">\n    <ion-item>\n      <ion-label>Contact number</ion-label>\n      <ion-input type="tel" maxlength="10" [(ngModel)]="contactNumber"></ion-input>\n    </ion-item>\n  </p>\n\n\n\n\n  <p class="filter-sub-header">\n    <ion-row>\n      <ion-col>Search by lead create date</ion-col>\n      <ion-col style="text-align: right !important;" class="nopadding"><ion-checkbox mode="ios" [(ngModel)]="filterOptions[\'SearchByLeadCreateDate\']" (ionChange)="disableOtherOptions(\'SearchByLeadCreateDate\')"></ion-checkbox></ion-col>\n    </ion-row>\n  </p>\n  <p class="nomargin" *ngIf="filterOptions[\'SearchByLeadCreateDate\']">\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label floating>From Date</ion-label>\n          <ion-datetime displayFormat="D - MMM, YYYY" pickerFormat="YYYY-MM-DD" [(ngModel)]="createStartDate"></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label floating>To Date</ion-label>\n          <ion-datetime displayFormat="D - MMM, YYYY" pickerFormat="YYYY-MM-DD" [(ngModel)]="createEndDate"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </p>\n\n\n\n  <p class="filter-sub-header">\n    <ion-row>\n      <ion-col>Search by closer date</ion-col>\n      <ion-col style="text-align: right !important;" class="nopadding"><ion-checkbox mode="ios" [(ngModel)]="filterOptions[\'SearchByCloserDate\']" (ionChange)="disableOtherOptions(\'SearchByCloserDate\')"></ion-checkbox></ion-col>\n    </ion-row>\n  </p>\n  <p class="nomargin" *ngIf="filterOptions[\'SearchByCloserDate\']">\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label floating>From Date</ion-label>\n          <ion-datetime displayFormat="D - MMM, YYYY" pickerFormat="YYYY-MM-DD" [(ngModel)]="closerStartDate"></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label floating>To Date</ion-label>\n          <ion-datetime displayFormat="D - MMM, YYYY" pickerFormat="YYYY-MM-DD" [(ngModel)]="closerEndDate"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </p>\n\n\n\n  <p class="filter-sub-header">\n    <ion-row>\n      <ion-col>Search by pop/zone name</ion-col>\n      <ion-col style="text-align: right !important;" class="nopadding"><ion-checkbox mode="ios" [(ngModel)]="filterOptions[\'SearchByPopZoneName\']" (ionChange)="disableOtherOptions(\'SearchByPopZoneName\')"></ion-checkbox></ion-col>\n    </ion-row>\n  </p>\n  <p class="nomargin" *ngIf="filterOptions[\'SearchByPopZoneName\']">\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Zonename</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Popname</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </p>\n  \n\n</ion-content>\n\n\n<ion-footer>\n  <ion-row>\n    <ion-col col-6 style="text-align: center !important; background-color: #fff !important; border-right: 1px solid #ddd !important;"> \n      <button ion-button clear disabled=true>Reset</button>\n    </ion-col>\n    <ion-col col-6 style="text-align: center !important;"> \n      <button ion-button clear (click)="searchUsingFilter()">Apply</button>\n    </ion-col>\n  </ion-row>\n</ion-footer>'/*ion-inline-end:"/home/aashijit/24Online/src/pages/filter-lead-management/filter-lead-management.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_message_helper__["a" /* MessageHelper */], __WEBPACK_IMPORTED_MODULE_0__Utils_DataValidation__["a" /* DataValidation */]])
    ], FilterLeadManagementPage);
    return FilterLeadManagementPage;
}());

//# sourceMappingURL=filter-lead-management.js.map

/***/ })

});
//# sourceMappingURL=9.js.map