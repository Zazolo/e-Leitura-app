(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cadastro-cadastro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cadastro/cadastro.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cadastro/cadastro.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <form  #form=\"ngForm\" (ngSubmit)=\"register(form.value)\">\r\n    <ion-grid>\r\n      <ion-row justify-content-center>\r\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n          <div text-center>\r\n            <h3>Criar conta!</h3>\r\n          </div>\r\n          <div padding>\r\n            <ion-item>\r\n              <ion-input  name=\"nome\" type=\"text\" placeholder=\"Name\" ngModel required></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-input name=\"login\" type=\"text\" placeholder=\"login\" ngModel required></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-input name=\"senha\" type=\"password\" placeholder=\"Senha\" ngModel required></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-input name=\"confirm\" type=\"password\" placeholder=\"Confirmar senha\" ngModel required></ion-input>\r\n            </ion-item>\r\n          </div>\r\n          <div padding>\r\n            <ion-button  size=\"default\" type=\"submit\" [disabled]=\"form.invalid && senha == confirm\" expand=\"block\">Registrar</ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/cadastro/cadastro-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/cadastro/cadastro-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CadastroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageRoutingModule", function() { return CadastroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro.page */ "./src/app/cadastro/cadastro.page.ts");




const routes = [
    {
        path: '',
        component: _cadastro_page__WEBPACK_IMPORTED_MODULE_3__["CadastroPage"]
    }
];
let CadastroPageRoutingModule = class CadastroPageRoutingModule {
};
CadastroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CadastroPageRoutingModule);



/***/ }),

/***/ "./src/app/cadastro/cadastro.module.ts":
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.module.ts ***!
  \*********************************************/
/*! exports provided: CadastroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function() { return CadastroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro-routing.module */ "./src/app/cadastro/cadastro-routing.module.ts");
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastro.page */ "./src/app/cadastro/cadastro.page.ts");







let CadastroPageModule = class CadastroPageModule {
};
CadastroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_5__["CadastroPageRoutingModule"]
        ],
        declarations: [_cadastro_page__WEBPACK_IMPORTED_MODULE_6__["CadastroPage"]]
    })
], CadastroPageModule);



/***/ }),

/***/ "./src/app/cadastro/cadastro.page.scss":
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhZGFzdHJvL2NhZGFzdHJvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/cadastro/cadastro.page.ts":
/*!*******************************************!*\
  !*** ./src/app/cadastro/cadastro.page.ts ***!
  \*******************************************/
/*! exports provided: CadastroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPage", function() { return CadastroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let CadastroPage = class CadastroPage {
    constructor(auth, route, alertCtrl) {
        this.auth = auth;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.senha = '';
        this.confirm = '';
    }
    register(values) {
        this.auth.register(values.login, values.senha, values.nome).then((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (response) {
                const alert = yield this.alertCtrl.create({
                    message: "Cadastro realizado com sucesso!",
                    buttons: ['Ok']
                });
                yield alert.present();
                this.route.navigate(['/login']);
            }
        })).catch((rejeitado) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: "Erro ao cadastrar o usuário!",
                buttons: ['Ok']
            });
            yield alert.present();
        }));
    }
    ngOnInit() {
    }
};
CadastroPage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
CadastroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cadastro',
        template: __webpack_require__(/*! raw-loader!./cadastro.page.html */ "./node_modules/raw-loader/index.js!./src/app/cadastro/cadastro.page.html"),
        styles: [__webpack_require__(/*! ./cadastro.page.scss */ "./src/app/cadastro/cadastro.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], CadastroPage);



/***/ })

}]);
//# sourceMappingURL=cadastro-cadastro-module-es2015.js.map