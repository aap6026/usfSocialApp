webpackJsonp([36],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(386);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
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
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/AAP6026/usfSocialApp/src/pages/menu/menu.html"*/'<ion-header class="ion-no-border" style="padding: 10px 40px; display: flex;  border-bottom: 1px solid #d8d8d8;">\n  \n  <a href="http://localhost:8100/#/profile" style="margin-right: 15px; width: 45px;" >\n    <img src="assets/img/icon4.png" />\n  </a>\n\n  <div style="margin-top: 9px;">\n  <strong>Ille Sutt</strong> (App Dev)<br />\n  Points: 120\n  </div>\n\n  <div style="margin-left: auto; margin-top: 16px;">\n    <a href="http://localhost:8100/#/dashboard" >\n      <img src="assets/img/close.png" style="width: 20px;" />\n    </a>\n\n  </div>\n  \n\n\n</ion-header>\n\n<ion-content style="background-color: #ffffff;">\n\n  <div style="margin:40px;">\n    <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 25px 0;">\n      <a href="http://localhost:8100/#/events">\n        Upcoming Events\n      </a>\n      \n    </div>\n    <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 25px 0;">\n      <a href="http://localhost:8100/#/leaderboard">\n        Games Leaderboard\n      </a>\n      \n    </div>\n    <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 25px 0;">\n      <a href="http://localhost:8100/#/book">\n        Book Club\n      </a>\n      \n    </div>\n\n    <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 25px 0;">\n      <a href="http://localhost:8100/#/erg">\n        US Foods Employee Resource Groups (ERGs)\n      </a>\n    \n    </div>\n    <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 25px 0;">\n      <a href="http://localhost:8100/#/shop">\n        Shop US Foods Swag</div>\n      </a>\n    <div style="font-size: 14px; border-bottom: 1px solid #86AB5E; display:block; padding: 25px 0;">\n      <a href="http://localhost:8100/#/start">\n        Logout\n      </a>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/AAP6026/usfSocialApp/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=36.js.map