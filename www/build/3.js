webpackJsonp([3],{

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WineventsPageModule", function() { return WineventsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__winevents__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WineventsPageModule = /** @class */ (function () {
    function WineventsPageModule() {
    }
    WineventsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__winevents__["a" /* WineventsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__winevents__["a" /* WineventsPage */]),
            ],
        })
    ], WineventsPageModule);
    return WineventsPageModule;
}());

//# sourceMappingURL=winevents.module.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WineventsPage; });
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
 * Generated class for the WineventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WineventsPage = /** @class */ (function () {
    function WineventsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WineventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WineventsPage');
    };
    WineventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-winevents',template:/*ion-inline-start:"/Users/AAP6026/usfSocialApp/src/pages/winevents/winevents.html"*/'<ion-header class="ion-no-border" style="padding: 20px 40px; display: flex;  border-bottom: 1px solid #d8d8d8;">\n  \n  <a href="http://localhost:8100/#/win">\n    <img src="assets/img/back.png" style="width: 20px; " />\n  </a>\n  <ion-title style="text-align: center;">WIN Events</ion-title>\n  <a href="http://localhost:8100/#/dashboard" >\n    <img src="assets/img/home.png" style="width: 20px;" />\n  </a>\n\n</ion-header>\n<ion-content style="background-color: #ffffff;">\n\n\n  <div style="padding:40px;">\n\n    <img src="assets/img/erg1.png" style="width: 100%; margin-top: 0px" />\n    <p style="margin-top: 20px;"><strong>Women in Network</strong> - founded on the idea that \n      bringing women together in community...\n    </p>\n    <a href="http://localhost:8100/#/win" class="greenLink">Learn More →</a>\n\n    <h2 style="padding: 0; margin: 30px 0; font-size: 20px; display: inline-block; font-weight: bold;">Upcoming WIN Events:</h2>\n  \n    \n      <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n        <img src="assets/img/win11.png" style="height: 75px; float: left; margin-right: 20px;" />\n        <p class="gray14">Fri, August 23 at 1 pm</p>\n        <p class="black14">Women In Innovation </p>\n     \n        <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon>Speaker Series</a>\n      </div>\n\n      <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n        <img src="assets/img/win12.png" style="height: 75px; float: left; margin-right: 20px;" />\n        <p class="gray14">Mon, Sept 15 at 1 pm</p>\n        <p class="black14">The Confidence Code </p>\n       \n        <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon>Podcast</a>\n      </div>\n\n      <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n        <img src="assets/img/win13.png" style="height: 75px; float: left; margin-right: 20px;" />\n        <p class="gray14">Mon, Oct 11 at 1 pm</p>\n        <p class="black14">How to Inspire a Change</p>\n        \n        <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon>Speaker Series</a>\n      </div>\n\n      \n      \n    \n      \n    \n      \n      <a href="http://localhost:8100/#/winevents" class="buttonLarge2">LOAD MORE</a>\n      \n    \n  \n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/AAP6026/usfSocialApp/src/pages/winevents/winevents.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], WineventsPage);
    return WineventsPage;
}());

//# sourceMappingURL=winevents.js.map

/***/ })

});
//# sourceMappingURL=3.js.map