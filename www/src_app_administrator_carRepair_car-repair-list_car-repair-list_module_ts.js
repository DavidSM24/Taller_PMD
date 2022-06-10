"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_carRepair_car-repair-list_car-repair-list_module_ts"],{

/***/ 6066:
/*!*******************************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-list/car-repair-list-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairListPageRoutingModule": () => (/* binding */ CarRepairListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _car_repair_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-repair-list.page */ 99519);




const routes = [
    {
        path: '',
        component: _car_repair_list_page__WEBPACK_IMPORTED_MODULE_0__.CarRepairListPage,
        children: [
            {
                path: 'car-repair-saw',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../car-repair-saw/car-repair-saw.module */ 56589)).then(m => m.CarRepairSawPageModule)
            },
            {
                path: 'car-repair-update',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../car-repair-update/car-repair-update.module */ 42529)).then(m => m.CarRepairUpdatePageModule)
            },
            {
                path: 'car-repair-create',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_carRepair_car-repair-create_car-repair-create_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../car-repair-create/car-repair-create.module */ 8189)).then(m => m.CarRepairCreatePageModule)
            }
        ]
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

/***/ 72845:
/*!***********************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-list/car-repair-list.module.ts ***!
  \***********************************************************************************/
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
/* harmony import */ var _car_repair_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-repair-list-routing.module */ 6066);
/* harmony import */ var _car_repair_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-repair-list.page */ 99519);
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

/***/ 99519:
/*!*********************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-list/car-repair-list.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairListPage": () => (/* binding */ CarRepairListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_car_repair_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./car-repair-list.page.html */ 21434);
/* harmony import */ var _car_repair_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-repair-list.page.scss */ 45556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 36636);
/* harmony import */ var src_app_services_car_repair_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/car-repair.service */ 7928);
/* harmony import */ var _car_repair_saw_car_repair_saw_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../car-repair-saw/car-repair-saw.page */ 37584);
/* harmony import */ var _car_repair_update_car_repair_update_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../car-repair-update/car-repair-update.page */ 53022);










let CarRepairListPage = class CarRepairListPage {
    constructor(cS, toast, alertCtrl, modalCtrl, loading, routes, pt, //para saber el dispositivo
    authS) {
        this.cS = cS;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.routes = routes;
        this.pt = pt;
        this.authS = authS;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.nItems = Math.ceil(this.pt.height() / 20 + 10);
            try {
                yield this.loadCarRepair();
                this.n = this.carRepairs.length;
            }
            catch (error) {
            }
        });
    }
    /**
     * Método que carga las reparaciones de la base de datos
     * se llama la primera vez que carga la página
     * @param event
     */
    loadCarRepair(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let newCarRepair = [];
            if (this.carRepairs.length == 0) {
                if (!event) {
                    this.presentLoading();
                }
                this.infinite.disabled = false;
                this.oldInifinte = false;
                try {
                    newCarRepair = yield this.cS.getAllPaged(this.nItems, 0);
                    this.carRepairs = this.carRepairs.concat(newCarRepair);
                    this.storageCarRepairs(this.carRepairs);
                    if (newCarRepair.length < this.nItems) {
                        this.infinite.disabled = true;
                        this.oldInifinte = true;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _car_repair_update_car_repair_update_page__WEBPACK_IMPORTED_MODULE_5__.CarRepairUpdatePage,
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
                this.carRepairsStore.forEach((e) => {
                    if (e.id == resp.data.newCarRepair.id) {
                        let i2 = this.carRepairsStore.indexOf(e);
                        this.carRepairsStore[i2] = this.carRepairs[i];
                    }
                });
            }
        });
    }
    /**
      * Método que carga el modal de los datos de una reparación
      * @param carRepair
      * @returns
      */
    saw(carRepair) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _car_repair_saw_car_repair_saw_page__WEBPACK_IMPORTED_MODULE_4__.CarRepairSawPage,
                //hoja de estilos
                //pasar datos al modal
                componentProps: {
                    'carRepair': carRepair
                }
            });
            return yield modal.present();
        });
    }
    /**
     * Método que borra una reparación de la base de datos
     * @param carRepair reparación que se quiera eliminar
     */
    delete(carRepair) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.presentLoading();
                const result = yield this.cS.delete(carRepair); //borra la reparación y guarda si se ha borrado
                let i = this.carRepairs.indexOf(carRepair, 0); //se comprueba si la reparación esta en la lista
                if (result) {
                    if (i > -1) {
                        this.carRepairs.splice(i, 1); //borra la reparación de la lista
                    }
                    this.carRepairsStore.forEach((e) => {
                        if (e.id == carRepair.id) {
                            let i2 = this.carRepairsStore.indexOf(e);
                            this.carRepairsStore.splice(i2, 1);
                        }
                    });
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
    /**
     * Método que muestra una alerta cuando se quiere borrar una reparación
     * @param carRepair reparación que se quiere borrar
     */
    showDeleteMenu(carRepair) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
                        cssClass: 'secondary',
                        role: 'cancel',
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
     * Método que carga más reparaciones cuando se llega al final de la pantalla
     * @param $event
     */
    infiniteLoad($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let newCarRepairs = [];
            if (!this.infinite.disabled) {
                try {
                    newCarRepairs = yield this.cS.getAllPaged(this.nItems, this.carRepairs.length);
                    this.carRepairs = this.carRepairs.concat(newCarRepairs);
                    this.carRepairsStore = this.carRepairsStore.concat(newCarRepairs);
                    if (newCarRepairs.length < 30) {
                        this.infinite.disabled = true;
                        this.oldInifinte = true;
                    }
                }
                catch (error) {
                }
            }
            this.infinite.complete();
        });
    }
    /**
     * Método que te redirige a la página de crear
     */
    goCreatePage() {
        this.routes.navigateByUrl('tab-administrator/car-repair/create');
    }
    /**
     * Método que redirige a la página de actualizar reparaciones
     */
    goUpdatePage(id) {
        this.routes.navigateByUrl('tab-administrator/car-repair/update/' + id);
    }
    /**
     * Método que redirige a la página de ver
     */
    goSawPage(id) {
        this.routes.navigateByUrl('tab-administrator/car-repair/saw/' + id);
    }
    //Metodo que muestra el loading
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.miLoading = yield this.loading.create({
                message: ''
            });
            yield this.miLoading.present();
        });
    }
    //Método que muestra un toast
    presentToast(msg, clr, icn) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const miToast = yield this.toast.create({
                message: msg,
                duration: 2000,
                color: clr,
                icon: icn
            });
            miToast.present();
        });
    }
    /**
     * Método que se activa cuando se escribe algo en la barra de búsqueda
     * Para buscar reparaciones por matrícula, dueño del coche, operación
     * y nombre de la agencia
     * @param event
     */
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
                    this.carRepairs = [];
                    let lenght = this.searchStr.length;
                    if (lenght > 0) {
                        //consultar y cambiar lista
                        yield this.presentLoading();
                        //operation
                        list = yield this.cS.getByOperationFilter(this.searchStr);
                        list.forEach((e) => {
                            let result = true;
                            resultFilter.forEach((x) => {
                                if (x.id == e.id)
                                    result = false;
                            });
                            if (result)
                                resultFilter.push(e);
                        });
                        //car_plate
                        list = yield this.cS.getByCarPlate(this.searchStr, 9999, 0);
                        list.forEach((e) => {
                            let result = true;
                            resultFilter.forEach((x) => {
                                if (x.id == e.id)
                                    result = false;
                            });
                            if (result)
                                resultFilter.push(e);
                        });
                        //client_name
                        list = yield this.cS.getByClientName(this.searchStr, 9999, 0);
                        list.forEach((e) => {
                            let result = true;
                            resultFilter.forEach((x) => {
                                if (x.id == e.id)
                                    result = false;
                            });
                            if (result)
                                resultFilter.push(e);
                        });
                        //agency_info
                        list = yield this.cS.getByAgencyInfoFilter(this.searchStr);
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
                                if (e.repaired)
                                    listS.push(e);
                            });
                            this.carRepairs = listS;
                        }
                        else if (selectO == "false") {
                            resultFilter.forEach((e) => {
                                if (!e.repaired)
                                    listS.push(e);
                            });
                            this.carRepairs = listS;
                        }
                        else {
                            this.carRepairs = resultFilter;
                        }
                        this.infinite.disabled = false;
                        yield this.miLoading.dismiss();
                    }
                    else if (lenght < 1) {
                        yield this.presentLoading();
                        if (selectO == "true") {
                            resultFilter = yield this.cS.getByStatedPaged(true, 9999, 0);
                            resultFilter.forEach((e) => {
                                if (e.repaired)
                                    listS.push(e);
                            });
                            this.carRepairs = listS;
                            this.infinite.disabled = true;
                        }
                        else if (selectO == "false") {
                            resultFilter = yield this.cS.getByStatedPaged(false, 9999, 0);
                            resultFilter.forEach((e) => {
                                if (!e.repaired)
                                    listS.push(e);
                            });
                            this.carRepairs = listS;
                            this.infinite.disabled = true;
                        }
                        else {
                            this.carRepairs = this.carRepairsStore;
                            this.infinite.disabled = this.oldInifinte;
                        }
                        yield this.miLoading.dismiss();
                    }
                }
                else
                    this.presentToast("La búsqueda no puede comenzar por espacios en blanco.", "danger", "ban");
            }
            catch (error) {
            }
        });
    }
    /**
     * Método que reinicia la lista de reparaciones
     * @param event
     */
    reset(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.n = 0;
            this.infinite.disabled = false;
            this.carRepairs = [];
            this.loadCarRepair(event);
        });
    }
    /**
     * Método que guarda las reparaciones en un almacen
     */
    storageCarRepairs(list) {
        this.carRepairsStore = this.carRepairsStore.concat(list);
    }
    /**
     * Método que permite al usuario cerrar la sesión
     */
    logout() {
        this.authS.logout();
    }
};
CarRepairListPage.ctorParameters = () => [
    { type: src_app_services_car_repair_service__WEBPACK_IMPORTED_MODULE_3__.CarRepairService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
CarRepairListPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInfiniteScroll,] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSelect,] }],
    sb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSearchbar,] }]
};
CarRepairListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-car-repair-list',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_car_repair_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_car_repair_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CarRepairListPage);



/***/ }),

/***/ 21434:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/carRepair/car-repair-list/car-repair-list.page.html ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Lista de Reparaciones</ion-title>\r\n\r\n    <ion-buttons style=\"margin-right: 1%;cursor:pointer;\" title=\"Cerrar Sesión\" slot=\"end\" (click)=\"logout()\">\r\n      <ion-icon class=\"icon-logout\" slot=\"end\" name=\"log-out-outline\"  style=\"zoom:1.7;pointer-events: none;\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-row >\r\n      <ion-col sizeSm=\"12\" size=\"9\" sizeMd=\"12\" sizeLg=\"9\">\r\n        <ion-searchbar  placeholder=\"Encuentra la reparación que estás buscando...\" inputmode=\"text\" type=\"text\"\r\n        debounce=\"1000\" (ionChange)=\"onSearchChange()\" showCancelButton=\"always\"></ion-searchbar>\r\n\r\n      </ion-col>\r\n\r\n      <ion-col sizeMd=\"3\" sizeSm=\"3\" sizeLg=\"3\" class=\"selector\">\r\n\r\n          <ion-item style=\"height: 85%; margin-top:1.1%\">\r\n            <ion-label>Estado del vehículo</ion-label>\r\n            <ion-select (ionChange)=\"onSearchChange()\" interface=\"popover\" multiple=\"false\">\r\n              <ion-select-option value=\"true\">Reparado</ion-select-option>\r\n              <ion-select-option value=\"false\">Sin reparar</ion-select-option>\r\n              <ion-select-option value=\"all\">Todos</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row class=\"header-row\">\r\n      <ion-col size=\"1\" style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.0\" style=\"border: 0px !important;\">\r\n        <ion-text>Operación</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col  size=\"2.0\" style=\"border: 0px !important;\">\r\n        <ion-text>Matrícula</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.0\" style=\"border: 0px !important;\">\r\n        <ion-text>Agencia</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.0\" style=\"border: 0px !important;\">\r\n        <ion-text>Cliente</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.0\" style=\"border: 0px !important;\">\r\n        <ion-text>Reparado</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"1\" style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" style=\"background-color: white;\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"reset($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div class=\"body\">\r\n\r\n\r\n  <ion-grid class=\"ion-text-center\">\r\n\r\n    <ion-row style=\"border-left: 1px solid #4b4b4d;border-right: 1px solid #4b4b4d;\" let *ngFor=\"let carRepair of this.carRepairs; let i=index\" [ngClass]=\"(i % 2 == 0) ? 'normal' : 'colored'\" >\r\n\r\n      <ion-col size=\"1\">\r\n        <ion-text class=\"icon-div-container\" (click)=\"edit(carRepair)\" title=\"Editar\">\r\n          <ion-icon name=\"pencil\" style=\"color:#22388c;pointer-events: none;\"></ion-icon>\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n\r\n      <ion-col size=\"2\" (click)=\"saw(carRepair)\">\r\n        <ion-text class=\"pointerText\">\r\n            {{carRepair.operation}}\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\"(click)=\"saw(carRepair)\">\r\n        <ion-text class=\"pointerText\">\r\n            {{carRepair.carPlate}}\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n        <ion-col size=\"2\"(click)=\"saw(carRepair)\">\r\n          <ion-text class=\"pointerText\">\r\n            {{carRepair.myAgency.myInsuranceCompany.cia_Name + \" - \"+carRepair.myAgency.location}}\r\n          </ion-text>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"2\"(click)=\"saw(carRepair)\">\r\n          <ion-text class=\"pointerText\">\r\n            {{carRepair.clienteName}}\r\n          </ion-text>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"2\"(click)=\"saw(carRepair)\">\r\n          <div title=\"Reparado\">\r\n            <ion-icon *ngIf=\"carRepair.repaired\" name=\"checkmark-circle\" color=\"success\" style=\"pointer-events: none;\"></ion-icon>\r\n          </div>\r\n\r\n          <div title=\"Sin reparar\">\r\n            <ion-icon *ngIf=\"!carRepair.repaired\" name=\"close-circle\" color=\"danger\" style=\"pointer-events: none;\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"1\">\r\n          <ion-text (click)=\"showDeleteMenu(carRepair)\" class=\"icon-div-container\" title=\"Eliminar\">\r\n            <ion-icon name=\"trash\" color=\"danger\" style=\"pointer-events: none;\"></ion-icon>\r\n          </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infiniteLoad($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 45556:
/*!***********************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-list/car-repair-list.page.scss ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "ion-col {\n  border-bottom: 1px solid #4b4b4d;\n}\nion-col ion-text {\n  color: #4b4b4d !important;\n}\n.header-row {\n  border-radius: 0%;\n  border: 0px;\n}\n.header-row ion-col {\n  text-align: center;\n}\n.header-row ion-col ion-text {\n  color: #fff !important;\n  text-align: center;\n}\n.normal {\n  background-color: #fff;\n  font-size: 1.1rem;\n}\n.colored {\n  background-color: #cdcccc;\n  font-size: 1.1rem;\n}\n.selector {\n  float: right !important;\n}\n.body {\n  /*  background: -webkit-linear-gradient(left, #22388c, #9ba2cc);\n    background: linear-gradient(to right, #22388c, #9ba2cc);*/\n  background-color: white;\n  font-family: \"Roboto\", sans-serif;\n  color: #4b4b4d;\n}\n.pointerText {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1yZXBhaXItbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQ0FBQTtBQUFKO0FBQ0k7RUFDRSx5QkFBQTtBQUNOO0FBRUE7RUFFSSxpQkFBQTtFQUNBLFdBQUE7QUFBSjtBQUNJO0VBQ0Usa0JBQUE7QUFDTjtBQUFJO0VBQ0Usc0JBQUE7RUFFQSxrQkFBQTtBQUNOO0FBRUU7RUFFRSxzQkFBQTtFQUNBLGlCQUFBO0FBQUo7QUFHRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUdFO0VBQ0UsdUJBQUE7QUFBSjtBQUdFO0VBQ0E7NkRBQUE7RUFFRSx1QkFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtBQUFKO0FBR0U7RUFDRSxlQUFBO0FBQUoiLCJmaWxlIjoiY2FyLXJlcGFpci1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGlvbi1jb2wge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0YjRiNGQ7XHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgY29sb3I6IzRiNGI0ZCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuLmhlYWRlci1yb3cge1xyXG4gICAgLy9iYWNrZ3JvdW5kOiAjOWI5YjliO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGlvbi1jb2x7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGlvbi10ZXh0e1xyXG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAvL2ZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9fVxyXG4gIH1cclxuICAubm9ybWFse1xyXG4gICAgLy9iYWNrZ3JvdW5kOiAjMjIzODhjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbG9yZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA1LCAyMDQsIDIwNCk7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcblxyXG4gIC5zZWxlY3RvcntcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJvZHl7XHJcbiAgLyogIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMyMjM4OGMsICM5YmEyY2MpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjIzODhjLCAjOWJhMmNjKTsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzRiNGI0ZDtcclxuICB9XHJcblxyXG4gIC5wb2ludGVyVGV4dHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_carRepair_car-repair-list_car-repair-list_module_ts.js.map