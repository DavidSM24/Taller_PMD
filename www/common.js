"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 5862:
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

/***/ 3014:
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

/***/ 8022:
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _agency_update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agency-update-routing.module */ 7879);
/* harmony import */ var _agency_update_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agency-update.page */ 2483);
/* harmony import */ var _services_agency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/agency.service */ 9574);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/util.service */ 371);
/* harmony import */ var src_app_services_insurance_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/insurance-company.service */ 7639);










let AgencyUpdatePageModule = class AgencyUpdatePageModule {
};
AgencyUpdatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _agency_update_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgencyUpdatePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            src_app_services_insurance_company_service__WEBPACK_IMPORTED_MODULE_4__.InsuranceCompanyService
        ],
        providers: [_services_agency_service__WEBPACK_IMPORTED_MODULE_2__.AgencyService, _services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService, src_app_services_insurance_company_service__WEBPACK_IMPORTED_MODULE_4__.InsuranceCompanyService],
        declarations: [_agency_update_page__WEBPACK_IMPORTED_MODULE_1__.AgencyUpdatePage]
    })
], AgencyUpdatePageModule);



/***/ }),

/***/ 7573:
/*!****************************************************************************!*\
  !*** ./src/app/administrator/gift/gif-create/gif-create-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifCreatePageRoutingModule": () => (/* binding */ GifCreatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _gif_create_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gif-create.page */ 6196);




const routes = [
    {
        path: '',
        component: _gif_create_page__WEBPACK_IMPORTED_MODULE_0__.GifCreatePage
    }
];
let GifCreatePageRoutingModule = class GifCreatePageRoutingModule {
};
GifCreatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GifCreatePageRoutingModule);



/***/ }),

/***/ 4844:
/*!********************************************************************!*\
  !*** ./src/app/administrator/gift/gif-create/gif-create.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifCreatePageModule": () => (/* binding */ GifCreatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _gif_create_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gif-create-routing.module */ 7573);
/* harmony import */ var _gif_create_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gif-create.page */ 6196);
/* harmony import */ var _services_gift_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/gift.service */ 4483);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/util.service */ 371);









let GifCreatePageModule = class GifCreatePageModule {
};
GifCreatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _gif_create_routing_module__WEBPACK_IMPORTED_MODULE_0__.GifCreatePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        providers: [_services_gift_service__WEBPACK_IMPORTED_MODULE_2__.GiftService, _services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService],
        declarations: [_gif_create_page__WEBPACK_IMPORTED_MODULE_1__.GifCreatePage]
    })
], GifCreatePageModule);



/***/ }),

/***/ 6196:
/*!******************************************************************!*\
  !*** ./src/app/administrator/gift/gif-create/gif-create.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifCreatePage": () => (/* binding */ GifCreatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gif_create_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./gif-create.page.html */ 3351);
/* harmony import */ var _gif_create_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gif-create.page.scss */ 3357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_services_gift_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/gift.service */ 4483);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 371);








let GifCreatePage = class GifCreatePage {
    constructor(gs, fb, uts) {
        this.gs = gs;
        this.fb = fb;
        this.uts = uts;
        this.file = null;
        this.formGift = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            points: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
    }
    create() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.uts.presentLoading();
            if (this.extension) {
                if (this.extension == ("image/jpg")
                    || this.extension == ("image/jpeg")
                    || this.extension == "image/png") {
                    console.log("entro?");
                    let newGift = {
                        name: this.formGift.get("name").value,
                        points: this.formGift.get("points").value,
                        available: this.toggle.checked,
                        picture: '',
                        exchangeGifts: []
                    };
                    newGift = yield this.gs.createOrUpdate(newGift, this.file);
                    if (newGift.id) {
                        this.formGift.reset();
                        this.uts.presentToast('El regalo se ha creado correctamente.', 'success');
                    }
                    else {
                        this.uts.presentToast('Un error ha surgido al intentar crear el regalo.', 'danger');
                    }
                }
            }
            this.uts.hideLoading();
        });
    }
    test_Update() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let toDrop = yield this.gs.getAll();
            let last = toDrop[toDrop.length - 1];
            last.name = "hola1";
            console.log(last);
            if (toDrop != null) {
                last = yield this.gs.createOrUpdate(last, this.file);
                console.log(last);
                this.img = "https://res.cloudinary.com/duq0pz1vi/image/upload/v1645471738/" + last.picture;
            }
        });
    }
    test_Delete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let toDrop = yield this.gs.getAll();
            let last = toDrop[toDrop.length - 1];
            console.log(last);
            if (toDrop != null) {
                console.log(yield this.gs.delete(last));
            }
        });
    }
    changeListener($event) {
        try {
            if ($event) {
                let extension = $event.target.files[0].type.toString();
                if (extension == ("image/jpeg")
                    || extension == ("image/png")) {
                    this.file = $event.target.files[0];
                    this.extension = this.file.type;
                }
                else {
                    this.file = null;
                }
            }
        }
        catch (error) {
            //alert
            this.file = null;
        }
        console.log(this.file.type);
    }
};
GifCreatePage.ctorParameters = () => [
    { type: src_app_services_gift_service__WEBPACK_IMPORTED_MODULE_2__.GiftService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService }
];
GifCreatePage.propDecorators = {
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToggle,] }]
};
GifCreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-gif-create',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gif_create_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_gif_create_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GifCreatePage);



/***/ }),

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



/***/ }),

/***/ 6667:
/*!******************************************************************!*\
  !*** ./src/app/administrator/gift/gif-update/gif-update.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifUpdatePage": () => (/* binding */ GifUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gif_update_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./gif-update.page.html */ 881);
/* harmony import */ var _gif_update_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gif-update.page.scss */ 5795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let GifUpdatePage = class GifUpdatePage {
    constructor() { }
    ngOnInit() {
    }
};
GifUpdatePage.ctorParameters = () => [];
GifUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-gif-update',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gif_update_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_gif_update_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GifUpdatePage);



/***/ }),

/***/ 4551:
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponent": () => (/* binding */ ExploreContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_explore_container_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./explore-container.component.html */ 9651);
/* harmony import */ var _explore_container_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-container.component.scss */ 6732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);




let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ExploreContainerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-explore-container',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_explore_container_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_explore_container_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExploreContainerComponent);



/***/ }),

/***/ 456:
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponentModule": () => (/* binding */ ExploreContainerComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component */ 4551);






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ 63:
/*!***************************************************!*\
  !*** ./src/app/services/exchange-gift.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeGiftService": () => (/* binding */ ExchangeGiftService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);




let ExchangeGiftService = class ExchangeGiftService {
    constructor(http) {
        this.http = http;
        this.endpoint = "/exchangegift";
        this.URLDatabase = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.herokuConfig.url;
    }
    getListData(endpoint) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let users = [];
            return new Promise(resolve => {
                this.http.get(endpoint).subscribe((data) => {
                    if (data != null && data.length > 0) {
                        for (let miexgift of data) {
                            const tmp = {
                                id: miexgift.id,
                                dateEchange: miexgift.dateEchange,
                                observations: miexgift.observations,
                                isDelivered: miexgift.isDelivered,
                                agency: miexgift.agency,
                                gift: miexgift.gift
                            };
                            users.push(tmp);
                        }
                    }
                    console.log(data);
                    resolve(users);
                }, error => {
                    console.log(error);
                });
            });
        });
    }
    getAllPaged(element, page) {
        return this.getListData(this.URLDatabase + this.endpoint + "/element/" + element + "/page/" + page);
    }
    getAll() {
        return this.getListData(this.URLDatabase + this.endpoint);
    }
    getById(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let exchangegift = null;
            return new Promise(resolve => {
                this.http.get(this.URLDatabase + this.endpoint + "/id/" + id).subscribe((miexgift) => {
                    if (miexgift.id) {
                        const tmp = {
                            id: miexgift.id,
                            dateEchange: miexgift.dateEchange,
                            observations: miexgift.observations,
                            isDelivered: miexgift.isDelivered,
                            agency: miexgift.agency,
                            gift: miexgift.gift
                        };
                        exchangegift = tmp;
                    }
                    console.log(exchangegift);
                    resolve(exchangegift);
                }, error => {
                    console.log(error);
                    console.log(exchangegift);
                    resolve(exchangegift);
                });
            });
        });
    }
    getByDeliveredPaged(delivered, element, page) {
        return this.getListData(this.URLDatabase + this.endpoint + "/delivered/" + delivered + "/element/" + element + "/page/" + page);
    }
    getByAgencyPaged(agency, element, page) {
        if (agency != null) {
            return this.getListData(this.URLDatabase + this.endpoint + "/id_agency/" + agency.id + "/element/" + element + "/page/" + page);
        }
        else {
            let result;
            return result;
        }
    }
    createOrUpdate(exgift) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (exgift != null) {
                const body = exgift;
                return new Promise(resolve => {
                    this.http.post(this.URLDatabase + this.endpoint, body).subscribe((miexgift) => {
                        let result = {
                            id: miexgift.id,
                            dateEchange: miexgift.dateEchange,
                            observations: miexgift.observations,
                            isDelivered: miexgift.isDelivered,
                            agency: miexgift.agency,
                            gift: miexgift.gift
                        };
                        resolve(result);
                    }, error => {
                        console.log(error);
                        resolve(exgift);
                    });
                });
            }
        });
    }
    delete(exgift) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                this.http.delete(this.URLDatabase + this.endpoint, { body: exgift }).subscribe(() => {
                    resolve(true);
                }, error => {
                    console.log(error);
                    resolve(false);
                });
            });
        });
    }
};
ExchangeGiftService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
ExchangeGiftService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ExchangeGiftService);



/***/ }),

/***/ 4483:
/*!******************************************!*\
  !*** ./src/app/services/gift.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftService": () => (/* binding */ GiftService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);




let GiftService = class GiftService {
    constructor(http) {
        this.http = http;
        this.endpoint = "/gifts";
        this.URLDatabase = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.herokuConfig.url;
    }
    getListData(endpoint) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let gifts = [];
            return new Promise(resolve => {
                this.http.get(endpoint).subscribe((data) => {
                    if (data != null && data.length > 0) {
                        for (let g of data) {
                            const tmp = {
                                id: g.id,
                                name: g.name,
                                points: g.points,
                                picture: g.picture,
                                exchangeGifts: [],
                                available: g.available
                            };
                            for (let eg of g.exchangeGifts) {
                                tmp.exchangeGifts.push(eg);
                            }
                            gifts.push(tmp);
                        }
                    }
                    console.log(data);
                    resolve(gifts);
                }, error => {
                    console.log(error);
                });
            });
        });
    }
    getAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint);
        });
    }
    getAllPaged(limit, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/element/" + limit + "/page/" + offset);
        });
    }
    getById(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let gift = null;
            return new Promise(resolve => {
                this.http.get(this.URLDatabase + this.endpoint + "/id/" + id).subscribe((data) => {
                    if (data.id) {
                        const tmp = {
                            id: data.id,
                            name: data.name,
                            points: data.points,
                            picture: data.picture,
                            exchangeGifts: [],
                            available: data.available
                        };
                        for (let eg of data.exchangeGifts) {
                            tmp.exchangeGifts.push(eg);
                        }
                        gift = tmp;
                    }
                    console.log(gift);
                    resolve(gift);
                }, error => {
                    console.log(error);
                    console.log(gift);
                    resolve(gift);
                });
            });
        });
    }
    getByNamePaged(name, limit, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/name/" + name + "/element/" + limit + "/page/" + offset);
        });
    }
    getByAvailablePaged(available, limit, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/available/" + available + "/element/" + limit + "/page/" + offset);
        });
    }
    createOrUpdate(gift, ImageFile) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            console.log(gift);
            if (gift == null
                || gift.name == null
                || gift.name == ("")
                || ImageFile == null) {
                console.log("El campo name esta nulo o no contiene caracteres.");
                return gift;
            }
            else {
                const body = gift;
                return new Promise(resolve => {
                    let formData = new FormData();
                    formData.append('g', new Blob([JSON.stringify(gift)], {
                        type: 'application/json'
                    }));
                    formData.append('file', ImageFile);
                    this.http.post(this.URLDatabase + this.endpoint, formData).subscribe((data) => {
                        console.log(data);
                        resolve(data);
                    }, error => {
                        console.log(error);
                        resolve(error);
                    });
                });
            }
        });
    }
    delete(gift) {
        return new Promise(resolve => {
            this.http.delete(this.URLDatabase + this.endpoint, { body: gift }).subscribe(() => {
                resolve(true);
            }, error => {
                console.log(error);
                resolve(false);
            });
        });
    }
};
GiftService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
GiftService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], GiftService);



/***/ }),

/***/ 7524:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);




let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.endpoint = "/users";
        this.URLDatabase = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.herokuConfig.url;
    }
    getListData(endpoint) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let users = [];
            return new Promise(resolve => {
                this.http.get(endpoint).subscribe((data) => {
                    if (data != null && data.length > 0) {
                        for (let miuser of data) {
                            const tmp = {
                                id: miuser.id,
                                code: miuser.code,
                                password: miuser.password,
                                administrator: miuser.administrator,
                                email: miuser.email,
                                name: miuser.name
                            };
                            users.push(tmp);
                        }
                    }
                    console.log(data);
                    resolve(users);
                }, error => {
                    console.log(error);
                });
            });
        });
    }
    getAllPaged(element, page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/element/" + element + "/page/" + page);
        });
    }
    getAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint);
        });
    }
    getById(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let user = null;
            return new Promise(resolve => {
                this.http.get(this.URLDatabase + this.endpoint + "/id/" + id).subscribe((miuser) => {
                    if (miuser.id) {
                        const tmp = {
                            id: miuser.id,
                            code: miuser.code,
                            password: miuser.password,
                            administrator: miuser.administrator,
                            email: miuser.email,
                            name: miuser.name
                        };
                        user = tmp;
                    }
                    console.log(user);
                    resolve(user);
                }, error => {
                    console.log(error);
                    console.log(user);
                    resolve(user);
                });
            });
        });
    }
    getByAvailable() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/available");
        });
    }
    getByCode(code) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let user = null;
            return new Promise(resolve => {
                this.http.get(this.URLDatabase + this.endpoint + "/code/" + code).subscribe((miuser) => {
                    if (miuser.code) {
                        const tmp = {
                            id: miuser.id,
                            code: miuser.code,
                            password: miuser.password,
                            administrator: miuser.administrator,
                            email: miuser.email,
                            name: miuser.name
                        };
                        user = tmp;
                    }
                    console.log(user);
                    resolve(user);
                }, error => {
                    console.log(error);
                    console.log(user);
                    resolve(user);
                });
            });
        });
    }
    getByName(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let user = null;
            return new Promise(resolve => {
                this.http.get(this.URLDatabase + this.endpoint + "/name/" + name).subscribe((miuser) => {
                    if (miuser.name) {
                        const tmp = {
                            id: miuser.id,
                            code: miuser.code,
                            password: miuser.password,
                            administrator: miuser.administrator,
                            email: miuser.email,
                            name: miuser.name
                        };
                        user = tmp;
                    }
                    console.log(user);
                    resolve(user);
                }, error => {
                    console.log(error);
                    console.log(user);
                    resolve(user);
                });
            });
        });
    }
    getAllUserAgenciesPaged(administrator, element, page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + "/administrator/" + this.endpoint + "/element/" + element + "/page/" + page);
        });
    }
    getAllAdminPaged(administrator, element, page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + "/administrator/" + this.endpoint + "/element/" + element + "/page/" + page);
        });
    }
    createOrUpdate(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (user != null) {
                const body = user;
                return new Promise(resolve => {
                    this.http.post(this.URLDatabase + this.endpoint, body).subscribe((miuser) => {
                        let result = {
                            id: miuser.id,
                            code: miuser.code,
                            password: miuser.password,
                            administrator: miuser.administrator,
                            email: miuser.email,
                            name: miuser.name
                        };
                        resolve(result);
                    }, error => {
                        console.log(error);
                        resolve(user);
                    });
                });
            }
        });
    }
    delete(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                this.http.delete(this.URLDatabase + this.endpoint, { body: user }).subscribe(() => {
                    resolve(true);
                }, error => {
                    console.log(error);
                    resolve(false);
                });
            });
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 3351:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/gift/gif-create/gif-create.page.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Pruebas Gif\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  \r\n  <div class=\"body\">\r\n  \r\n  \r\n    <form [formGroup]=\"formGift\" class=\"ion-padding\">\r\n      <div class=\"formulario\">\r\n      <ion-grid>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Nombre:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input type=\"text\" class=\"customInput\" formControlName=\"name\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Puntos:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"number\" formControlName=\"points\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"9\" sizeLg=\"1\">\r\n            Disponible\r\n          </ion-col>\r\n          <ion-col sizeSm=\"3\" sizeLg=\"11  \">\r\n            <ion-item  lines=\"none\">\r\n              No<ion-toggle></ion-toggle>Si\r\n           </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n        \r\n          <ion-col size=\"12\">\r\n            <ion-input type=\"file\" accept=\".jpg,.jpeg,.png\" (change)=\"changeListener($event)\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"12\">\r\n            <ion-button expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" (click)=\"create()\" class=\"button\" [disabled]=\"this.formGift.invalid||this.file==null\">\r\n              Crear Regalo\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    </form>\r\n  \r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 881:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/gift/gif-update/gif-update.page.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>GifUpdate</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 9651:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/explore-container/explore-container.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>");

/***/ }),

/***/ 3357:
/*!********************************************************************!*\
  !*** ./src/app/administrator/gift/gif-create/gif-create.page.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n\n.formulario {\n  margin-top: 1.5%;\n  padding: 2%;\n  border-top: 2px double gray;\n  border: 1px solid;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n  background-color: white;\n  margin-bottom: 4%;\n}\n\n.button {\n  --background: #22388c;\n}\n\n.customInput {\n  border: 1px solid gray;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpZi1jcmVhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLHFCQUFBO0FBQ0o7O0FBRUU7RUFDTSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFDUiIsImZpbGUiOiJnaWYtY3JlYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gICAgYmFja2dyb3VuZDogIzcxNzQ5OTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZm9ybXVsYXJpb3tcclxuICAgIG1hcmdpbi10b3A6IDEuNSU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGJvcmRlci10b3A6IDJweCBkb3VibGUgZ3JheTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBcInByaW1hcnlcIjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b257XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyMjM4OGM7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b21JbnB1dHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogXCJwcmltYXJ5XCI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMi41cmVtO1xyXG4gIH1cclxuICBcclxuICBcclxuICAiXX0= */";

/***/ }),

/***/ 5795:
/*!********************************************************************!*\
  !*** ./src/app/administrator/gift/gif-update/gif-update.page.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnaWYtdXBkYXRlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6732:
/*!********************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=common.js.map