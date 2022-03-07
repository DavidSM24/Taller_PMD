"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_administrator_agency_agency-update_agency-update_page_ts"],{

/***/ 2483:
/*!**************************************************************************!*\
  !*** ./src/app/administrator/agency/agency-update/agency-update.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencyUpdatePage": () => (/* binding */ AgencyUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_agency_update_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./agency-update.page.html */ 7447);
/* harmony import */ var _agency_update_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agency-update.page.scss */ 4478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_services_agency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/agency.service */ 9574);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/util.service */ 371);
/* harmony import */ var src_app_services_insurance_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/insurance-company.service */ 7639);









let AgencyUpdatePage = class AgencyUpdatePage {
    constructor(modalCtrl, fb, as, uts, is, pickerController) {
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.as = as;
        this.uts = uts;
        this.is = is;
        this.pickerController = pickerController;
        this.insurance = null;
    }
    ngOnInit() {
        try {
            this.insurance = this.agency.myInsuranceCompany;
            //this.uts.presentLoading();
            console.log(this.agency);
            this.formAgency = this.fb.group({
                zipCode: [this.agency.zipCode, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
                address: [this.agency.address, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
                location: [this.agency.location, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
                phoneNumber: [this.agency.phoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.companies = yield this.is.getAll();
            if (this.companies.length <= 0) {
                this.uts.presentToast('Para crear agencias, deben existir compañías de seguros.', 'danger');
            }
            this.uts.hideLoading();
        });
    }
    edit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.formAgency.get("zipCode").value);
            // let A: Agency = {
            //   id: this.agency.id,
            //   zipCode: this.formAgency.get("zipCode").value,
            //   address: this.formAgency.get("address").value,
            //   location: this.formAgency.get("location").value,
            //   phoneNumber: this.formAgency.get("phoneNumber").value,
            //   amount: 0,
            //   points: 0,
            //   pointsRedeemed: 0,
            //   myInsuranceCompany: this.agency.myInsuranceCompany,
            //   myCarRepairs: this.agency.myCarRepairs,
            //   myExchangesGifts: this.agency.myExchangesGifts,
            //   myUser: this.agency.myUser,
            //   active: this.toggle.checked
            // }
            // A = await this.as.createOrUpdate(A);
            // this.modalCtrl.dismiss({
            //   newNote:A
            // })
        });
    }
    close() {
        this.modalCtrl.dismiss();
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
AgencyUpdatePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_agency_service__WEBPACK_IMPORTED_MODULE_2__.AgencyService },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_insurance_company_service__WEBPACK_IMPORTED_MODULE_4__.InsuranceCompanyService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PickerController }
];
AgencyUpdatePage.propDecorators = {
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToggle,] }],
    agency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
AgencyUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-agency-update',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_agency_update_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_agency_update_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AgencyUpdatePage);



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

/***/ 7447:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/agency/agency-update/agency-update.page.html ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Prueba Agencia\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"body\">\r\n    <form [formGroup]=\"formAgency\" class=\"ion-padding\">\r\n      <div class=\"formulario\">\r\n      <ion-grid>\r\n        \r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <ion-label>Cód. Zip:</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"11\">\r\n            <ion-input type=\"number\" class=\"customInput\" formControlName=\"zipCode\" Disabled></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        \r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <ion-label>Dirección:</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"11\">\r\n            <ion-input class=\"customInput\" type=\"text\" formControlName=\"address\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <ion-label>Localidad:</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"11\">\r\n            <ion-input class=\"customInput\" type=\"text\" formControlName=\"location\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <ion-label>Número de Teléfono:</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"11\">\r\n            <ion-input class=\"customInput\" type=\"number\" formControlName=\"phoneNumber\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        \r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"rem\">\r\n            Activa:\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item  lines=\"none\">\r\n              No<ion-toggle></ion-toggle>Si\r\n           </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        \r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"rem\">\r\n            <ion-label>Compañía de Seguros:</ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n\r\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"showPicker()\" >\r\n              {{this.insurance.cia_Name}}\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" shape=\"round\" class=\"button\" (click)=\"close()\">\r\n              Cancelar\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"6\">\r\n            <ion-button (click)=\"edit()\" expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" class=\"button\" [disabled]=\"this.formAgency.invalid||this.insurance==null\">\r\n              Actualizar Agencia\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    </form>\r\n\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 4478:
/*!****************************************************************************!*\
  !*** ./src/app/administrator/agency/agency-update/agency-update.page.scss ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n\n.formulario {\n  margin-top: 1.5%;\n  padding: 2%;\n  border-top: 2px double gray;\n  border: 1px solid;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n  background-color: white;\n  margin-bottom: 4%;\n}\n\n.button {\n  --background: #22388c;\n}\n\n.customInput {\n  border: 1px solid gray;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW5jeS11cGRhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDUSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFDUiIsImZpbGUiOiJhZ2VuY3ktdXBkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gICAgYmFja2dyb3VuZDogIzcxNzQ5OTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb3tcclxuICAgIG1hcmdpbi10b3A6IDEuNSU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGJvcmRlci10b3A6IDJweCBkb3VibGUgZ3JheTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBcInByaW1hcnlcIjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyMjM4OGM7XHJcbn1cclxuXHJcbi5jdXN0b21JbnB1dHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogXCJwcmltYXJ5XCI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMi41cmVtO1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_administrator_agency_agency-update_agency-update_page_ts.js.map