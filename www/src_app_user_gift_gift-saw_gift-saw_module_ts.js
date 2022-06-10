"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user_gift_gift-saw_gift-saw_module_ts"],{

/***/ 75618:
/*!***************************************************************!*\
  !*** ./src/app/user/gift/gift-saw/gift-saw-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftSawPageRoutingModule": () => (/* binding */ GiftSawPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _gift_saw_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gift-saw.page */ 92112);




const routes = [
    {
        path: '',
        component: _gift_saw_page__WEBPACK_IMPORTED_MODULE_0__.GiftSawPage
    }
];
let GiftSawPageRoutingModule = class GiftSawPageRoutingModule {
};
GiftSawPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GiftSawPageRoutingModule);



/***/ }),

/***/ 96556:
/*!*******************************************************!*\
  !*** ./src/app/user/gift/gift-saw/gift-saw.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftSawPageModule": () => (/* binding */ GiftSawPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _gift_saw_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gift-saw-routing.module */ 75618);
/* harmony import */ var _gift_saw_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gift-saw.page */ 92112);







let GiftSawPageModule = class GiftSawPageModule {
};
GiftSawPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gift_saw_routing_module__WEBPACK_IMPORTED_MODULE_0__.GiftSawPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_gift_saw_page__WEBPACK_IMPORTED_MODULE_1__.GiftSawPage]
    })
], GiftSawPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_user_gift_gift-saw_gift-saw_module_ts.js.map