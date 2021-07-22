webpackJsonp([12],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardPageModule", function() { return LeaderboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leaderboard__ = __webpack_require__(353);
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

/***/ 353:
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
            selector: 'page-leaderboard',template:/*ion-inline-start:"/Users/AAP6026/usfSocialApp/src/pages/leaderboard/leaderboard.html"*/'<!--\n  Generated template for the LeaderboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Games Leaderboard</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <div style="margin:40px 40px 0 40px;">\n    <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n      <div style="display: inline-block; font-weight: regular;">1.  App Dev</div>\n      <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">2300</div>\n    </div>\n    <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n      <div style="display: inline-block; font-weight: regular;">2.  Finance</div>\n      <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">2280</div>\n    </div>\n    <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n      <div style="display: inline-block; font-weight: regular;">3.  Legal</div>\n      <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">2010</div>\n    </div>\n    <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n      <div style="display: inline-block; font-weight: regular;">4.  Marketing</div>\n      <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">1943</div>\n    </div>\n    <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n      <div style="display: inline-block; font-weight: regular;">5.  Sales</div>\n      <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">1309</div>\n    </div>\n    <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n      <div style="display: inline-block; font-weight: regular;">1.  App Dev</div>\n      <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">2300</div>\n    </div>\n    <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n      <div style="display: inline-block; font-weight: regular;">2.  Finance</div>\n      <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">2280</div>\n    </div>\n    <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n      <div style="display: inline-block; font-weight: regular;">3.  Legal</div>\n      <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">2010</div>\n    </div>\n    <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n      <div style="display: inline-block; font-weight: regular;">4.  Marketing</div>\n      <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">1943</div>\n    </div>\n    <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n      <div style="display: inline-block; font-weight: regular;">5.  Sales</div>\n      <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">1309</div>\n    </div>\n    <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n      <div style="display: inline-block; font-weight: regular;">1.  App Dev</div>\n      <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">2300</div>\n    </div>\n    <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n      <div style="display: inline-block; font-weight: regular;">2.  Finance</div>\n      <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">2280</div>\n    </div>\n    <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n      <div style="display: inline-block; font-weight: regular;">3.  Legal</div>\n      <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">2010</div>\n    </div>\n    <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n      <div style="display: inline-block; font-weight: regular;">4.  Marketing</div>\n      <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">1943</div>\n    </div>\n    <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n      <div style="display: inline-block; font-weight: regular;">5.  Sales</div>\n      <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">1309</div>\n    </div>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/AAP6026/usfSocialApp/src/pages/leaderboard/leaderboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LeaderboardPage);
    return LeaderboardPage;
}());

//# sourceMappingURL=leaderboard.js.map

/***/ })

});
//# sourceMappingURL=12.js.map