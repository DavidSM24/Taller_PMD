"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_gift_gif-update_gif-update_module_ts"],{

/***/ 6971:
/*!****************************************************************************!*\
  !*** ./src/app/administrator/gift/gif-update/gif-update-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifUpdatePageRoutingModule": () => (/* binding */ GifUpdatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _gif_update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gif-update.page */ 6667);




const routes = [
    {
        path: '',
        component: _gif_update_page__WEBPACK_IMPORTED_MODULE_0__.GifUpdatePage
    }
];
let GifUpdatePageRoutingModule = class GifUpdatePageRoutingModule {
};
GifUpdatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GifUpdatePageRoutingModule);



/***/ }),

/***/ 8458:
/*!********************************************************************!*\
  !*** ./src/app/administrator/gift/gif-update/gif-update.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifUpdatePageModule": () => (/* binding */ GifUpdatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _gif_update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gif-update-routing.module */ 6971);
/* harmony import */ var _gif_update_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gif-update.page */ 6667);







let GifUpdatePageModule = class GifUpdatePageModule {
};
GifUpdatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gif_update_routing_module__WEBPACK_IMPORTED_MODULE_0__.GifUpdatePageRoutingModule
        ],
        declarations: [_gif_update_page__WEBPACK_IMPORTED_MODULE_1__.GifUpdatePage]
    })
], GifUpdatePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_administrator_gift_gif-update_gif-update_module_ts.js.map