"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_agency_agency-list_agency-list_module_ts"],{

/***/ 8584:
/*!********************************************************************************!*\
  !*** ./src/app/administrator/agency/agency-list/agency-list-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencyListPageRoutingModule": () => (/* binding */ AgencyListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _agency_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agency-list.page */ 1137);




const routes = [
    {
        path: '',
        component: _agency_list_page__WEBPACK_IMPORTED_MODULE_0__.AgencyListPage
    }
];
let AgencyListPageRoutingModule = class AgencyListPageRoutingModule {
};
AgencyListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AgencyListPageRoutingModule);



/***/ }),

/***/ 9947:
/*!************************************************************************!*\
  !*** ./src/app/administrator/agency/agency-list/agency-list.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencyListPageModule": () => (/* binding */ AgencyListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _agency_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agency-list-routing.module */ 8584);
/* harmony import */ var _agency_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agency-list.page */ 1137);







let AgencyListPageModule = class AgencyListPageModule {
};
AgencyListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _agency_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgencyListPageRoutingModule
        ],
        declarations: [_agency_list_page__WEBPACK_IMPORTED_MODULE_1__.AgencyListPage]
    })
], AgencyListPageModule);



/***/ }),

/***/ 1137:
/*!**********************************************************************!*\
  !*** ./src/app/administrator/agency/agency-list/agency-list.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencyListPage": () => (/* binding */ AgencyListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_agency_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./agency-list.page.html */ 5009);
/* harmony import */ var _agency_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agency-list.page.scss */ 7852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_agency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/agency.service */ 9574);
/* harmony import */ var _agency_update_agency_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../agency-update/agency-update.page */ 2483);







let AgencyListPage = class AgencyListPage {
    constructor(as, toast, AlertCtrl, modalCtrl, loading) {
        this.as = as;
        this.toast = toast;
        this.AlertCtrl = AlertCtrl;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.n = 0;
        this.agencies = [];
        this.searchStr = "";
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadAgencies();
            this.n = this.agencies.length;
        });
    }
    loadAgencies(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let newAgencies = [];
            if (this.agencies.length == 0) { //inicio
                if (!event) { //si event, el reset ya tiene loading...
                    this.presentLoading();
                }
                this.infinite.disabled = false;
                newAgencies = yield this.as.getAllPaged(30, 0);
                this.agencies = this.agencies.concat(newAgencies);
            }
            if (newAgencies.length < 30) {
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
    edit(agency) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _agency_update_agency_update_page__WEBPACK_IMPORTED_MODULE_3__.AgencyUpdatePage,
                componentProps: {
                    agency: agency
                }
            });
            yield modal.present();
            const resp = yield modal.onDidDismiss();
            if (resp.data != null) {
                let i = this.agencies.indexOf(agency);
                this.agencies[i] = resp.data.newAgency;
            }
        });
    }
    delete(agency) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.presentLoading();
            const result = yield this.as.delete(agency);
            let i = this.agencies.indexOf(agency, 0);
            yield this.miLoading.dismiss();
            if (result) {
                if (i > -1) {
                    this.agencies.splice(i, 1);
                }
                this.presentToast("Agencia eliminada correctamente.", "success");
            }
            else {
                this.presentToast("Error al eliminar la agencia...", "danger");
            }
        });
    }
    showDeleteMenu(agency) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.AlertCtrl.create({
                header: 'Confirmación',
                message: '¿Desea eliminar esta Agencia?',
                buttons: [
                    {
                        text: 'Eliminar',
                        //cssClass: 'rojo',
                        handler: () => {
                            this.delete(agency);
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
            let newAgencies = [];
            if (!this.infinite.disabled) {
                newAgencies = yield this.as.getAllPaged(30, this.agencies.length);
                this.agencies = this.agencies.concat(newAgencies);
                if (newAgencies.length < 30) {
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
            this.agencies = [];
            this.loadAgencies(event);
        });
    }
};
AgencyListPage.ctorParameters = () => [
    { type: _services_agency_service__WEBPACK_IMPORTED_MODULE_2__.AgencyService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
AgencyListPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInfiniteScroll,] }]
};
AgencyListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-agency-list',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_agency_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_agency_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AgencyListPage);



/***/ }),

/***/ 5009:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/agency/agency-list/agency-list.page.html ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"false\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Lista de Agencias</ion-title>\r\n\r\n    <ion-buttons style=\"margin-right: 1%;\" slot=\"end\">\r\n      <ion-icon class=\"icon-logout\" slot=\"end\" name=\"add-circle\" style=\"zoom:1.5\"></ion-icon>\r\n      <ion-icon class=\"icon-logout\" slot=\"end\" name=\"person\" style=\"zoom:1.5\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-searchbar color=\"dark\" placeholder=\"Encuentra la agencia que estás buscando...\" inputmode=\"text\" type=\"text\" (ionChange)=\"onSearchChange($event)\" showCancelButton=\"always\"></ion-searchbar>\r\n    <center>\r\n    <ion-row class=\"header-row\">\r\n      <ion-col style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col style=\"border: 0px !important;\">\r\n        <ion-text>Usuario</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col style=\"border: 0px !important;\">\r\n        <ion-text>Puntos</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col style=\"border: 0px !important;\">\r\n        <ion-text>Acumulado</ion-text>\r\n      </ion-col>\r\n      \r\n      <ion-col style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </center>\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"reset($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-grid class=\"ion-text-center\">\r\n\r\n    <ion-row let *ngFor=\"let agency of this.agencies\" class=\"row\">\r\n      \r\n      <ion-col>\r\n        <ion-text>\r\n          <ion-icon name=\"pencil\" color=\"warning\"></ion-icon>\r\n        </ion-text>\r\n      </ion-col>\r\n      \r\n      <ion-col>\r\n        <ion-text>\r\n            {{agency.myUser.name}}\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n        <ion-col>\r\n          <ion-text>\r\n            {{agency.points}}\r\n          </ion-text>\r\n        </ion-col>\r\n  \r\n        <ion-col>\r\n          <ion-text>\r\n            {{agency.amount}} €\r\n          </ion-text>\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n          <ion-text>\r\n            <ion-icon name=\"trash\" color=\"danger\"></ion-icon>\r\n          </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infiniteLoad($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n");

/***/ }),

/***/ 7852:
/*!************************************************************************!*\
  !*** ./src/app/administrator/agency/agency-list/agency-list.page.scss ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".header-row {\n  color: #fff;\n  font-size: 18px;\n  border-radius: 0%;\n  border: 0px;\n}\n\nion-col {\n  border: 1px solid #aaaaaa;\n}\n\n.row {\n  background: #22388c;\n  color: #fff;\n  font-size: 18px;\n}\n\nbody {\n  background-color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW5jeS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0U7RUFDRSx5QkFBQTtBQUFKOztBQUdFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0Usc0JBQUE7QUFBRiIsImZpbGUiOiJhZ2VuY3ktbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXJvdyB7XHJcbiAgICAvL2JhY2tncm91bmQ6ICM5YjliOWI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb2wge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYWFhYTtcclxuICB9XHJcblxyXG4gIC5yb3cge1xyXG4gICAgYmFja2dyb3VuZDogIzIyMzg4YztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbmJvZHl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_agency_agency-list_agency-list_module_ts.js.map