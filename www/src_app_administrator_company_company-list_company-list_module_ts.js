"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_company_company-list_company-list_module_ts"],{

/***/ 7045:
/*!***********************************************************************************!*\
  !*** ./src/app/administrator/company/company-list/company-list-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyListPageRoutingModule": () => (/* binding */ CompanyListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _company_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-list.page */ 68417);




const routes = [
    {
        path: '',
        component: _company_list_page__WEBPACK_IMPORTED_MODULE_0__.CompanyListPage
    }
];
let CompanyListPageRoutingModule = class CompanyListPageRoutingModule {
};
CompanyListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CompanyListPageRoutingModule);



/***/ }),

/***/ 85940:
/*!***************************************************************************!*\
  !*** ./src/app/administrator/company/company-list/company-list.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyListPageModule": () => (/* binding */ CompanyListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _company_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-list-routing.module */ 7045);
/* harmony import */ var _company_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-list.page */ 68417);
/* harmony import */ var _company_update_company_update_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company-update/company-update.page */ 12115);








let CompanyListPageModule = class CompanyListPageModule {
};
CompanyListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _company_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompanyListPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        ],
        declarations: [_company_list_page__WEBPACK_IMPORTED_MODULE_1__.CompanyListPage, _company_update_company_update_page__WEBPACK_IMPORTED_MODULE_2__.CompanyUpdatePage]
    })
], CompanyListPageModule);



/***/ }),

/***/ 68417:
/*!*************************************************************************!*\
  !*** ./src/app/administrator/company/company-list/company-list.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyListPage": () => (/* binding */ CompanyListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_company_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./company-list.page.html */ 98337);
/* harmony import */ var _company_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-list.page.scss */ 18090);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_agency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/agency.service */ 99574);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 36636);
/* harmony import */ var src_app_services_insurance_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/insurance-company.service */ 37639);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ 77524);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ 371);
/* harmony import */ var _company_update_company_update_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../company-update/company-update.page */ 12115);











let CompanyListPage = class CompanyListPage {
    constructor(is, as, AlertCtrl, modalCtrl, pt, uts, authS, us) {
        this.is = is;
        this.as = as;
        this.AlertCtrl = AlertCtrl;
        this.modalCtrl = modalCtrl;
        this.pt = pt;
        this.uts = uts;
        this.authS = authS;
        this.us = us;
        this.companies = [];
        this.oldCompanies = [];
        this.searchStr = "";
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.niTems = Math.ceil(this.pt.height() / 20 + 10);
            if (this.is.added) {
                this.reset(null);
                this.is.added = false;
            }
            else {
                yield this.loadCompanies();
            }
        });
    }
    loadCompanies(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let newCompanies = [];
            if (this.companies.length == 0) { //inicio
                yield this.uts.presentLoading();
                this.infinite.disabled = false;
                this.oldInfinite = false;
                newCompanies = yield this.is.getAllPaged(this.niTems, 1);
                this.companies = this.companies.concat(newCompanies);
                this.companies = this.sortList(this.companies);
                this.oldCompanies = [];
                this.oldCompanies = this.oldCompanies.concat(newCompanies);
            }
            if (newCompanies.length < this.niTems) {
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
    edit(company) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const modal = yield this.modalCtrl.create({
                    component: _company_update_company_update_page__WEBPACK_IMPORTED_MODULE_7__.CompanyUpdatePage,
                    cssClass: 'fullscreen',
                    componentProps: {
                        'company': company
                    }
                    //
                });
                yield modal.present();
                const resp = yield modal.onDidDismiss();
                if (resp.data != null) {
                    let i = this.companies.indexOf(company);
                    this.companies[i] = resp.data.newCompany;
                    this.oldCompanies.forEach((e) => {
                        if (e.id == resp.data.newCompany.id) {
                            let i2 = this.oldCompanies.indexOf(e);
                            this.oldCompanies[i2] = this.companies[i];
                        }
                    });
                }
            }
            catch (error) {
            }
        });
    }
    delete(company) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.uts.presentLoading();
            let list = yield this.as.getByCompany(company.cia_Name);
            yield this.uts.hideLoading();
            if (list.length > 0) {
                this.uts.presentToast("No se puede eliminar la Compañia de Seguros porque existen agencias relacionadas.", "danger", 'ban');
            }
            else {
                yield this.uts.presentLoading();
                const result = yield this.is.delete(company);
                let i = this.companies.indexOf(company);
                yield this.uts.hideLoading();
                if (result) {
                    if (i > -1) {
                        this.companies.splice(i, 1);
                    }
                    this.oldCompanies.forEach((e) => {
                        if (e.id == company.id) {
                            let i2 = this.oldCompanies.indexOf(e);
                            this.oldCompanies.splice(i2, 1);
                        }
                    });
                    this.uts.presentToast("Compaía eliminada correctamente.", "success", "checkmark-circle-outline");
                }
                else
                    this.uts.presentToast("Error al eliminar la compañia.", "danger", "ban");
            }
        });
    }
    showDeleteMenu(company) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.AlertCtrl.create({
                header: 'Confirmación',
                message: '¿Desea eliminar esta compañia?',
                buttons: [
                    {
                        text: 'Eliminar',
                        cssClass: 'rojo',
                        handler: () => {
                            this.delete(company);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let newCompanies = [];
            if (!this.infinite.disabled) {
                newCompanies = yield this.is.getAllPaged(this.niTems, this.companies.length);
                newCompanies = this.sortList(newCompanies);
                this.companies = this.companies.concat(newCompanies);
                this.oldCompanies = this.oldCompanies.concat(newCompanies);
                if (newCompanies.length < 30) {
                    this.infinite.disabled = true;
                    this.oldInfinite = true;
                }
            }
            this.infinite.complete();
        });
    }
    reset(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.infinite.disabled = false;
            this.oldInfinite = false;
            this.companies = [];
            this.loadCompanies(event);
        });
    }
    logout() {
        this.authS.logout();
    }
    searchChange() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.searchStr = this.sb.value;
            let regex = new RegExp("^[ ]");
            try {
                if (!this.searchStr.match(regex)) {
                    let resultFilter = [];
                    let list = [];
                    this.companies = [];
                    let lenght = this.searchStr.length;
                    if (lenght > 0) {
                        //consultar y cambiar lista
                        yield this.uts.presentLoading();
                        //cia_name
                        list = yield this.is.getByCiaName(this.searchStr);
                        list.forEach((e) => {
                            let result = true;
                            resultFilter.forEach((x) => {
                                if (x.id == e.id)
                                    result = false;
                            });
                            if (result)
                                resultFilter.push(e);
                        });
                        this.companies = resultFilter;
                        this.companies = this.sortList(this.companies);
                        this.infinite.disabled = true;
                        yield this.uts.hideLoading();
                    }
                    else if (lenght < 1) {
                        this.companies = [];
                        this.companies = this.companies.concat(this.oldCompanies);
                        this.companies = this.sortList(this.companies);
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
                if (n1.cia_Name > n2.cia_Name) {
                    return 1;
                }
                else if (n1.cia_Name < n2.cia_Name) {
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
CompanyListPage.ctorParameters = () => [
    { type: src_app_services_insurance_company_service__WEBPACK_IMPORTED_MODULE_4__.InsuranceCompanyService },
    { type: src_app_services_agency_service__WEBPACK_IMPORTED_MODULE_2__.AgencyService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__.UtilService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService }
];
CompanyListPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonInfiniteScroll,] }],
    sb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSearchbar,] }]
};
CompanyListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-company-list',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_company_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_company_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CompanyListPage);



/***/ }),

/***/ 98337:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/company/company-list/company-list.page.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"false\">\r\n\r\n  <ion-toolbar color=\"primary\">\r\n\r\n    <ion-title>Lista de Compañias de Seguros</ion-title>\r\n\r\n    <ion-buttons style=\"margin-right: 1%;\" slot=\"end\" class=\"icon-div-container\">\r\n      <div title=\"Nuevo\" routerLink=\"/tab-administrator/company/create\" >\r\n        <ion-icon class=\"icon-logout\" slot=\"end\" style=\"pointer-events: none;zoom:1.5;cursor:pointer;content:url(../../../../assets/icon/add-circle-outline.png);\" ></ion-icon>\r\n      </div>\r\n\r\n      <div title=\"Lista de Agencias\" routerLink=\"/tab-administrator/agency/list\">\r\n        <ion-icon class=\"icon-logout\" slot=\"end\" style=\"pointer-events: none;zoom:1.3;cursor:pointer;content: url( ../../../../assets/icon/agency_list.png);\" ></ion-icon>\r\n      </div>\r\n\r\n      <div title=\"Cerrar Sesión\" (click)=\"logout() \">\r\n      <ion-icon class=\"icon-logout\" slot=\"end\" name=\"log-out-outline\" style=\"pointer-events: none;zoom:1.7;cursor:pointer\"></ion-icon>\r\n      </div>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n  <ion-toolbar style=\"padding-bottom: 1%;\" color=\"primary\">\r\n    <ion-searchbar (ionChange)=\"searchChange()\" placeholder=\"Encuentra la compañía que estás buscando...\" debounce=\"1000\" inputmode=\"text\" type=\"text\" showCancelButton=\"always\"></ion-searchbar>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" style=\"background-color: white;\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"reset($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div class=\"body\">\r\n\r\n\r\n  <ion-grid class=\"ion-text-center\">\r\n\r\n  <ion-row style=\"border-left: 1px solid #4b4b4d;border-right: 1px solid #4b4b4d;\" let *ngFor=\"let company of this.companies; let i=index\" [ngClass]=\"(i % 2 == 0) ? 'normal' : 'colored'\" >\r\n\r\n      <ion-col size=\"0.4\">\r\n        <ion-text class=\"icon-div-container\" (click)=\"edit(company)\" title=\"Editar\">\r\n          <ion-icon name=\"pencil\" style=\"color:#22388c;pointer-events: none;\" ></ion-icon>\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"0.4\">\r\n        <ion-text (click)=\"showDeleteMenu(company)\" class=\"icon-div-container\" title=\"Eliminar\">\r\n          <ion-icon name=\"trash\" color=\"danger\" style=\"pointer-events: none;\"></ion-icon>\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"11.2\" class=\"left\">\r\n        <ion-text>\r\n            {{company.cia_Name}}\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infiniteLoad($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 18090:
/*!***************************************************************************!*\
  !*** ./src/app/administrator/company/company-list/company-list.page.scss ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "ion-col {\n  border-bottom: 1px solid #4b4b4d;\n}\nion-col ion-text {\n  color: #4b4b4d !important;\n}\n.header-row {\n  border-radius: 0%;\n  border: 0px;\n}\n.header-row ion-col {\n  text-align: center;\n}\n.header-row ion-col ion-text {\n  color: #fff !important;\n  font-size: 1.2rem;\n  text-align: center;\n}\n.row {\n  color: #fff;\n  font-size: 1.1rem;\n}\n.body {\n  /*  background: -webkit-linear-gradient(left, #22388c, #9ba2cc);\n    background: linear-gradient(to right, #22388c, #9ba2cc);*/\n  background-color: white;\n  font-family: \"Roboto\", sans-serif;\n  color: #4b4b4d;\n}\nion-icon {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnktbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxnQ0FBQTtBQURKO0FBRUk7RUFDRSx5QkFBQTtBQUFOO0FBR0E7RUFHSSxpQkFBQTtFQUNBLFdBQUE7QUFGSjtBQUdJO0VBQ0Usa0JBQUE7QUFETjtBQUVJO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQU47QUFHRTtFQUVFLFdBQUE7RUFDQSxpQkFBQTtBQURKO0FBSUU7RUFDQTs2REFBQTtFQUVFLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FBREo7QUFJRTtFQUNFLG9CQUFBO0FBREoiLCJmaWxlIjoiY29tcGFueS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuICBpb24tY29sIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNGI0YjRkO1xyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgIGNvbG9yOiM0YjRiNGQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbi5oZWFkZXItcm93IHtcclxuICAgIC8vYmFja2dyb3VuZDogIzliOWI5YjtcclxuICAgIC8vbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBpb24tY29se1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH19XHJcbiAgfVxyXG4gIC5yb3cge1xyXG4gICAgLy9iYWNrZ3JvdW5kOiAjMjIzODhjO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcblxyXG4gIC5ib2R5e1xyXG4gIC8qICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMjIzODhjLCAjOWJhMmNjKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIyMzg4YywgIzliYTJjYyk7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICM0YjRiNGQ7XHJcbiAgfVxyXG5cclxuICBpb24taWNvbntcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_company_company-list_company-list_module_ts.js.map