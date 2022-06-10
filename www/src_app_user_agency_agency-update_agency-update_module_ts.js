"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user_agency_agency-update_agency-update_module_ts"],{

/***/ 68243:
/*!***************************************************************************!*\
  !*** ./src/app/user/agency/agency-update/agency-update-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencyUpdatePageRoutingModule": () => (/* binding */ AgencyUpdatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _agency_update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agency-update.page */ 2837);




const routes = [
    {
        path: '',
        component: _agency_update_page__WEBPACK_IMPORTED_MODULE_0__.AgencyUpdatePage
    }
];
let AgencyUpdatePageRoutingModule = class AgencyUpdatePageRoutingModule {
};
AgencyUpdatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AgencyUpdatePageRoutingModule);



/***/ }),

/***/ 96546:
/*!*******************************************************************!*\
  !*** ./src/app/user/agency/agency-update/agency-update.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencyUpdatePageModule": () => (/* binding */ AgencyUpdatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _agency_update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agency-update-routing.module */ 68243);
/* harmony import */ var _agency_update_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agency-update.page */ 2837);







let AgencyUpdatePageModule = class AgencyUpdatePageModule {
};
AgencyUpdatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _agency_update_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgencyUpdatePageRoutingModule
        ],
        declarations: [_agency_update_page__WEBPACK_IMPORTED_MODULE_1__.AgencyUpdatePage]
    })
], AgencyUpdatePageModule);



/***/ }),

/***/ 2837:
/*!*****************************************************************!*\
  !*** ./src/app/user/agency/agency-update/agency-update.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencyUpdatePage": () => (/* binding */ AgencyUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_agency_update_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./agency-update.page.html */ 82234);
/* harmony import */ var _agency_update_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agency-update.page.scss */ 63450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let AgencyUpdatePage = class AgencyUpdatePage {
    constructor() { }
    ngOnInit() {
    }
};
AgencyUpdatePage.ctorParameters = () => [];
AgencyUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-agency-update',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_agency_update_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_agency_update_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AgencyUpdatePage);



/***/ }),

/***/ 82234:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/user/agency/agency-update/agency-update.page.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>agencyUpdate</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 63450:
/*!*******************************************************************!*\
  !*** ./src/app/user/agency/agency-update/agency-update.page.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ2VuY3ktdXBkYXRlLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_user_agency_agency-update_agency-update_module_ts.js.map