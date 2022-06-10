"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_administrator_carRepair_car-repair-saw_car-repair-saw_page_ts"],{

/***/ 37584:
/*!*******************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-saw/car-repair-saw.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairSawPage": () => (/* binding */ CarRepairSawPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_car_repair_saw_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./car-repair-saw.page.html */ 57485);
/* harmony import */ var _car_repair_saw_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-repair-saw.page.scss */ 51332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_date_time_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/date-time-service.service */ 71249);
/* harmony import */ var _car_repair_update_car_repair_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../car-repair-update/car-repair-update.page */ 53022);









let CarRepairSawPage = class CarRepairSawPage {
    constructor(modalController, formBuilder, routes, dateTimeService) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.routes = routes;
        this.dateTimeService = dateTimeService;
        this.validator = this.formBuilder.group({
            operation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            carPlate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            model: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            brandCar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            clienteName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            nor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            amount: [''],
            asigPoints: [''],
            myAgency: [''],
            dateOrder: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            dateRepair: [''],
            repaired: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
        });
    }
    ngOnInit() {
        this.spanishDateOrder = this.dateTimeService.formatSpanishDateString("" + this.carRepair.dateOrder);
        if (this.carRepair.dateRepair) {
            this.spanishDateRepair = this.dateTimeService.formatSpanishDateString("" + this.carRepair.dateRepair);
        }
        this.formCarRepair = this.formBuilder.group({
            operation: [this.carRepair.operation, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            carPlate: [this.carRepair.carPlate, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            model: [this.carRepair.model, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            brandCar: [this.carRepair.brandCar, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            clientName: [this.carRepair.clienteName, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            nor: [this.carRepair.nor, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            amount: [this.carRepair.amount],
            asigPoints: [this.carRepair.asigPoints],
            myAgency: [this.carRepair.myAgency.myUser.name],
            dateOrder: [this.spanishDateOrder, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            dateRepair: [this.spanishDateRepair],
            repaired: [this.carRepair.repaired, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
        });
        if (this.carRepair.dateRepair == null) {
            this.formCarRepair.get('dateRepair').setValue("Sin Reparar");
        }
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.oldCarRepair = {
                id: this.carRepair.id,
                operation: this.carRepair.operation,
                carPlate: this.carRepair.carPlate,
                model: this.carRepair.model,
                brandCar: this.carRepair.brandCar,
                clienteName: this.carRepair.clienteName,
                dateOrder: this.carRepair.dateOrder,
                nor: this.carRepair.nor,
                amount: this.carRepair.amount,
                dateRepair: this.carRepair.dateRepair,
                asigPoints: this.carRepair.asigPoints,
                repaired: this.carRepair.repaired,
                myAgency: this.carRepair.myAgency
            };
        });
    }
    /**
     * Método que actualiza una reparación mediante un modal
     * @param carRepair Reparación que se quiera modificar
     */
    edit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _car_repair_update_car_repair_update_page__WEBPACK_IMPORTED_MODULE_3__.CarRepairUpdatePage,
                //hoja de estilos
                cssClass: 'my-modal-class',
                //pasar datos al modal
                componentProps: {
                    'carRepair': this.carRepair
                }
            });
            try {
                return yield modal.present();
            }
            catch (error) {
            }
        });
    }
    closeModal() {
        this.modalController.dismiss();
    }
};
CarRepairSawPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_date_time_service_service__WEBPACK_IMPORTED_MODULE_2__.DateTimeServiceService }
];
CarRepairSawPage.propDecorators = {
    carRepair: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
CarRepairSawPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-car-repair-saw',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_car_repair_saw_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_car_repair_saw_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CarRepairSawPage);



/***/ }),

/***/ 57485:
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/carRepair/car-repair-saw/car-repair-saw.page.html ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Reparación {{carRepair.operation}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"body\">\r\n    <form [formGroup]=\"formCarRepair\" class=\"ion-padding\">\r\n      <div class=\"formulario\">\r\n      <ion-grid>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"3\">\r\n            <ion-label>Operación</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"9\">\r\n            <ion-input type=\"number\" readonly class=\"customInput\" formControlName=\"operation\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"3\">\r\n            <ion-label>Matrícula</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"9\">\r\n            <ion-input class=\"customInput\" readonly type=\"text\" formControlName=\"carPlate\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"3\">\r\n            <ion-label>Modelo</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"5\" sizeLg=\"9\">\r\n            <ion-input class=\"customInput\" readonly type=\"text\" formControlName=\"model\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"3\">\r\n            <ion-label>Marca</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"5\" sizeLg=\"9\">\r\n            <ion-input class=\"customInput\" readonly type=\"text\" formControlName=\"brandCar\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"3\">\r\n            <ion-label>Cliente</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"9\">\r\n            <ion-input class=\"customInput\" readonly type=\"text\" formControlName=\"clientName\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"3\">\r\n            <ion-label>NOR</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"9\">\r\n            <ion-input class=\"customInput\" readonly type=\"number\" formControlName=\"nor\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"3\">\r\n            <ion-label>Coste</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"9\">\r\n            <ion-input class=\"customInput\" readonly type=\"number\" formControlName=\"amount\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"3\">\r\n            <ion-label>Puntos</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"9\">\r\n            <ion-input class=\"customInput\" readonly type=\"number\" formControlName=\"asigPoints\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"3\">\r\n            <ion-label>Agencia</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"9\">\r\n            <ion-input class=\"customInput\" readonly type=\"text\" formControlName=\"myAgency\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col   sizeSm=\"7\" sizeLg=\"3\">\r\n            <ion-label>Fecha de alta</ion-label>\r\n          </ion-col>\r\n          <ion-col  sizeSm=\"7\" sizeLg=\"4\" >\r\n            <ion-input class=\"customInput\" readonly type=\"text\" formControlName=\"dateOrder\"></ion-input>\r\n          </ion-col>\r\n\r\n\r\n\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"7\" sizeLg=\"3\">\r\n            <ion-label>Fecha de reparación</ion-label>\r\n          </ion-col>\r\n          <ion-col  sizeSm=\"7\" sizeLg=\"4\">\r\n            <ion-input class=\"customInput\" readonly type=\"text\" formControlName=\"dateRepair\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col  sizeSm=\"7\" sizeLg=\"3\">\r\n            Reparado\r\n          </ion-col>\r\n          <ion-col sizeSm=\"7\" sizeLg=\"1.5\">\r\n            <div title=\"Reparada\">\r\n              <ion-icon *ngIf=\"carRepair.repaired\" name=\"checkmark-circle\" color=\"success\" style=\"zoom: 2.0;pointer-events: none;\"></ion-icon>\r\n            </div>\r\n\r\n            <div title=\"Sin Reparar\">\r\n              <ion-icon *ngIf=\"!carRepair.repaired\" name=\"close-circle\" color=\"danger\" style=\"zoom: 2.0;pointer-events: none;\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"center\">\r\n          <ion-col class=\"center\">\r\n            <ion-button expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" (click)=\"closeModal()\" class=\"button\">\r\n              Cancelar\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    </form>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 51332:
/*!*********************************************************************************!*\
  !*** ./src/app/administrator/carRepair/car-repair-saw/car-repair-saw.page.scss ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n\n.formulario {\n  margin: 1.5rem;\n}\n\n.secundaryInput {\n  margin-left: 5%;\n}\n\n.date {\n  margin-left: 20%;\n}\n\n.button {\n  --background: #22388c;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1yZXBhaXItc2F3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7QUFFSjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtBQUVGIiwiZmlsZSI6ImNhci1yZXBhaXItc2F3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gICAgYmFja2dyb3VuZDogIzcxNzQ5OTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb3tcclxuICBtYXJnaW46IDEuNXJlbTtcclxufVxyXG5cclxuLnNlY3VuZGFyeUlucHV0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcbi5kYXRle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICAtLWJhY2tncm91bmQ6ICMyMjM4OGM7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_administrator_carRepair_car-repair-saw_car-repair-saw_page_ts.js.map