(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 9483)).then(m => m.TabsPageModule)
    },
    {
        path: 'tab4',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab4_tab4_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tab4/tab4.module */ 2379)).then(m => m.Tab4PageModule)
    },
    {
        path: 'tab5',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab5_tab5_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tab5/tab5.module */ 1853)).then(m => m.Tab5PageModule)
    },
    {
        path: 'tab6',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab6_tab6_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tab6/tab6.module */ 3846)).then(m => m.Tab6PageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 9549)).then(m => m.LoginPageModule)
    },
    {
        path: 'agency-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_administrator_agency_agency-list_agency-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/agency/agency-list/agency-list.module */ 9947)).then(m => m.AgencyListPageModule)
    },
    {
        path: 'agency-saw',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_agency_agency-saw_agency-saw_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/agency/agency-saw/agency-saw.module */ 879)).then(m => m.AgencySawPageModule)
    },
    {
        path: 'agency-update',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_administrator_agency_agency-update_agency-update_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/agency/agency-update/agency-update.module */ 7264)).then(m => m.AgencyUpdatePageModule)
    },
    {
        path: 'agency-create',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_agency_agency-create_agency-create_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/agency/agency-create/agency-create.module */ 8333)).then(m => m.AgencyCreatePageModule)
    },
    {
        path: 'gif-create',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_gift_gif-create_gif-create_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/gift/gif-create/gif-create.module */ 4844)).then(m => m.GifCreatePageModule)
    },
    {
        path: 'gif-saw',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_gift_gif-saw_gif-saw_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/gift/gif-saw/gif-saw.module */ 2728)).then(m => m.GifSawPageModule)
    },
    {
        path: 'gif-update',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_administrator_gift_gif-update_gif-update_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/gift/gif-update/gif-update.module */ 8458)).then(m => m.GifUpdatePageModule)
    },
    {
        path: 'gif-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_administrator_gift_gif-list_gif-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/gift/gif-list/gif-list.module */ 1789)).then(m => m.GifListPageModule)
    },
    {
        path: 'car-repair-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_carRepair_car-repair-list_car-repair-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/carRepair/car-repair-list/car-repair-list.module */ 2225)).then(m => m.CarRepairListPageModule)
    },
    {
        path: 'car-repair-saw',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_carRepair_car-repair-saw_car-repair-saw_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/carRepair/car-repair-saw/car-repair-saw.module */ 6589)).then(m => m.CarRepairSawPageModule)
    },
    {
        path: 'car-repair-update',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_carRepair_car-repair-update_car-repair-update_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/carRepair/car-repair-update/car-repair-update.module */ 2529)).then(m => m.CarRepairUpdatePageModule)
    },
    {
        path: 'car-repair-create',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_carRepair_car-repair-create_car-repair-create_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/carRepair/car-repair-create/car-repair-create.module */ 8189)).then(m => m.CarRepairCreatePageModule)
    },
    {
        path: 'exchange-gift-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_exchangeGift_exchange-gift-list_exchange-gift-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/exchangeGift/exchange-gift-list/exchange-gift-list.module */ 6243)).then(m => m.ExchangeGiftListPageModule)
    },
    {
        path: 'exchange-gif-update',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_exchangeGift_exchange-gif-update_exchange-gif-update_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/exchangeGift/exchange-gif-update/exchange-gif-update.module */ 9890)).then(m => m.ExchangeGifUpdatePageModule)
    },
    {
        path: 'exchange-gif-saw',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_exchangeGift_exchange-gif-saw_exchange-gif-saw_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/exchangeGift/exchange-gif-saw/exchange-gif-saw.module */ 2142)).then(m => m.ExchangeGifSawPageModule)
    },
    {
        path: 'exchange-gif-create',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_exchangeGift_exchange-gif-create_exchange-gif-create_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/exchangeGift/exchange-gif-create/exchange-gif-create.module */ 5017)).then(m => m.ExchangeGifCreatePageModule)
    },
    {
        path: 'tab-administrator',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_tab-administrator_tab-administrator_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/tab-administrator/tab-administrator.module */ 4922)).then(m => m.TabAdministratorPageModule)
    },
    {
        path: '**',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 9549)).then(m => m.LoginPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _services_nav_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/nav-control.service */ 6845);









let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }, _services_nav_control_service__WEBPACK_IMPORTED_MODULE_2__.NavControlService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 6845:
/*!*************************************************!*\
  !*** ./src/app/services/nav-control.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavControlService": () => (/* binding */ NavControlService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


let NavControlService = class NavControlService {
    constructor() {
        this._isEnable4thButton = false;
    }
    enable4thButton() {
        this._isEnable4thButton = true;
    }
    disable4thButton() {
        this._isEnable4thButton = false;
    }
    get isEnable4thButton() {
        return this._isEnable4thButton;
    }
};
NavControlService.ctorParameters = () => [];
NavControlService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], NavControlService);



/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    herokuConfig: {
        url: "https://talleraadd.herokuapp.com"
    }
};


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		3477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		7196,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		8081,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		5397,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		9216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		6612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		2694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		2938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		1379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		7552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		7218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		7479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		1439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		6397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		2413,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		9411,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		9003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		6991,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2947,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		5919,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		9459,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		2140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		6197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		8387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		8659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		6404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		5253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		2871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7668,
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		5342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		6185,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		7463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map