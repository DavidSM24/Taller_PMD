"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administrator_user_user-list_user-list_module_ts"],{

/***/ 73937:
/*!**************************************************************************!*\
  !*** ./src/app/administrator/user/user-list/user-list-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListPageRoutingModule": () => (/* binding */ UserListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _user_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list.page */ 46962);




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

/***/ 85605:
/*!******************************************************************!*\
  !*** ./src/app/administrator/user/user-list/user-list.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListPageModule": () => (/* binding */ UserListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _user_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list-routing.module */ 73937);
/* harmony import */ var _user_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list.page */ 46962);
/* harmony import */ var _user_update_user_update_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-update/user-update.page */ 29101);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 24352);









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

/***/ 46962:
/*!****************************************************************!*\
  !*** ./src/app/administrator/user/user-list/user-list.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListPage": () => (/* binding */ UserListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-list.page.html */ 89333);
/* harmony import */ var _user_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list.page.scss */ 2001);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 36636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ 77524);
/* harmony import */ var _user_update_user_update_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-update/user-update.page */ 29101);








let UserListPage = class UserListPage {
    constructor(usser, loading, toast, pt, modalCtrl, alerta, authS) {
        this.usser = usser;
        this.loading = loading;
        this.toast = toast;
        this.pt = pt;
        this.modalCtrl = modalCtrl;
        this.alerta = alerta;
        this.authS = authS;
        this.users = [];
        this.oldUsers = [];
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.niTems = Math.ceil(this.pt.height() / 20 + 10);
            yield this.cargaUsers();
            this.users.forEach((e) => {
                if (e.id == this.authS.user.id) {
                    this.bdUser = e;
                }
            });
        });
    }
    cargaUsers(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.infinite) {
                this.infinite.disabled = false;
                this.oldInfinite = false;
            }
            if (!event) {
                yield this.presentLoading();
            }
            this.users = [];
            this.oldUsers = [];
            try {
                this.users = yield this.usser.getAllPaged(this.niTems, 0);
                this.oldUsers = this.oldUsers.concat(this.users);
            }
            catch (err) {
                console.error(err);
                yield this.presentToast("Error cargando datos", "danger", 'ban');
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.miLoading = yield this.loading.create({
                message: ''
            });
            yield this.miLoading.present();
        });
    }
    borra(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.presentLoading();
            let result = yield this.usser.delete(user);
            if (result) {
                let i = this.users.indexOf(user, 0);
                if (i > -1) {
                    this.users.splice(i, 1);
                }
                ;
                this.oldUsers.forEach((e) => {
                    if (e.id == user.id) {
                        let i2 = this.oldUsers.indexOf(e);
                        this.oldUsers.splice(i2, 1);
                    }
                });
                this.presentToast("Usuario eliminado correctamente.", "success", "checkmark-circle-outline");
                //deslogear si se ha eliminado el admin logeado
                if (user.administrator && user.id == this.authS.user.id) {
                    this.logout();
                }
            }
            else
                this.presentToast("No se ha podido eliminar el usuario. Compruebe que no está asociado a ninguna agencia con datos.", "danger", 'ban');
            yield this.miLoading.dismiss();
        });
    }
    presentToast(msg, clr, icn) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const miToast = yield this.toast.create({
                message: msg,
                duration: 2000,
                color: clr,
                icon: icn
            });
            miToast.present();
        });
    }
    edit(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const modal = yield this.modalCtrl.create({
                    component: _user_update_user_update_page__WEBPACK_IMPORTED_MODULE_4__.UserUpdatePage,
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
                    this.oldUsers.forEach((e) => {
                        if (e.id == resp.data.newUser.id) {
                            let i2 = this.oldUsers.indexOf(e);
                            this.oldUsers[i2] = this.users[i];
                        }
                    });
                    this.presentToast("Usuario modificado correctamente.", "success", "checkmark-circle-outline");
                }
            }
            catch (error) {
            }
        });
    }
    mensagealerta(n) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alerta.create({
                header: 'Eliminar',
                message: '¿Desea eliminar Este Regalo Intercambiado?',
                buttons: [{
                        text: 'Eliminar',
                        cssClass: 'rojo',
                        handler: () => {
                            this.borra(n);
                        }
                    }, {
                        text: 'Cancelar',
                        cssClass: 'secondary',
                        handler: (blah) => { }
                    }
                ]
            });
            yield alert.present();
        });
    }
    reset(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.infinite.disabled = false;
            this.oldInfinite = false;
            this.users = [];
            this.cargaUsers(event);
        });
    }
    infiniteLoad($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let newUsers = [];
            if (!this.infinite.disabled) {
                newUsers = yield this.usser.getAllPaged(this.niTems, this.users.length);
                this.users = this.users.concat(newUsers);
                this.oldUsers.concat(newUsers);
                if (newUsers.length < 30) {
                    this.infinite.disabled = true;
                    this.oldInfinite = true;
                }
            }
            this.infinite.complete();
        });
    }
    logout() {
        this.authS.logout();
    }
    searchAction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.searchStr = this.sb.value;
            let regex = new RegExp("^[ ]");
            try {
                if (!this.searchStr.match(regex)) {
                    let resultFilter = [];
                    let listS = [];
                    let selectO = this.select.value;
                    let list = [];
                    this.users = [];
                    let lenght = this.searchStr.length;
                    if (lenght > 0) {
                        //consultar y cambiar lista
                        yield this.presentLoading();
                        //name
                        list = yield this.usser.getByName(this.searchStr);
                        list.forEach((e) => {
                            let result = true;
                            resultFilter.forEach((x) => {
                                if (x.id == e.id)
                                    result = false;
                            });
                            if (result)
                                resultFilter.push(e);
                        });
                        //code
                        if (+this.searchStr >= 0) {
                            list = yield this.usser.getFilterCode(this.searchStr);
                            list.forEach((e) => {
                                let result = true;
                                resultFilter.forEach((x) => {
                                    if (x.id == e.id)
                                        result = false;
                                });
                                if (result)
                                    resultFilter.push(e);
                            });
                        }
                        //mail
                        list = yield this.usser.getByMail(this.searchStr);
                        list.forEach((e) => {
                            let result = true;
                            resultFilter.forEach((x) => {
                                if (x.id == e.id)
                                    result = false;
                            });
                            if (result)
                                resultFilter.push(e);
                        });
                        if (selectO == "true") {
                            resultFilter.forEach((e) => {
                                if (e.administrator)
                                    listS.push(e);
                            });
                            this.users = listS;
                        }
                        else if (selectO == "false") {
                            resultFilter.forEach((e) => {
                                if (!e.administrator)
                                    listS.push(e);
                            });
                            this.users = listS;
                        }
                        else {
                            this.users = resultFilter;
                        }
                        this.infinite.disabled = false;
                        yield this.miLoading.dismiss();
                    }
                    else if (lenght < 1) {
                        yield this.presentLoading();
                        if (selectO == "true") {
                            resultFilter = yield this.usser.getByAdministrator(true, 9999, 0);
                            resultFilter.forEach((e) => {
                                if (e.administrator)
                                    listS.push(e);
                            });
                            this.users = listS;
                            this.infinite.disabled = true;
                        }
                        else if (selectO == "false") {
                            resultFilter = yield this.usser.getByAdministrator(false, 9999, 0);
                            resultFilter.forEach((e) => {
                                if (!e.administrator)
                                    listS.push(e);
                            });
                            this.users = listS;
                            this.infinite.disabled = true;
                        }
                        else {
                            this.users = this.oldUsers;
                            this.infinite.disabled = this.oldInfinite;
                        }
                        yield this.miLoading.dismiss();
                    }
                    yield this.miLoading.dismiss();
                }
                else
                    this.presentToast("La búsqueda no puede comenzar por espacios en blanco.", "danger", "ban");
            }
            catch (error) {
            }
        });
    }
};
UserListPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
UserListPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInfiniteScroll,] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSelect,] }],
    sb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSearchbar,] }]
};
UserListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-user-list',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserListPage);



/***/ }),

/***/ 89333:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/administrator/user/user-list/user-list.page.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"false\">\r\n  <ion-toolbar color=\"primary\">\r\n\r\n    <ion-title sizeSm=\"9\" sizeMd=\"9\" sizeLg=\"9\">Lista de Usuarios</ion-title>\r\n\r\n    <ion-buttons sizeSm=\"3\" sizeMd=\"3\" sizeLg=\"3\" style=\"margin-right: 1%;\" slot=\"end\" class=\"icon-div-container\">\r\n      <div title=\"Nuevo\" routerLink=\"/tab-administrator/user/create\" >\r\n        <ion-icon class=\"icon-logout\" slot=\"end\" style=\"pointer-events: none;zoom:1.5;cursor:pointer;content:url(../../../../assets/icon/add-circle-outline.png);\" ></ion-icon>\r\n      </div>\r\n      <div title=\"Lista de Agencias\" routerLink=\"/tab-administrator/agency/list\">\r\n        <ion-icon class=\"icon-logout\" slot=\"end\" style=\"pointer-events: none;zoom:1.3;cursor:pointer;content: url( ../../../../assets/icon/agency_list.png);\" ></ion-icon>\r\n      </div>\r\n      <div title=\"Cerrar Sesión\" (click)=\"logout() \">\r\n      <ion-icon class=\"icon-logout\" slot=\"end\" name=\"log-out-outline\" style=\"pointer-events: none;zoom:1.7;cursor:pointer\"></ion-icon>\r\n      </div>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col sizeSm=\"9.5\" sizeLg=\"9.5\">\r\n        <ion-searchbar\r\n        placeholder=\"Encuentra el usuario que estás buscando...\"\r\n        inputmode=\"text\"\r\n        type=\"text\"\r\n        debounce=\"1000\"\r\n        (ionChange)=\"this.searchAction()\"\r\n        showCancelButton=\"always\"\r\n      ></ion-searchbar>\r\n      </ion-col>\r\n      <ion-col sizeSm=\"2.5\" sizeLg=\"2.5\" class=\"selector\">\r\n        <ion-item>\r\n          <ion-label>Tipo De Usuario</ion-label>\r\n          <ion-select (ionChange)=\"searchAction()\" interface=\"popover\" multiple=\"false\">\r\n            <ion-select-option value=\"true\">Administrador</ion-select-option>\r\n            <ion-select-option value=\"false\">Cliente</ion-select-option>\r\n            <ion-select-option value=\"all\">Todos</ion-select-option>\r\n\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"header-row\">\r\n      <ion-col size=\"1\" style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Codigo</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col  size=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Email</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Nombre</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" style=\"border: 0px !important;\">\r\n        <ion-text>Administrador</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"1\" style=\"border: 0px !important;\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" style=\"background-color: white;\">\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"reset($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div class=\"body\">\r\n\r\n\r\n  <ion-grid class=\"ion-text-center\">\r\n\r\n    <ion-row style=\"border-left: 1px solid #4b4b4d;border-right: 1px solid #4b4b4d;\" let *ngFor=\"let user of this.users; let i=index\" [ngClass]=\"(i % 2 == 0) ? 'normal' : 'colored'\">\r\n\r\n      <ion-col size=\"1\">\r\n        <ion-text class=\"icon-div-container\" (click)=\"edit(user)\" title=\"Editar\">\r\n          <ion-icon name=\"pencil\" style=\"color:#22388c;pointer-events: none;\" ></ion-icon>\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\">\r\n        <ion-text>\r\n            {{user.code}}\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n        <ion-col size=\"2.5\">\r\n          <ion-text>\r\n            {{user.email}}\r\n          </ion-text>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"2.5\">\r\n          <ion-text>\r\n            {{user.name}}\r\n          </ion-text>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"2.5\">\r\n          <div title=\"Administrador\" *ngIf=\"user.id!=this.bdUser.id\">\r\n            <ion-icon style=\"pointer-events: none;\" name=\"key\" color=\"secondary\" *ngIf=\"user.administrator\"></ion-icon>\r\n          </div>\r\n\r\n          <div title=\"Sesión Iniciada\" *ngIf=\"user!=null&&this.bdUser!=null&&user.id==this.bdUser.id\">\r\n            <ion-icon style=\"pointer-events: none;color:green !important\" name=\"key\"></ion-icon>\r\n          </div>\r\n          <div title=\"Usuario\" *ngIf=\"user.id!=this.authS.user.id\">\r\n            <ion-icon style=\"pointer-events: none;\" name=\"person\" color=\"secondary\" *ngIf=\"!user.administrator\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n\r\n\r\n        <ion-col size=\"1\">\r\n          <ion-text (click)=\"mensagealerta(user)\" class=\"icon-div-container\" title=\"Eliminar\">\r\n            <ion-icon name=\"trash\" color=\"danger\" style=\"pointer-events: none;\"></ion-icon>\r\n          </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"infiniteLoad($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</div>\r\n\r\n</ion-content>\r\n");

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