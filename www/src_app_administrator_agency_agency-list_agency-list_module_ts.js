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
        component: _agency_list_page__WEBPACK_IMPORTED_MODULE_0__.AgencyListPage,
        children: [
            {
                path: 'agency-saw',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_agency_agency-saw_agency-saw_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../agency-saw/agency-saw.module */ 879)).then(m => m.AgencySawPageModule)
            },
            {
                path: 'agency-update',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../agency-update/agency-update.module */ 7264)).then(m => m.AgencyUpdatePageModule)
            },
            {
                path: 'agency-create',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_administrator_agency_agency-create_agency-create_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../agency-create/agency-create.module */ 8333)).then(m => m.AgencyCreatePageModule)
            }
        ]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _agency_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agency-list-routing.module */ 8584);
/* harmony import */ var _agency_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agency-list.page */ 1137);
/* harmony import */ var _services_agency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/agency.service */ 9574);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/util.service */ 371);
/* harmony import */ var _agency_update_agency_update_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../agency-update/agency-update.page */ 2483);










let AgencyListPageModule = class AgencyListPageModule {
};
AgencyListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _agency_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgencyListPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule
        ],
        providers: [_services_agency_service__WEBPACK_IMPORTED_MODULE_2__.AgencyService, _services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService],
        declarations: [_agency_list_page__WEBPACK_IMPORTED_MODULE_1__.AgencyListPage, _agency_update_agency_update_page__WEBPACK_IMPORTED_MODULE_4__.AgencyUpdatePage]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_agency_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./agency-list.page.html */ 5009);
/* harmony import */ var _agency_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agency-list.page.scss */ 7852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_agency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/agency.service */ 9574);
/* harmony import */ var _agency_update_agency_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../agency-update/agency-update.page */ 2483);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/util.service */ 371);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ 6636);









let AgencyListPage = class AgencyListPage {
    constructor(as, AlertCtrl, modalCtrl, pt, uts, authS) {
        this.as = as;
        this.AlertCtrl = AlertCtrl;
        this.modalCtrl = modalCtrl;
        this.pt = pt;
        this.uts = uts;
        this.authS = authS;
        this.agencies = [];
        this.searchStr = "";
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.niTems = Math.ceil(this.pt.height() / 20 + 10);
            yield this.loadAgencies();
        });
    }
    loadAgencies(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let newAgencies = [];
            if (this.agencies.length == 0) { //inicio
                this.uts.presentLoading();
                this.infinite.disabled = false;
                newAgencies = yield this.as.getAllPaged(this.niTems, 0);
                this.agencies = this.agencies.concat(newAgencies);
            }
            if (newAgencies.length < this.niTems) {
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
    edit(agency) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const modal = yield this.modalCtrl.create({
                    component: _agency_update_agency_update_page__WEBPACK_IMPORTED_MODULE_3__.AgencyUpdatePage,
                    cssClass: 'fullscreen',
                    componentProps: {
                        'agency': agency
                    }
                    //
                });
                yield modal.present();
                const resp = yield modal.onDidDismiss();
                if (resp.data != null) {
                    let i = this.agencies.indexOf(agency);
                    this.agencies[i] = resp.data.newAgency;
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    delete(agency) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.uts.presentLoading();
            const result = yield this.as.delete(agency);
            let i = this.agencies.indexOf(agency, 0);
            yield this.uts.hideLoading();
            if (result) {
                if (i > -1) {
                    this.agencies.splice(i, 1);
                }
                this.uts.presentToast("Agencia eliminada correctamente.", "success");
            }
            else {
                this.uts.presentToast("Error al eliminar la agencia...", "danger");
            }
        });
    }
    showDeleteMenu(agency) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.AlertCtrl.create({
                header: 'Confirmación',
                message: '¿Desea eliminar esta Agencia?',
                buttons: [
                    {
                        text: 'Eliminar',
                        cssClass: 'rojo',
                        handler: () => {
                            this.delete(agency);
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
            let newAgencies = [];
            if (!this.infinite.disabled) {
                newAgencies = yield this.as.getAllPaged(this.niTems, this.agencies.length);
                this.agencies = this.agencies.concat(newAgencies);
                if (newAgencies.length < 30) {
                    this.infinite.disabled = true;
                }
            }
        });
    }
    onSearchChange(event) {
        this.searchStr = event.detail.value;
    }
    reset(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.infinite.disabled = false;
            this.agencies = [];
            this.loadAgencies(event);
        });
    }
    logout() {
        this.authS.logout();
    }
};
AgencyListPage.ctorParameters = () => [
    { type: _services_agency_service__WEBPACK_IMPORTED_MODULE_2__.AgencyService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService }
];
AgencyListPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInfiniteScroll,] }]
};
AgencyListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"false\">\r\n  \r\n  <ion-toolbar color=\"primary\">\r\n\r\n    <ion-title>Lista de Agencias</ion-title>\r\n\r\n    <ion-buttons style=\"margin-right: 1%;\" slot=\"end\">\r\n      <ion-icon class=\"icon-logout\" slot=\"end\" name=\"add-circle\" style=\"zoom:1.5;cursor:pointer\" routerLink=\"/tab-administrator/user/create\"></ion-icon>\r\n      <ion-icon class=\"icon-logout\" slot=\"end\" name=\"person\" style=\"zoom:1.5;cursor:pointer\" routerLink=\"/tab-administrator/user/list\"></ion-icon>\r\n      <ion-icon class=\"icon-logout\" slot=\"end\" name=\"log-out-outline\" (click)=\"logout() \" style=\"zoom:1.7;cursor:pointer\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-searchbar placeholder=\"Encuentra la agencia que estás buscando...\" inputmode=\"text\" type=\"text\" (ionChange)=\"onSearchChange($event)\" showCancelButton=\"always\"></ion-searchbar>\r\n\r\n    <ion-row class=\"header-row\">\r\n      <ion-col size=\"1\" style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3.3\" style=\"border: 0px !important;\">\r\n        <ion-text>Compañía</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col  size=\"3.3\" style=\"border: 0px !important;\">\r\n        <ion-text>Localidad</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3.3\" style=\"border: 0px !important;\">\r\n        <ion-text>Puntos</ion-text>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"1\" style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" style=\"background-color: white;\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"reset($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div class=\"body\">\r\n  \r\n\r\n  <ion-grid class=\"ion-text-center\">\r\n\r\n    <ion-row let *ngFor=\"let agency of this.agencies;let i=index\" class=\"row\">\r\n      \r\n      <ion-col size=\"1\">\r\n        <ion-text>\r\n          <ion-icon name=\"pencil\" style=\"color:#22388c;cursor:pointer\" (click)=\"edit(agency)\"></ion-icon>\r\n        </ion-text>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"3.4\">\r\n        <ion-text>\r\n            {{agency.myInsuranceCompany.cia_Name}}\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n        <ion-col size=\"3.3\">\r\n          <ion-text>\r\n            {{agency.location}}\r\n          </ion-text>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"3.3\">\r\n          <ion-text>\r\n            {{agency.points}}\r\n          </ion-text>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"1\">\r\n          <ion-text>\r\n            <ion-icon name=\"trash\" color=\"danger\" style=\"cursor: pointer;\" (click)=\"showDeleteMenu(agency)\"></ion-icon>\r\n          </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infiniteLoad($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</div>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ 7852:
/*!************************************************************************!*\
  !*** ./src/app/administrator/agency/agency-list/agency-list.page.scss ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-col {\n  border-bottom: 1px solid #4b4b4d;\n}\nion-col ion-text {\n  color: #4b4b4d !important;\n}\n.header-row {\n  border-radius: 0%;\n  border: 0px;\n}\n.header-row ion-col {\n  text-align: center;\n}\n.header-row ion-col ion-text {\n  color: #fff !important;\n  font-size: 1.2rem;\n  text-align: center;\n}\n.row {\n  color: #fff;\n  font-size: 1.1rem;\n}\n.body {\n  /*  background: -webkit-linear-gradient(left, #22388c, #9ba2cc);\n    background: linear-gradient(to right, #22388c, #9ba2cc);*/\n  background-color: white;\n  font-family: \"Roboto\", sans-serif;\n  color: #4b4b4d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW5jeS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGdDQUFBO0FBREo7QUFFSTtFQUNFLHlCQUFBO0FBQU47QUFHQTtFQUdJLGlCQUFBO0VBQ0EsV0FBQTtBQUZKO0FBR0k7RUFDRSxrQkFBQTtBQUROO0FBRUk7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBTjtBQUdFO0VBRUUsV0FBQTtFQUNBLGlCQUFBO0FBREo7QUFJRTtFQUNBOzZEQUFBO0VBRUUsdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUFESiIsImZpbGUiOiJhZ2VuY3ktbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBcclxuICBpb24tY29sIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNGI0YjRkO1xyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgIGNvbG9yOiM0YjRiNGQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbi5oZWFkZXItcm93IHtcclxuICAgIC8vYmFja2dyb3VuZDogIzliOWI5YjtcclxuICAgIC8vbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBpb24tY29se1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH19XHJcbiAgfVxyXG4gIC5yb3cge1xyXG4gICAgLy9iYWNrZ3JvdW5kOiAjMjIzODhjO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcblxyXG4gIC5ib2R5e1xyXG4gIC8qICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMjIzODhjLCAjOWJhMmNjKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIyMzg4YywgIzliYTJjYyk7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICM0YjRiNGQ7XHJcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_agency_agency-list_agency-list_module_ts.js.map