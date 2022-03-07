"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_gift_gif-saw_gif-saw_module_ts"],{

/***/ 7223:
/*!**********************************************************************!*\
  !*** ./src/app/administrator/gift/gif-saw/gif-saw-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifSawPageRoutingModule": () => (/* binding */ GifSawPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _gif_saw_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gif-saw.page */ 7865);




const routes = [
    {
        path: '',
        component: _gif_saw_page__WEBPACK_IMPORTED_MODULE_0__.GifSawPage
    }
];
let GifSawPageRoutingModule = class GifSawPageRoutingModule {
};
GifSawPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GifSawPageRoutingModule);



/***/ }),

/***/ 2728:
/*!**************************************************************!*\
  !*** ./src/app/administrator/gift/gif-saw/gif-saw.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifSawPageModule": () => (/* binding */ GifSawPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _gif_saw_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gif-saw-routing.module */ 7223);
/* harmony import */ var _gif_saw_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gif-saw.page */ 7865);







let GifSawPageModule = class GifSawPageModule {
};
GifSawPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gif_saw_routing_module__WEBPACK_IMPORTED_MODULE_0__.GifSawPageRoutingModule
        ],
        declarations: [_gif_saw_page__WEBPACK_IMPORTED_MODULE_1__.GifSawPage]
    })
], GifSawPageModule);



/***/ }),

/***/ 7865:
/*!************************************************************!*\
  !*** ./src/app/administrator/gift/gif-saw/gif-saw.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifSawPage": () => (/* binding */ GifSawPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gif_saw_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./gif-saw.page.html */ 1398);
/* harmony import */ var _gif_saw_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gif-saw.page.scss */ 8857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let GifSawPage = class GifSawPage {
    constructor() { }
    ngOnInit() {
    }
};
GifSawPage.ctorParameters = () => [];
GifSawPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-gif-saw',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gif_saw_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_gif_saw_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GifSawPage);



/***/ }),

/***/ 1398:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/gift/gif-saw/gif-saw.page.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Prueba Agencia\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" style=\"max-height: 100% !important;\">\r\n  <div class=\"body\">\r\n    <form class=\"ion-padding\">\r\n      <div class=\"formulario\">\r\n        <center>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <h1>Sport Mood Cap</h1>\r\n          </ion-col>\r\n        </ion-row>\r\n        </center>\r\n        <ion-row>\r\n          <ion-col>\r\n            \r\n            <ion-card class=\"card\" align-items-center>\r\n              <ion-card-header>\r\n                <center>\r\n                  <ion-img class=\"image\" src=\"../../../../assets/images/gorra.jpeg\"></ion-img>\r\n                </center>\r\n              </ion-card-header>\r\n              \r\n            </ion-card>\r\n\r\n          </ion-col>\r\n      </ion-row>\r\n\r\n      <center>\r\n      <ion-row class=\"info\">\r\n\r\n        <ion-col size=\"6\">\r\n          <ion-label>Puntos: </ion-label>\r\n          <ion-label color=\"tertiary\">123123123</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\">\r\n          <ion-label>Disponible: </ion-label>\r\n          <ion-label color=\"tertiary\">Sí</ion-label>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n      </center> \r\n    </div>\r\n    </form>\r\n</div>\r\n</ion-content>");

/***/ }),

/***/ 8857:
/*!**************************************************************!*\
  !*** ./src/app/administrator/gift/gif-saw/gif-saw.page.scss ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n\n.formulario {\n  margin-top: 1.5%;\n  padding: 2%;\n  border-top: 2px double gray;\n  border: 1px solid;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n  background-color: white;\n  margin-bottom: 4%;\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\n.card {\n  margin-left: 22%;\n  margin-right: 22%;\n}\n\n.info {\n  margin-left: 15%;\n  margin-right: 15%;\n}\n\n.image {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpZi1zYXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRTtFQUVFLGdCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFLRTtFQUNFLHVCQUFBO0VBQUEsa0JBQUE7QUFGSiIsImZpbGUiOiJnaWYtc2F3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gICAgYmFja2dyb3VuZDogIzcxNzQ5OTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuZm9ybXVsYXJpb3tcclxuICAgIG1hcmdpbi10b3A6IDEuNSU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGJvcmRlci10b3A6IDJweCBkb3VibGUgZ3JheTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBcInByaW1hcnlcIjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICBtYXJnaW4tbGVmdDo1JTtcclxuICAgIG1hcmdpbi1yaWdodDo1JTtcclxuICB9XHJcblxyXG4gIC5jYXJke1xyXG4gICAgbWFyZ2luLWxlZnQ6MjIlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjIyJTtcclxuICB9XHJcblxyXG4gIC5pbmZve1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OjE1JTtcclxuICAgIG1hcmdpbi1yaWdodDoxNSU7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5pbWFnZSB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiB9XHJcblxyXG4gICJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_gift_gif-saw_gif-saw_module_ts.js.map