"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_exchangeGift_exchange-gift-list_exchange-gift-list_module_ts"],{

/***/ 2071:
/*!****************************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gift-list/exchange-gift-list-routing.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGiftListPageRoutingModule": () => (/* binding */ ExchangeGiftListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _exchange_gift_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchange-gift-list.page */ 9670);




const routes = [
    {
        path: '',
        component: _exchange_gift_list_page__WEBPACK_IMPORTED_MODULE_0__.ExchangeGiftListPage,
        children: [
            {
                path: 'exchange-gif-update',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_exchangeGift_exchange-gif-update_exchange-gif-update_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../exchange-gif-update/exchange-gif-update.module */ 9890)).then(m => m.ExchangeGifUpdatePageModule)
            },
            {
                path: 'exchange-gif-saw',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_exchangeGift_exchange-gif-saw_exchange-gif-saw_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../exchange-gif-saw/exchange-gif-saw.module */ 2142)).then(m => m.ExchangeGifSawPageModule)
            },
            {
                path: 'exchange-gif-create',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_exchangeGift_exchange-gif-create_exchange-gif-create_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../exchange-gif-create/exchange-gif-create.module */ 2632)).then(m => m.ExchangeGifCreatePageModule)
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

/***/ 6243:
/*!********************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gift-list/exchange-gift-list.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGiftListPageModule": () => (/* binding */ ExchangeGiftListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _exchange_gift_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchange-gift-list-routing.module */ 2071);
/* harmony import */ var _exchange_gift_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchange-gift-list.page */ 9670);







let ExchangeGiftListPageModule = class ExchangeGiftListPageModule {
};
ExchangeGiftListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _exchange_gift_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExchangeGiftListPageRoutingModule
        ],
        declarations: [_exchange_gift_list_page__WEBPACK_IMPORTED_MODULE_1__.ExchangeGiftListPage]
    })
], ExchangeGiftListPageModule);



/***/ }),

/***/ 9670:
/*!******************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gift-list/exchange-gift-list.page.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGiftListPage": () => (/* binding */ ExchangeGiftListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exchange_gift_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./exchange-gift-list.page.html */ 4938);
/* harmony import */ var _exchange_gift_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchange-gift-list.page.scss */ 8992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_services_exchange_gift_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/exchange-gift.service */ 63);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);






let ExchangeGiftListPage = class ExchangeGiftListPage {
    constructor(exs, loading, toast, alerta) {
        this.exs = exs;
        this.loading = loading;
        this.toast = toast;
        this.alerta = alerta;
        this.exGifts = [];
    }
    ngOnInit() {
    }
    cargaExGifts(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.infinite) {
                this.infinite.disabled = false;
            }
            if (!event) {
                yield this.presentLoading();
            }
            this.exGifts = [];
            try {
                this.exGifts = yield this.exs.getAll();
            }
            catch (err) {
                console.error(err);
                yield this.presentToast("Error cargando datos", "danger");
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.presentLoading();
            yield this.exs.delete(exgift);
            let i = this.exGifts.indexOf(exgift, 0);
            if (i > -1) {
                this.exGifts.splice(i, 1);
            }
            yield this.miLoading.dismiss();
        });
    }
    cargaInfinita($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log("CARGAND");
            let nuevosExGifts = yield this.exs.getAll();
            if (nuevosExGifts.length < 10) {
                $event.target.disabled = true;
            }
            this.exGifts = this.exGifts.concat(nuevosExGifts);
            $event.target.complete();
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.miLoading = yield this.loading.create({
                message: ''
            });
            yield this.miLoading.present();
        });
    }
    presentToast(msg, clr) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const miToast = yield this.toast.create({
                message: msg,
                duration: 2000,
                color: clr
            });
            miToast.present();
        });
    }
    mensagealerta(n) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alerta.create({
                header: 'Eliminar',
                message: '¿Desea eliminar Este Regalo Intercambiado?',
                buttons: [{
                        text: 'Cancelar',
                        handler: (blah) => { }
                    },
                    { text: 'Eliminar',
                        handler: () => {
                            this.borra(n);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ExchangeGiftListPage.ctorParameters = () => [
    { type: src_app_services_exchange_gift_service__WEBPACK_IMPORTED_MODULE_2__.ExchangeGiftService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
ExchangeGiftListPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInfiniteScroll,] }]
};
ExchangeGiftListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-exchange-gift-list',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exchange_gift_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_exchange_gift_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExchangeGiftListPage);



/***/ }),

/***/ 4938:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/exchangeGift/exchange-gift-list/exchange-gift-list.page.html ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"false\">\r\n  <ion-toolbar color=\"primary\">\r\n    \r\n    <ion-title>Lista de Regalos Intercambiados</ion-title>\r\n\r\n    <ion-buttons style=\"margin-right: 1%;\" slot=\"end\">\r\n      <ion-icon class=\"icon-logout\" slot=\"end\" name=\"add-circle\" style=\"zoom:1.5;cursor:pointer\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-searchbar placeholder=\"Encuentra el regalo intercambiado que estás buscando...\" inputmode=\"text\" type=\"text\" (ionChange)=\"onSearchChange($event)\" showCancelButton=\"always\"></ion-searchbar>\r\n\r\n    <ion-row class=\"header-row\">\r\n      <ion-col size=\"1\" style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Fecha de Intercambio</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col  size=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Nombre de Agencia</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Nombre de Regalo</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Entregado</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"1\" style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" style=\"background-color: white;\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"reset($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div class=\"body\">\r\n  \r\n\r\n  <ion-grid class=\"ion-text-center\">\r\n\r\n    <ion-row let *ngFor=\"let exchangeGift of this.exGifts\" class=\"row\">\r\n      \r\n      <ion-col size=\"1\">\r\n        <ion-text>\r\n          <ion-icon name=\"pencil\" style=\"color:#22388c;cursor:pointer\"></ion-icon>\r\n        </ion-text>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"2.5\">\r\n        <ion-text>\r\n            {{exchangeGift.dateEchange}}\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n        <ion-col size=\"2.5\">\r\n          <ion-text>\r\n            {{exchangeGift.agency.zipCode}}\r\n          </ion-text>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"2.5\">\r\n          <ion-text>\r\n            {{exchangeGift.gift.name}}\r\n          </ion-text>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"2.5\">\r\n          <ion-text>\r\n            {{exchangeGift.isDelivered}}\r\n          </ion-text>\r\n        </ion-col>\r\n        \r\n        <ion-col size=\"1\">\r\n          <ion-text>\r\n            <ion-icon name=\"trash\" color=\"danger\" style=\"cursor: pointer;\" (click)=\"mensagealerta(exchangeGift)\"></ion-icon>\r\n          </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"cargaInfinita($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</div>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ 8992:
/*!********************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gift-list/exchange-gift-list.page.scss ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "ion-col {\n  border-bottom: 1px solid #4b4b4d;\n}\nion-col ion-text {\n  color: #4b4b4d !important;\n}\n.header-row {\n  border-radius: 0%;\n  border: 0px;\n}\n.header-row ion-col {\n  text-align: center;\n}\n.header-row ion-col ion-text {\n  color: #fff !important;\n  font-size: 1.2rem;\n  text-align: center;\n}\n.row {\n  color: #fff;\n  font-size: 1.1rem;\n}\n.body {\n  /*  background: -webkit-linear-gradient(left, #22388c, #9ba2cc);\n    background: linear-gradient(to right, #22388c, #9ba2cc);*/\n  background-color: white;\n  font-family: \"Roboto\", sans-serif;\n  color: #4b4b4d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2hhbmdlLWdpZnQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxnQ0FBQTtBQURKO0FBRUk7RUFDRSx5QkFBQTtBQUFOO0FBR0E7RUFFSSxpQkFBQTtFQUNBLFdBQUE7QUFESjtBQUVJO0VBQ0Usa0JBQUE7QUFBTjtBQUNJO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ047QUFFRTtFQUVFLFdBQUE7RUFDQSxpQkFBQTtBQUFKO0FBR0U7RUFDQTs2REFBQTtFQUVFLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FBQUoiLCJmaWxlIjoiZXhjaGFuZ2UtZ2lmdC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIFxyXG4gIGlvbi1jb2wge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0YjRiNGQ7XHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgY29sb3I6IzRiNGI0ZCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuLmhlYWRlci1yb3cge1xyXG4gICAgLy9iYWNrZ3JvdW5kOiAjOWI5YjliO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGlvbi1jb2x7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGlvbi10ZXh0e1xyXG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfX1cclxuICB9XHJcbiAgLnJvdyB7XHJcbiAgICAvL2JhY2tncm91bmQ6ICMyMjM4OGM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIH1cclxuXHJcbiAgLmJvZHl7XHJcbiAgLyogIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMyMjM4OGMsICM5YmEyY2MpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjIzODhjLCAjOWJhMmNjKTsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzRiNGI0ZDtcclxuICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_exchangeGift_exchange-gift-list_exchange-gift-list_module_ts.js.map