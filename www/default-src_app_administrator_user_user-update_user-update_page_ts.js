"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_administrator_user_user-update_user-update_page_ts"],{

/***/ 9101:
/*!********************************************************************!*\
  !*** ./src/app/administrator/user/user-update/user-update.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserUpdatePage": () => (/* binding */ UserUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_update_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-update.page.html */ 3731);
/* harmony import */ var _user_update_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-update.page.scss */ 7547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 7524);







let UserUpdatePage = class UserUpdatePage {
    constructor(modalCtrl, userv, fb) {
        this.modalCtrl = modalCtrl;
        this.userv = userv;
        this.fb = fb;
        this.formEditUser = this.fb.group({
            code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    ngOnInit() {
        try {
            this.formEditUser = this.fb.group({
                code: [this.user.code, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                password: [this.user.password, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                administrator: [this.user.administrator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                email: [this.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                name: [this.user.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    EditUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let userEditado = {
                code: this.formEditUser.get("code").value,
                password: this.formEditUser.get("password").value,
                administrator: this.toggle.checked,
                email: this.formEditUser.get("email").value,
                name: this.formEditUser.get("name").value
            };
            userEditado = yield this.userv.createOrUpdate(userEditado);
            this.modalCtrl.dismiss({
                newUser: userEditado
            });
        });
    }
    close() {
        this.modalCtrl.dismiss();
    }
};
UserUpdatePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
UserUpdatePage.propDecorators = {
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToggle,] }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
UserUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-user-update',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_update_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_update_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserUpdatePage);



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

/***/ 3731:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/user/user-update/user-update.page.html ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Editar Usuario\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"body\">\r\n    <form [formGroup]=\"formEditUser\" class=\"ion-padding\">\r\n      <div class=\"formulario\">\r\n      <ion-grid>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Code:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"number\" formControlName=\"code\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Contraseña:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"password\" formControlName=\"password\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"9\" sizeLg=\"1\">\r\n            Administrador:\r\n          </ion-col>\r\n          <ion-col sizeSm=\"3\" sizeLg=\"11  \">\r\n            <ion-item  lines=\"none\">\r\n              No<ion-toggle [checked]=\"user.administrator\"></ion-toggle>Si\r\n           </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Email:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"text\" formControlName=\"email\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Name:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"text\" formControlName=\"name\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"12\">\r\n            <ion-button expand=\"block\" shape=\"round\" class=\"button\" (click)=\"close()\">\r\n              Cancelar\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"12\">\r\n            <ion-button (click)=\"EditUser()\" expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" class=\"button\" [disabled]=\"this.formEditUser.invalid\">\r\n              Editar Usuario\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    </form>\r\n</div>\r\n</ion-content>");

/***/ }),

/***/ 7547:
/*!**********************************************************************!*\
  !*** ./src/app/administrator/user/user-update/user-update.page.scss ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n\n.formulario {\n  margin-top: 1.5%;\n  padding: 2%;\n  border-top: 2px double gray;\n  border: 1px solid;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n  background-color: white;\n  margin-bottom: 4%;\n}\n\n.button {\n  --background: #22388c;\n}\n\n.customInput {\n  border: 1px solid gray;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItdXBkYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ1Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBQ1IiLCJmaWxlIjoidXNlci11cGRhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzE3NDk5O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlve1xyXG4gICAgbWFyZ2luLXRvcDogMS41JTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IGRvdWJsZSBncmF5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IFwicHJpbWFyeVwiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMi41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogIzIyMzg4YztcclxufVxyXG5cclxuLmN1c3RvbUlucHV0e1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBcInByaW1hcnlcIjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyLjVyZW07XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_administrator_user_user-update_user-update_page_ts.js.map