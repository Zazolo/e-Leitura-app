(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rank-rank-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/rank/rank.page.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/rank/rank.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>rank</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tabs/rank/rank-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/tabs/rank/rank-routing.module.ts ***!
  \**************************************************/
/*! exports provided: RankPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankPageRoutingModule", function() { return RankPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rank_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rank.page */ "./src/app/tabs/rank/rank.page.ts");




const routes = [
    {
        path: '',
        component: _rank_page__WEBPACK_IMPORTED_MODULE_3__["RankPage"]
    }
];
let RankPageRoutingModule = class RankPageRoutingModule {
};
RankPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RankPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/rank/rank.module.ts":
/*!******************************************!*\
  !*** ./src/app/tabs/rank/rank.module.ts ***!
  \******************************************/
/*! exports provided: RankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankPageModule", function() { return RankPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rank_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rank-routing.module */ "./src/app/tabs/rank/rank-routing.module.ts");
/* harmony import */ var _rank_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rank.page */ "./src/app/tabs/rank/rank.page.ts");







let RankPageModule = class RankPageModule {
};
RankPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rank_routing_module__WEBPACK_IMPORTED_MODULE_5__["RankPageRoutingModule"]
        ],
        declarations: [_rank_page__WEBPACK_IMPORTED_MODULE_6__["RankPage"]]
    })
], RankPageModule);



/***/ }),

/***/ "./src/app/tabs/rank/rank.page.scss":
/*!******************************************!*\
  !*** ./src/app/tabs/rank/rank.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvcmFuay9yYW5rLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tabs/rank/rank.page.ts":
/*!****************************************!*\
  !*** ./src/app/tabs/rank/rank.page.ts ***!
  \****************************************/
/*! exports provided: RankPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankPage", function() { return RankPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RankPage = class RankPage {
    constructor() { }
    ngOnInit() {
    }
};
RankPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rank',
        template: __webpack_require__(/*! raw-loader!./rank.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/rank/rank.page.html"),
        styles: [__webpack_require__(/*! ./rank.page.scss */ "./src/app/tabs/rank/rank.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RankPage);



/***/ })

}]);
//# sourceMappingURL=rank-rank-module-es2015.js.map