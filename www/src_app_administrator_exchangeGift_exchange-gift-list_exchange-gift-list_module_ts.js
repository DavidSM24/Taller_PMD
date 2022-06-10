"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_exchangeGift_exchange-gift-list_exchange-gift-list_module_ts"],{

/***/ 82071:
/*!****************************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gift-list/exchange-gift-list-routing.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGiftListPageRoutingModule": () => (/* binding */ ExchangeGiftListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _exchange_gift_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchange-gift-list.page */ 99670);




const routes = [
    {
        path: '',
        component: _exchange_gift_list_page__WEBPACK_IMPORTED_MODULE_0__.ExchangeGiftListPage,
        children: [
            {
                path: 'exchange-gif-update',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../exchange-gif-update/exchange-gif-update.module */ 39890)).then(m => m.ExchangeGifUpdatePageModule)
            },
            {
                path: 'exchange-gif-saw',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../exchange-gif-saw/exchange-gif-saw.module */ 82142)).then(m => m.ExchangeGifSawPageModule)
            },
            {
                path: 'exchange-gif-create',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_administrator_exchangeGift_exchange-gif-create_exchange-gif-create_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../exchange-gif-create/exchange-gif-create.module */ 95017)).then(m => m.ExchangeGifCreatePageModule)
            },
        ]
    },
];
let ExchangeGiftListPageRoutingModule = class ExchangeGiftListPageRoutingModule {
};
ExchangeGiftListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExchangeGiftListPageRoutingModule);



/***/ }),

/***/ 46243:
/*!********************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gift-list/exchange-gift-list.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGiftListPageModule": () => (/* binding */ ExchangeGiftListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _exchange_gift_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchange-gift-list-routing.module */ 82071);
/* harmony import */ var _exchange_gift_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchange-gift-list.page */ 99670);
/* harmony import */ var _exchange_gif_update_exchange_gif_update_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exchange-gif-update/exchange-gif-update.page */ 48667);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var _exchange_gif_saw_exchange_gif_saw_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../exchange-gif-saw/exchange-gif-saw.page */ 71549);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/util.service */ 371);











let ExchangeGiftListPageModule = class ExchangeGiftListPageModule {
};
ExchangeGiftListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _exchange_gift_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExchangeGiftListPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule
        ],
        providers: [_services_util_service__WEBPACK_IMPORTED_MODULE_5__.UtilService],
        declarations: [_exchange_gift_list_page__WEBPACK_IMPORTED_MODULE_1__.ExchangeGiftListPage, _exchange_gif_update_exchange_gif_update_page__WEBPACK_IMPORTED_MODULE_2__.ExchangeGifUpdatePage, _exchange_gif_saw_exchange_gif_saw_page__WEBPACK_IMPORTED_MODULE_4__.ExchangeGifSawPage]
    })
], ExchangeGiftListPageModule);



/***/ }),

/***/ 99670:
/*!******************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gift-list/exchange-gift-list.page.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGiftListPage": () => (/* binding */ ExchangeGiftListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exchange_gift_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./exchange-gift-list.page.html */ 94938);
/* harmony import */ var _exchange_gift_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchange-gift-list.page.scss */ 98992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_exchange_gift_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/exchange-gift.service */ 40922);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _exchange_gif_update_exchange_gif_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../exchange-gif-update/exchange-gif-update.page */ 48667);
/* harmony import */ var _exchange_gif_saw_exchange_gif_saw_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../exchange-gif-saw/exchange-gif-saw.page */ 71549);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ 36636);
/* harmony import */ var _services_agency_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/agency.service */ 99574);










let ExchangeGiftListPage = class ExchangeGiftListPage {
    constructor(exs, loading, toast, alerta, pt, modalCtrl, authS, as) {
        this.exs = exs;
        this.loading = loading;
        this.toast = toast;
        this.alerta = alerta;
        this.pt = pt;
        this.modalCtrl = modalCtrl;
        this.authS = authS;
        this.as = as;
        this.exGifts = [];
        this.oldExGifts = [];
        this.exGiftsx = [];
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.niTems = Math.ceil(this.pt.height() / 20 + 10);
            yield this.cargaExGifts();
        });
    }
    edit(exchange) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const modal = yield this.modalCtrl.create({
                    component: _exchange_gif_update_exchange_gif_update_page__WEBPACK_IMPORTED_MODULE_3__.ExchangeGifUpdatePage,
                    cssClass: 'fullscreen',
                    componentProps: {
                        exchange: exchange
                    }
                });
                yield modal.present();
                const resp = yield modal.onDidDismiss();
                if (resp.data != null) {
                    let i = this.exGifts.indexOf(exchange);
                    this.exGifts[i] = resp.data.newExchange;
                    this.oldExGifts.forEach((e) => {
                        if (e.id == resp.data.newExchange.id) {
                            let i2 = this.oldExGifts.indexOf(e);
                            this.oldExGifts[i2] = this.exGifts[i];
                        }
                    });
                }
            }
            catch (error) {
            }
        });
    }
    setbyExGiftByStatus(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.searchChange();
        });
    }
    saw(exchangesaw) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const modal = yield this.modalCtrl.create({
                    component: _exchange_gif_saw_exchange_gif_saw_page__WEBPACK_IMPORTED_MODULE_4__.ExchangeGifSawPage,
                    componentProps: {
                        'exchangesaw': exchangesaw
                    }
                });
                yield modal.present();
                const resp = yield modal.onDidDismiss();
                if (resp.data != null) {
                    let i = this.exGifts.indexOf(exchangesaw);
                    this.exGifts[i] = resp.data.newExchange;
                    let i2 = this.oldExGifts.indexOf(exchangesaw);
                    this.oldExGifts[i2] = resp.data.newExchange;
                }
            }
            catch (error) {
            }
        });
    }
    cargaExGifts(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.infinite) {
                this.infinite.disabled = false;
                this.oldInfinite = false;
            }
            if (!event) {
                yield this.presentLoading();
            }
            this.exGifts = [];
            this.oldExGifts = [];
            try {
                this.exGifts = yield this.exs.getAllPaged(this.niTems, this.exGifts.length);
                this.exGifts = this.sortList(this.exGifts);
                this.oldExGifts = this.oldExGifts.concat(this.exGifts);
                this.exGiftsx = this.exGifts;
            }
            catch (err) {
                console.error(err);
                yield this.presentToast("Error cargando datos", "danger", 'ban');
            }
            finally {
                if (event) {
                    event.target.complete();
                }
                else {
                    yield this.miLoading.dismiss();
                }
            }
        });
    }
    borra(exgift) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.presentLoading();
            let result = yield this.exs.delete(exgift);
            if (result) {
                let i = this.exGifts.indexOf(exgift, 0);
                if (i > -1) {
                    this.exGifts.splice(i, 1);
                }
                this.oldExGifts.forEach((e) => {
                    if (e.id == exgift.id) {
                        let i2 = this.oldExGifts.indexOf(e);
                        this.oldExGifts.splice(i2, 1);
                    }
                });
                this.presentToast("Pedido eliminado correctamente.", "success", "checkmark-circle-outline");
                this.as.added = true;
            }
            else {
                this.presentToast("Ha habido un error al intentar eliminar el pedido.", "danger", "ban");
            }
            yield this.miLoading.dismiss();
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.miLoading = yield this.loading.create({
                message: ''
            });
            yield this.miLoading.present();
        });
    }
    presentToast(msg, clr, icn) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const miToast = yield this.toast.create({
                message: msg,
                duration: 2000,
                color: clr,
                icon: icn
            });
            miToast.present();
        });
    }
    mensagealerta(n) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alerta.create({
                header: 'Eliminar',
                message: '¿Desea eliminar este Pedido?',
                buttons: [
                    {
                        text: 'Eliminar',
                        cssClass: 'rojo',
                        handler: () => {
                            this.borra(n);
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
    infiniteLoad($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let newExchange = [];
            if (!this.infinite.disabled) {
                newExchange = yield this.exs.getAllPaged(this.niTems, this.exGifts.length);
                newExchange = this.sortList(newExchange);
                this.exGifts = this.exGifts.concat(newExchange);
                this.oldExGifts = this.oldExGifts.concat(newExchange);
                if (newExchange.length < 30) {
                    this.infinite.disabled = true;
                    this.oldInfinite = true;
                }
            }
            this.infinite.complete();
        });
    }
    reset(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.infinite.disabled = false;
            this.oldInfinite = false;
            this.exGifts = [];
            this.oldExGifts = [];
            this.cargaExGifts(event);
        });
    }
    logout() {
        this.authS.logout();
    }
    onSearchChange(event) {
        this.searchStr = event.detail.value;
    }
    searchChange() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.searchStr = this.sb.value;
                let regex = new RegExp("^[ ]");
                if (!this.searchStr.match(regex)) {
                    let resultFilter = [];
                    let listS = [];
                    let selectO = this.select.value;
                    let list = [];
                    this.exGifts = [];
                    let lenght = this.searchStr.length;
                    if (lenght > 0) {
                        //consultar y cambiar lista
                        yield this.presentLoading();
                        //date
                        list = yield this.exs.getByDateFilter(this.searchStr);
                        list.forEach((e) => {
                            let result = true;
                            resultFilter.forEach((x) => {
                                if (x.id == e.id)
                                    result = false;
                            });
                            if (result)
                                resultFilter.push(e);
                        });
                        //points
                        if (+this.searchStr >= 0) {
                            list = yield this.exs.getByPoints(this.searchStr);
                            list.forEach((e) => {
                                let result = true;
                                resultFilter.forEach((x) => {
                                    if (x.id == e.id)
                                        result = false;
                                });
                                if (result)
                                    resultFilter.push(e);
                            });
                        }
                        //gift-name
                        list = yield this.exs.getByGiftName(this.searchStr);
                        list.forEach((e) => {
                            let result = true;
                            resultFilter.forEach((x) => {
                                if (x.id == e.id)
                                    result = false;
                            });
                            if (result)
                                resultFilter.push(e);
                        });
                        //agency-user-name
                        list = yield this.exs.getByAgencyUsername(this.searchStr);
                        list.forEach((e) => {
                            let result = true;
                            resultFilter.forEach((x) => {
                                if (x.id == e.id)
                                    result = false;
                            });
                            if (result)
                                resultFilter.push(e);
                        });
                        if (selectO == "true") {
                            resultFilter.forEach((e) => {
                                if (e.delivered)
                                    listS.push(e);
                            });
                            this.exGifts = listS;
                            this.exGifts = this.sortList(this.exGifts);
                        }
                        else if (selectO == "false") {
                            resultFilter.forEach((e) => {
                                if (!e.delivered)
                                    listS.push(e);
                            });
                            this.exGifts = listS;
                            this.exGifts = this.sortList(this.exGifts);
                        }
                        else {
                            this.exGifts = resultFilter;
                            this.exGifts = this.sortList(this.exGifts);
                        }
                        this.infinite.disabled = false;
                        yield this.miLoading.dismiss();
                    }
                    else if (lenght < 1) {
                        yield this.presentLoading();
                        if (selectO == "true") {
                            resultFilter = yield this.exs.getByDeliveredPaged(true, 9999, 0);
                            resultFilter.forEach((e) => {
                                if (e.delivered)
                                    listS.push(e);
                            });
                            this.exGifts = listS;
                            this.infinite.disabled = true;
                        }
                        else if (selectO == "false") {
                            resultFilter = yield this.exs.getByDeliveredPaged(false, 9999, 0);
                            resultFilter.forEach((e) => {
                                if (!e.delivered)
                                    listS.push(e);
                            });
                            this.exGifts = listS;
                            this.infinite.disabled = true;
                        }
                        else {
                            this.exGifts = this.oldExGifts;
                            this.infinite.disabled = this.oldInfinite;
                        }
                        yield this.miLoading.dismiss();
                    }
                }
                else {
                    this.uts.presentToast("La búsqueda no puede comenzar por espacios en blanco.", "danger", "ban");
                }
            }
            catch (error) {
                this.uts.presentToast("Ha habido un error en su búsqueda. Inténtlo de neuvo.", "danger", "ban");
            }
        });
    }
    changeDeliveredAlert(eg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let del;
            if (!eg.delivered)
                del = "Entregado";
            else
                del = "Pendiente";
            const alert = yield this.alerta.create({
                header: 'Cambio de estado de pedido.',
                message: 'El estado de este pedido se cambiará a ' + del + ", ¿está seguro que quiere continuar?",
                buttons: [
                    {
                        text: 'Aceptar',
                        cssClass: 'secondary',
                        handler: () => {
                            this.changeDelivered(eg);
                        }
                    }, {
                        text: 'Cancelar',
                        cssClass: 'rojo',
                        handler: (blah) => { }
                    },
                ]
            });
            yield alert.present();
        });
    }
    changeDelivered(eg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (eg != null) {
                eg.delivered = !eg.delivered;
                let del;
                if (eg.delivered)
                    del = "Entregado";
                else
                    del = "Pendiente";
                try {
                    yield this.presentLoading();
                    eg = yield this.exs.createOrUpdate(eg);
                    if (eg != null) {
                        this.presentToast("Se ha cambiado el estado del pedido a " + del + ".", "success", "checkmark-circle-outline");
                    }
                    yield this.miLoading.dismiss();
                }
                catch (error) {
                    this.presentToast("Ha habido un error al cambiar el estado del pedido.", "danger", 'ban');
                    yield this.miLoading.dismiss();
                }
            }
        });
    }
    sortList(eg) {
        if (eg != null && eg.length > 1) {
            eg = eg.sort((n1, n2) => {
                if (n1.dateExchange > n2.dateExchange) {
                    return 1;
                }
                else if (n1.dateExchange < n2.dateExchange) {
                    return -1;
                }
                else {
                    if (n1.id > n2.id) {
                        return 1;
                    }
                    else if (n1.id < n2.id) {
                        return -1;
                    }
                }
                return 0;
            });
        }
        return eg;
    }
};
ExchangeGiftListPage.ctorParameters = () => [
    { type: src_app_services_exchange_gift_service__WEBPACK_IMPORTED_MODULE_2__.ExchangeGiftService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _services_agency_service__WEBPACK_IMPORTED_MODULE_6__.AgencyService }
];
ExchangeGiftListPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInfiniteScroll,] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSelect,] }],
    sb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSearchbar,] }]
};
ExchangeGiftListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-exchange-gift-list',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exchange_gift_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_exchange_gift_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExchangeGiftListPage);



/***/ }),

/***/ 94938:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/exchangeGift/exchange-gift-list/exchange-gift-list.page.html ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"false\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Lista de Pedidos</ion-title>\r\n\r\n    <ion-buttons style=\"margin-right: 1%;\" slot=\"end\" class=\"icon-div-container\">\r\n      <div title=\"Nuevo\" routerLink=\"/tab-administrator/exchange-gift/create\" >\r\n        <ion-icon class=\"icon-logout\" slot=\"end\" style=\"pointer-events: none;zoom:1.5;cursor:pointer;content:url(../../../../assets/icon/add-circle-outline.png);\" ></ion-icon>\r\n      </div>\r\n      <div title=\"Cerrar Sesión\" (click)=\"logout() \">\r\n      <ion-icon class=\"icon-logout\" slot=\"end\" name=\"log-out-outline\" style=\"pointer-events: none;zoom:1.7;cursor:pointer\"></ion-icon>\r\n      </div>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-row>\r\n      <ion-col sizeSm=\"12\" size=\"9\" sizeMd=\"12\" sizeLg=\"9\">\r\n        <ion-searchbar\r\n          placeholder=\"Encuentra el canjeo que estás buscando...\"\r\n          inputmode=\"text\"\r\n          type=\"text\"\r\n          debounce=\"1000\"\r\n          (ionChange)=\"this.searchChange()\"\r\n          showCancelButton=\"always\"\r\n        ></ion-searchbar>\r\n      </ion-col>\r\n      <ion-col sizeMd=\"3\" sizeSm=\"3\" sizeLg=\"3\" class=\"selector\">\r\n        <ion-item style=\"height: 85%; margin-top:1.1%\">\r\n          <ion-label>Entregado:</ion-label>\r\n          <ion-select\r\n            (ionChange)=\"searchChange()\"\r\n            interface=\"popover\"\r\n            multiple=\"false\"\r\n          >\r\n            <ion-select-option value=\"true\">Si</ion-select-option>\r\n            <ion-select-option value=\"false\">No</ion-select-option>\r\n            <ion-select-option value=\"all\">Todos</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"header-row\">\r\n      <ion-col size=\"1.4\" style=\"border: 0px !important\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" style=\"border: 0px !important\">\r\n        <ion-text>Fecha de Intercambio</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" style=\"border: 0px !important\">\r\n        <ion-text>Nombre de Agencia</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" style=\"border: 0px !important\">\r\n        <ion-text>Nombre de Regalo</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col\r\n        size=\"2.5\"\r\n        style=\"border: 0px !important;\"\r\n      >\r\n        <ion-text>Entregado</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"1\" style=\"border: 0px !important\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" style=\"background-color: white\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"reset($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div class=\"body\">\r\n    <ion-grid class=\"ion-text-center\">\r\n      <ion-row style=\"border-left: 1px solid #4b4b4d;border-right: 1px solid #4b4b4d;\" let *ngFor=\"let exchangeGift of this.exGifts; let i=index\" [ngClass]=\"(i % 2 == 0) ? 'normal' : 'colored'\" >\r\n        <ion-col size=\"0.5\">\r\n          <ion-text>\r\n            <div\r\n              title=\"Editar\"\r\n              (click)=\"edit(exchangeGift)\"\r\n              style=\"cursor: pointer\"\r\n            >\r\n              <ion-icon\r\n                class=\"icon-c\"\r\n                name=\"pencil\"\r\n                style=\"color: #22388c; cursor: pointer\"\r\n              ></ion-icon>\r\n            </div>\r\n          </ion-text>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"0.5\">\r\n          <ion-text>\r\n            <div\r\n              title=\"Ver detalles\"\r\n              (click)=\"saw(exchangeGift)\"\r\n              style=\"cursor: pointer\"\r\n            >\r\n              <ion-icon\r\n                name=\"eye-outline\"\r\n                style=\"color: #22388c; pointer-events: none\"\r\n              ></ion-icon>\r\n            </div>\r\n          </ion-text>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"0.5\">\r\n          <ion-text>\r\n            <div\r\n              (click)=\"changeDeliveredAlert(exchangeGift)\"\r\n              style=\"cursor: pointer\"\r\n              title=\"Cambiar estado\"\r\n            >\r\n              <ion-icon\r\n                (click)=\"changeDeliveredAlert(exchangeGift)\"\r\n                name=\"gift-outline\"\r\n                style=\"color: #22388c; pointer-events: none\"\r\n              ></ion-icon>\r\n            </div>\r\n          </ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"2.5\">\r\n          <ion-text> {{exchangeGift.dateExchange}} </ion-text>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"2.5\">\r\n          <ion-text> {{exchangeGift.agency.myInsuranceCompany.cia_Name + \" - \"+exchangeGift.agency.location}} </ion-text>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"2.5\">\r\n          <ion-text> {{exchangeGift.gift.name}} </ion-text>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"2.6\">\r\n          <div title=\"Entregado\" *ngIf=\"exchangeGift.delivered\">\r\n            <ion-icon\r\n              name=\"checkmark-circle\"\r\n              style=\"pointer-events: none\"\r\n              color=\"success\"\r\n            ></ion-icon>\r\n          </div>\r\n          <div title=\"Pendiente\" *ngIf=\"!exchangeGift.delivered\">\r\n            <ion-icon\r\n              name=\"close-circle\" color=\"danger\"\r\n              style=\"pointer-events: none\"\r\n            ></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"0.4\">\r\n          <ion-text>\r\n            <div\r\n              (click)=\"mensagealerta(exchangeGift)\"\r\n              title=\"Eliminar\"\r\n              style=\"cursor: pointer\"\r\n            >\r\n              <ion-icon\r\n                name=\"trash\"\r\n                color=\"danger\"\r\n                style=\"pointer-events: none\"\r\n              ></ion-icon>\r\n            </div>\r\n          </ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infiniteLoad($event)\">\r\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 98992:
/*!********************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gift-list/exchange-gift-list.page.scss ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "ion-col {\n  border-bottom: 1px solid #4b4b4d;\n}\nion-col ion-text {\n  color: #4b4b4d !important;\n}\n.header-row {\n  border-radius: 0%;\n  border: 0px;\n}\n.header-row ion-col {\n  text-align: center;\n}\n.header-row ion-col ion-text {\n  color: #fff !important;\n  text-align: center;\n}\n.row {\n  color: #fff;\n  font-size: 1.1rem;\n}\n.body {\n  /*  background: -webkit-linear-gradient(left, #22388c, #9ba2cc);\n    background: linear-gradient(to right, #22388c, #9ba2cc);*/\n  background-color: white;\n  font-family: \"Roboto\", sans-serif;\n  color: #4b4b4d;\n}\n.icon-c {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2hhbmdlLWdpZnQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxnQ0FBQTtBQURKO0FBRUk7RUFDRSx5QkFBQTtBQUFOO0FBR0E7RUFFSSxpQkFBQTtFQUNBLFdBQUE7QUFESjtBQUVJO0VBQ0Usa0JBQUE7QUFBTjtBQUNJO0VBQ0Usc0JBQUE7RUFFQSxrQkFBQTtBQUFOO0FBR0U7RUFFRSxXQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUlFO0VBQ0E7NkRBQUE7RUFFRSx1QkFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUU7RUFDRSxvQkFBQTtBQURKIiwiZmlsZSI6ImV4Y2hhbmdlLWdpZnQtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiAgaW9uLWNvbCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRiNGI0ZDtcclxuICAgIGlvbi10ZXh0e1xyXG4gICAgICBjb2xvcjojNGI0YjRkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4uaGVhZGVyLXJvdyB7XHJcbiAgICAvL2JhY2tncm91bmQ6ICM5YjliOWI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgaW9uLWNvbHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH19XHJcbiAgfVxyXG4gIC5yb3cge1xyXG4gICAgLy9iYWNrZ3JvdW5kOiAjMjIzODhjO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcblxyXG4gIC5ib2R5e1xyXG4gIC8qICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMjIzODhjLCAjOWJhMmNjKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIyMzg4YywgIzliYTJjYyk7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICM0YjRiNGQ7XHJcbiAgfVxyXG5cclxuICAuaWNvbi1je1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_exchangeGift_exchange-gift-list_exchange-gift-list_module_ts.js.map