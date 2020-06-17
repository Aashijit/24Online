webpackJsonp([15],{

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/change-password/change-password.module": [
		681,
		14
	],
	"../pages/create-lead/create-lead.module": [
		679,
		13
	],
	"../pages/dashboard-tab/dashboard-tab.module": [
		678,
		12
	],
	"../pages/edit-service-request/edit-service-request.module": [
		680,
		11
	],
	"../pages/filter-lead-management/filter-lead-management.module": [
		682,
		10
	],
	"../pages/filter-service-management/filter-service-management.module": [
		684,
		9
	],
	"../pages/home/home.module": [
		685,
		8
	],
	"../pages/lead-detail/lead-detail.module": [
		686,
		7
	],
	"../pages/leads/leads.module": [
		683,
		6
	],
	"../pages/login/login.module": [
		687,
		5
	],
	"../pages/manage-lead/manage-lead.module": [
		688,
		4
	],
	"../pages/my-profile/my-profile.module": [
		691,
		3
	],
	"../pages/service-management/service-management.module": [
		690,
		2
	],
	"../pages/service-ticket-detail/service-ticket-detail.module": [
		692,
		1
	],
	"../pages/ticket/ticket.module": [
		689,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 304;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageHelper = /** @class */ (function () {
    function MessageHelper(alertCtrl, loadingCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    MessageHelper.prototype.showWorkingDialog = function (message) {
        if (message === void 0) { message = "Please wait..."; }
        //Working, please wait...
        var l = this.loadingCtrl.create({
            content: message
        });
        l.present();
        return l;
    };
    MessageHelper.prototype.showToast = function (message, autoClose) {
        if (autoClose === void 0) { autoClose = true; }
        if (autoClose) {
            this.toastCtrl.create({
                message: message,
                duration: 3000
            }).present();
        }
        else {
            this.toastCtrl.create({
                message: message,
                showCloseButton: true,
                closeButtonText: 'Ok'
            }).present();
        }
    };
    MessageHelper.prototype.showAlert = function (title, msg, button) {
        if (button === void 0) { button = 'Close'; }
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: [button]
        });
        alert.present();
        return alert;
    };
    MessageHelper.prototype.showConnectionErrorDialog = function () {
        this.alertCtrl.create({
            title: "Connection Error!",
            subTitle: "Failed to connect with server. Please try again.",
            buttons: ['Close']
        }).present();
    };
    MessageHelper.prototype.showErrorDialog = function (title, message) {
        this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['Close']
        }).present();
    };
    MessageHelper.prototype.showNoProductDialog = function () {
        this.alertCtrl.create({
            title: "Not Available!",
            subTitle: "No products found. Please try again.",
            buttons: ['Close']
        }).present();
    };
    MessageHelper.prototype.showNoModelDialog = function () {
        this.alertCtrl.create({
            title: "Not Available!",
            subTitle: "No Car Model found. Please try again.",
            buttons: ['Close']
        }).present();
    };
    MessageHelper.prototype.showNoOrderDialog = function () {
        this.alertCtrl.create({
            title: "Not Available!",
            subTitle: "No Order found.",
            buttons: ['Close']
        }).present();
    };
    MessageHelper.prototype.showNoProductDialogPRODUCTOUTOFSTOCK = function () {
        this.alertCtrl.create({
            title: "Not Available!",
            subTitle: "PRODUCT OUT OF STOCK",
            buttons: ['Close']
        }).present();
    };
    MessageHelper.prototype.showNoProductDialogINSUFFICIENTSTOCK = function () {
        this.alertCtrl.create({
            title: "Not Available!",
            subTitle: "INSUFFICIENT STOCK",
            buttons: ['Close']
        }).present();
    };
    MessageHelper.prototype.showNoProductDialogINVALIDUSER = function () {
        this.alertCtrl.create({
            title: "Error!",
            subTitle: "INVALID USER",
            buttons: ['Close']
        }).present();
    };
    MessageHelper.prototype.showNoProductDialogFAILURE = function () {
        this.alertCtrl.create({
            title: "Error!",
            subTitle: "FAILURE",
            buttons: ['Close']
        }).present();
    };
    MessageHelper.prototype.showNoProductDialogSYSTEMERROR = function () {
        this.alertCtrl.create({
            title: "Error!",
            subTitle: "SYSTEM ERROR",
            buttons: ['Close']
        }).present();
    };
    MessageHelper.prototype.showDialogChangePassword = function () {
        this.alertCtrl.create({
            title: "Error!",
            subTitle: "Your old password does not match.",
            buttons: ['Close']
        }).present();
    };
    MessageHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* ToastController */]])
    ], MessageHelper);
    return MessageHelper;
}());

//# sourceMappingURL=message-helper.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_Codes__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpProvider = /** @class */ (function () {
    function HttpProvider(http, codes, httpClient) {
        this.http = http;
        this.codes = codes;
        this.httpClient = httpClient;
    }
    /**
     *
     * @param data  the json data
     * @param apiName the api name
     */
    HttpProvider.prototype.callApi = function (data, apiName) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Username', localStorage.getItem('username'));
            headers.append('Password', localStorage.getItem('password'));
            // headers.append('Username','avijit.ghosh');
            // headers.append('Password','avijit.ghosh');
            var ipAddress = localStorage.getItem(_this.codes.LSK_IPADDRESS);
            _this.http.post(_this.codes.API_ENDPOINT + ipAddress + apiName, JSON.stringify(data), { headers: headers }).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve({ status: _this.codes.API_ERROR });
            });
        });
    };
    HttpProvider.prototype.uploadFile = function (data, apiName) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            //headers.append('Content-Type', 'false');
            headers.append('enctype', 'multipart/form-data');
            headers.append('Content-Type', 'application/form-data');
            headers.append('Username', localStorage.getItem('username'));
            headers.append('Password', localStorage.getItem('password'));
            var ipAddress = localStorage.getItem(_this.codes.LSK_IPADDRESS);
            console.error(_this.codes.API_ENDPOINT + ipAddress + apiName);
            _this.http.post(_this.codes.API_ENDPOINT + ipAddress + apiName, (data), { headers: headers }).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve({ status: _this.codes.API_ERROR });
            });
        });
    };
    HttpProvider.prototype.isNullOrEmpty = function (str) {
        return typeof str === 'undefined' || str === null || (typeof str === 'string' && str.length <= 0);
    };
    HttpProvider.prototype.convertToArray = function (object) {
        if (this.isArray(object))
            return object;
        else
            return [object];
    };
    HttpProvider.prototype.isArray = function (object) {
        if (typeof object === 'undefined')
            return false;
        return Object.prototype.toString.call(object).slice(8, -1) === 'Array';
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__Utils_Codes__["a" /* Codes */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DataValidation__ = __webpack_require__(85);

var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    /**
     *
     * @param string
     */
    StringUtils.prototype.splitStringInCamelCase = function (string) {
        var dataValidation = new __WEBPACK_IMPORTED_MODULE_0__DataValidation__["a" /* DataValidation */]();
        if (dataValidation.isEmptyJson(string))
            return string;
        var strArr = string.split(".");
        if (strArr.length > 1)
            return strArr[0].substr(0, 1).toUpperCase() + strArr[0].substr(1, strArr[0].length - 1).toLowerCase() + " " + strArr[1].substr(0, 1).toUpperCase() + strArr[1].substr(1, strArr[1].length - 1).toLowerCase();
        return strArr[0].substr(0, 1).toUpperCase() + strArr[0].substr(1, strArr[0].length - 1).toLowerCase();
    };
    return StringUtils;
}());

//# sourceMappingURL=StringUtils.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(355);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utils_DataValidation__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Utils_StringUtils__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/dashboard-tab/dashboard-tab.module#DashboardTabPageModule', name: 'DashboardTabPage', segment: 'dashboard-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-lead/create-lead.module#CreateLeadPageModule', name: 'CreateLeadPage', segment: 'create-lead', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-service-request/edit-service-request.module#EditServiceRequestPageModule', name: 'EditServiceRequestPage', segment: 'edit-service-request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter-lead-management/filter-lead-management.module#FilterLeadManagementPageModule', name: 'FilterLeadManagementPage', segment: 'filter-lead-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leads/leads.module#LeadsPageModule', name: 'LeadsPage', segment: 'leads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter-service-management/filter-service-management.module#FilterServiceManagementPageModule', name: 'FilterServiceManagementPage', segment: 'filter-service-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lead-detail/lead-detail.module#LeadDetailPageModule', name: 'LeadDetailPage', segment: 'lead-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manage-lead/manage-lead.module#ManageLeadPageModule', name: 'ManageLeadPage', segment: 'manage-lead', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ticket/ticket.module#TicketPageModule', name: 'TicketPage', segment: 'ticket', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/service-management/service-management.module#ServiceManagementPageModule', name: 'ServiceManagementPage', segment: 'service-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-profile/my-profile.module#MyProfilePageModule', name: 'MyProfilePage', segment: 'my-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/service-ticket-detail/service-ticket-detail.module#ServiceTicketDetailPageModule', name: 'ServiceTicketDetailPage', segment: 'service-ticket-detail', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__Utils_DataValidation__["a" /* DataValidation */],
                __WEBPACK_IMPORTED_MODULE_3__Utils_Codes__["a" /* Codes */],
                __WEBPACK_IMPORTED_MODULE_2__providers_message_helper__["a" /* MessageHelper */],
                __WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_13__Utils_StringUtils__["a" /* StringUtils */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_DataValidation__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils_Codes__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, codes, dataValidation) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.codes = codes;
        this.dataValidation = dataValidation;
        this.rootPage = null;
        this.initializeApp();
        //Check if the user is already logged in
        if (this.dataValidation.isEmptyJson(localStorage.getItem(this.codes.LSK_USERNAME))) {
            //Go to Login Page
            this.rootPage = "LoginPage";
        }
        else {
            //Go to Login Page
            this.rootPage = "DashboardTabPage";
        }
    }
    MyApp.prototype.logOut = function () {
        localStorage.removeItem(this.codes.LSK_USERNAME);
        localStorage.removeItem(this.codes.LSK_PASSWORD);
        localStorage.removeItem(this.codes.LSK_IPADDRESS);
        localStorage.removeItem(this.codes.LSK_USER_INFO_PREFERENCES);
        this.nav.setRoot('LoginPage');
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\24Online\Code\24onlineLatest\24Online\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n\n  <ion-header style="background-color : rgb(61, 192, 253) !important;">\n\n    <ion-row>\n\n      <ion-col style="text-align: center !important;">\n\n        <img src="../assets/imgs/logo.png" style="width: 90px !important;" />\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-header>\n\n\n\n  <ion-content style="background-image: radial-gradient(rgb(246, 246, 246) ,rgb(230, 230, 230));">\n\n\n\n    <p style="text-align:  center !important;">\n\n    <ion-label>\n\n      Sales Management\n\n    </ion-label>\n\n  </p>\n\n\n\n  <ion-card>\n\n    <ion-card-header>Home</ion-card-header>\n\n       <p> <button ion-button clear (click)="nav.setRoot(\'DashboardTabPage\')" menuClose> <img src="../assets/imgs/real-estate.svg" style="width: 20px !important"/> &nbsp; Dashboard</button></p>\n\n  </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-header>Lead Management</ion-card-header>\n\n         <p> <button ion-button clear (click)="nav.setRoot(\'CreateLeadPage\')" menuClose> <img src="../assets/imgs/create-lead.svg" style="width: 20px !important"/> &nbsp; Create Lead</button></p>\n\n        <p> <button ion-button clear (click)="nav.setRoot(\'ManageLeadPage\')" menuClose><img src="../assets/imgs/manage-lead.svg" style="width: 20px !important"/> &nbsp; Manage Lead</button></p>\n\n    </ion-card>\n\n\n\n\n\n    <ion-card>\n\n      <ion-card-header>Service Request</ion-card-header>\n\n         <p> <button ion-button clear (click)="nav.setRoot(\'ServiceManagementPage\')" menuClose> <img src="../assets/imgs/request.svg" style="width: 20px !important"/> &nbsp; Manage Service Request</button></p>\n\n    </ion-card>\n\n\n\n\n\n\n\n    <ion-card>\n\n        <ion-card-header>Settings</ion-card-header>  \n\n         <p> <button ion-button clear (click)="nav.setRoot(\'MyProfilePage\')" menuClose> <img src="../assets/imgs/user-edit.svg" style="width: 20px !important"/> &nbsp; My Profile</button></p>\n\n         <p> <button ion-button clear (click)="nav.push(\'ChangePasswordPage\')" menuClose> <img src="../assets/imgs/password.svg" style="width: 20px !important"/> &nbsp; Change Password</button></p>\n\n         <p> <button ion-button clear menuClose> <img src="../assets/imgs/contract.svg" style="width: 20px !important"/> &nbsp; Terms & Conditions</button></p>\n\n         <p> <button ion-button clear (click)="logOut()" menuClose> <img src="../assets/imgs/logout.svg" style="width: 20px !important" /> &nbsp; Log out</button></p>\n\n         <p> <button ion-button clear menuClose> <img src="../assets/imgs/version.svg" style="width: 20px !important"/> &nbsp; App Version : 0.0.1</button></p>\n\n    </ion-card>\n\n\n\n    <!-- <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list> -->\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\24Online\Code\24onlineLatest\24Online\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1__Utils_Codes__["a" /* Codes */], __WEBPACK_IMPORTED_MODULE_0__Utils_DataValidation__["a" /* DataValidation */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataValidation; });
var DataValidation = /** @class */ (function () {
    function DataValidation() {
    }
    DataValidation.prototype.isValidIpAddress = function (ipAddress) {
        if (ipAddress == undefined || ipAddress == null || ipAddress == "")
            return false;
        var ipAddressRegex = new RegExp("[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}");
        if (ipAddressRegex.test(ipAddress))
            return true;
        return false;
    };
    DataValidation.prototype.isValidMobileNumber = function (mobileNumber) {
        if (mobileNumber == undefined || mobileNumber == null || mobileNumber == "")
            return false;
        var mobileNumberRegex = new RegExp("^[0-9]{10}$");
        if (mobileNumberRegex.test(mobileNumber))
            return true;
        return false;
    };
    DataValidation.prototype.isValidEmailId = function (emailId) {
        if (emailId == undefined || emailId == null || emailId == "")
            return false;
        if (emailId != undefined && emailId != null && emailId != "") {
            var mobileNumberRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
            if (mobileNumberRegex.test(emailId))
                return true;
            return false;
        }
        return true;
    };
    DataValidation.prototype.stringToBoolean = function (string) {
        if (string == null || string == undefined || string == '')
            return false;
        switch (string) {
            case 'true':
            case 'True':
                return true;
            case 'false':
            case 'False':
                return false;
        }
        return string;
    };
    DataValidation.prototype.commaSeperator = function (string) {
        //Check if string is null
        if (this.isEmpty(string))
            return null;
        //Check if commas are present
        if (string.includes(","))
            return string;
        //Insert the commas
        return string.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };
    DataValidation.prototype.isValidPinCode = function (pinCode) {
        if (pinCode != undefined && pinCode != null && pinCode != "") {
            var pinCodeRegex = new RegExp("^[0-9]{6}$");
            if (pinCodeRegex.test(pinCode))
                return true;
            return false;
        }
    };
    DataValidation.prototype.isValidAmount = function (amount) {
        var strongRegex = new RegExp("[0-9]{0,8}.[0-9]{0,2}");
        return (strongRegex.test(amount));
    };
    DataValidation.prototype.isValidIfsc = function (code) {
        var strongRegex = new RegExp("[A-Za-z]{4}[0-9]{7}$");
        return (strongRegex.test(code));
    };
    DataValidation.prototype.doValidateName = function (name) {
    };
    DataValidation.prototype.isValidPassword = function (password) {
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return (strongRegex.test(password));
    };
    DataValidation.prototype.doCheckForUndefinedVariable = function (fieldToCheck, returnMessageTab, fieldName) {
        if (fieldToCheck == undefined || fieldToCheck == "")
            returnMessageTab = fieldName + " not present !!!";
        return fieldToCheck;
    };
    DataValidation.prototype.isNull = function (value) {
        if (value == null)
            return true;
        return false;
    };
    DataValidation.prototype.isEmptyJson = function (value) {
        if (value == undefined)
            return true;
        if (value == null)
            return true;
        if (value == "")
            return true;
        return false;
    };
    DataValidation.prototype.isEmpty = function (value) {
        if (value == undefined)
            return true;
        if (value == null)
            return true;
        if (value.trim() == "")
            return true;
        return false;
    };
    DataValidation.prototype.isUndefined = function (value) {
        if (value == undefined) {
            return true;
        }
    };
    DataValidation.prototype.isValidNumber = function (number) {
        if (number != null || number != undefined || number != "") {
            var nameRegex = new RegExp("[0-9]+");
            if (nameRegex.test(number))
                return true;
            return false;
        }
        return false;
    };
    DataValidation.prototype.isValidName = function (name) {
        if (name != undefined && name != null && name != "") {
            var nameRegex = new RegExp("^[a-zA-Z ]");
            if (nameRegex.test(name))
                return true;
            return false;
        }
    };
    DataValidation.prototype.addErrorMessage = function (eid, errorMessage) {
        /*STEP : 1  node variable for adding child element for error message*/
        var node = document.createElement("ion-note");
        /*STEP : 2 Add classes of this node */
        node.setAttribute("class", "validation-error");
        /*STEP : 2 Add id of this node */
        node.setAttribute("id", eid + "Err");
        /*STEP : 3 Add text content of this node */
        var textnode = document.createTextNode(errorMessage);
        node.appendChild(textnode);
        /*STEP : 4 Add this node to under the text field */
        document.getElementById(eid).parentElement.appendChild(node);
    };
    DataValidation.prototype.removeErrorMessage = function (eid) {
        if (document.getElementById(eid + "Err") != null)
            document.getElementById(eid + "Err").remove();
    };
    DataValidation.prototype.removeErrorMessageForMultipleElement = function (eClass, index) {
        if (document.getElementsByClassName("validation-error" + " " + eClass + "Err")[index] != null)
            document.getElementsByClassName("validation-error" + " " + eClass + "Err")[index].remove();
    };
    DataValidation.prototype.addErrorMessageForMultipleElement = function (eid, errorMessage, index) {
        /*STEP : 1  node variable for adding child element for error message*/
        var node = document.createElement("ion-note");
        /*STEP : 2 Add classes of this node */
        node.setAttribute("class", "validation-error" + " " + eid + "Err");
        /*STEP : 3 Add text content of this node */
        var textnode = document.createTextNode(errorMessage);
        node.appendChild(textnode);
        /*STEP : 4 Add this node to under the text field */
        document.getElementsByClassName(eid)[index].parentElement.appendChild(node);
    };
    return DataValidation;
}());

//# sourceMappingURL=DataValidation.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Codes; });
var Codes = /** @class */ (function () {
    function Codes() {
        this.EM_INVALID_MOBILE_NUMBER = "Invalid mobile number";
        this.EM_INVALID_EMAILID = "Invalid email id";
        this.EM_INVALID_PASSWORD = "Invalid password";
        this.EM_INVALID_VERIFICATION_ID = "Invalid verification id";
        this.API_ERROR = "500";
        this.LSK_IPADDRESS = "ipaddress";
        this.LSK_USERNAME = "username";
        this.LSK_PASSWORD = "password";
        this.LSK_USER_INFO_PREFERENCES = "user_info_preferences";
        this.API_ENDPOINT = "https://cors-anywhere.herokuapp.com/http://";
        this.API_ENDPOINT_2 = "http://";
        this.API_AUTHENTICATE_USER = ":10080/24online/service/MobileApplicationService/authenticateUser";
        this.API_SEARCH_LEAD = ":10080/24online/service/SalesService/searchLead";
        this.API_SEARCH_SERVICE = ":10080/24online/service/SalesService/searchService";
        this.API_CREATE_LEAD = ":10080/24online/service/SalesService/createLead";
        this.API_GET_LEAD_DETAILS = ":10080/24online/service/SalesService/searchLeadTicketwithDetail";
        this.API_GET_SERVICE_DETAILS = ":10080/24online/service/SalesService/searchServiceTicketwithDetail";
        this.API_UPDATE_SERVICE_REQUEST = ":10080/24online/service/SalesService/updateServiceTicket";
        this.API_CHANGE_PASSWORD = ":10080/24online/service/MyAccountService/changePassword";
        this.API_USER_INFO = ":10080/24online/service/MyAccountService/userInfo";
        this.API_USAGE_INFO = ":10080/24online/service/MyAccountService/usageInfo";
        this.API_GET_PACKAGE_LIST = ":10080/24online/service/PackageService/getPackageList";
        this.API_GET_ZONE_DETAIL_LIST = ":10080/24online/service/ZoneService/getZoneDetailList";
    }
    return Codes;
}());

//# sourceMappingURL=Codes.js.map

/***/ })

},[350]);
//# sourceMappingURL=main.js.map