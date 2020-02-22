(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ver-historia-ver-historia-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ver-historia/ver-historia.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ver-historia/ver-historia.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content *ngIf=\"historia != null\">\n  <ion-grid>\n    <ion-row>\n      <ion-label class=\"criadoPor\">{{historia.usuario_id.nome}}, autor inicial.</ion-label>\n    </ion-row>\n\n    <ion-row>\n      <ion-text class=\"titulo\">{{historia.titulo}}</ion-text>\n    </ion-row>\n\n    <ion-row>\n      <ion-label class=\"texto\">{{historia.texto}}</ion-label>\n    </ion-row>\n\n    <div *ngFor=\"let p of historia.paragrafos\">\n      <div *ngIf=\"p.ciclo != historia.ciclo_atual && p.ganhador == 1\">\n        <ion-row class=\"previewContainer\">\n          <ion-text class=\"texto\">{{p.texto}}<div class=\"mini\">({{p.usuario_id.login}})</div></ion-text>\n        </ion-row>\n      </div>\n    </div>\n\n\n    <div *ngIf=\"historia.paragrafos.length > 0\">\n      <div *ngFor=\"let p of historia.paragrafos\">\n        <ion-row *ngIf=\"p.ciclo == historia.ciclo_atual && historia.finalizada == 0\">\n          <ion-card>\n            <ion-grid>\n              <ion-row class=\"voteInfoHeader\">\n                <ion-label class=\"mini\">Trecho produzido por: {{p.usuario_id.nome}}</ion-label>\n              </ion-row>\n      \n              <ion-row>\n                <ion-text class=\"texto mini\">{{p.texto}}</ion-text>\n              </ion-row>\n              <ion-row>\n                <ion-col *ngIf=\"p.votou == false && p.usuario_id.login != usuarioLogadoLogin\">\n                  <ion-button fill=\"outline\" (click)=\"votar(p.id);\"><ion-icon icon=\"checkmark\" size=\"32px\"></ion-icon> Gostei</ion-button>\n                </ion-col>\n                <ion-col *ngIf=\"p.usuario_id.login == usuarioLogadoLogin\">\n                  <ion-button fill=\"outline\" (click)=\"removerParagrafo(p.id);\"><ion-icon icon=\"trash\" size=\"32px\"></ion-icon> Remover Paragrafo</ion-button>\n                </ion-col>\n                <ion-col *ngIf=\"p.votou == true\">\n                  <ion-icon icon=\"checkmark\" size=\"32px\"></ion-icon><ion-label>Você já votou!</ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card>\n        </ion-row>\n      </div>\n    </div>\n\n\n  </ion-grid>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"historia.finalizada == 0\">\n    <ion-fab-button (click)=\"criarParagrafo()\">\n      <ion-icon name=\"text\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" *ngIf=\"historia.usuario_id.login == usuarioLogadoLogin && historia.finalizada == 0\">\n    <ion-fab-button (click)=\"finalizarHistoria()\">\n      Finalizar\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n"

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

module.exports = ".criadoPor {\n  font-size: small;\n  margin: 5px;\n  width: 100%;\n  text-align: center;\n}\n\n.titulo {\n  font-size: 25px;\n  width: 100%;\n  font-family: \"Times New Roman\", Times, serif;\n  text-align: center;\n  margin-bottom: 10px;\n}\n\n.texto {\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 8px;\n  text-align: justify;\n  text-indent: 1.5em;\n  width: 100%;\n  font-size: 16px;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n.mini {\n  font-size: 12px;\n}\n\n.previewContainer {\n  margin: 15px;\n  text-align: justify;\n}\n\nion-row {\n  width: 100%;\n}\n\n.voteInfoHeader {\n  font-size: small;\n  margin-bottom: 15px;\n  margin-top: 5px;\n  margin-left: 8px;\n}\n\nion-card {\n  width: 100% !important;\n}\n\nion-card ion-button {\n  margin-top: 10px;\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RpYWdvL0RvY3VtZW50b3MvZS1MZWl0dXJhLWFwcC9zcmMvYXBwL3Zlci1oaXN0b3JpYS92ZXItaGlzdG9yaWEucGFnZS5zY3NzIiwic3JjL2FwcC92ZXItaGlzdG9yaWEvdmVyLWhpc3RvcmlhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRElBO0VBQ0ksV0FBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREdBO0VBQ0ksc0JBQUE7QUNBSjs7QURDSTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3Zlci1oaXN0b3JpYS92ZXItaGlzdG9yaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyaWFkb1BvcntcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdHVsb3tcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50ZXh0b3tcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB0ZXh0LWluZGVudDogMS41ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuXG4ubWluaXtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wcmV2aWV3Q29udGFpbmVye1xuICAgIG1hcmdpbjogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIFxufVxuXG5cbmlvbi1yb3d7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi52b3RlSW5mb0hlYWRlcntcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5pb24tY2FyZHtcbiAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xuICAgIH1cbn0iLCIuY3JpYWRvUG9yIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXR1bG8ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50ZXh0byB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB0ZXh0LWluZGVudDogMS41ZW07XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG5cbi5taW5pIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucHJldmlld0NvbnRhaW5lciB7XG4gIG1hcmdpbjogMTVweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuaW9uLXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udm90ZUluZm9IZWFkZXIge1xuICBmb250LXNpemU6IHNtYWxsO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbmlvbi1jYXJkIGlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufSJdfQ== */"

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
            console.log(this.historia);
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
            for (i = 0; i < this.historia.paragrafos.length; i++) {
                if (this.historia.paragrafos[i].id == id) {
                    this.historia.paragrafos[i].votou = true;
                }
            }
            this.historiaService.votar(id).then((ok) => {
                console.log("Voto no paragrafo " + id + " registrado com sucesso.");
            }).catch(error => {
                this.obterHistoria();
            });
        });
    }
    removerParagrafo(id) {
        this.zone.run(() => {
            let i = 0;
            let paragrafo = null;
            for (i = 0; i < this.historia.paragrafos.length; i++) {
                if (this.historia.paragrafos[i].id == id) {
                    paragrafo = this.historia.paragrafos[i];
                    this.historia.paragrafos.splice(i, 1);
                }
            }
            this.historiaService.removerParagrafo(id).then((ok) => {
                console.log("Paragrafo " + id + " removido com sucesso.");
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