"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_administrator_exchangeGift_exchange-gif-create_exchange-gif-create_module_ts"],{

/***/ 5815:
/*!******************************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gif-create/exchange-gif-create-routing.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGifCreatePageRoutingModule": () => (/* binding */ ExchangeGifCreatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _exchange_gif_create_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchange-gif-create.page */ 36639);




const routes = [
    {
        path: '',
        component: _exchange_gif_create_page__WEBPACK_IMPORTED_MODULE_0__.ExchangeGifCreatePage
    }
];
let ExchangeGifCreatePageRoutingModule = class ExchangeGifCreatePageRoutingModule {
};
ExchangeGifCreatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExchangeGifCreatePageRoutingModule);



/***/ }),

/***/ 95017:
/*!**********************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gif-create/exchange-gif-create.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGifCreatePageModule": () => (/* binding */ ExchangeGifCreatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _exchange_gif_create_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchange-gif-create-routing.module */ 5815);
/* harmony import */ var _exchange_gif_create_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchange-gif-create.page */ 36639);







let ExchangeGifCreatePageModule = class ExchangeGifCreatePageModule {
};
ExchangeGifCreatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _exchange_gif_create_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExchangeGifCreatePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_exchange_gif_create_page__WEBPACK_IMPORTED_MODULE_1__.ExchangeGifCreatePage]
    })
], ExchangeGifCreatePageModule);



/***/ }),

/***/ 36639:
/*!********************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gif-create/exchange-gif-create.page.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGifCreatePage": () => (/* binding */ ExchangeGifCreatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exchange_gif_create_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./exchange-gif-create.page.html */ 66857);
/* harmony import */ var _exchange_gif_create_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchange-gif-create.page.scss */ 1830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_agency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/agency.service */ 99574);
/* harmony import */ var src_app_services_exchange_gift_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/exchange-gift.service */ 40922);
/* harmony import */ var src_app_services_gift_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/gift.service */ 44483);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ 371);










let ExchangeGifCreatePage = class ExchangeGifCreatePage {
    constructor(exser, fb, uts, pickerController, giftserv, ageserv) {
        this.exser = exser;
        this.fb = fb;
        this.uts = uts;
        this.pickerController = pickerController;
        this.giftserv = giftserv;
        this.ageserv = ageserv;
        this.mygift = null;
        this.formExchange = this.fb.group({
            dateExchange: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            observations: [""]
        });
    }
    CreateExgift() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.uts.presentLoading();
                if (this.mygift != null && this.myagency != null) {
                    let newExchange = {
                        dateExchange: this.formExchange.get("dateExchange").value,
                        observations: this.formExchange.get("observations").value,
                        delivered: this.toggle.checked,
                        agency: this.myagency,
                        gift: this.mygift
                    };
                    try {
                        let result = yield this.exser.createOrUpdate(newExchange);
                        if (!result) {
                            this.uts.presentToast("Error al insertar canje, compruebe los puntos de la agencia y la disponibilidad del regalo.", "danger", 'ban');
                        }
                        else {
                            let mail = {
                                subject: 'Pedido: ' + newExchange.agency.myUser.name + " -> " + newExchange.gift.name,
                                receiver: newExchange.agency.myUser.email,
                                message: newExchange.agency.myUser.name + ' ha creado un nuevo pedido: ' + newExchange.gift.name + '. Puntos: ' + newExchange.gift.points + "."
                            };
                            this.uts.presentToast("Pedido agregado correctamente.", "success", "checkmark-circle-outline");
                            this.ageserv.added = true;
                            try {
                                let result = yield this.uts.sendMail(mail);
                                if (result)
                                    this.uts.presentToast("Se ha enviado un correo a los administradores con la información del neuvo pedido.", "success", "checkmark-circle-outline");
                                //else this.uts.presentToast("No se ha podido enviar el correo al administrador con su pedido.", "danger", "ban");
                            }
                            catch (error) {
                            }
                            this.formExchange.reset();
                        }
                    }
                    catch (err) {
                        this.uts.presentToast("Error agregando Pedido", "danger", 'ban');
                    }
                }
            }
            catch (error) {
                yield this.uts.hideLoading;
            }
            yield this.uts.hideLoading();
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
            yield this.uts.presentLoading();
            this.gifts = yield this.giftserv.getByAvailablePaged(true, 99999, 0);
            this.agencies = yield this.ageserv.getAll();
            if (this.agencies.length <= 0 && this.gifts.length <= 0) {
                this.uts.presentToast('', 'danger', 'ban');
            }
            yield this.uts.hideLoading();
        });
    }
    showAgenciesPicker() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let options = {
                buttons: [
                    {
                        text: "Cancel",
                        handler: (value) => {
                            if (!this.myagency) {
                                this.errorAgency = true;
                            }
                        },
                        role: 'cancel'
                    },
                    {
                        text: 'Ok',
                        handler: (value) => {
                            this.myagency = value.Agencias.value;
                            this.errorAgency = false;
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
};
ExchangeGifCreatePage.ctorParameters = () => [
    { type: src_app_services_exchange_gift_service__WEBPACK_IMPORTED_MODULE_3__.ExchangeGiftService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__.UtilService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PickerController },
    { type: src_app_services_gift_service__WEBPACK_IMPORTED_MODULE_4__.GiftService },
    { type: src_app_services_agency_service__WEBPACK_IMPORTED_MODULE_2__.AgencyService }
];
ExchangeGifCreatePage.propDecorators = {
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToggle,] }]
};
ExchangeGifCreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-exchange-gif-create',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exchange_gif_create_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_exchange_gif_create_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExchangeGifCreatePage);



/***/ }),

/***/ 66857:
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/exchangeGift/exchange-gif-create/exchange-gif-create.page.html ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Crea Pedido\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"body\">\r\n    <form [formGroup]=\"formExchange\" class=\"ion-padding\">\r\n      <div class=\"formulario\">\r\n      <ion-grid>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1.5\" sizeLg=\"1.5\">\r\n            <ion-label>Fecha de Intercambio:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10.5\" sizeLg=\"10.5\">\r\n            <ion-input formControlName=\"dateExchange\" class=\"customInput\" type=\"date\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.formExchange.get('dateExchange').invalid&&formExchange.get('dateExchange').touched\">\r\n              *Campo obligatorio. Seleccione una fecha válida.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1.5\" sizeLg=\"1.5\">\r\n            <ion-label>Observaciones:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10.5\" sizeLg=\"10.5\">\r\n            <ion-textarea formControlName=\"observations\" class=\"customInput\" type=\"text\"></ion-textarea>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1.5\" sizeLg=\"1.5\">\r\n            Entregado:\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10.5\" sizeLg=\"10.5\">\r\n            <ion-item  lines=\"none\">\r\n              No<ion-toggle></ion-toggle>Si\r\n           </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1.5\" sizeLg=\"1.5\">\r\n            <ion-label>Agencia:</ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col sizeSm=\"rem\">\r\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"showAgenciesPicker()\" *ngIf=\"this.myagency==null\">\r\n              Seleccionar\r\n            </ion-button>\r\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"showAgenciesPicker()\" *ngIf=\"this.myagency!=null\">\r\n              {{this.myagency.myInsuranceCompany.cia_Name + \" - \"+this.myagency.location}}\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.errorAgency\">\r\n              *Campo obligatorio. Seleccione una agencia.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1.5\" sizeLg=\"1.5\">\r\n            <ion-label>Regalo:</ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col sizeSm=\"rem\">\r\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"showGiftsPicker()\" *ngIf=\"this.mygift==null\">\r\n              Seleccionar\r\n            </ion-button>\r\n            <ion-button  expand=\"block\" shape=\"round\" (click)=\"showGiftsPicker()\" *ngIf=\"this.mygift!=null\">\r\n              {{this.mygift.name}}\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.errorGift\">\r\n              *Campo obligatorio. Seleccione un regalo a canjear.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" routerLink=\"/tab-administrator/exchange-gift/list\" class=\"button\">\r\n              Volver\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"6\">\r\n            <ion-button (click)=\"CreateExgift()\" expand=\"block\" shape=\"round\"  style=\"margin-top: 2% !important;\" class=\"button\" [disabled]=\"this.formExchange.invalid || this.myagency==null || this.mygift==null\">\r\n              Crear Pedido\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    </form>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 1830:
/*!**********************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gif-create/exchange-gif-create.page.scss ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n\n.button {\n  --background: #22388c;\n}\n\nion-input.ng-invalid.ng-touched {\n  border-left: 5px solid #a94442;\n  border-right: 5px solid #a94442;\n}\n\nion-input.ng-valid.ng-dirty {\n  border-left: 5px solid #42A948;\n  border-right: 5px solid #42A948;\n}\n\nselect.ng-invalid.ng-touched {\n  border-left: 5px solid #a94442;\n  border-right: 5px solid #a94442;\n}\n\nselect.ng-valid.ng-dirty {\n  border-left: 5px solid #42A948;\n  border-right: 5px solid #42A948;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2hhbmdlLWdpZi1jcmVhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUNBO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQUVGOztBQUFBO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQUdGOztBQURBO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQUlGIiwiZmlsZSI6ImV4Y2hhbmdlLWdpZi1jcmVhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzE3NDk5O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyMjM4OGM7XHJcbn1cclxuXHJcbmlvbi1pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjtcclxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG59XHJcbmlvbi1pbnB1dC5uZy12YWxpZC5uZy1kaXJ0eSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICM0MkE5NDg7XHJcbn1cclxuc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNhOTQ0NDI7XHJcbn1cclxuc2VsZWN0Lm5nLXZhbGlkLm5nLWRpcnR5IHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7XHJcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzQyQTk0ODtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_administrator_exchangeGift_exchange-gif-create_exchange-gif-create_module_ts.js.map