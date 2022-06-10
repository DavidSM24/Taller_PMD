"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_company_company-update_company-update_module_ts"],{

/***/ 32306:
/*!***************************************************************************************!*\
  !*** ./src/app/administrator/company/company-update/company-update-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyUpdatePageRoutingModule": () => (/* binding */ CompanyUpdatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _company_update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-update.page */ 12115);




const routes = [
    {
        path: '',
        component: _company_update_page__WEBPACK_IMPORTED_MODULE_0__.CompanyUpdatePage
    }
];
let CompanyUpdatePageRoutingModule = class CompanyUpdatePageRoutingModule {
};
CompanyUpdatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CompanyUpdatePageRoutingModule);



/***/ }),

/***/ 1045:
/*!*******************************************************************************!*\
  !*** ./src/app/administrator/company/company-update/company-update.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyUpdatePageModule": () => (/* binding */ CompanyUpdatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _company_update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-update-routing.module */ 32306);





let CompanyUpdatePageModule = class CompanyUpdatePageModule {
};
CompanyUpdatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _company_update_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompanyUpdatePageRoutingModule
        ],
        declarations: []
    })
], CompanyUpdatePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_administrator_company_company-update_company-update_module_ts.js.map