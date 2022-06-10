"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_user_exchangeGift_exchange-gift-saw_exchange-gift-saw_page_ts"],{

/***/ 40922:
/*!***************************************************!*\
  !*** ./src/app/services/exchange-gift.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGiftService": () => (/* binding */ ExchangeGiftService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);




let ExchangeGiftService = class ExchangeGiftService {
    constructor(http) {
        this.http = http;
        this.endpoint = "/exchangeGifts";
        this.URLDatabase = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.herokuConfig.url;
    }
    getListData(endpoint) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let users = [];
            return new Promise(resolve => {
                this.http.get(endpoint).subscribe((data) => {
                    if (data != null && data.length > 0) {
                        for (let miexgift of data) {
                            const tmp = {
                                id: miexgift.id,
                                dateExchange: miexgift.dateExchange,
                                observations: miexgift.observations,
                                delivered: miexgift.delivered,
                                agency: miexgift.agency,
                                gift: miexgift.gift
                            };
                            users.push(tmp);
                        }
                    }
                    resolve(users);
                }, error => {
                });
            });
        });
    }
    getAllPaged(element, page) {
        return this.getListData(this.URLDatabase + this.endpoint + "/element/" + element + "/page/" + page);
    }
    getAll() {
        return this.getListData(this.URLDatabase + this.endpoint);
    }
    getByDateFilter(date) {
        return this.getListData(this.URLDatabase + this.endpoint + "/date/" + date);
    }
    getByPoints(points) {
        return this.getListData(this.URLDatabase + this.endpoint + "/points/" + points);
    }
    getByAgencyUsername(auname) {
        return this.getListData(this.URLDatabase + this.endpoint + "/auname/" + auname);
    }
    getById(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let exchangegift = null;
            return new Promise(resolve => {
                this.http.get(this.URLDatabase + this.endpoint + "/id/" + id).subscribe((miexgift) => {
                    if (miexgift.id) {
                        const tmp = {
                            id: miexgift.id,
                            dateExchange: miexgift.dateExchange,
                            observations: miexgift.observations,
                            delivered: miexgift.delivered,
                            agency: miexgift.agency,
                            gift: miexgift.gift
                        };
                        exchangegift = tmp;
                    }
                    resolve(exchangegift);
                }, error => {
                    resolve(exchangegift);
                });
            });
        });
    }
    getByDeliveredPaged(delivered, element, page) {
        return this.getListData(this.URLDatabase + this.endpoint + "/delivered/" + delivered + "/element/" + element + "/paged/" + page);
    }
    getByGiftName(gname) {
        return this.getListData(this.URLDatabase + this.endpoint + "/gname/" + gname);
    }
    getByAgencyPaged(agency, element, page) {
        if (agency != null) {
            return this.getListData(this.URLDatabase + this.endpoint + "/id_agency/" + agency.id + "/element/" + element + "/paged/" + page);
        }
        else {
            let result;
            return result;
        }
    }
    createOrUpdate(exgift) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (exgift != null) {
                const body = {
                    id: exgift.id,
                    dateExchange: exgift.dateExchange,
                    observations: exgift.observations,
                    delivered: exgift.delivered,
                    agency: {
                        id: exgift.agency.id
                    },
                    gift: {
                        id: exgift.gift.id
                    }
                };
                return new Promise(resolve => {
                    this.http.post(this.URLDatabase + this.endpoint, body).subscribe((data) => {
                        exgift.id = data.id;
                        resolve(exgift);
                    }, error => {
                        resolve(null);
                    });
                });
            }
        });
    }
    delete(exgift) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (exgift != null) {
                const body = {
                    id: exgift.id
                };
                return new Promise(resolve => {
                    this.http.delete(this.URLDatabase + this.endpoint, { body }).subscribe(() => {
                        resolve(true);
                    }, error => {
                        resolve(false);
                    });
                });
            }
        });
    }
};
ExchangeGiftService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
ExchangeGiftService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ExchangeGiftService);



/***/ }),

/***/ 58015:
/*!*******************************************************************************!*\
  !*** ./src/app/user/exchangeGift/exchange-gift-saw/exchange-gift-saw.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGiftSawPage": () => (/* binding */ ExchangeGiftSawPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exchange_gift_saw_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./exchange-gift-saw.page.html */ 44668);
/* harmony import */ var _exchange_gift_saw_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchange-gift-saw.page.scss */ 14344);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_exchange_gift_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/exchange-gift.service */ 40922);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/util.service */ 371);
/* harmony import */ var _services_agency_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/agency.service */ 99574);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ 36636);
/* harmony import */ var _services_gift_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/gift.service */ 44483);










let ExchangeGiftSawPage = class ExchangeGiftSawPage {
    constructor(modalCtrl, exs, uts, alerta, as, authS, gs) {
        this.modalCtrl = modalCtrl;
        this.exs = exs;
        this.uts = uts;
        this.alerta = alerta;
        this.as = as;
        this.authS = authS;
        this.gs = gs;
    }
    ngOnInit() {
        this.img = this.exchangesaw.gift.picture;
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.img = "https://res.cloudinary.com/duq0pz1vi/image/upload/v1645471738/" + this.exchangesaw.gift.picture;
        });
    }
    close() {
        this.modalCtrl.dismiss();
    }
    delete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.exchangesaw.delivered) {
                yield this.uts.presentLoading();
                try {
                    let result = yield this.exs.delete(this.exchangesaw);
                    if (result) {
                        this.authS.agency = yield this.as.getById(this.authS.agency.id);
                        this.gs.added = true;
                        this.uts.presentToast("Su pedido se ha cancelado correctamente. Puntos añadidos: " + this.exchangesaw.gift.points + ".", "success", "checkmark-circle-outline");
                    }
                    else {
                        this.uts.presentToast("Error al eliminar el pedido.", "danger.");
                    }
                    yield this.uts.hideLoading();
                    this.modalCtrl.dismiss({
                        result: result
                    });
                }
                catch (error) {
                    this.uts.presentToast("Error al eliminar el pedido.", "danger.");
                    yield this.uts.hideLoading();
                }
            }
            else
                this.uts.presentToast("Error: Está intentando eliminar un pedido entregado.", "danger", 'ban');
        });
    }
    mensagealerta(n) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alerta.create({
                header: 'Eliminar',
                message: '¿Desea eliminar este pedido? Esta acción no podrá deshacerse.',
                buttons: [
                    { text: 'Eliminar',
                        cssClass: 'rojo',
                        handler: () => {
                            this.delete();
                        }
                    }, {
                        text: 'Cancelar',
                        cssClass: 'secondary',
                        handler: (blah) => { }
                    },
                ]
            });
            yield alert.present();
        });
    }
};
ExchangeGiftSawPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _services_exchange_gift_service__WEBPACK_IMPORTED_MODULE_2__.ExchangeGiftService },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _services_agency_service__WEBPACK_IMPORTED_MODULE_4__.AgencyService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _services_gift_service__WEBPACK_IMPORTED_MODULE_6__.GiftService }
];
ExchangeGiftSawPage.propDecorators = {
    exchangesaw: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
ExchangeGiftSawPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-exchange-gift-saw',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exchange_gift_saw_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_exchange_gift_saw_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExchangeGiftSawPage);



/***/ }),

/***/ 44668:
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/user/exchangeGift/exchange-gift-saw/exchange-gift-saw.page.html ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"medium\">\r\n    <ion-title>\r\n      Visualizacion de Pedido\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" >\r\n  <div class=\"body\">\r\n    <div class=\"ion-padding\">\r\n      <div class=\"center\">\r\n\r\n        <ion-card>\r\n          <ion-img  [src]=\"this.img\"></ion-img>\r\n        </ion-card>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"ion-padding\">\r\n      <div class=\"formulario\">\r\n        <ion-grid>\r\n\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">\r\n              <ion-text>Fecha de Intercambio:</ion-text>\r\n            </ion-col>\r\n\r\n            <ion-col>\r\n              <ion-text>\r\n                {{this.exchangesaw.dateExchange}}\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">\r\n              <ion-text>Observaciones:</ion-text>\r\n            </ion-col>\r\n            <div>\r\n            <ion-text>\r\n              {{this.exchangesaw.observations}}\r\n            </ion-text>\r\n           </div>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">\r\n              <ion-text>Entregado:</ion-text>\r\n            </ion-col>\r\n              <div>\r\n                <ion-col *ngIf=\"this.exchangesaw.delivered\">\r\n                  <ion-text>\r\n                Si\r\n                  </ion-text>\r\n                </ion-col>\r\n\r\n                <ion-col *ngIf=\"!this.exchangesaw.delivered\">\r\n                  <ion-text>\r\n                No\r\n                  </ion-text>\r\n                </ion-col>\r\n            </div>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"12\">\r\n              <div>\r\n                <ion-button (click)=\"close()\" expand=\"block\" shape=\"round\"  style=\"margin-top: 4% !important;\" class=\"button\">\r\n                  Cerrar Visualizacion\r\n                </ion-button>   \r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n            <ion-row class=\"ion-align-items-center\">\r\n\r\n            <ion-col size=\"12\">\r\n              <ion-button *ngIf=\"!this.exchangesaw.delivered\" (click)=\"mensagealerta(exchangesaw)\" color=\"danger\" expand=\"block\" shape=\"round\"  style=\"margin-top: 4% !important;\" class=\"button\">\r\n                Cancelar pedido\r\n              </ion-button>\r\n            </ion-col>\r\n            \r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 14344:
/*!*********************************************************************************!*\
  !*** ./src/app/user/exchangeGift/exchange-gift-saw/exchange-gift-saw.page.scss ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #d0e5f0 !important;\n  background-size: cover;\n  min-height: 100%;\n}\n.body ion-card {\n  height: 30%;\n  width: 30%;\n}\n.body ion-card ion-img {\n  border: 0.1cm solid black;\n}\n.formulario {\n  margin-top: 1.5rem;\n  margin-left: 1rem;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n}\n.button {\n  --background: #4083cc;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2hhbmdlLWdpZnQtc2F3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQUNKO0FBQUk7RUFDRSx5QkFBQTtBQUVOO0FBSUE7RUFFSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUZKO0FBS0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFGRiIsImZpbGUiOiJleGNoYW5nZS1naWZ0LXNhdy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcclxuICBiYWNrZ3JvdW5kOiAjZDBlNWYwICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG5cclxuICBpb24tY2FyZHtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGlvbi1pbWd7XHJcbiAgICAgIGJvcmRlcjogMC4xMGNtIHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5mb3JtdWxhcmlve1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbi5idXR0b257XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNDA4M2NjO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_user_exchangeGift_exchange-gift-saw_exchange-gift-saw_page_ts.js.map