webpackJsonp([38],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersbydepartmentPageModule", function() { return PlayersbydepartmentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playersbydepartment__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlayersbydepartmentPageModule = /** @class */ (function () {
    function PlayersbydepartmentPageModule() {
    }
    PlayersbydepartmentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__playersbydepartment__["a" /* PlayersbydepartmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__playersbydepartment__["a" /* PlayersbydepartmentPage */]),
            ],
        })
    ], PlayersbydepartmentPageModule);
    return PlayersbydepartmentPageModule;
}());

//# sourceMappingURL=playersbydepartment.module.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersbydepartmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
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
 * Generated class for the PlayersbydepartmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayersbydepartmentPage = /** @class */ (function () {
    function PlayersbydepartmentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PlayersbydepartmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlayersbydepartmentPage');
    };
    PlayersbydepartmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-playersbydepartment',template:/*ion-inline-start:"/Users/AAP6026/usfSocialApp/src/pages/playersbydepartment/playersbydepartment.html"*/'<!--\n  Generated template for the LeaderboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="ion-no-border" style="padding: 20px 40px; display: flex;  border-bottom: 1px solid #d8d8d8;">\n  \n    <a href="http://localhost:8100/#/leaderboard">\n      <img src="assets/img/back.png" style="width: 20px; " />\n    </a>\n    <ion-title style="text-align: center;">App Dev Leaderboard</ion-title>\n    <a href="http://localhost:8100/#/dashboard" >\n      <img src="assets/img/home.png" style="width: 20px;" />\n    </a>\n\n</ion-header>\n\n<ion-content style="background-color: #ffffff;">\n  \n  <div style="margin:20px 40px 0 40px;">\n\n    <a href="http://localhost:8100/#/profile" style="text-decoration: none; color: #2f2f2f; font-size: 14px; border-bottom: 1px solid #d8d8d8; display:flex; padding: 15px 0;">\n      <div style="font-weight: regular; padding: 12px 0;">\n        1.\n      </div>\n      <div>\n        <img src="assets/img/icon4.png" style="width: 40px; margin: 0 15px;" />\n      </div>\n      <div>\n        <p style="margin: 0; padding: 0; font-weight: bold; font-size: 16px; margin-top: 3px;">\n          Ille S.</p>\n        <p style="margin: 0; padding: 0;">App Dev</p>\n      </div>\n      <div style="padding: 12px 0; color: #86AB5E; margin-left: auto; font-weight: bold; font-size: 16px; ">\n        120\n      </div>\n    </a>\n\n    <a href="http://localhost:8100/#/profile" style="text-decoration: none; color: #2f2f2f; font-size: 14px; border-bottom: 1px solid #d8d8d8; display:flex; padding: 15px 0;">\n      <div style="font-weight: regular; padding: 12px 0;">\n        2.\n      </div>\n      <div>\n        <img src="assets/img/icon2.png" style="width: 40px; margin: 0 15px;" />\n      </div>\n      <div>\n        <p style="margin: 0; padding: 0; font-weight: bold; font-size: 16px; margin-top: 3px;">\n          Jacob N.</p>\n        <p style="margin: 0; padding: 0;">App Dev</p>\n      </div>\n      <div style="padding: 12px 0; color: #86AB5E; margin-left: auto; font-weight: bold; font-size: 16px; ">\n        118\n      </div>\n    </a>\n\n    <a href="http://localhost:8100/#/profile" style="text-decoration: none; color: #2f2f2f; font-size: 14px; border-bottom: 1px solid #d8d8d8; display:flex; padding: 15px 0;">\n      <div style="font-weight: regular; padding: 12px 0;">\n        3.\n      </div>\n      <div>\n        <img src="assets/img/icon9.png" style="width: 40px; margin: 0 15px;" />\n      </div>\n      <div>\n        <p style="margin: 0; padding: 0; font-weight: bold; font-size: 16px; margin-top: 3px;">\n          Christian K.</p>\n        <p style="margin: 0; padding: 0;">App Dev</p>\n      </div>\n      <div style="padding: 12px 0; color: #86AB5E; margin-left: auto; font-weight: bold; font-size: 16px; ">\n        115\n      </div>\n    </a>\n\n    <a href="http://localhost:8100/#/profile" style="text-decoration: none; color: #2f2f2f; font-size: 14px; border-bottom: 1px solid #d8d8d8; display:flex; padding: 15px 0;">\n      <div style="font-weight: regular; padding: 12px 0;">\n        4.\n      </div>\n      <div>\n        <img src="assets/img/icon3.png" style="width: 40px; margin: 0 15px;" />\n      </div>\n      <div>\n        <p style="margin: 0; padding: 0; font-weight: bold; font-size: 16px; margin-top: 3px;">\n          Ramakrishnan A.</p>\n        <p style="margin: 0; padding: 0;">App Dev</p>\n      </div>\n      <div style="padding: 12px 0; color: #86AB5E; margin-left: auto; font-weight: bold; font-size: 16px; ">\n        99\n      </div>\n    </a>\n\n    <a href="http://localhost:8100/#/profile" style="text-decoration: none; color: #2f2f2f; font-size: 14px; border-bottom: 1px solid #d8d8d8; display:flex; padding: 15px 0;">\n      <div style="font-weight: regular; padding: 12px 0;">\n        5.\n      </div>\n      <div>\n        <img src="assets/img/icon1.png" style="width: 40px; margin: 0 15px;" />\n      </div>\n      <div>\n        <p style="margin: 0; padding: 0; font-weight: bold; font-size: 16px; margin-top: 3px;">\n          Ron S.</p>\n        <p style="margin: 0; padding: 0;">App Dev</p>\n      </div>\n      <div style="padding: 12px 0; color: #86AB5E; margin-left: auto; font-weight: bold; font-size: 16px; ">\n        93\n      </div>\n    </a>\n\n    <a href="http://localhost:8100/#/profile" style="text-decoration: none; color: #2f2f2f; font-size: 14px; border-bottom: 1px solid #d8d8d8; display:flex; padding: 15px 0;">\n      <div style="font-weight: regular; padding: 12px 0;">\n        6.\n      </div>\n      <div>\n        <img src="assets/img/icon2.png" style="width: 40px; margin: 0 15px;" />\n      </div>\n      <div>\n        <p style="margin: 0; padding: 0; font-weight: bold; font-size: 16px; margin-top: 3px;">\n          Brandon S.</p>\n        <p style="margin: 0; padding: 0;">App Dev</p>\n      </div>\n      <div style="padding: 12px 0; color: #86AB5E; margin-left: auto; font-weight: bold; font-size: 16px; ">\n        80\n      </div>\n    </a>\n  \n    <a href="http://localhost:8100/#/profile" style="text-decoration: none; color: #2f2f2f; font-size: 14px; border-bottom: 1px solid #d8d8d8; display:flex; padding: 15px 0;">\n      <div style="font-weight: regular; padding: 12px 0;">\n        7.\n      </div>\n      <div>\n        <img src="assets/img/icon7.png" style="width: 40px; margin: 0 15px;" />\n      </div>\n      <div>\n        <p style="margin: 0; padding: 0; font-weight: bold; font-size: 16px; margin-top: 3px;">\n          Deana B.</p>\n        <p style="margin: 0; padding: 0;">App Dev</p>\n      </div>\n      <div style="padding: 12px 0; color: #86AB5E; margin-left: auto; font-weight: bold; font-size: 16px; ">\n        72\n      </div>\n    </a>\n\n    <a href="http://localhost:8100/#/profile" style="text-decoration: none; color: #2f2f2f; font-size: 14px; border-bottom: 1px solid #d8d8d8; display:flex; padding: 15px 0;">\n      <div style="font-weight: regular; padding: 12px 0;">\n        8.\n      </div>\n      <div>\n        <img src="assets/img/icon8.png" style="width: 40px; margin: 0 15px;" />\n      </div>\n      <div>\n        <p style="margin: 0; padding: 0; font-weight: bold; font-size: 16px; margin-top: 3px;">\n          Mel H.</p>\n        <p style="margin: 0; padding: 0;">App Dev</p>\n      </div>\n      <div style="padding: 12px 0; color: #86AB5E; margin-left: auto; font-weight: bold; font-size: 16px; ">\n        68\n      </div>\n    </a>\n\n    <a href="http://localhost:8100/#/playersbydepartment" class="buttonLarge2">LOAD MORE</a>\n\n    \n\n    \n  \n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/AAP6026/usfSocialApp/src/pages/playersbydepartment/playersbydepartment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PlayersbydepartmentPage);
    return PlayersbydepartmentPage;
}());

//# sourceMappingURL=playersbydepartment.js.map

/***/ })

});
//# sourceMappingURL=38.js.map