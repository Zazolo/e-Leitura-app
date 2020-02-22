(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen>\n\n  <ion-grid justify-content-center>\n    <ion-row justify-content-center>\n      <ion-img src=\"../../assets/WHITE_LOGO.svg\" class=\"\"></ion-img>\n    </ion-row>\n    <ion-row justify-content-center class=\"containerBtns\">\n      <ion-row justify-content-center class=\"headerInputs\">\n        <ion-text>Acesso</ion-text>\n      </ion-row>\n      <ion-row justify-content-center class=\"\">\n        <ion-input class=\"\" type=\"text\" [(ngModel)]=\"login\" placeholder=\"login\"></ion-input>\n      </ion-row>\n      <ion-row justify-content-center class=\"\">\n        <ion-input [(ngModel)]=\"senha\" type=\"password\" placeholder=\"senha\"></ion-input>\n      </ion-row>\n      <ion-row>\n        <ion-button fill=\"solid\" expand=\"block\" size=\"default\" (click)=\"logar()\">Entrar</ion-button>\n      </ion-row>\n      <ion-row>\n        <ion-button fill=\"outline\" size=\"default\" (click)=\"goCadastrar()\">Cadastrar</ion-button>\n      </ion-row>\n    </ion-row>\n    \n  </ion-grid>\n\n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
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
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #54c7f7ff;\n}\nion-content ion-grid ion-row {\n  height: auto;\n  width: 80vw;\n}\nion-img {\n  -o-object-fit: contain !important;\n     object-fit: contain !important;\n  margin-left: 20vw !important;\n  width: 100%;\n  margin-top: 5vh;\n}\n.containerBtns {\n  margin-left: 10vw;\n  margin-top: 8vh;\n  background-color: white;\n  padding: 15px;\n  border-radius: 15px;\n}\nion-input {\n  height: auto;\n  border-radius: 10px;\n  margin-bottom: 15px;\n  border-color: #3179e6;\n  border-width: 1px;\n  border-style: solid;\n}\nion-button {\n  width: 100%;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n.headerInputs {\n  border-bottom: solid 1px #3179e6;\n  margin-bottom: 15px;\n  padding: 5px;\n}\n.headerInputs ion-text {\n  font-size: 28px;\n  font-family: \"Roboto\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RpYWdvL0RvY3VtZW50b3MvZS1MZWl0dXJhLWFwcC9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7QUNDSjtBREVRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNBWjtBRE1BO0VBQ0ksaUNBQUE7S0FBQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNISjtBRE1BO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBR0EsbUJBQUE7QUNISjtBRE1BO0VBQ0ksWUFBQTtFQUdBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNISjtBRE1BO0VBQ0ksV0FBQTtFQUdBLG1CQUFBO0VBQ0EsbUJBQUE7QUNISjtBRE1BO0VBQ0ksZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNISjtBREtJO0VBQ0ksZUFBQTtFQUNBLGlDQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNTRjN2Y3ZmY7XG5cbiAgICBpb24tZ3JpZHtcbiAgICAgICAgaW9uLXJvd3tcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG5pb24taW1ne1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW4haW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHZ3IWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG59XG5cbi5jb250YWluZXJCdG5ze1xuICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xuICAgIG1hcmdpbi10b3A6IDh2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuaW9uLWlucHV0e1xuICAgIGhlaWdodDogYXV0bztcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDsgIFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDQ5LCAxMjEsIDIzMCk7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuaW9uLWJ1dHRvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgIFxufVxuXG4uaGVhZGVySW5wdXRze1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoNDksIDEyMSwgMjMwKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcblxuICAgIGlvbi10ZXh0e1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICB9XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNTRjN2Y3ZmY7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogODB2dztcbn1cblxuaW9uLWltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW4gIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDIwdncgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDV2aDtcbn1cblxuLmNvbnRhaW5lckJ0bnMge1xuICBtYXJnaW4tbGVmdDogMTB2dztcbiAgbWFyZ2luLXRvcDogOHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGhlaWdodDogYXV0bztcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlci1jb2xvcjogIzMxNzllNjtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5oZWFkZXJJbnB1dHMge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzMxNzllNjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLmhlYWRlcklucHV0cyBpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var LoginPage = /** @class */ (function () {
    function LoginPage(route, authService, alertCtrl) {
        this.route = route;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.goCadastrar = function () {
        this.route.navigate(['/cadastro']);
    };
    LoginPage.prototype.logar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.authService.login(this.login, this.senha).then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var alert;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.alertCtrl.create({
                                    message: "Seja bem-vindo!",
                                    buttons: ['Ok']
                                })];
                            case 1:
                                alert = _a.sent();
                                return [4 /*yield*/, alert.present()];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }).catch(function (error) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var alert;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.alertCtrl.create({
                                    message: "Nome de usuário ou senha incorreto(s)!",
                                    buttons: ['Ok']
                                })];
                            case 1:
                                alert = _a.sent();
                                return [4 /*yield*/, alert.present()];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
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
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map