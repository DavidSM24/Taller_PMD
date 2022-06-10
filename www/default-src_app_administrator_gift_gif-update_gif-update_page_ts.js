"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_administrator_gift_gif-update_gif-update_page_ts"],{

/***/ 76667:
/*!******************************************************************!*\
  !*** ./src/app/administrator/gift/gif-update/gif-update.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifUpdatePage": () => (/* binding */ GifUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gif_update_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./gif-update.page.html */ 50881);
/* harmony import */ var _gif_update_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gif-update.page.scss */ 55795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_gift_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/gift.service */ 44483);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 371);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 83981);









let GifUpdatePage = class GifUpdatePage {
    constructor(modalCtrl, gs, fb, uts, http) {
        this.modalCtrl = modalCtrl;
        this.gs = gs;
        this.fb = fb;
        this.uts = uts;
        this.http = http;
        this.file = null;
        this.formGift = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            points: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.file = yield this.http.get("https://res.cloudinary.com/duq0pz1vi/image/upload/v1645471738/" + this.gift.picture, { responseType: 'blob' }).subscribe((resp) => {
                    this.file = resp;
                });
                this.formGift = this.fb.group({
                    name: [this.gift.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(50)]],
                    points: [this.gift.points, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("[0-9]+")]]
                });
            }
            catch (error) {
            }
        });
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.img = "https://res.cloudinary.com/duq0pz1vi/image/upload/v1645471738/" + this.gift.picture;
        });
    }
    edit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.formGift.get('points').value > 0) {
                yield this.uts.presentLoading();
                let newGift = {
                    id: this.gift.id,
                    name: this.formGift.get("name").value,
                    points: this.formGift.get("points").value,
                    available: this.toggle.checked,
                    picture: '',
                    exchangeGifts: this.gift.exchangeGifts
                };
                newGift = yield this.gs.createOrUpdate(newGift, this.file);
                if (newGift.id) {
                    this.formGift.reset();
                    this.uts.presentToast('El regalo se ha modificado correctamente.', 'success', "checkmark-circle-outline");
                }
                else {
                    this.uts.presentToast('Ha habido un error relacionado con subida de la imagen. Inténtelo más tarde.', 'danger', 'ban');
                    newGift = null;
                }
                yield this.uts.hideLoading();
                if (newGift) {
                    this.modalCtrl.dismiss({
                        newGift: newGift
                    });
                }
                else
                    this.modalCtrl.dismiss();
            }
            else
                this.uts.presentToast('Los puntos deben ser superiores a 0.', 'danger', 'ban');
        });
    }
    close() {
        this.modalCtrl.dismiss();
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
            this.file = null;
            this.errorMsg = true;
        }
    }
};
GifUpdatePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_services_gift_service__WEBPACK_IMPORTED_MODULE_2__.GiftService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient }
];
GifUpdatePage.propDecorators = {
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToggle,] }],
    gift: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
GifUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-gif-update',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gif_update_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_gif_update_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GifUpdatePage);



/***/ }),

/***/ 50881:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/gift/gif-update/gif-update.page.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Editar Regalo\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <div class=\"body\">\r\n    <div class=\"ion-padding\">\r\n      <div class=\"center\">\r\n\r\n        <ion-card>\r\n          <ion-img  [src]=\"this.img\"></ion-img>\r\n        </ion-card>\r\n\r\n      </div>\r\n    </div>\r\n    <form [formGroup]=\"formGift\" class=\"ion-padding\">\r\n      <div class=\"formulario\">\r\n      <ion-grid>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Nombre:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input type=\"text\" class=\"customInput\" formControlName=\"name\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.formGift.get('name').invalid&&formGift.get('name').touched\">\r\n              *Campo obligatorio. Debe introducir entre 3 y 50 caracteres.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Puntos:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"number\" formControlName=\"points\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.formGift.get('points').invalid&&formGift.get('points').touched\">\r\n              *Campo obligatorio. El valor mínimo es 1 punto.\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"9\" sizeLg=\"1.5\">\r\n            Disponible:\r\n          </ion-col>\r\n          <ion-col sizeSm=\"3\" sizeLg=\"9.5  \">\r\n            <ion-item  lines=\"none\">\r\n              No<ion-toggle [checked]=\"this.gift.available\"></ion-toggle>Si\r\n           </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n\r\n          <ion-col size=\"12\">\r\n            <ion-input type=\"file\" accept=\".jpg,.jpeg,.png\" (change)=\"changeListener($event)\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col>\r\n            <p style=\"color:red;\" *ngIf=\"this.errorMsg\">\r\n              *Campo obligatorio. Debe seleccionar un archivo válido para imagen (png, jpg, etc.).\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" (click)=\"close()\" class=\"button\">\r\n              Cancelar\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" (click)=\"edit()\" class=\"button\" [disabled]=\"this.formGift.invalid||this.file==null\">\r\n              ACTUALIZAR\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    </form>\r\n\r\n</div>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ 55795:
/*!********************************************************************!*\
  !*** ./src/app/administrator/gift/gif-update/gif-update.page.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n.body ion-card {\n  height: 25%;\n  width: 25%;\n}\n.body ion-card ion-img {\n  border: 0.1cm solid black;\n}\n.button {\n  --background: #22388c;\n}\nion-input.ng-invalid.ng-touched {\n  border-left: 5px solid #a94442;\n  border-right: 5px solid #a94442;\n}\nion-input.ng-valid.ng-dirty {\n  border-left: 5px solid #42A948;\n  border-right: 5px solid #42A948;\n}\nselect.ng-invalid.ng-touched {\n  border-left: 5px solid #a94442;\n  border-right: 5px solid #a94442;\n}\nselect.ng-valid.ng-dirty {\n  border-left: 5px solid #42A948;\n  border-right: 5px solid #42A948;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpZi11cGRhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBQ0o7QUFBSTtFQUNFLHlCQUFBO0FBRU47QUFHRTtFQUNFLHFCQUFBO0FBQUo7QUFFRTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFDSjtBQUNFO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQUVKO0FBQUU7RUFDRSw4QkFBQTtFQUNBLCtCQUFBO0FBR0o7QUFERTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUFJSiIsImZpbGUiOiJnaWYtdXBkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gIGJhY2tncm91bmQ6ICM3MTc0OTk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG5cclxuICBpb24tY2FyZHtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGlvbi1pbWd7XHJcbiAgICAgIGJvcmRlcjogMC4xMGNtIHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuICAuYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjIzODhjO1xyXG4gIH1cclxuICBpb24taW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjtcclxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNhOTQ0NDI7XHJcbiAgfVxyXG4gIGlvbi1pbnB1dC5uZy12YWxpZC5uZy1kaXJ0eSB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xyXG4gIH1cclxuICBzZWxlY3QubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjtcclxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNhOTQ0NDI7XHJcbiAgfVxyXG4gIHNlbGVjdC5uZy12YWxpZC5uZy1kaXJ0eSB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xyXG4gIH1cclxuXHJcblxyXG5cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_administrator_gift_gif-update_gif-update_page_ts.js.map