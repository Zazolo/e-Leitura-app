(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["historias-historias-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/historias/historias.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/historias/historias.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content *ngIf=\"historias == undefined\">\n  \n    <h1>=(<br>Não há histórias disponíveis, comece criando a sua!</h1>\n\n</ion-content>\n\n\n<ion-content>\n\n  <ion-grid *ngIf=\"historias != undefined\">\n    <ion-row *ngFor=\"let h of historias\">\n      <ion-card>\n        <div class=\"topCardContainer\">\n          <ion-row>\n            <ion-text class=\"nome\">{{h.usuario_id.nome}}</ion-text>\n          </ion-row>\n          <ion-row>\n            <ion-text class=\"login\">@{{h.usuario_id.login}}</ion-text>\n          </ion-row>\n        </div>\n        <ion-row>\n          <ion-text class=\"titulo\">{{h.titulo}}</ion-text>\n        </ion-row>\n        <ion-row>\n          <ion-col *ngIf=\"h.finalizada == false\">\n            <ion-button size=\"small\" (click)=\"participar(h.id);\">Participar</ion-button>\n          </ion-col>\n          <ion-col *ngIf=\"h.finalizada == true && h.rank == undefined\">\n            <ion-button size=\"small\" (click)=\"verRank(h.id);\">Ver Rank</ion-button>\n          </ion-col>\n          <ion-col *ngIf=\"h.finalizada == true\">\n            <ion-button size=\"small\" (click)=\"participar(h.id);\">Ler história</ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-text>Ciclo atual: {{h.ciclo_atual}}\\{{h.max_ciclos}}</ion-text>\n          </ion-col>\n          \n        </ion-row>\n        <ion-row *ngIf=\"h.rank != undefined\">\n          <ion-row class=\"rankTitle\">\n            <ion-label>Rank</ion-label>  \n          </ion-row>\n          <ion-row *ngFor=\"let rank of h.rank; let i = index\" class=\"rankContainer\">\n            <ion-row class=\"line\">\n              <ion-col class=\"column\" size=\"1\">\n                <ion-label>{{i+1}}º</ion-label>\n              </ion-col>\n              <ion-col class=\"column\" size=\"3\">\n                <ion-label>{{rank.login}}</ion-label>\n              </ion-col>\n              <ion-col class=\"column\" size=\"5\">\n                <ion-label>{{rank.nome}}</ion-label>\n              </ion-col>\n              <ion-col class=\"column\" size=\"3\">\n                <ion-label>{{rank.total}} pontos</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-row>\n        </ion-row>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"criar()\">\n      <ion-icon name=\"create\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _historias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./historias.page */ "./src/app/tabs/historias/historias.page.ts");




var routes = [
    {
        path: '',
        component: _historias_page__WEBPACK_IMPORTED_MODULE_3__["HistoriasPage"]
    }
];
var HistoriasPageRoutingModule = /** @class */ (function () {
    function HistoriasPageRoutingModule() {
    }
    HistoriasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], HistoriasPageRoutingModule);
    return HistoriasPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _historias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./historias-routing.module */ "./src/app/tabs/historias/historias-routing.module.ts");
/* harmony import */ var _historias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./historias.page */ "./src/app/tabs/historias/historias.page.ts");







var HistoriasPageModule = /** @class */ (function () {
    function HistoriasPageModule() {
    }
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
    return HistoriasPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/historias/historias.page.scss":
/*!****************************************************!*\
  !*** ./src/app/tabs/historias/historias.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nion-grid {\n  width: 100%;\n}\nion-card {\n  width: 100%;\n}\n.titulo {\n  font-size: 28px;\n  font-weight: 700;\n  font-family: \"Courier New\", Courier, monospace;\n  text-align: center;\n  margin: 10px;\n}\n.topCardContainer {\n  padding: 15px;\n}\n.topCardContainer .login {\n  font-size: 12px;\n}\n.topCardContainer .nome {\n  font-size: 16px;\n}\n.rankTitle {\n  font-size: 22px;\n  font-weight: bold;\n  width: 100%;\n  margin-left: 15px;\n}\n.rankContainer {\n  padding: 10px;\n  width: 100% !important;\n}\n.rankContainer .line {\n  margin-bottom: 10px;\n  width: 100% !important;\n}\n.rankContainer .line .column {\n  width: auto;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: '…\"';\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9oaXN0b3JpYXMvaGlzdG9yaWFzLnBhZ2Uuc2NzcyIsIi9ob21lL3RpYWdvL0RvY3VtZW50b3MvZS1MZWl0dXJhLWFwcC9zcmMvYXBwL3RhYnMvaGlzdG9yaWFzL2hpc3Rvcmlhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksV0FBQTtBREVKO0FDQUE7RUFDSSxXQUFBO0FER0o7QUNEQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FESUo7QUNBQTtFQUNJLGFBQUE7QURHSjtBQ0RJO0VBQ0ksZUFBQTtBREdSO0FDQ0k7RUFDSSxlQUFBO0FEQ1I7QUNJQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBRERKO0FDR0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QURBSjtBQ0NJO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBRENSO0FDQVE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FERVoiLCJmaWxlIjoic3JjL2FwcC90YWJzL2hpc3Rvcmlhcy9oaXN0b3JpYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuaW9uLWdyaWQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRpdHVsbyB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLnRvcENhcmRDb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLnRvcENhcmRDb250YWluZXIgLmxvZ2luIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnRvcENhcmRDb250YWluZXIgLm5vbWUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5yYW5rVGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5yYW5rQ29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5yYW5rQ29udGFpbmVyIC5saW5lIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5yYW5rQ29udGFpbmVyIC5saW5lIC5jb2x1bW4ge1xuICB3aWR0aDogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogJ+KAplwiJztcbn0iLCJpb24tZ3JpZHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jYXJke1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnRpdHVsb3tcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cblxuLnRvcENhcmRDb250YWluZXJ7XG4gICAgcGFkZGluZzogMTVweDtcblxuICAgIC5sb2dpbntcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgXG4gICAgfVxuICAgIFxuICAgIC5ub21le1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG59XG5cbi5yYW5rVGl0bGV7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLnJhbmtDb250YWluZXJ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gICAgLmxpbmV7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcbiAgICAgICAgLmNvbHVtbntcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuOyBcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiAn4oCmXCInO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_historia_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/historia.service */ "./src/app/services/historia.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var HistoriasPage = /** @class */ (function () {
    function HistoriasPage(auth, hist, alertCtrl, route, toasCtrl) {
        this.auth = auth;
        this.hist = hist;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.toasCtrl = toasCtrl;
        this.historias = undefined;
    }
    HistoriasPage.prototype.obterHistorias = function () {
        var _this = this;
        this.hist.obterDisponiveis().then(function (response) {
            _this.historias = response;
            console.log(response);
        }).catch(function (error) {
            console.log("Erro ou nenhuma historia disponível");
        });
    };
    HistoriasPage.prototype.ngOnInit = function () {
        this.obterHistorias();
    };
    HistoriasPage.prototype.participar = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _loop_1, this_1, i;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("participar da historia>>>>" + id);
                        _loop_1 = function (i) {
                            var alert_1;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(this_1.historias[i].id == id.toString())) return [3 /*break*/, 4];
                                        if (!(this_1.historias[i].senha != null)) return [3 /*break*/, 3];
                                        alert_1 = this_1.alertCtrl.create({
                                            message: 'Senha de acesso',
                                            inputs: [
                                                {
                                                    name: 'password',
                                                    placeholder: 'Password',
                                                    type: 'password'
                                                }
                                            ],
                                            buttons: [
                                                {
                                                    text: 'Cancel',
                                                    role: 'cancel',
                                                    handler: function (data) {
                                                        console.log('Cancel clicked');
                                                    }
                                                },
                                                {
                                                    text: 'Entrar',
                                                    handler: function (data) {
                                                        if (data.password == _this.historias[i].senha) {
                                                            _this.enterOnHistoria(_this.historias[i].id, data.password);
                                                        }
                                                        else {
                                                            _this.presentToastWithOptions("Senha incorreta!");
                                                        }
                                                    }
                                                }
                                            ]
                                        });
                                        return [4 /*yield*/, alert_1];
                                    case 1: return [4 /*yield*/, (_a.sent()).present()];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        this_1.enterOnHistoria(this_1.historias[i].id, '');
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.historias.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HistoriasPage.prototype.enterOnHistoria = function (id, senha) {
        var _this = this;
        this.hist.getIt(id, senha).then(function (response) {
            _this.route.navigateByUrl('/ver-historia');
        }).catch(function (error) {
            _this.presentToastWithOptions("Servidor não permitiu prosseguir, verifique sua senha antes de continuar.");
        });
    };
    HistoriasPage.prototype.presentToastWithOptions = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toasCtrl.create({
                            message: message,
                            position: 'top',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HistoriasPage.prototype.deslogar = function () {
        this.auth.logout();
    };
    HistoriasPage.prototype.criar = function () {
        this.route.navigateByUrl('/criar-historia');
    };
    HistoriasPage.prototype.verRank = function (idHistoria) {
        var _this = this;
        this.hist.getRankHistoria(idHistoria).then(function (rank) {
            for (var i = 0; i < _this.historias.length; i++) {
                if (_this.historias[i].id == idHistoria) {
                    _this.historias[i].rank = rank;
                }
            }
        }).catch(function (error) {
            console.log("Erro ao obter o rank");
        });
    };
    HistoriasPage.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _services_historia_service__WEBPACK_IMPORTED_MODULE_3__["HistoriaService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    HistoriasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-historias',
            template: __webpack_require__(/*! raw-loader!./historias.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/historias/historias.page.html"),
            styles: [__webpack_require__(/*! ./historias.page.scss */ "./src/app/tabs/historias/historias.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _services_historia_service__WEBPACK_IMPORTED_MODULE_3__["HistoriaService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], HistoriasPage);
    return HistoriasPage;
}());



/***/ })

}]);
//# sourceMappingURL=historias-historias-module-es5.js.map