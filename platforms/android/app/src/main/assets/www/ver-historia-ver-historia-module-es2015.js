(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ver-historia-ver-historia-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ver-historia/ver-historia.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ver-historia/ver-historia.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content *ngIf=\"historia != null\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-label class=\"criadoPor\">{{historia.criador.nome}}, autor inicial.</ion-label>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-text class=\"titulo\">{{historia.titulo}}</ion-text>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-label class=\"texto\">{{historia.paragrafo}}</ion-label>\r\n    </ion-row>\r\n\r\n    <div *ngIf=\"historia.paragrafos\">\r\n      <div *ngFor=\"let p of historia.paragrafos\">\r\n        <div *ngIf=\"p.ciclo != historia.ciclo_atual && p.ganhador == 1\">\r\n          <ion-row class=\"previewContainer\">\r\n            <ion-text class=\"texto\">{{p.texto}}<div class=\"mini\">({{p.criador.login}})</div></ion-text>\r\n          </ion-row>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"historia.paragrafos_votacao.length > 0\">\r\n      <div *ngFor=\"let p of historia.paragrafos_votacao\">\r\n        <ion-row *ngIf=\"p.ciclo > 0 && p.ciclo == historia.ciclo_atual\">\r\n          <ion-card>\r\n            <ion-grid>\r\n              <ion-row class=\"voteInfoHeader\">\r\n                <ion-label class=\"mini\">Trecho produzido por: {{p.criador.nome}}</ion-label>\r\n              </ion-row>\r\n      \r\n              <ion-row>\r\n                <ion-text class=\"texto mini\">{{p.texto}}</ion-text>\r\n              </ion-row>\r\n              \r\n              <ion-row>\r\n                <ion-col *ngIf=\"p.votou == false && p.criador.login != usuarioLogadoLogin\">\r\n                  <ion-button fill=\"outline\" (click)=\"votar(p.id);\"><ion-icon icon=\"checkmark\" size=\"32px\"></ion-icon> Gostei</ion-button>\r\n                </ion-col>\r\n                <ion-col *ngIf=\"p.criador.login == usuarioLogadoLogin\">\r\n                  <ion-button fill=\"outline\" (click)=\"removerParagrafo(p.id);\"><ion-icon icon=\"trash\" size=\"32px\"></ion-icon> Remover Paragrafo</ion-button>\r\n                </ion-col>\r\n                <ion-col *ngIf=\"p.votou == true\">\r\n                  <ion-icon icon=\"checkmark\" size=\"32px\"></ion-icon><ion-label>Você já votou!</ion-label>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-card>\r\n        </ion-row>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"historia.paragrafos.length == 0\">\r\n      <p>Nenhum parágrafo ainda!</p>\r\n    </div>\r\n    <div *ngIf=\"historia.paragrafos_votacao.length == 0\">\r\n      <p>Nenhum parágrafo para votação disponível ainda! Comece criando um!</p>\r\n    </div>\r\n\r\n\r\n  </ion-grid>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"historia.encerrada == false\">\r\n    <ion-fab-button (click)=\"criarParagrafo()\">\r\n      <ion-icon name=\"text\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!--\r\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" *ngIf=\"historia.criador.login == usuarioLogadoLogin && historia.encerrada == false\">\r\n    <ion-fab-button (click)=\"finalizarHistoria()\">\r\n      Finalizar\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  -->\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ver_historia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ver-historia.page */ "./src/app/ver-historia/ver-historia.page.ts");




const routes = [
    {
        path: '',
        component: _ver_historia_page__WEBPACK_IMPORTED_MODULE_3__["VerHistoriaPage"]
    }
];
let VerHistoriaPageRoutingModule = class VerHistoriaPageRoutingModule {
};
VerHistoriaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerHistoriaPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ver_historia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ver-historia-routing.module */ "./src/app/ver-historia/ver-historia-routing.module.ts");
/* harmony import */ var _ver_historia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ver-historia.page */ "./src/app/ver-historia/ver-historia.page.ts");







let VerHistoriaPageModule = class VerHistoriaPageModule {
};
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



/***/ }),

/***/ "./src/app/ver-historia/ver-historia.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/ver-historia/ver-historia.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".criadoPor {\n  font-size: small;\n  margin: 5px;\n  width: 100%;\n  text-align: center;\n}\n\n.titulo {\n  font-size: 25px;\n  width: 100%;\n  font-family: \"Times New Roman\", Times, serif;\n  text-align: center;\n  margin-bottom: 10px;\n}\n\n.texto {\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 8px;\n  text-align: justify;\n  text-indent: 1.5em;\n  width: 100%;\n  font-size: 16px;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n.mini {\n  font-size: 12px;\n}\n\n.previewContainer {\n  margin: 15px;\n  text-align: justify;\n}\n\nion-row {\n  width: 100%;\n}\n\n.voteInfoHeader {\n  font-size: small;\n  margin-bottom: 15px;\n  margin-top: 5px;\n  margin-left: 8px;\n}\n\nion-card {\n  width: 100% !important;\n}\n\nion-card ion-button {\n  margin-top: 10px;\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyLWhpc3RvcmlhL0M6XFxVc2Vyc1xcdGlhZ29cXEdpdEh1YlxcZS1MZWl0dXJhLWFwcC9zcmNcXGFwcFxcdmVyLWhpc3RvcmlhXFx2ZXItaGlzdG9yaWEucGFnZS5zY3NzIiwic3JjL2FwcC92ZXItaGlzdG9yaWEvdmVyLWhpc3RvcmlhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRElBO0VBQ0ksV0FBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREdBO0VBQ0ksc0JBQUE7QUNBSjs7QURDSTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3Zlci1oaXN0b3JpYS92ZXItaGlzdG9yaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyaWFkb1BvcntcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGl0dWxve1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi50ZXh0b3tcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgdGV4dC1pbmRlbnQ6IDEuNWVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG5cclxuLm1pbml7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5wcmV2aWV3Q29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIFxyXG59XHJcblxyXG5cclxuaW9uLXJvd3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udm90ZUluZm9IZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuaW9uLWNhcmR7XHJcbiAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwiLmNyaWFkb1BvciB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0dWxvIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udGV4dG8ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgdGV4dC1pbmRlbnQ6IDEuNWVtO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xufVxuXG4ubWluaSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnByZXZpZXdDb250YWluZXIge1xuICBtYXJnaW46IDE1cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbmlvbi1yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnZvdGVJbmZvSGVhZGVyIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5pb24tY2FyZCBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_historia_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/historia.service */ "./src/app/services/historia.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");





let VerHistoriaPage = class VerHistoriaPage {
    constructor(route, historiaService, auth) {
        this.route = route;
        this.historiaService = historiaService;
        this.auth = auth;
        this.historia = null;
        this.zone = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]({ enableLongStackTrace: false });
        this.usuarioLogadoLogin = '';
    }
    obterHistoria() {
        this.zone.run(() => {
            this.historia = this.historiaService.getLast();
            console.log("Percorrendo parágrafos...");
            console.log(this.historia.paragrafos);
        });
    }
    ngOnInit() {
        setInterval(() => {
            this.usuarioLogadoLogin = this.auth.getUser();
            console.log(this.usuarioLogadoLogin);
            this.obterHistoria();
        }, 3000);
    }
    criarParagrafo() {
        this.route.navigate(['/criar-paragrafo']);
    }
    votar(id) {
        this.zone.run(() => {
            let i = 0;
            for (i = 0; i < this.historia.paragrafos_votacao.length; i++) {
                if (this.historia.paragrafos[i].id == id) {
                    this.historia.paragrafos_votacao[i] = Object.assign({}, this.historia.paragrafos_votacao[i], { votou: true });
                }
                else {
                    this.historia.paragrafos_votacao[i] = Object.assign({}, this.historia.paragrafos_votacao[i], { votou: false });
                }
            }
            this.historiaService.votar(id).then((ok) => {
                console.log("Voto no paragrafo " + id + " registrado com sucesso.");
            }).catch(error => {
                console.log("Erro ao votar no parágrafo.");
                this.obterHistoria();
            });
        });
    }
    removerParagrafo(id) {
        this.zone.run(() => {
            let i = 0;
            let paragrafo = null;
            for (i = 0; i < this.historia.paragrafos_votacao.length; i++) {
                if (this.historia.paragrafos_votacao[i].id == id) {
                    paragrafo = this.historia.paragrafos_votacao[i];
                    this.historia.paragrafos_votacao.splice(i, 1);
                }
            }
            this.historiaService.removerParagrafo(id).then((ok) => {
                console.log("Paragrafo " + id + " removido com sucesso.");
                this.obterHistoria();
            }).catch(error => {
                alert("Erro ao remover o paragrafo!");
                this.obterHistoria();
            });
        });
    }
    finalizarHistoria() {
        this.historiaService.finalizarHistoria(this.historia.id).then(finalizou => {
            alert("Historia finalizada com sucesso!");
            this.route.navigate(['tabs', 'historia']);
        }).catch(error => {
            alert("Erro ao finalizar a historia!");
        });
    }
};
VerHistoriaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_historia_service__WEBPACK_IMPORTED_MODULE_3__["HistoriaService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
VerHistoriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ver-historia',
        template: __webpack_require__(/*! raw-loader!./ver-historia.page.html */ "./node_modules/raw-loader/index.js!./src/app/ver-historia/ver-historia.page.html"),
        styles: [__webpack_require__(/*! ./ver-historia.page.scss */ "./src/app/ver-historia/ver-historia.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_historia_service__WEBPACK_IMPORTED_MODULE_3__["HistoriaService"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
], VerHistoriaPage);



/***/ })

}]);
//# sourceMappingURL=ver-historia-ver-historia-module-es2015.js.map