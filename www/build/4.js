webpackJsonp([4],{

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinPageModule", function() { return WinPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__win__ = __webpack_require__(415);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WinPageModule = /** @class */ (function () {
    function WinPageModule() {
    }
    WinPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__win__["a" /* WinPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__win__["a" /* WinPage */]),
            ],
        })
    ], WinPageModule);
    return WinPageModule;
}());

//# sourceMappingURL=win.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WinPage; });
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
 * Generated class for the WinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WinPage = /** @class */ (function () {
    function WinPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WinPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WinPage');
    };
    WinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-win',template:/*ion-inline-start:"/Users/AAP6026/usfSocialApp/src/pages/win/win.html"*/'<!--\n  Generated template for the WinPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="ion-no-border" style="padding: 20px 40px; display: flex;  border-bottom: 1px solid #d8d8d8;">\n  \n  <a href="http://localhost:8100/#/erg">\n    <img src="assets/img/back.png" style="width: 20px; " />\n  </a>\n  <ion-title style="text-align: center;">WIN</ion-title>\n  <a href="http://localhost:8100/#/dashboard" >\n    <img src="assets/img/home.png" style="width: 20px;" />\n  </a>\n\n</ion-header>\n<ion-content style="background-color: #ffffff;">\n\n  <div style="padding: 40px 40px 20px 40px; display: inline-block; width: 100%"> \n    <h2 style="padding: 0; margin: 0; font-size: 20px; display: inline-block; font-weight: bold;">Women in Network (WIN):</h2>\n  </div> \n\n  <div style="padding:0px 40px 40px 40px;">\n\n    <img src="assets/img/erg1.png" style="width: 100%; margin-top: 0px" />\n    <p style="margin-top: 20px;"><strong>Women in Network</strong> - founded on the idea that \n      bringing women together in community and offering guidance and insight can help them \n      achieve personal and professional growth as well as contribute to improved gender equity. \n    </p>\n\n    <h2 style="padding: 0; margin: 30px 0; font-size: 20px; display: inline-block; font-weight: bold;">Meet WIN Leaders:</h2>\n  \n    \n      <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n        <img src="assets/img/win1.png" style="border-radius: 50px; height: 75px; float: left; margin-right: 20px;" />\n\n        <p class="black14">Kristen Anthony</p>\n        <p class="gray14">Sr. Campus Recruiter – Talent Acquisition</p>\n        <a href="" class="greenatag2">WIN President</a>\n      </div>\n\n      <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n        <img src="assets/img/win4.png" style="border-radius: 50px; height: 75px; float: left; margin-right: 20px;" />\n\n        <p class="black14">Laura Vaughn</p>\n        <p class="gray14">USF Brands Chef</p>\n        <a href="" class="greenatag2">WIN Vice President</a>\n      </div>\n\n      <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n        <img src="assets/img/win2.png" style="border-radius: 50px; height: 75px; float: left; margin-right: 20px;" />\n\n        <p class="black14">Jane Bullinger</p>\n        <p class="gray14">National Sales Field Leader – Central Region</p>\n        <a href="" class="greenatag2">Secretary</a>\n      </div>\n\n      <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n        <img src="assets/img/win3.png" style="border-radius: 50px; height: 75px; float: left; margin-right: 20px;" />\n\n        <p class="black14">Garima Sharma</p>\n        <p class="gray14">Director of Replenishment - Produce</p>\n        <a href="" class="greenatag2">Treasurer</a>\n      </div>\n\n     <br />\n    \n      \n    \n      \n    \n      \n    \n      \n    \n      \n    \n\n    <a href="http://localhost:8100/#/winevents" class="greenLink">Upcoming Events →</a>\n  \n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/AAP6026/usfSocialApp/src/pages/win/win.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], WinPage);
    return WinPage;
}());

//# sourceMappingURL=win.js.map

/***/ })

});
//# sourceMappingURL=4.js.map