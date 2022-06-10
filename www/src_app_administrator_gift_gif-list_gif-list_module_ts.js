"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_gift_gif-list_gif-list_module_ts"],{

/***/ 10106:
/*!************************************************************************!*\
  !*** ./src/app/administrator/gift/gif-list/gif-list-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifListPageRoutingModule": () => (/* binding */ GifListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _gif_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gif-list.page */ 86760);




const routes = [
    {
        path: '',
        component: _gif_list_page__WEBPACK_IMPORTED_MODULE_0__.GifListPage,
        children: [
            {
                path: 'gift-create',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_gift_gif-create_gif-create_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../gif-create/gif-create.module */ 94844)).then(m => m.GifCreatePageModule)
            },
            {
                path: 'gift-saw',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_gift_gif-saw_gif-saw_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../gif-saw/gif-saw.module */ 52728)).then(m => m.GifSawPageModule)
            },
            {
                path: 'gift-update',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../gif-update/gif-update.module */ 68458)).then(m => m.GifUpdatePageModule)
            }
        ]
    }
];
let GifListPageRoutingModule = class GifListPageRoutingModule {
};
GifListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GifListPageRoutingModule);



/***/ }),

/***/ 21789:
/*!****************************************************************!*\
  !*** ./src/app/administrator/gift/gif-list/gif-list.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifListPageModule": () => (/* binding */ GifListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _gif_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gif-list-routing.module */ 10106);
/* harmony import */ var _gif_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gif-list.page */ 86760);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/util.service */ 371);
/* harmony import */ var _gif_update_gif_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gif-update/gif-update.page */ 76667);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ 24352);










let GifListPageModule = class GifListPageModule {
};
GifListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _gif_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.GifListPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule
        ],
        providers: [
            _services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService
        ],
        declarations: [_gif_list_page__WEBPACK_IMPORTED_MODULE_1__.GifListPage, _gif_update_gif_update_page__WEBPACK_IMPORTED_MODULE_3__.GifUpdatePage]
    })
], GifListPageModule);



/***/ }),

/***/ 86760:
/*!**************************************************************!*\
  !*** ./src/app/administrator/gift/gif-list/gif-list.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifListPage": () => (/* binding */ GifListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gif_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./gif-list.page.html */ 59238);
/* harmony import */ var _gif_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gif-list.page.scss */ 16386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_gift_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/gift.service */ 44483);
/* harmony import */ var _gif_update_gif_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gif-update/gif-update.page */ 76667);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/util.service */ 371);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ 36636);









let GifListPage = class GifListPage {
    constructor(gs, AlertCtrl, modalCtrl, pt, uts, authS) {
        this.gs = gs;
        this.AlertCtrl = AlertCtrl;
        this.modalCtrl = modalCtrl;
        this.pt = pt;
        this.uts = uts;
        this.authS = authS;
        this.n = 0;
        this.gifts = [];
        this.oldGifts = [];
        this.searchStr = "";
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.niTems = Math.ceil(this.pt.height() / 20 + 10);
            if (this.gs.added) {
                this.reset(null);
                this.gs.added = false;
            }
            else {
                yield this.loadgifts();
            }
        });
    }
    getAdded(list) {
        this.gifts = list;
    }
    loadgifts(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let newGifts = [];
            if (this.gifts.length == 0) { //inicio
                yield this.uts.presentLoading();
                this.infinite.disabled = false;
                this.oldInfinite = false;
                newGifts = yield this.gs.getAllPaged(this.niTems, 0);
                this.gifts = this.gifts.concat(newGifts);
                this.gifts = this.sortList(this.gifts);
                this.oldGifts = [];
                this.oldGifts = this.oldGifts.concat(newGifts);
            }
            if (newGifts.length < this.niTems) {
                this.infinite.disabled = true;
                this.oldInfinite = true;
            }
            if (event) {
                event.target.complete();
            }
            else {
            }
            yield this.uts.hideLoading();
        });
    }
    edit(gift) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _gif_update_gif_update_page__WEBPACK_IMPORTED_MODULE_3__.GifUpdatePage,
                cssClass: "fullscreen",
                componentProps: {
                    gift: gift
                }
            });
            yield modal.present();
            const resp = yield modal.onDidDismiss();
            if (resp.data != null) {
                let i = this.gifts.indexOf(gift);
                this.gifts[i] = resp.data.newGift;
                this.oldGifts.forEach((e) => {
                    if (e.id == resp.data.newGift.id) {
                        let i2 = this.oldGifts.indexOf(e);
                        this.oldGifts[i2] = this.gifts[i];
                    }
                });
            }
        });
    }
    delete(gift) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.uts.presentLoading();
            const result = yield this.gs.delete(gift);
            let i = this.gifts.indexOf(gift, 0);
            yield this.uts.hideLoading();
            ;
            if (result) {
                if (i > -1) {
                    this.gifts.splice(i, 1);
                }
                this.oldGifts.forEach((e) => {
                    if (e.id == gift.id) {
                        let i2 = this.oldGifts.indexOf(e);
                        this.oldGifts.splice(i2, 1);
                    }
                });
                this.uts.presentToast("Regalo eliminada correctamente.", "success", "checkmark-circle-outline");
            }
            else {
                this.uts.presentToast("No se pueden eliminar regalos con pedidos. Puede quitarlo de la lista para adquirirlo cambiandolo a No disponible.", "danger", "ban");
            }
        });
    }
    showDeleteMenu(gift) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.AlertCtrl.create({
                header: 'Confirmación',
                message: '¿Desea eliminar este Regalo?',
                buttons: [
                    {
                        text: 'Eliminar',
                        cssClass: 'rojo',
                        handler: () => {
                            this.delete(gift);
                        }
                    },
                    {
                        text: 'Cancelar',
                        cssClass: 'secondary',
                        role: 'cancel'
                    }
                ]
            });
            yield alert.present();
        });
    }
    infiniteLoad($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let newgifts = [];
            if (!this.infinite.disabled) {
                newgifts = yield this.gs.getAllPaged(this.niTems, this.gifts.length);
                newgifts = this.sortList(newgifts);
                this.gifts = this.gifts.concat(newgifts);
                this.oldGifts = this.oldGifts.concat(newgifts);
                if (newgifts.length < this.niTems) {
                    this.infinite.disabled = true;
                    this.oldInfinite = true;
                }
            }
            this.infinite.complete();
        });
    }
    onSearchChange() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.searchStr = this.sb.value;
            let regex = new RegExp("^[ ]");
            try {
                if (!this.searchStr.match(regex)) {
                    let resultFilter = [];
                    let listS = [];
                    let selectO = this.select.value;
                    let list = [];
                    this.gifts = [];
                    let lenght = this.searchStr.length;
                    if (lenght > 0) {
                        //consultar y cambiar lista
                        yield this.uts.presentLoading();
                        //nombre
                        list = yield this.gs.getByNamePaged(this.searchStr, 9999, 0);
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
                            list = yield this.gs.getByPoints(this.searchStr);
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
                        if (selectO == "true") {
                            resultFilter.forEach((e) => {
                                if (e.available)
                                    listS.push(e);
                            });
                            this.gifts = listS;
                        }
                        else if (selectO == "false") {
                            resultFilter.forEach((e) => {
                                if (!e.available)
                                    listS.push(e);
                            });
                            this.gifts = listS;
                        }
                        else {
                            this.gifts = resultFilter;
                        }
                        this.infinite.disabled = true;
                        yield this.uts.hideLoading();
                    }
                    else if (lenght < 1) {
                        yield this.uts.presentLoading();
                        if (selectO == "true") {
                            resultFilter = yield this.gs.getByAvailablePaged(true, 9999, 0);
                            resultFilter.forEach((e) => {
                                if (e.available)
                                    listS.push(e);
                            });
                            this.gifts = listS;
                            this.infinite.disabled = true;
                        }
                        else if (selectO == "false") {
                            resultFilter = yield this.gs.getByAvailablePaged(false, 9999, 0);
                            resultFilter.forEach((e) => {
                                if (!e.available)
                                    listS.push(e);
                            });
                            this.gifts = listS;
                            this.infinite.disabled = true;
                        }
                        else {
                            this.gifts = this.oldGifts;
                            this.infinite.disabled = this.oldInfinite;
                        }
                        yield this.uts.hideLoading();
                    }
                }
                else
                    this.uts.presentToast("La búsqueda no puede comenzar por espacios en blanco.", "danger", "ban");
            }
            catch (error) {
            }
        });
    }
    reset(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.infinite.disabled = false;
            this.oldInfinite = false;
            this.gifts = [];
            this.loadgifts(event);
        });
    }
    logout() {
        this.authS.logout();
    }
    sortList(eg) {
        if (eg != null && eg.length > 1) {
            eg = eg.sort((n1, n2) => {
                if (n1.name > n2.name) {
                    return 1;
                }
                else if (n1.name < n2.name) {
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
    count(gifts) {
    }
};
GifListPage.ctorParameters = () => [
    { type: _services_gift_service__WEBPACK_IMPORTED_MODULE_2__.GiftService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService }
];
GifListPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInfiniteScroll,] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSelect,] }],
    sb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSearchbar,] }]
};
GifListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-gif-list',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gif_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_gif_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GifListPage);



/***/ }),

/***/ 59238:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/gift/gif-list/gif-list.page.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"false\">\r\n  <ion-toolbar color=\"primary\">\r\n\r\n    <ion-title>Lista de Regalos</ion-title>\r\n\r\n    <ion-buttons style=\"margin-right: 1%;\" slot=\"end\" class=\"icon-div-container\">\r\n      <div title=\"Nuevo\" routerLink=\"/tab-administrator/gift/create\" >\r\n        <ion-icon class=\"icon-logout\" slot=\"end\" style=\"pointer-events: none;zoom:1.5;cursor:pointer;content:url(../../../../assets/icon/add-circle-outline.png);\" ></ion-icon>\r\n      </div>\r\n      <div title=\"Cerrar Sesión\" (click)=\"logout() \">\r\n      <ion-icon class=\"icon-logout\" slot=\"end\" name=\"log-out-outline\" style=\"pointer-events: none;zoom:1.7;cursor:pointer\"></ion-icon>\r\n      </div>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n\r\n    <ion-row>\r\n      <ion-col size=\"9.5\">\r\n        <ion-searchbar placeholder=\"Encuentra el regalo que estás buscando...\" debounce=\"600\" inputmode=\"text\" type=\"text\" (ionChange)=\"onSearchChange()\" showCancelButton=\"always\"></ion-searchbar>\r\n      </ion-col>\r\n\r\n      <ion-col>\r\n          <ion-item style=\"height: 85%; margin-top:1.1%\">\r\n            <ion-label>Disponible:</ion-label>\r\n            <ion-select  (ionChange)=\"this.onSearchChange()\" interface=\"popover\" multiple=\"false\">\r\n              <ion-select-option value=\"true\">Si</ion-select-option>\r\n              <ion-select-option value=\"false\">No</ion-select-option>\r\n              <ion-select-option value=\"all\">Todos</ion-select-option>\r\n\r\n            </ion-select>\r\n          </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row #rowItem class=\"header-row\">\r\n\r\n      <ion-col size=\"1\" style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3.3\" style=\"border: 0px !important;\">\r\n        <ion-text>Nombre</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col  size=\"3.4\" style=\"border: 0px;\">\r\n        <ion-text>Puntos</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col  size=\"3.3\" style=\"border: 0px !important;\">\r\n        <ion-text>Disponible</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"1\" style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"reset($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div class=\"body\">\r\n\r\n  <ion-grid class=\"ion-text-center\">\r\n\r\n    <ion-row style=\"border-left: 1px solid #4b4b4d;border-right: 1px solid #4b4b4d;\" let *ngFor=\"let gift of this.gifts; let i=index\" [ngClass]=\"(i % 2 == 0) ? 'normal' : 'colored'\">\r\n\r\n      <ion-col size=\"1\">\r\n        <ion-text>\r\n        <div title=\"Editar\" (click)=\"edit(gift)\" style=\"cursor:pointer\">\r\n          <ion-icon name=\"pencil\" style=\"color:#22388c;\" (click)=\"edit(gift)\"></ion-icon>\r\n        </div>\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3.3\">\r\n        <ion-text>\r\n            {{gift.name}}\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n        <ion-col size=\"3.4\">\r\n          <ion-text>\r\n            {{gift.points}}\r\n          </ion-text>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"3.3\">\r\n          <div title=\"Disponible\">\r\n            <ion-icon *ngIf=\"gift.available\" name=\"checkmark-circle\" color=\"success\"></ion-icon>\r\n          </div>\r\n\r\n          <div title=\"Sin stock\">\r\n            <ion-icon *ngIf=\"!gift.available\" name=\"close-circle\" color=\"danger\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"1\">\r\n          <ion-text>\r\n            <div title=\"Eliminar\" (click)=\"showDeleteMenu(gift)\" style=\"cursor:pointer\">\r\n              <ion-icon name=\"trash\" color=\"danger\" (click)=\"showDeleteMenu(gift)\"></ion-icon>\r\n            </div>\r\n          </ion-text>\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infiniteLoad($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</div>\r\n\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ 16386:
/*!****************************************************************!*\
  !*** ./src/app/administrator/gift/gif-list/gif-list.page.scss ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-col {\n  border-bottom: 1px solid #4b4b4d;\n}\nion-col ion-text {\n  color: #4b4b4d !important;\n}\n.header-row {\n  border-radius: 0%;\n  border: 0px;\n}\n.header-row ion-col {\n  text-align: center;\n}\n.header-row ion-col ion-text {\n  color: #fff !important;\n  text-align: center;\n}\n.row {\n  color: #fff;\n  font-size: 1.1rem;\n}\n.body {\n  /*  background: -webkit-linear-gradient(left, #22388c, #9ba2cc);\n    background: linear-gradient(to right, #22388c, #9ba2cc);*/\n  background-color: white;\n  font-family: \"Roboto\", sans-serif;\n  color: #4b4b4d;\n}\nion-icon {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpZi1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGdDQUFBO0FBREo7QUFFSTtFQUNFLHlCQUFBO0FBQU47QUFHQTtFQUdJLGlCQUFBO0VBQ0EsV0FBQTtBQUZKO0FBR0k7RUFDRSxrQkFBQTtBQUROO0FBRUk7RUFDRSxzQkFBQTtFQUVBLGtCQUFBO0FBRE47QUFJRTtFQUVFLFdBQUE7RUFDQSxpQkFBQTtBQUZKO0FBS0U7RUFDQTs2REFBQTtFQUVFLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FBRko7QUFLRTtFQUNFLG9CQUFBO0FBRkoiLCJmaWxlIjoiZ2lmLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4gIGlvbi1jb2wge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0YjRiNGQ7XHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgY29sb3I6IzRiNGI0ZCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuLmhlYWRlci1yb3cge1xyXG4gICAgLy9iYWNrZ3JvdW5kOiAjOWI5YjliO1xyXG4gICAgLy9tYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGlvbi1jb2x7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGlvbi10ZXh0e1xyXG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAvL2ZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9fVxyXG4gIH1cclxuICAucm93IHtcclxuICAgIC8vYmFja2dyb3VuZDogIzIyMzg4YztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgfVxyXG5cclxuICAuYm9keXtcclxuICAvKiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzIyMzg4YywgIzliYTJjYyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyMjM4OGMsICM5YmEyY2MpOyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjNGI0YjRkO1xyXG4gIH1cclxuXHJcbiAgaW9uLWljb257XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_gift_gif-list_gif-list_module_ts.js.map