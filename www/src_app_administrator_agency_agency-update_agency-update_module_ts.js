"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_agency_agency-update_agency-update_module_ts"],{

/***/ 7879:
/*!************************************************************************************!*\
  !*** ./src/app/administrator/agency/agency-update/agency-update-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencyUpdatePageRoutingModule": () => (/* binding */ AgencyUpdatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _agency_update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agency-update.page */ 2483);




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

/***/ 7264:
/*!****************************************************************************!*\
  !*** ./src/app/administrator/agency/agency-update/agency-update.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencyUpdatePageModule": () => (/* binding */ AgencyUpdatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _agency_update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agency-update-routing.module */ 7879);
/* harmony import */ var _agency_update_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agency-update.page */ 2483);







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



/***/ })

}]);
//# sourceMappingURL=src_app_administrator_agency_agency-update_agency-update_module_ts.js.map