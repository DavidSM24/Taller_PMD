"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_gift_gif-list_gif-list_module_ts"],{

/***/ 106:
/*!************************************************************************!*\
  !*** ./src/app/administrator/gift/gif-list/gif-list-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifListPageRoutingModule": () => (/* binding */ GifListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _gif_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gif-list.page */ 6760);




const routes = [
    {
        path: '',
        component: _gif_list_page__WEBPACK_IMPORTED_MODULE_0__.GifListPage
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

/***/ 1789:
/*!****************************************************************!*\
  !*** ./src/app/administrator/gift/gif-list/gif-list.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifListPageModule": () => (/* binding */ GifListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _gif_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gif-list-routing.module */ 106);
/* harmony import */ var _gif_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gif-list.page */ 6760);







let GifListPageModule = class GifListPageModule {
};
GifListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gif_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.GifListPageRoutingModule
        ],
        declarations: [_gif_list_page__WEBPACK_IMPORTED_MODULE_1__.GifListPage]
    })
], GifListPageModule);



/***/ }),

/***/ 6760:
/*!**************************************************************!*\
  !*** ./src/app/administrator/gift/gif-list/gif-list.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifListPage": () => (/* binding */ GifListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gif_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./gif-list.page.html */ 9238);
/* harmony import */ var _gif_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gif-list.page.scss */ 7270);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_gift_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/gift.service */ 4483);
/* harmony import */ var _gif_update_gif_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gif-update/gif-update.page */ 6667);







let GifListPage = class GifListPage {
    constructor(gs, toast, AlertCtrl, modalCtrl, loading) {
        this.gs = gs;
        this.toast = toast;
        this.AlertCtrl = AlertCtrl;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.n = 0;
        this.gifts = [];
        this.searchStr = "";
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadgifts();
            this.n = this.gifts.length;
        });
    }
    loadgifts(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let newgifts = [];
            if (this.gifts.length == 0) { //inicio
                if (!event) { //si event, el reset ya tiene loading...
                    this.presentLoading();
                }
                this.infinite.disabled = false;
                newgifts = yield this.gs.getAllPaged(15, 0);
                this.gifts = this.gifts.concat(newgifts);
            }
            if (newgifts.length < 15) {
                this.infinite.disabled = true;
            }
            if (event) {
                event.target.complete();
            }
            else {
                this.loading.dismiss();
            }
        });
    }
    edit(gift) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _gif_update_gif_update_page__WEBPACK_IMPORTED_MODULE_3__.GifUpdatePage,
                componentProps: {
                    gift: gift
                }
            });
            yield modal.present();
            const resp = yield modal.onDidDismiss();
            if (resp.data != null) {
                let i = this.gifts.indexOf(gift);
                this.gifts[i] = resp.data.newGift;
            }
        });
    }
    delete(gift) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.presentLoading();
            const result = yield this.gs.delete(gift);
            let i = this.gifts.indexOf(gift, 0);
            yield this.miLoading.dismiss();
            if (result) {
                if (i > -1) {
                    this.gifts.splice(i, 1);
                }
                this.presentToast("Regalo eliminada correctamente.", "success");
            }
            else {
                this.presentToast("Error al eliminar el regalo...", "danger");
            }
        });
    }
    showDeleteMenu(gift) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.AlertCtrl.create({
                header: 'Confirmación',
                message: '¿Desea eliminar este Regalo?',
                buttons: [
                    {
                        text: 'Eliminar',
                        //cssClass: 'rojo',
                        handler: () => {
                            this.delete(gift);
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel'
                    }
                ]
            });
            yield alert.present();
        });
    }
    infiniteLoad($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let newgifts = [];
            if (!this.infinite.disabled) {
                newgifts = yield this.gs.getAllPaged(15, this.gifts.length);
                this.gifts = this.gifts.concat(newgifts);
                if (newgifts.length < 15) {
                    this.infinite.disabled = true;
                }
            }
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.miLoading = yield this.loading.create({
                message: ''
            });
            yield this.miLoading.present();
        });
    }
    presentToast(msg, clr) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const miToast = yield this.toast.create({
                message: msg,
                duration: 2000,
                color: clr
            });
            miToast.present();
        });
    }
    onSearchChange(event) {
        this.searchStr = event.detail.value;
    }
    reset(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.n = 0;
            this.infinite.disabled = false;
            this.gifts = [];
            this.loadgifts(event);
        });
    }
};
GifListPage.ctorParameters = () => [
    { type: _services_gift_service__WEBPACK_IMPORTED_MODULE_2__.GiftService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
GifListPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInfiniteScroll,] }]
};
GifListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-gif-list',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gif_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_gif_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GifListPage);



/***/ }),

/***/ 9238:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/gift/gif-list/gif-list.page.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"false\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Lista de Regalos</ion-title>\r\n\r\n    <ion-buttons style=\"margin-right: 1%;\" slot=\"end\">\r\n      <ion-icon class=\"icon-logout\" slot=\"end\" name=\"add-circle\" style=\"zoom:1.5\"></ion-icon>\r\n      <ion-icon class=\"icon-logout\" slot=\"end\" name=\"person\" style=\"zoom:1.5\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-searchbar color=\"dark\" placeholder=\"Encuentra la agencia que estás buscando...\" inputmode=\"text\" type=\"text\" (ionChange)=\"onSearchChange($event)\" showCancelButton=\"always\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"reset($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-list> \r\n\r\n    <ion-item-sliding *ngFor=\"let gift of this.gifts;let i=index\" color=\"primary\">\r\n      <ion-item-options side=\"start\">\r\n        <ion-item-option (click)=\"edit(gift)\">\r\n          <ion-icon name=\"create\" style=\"zoom:3.0\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n\r\n      <ion-item>\r\n        <ion-label>\r\n          <h2>{{gift.name}}</h2>\r\n          <p>{{gift.points}}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"danger\" expandable (click)=\"showDeleteMenu(gift)\">\r\n          <ion-icon name=\"remove-circle\" style=\"zoom:3.0\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n\r\n  </ion-list>\r\n\r\n\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infiniteLoad($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ 7270:
/*!****************************************************************!*\
  !*** ./src/app/administrator/gift/gif-list/gif-list.page.scss ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnaWYtbGlzdC5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_gift_gif-list_gif-list_module_ts.js.map