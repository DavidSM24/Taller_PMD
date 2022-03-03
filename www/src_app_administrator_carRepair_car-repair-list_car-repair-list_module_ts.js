"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_carRepair_car-repair-list_car-repair-list_module_ts"],{

/***/ 6066:
/*!*******************************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-list/car-repair-list-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairListPageRoutingModule": () => (/* binding */ CarRepairListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _car_repair_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-repair-list.page */ 9519);




const routes = [
    {
        path: '',
        component: _car_repair_list_page__WEBPACK_IMPORTED_MODULE_0__.CarRepairListPage,
        children: [
            {
                path: 'car-repair-saw',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_carRepair_car-repair-saw_car-repair-saw_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../car-repair-saw/car-repair-saw.module */ 6589)).then(m => m.CarRepairSawPageModule)
            },
            {
                path: 'car-repair-update',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_carRepair_car-repair-update_car-repair-update_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../car-repair-update/car-repair-update.module */ 2529)).then(m => m.CarRepairUpdatePageModule)
            },
            {
                path: 'car-repair-create',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_carRepair_car-repair-create_car-repair-create_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../car-repair-create/car-repair-create.module */ 8189)).then(m => m.CarRepairCreatePageModule)
            },
        ]
    }
];
let CarRepairListPageRoutingModule = class CarRepairListPageRoutingModule {
};
CarRepairListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarRepairListPageRoutingModule);



/***/ }),

/***/ 2225:
/*!***********************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-list/car-repair-list.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairListPageModule": () => (/* binding */ CarRepairListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _car_repair_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-repair-list-routing.module */ 6066);
/* harmony import */ var _car_repair_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-repair-list.page */ 9519);







let CarRepairListPageModule = class CarRepairListPageModule {
};
CarRepairListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _car_repair_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarRepairListPageRoutingModule
        ],
        declarations: [_car_repair_list_page__WEBPACK_IMPORTED_MODULE_1__.CarRepairListPage]
    })
], CarRepairListPageModule);



/***/ }),

/***/ 9519:
/*!*********************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-list/car-repair-list.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairListPage": () => (/* binding */ CarRepairListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_car_repair_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./car-repair-list.page.html */ 1434);
/* harmony import */ var _car_repair_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-repair-list.page.scss */ 5556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8099);





let CarRepairListPage = class CarRepairListPage {
    constructor() {
    }
    ngOnInit() {
    }
};
CarRepairListPage.ctorParameters = () => [];
CarRepairListPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonInfiniteScroll,] }]
};
CarRepairListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-car-repair-list',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_car_repair_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_car_repair_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CarRepairListPage);



/***/ }),

/***/ 1434:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/carRepair/car-repair-list/car-repair-list.page.html ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>CarRepairList</ion-title>\r\n\r\n    <ion-buttons style=\"margin-right: 1%;\" slot=\"end\">\r\n      <ion-icon class=\"icon-logout\" slot=\"end\" name=\"add-circle\" style=\"zoom:1.5\"></ion-icon>\r\n      <ion-icon class=\"icon-logout\" slot=\"end\" name=\"person\" style=\"zoom:1.5\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 5556:
/*!***********************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-list/car-repair-list.page.scss ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXItcmVwYWlyLWxpc3QucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_carRepair_car-repair-list_car-repair-list_module_ts.js.map