webpackJsonp([5],{

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterLeadManagementPageModule", function() { return FilterLeadManagementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_lead_management__ = __webpack_require__(683);
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

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterLeadManagementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
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
    function FilterLeadManagementPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FilterLeadManagementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterLeadManagementPage');
    };
    FilterLeadManagementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter-lead-management',template:/*ion-inline-start:"/home/aashijit/24Online/src/pages/filter-lead-management/filter-lead-management.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Filter</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <p class="filter-sub-header">\n    Search by lead id\n  </p>\n  <p class="nomargin">\n    <ion-item>\n      <ion-label floating>Label Id</ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n  </p>\n\n\n\n  <p class="filter-sub-header">\n    Search by status\n  </p>\n  <p class="nomargin">\n    <ion-item>\n      <ion-label floating>Status</ion-label>\n      <ion-select>\n        <ion-option value="close">Close</ion-option>\n        <ion-option value="open">Open</ion-option>\n      </ion-select>\n    </ion-item>\n  </p>\n\n\n\n  <p class="filter-sub-header">\n    Search by priority\n  </p>\n  <p class="nomargin">\n    <ion-item>\n      <ion-label floating>Priority</ion-label>\n      <ion-select>\n        <ion-option value="high">High</ion-option>\n        <ion-option value="low">Low</ion-option>\n      </ion-select>\n    </ion-item>\n  </p>\n\n\n\n  <p class="filter-sub-header">\n    Search by contact number\n  </p>\n  <p class="nomargin">\n    <ion-item>\n      <ion-label floating>Contact number</ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n  </p>\n\n\n\n\n  <p class="filter-sub-header">\n    Search by lead create date\n  </p>\n  <p class="nomargin">\n    <ion-row>\n      <ion-col>\n        <ion-datetime></ion-datetime>\n        <ion-datetime></ion-datetime>\n      </ion-col>\n    </ion-row>\n  </p>\n\n\n\n  <p class="filter-sub-header">\n    Search by closer date\n  </p>\n  <p class="nomargin">\n    <ion-row>\n      <ion-col>\n        <ion-datetime></ion-datetime>\n        <ion-datetime></ion-datetime>\n      </ion-col>\n    </ion-row>\n  </p>\n\n\n\n  <p class="filter-sub-header">\n    Search by Pop/Zone\n  </p>\n  <p class="nomargin">\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label floating>Zonename</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Popname</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </p>\n  \n\n</ion-content>\n'/*ion-inline-end:"/home/aashijit/24Online/src/pages/filter-lead-management/filter-lead-management.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FilterLeadManagementPage);
    return FilterLeadManagementPage;
}());

//# sourceMappingURL=filter-lead-management.js.map

/***/ })

});
//# sourceMappingURL=5.js.map