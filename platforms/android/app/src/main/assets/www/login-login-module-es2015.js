(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen>\r\n\r\n  <ion-grid justify-content-center>\r\n    <ion-row justify-content-center>\r\n      <ion-img src=\"../../assets/WHITE_LOGO.svg\" class=\"\"></ion-img>\r\n    </ion-row>\r\n    <ion-row justify-content-center class=\"containerBtns\">\r\n      <ion-row justify-content-center class=\"headerInputs\">\r\n        <ion-text>Acesso</ion-text>\r\n      </ion-row>\r\n      <ion-row justify-content-center class=\"\">\r\n        <ion-input class=\"\" type=\"text\" [(ngModel)]=\"login\" placeholder=\"login\"></ion-input>\r\n      </ion-row>\r\n      <ion-row justify-content-center class=\"\">\r\n        <ion-input [(ngModel)]=\"senha\" type=\"password\" placeholder=\"senha\"></ion-input>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-button fill=\"solid\" expand=\"block\" size=\"default\" (click)=\"logar()\">Entrar</ion-button>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-button fill=\"outline\" size=\"default\" (click)=\"goCadastrar()\">Cadastrar</ion-button>\r\n      </ion-row>\r\n    </ion-row>\r\n    \r\n  </ion-grid>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #54c7f7ff;\n}\nion-content ion-grid ion-row {\n  height: auto;\n  width: 80vw;\n}\nion-img {\n  -o-object-fit: contain !important;\n     object-fit: contain !important;\n  margin-left: 20vw !important;\n  width: 100%;\n  margin-top: 5vh;\n}\n.containerBtns {\n  margin-left: 10vw;\n  margin-top: 8vh;\n  background-color: white;\n  padding: 15px;\n  border-radius: 15px;\n}\nion-input {\n  height: auto;\n  border-radius: 10px;\n  margin-bottom: 15px;\n  border-color: #3179e6;\n  border-width: 1px;\n  border-style: solid;\n}\nion-button {\n  width: 100%;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n.headerInputs {\n  border-bottom: solid 1px #3179e6;\n  margin-bottom: 15px;\n  padding: 5px;\n}\n.headerInputs ion-text {\n  font-size: 28px;\n  font-family: \"Roboto\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFx0aWFnb1xcR2l0SHViXFxlLUxlaXR1cmEtYXBwL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtBQ0NKO0FERVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0FaO0FETUE7RUFDSSxpQ0FBQTtLQUFBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0hKO0FETUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFHQSxtQkFBQTtBQ0hKO0FETUE7RUFDSSxZQUFBO0VBR0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0hKO0FETUE7RUFDSSxXQUFBO0VBR0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0hKO0FETUE7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0hKO0FES0k7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzU0YzdmN2ZmO1xyXG5cclxuICAgIGlvbi1ncmlke1xyXG4gICAgICAgIGlvbi1yb3d7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDgwdnc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmlvbi1pbWd7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHZ3IWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogNXZoO1xyXG59XHJcblxyXG4uY29udGFpbmVyQnRuc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xyXG4gICAgbWFyZ2luLXRvcDogOHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuaW9uLWlucHV0e1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7ICBcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDQ5LCAxMjEsIDIzMCk7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAgXHJcbn1cclxuXHJcbi5oZWFkZXJJbnB1dHN7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDQ5LCAxMjEsIDIzMCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgIGlvbi10ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM1NGM3ZjdmZjtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA4MHZ3O1xufVxuXG5pb24taW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbiAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMjB2dyAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNXZoO1xufVxuXG4uY29udGFpbmVyQnRucyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHZ3O1xuICBtYXJnaW4tdG9wOiA4dmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLWNvbG9yOiAjMzE3OWU2O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmhlYWRlcklucHV0cyB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjMzE3OWU2O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uaGVhZGVySW5wdXRzIGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let LoginPage = class LoginPage {
    constructor(route, authService, alertCtrl) {
        this.route = route;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() {
    }
    goCadastrar() {
        this.route.navigate(['/cadastro']);
    }
    logar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.authService.login(this.login, this.senha).then((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log("RESPONSE RECEBIDA!");
                console.log(response);
                const alert = yield this.alertCtrl.create({
                    message: "Seja bem-vindo!",
                    buttons: ['Ok']
                });
                yield alert.present();
            })).catch((error) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(error);
                const alert = yield this.alertCtrl.create({
                    message: "Nome de usuário ou senha incorreto(s)!",
                    buttons: ['Ok']
                });
                yield alert.present();
            }));
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map