"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_agency_service_ts-src_app_services_insurance-company_service_ts-src_-cd7bf6"],{

/***/ 9574:
/*!********************************************!*\
  !*** ./src/app/services/agency.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencyService": () => (/* binding */ AgencyService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);




let AgencyService = class AgencyService {
    constructor(http) {
        this.http = http;
        this.endpoint = "/agencies";
        this.URLDatabase = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.herokuConfig.url;
    }
    getListData(endpoint) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let agencies = [];
            return new Promise(resolve => {
                this.http.get(endpoint).subscribe((data) => {
                    if (data != null && data.length > 0) {
                        for (let a of data) {
                            const tmp = {
                                id: a.id,
                                zipCode: a.zipCode,
                                address: a.address,
                                location: a.location,
                                phoneNumber: a.phoneNumber,
                                amount: a.amount,
                                points: a.points,
                                pointsRedeemed: a.pointsRedeemed,
                                active: a.active,
                                myInsuranceCompany: a.myInsuranceCompany,
                                myCarRepairs: a.myCarRepairs,
                                myExchangesGifts: a.myExchangesGifts,
                                myUser: a.myUser
                            };
                            agencies.push(tmp);
                        }
                    }
                    console.log(data);
                    resolve(agencies);
                }, error => {
                    console.log(error);
                });
            });
        });
    }
    getAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint);
        });
    }
    getAllPaged(limit, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/element/" + limit + "/page/" + offset);
        });
    }
    getById(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let agency = null;
            return new Promise(resolve => {
                this.http.get(this.URLDatabase + this.endpoint + "/id/" + id).subscribe((a) => {
                    if (a.id) {
                        const tmp = {
                            id: a.id,
                            zipCode: a.zipCode,
                            address: a.address,
                            location: a.location,
                            phoneNumber: a.phoneNumber,
                            amount: a.amount,
                            points: a.points,
                            pointsRedeemed: a.pointsRedeemed,
                            active: a.active,
                            myInsuranceCompany: a.myInsuranceCompany,
                            myCarRepairs: a.mycarRepairs,
                            myExchangesGifts: a.myExchangeGifts,
                            myUser: a.myUser
                        };
                        agency = tmp;
                    }
                    console.log(agency);
                    resolve(agency);
                }, error => {
                    console.log(error);
                    console.log(agency);
                    resolve(agency);
                });
            });
        });
    }
    getByUserNamePaged(username, limit, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/username/" + username + "/element/" + limit + "/page/" + offset);
        });
    }
    getByisActivePaged(active, limit, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/active/" + active + "/element/" + limit + "/page/" + offset);
        });
    }
    createOrUpdate(agency) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (agency == null
                || agency.address == null
                || agency.address == ""
                || agency.phoneNumber == null
                || agency.zipCode == null
                || agency.myInsuranceCompany == null
                || agency.myUser == null) {
                console.log("Algún campo es nulo o no contiene caracteres.");
                return agency;
            }
            else {
                console.log(agency);
                const body = agency;
                return new Promise(resolve => {
                    this.http.post(this.URLDatabase + this.endpoint, body).subscribe((data) => {
                        agency = data;
                        console.log(data);
                        resolve(agency);
                    }, error => {
                        console.log(error);
                        resolve(agency);
                    });
                });
            }
        });
    }
    delete(agency) {
        return new Promise(resolve => {
            this.http.delete(this.URLDatabase + this.endpoint, { body: agency }).subscribe(() => {
                resolve(true);
            }, error => {
                console.log(error);
                resolve(false);
            });
        });
    }
};
AgencyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
AgencyService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AgencyService);



/***/ }),

/***/ 7639:
/*!*******************************************************!*\
  !*** ./src/app/services/insurance-company.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsuranceCompanyService": () => (/* binding */ InsuranceCompanyService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);




let InsuranceCompanyService = class InsuranceCompanyService {
    constructor(http) {
        this.http = http;
        this.endpoint = "/insuranceCompany";
        this.URLDataBase = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.herokuConfig.url;
    }
    /**
     * Método que carga una lista de compañias de coches en función de la petición
     * @param endpoint
     * @returns Promise<CarRepair[]>
     */
    getListData(endpoint) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let insurancesCompany = [];
            return new Promise(resolve => {
                this.http.get(endpoint).subscribe((data) => {
                    if (data != null && data.length > 0) {
                        for (let insuranceCompany of data) {
                            const tmp = {
                                id: insuranceCompany.id,
                                cia_Name: insuranceCompany.cia_Name
                            };
                            insurancesCompany.push(tmp);
                        }
                    }
                    resolve(insurancesCompany);
                }, error => {
                    console.log(error);
                    //mandar una alerta
                });
            });
        });
    }
    //All
    /**
     * Método que devuelve con todas las compañias de seguros de la base de datos
     * @returns Promise<InsuranceCompany[]>
     */
    getAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDataBase + this.endpoint);
        });
    }
    //allPaged
    /**
     * Método que devuelve las compañias de seguros de la base de datos de forma paginada
     * @param limit  número de reparaciones que se quiera obtener
     * @param offset a partir de que reparación se empieza a contar
     * @returns Promise<InsuranceCompany[]>
     */
    getAllPaged(limit, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDataBase + this.endpoint + "/elements/" + limit + "/page/" + offset);
        });
    }
    //byCiaNAme
    /**
     * Metodo que devuelve las compañias de seguros que coincidan con  el nombre introducido
     * @param name Nombre de la compañia de seguros que se quiera buscar
     * @returns Promise<InsuranceCompany[]>
     */
    getByCiaName(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDataBase + this.endpoint + "/CIA_Name/" + name);
        });
    }
    //ByNamePaged
    /**
     * Método que devuelve las compañias de seguros que coincidad con el nombre introducido de forma paginadas
     * @param name Nombre de la compañia de seguros que se quiera buscar
     * @param limit Número de elementos que se quiera devolver
     * @param offset A partir de que elemento se devuelve
     * @returns Promise<InsuranceCompany[]>
     */
    getByNamePaged(name, limit, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDataBase + this.endpoint + "/CIA_Name/" + name + "/elements/" + limit + "/page/" + offset);
        });
    }
    //ByID
    /**
     * Método que devuelva una compañia de seguros que tenga el id
     * @param id número del id de la compañia que se quiera buscar
     * @returns Promise<InsuranceCompany>
     */
    getById(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let insuranceCompany = null;
            return new Promise(resolve => {
                this.http.get(this.URLDataBase + this.endpoint + "/id" + id).subscribe((data) => {
                    if (data.id) {
                        const tmp = {
                            id: data.id,
                            cia_Name: data.cia_Name
                        };
                        insuranceCompany = tmp;
                        resolve(insuranceCompany);
                    }
                }, error => {
                    console.error(error);
                    //meter una alerta
                });
            });
        });
    }
    //CreateOrUpdate
    createOrUpdate(insuranceCompany) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (insuranceCompany != null) {
                if (insuranceCompany.cia_Name != null) {
                    const body = insuranceCompany;
                    return new Promise(resolve => {
                        this.http.post(this.URLDataBase + this.endpoint, body).subscribe((data) => {
                            insuranceCompany = data;
                            resolve(insuranceCompany);
                        }, error => {
                            resolve(error);
                        });
                    });
                }
                else { //alerta por nombre nulo
                }
            }
            else { //alerta por compañia nula
            }
        });
    }
    //delete
    delete(insuranceCompany) {
        return new Promise(resolve => {
            this.http.delete(this.URLDataBase + this.endpoint, { body: insuranceCompany }).subscribe(() => {
                resolve(true);
            }, error => {
                resolve(false);
            });
        });
    }
};
InsuranceCompanyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
InsuranceCompanyService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], InsuranceCompanyService);



/***/ }),

/***/ 371:
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilService": () => (/* binding */ UtilService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 8099);



let UtilService = class UtilService {
    constructor(loading, toast) {
        this.loading = loading;
        this.toast = toast;
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.miLoading = yield this.loading.create({
                message: ''
            });
            yield this.miLoading.present();
        });
    }
    hideLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.miLoading.dismiss();
        });
    }
    presentToast(msg, clr) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const miToast = yield this.toast.create({
                message: msg,
                duration: 3000,
                color: clr
            });
            miToast.present();
        });
    }
};
UtilService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController }
];
UtilService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UtilService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_agency_service_ts-src_app_services_insurance-company_service_ts-src_-cd7bf6.js.map