"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab5_tab5_module_ts"],{

/***/ 7391:
/*!*********************************************!*\
  !*** ./src/app/tab5/tab5-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5PageRoutingModule": () => (/* binding */ Tab5PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5.page */ 120);




const routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page
    }
];
let Tab5PageRoutingModule = class Tab5PageRoutingModule {
};
Tab5PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab5PageRoutingModule);



/***/ }),

/***/ 1853:
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5PageModule": () => (/* binding */ Tab5PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5-routing.module */ 7391);
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab5.page */ 120);







let Tab5PageModule = class Tab5PageModule {
};
Tab5PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab5_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tab5PageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_1__.Tab5Page]
    })
], Tab5PageModule);



/***/ }),

/***/ 120:
/*!***********************************!*\
  !*** ./src/app/tab5/tab5.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5Page": () => (/* binding */ Tab5Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab5_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab5.page.html */ 2358);
/* harmony import */ var _tab5_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab5.page.scss */ 8798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_exchange_gift_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/exchange-gift.service */ 63);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);






let Tab5Page = class Tab5Page {
    constructor(ex, fb) {
        this.ex = ex;
        this.fb = fb;
        this.formTest = this.fb.group({});
    }
    test_GetAll() {
        this.ex.getAll();
    }
    test_GetAllPaged(limit, offset) {
        this.ex.getAllPaged(limit, offset);
    }
    test_GetById(id) {
        this.ex.getById(id);
    }
    test_getByDeliveredPaged(delivered, element, page) {
        this.ex.getByDeliveredPaged(delivered, element, page);
    }
    getByAgencyPaged(agency, element, page) {
        this.ex.getByAgencyPaged(agency, element, page);
    }
    test_Delete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let toDrop = yield this.ex.getAll();
            let last = toDrop[toDrop.length - 1];
            console.log(last);
            if (toDrop != null) {
                console.log(yield this.ex.delete(last));
            }
        });
    }
};
Tab5Page.ctorParameters = () => [
    { type: _services_exchange_gift_service__WEBPACK_IMPORTED_MODULE_2__.ExchangeGiftService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
Tab5Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab5',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab5_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab5_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab5Page);



/***/ }),

/***/ 2358:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab5/tab5.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Prueba Exchanges Gift\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"body\">\r\n    <form [formGroup]=\"formTest\" class=\"ion-padding\">\r\n      <div class=\"formulario\">\r\n      <ion-grid>\r\n        \r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Fecha de Intercambio:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"date\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Observaciones:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-textarea class=\"customInput\" type=\"text\"></ion-textarea>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"9\" sizeLg=\"1\">\r\n            Entregado:\r\n          </ion-col>\r\n          <ion-col sizeSm=\"3\" sizeLg=\"11  \">\r\n            <ion-item  lines=\"none\">\r\n              No<ion-toggle></ion-toggle>Si\r\n           </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n            <ion-label>Agencia:</ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n            <ion-button expand=\"block\" shape=\"round\">\r\n              Seleccionar\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n            <ion-label>Regalo:</ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n            <ion-button expand=\"block\" shape=\"round\">\r\n              Seleccionar\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"12\">\r\n            <ion-button expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" class=\"button\">\r\n              Crear Regalo Intercambio\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    </form>\r\n</div>\r\n</ion-content>");

/***/ }),

/***/ 8798:
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n\n.formulario {\n  margin-top: 1.5%;\n  padding: 2%;\n  border-top: 2px double gray;\n  border: 1px solid;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n  background-color: white;\n  margin-bottom: 4%;\n}\n\n.button {\n  --background: #22388c;\n}\n\n.customInput {\n  border: 1px solid gray;\n  border-color: \"primary\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDUSxzQkFBQTtFQUNBLHVCQUFBO0FBQ1IiLCJmaWxlIjoidGFiNS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcclxuICAgIGJhY2tncm91bmQ6ICM3MTc0OTk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZvcm11bGFyaW97XHJcbiAgICBtYXJnaW4tdG9wOiAxLjUlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBib3JkZXItdG9wOiAycHggZG91YmxlIGdyYXk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogXCJwcmltYXJ5XCI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjIzODhjO1xyXG59XHJcblxyXG4uY3VzdG9tSW5wdXR7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICBib3JkZXItY29sb3I6IFwicHJpbWFyeVwiO1xyXG4gICAgICAgIFxyXG59XHJcblxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab5_tab5_module_ts.js.map