(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buscar-buscar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/buscar/buscar.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/buscar/buscar.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>buscar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tabs/buscar/buscar-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/tabs/buscar/buscar-routing.module.ts ***!
  \******************************************************/
/*! exports provided: BuscarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarPageRoutingModule", function() { return BuscarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _buscar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buscar.page */ "./src/app/tabs/buscar/buscar.page.ts");




var routes = [
    {
        path: '',
        component: _buscar_page__WEBPACK_IMPORTED_MODULE_3__["BuscarPage"]
    }
];
var BuscarPageRoutingModule = /** @class */ (function () {
    function BuscarPageRoutingModule() {
    }
    BuscarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BuscarPageRoutingModule);
    return BuscarPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tabs/buscar/buscar.module.ts":
/*!**********************************************!*\
  !*** ./src/app/tabs/buscar/buscar.module.ts ***!
  \**********************************************/
/*! exports provided: BuscarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarPageModule", function() { return BuscarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _buscar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buscar-routing.module */ "./src/app/tabs/buscar/buscar-routing.module.ts");
/* harmony import */ var _buscar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buscar.page */ "./src/app/tabs/buscar/buscar.page.ts");







var BuscarPageModule = /** @class */ (function () {
    function BuscarPageModule() {
    }
    BuscarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _buscar_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuscarPageRoutingModule"]
            ],
            declarations: [_buscar_page__WEBPACK_IMPORTED_MODULE_6__["BuscarPage"]]
        })
    ], BuscarPageModule);
    return BuscarPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/buscar/buscar.page.scss":
/*!**********************************************!*\
  !*** ./src/app/tabs/buscar/buscar.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvYnVzY2FyL2J1c2Nhci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tabs/buscar/buscar.page.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/buscar/buscar.page.ts ***!
  \********************************************/
/*! exports provided: BuscarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarPage", function() { return BuscarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BuscarPage = /** @class */ (function () {
    function BuscarPage() {
    }
    BuscarPage.prototype.ngOnInit = function () {
    };
    BuscarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buscar',
            template: __webpack_require__(/*! raw-loader!./buscar.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/buscar/buscar.page.html"),
            styles: [__webpack_require__(/*! ./buscar.page.scss */ "./src/app/tabs/buscar/buscar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BuscarPage);
    return BuscarPage;
}());



/***/ })

}]);
//# sourceMappingURL=buscar-buscar-module-es5.js.map