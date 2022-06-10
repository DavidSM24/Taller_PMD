"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user_carRepair_car-repair-saw_car-repair-saw_module_ts"],{

/***/ 53032:
/*!********************************************************************************!*\
  !*** ./src/app/user/carRepair/car-repair-saw/car-repair-saw-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairSawPageRoutingModule": () => (/* binding */ CarRepairSawPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _car_repair_saw_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-repair-saw.page */ 11278);




const routes = [
    {
        path: '',
        component: _car_repair_saw_page__WEBPACK_IMPORTED_MODULE_0__.CarRepairSawPage
    }
];
let CarRepairSawPageRoutingModule = class CarRepairSawPageRoutingModule {
};
CarRepairSawPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarRepairSawPageRoutingModule);



/***/ }),

/***/ 45884:
/*!************************************************************************!*\
  !*** ./src/app/user/carRepair/car-repair-saw/car-repair-saw.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairSawPageModule": () => (/* binding */ CarRepairSawPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _car_repair_saw_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-repair-saw-routing.module */ 53032);
/* harmony import */ var _car_repair_saw_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-repair-saw.page */ 11278);
/* harmony import */ var src_app_services_car_repair_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/car-repair.service */ 7928);








let CarRepairSawPageModule = class CarRepairSawPageModule {
};
CarRepairSawPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _car_repair_saw_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarRepairSawPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        providers: [
            src_app_services_car_repair_service__WEBPACK_IMPORTED_MODULE_2__.CarRepairService
        ],
        declarations: [_car_repair_saw_page__WEBPACK_IMPORTED_MODULE_1__.CarRepairSawPage]
    })
], CarRepairSawPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_user_carRepair_car-repair-saw_car-repair-saw_module_ts.js.map