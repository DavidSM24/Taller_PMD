"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_agency_service_ts-src_app_services_exchange-gift_service_ts-src_app_-a3801a"],{

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

/***/ 63:
/*!***************************************************!*\
  !*** ./src/app/services/exchange-gift.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGiftService": () => (/* binding */ ExchangeGiftService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);




let ExchangeGiftService = class ExchangeGiftService {
    constructor(http) {
        this.http = http;
        this.endpoint = "/exchangeGifts";
        this.URLDatabase = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.herokuConfig.url;
    }
    getListData(endpoint) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let users = [];
            return new Promise(resolve => {
                this.http.get(endpoint).subscribe((data) => {
                    if (data != null && data.length > 0) {
                        for (let miexgift of data) {
                            const tmp = {
                                id: miexgift.id,
                                dateExchange: miexgift.dateExchange,
                                observations: miexgift.observations,
                                delivered: miexgift.delivered,
                                agency: miexgift.agency,
                                gift: miexgift.gift
                            };
                            users.push(tmp);
                        }
                    }
                    console.log(data);
                    resolve(users);
                }, error => {
                    console.log(error);
                });
            });
        });
    }
    getAllPaged(element, page) {
        return this.getListData(this.URLDatabase + this.endpoint + "/element/" + element + "/page/" + page);
    }
    getAll() {
        return this.getListData(this.URLDatabase + this.endpoint);
    }
    getById(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let exchangegift = null;
            return new Promise(resolve => {
                this.http.get(this.URLDatabase + this.endpoint + "/id/" + id).subscribe((miexgift) => {
                    if (miexgift.id) {
                        const tmp = {
                            id: miexgift.id,
                            dateExchange: miexgift.dateExchange,
                            observations: miexgift.observations,
                            delivered: miexgift.delivered,
                            agency: miexgift.agency,
                            gift: miexgift.gift
                        };
                        exchangegift = tmp;
                    }
                    console.log(exchangegift);
                    resolve(exchangegift);
                }, error => {
                    console.log(error);
                    console.log(exchangegift);
                    resolve(exchangegift);
                });
            });
        });
    }
    getByDeliveredPaged(delivered, element, page) {
        return this.getListData(this.URLDatabase + this.endpoint + "/delivered/" + delivered + "/element/" + element + "/page/" + page);
    }
    getByAgencyPaged(agency, element, page) {
        if (agency != null) {
            return this.getListData(this.URLDatabase + this.endpoint + "/id_agency/" + agency.id + "/element/" + element + "/page/" + page);
        }
        else {
            let result;
            return result;
        }
    }
    createOrUpdate(exgift) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (exgift != null) {
                const body = exgift;
                return new Promise(resolve => {
                    this.http.post(this.URLDatabase + this.endpoint, body).subscribe((miexgift) => {
                        let result = {
                            id: miexgift.id,
                            dateExchange: miexgift.dateExchange,
                            observations: miexgift.observations,
                            delivered: miexgift.delivered,
                            agency: miexgift.agency,
                            gift: miexgift.gift
                        };
                        resolve(result);
                    }, error => {
                        console.log(error);
                        resolve(exgift);
                    });
                });
            }
        });
    }
    delete(exgift) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                this.http.delete(this.URLDatabase + this.endpoint, { body: exgift }).subscribe(() => {
                    resolve(true);
                }, error => {
                    console.log(error);
                    resolve(false);
                });
            });
        });
    }
};
ExchangeGiftService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
ExchangeGiftService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ExchangeGiftService);



/***/ }),

/***/ 4483:
/*!******************************************!*\
  !*** ./src/app/services/gift.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftService": () => (/* binding */ GiftService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);




let GiftService = class GiftService {
    constructor(http) {
        this.http = http;
        this.endpoint = "/gifts";
        this.URLDatabase = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.herokuConfig.url;
    }
    getListData(endpoint) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let gifts = [];
            return new Promise(resolve => {
                this.http.get(endpoint).subscribe((data) => {
                    if (data != null && data.length > 0) {
                        for (let g of data) {
                            const tmp = {
                                id: g.id,
                                name: g.name,
                                points: g.points,
                                picture: g.picture,
                                exchangeGifts: [],
                                available: g.available
                            };
                            for (let eg of g.exchangeGifts) {
                                tmp.exchangeGifts.push(eg);
                            }
                            gifts.push(tmp);
                        }
                    }
                    console.log(data);
                    resolve(gifts);
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
            let gift = null;
            return new Promise(resolve => {
                this.http.get(this.URLDatabase + this.endpoint + "/id/" + id).subscribe((data) => {
                    if (data.id) {
                        const tmp = {
                            id: data.id,
                            name: data.name,
                            points: data.points,
                            picture: data.picture,
                            exchangeGifts: [],
                            available: data.available
                        };
                        for (let eg of data.exchangeGifts) {
                            tmp.exchangeGifts.push(eg);
                        }
                        gift = tmp;
                    }
                    console.log(gift);
                    resolve(gift);
                }, error => {
                    console.log(error);
                    console.log(gift);
                    resolve(gift);
                });
            });
        });
    }
    getByNamePaged(name, limit, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/name/" + name + "/element/" + limit + "/page/" + offset);
        });
    }
    getByAvailablePaged(available, limit, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/available/" + available + "/element/" + limit + "/page/" + offset);
        });
    }
    createOrUpdate(gift, ImageFile) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            console.log(gift);
            if (gift == null
                || gift.name == null
                || gift.name == ("")
                || ImageFile == null) {
                console.log("El campo name esta nulo o no contiene caracteres.");
                return gift;
            }
            else {
                const body = gift;
                return new Promise(resolve => {
                    let formData = new FormData();
                    formData.append('g', new Blob([JSON.stringify(gift)], {
                        type: 'application/json'
                    }));
                    formData.append('file', ImageFile);
                    this.http.post(this.URLDatabase + this.endpoint, formData).subscribe((data) => {
                        console.log(data);
                        resolve(data);
                    }, error => {
                        console.log(error);
                        resolve(error);
                    });
                });
            }
        });
    }
    delete(gift) {
        return new Promise(resolve => {
            this.http.delete(this.URLDatabase + this.endpoint, { body: gift }).subscribe(() => {
                resolve(true);
            }, error => {
                console.log(error);
                resolve(false);
            });
        });
    }
};
GiftService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
GiftService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], GiftService);



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
//# sourceMappingURL=default-src_app_services_agency_service_ts-src_app_services_exchange-gift_service_ts-src_app_-a3801a.js.map