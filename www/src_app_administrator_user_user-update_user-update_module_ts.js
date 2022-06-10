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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _user_update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-update.page */ 29101);




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

/***/ 77476:
/*!**********************************************************************!*\
  !*** ./src/app/administrator/user/user-update/user-update.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserUpdatePageModule": () => (/* binding */ UserUpdatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _user_update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-update-routing.module */ 4179);





let UserUpdatePageModule = class UserUpdatePageModule {
};
UserUpdatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _user_update_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserUpdatePageRoutingModule
        ],
        declarations: []
    })
], UserUpdatePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_administrator_user_user-update_user-update_module_ts.js.map