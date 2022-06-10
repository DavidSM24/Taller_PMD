"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 35862:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-e8b767a8.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isRTL)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
const isRTL = (hostEl) => {
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};




/***/ }),

/***/ 93014:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-02bf7a99.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startFocusVisible": () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];
const startFocusVisible = (rootEl) => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = (rootEl) ? rootEl.shadowRoot : document;
  const root = (rootEl) ? rootEl : document.body;
  const setFocus = (elements) => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = (ev) => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = (ev) => {
    if (keyboardMode && ev.composedPath) {
      const toFocus = ev.composedPath().filter((el) => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);
  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};




/***/ }),

/***/ 18022:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-e3f61316.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ arrowBackSharp),
/* harmony export */   "b": () => (/* binding */ closeCircle),
/* harmony export */   "c": () => (/* binding */ chevronBack),
/* harmony export */   "d": () => (/* binding */ closeSharp),
/* harmony export */   "e": () => (/* binding */ searchSharp),
/* harmony export */   "f": () => (/* binding */ caretBackSharp),
/* harmony export */   "g": () => (/* binding */ arrowDown),
/* harmony export */   "h": () => (/* binding */ reorderTwoSharp),
/* harmony export */   "i": () => (/* binding */ chevronDown),
/* harmony export */   "j": () => (/* binding */ chevronForwardOutline),
/* harmony export */   "k": () => (/* binding */ ellipsisHorizontal),
/* harmony export */   "l": () => (/* binding */ chevronForward),
/* harmony export */   "m": () => (/* binding */ caretUpSharp),
/* harmony export */   "n": () => (/* binding */ caretDownSharp),
/* harmony export */   "o": () => (/* binding */ close),
/* harmony export */   "p": () => (/* binding */ menuOutline),
/* harmony export */   "q": () => (/* binding */ menuSharp),
/* harmony export */   "r": () => (/* binding */ reorderThreeOutline),
/* harmony export */   "s": () => (/* binding */ searchOutline)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/* Ionicons v6.0.0, ES Modules */
const arrowBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const close = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>";
const closeCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>";
const closeSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
const menuOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const menuSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>";
const reorderThreeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderTwoSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>";
const searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const searchSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";




/***/ }),

/***/ 24352:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2SearchPipeModule": () => (/* binding */ Ng2SearchPipeModule),
/* harmony export */   "Ng2SearchPipe": () => (/* binding */ Ng2SearchPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);



class Ng2SearchPipe {
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    transform(items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    }
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    static filter(items, term) {
        const /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (let /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    }
}
Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) { return new (t || Ng2SearchPipe)(); };
Ng2SearchPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: Ng2SearchPipe, pure: false });
Ng2SearchPipe.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Ng2SearchPipe, factory: Ng2SearchPipe.ɵfac });
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{
                name: 'filter',
                pure: false
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], null, null); })();

class Ng2SearchPipeModule {
}
Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) { return new (t || Ng2SearchPipeModule)(); };
Ng2SearchPipeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Ng2SearchPipeModule });
Ng2SearchPipeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, { declarations: [Ng2SearchPipe], exports: [Ng2SearchPipe] }); })();

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 57879:
/*!************************************************************************************!*\
  !*** ./src/app/administrator/agency/agency-update/agency-update-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencyUpdatePageRoutingModule": () => (/* binding */ AgencyUpdatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _agency_update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agency-update.page */ 22483);




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

/***/ 77264:
/*!****************************************************************************!*\
  !*** ./src/app/administrator/agency/agency-update/agency-update.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencyUpdatePageModule": () => (/* binding */ AgencyUpdatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _agency_update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agency-update-routing.module */ 57879);
/* harmony import */ var _services_agency_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/agency.service */ 99574);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/util.service */ 371);







let AgencyUpdatePageModule = class AgencyUpdatePageModule {
};
AgencyUpdatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _agency_update_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgencyUpdatePageRoutingModule
        ],
        providers: [_services_agency_service__WEBPACK_IMPORTED_MODULE_1__.AgencyService, _services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService],
        declarations: []
    })
], AgencyUpdatePageModule);



/***/ }),

/***/ 52776:
/*!*****************************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-saw/car-repair-saw-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairSawPageRoutingModule": () => (/* binding */ CarRepairSawPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _car_repair_saw_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-repair-saw.page */ 37584);




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

/***/ 56589:
/*!*********************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-saw/car-repair-saw.module.ts ***!
  \*********************************************************************************/
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
/* harmony import */ var _car_repair_saw_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-repair-saw-routing.module */ 52776);
/* harmony import */ var _car_repair_saw_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-repair-saw.page */ 37584);
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



/***/ }),

/***/ 82369:
/*!***********************************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-update/car-repair-update-routing.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairUpdatePageRoutingModule": () => (/* binding */ CarRepairUpdatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _car_repair_update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-repair-update.page */ 53022);




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

/***/ 42529:
/*!***************************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-update/car-repair-update.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairUpdatePageModule": () => (/* binding */ CarRepairUpdatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _car_repair_update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-repair-update-routing.module */ 82369);
/* harmony import */ var _car_repair_update_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-repair-update.page */ 53022);
/* harmony import */ var src_app_services_car_repair_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/car-repair.service */ 7928);
/* harmony import */ var src_app_components_date_time_pickup_date_time_pickup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/date-time-pickup/date-time-pickup.component */ 21944);









let CarRepairUpdatePageModule = class CarRepairUpdatePageModule {
};
CarRepairUpdatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _car_repair_update_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarRepairUpdatePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        providers: [
            src_app_services_car_repair_service__WEBPACK_IMPORTED_MODULE_2__.CarRepairService
        ],
        declarations: [
            _car_repair_update_page__WEBPACK_IMPORTED_MODULE_1__.CarRepairUpdatePage,
            src_app_components_date_time_pickup_date_time_pickup_component__WEBPACK_IMPORTED_MODULE_3__.DateTimePickupComponent
        ]
    })
], CarRepairUpdatePageModule);



/***/ }),

/***/ 12115:
/*!*****************************************************************************!*\
  !*** ./src/app/administrator/company/company-update/company-update.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyUpdatePage": () => (/* binding */ CompanyUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_company_update_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./company-update.page.html */ 31655);
/* harmony import */ var _company_update_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-update.page.scss */ 13987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_insurance_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/insurance-company.service */ 37639);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 371);
/* harmony import */ var _services_agency_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/agency.service */ 99574);









let CompanyUpdatePage = class CompanyUpdatePage {
    constructor(cs, fb, uts, modalCtrl, as) {
        this.cs = cs;
        this.fb = fb;
        this.uts = uts;
        this.modalCtrl = modalCtrl;
        this.as = as;
    }
    ngOnInit() {
        this.formCompany = this.fb.group({
            name: [this.company.cia_Name, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)]]
        });
    }
    create() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.uts.presentLoading();
            let editCompany = {
                id: this.company.id,
                cia_Name: this.formCompany.get("name").value
            };
            editCompany = yield this.cs.createOrUpdate(editCompany);
            if (editCompany) {
                this.as.added = true;
                this.formCompany.reset();
                this.uts.presentToast('La compañía se ha modificado correctamente.', 'success', "checkmark-circle-outline");
            }
            else {
                this.uts.presentToast('Un error ha surgido al intentar modificar la compañía.', 'danger', 'ban');
                editCompany = null;
            }
            yield this.uts.hideLoading();
            if (editCompany) {
                this.modalCtrl.dismiss({
                    newCompany: editCompany
                });
            }
            else
                this.modalCtrl.dismiss();
        });
    }
    close() {
        this.modalCtrl.dismiss();
    }
};
CompanyUpdatePage.ctorParameters = () => [
    { type: src_app_services_insurance_company_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceCompanyService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _services_agency_service__WEBPACK_IMPORTED_MODULE_4__.AgencyService }
];
CompanyUpdatePage.propDecorators = {
    company: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
CompanyUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-company-update',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_company_update_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_company_update_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CompanyUpdatePage);



/***/ }),

/***/ 83305:
/*!************************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gif-saw/exchange-gif-saw-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGifSawPageRoutingModule": () => (/* binding */ ExchangeGifSawPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _exchange_gif_saw_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchange-gif-saw.page */ 71549);




const routes = [
    {
        path: '',
        component: _exchange_gif_saw_page__WEBPACK_IMPORTED_MODULE_0__.ExchangeGifSawPage
    }
];
let ExchangeGifSawPageRoutingModule = class ExchangeGifSawPageRoutingModule {
};
ExchangeGifSawPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExchangeGifSawPageRoutingModule);



/***/ }),

/***/ 82142:
/*!****************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gif-saw/exchange-gif-saw.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGifSawPageModule": () => (/* binding */ ExchangeGifSawPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _exchange_gif_saw_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchange-gif-saw-routing.module */ 83305);





let ExchangeGifSawPageModule = class ExchangeGifSawPageModule {
};
ExchangeGifSawPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _exchange_gif_saw_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExchangeGifSawPageRoutingModule
        ],
        declarations: []
    })
], ExchangeGifSawPageModule);



/***/ }),

/***/ 71549:
/*!**************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gif-saw/exchange-gif-saw.page.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGifSawPage": () => (/* binding */ ExchangeGifSawPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exchange_gif_saw_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./exchange-gif-saw.page.html */ 32229);
/* harmony import */ var _exchange_gif_saw_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchange-gif-saw.page.scss */ 7066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);





let ExchangeGifSawPage = class ExchangeGifSawPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
        this.img = this.exchangesaw.gift.picture;
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.img = "https://res.cloudinary.com/duq0pz1vi/image/upload/v1645471738/" + this.exchangesaw.gift.picture;
        });
    }
    close() {
        this.modalCtrl.dismiss();
    }
};
ExchangeGifSawPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
ExchangeGifSawPage.propDecorators = {
    exchangesaw: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ExchangeGifSawPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-exchange-gif-saw',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_exchange_gif_saw_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_exchange_gif_saw_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExchangeGifSawPage);



/***/ }),

/***/ 98697:
/*!******************************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gif-update/exchange-gif-update-routing.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGifUpdatePageRoutingModule": () => (/* binding */ ExchangeGifUpdatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _exchange_gif_update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchange-gif-update.page */ 48667);




const routes = [
    {
        path: '',
        component: _exchange_gif_update_page__WEBPACK_IMPORTED_MODULE_0__.ExchangeGifUpdatePage
    }
];
let ExchangeGifUpdatePageRoutingModule = class ExchangeGifUpdatePageRoutingModule {
};
ExchangeGifUpdatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExchangeGifUpdatePageRoutingModule);



/***/ }),

/***/ 39890:
/*!**********************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gif-update/exchange-gif-update.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGifUpdatePageModule": () => (/* binding */ ExchangeGifUpdatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _exchange_gif_update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchange-gif-update-routing.module */ 98697);





let ExchangeGifUpdatePageModule = class ExchangeGifUpdatePageModule {
};
ExchangeGifUpdatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _exchange_gif_update_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExchangeGifUpdatePageRoutingModule
        ],
        declarations: []
    })
], ExchangeGifUpdatePageModule);



/***/ }),

/***/ 86971:
/*!****************************************************************************!*\
  !*** ./src/app/administrator/gift/gif-update/gif-update-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifUpdatePageRoutingModule": () => (/* binding */ GifUpdatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _gif_update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gif-update.page */ 76667);




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

/***/ 68458:
/*!********************************************************************!*\
  !*** ./src/app/administrator/gift/gif-update/gif-update.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifUpdatePageModule": () => (/* binding */ GifUpdatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _gif_update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gif-update-routing.module */ 86971);






let GifUpdatePageModule = class GifUpdatePageModule {
};
GifUpdatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _gif_update_routing_module__WEBPACK_IMPORTED_MODULE_0__.GifUpdatePageRoutingModule
        ],
        declarations: []
    })
], GifUpdatePageModule);



/***/ }),

/***/ 29101:
/*!********************************************************************!*\
  !*** ./src/app/administrator/user/user-update/user-update.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserUpdatePage": () => (/* binding */ UserUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_update_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-update.page.html */ 43731);
/* harmony import */ var _user_update_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-update.page.scss */ 67547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 77524);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/util.service */ 371);








let UserUpdatePage = class UserUpdatePage {
    constructor(modalCtrl, uts, userv, fb) {
        this.modalCtrl = modalCtrl;
        this.uts = uts;
        this.userv = userv;
        this.fb = fb;
    }
    ngOnInit() {
        try {
            this.formEditUser = this.fb.group({
                code: [this.user.code, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("[0-9]{1,3}")]],
                password: [this.user.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{5,10}$")]],
                email: [this.user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(50)]],
                name: [this.user.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(100)]]
            });
        }
        catch (error) {
        }
    }
    EditUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.uts.presentLoading();
            let userCode = null;
            if (this.formEditUser.get('code').value != this.user.code) {
                userCode = yield this.userv.getByCode(this.formEditUser.get('code').value);
            }
            if (!userCode) {
                let userEditado = {
                    id: this.user.id,
                    code: this.formEditUser.get("code").value,
                    password: this.formEditUser.get("password").value,
                    administrator: this.toggle.checked,
                    email: this.formEditUser.get("email").value,
                    name: this.formEditUser.get("name").value
                };
                userEditado = yield this.userv.createOrUpdate(userEditado);
                if (userEditado != null)
                    this.modalCtrl.dismiss({
                        newUser: userEditado
                    });
                else {
                    this.modalCtrl.dismiss();
                    this.uts.presentToast("Ha habido un error al modificar el usuario. Compruebe longitud: código (<=3), contraseña: (<=10).", "danger", 'ban');
                }
            }
            else
                this.uts.presentToast("Ya existe un usuario con este código. Prueba con otro diferente.", "danger", "ban");
            this.uts.hideLoading();
        });
    }
    close() {
        this.modalCtrl.dismiss();
    }
};
UserUpdatePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
UserUpdatePage.propDecorators = {
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToggle,] }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
UserUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-user-update',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_update_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_update_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserUpdatePage);



/***/ }),

/***/ 21944:
/*!***************************************************************************!*\
  !*** ./src/app/components/date-time-pickup/date-time-pickup.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTimePickupComponent": () => (/* binding */ DateTimePickupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_date_time_pickup_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./date-time-pickup.component.html */ 23875);
/* harmony import */ var _date_time_pickup_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-time-pickup.component.scss */ 26473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 57366);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 52498);






let DateTimePickupComponent = class DateTimePickupComponent {
    constructor() {
        this.type = 'date';
        this.min = "2022-03-09";
        this.max = "2050-12-31";
        this.value = new Date(Date.now()).toISOString();
        this.datePickerValue = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.dateValue = '';
    }
    ngOnInit() {
    }
    confirm() {
        this.datetime.confirm(true);
    }
    reset() {
        this.datetime.reset();
    }
    formatDate(value, date_format = 'dd MMM yyyy:mm:SS') {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(value), date_format);
    }
    change(value) {
        this.dateValue = this.formatDate(value, this.date_format);
        this.datePickerValue.emit(this.dateValue);
    }
};
DateTimePickupComponent.ctorParameters = () => [];
DateTimePickupComponent.propDecorators = {
    datetime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonDatetime,] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    date_format: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    datePickerValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
DateTimePickupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-date-time-pickup',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_date_time_pickup_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_date_time_pickup_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DateTimePickupComponent);



/***/ }),

/***/ 31655:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/company/company-update/company-update.page.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      {{\"Modificando la compañía de Seguros \"+ this.company.cia_Name}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <div class=\"body\">\r\n\r\n    <form [formGroup]=\"formCompany\" class=\"ion-padding\">\r\n      <div class=\"formulario\">\r\n      <ion-grid>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n            <ion-label>Nombre CIA:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10\" sizeLg=\"10\">\r\n            <ion-input type=\"text\" class=\"customInput\" formControlName=\"name\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.formCompany.get('name').invalid&&formCompany.get('name').touched\">\r\n              *Campo obligatorio. Debe introducir entre 3 y 50 caracteres.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" (click)=\"close()\" class=\"button\">\r\n              Cancelar\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" (click)=\"create()\" class=\"button\" [disabled]=\"this.formCompany.invalid\">\r\n              Editar\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    </form>\r\n\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 32229:
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/exchangeGift/exchange-gif-saw/exchange-gif-saw.page.html ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Visualizacion de Pedido\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" >\r\n  <div class=\"body\">\r\n    <div class=\"ion-padding\">\r\n      <div class=\"center\">\r\n        <ion-card>\r\n          <ion-img  [src]=\"this.img\"></ion-img>\r\n        </ion-card>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"ion-padding\">\r\n      <div class=\"formulario\">\r\n        <ion-grid>\r\n\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col sizeLg=\"5\" sizeXs=\"6.5\">\r\n              <ion-label>Fecha de Intercambio: </ion-label>\r\n            </ion-col>\r\n            <div>\r\n              <ion-text>\r\n                {{this.exchangesaw.dateExchange}}\r\n              </ion-text>\r\n              </div>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col sizeLg=\"5\" sizeXs=\"6.5\">\r\n              <ion-label>Observaciones: </ion-label>\r\n            </ion-col>\r\n            <div>\r\n            <ion-text>\r\n              {{this.exchangesaw.observations}}\r\n            </ion-text>\r\n           </div>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col sizeLg=\"5\" sizeXs=\"6.5\">\r\n              Entregado: \r\n            </ion-col>\r\n              <div>\r\n                <ion-col *ngIf=\"this.exchangesaw.delivered\">\r\n                  <ion-text>\r\n                Si\r\n                  </ion-text>\r\n                </ion-col>\r\n\r\n                <ion-col *ngIf=\"!this.exchangesaw.delivered\">\r\n                  <ion-text>\r\n                No\r\n                  </ion-text>\r\n                </ion-col>\r\n            </div>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col sizeLg=\"5\" sizeXs=\"6.5\">\r\n              <ion-label>Agencia:</ion-label>\r\n            </ion-col>\r\n            <div>\r\n              <ion-text>\r\n                {{this.exchangesaw.agency.myInsuranceCompany.cia_Name}} - {{this.exchangesaw.agency.location}}\r\n              </ion-text>\r\n              </div>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col sizeLg=\"5\" sizeXs=\"6.5\" >\r\n              <ion-label>Puntos:</ion-label>\r\n            </ion-col>\r\n            <div>\r\n              <ion-text>\r\n                {{this.exchangesaw.gift.points}}\r\n              </ion-text>\r\n              </div>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"12\">\r\n              <ion-button (click)=\"close()\" expand=\"block\" shape=\"round\"  style=\"margin-top: 2% !important;\" class=\"button\">\r\n                Cerrar Visualizacion\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 43731:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/user/user-update/user-update.page.html ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Editar Usuario\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"body\">\r\n    <form [formGroup]=\"formEditUser\" class=\"ion-padding\">\r\n      <div class=\"formulario\">\r\n      <ion-grid>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Code:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"number\" formControlName=\"code\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.formEditUser.get('code').invalid&&formEditUser.get('code').touched\">\r\n              *Campo obligatorio. El código zip debe tener una longitud exacta de 3 caracteres.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Contraseña:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"password\" formControlName=\"password\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.formEditUser.get('password').invalid&&formEditUser.get('password').touched\">\r\n              *La contraseña debe contener entre 5 y 10 caracteres, incluyendo una minúsucla, mayúscula, número y símbolo.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"9\" sizeLg=\"1\">\r\n            Administrador:\r\n          </ion-col>\r\n          <ion-col sizeSm=\"3\" sizeLg=\"11  \">\r\n            <ion-item  lines=\"none\">\r\n              No<ion-toggle [checked]=\"user.administrator\"></ion-toggle>Si\r\n           </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Email:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"text\" formControlName=\"email\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.formEditUser.get('email').invalid&&formEditUser.get('email').touched\">\r\n              *Campo obligatorio. Debe introducir un formato de correo válido. Longitud de 4 a 50 caracteres.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Name:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"text\" formControlName=\"name\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.formEditUser.get('name').invalid&&formEditUser.get('name').touched\">\r\n              *Campo obligatorio. Debe introducir entre 3 y 100 caracteres.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" shape=\"round\" class=\"button\" (click)=\"close()\" style=\"margin-top: 2% !important;\">\r\n              Volver\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"6\">\r\n            <ion-button (click)=\"EditUser()\" expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" class=\"button\" [disabled]=\"this.formEditUser.invalid\">\r\n              Editar Usuario\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      </ion-grid>\r\n    </div>\r\n    </form>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 23875:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/date-time-pickup/date-time-pickup.component.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-datetime \r\n#datetime\r\n[value]=\"value\"\r\n(ionChange)=\"change(datetime.value)\"\r\n value=\"2022-03-09T13:47:20.789\"\r\n[presentation]=\"type\"\r\n[min]=\"min\"\r\n[max]=\"max\"\r\n></ion-datetime>\r\n");

/***/ }),

/***/ 13987:
/*!*******************************************************************************!*\
  !*** ./src/app/administrator/company/company-update/company-update.page.scss ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n\n.button {\n  --background: #22388c;\n}\n\n.customInput {\n  border: 1px solid gray;\n  border-color: \"primary\";\n  border-radius: 0.6rem;\n}\n\nion-input.ng-invalid.ng-touched {\n  border-left: 5px solid #a94442;\n  border-right: 5px solid #a94442;\n}\n\nion-input.ng-valid.ng-dirty {\n  border-left: 5px solid #42A948;\n  border-right: 5px solid #42A948;\n}\n\nselect.ng-invalid.ng-touched {\n  border-left: 5px solid #a94442;\n  border-right: 5px solid #a94442;\n}\n\nselect.ng-valid.ng-dirty {\n  border-left: 5px solid #42A948;\n  border-right: 5px solid #42A948;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnktdXBkYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUdBO0VBQ0UscUJBQUE7QUFBRjs7QUFHQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQUFGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUNBO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQUVGOztBQUFBO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQUdGIiwiZmlsZSI6ImNvbXBhbnktdXBkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gIGJhY2tncm91bmQ6ICM3MTc0OTk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbntcclxuICAtLWJhY2tncm91bmQ6ICMyMjM4OGM7XHJcbn1cclxuXHJcbi5jdXN0b21JbnB1dHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1jb2xvcjogXCJwcmltYXJ5XCI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xyXG59XHJcblxyXG5pb24taW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7XHJcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgI2E5NDQ0MjtcclxufVxyXG5pb24taW5wdXQubmctdmFsaWQubmctZGlydHkge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODtcclxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xyXG59XHJcbnNlbGVjdC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjtcclxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG59XHJcbnNlbGVjdC5uZy12YWxpZC5uZy1kaXJ0eSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICM0MkE5NDg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 7066:
/*!****************************************************************************************!*\
  !*** ./src/app/administrator/exchangeGift/exchange-gif-saw/exchange-gif-saw.page.scss ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n.body ion-card {\n  height: 25%;\n  width: 25%;\n}\n.body ion-card ion-img {\n  border: 0.1cm solid black;\n}\n.formulario {\n  margin: 1.5rem;\n}\n.button {\n  --background: #22388c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2hhbmdlLWdpZi1zYXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBQ0o7QUFBSTtFQUNFLHlCQUFBO0FBRU47QUFJQTtFQUNFLGNBQUE7QUFERjtBQUlBO0VBQ0UscUJBQUE7QUFERiIsImZpbGUiOiJleGNoYW5nZS1naWYtc2F3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gIGJhY2tncm91bmQ6ICM3MTc0OTk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG5cclxuICBpb24tY2FyZHtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGlvbi1pbWd7XHJcbiAgICAgIGJvcmRlcjogMC4xMGNtIHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5mb3JtdWxhcmlve1xyXG4gIG1hcmdpbjogMS41cmVtO1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gIC0tYmFja2dyb3VuZDogIzIyMzg4YztcclxufVxyXG5cclxuIl19 */";

/***/ }),

/***/ 67547:
/*!**********************************************************************!*\
  !*** ./src/app/administrator/user/user-update/user-update.page.scss ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n\n.button {\n  --background: #22388c;\n}\n\nion-input.ng-invalid.ng-touched {\n  border-left: 5px solid #a94442;\n  border-right: 5px solid #a94442;\n}\n\nion-input.ng-valid.ng-dirty {\n  border-left: 5px solid #42A948;\n  border-right: 5px solid #42A948;\n}\n\nselect.ng-invalid.ng-touched {\n  border-left: 5px solid #a94442;\n  border-right: 5px solid #a94442;\n}\n\nselect.ng-valid.ng-dirty {\n  border-left: 5px solid #42A948;\n  border-right: 5px solid #42A948;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItdXBkYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFDQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFFRjs7QUFBQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFHRjs7QUFEQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFJRiIsImZpbGUiOiJ1c2VyLXVwZGF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcclxuICAgIGJhY2tncm91bmQ6ICM3MTc0OTk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogIzIyMzg4YztcclxufVxyXG5cclxuaW9uLWlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNhOTQ0NDI7XHJcbn1cclxuaW9uLWlucHV0Lm5nLXZhbGlkLm5nLWRpcnR5IHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7XHJcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzQyQTk0ODtcclxufVxyXG5zZWxlY3QubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7XHJcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgI2E5NDQ0MjtcclxufVxyXG5zZWxlY3QubmctdmFsaWQubmctZGlydHkge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODtcclxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 26473:
/*!*****************************************************************************!*\
  !*** ./src/app/components/date-time-pickup/date-time-pickup.component.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRlLXRpbWUtcGlja3VwLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=common.js.map