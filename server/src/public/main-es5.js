function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/ngx-push-notifications/node_modules/@angular/core/fesm2015 lazy recursive":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/ngx-push-notifications/node_modules/@angular/core/fesm2015 lazy namespace object ***!
    \*******************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNgxPushNotificationsNode_modulesAngularCoreFesm2015LazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./node_modules/ngx-push-notifications/node_modules/@angular/core/fesm2015 lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contactos/contactos.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactos/contactos.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactosContactosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"divContactos\" class=\"divprincipal\">\n  <div class=\"direita\">\n    <h4 class=\"titulomapa\">Onde nos situamos</h4>\n    <iframe\n      src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.362029913082!2d-7.922296485067042!3d40.64394934971378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23370121313ff7%3A0xfb8b9b36fe071169!2sESTGV%20-%20Escola%20Superior%20de%20Tecnologia%20e%20Gest%C3%A3o%20de%20Viseu!5e0!3m2!1spt-PT!2spt!4v1580840702589!5m2!1spt-PT!2spt\"\n      width=\"400\" height=\"300\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\n  </div>\n  <form [formGroup]=\"supportForm\" #declarativeForm=\"ngForm\">\n    <h1 class=\"titulo\">Contacte-nos!</h1>\n    <p class=\"textos\">E-mail:</p>\n    <input type=\"text\" name=\"email\" class=\"MargensCaixas\" formControlName=\"email\"><br>\n    <p class=\"textos\">Assunto:</p>\n    <input type=\"text\" name=\"subject\" class=\"MargensCaixas\" formControlName=\"subject\"><br>\n    <p class=\"textos\">Mensagem:</p>\n    <textarea rows=\"5\" cols=\"100\" class=\"MargensCaixaMensagem\" formControlName=\"message\"></textarea><br>\n    <br>\n    <form #declarativeForm=\"ngForm\">\n      <re-captcha [(ngModel)]=\"declarativeFormCaptchaValue\" name=\"captcha\" required></re-captcha>\n    </form>\n    <br>\n    <input type=\"submit\" value=\"Enviar\" class=\"btnenviar\" (click)=\"doSupport()\" [disabled]=\"!declarativeForm.valid\">\n    <input type=\"submit\" value=\"Cancelar\" class=\"btncancelar\">\n    <input type=\"reset\" value=\"Limpar\" class=\"btncancelar\">\n    <p class=\"textos\">Clique em \"Enviar\" para nos contactar.</p>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/enviar-mensagem/enviar-mensagem.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/enviar-mensagem/enviar-mensagem.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEnviarMensagemEnviarMensagemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"divprincipal\">\n  <form [formGroup]=\"userForm\" #declarativeForm=\"ngForm\">\n    <h1 class=\"titulo\">Enviar Mensagem</h1>\n    <p class=\"textos\">E-mail:</p>\n    <input type=\"text\" name=\"email\" class=\"MargensCaixas\" formControlName=\"from\"><br>\n    <p class=\"textos\">Destinatário:</p>\n    <input type=\"text\" name=\"destinatario\" class=\"MargensCaixas\" formControlName=\"to\"><br>\n    <p class=\"textos\">Assunto:</p>\n    <input type=\"text\" name=\"assunto\" class=\"MargensCaixas\" formControlName=\"subject\"><br>\n    <p class=\"textos\">Mensagem:</p>\n    <textarea rows=\"5\" cols=\"100\" name=\"message\" class=\"MargensCaixaMensagem\" formControlName=\"message\"></textarea><br>\n    <br>\n    <form #declarativeForm=\"ngForm\">\n      <re-captcha [(ngModel)]=\"declarativeFormCaptchaValue\" name=\"captcha\" required></re-captcha>\n    </form>\n    <br>\n    <input type=\"submit\" value=\"Enviar\" class=\"btnenviar\" (click)=\"doSupport()\" [disabled]=\"!declarativeForm.valid\">\n    <input type=\"submit\" value=\"Cancelar\" class=\"btncancelar\">\n    <input type=\"reset\" value=\"Limpar\" class=\"btncancelar\">\n    <p class=\"textos\">Clique em \"Enviar\" para enviar a mensagem.</p>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"divprincipal\">\n  <h1 class=\"titulo\">Início</h1>\n  <h4 class=\"titulo\">Benvindo ao site.</h4>\n  <p class=\"textos\">Este é um projeto prático desenvolvido para a UC de Aplicações para a Internet III da\n    Licenciatura<br>\n    de Tecnologias e Design de Multimédia, na Ecola Superior de Tecnologia e Gestão do Instituto Politécnico de\n    Viseu,<br>\n    o qual consiste em:</p>\n  <p class=\"textos\">&#x25B8; Desenvolver uma API em NodeJS (ou PHP) para disponibilizar serviços a uma aplicação\n    cliente;</p>\n  <p class=\"textos\">&#x25B8; Desenvolver uma aplicação cliente através da framework Angular (ou vanilla JS +\n    JQuery) para interagir com a API anterior;</p>\n  <p class=\"textos\">&#x25B8; Integrar a utilização de serviços (APIs) de terceiros na API para implementar\n    algumas das funcionalidades a fornecer ao utilizador;</p>\n  <br>\n  <figure class=\"effect8\">\n    <a href=\"#\"><img alt=\"Effect 8\" src=\"https://i.ibb.co/PD6ZmQW/ai3-print-4.png\"></a>\n    <figcaption>\n      <div class=\"info\">\n        <p>Esquema do Projeto Prático de AI3</p>\n      </div>\n    </figcaption>\n  </figure>\n  <br>\n  <br>\n  <br>\n  <p class=\"textos2\">Este projeto foi desenvolvido por: Inês Azougado, nº 17366 | Dennis Amaral, nº 15537\n  </p>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"divprincipal\">\n  <form [formGroup]=\"userForm\" #declarativeForm=\"ngForm\">\n    <h1 class=\"titulo\">Login</h1>\n    <p><input type=\"text\" name=\"email\" class=\"MargensCaixas\" matInput placeholder=\"Email\" formControlName=\"email\"></p>\n    <p><input type=\"password\" name=\"pass\" class=\"MargensCaixas\" matInput placeholder=\"Palavra pass\"\n        formControlName=\"pass\">\n    </p>\n    <br>\n    <form #declarativeForm=\"ngForm\">\n      <re-captcha [(ngModel)]=\"declarativeFormCaptchaValue\" name=\"captcha\" required></re-captcha>\n    </form>\n    <br>\n    <button class=\"btnenviar\" type=\"submit\" (click)=\"doLogin()\" [disabled]=\"!declarativeForm.valid\">Login</button>\n    <br>\n    <br>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/material-layout/material-layout.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/material-layout/material-layout.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMaterialLayoutMaterialLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"(isHandset$ | async) === false\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"/users\">Users</a>\n      <!--a mat-list-item href=\"#\">Link 2</a-->\n      <!--a mat-list-item href=\"#\">Logout</a-->\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>Projeto Final</span>\n    </mat-toolbar>\n    <div class=\"main-content\">\n      <router-outlet></router-outlet>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavBarNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"navbar\">\n  <img class=\"imgLOGO\" src=\"https://i.ibb.co/n76ZsFc/Asset-4.png\" alt=\"Projeto AI3 19/20\">\n  <div class=\"divpricipal\">\n    <button (click)=\"auth.login()\" *ngIf=\"!auth.loggedIn\" class=\"btn btnmenu\"> &nbsp; Entrar com Auth0 &nbsp; </button>\n    <button routerLink=\"/login\" *ngIf=\"!auth.loggedIn\" class=\"btn btnmenu\"> &nbsp; Login &nbsp; </button>\n    <button routerLink=\"/registar\" *ngIf=\"!auth.loggedIn\" class=\"btn btnmenu\"> &nbsp; Registar &nbsp; </button>\n    <button routerLink=\"/home\" class=\"btn btnmenu\"> &nbsp; Início &nbsp; </button>\n    <button routerLink=\"/profile\" *ngIf=\"auth.loggedIn\" class=\"btn btnmenu\"> &nbsp; Perfil &nbsp; </button>\n    <button routerLink=\"/enviar-mensagem\" *ngIf=\"auth.loggedIn\" class=\"btn btnmenu\"> &nbsp; Enviar Mensagem\n      &nbsp;</button>\n    <button routerLink=\"/contactos\" *ngIf=\"auth.loggedIn\" class=\"btn btnmenu\"> &nbsp; Contactos &nbsp; </button>\n    <button (click)=\"auth.logout()\" *ngIf=\"auth.loggedIn\" class=\"btn btnmenu\"> &nbsp; Log Out &nbsp; </button>\n  </div>\n</header>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"divprincipal\">\n  <h1 class=\"titulo\">Perfil</h1>\n  <div class=\"imgPerfil\">\n    <pre class=\"dados\" *ngIf=\"auth.userProfile$ | async as profile\">\n    <img class=\"imgUtilizador\" src=\"{{profile.picture}}\">\n  </pre>\n  </div>\n  <div class=\"InfoPerfil\">\n    <p class=\"textos\"><b>Nome</b></p>\n    <pre class=\"dados\" *ngIf=\"auth.userProfile$ | async as profile\">\n    <code class=\"textos2\">{{profile.name}}</code>\n  </pre>\n    <p class=\"textos\"><b>Nome de Utilizador</b></p>\n    <pre class=\"dados\" *ngIf=\"auth.userProfile$ | async as profile\">\n    <code class=\"textos2\">{{profile.nickname}}</code>\n  </pre>\n    <p class=\"textos\"><b>E-mail</b></p>\n    <pre class=\"dados\" *ngIf=\"auth.userProfile$ | async as profile\">\n    <code class=\"textos2\">{{profile.email}}</code>\n  </pre>\n    <p class=\"textos\"><b>Verificação de E-mail</b></p>\n    <pre class=\"dados\" *ngIf=\"auth.userProfile$ | async as profile\">\n    <code class=\"textos2\">{{profile.email_verified}}</code>\n  </pre>\n    <p class=\"textos\"><b>Atualizado em</b></p>\n    <pre class=\"dados\" *ngIf=\"auth.userProfile$ | async as profile\">\n    <code class=\"textos2\">{{profile.updated_at}}</code>\n  </pre>\n    <p class=\"textos\"><b>Atualizado em</b></p>\n    <pre class=\"dados\" *ngIf=\"auth.userProfile$ | async as profile\">\n    <code class=\"textos2\">{{profile.updated_at}}</code>\n  </pre>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registar/registar.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registar/registar.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistarRegistarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"divprincipal\">\n  <form [formGroup]=\"registForm\" #declarativeForm=\"ngForm\">\n    <h1 class=\"titulo\">Registar Utilizador</h1>\n    <p class=\"textos\">Nome:</p>\n    <input type=\"text\" name=\"nome\" class=\"MargensCaixas\" formControlName=\"nome\"><br>\n    <p class=\"textos\">Apelido:</p>\n    <input type=\"text\" name=\"apelido\" class=\"MargensCaixas\" formControlName=\"apelido\"><br>\n    <p class=\"textos\">Nome de Utilizador:</p>\n    <input type=\"text\" name=\"nomeUt\" class=\"MargensCaixas\" formControlName=\"nomeUt\"><br>\n    <p class=\"textos\">Email:</p>\n    <input type=\"text\" name=\"email\" class=\"MargensCaixas\" formControlName=\"email\"><br>\n    <p class=\"textos\">Palavra-Passe:</p>\n    <input type=\"text\" name=\"pass\" class=\"MargensCaixas\" formControlName=\"pass\"><br>\n    <br>\n    <form #declarativeForm=\"ngForm\">\n      <re-captcha [(ngModel)]=\"declarativeFormCaptchaValue\" name=\"captcha\" required></re-captcha>\n    </form>\n    <br>\n    <input type=\"submit\" value=\"Registar\" class=\"btnenviar\" [disabled]=\"!declarativeForm.valid\">\n    <input type=\"submit\" value=\"Cancelar\" class=\"btncancelar\">\n    <input type=\"reset\" value=\"Limpar\" class=\"btncancelar\">\n    <p class=\"textos\">Clique em \"Registar\" para se registar.</p>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/api-client/api.module.ts":
  /*!******************************************!*\
    !*** ./src/app/api-client/api.module.ts ***!
    \******************************************/

  /*! exports provided: ApiModule */

  /***/
  function srcAppApiClientApiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiModule", function () {
      return ApiModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./configuration */
    "./src/app/api-client/configuration.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _api_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./api/account.service */
    "./src/app/api-client/api/account.service.ts");
    /* harmony import */


    var _api_communication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./api/communication.service */
    "./src/app/api-client/api/communication.service.ts");
    /* harmony import */


    var _api_support_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./api/support.service */
    "./src/app/api-client/api/support.service.ts");

    var ApiModule_1;

    var ApiModule = ApiModule_1 =
    /*#__PURE__*/
    function () {
      function ApiModule(parentModule, http) {
        _classCallCheck(this, ApiModule);

        if (parentModule) {
          throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }

        if (!http) {
          throw new Error('You need to import the HttpClientModule in your AppModule! \n' + 'See also https://github.com/angular/angular/issues/20575');
        }
      }

      _createClass(ApiModule, null, [{
        key: "forRoot",
        value: function forRoot(configurationFactory) {
          return {
            ngModule: ApiModule_1,
            providers: [{
              provide: _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"],
              useFactory: configurationFactory
            }]
          };
        }
      }]);

      return ApiModule;
    }();

    ApiModule.ctorParameters = function () {
      return [{
        type: ApiModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
        }]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    ApiModule = ApiModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [],
      declarations: [],
      exports: [],
      providers: [_api_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"], _api_communication_service__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"], _api_support_service__WEBPACK_IMPORTED_MODULE_6__["SupportService"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], ApiModule);
    /***/
  },

  /***/
  "./src/app/api-client/api/account.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/api-client/api/account.service.ts ***!
    \***************************************************/

  /*! exports provided: AccountService */

  /***/
  function srcAppApiClientApiAccountServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountService", function () {
      return AccountService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../variables */
    "./src/app/api-client/variables.ts");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../configuration */
    "./src/app/api-client/configuration.ts");
    /**
     * AI3 Open API Specification
     * AI3 Open API Specification
     *
     * OpenAPI spec version: 1.0.0
     * Contact: ai3@tdm.estgv.ipv.pt
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */

    /* tslint:disable:no-unused-variable member-ordering */


    var AccountService =
    /*#__PURE__*/
    function () {
      function AccountService(httpClient, basePath, configuration) {
        _classCallCheck(this, AccountService);

        this.httpClient = httpClient;
        this.basePath = 'http://localhost:3000/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

        if (basePath) {
          this.basePath = basePath;
        }

        if (configuration) {
          this.configuration = configuration;
          this.basePath = basePath || configuration.basePath || this.basePath;
        }
      }
      /**
       * @param consumes string[] mime-types
       * @return true: consumes contains 'multipart/form-data', false: otherwise
       */


      _createClass(AccountService, [{
        key: "canConsumeForm",
        value: function canConsumeForm(consumes) {
          var form = 'multipart/form-data';
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = consumes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var consume = _step.value;

              if (form === consume) {
                return true;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return false;
        }
      }, {
        key: "accountChangePasswordPost",
        value: function accountChangePasswordPost(body) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling accountChangePasswordPost.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['application/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json'];
          var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

          if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
          }

          return this.httpClient.request('post', "".concat(this.basePath, "/account/change_password"), {
            body: body,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "accountLoginPost",
        value: function accountLoginPost(body) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling accountLoginPost.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['application/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json'];
          var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

          if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
          }

          return this.httpClient.request('post', "".concat(this.basePath, "/account/login"), {
            body: body,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "accountLogoutGet",
        value: function accountLogoutGet() {
          var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
          var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var headers = this.defaultHeaders; // authentication (auth0) required

          if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function' ? this.configuration.accessToken() : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
          } // to determine the Accept header


          var httpHeaderAccepts = [];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.request('get', "".concat(this.basePath, "/account/logout"), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "accountPreferencesPut",
        value: function accountPreferencesPut(body) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling accountPreferencesPut.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = [];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json'];
          var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

          if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
          }

          return this.httpClient.request('put', "".concat(this.basePath, "/account/preferences"), {
            body: body,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "accountRegisterPost",
        value: function accountRegisterPost(body) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling accountRegisterPost.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['application/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json'];
          var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

          if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
          }

          return this.httpClient.request('post', "".concat(this.basePath, "/account/register"), {
            body: body,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "accountsProfileGet",
        value: function accountsProfileGet() {
          var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
          var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var headers = this.defaultHeaders; // authentication (auth0) required

          if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function' ? this.configuration.accessToken() : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
          } // to determine the Accept header


          var httpHeaderAccepts = ['application/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.request('get', "".concat(this.basePath, "/accounts/profile"), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }]);

      return AccountService;
    }();

    AccountService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
        }]
      }, {
        type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], AccountService);
    /***/
  },

  /***/
  "./src/app/api-client/api/communication.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/api-client/api/communication.service.ts ***!
    \*********************************************************/

  /*! exports provided: CommunicationService */

  /***/
  function srcAppApiClientApiCommunicationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommunicationService", function () {
      return CommunicationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../variables */
    "./src/app/api-client/variables.ts");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../configuration */
    "./src/app/api-client/configuration.ts");
    /**
     * AI3 Open API Specification
     * AI3 Open API Specification
     *
     * OpenAPI spec version: 1.0.0
     * Contact: ai3@tdm.estgv.ipv.pt
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */

    /* tslint:disable:no-unused-variable member-ordering */


    var CommunicationService =
    /*#__PURE__*/
    function () {
      function CommunicationService(httpClient, basePath, configuration) {
        _classCallCheck(this, CommunicationService);

        this.httpClient = httpClient;
        this.basePath = 'http://localhost:3000/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

        if (basePath) {
          this.basePath = basePath;
        }

        if (configuration) {
          this.configuration = configuration;
          this.basePath = basePath || configuration.basePath || this.basePath;
        }
      }
      /**
       * @param consumes string[] mime-types
       * @return true: consumes contains 'multipart/form-data', false: otherwise
       */


      _createClass(CommunicationService, [{
        key: "canConsumeForm",
        value: function canConsumeForm(consumes) {
          var form = 'multipart/form-data';
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = consumes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var consume = _step2.value;

              if (form === consume) {
                return true;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          return false;
        }
      }, {
        key: "communicationSendEmailPost",
        value: function communicationSendEmailPost(body) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling communicationSendEmailPost.');
          }

          var headers = this.defaultHeaders; // authentication (auth0) required

          if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function' ? this.configuration.accessToken() : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
          } // to determine the Accept header


          var httpHeaderAccepts = [];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json'];
          var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

          if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
          }

          return this.httpClient.request('post', "".concat(this.basePath, "/communication/send_email"), {
            body: body,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }]);

      return CommunicationService;
    }();

    CommunicationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
        }]
      }, {
        type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    CommunicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], CommunicationService);
    /***/
  },

  /***/
  "./src/app/api-client/api/support.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/api-client/api/support.service.ts ***!
    \***************************************************/

  /*! exports provided: SupportService */

  /***/
  function srcAppApiClientApiSupportServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportService", function () {
      return SupportService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../variables */
    "./src/app/api-client/variables.ts");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../configuration */
    "./src/app/api-client/configuration.ts");
    /**
     * AI3 Open API Specification
     * AI3 Open API Specification
     *
     * OpenAPI spec version: 1.0.0
     * Contact: ai3@tdm.estgv.ipv.pt
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */

    /* tslint:disable:no-unused-variable member-ordering */


    var SupportService =
    /*#__PURE__*/
    function () {
      function SupportService(httpClient, basePath, configuration) {
        _classCallCheck(this, SupportService);

        this.httpClient = httpClient;
        this.basePath = 'http://localhost:3000/api';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

        if (basePath) {
          this.basePath = basePath;
        }

        if (configuration) {
          this.configuration = configuration;
          this.basePath = basePath || configuration.basePath || this.basePath;
        }
      }
      /**
       * @param consumes string[] mime-types
       * @return true: consumes contains 'multipart/form-data', false: otherwise
       */


      _createClass(SupportService, [{
        key: "canConsumeForm",
        value: function canConsumeForm(consumes) {
          var form = 'multipart/form-data';
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = consumes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var consume = _step3.value;

              if (form === consume) {
                return true;
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          return false;
        }
      }, {
        key: "supportTicketPost",
        value: function supportTicketPost(body) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling supportTicketPost.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = [];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json'];
          var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

          if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
          }

          return this.httpClient.request('post', "".concat(this.basePath, "/support/ticket"), {
            body: body,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }]);

      return SupportService;
    }();

    SupportService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
        }]
      }, {
        type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    SupportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], SupportService);
    /***/
  },

  /***/
  "./src/app/api-client/configuration.ts":
  /*!*********************************************!*\
    !*** ./src/app/api-client/configuration.ts ***!
    \*********************************************/

  /*! exports provided: Configuration */

  /***/
  function srcAppApiClientConfigurationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Configuration", function () {
      return Configuration;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Configuration =
    /*#__PURE__*/
    function () {
      function Configuration() {
        var configurationParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Configuration);

        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
      }
      /**
       * Select the correct content-type to use for a request.
       * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
       * If no content type is found return the first found type if the contentTypes is not empty
       * @param contentTypes - the array of content types that are available for selection
       * @returns the selected content-type or <code>undefined</code> if no selection could be made.
       */


      _createClass(Configuration, [{
        key: "selectHeaderContentType",
        value: function selectHeaderContentType(contentTypes) {
          var _this = this;

          if (contentTypes.length == 0) {
            return undefined;
          }

          var type = contentTypes.find(function (x) {
            return _this.isJsonMime(x);
          });

          if (type === undefined) {
            return contentTypes[0];
          }

          return type;
        }
        /**
         * Select the correct accept content-type to use for a request.
         * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
         * If no content type is found return the first found type if the contentTypes is not empty
         * @param accepts - the array of content types that are available for selection.
         * @returns the selected content-type or <code>undefined</code> if no selection could be made.
         */

      }, {
        key: "selectHeaderAccept",
        value: function selectHeaderAccept(accepts) {
          var _this2 = this;

          if (accepts.length == 0) {
            return undefined;
          }

          var type = accepts.find(function (x) {
            return _this2.isJsonMime(x);
          });

          if (type === undefined) {
            return accepts[0];
          }

          return type;
        }
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */

      }, {
        key: "isJsonMime",
        value: function isJsonMime(mime) {
          var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
          return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        }
      }]);

      return Configuration;
    }();
    /***/

  },

  /***/
  "./src/app/api-client/variables.ts":
  /*!*****************************************!*\
    !*** ./src/app/api-client/variables.ts ***!
    \*****************************************/

  /*! exports provided: BASE_PATH, COLLECTION_FORMATS */

  /***/
  function srcAppApiClientVariablesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BASE_PATH", function () {
      return BASE_PATH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function () {
      return COLLECTION_FORMATS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('basePath');
    var COLLECTION_FORMATS = {
      'csv': ',',
      'tsv': '   ',
      'ssv': ' ',
      'pipes': '|'
    };
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _contactos_contactos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./contactos/contactos.component */
    "./src/app/contactos/contactos.component.ts");
    /* harmony import */


    var _registar_registar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./registar/registar.component */
    "./src/app/registar/registar.component.ts");
    /* harmony import */


    var _enviar_mensagem_enviar_mensagem_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./enviar-mensagem/enviar-mensagem.component */
    "./src/app/enviar-mensagem/enviar-mensagem.component.ts");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");

    var routes = [{
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    }, {
      path: 'nav-bar',
      component: _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavBarComponent"]
    }, {
      path: 'profile',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
    }, {
      path: 'registar',
      component: _registar_registar_component__WEBPACK_IMPORTED_MODULE_9__["RegistarComponent"]
    }, {
      path: 'contactos',
      component: _contactos_contactos_component__WEBPACK_IMPORTED_MODULE_8__["ContactosComponent"]
    }, {
      path: 'enviar-mensagem',
      component: _enviar_mensagem_enviar_mensagem_component__WEBPACK_IMPORTED_MODULE_10__["EnviarMensagemComponent"]
    }, {
      path: 'profile',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ai3';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: buildApiConfiguration, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "buildApiConfiguration", function () {
      return buildApiConfiguration;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _api_client_api_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./api-client/api.module */
    "./src/app/api-client/api.module.ts");
    /* harmony import */


    var _api_client_configuration__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./api-client/configuration */
    "./src/app/api-client/configuration.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _material_layout_material_layout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./material-layout/material-layout.component */
    "./src/app/material-layout/material-layout.component.ts");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _registar_registar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./registar/registar.component */
    "./src/app/registar/registar.component.ts");
    /* harmony import */


    var _contactos_contactos_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./contactos/contactos.component */
    "./src/app/contactos/contactos.component.ts");
    /* harmony import */


    var _enviar_mensagem_enviar_mensagem_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./enviar-mensagem/enviar-mensagem.component */
    "./src/app/enviar-mensagem/enviar-mensagem.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng_recaptcha__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ng-recaptcha */
    "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var ngx_push_notifications__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ngx-push-notifications */
    "./node_modules/ngx-push-notifications/fesm2015/ngx-push-notifications.js");
    /**
     * Build API configuration
     */


    function buildApiConfiguration() {
      var configurationParameters = {}; // TODO: Token should be injected using HTTP Interceptor pattern (@see link in Moodle)

      var config = new _api_client_configuration__WEBPACK_IMPORTED_MODULE_17__["Configuration"](configurationParameters);
      return config;
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"], _material_layout_material_layout_component__WEBPACK_IMPORTED_MODULE_20__["MaterialLayoutComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_21__["NavBarComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"], _registar_registar_component__WEBPACK_IMPORTED_MODULE_25__["RegistarComponent"], _contactos_contactos_component__WEBPACK_IMPORTED_MODULE_26__["ContactosComponent"], _enviar_mensagem_enviar_mensagem_component__WEBPACK_IMPORTED_MODULE_27__["EnviarMensagemComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ReactiveFormsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_29__["RecaptchaModule"].forRoot(), _api_client_api_module__WEBPACK_IMPORTED_MODULE_16__["ApiModule"].forRoot(buildApiConfiguration), _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_29__["RecaptchaModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_29__["RecaptchaFormsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].production
      })],
      providers: [{
        provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_29__["RECAPTCHA_SETTINGS"],
        useValue: {
          siteKey: '6Ld9pdUUAAAAAF8kZHK66smeEKL21ZzmH7zgyUdE'
        }
      }, ngx_push_notifications__WEBPACK_IMPORTED_MODULE_31__["PushNotificationService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(auth) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this3 = this;

          return this.auth.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loggedIn) {
            if (!loggedIn) {
              _this3.auth.login(state.url);
            }
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @auth0/auth0-spa-js */
    "../node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.js");
    /* harmony import */


    var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(router) {
        var _this4 = this;

        _classCallCheck(this, AuthService);

        this.router = router; // Create an observable of Auth0 instance of client

        this.auth0Client$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2___default()({
          domain: "dev-2jblxwlj.eu.auth0.com",
          client_id: "3344pJux1Ny10g9SCwRIASj9hP1CLujf",
          redirect_uri: "".concat(window.location.origin)
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1), // Every subscription receives the same shared value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        })); // Define observables for SDK methods that return promises by default
        // For each Auth0 SDK method, first ensure the client instance is ready
        // concatMap: Using the client instance, call SDK method; SDK returns a promise
        // from: Convert that resulting promise into an observable

        this.isAuthenticated$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (client) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.isAuthenticated());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
          return _this4.loggedIn = res;
        }));
        this.handleRedirectCallback$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (client) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.handleRedirectCallback());
        })); // Create subject and public observable of user profile data

        this.userProfileSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.userProfile$ = this.userProfileSubject$.asObservable(); // Create a local property for login status

        this.loggedIn = null; // On initial load, check authentication state with authorization server
        // Set up local auth streams if user is already authenticated

        this.localAuthSetup(); // Handle redirect from Auth0 login

        this.handleAuthCallback();
      } // When calling, options can be passed if desired
      // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser


      _createClass(AuthService, [{
        key: "getUser$",
        value: function getUser$(options) {
          var _this5 = this;

          return this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (client) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.getUser(options));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) {
            return _this5.userProfileSubject$.next(user);
          }));
        }
      }, {
        key: "localAuthSetup",
        value: function localAuthSetup() {
          var _this6 = this;

          // This should only be called on app initialization
          // Set up local authentication streams
          var checkAuth$ = this.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (loggedIn) {
            if (loggedIn) {
              // If authenticated, get user and set in app
              // NOTE: you could pass options here if needed
              return _this6.getUser$();
            } // If not authenticated, return stream that emits 'false'


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(loggedIn);
          }));
          checkAuth$.subscribe();
        }
      }, {
        key: "login",
        value: function login() {
          var redirectPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
          // A desired redirect path can be passed to login method
          // (e.g., from a route guard)
          // Ensure Auth0 client instance exists
          this.auth0Client$.subscribe(function (client) {
            // Call method to log in
            client.loginWithRedirect({
              redirect_uri: "".concat(window.location.origin),
              appState: {
                target: redirectPath
              }
            });
          });
        }
      }, {
        key: "handleAuthCallback",
        value: function handleAuthCallback() {
          var _this7 = this;

          // Call when app reloads after user logs in with Auth0
          var params = window.location.search;

          if (params.includes('code=') && params.includes('state=')) {
            var targetRoute; // Path to redirect to after login processsed

            var authComplete$ = this.handleRedirectCallback$.pipe( // Have client, now call method to handle auth callback redirect
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (cbRes) {
              // Get and set target redirect route from callback results
              targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function () {
              // Redirect callback complete; get user and login status
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([_this7.getUser$(), _this7.isAuthenticated$]);
            })); // Subscribe to authentication completion observable
            // Response will be an array of user and login status

            authComplete$.subscribe(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  user = _ref2[0],
                  loggedIn = _ref2[1];

              // Redirect to target route after callback processing
              _this7.router.navigate([targetRoute]);
            });
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          // Ensure Auth0 client instance exists
          this.auth0Client$.subscribe(function (client) {
            // Call method to log out
            client.logout({
              client_id: "3344pJux1Ny10g9SCwRIASj9hP1CLujf",
              returnTo: "".concat(window.location.origin)
            });
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/contactos/contactos.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/contactos/contactos.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactosContactosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".divprincipal {\n  margin-top: 60px;\n  margin-left: 70px;\n}\n\n.direita {\n  position: absolute;\n  right: 70px;\n}\n\n.titulo {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 30px;\n  color: #5a5a5a;\n}\n\n.btnenviar {\n  background-color: white;\n  color: #5a5a5a;\n  border: 2px solid #ACE8C6;\n  width: 100px;\n  height: 50px;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  cursor: pointer;\n  outline: none;\n}\n\n.btnenviar:hover {\n  background-color: #ACE8C6;\n  color: #5a5a5a;\n}\n\n.btnenviar:disabled {\n  background-color: #ffdddd;\n  color: #5a5a5a;\n  border: 2px solid #e27231;\n  outline: none;\n}\n\n.btncancelar {\n  background-color: white;\n  color: #5a5a5a;\n  border: 2px solid #ACE8C6;\n  width: 100px;\n  height: 50px;\n  margin-left: 10px;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  cursor: pointer;\n}\n\n.btncancelar:hover {\n  background-color: #ACE8C6;\n  color: #5a5a5a;\n}\n\n.MargensCaixas {\n  width: 370px;\n  height: 25px;\n  border: 1px solid #ACE8C6;\n}\n\n.MargensCaixaMensagem {\n  border: 1px solid #ACE8C6;\n}\n\n.textos {\n  margin-bottom: 5px;\n  color: #5a5a5a;\n}\n\ntextarea {\n  padding-left: 10px;\n  padding-top: 5px;\n  outline: none;\n}\n\ninput {\n  outline: none;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmVzYXpvdWdhZG8vRG9jdW1lbnRzL0dpdEh1Yi9lc3Rndi1kaS10ZG0tYWkzLXByb2plY3QtdGVtcGxhdGUvY2xpZW50L3NyYy9hcHAvY29udGFjdG9zL2NvbnRhY3Rvcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdG9zL2NvbnRhY3Rvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3Rvcy9jb250YWN0b3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2cHJpbmNpcGFsIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG59XG5cbi5kaXJlaXRhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNzBweDtcbn1cblxuLnRpdHVsbyB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XG59XG5cbi5idG5lbnZpYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBQ0U4QzY7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ0bmVudmlhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQ0U4QzY7XG4gIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XG59XG5cbi5idG5lbnZpYXI6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjEsIDIyMSk7XG4gIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMjYsIDExNCwgNDkpO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYnRuY2FuY2VsYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBQ0U4QzY7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG5jYW5jZWxhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQ0U4QzY7XG4gIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XG59XG5cbi5NYXJnZW5zQ2FpeGFzIHtcbiAgd2lkdGg6IDM3MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQ0U4QzY7XG59XG5cbi5NYXJnZW5zQ2FpeGFNZW5zYWdlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQ0U4QzY7XG59XG5cbi50ZXh0b3Mge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XG59XG5cbnRleHRhcmVhIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbiIsIi5kaXZwcmluY2lwYWwge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBtYXJnaW4tbGVmdDogNzBweDtcbn1cblxuLmRpcmVpdGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA3MHB4O1xufVxuXG4udGl0dWxvIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM1YTVhNWE7XG59XG5cbi5idG5lbnZpYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICM1YTVhNWE7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBQ0U4QzY7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ0bmVudmlhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQ0U4QzY7XG4gIGNvbG9yOiAjNWE1YTVhO1xufVxuXG4uYnRuZW52aWFyOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGRkZDtcbiAgY29sb3I6ICM1YTVhNWE7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMjcyMzE7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idG5jYW5jZWxhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzVhNWE1YTtcbiAgYm9yZGVyOiAycHggc29saWQgI0FDRThDNjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bmNhbmNlbGFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FDRThDNjtcbiAgY29sb3I6ICM1YTVhNWE7XG59XG5cbi5NYXJnZW5zQ2FpeGFzIHtcbiAgd2lkdGg6IDM3MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQ0U4QzY7XG59XG5cbi5NYXJnZW5zQ2FpeGFNZW5zYWdlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQ0U4QzY7XG59XG5cbi50ZXh0b3Mge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjNWE1YTVhO1xufVxuXG50ZXh0YXJlYSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/contactos/contactos.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/contactos/contactos.component.ts ***!
    \**************************************************/

  /*! exports provided: ContactosComponent */

  /***/
  function srcAppContactosContactosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactosComponent", function () {
      return ContactosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _api_client_api_support_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../api-client/api/support.service */
    "./src/app/api-client/api/support.service.ts");
    /* harmony import */


    var ngx_push_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-push-notifications */
    "./node_modules/ngx-push-notifications/fesm2015/ngx-push-notifications.js");

    var ContactosComponent =
    /*#__PURE__*/
    function () {
      function ContactosComponent(auth, httpClient, formBuilder, userService, supportservice, _pushNotificationService) {
        _classCallCheck(this, ContactosComponent);

        this.auth = auth;
        this.httpClient = httpClient;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.supportservice = supportservice;
        this._pushNotificationService = _pushNotificationService;
        this.supportForm = this.formBuilder.group({
          email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50)]],
          subject: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50)]],
          message: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(250)]]
        });
      }

      _createClass(ContactosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._pushNotificationService.requestPermission();

          this.showNoti();
        }
      }, {
        key: "showNoti",
        value: function showNoti() {
          var title = 'Bem vindo à página Contactos!';
          var options = new ngx_push_notifications__WEBPACK_IMPORTED_MODULE_7__["PushNotificationOptions"]();
          options.body = 'Qualquer dúvida contacte-nos!';

          this._pushNotificationService.create(title, options).subscribe(function (notif) {
            if (notif.event.type === 'show') {
              console.log('onshow');
              setTimeout(function () {
                notif.notification.close();
              }, 3000);
            }

            if (notif.event.type === 'click') {
              console.log('click');
              notif.notification.close();
            }

            if (notif.event.type === 'close') {
              console.log('close');
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "doSupport",
        value: function doSupport() {
          var sendmail = this.supportForm.value;
          console.log(sendmail);
          this.supportservice.supportTicketPost(sendmail).subscribe({
            next: this.onSuccess.bind(this),
            error: this.onError.bind(this)
          });
        }
      }, {
        key: "onSuccess",
        value: function onSuccess(res) {
          console.log('SUCESSO');
        }
      }, {
        key: "onError",
        value: function onError(res) {
          console.log('ERRO');
        }
      }]);

      return ContactosComponent;
    }();

    ContactosComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _api_client_api_support_service__WEBPACK_IMPORTED_MODULE_6__["SupportService"]
      }, {
        type: ngx_push_notifications__WEBPACK_IMPORTED_MODULE_7__["PushNotificationService"]
      }];
    };

    ContactosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contactos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contactos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contactos/contactos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contactos.component.scss */
      "./src/app/contactos/contactos.component.scss")).default]
    })], ContactosComponent);
    /***/
  },

  /***/
  "./src/app/enviar-mensagem/enviar-mensagem.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/enviar-mensagem/enviar-mensagem.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEnviarMensagemEnviarMensagemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".divprincipal {\n  margin-top: 60px;\n  margin-left: 70px;\n}\n\n.titulo {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 30px;\n  color: #5a5a5a;\n}\n\n.btnenviar {\n  background-color: white;\n  color: #5a5a5a;\n  border: 2px solid #ACE8C6;\n  width: 100px;\n  height: 50px;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  cursor: pointer;\n  outline: none;\n}\n\n.btnenviar:hover {\n  background-color: #ACE8C6;\n  color: #5a5a5a;\n}\n\n.btnenviar:disabled {\n  background-color: #ffdddd;\n  color: #5a5a5a;\n  border: 2px solid #e27231;\n  outline: none;\n}\n\n.btncancelar {\n  background-color: white;\n  color: #5a5a5a;\n  border: 2px solid #ACE8C6;\n  width: 100px;\n  height: 50px;\n  margin-left: 10px;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  cursor: pointer;\n}\n\n.btncancelar:hover {\n  background-color: #ACE8C6;\n  color: #5a5a5a;\n}\n\n.MargensCaixas {\n  width: 370px;\n  height: 25px;\n  border: 1px solid #ACE8C6;\n}\n\n.MargensCaixaMensagem {\n  border: 1px solid #ACE8C6;\n}\n\n.textos {\n  margin-bottom: 5px;\n  color: #5a5a5a;\n}\n\ntextarea {\n  padding-left: 10px;\n  padding-top: 5px;\n  outline: none;\n}\n\ninput {\n  outline: none;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmVzYXpvdWdhZG8vRG9jdW1lbnRzL0dpdEh1Yi9lc3Rndi1kaS10ZG0tYWkzLXByb2plY3QtdGVtcGxhdGUvY2xpZW50L3NyYy9hcHAvZW52aWFyLW1lbnNhZ2VtL2Vudmlhci1tZW5zYWdlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZW52aWFyLW1lbnNhZ2VtL2Vudmlhci1tZW5zYWdlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9lbnZpYXItbWVuc2FnZW0vZW52aWFyLW1lbnNhZ2VtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdnByaW5jaXBhbCB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xufVxuXG4udGl0dWxvIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbn1cblxuLmJ0bmVudmlhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbiAgYm9yZGVyOiAycHggc29saWQgI0FDRThDNjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYnRuZW52aWFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FDRThDNjtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbn1cblxuLmJ0bmVudmlhcjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyMSwgMjIxKTtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIyNiwgMTE0LCA0OSk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idG5jYW5jZWxhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbiAgYm9yZGVyOiAycHggc29saWQgI0FDRThDNjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bmNhbmNlbGFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FDRThDNjtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbn1cblxuLk1hcmdlbnNDYWl4YXMge1xuICB3aWR0aDogMzcwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0FDRThDNjtcbn1cblxuLk1hcmdlbnNDYWl4YU1lbnNhZ2VtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0FDRThDNjtcbn1cblxuLnRleHRvcyB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbn1cblxudGV4dGFyZWEge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuIiwiLmRpdnByaW5jaXBhbCB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xufVxuXG4udGl0dWxvIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM1YTVhNWE7XG59XG5cbi5idG5lbnZpYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICM1YTVhNWE7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBQ0U4QzY7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ0bmVudmlhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQ0U4QzY7XG4gIGNvbG9yOiAjNWE1YTVhO1xufVxuXG4uYnRuZW52aWFyOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGRkZDtcbiAgY29sb3I6ICM1YTVhNWE7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMjcyMzE7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idG5jYW5jZWxhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzVhNWE1YTtcbiAgYm9yZGVyOiAycHggc29saWQgI0FDRThDNjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bmNhbmNlbGFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FDRThDNjtcbiAgY29sb3I6ICM1YTVhNWE7XG59XG5cbi5NYXJnZW5zQ2FpeGFzIHtcbiAgd2lkdGg6IDM3MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQ0U4QzY7XG59XG5cbi5NYXJnZW5zQ2FpeGFNZW5zYWdlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQ0U4QzY7XG59XG5cbi50ZXh0b3Mge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjNWE1YTVhO1xufVxuXG50ZXh0YXJlYSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/enviar-mensagem/enviar-mensagem.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/enviar-mensagem/enviar-mensagem.component.ts ***!
    \**************************************************************/

  /*! exports provided: EnviarMensagemComponent */

  /***/
  function srcAppEnviarMensagemEnviarMensagemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnviarMensagemComponent", function () {
      return EnviarMensagemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _api_client_api_communication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../api-client/api/communication.service */
    "./src/app/api-client/api/communication.service.ts");
    /* harmony import */


    var ngx_push_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-push-notifications */
    "./node_modules/ngx-push-notifications/fesm2015/ngx-push-notifications.js");

    var EnviarMensagemComponent =
    /*#__PURE__*/
    function () {
      function EnviarMensagemComponent(auth, httpClient, formBuilder, userService, comunicationservice, _pushNotificationService) {
        _classCallCheck(this, EnviarMensagemComponent);

        this.auth = auth;
        this.httpClient = httpClient;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.comunicationservice = comunicationservice;
        this._pushNotificationService = _pushNotificationService;
        this.userForm = this.formBuilder.group({
          from: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50)]],
          to: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50)]],
          subject: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50)]],
          message: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(250)]]
        });
      }

      _createClass(EnviarMensagemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._pushNotificationService.requestPermission();

          this.showNoti();
        }
      }, {
        key: "showNoti",
        value: function showNoti() {
          var title = 'Bem vindo à página Eviar Mensagem!';
          var options = new ngx_push_notifications__WEBPACK_IMPORTED_MODULE_7__["PushNotificationOptions"]();
          options.body = 'Envi-e a sua mensagem apartir da nossa página!';

          this._pushNotificationService.create(title, options).subscribe(function (notif) {
            if (notif.event.type === 'show') {
              console.log('onshow');
              setTimeout(function () {
                notif.notification.close();
              }, 3000);
            }

            if (notif.event.type === 'click') {
              console.log('click');
              notif.notification.close();
            }

            if (notif.event.type === 'close') {
              console.log('close');
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "doSupport",
        value: function doSupport() {
          var sendmail = this.userForm.value;
          console.log(sendmail);
          this.comunicationservice.communicationSendEmailPost(sendmail).subscribe({
            next: this.onSuccess.bind(this),
            error: this.onError.bind(this)
          });
        }
      }, {
        key: "onSuccess",
        value: function onSuccess(res) {
          console.log('SUCESSO');
        }
      }, {
        key: "onError",
        value: function onError(res) {
          console.log('ERRO');
        }
      }]);

      return EnviarMensagemComponent;
    }();

    EnviarMensagemComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _api_client_api_communication_service__WEBPACK_IMPORTED_MODULE_6__["CommunicationService"]
      }, {
        type: ngx_push_notifications__WEBPACK_IMPORTED_MODULE_7__["PushNotificationService"]
      }];
    };

    EnviarMensagemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-enviar-mensagem',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./enviar-mensagem.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/enviar-mensagem/enviar-mensagem.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./enviar-mensagem.component.scss */
      "./src/app/enviar-mensagem/enviar-mensagem.component.scss")).default]
    })], EnviarMensagemComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".divprincipal {\n  margin-top: 60px;\n  margin-left: 70px;\n}\n\n.titulo {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #5a5a5a;\n}\n\n.textos {\n  margin-bottom: 5px;\n  color: #5a5a5a;\n}\n\n.textos2 {\n  font-size: 12px;\n  margin-bottom: 5px;\n  color: #5a5a5a;\n}\n\n.effect8 * {\n  margin-top: 0;\n  padding: 0;\n}\n\n.effect8 {\n  background-color: #fff;\n  box-shadow: 0 0 0 0 #555;\n  display: block;\n  height: 154px;\n  opacity: 1;\n  overflow: hidden;\n  position: relative;\n  -webkit-transition: all 0.5s ease 0s;\n  transition: all 0.5s ease 0s;\n  width: 655px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.effect8 img {\n  height: 100%;\n  width: auto;\n  -webkit-transition: all 0.5s ease 0s;\n  transition: all 0.5s ease 0s;\n}\n\n.effect8::before {\n  background-color: rgba(0, 0, 0, 0);\n  bottom: 0;\n  content: \"\";\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-transition: all 0.5s ease 0s;\n  transition: all 0.5s ease 0s;\n}\n\n.effect8:hover {\n  cursor: pointer;\n}\n\n.effect8:hover::before {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.effect8:hover figcaption {\n  -webkit-transform: translateY(0%) scale(1);\n          transform: translateY(0%) scale(1);\n}\n\n.effect8 figcaption {\n  background-color: rgba(255, 255, 255, 0.6);\n  bottom: 0;\n  height: 15%;\n  left: 0;\n  padding: 10px 15px;\n  position: absolute;\n  right: 0;\n  text-align: left;\n  -webkit-transform: translateY(150%) scale(1.5);\n          transform: translateY(150%) scale(1.5);\n  -webkit-transition: all 0.5s ease 0s;\n  transition: all 0.5s ease 0s;\n  z-index: 99;\n}\n\n.effect8 figcaption .info {\n  float: left;\n}\n\n.effect8 figcaption .info p {\n  color: #000000;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmVzYXpvdWdhZG8vRG9jdW1lbnRzL0dpdEh1Yi9lc3Rndi1kaS10ZG0tYWkzLXByb2plY3QtdGVtcGxhdGUvY2xpZW50L3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5Q0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQUEsNEJBQUE7QUNDRjs7QURFQTtFQUNFLGtDQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLG9DQUFBO0VBQUEsNEJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQ0FBQTtVQUFBLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQ0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2cHJpbmNpcGFsIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG59XG5cbi50aXR1bG8ge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbn1cblxuLnRleHRvcyB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbn1cblxuLnRleHRvczIge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbn1cblxuLmVmZmVjdDggKiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5lZmZlY3Q4IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDAgMCAjNTU1O1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxNTRweDtcbiAgb3BhY2l0eTogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDBzO1xuICB3aWR0aDogNjU1cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5lZmZlY3Q4IGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7XG59XG5cbi5lZmZlY3Q4OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBib3R0b206IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcbn1cblxuLmVmZmVjdDg6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lZmZlY3Q4OmhvdmVyOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbi5lZmZlY3Q4OmhvdmVyIGZpZ2NhcHRpb24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHNjYWxlKDEpO1xufVxuXG4uZWZmZWN0OCBmaWdjYXB0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTUlO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNTAlKSBzY2FsZSgxLjUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDBzO1xuICB6LWluZGV4OiA5OTtcbn1cblxuLmVmZmVjdDggZmlnY2FwdGlvbiAuaW5mbyB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uZWZmZWN0OCBmaWdjYXB0aW9uIC5pbmZvIHAge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuIiwiLmRpdnByaW5jaXBhbCB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xufVxuXG4udGl0dWxvIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNWE1YTVhO1xufVxuXG4udGV4dG9zIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogIzVhNWE1YTtcbn1cblxuLnRleHRvczIge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6ICM1YTVhNWE7XG59XG5cbi5lZmZlY3Q4ICoge1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZWZmZWN0OCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgIzU1NTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTU0cHg7XG4gIG9wYWNpdHk6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcbiAgd2lkdGg6IDY1NXB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uZWZmZWN0OCBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlIDBzO1xufVxuXG4uZWZmZWN0ODo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgYm90dG9tOiAwO1xuICBjb250ZW50OiBcIlwiO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7XG59XG5cbi5lZmZlY3Q4OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZWZmZWN0ODpob3Zlcjo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuXG4uZWZmZWN0ODpob3ZlciBmaWdjYXB0aW9uIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSBzY2FsZSgxKTtcbn1cblxuLmVmZmVjdDggZmlnY2FwdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDE1JTtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTUwJSkgc2NhbGUoMS41KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZSAwcztcbiAgei1pbmRleDogOTk7XG59XG5cbi5lZmZlY3Q4IGZpZ2NhcHRpb24gLmluZm8ge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmVmZmVjdDggZmlnY2FwdGlvbiAuaW5mbyBwIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_push_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-push-notifications */
    "./node_modules/ngx-push-notifications/fesm2015/ngx-push-notifications.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(_pushNotificationService) {
        _classCallCheck(this, HomeComponent);

        this._pushNotificationService = _pushNotificationService;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._pushNotificationService.requestPermission();

          this.showNoti();
        }
      }, {
        key: "showNoti",
        value: function showNoti() {
          var title = 'Bem vindo à página Inicio!';
          var options = new ngx_push_notifications__WEBPACK_IMPORTED_MODULE_2__["PushNotificationOptions"]();
          options.body = 'Consulte as informações do nosso Projeto';

          this._pushNotificationService.create(title, options).subscribe(function (notif) {
            if (notif.event.type === 'show') {
              console.log('onshow');
              setTimeout(function () {
                notif.notification.close();
              }, 3000);
            }

            if (notif.event.type === 'click') {
              console.log('click');
              notif.notification.close();
            }

            if (notif.event.type === 'close') {
              console.log('close');
            }
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: ngx_push_notifications__WEBPACK_IMPORTED_MODULE_2__["PushNotificationService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".divprincipal {\n  margin-top: 60px;\n  margin-left: 70px;\n}\n\n.titulo {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 30px;\n  color: #5a5a5a;\n}\n\n.btnenviar {\n  background-color: white;\n  color: #5a5a5a;\n  border: 2px solid #ACE8C6;\n  width: 100px;\n  height: 50px;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  cursor: pointer;\n  outline: none;\n}\n\n.btnenviar:hover {\n  background-color: #ACE8C6;\n  color: #5a5a5a;\n  outline: none;\n}\n\n.btnenviar:disabled {\n  background-color: #ffdddd;\n  color: #5a5a5a;\n  border: 2px solid #e27231;\n  outline: none;\n}\n\n.btncancelar {\n  background-color: white;\n  color: #5a5a5a;\n  border: 2px solid #ACE8C6;\n  width: 100px;\n  height: 50px;\n  margin-left: 10px;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  cursor: pointer;\n}\n\n.btncancelar:hover {\n  background-color: #ACE8C6;\n  color: #5a5a5a;\n}\n\n.MargensCaixas {\n  width: 370px;\n  height: 25px;\n  border: 1px solid #ACE8C6;\n}\n\n.MargensCaixaMensagem {\n  border: 1px solid #ACE8C6;\n}\n\n.textos {\n  margin-bottom: 5px;\n  color: #5a5a5a;\n}\n\n.contactos {\n  width: 370px;\n  height: 100px;\n  border: 0px;\n  margin-top: -400px;\n  margin-left: 800px;\n}\n\ninput {\n  padding-left: 10px;\n  outline: none;\n}\n\ntextarea {\n  padding-left: 10px;\n  padding-top: 5px;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmVzYXpvdWdhZG8vRG9jdW1lbnRzL0dpdEh1Yi9lc3Rndi1kaS10ZG0tYWkzLXByb2plY3QtdGVtcGxhdGUvY2xpZW50L3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZwcmluY2lwYWwge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBtYXJnaW4tbGVmdDogNzBweDtcbn1cblxuLnRpdHVsbyB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XG59XG5cbi5idG5lbnZpYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBQ0U4QzY7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ0bmVudmlhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQ0U4QzY7XG4gIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idG5lbnZpYXI6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjEsIDIyMSk7XG4gIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMjYsIDExNCwgNDkpO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYnRuY2FuY2VsYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBQ0U4QzY7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG5jYW5jZWxhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQ0U4QzY7XG4gIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XG59XG5cbi5NYXJnZW5zQ2FpeGFzIHtcbiAgd2lkdGg6IDM3MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQ0U4QzY7XG59XG5cbi5NYXJnZW5zQ2FpeGFNZW5zYWdlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQ0U4QzY7XG59XG5cbi50ZXh0b3Mge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XG59XG5cbi5jb250YWN0b3Mge1xuICB3aWR0aDogMzcwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogMHB4O1xuICBtYXJnaW4tdG9wOiAtNDAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA4MDBweDtcbn1cblxuaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbnRleHRhcmVhIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuIiwiLmRpdnByaW5jaXBhbCB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xufVxuXG4udGl0dWxvIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM1YTVhNWE7XG59XG5cbi5idG5lbnZpYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICM1YTVhNWE7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBQ0U4QzY7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ0bmVudmlhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQ0U4QzY7XG4gIGNvbG9yOiAjNWE1YTVhO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYnRuZW52aWFyOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGRkZDtcbiAgY29sb3I6ICM1YTVhNWE7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMjcyMzE7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idG5jYW5jZWxhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzVhNWE1YTtcbiAgYm9yZGVyOiAycHggc29saWQgI0FDRThDNjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bmNhbmNlbGFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FDRThDNjtcbiAgY29sb3I6ICM1YTVhNWE7XG59XG5cbi5NYXJnZW5zQ2FpeGFzIHtcbiAgd2lkdGg6IDM3MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQ0U4QzY7XG59XG5cbi5NYXJnZW5zQ2FpeGFNZW5zYWdlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQ0U4QzY7XG59XG5cbi50ZXh0b3Mge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjNWE1YTVhO1xufVxuXG4uY29udGFjdG9zIHtcbiAgd2lkdGg6IDM3MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXI6IDBweDtcbiAgbWFyZ2luLXRvcDogLTQwMHB4O1xuICBtYXJnaW4tbGVmdDogODAwcHg7XG59XG5cbmlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG50ZXh0YXJlYSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_client_api_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api-client/api/account.service */
    "./src/app/api-client/api/account.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_push_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-push-notifications */
    "./node_modules/ngx-push-notifications/fesm2015/ngx-push-notifications.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      /**
       * Constructor
       * @param router Router
       * @param activatedRoute Activated route
       * @param formBuilder Form builder
       * @param userService User service
       * @param snackBar Snack bar
       */
      function LoginComponent(accountService, formBuilder, //Servisso a que vamos recorrer no servidor
      _pushNotificationService) {
        _classCallCheck(this, LoginComponent);

        this.accountService = accountService;
        this.formBuilder = formBuilder;
        this._pushNotificationService = _pushNotificationService;
        this.version = _angular_core__WEBPACK_IMPORTED_MODULE_1__["VERSION"].full;
        this.userForm = this.formBuilder.group({
          pass: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]],
          email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]],
          captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._pushNotificationService.requestPermission();

          this.showNoti();
        }
      }, {
        key: "showNoti",
        value: function showNoti() {
          var title = 'Bem vindo à página Login!';
          var options = new ngx_push_notifications__WEBPACK_IMPORTED_MODULE_4__["PushNotificationOptions"]();
          options.body = 'Faça Login na nossa página!';

          this._pushNotificationService.create(title, options).subscribe(function (notif) {
            if (notif.event.type === 'show') {
              console.log('onshow');
              setTimeout(function () {
                notif.notification.close();
              }, 3000);
            }

            if (notif.event.type === 'click') {
              console.log('click');
              notif.notification.close();
            }

            if (notif.event.type === 'close') {
              console.log('close');
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "doLogin",
        value: function doLogin() {
          var loginRequest = {
            email: "email",
            password: "password"
          };
          this.accountService.accountLoginPost(loginRequest);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _api_client_api_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: ngx_push_notifications__WEBPACK_IMPORTED_MODULE_4__["PushNotificationService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/material-layout/material-layout.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/material-layout/material-layout.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMaterialLayoutMaterialLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.main-content {\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmVzYXpvdWdhZG8vRG9jdW1lbnRzL0dpdEh1Yi9lc3Rndi1kaS10ZG0tYWkzLXByb2plY3QtdGVtcGxhdGUvY2xpZW50L3NyYy9hcHAvbWF0ZXJpYWwtbGF5b3V0L21hdGVyaWFsLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWF0ZXJpYWwtbGF5b3V0L21hdGVyaWFsLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWxheW91dC9tYXRlcmlhbC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuIiwiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/material-layout/material-layout.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/material-layout/material-layout.component.ts ***!
    \**************************************************************/

  /*! exports provided: MaterialLayoutComponent */

  /***/
  function srcAppMaterialLayoutMaterialLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialLayoutComponent", function () {
      return MaterialLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var MaterialLayoutComponent = function MaterialLayoutComponent(breakpointObserver) {
      _classCallCheck(this, MaterialLayoutComponent);

      this.breakpointObserver = breakpointObserver;
      this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
        return result.matches;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    };

    MaterialLayoutComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
      }];
    };

    MaterialLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-material-layout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./material-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/material-layout/material-layout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./material-layout.component.scss */
      "./src/app/material-layout/material-layout.component.scss")).default]
    })], MaterialLayoutComponent);
    /***/
  },

  /***/
  "./src/app/nav-bar/nav-bar.component.scss":
  /*!************************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavBarNavBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar {\n  background-color: #3C997E;\n  height: 100px;\n}\n\n.button {\n  background-color: #ACE8C6;\n  border: none;\n  color: white;\n  padding: 16px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  cursor: pointer;\n}\n\n.btnmenu {\n  background-color: #ACE8C6;\n  border: none;\n  border-radius: 5px;\n  color: #5a5a5a;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 18px;\n  height: 50px;\n  margin: 5px;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  cursor: pointer;\n  outline: none;\n}\n\n.btnmenu:hover {\n  background-color: white;\n  color: #5a5a5a;\n}\n\n.divpricipal {\n  margin-top: -60px;\n  margin-left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n}\n\n.imgLOGO {\n  height: 50%;\n  padding-top: 25px;\n  padding-left: 25px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmVzYXpvdWdhZG8vRG9jdW1lbnRzL0dpdEh1Yi9lc3Rndi1kaS10ZG0tYWkzLXByb2plY3QtdGVtcGxhdGUvY2xpZW50L3NyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7QUNDRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNDOTk3RTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQ0U4QzY7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA0cHggMnB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bm1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUNFOEM2O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogNXB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ0bm1lbnU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XG59XG5cblxuLmRpdnByaWNpcGFsIHtcbiAgbWFyZ2luLXRvcDogLTYwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xufVxuXG4uaW1nTE9HTyB7XG4gIGhlaWdodDogNTAlO1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4iLCIubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNDOTk3RTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQ0U4QzY7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA0cHggMnB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bm1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUNFOEM2O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICM1YTVhNWE7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idG5tZW51OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjNWE1YTVhO1xufVxuXG4uZGl2cHJpY2lwYWwge1xuICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG59XG5cbi5pbWdMT0dPIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/nav-bar/nav-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var ngx_push_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-push-notifications */
    "./node_modules/ngx-push-notifications/fesm2015/ngx-push-notifications.js");

    var NavBarComponent =
    /*#__PURE__*/
    function () {
      function NavBarComponent(auth, _pushNotificationService) {
        _classCallCheck(this, NavBarComponent);

        this.auth = auth;
        this._pushNotificationService = _pushNotificationService;
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._pushNotificationService.requestPermission();

          this.showNoti();
        }
      }, {
        key: "showNoti",
        value: function showNoti() {
          var title = 'Bem vindo! / Adeus!';
          var options = new ngx_push_notifications__WEBPACK_IMPORTED_MODULE_3__["PushNotificationOptions"]();
          options.body = 'Navegue pelo menu da nossa página!';

          this._pushNotificationService.create(title, options).subscribe(function (notif) {
            if (notif.event.type === 'show') {
              console.log('onshow');
              setTimeout(function () {
                notif.notification.close();
              }, 3000);
            }

            if (notif.event.type === 'click') {
              console.log('click');
              notif.notification.close();
            }

            if (notif.event.type === 'close') {
              console.log('close');
            }
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: ngx_push_notifications__WEBPACK_IMPORTED_MODULE_3__["PushNotificationService"]
      }];
    };

    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-bar.component.scss */
      "./src/app/nav-bar/nav-bar.component.scss")).default]
    })], NavBarComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.component.scss":
  /*!************************************************!*\
    !*** ./src/app/profile/profile.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".divprincipal {\n  margin-top: 60px;\n  margin-left: 70px;\n}\n\n.titulo {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 30px;\n  color: #5a5a5a;\n}\n\n.textos {\n  font-family: Arial, Helvetica, sans-serif;\n  margin-bottom: 5px;\n  color: #5a5a5a;\n}\n\n.textos2 {\n  font-family: Arial, Helvetica, sans-serif;\n  margin-bottom: -10px;\n  color: #5a5a5a;\n}\n\n.dados {\n  margin-top: -22px;\n  margin-left: 150px;\n  color: #292929;\n}\n\n.InfoPerfil {\n  margin-top: -100px;\n  margin-left: 120px;\n}\n\n.imgUtilizador {\n  border-radius: 50%;\n  height: 70px;\n}\n\n.imgPerfil {\n  margin-left: -180px;\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmVzYXpvdWdhZG8vRG9jdW1lbnRzL0dpdEh1Yi9lc3Rndi1kaS10ZG0tYWkzLXByb2plY3QtdGVtcGxhdGUvY2xpZW50L3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUVBLFlBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZwcmluY2lwYWwge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBtYXJnaW4tbGVmdDogNzBweDtcbn1cblxuLnRpdHVsbyB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XG59XG5cbi50ZXh0b3Mge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogcmdiKDkwLCA5MCwgOTApO1xufVxuXG4udGV4dG9zMiB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbn1cblxuLmRhZG9zIHtcbiAgbWFyZ2luLXRvcDogLTIycHg7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgY29sb3I6IHJnYig0MSwgNDEsIDQxKTtcbn1cblxuLkluZm9QZXJmaWwge1xuICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMjBweDtcbn1cblxuLmltZ1V0aWxpemFkb3Ige1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC8vYm9yZGVyOiAzcHggc29saWQgcmdiKDkwLCA5MCwgOTApO1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbi5pbWdQZXJmaWwge1xuICBtYXJnaW4tbGVmdDogLTE4MHB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuIiwiLmRpdnByaW5jaXBhbCB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xufVxuXG4udGl0dWxvIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM1YTVhNWE7XG59XG5cbi50ZXh0b3Mge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogIzVhNWE1YTtcbn1cblxuLnRleHRvczIge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gIGNvbG9yOiAjNWE1YTVhO1xufVxuXG4uZGFkb3Mge1xuICBtYXJnaW4tdG9wOiAtMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xuICBjb2xvcjogIzI5MjkyOTtcbn1cblxuLkluZm9QZXJmaWwge1xuICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMjBweDtcbn1cblxuLmltZ1V0aWxpemFkb3Ige1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNzBweDtcbn1cblxuLmltZ1BlcmZpbCB7XG4gIG1hcmdpbi1sZWZ0OiAtMTgwcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var ngx_push_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-push-notifications */
    "./node_modules/ngx-push-notifications/fesm2015/ngx-push-notifications.js");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(auth, _pushNotificationService) {
        _classCallCheck(this, ProfileComponent);

        this.auth = auth;
        this._pushNotificationService = _pushNotificationService;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._pushNotificationService.requestPermission();

          this.showNoti();
        }
      }, {
        key: "showNoti",
        value: function showNoti() {
          var title = 'Bem vindo à pagina Perfil!';
          var options = new ngx_push_notifications__WEBPACK_IMPORTED_MODULE_3__["PushNotificationOptions"]();
          options.body = 'Native Push Notification';

          this._pushNotificationService.create(title, options).subscribe(function (notif) {
            if (notif.event.type === 'show') {
              console.log('onshow');
              setTimeout(function () {
                notif.notification.close();
              }, 3000);
            }

            if (notif.event.type === 'click') {
              console.log('click');
              notif.notification.close();
            }

            if (notif.event.type === 'close') {
              console.log('close');
            }
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: ngx_push_notifications__WEBPACK_IMPORTED_MODULE_3__["PushNotificationService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/profile/profile.component.scss")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/registar/registar.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/registar/registar.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegistarRegistarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".divprincipal {\n  margin-top: 60px;\n  margin-left: 70px;\n}\n\n.titulo {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 30px;\n  color: #5a5a5a;\n}\n\n.titulomapa {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #5a5a5a;\n}\n\n.btnenviar {\n  background-color: white;\n  color: #5a5a5a;\n  border: 2px solid #ACE8C6;\n  width: 100px;\n  height: 50px;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  cursor: pointer;\n}\n\n.btnenviar:hover {\n  background-color: #ACE8C6;\n  color: #5a5a5a;\n}\n\n.btnenviar:disabled {\n  background-color: #ffdddd;\n  color: #5a5a5a;\n  border: 2px solid #e27231;\n  outline: none;\n}\n\n.btncancelar {\n  background-color: white;\n  color: #5a5a5a;\n  border: 2px solid #ACE8C6;\n  width: 100px;\n  height: 50px;\n  margin-left: 10px;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  cursor: pointer;\n}\n\n.btncancelar:hover {\n  background-color: #ACE8C6;\n  color: #5a5a5a;\n}\n\n.MargensCaixas {\n  width: 370px;\n  height: 25px;\n  border: 1px solid #ACE8C6;\n}\n\n.MargensCaixaMensagem {\n  border: 1px solid #ACE8C6;\n}\n\n.textos {\n  margin-bottom: 5px;\n  color: #5a5a5a;\n}\n\n.contactos {\n  width: 370px;\n  height: 100px;\n  border: 0px;\n  margin-top: -400px;\n  margin-left: 800px;\n}\n\ninput {\n  padding-left: 10px;\n  outline: none;\n}\n\ntextarea {\n  padding-left: 10px;\n  padding-top: 5px;\n  outline: none;\n}\n\n.direita {\n  position: absolute;\n  right: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmVzYXpvdWdhZG8vRG9jdW1lbnRzL0dpdEh1Yi9lc3Rndi1kaS10ZG0tYWkzLXByb2plY3QtdGVtcGxhdGUvY2xpZW50L3NyYy9hcHAvcmVnaXN0YXIvcmVnaXN0YXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGFyL3JlZ2lzdGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGFyL3JlZ2lzdGFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdnByaW5jaXBhbCB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xufVxuXG4udGl0dWxvIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbn1cblxuLnRpdHVsb21hcGEge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbn1cblxuLmJ0bmVudmlhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbiAgYm9yZGVyOiAycHggc29saWQgI0FDRThDNjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuZW52aWFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FDRThDNjtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbn1cblxuLmJ0bmVudmlhcjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyMSwgMjIxKTtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIyNiwgMTE0LCA0OSk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idG5jYW5jZWxhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbiAgYm9yZGVyOiAycHggc29saWQgI0FDRThDNjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bmNhbmNlbGFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FDRThDNjtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbn1cblxuLk1hcmdlbnNDYWl4YXMge1xuICB3aWR0aDogMzcwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0FDRThDNjtcbn1cblxuLk1hcmdlbnNDYWl4YU1lbnNhZ2VtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0FDRThDNjtcbn1cblxuLnRleHRvcyB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbn1cblxuLmNvbnRhY3RvcyB7XG4gIHdpZHRoOiAzNzBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAwcHg7XG4gIG1hcmdpbi10b3A6IC00MDBweDtcbiAgbWFyZ2luLWxlZnQ6IDgwMHB4O1xufVxuXG5pbnB1dCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxudGV4dGFyZWEge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5kaXJlaXRhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNzBweDtcbn1cbiIsIi5kaXZwcmluY2lwYWwge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBtYXJnaW4tbGVmdDogNzBweDtcbn1cblxuLnRpdHVsbyB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjNWE1YTVhO1xufVxuXG4udGl0dWxvbWFwYSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzVhNWE1YTtcbn1cblxuLmJ0bmVudmlhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzVhNWE1YTtcbiAgYm9yZGVyOiAycHggc29saWQgI0FDRThDNjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuZW52aWFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FDRThDNjtcbiAgY29sb3I6ICM1YTVhNWE7XG59XG5cbi5idG5lbnZpYXI6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZGRkO1xuICBjb2xvcjogIzVhNWE1YTtcbiAgYm9yZGVyOiAycHggc29saWQgI2UyNzIzMTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ0bmNhbmNlbGFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjNWE1YTVhO1xuICBib3JkZXI6IDJweCBzb2xpZCAjQUNFOEM2O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuY2FuY2VsYXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUNFOEM2O1xuICBjb2xvcjogIzVhNWE1YTtcbn1cblxuLk1hcmdlbnNDYWl4YXMge1xuICB3aWR0aDogMzcwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0FDRThDNjtcbn1cblxuLk1hcmdlbnNDYWl4YU1lbnNhZ2VtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0FDRThDNjtcbn1cblxuLnRleHRvcyB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6ICM1YTVhNWE7XG59XG5cbi5jb250YWN0b3Mge1xuICB3aWR0aDogMzcwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogMHB4O1xuICBtYXJnaW4tdG9wOiAtNDAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA4MDBweDtcbn1cblxuaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbnRleHRhcmVhIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZGlyZWl0YSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDcwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/registar/registar.component.ts":
  /*!************************************************!*\
    !*** ./src/app/registar/registar.component.ts ***!
    \************************************************/

  /*! exports provided: RegistarComponent */

  /***/
  function srcAppRegistarRegistarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistarComponent", function () {
      return RegistarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _api_client_api_communication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../api-client/api/communication.service */
    "./src/app/api-client/api/communication.service.ts");
    /* harmony import */


    var ngx_push_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-push-notifications */
    "./node_modules/ngx-push-notifications/fesm2015/ngx-push-notifications.js");

    var RegistarComponent =
    /*#__PURE__*/
    function () {
      function RegistarComponent(auth, httpClient, formBuilder, userService, comunicationservice, _pushNotificationService) {
        _classCallCheck(this, RegistarComponent);

        this.auth = auth;
        this.httpClient = httpClient;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.comunicationservice = comunicationservice;
        this._pushNotificationService = _pushNotificationService;
        this.registForm = this.formBuilder.group({
          nome: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50)]],
          apelido: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50)]],
          nomeUt: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50)]],
          email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50)]],
          pass: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50)]]
        });
      }

      _createClass(RegistarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._pushNotificationService.requestPermission();

          this.showNoti();
        }
      }, {
        key: "showNoti",
        value: function showNoti() {
          var title = 'Bem vindo à página de registo!';
          var options = new ngx_push_notifications__WEBPACK_IMPORTED_MODULE_7__["PushNotificationOptions"]();
          options.body = 'Registe-se na nossa plataforma';

          this._pushNotificationService.create(title, options).subscribe(function (notif) {
            if (notif.event.type === 'show') {
              console.log('onshow');
              setTimeout(function () {
                notif.notification.close();
              }, 3000);
            }

            if (notif.event.type === 'click') {
              console.log('click');
              notif.notification.close();
            }

            if (notif.event.type === 'close') {
              console.log('close');
            }
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return RegistarComponent;
    }();

    RegistarComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _api_client_api_communication_service__WEBPACK_IMPORTED_MODULE_6__["CommunicationService"]
      }, {
        type: ngx_push_notifications__WEBPACK_IMPORTED_MODULE_7__["PushNotificationService"]
      }];
    };

    RegistarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registar/registar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registar.component.scss */
      "./src/app/registar/registar.component.scss")).default]
    })], RegistarComponent);
    /***/
  },

  /***/
  "./src/app/services/api/user-api.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/api/user-api.service.ts ***!
    \**************************************************/

  /*! exports provided: UserApiService */

  /***/
  function srcAppServicesApiUserApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserApiService", function () {
      return UserApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! query-string */
    "./node_modules/query-string/index.js");
    /* harmony import */


    var query_string__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserApiService =
    /*#__PURE__*/
    function () {
      /**
       * Constructor
       * @param httpClient HTTP Client
       */
      function UserApiService(httpClient) {
        _classCallCheck(this, UserApiService);

        this.httpClient = httpClient;
      }
      /** @inheritdoc */


      _createClass(UserApiService, [{
        key: "getUserById",
        value: function getUserById(userId) {
          var getUserUrl = this.buildApiUrl({
            path: userId.toString()
          });
          return this.httpClient.get(getUserUrl);
        }
        /** @inheritdoc */

      }, {
        key: "listUsers",
        value: function listUsers(filter) {
          var listUsersUrl = this.buildApiUrl({
            queryParams: filter
          });
          return this.httpClient.get(listUsersUrl);
        }
        /** @inheritdoc */

      }, {
        key: "sendCustomEmail",
        value: function sendCustomEmail(data) {
          var createUserUrl = this.buildApiUrl({
            path: 'msgCustom'
          });
          return this.httpClient.post(createUserUrl, data);
        }
        /** @inheritdoc */

      }, {
        key: "sendSupportEmail",
        value: function sendSupportEmail(data) {
          var createUserUrl = this.buildApiUrl({
            path: 'suporte'
          });
          return this.httpClient.post(createUserUrl, data);
        }
        /** @inheritdoc */

      }, {
        key: "updateUserById",
        value: function updateUserById(userId, data) {
          var updateUserUrl = this.buildApiUrl({
            path: userId.toString()
          });
          return this.httpClient.put(updateUserUrl, data);
        }
        /** @inheritdoc */

      }, {
        key: "deleteUserById",
        value: function deleteUserById(userId) {
          var deleteUserUrl = this.buildApiUrl({
            path: userId.toString()
          });
          return this.httpClient.delete(deleteUserUrl);
        }
        /**
         * Build API resource URL
         * @param config URL configuration
         */

      }, {
        key: "buildApiUrl",
        value: function buildApiUrl(config) {
          var finalResourceUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl);

          if (config && config.path) {
            finalResourceUrl = "".concat(finalResourceUrl, "/").concat(config.path);
          }

          return config && config.queryParams ? "".concat(finalResourceUrl, "?").concat(query_string__WEBPACK_IMPORTED_MODULE_1__["stringify"](config.queryParams)) : finalResourceUrl;
        }
      }, {
        key: "createUser",
        value: function createUser(data) {
          var createUser = this.buildApiUrl({
            path: data.email.toString()
          }); //

          return this.httpClient.put(createUser, data);
        }
      }]);

      return UserApiService;
    }();

    UserApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    UserApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    })], UserApiService);
    /***/
  },

  /***/
  "./src/app/services/fake/user-fake.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/fake/user-fake.service.ts ***!
    \****************************************************/

  /*! exports provided: UserFakeService */

  /***/
  function srcAppServicesFakeUserFakeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFakeService", function () {
      return UserFakeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var random_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! random-int */
    "./node_modules/random-int/index.js");
    /* harmony import */


    var random_int__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(random_int__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DATA = [{
      name: 'Sean Maxwell',
      email: 'sean.maxwell@gmail.com',
      id: 159123164363
    }, {
      name: 'Gordan Freeman',
      email: 'gordan.freeman@halflife.com',
      id: 906524522143
    }, {
      name: 'John Smith',
      email: 'jsmith@yahoo.com',
      id: 357437875835
    }];

    function containsText(text, searchText) {
      return text.indexOf(searchText) !== -1;
    }

    function containsTextInName(user, searchText) {
      return containsText(user.name, searchText);
    }

    function containsTextInEmail(user, searchText) {
      return containsText(user.email, searchText);
    }

    var UserFakeService =
    /*#__PURE__*/
    function () {
      function UserFakeService() {
        _classCallCheck(this, UserFakeService);
      }

      _createClass(UserFakeService, [{
        key: "getUserById",

        /** @inheritdoc */
        value: function getUserById(userId) {
          var user = DATA.find(function (existingUser) {
            return existingUser.id === userId;
          });
          return user ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
            message: "User not found. id=".concat(userId)
          });
        }
        /** @inheritdoc */

      }, {
        key: "listUsers",
        value: function listUsers(filter) {
          var results = DATA;

          if (filter) {
            if (filter.searchText) {
              results = results.filter(function (user) {
                return containsTextInName(user, filter.searchText) || containsTextInEmail(user, filter.searchText);
              });
            } else {
              if (filter.nameContains) {
                results = results.filter(function (user) {
                  return containsTextInName(user, filter.searchText);
                });
              }

              if (filter.emailContains) {
                results = results.filter(function (user) {
                  return containsTextInEmail(user, filter.searchText);
                });
              }
            }
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(results);
        }
        /** @inheritdoc */

      }, {
        key: "createUser",
        value: function createUser(data) {
          var newUser = {
            id: random_int__WEBPACK_IMPORTED_MODULE_1___default()(1, 9999999999),
            name: data.name,
            email: data.email
          };
          DATA.push(newUser);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(newUser);
        }
        /** @inheritdoc */

      }, {
        key: "updateUserById",
        value: function updateUserById(userId, data) {
          var user = DATA.find(function (existingUser) {
            return existingUser.id === userId;
          });

          if (!user) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
              message: "User not found. id=".concat(userId)
            });
          }

          if (data.name) {
            user.name = data.name;
          }

          if (data.email) {
            user.email = data.email;
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
        }
        /** @inheritdoc */

      }, {
        key: "deleteUserById",
        value: function deleteUserById(userId) {
          var numExistingUsers = DATA.length;
          DATA = DATA.filter(function (user) {
            return user.id !== userId;
          });
          return DATA.length === numExistingUsers ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
            message: "User not found. id=".concat(userId)
          }) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
      }]);

      return UserFakeService;
    }();

    UserFakeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], UserFakeService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService, buildUserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "buildUserService", function () {
      return buildUserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _api_user_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./api/user-api.service */
    "./src/app/services/api/user-api.service.ts");
    /* harmony import */


    var _fake_user_fake_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fake/user-fake.service */
    "./src/app/services/fake/user-fake.service.ts");

    var UserService = function UserService() {
      _classCallCheck(this, UserService);
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root',
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]],
      useFactory: buildUserService
    })], UserService);
    /**
     * Build user service
     * @param httpClient HTTP client
     */

    function buildUserService(httpClient) {
      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        return new _api_user_api_service__WEBPACK_IMPORTED_MODULE_4__["UserApiService"](httpClient);
      }

      return new _fake_user_fake_service__WEBPACK_IMPORTED_MODULE_5__["UserFakeService"]();
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      name: 'development',
      production: true,
      apiBaseUrl: 'http://localhost:3000/api'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/inesazougado/Documents/GitHub/estgv-di-tdm-ai3-project-template/client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map