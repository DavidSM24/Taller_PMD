"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_company_company-create_company-create_module_ts"],{

/***/ 27424:
/*!***************************************************************************************!*\
  !*** ./src/app/administrator/company/company-create/company-create-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyCreatePageRoutingModule": () => (/* binding */ CompanyCreatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _company_create_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-create.page */ 48983);




const routes = [
    {
        path: '',
        component: _company_create_page__WEBPACK_IMPORTED_MODULE_0__.CompanyCreatePage
    }
];
let CompanyCreatePageRoutingModule = class CompanyCreatePageRoutingModule {
};
CompanyCreatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CompanyCreatePageRoutingModule);



/***/ }),

/***/ 10926:
/*!*******************************************************************************!*\
  !*** ./src/app/administrator/company/company-create/company-create.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyCreatePageModule": () => (/* binding */ CompanyCreatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _company_create_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-create-routing.module */ 27424);
/* harmony import */ var _company_create_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-create.page */ 48983);







let CompanyCreatePageModule = class CompanyCreatePageModule {
};
CompanyCreatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _company_create_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompanyCreatePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_company_create_page__WEBPACK_IMPORTED_MODULE_1__.CompanyCreatePage]
    })
], CompanyCreatePageModule);



/***/ }),

/***/ 48983:
/*!*****************************************************************************!*\
  !*** ./src/app/administrator/company/company-create/company-create.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyCreatePage": () => (/* binding */ CompanyCreatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_company_create_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./company-create.page.html */ 68179);
/* harmony import */ var _company_create_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-create.page.scss */ 31138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_insurance_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/insurance-company.service */ 37639);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 371);








let CompanyCreatePage = class CompanyCreatePage {
    constructor(cs, fb, uts, modalCtrl) {
        this.cs = cs;
        this.fb = fb;
        this.uts = uts;
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
        this.formCompany = this.fb.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(50)]]
        });
    }
    create() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.uts.presentLoading();
            let ic = yield this.cs.getByCiaName(this.formCompany.get("name").value);
            yield this.uts.hideLoading();
            if (ic.length > 0) {
                this.uts.presentToast('Ya existe una compañia con este nombre, prueba con otro diferente.', 'danger', 'ban');
            }
            else {
                yield this.uts.presentLoading();
                let editCompany = {
                    cia_Name: this.formCompany.get("name").value
                };
                editCompany = yield this.cs.createOrUpdate(editCompany);
                if (editCompany) {
                    this.formCompany.reset();
                    this.cs.added = true;
                    this.uts.presentToast('La compañía se ha creado correctamente.', 'success', "checkmark-circle-outline");
                }
                else {
                    this.uts.presentToast('Un error ha surgido al intentar crear la compañía.', 'danger', 'ban');
                    editCompany = null;
                }
                yield this.uts.hideLoading();
            }
        });
    }
};
CompanyCreatePage.ctorParameters = () => [
    { type: src_app_services_insurance_company_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceCompanyService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
CompanyCreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-company-create',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_company_create_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_company_create_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CompanyCreatePage);



/***/ }),

/***/ 68179:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/company/company-create/company-create.page.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Crear Compañía de Usuarios\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <div class=\"body\">\r\n\r\n    <form [formGroup]=\"formCompany\" class=\"ion-padding\">\r\n      <div class=\"formulario\">\r\n      <ion-grid>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n            <ion-label>Nombre CIA:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"10\" sizeLg=\"10\">\r\n            <ion-input type=\"text\" class=\"customInput\" formControlName=\"name\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.formCompany.get('name').invalid&&formCompany.get('name').touched\">\r\n              *Campo obligatorio. Debe introducir entre 3 y 50 caracteres.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" routerLink=\"/tab-administrator/company/list\" class=\"button\">\r\n              Volver\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" (click)=\"create()\" class=\"button\" [disabled]=\"this.formCompany.invalid\">\r\n              Crear\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    </form>\r\n\r\n</div>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ 31138:
/*!*******************************************************************************!*\
  !*** ./src/app/administrator/company/company-create/company-create.page.scss ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n\n.button {\n  --background: #22388c;\n}\n\nion-input.ng-invalid.ng-touched {\n  border-left: 5px solid #a94442;\n  border-right: 5px solid #a94442;\n}\n\nion-input.ng-valid.ng-dirty {\n  border-left: 5px solid #42A948;\n  border-right: 5px solid #42A948;\n}\n\nselect.ng-invalid.ng-touched {\n  border-left: 5px solid #a94442;\n  border-right: 5px solid #a94442;\n}\n\nselect.ng-valid.ng-dirty {\n  border-left: 5px solid #42A948;\n  border-right: 5px solid #42A948;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnktY3JlYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFDQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFFRjs7QUFBQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFHRjs7QUFEQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFJRiIsImZpbGUiOiJjb21wYW55LWNyZWF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcclxuICBiYWNrZ3JvdW5kOiAjNzE3NDk5O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICAtLWJhY2tncm91bmQ6ICMyMjM4OGM7XHJcbn1cclxuXHJcbmlvbi1pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjtcclxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG59XHJcbmlvbi1pbnB1dC5uZy12YWxpZC5uZy1kaXJ0eSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICM0MkE5NDg7XHJcbn1cclxuc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNhOTQ0NDI7XHJcbn1cclxuc2VsZWN0Lm5nLXZhbGlkLm5nLWRpcnR5IHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7XHJcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzQyQTk0ODtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_company_company-create_company-create_module_ts.js.map