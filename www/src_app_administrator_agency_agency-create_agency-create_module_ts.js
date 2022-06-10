"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_agency_agency-create_agency-create_module_ts"],{

/***/ 60142:
/*!************************************************************************************!*\
  !*** ./src/app/administrator/agency/agency-create/agency-create-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencyCreatePageRoutingModule": () => (/* binding */ AgencyCreatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _agency_create_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agency-create.page */ 16700);




const routes = [
    {
        path: '',
        component: _agency_create_page__WEBPACK_IMPORTED_MODULE_0__.AgencyCreatePage
    }
];
let AgencyCreatePageRoutingModule = class AgencyCreatePageRoutingModule {
};
AgencyCreatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AgencyCreatePageRoutingModule);



/***/ }),

/***/ 88333:
/*!****************************************************************************!*\
  !*** ./src/app/administrator/agency/agency-create/agency-create.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencyCreatePageModule": () => (/* binding */ AgencyCreatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _agency_create_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agency-create-routing.module */ 60142);
/* harmony import */ var _agency_create_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agency-create.page */ 16700);
/* harmony import */ var _services_insurance_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/insurance-company.service */ 37639);
/* harmony import */ var src_app_services_agency_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/agency.service */ 99574);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ 371);










let AgencyCreatePageModule = class AgencyCreatePageModule {
};
AgencyCreatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _agency_create_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgencyCreatePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule
        ],
        providers: [src_app_services_agency_service__WEBPACK_IMPORTED_MODULE_3__.AgencyService, _services_insurance_company_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceCompanyService, src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService],
        declarations: [_agency_create_page__WEBPACK_IMPORTED_MODULE_1__.AgencyCreatePage]
    })
], AgencyCreatePageModule);



/***/ }),

/***/ 16700:
/*!**************************************************************************!*\
  !*** ./src/app/administrator/agency/agency-create/agency-create.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencyCreatePage": () => (/* binding */ AgencyCreatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_agency_create_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./agency-create.page.html */ 48766);
/* harmony import */ var _agency_create_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agency-create.page.scss */ 89760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_agency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/agency.service */ 99574);
/* harmony import */ var src_app_services_insurance_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/insurance-company.service */ 37639);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/util.service */ 371);









let AgencyCreatePage = class AgencyCreatePage {
    constructor(as, fb, is, pickerController, uts, nav) {
        this.as = as;
        this.fb = fb;
        this.is = is;
        this.pickerController = pickerController;
        this.uts = uts;
        this.nav = nav;
        this.insurance = null;
        this.formAgency = this.fb.group({
            zipCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,],
            address: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            location: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            phoneNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.uts.presentLoading();
            this.companies = yield this.is.getAll();
            if (this.companies.length <= 0) {
                yield this.uts.hideLoading();
                this.uts.presentToast('Para crear agencias, deben existir compañías de seguros.', 'danger', 'ban');
                this.nav.back();
            }
            yield this.uts.hideLoading();
        });
    }
    create() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.uts.presentLoading();
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
                    myUser: ag.myUser,
                    active: this.toggle.checked
                };
                newAgency = yield this.as.createOrUpdate(newAgency);
                if (newAgency.id) {
                    this.formAgency.reset();
                    this.uts.presentToast('La agencia se ha creado correctamente.', 'success', "checkmark-circle-outline");
                    this.as.added = true;
                }
                else {
                    this.uts.presentToast('Un error ha surgido al intentar crear la agencia.', 'danger', 'ban');
                }
                yield this.uts.hideLoading();
            }
        });
    }
    showPicker() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
};
AgencyCreatePage.ctorParameters = () => [
    { type: src_app_services_agency_service__WEBPACK_IMPORTED_MODULE_2__.AgencyService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_insurance_company_service__WEBPACK_IMPORTED_MODULE_3__.InsuranceCompanyService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PickerController },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController }
];
AgencyCreatePage.propDecorators = {
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToggle,] }]
};
AgencyCreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-agency-create',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_agency_create_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_agency_create_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AgencyCreatePage);



/***/ }),

/***/ 48766:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/agency/agency-create/agency-create.page.html ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Prueba Agencia\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"body\">\r\n    <form [formGroup]=\"formAgency\" class=\"ion-padding\">\r\n      <div class=\"formulario\">\r\n      <ion-grid>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Código Zip:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input type=\"number\" class=\"customInput\" formControlName=\"zipCode\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Dirección:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input pattern=\".{3,50}\" class=\"customInput\" type=\"text\" formControlName=\"address\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Localidad:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"text\" formControlName=\"location\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Número de Teléfono:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"number\" formControlName=\"phoneNumber\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"9\" sizeLg=\"1\">\r\n            Activa:\r\n          </ion-col>\r\n          <ion-col sizeSm=\"3\" sizeLg=\"11  \">\r\n            <ion-item  lines=\"none\">\r\n              No<ion-toggle></ion-toggle>Si\r\n           </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n            <ion-label>Compañía de Seguros:</ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n\r\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"showPicker()\" *ngIf=\"this.insurance==null\">\r\n              Seleccionar\r\n            </ion-button>\r\n\r\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"showPicker()\" *ngIf=\"this.insurance!=null\">\r\n              {{this.insurance.cia_Name}}\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" shape=\"round\" class=\"button\">\r\n              Volver\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"6\">\r\n            <ion-button (click)=\"create()\" expand=\"block\" shape=\"round\" class=\"button\" [disabled]=\"this.formAgency.invalid||this.insurance==null\">\r\n              Crear Agencia\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    </form>\r\n\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 89760:
/*!****************************************************************************!*\
  !*** ./src/app/administrator/agency/agency-create/agency-create.page.scss ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n\n.button {\n  --background: #22388c;\n}\n\n.customInput {\n  border: 1px solid gray;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW5jeS1jcmVhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ1Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBQ1IiLCJmaWxlIjoiYWdlbmN5LWNyZWF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcclxuICAgIGJhY2tncm91bmQ6ICM3MTc0OTk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogIzIyMzg4YztcclxufVxyXG5cclxuLmN1c3RvbUlucHV0e1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBcInByaW1hcnlcIjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyLjVyZW07XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_agency_agency-create_agency-create_module_ts.js.map