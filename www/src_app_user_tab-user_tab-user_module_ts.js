"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user_tab-user_tab-user_module_ts"],{

/***/ 35803:
/*!**********************************************************!*\
  !*** ./src/app/user/tab-user/tab-user-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabUserPageRoutingModule": () => (/* binding */ TabUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _tab_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-user.page */ 38773);




const routes = [
    {
        path: '',
        component: _tab_user_page__WEBPACK_IMPORTED_MODULE_0__.TabUserPage,
        children: [
            //Agencia
            {
                path: 'agency',
                children: [
                    //Actualizar
                    {
                        path: 'update',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_user_agency_agency-update_agency-update_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../agency/agency-update/agency-update.module */ 96546)).then(m => m.AgencyUpdatePageModule)
                    }
                ]
            },
            //Reparaciones
            {
                path: 'car-repair',
                children: [
                    //Lista
                    {
                        path: 'list',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_car-repair_service_ts-src_app_services_date-time-service_service_ts"), __webpack_require__.e("default-src_app_user_carRepair_car-repair-update_car-repair-update_page_ts"), __webpack_require__.e("default-src_app_user_carRepair_car-repair-saw_car-repair-saw_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_user_carRepair_car-repair-list_car-repair-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../carRepair/car-repair-list/car-repair-list.module */ 32497)).then(m => m.CarRepairListPageModule)
                    },
                    //Crear
                    {
                        path: 'create',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_car-repair_service_ts-src_app_services_date-time-service_service_ts"), __webpack_require__.e("src_app_user_carRepair_car-repair-create_car-repair-create_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../carRepair/car-repair-create/car-repair-create.module */ 36353)).then(m => m.CarRepairCreatePageModule)
                    },
                    //Ver
                    {
                        path: 'saw',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_car-repair_service_ts-src_app_services_date-time-service_service_ts"), __webpack_require__.e("default-src_app_user_carRepair_car-repair-update_car-repair-update_page_ts"), __webpack_require__.e("default-src_app_user_carRepair_car-repair-saw_car-repair-saw_page_ts"), __webpack_require__.e("src_app_user_carRepair_car-repair-saw_car-repair-saw_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../carRepair/car-repair-saw/car-repair-saw.module */ 45884)).then(m => m.CarRepairSawPageModule)
                    },
                    //Actualizar
                    {
                        path: 'update',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_car-repair_service_ts-src_app_services_date-time-service_service_ts"), __webpack_require__.e("default-src_app_user_carRepair_car-repair-update_car-repair-update_page_ts"), __webpack_require__.e("src_app_user_carRepair_car-repair-update_car-repair-update_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../carRepair/car-repair-update/car-repair-update.module */ 21350)).then(m => m.CarRepairUpdatePageModule)
                    }
                ]
            },
            //Pedido
            {
                path: 'exchange-gift',
                children: [
                    //Lista
                    {
                        path: 'list',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_user_exchangeGift_exchange-gift-saw_exchange-gift-saw_page_ts"), __webpack_require__.e("src_app_user_exchangeGift_exchange-gift-list_exchange-gift-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../exchangeGift/exchange-gift-list/exchange-gift-list.module */ 71022)).then(m => m.ExchangeGiftListPageModule)
                    },
                    //Ver
                    {
                        path: 'saw',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_user_exchangeGift_exchange-gift-saw_exchange-gift-saw_page_ts"), __webpack_require__.e("src_app_user_exchangeGift_exchange-gift-saw_exchange-gift-saw_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../exchangeGift/exchange-gift-saw/exchange-gift-saw.module */ 42639)).then(m => m.ExchangeGiftSawPageModule)
                    }
                ]
            },
            //Regalos
            {
                path: 'gift',
                children: [
                    //Lista
                    {
                        path: 'list',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_user_gift_gift-saw_gift-saw_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_user_gift_gift-list_gift-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../gift/gift-list/gift-list.module */ 89344)).then(m => m.GiftListPageModule)
                    },
                    //Ver
                    {
                        path: 'saw',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_user_gift_gift-saw_gift-saw_page_ts"), __webpack_require__.e("src_app_user_gift_gift-saw_gift-saw_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../gift/gift-saw/gift-saw.module */ 96556)).then(m => m.GiftSawPageModule)
                    },
                ]
            },
            {
                path: '',
                redirectTo: 'list',
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
let TabUserPageRoutingModule = class TabUserPageRoutingModule {
};
TabUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabUserPageRoutingModule);



/***/ }),

/***/ 54075:
/*!**************************************************!*\
  !*** ./src/app/user/tab-user/tab-user.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabUserPageModule": () => (/* binding */ TabUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _tab_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-user-routing.module */ 35803);
/* harmony import */ var _tab_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-user.page */ 38773);







let TabUserPageModule = class TabUserPageModule {
};
TabUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabUserPageRoutingModule
        ],
        declarations: [_tab_user_page__WEBPACK_IMPORTED_MODULE_1__.TabUserPage]
    })
], TabUserPageModule);



/***/ }),

/***/ 38773:
/*!************************************************!*\
  !*** ./src/app/user/tab-user/tab-user.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabUserPage": () => (/* binding */ TabUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab_user_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab-user.page.html */ 10573);
/* harmony import */ var _tab_user_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-user.page.scss */ 77358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let TabUserPage = class TabUserPage {
    constructor() { }
    ngOnInit() {
    }
};
TabUserPage.ctorParameters = () => [];
TabUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab-user',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab_user_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab_user_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabUserPage);



/***/ }),

/***/ 10573:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/user/tab-user/tab-user.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\r\n  \r\n  <ion-tab-bar slot=\"bottom\" class=\"tab\">\r\n    <ion-tab-button tab=\"exchange-gift/list\">\r\n      <ion-icon name=\"mail\"></ion-icon>\r\n      <ion-label>Pedidos</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"car-repair/list\">\r\n      <ion-icon name=\"car\"></ion-icon>\r\n      <ion-label>Reparaciones</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"gift/list\">\r\n      <ion-icon name=\"gift\"></ion-icon>\r\n      <ion-label>Regalos</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n");

/***/ }),

/***/ 77358:
/*!**************************************************!*\
  !*** ./src/app/user/tab-user/tab-user.page.scss ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".tab {\n  background-color: #4083cc;\n}\n.tab ion-tab-button {\n  background-color: #4083cc;\n}\n.tab ion-tab-button ion-icon {\n  color: white;\n}\n.tab ion-tab-button ion-label {\n  color: white;\n}\nion-icon {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi11c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7QUFBSTtFQUNJLHlCQUFBO0FBRVI7QUFEUTtFQUNJLFlBQUE7QUFHWjtBQURRO0VBQ0ksWUFBQTtBQUdaO0FBRUU7RUFDRSxvQkFBQTtBQUNKIiwiZmlsZSI6InRhYi11c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA4M2NjO1xyXG4gICAgaW9uLXRhYi1idXR0b257XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQwODNjYztcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24taWNvbntcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_user_tab-user_tab-user_module_ts.js.map