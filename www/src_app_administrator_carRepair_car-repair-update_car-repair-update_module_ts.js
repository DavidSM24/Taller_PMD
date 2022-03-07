"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_carRepair_car-repair-update_car-repair-update_module_ts"],{

/***/ 2369:
/*!***********************************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-update/car-repair-update-routing.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairUpdatePageRoutingModule": () => (/* binding */ CarRepairUpdatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _car_repair_update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-repair-update.page */ 3022);




const routes = [
    {
        path: '',
        component: _car_repair_update_page__WEBPACK_IMPORTED_MODULE_0__.CarRepairUpdatePage
    }
];
let CarRepairUpdatePageRoutingModule = class CarRepairUpdatePageRoutingModule {
};
CarRepairUpdatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarRepairUpdatePageRoutingModule);



/***/ }),

/***/ 2529:
/*!***************************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-update/car-repair-update.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairUpdatePageModule": () => (/* binding */ CarRepairUpdatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _car_repair_update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-repair-update-routing.module */ 2369);
/* harmony import */ var _car_repair_update_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-repair-update.page */ 3022);







let CarRepairUpdatePageModule = class CarRepairUpdatePageModule {
};
CarRepairUpdatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _car_repair_update_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarRepairUpdatePageRoutingModule
        ],
        declarations: [_car_repair_update_page__WEBPACK_IMPORTED_MODULE_1__.CarRepairUpdatePage]
    })
], CarRepairUpdatePageModule);



/***/ }),

/***/ 3022:
/*!*************************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-update/car-repair-update.page.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairUpdatePage": () => (/* binding */ CarRepairUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_car_repair_update_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./car-repair-update.page.html */ 4051);
/* harmony import */ var _car_repair_update_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-repair-update.page.scss */ 4584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let CarRepairUpdatePage = class CarRepairUpdatePage {
    constructor() { }
    ngOnInit() {
    }
};
CarRepairUpdatePage.ctorParameters = () => [];
CarRepairUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-car-repair-update',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_car_repair_update_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_car_repair_update_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CarRepairUpdatePage);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>CarRepairUpdate</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 4584:
/*!***************************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-update/car-repair-update.page.scss ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXItcmVwYWlyLXVwZGF0ZS5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_carRepair_car-repair-update_car-repair-update_module_ts.js.map