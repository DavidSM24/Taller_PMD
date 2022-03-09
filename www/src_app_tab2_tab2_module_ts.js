"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

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

/***/ 9561:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 4787);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4250:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 4787);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 456);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 9561);
/* harmony import */ var _services_gift_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/gift.service */ 4483);









let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        ],
        providers: [_services_gift_service__WEBPACK_IMPORTED_MODULE_3__.GiftService],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 4787:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab2.page.html */ 2040);
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss */ 282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_gift_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gift.service */ 4483);







let Tab2Page = class Tab2Page {
    constructor(gs, fb) {
        this.gs = gs;
        this.fb = fb;
        this.file = null;
        this.formGift = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            points: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
    }
    test_GetAll() {
        this.gs.getAll();
    }
    test_GetAllPaged(limit, offset) {
        this.gs.getAllPaged(limit, offset);
    }
    test_GetById(id) {
        this.gs.getById(id);
    }
    test_GetByNamePaged(name, limit, offset) {
        this.gs.getByNamePaged(name, limit, offset);
    }
    test_GetByAvailablePaged(available, limit, offset) {
        this.gs.getByAvailablePaged(available, limit, offset);
    }
    test_Create() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.toggle.checked);
            if (this.extension) {
                if (this.extension == ("image/jpg")
                    || this.extension == ("image/jpeg")
                    || this.extension == "image/png") {
                    console.log("entro?");
                    let newGift = {
                        name: this.formGift.get("name").value,
                        points: this.formGift.get("points").value,
                        available: this.toggle.checked,
                        picture: '',
                        exchangeGifts: []
                    };
                    newGift = yield this.gs.createOrUpdate(newGift, this.file);
                }
            }
        });
    }
    test_Update() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let toDrop = yield this.gs.getAll();
            let last = toDrop[toDrop.length - 1];
            last.name = "hola1";
            console.log(last);
            if (toDrop != null) {
                last = yield this.gs.createOrUpdate(last, this.file);
                console.log(last);
                this.img = "https://res.cloudinary.com/duq0pz1vi/image/upload/v1645471738/" + last.picture;
            }
        });
    }
    test_Delete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let toDrop = yield this.gs.getAll();
            let last = toDrop[toDrop.length - 1];
            console.log(last);
            if (toDrop != null) {
                console.log(yield this.gs.delete(last));
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
Tab2Page.ctorParameters = () => [
    { type: _services_gift_service__WEBPACK_IMPORTED_MODULE_2__.GiftService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
Tab2Page.propDecorators = {
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToggle,] }]
};
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab2',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 2040:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab2/tab2.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Pruebas Gif\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  \r\n  <div class=\"body\">\r\n  \r\n  \r\n    <form [formGroup]=\"formGift\" class=\"ion-padding\">\r\n      <div class=\"formulario\">\r\n      <ion-grid>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Nombre:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input type=\"text\" class=\"customInput\" formControlName=\"name\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"1\" sizeLg=\"1\">\r\n            <ion-label>Puntos:</ion-label>\r\n          </ion-col>\r\n          <ion-col sizeSm=\"11\" sizeLg=\"11\">\r\n            <ion-input class=\"customInput\" type=\"number\" formControlName=\"points\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col sizeSm=\"9\" sizeLg=\"1\">\r\n            Disponible\r\n          </ion-col>\r\n          <ion-col sizeSm=\"3\" sizeLg=\"11  \">\r\n            <ion-item  lines=\"none\">\r\n              No<ion-toggle></ion-toggle>Si\r\n           </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n        \r\n          <ion-col size=\"12\">\r\n            <ion-input type=\"file\" accept=\".jpg,.jpeg,.png\" (change)=\"changeListener($event)\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"12\">\r\n            <ion-button expand=\"block\" shape=\"round\" style=\"margin-top: 2% !important;\" (click)=\"test_Create()\" class=\"button\" [disabled]=\"this.formGift.invalid||this.file==null\">\r\n              Crear Regalo\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    </form>\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  <div *ngIf=\"false\">\r\n  <ion-label></ion-label>\r\n\r\n  <ion-button (click)=\"test_GetAll()\" expand=\"block\" shape=\"round\">\r\n    Prueba getAll()\r\n  </ion-button>\r\n\r\n  <ion-button (click)=\"test_GetAllPaged(15,0)\" expand=\"block\" shape=\"round\">\r\n    Prueba getAllPaged()\r\n  </ion-button>\r\n\r\n  <ion-button (click)=\"test_GetById(1)\" expand=\"block\" shape=\"round\">\r\n    Prueba getById()\r\n  </ion-button>\r\n\r\n  <ion-button (click)=\"test_GetByNamePaged('go',15,0)\" expand=\"block\" shape=\"round\">\r\n    Prueba getByNamePaged()\r\n  </ion-button>\r\n\r\n  <ion-button (click)=\"test_GetByAvailablePaged(true,15,0)\" expand=\"block\" shape=\"round\">\r\n    Prueba getByAvailablePaged()\r\n  </ion-button>\r\n  <div>\r\n\r\n    <ion-button (click)=\"test_Create()\" expand=\"block\" shape=\"round\">\r\n      Prueba create\r\n    </ion-button>\r\n    <ion-button (click)=\"test_Update()\" expand=\"block\" shape=\"round\">\r\n      Prueba update\r\n    </ion-button>\r\n\r\n  </div>\r\n\r\n  <ion-button (click)=\"test_Delete()\" expand=\"block\" shape=\"round\">\r\n    Prueba delete\r\n  </ion-button>\r\n\r\n  <ion-input type=\"file\" placeholder=\"Awesome Input\" formControlName=\"img\" accept=\"image/*\" (change)=\"changeListener($event)\"></ion-input>\r\n\r\n  <ion-img [src]=\"img\"></ion-img>\r\n  </div>\r\n</div>\r\n</ion-content>");

/***/ }),

/***/ 282:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = ".body {\n  background: #717499;\n  background-size: cover;\n  min-height: 100%;\n}\n\n.formulario {\n  margin-top: 1.5%;\n  padding: 2%;\n  border-top: 2px double gray;\n  border: 1px solid;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n  background-color: white;\n  margin-bottom: 4%;\n}\n\n.button {\n  --background: #22388c;\n}\n\n.customInput {\n  border: 1px solid gray;\n  border-color: \"primary\";\n  border-radius: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDTSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFDTiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gIGJhY2tncm91bmQ6ICM3MTc0OTk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb3tcclxuICBtYXJnaW4tdG9wOiAxLjUlO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGJvcmRlci10b3A6IDJweCBkb3VibGUgZ3JheTtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IFwicHJpbWFyeVwiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiA0JTtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICAtLWJhY2tncm91bmQ6ICMyMjM4OGM7XHJcbn1cclxuXHJcbi5jdXN0b21JbnB1dHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiBcInByaW1hcnlcIjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMi41cmVtO1xyXG59XHJcblxyXG5cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map