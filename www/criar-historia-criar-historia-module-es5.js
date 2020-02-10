(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["criar-historia-criar-historia-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/criar-historia/criar-historia.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/criar-historia/criar-historia.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>criar-historia</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/criar-historia/criar-historia-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/criar-historia/criar-historia-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CriarHistoriaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarHistoriaPageRoutingModule", function() { return CriarHistoriaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _criar_historia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./criar-historia.page */ "./src/app/criar-historia/criar-historia.page.ts");




var routes = [
    {
        path: '',
        component: _criar_historia_page__WEBPACK_IMPORTED_MODULE_3__["CriarHistoriaPage"]
    }
];
var CriarHistoriaPageRoutingModule = /** @class */ (function () {
    function CriarHistoriaPageRoutingModule() {
    }
    CriarHistoriaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CriarHistoriaPageRoutingModule);
    return CriarHistoriaPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/criar-historia/criar-historia.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/criar-historia/criar-historia.module.ts ***!
  \*********************************************************/
/*! exports provided: CriarHistoriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarHistoriaPageModule", function() { return CriarHistoriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _criar_historia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./criar-historia-routing.module */ "./src/app/criar-historia/criar-historia-routing.module.ts");
/* harmony import */ var _criar_historia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./criar-historia.page */ "./src/app/criar-historia/criar-historia.page.ts");







var CriarHistoriaPageModule = /** @class */ (function () {
    function CriarHistoriaPageModule() {
    }
    CriarHistoriaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _criar_historia_routing_module__WEBPACK_IMPORTED_MODULE_5__["CriarHistoriaPageRoutingModule"]
            ],
            declarations: [_criar_historia_page__WEBPACK_IMPORTED_MODULE_6__["CriarHistoriaPage"]]
        })
    ], CriarHistoriaPageModule);
    return CriarHistoriaPageModule;
}());



/***/ }),

/***/ "./src/app/criar-historia/criar-historia.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/criar-historia/criar-historia.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyaWFyLWhpc3RvcmlhL2NyaWFyLWhpc3RvcmlhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/criar-historia/criar-historia.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/criar-historia/criar-historia.page.ts ***!
  \*******************************************************/
/*! exports provided: CriarHistoriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarHistoriaPage", function() { return CriarHistoriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CriarHistoriaPage = /** @class */ (function () {
    function CriarHistoriaPage() {
    }
    CriarHistoriaPage.prototype.ngOnInit = function () {
    };
    CriarHistoriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-criar-historia',
            template: __webpack_require__(/*! raw-loader!./criar-historia.page.html */ "./node_modules/raw-loader/index.js!./src/app/criar-historia/criar-historia.page.html"),
            styles: [__webpack_require__(/*! ./criar-historia.page.scss */ "./src/app/criar-historia/criar-historia.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CriarHistoriaPage);
    return CriarHistoriaPage;
}());



/***/ })

}]);
//# sourceMappingURL=criar-historia-criar-historia-module-es5.js.map