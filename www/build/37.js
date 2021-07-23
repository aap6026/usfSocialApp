webpackJsonp([37],{

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardPageModule", function() { return LeaderboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leaderboard__ = __webpack_require__(380);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LeaderboardPageModule = /** @class */ (function () {
    function LeaderboardPageModule() {
    }
    LeaderboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__leaderboard__["a" /* LeaderboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__leaderboard__["a" /* LeaderboardPage */]),
            ],
        })
    ], LeaderboardPageModule);
    return LeaderboardPageModule;
}());

//# sourceMappingURL=leaderboard.module.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardPage; });
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
 * Generated class for the LeaderboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeaderboardPage = /** @class */ (function () {
    function LeaderboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LeaderboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeaderboardPage');
    };
    LeaderboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leaderboard',template:/*ion-inline-start:"/Users/AAP6026/usfSocialApp/src/pages/leaderboard/leaderboard.html"*/'<!--\n  Generated template for the LeaderboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="ion-no-border" style="padding: 20px 40px; display: flex;  border-bottom: 1px solid #d8d8d8;">\n  \n  <a href="http://localhost:8100/#/dashboard">\n    <img src="assets/img/back.png" style="width: 20px; " />\n  </a>\n  <ion-title style="text-align: center;">Leaderboard</ion-title>\n  <a href="http://localhost:8100/#/dashboard" >\n    <img src="assets/img/home.png" style="width: 20px;" />\n  </a>\n\n</ion-header>\n\n<ion-content style="background-color: #ffffff;">\n  \n  <div style="margin: 40px; padding-bottom: 40px;">\n\n    <div style="font-size: 14px; display: flex;  display:block; margin: 15px 0;">\n      <div style="display: inline-block; font-weight: bold;">1.  App Dev</div>\n      <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">2300</div>\n      \n      <div style="width: 100%; display: inline-flex; float: left; border-bottom: 1px solid #d8d8d8; padding-bottom: 20px; clear: both; overflow-x:scroll; overflow-y:hidden; white-space:nowrap; margin-bottom: 20px;">\n        \n        <div style="display: inline-block; font-size: 12px; width: 75px; text-align: center; height: 120px; padding: 20px 0;"> \n        <img src="assets/img/icon4.png" style="width: 60px; padding-bottom: 5px;" /><br/>\n        Ille S.<br/>\n        <span style="font-size: 10px; color: #86AB5E;">120</span>\n        </div>\n\n        <div style="display: inline-block; font-size: 12px; width: 75px; text-align: center; height: 120px; padding: 20px 0;"> \n          <img src="assets/img/icon9.png" style="width: 60px; padding-bottom: 5px;" /><br/>\n          Jacob N.<br/>\n          <span style="font-size: 10px; color: #86AB5E;">118</span>\n          </div>\n  \n\n          <div style="display: inline-block; font-size: 12px; width: 75px; text-align: center; height: 120px; padding: 20px 0;"> \n            <img src="assets/img/icon2.png" style="width: 60px; padding-bottom: 5px;" /><br/>\n            Christian K.<br/>\n            <span style="font-size: 10px; color: #86AB5E;">115</span>\n            </div>\n          \n            <div style="display: inline-block; width: 75px; text-align: center; height: 120px; padding: 20px 0;"> \n              <a href="http://localhost:8100/#/playersbydepartment">\n              <img src="assets/img/icon11.png" style="width: 60px; padding-bottom: 5px;" /><br/>\n              </a>\n            </div>\n    \n\n      </div>\n      \n    </div> <!-- End of App Dev 1 -->\n\n    <div style="font-size: 14px; display: flex;  display:block; margin: 15px 0;">\n      <div style="display: inline-block; font-weight: bold;">2.  Finance</div>\n      <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">2280</div>\n      \n      <div style="width: 100%; display: inline-flex; float: left; border-bottom: 1px solid #d8d8d8; padding-bottom: 20px; clear: both; overflow-x:scroll; overflow-y:hidden; white-space:nowrap; margin-bottom: 20px;">\n        \n        <div style="display: inline-block; font-size: 13px; width: 75px; text-align: center; height: 120px; padding: 20px 0;"> \n        <img src="assets/img/icon1.png" style="width: 60px; padding-bottom: 5px;" /><br/>\n        Chris S.<br/>\n        <span style="font-size: 10px; color: #86AB5E;">113</span>\n        </div>\n\n        <div style="display: inline-block; font-size: 13px; width: 75px; text-align: center; height: 120px; padding: 20px 0;"> \n          <img src="assets/img/icon8.png" style="width: 60px; padding-bottom: 5px;" /><br/>\n          Mary N.<br/>\n          <span style="font-size: 10px; color: #86AB5E;">110</span>\n          </div>\n  \n\n          <div style="display: inline-block; font-size: 13px; width: 75px; text-align: center; height: 120px; padding: 20px 0;"> \n            <img src="assets/img/icon3.png" style="width: 60px; padding-bottom: 5px;" /><br/>\n            Larry K.<br/>\n            <span style="font-size: 10px; color: #86AB5E;">97</span>\n            </div>\n          \n            <div style="display: inline-block; font-size: 13px; width: 75px; text-align: center; height: 120px; padding: 20px 0;"> \n              <a href="http://localhost:8100/#/playersbydepartment">\n              <img src="assets/img/icon11.png" style="width: 60px; padding-bottom: 5px;" /><br/>\n              </a>\n            </div>\n    \n\n      </div>\n      \n    </div> <!-- End of App Dev 1 -->\n\n    <div style="font-size: 14px; display: flex;  display:block; margin: 15px 0;">\n      <div style="display: inline-block; font-weight: bold;">3.  Legal</div>\n      <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">2150</div>\n      \n      <div style="width: 100%; display: inline-flex; float: left; border-bottom: 1px solid #d8d8d8; padding-bottom: 20px; clear: both; overflow-x:scroll; overflow-y:hidden; white-space:nowrap; margin-bottom: 20px;">\n        \n        <div style="display: inline-block; font-size: 14px; width: 75px; text-align: center; height: 120px; padding: 20px 0;"> \n        <img src="assets/img/icon2.png" style="width: 60px; padding-bottom: 5px;" /><br/>\n        Jack P.<br/>\n        <span style="font-size: 10px; color: #86AB5E;">189</span>\n        </div>\n\n        <div style="display: inline-block; font-size: 14px; width: 75px; text-align: center; height: 120px; padding: 20px 0;"> \n          <img src="assets/img/icon5.png" style="width: 60px; padding-bottom: 5px;" /><br/>\n          Rick S.<br/>\n          <span style="font-size: 10px;color: #86AB5E;">111</span>\n          </div>\n  \n\n          <div style="display: inline-block; font-size: 14px; width: 75px; text-align: center; height: 120px; padding: 20px 0;"> \n            <img src="assets/img/icon6.png" style="width: 60px; padding-bottom: 5px;" /><br/>\n            Peeter L.<br/>\n            <span style="font-size: 10px;color: #86AB5E;">110</span>\n            </div>\n          \n            <div style="display: inline-block; font-size: 14px; width: 75px; text-align: center; height: 120px; padding: 20px 0;"> \n              <a href="http://localhost:8100/#/playersbydepartment">\n              <img src="assets/img/icon11.png" style="width: 60px; padding-bottom: 5px;" /><br/>\n              </a>\n            </div>\n    \n\n      </div>\n      \n    </div> <!-- End of App Dev 1 -->\n\n    <div style="font-size: 14px; display: flex;  display:block; margin: 15px 0;">\n      <div style="display: inline-block; font-weight: bold;">4.  Marketing</div>\n      <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">2001</div>\n      \n      <div style="width: 100%; display: inline-flex; float: left; border-bottom: 1px solid #d8d8d8; padding-bottom: 20px; clear: both; overflow-x:scroll; overflow-y:hidden; white-space:nowrap; margin-bottom: 20px;">\n        \n        <div style="display: inline-block; font-size: 14px; width: 75px; text-align: center; height: 120px; padding: 20px 0;"> \n        <img src="assets/img/icon7.png" style="width: 60px; padding-bottom: 5px;" /><br/>\n        Sue A.<br/>\n        <span style="font-size: 10px;color: #86AB5E;">110</span>\n        </div>\n\n        <div style="display: inline-block; font-size: 14px; width: 75px; text-align: center; height: 120px; padding: 20px 0;"> \n          <img src="assets/img/icon3.png" style="width: 60px; padding-bottom: 5px;" /><br/>\n          Andy S.<br/>\n          <span style="font-size: 10px;color: #86AB5E;">88</span>\n          </div>\n  \n\n          <div style="display: inline-block; font-size: 14px; width: 75px; text-align: center; height: 120px; padding: 20px 0;"> \n            <img src="assets/img/icon1.png" style="width: 60px; padding-bottom: 5px;" /><br/>\n            Oliver I.<br/>\n            <span style="font-size: 10px;color: #86AB5E;">81</span>\n            </div>\n          \n            <div style="display: inline-block; font-size: 14px; width: 75px; text-align: center; height: 120px; padding: 20px 0;"> \n              <a href="http://localhost:8100/#/playersbydepartment">\n              <img src="assets/img/icon11.png" style="width: 60px; padding-bottom: 5px;" /><br/>\n              </a>\n            </div>\n    \n\n      </div>\n      \n    </div> <!-- End of App Dev 1 -->\n\n    <div style="font-size: 14px; display: flex;  display:block; margin: 15px 0;">\n      <div style="display: inline-block; font-weight: bold;">5.  Sales</div>\n      <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">1100</div>\n      \n      <div style="width: 100%; display: inline-flex; float: left; border-bottom: 1px solid #d8d8d8; padding-bottom: 20px;  clear: both; overflow-x:scroll; overflow-y:hidden; white-space:nowrap; margin-bottom: 20px;">\n        \n        <div style="display: inline-block; font-size: 14px; width: 75px; text-align: center; height: 120px; padding: 20px 0;"> \n        <img src="assets/img/icon9.png" style="width: 60px; padding-bottom: 5px;" /><br/>\n        Dan P.<br/>\n        <span style="font-size: 10px;color: #86AB5E;">98</span>\n        </div>\n\n      <div style="display: inline-block; font-size: 14px; width: 75px; text-align: center; height: 120px; padding: 20px 0;"> \n        <img src="assets/img/icon5.png" style="width: 60px; padding-bottom: 5px;" /><br/>\n        George S.<br/>\n        <span style="font-size: 10px;color: #86AB5E;">90</span>\n        </div>\n  \n\n      <div style="display: inline-block; font-size: 14px; width: 75px; text-align: center; height: 120px; padding: 20px 0;"> \n        <img src="assets/img/icon2.png" style="width: 60px; padding-bottom: 5px;" /><br/>\n        Don S.<br/>\n        <span style="font-size: 10px;color: #86AB5E;">76</span>\n        </div>\n      \n      <div style="display: inline-block; font-size: 14px; width: 75px; text-align: center; height: 120px; padding: 20px 0;"> \n          <a href="http://localhost:8100/#/playersbydepartment">\n          <img src="assets/img/icon11.png" style="width: 60px; padding-bottom: 5px;" /><br/>\n          </a>\n        </div>\n    \n\n      </div>\n      \n    </div> <!-- End of Sales -->\n\n<br />\n \n  \n\n  </div> <!-- page margin -->\n\n  <br />\n  <a href="http://localhost:8100/#/leaderboard" class="buttonLarge2">LOAD MORE</a>\n  <br />\n  <br />\n</ion-content>'/*ion-inline-end:"/Users/AAP6026/usfSocialApp/src/pages/leaderboard/leaderboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LeaderboardPage);
    return LeaderboardPage;
}());

//# sourceMappingURL=leaderboard.js.map

/***/ })

});
//# sourceMappingURL=37.js.map