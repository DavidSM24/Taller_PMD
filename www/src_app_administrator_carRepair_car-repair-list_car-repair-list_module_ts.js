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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _car_repair_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-repair-list.page */ 9519);




const routes = [
    {
        path: '',
        component: _car_repair_list_page__WEBPACK_IMPORTED_MODULE_0__.CarRepairListPage,
        children: [
            {
                path: 'car-repair-saw',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_carRepair_car-repair-saw_car-repair-saw_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../car-repair-saw/car-repair-saw.module */ 6589)).then(m => m.CarRepairSawPageModule)
            },
            {
                path: 'car-repair-update',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_carRepair_car-repair-update_car-repair-update_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../car-repair-update/car-repair-update.module */ 2529)).then(m => m.CarRepairUpdatePageModule)
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

/***/ 2225:
/*!***********************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-list/car-repair-list.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairListPageModule": () => (/* binding */ CarRepairListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _car_repair_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-repair-list-routing.module */ 6066);
/* harmony import */ var _car_repair_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-repair-list.page */ 9519);







let CarRepairListPageModule = class CarRepairListPageModule {
};
CarRepairListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _car_repair_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarRepairListPageRoutingModule
        ],
        declarations: [_car_repair_list_page__WEBPACK_IMPORTED_MODULE_1__.CarRepairListPage]
    })
], CarRepairListPageModule);



/***/ }),

/***/ 9519:
/*!*********************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-list/car-repair-list.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairListPage": () => (/* binding */ CarRepairListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_car_repair_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./car-repair-list.page.html */ 1434);
/* harmony import */ var _car_repair_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-repair-list.page.scss */ 5556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_services_car_repair_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/car-repair.service */ 7928);







let CarRepairListPage = class CarRepairListPage {
    constructor(cS, toast, alertCtrl, modalCtrl, loading, routes, pt //para saber el dispositivo
    ) {
        this.cS = cS;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.routes = routes;
        this.pt = pt;
        this.n = 0;
        this.carRepairs = [];
        this.searchStr = "";
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let newCarRepair = [];
            if (this.carRepairs.length == 0) {
                if (!event) {
                    this.presentLoading();
                }
                this.infinite.disabled = false;
                try {
                    newCarRepair = yield this.cS.getAllPaged(this.nItems, 0);
                    this.carRepairs = this.carRepairs.concat(newCarRepair);
                    if (newCarRepair.length < this.nItems) {
                        this.infinite.disabled = true;
                    }
                }
                catch (error) {
                    console.log(error);
                    this.presentToast("Error de carga", "danger");
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    /**
     * Método que borra una reparación de la base de datos
     * @param carRepair reparación que se quiera eliminar
     */
    delete(carRepair) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.presentLoading();
                const result = yield this.cS.delete(carRepair); //borra la reparación y guarda si se ha borrado
                let i = this.carRepairs.indexOf(carRepair, 0); //se comprueba si la reparación esta en la lista
                if (result) {
                    if (i > -1) {
                        this.carRepairs.splice(i, 1); //borra la reparación de la lista
                    }
                    this.presentToast("La reparación ha sido eliminada correctamente.", "success");
                }
                else {
                    this.presentToast("Error al borrar la reparación", "danger");
                }
            }
            catch (error) {
                this.presentToast("Nose ha podido borrar la reparación, intentelo más tarde", "danger");
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
                console.log(error);
            }
        });
    }
    /**
     * Método que carga más reparaciones cuando se llega al final de la pantalla
     * @param $event
     */
    infiniteLoad($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let newCarRepairs = [];
            if (!this.infinite.disabled) {
                try {
                    newCarRepairs = yield this.cS.getAllPaged(this.nItems, this.carRepairs.length);
                    this.carRepairs = this.carRepairs.concat(newCarRepairs);
                    if (newCarRepairs.length < 30) {
                        this.infinite.disabled = true;
                    }
                }
                catch (error) {
                    console.log(error);
                }
            }
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
    goUpdatePage() {
        this.routes.navigateByUrl('tab-administrator/car-repair/update');
    }
    /**
     * Método que redirige a la página de ver
     */
    goSawPage() {
        this.routes.navigateByUrl('tab-administrator/car-repair/saw');
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
    onSearchChange(event) {
        this.searchStr = event.detail.value;
    }
    reset(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.n = 0;
            this.infinite.disabled = false;
            this.carRepairs = [];
            this.loadCarRepair(event);
        });
    }
};
CarRepairListPage.ctorParameters = () => [
    { type: src_app_services_car_repair_service__WEBPACK_IMPORTED_MODULE_2__.CarRepairService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform }
];
CarRepairListPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInfiniteScroll,] }]
};
CarRepairListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-car-repair-list',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_car_repair_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_car_repair_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CarRepairListPage);



/***/ }),

/***/ 7928:
/*!************************************************!*\
  !*** ./src/app/services/car-repair.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairService": () => (/* binding */ CarRepairService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);




let CarRepairService = class CarRepairService {
    constructor(http) {
        this.http = http;
        this.endpoint = "/carRepairs";
        this.URLDatabase = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.herokuConfig.url;
    }
    /**
     * Método que carga una lista de reparaciones de coches en función de la petición
     * @param endpoint
     * @returns
     */
    getListData(endpoint) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let carRepairs = [];
            return new Promise(resolve => {
                this.http.get(endpoint).subscribe((data) => {
                    if (data != null && data.length > 0) { //comprueba que la petición se ha traido correctamente
                        for (let carRepair of data) {
                            const tmp = {
                                id: carRepair.id,
                                operation: carRepair.operation,
                                carPlate: carRepair.carPlate,
                                model: carRepair.model,
                                brandCar: carRepair.brandCar,
                                clientName: carRepair.clientName,
                                dateOrder: carRepair.Date,
                                nor: carRepair.nor,
                                amount: carRepair.amount,
                                dateRepair: carRepair.dateRepair,
                                asigPoints: carRepair.asigPoints,
                                repaired: carRepair.repaired,
                                myAgency: carRepair.myAgency
                            };
                            carRepairs.push(tmp); //se añade a la lista
                        }
                    }
                    resolve(carRepairs);
                }, error => {
                    console.log(error);
                    //mandar una alerta
                });
            });
        });
    }
    /**
     * Metodo que devuelve una promesa de todas las reparaciones de la base de datos
     * @returns Promise<CarRepair[]> con todas las reparaciones de la base de datos
     */
    getAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint);
        });
    }
    /**
     * Método que devuevle las reparaciones de la base de datos de forma paginada.
     * Devuelve una lista con el número de reparaciones especificadas
     * a partir del último elemento que se le indique
     * @param limit número de reparaciones que se quiera obtener
     * @param offset a partir de que reparación se empieza a contar, con ese incliudo
     * @returns Promise<CarRepair[]>
     */
    getAllPaged(limit, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/elements/" + limit + "/page/" + offset);
        });
    }
    /**
     * Método que devuelve una reparación con la id que se le ha indicado
     * @param id id de la reparación que se quiera obtener
     * @returns Promise<CarRepair> con la id introducida
     */
    getById(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let carRepair = null;
            return new Promise(resolve => {
                this.http.get(this.URLDatabase + this.endpoint + "/id/" + id).subscribe((a) => {
                    if (a.id) { //comprueba que la reparación que se ha traido tiene id
                        const tmp = {
                            id: a.id,
                            operation: a.operation,
                            carPlate: a.carPlate,
                            model: a.model,
                            brandCar: a.brandCar,
                            clientName: a.clientName,
                            dateOrder: a.dateOrder,
                            nor: a.nor,
                            amount: a.amount,
                            dateRepair: a.dateRepair,
                            asigPoints: a.asigPoints,
                            repaired: a.repaired,
                            myAgency: a.myAgency
                        };
                        carRepair = tmp;
                    }
                    resolve(carRepair);
                }, error => {
                    console.log(error);
                    //introducir una alerta
                    resolve(carRepair);
                });
            });
        });
    }
    //ByOperationpaged
    /**
     * Método que devuelve una lista de reparaciones en función de la operación
     * @param operation Número de la operación de la reparación
     * @param element Número de reparaciones que se quiera obtener
     * @param offset a partir de que reparación se va a devolver
     * @returns Promise<CarRepair[]>
     */
    getByOperationPaged(operation, element, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/operation/" + operation + "/elements/" + element + "/page/" + offset);
        });
    }
    //ByCarPLate
    /**
     * Método que devuelve una lista de reparaciones en función de la matrícula
     * @param carPlate Matrícula del coche que se quiere buscar
     * @param element Número de reparaciones que se quiera obtener
     * @param offset A partir de que reparación se va a devolver
     * @returns Promise<CarRepair[]>
     */
    gerByCarPlate(carPlate, element, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/carPlate/" + carPlate + "/elements/" + element + "/page/" + offset);
        });
    }
    //ByClientName
    /**
     * Método que devuelve una lista de reparaciones en función del dueño del coche
     * @param clientName Nombre del cliente del que se quiera obtener las reparaciones
     * @param element Número de reparaciones que se quiera obtener
     * @param offset A oartir de que reparación se va a devolver
     * @returns Promise<CarRepair[]>
     */
    getByClientName(clientName, element, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/clientName/" + clientName + "/elements/" + element + "/page/" + offset);
        });
    }
    //ByDateOrderPaged
    /**
     * Método que devuelve una lista de reparaciones que se encuentre entre dos fechas
     * @param ini Fecha mas antigua
     * @param end Fecha mas moderna
     * @param element Número de reparaciones que se quiera obtener
     * @param offset A partir de que elemento se quiere empezar a contar
     * @returns
     */
    getByDateOrderPaged(ini, end, element, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/ini/" + ini + "/end/" + end + "/elements/" + element + "/page/" + offset);
        });
    }
    //ByPointsPaged
    /**
     * Método que devuelve una lista de reparaciones que tengan los puntos entre un rango determinado
     * @param min número mínimo de puntos que se quiera buscar
     * @param max número máximo de puntos que se quiera buscar
     * @param element Número de reparaciones que se quiera obtener
     * @param offset A partir de que elemento se quiere empezar a contar
     * @returns Promise<CarRepair[]>
     */
    getByPointsPaged(min, max, element, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/min/" + min + "/max/" + max + "/elements/" + element + "/page/" + offset);
        });
    }
    //ByStatedPaged
    /**
     * Método que devuelve una lista con las reparaciones en función de si están o no terminadas
     * @param repaired booleano que indica si se quiere buscar las reparaciones terminadas o no
     * @param element Número de reparaciones que se quiera obtener
     * @param offset A partir de que elemento se quiere empezar a contar
     * @returns Promise<CarRepair[]>
     */
    getByStatedPaged(repaired, element, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/repaired/" + repaired + "/elements/" + element + "/page/" + offset);
        });
    }
    //CreateOrUpdate
    /**
     * Método que guarda o actualiza una reparacion en la base de datos
     * @param carRepair Reparación que se quiera guardar o actualizar
     * @returns Promise<CarRepair>
     */
    createOrUpdate(carRepair) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (carRepair != null) {
                if (carRepair.operation != null
                    && carRepair.carPlate != null
                    && carRepair.model != null
                    && carRepair.brandCar != null
                    && carRepair.clientName != null
                    && carRepair.dateOrder != null
                    && carRepair.nor != null
                    && carRepair.amount != null
                    && carRepair.dateRepair != null
                    && carRepair.asigPoints != null
                    && carRepair.repaired != null
                    && carRepair.myAgency != null) {
                    const body = carRepair;
                    return new Promise(resolve => {
                        this.http.post(this.URLDatabase + this.endpoint, body).subscribe((data) => {
                            carRepair = data;
                            resolve(carRepair);
                        }, error => {
                            resolve(carRepair);
                            //meter una alerta que indique que se ha producido un error
                        });
                    });
                }
                else {
                    //meter una alerta que señale que algún campo es nulo
                }
            }
            else {
                //meter una alerta que señale que la reparación es nula
            }
        });
    }
    //delete
    /**
     * Método que borra una reparación de la base de datos
     * @param carRepair reparación que se quiera borrar
     * @returns Promise<boolean> boleano que indica si la reparación se ha borrado o no
     */
    delete(carRepair) {
        return new Promise(resolve => {
            this.http.delete(this.URLDatabase + this.endpoint, { body: carRepair }).subscribe(() => {
                resolve(true);
            }, error => {
                resolve(false);
                //meter una alerta que señale que no se ha borrado la reparación
            });
        });
    }
};
CarRepairService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
CarRepairService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CarRepairService);



/***/ }),

/***/ 1434:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/carRepair/car-repair-list/car-repair-list.page.html ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>CarRepairList</ion-title>\r\n\r\n    <ion-buttons style=\"margin-right: 1%;\" slot=\"end\">\r\n      <ion-icon class=\"icon-logout\"  slot=\"end\" name=\"add-circle\" style=\"zoom:1.5\" (click)=\"goCreatePage()\"></ion-icon>\r\n      <ion-icon class=\"icon-logout\" slot=\"end\" name=\"person\" style=\"zoom:1.5\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n    \r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-searchbar placeholder=\"Encuentra la agencia que estás buscando...\" inputmode=\"text\" type=\"text\" (ionChange)=\"onSearchChange($event)\" showCancelButton=\"always\"></ion-searchbar>\r\n\r\n    <ion-row class=\"header-row\">\r\n      <ion-col size=\"1\" style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Operación</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col  size=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Matrícula</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Agencia</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Reparado</ion-text>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"1\" style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" style=\"background-color: white;\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"reset($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div class=\"body\">\r\n  \r\n\r\n  <ion-grid class=\"ion-text-center\">\r\n\r\n    <ion-row let *ngFor=\"let carRepair of this.carRepairs\" class=\"row\" >\r\n      \r\n      <ion-col size=\"1\">\r\n        <ion-text>\r\n          <ion-icon name=\"pencil\" style=\"color:#22388c;cursor:pointer\" (click)=\"goUpdatePage()\"></ion-icon>\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n      \r\n      <ion-col size=\"2.5\" (click)=\"goSawPage()\">\r\n        <ion-text class=\"pointerText\">\r\n            {{carRepair.operation}}\r\n        </ion-text>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"2.5\"(click)=\"goSawPage()\">\r\n        <ion-text class=\"pointerText\">\r\n            {{carRepair.carPlate}}\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n        <ion-col size=\"2.5\"(click)=\"goSawPage()\">\r\n          <ion-text class=\"pointerText\">\r\n            {{carRepair.myAgency.myUser.name}}\r\n          </ion-text>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"2.5\"(click)=\"goSawPage()\">\r\n          <ion-text class=\"pointerText\">\r\n            {{carRepair.repaired}} \r\n          </ion-text>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"1\">\r\n          <ion-text>\r\n            <ion-icon name=\"trash\" color=\"danger\" style=\"cursor: pointer;\" (click)=\"showDeleteMenu(carRepair)\"></ion-icon>\r\n          </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infiniteLoad($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 5556:
/*!***********************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-list/car-repair-list.page.scss ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "ion-col {\n  border-bottom: 1px solid #4b4b4d;\n}\nion-col ion-text {\n  color: #4b4b4d !important;\n}\n.header-row {\n  border-radius: 0%;\n  border: 0px;\n}\n.header-row ion-col {\n  text-align: center;\n}\n.header-row ion-col ion-text {\n  color: #fff !important;\n  font-size: 1.2rem;\n  text-align: center;\n}\n.row {\n  color: #fff;\n  font-size: 1.1rem;\n}\n.body {\n  /*  background: -webkit-linear-gradient(left, #22388c, #9ba2cc);\n    background: linear-gradient(to right, #22388c, #9ba2cc);*/\n  background-color: white;\n  font-family: \"Roboto\", sans-serif;\n  color: #4b4b4d;\n}\n.pointerText {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1yZXBhaXItbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQ0FBQTtBQUFKO0FBQ0k7RUFDRSx5QkFBQTtBQUNOO0FBRUE7RUFFSSxpQkFBQTtFQUNBLFdBQUE7QUFBSjtBQUNJO0VBQ0Usa0JBQUE7QUFDTjtBQUFJO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRU47QUFDRTtFQUVFLFdBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRUU7RUFDQTs2REFBQTtFQUVFLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLGVBQUE7QUFDSiIsImZpbGUiOiJjYXItcmVwYWlyLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW9uLWNvbCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRiNGI0ZDtcclxuICAgIGlvbi10ZXh0e1xyXG4gICAgICBjb2xvcjojNGI0YjRkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4uaGVhZGVyLXJvdyB7XHJcbiAgICAvL2JhY2tncm91bmQ6ICM5YjliOWI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgaW9uLWNvbHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9fVxyXG4gIH1cclxuICAucm93IHtcclxuICAgIC8vYmFja2dyb3VuZDogIzIyMzg4YztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgfVxyXG5cclxuICAuYm9keXtcclxuICAvKiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzIyMzg4YywgIzliYTJjYyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyMjM4OGMsICM5YmEyY2MpOyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjNGI0YjRkO1xyXG4gIH1cclxuXHJcbiAgLnBvaW50ZXJUZXh0e1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_carRepair_car-repair-list_car-repair-list_module_ts.js.map