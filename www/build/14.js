webpackJsonp([14],{

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trivia6PageModule", function() { return Trivia6PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trivia6__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Trivia6PageModule = /** @class */ (function () {
    function Trivia6PageModule() {
    }
    Trivia6PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__trivia6__["a" /* Trivia6Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trivia6__["a" /* Trivia6Page */]),
            ],
        })
    ], Trivia6PageModule);
    return Trivia6PageModule;
}());

//# sourceMappingURL=trivia6.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trivia6Page; });
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
 * Generated class for the Trivia6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Trivia6Page = /** @class */ (function () {
    function Trivia6Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Trivia6Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Trivia6Page');
    };
    Trivia6Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trivia6',template:/*ion-inline-start:"/Users/AAP6026/usfSocialApp/src/pages/trivia6/trivia6.html"*/'<!--\n  Generated template for the TriviaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="ion-no-border" style="padding: 20px 40px; display: flex;  border-bottom: 1px solid #d8d8d8;">\n  \n \n  <ion-title style="text-align: center;">Game</ion-title>\n  <a href="http://localhost:8100/#/dashboard" >\n    <img src="assets/img/home.png" style="width: 20px;" />\n  </a>\n\n</ion-header>\n\n<ion-content style="background-color: #ffffff;">\n<img src="assets/img/trivia.jpg" style="width: 100%;" />\n<div style="margin: 40px; padding-bottom: 40px;">\n\n\n\n  Question 6 out of 10: <br /><br />\n\n  <h2 style="padding: 0; margin: 0; font-size: 22px; font-weight: bold;">\n    6. Which country produces the most coffee in the world? \n  </h2><br />\n  <br />\n  <label class="container">Colombia \n    <input type="checkbox">\n    <span class="checkmark"></span>\n  </label>\n\n  <label class="container">Brazil\n    <input type="checkbox">\n    <span class="checkmark"></span>\n  </label>\n\n  <label class="container">Vietnam \n    <input type="checkbox">\n    <span class="checkmark"></span>\n  </label>\n\n  <a href="http://localhost:8100/#/trivia6a" class="buttonLarge2">Next</a>\n</div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/AAP6026/usfSocialApp/src/pages/trivia6/trivia6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Trivia6Page);
    return Trivia6Page;
}());

//# sourceMappingURL=trivia6.js.map

/***/ })

});
//# sourceMappingURL=14.js.map