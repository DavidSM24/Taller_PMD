"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user_exchangeGift_exchange-gift-saw_exchange-gift-saw_module_ts"],{

/***/ 13887:
/*!*****************************************************************************************!*\
  !*** ./src/app/user/exchangeGift/exchange-gift-saw/exchange-gift-saw-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGiftSawPageRoutingModule": () => (/* binding */ ExchangeGiftSawPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _exchange_gift_saw_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchange-gift-saw.page */ 58015);




const routes = [
    {
        path: '',
        component: _exchange_gift_saw_page__WEBPACK_IMPORTED_MODULE_0__.ExchangeGiftSawPage
    }
];
let ExchangeGiftSawPageRoutingModule = class ExchangeGiftSawPageRoutingModule {
};
ExchangeGiftSawPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExchangeGiftSawPageRoutingModule);



/***/ }),

/***/ 42639:
/*!*********************************************************************************!*\
  !*** ./src/app/user/exchangeGift/exchange-gift-saw/exchange-gift-saw.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGiftSawPageModule": () => (/* binding */ ExchangeGiftSawPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _exchange_gift_saw_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchange-gift-saw-routing.module */ 13887);
/* harmony import */ var _exchange_gift_saw_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchange-gift-saw.page */ 58015);







let ExchangeGiftSawPageModule = class ExchangeGiftSawPageModule {
};
ExchangeGiftSawPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _exchange_gift_saw_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExchangeGiftSawPageRoutingModule
        ],
        declarations: [_exchange_gift_saw_page__WEBPACK_IMPORTED_MODULE_1__.ExchangeGiftSawPage]
    })
], ExchangeGiftSawPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_user_exchangeGift_exchange-gift-saw_exchange-gift-saw_module_ts.js.map