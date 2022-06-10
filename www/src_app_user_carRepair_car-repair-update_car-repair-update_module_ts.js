"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user_carRepair_car-repair-update_car-repair-update_module_ts"],{

/***/ 26311:
/*!**************************************************************************************!*\
  !*** ./src/app/user/carRepair/car-repair-update/car-repair-update-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairUpdatePageRoutingModule": () => (/* binding */ CarRepairUpdatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _car_repair_update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-repair-update.page */ 55744);




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

/***/ 21350:
/*!******************************************************************************!*\
  !*** ./src/app/user/carRepair/car-repair-update/car-repair-update.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairUpdatePageModule": () => (/* binding */ CarRepairUpdatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _car_repair_update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-repair-update-routing.module */ 26311);
/* harmony import */ var _car_repair_update_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-repair-update.page */ 55744);







let CarRepairUpdatePageModule = class CarRepairUpdatePageModule {
};
CarRepairUpdatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _car_repair_update_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarRepairUpdatePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_car_repair_update_page__WEBPACK_IMPORTED_MODULE_1__.CarRepairUpdatePage]
    })
], CarRepairUpdatePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_user_carRepair_car-repair-update_car-repair-update_module_ts.js.map