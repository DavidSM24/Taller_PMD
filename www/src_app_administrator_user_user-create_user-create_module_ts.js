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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_create_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-create.page.html */ 8817);
/* harmony import */ var _user_create_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-create.page.scss */ 2194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_services_agency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/agency.service */ 9574);
/* harmony import */ var src_app_services_insurance_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/insurance-company.service */ 7639);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ 7524);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/util.service */ 371);










let UserCreatePage = class UserCreatePage {
    constructor(usserv, as, is, fb, uts, pickerController) {
        this.usserv = usserv;
        this.as = as;
        this.is = is;
        this.fb = fb;
        this.uts = uts;
        this.pickerController = pickerController;
        this.admin = false;
        this.active = false;
        this.insurance = null;
        this.formUser = this.fb.group({
            code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        });
        this.formAgency = this.fb.group({
            zipCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            address: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            location: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            phoneNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        });
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.uts.presentLoading();
            this.companies = yield this.is.getAll();
            if (this.companies.length <= 0) {
                this.uts.presentToast('Para crear agencias, deben existir compañías de seguros.', 'danger');
            }
            this.uts.hideLoading();
        });
    }
    CreateUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.uts.presentLoading();
            try {
                let newUser = {
                    code: this.formUser.get("code").value,
                    password: this.formUser.get("password").value,
                    administrator: this.admin,
                    email: this.formUser.get("email").value,
                    name: this.formUser.get("name").value
                };
                try {
                    newUser = yield this.usserv.createOrUpdate(newUser);
                    this.uts.presentToast("Usuario agregado correctamente", "success");
                    this.formUser.reset();
                    if (!this.admin) {
                        if (this.insurance != null) {
                            let ag = yield this.as.getById(7);
                            let newAgency = {
                                zipCode: this.formAgency.get("zipCode").value,
                                address: this.formAgency.get("address").value,
                                location: this.formAgency.get("location").value,
                                phoneNumber: this.formAgency.get("phoneNumber").value,
                                amount: 0,
                                points: 0,
                                pointsRedeemed: 0,
                                myInsuranceCompany: this.insurance,
                                myCarRepairs: [],
                                myExchangesGifts: [],
                                myUser: newUser,
                                active: this.active
                            };
                            console.log(newAgency);
                            newAgency = yield this.as.createOrUpdate(newAgency);
                            if (newAgency.id) {
                                this.formAgency.reset();
                                this.uts.presentToast('La agencia se ha creado correctamente.', 'success');
                            }
                            else {
                                this.uts.presentToast('Un error ha surgido al intentar crear la agencia.', 'danger');
                            }
                        }
                    }
                }
                catch (err) {
                    this.uts.presentToast("Error agregando Usuario", "danger");
                }
            }
            catch (error) {
                this.uts.hideLoading();
                console.log(error);
            }
            this.uts.hideLoading();
        });
    }
    showPicker() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let options = {
                buttons: [
                    {
                        text: "Cancel",
                        role: 'cancel'
                    },
                    {
                        text: 'Ok',
                        handler: (value) => {
                            this.insurance = value.Compañías.value;
                        }
                    }
                ],
                columns: [{
                        name: 'Compañías',
                        options: this.getColumnOptions()
                    }]
            };
            let picker = yield this.pickerController.create(options);
            picker.present();
        });
    }
    getColumnOptions() {
        let options = [];
        this.companies.forEach(x => {
            options.push({ text: x.cia_Name, value: x });
        });
        return options;
    }
    changeAdmin() {
        this.admin = !this.admin;
    }
    changeActive() {
        this.active = !this.active;
    }
};
UserCreatePage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_services_agency_service__WEBPACK_IMPORTED_MODULE_2__.AgencyService },
    { type: src_app_services_insurance_company_service__WEBPACK_IMPORTED_MODULE_3__.InsuranceCompanyService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_5__.UtilService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PickerController }
];
UserCreatePage.propDecorators = {
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToggle,] }]
};
UserCreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-user-create',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_create_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_create_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserCreatePage);



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

/***/ 371:
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilService": () => (/* binding */ UtilService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 8099);



let UtilService = class UtilService {
    constructor(loading, toast) {
        this.loading = loading;
        this.toast = toast;
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.miLoading = yield this.loading.create({
                message: ''
            });
            yield this.miLoading.present();
        });
    }
    hideLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.miLoading.dismiss();
        });
    }
    presentToast(msg, clr) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const miToast = yield this.toast.create({
                message: msg,
                duration: 3000,
                color: clr
            });
            miToast.present();
        });
    }
};
UtilService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController }
];
UtilService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UtilService);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Creacion de Usuario\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"body\">\r\n    \r\n    <form [formGroup]=\"formUser\" class=\"ion-padding\">\r\n\r\n      <div class=\"formulario\">\r\n      <ion-grid>\r\n\r\n        <h2>Datos del Usuario</h2>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Code:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"number\" formControlName=\"code\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Contraseña:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"password\" formControlName=\"password\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Email:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"text\" formControlName=\"email\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Name:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"text\" formControlName=\"name\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        \r\n      </ion-grid>\r\n    </div>\r\n    </form>\r\n\r\n    <div class=\"ion-padding\">\r\n    <div class=\"formulario\" style=\"margin-top:-0.5% !important;margin-left:1.5%;margin-right:1.5%\">\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col sizeSm=\"10\" sizeLg=\"2\">\r\n          Administrador:\r\n        </ion-col>\r\n        <ion-col sizeSm=\"2\" sizeLg=\"11  \">\r\n          <ion-item  lines=\"none\" (click)=\"changeAdmin()\">\r\n            No<ion-toggle></ion-toggle>Si\r\n         </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <br>\r\n\r\n    <form *ngIf=\"!(this.admin)\" [formGroup]=\"formAgency\" style=\"margin-top: -2% !important;\">\r\n      <div style=\"margin-bottom: 0% !important;\">\r\n      <ion-grid>\r\n        \r\n        <h2>Datos de la Agencia</h2>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Código Zip:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input type=\"number\" class=\"customInput\" formControlName=\"zipCode\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        \r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Dirección:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"text\" formControlName=\"address\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Localidad:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"text\" formControlName=\"location\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Número de Teléfono:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"number\" formControlName=\"phoneNumber\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        \r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"9\" sizeLg=\"1\">\r\n            Activa:\r\n          </ion-col>\r\n          <ion-col sizeSm=\"3\" sizeLg=\"11  \">\r\n            <ion-item  lines=\"none\" (click)=\"changeActive()\">\r\n              No<ion-toggle></ion-toggle>Si\r\n           </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        \r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n            <ion-label>Compañía de Seguros:</ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n\r\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"showPicker()\" *ngIf=\"this.insurance==null\">\r\n              Seleccionar\r\n            </ion-button>\r\n\r\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"showPicker()\" *ngIf=\"this.insurance!=null\">\r\n              {{this.insurance.cia_Name}}\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      </ion-grid>\r\n    </div>\r\n    </form>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-button expand=\"block\" shape=\"round\" class=\"button\" routerLink=\"/tab-administrator/agency/list\">\r\n            Cancelar\r\n          </ion-button>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"6\">\r\n          <ion-button (click)=\"CreateUser()\" expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" class=\"button\" [disabled]=\"((!this.admin)&&this.formAgency.invalid)||this.formUser.invalid||((!this.admin)&&this.formAgency.invalid)||((!this.admin)&&this.insurance==null)\">\r\n            Crear\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</div>º\r\n</div>\r\n</ion-content>");

/***/ }),

/***/ 2194:
/*!**********************************************************************!*\
  !*** ./src/app/administrator/user/user-create/user-create.page.scss ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n\n.formulario {\n  margin-top: 1.5%;\n  padding: 2%;\n  border-top: 2px double gray;\n  border: 1px solid;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n  background-color: white;\n}\n\n.button {\n  --background: #22388c;\n}\n\n.customInput {\n  border: 1px solid gray;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n}\n\n.admincss {\n  margin-left: 1.5%;\n  margin-right: 1.5%;\n  border-top: 2px double gray;\n  border: 1px solid;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY3JlYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNRLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQUNSOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFDSiIsImZpbGUiOiJ1c2VyLWNyZWF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcclxuICAgIGJhY2tncm91bmQ6ICM3MTc0OTk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZvcm11bGFyaW97XHJcbiAgICBtYXJnaW4tdG9wOiAxLjUlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBib3JkZXItdG9wOiAycHggZG91YmxlIGdyYXk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogXCJwcmltYXJ5XCI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogIzIyMzg4YztcclxufVxyXG5cclxuLmN1c3RvbUlucHV0e1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBcInByaW1hcnlcIjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyLjVyZW07XHJcbiAgICAgICAgXHJcbn1cclxuLmFkbWluY3Nze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNSU7XHJcbiAgICBib3JkZXItdG9wOiAycHggZG91YmxlIGdyYXk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogXCJwcmltYXJ5XCI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_user_user-create_user-create_module_ts.js.map