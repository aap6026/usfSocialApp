webpackJsonp([43],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
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
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/AAP6026/usfSocialApp/src/pages/dashboard/dashboard.html"*/'<ion-header class="ion-no-border" style="padding: 10px 40px; display: flex;  border-bottom: 1px solid #d8d8d8;">\n  \n  <a href="http://localhost:8100/#/profile" style="margin-right: 15px; width: 45px;" >\n    <img src="assets/img/icon4.png" />\n  </a>\n\n  <div style="margin-top: 9px;">\n  <strong>Ille Sutt</strong> (App Dev)<br />\n  Points: 120\n  </div>\n\n  <a href="http://localhost:8100/#/menu2" style="margin-left: auto; margin-top:15px;" >\n    <img src="assets/img/menu.png" style="width: 20px;" />\n  </a>\n\n  \n\n\n</ion-header>\n\n<ion-content style="background-color: #ffffff;">\n\n  <div style="padding: 30px 40px 20px 40px; display: inline-block; width: 100%"> \n    <h2 style="padding: 0; margin: 0; font-size: 20px; display: inline-block; font-weight: bold;">Featured Events</h2>\n    <a href="http://localhost:8100/#/events" class="more">More ???</a>\n  </div>\n\n<div style="overflow-x:scroll; overflow-y:hidden; white-space:nowrap; width: 100%; margin: 0px; display: inline-block;">\n\n\n  <div style=" width: 200px; margin-left: 40px; display: inline-block;">\n    <img src="assets/img/trivia.jpg" />\n    <p class="gray12">Friday, July 21 at 4 PM</p>\n    <p class="black14">Trivia Night Summer</p>\n    <a href="http://localhost:8100/#/trivia" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 200px; margin-left: 20px; display: inline-block;">\n    <img src="assets/img/sh.png" />\n    <p class="gray12">Friday, August 11 at 1 PM</p>\n    <p class="black14">Zoom Scavenger Hunt</p>\n    <a href="http://localhost:8100/#/trivia" class="greenatag"> <ion-icon name="pricetag"></ion-icon>App Dev</a>\n  </div>\n\n  <div style=" width: 200px; margin-left: 20px; display: inline-block;">\n    <img src="assets/img/demo.png" />\n    <p class="gray12">Friday, August 3 at 1 PM</p>\n    <p class="black14">Cooking Demo</p>\n    <a href="http://localhost:8100/#/trivia" class="greenatag"> <ion-icon name="pricetag"></ion-icon> Company Wide</a>\n  </div>\n\n  <div style=" width: 200px; margin-left: 20px; margin-right: 40px; display: inline-block;">\n    <img src="assets/img/hh.png" />\n    <p class="gray12">Friday, September 21 at 4:00 PM</p>\n    <p class="black14">Virtual Happy Hour</p>\n    <a href="http://localhost:8100/#/trivia" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n</div>\n\n<div style="padding: 40px 40px 10px 40px; display: inline-block; width: 100%"> \n  <h2 style="padding: 0; margin: 0; font-size: 20px; display: inline-block; font-weight: bold;">Games Leaderboard</h2>\n  <a href="http://localhost:8100/#/leaderboard" class="more">More ???</a>\n</div>\n\n<div style="margin:0 40px 0 40px;">\n  <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n    <div style="display: inline-block; font-weight: regular;">1.  App Dev</div>\n    <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">2300</div>\n  </div>\n  <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n    <div style="display: inline-block; font-weight: regular;">2.  Finance</div>\n    <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">2280</div>\n  </div>\n  <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n    <div style="display: inline-block; font-weight: regular;">3.  Legal</div>\n    <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">2010</div>\n  </div>\n  <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n    <div style="display: inline-block; font-weight: regular;">4.  Marketing</div>\n    <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">1943</div>\n  </div>\n  <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n    <div style="display: inline-block; font-weight: regular;">5.  Sales</div>\n    <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">1309</div>\n  </div>\n</div>\n\n<div style="padding: 40px 40px 0 40px; display: inline-block; width: 100%"> \n  <h2 style="padding: 0; margin: 0; font-size: 20px; display: inline-block; font-weight: bold;">Upcoming Events</h2>\n  <a href="http://localhost:8100/#/events" class="more">More ???</a>\n</div>\n\n<div style="padding: 20px 20px 40px 40px; display: block; width: 100%">\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">Game</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="http://localhost:8100/#/trivia" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/hh.png" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">Social</p>\n    <p class="black14">Virtual Happy Hour</p>\n    <p class="gray14">Thr, July 28 at 4 PM</p>\n    <a href="http://localhost:8100/#/trivia" class="greenatag"> <ion-icon name="pricetag"></ion-icon> DS</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/vl.png" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">Social</p>\n    <p class="black14">Virtual Lunch In</p>\n    <p class="gray14">Mon, August 11 at 12 PM</p>\n    <a href="http://localhost:8100/#/trivia" class="greenatag"> <ion-icon name="pricetag"></ion-icon> QA</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/sh.png" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">Game</p>\n    <p class="black14">Zoom Scavenger Hunt</p>\n    <p class="gray14">Fri, Sept 9 at 4 PM</p>\n    <a href="http://localhost:8100/#/trivia" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n</div>\n\n<a href="http://localhost:8100/#/book">\n<img src="assets/img/bookclub.png" style="width: 100%; text-align: center;" /></a>\n\n\n<div style="padding: 40px 40px 20px 40px; display: inline-block; width: 100%"> \n  <h2 style="padding: 0; margin: 0; font-size: 20px; display: inline-block; font-weight: bold;">Social Events Calendar</h2>\n  <a href="http://localhost:8100/#/events" class="more">More ???</a>\n</div>\n\n<img src="assets/img/calendar.png" style="width: 100%; text-align: center;" />\n\n<!-- Ergs -->\n<div style="padding: 40px 40px 0 40px; display: inline-block; width: 100%"> \n  <h2 style="padding: 0; margin: 0; font-size: 20px; display: inline-block; font-weight: bold;">Popular ERGs</h2>\n  <a href="http://localhost:8100/#/erg" class="more">More ???</a>\n</div>\n\n<div style="padding: 0 40px 40px 40px;">\n\n<img src="assets/img/erg3.png" style="width: 100%; margin-top: 20px" />\n<p style="margin-top: 20px;"><strong>Black Resource Utilization Hub</strong> - resource within US Foods for US Foods and for black employees at US Foods... </p>\n<a href="http://localhost:8100/#/win" class="greenLink">Learn more</a> \n    <span class="graycolor">|</span> \n    <a href="http://localhost:8100/#/winevents" class="greenLink">Upcoming Events</a>\n\n\n<img src="assets/img/erg2.png" style="width: 100%; margin-top: 40px" />\n<p style="margin-top: 20px;"><strong>LINK-UP</strong> - mission is to Link Information, Networking & Knowledge (LINK-UP) across the organization to enrich engagement, personal development... </p>\n<a href="http://localhost:8100/#/win" class="greenLink">Learn more</a> \n    <span class="graycolor">|</span> \n    <a href="http://localhost:8100/#/winevents" class="greenLink">Upcoming Events</a>\n    \n<img src="assets/img/erg1.png" style="width: 100%; margin-top: 40px" />\n<p style="margin-top: 20px;"><strong>Women in Network</strong> - founded on the???idea that???bringing women together in community and offering guidance and insight???can help them achieve personal & professional growth... </p>\n<a href="http://localhost:8100/#/win" class="greenLink">Learn more</a> \n    <span class="graycolor">|</span> \n    <a href="http://localhost:8100/#/winevents" class="greenLink">Upcoming Events</a>\n    \n</div>\n\n<!-- SHOP -->\n<div style="padding: 40px 40px 20px 40px; display: inline-block; width: 100%"> \n  <h2 style="padding: 0; margin: 0; font-size: 20px; display: inline-block; font-weight: bold;">Shop US Foods Swag</h2>\n  <a href="http://localhost:8100/#/shop" class="more">More ???</a>\n</div>\n\n<div style="overflow-x:scroll; overflow-y:hidden; white-space:nowrap; width: 100%; margin: 20px 0 40px 0px; display: inline-block;">\n\n\n<div style=" width: 200px; margin-left: 40px; display: inline-block;">\n  <img src="assets/img/swag1.png" />\n  <p class="gray12">Clothing</p>\n  <p class="black14">Orange USF Cap</p>\n  <a href="" class="greenatag">$36.00</a>\n</div>\n\n<div style=" width: 200px; margin-left: 20px; display: inline-block;">\n  <img src="assets/img/swag2.png" />\n  <p class="gray12">Clothing</p>\n  <p class="black14">White USF T-shirt</p>\n  <a href="" class="greenatag">$22.00</a>\n</div>\n\n<div style=" width: 200px; margin-left: 20px; display: inline-block;">\n  <img src="assets/img/swag3.png" />\n  <p class="gray12">Office Supply</p>\n  <p class="black14">Gray USF Notebook</p>\n  <a href="" class="greenatag">$18.00</a>\n</div>\n\n<div style=" width: 200px; margin-left: 20px; margin-right: 40px; display: inline-block;">\n  <img src="assets/img/swag4.png" />\n  <p class="gray12">Clothing</p>\n  <p class="black14">Gray 1-Piece Scarf</p>\n  <a href="" class="greenatag">$36.00</a>\n</div>\n\n</div>\n  </ion-content>\n'/*ion-inline-end:"/Users/AAP6026/usfSocialApp/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ })

});
//# sourceMappingURL=43.js.map