"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_user_user-create_user-create_module_ts"],{

/***/ 51140:
/*!******************************************************************************!*\
  !*** ./src/app/administrator/user/user-create/user-create-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCreatePageRoutingModule": () => (/* binding */ UserCreatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _user_create_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-create.page */ 18765);




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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _user_create_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-create-routing.module */ 51140);
/* harmony import */ var _user_create_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-create.page */ 18765);







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

/***/ 18765:
/*!********************************************************************!*\
  !*** ./src/app/administrator/user/user-create/user-create.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCreatePage": () => (/* binding */ UserCreatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_create_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-create.page.html */ 8817);
/* harmony import */ var _user_create_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-create.page.scss */ 32194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_agency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/agency.service */ 99574);
/* harmony import */ var src_app_services_insurance_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/insurance-company.service */ 37639);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ 77524);
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
            code: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("[0-9]{1,3}")]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{5,10}$")]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50)]],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100)]]
        });
        this.formAgency = this.fb.group({
            zipCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("[0-9]{2,21}")]],
            address: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(4)]],
            location: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(4)]],
            phoneNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("[0-9]{9}")]]
        });
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.uts.presentLoading();
            this.companies = [];
            this.companies = yield this.is.getAll();
            if (this.companies.length <= 0) {
                this.uts.presentToast('Para crear agencias, deben existir compañías de seguros. Solo podrá crear usuarios administradores.', 'danger', 'ban');
                this.admin = true;
                this.toggle.checked = true;
                this.toggle.disabled = true;
            }
            yield this.uts.hideLoading();
        });
    }
    CreateUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            //existe codigo igual
            yield this.uts.presentLoading();
            let findByCode = yield this.usserv.getByCode(this.formUser.get('code').value);
            yield this.uts.hideLoading();
            if (findByCode) {
                this.uts.presentToast("Ya existe un usuario con ese código, prueba con otro diferente.", "danger", "ban");
            }
            //insertar
            else {
                yield this.uts.presentLoading();
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
                        if (this.admin) {
                            this.uts.presentToast("Usuario agregado correctamente", "success", "checkmark-circle-outline");
                        }
                        this.formUser.reset();
                        if (!this.admin) {
                            if (this.insurance != null) {
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
                                newAgency = yield this.as.createOrUpdate(newAgency);
                                this.as.added = true;
                                if (newAgency.id) {
                                    this.formAgency.reset();
                                    this.uts.presentToast('La agencia se ha creado correctamente.', 'success', "checkmark-circle-outline");
                                }
                                else {
                                    this.uts.presentToast('Un error ha surgido al intentar crear la agencia.', 'danger', 'ban');
                                }
                            }
                        }
                    }
                    catch (err) {
                        this.uts.presentToast("Ha habido un error al crear el usuario. Compruebe longitud: código (<=3), contraseña: (<=10).", "danger", 'ban');
                    }
                }
                catch (error) {
                    yield this.uts.hideLoading();
                }
                yield this.uts.hideLoading();
            }
        });
    }
    showPicker() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let options = {
                buttons: [
                    {
                        text: "Cancel",
                        role: 'cancel',
                        handler: (value) => {
                            if (!this.insurance)
                                this.errorCompany = true;
                        }
                    },
                    {
                        text: 'Ok',
                        handler: (value) => {
                            this.insurance = value.Compañías.value;
                            this.errorCompany = false;
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

/***/ 8817:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/user/user-create/user-create.page.html ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Creacion de Usuario\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"body\">\r\n\r\n    <form [formGroup]=\"formUser\" class=\"ion-padding\">\r\n\r\n      <div class=\"formulario\">\r\n      <ion-grid>\r\n\r\n        <h2>Datos del Usuario</h2>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1.3\" sizeMd=\"2\" sizeLg=\"1.3\">\r\n            <ion-label>Code:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10.7\" sizeMd=\"10\" sizeLg=\"10.7\">\r\n            <ion-input class=\"customInput\" type=\"number\" formControlName=\"code\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.formUser.get('code').invalid&&formUser.get('code').touched\">\r\n              *Campo obligatorio. El código zip debe tener una longitud exacta de 3 caracteres.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1.3\" sizeMd=\"2\" sizeLg=\"1.3\">\r\n            <ion-label>Contraseña:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10.7\" sizeMd=\"10\" sizeLg=\"10.7\">\r\n            <ion-input class=\"customInput\" type=\"password\" formControlName=\"password\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.formUser.get('password').invalid&&formUser.get('password').touched\">\r\n              *La contraseña debe contener entre 5 y 10 caracteres, incluyendo una minúsucla, mayúscula, número y símbolo.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1.3\" sizeMd=\"2\" sizeLg=\"1.3\">\r\n            <ion-label>Email:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10.7\" sizeMd=\"10\" sizeLg=\"10.7\">\r\n            <ion-input class=\"customInput\" type=\"text\" formControlName=\"email\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.formUser.get('email').invalid&&formUser.get('email').touched\">\r\n              *Campo obligatorio. Debe introducir un formato de correo válido. Longitud de 4 a 50 caracteres.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1.3\" sizeMd=\"2\" sizeLg=\"1.3\">\r\n            <ion-label>Name:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10.7\" sizeMd=\"10\" sizeLg=\"10.7\">\r\n            <ion-input class=\"customInput\" type=\"text\" formControlName=\"name\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.formUser.get('name').invalid&&formUser.get('name').touched\">\r\n              *Campo obligatorio. Debe introducir entre 3 y 100 caracteres.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      </ion-grid>\r\n    </div>\r\n    </form>\r\n\r\n    <div class=\"ion-padding\">\r\n    <div class=\"formulario\" style=\"margin-top:-0.5% !important;margin-left:1.5%;margin-right:1.5%\">\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col sizeSm=\"10\" sizeLg=\"2\">\r\n          Administrador:\r\n        </ion-col>\r\n        <ion-col sizeSm=\"2\" sizeLg=\"11  \">\r\n          <ion-item  lines=\"none\" (click)=\"changeAdmin()\">\r\n            No<ion-toggle></ion-toggle>Si\r\n         </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <br>\r\n\r\n    <form *ngIf=\"!(this.admin)\" [formGroup]=\"formAgency\" style=\"margin-top: -2% !important;\">\r\n      <div style=\"margin-bottom: 0% !important;\">\r\n      <ion-grid>\r\n\r\n        <h2>Datos de la Agencia</h2>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1.3\" sizeMd=\"2\" sizeLg=\"1.3\">\r\n            <ion-label>Código Zip:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10.7\" sizeMd=\"10\" sizeLg=\"10.7\">\r\n            <ion-input type=\"number\" class=\"customInput\" formControlName=\"zipCode\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.formAgency.get('zipCode').invalid&&formAgency.get('zipCode').touched\">\r\n              *Campo obligatorio. Debe introducir entre 2 y 21 caracteres.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1.3\" sizeMd=\"2\" sizeLg=\"1.3\">\r\n            <ion-label>Dirección:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10.7\" sizeMd=\"10\" sizeLg=\"10.7\">\r\n            <ion-input class=\"customInput\" type=\"text\" formControlName=\"address\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.formAgency.get('address').invalid&&formAgency.get('address').touched\">\r\n              *Campo obligatorio. Debe introducir entre 4 y 50 caracteres.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1.3\" sizeMd=\"2\" sizeLg=\"1.3\">\r\n            <ion-label>Localidad:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10.7\" sizeMd=\"10\" sizeLg=\"10.7\">\r\n            <ion-input class=\"customInput\" type=\"text\" formControlName=\"location\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.formAgency.get('location').invalid&&formAgency.get('location').touched\">\r\n              *Campo obligatorio. Debe introducir entre 4 y 50 caracteres.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1.3\" sizeMd=\"2\" sizeLg=\"1.3\">\r\n            <ion-label>Número de Teléfono:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10.7\" sizeMd=\"10\" sizeLg=\"10.7\">\r\n            <ion-input class=\"customInput\" type=\"number\" formControlName=\"phoneNumber\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.formAgency.get('phoneNumber').invalid&&formAgency.get('phoneNumber').touched\">\r\n              *Campo obligatorio. Debe introducir un número de telefono de 9 dígitos exactos.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"9\" sizeLg=\"1\">\r\n            Activa:\r\n          </ion-col>\r\n          <ion-col sizeSm=\"3\" sizeLg=\"11  \">\r\n            <ion-item  lines=\"none\" (click)=\"changeActive()\">\r\n              No<ion-toggle></ion-toggle>Si\r\n           </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n            <ion-label>Compañía de Seguros:</ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"rem\">\r\n\r\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"showPicker()\" *ngIf=\"this.insurance==null\">\r\n              Seleccionar\r\n            </ion-button>\r\n\r\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"showPicker()\" *ngIf=\"this.insurance!=null\">\r\n              {{this.insurance.cia_Name}}\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"!this.admin&&this.errorCompany\">\r\n              *Campo obligatorio. Debe seleccionar una compañía de seguros.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      </ion-grid>\r\n    </div>\r\n    </form>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-button expand=\"block\" shape=\"round\" class=\"button\" routerLink=\"/tab-administrator/agency/list\">\r\n            Volver\r\n          </ion-button>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\">\r\n          <ion-button (click)=\"CreateUser()\" expand=\"block\" shape=\"round\" class=\"button\" [disabled]=\"((!this.admin)&&this.formAgency.invalid)||this.formUser.invalid||((!this.admin)&&this.formAgency.invalid)||((!this.admin)&&this.insurance==null)\">\r\n            Crear\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</div>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 32194:
/*!**********************************************************************!*\
  !*** ./src/app/administrator/user/user-create/user-create.page.scss ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n\n.button {\n  --background: #22388c;\n}\n\n.admincss {\n  margin-left: 1.5%;\n  margin-right: 1.5%;\n  border-top: 2px double gray;\n  border: 1px solid;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n  background-color: white;\n}\n\nion-input.ng-invalid.ng-touched {\n  border-left: 5px solid #a94442;\n  border-right: 5px solid #a94442;\n}\n\nion-input.ng-valid.ng-dirty {\n  border-left: 5px solid #42A948;\n  border-right: 5px solid #42A948;\n}\n\nselect.ng-invalid.ng-touched {\n  border-left: 5px solid #a94442;\n  border-right: 5px solid #a94442;\n}\n\nselect.ng-valid.ng-dirty {\n  border-left: 5px solid #42A948;\n  border-right: 5px solid #42A948;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY3JlYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDRSw4QkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSw4QkFBQTtFQUNBLCtCQUFBO0FBRUY7O0FBQUE7RUFDRSw4QkFBQTtFQUNBLCtCQUFBO0FBR0Y7O0FBREE7RUFDRSw4QkFBQTtFQUNBLCtCQUFBO0FBSUYiLCJmaWxlIjoidXNlci1jcmVhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzE3NDk5O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyMjM4OGM7XHJcbn1cclxuXHJcbi5hZG1pbmNzc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjUlO1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IGRvdWJsZSBncmF5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IFwicHJpbWFyeVwiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMi41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjtcclxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG59XHJcbmlvbi1pbnB1dC5uZy12YWxpZC5uZy1kaXJ0eSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICM0MkE5NDg7XHJcbn1cclxuc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNhOTQ0NDI7XHJcbn1cclxuc2VsZWN0Lm5nLXZhbGlkLm5nLWRpcnR5IHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7XHJcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzQyQTk0ODtcclxufVxyXG5cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_user_user-create_user-create_module_ts.js.map