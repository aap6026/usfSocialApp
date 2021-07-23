webpackJsonp([18],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageModule", function() { return EventsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventsPageModule = /** @class */ (function () {
    function EventsPageModule() {
    }
    EventsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__events__["a" /* EventsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__events__["a" /* EventsPage */]),
            ],
        })
    ], EventsPageModule);
    return EventsPageModule;
}());

//# sourceMappingURL=events.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
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
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventsPage = /** @class */ (function () {
    function EventsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsPage');
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/Users/AAP6026/usfSocialApp/src/pages/events/events.html"*/'<!--\n  Generated template for the LeaderboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="ion-no-border" style="padding: 20px 40px; display: flex;  border-bottom: 1px solid #d8d8d8;">\n  <a href="http://localhost:8100/#/dashboard">\n    <img src="assets/img/back.png" style="width: 20px; " />\n  </a>\n  <ion-title style="text-align: center;">Upcoming Events</ion-title>\n  <a href="http://localhost:8100/#/dashboard" >\n    <img src="assets/img/home.png" style="width: 20px;" />\n  </a>\n\n</ion-header>\n\n\n<ion-content style="background-color: #ffffff;">\n\n\n<div style="padding: 20px 40px 0 40px; display: inline-block; width: 100%"> \n  <h2 style="padding: 0; margin: 0; font-size: 20px; display: inline-block; font-weight: bold;">July 2021</h2>\n</div>\n\n<div style="padding: 20px 20px 40px 40px; display: block; width: 100%">\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 0px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n</div>\n\n<div style="padding: 0px 40px 0 40px; display: inline-block; width: 100%"> \n  <h2 style="padding: 0; margin: 0; font-size: 20px; display: inline-block; font-weight: bold;">August 2021</h2>\n</div>\n\n<div style="padding: 20px 20px 40px 40px; display: block; width: 100%">\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 0px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n</div>\n\n<div style="padding: 0px 40px 0 40px; display: inline-block; width: 100%"> \n  <h2 style="padding: 0; margin: 0; font-size: 20px; display: inline-block; font-weight: bold;">September 2021</h2>\n</div>\n\n<div style="padding: 20px 20px 40px 40px; display: block; width: 100%">\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n  <div style=" width: 100%; margin-bottom: 0px; display:block; height: 75px;">\n    <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n    <p class="gray14">GAME</p>\n    <p class="black14">Summer Trivia Night</p>\n    <p class="gray14">Fri, July 21 at 4 PM</p>\n    <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n  </div>\n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/AAP6026/usfSocialApp/src/pages/events/events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ })

});
//# sourceMappingURL=18.js.map