(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["criar-paragrafo-criar-paragrafo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/criar-paragrafo/criar-paragrafo.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/criar-paragrafo/criar-paragrafo.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>criar-paragrafo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/criar-paragrafo/criar-paragrafo-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/criar-paragrafo/criar-paragrafo-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CriarParagrafoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarParagrafoPageRoutingModule", function() { return CriarParagrafoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _criar_paragrafo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./criar-paragrafo.page */ "./src/app/criar-paragrafo/criar-paragrafo.page.ts");




const routes = [
    {
        path: '',
        component: _criar_paragrafo_page__WEBPACK_IMPORTED_MODULE_3__["CriarParagrafoPage"]
    }
];
let CriarParagrafoPageRoutingModule = class CriarParagrafoPageRoutingModule {
};
CriarParagrafoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CriarParagrafoPageRoutingModule);



/***/ }),

/***/ "./src/app/criar-paragrafo/criar-paragrafo.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/criar-paragrafo/criar-paragrafo.module.ts ***!
  \***********************************************************/
/*! exports provided: CriarParagrafoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarParagrafoPageModule", function() { return CriarParagrafoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _criar_paragrafo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./criar-paragrafo-routing.module */ "./src/app/criar-paragrafo/criar-paragrafo-routing.module.ts");
/* harmony import */ var _criar_paragrafo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./criar-paragrafo.page */ "./src/app/criar-paragrafo/criar-paragrafo.page.ts");







let CriarParagrafoPageModule = class CriarParagrafoPageModule {
};
CriarParagrafoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _criar_paragrafo_routing_module__WEBPACK_IMPORTED_MODULE_5__["CriarParagrafoPageRoutingModule"]
        ],
        declarations: [_criar_paragrafo_page__WEBPACK_IMPORTED_MODULE_6__["CriarParagrafoPage"]]
    })
], CriarParagrafoPageModule);



/***/ }),

/***/ "./src/app/criar-paragrafo/criar-paragrafo.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/criar-paragrafo/criar-paragrafo.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyaWFyLXBhcmFncmFmby9jcmlhci1wYXJhZ3JhZm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/criar-paragrafo/criar-paragrafo.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/criar-paragrafo/criar-paragrafo.page.ts ***!
  \*********************************************************/
/*! exports provided: CriarParagrafoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarParagrafoPage", function() { return CriarParagrafoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CriarParagrafoPage = class CriarParagrafoPage {
    constructor() { }
    ngOnInit() {
    }
};
CriarParagrafoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-criar-paragrafo',
        template: __webpack_require__(/*! raw-loader!./criar-paragrafo.page.html */ "./node_modules/raw-loader/index.js!./src/app/criar-paragrafo/criar-paragrafo.page.html"),
        styles: [__webpack_require__(/*! ./criar-paragrafo.page.scss */ "./src/app/criar-paragrafo/criar-paragrafo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CriarParagrafoPage);



/***/ })

}]);
//# sourceMappingURL=criar-paragrafo-criar-paragrafo-module-es2015.js.map