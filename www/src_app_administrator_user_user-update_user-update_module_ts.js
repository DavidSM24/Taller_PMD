"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_user_user-update_user-update_module_ts"],{

/***/ 4179:
/*!******************************************************************************!*\
  !*** ./src/app/administrator/user/user-update/user-update-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserUpdatePageRoutingModule": () => (/* binding */ UserUpdatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _user_update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-update.page */ 9101);




const routes = [
    {
        path: '',
        component: _user_update_page__WEBPACK_IMPORTED_MODULE_0__.UserUpdatePage
    }
];
let UserUpdatePageRoutingModule = class UserUpdatePageRoutingModule {
};
UserUpdatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserUpdatePageRoutingModule);



/***/ }),

/***/ 7476:
/*!**********************************************************************!*\
  !*** ./src/app/administrator/user/user-update/user-update.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserUpdatePageModule": () => (/* binding */ UserUpdatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _user_update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-update-routing.module */ 4179);
/* harmony import */ var _user_update_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-update.page */ 9101);







let UserUpdatePageModule = class UserUpdatePageModule {
};
UserUpdatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_update_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserUpdatePageRoutingModule
        ],
        declarations: [_user_update_page__WEBPACK_IMPORTED_MODULE_1__.UserUpdatePage]
    })
], UserUpdatePageModule);



/***/ }),

/***/ 9101:
/*!********************************************************************!*\
  !*** ./src/app/administrator/user/user-update/user-update.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserUpdatePage": () => (/* binding */ UserUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_update_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-update.page.html */ 3731);
/* harmony import */ var _user_update_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-update.page.scss */ 7547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let UserUpdatePage = class UserUpdatePage {
    constructor() { }
    ngOnInit() {
    }
};
UserUpdatePage.ctorParameters = () => [];
UserUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-user-update',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_update_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_update_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserUpdatePage);



/***/ }),

/***/ 3731:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/user/user-update/user-update.page.html ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>user-update</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 7547:
/*!**********************************************************************!*\
  !*** ./src/app/administrator/user/user-update/user-update.page.scss ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXVwZGF0ZS5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_user_user-update_user-update_module_ts.js.map