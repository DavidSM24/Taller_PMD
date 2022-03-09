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
        component: _gif_list_page__WEBPACK_IMPORTED_MODULE_0__.GifListPage,
        children: [
            {
                path: 'gift-create',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_administrator_gift_gif-create_gif-create_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../gif-create/gif-create.module */ 4844)).then(m => m.GifCreatePageModule)
            },
            {
                path: 'gift-saw',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_gift_gif-saw_gif-saw_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../gif-saw/gif-saw.module */ 2728)).then(m => m.GifSawPageModule)
            },
            {
                path: 'gift-update',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../gif-update/gif-update.module */ 8458)).then(m => m.GifUpdatePageModule)
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

/***/ 1789:
/*!****************************************************************!*\
  !*** ./src/app/administrator/gift/gif-list/gif-list.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifListPageModule": () => (/* binding */ GifListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _gif_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gif-list-routing.module */ 106);
/* harmony import */ var _gif_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gif-list.page */ 6760);
/* harmony import */ var _services_gift_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/gift.service */ 4483);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/util.service */ 371);
/* harmony import */ var _gif_update_gif_update_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gif-update/gif-update.page */ 6667);










let GifListPageModule = class GifListPageModule {
};
GifListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _gif_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.GifListPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule
        ],
        providers: [
            _services_gift_service__WEBPACK_IMPORTED_MODULE_2__.GiftService,
            _services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService
        ],
        declarations: [_gif_list_page__WEBPACK_IMPORTED_MODULE_1__.GifListPage, _gif_update_gif_update_page__WEBPACK_IMPORTED_MODULE_4__.GifUpdatePage]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gif_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./gif-list.page.html */ 9238);
/* harmony import */ var _gif_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gif-list.page.scss */ 7270);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_gift_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/gift.service */ 4483);
/* harmony import */ var _gif_update_gif_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gif-update/gif-update.page */ 6667);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/util.service */ 371);








let GifListPage = class GifListPage {
    constructor(gs, AlertCtrl, modalCtrl, pt, uts) {
        this.gs = gs;
        this.AlertCtrl = AlertCtrl;
        this.modalCtrl = modalCtrl;
        this.pt = pt;
        this.uts = uts;
        this.n = 0;
        this.gifts = [];
        this.searchStr = "";
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.niTems = Math.ceil(this.pt.height() / 20 + 10);
            yield this.loadgifts();
            this.n = this.gifts.length;
        });
    }
    loadgifts(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let newgifts = [];
            if (this.gifts.length == 0) { //inicio
                this.uts.presentLoading();
                this.infinite.disabled = false;
                newgifts = yield this.gs.getAllPaged(this.niTems, 0);
                this.gifts = this.gifts.concat(newgifts);
            }
            if (newgifts.length < this.niTems) {
                this.infinite.disabled = true;
            }
            if (event) {
                event.target.complete();
            }
            else {
            }
            this.uts.hideLoading();
        });
    }
    edit(gift) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
            }
        });
    }
    delete(gift) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.uts.presentLoading();
            const result = yield this.gs.delete(gift);
            let i = this.gifts.indexOf(gift, 0);
            yield this.uts.hideLoading();
            ;
            if (result) {
                if (i > -1) {
                    this.gifts.splice(i, 1);
                }
                this.uts.presentToast("Regalo eliminada correctamente.", "success");
            }
            else {
                this.uts.presentToast("Error al eliminar el regalo...", "danger");
            }
        });
    }
    showDeleteMenu(gift) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let newgifts = [];
            if (!this.infinite.disabled) {
                newgifts = yield this.gs.getAllPaged(this.niTems, this.gifts.length);
                this.gifts = this.gifts.concat(newgifts);
                if (newgifts.length < this.niTems) {
                    this.infinite.disabled = true;
                }
            }
        });
    }
    onSearchChange(event) {
        this.searchStr = event.detail.value;
    }
    reset(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.n = 0;
            this.infinite.disabled = false;
            this.gifts = [];
            this.loadgifts(event);
        });
    }
};
GifListPage.ctorParameters = () => [
    { type: _services_gift_service__WEBPACK_IMPORTED_MODULE_2__.GiftService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService }
];
GifListPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInfiniteScroll,] }]
};
GifListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"false\">\r\n  <ion-toolbar color=\"primary\">\r\n    \r\n    <ion-title>Lista de Regalos</ion-title>\r\n\r\n    <ion-buttons style=\"margin-right: 1%;\" slot=\"end\">\r\n      <ion-icon routerLink=\"/tab-administrator/gift/create\" slot=\"end\" name=\"add-circle\" style=\"zoom:1.5;cursor:pointer\" ></ion-icon>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-searchbar placeholder=\"Encuentra el regalo que estás buscando...\" inputmode=\"text\" type=\"text\" (ionChange)=\"onSearchChange($event)\" showCancelButton=\"always\"></ion-searchbar>\r\n\r\n    <ion-row #rowItem class=\"header-row\">\r\n      <ion-col size=\"1\" style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"5\" style=\"border: 0px !important;\">\r\n        <ion-text>Nombre</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col  size=\"5\" style=\"border: 0px !important;\">\r\n        <ion-text>Puntos</ion-text>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"1\" style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"reset($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div class=\"body\">\r\n\r\n  <ion-grid class=\"ion-text-center\">\r\n\r\n    <ion-row let *ngFor=\"let gift of this.gifts\" class=\"row\">\r\n      \r\n      <ion-col size=\"1\">\r\n        <ion-text>\r\n          <ion-icon name=\"pencil\" style=\"color:#22388c;cursor:pointer\" (click)=\"edit(gift)\"></ion-icon>\r\n        </ion-text>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"5\">\r\n        <ion-text>\r\n            {{gift.name}}\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n        <ion-col size=\"5\">\r\n          <ion-text>\r\n            {{gift.points}}\r\n          </ion-text>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"1\">\r\n          <ion-text>\r\n            <ion-icon name=\"trash\" color=\"danger\" style=\"cursor: pointer;\" (click)=\"showDeleteMenu(gift)\"></ion-icon>\r\n          </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infiniteLoad($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</div>\r\n  \r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ 7270:
/*!****************************************************************!*\
  !*** ./src/app/administrator/gift/gif-list/gif-list.page.scss ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-col {\n  border-bottom: 1px solid #4b4b4d;\n}\nion-col ion-text {\n  color: #4b4b4d !important;\n}\n.header-row {\n  border-radius: 0%;\n  border: 0px;\n}\n.header-row ion-col {\n  text-align: center;\n}\n.header-row ion-col ion-text {\n  color: #fff !important;\n  font-size: 1.2rem;\n  text-align: center;\n}\n.row {\n  color: #fff;\n  font-size: 1.1rem;\n}\n.body {\n  /*  background: -webkit-linear-gradient(left, #22388c, #9ba2cc);\n    background: linear-gradient(to right, #22388c, #9ba2cc);*/\n  background-color: white;\n  font-family: \"Roboto\", sans-serif;\n  color: #4b4b4d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpZi1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGdDQUFBO0FBREo7QUFFSTtFQUNFLHlCQUFBO0FBQU47QUFHQTtFQUdJLGlCQUFBO0VBQ0EsV0FBQTtBQUZKO0FBR0k7RUFDRSxrQkFBQTtBQUROO0FBRUk7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBTjtBQUdFO0VBRUUsV0FBQTtFQUNBLGlCQUFBO0FBREo7QUFJRTtFQUNBOzZEQUFBO0VBRUUsdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUFESiIsImZpbGUiOiJnaWYtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBcclxuICBpb24tY29sIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNGI0YjRkO1xyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgIGNvbG9yOiM0YjRiNGQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbi5oZWFkZXItcm93IHtcclxuICAgIC8vYmFja2dyb3VuZDogIzliOWI5YjtcclxuICAgIC8vbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBpb24tY29se1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH19XHJcbiAgfVxyXG4gIC5yb3cge1xyXG4gICAgLy9iYWNrZ3JvdW5kOiAjMjIzODhjO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcblxyXG4gIC5ib2R5e1xyXG4gIC8qICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMjIzODhjLCAjOWJhMmNjKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIyMzg4YywgIzliYTJjYyk7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICM0YjRiNGQ7XHJcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_gift_gif-list_gif-list_module_ts.js.map