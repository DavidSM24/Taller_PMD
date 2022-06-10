"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_agency_agency-list_agency-list_module_ts"],{

/***/ 88584:
/*!********************************************************************************!*\
  !*** ./src/app/administrator/agency/agency-list/agency-list-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencyListPageRoutingModule": () => (/* binding */ AgencyListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _agency_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agency-list.page */ 71137);




const routes = [
    {
        path: '',
        component: _agency_list_page__WEBPACK_IMPORTED_MODULE_0__.AgencyListPage,
        children: [
            {
                path: 'agency-saw',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_agency_agency-saw_agency-saw_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../agency-saw/agency-saw.module */ 20879)).then(m => m.AgencySawPageModule)
            },
            {
                path: 'agency-update',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../agency-update/agency-update.module */ 77264)).then(m => m.AgencyUpdatePageModule)
            },
            {
                path: 'agency-create',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_agency_agency-create_agency-create_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../agency-create/agency-create.module */ 88333)).then(m => m.AgencyCreatePageModule)
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

/***/ 79947:
/*!************************************************************************!*\
  !*** ./src/app/administrator/agency/agency-list/agency-list.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencyListPageModule": () => (/* binding */ AgencyListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _agency_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agency-list-routing.module */ 88584);
/* harmony import */ var _agency_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agency-list.page */ 71137);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/util.service */ 371);
/* harmony import */ var _agency_update_agency_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../agency-update/agency-update.page */ 22483);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ 24352);










let AgencyListPageModule = class AgencyListPageModule {
};
AgencyListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _agency_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgencyListPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule
        ],
        providers: [_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService],
        declarations: [_agency_list_page__WEBPACK_IMPORTED_MODULE_1__.AgencyListPage, _agency_update_agency_update_page__WEBPACK_IMPORTED_MODULE_3__.AgencyUpdatePage]
    })
], AgencyListPageModule);



/***/ }),

/***/ 71137:
/*!**********************************************************************!*\
  !*** ./src/app/administrator/agency/agency-list/agency-list.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencyListPage": () => (/* binding */ AgencyListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_agency_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./agency-list.page.html */ 75009);
/* harmony import */ var _agency_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agency-list.page.scss */ 47852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_agency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/agency.service */ 99574);
/* harmony import */ var _agency_update_agency_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../agency-update/agency-update.page */ 22483);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/util.service */ 371);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ 36636);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user.service */ 77524);










let AgencyListPage = class AgencyListPage {
    constructor(as, AlertCtrl, modalCtrl, pt, uts, authS, us) {
        this.as = as;
        this.AlertCtrl = AlertCtrl;
        this.modalCtrl = modalCtrl;
        this.pt = pt;
        this.uts = uts;
        this.authS = authS;
        this.us = us;
        this.agencies = [];
        this.oldAgencies = [];
        this.searchStr = "";
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.niTems = Math.ceil(this.pt.height() / 20 + 10);
            if (this.as.added) {
                this.reset(null);
                this.as.added = false;
            }
            else {
                yield this.loadAgencies();
            }
        });
    }
    loadAgencies(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let newAgencies = [];
            if (this.agencies.length == 0) { //inicio
                yield this.uts.presentLoading();
                this.infinite.disabled = false;
                this.oldInfinite = false;
                newAgencies = yield this.as.getAllPaged(this.niTems, 0);
                this.agencies = this.agencies.concat(newAgencies);
                this.agencies = this.sortList(this.agencies);
                this.oldAgencies = [];
                this.oldAgencies = this.oldAgencies.concat(newAgencies);
            }
            if (newAgencies.length < this.niTems) {
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
    edit(agency) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
                    this.oldAgencies.forEach((e) => {
                        if (e.id == resp.data.newAgency.id) {
                            let i2 = this.oldAgencies.indexOf(e);
                            this.oldAgencies[i2] = this.agencies[i];
                        }
                    });
                }
            }
            catch (error) {
            }
        });
    }
    delete(agency) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (agency.myCarRepairs.length > 0 || agency.myExchangesGifts.length > 0) {
                let msg = 'Error. ';
                if (agency.myCarRepairs.length > 0 && agency.myExchangesGifts.length > 0) {
                    msg += "No se puede eliminar la agencia porque tiene reparaciones y pedidos asociados.";
                }
                else if (agency.myCarRepairs.length > 0) {
                    msg += "No se puede eliminar la agencia porque tiene reparaciones asociadas.";
                }
                else if (agency.myExchangesGifts.length > 0) {
                    msg += "No se puede eliminar la agencia porque tiene pedidos asociados.";
                }
                this.uts.presentToast(msg, "danger", 'ban');
            }
            else {
                let user = agency.myUser;
                yield this.uts.presentLoading();
                const result = yield this.as.delete(agency);
                let i = this.agencies.indexOf(agency, 0);
                yield this.uts.hideLoading();
                if (result) {
                    if (i > -1) {
                        this.agencies.splice(i, 1);
                        this.oldAgencies.forEach((e) => {
                            if (e.id == agency.id) {
                                let i2 = this.oldAgencies.indexOf(e);
                                this.oldAgencies.splice(i2, 1);
                            }
                        });
                        let result2 = yield this.us.delete(user);
                        if (!result2)
                            this.uts.presentToast("Error al eliminar el usuario asociado.", "danger", "ban");
                    }
                    this.uts.presentToast("Agencia eliminada correctamente.", "success", "checkmark-circle-outline");
                }
                else {
                    this.uts.presentToast("Error al eliminar la agencia...", "danger", 'ban');
                }
            }
        });
    }
    showDeleteMenu(agency) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.AlertCtrl.create({
                header: 'Confirmación',
                message: '¿Desea eliminar esta Agencia? También se eliminará el usuario asociado.',
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let newAgencies = [];
            if (!this.infinite.disabled) {
                newAgencies = yield this.as.getAllPaged(this.niTems, this.agencies.length);
                this.agencies = this.agencies.concat(newAgencies);
                this.oldAgencies = this.oldAgencies.concat(newAgencies);
                if (newAgencies.length < 30) {
                    this.infinite.disabled = true;
                    this.oldInfinite = true;
                }
            }
            this.infinite.complete();
        });
    }
    onSearchChange(event) {
        this.searchStr = event.detail.value;
    }
    reset(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.infinite.disabled = false;
            this.oldInfinite = false;
            this.agencies = [];
            this.loadAgencies(event);
        });
    }
    logout() {
        this.authS.logout();
    }
    searchChange(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.searchStr = event.detail.value;
            let regex = new RegExp("^[ ]");
            try {
                if (!this.searchStr.match(regex)) {
                    let resultFilter = [];
                    let list = [];
                    this.agencies = [];
                    let lenght = this.searchStr.length;
                    if (lenght > 0) {
                        //consultar y cambiar lista
                        yield this.uts.presentLoading();
                        //username
                        list = yield this.as.getByUserNamePaged(this.searchStr, 99999, 0);
                        list.forEach((e) => {
                            let result = true;
                            resultFilter.forEach((x) => {
                                if (x.id == e.id)
                                    result = false;
                            });
                            if (result)
                                resultFilter.push(e);
                        });
                        //address
                        list = yield this.as.getByAddress(this.searchStr);
                        list.forEach((e) => {
                            let result = true;
                            resultFilter.forEach((x) => {
                                if (x.id == e.id)
                                    result = false;
                            });
                            if (result)
                                resultFilter.push(e);
                        });
                        //company
                        list = yield this.as.getByCompany(this.searchStr);
                        list.forEach((e) => {
                            let result = true;
                            resultFilter.forEach((x) => {
                                if (x.id == e.id)
                                    result = false;
                            });
                            if (result)
                                resultFilter.push(e);
                        });
                        //location
                        list = yield this.as.getByLocation(this.searchStr);
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
                            list = yield this.as.getByPoints(+this.searchStr);
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
                        //zipcode
                        if (+this.searchStr >= 0) {
                            list = yield this.as.getByZipcode(+this.searchStr);
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
                        this.agencies = resultFilter;
                        this.agencies = this.sortList(this.agencies);
                        this.infinite.disabled = true;
                        yield this.uts.hideLoading();
                    }
                    else if (lenght < 1) {
                        this.agencies = [];
                        this.agencies = this.agencies.concat(this.oldAgencies);
                        this.agencies = this.sortList(this.agencies);
                        this.infinite.disabled = this.oldInfinite;
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
    sortList(eg) {
        if (eg != null && eg.length > 1) {
            eg = eg.sort((n1, n2) => {
                if (n1.myInsuranceCompany.cia_Name > n2.myInsuranceCompany.cia_Name) {
                    return 1;
                }
                else if (n1.myInsuranceCompany.cia_Name < n2.myInsuranceCompany.cia_Name) {
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
AgencyListPage.ctorParameters = () => [
    { type: _services_agency_service__WEBPACK_IMPORTED_MODULE_2__.AgencyService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService }
];
AgencyListPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInfiniteScroll,] }]
};
AgencyListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-agency-list',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_agency_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_agency_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AgencyListPage);



/***/ }),

/***/ 75009:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/agency/agency-list/agency-list.page.html ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"false\">\r\n\r\n  <ion-toolbar color=\"primary\">\r\n\r\n    <ion-title>Lista de Agencias</ion-title>\r\n\r\n    <ion-buttons style=\"margin-right: 1%;\" slot=\"end\" class=\"icon-div-container\">\r\n      <div title=\"Nuevo\" routerLink=\"/tab-administrator/user/create\">\r\n        <ion-icon class=\"icon-logout\" slot=\"end\" style=\"pointer-events: none;zoom:1.5;cursor:pointer;content:url(../../../../assets/icon/add-circle-outline.png);\" ></ion-icon>\r\n      </div>\r\n      <div title=\"Lista de Usuarios\" routerLink=\"/tab-administrator/user/list\">\r\n        <ion-icon class=\"icon-logout\" slot=\"end\" style=\"pointer-events: none;zoom:1.3;cursor:pointer;content: url( ../../../../assets/icon/user_list.png);\" ></ion-icon>\r\n      </div>\r\n\r\n      <div title=\"Lista de Compañías de Seguros\" routerLink=\"/tab-administrator/company/list\">\r\n        <ion-icon class=\"icon-logout\" slot=\"end\" style=\"pointer-events: none;zoom:1.3;cursor:pointer;content: url( ../../../../assets/icon/company_list.png);\" ></ion-icon>\r\n      </div>\r\n\r\n      <div title=\"Cerrar Sesión\" (click)=\"logout() \">\r\n      <ion-icon class=\"icon-logout\" slot=\"end\" name=\"log-out-outline\" style=\"pointer-events: none;zoom:1.7;cursor:pointer\"></ion-icon>\r\n      </div>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-searchbar placeholder=\"Encuentra la agencia que estás buscando...\" debounce=\"1000\" inputmode=\"text\" type=\"text\" (ionChange)=\"searchChange($event)\" showCancelButton=\"always\"></ion-searchbar>\r\n\r\n    <ion-row class=\"header-row\">\r\n      <ion-col size=\"1\" style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Código Zip</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Compañía</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col  size=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Localidad</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Puntos</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"1\" style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" style=\"background-color: white;\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"reset($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div class=\"body\">\r\n\r\n\r\n  <ion-grid class=\"ion-text-center\">\r\n\r\n  <ion-row style=\"border-left: 1px solid #4b4b4d;border-right: 1px solid #4b4b4d;\" let *ngFor=\"let agency of this.agencies;let i=index\"\r\n  [ngClass]=\"(i % 2 == 0) ? 'normal' : 'colored'\">\r\n\r\n      <ion-col size=\"1\">\r\n        <ion-text class=\"icon-div-container\" (click)=\"edit(agency)\" title=\"Editar\">\r\n          <ion-icon name=\"pencil\" style=\"color:#22388c;pointer-events: none;\" ></ion-icon>\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\">\r\n        <ion-text>\r\n            {{agency.zipCode}}\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\">\r\n        <ion-text>\r\n            {{agency.myInsuranceCompany.cia_Name}}\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n        <ion-col size=\"2.5\">\r\n          <ion-text>\r\n            {{agency.location}}\r\n          </ion-text>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"2.5\">\r\n          <ion-text>\r\n            {{agency.points}}\r\n          </ion-text>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"1\">\r\n          <ion-text (click)=\"showDeleteMenu(agency)\" class=\"icon-div-container\" title=\"Eliminar\">\r\n            <ion-icon name=\"trash\" color=\"danger\" style=\"pointer-events: none;\"></ion-icon>\r\n          </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infiniteLoad($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 47852:
/*!************************************************************************!*\
  !*** ./src/app/administrator/agency/agency-list/agency-list.page.scss ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-col {\n  border-bottom: 1px solid #4b4b4d;\n}\nion-col ion-text {\n  color: #4b4b4d !important;\n}\n.header-row {\n  border-radius: 0%;\n  border: 0px;\n}\n.header-row ion-col {\n  text-align: center;\n}\n.header-row ion-col ion-text {\n  color: #fff !important;\n  text-align: center;\n}\n.body {\n  /*  background: -webkit-linear-gradient(left, #22388c, #9ba2cc);\n    background: linear-gradient(to right, #22388c, #9ba2cc);*/\n  background-color: white;\n  font-family: \"Roboto\", sans-serif;\n  color: #4b4b4d;\n}\n.normal {\n  background-color: #fff;\n  font-size: 1.1rem;\n}\n.colored {\n  background-color: #cdcccc;\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW5jeS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGdDQUFBO0FBREo7QUFFSTtFQUNFLHlCQUFBO0FBQU47QUFHQTtFQUdJLGlCQUFBO0VBQ0EsV0FBQTtBQUZKO0FBR0k7RUFDRSxrQkFBQTtBQUROO0FBRUk7RUFDRSxzQkFBQTtFQUVBLGtCQUFBO0FBRE47QUFNRTtFQUNBOzZEQUFBO0VBRUUsdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUFISjtBQU1FO0VBRUUsc0JBQUE7RUFDQSxpQkFBQTtBQUpKO0FBT0U7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBSkoiLCJmaWxlIjoiYWdlbmN5LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4gIGlvbi1jb2wge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0YjRiNGQ7XHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgY29sb3I6IzRiNGI0ZCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuLmhlYWRlci1yb3cge1xyXG4gICAgLy9iYWNrZ3JvdW5kOiAjOWI5YjliO1xyXG4gICAgLy9tYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGlvbi1jb2x7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGlvbi10ZXh0e1xyXG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAvL2ZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9fVxyXG4gIH1cclxuXHJcblxyXG4gIC5ib2R5e1xyXG4gIC8qICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMjIzODhjLCAjOWJhMmNjKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIyMzg4YywgIzliYTJjYyk7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICM0YjRiNGQ7XHJcbiAgfVxyXG5cclxuICAubm9ybWFse1xyXG4gICAgLy9iYWNrZ3JvdW5kOiAjMjIzODhjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbG9yZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA1LCAyMDQsIDIwNCk7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcblxyXG5cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_agency_agency-list_agency-list_module_ts.js.map