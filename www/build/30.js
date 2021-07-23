webpackJsonp([30],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPageModule", function() { return ShopPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop__ = __webpack_require__(387);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShopPageModule = /** @class */ (function () {
    function ShopPageModule() {
    }
    ShopPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shop__["a" /* ShopPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shop__["a" /* ShopPage */]),
            ],
        })
    ], ShopPageModule);
    return ShopPageModule;
}());

//# sourceMappingURL=shop.module.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopPage; });
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
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShopPage = /** @class */ (function () {
    function ShopPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShopPage');
    };
    ShopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shop',template:/*ion-inline-start:"/Users/AAP6026/usfSocialApp/src/pages/shop/shop.html"*/'<!--\n  Generated template for the ShopPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="ion-no-border" style="padding: 20px 40px; display: flex;  border-bottom: 1px solid #d8d8d8;">\n  \n  <a href="http://localhost:8100/#/dashboard">\n    <img src="assets/img/back.png" style="width: 20px; " />\n  </a>\n  <ion-title style="text-align: center;">Shop</ion-title>\n  <a href="http://localhost:8100/#/dashboard" >\n    <img src="assets/img/home.png" style="width: 20px;" />\n  </a>\n\n</ion-header>\n\n<ion-content style="background-color: #ffffff;">\n\n  <div style="padding: 40px 20px 40px 40px; display: block; width: 100%">\n\n    <div style=" width: 100%; margin-bottom: 30px; display:block; height: 75px;">\n      <img src="assets/img/swag1.png" style="height: 75px; float: left; margin-right: 20px;" />\n      <p class="gray14">Cloting</p>\n      <p class="black14">Orange USF Cap</p>\n      <a href="" class="greenatag2">$36.00</a>\n    </div>\n  \n    <div style=" width: 100%; margin-bottom: 30px; display:block; height: 75px;">\n      <img src="assets/img/swag2.png" style="height: 75px; float: left; margin-right: 20px;" />\n      <p class="gray14">Cloting</p>\n      <p class="black14">White USF T-shirt</p>\n      <a href="" class="greenatag2">$ 18.00</a>\n    </div>\n  \n    <div style=" width: 100%; margin-bottom: 30px; display:block; height: 75px;">\n      <img src="assets/img/swag3.png" style="height: 75px; float: left; margin-right: 20px;" />\n      <p class="gray14">Office Supply</p>\n      <p class="black14">Gray USF Notebook</p>\n      <a href="" class="greenatag2">$18.00</a>\n    </div>\n\n    <div style=" width: 100%; margin-bottom: 30px; display:block; height: 75px;">\n      <img src="assets/img/swag4.png" style="height: 75px; float: left; margin-right: 20px;" />\n      <p class="gray14">Clothing</p>\n      <p class="black14">Gray 1-Piece Scarf</p>\n      <a href="" class="greenatag2">$36.00</a>\n    </div>\n\n    <div style=" width: 100%; margin-bottom: 30px; display:block; height: 75px;">\n      <img src="assets/img/swag5.png" style="height: 75px; float: left; margin-right: 20px;" />\n      <p class="gray14">Bags</p>\n      <p class="black14">USG Backback</p>\n      <a href="" class="greenatag2">$64.00</a>\n    </div>\n\n    <div style=" width: 100%; margin-bottom: 30px; display:block; height: 75px;">\n      <img src="assets/img/swag6.png" style="height: 75px; float: left; margin-right: 20px;" />\n      <p class="gray14">Bags</p>\n      <p class="black14">USF Cooler Bag</p>\n      <a href="" class="greenatag2">$42.00</a>\n    </div>\n\n    <a href="http://localhost:8100/#/shop" class="buttonLarge2">LOAD MORE</a>\n  \n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/AAP6026/usfSocialApp/src/pages/shop/shop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ShopPage);
    return ShopPage;
}());

//# sourceMappingURL=shop.js.map

/***/ })

});
//# sourceMappingURL=30.js.map