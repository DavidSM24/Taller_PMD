"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 2359:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 955);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 9549:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 2359);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 955);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 955:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 9403);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 6051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8346);





let LoginPage = class LoginPage {
    constructor(fb) {
        this.fb = fb;
        this.formLogin = this.fb.group({
            code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern("[0-9]*")],
            pass: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
        });
    }
    ngOnInit() {
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 9403:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login/login.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n\r\n<div style=\"background-color: white; width: 100%; height: 100%;\">\r\n  <div>\r\n    \r\n    <div class=\"login\">\r\n      <ion-img src=\"../../assets/images/logo.png\"></ion-img>\r\n      <form [formGroup]=\"formLogin\">\r\n        <h1>Login</h1>\r\n        <div class=\"group\">\r\n          <label for=\"code\" class=\"label\" style=\"margin-bottom:3% !important;\">Código</label>\r\n          <input id=\"code\" type=\"number\" class=\"input\" formControlName=\"code\">\r\n        </div>\r\n        <div class=\"group\">\r\n          <label for=\"pass\" class=\"label\" style=\"margin-bottom:3% !important;\">Contraseña</label>\r\n          <input id=\"pass\" type=\"password\" class=\"input\" data-type=\"pass\" formControlName=\"pass\">\r\n        </div>\r\n\r\n        <div class=\"wrapper\">\r\n          <div class=\"link_wrapper\">\r\n            <a href=\"#\">Iniciar</a>\r\n            <div class=\"icon\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 268.832 268.832\">\r\n                <path d=\"M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z\"/>\r\n              </svg>\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n        \r\n      </form>\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ 6051:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n.wrapper * {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  top: 0;\n  bottom: 0;\n}\n.link_wrapper {\n  position: relative;\n}\na {\n  display: block;\n  width: 250px;\n  height: 50px;\n  line-height: 50px;\n  font-weight: bold;\n  text-decoration: none;\n  background: #333;\n  text-align: center;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border: 3px solid #333;\n  transition: all 0.35s;\n}\n.icon {\n  width: 50px;\n  height: 50px;\n  border: 3px solid transparent;\n  position: absolute;\n  transform: rotate(45deg);\n  right: 0;\n  top: 0;\n  z-index: -1;\n  transition: all 0.35s;\n}\n.icon svg {\n  width: 30px;\n  position: absolute;\n  top: calc(50% - 15px);\n  left: calc(50% - 15px);\n  transform: rotate(-45deg);\n  fill: #2f0fbe;\n  transition: all 0.35s;\n}\na:hover {\n  width: 200px;\n  border: 3px solid #2f0fbe;\n  background: transparent;\n  color: #2f0fbe;\n}\n* {\n  -ms-box-sizing: border-box;\n  -o-box-sizing: border-box;\n  box-sizing: border-box;\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\nbody {\n  width: 100%;\n  height: 100%;\n  font-family: \"Open Sans\", sans-serif;\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#3E1D6D\", endColorstr=\"#092756\",GradientType=1 );\n}\n.login {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -200px 0 0 -150px;\n  width: 300px;\n  height: 300px;\n}\n.login h1 {\n  color: #203B8C;\n  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  letter-spacing: 1px;\n  text-align: center;\n}\ninput {\n  width: 100%;\n  margin-bottom: 10px;\n  background: rgba(0, 0, 0, 0.3);\n  border: none;\n  outline: none;\n  padding: 10px;\n  font-size: 13px;\n  color: #fff;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2), 0 1px 1px rgba(255, 255, 255, 0.2);\n  transition: box-shadow 0.5s ease;\n}\nlabel {\n  color: black;\n}\ninput:focus {\n  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.4), 0 1px 1px rgba(255, 255, 255, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw4REFBQTtBQUVSO0VBQ0MsV0FBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FBQUg7QUFHQTtFQUNBLGtCQUFBO0FBQUE7QUFHQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFBQTtBQUdBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUFBO0FBR0E7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFBQTtBQUdBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBQUE7QUFHQTtFQUErRCwwQkFBQTtFQUEyQix5QkFBQTtFQUEwQixzQkFBQTtBQUtwSDtBQUhBO0VBQU8sV0FBQTtFQUFhLFlBQUE7RUFBYSxnQkFBQTtBQVNqQztBQVBBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUdBLG1IQUFBO0FBUUQ7QUFOQTtFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBU0Q7QUFQQTtFQUFZLGNBQUE7RUFDVCx3Q0FBQTtFQUF1QyxtQkFBQTtFQUFvQixrQkFBQTtBQWE5RDtBQVhBO0VBQ0MsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDBGQUFBO0VBS0EsZ0NBQUE7QUFjRDtBQVhBO0VBQ0MsWUFBQTtBQWNEO0FBWkE7RUFBYywwRkFBQTtBQWdCZCIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zKTtcclxuXHJcbi53cmFwcGVyICp7XHJcblx0d2lkdGg6MTAwJTtcclxuICAgaGVpZ2h0OjEwMCU7XHJcbiAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICB0b3A6MDtcclxuICAgYm90dG9tOjA7XHJcbn1cclxuICBcclxuLmxpbmtfd3JhcHBlcntcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5he1xyXG5kaXNwbGF5OiBibG9jaztcclxud2lkdGg6IDI1MHB4O1xyXG5oZWlnaHQ6IDUwcHg7XHJcbmxpbmUtaGVpZ2h0OiA1MHB4O1xyXG5mb250LXdlaWdodDogYm9sZDtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5iYWNrZ3JvdW5kOiAjMzMzO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmNvbG9yOiAjZmZmO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5sZXR0ZXItc3BhY2luZzogMXB4O1xyXG5ib3JkZXI6IDNweCBzb2xpZCAjMzMzO1xyXG50cmFuc2l0aW9uOiBhbGwgLjM1cztcclxufVxyXG5cclxuLmljb257XHJcbndpZHRoOiA1MHB4O1xyXG5oZWlnaHQ6IDUwcHg7XHJcbmJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxucmlnaHQ6IDA7XHJcbnRvcDogMDtcclxuei1pbmRleDogLTE7XHJcbnRyYW5zaXRpb246IGFsbCAuMzVzO1xyXG59XHJcblxyXG4uaWNvbiBzdmd7XHJcbndpZHRoOiAzMHB4O1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogY2FsYyg1MCUgLSAxNXB4KTtcclxubGVmdDogY2FsYyg1MCUgLSAxNXB4KTtcclxudHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuZmlsbDogIzJmMGZiZTtcclxudHJhbnNpdGlvbjogYWxsIC4zNXM7XHJcbn1cclxuXHJcbmE6aG92ZXJ7XHJcbndpZHRoOiAyMDBweDtcclxuYm9yZGVyOiAzcHggc29saWQgIzJmMGZiZTtcclxuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbmNvbG9yOiAjMmYwZmJlO1xyXG59XHJcblxyXG4qIHsgLXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7IC1tb3otYm94LXNpemluZzpib3JkZXItYm94OyAtbXMtYm94LXNpemluZzpib3JkZXItYm94OyAtby1ib3gtc2l6aW5nOmJvcmRlci1ib3g7IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgfVxyXG5cclxuaHRtbCB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6MTAwJTsgb3ZlcmZsb3c6aGlkZGVuOyB9XHJcblxyXG5ib2R5IHsgXHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OjEwMCU7XHJcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cdC8vYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG5cclxuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzNFMUQ2RCcsIGVuZENvbG9yc3RyPScjMDkyNzU2JyxHcmFkaWVudFR5cGU9MSApO1xyXG59XHJcbi5sb2dpbiB7IFxyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0bWFyZ2luOiAtMjAwcHggMCAwIC0xNTBweDtcclxuXHR3aWR0aDozMDBweDtcclxuXHRoZWlnaHQ6MzAwcHhcclxufVxyXG4ubG9naW4gaDEgeyBjb2xvcjogIzIwM0I4Q1xyXG5cdDsgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC4zKTsgbGV0dGVyLXNwYWNpbmc6MXB4OyB0ZXh0LWFsaWduOmNlbnRlcjsgfVxyXG5cclxuaW5wdXQgeyBcclxuXHR3aWR0aDogMTAwJTsgXHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDsgXHJcblx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuMyk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjMpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwIC01cHggNDVweCByZ2JhKDEwMCwxMDAsMTAwLDAuMiksIDAgMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBib3gtc2hhZG93IC41cyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuNXMgZWFzZTtcclxuXHQtby10cmFuc2l0aW9uOiBib3gtc2hhZG93IC41cyBlYXNlO1xyXG5cdC1tcy10cmFuc2l0aW9uOiBib3gtc2hhZG93IC41cyBlYXNlO1xyXG5cdHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjVzIGVhc2U7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuXHRjb2xvcjogYmxhY2s7XHJcbn1cclxuaW5wdXQ6Zm9jdXMgeyBib3gtc2hhZG93OiBpbnNldCAwIC01cHggNDVweCByZ2JhKDEwMCwxMDAsMTAwLDAuNCksIDAgMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7IH1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map