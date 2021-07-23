webpackJsonp([20],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(354);
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

/***/ 354:
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
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/AAP6026/usfSocialApp/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>dashboard</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: #ffffff;">\n\n  <div style="padding: 40px 40px 20px 40px; display: inline-block; width: 100%"> \n    <h2 style="padding: 0; margin: 0; font-size: 20px; display: inline-block; font-weight: bold;">Featured Events</h2>\n    <a href="http://localhost:8100/#/events" class="more">More →</a>\n  </div>\n\n<div style="overflow-x:scroll; overflow-y:hidden; white-space:nowrap; width: 100%; margin: 0px; display: inline-block;">\n\n\n  <div style=" width: 200px; margin-left: 40px; display: inline-block;">\n    <img src="assets/img/trivia.jpg" />\n    <p class="gray12">Friday, July 21 at 4:00 PM</p>\n    <p class="black14">Trivia Night Summer</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 200px; margin-left: 20px; display: inline-block;">\n    <img src="assets/img/trivia.jpg" />\n    <p class="gray12">Friday, July 21 at 4:00 PM</p>\n    <p class="black14">Trivia Night Summer</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 200px; margin-left: 20px; display: inline-block;">\n    <img src="assets/img/trivia.jpg" />\n    <p class="gray12">Friday, July 21 at 4:00 PM</p>\n    <p class="black14">Trivia Night Summer</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 200px; margin-left: 20px; margin-right: 40px; display: inline-block;">\n    <img src="assets/img/trivia.jpg" />\n    <p class="gray12">Friday, July 21 at 4:00 PM</p>\n    <p class="black14">Trivia Night Summer</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n</div>\n\n<div style="padding: 40px 40px 10px 40px; display: inline-block; width: 100%"> \n  <h2 style="padding: 0; margin: 0; font-size: 20px; display: inline-block; font-weight: bold;">Games Leaderboard</h2>\n  <a href="http://localhost:8100/#/leaderboard" class="more">More →</a>\n</div>\n\n<div style="margin:0 40px 0 40px;">\n  <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n    <div style="display: inline-block; font-weight: regular;">1.  App Dev</div>\n    <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">2300</div>\n  </div>\n  <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n    <div style="display: inline-block; font-weight: regular;">2.  Finance</div>\n    <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">2280</div>\n  </div>\n  <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n    <div style="display: inline-block; font-weight: regular;">3.  Legal</div>\n    <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">2010</div>\n  </div>\n  <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n    <div style="display: inline-block; font-weight: regular;">4.  Marketing</div>\n    <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">1943</div>\n  </div>\n  <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 15px 0;">\n    <div style="display: inline-block; font-weight: regular;">5.  Sales</div>\n    <div style="display: inline-block; float: right;  font-weight: bold; color: #86AB5E;">1309</div>\n  </div>\n</div>\n\n<div style="padding: 40px 40px 0 40px; display: inline-block; width: 100%"> \n  <h2 style="padding: 0; margin: 0; font-size: 20px; display: inline-block; font-weight: bold;">Upcoming Events</h2>\n  <a href="http://localhost:8100/#/events" class="more">More →</a>\n</div>\n\n<div style="padding: 20px 20px 40px 40px; display: block; width: 100%">\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 0px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n</div>\n\n\n<img src="assets/img/bookclub.png" style="width: 100%; text-align: center;" />\n\n\n<div style="padding: 40px 40px 20px 40px; display: inline-block; width: 100%"> \n  <h2 style="padding: 0; margin: 0; font-size: 20px; display: inline-block; font-weight: bold;">Social Events Calendar</h2>\n  <a href="" class="more">More →</a>\n</div>\n\n<img src="assets/img/calendar.png" style="width: 100%; text-align: center;" />\n\n<div style="padding: 40px 40px 0 40px; display: inline-block; width: 100%"> \n  <h2 style="padding: 0; margin: 0; font-size: 20px; display: inline-block; font-weight: bold;">Popular ERGs</h2>\n  <a href="" class="more">More →</a>\n</div>\n\n <div style="padding: 0 40px 40px 40px;">\n\n<p style="margin-top: 40px;"><strong>Black Resource Utilization Hub</strong> - resource within US Foods for US Foods and for black employees at US Foods... </p>\n<a href="" class="greenLink">Learn more</a> <span class="graycolor">|</span> <a href="" class="greenLink">Upcoming Events</a>\n\n<p style="margin-top: 40px;"><strong>Collective Asian Network</strong> - foster networking, professional development, mentoring, and leadership opportunities... </p>\n<a href="" class="greenLink">Learn more</a> <span class="graycolor">|</span> <a href="" class="greenLink">Upcoming Events</a>\n\n<p style="margin-top: 40px;"><strong>Hispanic and Latino ERG</strong> - Unites employees interested in the Hispanic/Latino culture, grow professionally, give back... </p>\n<a href="" class="greenLink">Learn more</a> <span class="graycolor">|</span> <a href="" class="greenLink">Upcoming Events</a> \n\n<p style="margin-top: 40px;"><strong>LINK-UP</strong> - mission is to Link Information, Networking & Knowledge (LINK-UP) across the organization to enrich engagement, personal development... </p>\n<a href="" class="greenLink">Learn more</a> <span class="graycolor">|</span> <a href="" class="greenLink">Upcoming Events</a>\n\n<p style="margin-top: 40px;"><strong>Women in Network</strong> - founded on the idea that bringing women together in community and offering guidance and insight can help them achieve personal & professional growth... </p>\n<a href="" class="greenLink">Learn more</a> <span class="graycolor">|</span> <a href="" class="greenLink">Upcoming Events</a>\n \n</div>\n\n<div style="padding: 40px 40px 20px 40px; display: inline-block; width: 100%"> \n  <h2 style="padding: 0; margin: 0; font-size: 20px; display: inline-block; font-weight: bold;">Shop US Foods Swag</h2>\n  <a href="http://localhost:8100/#/shop" class="more">More →</a>\n</div>\n\n<div style="overflow-x:scroll; overflow-y:hidden; white-space:nowrap; width: 100%; margin: 20px 0 40px 0px; display: inline-block;">\n\n\n<div style=" width: 200px; margin-left: 40px; display: inline-block;">\n  <img src="assets/img/swag1.png" />\n  <p class="gray12">Clothing</p>\n  <p class="black14">Orange USF Cap</p>\n  <a href="" class="greenatag">$36.00</a>\n</div>\n\n<div style=" width: 200px; margin-left: 20px; display: inline-block;">\n  <img src="assets/img/swag2.png" />\n  <p class="gray12">Clothing</p>\n  <p class="black14">White USF T-shirt</p>\n  <a href="" class="greenatag">$22.00</a>\n</div>\n\n<div style=" width: 200px; margin-left: 20px; display: inline-block;">\n  <img src="assets/img/swag3.png" />\n  <p class="gray12">Office Supply</p>\n  <p class="black14">Gray USF Notebook</p>\n  <a href="" class="greenatag">$18.00</a>\n</div>\n\n<div style=" width: 200px; margin-left: 20px; margin-right: 40px; display: inline-block;">\n  <img src="assets/img/swag4.png" />\n  <p class="gray12">Clothing</p>\n  <p class="black14">Gray 1-Piece Scarf</p>\n  <a href="" class="greenatag">$36.00</a>\n</div>\n\n</div>\n  </ion-content>\n'/*ion-inline-end:"/Users/AAP6026/usfSocialApp/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ })

});
//# sourceMappingURL=20.js.map