webpackJsonp([23],{

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trivia1aPageModule", function() { return Trivia1aPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trivia1a__ = __webpack_require__(397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Trivia1aPageModule = /** @class */ (function () {
    function Trivia1aPageModule() {
    }
    Trivia1aPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__trivia1a__["a" /* Trivia1aPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trivia1a__["a" /* Trivia1aPage */]),
            ],
        })
    ], Trivia1aPageModule);
    return Trivia1aPageModule;
}());

//# sourceMappingURL=trivia1a.module.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trivia1aPage; });
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
 * Generated class for the Trivia1aPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Trivia1aPage = /** @class */ (function () {
    function Trivia1aPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Trivia1aPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Trivia1aPage');
    };
    Trivia1aPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trivia1a',template:/*ion-inline-start:"/Users/AAP6026/usfSocialApp/src/pages/trivia1a/trivia1a.html"*/'<!--\n  Generated template for the TriviaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="ion-no-border" style="padding: 20px 40px; display: flex;  border-bottom: 1px solid #d8d8d8;">\n  \n  <ion-title style="text-align: center;">Game</ion-title>\n  <a href="http://localhost:8100/#/dashboard" >\n    <img src="assets/img/home.png" style="width: 20px;" />\n  </a>\n\n</ion-header>\n\n<ion-content style="background-color: #ffffff;">\n<img src="assets/img/trivia.jpg" style="width: 100%;" />\n<div style="margin: 40px; padding-bottom: 40px;">\n\n\n\n  Question 1 out of 10: <br /><br />\n\n  <h2 style="padding: 0; margin: 0; font-size: 22px; font-weight: bold;">\n    1. Who is the CEO of<br /> US Foods?\n  </h2><br />\n  <br />\n  <label class="container">Dirk Locascio\n    <input type="checkbox">\n    <span class="checkmark"></span>\n  </label>\n\n  <label class="container">Pietro Satriano\n    <input type="checkbox" checked="checked">\n    <span class="checkmark"></span>\n  </label>\n\n  <label class="container">Matt Nicol\n    <input type="checkbox">\n    <span class="checkmark"></span>\n  </label>\n\n  <h3 style="color: #86AB5E">You are correct!</h3>\n\n  <p style="color: #86AB5E">Pietro Satriano serves as Chairman of the Board, Chief \n  Executive Officer of the Company. From February 2011 \n  to July 2015, Mr. Satriano served as our Chief \n  Merchandising Officer. </p>\n  <a href="http://localhost:8100/#/trivia2" class="buttonLarge2">Next</a>\n</div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/AAP6026/usfSocialApp/src/pages/trivia1a/trivia1a.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Trivia1aPage);
    return Trivia1aPage;
}());

//# sourceMappingURL=trivia1a.js.map

/***/ })

});
//# sourceMappingURL=23.js.map