"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_gift_gif-create_gif-create_module_ts"],{

/***/ 47573:
/*!****************************************************************************!*\
  !*** ./src/app/administrator/gift/gif-create/gif-create-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifCreatePageRoutingModule": () => (/* binding */ GifCreatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _gif_create_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gif-create.page */ 96196);




const routes = [
    {
        path: '',
        component: _gif_create_page__WEBPACK_IMPORTED_MODULE_0__.GifCreatePage
    }
];
let GifCreatePageRoutingModule = class GifCreatePageRoutingModule {
};
GifCreatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GifCreatePageRoutingModule);



/***/ }),

/***/ 94844:
/*!********************************************************************!*\
  !*** ./src/app/administrator/gift/gif-create/gif-create.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifCreatePageModule": () => (/* binding */ GifCreatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _gif_create_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gif-create-routing.module */ 47573);
/* harmony import */ var _gif_create_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gif-create.page */ 96196);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/util.service */ 371);








let GifCreatePageModule = class GifCreatePageModule {
};
GifCreatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _gif_create_routing_module__WEBPACK_IMPORTED_MODULE_0__.GifCreatePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        providers: [_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService],
        declarations: [_gif_create_page__WEBPACK_IMPORTED_MODULE_1__.GifCreatePage]
    })
], GifCreatePageModule);



/***/ }),

/***/ 96196:
/*!******************************************************************!*\
  !*** ./src/app/administrator/gift/gif-create/gif-create.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifCreatePage": () => (/* binding */ GifCreatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gif_create_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./gif-create.page.html */ 33351);
/* harmony import */ var _gif_create_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gif-create.page.scss */ 73357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_gift_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/gift.service */ 44483);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 371);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);









let GifCreatePage = class GifCreatePage {
    constructor(gs, fb, uts, router) {
        this.gs = gs;
        this.fb = fb;
        this.uts = uts;
        this.router = router;
        this.file = null;
        this.formGift = this.fb.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(50)]],
            points: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("[0-9]+")]]
        });
    }
    create() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.formGift.get("points").value > 0) {
                yield this.uts.presentLoading();
                if (this.extension) {
                    if (this.extension == ("image/jpg")
                        || this.extension == ("image/jpeg")
                        || this.extension == "image/png") {
                        let newGift = {
                            name: this.formGift.get("name").value,
                            points: this.formGift.get("points").value,
                            available: this.toggle.checked,
                            picture: '',
                            exchangeGifts: []
                        };
                        newGift = yield this.gs.createOrUpdate(newGift, this.file);
                        if (newGift.id) {
                            this.gs.added = true;
                            this.formGift.reset();
                            this.uts.presentToast('El regalo se ha creado correctamente.', 'success', "checkmark-circle-outline");
                        }
                        else {
                            this.uts.presentToast('Un error ha surgido al intentar crear el regalo.', 'danger', 'ban');
                        }
                    }
                }
                yield this.uts.hideLoading();
            }
            else
                this.uts.presentToast("Los puntos deben ser mayores de 0.", "danger", 'ban');
        });
    }
    test_Update() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let toDrop = yield this.gs.getAll();
            let last = toDrop[toDrop.length - 1];
            last.name = "hola1";
            if (toDrop != null) {
                last = yield this.gs.createOrUpdate(last, this.file);
                this.img = "https://res.cloudinary.com/duq0pz1vi/image/upload/v1645471738/" + last.picture;
            }
        });
    }
    test_Delete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let toDrop = yield this.gs.getAll();
            let last = toDrop[toDrop.length - 1];
            if (toDrop != null) {
            }
        });
    }
    changeListener($event) {
        try {
            if ($event) {
                let extension = $event.target.files[0].type.toString();
                if (extension == ("image/jpeg")
                    || extension == ("image/png")) {
                    this.file = $event.target.files[0];
                    this.extension = this.file.type;
                    this.img = URL.createObjectURL(this.file);
                    this.errorMsg = false;
                }
                else {
                    this.file = null;
                    this.errorMsg = true;
                }
            }
        }
        catch (error) {
            //alert
            this.errorMsg = true;
            this.file = null;
        }
    }
};
GifCreatePage.ctorParameters = () => [
    { type: src_app_services_gift_service__WEBPACK_IMPORTED_MODULE_2__.GiftService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
GifCreatePage.propDecorators = {
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToggle,] }]
};
GifCreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-gif-create',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gif_create_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_gif_create_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GifCreatePage);



/***/ }),

/***/ 33351:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/gift/gif-create/gif-create.page.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Crear Regalo\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <div class=\"body\">\r\n    <div class=\"ion-padding\" *ngIf=\"this.img!=null\">\r\n      <div class=\"center\">\r\n\r\n        <ion-card>\r\n          <ion-img  [src]=\"this.img\"></ion-img>\r\n        </ion-card>\r\n\r\n      </div>\r\n    </div>\r\n    <form [formGroup]=\"formGift\" class=\"ion-padding\">\r\n      <div class=\"formulario\">\r\n      <ion-grid>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Nombre:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input type=\"text\" class=\"customInput\" formControlName=\"name\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.formGift.get('name').invalid&&formGift.get('name').touched\">\r\n              *Campo obligatorio. Debe introducir entre 3 y 50 caracteres.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Puntos:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"number\" formControlName=\"points\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.formGift.get('points').invalid&&formGift.get('points').touched\">\r\n              *Campo obligatorio. El valor mínimo es 1 punto.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"9\" sizeLg=\"1.5\">\r\n            Disponible:\r\n          </ion-col>\r\n          <ion-col sizeSm=\"3\" sizeLg=\"9.5  \">\r\n            <ion-item  lines=\"none\">\r\n              No<ion-toggle></ion-toggle>Si\r\n           </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n\r\n          <ion-col size=\"12\">\r\n            <ion-input type=\"file\" accept=\".jpg,.jpeg,.png\" (change)=\"changeListener($event)\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.errorMsg\">\r\n              *Campo obligatorio. Debe seleccionar un archivo válido para imagen (png, jpg, etc.).\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" routerLink=\"/tab-administrator/gift/list\" class=\"button\">\r\n              Volver\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" (click)=\"create()\" class=\"button\" [disabled]=\"this.formGift.invalid||this.file==null\">\r\n              Crear Regalo\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n\r\n      </ion-grid>\r\n    </div>\r\n    </form>\r\n\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 73357:
/*!********************************************************************!*\
  !*** ./src/app/administrator/gift/gif-create/gif-create.page.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n.body ion-card {\n  height: 25%;\n  width: 25%;\n}\n.body ion-card ion-img {\n  border: 0.1cm solid black;\n}\n.button {\n  --background: #22388c;\n}\n.img {\n  border: 5px solid black;\n}\nion-input.ng-invalid.ng-touched {\n  border-left: 5px solid #a94442;\n  border-right: 5px solid #a94442;\n}\nion-input.ng-valid.ng-dirty {\n  border-left: 5px solid #42A948;\n  border-right: 5px solid #42A948;\n}\nselect.ng-invalid.ng-touched {\n  border-left: 5px solid #a94442;\n  border-right: 5px solid #a94442;\n}\nselect.ng-valid.ng-dirty {\n  border-left: 5px solid #42A948;\n  border-right: 5px solid #42A948;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpZi1jcmVhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBQ0o7QUFBSTtFQUNFLHlCQUFBO0FBRU47QUFLRTtFQUNFLHFCQUFBO0FBRko7QUFLRTtFQUNFLHVCQUFBO0FBRko7QUFLRTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFGSjtBQUlFO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQURKO0FBR0U7RUFDRSw4QkFBQTtFQUNBLCtCQUFBO0FBQUo7QUFFRTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFDSiIsImZpbGUiOiJnaWYtY3JlYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gIGJhY2tncm91bmQ6ICM3MTc0OTk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG5cclxuICBpb24tY2FyZHtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGlvbi1pbWd7XHJcbiAgICAgIGJvcmRlcjogMC4xMGNtIHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4gIC5idXR0b257XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyMjM4OGM7XHJcbiAgfVxyXG5cclxuICAuaW1ne1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDAsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgaW9uLWlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7XHJcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG4gIH1cclxuICBpb24taW5wdXQubmctdmFsaWQubmctZGlydHkge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzQyQTk0ODtcclxuICB9XHJcbiAgc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7XHJcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG4gIH1cclxuICBzZWxlY3QubmctdmFsaWQubmctZGlydHkge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzQyQTk0ODtcclxuICB9XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_gift_gif-create_gif-create_module_ts.js.map