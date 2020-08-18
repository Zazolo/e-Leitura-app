(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["criar-historia-criar-historia-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/criar-historia/criar-historia.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/criar-historia/criar-historia.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" *ngIf=\"stage > 0\">\r\n      <ion-button (click)=\"recuarStage()\">Voltar</ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Nova História</ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"stage <= 1\">\r\n      <ion-button (click)=\"avancarStage()\">Avançar</ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" *ngIf=\"stage == 2\">\r\n      <ion-button (click)=\"publicar()\">Publicar</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"stage == 0\">\r\n  <ion-textarea [(ngModel)]=\"texto\" placeholder=\"Digite o primeiro paragrafo da História...\" maxLength=\"500\" rows=\"30\" wrap=\"soft\" autofocus></ion-textarea>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"stage == 1\">\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Titulo para a História</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"titulo\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Quantidade de ciclos</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"quantidade_ciclos\" min=\"1\" max=\"1080\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Tempo de cada ciclo</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"tempo_ciclo\" min=\"1\" max=\"60\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Senha de acesso</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"senha\" minLength=\"3\"></ion-input>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"stage == 2\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <h1>Resumo da história</h1>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label>Título: {{titulo}}</ion-label>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label>Quantidade de ciclos: {{quantidade_ciclos}}</ion-label>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label>Tempo de cada ciclo: {{tempo_ciclo}}</ion-label>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label>Tempo total estimado: {{quantidade_ciclos * tempo_ciclo}} minutos.</ion-label>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label>Senha para acesso: {{senha?senha:\"nenhuma\"}}.</ion-label>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-label>E a história começa...</ion-label>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-text>{{texto}}</ion-text>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _criar_historia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./criar-historia.page */ "./src/app/criar-historia/criar-historia.page.ts");




const routes = [
    {
        path: '',
        component: _criar_historia_page__WEBPACK_IMPORTED_MODULE_3__["CriarHistoriaPage"]
    }
];
let CriarHistoriaPageRoutingModule = class CriarHistoriaPageRoutingModule {
};
CriarHistoriaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CriarHistoriaPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _criar_historia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./criar-historia-routing.module */ "./src/app/criar-historia/criar-historia-routing.module.ts");
/* harmony import */ var _criar_historia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./criar-historia.page */ "./src/app/criar-historia/criar-historia.page.ts");







let CriarHistoriaPageModule = class CriarHistoriaPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_historia_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/historia.service */ "./src/app/services/historia.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let CriarHistoriaPage = class CriarHistoriaPage {
    constructor(route, hist, alertCtrl) {
        this.route = route;
        this.hist = hist;
        this.alertCtrl = alertCtrl;
        this.stage = 0;
        this.texto = '';
        this.titulo = '';
        this.senha = '';
        this.quantidade_ciclos = 1;
        this.tempo_ciclo = 1;
    }
    avancarStage() {
        this.stage++;
        switch (this.stage) {
            case 1:
                if (this.texto.length < 15) {
                    alert("Texto inválido! Digite ao menos 15 caracteres!");
                    this.recuarStage();
                }
                break;
            case 2:
                if (this.titulo.length < 5) {
                    alert("Título inválido! Digite ao menos 5 caracteres!");
                    this.recuarStage();
                }
                break;
        }
    }
    recuarStage() {
        this.stage--;
    }
    publicar() {
        this.hist.criarHistoria(this.texto, this.titulo, this.tempo_ciclo, this.quantidade_ciclos, this.senha).then((ok) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("Recebeu aqui...", ok);
            const alert = yield this.alertCtrl.create({
                message: "História criada com sucesso!",
                buttons: ['Ok']
            });
            yield alert.present();
            this.route.navigate(['/tabs/historias']);
        })).catch((e) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(e);
            const alert = yield this.alertCtrl.create({
                message: "Erro ao criar a história! Tente novamente mais tarde!",
                buttons: ['Ok']
            });
            yield alert.present();
        }));
    }
    ngOnInit() {
        this.stage = 0;
    }
};
CriarHistoriaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_historia_service__WEBPACK_IMPORTED_MODULE_3__["HistoriaService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
CriarHistoriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-criar-historia',
        template: __webpack_require__(/*! raw-loader!./criar-historia.page.html */ "./node_modules/raw-loader/index.js!./src/app/criar-historia/criar-historia.page.html"),
        styles: [__webpack_require__(/*! ./criar-historia.page.scss */ "./src/app/criar-historia/criar-historia.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_historia_service__WEBPACK_IMPORTED_MODULE_3__["HistoriaService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], CriarHistoriaPage);



/***/ })

}]);
//# sourceMappingURL=criar-historia-criar-historia-module-es2015.js.map