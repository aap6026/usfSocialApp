webpackJsonp([41],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErgPageModule", function() { return ErgPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__erg__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ErgPageModule = /** @class */ (function () {
    function ErgPageModule() {
    }
    ErgPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__erg__["a" /* ErgPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__erg__["a" /* ErgPage */]),
            ],
        })
    ], ErgPageModule);
    return ErgPageModule;
}());

//# sourceMappingURL=erg.module.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErgPage; });
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
 * Generated class for the ErgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ErgPage = /** @class */ (function () {
    function ErgPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ErgPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ErgPage');
    };
    ErgPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-erg',template:/*ion-inline-start:"/Users/AAP6026/usfSocialApp/src/pages/erg/erg.html"*/'<!--\n  Generated template for the ErgPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="ion-no-border" style="padding: 20px 40px; display: flex;  border-bottom: 1px solid #d8d8d8;">\n  \n  <a href="http://localhost:8100/#/dashboard">\n    <img src="assets/img/back.png" style="width: 20px; " />\n  </a>\n  <ion-title style="text-align: center;">ERGs</ion-title>\n  <a href="http://localhost:8100/#/dashboard" >\n    <img src="assets/img/home.png" style="width: 20px;" />\n  </a>\n\n</ion-header>\n<ion-content style="background-color: #ffffff;">\n\n<div style="padding: 40px 40px 20px 40px; display: inline-block; width: 100%"> \n  <h2 style="padding: 0; margin: 0; font-size: 20px; display: inline-block; font-weight: bold;">US Foods Employee <br />Resource Groups (ERGs):</h2>\n</div> \n\n<div style="padding:0px 40px 40px 40px;">\n\n  <img src="assets/img/erg4.png" style="width: 100%; margin-top: 20px" />\n  <p style="margin-top: 20px;"><strong>ADAPT</strong> – will partner with US Foods to advance awareness of people identifying as having a visible/invisible disability... </p>\n  \n  <a href="http://localhost:8100/#/win" class="greenLink">Learn more</a> \n    <span class="graycolor">|</span> \n    <a href="http://localhost:8100/#/winevents" class="greenLink">Upcoming Events</a>\n\n  \n  <img src="assets/img/erg3.png" style="width: 100%; margin-top: 40px" />\n  <p style="margin-top: 20px;"><strong>Black Resource Utilization Hub</strong> - resource within US Foods for US Foods and for black employees at US Foods... </p>\n  <a href="http://localhost:8100/#/win" class="greenLink">Learn more</a> \n    <span class="graycolor">|</span> \n    <a href="http://localhost:8100/#/winevents" class="greenLink">Upcoming Events</a>\n\n  <p style="margin-top: 40px;"><strong>Collective Asian Network</strong> - foster networking, professional development, mentoring, and leadership opportunities...</p>\n  <a href="http://localhost:8100/#/win" class="greenLink">Learn more</a> \n    <span class="graycolor">|</span> \n    <a href="http://localhost:8100/#/winevents" class="greenLink">Upcoming Events</a>\n\n  <p style="margin-top: 40px;"><strong>Hispanic and Latino ERG</strong> - Unites employees interested in the Hispanic/Latino culture, grow professionally... </p>\n  <a href="http://localhost:8100/#/win" class="greenLink">Learn more</a> \n    <span class="graycolor">|</span> \n    <a href="http://localhost:8100/#/winevents" class="greenLink">Upcoming Events</a>\n\n\n<img src="assets/img/erg2.png" style="width: 100%; margin-top: 40px" />\n<p style="margin-top: 20px;"><strong>LINK-UP</strong> - mission is to Link Information, Networking & Knowledge (LINK-UP) across the organization to enrich engagement, personal development... </p>\n<a href="http://localhost:8100/#/win" class="greenLink">Learn more</a> \n<span class="graycolor">|</span> \n<a href="http://localhost:8100/#/winevents" class="greenLink">Upcoming Events</a>\n\n<p style="margin-top: 40px;"><strong>MERGE (Multigenerational Empowerment Resource Group for Employees) </strong> – Communications channel for associates... </p>\n    <a href="http://localhost:8100/#/win" class="greenLink">Learn more</a> \n    <span class="graycolor">|</span> \n    <a href="http://localhost:8100/#/winevents" class="greenLink">Upcoming Events</a>  \n\n<img src="assets/img/erg5.png" style="width: 100%; margin-top: 40px" />\n<p style="margin-top: 20px;"><strong>Pride Alliance</strong> – all-inclusive group of individuals who identify as LGBTQIA+ and Supporters/Allies who will act as a strategic partner within US Foods... </p>\n  <a href="http://localhost:8100/#/win" class="greenLink">Learn more</a> \n  <span class="graycolor">|</span> \n  <a href="http://localhost:8100/#/winevents" class="greenLink">Upcoming Events</a>\n\n  <p style="margin-top: 40px;"><strong>Those Who Serve-Military ERG</strong> - Catalyst to enhance the engagement level, professional experiences, and personal development of our members and the US Foods community.  </p>\n    <a href="http://localhost:8100/#/win" class="greenLink">Learn more</a> \n    <span class="graycolor">|</span> \n    <a href="http://localhost:8100/#/winevents" class="greenLink">Upcoming Events</a>\n\n  <img src="assets/img/erg1.png" style="width: 100%; margin-top: 40px" />\n  <p style="margin-top: 20px;"><strong>Women in Network</strong> - founded on the idea that bringing women together in community and offering guidance and insight can help them achieve personal & professional growth... </p>\n    <a href="http://localhost:8100/#/win" class="greenLink">Learn more</a> \n    <span class="graycolor">|</span> \n    <a href="http://localhost:8100/#/winevents" class="greenLink">Upcoming Events</a>\n   \n</div>\n\n</ion-content>'/*ion-inline-end:"/Users/AAP6026/usfSocialApp/src/pages/erg/erg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ErgPage);
    return ErgPage;
}());

//# sourceMappingURL=erg.js.map

/***/ })

});
//# sourceMappingURL=41.js.map