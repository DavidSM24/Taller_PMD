"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_administrator_carRepair_car-repair-update_car-repair-update_page_ts"],{

/***/ 3022:
/*!*************************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-update/car-repair-update.page.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairUpdatePage": () => (/* binding */ CarRepairUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_car_repair_update_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./car-repair-update.page.html */ 4051);
/* harmony import */ var _car_repair_update_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-repair-update.page.scss */ 4584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_services_car_repair_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/car-repair.service */ 7928);








let CarRepairUpdatePage = class CarRepairUpdatePage {
    constructor(modalController, carRepairService, formBuilder, activateRoute) {
        this.modalController = modalController;
        this.carRepairService = carRepairService;
        this.formBuilder = formBuilder;
        this.activateRoute = activateRoute;
        this.validator = this.formBuilder.group({
            operation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            carPlate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            model: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            brandCar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            clientName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            nor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            amount: [''],
            asigPoints: [''],
            myAgency: [''],
            dateOrder: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            dateRepair: [''],
            repaired: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
    }
    ngOnInit() {
        this.formCarRepair = this.formBuilder.group({
            operation: [this.carRepair.operation, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            carPlate: [this.carRepair.carPlate, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            model: [this.carRepair.model, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            brandCar: [this.carRepair.brandCar, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            clientName: [this.carRepair.clientName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            nor: [this.carRepair.nor, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            amount: [this.carRepair.amount],
            asigPoints: [this.carRepair.asigPoints],
            myAgency: [this.carRepair.myAgency.myUser.name],
            dateOrder: [this.carRepair.dateOrder, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            dateRepair: [this.carRepair.dateRepair],
            repaired: [this.carRepair.repaired, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.oldCarRepair = {
                id: this.carRepair.id,
                operation: this.carRepair.operation,
                carPlate: this.carRepair.carPlate,
                model: this.carRepair.model,
                brandCar: this.carRepair.brandCar,
                clientName: this.carRepair.clientName,
                dateOrder: this.carRepair.dateOrder,
                nor: this.carRepair.nor,
                amount: this.carRepair.amount,
                dateRepair: this.carRepair.dateRepair,
                asigPoints: this.carRepair.asigPoints,
                repaired: this.carRepair.repaired,
                myAgency: this.carRepair.myAgency
            };
        });
    }
    setCarRepair() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        this.validator = this.formBuilder.group({
            operation: [(_a = this.carRepair) === null || _a === void 0 ? void 0 : _a.operation, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            carPlate: [(_b = this.carRepair) === null || _b === void 0 ? void 0 : _b.carPlate, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            model: [(_c = this.carRepair) === null || _c === void 0 ? void 0 : _c.model, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            brandCar: [(_d = this.carRepair) === null || _d === void 0 ? void 0 : _d.brandCar, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            clientName: [(_e = this.carRepair) === null || _e === void 0 ? void 0 : _e.clientName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            nor: [(_f = this.carRepair) === null || _f === void 0 ? void 0 : _f.nor, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            amount: [(_g = this.carRepair) === null || _g === void 0 ? void 0 : _g.amount],
            asigPoints: [(_h = this.carRepair) === null || _h === void 0 ? void 0 : _h.asigPoints],
            myAgency: [(_j = this.carRepair) === null || _j === void 0 ? void 0 : _j.myAgency.myUser.name],
            dateOrder: [(_k = this.carRepair) === null || _k === void 0 ? void 0 : _k.dateOrder, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            dateRepair: [(_l = this.carRepair) === null || _l === void 0 ? void 0 : _l.dateRepair],
            repaired: [(_m = this.carRepair) === null || _m === void 0 ? void 0 : _m.repaired, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
    }
    /**
     * Método que guarda la nota una vez editada
     */
    editCarRepair() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.newCarRepair = {
                id: this.carRepair.id,
                operation: this.formCarRepair.get("operation").value,
                carPlate: this.carRepair.carPlate,
                model: this.carRepair.model,
                brandCar: this.carRepair.brandCar,
                clientName: this.formCarRepair.get("clientName").value,
                dateOrder: this.carRepair.dateOrder,
                nor: this.formCarRepair.get("nor").value,
                amount: this.formCarRepair.get("amount").value,
                dateRepair: this.formCarRepair.get("dateRepair").value,
                asigPoints: this.formCarRepair.get("asigPoints").value,
                repaired: this.formCarRepair.get("repaired").value,
                myAgency: this.carRepair.myAgency
            };
            try {
                console.log("Nuevo" + this.newCarRepair.operation);
                this.carRepairService.createOrUpdate(this.newCarRepair);
                //añadir un toast
                console.log(this.carRepairService.getById(this.newCarRepair.id));
                this.closeModal();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    closeModal() {
        this.modalController.dismiss();
    }
};
CarRepairUpdatePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_services_car_repair_service__WEBPACK_IMPORTED_MODULE_2__.CarRepairService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
CarRepairUpdatePage.propDecorators = {
    carRepair: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
CarRepairUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-car-repair-update',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_car_repair_update_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_car_repair_update_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CarRepairUpdatePage);



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
                if (carRepair.carPlate != null
                //&&carRepair.model!=null
                //&&carRepair.brandCar!=null
                // &&carRepair.clientName!=null
                //&&carRepair.dateOrder!=null        
                //&&carRepair.repaired!=null
                //&&carRepair.myAgency!=null
                ) {
                    const body = carRepair;
                    console.log("Entra?" + body);
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

/***/ 4051:
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/carRepair/car-repair-update/car-repair-update.page.html ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>CarRepairUpdate</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"body\">\r\n    <form [formGroup]=\"formCarRepair\" class=\"ion-padding\">\r\n      <div class=\"formulario\">\r\n      <ion-grid>\r\n        \r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n            <ion-label>Operación</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10\" sizeLg=\"10\">\r\n            <ion-input type=\"number\" min=\"0\" max=\"99999\" inputmode=\"numeric\" class=\"customInput\" formControlName=\"operation\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        \r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n            <ion-label>Matrícula</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"10\">\r\n            <ion-input class=\"customInput\" Disabled type=\"text\" formControlName=\"carPlate\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n            <ion-label>Modelo</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"5\" sizeLg=\"10\">\r\n            <ion-input class=\"customInput\" Disabled type=\"text\" formControlName=\"model\"></ion-input>\r\n          </ion-col>          \r\n        </ion-row>\r\n        \r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n            <ion-label>Marca</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"5\" sizeLg=\"10\">\r\n            <ion-input class=\"customInput\" Disabled type=\"text\" formControlName=\"brandCar\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        \r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n            <ion-label>Cliente</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10\" sizeLg=\"10\">\r\n            <ion-input class=\"customInput\"  type=\"text\" formControlName=\"clientName\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n            <ion-label>NOR</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10\" sizeLg=\"10\">\r\n            <ion-input class=\"customInput\" type=\"number\" formControlName=\"nor\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n            <ion-label>Coste</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10\" sizeLg=\"10\">\r\n            <ion-input class=\"customInput\" type=\"number\" formControlName=\"amount\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n            <ion-label>Puntos</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10\" sizeLg=\"10\">\r\n            <ion-input class=\"customInput\" type=\"number\" formControlName=\"asigPoints\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n            <ion-label>Agencia</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10\" sizeLg=\"10\">\r\n            <ion-input class=\"customInput\" Disabled type=\"text\" formControlName=\"myAgency\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col   sizeSm=\"7\" sizeLg=\"2\">\r\n            <ion-label>Fecha de alta</ion-label>\r\n          </ion-col>\r\n          <ion-col  sizeSm=\"7\" sizeLg=\"4\" >\r\n            <ion-input class=\"customInput\"  type=\"date\" formControlName=\"dateOrder\"></ion-input>\r\n          </ion-col>\r\n         \r\n         \r\n        </ion-row> \r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"7\" sizeLg=\"2\">\r\n            <ion-label>Fecha de reparación</ion-label>\r\n          </ion-col>\r\n          <ion-col  sizeSm=\"7\" sizeLg=\"4\">\r\n            <ion-input class=\"customInput\" type=\"date\" formControlName=\"dateRepair\"></ion-input>\r\n          </ion-col>\r\n        </ion-row> \r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col  sizeSm=\"7\" sizeLg=\"2\">\r\n            Reparado\r\n          </ion-col>\r\n          <ion-col sizeSm=\"7\" sizeLg=\"4\">\r\n            <ion-item  lines=\"none\">\r\n              No<ion-toggle formControlName=\"repaired\"></ion-toggle>Si\r\n           </ion-item>\r\n          </ion-col>\r\n        </ion-row> \r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" (click)=\"closeModal()\" class=\"button\">\r\n              Cancelar\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" (click)=\"editCarRepair()\" class=\"button\">\r\n              Guardar\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    </form>  \r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 4584:
/*!***************************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-update/car-repair-update.page.scss ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n\n.formulario {\n  margin-top: 1.5%;\n  padding: 2%;\n  border-top: 2px double gray;\n  border: 1px solid;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n  background-color: white;\n  margin-bottom: 4%;\n}\n\n.button {\n  --background: #22388c;\n}\n\n.customInput {\n  border: 1px solid gray;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n}\n\n.secundaryInput {\n  margin-left: 5%;\n}\n\n.date {\n  margin-left: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1yZXBhaXItdXBkYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ1Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBQ1I7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtBQUdKIiwiZmlsZSI6ImNhci1yZXBhaXItdXBkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gICAgYmFja2dyb3VuZDogIzcxNzQ5OTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb3tcclxuICAgIG1hcmdpbi10b3A6IDEuNSU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGJvcmRlci10b3A6IDJweCBkb3VibGUgZ3JheTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBcInByaW1hcnlcIjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyMjM4OGM7XHJcbn1cclxuXHJcbi5jdXN0b21JbnB1dHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogXCJwcmltYXJ5XCI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMi41cmVtO1xyXG59XHJcbi5zZWN1bmRhcnlJbnB1dHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG4uZGF0ZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_administrator_carRepair_car-repair-update_car-repair-update_page_ts.js.map