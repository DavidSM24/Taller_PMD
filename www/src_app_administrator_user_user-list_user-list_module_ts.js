"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_user_user-list_user-list_module_ts"],{

/***/ 3937:
/*!**************************************************************************!*\
  !*** ./src/app/administrator/user/user-list/user-list-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListPageRoutingModule": () => (/* binding */ UserListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _user_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list.page */ 4481);




const routes = [
    {
        path: '',
        component: _user_list_page__WEBPACK_IMPORTED_MODULE_0__.UserListPage
    }
];
let UserListPageRoutingModule = class UserListPageRoutingModule {
};
UserListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserListPageRoutingModule);



/***/ }),

/***/ 5605:
/*!******************************************************************!*\
  !*** ./src/app/administrator/user/user-list/user-list.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListPageModule": () => (/* binding */ UserListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _user_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list-routing.module */ 3937);
/* harmony import */ var _user_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list.page */ 4481);
/* harmony import */ var _user_update_user_update_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-update/user-update.page */ 9101);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 4352);









let UserListPageModule = class UserListPageModule {
};
UserListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _user_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserListPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule
        ],
        declarations: [_user_list_page__WEBPACK_IMPORTED_MODULE_1__.UserListPage, _user_update_user_update_page__WEBPACK_IMPORTED_MODULE_2__.UserUpdatePage]
    })
], UserListPageModule);



/***/ }),

/***/ 4481:
/*!****************************************************************!*\
  !*** ./src/app/administrator/user/user-list/user-list.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListPage": () => (/* binding */ UserListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-list.page.html */ 9333);
/* harmony import */ var _user_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list.page.scss */ 2001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 7524);
/* harmony import */ var _user_update_user_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-update/user-update.page */ 9101);







let UserListPage = class UserListPage {
    constructor(usser, loading, toast, modalCtrl, alerta) {
        this.usser = usser;
        this.loading = loading;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.alerta = alerta;
        this.users = [];
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.cargaUsers();
        });
    }
    cargaUsers(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.infinite) {
                this.infinite.disabled = false;
            }
            if (!event) {
                yield this.presentLoading();
            }
            this.users = [];
            try {
                this.users = yield this.usser.getAll();
            }
            catch (err) {
                console.error(err);
                yield this.presentToast("Error cargando datos", "danger");
            }
            finally {
                if (event) {
                    event.target.complete();
                }
                else {
                    yield this.miLoading.dismiss();
                }
            }
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.miLoading = yield this.loading.create({
                message: ''
            });
            yield this.miLoading.present();
        });
    }
    borra(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.presentLoading();
            yield this.usser.delete(user);
            let i = this.users.indexOf(user, 0);
            if (i > -1) {
                this.users.splice(i, 1);
            }
            yield this.miLoading.dismiss();
        });
    }
    presentToast(msg, clr) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const miToast = yield this.toast.create({
                message: msg,
                duration: 2000,
                color: clr
            });
            miToast.present();
        });
    }
    edit(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const modal = yield this.modalCtrl.create({
                    component: _user_update_user_update_page__WEBPACK_IMPORTED_MODULE_3__.UserUpdatePage,
                    cssClass: 'fullscreen',
                    componentProps: {
                        'user': user
                    }
                });
                yield modal.present();
                const resp = yield modal.onDidDismiss();
                if (resp.data != null) {
                    let i = this.users.indexOf(user);
                    this.users[i] = resp.data.newUser;
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    mensagealerta(n) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alerta.create({
                header: 'Eliminar',
                message: '¿Desea eliminar Este Regalo Intercambiado?',
                buttons: [{
                        text: 'Cancelar',
                        handler: (blah) => { }
                    },
                    { text: 'Eliminar',
                        handler: () => {
                            this.borra(n);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    reset(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.infinite.disabled = false;
            this.users = [];
            this.cargaUsers(event);
        });
    }
};
UserListPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
UserListPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInfiniteScroll,] }]
};
UserListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-user-list',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserListPage);



/***/ }),

/***/ 9333:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/user/user-list/user-list.page.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"false\">\r\n  <ion-toolbar color=\"primary\">\r\n    \r\n    <ion-title>Lista de Usuarios</ion-title>\r\n\r\n    <ion-buttons style=\"margin-right: 1%;\" slot=\"end\">\r\n      <ion-icon class=\"icon-logout\" slot=\"end\" name=\"add-circle\" style=\"zoom:1.5;cursor:pointer\" routerLink=\"/tab-administrator/user/create\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-searchbar placeholder=\"Encuentra el Usuario que estás buscando...\" inputmode=\"text\" type=\"text\" showCancelButton=\"always\" [(ngModel)]=\"searchTerm\"></ion-searchbar>\r\n\r\n    <ion-row class=\"header-row\">\r\n      <ion-col size=\"1\" style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Codigo</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col  size=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Email</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Nombre</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Administrador</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"1\" style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" style=\"background-color: white;\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"reset($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div class=\"body\">\r\n  \r\n\r\n  <ion-grid class=\"ion-text-center\">\r\n\r\n    <ion-row let *ngFor=\"let user of this.users | filter:searchTerm\" class=\"row\">\r\n      \r\n      <ion-col size=\"1\">\r\n        <ion-text>\r\n          <ion-icon name=\"pencil\" style=\"color:#22388c;cursor:pointer\" (click)=\"edit(user)\"></ion-icon>\r\n        </ion-text>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"2.5\">\r\n        <ion-text>\r\n            {{user.code}}\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n        <ion-col size=\"2.5\">\r\n          <ion-text>\r\n            {{user.email}}\r\n          </ion-text>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"2.5\">\r\n          <ion-text>\r\n            {{user.name}}\r\n          </ion-text>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"2.5\">\r\n          <ion-text>\r\n            {{user.administrator}}\r\n          </ion-text>\r\n        </ion-col>\r\n        \r\n        <ion-col size=\"1\">\r\n          <ion-text>\r\n            <ion-icon name=\"trash\" color=\"danger\" style=\"cursor: pointer;\" (click)=\"mensagealerta(user)\"></ion-icon>\r\n          </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</div>\r\n  \r\n</ion-content>");

/***/ }),

/***/ 2001:
/*!******************************************************************!*\
  !*** ./src/app/administrator/user/user-list/user-list.page.scss ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-col {\n  border-bottom: 1px solid #4b4b4d;\n}\nion-col ion-text {\n  color: #4b4b4d !important;\n}\n.header-row {\n  border-radius: 0%;\n  border: 0px;\n}\n.header-row ion-col {\n  text-align: center;\n}\n.header-row ion-col ion-text {\n  color: #fff !important;\n  font-size: 1.2rem;\n  text-align: center;\n}\n.row {\n  color: #fff;\n  font-size: 1.1rem;\n}\n.body {\n  /*  background: -webkit-linear-gradient(left, #22388c, #9ba2cc);\n    background: linear-gradient(to right, #22388c, #9ba2cc);*/\n  background-color: white;\n  font-family: \"Roboto\", sans-serif;\n  color: #4b4b4d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxnQ0FBQTtBQURKO0FBRUk7RUFDRSx5QkFBQTtBQUFOO0FBR0E7RUFFSSxpQkFBQTtFQUNBLFdBQUE7QUFESjtBQUVJO0VBQ0Usa0JBQUE7QUFBTjtBQUNJO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ047QUFFRTtFQUVFLFdBQUE7RUFDQSxpQkFBQTtBQUFKO0FBR0U7RUFDQTs2REFBQTtFQUVFLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FBQUoiLCJmaWxlIjoidXNlci1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIFxyXG4gIGlvbi1jb2wge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0YjRiNGQ7XHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgY29sb3I6IzRiNGI0ZCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuLmhlYWRlci1yb3cge1xyXG4gICAgLy9iYWNrZ3JvdW5kOiAjOWI5YjliO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGlvbi1jb2x7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGlvbi10ZXh0e1xyXG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfX1cclxuICB9XHJcbiAgLnJvdyB7XHJcbiAgICAvL2JhY2tncm91bmQ6ICMyMjM4OGM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIH1cclxuXHJcbiAgLmJvZHl7XHJcbiAgLyogIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMyMjM4OGMsICM5YmEyY2MpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjIzODhjLCAjOWJhMmNjKTsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzRiNGI0ZDtcclxuICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_administrator_user_user-list_user-list_module_ts.js.map