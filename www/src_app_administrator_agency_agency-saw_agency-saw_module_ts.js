"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_agency_agency-saw_agency-saw_module_ts"],{

/***/ 37891:
/*!******************************************************************************!*\
  !*** ./src/app/administrator/agency/agency-saw/agency-saw-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencySawPageRoutingModule": () => (/* binding */ AgencySawPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _agency_saw_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agency-saw.page */ 69736);




const routes = [
    {
        path: '',
        component: _agency_saw_page__WEBPACK_IMPORTED_MODULE_0__.AgencySawPage
    }
];
let AgencySawPageRoutingModule = class AgencySawPageRoutingModule {
};
AgencySawPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AgencySawPageRoutingModule);



/***/ }),

/***/ 20879:
/*!**********************************************************************!*\
  !*** ./src/app/administrator/agency/agency-saw/agency-saw.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencySawPageModule": () => (/* binding */ AgencySawPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _agency_saw_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agency-saw-routing.module */ 37891);
/* harmony import */ var _agency_saw_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agency-saw.page */ 69736);







let AgencySawPageModule = class AgencySawPageModule {
};
AgencySawPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _agency_saw_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgencySawPageRoutingModule
        ],
        declarations: [_agency_saw_page__WEBPACK_IMPORTED_MODULE_1__.AgencySawPage]
    })
], AgencySawPageModule);



/***/ }),

/***/ 69736:
/*!********************************************************************!*\
  !*** ./src/app/administrator/agency/agency-saw/agency-saw.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencySawPage": () => (/* binding */ AgencySawPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_agency_saw_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./agency-saw.page.html */ 88447);
/* harmony import */ var _agency_saw_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agency-saw.page.scss */ 957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let AgencySawPage = class AgencySawPage {
    constructor() { }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
};
AgencySawPage.ctorParameters = () => [];
AgencySawPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-agency-saw',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_agency_saw_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_agency_saw_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AgencySawPage);



/***/ }),

/***/ 88447:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/agency/agency-saw/agency-saw.page.html ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Prueba Agencia\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"body\">\r\n    <div class=\"ion-padding\">\r\n      <div class=\"formulario\">\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <h1>Agencia tal</h1>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n\r\n        <ion-col size=\"12\">\r\n          <ion-label>Código Zip: </ion-label>\r\n          <ion-label color=\"tertiary\">123123123</ion-label>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n      \r\n      <ion-row class=\"info\">\r\n\r\n        <ion-col size=\"12\">\r\n          <ion-label>Dirección: </ion-label>\r\n          <ion-label color=\"tertiary\">123123123</ion-label>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n\r\n      <ion-row class=\"info\">\r\n\r\n        <ion-col size=\"12\">\r\n          <ion-label>Localidad: </ion-label>\r\n          <ion-label color=\"tertiary\">123123123</ion-label>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n\r\n      <ion-row class=\"info\">\r\n\r\n        <ion-col size=\"12\">\r\n          <ion-label>Número de Teléfono: </ion-label>\r\n          <ion-label color=\"tertiary\">123123123</ion-label>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n\r\n      <ion-row class=\"info\">\r\n\r\n        <ion-col size=\"12\">\r\n          <ion-label>Total: </ion-label>\r\n          <ion-label color=\"tertiary\">123123123</ion-label>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n\r\n      <ion-row class=\"info\">\r\n\r\n        <ion-col size=\"12\">\r\n          <ion-label>Puntos Actuales: </ion-label>\r\n          <ion-label color=\"tertiary\">123123123</ion-label>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n\r\n      <ion-row class=\"info\">\r\n\r\n        <ion-col size=\"12\">\r\n          <ion-label>Puntos Gastados: </ion-label>\r\n          <ion-label color=\"tertiary\">123123123</ion-label>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n\r\n      <ion-row class=\"info\">\r\n\r\n        <ion-col size=\"12\">\r\n          <ion-label>Activa: </ion-label>\r\n          <ion-label color=\"tertiary\">123123123</ion-label>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-label>Compaía de Seguros: </ion-label>\r\n          <ion-label color=\"tertiary\">123123123</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-label>Usuario: </ion-label>\r\n          <ion-label color=\"tertiary\">123123123</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 957:
/*!**********************************************************************!*\
  !*** ./src/app/administrator/agency/agency-saw/agency-saw.page.scss ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n\n.formulario {\n  margin-top: 1.5%;\n  padding: 3%;\n  border-top: 2px double gray;\n  border: 1px solid;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n  background-color: white;\n  margin-bottom: 4%;\n  margin-left: 5%;\n  margin-right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW5jeS1zYXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSiIsImZpbGUiOiJhZ2VuY3ktc2F3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gICAgYmFja2dyb3VuZDogIzcxNzQ5OTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuZm9ybXVsYXJpb3tcclxuICAgIG1hcmdpbi10b3A6IDEuNSU7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGJvcmRlci10b3A6IDJweCBkb3VibGUgZ3JheTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBcInByaW1hcnlcIjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICBtYXJnaW4tbGVmdDo1JTtcclxuICAgIG1hcmdpbi1yaWdodDo1JTtcclxuICB9XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_agency_agency-saw_agency-saw_module_ts.js.map