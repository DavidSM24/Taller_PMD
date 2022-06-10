(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_ward_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/ward-client.service */ 56454);
/* harmony import */ var _services_wardAdmin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/wardAdmin.service */ 23920);





const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 69549)).then(m => m.LoginPageModule)
    },
    {
        path: 'tab4',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab4_tab4_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tab4/tab4.module */ 12379)).then(m => m.Tab4PageModule)
    },
    {
        path: 'tab5',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab5_tab5_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tab5/tab5.module */ 81853)).then(m => m.Tab5PageModule)
    },
    {
        path: 'tab6',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab6_tab6_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tab6/tab6.module */ 93846)).then(m => m.Tab6PageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 69549)).then(m => m.LoginPageModule)
    },
    {
        path: 'tab-administrator',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_tab-administrator_tab-administrator_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/tab-administrator/tab-administrator.module */ 74922)).then(m => m.TabAdministratorPageModule),
        canActivate: [_services_wardAdmin_service__WEBPACK_IMPORTED_MODULE_1__.WardAdminService]
    },
    {
        path: 'tab-user',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_user_tab-user_tab-user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./user/tab-user/tab-user.module */ 54075)).then(m => m.TabUserPageModule),
        canActivate: [_services_ward_client_service__WEBPACK_IMPORTED_MODULE_0__.WardClientService]
    },
    {
        path: '**',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 69549)).then(m => m.LoginPageModule)
    },
    {
        path: 'user-create',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_user_user-create_user-create_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/user/user-create/user-create.module */ 1490)).then(m => m.UserCreatePageModule)
    },
    {
        path: 'user-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_administrator_user_user-list_user-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/user/user-list/user-list.module */ 85605)).then(m => m.UserListPageModule)
    },
    {
        path: 'user-update',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_administrator_user_user-update_user-update_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/user/user-update/user-update.module */ 77476)).then(m => m.UserUpdatePageModule)
    },
    {
        path: 'company-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_administrator_company_company-list_company-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/company/company-list/company-list.module */ 85940)).then(m => m.CompanyListPageModule)
    },
    {
        path: 'company-update',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_administrator_company_company-update_company-update_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/company/company-update/company-update.module */ 1045)).then(m => m.CompanyUpdatePageModule)
    },
    {
        path: 'company-create',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_administrator_company_company-create_company-create_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./administrator/company/company-create/company-create.module */ 10926)).then(m => m.CompanyCreatePageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _services_nav_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/nav-control.service */ 76845);
/* harmony import */ var _services_agency_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/agency.service */ 99574);
/* harmony import */ var _services_gift_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/gift.service */ 44483);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.service */ 36636);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/util.service */ 371);
/* harmony import */ var _services_insurance_company_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/insurance-company.service */ 37639);














let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy }, _services_nav_control_service__WEBPACK_IMPORTED_MODULE_2__.NavControlService, _services_agency_service__WEBPACK_IMPORTED_MODULE_3__.AgencyService, _services_gift_service__WEBPACK_IMPORTED_MODULE_4__.GiftService, _services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService, _services_util_service__WEBPACK_IMPORTED_MODULE_6__.UtilService, _services_insurance_company_service__WEBPACK_IMPORTED_MODULE_7__.InsuranceCompanyService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 99574:
/*!********************************************!*\
  !*** ./src/app/services/agency.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgencyService": () => (/* binding */ AgencyService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);




let AgencyService = class AgencyService {
    constructor(http) {
        this.http = http;
        this.endpoint = "/agencies";
        this.URLDatabase = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.herokuConfig.url;
    }
    getData(endpoint) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let agency = null;
            return new Promise(resolve => {
                this.http.get(endpoint).subscribe((a) => {
                    if (a.id) {
                        const tmp = {
                            id: a.id,
                            zipCode: a.zipCode,
                            address: a.address,
                            location: a.location,
                            phoneNumber: a.phoneNumber,
                            amount: a.amount,
                            points: a.points,
                            pointsRedeemed: a.pointsRedeemed,
                            active: a.active,
                            myInsuranceCompany: a.myInsuranceCompany,
                            myCarRepairs: a.mycarRepairs,
                            myExchangesGifts: a.myExchangeGifts,
                            myUser: a.myUser
                        };
                        agency = tmp;
                    }
                    resolve(agency);
                }, error => {
                    resolve(agency);
                });
            });
        });
    }
    getListData(endpoint) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let agencies = [];
            return new Promise(resolve => {
                this.http.get(endpoint).subscribe((data) => {
                    if (data != null && data.length > 0) {
                        for (let a of data) {
                            const tmp = {
                                id: a.id,
                                zipCode: a.zipCode,
                                address: a.address,
                                location: a.location,
                                phoneNumber: a.phoneNumber,
                                amount: a.amount,
                                points: a.points,
                                pointsRedeemed: a.pointsRedeemed,
                                active: a.active,
                                myInsuranceCompany: a.myInsuranceCompany,
                                myCarRepairs: a.myCarRepairs,
                                myExchangesGifts: a.myExchangesGifts,
                                myUser: a.myUser
                            };
                            agencies.push(tmp);
                        }
                    }
                    resolve(agencies);
                }, error => {
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
            return this.getData(this.URLDatabase + this.endpoint + "/id/" + id);
        });
    }
    getByUsercode(usercode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            //return await this.getById(94);
            return this.getData(this.URLDatabase + this.endpoint + "/usercode/" + usercode);
        });
    }
    getByLocation(location) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/location/" + location);
        });
    }
    getByAddress(address) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/address/" + address);
        });
    }
    getByZipcode(zip) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/zipcode/" + zip);
        });
    }
    getByPoints(points) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/points/" + points);
        });
    }
    getByUserNamePaged(username, limit, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/username/" + username + "/element/" + limit + "/page/" + offset);
        });
    }
    getByisActivePaged(active, limit, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/active/" + active + "/element/" + limit + "/page/" + offset);
        });
    }
    getByCompany(company) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/company/" + company);
        });
    }
    createOrUpdate(agency) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (agency == null
                || agency.address == null
                || agency.address == ""
                || agency.phoneNumber == null
                || agency.zipCode == null
                || agency.myInsuranceCompany == null
                || agency.myUser == null) {
                return agency;
            }
            else {
                const body = agency;
                return new Promise(resolve => {
                    this.http.post(this.URLDatabase + this.endpoint, body).subscribe((data) => {
                        agency = data;
                        resolve(agency);
                    }, error => {
                        resolve(agency);
                    });
                });
            }
        });
    }
    delete(agency) {
        return new Promise(resolve => {
            this.http.delete(this.URLDatabase + this.endpoint, { body: agency }).subscribe(() => {
                resolve(true);
            }, error => {
                resolve(false);
            });
        });
    }
};
AgencyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
AgencyService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AgencyService);



/***/ }),

/***/ 36636:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.service */ 27109);
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.service */ 371);
/* harmony import */ var _agency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agency.service */ 99574);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ 77524);








let AuthService = class AuthService {
    constructor(storage, platform, router, as, us, uts) {
        this.storage = storage;
        this.platform = platform;
        this.router = router;
        this.as = as;
        this.us = us;
        this.uts = uts;
        this.isAndroid = false;
        this.loadSession();
    }
    loadSession() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let user = yield this.storage.getItem('tallerUser');
            if (user) {
                try {
                    user = JSON.parse(user);
                    this.user = user;
                    let bdUser = yield this.us.getByCode(this.user.code);
                    if (bdUser && this.user.password == bdUser.password) {
                        if (user && user.administrator == false) {
                            let agency = yield this.as.getByUsercode(user.code);
                            if (agency) {
                                this.agency = agency;
                            }
                        }
                    }
                    else {
                        this.uts.presentToast("Las credenciales del usuario han cambiado, inicie sesión de nuevo.", "danger", "person");
                        this.logout();
                    }
                }
                catch (error) {
                    this.user = null;
                }
            }
        });
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.removeItem('tallerUser');
            this.user = null;
            this.router.navigate(['']);
        });
    }
    keepSession() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.setItem('tallerUser', JSON.stringify(this.user));
        });
    }
    isLogged() {
        if (this.user)
            return true;
        else
            return false;
    }
    createUser(email, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return true;
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _agency_service__WEBPACK_IMPORTED_MODULE_2__.AgencyService },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _util_service__WEBPACK_IMPORTED_MODULE_1__.UtilService }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 44483:
/*!******************************************!*\
  !*** ./src/app/services/gift.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftService": () => (/* binding */ GiftService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);




let GiftService = class GiftService {
    constructor(http) {
        this.http = http;
        this.added = false;
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
                    resolve(gifts);
                }, error => {
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
                    resolve(gift);
                }, error => {
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
    getByPoints(points) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/points/" + points);
        });
    }
    getByAvailablePaged(available, limit, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/available/" + available + "/element/" + limit + "/page/" + offset);
        });
    }
    createOrUpdate(gift, ImageFile) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (gift == null
                || gift.name == null
                || gift.name == ("")
                || ImageFile == null) {
                return gift;
            }
            else {
                const body = gift;
                return new Promise(resolve => {
                    let body;
                    if (gift.id) {
                        body = {
                            id: gift.id,
                            name: gift.name,
                            points: gift.points,
                            available: gift.available
                        };
                    }
                    else
                        body = gift;
                    let formData = new FormData();
                    formData.append('g', new Blob([JSON.stringify(body)], {
                        type: 'application/json'
                    }));
                    formData.append('file', ImageFile);
                    this.http.post(this.URLDatabase + this.endpoint, formData).subscribe((data) => {
                        resolve(data);
                    }, error => {
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

/***/ 37639:
/*!*******************************************************!*\
  !*** ./src/app/services/insurance-company.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsuranceCompanyService": () => (/* binding */ InsuranceCompanyService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);




let InsuranceCompanyService = class InsuranceCompanyService {
    constructor(http) {
        this.http = http;
        this.endpoint = "/insuranceCompany";
        this.URLDataBase = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.herokuConfig.url;
    }
    /**
     * Método que carga una lista de compañias de coches en función de la petición
     * @param endpoint
     * @returns Promise<CarRepair[]>
     */
    getListData(endpoint) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let insurancesCompany = [];
            return new Promise(resolve => {
                this.http.get(endpoint).subscribe((data) => {
                    if (data != null && data.length > 0) {
                        for (let insuranceCompany of data) {
                            const tmp = {
                                id: insuranceCompany.id,
                                cia_Name: insuranceCompany.cia_Name
                            };
                            insurancesCompany.push(tmp);
                        }
                    }
                    resolve(insurancesCompany);
                }, error => {
                });
            });
        });
    }
    //All
    /**
     * Método que devuelve con todas las compañias de seguros de la base de datos
     * @returns Promise<InsuranceCompany[]>
     */
    getAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDataBase + this.endpoint);
        });
    }
    //allPaged
    /**
     * Método que devuelve las compañias de seguros de la base de datos de forma paginada
     * @param limit  número de reparaciones que se quiera obtener
     * @param offset a partir de que reparación se empieza a contar
     * @returns Promise<InsuranceCompany[]>
     */
    getAllPaged(limit, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDataBase + this.endpoint + "/elements/" + limit + "/page/" + offset);
        });
    }
    //byCiaNAme
    /**
     * Metodo que devuelve las compañias de seguros que coincidan con  el nombre introducido
     * @param name Nombre de la compañia de seguros que se quiera buscar
     * @returns Promise<InsuranceCompany[]>
     */
    getByCiaName(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDataBase + this.endpoint + "/CIA_Name/" + name);
        });
    }
    //ByNamePaged
    /**
     * Método que devuelve las compañias de seguros que coincidad con el nombre introducido de forma paginadas
     * @param name Nombre de la compañia de seguros que se quiera buscar
     * @param limit Número de elementos que se quiera devolver
     * @param offset A partir de que elemento se devuelve
     * @returns Promise<InsuranceCompany[]>
     */
    getByNamePaged(name, limit, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDataBase + this.endpoint + "/CIA_Name/" + name + "/elements/" + limit + "/page/" + offset);
        });
    }
    //ByID
    /**
     * Método que devuelva una compañia de seguros que tenga el id
     * @param id número del id de la compañia que se quiera buscar
     * @returns Promise<InsuranceCompany>
     */
    getById(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let insuranceCompany = null;
            return new Promise(resolve => {
                this.http.get(this.URLDataBase + this.endpoint + "/id" + id).subscribe((data) => {
                    if (data.id) {
                        const tmp = {
                            id: data.id,
                            cia_Name: data.cia_Name
                        };
                        insuranceCompany = tmp;
                        resolve(insuranceCompany);
                    }
                }, error => {
                    console.error(error);
                    //meter una alerta
                });
            });
        });
    }
    //CreateOrUpdate
    createOrUpdate(insuranceCompany) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (insuranceCompany != null) {
                if (insuranceCompany.cia_Name != null) {
                    const body = insuranceCompany;
                    return new Promise(resolve => {
                        this.http.post(this.URLDataBase + this.endpoint, body).subscribe((data) => {
                            insuranceCompany = data;
                            resolve(insuranceCompany);
                        }, error => {
                            resolve(null);
                        });
                    });
                }
                else { //alerta por nombre nulo
                }
            }
            else { //alerta por compañia nula
            }
        });
    }
    //delete
    delete(insuranceCompany) {
        return new Promise(resolve => {
            this.http.delete(this.URLDataBase + this.endpoint, { body: insuranceCompany }).subscribe(() => {
                resolve(true);
            }, error => {
                resolve(false);
            });
        });
    }
};
InsuranceCompanyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
InsuranceCompanyService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], InsuranceCompanyService);



/***/ }),

/***/ 27109:
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 872);



let LocalStorageService = class LocalStorageService {
    constructor() { }
    /**
     *
     * @param key string
     * @param value object
     * @returns
     */
    setItem(key, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let result = false;
            try {
                yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({
                    key: key,
                    value: JSON.stringify(value)
                });
                result = true;
            }
            catch (err) {
                console.error(err);
            }
            return Promise.resolve(result);
        });
    }
    getItem(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let data = null;
            try {
                data = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: key });
                data = data.value;
                if (data != null)
                    data = JSON.parse(data);
            }
            catch (err) {
                console.error(err);
            }
            return Promise.resolve(data);
        });
    }
    removeItem(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let result = false;
            try {
                yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.remove({ key: key });
                result = true;
            }
            catch (err) {
                console.error(err);
            }
            return Promise.resolve(result);
        });
    }
};
LocalStorageService.ctorParameters = () => [];
LocalStorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LocalStorageService);



/***/ }),

/***/ 76845:
/*!*************************************************!*\
  !*** ./src/app/services/nav-control.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavControlService": () => (/* binding */ NavControlService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let NavControlService = class NavControlService {
    constructor() {
        this._isEnable4thButton = false;
    }
    enable4thButton() {
        this._isEnable4thButton = true;
    }
    disable4thButton() {
        this._isEnable4thButton = false;
    }
    get isEnable4thButton() {
        return this._isEnable4thButton;
    }
};
NavControlService.ctorParameters = () => [];
NavControlService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], NavControlService);



/***/ }),

/***/ 77524:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);




let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.endpoint = "/users";
        this.URLDatabase = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.herokuConfig.url;
    }
    getListData(endpoint) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let users = [];
            return new Promise(resolve => {
                this.http.get(endpoint).subscribe((data) => {
                    if (data != null && data.length > 0) {
                        for (let miuser of data) {
                            const tmp = {
                                id: miuser.id,
                                code: miuser.code,
                                password: miuser.password,
                                administrator: miuser.administrator,
                                email: miuser.email,
                                name: miuser.name
                            };
                            users.push(tmp);
                        }
                    }
                    resolve(users);
                }, error => {
                });
            });
        });
    }
    getAllPaged(element, page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/element/" + element + "/page/" + page);
        });
    }
    getAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint);
        });
    }
    getById(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let user = null;
            return new Promise(resolve => {
                this.http.get(this.URLDatabase + this.endpoint + "/id/" + id).subscribe((miuser) => {
                    if (miuser.id) {
                        const tmp = {
                            id: miuser.id,
                            code: miuser.code,
                            password: miuser.password,
                            administrator: miuser.administrator,
                            email: miuser.email,
                            name: miuser.name
                        };
                        user = tmp;
                    }
                    resolve(user);
                }, error => {
                    resolve(null);
                });
            });
        });
    }
    getByMail(mail) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/mail/" + mail);
        });
    }
    getFilterCode(code) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/fcode/" + code);
        });
    }
    getByAvailable() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/available");
        });
    }
    getByCode(code) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let user = null;
            return new Promise(resolve => {
                this.http.get(this.URLDatabase + this.endpoint + "/code/" + code).subscribe((miuser) => {
                    if (miuser && miuser.code) {
                        const tmp = {
                            id: miuser.id,
                            code: miuser.code,
                            password: miuser.password,
                            administrator: miuser.administrator,
                            email: miuser.email,
                            name: miuser.name
                        };
                        user = tmp;
                    }
                    resolve(user);
                }, error => {
                    resolve(null);
                });
            });
        });
    }
    getByName(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/name/" + name);
        });
    }
    getByAdministrator(administrator, element, page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + this.endpoint + "/administrator/" + administrator + "/element/" + element + "/page/" + page);
        });
    }
    createOrUpdate(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (user != null) {
                const body = user;
                return new Promise(resolve => {
                    this.http.post(this.URLDatabase + this.endpoint, body).subscribe((miuser) => {
                        let result = {
                            id: miuser.id,
                            code: miuser.code,
                            password: miuser.password,
                            administrator: miuser.administrator,
                            email: miuser.email,
                            name: miuser.name
                        };
                        resolve(result);
                    }, error => {
                        resolve(null);
                    });
                });
            }
        });
    }
    delete(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                this.http.delete(this.URLDatabase + this.endpoint, { body: user }).subscribe(() => {
                    resolve(true);
                }, error => {
                    resolve(false);
                });
            });
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 371:
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilService": () => (/* binding */ UtilService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 78099);




let UtilService = class UtilService {
    constructor(loading, toast, http) {
        this.loading = loading;
        this.toast = toast;
        this.http = http;
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.active) {
                this.miLoading = yield this.loading.create({
                    message: ''
                });
                yield this.miLoading.present();
                this.active = true;
            }
        });
    }
    hideLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield this.miLoading.dismiss();
            this.active = false;
        });
    }
    presentToast(msg, clr, icn) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const miToast = yield this.toast.create({
                message: msg,
                duration: 6000,
                color: clr,
                icon: icn
            });
            miToast.present();
        });
    }
    sendMail(mail) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (mail != null &&
                mail.message != null && mail.receiver != null && mail.subject) {
                const body = mail;
                return new Promise(resolve => {
                    this.http.post('localhost:8080' + '/mailSender', body).subscribe((data) => {
                        resolve(data);
                    }, error => {
                        resolve(false);
                    });
                });
            }
            else
                return new Promise(resolve => { resolve(false); });
        });
    }
};
UtilService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
UtilService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UtilService);



/***/ }),

/***/ 56454:
/*!*************************************************!*\
  !*** ./src/app/services/ward-client.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WardClientService": () => (/* binding */ WardClientService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 36636);




let WardClientService = class WardClientService {
    constructor(authS, router) {
        this.authS = authS;
        this.router = router;
    }
    canActivate(route, state) {
        let user = this.authS.user;
        try {
            if (!user.administrator)
                return true;
            else {
                this.router.navigate(['']);
                return false;
            }
        }
        catch (error) {
            this.router.navigate(['']);
            return false;
        }
    }
};
WardClientService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
WardClientService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], WardClientService);



/***/ }),

/***/ 23920:
/*!***********************************************!*\
  !*** ./src/app/services/wardAdmin.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WardAdminService": () => (/* binding */ WardAdminService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 36636);




let WardAdminService = class WardAdminService {
    constructor(authS, router) {
        this.authS = authS;
        this.router = router;
    }
    canActivate(route, state) {
        let user = this.authS.user;
        try {
            if (user.administrator)
                return true;
            else {
                this.router.navigate(['']);
                return false;
            }
        }
        catch (error) {
            this.router.navigate(['']);
            return false;
        }
    }
};
WardAdminService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
WardAdminService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], WardAdminService);



/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    herokuConfig: {
        url: "https://talleraadd.herokuapp.com"
    }
};


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		83477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		67196,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		38081,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		75017,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		69721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		99216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		96612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		42694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		22938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		51379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		97552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		37218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		97479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		71439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		76397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		12413,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		39411,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		99133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		79003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		96065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		86991,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		82947,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		25919,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99459,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		20301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		43799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		12140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		86197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		41975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		58387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		98659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		26404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		85253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		92619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		82871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		17668,
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		55342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		86185,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		97337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		25705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		87463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-modal.fullscreen {\n  --width: 100%;\n  --height: 100%;\n  --border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbW9kYWwuZnVsbHNjcmVlbiB7XHJcbiAgICAtLXdpZHRoOiAxMDAlO1xyXG4gICAgLS1oZWlnaHQ6IDEwMCU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuIl19 */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map