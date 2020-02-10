(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["historias-historias-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/historias/historias.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/historias/historias.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>historias</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tabs/historias/historias-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/tabs/historias/historias-routing.module.ts ***!
  \************************************************************/
/*! exports provided: HistoriasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriasPageRoutingModule", function() { return HistoriasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _historias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./historias.page */ "./src/app/tabs/historias/historias.page.ts");




const routes = [
    {
        path: '',
        component: _historias_page__WEBPACK_IMPORTED_MODULE_3__["HistoriasPage"]
    }
];
let HistoriasPageRoutingModule = class HistoriasPageRoutingModule {
};
HistoriasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistoriasPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/historias/historias.module.ts":
/*!****************************************************!*\
  !*** ./src/app/tabs/historias/historias.module.ts ***!
  \****************************************************/
/*! exports provided: HistoriasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriasPageModule", function() { return HistoriasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _historias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./historias-routing.module */ "./src/app/tabs/historias/historias-routing.module.ts");
/* harmony import */ var _historias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./historias.page */ "./src/app/tabs/historias/historias.page.ts");







let HistoriasPageModule = class HistoriasPageModule {
};
HistoriasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _historias_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoriasPageRoutingModule"]
        ],
        declarations: [_historias_page__WEBPACK_IMPORTED_MODULE_6__["HistoriasPage"]]
    })
], HistoriasPageModule);



/***/ }),

/***/ "./src/app/tabs/historias/historias.page.scss":
/*!****************************************************!*\
  !*** ./src/app/tabs/historias/historias.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvaGlzdG9yaWFzL2hpc3Rvcmlhcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tabs/historias/historias.page.ts":
/*!**************************************************!*\
  !*** ./src/app/tabs/historias/historias.page.ts ***!
  \**************************************************/
/*! exports provided: HistoriasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriasPage", function() { return HistoriasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HistoriasPage = class HistoriasPage {
    constructor() { }
    ngOnInit() {
    }
};
HistoriasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-historias',
        template: __webpack_require__(/*! raw-loader!./historias.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/historias/historias.page.html"),
        styles: [__webpack_require__(/*! ./historias.page.scss */ "./src/app/tabs/historias/historias.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HistoriasPage);



/***/ })

}]);
//# sourceMappingURL=historias-historias-module-es2015.js.map