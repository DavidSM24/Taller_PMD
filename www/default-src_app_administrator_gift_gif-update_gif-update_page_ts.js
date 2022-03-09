"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_administrator_gift_gif-update_gif-update_page_ts"],{

/***/ 6667:
/*!******************************************************************!*\
  !*** ./src/app/administrator/gift/gif-update/gif-update.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GifUpdatePage": () => (/* binding */ GifUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gif_update_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./gif-update.page.html */ 881);
/* harmony import */ var _gif_update_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gif-update.page.scss */ 5795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_services_gift_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/gift.service */ 4483);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 371);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3981);









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
                    name: [this.gift.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
                    points: [this.gift.points, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
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
            this.uts.presentLoading();
            console.log("entro?");
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
                this.uts.presentToast('El regalo se ha creado correctamente.', 'success');
            }
            else {
                this.uts.presentToast('Un error ha surgido al intentar crear el regalo.', 'danger');
            }
            this.uts.hideLoading();
            this.modalCtrl.dismiss({
                newGift: newGift
            });
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
                }
                else {
                    this.file = null;
                }
            }
        }
        catch (error) {
            //alert
            this.file = null;
        }
        console.log(this.file.type);
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

/***/ 4483:
/*!******************************************!*\
  !*** ./src/app/services/gift.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftService": () => (/* binding */ GiftService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);




let GiftService = class GiftService {
    constructor(http) {
        this.http = http;
        this.endpoint = "/gifts";
        this.URLDatabase = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.herokuConfig.url;
    }
    getListData(endpoint) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let gifts = [];
            return new Promise(resolve => {
                this.http.get(endpoint).subscribe((data) => {
                    if (data != null && data.length > 0) {
                        for (let g of data) {
                            const tmp = {
                                id: g.id,
                                name: g.name,
                                points: g.points,
                                picture: g.picture,
                                exchangeGifts: [],
                                available: g.available
                            };
                            for (let eg of g.exchangeGifts) {
                                tmp.exchangeGifts.push(eg);
                            }
                            gifts.push(tmp);
                        }
                    }
                    console.log(data);
                    resolve(gifts);
                }, error => {
                    console.log(error);
                });
            });
        });
    }
    getAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint);
        });
    }
    getAllPaged(limit, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/element/" + limit + "/page/" + offset);
        });
    }
    getById(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let gift = null;
            return new Promise(resolve => {
                this.http.get(this.URLDatabase + this.endpoint + "/id/" + id).subscribe((data) => {
                    if (data.id) {
                        const tmp = {
                            id: data.id,
                            name: data.name,
                            points: data.points,
                            picture: data.picture,
                            exchangeGifts: [],
                            available: data.available
                        };
                        for (let eg of data.exchangeGifts) {
                            tmp.exchangeGifts.push(eg);
                        }
                        gift = tmp;
                    }
                    console.log(gift);
                    resolve(gift);
                }, error => {
                    console.log(error);
                    console.log(gift);
                    resolve(gift);
                });
            });
        });
    }
    getByNamePaged(name, limit, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/name/" + name + "/element/" + limit + "/page/" + offset);
        });
    }
    getByAvailablePaged(available, limit, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/available/" + available + "/element/" + limit + "/page/" + offset);
        });
    }
    createOrUpdate(gift, ImageFile) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            console.log(gift);
            if (gift == null
                || gift.name == null
                || gift.name == ("")
                || ImageFile == null) {
                console.log("El campo name esta nulo o no contiene caracteres.");
                return gift;
            }
            else {
                const body = gift;
                return new Promise(resolve => {
                    let formData = new FormData();
                    formData.append('g', new Blob([JSON.stringify(gift)], {
                        type: 'application/json'
                    }));
                    formData.append('file', ImageFile);
                    this.http.post(this.URLDatabase + this.endpoint, formData).subscribe((data) => {
                        console.log(data);
                        resolve(data);
                    }, error => {
                        console.log(error);
                        resolve(error);
                    });
                });
            }
        });
    }
    delete(gift) {
        return new Promise(resolve => {
            this.http.delete(this.URLDatabase + this.endpoint, { body: gift }).subscribe(() => {
                resolve(true);
            }, error => {
                console.log(error);
                resolve(false);
            });
        });
    }
};
GiftService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
GiftService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], GiftService);



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

/***/ 881:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/gift/gif-update/gif-update.page.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Editar Regalo\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  \r\n  <div class=\"body\">\r\n    <div class=\"ion-padding\">    \r\n      <center>\r\n        \r\n        <ion-card>\r\n          <ion-img  [src]=\"this.img\"></ion-img>\r\n        </ion-card>\r\n\r\n      </center>\r\n    </div>\r\n    <form [formGroup]=\"formGift\" class=\"ion-padding\">\r\n      <div class=\"formulario\">\r\n      <ion-grid>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Nombre:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input type=\"text\" class=\"customInput\" formControlName=\"name\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Puntos:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"number\" formControlName=\"points\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"9\" sizeLg=\"1\">\r\n            Disponible\r\n          </ion-col>\r\n          <ion-col sizeSm=\"3\" sizeLg=\"11  \">\r\n            <ion-item  lines=\"none\">\r\n              No<ion-toggle [checked]=\"this.gift.available\"></ion-toggle>Si\r\n           </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n        \r\n          <ion-col size=\"12\">\r\n            <ion-input type=\"file\" accept=\".jpg,.jpeg,.png\" (change)=\"changeListener($event)\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        \r\n        <ion-row class=\"ion-align-items-center\">\r\n          \r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" (click)=\"close()\" class=\"button\" [disabled]=\"this.formGift.invalid||this.file==null\">\r\n              Cancelar\r\n            </ion-button>\r\n          </ion-col>\r\n          \r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" (click)=\"edit()\" class=\"button\" [disabled]=\"this.formGift.invalid||this.file==null\">\r\n              ACTUALIZAR\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    </form>\r\n  \r\n</div>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ 5795:
/*!********************************************************************!*\
  !*** ./src/app/administrator/gift/gif-update/gif-update.page.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n.body ion-card {\n  height: 60%;\n  width: 40%;\n}\n.body ion-card ion-img {\n  border: 0.1cm solid black;\n}\n.formulario {\n  margin-top: 1.5%;\n  padding: 2%;\n  border-top: 2px double gray;\n  border: 1px solid;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n  background-color: white;\n  margin-bottom: 4%;\n}\n.button {\n  --background: #22388c;\n}\n.customInput {\n  border: 1px solid gray;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpZi11cGRhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBQ047QUFBTTtFQUNFLHlCQUFBO0FBRVI7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUZKO0FBS0U7RUFDRSxxQkFBQTtBQUZKO0FBS0U7RUFDTSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFGUiIsImZpbGUiOiJnaWYtdXBkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gICAgYmFja2dyb3VuZDogIzcxNzQ5OTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGlvbi1jYXJke1xyXG4gICAgICBoZWlnaHQ6IDYwJTtcclxuICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgaW9uLWltZ3tcclxuICAgICAgICBib3JkZXI6IDAuMTBjbSBzb2xpZCBibGFjaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgXHJcbiAgLmZvcm11bGFyaW97XHJcbiAgICBtYXJnaW4tdG9wOiAxLjUlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBib3JkZXItdG9wOiAycHggZG91YmxlIGdyYXk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogXCJwcmltYXJ5XCI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjIzODhjO1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tSW5wdXR7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICBib3JkZXItY29sb3I6IFwicHJpbWFyeVwiO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIuNXJlbTtcclxuICB9XHJcblxyXG5cclxuICBcclxuICAiXX0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_administrator_gift_gif-update_gif-update_page_ts.js.map