"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_tab-administrator_tab-administrator_module_ts"],{

/***/ 951:
/*!*************************************************************************************!*\
  !*** ./src/app/administrator/tab-administrator/tab-administrator-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabAdministratorPageRoutingModule": () => (/* binding */ TabAdministratorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tab_administrator_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-administrator.page */ 6691);




const routes = [
    {
        path: '',
        component: _tab_administrator_page__WEBPACK_IMPORTED_MODULE_0__.TabAdministratorPage,
        children: [
            {
                path: 'exchange-gift-list',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_exchangeGift_exchange-gift-list_exchange-gift-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../exchangeGift/exchange-gift-list/exchange-gift-list.module */ 6243)).then(m => m.ExchangeGiftListPageModule)
            },
            {
                path: 'car-repair-list',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_carRepair_car-repair-list_car-repair-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../carRepair/car-repair-list/car-repair-list.module */ 2225)).then(m => m.CarRepairListPageModule)
            },
            {
                path: 'agency-list',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_administrator_agency_agency-list_agency-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../agency/agency-list/agency-list.module */ 9947)).then(m => m.AgencyListPageModule)
            },
            {
                path: 'gif-list',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_administrator_gift_gif-list_gif-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../gift/gif-list/gif-list.module */ 1789)).then(m => m.GifListPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/about',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/about',
        pathMatch: 'full'
    }
];
let TabAdministratorPageRoutingModule = class TabAdministratorPageRoutingModule {
};
TabAdministratorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabAdministratorPageRoutingModule);



/***/ }),

/***/ 4922:
/*!*****************************************************************************!*\
  !*** ./src/app/administrator/tab-administrator/tab-administrator.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabAdministratorPageModule": () => (/* binding */ TabAdministratorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _tab_administrator_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-administrator-routing.module */ 951);
/* harmony import */ var _tab_administrator_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-administrator.page */ 6691);







let TabAdministratorPageModule = class TabAdministratorPageModule {
};
TabAdministratorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab_administrator_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabAdministratorPageRoutingModule
        ],
        declarations: [_tab_administrator_page__WEBPACK_IMPORTED_MODULE_1__.TabAdministratorPage]
    })
], TabAdministratorPageModule);



/***/ }),

/***/ 6691:
/*!***************************************************************************!*\
  !*** ./src/app/administrator/tab-administrator/tab-administrator.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabAdministratorPage": () => (/* binding */ TabAdministratorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab_administrator_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab-administrator.page.html */ 8045);
/* harmony import */ var _tab_administrator_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-administrator.page.scss */ 3969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let TabAdministratorPage = class TabAdministratorPage {
    constructor() { }
    ngOnInit() {
    }
};
TabAdministratorPage.ctorParameters = () => [];
TabAdministratorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab-administrator',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab_administrator_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab_administrator_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabAdministratorPage);



/***/ }),

/***/ 8045:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/tab-administrator/tab-administrator.page.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>TabAdministrator</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n-->\r\n<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"about\">\r\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n      <ion-label>About</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"blog\">\r\n      <ion-icon name=\"albums-outline\"></ion-icon>\r\n      <ion-label>Blog</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"contact\">\r\n      <ion-icon name=\"call-outline\"></ion-icon>\r\n      <ion-label>Contact</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n\r\n");

/***/ }),

/***/ 3969:
/*!*****************************************************************************!*\
  !*** ./src/app/administrator/tab-administrator/tab-administrator.page.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWItYWRtaW5pc3RyYXRvci5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_tab-administrator_tab-administrator_module_ts.js.map