"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_user_carRepair_car-repair-update_car-repair-update_page_ts"],{

/***/ 55744:
/*!****************************************************************************!*\
  !*** ./src/app/user/carRepair/car-repair-update/car-repair-update.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairUpdatePage": () => (/* binding */ CarRepairUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_car_repair_update_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./car-repair-update.page.html */ 42207);
/* harmony import */ var _car_repair_update_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-repair-update.page.scss */ 36577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 57366);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 52498);
/* harmony import */ var src_app_services_car_repair_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/car-repair.service */ 7928);
/* harmony import */ var src_app_services_date_time_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/date-time-service.service */ 71249);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ 371);










let CarRepairUpdatePage = class CarRepairUpdatePage {
    constructor(modalController, carRepairService, formBuilder, uts, dateTimeService) {
        this.modalController = modalController;
        this.carRepairService = carRepairService;
        this.formBuilder = formBuilder;
        this.uts = uts;
        this.dateTimeService = dateTimeService;
        //variable que guarda los datos proporcionados por el evento del ion-dateTime
        this.dateValue = '';
    }
    ngOnInit() {
        //se crea la fecha en formato español
        if (this.carRepair.dateOrder) {
            this.spanishDateOrder = this.dateTimeService.formatSpanishDateString("" + this.carRepair.dateOrder);
            this.formatedString = this.dateTimeService.formatString("" + this.carRepair.dateOrder);
        }
        //compruba si exite una fecha de reparación previa, en caso de que exista se preparan las variables para mostrarlas en el html
        if (this.carRepair.dateRepair) {
            this.spanishDateRepair = this.dateTimeService.formatSpanishDateString("" + this.carRepair.dateRepair);
        }
        this.formCarRepair = this.formBuilder.group({
            carPlate: [this.carRepair.carPlate.toUpperCase(), [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(10)]],
            model: [this.carRepair.model, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)]],
            brandCar: [this.carRepair.brandCar, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)]],
            clienteName: [this.carRepair.clienteName, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)]],
            dateOrder: [this.carRepair.dateOrder, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            //esta variable solo se usa para mostrar la fecha de la orden con el formato de España en el html
            spanishDateRepair: [this.spanishDateRepair],
        });
    }
    /**
    * Método que guarda la nota una vez editada
    */
    editCarRepair() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            //se asigna los datos
            this.newCarRepair = {
                id: this.carRepair.id,
                operation: this.carRepair.operation,
                carPlate: this.formCarRepair.get("carPlate").value,
                model: this.formCarRepair.get("model").value,
                brandCar: this.formCarRepair.get("brandCar").value,
                clienteName: this.formCarRepair.get("clienteName").value,
                dateOrder: this.formatedString,
                nor: this.carRepair.nor,
                amount: this.carRepair.amount,
                dateRepair: this.carRepair.dateRepair,
                asigPoints: this.carRepair.asigPoints,
                repaired: this.carRepair.repaired,
                myAgency: this.carRepair.myAgency
            };
            try {
                //Guarda la reparación en la base de datos
                this.newCarRepair = yield this.carRepairService.createOrUpdate(this.newCarRepair);
                //presenta el toast para que el usuario sepa que se ha guardado con  éxito
                yield this.uts.presentToast("Reparación modificada correctamente.", "success", "checkmark-circle-outline");
                //Cierra el modal pasando la reparación guardada a la página con las reparaciones
                this.modalController.dismiss({
                    newCarRepair: this.newCarRepair
                });
            }
            catch (error) {
                this.uts.presentToast("Fallo al guradar", "danger", 'ban');
            }
        });
    }
    /**
    * Método para cerrar el modal
    */
    closeModal() {
        this.modalController.dismiss();
    }
    //Métodos para cerrar y abrir el modal de DateTime
    /**
    * Metodo que se usa en el ion-DateTime para confirmar la fecha elegida
    */
    confirm() {
        this.datetime.confirm(true);
    }
    /**
     * Método que se usa en ion-DateTime para cerrar la ventana
     */
    reset() {
        this.datetime.cancel(true);
    }
    ////Métodos para cambiar la fecha
    /**
    * Método que asigna la fecha de reparación cuando el usuario pulsa el botón de aceptar en el ión date time
    * @param event
    */
    changeDateRepair(event) {
        this.spanishDateOrder = this.dateTimeService.formatSpanishDateString(event);
        this.stringDateOrder = this.dateTimeService.formatString(event);
        this.dateValue = event;
        this.formatedString = this.formatDate(this.dateValue);
    }
    /**
  * Metodo para darle formato a la fecha y que se pueda guardar en la base de datos
  * @param value
  * @returns fecha con el formato yyyy-MM-ddTHH:mm
  */
    formatDate(value) {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(value), 'yyyy-MM-dd HH:mm:SS');
    }
};
CarRepairUpdatePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_services_car_repair_service__WEBPACK_IMPORTED_MODULE_2__.CarRepairService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService },
    { type: src_app_services_date_time_service_service__WEBPACK_IMPORTED_MODULE_3__.DateTimeServiceService }
];
CarRepairUpdatePage.propDecorators = {
    carRepair: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    datetime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonDatetime,] }]
};
CarRepairUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-car-repair-update',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_car_repair_update_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_car_repair_update_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CarRepairUpdatePage);



/***/ }),

/***/ 42207:
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/user/carRepair/car-repair-update/car-repair-update.page.html ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"medium\">\r\n    <ion-title>Editar Reparación</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content   [fullscreen]=\"true\">\r\n  <div  class=\"body\">\r\n    <form [formGroup]=\"formCarRepair\" class=\"ion-padding\">\r\n      <div  class=\"formulario\">\r\n        <ion-grid color=\"medium\">\r\n\r\n          <ion-row class=\"ion-align-items-center\" style=\"margin-left:-2% !important;\">\r\n\r\n            <ion-col >\r\n\r\n              <ion-item button=\"true\" id=\"open-date-input\">\r\n                <ion-text>Fecha de Alta:   {{ spanishDateOrder }}</ion-text>\r\n                <ion-popover trigger=\"open-date-input\" show-backdrop=\"false\">\r\n                  <ng-template>\r\n                    <ion-datetime color=\"secondary\" #popoverDatetime [value]=\"stringDateOrder\"\r\n                      (ionChange)=\"changeDateRepair(popoverDatetime.value)\">\r\n                      <ion-buttons slot=\"buttons\">\r\n                        <ion-button shape=\"round\" class=\"button\" (click)=\"confirm()\">Aceptar</ion-button>\r\n                        <ion-button shape=\"round\" class=\"button\" (click)=\"reset()\">Cancelar</ion-button>\r\n                      </ion-buttons>\r\n                    </ion-datetime>\r\n                  </ng-template>\r\n                </ion-popover>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n              <ion-label>Matrícula</ion-label>\r\n            </ion-col>\r\n            <ion-col sizeSm=\"11\" sizeLg=\"10\">\r\n              <ion-input class=\"customInput\" type=\"text\" style=\"text-transform: uppercase\" formControlName=\"carPlate\" required=\"true\"></ion-input>\r\n              <span class=\"invalid\" *ngIf=\"this.formCarRepair.get('carPlate').invalid&&formCarRepair.get('carPlate').touched\">\r\n                *Debe rellenar este campo. Introduzca entre 4 y 10 caracteres.\r\n              </span>\r\n            </ion-col>\r\n\r\n          </ion-row>\r\n\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n              <ion-label>Modelo</ion-label>\r\n            </ion-col>\r\n            <ion-col sizeSm=\"5\" sizeLg=\"10\">\r\n              <ion-input class=\"customInput\" type=\"text\" formControlName=\"model\" required=\"true\"></ion-input>\r\n              <span class=\"invalid\" *ngIf=\"this.formCarRepair.get('model').invalid&&formCarRepair.get('model').touched\">\r\n                *Debe rellenar este campo. Introduzca entre 2 y 50 caracteres.\r\n              </span>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n              <ion-label>Marca</ion-label>\r\n            </ion-col>\r\n            <ion-col sizeSm=\"5\" sizeLg=\"10\">\r\n              <ion-input class=\"customInput\" type=\"text\" formControlName=\"brandCar\" required=\"true\"></ion-input>\r\n              <span class=\"invalid\" *ngIf=\"this.formCarRepair.get('brandCar').invalid&&formCarRepair.get('brandCar').touched\">\r\n                *Debe rellenar este campo. Introduzca entre 2 y 50 caracteres.\r\n              </span>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col sizeSm=\"2\" sizeLg=\"2\">\r\n              <ion-label>Cliente</ion-label>\r\n            </ion-col>\r\n            <ion-col sizeSm=\"10\" sizeLg=\"10\">\r\n              <ion-input class=\"customInput\" type=\"text\" formControlName=\"clienteName\" required=\"true\"></ion-input>\r\n              <span class=\"invalid\" *ngIf=\"this.formCarRepair.get('clienteName').invalid&&formCarRepair.get('clienteName').touched\">\r\n                *Debe rellenar este campo. Introduzca entre 2 y 50 caracteres.\r\n              </span>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col sizeSm=\"7\" sizeLg=\"2\">\r\n              Reparado\r\n            </ion-col>\r\n            <ion-col sizeSm=\"7\" sizeLg=\"4\">\r\n              <div title=\"Sin Reparar. Espere asignación de administradores.\">\r\n                <ion-icon *ngIf=\"!carRepair.repaired\" name=\"construct\" style=\"pointer-events: none;zoom:1.7;color: red;\"></ion-icon>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"ion-align-items-center\">\r\n\r\n            <ion-col size=\"6\">\r\n              <ion-button [disabled]=\"this.formCarRepair.invalid\" expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" (click)=\"editCarRepair()\"\r\n                class=\"button\">\r\n                Guardar\r\n              </ion-button>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"6\">\r\n              <ion-button expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" (click)=\"closeModal()\"\r\n                class=\"button2\">\r\n                Cancelar\r\n              </ion-button>\r\n            </ion-col>\r\n\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 36577:
/*!******************************************************************************!*\
  !*** ./src/app/user/carRepair/car-repair-update/car-repair-update.page.scss ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #d0e5f0 !important;\n  background-size: cover;\n  min-height: 100%;\n}\n\n.formulario {\n  margin-top: 1.5%;\n  padding: 2%;\n  border-top: 2px double gray;\n  border: 1px solid;\n  border-color: \"medium\";\n  border-radius: 2.5rem;\n  background-color: white;\n  margin-bottom: 4%;\n}\n\n.button {\n  --background: #4083cc;\n  color: white;\n}\n\n.button2 {\n  --background: #ff8282;\n  color: white;\n}\n\n.customInput {\n  border: 1px solid gray;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n}\n\n.secundaryInput {\n  margin-left: 5%;\n}\n\n.date {\n  margin-left: 20%;\n}\n\n.buttonDate {\n  background-color: #717499;\n}\n\nion-input.ng-invalid.ng-touched {\n  border-left: 5px solid #a94442;\n  border-right: 5px solid #a94442;\n}\n\nion-input.ng-valid.ng-dirty {\n  border-left: 5px solid #42A948;\n  border-right: 5px solid #42A948;\n}\n\nselect.ng-invalid.ng-touched {\n  border-left: 5px solid #a94442;\n  border-right: 5px solid #a94442;\n}\n\nselect.ng-valid.ng-dirty {\n  border-left: 5px solid #42A948;\n  border-right: 5px solid #42A948;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1yZXBhaXItdXBkYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ1Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBRVI7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtBQUlKOztBQURBO0VBQ0kseUJBQUE7QUFJSjs7QUFBQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFHRjs7QUFEQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFJRjs7QUFGQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFLRjs7QUFIQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFNRiIsImZpbGUiOiJjYXItcmVwYWlyLXVwZGF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcclxuICAgIGJhY2tncm91bmQ6ICNkMGU1ZjAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb3tcclxuICAgIG1hcmdpbi10b3A6IDEuNSU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGJvcmRlci10b3A6IDJweCBkb3VibGUgZ3JheTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBcIm1lZGl1bVwiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMi41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICAtLWJhY2tncm91bmQ6ICM0MDgzY2M7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5idXR0b24ye1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmODI4MjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jdXN0b21JbnB1dHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogXCJwcmltYXJ5XCI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMi41cmVtO1xyXG59XHJcbi5zZWN1bmRhcnlJbnB1dHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG4uZGF0ZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbn1cclxuXHJcbi5idXR0b25EYXRle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcxNzQ5OTtcclxuXHJcbn1cclxuXHJcbmlvbi1pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjtcclxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG59XHJcbmlvbi1pbnB1dC5uZy12YWxpZC5uZy1kaXJ0eSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICM0MkE5NDg7XHJcbn1cclxuc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNhOTQ0NDI7XHJcbn1cclxuc2VsZWN0Lm5nLXZhbGlkLm5nLWRpcnR5IHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7XHJcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzQyQTk0ODtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_user_carRepair_car-repair-update_car-repair-update_page_ts.js.map