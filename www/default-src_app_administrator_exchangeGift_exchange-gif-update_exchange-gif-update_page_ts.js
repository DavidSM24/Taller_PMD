"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_administrator_exchangeGift_exchange-gif-update_exchange-gif-update_page_ts"],{

/***/ 48667:
/*!********************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gif-update/exchange-gif-update.page.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGifUpdatePage": () => (/* binding */ ExchangeGifUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exchange_gif_update_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./exchange-gif-update.page.html */ 61392);
/* harmony import */ var _exchange_gif_update_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchange-gif-update.page.scss */ 99760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_agency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/agency.service */ 99574);
/* harmony import */ var src_app_services_exchange_gift_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/exchange-gift.service */ 40922);
/* harmony import */ var src_app_services_gift_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/gift.service */ 44483);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ 371);










let ExchangeGifUpdatePage = class ExchangeGifUpdatePage {
    constructor(excser, fb, uts, pickerController, giftserv, ageserv, modalCtrl, as) {
        this.excser = excser;
        this.fb = fb;
        this.uts = uts;
        this.pickerController = pickerController;
        this.giftserv = giftserv;
        this.ageserv = ageserv;
        this.modalCtrl = modalCtrl;
        this.as = as;
        this.formEditExchange = this.fb.group({
            dateExchange: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            observations: [""]
        });
    }
    ngOnInit() {
        try {
            this.mygift = this.exchange.gift;
            this.myagency = this.exchange.agency;
            this.formEditExchange = this.fb.group({
                dateExchange: [this.exchange.dateExchange, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
                observations: [this.exchange.observations, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
                delivered: [this.exchange.delivered, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
            });
        }
        catch (error) {
        }
    }
    EditExgift() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.mygift != null && this.myagency != null) {
                this.uts.presentLoading();
                let Exchangeeditado = {
                    id: this.exchange.id,
                    dateExchange: this.formEditExchange.get("dateExchange").value,
                    observations: this.formEditExchange.get("observations").value,
                    delivered: this.toggle.checked,
                    agency: this.myagency,
                    gift: this.mygift
                };
                Exchangeeditado = yield this.excser.createOrUpdate(Exchangeeditado);
                if (Exchangeeditado.id) {
                    this.formEditExchange.reset();
                    this.uts.presentToast('Pedido modificado correctamente.', 'success', "checkmark-circle-outline");
                }
                else {
                    this.uts.presentToast('Un error ha surgido al intentar actualiar el pedido. Compruebe la disponibilidad del regalo.', 'danger', 'ban');
                }
                this.uts.hideLoading();
                this.modalCtrl.dismiss({
                    newExchange: Exchangeeditado
                });
            }
        });
    }
    showGiftsPicker() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let options = {
                buttons: [
                    {
                        text: "Cancel",
                        role: 'cancel',
                        handler: (value) => {
                            if (!this.mygift) {
                                this.errorGift = true;
                            }
                        }
                    },
                    {
                        text: 'Ok',
                        handler: (value) => {
                            this.mygift = value.Regalos.value;
                            this.errorGift = false;
                        }
                    }
                ],
                columns: [{
                        name: 'Regalos',
                        options: this.getGiftColumnOptions()
                    }]
            };
            let picker = yield this.pickerController.create(options);
            picker.present();
        });
    }
    getGiftColumnOptions() {
        let options = [];
        this.gifts.forEach(x => {
            options.push({ text: x.name, value: x });
        });
        return options;
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.uts.presentLoading();
            this.gifts = yield this.giftserv.getAll();
            this.agencies = yield this.ageserv.getAll();
            if (this.agencies.length <= 0 && this.gifts.length <= 0) {
                this.uts.presentToast('', 'danger', 'ban');
            }
            this.uts.hideLoading();
        });
    }
    showAgenciesPicker() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let options = {
                buttons: [
                    {
                        text: "Cancel",
                        role: 'cancel'
                    },
                    {
                        text: 'Ok',
                        handler: (value) => {
                            this.myagency = value.Agencias.value;
                        }
                    }
                ],
                columns: [{
                        name: 'Agencias',
                        options: this.getAgenciesColumnOptions()
                    }]
            };
            let picker = yield this.pickerController.create(options);
            picker.present();
        });
    }
    getAgenciesColumnOptions() {
        let options = [];
        this.agencies.forEach(x => {
            options.push({ text: x.myInsuranceCompany.cia_Name + " - " + x.location, value: x });
        });
        return options;
    }
    close() {
        this.modalCtrl.dismiss();
    }
};
ExchangeGifUpdatePage.ctorParameters = () => [
    { type: src_app_services_exchange_gift_service__WEBPACK_IMPORTED_MODULE_3__.ExchangeGiftService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__.UtilService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PickerController },
    { type: src_app_services_gift_service__WEBPACK_IMPORTED_MODULE_4__.GiftService },
    { type: src_app_services_agency_service__WEBPACK_IMPORTED_MODULE_2__.AgencyService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: src_app_services_agency_service__WEBPACK_IMPORTED_MODULE_2__.AgencyService }
];
ExchangeGifUpdatePage.propDecorators = {
    exchange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToggle,] }]
};
ExchangeGifUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-exchange-gif-update',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exchange_gif_update_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_exchange_gif_update_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExchangeGifUpdatePage);



/***/ }),

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

/***/ 61392:
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/exchangeGift/exchange-gif-update/exchange-gif-update.page.html ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Editar Pedido\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"body\">\r\n    <form [formGroup]=\"formEditExchange\" class=\"ion-padding\">\r\n      <div class=\"formulario\">\r\n      <ion-grid>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1.5\" sizeLg=\"1.5\">\r\n            <ion-label>Fecha de Intercambio:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10.5\" sizeLg=\"10.5\">\r\n            <ion-input formControlName=\"dateExchange\" class=\"customInput\" type=\"date\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.formEditExchange.get('dateExchange').invalid&&formEditExchange.get('dateExchange').touched\">\r\n              *Campo obligatorio. Seleccione una fecha válida.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1.5\" sizeLg=\"1.5\">\r\n            <ion-label>Observaciones:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10.5\" sizeLg=\"10.5\">\r\n            <ion-textarea formControlName=\"observations\"  class=\"customInput\" type=\"text\"></ion-textarea>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1.5\" sizeLg=\"1.5\">\r\n            Entregado:\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10.5\" sizeLg=\"10.5\">\r\n            <ion-item  lines=\"none\">\r\n              No<ion-toggle [checked]=\"this.exchange.delivered\"></ion-toggle>Si\r\n           </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1.5\" sizeLg=\"1.5\">\r\n            <ion-label>Agencia:</ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"rem\">\r\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"showAgenciesPicker()\" *ngIf=\"this.myagency==null\">\r\n              Seleccionar\r\n            </ion-button>\r\n            <ion-button disabled=\"true\" expand=\"block\" shape=\"round\" (click)=\"showAgenciesPicker()\" *ngIf=\"this.myagency!=null\">\r\n              {{this.myagency.myInsuranceCompany.cia_Name +\" - \"+ this.myagency.location}}\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1.5\" sizeLg=\"1.5\">\r\n            <ion-label>Regalo:</ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"rem\">\r\n            <ion-button disabled=\"true\" expand=\"block\" shape=\"round\" (click)=\"showGiftsPicker()\" *ngIf=\"this.mygift==null\">\r\n              Seleccionar\r\n            </ion-button>\r\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"showGiftsPicker()\" *ngIf=\"this.mygift!=null\">\r\n              {{this.mygift.name}}\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.errorGift\">\r\n              *Campo obligatorio. Seleccione un regalo a canjear.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"6\">\r\n            <ion-button (click)=\"close()\" expand=\"block\" shape=\"round\"  style=\"margin-top: 2% !important;\" class=\"button\">\r\n              Cancelar\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button (click)=\"EditExgift()\" expand=\"block\" shape=\"round\"  style=\"margin-top: 2% !important;\" class=\"button\">\r\n              Actualizar\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    </form>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 99760:
/*!**********************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gif-update/exchange-gif-update.page.scss ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n\n.button {\n  --background: #22388c;\n}\n\ncustomInput ion-icon {\n  color: #22388c !important;\n}\n\nion-input.ng-invalid.ng-touched {\n  border-left: 5px solid #a94442;\n  border-right: 5px solid #a94442;\n}\n\nion-input.ng-valid.ng-dirty {\n  border-left: 5px solid #42A948;\n  border-right: 5px solid #42A948;\n}\n\nselect.ng-invalid.ng-touched {\n  border-left: 5px solid #a94442;\n  border-right: 5px solid #a94442;\n}\n\nselect.ng-valid.ng-dirty {\n  border-left: 5px solid #42A948;\n  border-right: 5px solid #42A948;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2hhbmdlLWdpZi11cGRhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFDQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFFRjs7QUFBQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFHRjs7QUFEQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFJRiIsImZpbGUiOiJleGNoYW5nZS1naWYtdXBkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gICAgYmFja2dyb3VuZDogIzcxNzQ5OTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjIzODhjO1xyXG59XHJcblxyXG5jdXN0b21JbnB1dCBpb24taWNvbntcclxuICBjb2xvcjojMjIzODhjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjtcclxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG59XHJcbmlvbi1pbnB1dC5uZy12YWxpZC5uZy1kaXJ0eSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICM0MkE5NDg7XHJcbn1cclxuc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNhOTQ0NDI7XHJcbn1cclxuc2VsZWN0Lm5nLXZhbGlkLm5nLWRpcnR5IHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7XHJcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzQyQTk0ODtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_administrator_exchangeGift_exchange-gif-update_exchange-gif-update_page_ts.js.map