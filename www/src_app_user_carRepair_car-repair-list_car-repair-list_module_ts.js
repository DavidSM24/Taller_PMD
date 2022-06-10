"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user_carRepair_car-repair-list_car-repair-list_module_ts"],{

/***/ 54092:
/*!**********************************************************************************!*\
  !*** ./src/app/user/carRepair/car-repair-list/car-repair-list-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairListPageRoutingModule": () => (/* binding */ CarRepairListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _car_repair_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-repair-list.page */ 62788);




const routes = [
    {
        path: '',
        component: _car_repair_list_page__WEBPACK_IMPORTED_MODULE_0__.CarRepairListPage
    }
];
let CarRepairListPageRoutingModule = class CarRepairListPageRoutingModule {
};
CarRepairListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarRepairListPageRoutingModule);



/***/ }),

/***/ 32497:
/*!**************************************************************************!*\
  !*** ./src/app/user/carRepair/car-repair-list/car-repair-list.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairListPageModule": () => (/* binding */ CarRepairListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _car_repair_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-repair-list-routing.module */ 54092);
/* harmony import */ var _car_repair_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-repair-list.page */ 62788);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 24352);








let CarRepairListPageModule = class CarRepairListPageModule {
};
CarRepairListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _car_repair_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarRepairListPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_car_repair_list_page__WEBPACK_IMPORTED_MODULE_1__.CarRepairListPage]
    })
], CarRepairListPageModule);



/***/ }),

/***/ 62788:
/*!************************************************************************!*\
  !*** ./src/app/user/carRepair/car-repair-list/car-repair-list.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairListPage": () => (/* binding */ CarRepairListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_car_repair_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./car-repair-list.page.html */ 54734);
/* harmony import */ var _car_repair_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-repair-list.page.scss */ 23155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_agency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/agency.service */ 99574);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 36636);
/* harmony import */ var src_app_services_car_repair_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/car-repair.service */ 7928);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ 371);
/* harmony import */ var _car_repair_saw_car_repair_saw_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../car-repair-saw/car-repair-saw.page */ 11278);
/* harmony import */ var _car_repair_update_car_repair_update_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../car-repair-update/car-repair-update.page */ 55744);












let CarRepairListPage = class CarRepairListPage {
    constructor(cS, toast, alertCtrl, modalCtrl, loading, utilService, agencyService, routes, pt, //para saber el dispositivo
    authService) {
        this.cS = cS;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.utilService = utilService;
        this.agencyService = agencyService;
        this.routes = routes;
        this.pt = pt;
        this.authService = authService;
        this.n = 0;
        //variable que muestra las reparaciones en pantalla
        this.carRepairs = [];
        //variable que guarda las reparaciones mientras se muestran otras en pantalla
        this.carRepairsStore = [];
        //variable que guarda las letras de la barra de busqueda
        this.searchStr = "";
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.cS.added) {
                this.reset(null);
                this.cS.added = false;
            }
            else {
                try {
                    yield this.getMyAgency();
                    this.nItems = Math.ceil(this.pt.height() / 20 + 10);
                    yield this.loadCarRepair();
                    this.n = this.carRepairs.length;
                }
                catch (error) {
                }
            }
        });
    }
    //Métodos de los servicios
    /**
     * Método que carga las reparaciones de la base de datos
     * se llama la primera vez que carga la página
     * @param event
     */
    loadCarRepair(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let newCarRepair = [];
            if (this.carRepairs.length == 0) {
                if (!event) {
                    this.presentLoading();
                }
                this.infinite.disabled = false;
                try {
                    newCarRepair = yield this.cS.getByAgencyPaged(this.myAgency.id, this.nItems, 0);
                    this.carRepairs = this.carRepairs.concat(newCarRepair);
                    this.storageCarRepairs();
                    if (newCarRepair.length < this.nItems) {
                        this.infinite.disabled = true;
                    }
                }
                catch (error) {
                    this.presentToast("Error de carga", "danger", 'ban');
                }
                finally {
                    if (event) {
                        event.target.complete();
                    }
                    else {
                        this.loading.dismiss();
                    }
                }
            }
        });
    }
    /**
    * Método que actualiza una reparación mediante un modal
    * @param carRepair Reparación que se quiera modificar
    */
    edit(carRepair) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _car_repair_update_car_repair_update_page__WEBPACK_IMPORTED_MODULE_7__.CarRepairUpdatePage,
                //hoja de estilos
                cssClass: 'fullscreen',
                //pasar datos al modal
                componentProps: {
                    'carRepair': carRepair
                }
            });
            yield modal.present();
            const resp = yield modal.onDidDismiss();
            if (resp.data != null) {
                let i = this.carRepairs.indexOf(carRepair);
                this.carRepairs[i] = resp.data.newCarRepair;
            }
        });
    }
    /**
     * Método que borra una reparación de la base de datos
     * @param carRepair reparación que se quiera eliminar
     */
    delete(carRepair) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.presentLoading();
                const result = yield this.cS.delete(carRepair); //borra la reparación y guarda si se ha borrado
                let i = this.carRepairs.indexOf(carRepair, 0); //se comprueba si la reparación esta en la lista
                if (result) {
                    if (i > -1) {
                        this.carRepairs.splice(i, 1); //borra la reparación de la lista
                    }
                    this.presentToast("La reparación ha sido eliminada correctamente.", "success", "checkmark-circle-outline");
                }
                else {
                    this.presentToast("Error al borrar la reparación", "danger", 'ban');
                }
            }
            catch (error) {
                this.presentToast("Nose ha podido borrar la reparación, intentelo más tarde", "danger", 'ban');
            }
            finally {
                try {
                    yield this.miLoading.dismiss();
                }
                catch (error) {
                }
            }
        });
    }
    //Métodos que cargan los modales
    /**
    * Método que muestra una alerta cuando se quiere borrar una reparación
    * @param carRepair reparación que se quiere borrar
    */
    showDeleteMenu(carRepair) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmación',
                message: '¿Desea eliminar la reparación?',
                buttons: [
                    {
                        text: 'Eliminar',
                        cssClass: 'rojo',
                        handler: () => {
                            this.delete(carRepair);
                        }
                    },
                    {
                        text: 'Cancelar',
                        cssClass: 'secundary',
                        role: 'cancel'
                    }
                ]
            });
            try {
                yield alert.present();
            }
            catch (error) {
            }
        });
    }
    /**
    * Método que carga el modal de los datos de una reparación
    * @param carRepair
    * @returns
    */
    saw(carRepair) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _car_repair_saw_car_repair_saw_page__WEBPACK_IMPORTED_MODULE_6__.CarRepairSawPage,
                //hoja de estilos
                cssClass: 'my-modal-class',
                //pasar datos al modal
                componentProps: {
                    'carRepair': carRepair
                }
            });
            return yield modal.present();
        });
    }
    //Métodos de filtrado
    /**
     * Método que muestra en la vista los coches que correspondan con el estado seleccionado el Ion-Select
     * @param event
     */
    setCarByStatus(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let carR = [];
            const value = event.detail.value;
            try {
                yield this.utilService.presentLoading();
                if ("false".match(value)) {
                    let carRepairSearch = yield this.cS.getByStatedPaged(false, 9999, 0);
                    carR = this.addSearchedReparation(carRepairSearch, carR);
                    this.carRepairs = carR;
                }
                else if ("true".match(value)) {
                    let carRepairSearch = yield this.cS.getByStatedPaged(true, 9999, 0);
                    carR = this.addSearchedReparation(carRepairSearch, carR);
                    this.carRepairs = carR;
                }
                else if ("all".match(value)) {
                    this.reset();
                }
            }
            catch (error) {
            }
            finally {
                yield this.utilService.hideLoading();
            }
        });
    }
    /**
    * Método que se activa cuando se escribe algo en la barra de búsqueda
    * Para buscar reparaciones por matrícula, dueño del coche, operación
    * y nombre de la agencia
    * @param event
    */
    onSearchChange(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let carRepiarResult = [];
            let carRepairList = [];
            this.searchStr = event.detail.value;
            let regex = new RegExp("^[ ]");
            if (!this.searchStr.match(regex)) {
                if (this.searchStr.length > 0) {
                    try {
                        this.carRepairs = [];
                        yield this.utilService.presentLoading();
                        //operacion
                        carRepairList = yield this.cS.getByOperationFilter(this.searchStr);
                        carRepiarResult = this.addSearchedReparation(carRepairList, carRepiarResult);
                        //Matrícula
                        carRepairList = yield this.cS.getByCarPlate(this.searchStr, 9999, 0);
                        carRepiarResult = this.addSearchedReparation(carRepairList, carRepiarResult);
                        //Nombre del cliente
                        carRepairList = yield this.cS.getByClientName(this.searchStr, 9999, 0);
                        carRepiarResult = this.addSearchedReparation(carRepairList, carRepiarResult);
                        //Información de la agencia
                        carRepairList = yield this.cS.getByAgencyInfoFilter(this.searchStr);
                        carRepiarResult = this.addSearchedReparation(carRepairList, carRepiarResult);
                        this.carRepairs = carRepiarResult;
                    }
                    catch (error) {
                        yield this.utilService.presentToast("Se ha producido un error en la busqueda", "danger", 'ban');
                    }
                    finally {
                        yield this.utilService.hideLoading();
                    }
                }
                else if (length < 1) {
                    try {
                        yield this.reset();
                    }
                    catch (error) {
                    }
                }
            }
            else
                this.presentToast("La búsqueda no puede comenzar por espacios en blanco.", "danger", "ban");
        });
    }
    /**
     * Método que compara las dos listas de reparaciones y añade las que falten
     * @param carRepairSearch Reparaciones traidas de la base de datos
     * @param resultFilter Reparaciones que ya se han filtrado
     * @returns CarRepair[] Lista de reparaciones con el añadido de las reparaciones faltantes
     */
    addSearchedReparation(carRepairSearch, resultFilter) {
        let result;
        carRepairSearch.forEach((search) => {
            result = true;
            if (this.myAgency.id == search.myAgency.id) {
                resultFilter.forEach((carRepiarResult) => {
                    if (carRepiarResult.id == search.id) {
                        result = false;
                    }
                });
                if (result) {
                    resultFilter.push(search);
                }
            }
        });
        return resultFilter;
    }
    /**
    * Método que reinicia la lista de reparaciones
    * @param event
    */
    reset(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.n = 0;
            this.infinite.disabled = false;
            this.carRepairs = [];
            this.loadCarRepair(event);
        });
    }
    /**
     * Método que guarda las reparaciones en un almacen
     */
    storageCarRepairs() {
        this.carRepairsStore = this.carRepairs;
    }
    /**
     * Método que permite al usuario cerrar la sesión
     */
    logout() {
        this.authService.logout();
    }
    /**
    * Método que obtiene el id de la agencia conectada
    */
    getMyAgency() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let agency;
            try {
                yield this.utilService.presentLoading();
                agency = this.authService.agency;
                this.myAgency = this.authService.agency;
                this.idAgency = this.authService.agency.id;
                yield this.utilService.hideLoading();
            }
            catch (_a) {
                yield this.utilService.presentToast("Fallo al cargar", "danger", 'ban');
                yield this.utilService.hideLoading();
            }
        });
    }
    //Métodos auxiliares
    /**
   * Método que carga más reparaciones cuando se llega al final de la pantalla
   * @param $event
   */
    infiniteLoad($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let newCarRepairs = [];
            if (!this.infinite.disabled) {
                try {
                    newCarRepairs = yield this.cS.getByAgencyPaged(this.myAgency.id, this.nItems, this.carRepairs.length);
                    this.carRepairs = this.carRepairs.concat(newCarRepairs);
                    if (newCarRepairs.length < 30) {
                        this.infinite.disabled = true;
                    }
                }
                catch (error) {
                }
            }
            this.infinite.complete();
        });
    }
    //Metodo que muestra el loading
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.miLoading = yield this.loading.create({
                message: ''
            });
            yield this.miLoading.present();
        });
    }
    //Método que muestra un toast
    presentToast(msg, clr, icn) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const miToast = yield this.toast.create({
                message: msg,
                duration: 2000,
                color: clr,
                icon: icn
            });
            miToast.present();
        });
    }
};
CarRepairListPage.ctorParameters = () => [
    { type: src_app_services_car_repair_service__WEBPACK_IMPORTED_MODULE_4__.CarRepairService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__.UtilService },
    { type: src_app_services_agency_service__WEBPACK_IMPORTED_MODULE_2__.AgencyService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
CarRepairListPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonInfiniteScroll,] }]
};
CarRepairListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-car-repair-list',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_car_repair_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_car_repair_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CarRepairListPage);



/***/ }),

/***/ 54734:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/user/carRepair/car-repair-list/car-repair-list.page.html ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"false\">\r\n  <ion-toolbar color=\"medium\">\r\n    <ion-title>Lista de Reparaciones</ion-title>\r\n\r\n    <ion-buttons style=\"margin-right: 1%;\" slot=\"end\">\r\n      <div class=\"icon-div-container\" title=\"Nuevo\" routerLink=\"/tab-user/car-repair/create\">\r\n        <ion-icon class=\"icon-logout\" slot=\"end\" style=\"color:white;pointer-events: none;zoom:1.5;cursor:pointer;content:url(../../../../assets/icon/new_icon_ui.png);\" ></ion-icon>\r\n      </div>\r\n\r\n      <div class=\"icon-div-container\" title=\"Cerrar Sesión\" (click)=\"logout()\">\r\n        <ion-icon class=\"icon-logout\" slot=\"end\" name=\"log-out-outline\"  style=\"zoom:1.7;cursor:pointer\"></ion-icon>\r\n      </div>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar color=\"medium\">\r\n    <ion-row >\r\n      <ion-col sizeSm=\"12\" size=\"9\" sizeMd=\"12\" sizeLg=\"9\" style=\"border:none !important\">\r\n        <ion-searchbar  placeholder=\"Encuentra la reparación que estás buscando...\" inputmode=\"text\" type=\"text\"\r\n        debounce=\"1000\" (ionChange)=\"onSearchChange($event)\" showCancelButton=\"always\"></ion-searchbar>\r\n\r\n      </ion-col>\r\n      <ion-col sizeMd=\"3\" sizeSm=\"3\" sizeLg=\"3\" class=\"selector\" style=\"border:none !important\">\r\n\r\n          <ion-item style=\"height: 85%; margin-top:1.1%\">\r\n            <ion-label>Estado del vehículo</ion-label>\r\n            <ion-select (ionChange)=\"setCarByStatus($event)\" interface=\"popover\" multiple=\"false\">\r\n              <ion-select-option value=\"true\">Reparado</ion-select-option>\r\n              <ion-select-option value=\"false\">Sin reparar</ion-select-option>\r\n              <ion-select-option value=\"all\">Todos</ion-select-option>\r\n\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row class=\"header-row\">\r\n      <ion-col sizeSm=\"1\" sizeLg=\"1\" style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n\r\n\r\n\r\n      <ion-col sizeSm=\"2.5\" sizeLg=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Matrícula</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col sizeSm=\"2.5\" sizeLg=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Fecha de Alta</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col sizeSm=\"2.5\" sizeLg=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Coste</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col sizeSm=\"2.5\" sizeLg=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Reparado</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col sizeSm=\"1\" sizeLg=\"1\" style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" style=\"background-color: white;\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"reset($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div class=\"body\">\r\n\r\n\r\n  <ion-grid class=\"ion-text-center\">\r\n\r\n    <ion-row let *ngFor=\"let carRepair of this.carRepairs\" class=\"row\" >\r\n\r\n      <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n        <ion-text *ngIf=\"!carRepair.repaired\" class=\"icon-div-container\" (click)=\"edit(carRepair)\" title=\"Editar\">\r\n          <ion-icon name=\"pencil\" style=\"color:#22388c;pointer-events: none;\"></ion-icon>\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n\r\n\r\n\r\n      <ion-col sizeSm=\"2.5\" sizeLg=\"2.5\"(click)=\"saw(carRepair)\">\r\n        <ion-text class=\"pointerText\">\r\n            {{carRepair.carPlate.toUpperCase()}}\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col sizeSm=\"2.5\" sizeLg=\"2.5\" (click)=\"saw(carRepair)\">\r\n        <ion-text class=\"pointerText\">\r\n            {{carRepair.dateOrder}}\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n        <ion-col sizeSm=\"2.5\" sizeLg=\"2.5\"(click)=\"saw(carRepair)\">\r\n          <ion-text class=\"pointerText\">\r\n            {{carRepair.amount}}\r\n          </ion-text>\r\n        </ion-col>\r\n\r\n        <ion-col sizeSm=\"2.5\" sizeLg=\"2.5\"(click)=\"saw(carRepair)\">\r\n          <div title=\"Reparado\">\r\n            <ion-icon *ngIf=\"carRepair.repaired\" name=\"car\" style=\"color: blueviolet;pointer-events: none;\"></ion-icon>\r\n          </div>\r\n          <div title=\"Sin Reparar\">\r\n            <ion-icon *ngIf=\"!carRepair.repaired\" name=\"construct\" style=\"color: red;pointer-events: none;\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n          <ion-text *ngIf=\"!carRepair.repaired\" class=\"icon-div-container\" (click)=\"showDeleteMenu(carRepair)\" title=\"Eliminar\">\r\n\r\n            <ion-icon name=\"trash\" color=\"danger\" style=\"pointer-events: none;\" ></ion-icon>\r\n          </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infiniteLoad($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 23155:
/*!**************************************************************************!*\
  !*** ./src/app/user/carRepair/car-repair-list/car-repair-list.page.scss ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "@media screen and (min-width: 601px) {\n  ion-text {\n    font-size: 18px !important;\n  }\n\n  ion-item {\n    size: 18px;\n  }\n}\n@media screen and (max-width: 600px) {\n  ion-text {\n    font-size: 11px !important;\n  }\n\n  ion-item {\n    size: 11px;\n  }\n}\n@media screen and (max-width: 360px) {\n  ion-text {\n    font-size: 10px !important;\n  }\n\n  ion-item {\n    size: 10px;\n  }\n}\nion-col ion-text {\n  color: #4b4b4d !important;\n}\n.header-row {\n  margin-right: 2%;\n  border-radius: 0%;\n  border: 0px;\n}\n.header-row ion-col {\n  text-align: center;\n}\n.header-row ion-col ion-text {\n  color: #fff !important;\n  font-size: 1.2rem;\n  text-align: center;\n}\n.row {\n  color: #fff;\n  font-size: 1.1rem;\n  background-color: #fff !important;\n  border: 1px solid #b3b3b3;\n  border-radius: 25px;\n  margin-top: 0.6%;\n  margin-bottom: 0.6%;\n  margin-left: 1%;\n  margin-right: 1%;\n  cursor: pointer;\n}\n.body {\n  /*  background: -webkit-linear-gradient(left, #22388c, #9ba2cc);\n    background: linear-gradient(to right, #22388c, #9ba2cc);*/\n  background: #d0e5f0 !important;\n  font-family: \"Roboto\", sans-serif;\n  color: #4b4b4d;\n  min-height: 100%;\n}\nion-icon {\n  pointer-events: none;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1yZXBhaXItbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFFSTtJQUNFLDBCQUFBO0VBRE47O0VBR0U7SUFDRSxVQUFBO0VBQUo7QUFDRjtBQUVFO0VBRUk7SUFDRSwwQkFBQTtFQUROOztFQUdJO0lBQ0UsVUFBQTtFQUFOO0FBQ0Y7QUFFRTtFQUVJO0lBQ0UsMEJBQUE7RUFETjs7RUFHSTtJQUNFLFVBQUE7RUFBTjtBQUNGO0FBUUk7RUFDRSx5QkFBQTtBQU5OO0FBU0U7RUFFRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQVBKO0FBUUk7RUFDRSxrQkFBQTtBQU5OO0FBT0k7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFMTjtBQVFFO0VBRUUsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFOSjtBQVNFO0VBQ0E7NkRBQUE7RUFFRSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTko7QUFTRTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQU5KIiwiZmlsZSI6ImNhci1yZXBhaXItbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjYwMXB4KSB7XHJcblxyXG4gICAgICBpb24tdGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlvbi1pdGVte1xyXG4gICAgICBzaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XHJcblxyXG4gICAgICBpb24tdGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICBpb24taXRlbXtcclxuICAgICAgICBzaXplOiAxMXB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpIHtcclxuXHJcbiAgICAgIGlvbi10ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgIHNpemU6IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGlvbi1jb2wge1xyXG4gICAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRiNGI0ZDtcclxuICAgIGlvbi10ZXh0e1xyXG4gICAgICBjb2xvcjojNGI0YjRkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5oZWFkZXItcm93IHtcclxuICAgIC8vYmFja2dyb3VuZDogIzliOWI5YjtcclxuICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgaW9uLWNvbHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9fVxyXG4gIH1cclxuICAucm93IHtcclxuICAgIC8vYmFja2dyb3VuZDogIzIyMzg4YztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTc5LCAxNzksIDE3OSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDowLjYlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC42JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYm9keXtcclxuICAvKiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzIyMzg4YywgIzliYTJjYyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyMjM4OGMsICM5YmEyY2MpOyovXHJcbiAgICBiYWNrZ3JvdW5kOiAjZDBlNWYwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzRiNGI0ZDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBpb24taWNvbntcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB9XHJcblxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_user_carRepair_car-repair-list_car-repair-list_module_ts.js.map