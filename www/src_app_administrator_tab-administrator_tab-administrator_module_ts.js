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
            //pedidos
            {
                path: 'exchange-gift',
                children: [
                    {
                        path: 'list',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_administrator_exchangeGift_exchange-gift-list_exchange-gift-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../exchangeGift/exchange-gift-list/exchange-gift-list.module */ 6243)).then(m => m.ExchangeGiftListPageModule)
                    },
                    {
                        path: 'update',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_exchangeGift_exchange-gif-update_exchange-gif-update_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../exchangeGift/exchange-gif-update/exchange-gif-update.module */ 9890)).then(m => m.ExchangeGifUpdatePageModule)
                    },
                    {
                        path: 'saw',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_exchangeGift_exchange-gif-saw_exchange-gif-saw_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../exchangeGift/exchange-gif-saw/exchange-gif-saw.module */ 2142)).then(m => m.ExchangeGifSawPageModule)
                    }
                ]
            },
            //Reparaciones
            {
                path: 'car-repair',
                children: [
                    {
                        path: 'list',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_carRepair_car-repair-list_car-repair-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../carRepair/car-repair-list/car-repair-list.module */ 2225)).then(m => m.CarRepairListPageModule)
                    },
                    {
                        path: 'saw',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_carRepair_car-repair-saw_car-repair-saw_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../carRepair/car-repair-saw/car-repair-saw.module */ 6589)).then(m => m.CarRepairSawPageModule)
                    },
                    {
                        path: 'update',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_carRepair_car-repair-update_car-repair-update_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../carRepair/car-repair-update/car-repair-update.module */ 2529)).then(m => m.CarRepairUpdatePageModule)
                    }
                ]
            },
            //Agencias
            {
                path: 'agency',
                children: [
                    {
                        path: 'list',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_agency_service_ts-src_app_services_insurance-company_service_ts"), __webpack_require__.e("default-src_app_administrator_agency_agency-update_agency-update_page_ts"), __webpack_require__.e("src_app_administrator_agency_agency-list_agency-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../agency/agency-list/agency-list.module */ 9947)).then(m => m.AgencyListPageModule)
                    },
                    {
                        path: 'saw',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_agency_agency-saw_agency-saw_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../agency/agency-saw/agency-saw.module */ 879)).then(m => m.AgencySawPageModule)
                    },
                    {
                        path: 'update',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_agency_service_ts-src_app_services_insurance-company_service_ts"), __webpack_require__.e("default-src_app_administrator_agency_agency-update_agency-update_page_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ../agency/agency-update/agency-update.module */ 7264)).then(m => m.AgencyUpdatePageModule)
                    },
                    {
                        path: 'create',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_agency_service_ts-src_app_services_insurance-company_service_ts"), __webpack_require__.e("default-src_app_administrator_agency_agency-create_agency-create_module_ts"), __webpack_require__.e("src_app_services_util_service_ts-_35870")]).then(__webpack_require__.bind(__webpack_require__, /*! ../agency/agency-create/agency-create.module */ 8333)).then(m => m.AgencyCreatePageModule)
                    }
                ]
            },
            //Regalos
            {
                path: 'gift',
                children: [
                    {
                        path: 'list',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_administrator_gift_gif-list_gif-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../gift/gif-list/gif-list.module */ 1789)).then(m => m.GifListPageModule)
                    }, {
                        path: 'create',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_services_util_service_ts-_35871")]).then(__webpack_require__.bind(__webpack_require__, /*! ../gift/gif-create/gif-create.module */ 4844)).then(m => m.GifCreatePageModule)
                    },
                    {
                        path: 'saw',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_gift_gif-saw_gif-saw_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../gift/gif-saw/gif-saw.module */ 2728)).then(m => m.GifSawPageModule)
                    },
                    {
                        path: 'update',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../gift/gif-update/gif-update.module */ 8458)).then(m => m.GifUpdatePageModule)
                    }
                ]
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>TabAdministrator</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n-->\r\n<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"exchange-gift/list\">\r\n      <ion-icon name=\"mail\"></ion-icon>\r\n      <ion-label>Pedidos</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"car-repair/list\">\r\n      <ion-icon name=\"car\"></ion-icon>\r\n      <ion-label>Reparaciones</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"agency/list\">\r\n      <ion-icon name=\"business\"></ion-icon>\r\n      <ion-label>Agencias</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"gift/list\">\r\n      <ion-icon name=\"gift\"></ion-icon>\r\n      <ion-label>Regalos</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n\r\n");

/***/ }),

/***/ 3969:
/*!*****************************************************************************!*\
  !*** ./src/app/administrator/tab-administrator/tab-administrator.page.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "ion-label {\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi1hZG1pbmlzdHJhdG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FBQ0oiLCJmaWxlIjoidGFiLWFkbWluaXN0cmF0b3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVse1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_tab-administrator_tab-administrator_module_ts.js.map