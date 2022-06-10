"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_user_gift_gift-saw_gift-saw_page_ts"],{

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



/***/ }),

/***/ 92112:
/*!*****************************************************!*\
  !*** ./src/app/user/gift/gift-saw/gift-saw.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftSawPage": () => (/* binding */ GiftSawPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gift_saw_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./gift-saw.page.html */ 20519);
/* harmony import */ var _gift_saw_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gift-saw.page.scss */ 3350);
/* harmony import */ var _services_agency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/agency.service */ 99574);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _services_exchange_gift_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/exchange-gift.service */ 40922);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/util.service */ 371);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/auth.service */ 36636);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);











let GiftSawPage = class GiftSawPage {
    constructor(modalCtrl, auts, uts, exser, fb, datePipe, as) {
        this.modalCtrl = modalCtrl;
        this.auts = auts;
        this.uts = uts;
        this.exser = exser;
        this.fb = fb;
        this.datePipe = datePipe;
        this.as = as;
        this.formGift = this.fb.group({
            observaciones: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
        });
    }
    ngOnInit() {
        this.img = this.giftsaw.picture;
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.img = "https://res.cloudinary.com/duq0pz1vi/image/upload/v1645471738/" + this.giftsaw.picture;
        });
    }
    close() {
        this.modalCtrl.dismiss();
    }
    purchase() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let actualdate = new Date;
            let newdate;
            newdate = this.datePipe.transform(actualdate, 'yyyy-MM-dd');
            try {
                yield this.uts.presentLoading();
                if (this.giftsaw != null && this.auts.agency != null) {
                    let newExchange = {
                        dateExchange: newdate,
                        observations: this.formGift.get("observaciones").value,
                        delivered: false,
                        agency: this.auts.agency,
                        gift: this.giftsaw
                    };
                    try {
                        let result = yield this.exser.createOrUpdate(newExchange);
                        if (!result) {
                            this.uts.presentToast("Error al insertar canje, compruebe los puntos de la agencia y la disponibilidad del regalo.", "danger", 'ban');
                        }
                        else {
                            this.uts.presentToast("Pedido agregada correctamente", "success", "checkmark-circle-outline");
                            let tmp = yield this.as.getById(this.auts.agency.id);
                            this.as.added = true;
                            try {
                                if (!tmp)
                                    this.uts.presentToast("Ha habido un error al actualizar su agencia.", "danger", "ban");
                                else
                                    this.auts.agency = tmp;
                            }
                            catch (error) {
                                this.uts.presentToast("Ha habido un error al actualizar su agencia.", "danger", "ban");
                            }
                        }
                    }
                    catch (err) {
                        this.uts.presentToast("Error agregando Pedido", "danger", 'ban');
                    }
                }
            }
            catch (error) {
                yield this.uts.hideLoading;
            }
            yield this.uts.hideLoading();
            this.modalCtrl.dismiss({
                nagency: this.auts.agency
            });
        });
    }
};
GiftSawPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService },
    { type: _services_exchange_gift_service__WEBPACK_IMPORTED_MODULE_3__.ExchangeGiftService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe },
    { type: _services_agency_service__WEBPACK_IMPORTED_MODULE_2__.AgencyService }
];
GiftSawPage.propDecorators = {
    giftsaw: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
GiftSawPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-gift-saw',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gift_saw_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
        styles: [_gift_saw_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GiftSawPage);



/***/ }),

/***/ 20519:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/user/gift/gift-saw/gift-saw.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"medium\">\r\n    <ion-title>\r\n      Canjear Pedido\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" >\r\n  <div class=\"body\">\r\n\r\n    <div class=\"ion-padding\">\r\n      <div class=\"center\">\r\n\r\n        <ion-card>\r\n          <ion-img  [src]=\"this.img\"></ion-img>\r\n        </ion-card>\r\n\r\n      </div>\r\n    </div>\r\n    <div  class=\"ion-padding\">\r\n      <form [formGroup]=\"formGift\" class=\"formulario\">\r\n        <ion-grid>\r\n\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col class=\"colum\">\r\n            <div>\r\n              <ion-text class=\"colum\">\r\n                Nombre : {{this.giftsaw.name}}\r\n              </ion-text>\r\n            </div>\r\n          </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col class=\"colum\">\r\n              <div>\r\n                <ion-text>\r\n                  Precio : {{this.giftsaw.points}} Puntos\r\n                </ion-text>\r\n             </div>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col class=\"colum\">\r\n              <div>\r\n                <ion-input class=\"customInput\" formControlName=\"observaciones\" placeholder=\"Escriba aqui sus observaciones\"></ion-input>\r\n             </div>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"12\">\r\n\r\n\r\n              <ion-button [disabled]=\"this.auts.agency.points<giftsaw.points\"  (click)=\"purchase()\" expand=\"block\" shape=\"round\"  style=\"margin-top: 2% !important;\" class=\"button\" >\r\n                Realizar Transacción\r\n              </ion-button>\r\n\r\n              <p></p>\r\n              <p></p>\r\n              <ion-button (click)=\"close()\" expand=\"block\" shape=\"round\"  style=\"margin-top: 2% !important;\" class=\"button2\">\r\n                Cancelar Transacción\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </form>\r\n    </div>\r\n\r\n\r\n</div>\r\n</ion-content>");

/***/ }),

/***/ 3350:
/*!*******************************************************!*\
  !*** ./src/app/user/gift/gift-saw/gift-saw.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #d0e5f0;\n  background-size: cover;\n  min-height: 100%;\n}\n.body ion-card {\n  height: 25%;\n  width: 25%;\n}\n.body ion-card ion-img {\n  border: 0.1cm solid black;\n}\n.button {\n  --background: #4083cc;\n  color: white;\n}\n.button2 {\n  --background: #ff8282;\n  color: white;\n}\n.colum {\n  border: 0px solid !important;\n  text-align: center;\n  border-radius: 5px;\n}\n.colum ion-text {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpZnQtc2F3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQUNKO0FBQUk7RUFDRSx5QkFBQTtBQUVOO0FBTUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFIRjtBQUtBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBRkY7QUFJQTtFQUNFLDRCQUFBO0VBRUEsa0JBQUE7RUFFQSxrQkFBQTtBQUhGO0FBSUU7RUFFRSxrQkFBQTtBQUhKIiwiZmlsZSI6ImdpZnQtc2F3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gIGJhY2tncm91bmQ6ICNkMGU1ZjA7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG5cclxuICBpb24tY2FyZHtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGlvbi1pbWd7XHJcbiAgICAgIGJvcmRlcjogMC4xMGNtIHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLmJ1dHRvbntcclxuICAtLWJhY2tncm91bmQ6ICM0MDgzY2M7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5idXR0b24ye1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmODI4MjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmNvbHVte1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBpb24tdGV4dHtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIFxyXG4gXHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_user_gift_gift-saw_gift-saw_page_ts.js.map