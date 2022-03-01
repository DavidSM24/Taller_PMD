"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_exchangeGift_exchange-gift-list_exchange-gift-list_module_ts"],{

/***/ 2071:
/*!****************************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gift-list/exchange-gift-list-routing.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGiftListPageRoutingModule": () => (/* binding */ ExchangeGiftListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _exchange_gift_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchange-gift-list.page */ 9670);




const routes = [
    {
        path: '',
        component: _exchange_gift_list_page__WEBPACK_IMPORTED_MODULE_0__.ExchangeGiftListPage
    }
];
let ExchangeGiftListPageRoutingModule = class ExchangeGiftListPageRoutingModule {
};
ExchangeGiftListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExchangeGiftListPageRoutingModule);



/***/ }),

/***/ 6243:
/*!********************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gift-list/exchange-gift-list.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGiftListPageModule": () => (/* binding */ ExchangeGiftListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _exchange_gift_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchange-gift-list-routing.module */ 2071);
/* harmony import */ var _exchange_gift_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchange-gift-list.page */ 9670);







let ExchangeGiftListPageModule = class ExchangeGiftListPageModule {
};
ExchangeGiftListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _exchange_gift_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExchangeGiftListPageRoutingModule
        ],
        declarations: [_exchange_gift_list_page__WEBPACK_IMPORTED_MODULE_1__.ExchangeGiftListPage]
    })
], ExchangeGiftListPageModule);



/***/ }),

/***/ 9670:
/*!******************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gift-list/exchange-gift-list.page.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGiftListPage": () => (/* binding */ ExchangeGiftListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exchange_gift_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./exchange-gift-list.page.html */ 4938);
/* harmony import */ var _exchange_gift_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchange-gift-list.page.scss */ 8992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let ExchangeGiftListPage = class ExchangeGiftListPage {
    constructor() { }
    ngOnInit() {
    }
};
ExchangeGiftListPage.ctorParameters = () => [];
ExchangeGiftListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-exchange-gift-list',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exchange_gift_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_exchange_gift_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExchangeGiftListPage);



/***/ }),

/***/ 4938:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/exchangeGift/exchange-gift-list/exchange-gift-list.page.html ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>ExchangeGiftList</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 8992:
/*!********************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gift-list/exchange-gift-list.page.scss ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGNoYW5nZS1naWZ0LWxpc3QucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_exchangeGift_exchange-gift-list_exchange-gift-list_module_ts.js.map