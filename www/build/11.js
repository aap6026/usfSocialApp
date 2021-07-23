webpackJsonp([11],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/AAP6026/usfSocialApp/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="ion-no-border" style="padding: 20px 40px; display: flex;  border-bottom: 1px solid #d8d8d8;">\n  \n  <a href="http://localhost:8100/#/playersbydepartment">\n    <img src="assets/img/back.png" style="width: 20px; " />\n  </a>\n\n  <ion-title style="text-align: center;">Profile</ion-title>\n\n  <a href="http://localhost:8100/#/dashboard" >\n    <img src="assets/img/home.png" style="width: 20px;" />\n  </a>\n\n</ion-header>\n\n<ion-content style="background-color: #ffffff;">\n  <div style="margin: 40px; padding-bottom: 40px;">\n\n    <img src="assets/img/icon4.png" style="width: 40%; margin: 20px 30%;" />\n\n    <p style="margin: 0; padding:0; width: 100%; text-align: center; font-weight: bold; font-size: 20px;">Ille Sutt</p>\n    <p style="margin: 0; padding:0; width: 100%; text-align: center;">App Dev</p>\n\n    <div style="display: flex; align-items:center; margin-top: 40px;">\n\n      <div style="flex: 1; ">\n        <p style="margin: 0; padding:0; width: 100%; text-align: center; color: #aaaaaa">Score</p>\n        <p style="margin: 0; padding:0; width: 100%; text-align: center; font-weight: bold; font-size: 18px; color: #86AB5E;">120</p>\n\n      </div>\n\n      <div style="flex: 1; border-left: 1px solid #d8d8d8; border-right: 1px solid #d8d8d8;">\n\n        <p style="margin: 0; padding:0; width: 100%; text-align: center; color: #aaaaaa">Prizes</p>\n        <p style="margin: 0; padding:0; width: 100%; text-align: center; font-weight: bold; font-size: 18px; color: #E4673B;">2</p>\n        \n      </div>\n\n      <div style="flex: 1;">\n        <p style="margin: 0; padding:0; width: 100%; text-align: center; color: #aaaaaa">Events Attended</p>\n        <p style="margin: 0; padding:0; width: 100%; text-align: center; font-weight: bold; font-size: 18px; color: #F3BA16;">12</p>\n\n      </div>\n    \n    \n    \n    </div>\n\n    <div style="padding: 40px 0px 0 0px; display: inline-block; width: 100%"> \n      <h2 style="padding: 0; margin: 0; font-size: 20px; display: inline-block; font-weight: bold;">Past 3 Events</h2>\n    </div>\n    \n    <div style="padding: 20px 0px 40px 0px; display: block; width: 100%">\n    \n      <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n        <img src="assets/img/demo.png" style="height: 75px; float: left; margin-right: 20px;" />\n        <p class="gray14">Sip & Learn</p>\n        <p class="black14">Cooking Demo</p>\n        <p class="gray14">Fri, June 21 at 4 PM</p>\n        <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> Company Wide</a>\n      </div>\n    \n      <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n        <img src="assets/img/hh.png" style="height: 75px; float: left; margin-right: 20px;" />\n        <p class="gray14">Social Gathering</p>\n        <p class="black14">Happy Hour</p>\n        <p class="gray14">Fri, May 21 at 4 PM</p>\n        <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> App Dev</a>\n      </div>\n\n      <div style=" width: 100%; margin-bottom: 0px; display:block; height: 75px;">\n        <img src="assets/img/trivia.jpg" style="height: 75px; float: left; margin-right: 20px;" />\n        <p class="gray14">Game</p>\n        <p class="black14">Spring Trivia</p>\n        <p class="gray14">Fri, May 21 at 4 PM</p>\n        <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> Digital Solutions</a>\n      </div>\n    \n     \n    \n    </div>\n\n    <div style="padding: 0px 0px 0 0px; display: inline-block; width: 100%"> \n      <h2 style="padding: 0; margin: 0; font-size: 20px; display: inline-block; font-weight: bold;">Prizes Won</h2>\n    </div>\n    \n    <div style="padding: 20px 0px 40px 0px; display: block; width: 100%">\n    \n      <div style=" width: 100%; margin-bottom: 20px; display:block; height: 75px;">\n        <img src="assets/img/swag1.png" style="height: 75px; float: left; margin-right: 20px;" />\n        <p class="gray14">Game</p>\n        <p class="black14">Scavenger Hunt</p>\n        <p class="gray14">Fri, June 21 at 4 PM</p>\n        <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> 1st Place</a>\n      </div>\n    \n      <div style=" width: 100%; margin-bottom: 0px; display:block; height: 75px;">\n        <img src="assets/img/swag2.png" style="height: 75px; float: left; margin-right: 20px;" />\n        <p class="gray14">Game</p>\n        <p class="black14">Spring Trivia</p>\n        <p class="gray14">Fri, May 21 at 4 PM</p>\n        <a href="" class="greenatag"> <ion-icon name="pricetag"></ion-icon> 2nd Place</a>\n      </div>\n    \n     \n    \n    </div>\n\n\n\n    <div style="padding: 0px 0px 20px 0px; display: inline-block; width: 100%"> \n      <h2 style="padding: 0; margin: 0; font-size: 20px; display: inline-block; font-weight: bold;">Hobbies</h2>\n      <a href="http://localhost:8100/#/profile" class="more">+ Add</a>\n    </div>\n    \n    <div style="padding: 0px 0px 0px 0px; display: block; width: 100%">\n    \n      Gardening, folk dance and all kind of crafts.\n\n    </div>\n\n    <div style="padding: 40px 0px 20px 0px; display: inline-block; width: 100%"> \n      <h2 style="padding: 0; margin: 0; font-size: 20px; display: inline-block; font-weight: bold;">Contact</h2>\n    </div>\n    \n    <div style="padding: 0px 0px 0px 0px; display: block; width: 100%">\n    \n      Email: <a style="color: #86AB5E; ">ille.sutt@hotmail.com</a>\n\n    </div>\n\n\n<br />\n\n    <a href="http://localhost:8100/#/start" class="buttonLarge2">LOGOUT</a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/AAP6026/usfSocialApp/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=11.js.map