"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_user_user-create_user-create_module_ts"],{

/***/ 1140:
/*!******************************************************************************!*\
  !*** ./src/app/administrator/user/user-create/user-create-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCreatePageRoutingModule": () => (/* binding */ UserCreatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _user_create_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-create.page */ 8765);




const routes = [
    {
        path: '',
        component: _user_create_page__WEBPACK_IMPORTED_MODULE_0__.UserCreatePage
    }
];
let UserCreatePageRoutingModule = class UserCreatePageRoutingModule {
};
UserCreatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserCreatePageRoutingModule);



/***/ }),

/***/ 1490:
/*!**********************************************************************!*\
  !*** ./src/app/administrator/user/user-create/user-create.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCreatePageModule": () => (/* binding */ UserCreatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _user_create_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-create-routing.module */ 1140);
/* harmony import */ var _user_create_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-create.page */ 8765);







let UserCreatePageModule = class UserCreatePageModule {
};
UserCreatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_create_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserCreatePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_user_create_page__WEBPACK_IMPORTED_MODULE_1__.UserCreatePage]
    })
], UserCreatePageModule);



/***/ }),

/***/ 8765:
/*!********************************************************************!*\
  !*** ./src/app/administrator/user/user-create/user-create.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCreatePage": () => (/* binding */ UserCreatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_create_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-create.page.html */ 8817);
/* harmony import */ var _user_create_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-create.page.scss */ 2194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 7524);







let UserCreatePage = class UserCreatePage {
    constructor(usserv, fb, loading, toast) {
        this.usserv = usserv;
        this.fb = fb;
        this.loading = loading;
        this.toast = toast;
        this.formUser = this.fb.group({
            code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    CreateUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let newUser = {
                code: this.formUser.get("code").value,
                password: this.formUser.get("password").value,
                administrator: this.toggle.checked,
                email: this.formUser.get("email").value,
                name: this.formUser.get("name").value
            };
            yield this.presentLoading();
            try {
                let id = yield this.usserv.createOrUpdate(newUser);
                this.miLoading && this.miLoading.dismiss();
                yield this.presentToast("Regalo agregada correctamente", "success");
                this.formUser.reset();
            }
            catch (err) {
                this.miLoading && this.miLoading.dismiss();
                yield this.presentToast("Error agregando Regalo", "danger");
            }
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.miLoading = yield this.loading.create({
                message: ''
            });
            yield this.miLoading.present();
        });
    }
    presentToast(msg, clr) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.miToast = yield this.toast.create({
                message: msg,
                duration: 2000,
                color: clr
            });
            this.miToast.present();
        });
    }
};
UserCreatePage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
UserCreatePage.propDecorators = {
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToggle,] }]
};
UserCreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-user-create',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_create_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_create_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserCreatePage);



/***/ }),

/***/ 8817:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/user/user-create/user-create.page.html ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Creacion de Usuario\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"body\">\r\n    <form [formGroup]=\"formUser\" class=\"ion-padding\">\r\n      <div class=\"formulario\">\r\n      <ion-grid>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Code:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"number\" formControlName=\"code\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Contraseña:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"password\" formControlName=\"password\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"9\" sizeLg=\"1\">\r\n            Administrador:\r\n          </ion-col>\r\n          <ion-col sizeSm=\"3\" sizeLg=\"11  \">\r\n            <ion-item  lines=\"none\">\r\n              No<ion-toggle></ion-toggle>Si\r\n           </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Email:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"text\" formControlName=\"email\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Name:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"text\" formControlName=\"name\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"12\">\r\n            <ion-button (click)=\"CreateUser()\" expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" class=\"button\" [disabled]=\"this.formUser.invalid\">\r\n              Crear Usuario\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    </form>\r\n</div>\r\n</ion-content>");

/***/ }),

/***/ 2194:
/*!**********************************************************************!*\
  !*** ./src/app/administrator/user/user-create/user-create.page.scss ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n\n.formulario {\n  margin-top: 1.5%;\n  padding: 2%;\n  border-top: 2px double gray;\n  border: 1px solid;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n  background-color: white;\n  margin-bottom: 4%;\n}\n\n.button {\n  --background: #22388c;\n}\n\n.customInput {\n  border: 1px solid gray;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY3JlYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ1Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBQ1IiLCJmaWxlIjoidXNlci1jcmVhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzE3NDk5O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlve1xyXG4gICAgbWFyZ2luLXRvcDogMS41JTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IGRvdWJsZSBncmF5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IFwicHJpbWFyeVwiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMi41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogIzIyMzg4YztcclxufVxyXG5cclxuLmN1c3RvbUlucHV0e1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBcInByaW1hcnlcIjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyLjVyZW07XHJcbiAgICAgICAgXHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_user_user-create_user-create_module_ts.js.map