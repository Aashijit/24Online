webpackJsonp([12],{

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardTabPageModule", function() { return DashboardTabPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_tab__ = __webpack_require__(695);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardTabPageModule = /** @class */ (function () {
    function DashboardTabPageModule() {
    }
    DashboardTabPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard_tab__["a" /* DashboardTabPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard_tab__["a" /* DashboardTabPage */]),
            ]
        })
    ], DashboardTabPageModule);
    return DashboardTabPageModule;
}());

//# sourceMappingURL=dashboard-tab.module.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardTabPage; });
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


/**
 * Generated class for the DashboardTabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardTabPage = /** @class */ (function () {
    function DashboardTabPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.homeRoot = 'HomePage';
        this.ticketRoot = 'ServiceManagementPage';
        this.leadsRoot = 'ManageLeadPage';
    }
    DashboardTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard-tab',template:/*ion-inline-start:"E:\24Online\Code\24onlineLatest\24Online\src\pages\dashboard-tab\dashboard-tab.html"*/'<ion-tabs>\n\n    <ion-tab [root]="homeRoot" tabTitle="Home" tabIcon="home"></ion-tab>\n\n    <ion-tab [root]="ticketRoot" tabTitle="Ticket" tabIcon="cog"></ion-tab>\n\n    <ion-tab [root]="leadsRoot" tabTitle="Leads" tabIcon="bulb"></ion-tab>\n\n</ion-tabs>\n\n\n\n'/*ion-inline-end:"E:\24Online\Code\24onlineLatest\24Online\src\pages\dashboard-tab\dashboard-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], DashboardTabPage);
    return DashboardTabPage;
}());

//# sourceMappingURL=dashboard-tab.js.map

/***/ })

});
//# sourceMappingURL=12.js.map