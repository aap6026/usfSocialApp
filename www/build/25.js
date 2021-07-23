webpackJsonp([25],{

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trivia10aPageModule", function() { return Trivia10aPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trivia10a__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Trivia10aPageModule = /** @class */ (function () {
    function Trivia10aPageModule() {
    }
    Trivia10aPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__trivia10a__["a" /* Trivia10aPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trivia10a__["a" /* Trivia10aPage */]),
            ],
        })
    ], Trivia10aPageModule);
    return Trivia10aPageModule;
}());

//# sourceMappingURL=trivia10a.module.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trivia10aPage; });
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
 * Generated class for the Trivia10aPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Trivia10aPage = /** @class */ (function () {
    function Trivia10aPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Trivia10aPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Trivia10aPage');
    };
    Trivia10aPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trivia10a',template:/*ion-inline-start:"/Users/AAP6026/usfSocialApp/src/pages/trivia10a/trivia10a.html"*/'<!--\n  Generated template for the TriviaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="ion-no-border" style="padding: 20px 40px; display: flex;  border-bottom: 1px solid #d8d8d8;">\n  \n \n  <ion-title style="text-align: center;">Game</ion-title>\n  <a href="http://localhost:8100/#/dashboard" >\n    <img src="assets/img/home.png" style="width: 20px;" />\n  </a>\n\n</ion-header>\n\n<ion-content style="background-color: #ffffff;">\n<img src="assets/img/trivia.jpg" style="width: 100%;" />\n<div style="margin: 40px; padding-bottom: 40px;">\n\n\n\n  Question 10 out of 10: <br /><br />\n\n  <h2 style="padding: 0; margin: 0; font-size: 22px; font-weight: bold;">\n    10. What is the smallest country in the world? \n  </h2><br />\n  <br />\n  <label class="container">Monaco \n    <input type="checkbox">\n    <span class="checkmark"></span>\n  </label>\n\n  <label class="container">Vatican City \n    <input type="checkbox" checked="checked">\n    <span class="checkmark"></span>\n  </label>\n\n  <label class="container">Gibraltar \n    <input type="checkbox">\n    <span class="checkmark"></span>\n  </label>\n\n  <h3 style="color: #86AB5E">You are correct!</h3>\n\n  <p style="color: #86AB5E">Vatican City - 0.17 square miles. </p>\n\n  <a href="http://localhost:8100/#/trivia11" class="buttonLarge2">Next</a>\n</div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/AAP6026/usfSocialApp/src/pages/trivia10a/trivia10a.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Trivia10aPage);
    return Trivia10aPage;
}());

//# sourceMappingURL=trivia10a.js.map

/***/ })

});
//# sourceMappingURL=25.js.map