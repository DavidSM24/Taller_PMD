"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 2960:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);


/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };

  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };

  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };

  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};

const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */


const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;

  const config = webPlugin.config;
  const Plugins = cap.Plugins;

  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  } // TODO: add link to upgrade guide


  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);

  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};

var ExceptionCode;

(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */

  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

class CapacitorException extends Error {
  constructor(message, code) {
    super(message);
    this.message = message;
    this.code = code;
  }

}

const getPlatformId = win => {
  var _a, _b;

  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};

const createCapacitor = win => {
  var _a, _b, _c, _d, _e;

  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */

  const capPlatforms = win.CapacitorPlatforms;

  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };

  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

  const defaultIsNativePlatform = () => getPlatform() !== 'web';

  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);

    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }

    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }

    return false;
  };

  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

  const defaultGetPluginHeader = pluginName => {
    var _a;

    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };

  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

  const handleError = err => win.console.error(err);

  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };

  const registeredPlugins = new Map();

  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);

    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }

    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;

    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }

        return jsImplementation;
      });

      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();

    const createPluginMethod = (impl, prop) => {
      var _a, _b;

      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);

        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };

    const createPluginMethodWrapper = prop => {
      let remove;

      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);

          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });

        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }

        return p;
      }; // Some flair ✨


      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;

      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };

    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');

    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);

      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });

        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();

      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };

    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;

          case 'toJSON':
            return () => ({});

          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;

          case 'removeListener':
            return removeListener;

          default:
            return createPluginMethodWrapper(prop);
        }
      }

    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };

  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }

  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};

const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);

const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */

const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */

const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);
/**
 * Base class web plugins should extend.
 */


class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};

    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }

  addListener(eventName, listenerFunc) {
    var _this = this;

    const listeners = this.listeners[eventName];

    if (!listeners) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it

    const windowListener = this.windowListeners[eventName];

    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }

    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });

      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();

    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });

        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }

  removeAllListeners() {
    var _this2 = this;

    return (0,C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};

      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }

      _this2.windowListeners = {};
    })();
  }

  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];

    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }

  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }

  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }

  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }

  removeListener(eventName, listenerFunc) {
    var _this3 = this;

    return (0,C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];

      if (!listeners) {
        return;
      }

      const index = listeners.indexOf(listenerFunc);

      _this3.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
      // remove the window listener


      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }

  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }

  removeWindowListener(handle) {
    if (!handle) {
      return;
    }

    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }

}

const WebView = /*#__PURE__*/registerPlugin('WebView');


/***/ }),

/***/ 1638:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/storage/dist/esm/definitions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 872:
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/storage/dist/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Storage": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 1638);

const Storage = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Storage', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_storage_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 9138)).then(m => new m.StorageWeb()),
});




/***/ }),

/***/ 2359:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 955);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 9549:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 2359);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 955);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ 7524);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/util.service */ 371);









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService, _services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 955:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 9403);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 6051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 6636);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ 7524);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/util.service */ 371);









let LoginPage = class LoginPage {
    constructor(fb, us, uts, authS, router) {
        this.fb = fb;
        this.us = us;
        this.uts = uts;
        this.authS = authS;
        this.router = router;
        this.complete = false;
        this.formLogin = this.fb.group({
            code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("[0-9]*")],
            pass: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    ngOnInit() {
        if (this.authS.isLogged()) {
            if (this.authS.user.administrator) {
                this.router.navigate(['/tab-administrator/agency/list']);
            }
            else {
            }
        }
    }
    ionViewWillEnter() {
        if (this.authS.isLogged()) {
            console.log(this.authS.isLogged());
            try {
                this.router.navigate(['/tab-administrator/agency/list']);
            }
            catch (error) {
            }
        }
        this.complete = true;
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let user;
            let correct = false;
            this.uts.presentLoading();
            try {
                let code = yield this.formLogin.get("code").value;
                user = yield this.us.getByCode(code);
                if (user.id && this.formLogin.get("pass").value == user.password) {
                    correct = true;
                }
                this.uts.hideLoading();
                if (correct) {
                    //iniciar sesión... 
                    try {
                        this.authS.user = user;
                        yield this.authS.keepSession();
                        console.log("inciando...");
                        if (user.administrator) {
                            this.router.navigate(['/tab-administrator/agency/list']);
                        }
                        else {
                        }
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
                else {
                    this.uts.presentToast("Usuario o contraseña incorrecta...", "danger");
                }
                this.uts.hideLoading();
            }
            catch (error) {
                this.uts.hideLoading();
                this.uts.presentToast("Usuario o contraseña incorrecta...", "danger");
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _C_Users_david_Documents_2DAM_PMDM_Ionic_taller_PMD_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 6636:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.service */ 7109);





let AuthService = class AuthService {
    constructor(storage, platform, router) {
        this.storage = storage;
        this.platform = platform;
        this.router = router;
        this.isAndroid = false;
        this.loadSession();
    }
    loadSession() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let user = yield this.storage.getItem('tallerUser');
            console.log(user);
            if (user) {
                try {
                    user = JSON.parse(user);
                    this.user = user;
                }
                catch (error) {
                    this.user = null;
                }
            }
        });
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.removeItem('tallerUser');
            this.user = null;
            this.router.navigate(['']);
        });
    }
    keepSession() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return true;
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 7109:
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
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

/***/ 7524:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);




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
                    console.log(data);
                    resolve(users);
                }, error => {
                    console.log(error);
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
                    console.log(user);
                    resolve(user);
                }, error => {
                    console.log(error);
                    console.log(user);
                    resolve(user);
                });
            });
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
                    if (miuser.code) {
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
                    console.log(user);
                    resolve(user);
                }, error => {
                    console.log(error);
                    console.log(user);
                    resolve(user);
                });
            });
        });
    }
    getByName(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let user = null;
            return new Promise(resolve => {
                this.http.get(this.URLDatabase + this.endpoint + "/name/" + name).subscribe((miuser) => {
                    if (miuser.name) {
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
                    console.log(user);
                    resolve(user);
                }, error => {
                    console.log(error);
                    console.log(user);
                    resolve(user);
                });
            });
        });
    }
    getAllUserAgenciesPaged(administrator, element, page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + "/administrator/" + this.endpoint + "/element/" + element + "/page/" + page);
        });
    }
    getAllAdminPaged(administrator, element, page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.getListData(this.URLDatabase + "/administrator/" + this.endpoint + "/element/" + element + "/page/" + page);
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
                        console.log(error);
                        resolve(user);
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
                    console.log(error);
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

/***/ 9403:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login/login.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<div  style=\"background-color: white; width: 100%; height: 100%;\">\r\n  <div>\r\n    \r\n    <div class=\"login\">\r\n      <ion-img src=\"../../assets/images/logo.png\"></ion-img>\r\n      <form [formGroup]=\"formLogin\">\r\n        <h1>Login</h1>\r\n        <div class=\"group\">\r\n          <label for=\"code\" class=\"label\" style=\"margin-bottom:3% !important;\">Código</label>\r\n          <input id=\"code\" type=\"number\" class=\"input\" formControlName=\"code\">\r\n        </div>\r\n        <div class=\"group\">\r\n          <label for=\"pass\" class=\"label\" style=\"margin-bottom:3% !important;\">Contraseña</label>\r\n          <input id=\"pass\" type=\"password\" class=\"input\" data-type=\"pass\" formControlName=\"pass\">\r\n        </div>\r\n\r\n        <div class=\"wrapper\">\r\n          <div class=\"link_wrapper\">\r\n            <a (click)=\"login()\">Iniciar</a>\r\n            <div class=\"icon\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 268.832 268.832\">\r\n                <path d=\"M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z\"/>\r\n              </svg>\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n        \r\n      </form>\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ 6051:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n.wrapper * {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  top: 0;\n  bottom: 0;\n}\n.link_wrapper {\n  position: relative;\n}\na {\n  display: block;\n  width: 250px;\n  height: 50px;\n  line-height: 50px;\n  font-weight: bold;\n  text-decoration: none;\n  background: #333;\n  text-align: center;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border: 3px solid #333;\n  transition: all 0.35s;\n}\n.icon {\n  width: 50px;\n  height: 50px;\n  border: 3px solid transparent;\n  position: absolute;\n  transform: rotate(45deg);\n  right: 0;\n  top: 0;\n  z-index: -1;\n  transition: all 0.35s;\n}\n.icon svg {\n  width: 30px;\n  position: absolute;\n  top: calc(50% - 15px);\n  left: calc(50% - 15px);\n  transform: rotate(-45deg);\n  fill: #2f0fbe;\n  transition: all 0.35s;\n}\na:hover {\n  width: 200px;\n  border: 3px solid #2f0fbe;\n  background: transparent;\n  color: #2f0fbe;\n}\n* {\n  -ms-box-sizing: border-box;\n  -o-box-sizing: border-box;\n  box-sizing: border-box;\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\nbody {\n  width: 100%;\n  height: 100%;\n  font-family: \"Open Sans\", sans-serif;\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#3E1D6D\", endColorstr=\"#092756\",GradientType=1 );\n}\n.login {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -200px 0 0 -150px;\n  width: 300px;\n  height: 300px;\n}\n.login h1 {\n  color: #203B8C;\n  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  letter-spacing: 1px;\n  text-align: center;\n}\ninput {\n  width: 100%;\n  margin-bottom: 10px;\n  background: rgba(0, 0, 0, 0.3);\n  border: none;\n  outline: none;\n  padding: 10px;\n  font-size: 13px;\n  color: #fff;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2), 0 1px 1px rgba(255, 255, 255, 0.2);\n  transition: box-shadow 0.5s ease;\n}\nlabel {\n  color: black;\n}\ninput:focus {\n  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.4), 0 1px 1px rgba(255, 255, 255, 0.2);\n}\n.disabled {\n  opacity: 0.5 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw4REFBQTtBQUVSO0VBQ0MsV0FBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FBQUg7QUFHQTtFQUNBLGtCQUFBO0FBQUE7QUFHQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFBQTtBQUdBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUFBO0FBR0E7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFBQTtBQUdBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBQUE7QUFHQTtFQUErRCwwQkFBQTtFQUEyQix5QkFBQTtFQUEwQixzQkFBQTtBQUtwSDtBQUhBO0VBQU8sV0FBQTtFQUFhLFlBQUE7RUFBYSxnQkFBQTtBQVNqQztBQVBBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUdBLG1IQUFBO0FBUUQ7QUFOQTtFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBU0Q7QUFQQTtFQUFZLGNBQUE7RUFDVCx3Q0FBQTtFQUF1QyxtQkFBQTtFQUFvQixrQkFBQTtBQWE5RDtBQVhBO0VBQ0MsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDBGQUFBO0VBS0EsZ0NBQUE7QUFjRDtBQVhBO0VBQ0MsWUFBQTtBQWNEO0FBWkE7RUFBYywwRkFBQTtBQWdCZDtBQWRBO0VBQ0MsdUJBQUE7QUFpQkQiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fucyk7XHJcblxyXG4ud3JhcHBlciAqe1xyXG5cdHdpZHRoOjEwMCU7XHJcbiAgIGhlaWdodDoxMDAlO1xyXG4gICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgdG9wOjA7XHJcbiAgIGJvdHRvbTowO1xyXG59XHJcbiAgXHJcbi5saW5rX3dyYXBwZXJ7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuYXtcclxuZGlzcGxheTogYmxvY2s7XHJcbndpZHRoOiAyNTBweDtcclxuaGVpZ2h0OiA1MHB4O1xyXG5saW5lLWhlaWdodDogNTBweDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuYmFja2dyb3VuZDogIzMzMztcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5jb2xvcjogI2ZmZjtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxubGV0dGVyLXNwYWNpbmc6IDFweDtcclxuYm9yZGVyOiAzcHggc29saWQgIzMzMztcclxudHJhbnNpdGlvbjogYWxsIC4zNXM7XHJcbn1cclxuXHJcbi5pY29ue1xyXG53aWR0aDogNTBweDtcclxuaGVpZ2h0OiA1MHB4O1xyXG5ib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbnJpZ2h0OiAwO1xyXG50b3A6IDA7XHJcbnotaW5kZXg6IC0xO1xyXG50cmFuc2l0aW9uOiBhbGwgLjM1cztcclxufVxyXG5cclxuLmljb24gc3Zne1xyXG53aWR0aDogMzBweDtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IGNhbGMoNTAlIC0gMTVweCk7XHJcbmxlZnQ6IGNhbGMoNTAlIC0gMTVweCk7XHJcbnRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbmZpbGw6ICMyZjBmYmU7XHJcbnRyYW5zaXRpb246IGFsbCAuMzVzO1xyXG59XHJcblxyXG5hOmhvdmVye1xyXG53aWR0aDogMjAwcHg7XHJcbmJvcmRlcjogM3B4IHNvbGlkICMyZjBmYmU7XHJcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5jb2xvcjogIzJmMGZiZTtcclxufVxyXG5cclxuKiB7IC13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94OyAtbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDsgLW1zLWJveC1zaXppbmc6Ym9yZGVyLWJveDsgLW8tYm94LXNpemluZzpib3JkZXItYm94OyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IH1cclxuXHJcbmh0bWwgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OjEwMCU7IG92ZXJmbG93OmhpZGRlbjsgfVxyXG5cclxuYm9keSB7IFxyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDoxMDAlO1xyXG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHQvL2JhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuXHJcblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMzRTFENkQnLCBlbmRDb2xvcnN0cj0nIzA5Mjc1NicsR3JhZGllbnRUeXBlPTEgKTtcclxufVxyXG4ubG9naW4geyBcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA1MCU7XHJcblx0bGVmdDogNTAlO1xyXG5cdG1hcmdpbjogLTIwMHB4IDAgMCAtMTUwcHg7XHJcblx0d2lkdGg6MzAwcHg7XHJcblx0aGVpZ2h0OjMwMHB4XHJcbn1cclxuLmxvZ2luIGgxIHsgY29sb3I6ICMyMDNCOENcclxuXHQ7IHRleHQtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMyk7IGxldHRlci1zcGFjaW5nOjFweDsgdGV4dC1hbGlnbjpjZW50ZXI7IH1cclxuXHJcbmlucHV0IHsgXHJcblx0d2lkdGg6IDEwMCU7IFxyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7IFxyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHR0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwLjMpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4zKTtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAtNXB4IDQ1cHggcmdiYSgxMDAsMTAwLDEwMCwwLjIpLCAwIDFweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuNXMgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IGJveC1zaGFkb3cgLjVzIGVhc2U7XHJcblx0LW8tdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuNXMgZWFzZTtcclxuXHQtbXMtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuNXMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IC41cyBlYXNlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG59XHJcbmlucHV0OmZvY3VzIHsgYm94LXNoYWRvdzogaW5zZXQgMCAtNXB4IDQ1cHggcmdiYSgxMDAsMTAwLDEwMCwwLjQpLCAwIDFweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjIpOyB9XHJcblxyXG4uZGlzYWJsZWR7XHJcblx0b3BhY2l0eTowLjUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map