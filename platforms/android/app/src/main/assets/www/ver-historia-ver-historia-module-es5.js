(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ver-historia-ver-historia-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ver-historia/ver-historia.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ver-historia/ver-historia.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ver-historia</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ver-historia/ver-historia-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/ver-historia/ver-historia-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: VerHistoriaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerHistoriaPageRoutingModule", function() { return VerHistoriaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ver_historia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ver-historia.page */ "./src/app/ver-historia/ver-historia.page.ts");




var routes = [
    {
        path: '',
        component: _ver_historia_page__WEBPACK_IMPORTED_MODULE_3__["VerHistoriaPage"]
    }
];
var VerHistoriaPageRoutingModule = /** @class */ (function () {
    function VerHistoriaPageRoutingModule() {
    }
    VerHistoriaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], VerHistoriaPageRoutingModule);
    return VerHistoriaPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/ver-historia/ver-historia.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/ver-historia/ver-historia.module.ts ***!
  \*****************************************************/
/*! exports provided: VerHistoriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerHistoriaPageModule", function() { return VerHistoriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ver_historia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ver-historia-routing.module */ "./src/app/ver-historia/ver-historia-routing.module.ts");
/* harmony import */ var _ver_historia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ver-historia.page */ "./src/app/ver-historia/ver-historia.page.ts");







var VerHistoriaPageModule = /** @class */ (function () {
    function VerHistoriaPageModule() {
    }
    VerHistoriaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ver_historia_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerHistoriaPageRoutingModule"]
            ],
            declarations: [_ver_historia_page__WEBPACK_IMPORTED_MODULE_6__["VerHistoriaPage"]]
        })
    ], VerHistoriaPageModule);
    return VerHistoriaPageModule;
}());



/***/ }),

/***/ "./src/app/ver-historia/ver-historia.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/ver-historia/ver-historia.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zlci1oaXN0b3JpYS92ZXItaGlzdG9yaWEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ver-historia/ver-historia.page.ts":
/*!***************************************************!*\
  !*** ./src/app/ver-historia/ver-historia.page.ts ***!
  \***************************************************/
/*! exports provided: VerHistoriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerHistoriaPage", function() { return VerHistoriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VerHistoriaPage = /** @class */ (function () {
    function VerHistoriaPage() {
    }
    VerHistoriaPage.prototype.ngOnInit = function () {
    };
    VerHistoriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ver-historia',
            template: __webpack_require__(/*! raw-loader!./ver-historia.page.html */ "./node_modules/raw-loader/index.js!./src/app/ver-historia/ver-historia.page.html"),
            styles: [__webpack_require__(/*! ./ver-historia.page.scss */ "./src/app/ver-historia/ver-historia.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VerHistoriaPage);
    return VerHistoriaPage;
}());



/***/ })

}]);
//# sourceMappingURL=ver-historia-ver-historia-module-es5.js.map