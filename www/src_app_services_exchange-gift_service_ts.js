"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_services_exchange-gift_service_ts"],{

/***/ 40922:
/*!***************************************************!*\
  !*** ./src/app/services/exchange-gift.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGiftService": () => (/* binding */ ExchangeGiftService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);




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
                    resolve(users);
                }, error => {
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
    getByDateFilter(date) {
        return this.getListData(this.URLDatabase + this.endpoint + "/date/" + date);
    }
    getByPoints(points) {
        return this.getListData(this.URLDatabase + this.endpoint + "/points/" + points);
    }
    getByAgencyUsername(auname) {
        return this.getListData(this.URLDatabase + this.endpoint + "/auname/" + auname);
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
                    resolve(exchangegift);
                }, error => {
                    resolve(exchangegift);
                });
            });
        });
    }
    getByDeliveredPaged(delivered, element, page) {
        return this.getListData(this.URLDatabase + this.endpoint + "/delivered/" + delivered + "/element/" + element + "/paged/" + page);
    }
    getByGiftName(gname) {
        return this.getListData(this.URLDatabase + this.endpoint + "/gname/" + gname);
    }
    getByAgencyPaged(agency, element, page) {
        if (agency != null) {
            return this.getListData(this.URLDatabase + this.endpoint + "/id_agency/" + agency.id + "/element/" + element + "/paged/" + page);
        }
        else {
            let result;
            return result;
        }
    }
    createOrUpdate(exgift) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (exgift != null) {
                const body = {
                    id: exgift.id,
                    dateExchange: exgift.dateExchange,
                    observations: exgift.observations,
                    delivered: exgift.delivered,
                    agency: {
                        id: exgift.agency.id
                    },
                    gift: {
                        id: exgift.gift.id
                    }
                };
                return new Promise(resolve => {
                    this.http.post(this.URLDatabase + this.endpoint, body).subscribe((data) => {
                        exgift.id = data.id;
                        resolve(exgift);
                    }, error => {
                        resolve(null);
                    });
                });
            }
        });
    }
    delete(exgift) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (exgift != null) {
                const body = {
                    id: exgift.id
                };
                return new Promise(resolve => {
                    this.http.delete(this.URLDatabase + this.endpoint, { body }).subscribe(() => {
                        resolve(true);
                    }, error => {
                        resolve(false);
                    });
                });
            }
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



/***/ })

}]);
//# sourceMappingURL=src_app_services_exchange-gift_service_ts.js.map