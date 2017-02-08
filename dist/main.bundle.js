webpackJsonp([2,4],{

/***/ 525:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 525;


/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(714);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Guillermo/Documents/DevProjects/ng2-SiteRequests/src/main.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export Step */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Step = (function () {
    function Step() {
    }
    return Step;
}());
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Site Requests App';
        //Initialization
        this.disabled = true;
        this.stepState = 'none';
    }
    AppComponent.prototype.change = function (event) {
        return;
    };
    AppComponent.prototype.activeEvent = function () {
        return;
    };
    AppComponent.prototype.deactiveEvent = function () {
        return;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(937),
            styles: [__webpack_require__(936)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Guillermo/Documents/DevProjects/ng2-SiteRequests/src/app.component.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__(871);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__covalent_core__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(713);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__covalent_core__["a" /* CovalentCoreModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Guillermo/Documents/DevProjects/ng2-SiteRequests/src/app.module.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Guillermo/Documents/DevProjects/ng2-SiteRequests/src/environment.js.map

/***/ }),

/***/ 936:
/***/ (function(module, exports) {

module.exports = "/* This adds spacing between the material design buttons */\r\nbutton {\r\n    margin: 5px;\r\n}\r\n\r\n/* Pros/Cons styles inside card content */\r\n.md-card-content-prosconsSection h3 {\r\n    margin: 0px 0px 12px 0px;\r\n    font-weight: 100;\r\n}\r\n\r\n.md-card-content-prosconsSection:first-child {\r\n    margin-right: 30px;\r\n}\r\n\r\n.md-card-content-prosconsSection ul {\r\n    list-style-type: none;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.md-card-content-prosconsSection h3::after {\r\n    background-color: #a4cf0c;\r\n    border-radius: 3px;\r\n    content: '';\r\n    display: block;\r\n    height: 8px;\r\n}\r\n\r\n.md-card-content-prosconsSection--cons h3::after {\r\n    background-color: #e74856;\r\n}"

/***/ }),

/***/ 937:
/***/ (function(module, exports) {

module.exports = "<div class=\"md-app-background\">\n  <md-toolbar color=\"primary\">\n    <span>{{title}}</span>\n  </md-toolbar>\n\n  <td-steps (stepChange)=\"change($event)\" mode=\"horizontal\">\n    <td-step #step1 label=\"Start Site Request\" \n            [state]=\"none\"\n            [active]=\"true\" \n            [disabled]=\"false\">\n      <p>Does your site need to be opened to all of Visa?</p>\n      <md-checkbox>\n        Yes, open to all of Visa Inc\n      </md-checkbox>\n      <template td-step-actions>\n        <button md-raised-button color=\"primary\" (click)=\"step1.state='complete'; step1.disabled=true; step2.disabled=false; step2.open();\">Next Step</button>\n      </template>\n    </td-step>\n    \n    <td-step #step2 label=\"Select Site Type\" \n            [state]=\"none\" \n            [disabled]=\"disabled\">\n      <div id=\"openAllNo\" layout=\"row\">\n        <!-- O365 Group Site Card -->\n        <md-card>\n          <md-card-title>O365 Group Site</md-card-title>\n          <md-card-subtitle>A security/distribution group that can be used to manage access to sites and services across Office 365 and the Visa network.</md-card-subtitle>\n          <md-divider></md-divider>\n          <md-card-content>\n            <div layout=\"row\">\n              <div class=\"md-card-content-prosconsSection\">\n                <h3>Pros</h3>\n                <ul>\n                  <li>Simple document library (SP)</li>\n                  <li>Mobile Access</li>\n                  <li>Shared Mailbox (Exchange)</li>\n                  <li>Shared Calendar (Exchange)</li>\n                  <li>Distribution List (Exchange)</li>\n                  <li>Task Board (Planner)</li>\n                </ul>\n              </div>\n              <div class=\"md-card-content-prosconsSection md-card-content-prosconsSection--cons\">\n                <h3>Cons</h3>\n                <ul>\n                  <li>No lists</li>\n                  <li>No forms</li>\n                  <li>No pages</li>\n                  <li>Basic UI</li>\n                  <li>No customization</li>\n                  <li>No apps</li>\n                  <li>Small audiences</li>\n                </ul>\n              </div>\n            </div>\n          </md-card-content>\n          <md-divider></md-divider>\n          <md-card-actions>\n            <button md-mini-fab color=\"accent\">\n              <md-icon>check circle</md-icon>\n            </button>\n          </md-card-actions>\n        </md-card>\n        <!-- SP Online Site Card -->\n        <md-card>\n          <md-card-title>SP Online Site</md-card-title>\n          <md-card-subtitle>A cloud version of the SharePoint team sites you've used previously on the Visa network.</md-card-subtitle>\n          <md-divider></md-divider>\n          <md-card-content>\n            <div layout=\"row\">\n              <div class=\"md-card-content-prosconsSection\">\n                <h3>Pros</h3>\n                <ul>\n                  <li>Core SharePoint feature set</li>\n                  <li>Full O365 services</li>\n                  <li>Mobile Access</li>\n                  <li>Some customizations possible</li>\n                  <li>Pages</li>\n                  <li>Lists</li>\n                  <li>Forms</li>\n                  <li>Apps</li>\n                </ul>\n              </div>\n              <div class=\"md-card-content-prosconsSection md-card-content-prosconsSection--cons\">\n                <h3>Cons</h3>\n                <ul>\n                  <li>More complex and advanced</li>\n                  <li>No integration with resources on the Visa network</li>\n                  <li>No Nintex</li>\n                  <li>No InfoPath</li>\n                </ul>\n              </div>\n            </div>\n          </md-card-content>\n          <md-divider></md-divider>\n          <md-card-actions>\n            <button md-mini-fab color=\"accent\">\n              <md-icon>check circle</md-icon>\n            </button>\n          </md-card-actions>\n        </md-card>\n        <!-- SP On-Prem Site Card -->\n        <md-card>\n          <md-card-title>SP On-Premises Site</md-card-title>\n          <md-card-subtitle>SP Publishing site hosted on our internal shared server farm to allow for more advanced customizations.</md-card-subtitle>\n          <md-divider></md-divider>\n          <md-card-content>\n            <div layout=\"row\">\n              <div class=\"md-card-content-prosconsSection\">\n                <h3>Pros</h3>\n                <ul>\n                  <li>Full SharePoint feature set</li>\n                  <li>Included in Insite Search</li>\n                  <li>Tighter network security</li>\n                  <li>Pages</li>\n                  <li>Lists</li>\n                  <li>Forms</li>\n                  <li>Apps</li>\n                  <li>Nintex</li>\n                  <li>InfoPath</li>\n                </ul>\n              </div>\n              <div class=\"md-card-content-prosconsSection md-card-content-prosconsSection--cons\">\n                <h3>Cons</h3>\n                <ul>\n                  <li>No O365 services</li>\n                  <li>No mobile access</li>\n                </ul>\n              </div>\n            </div>\n          </md-card-content>\n          <md-divider></md-divider>\n          <md-card-actions>\n            <button md-mini-fab color=\"accent\">\n              <md-icon>check circle</md-icon>\n            </button>\n          </md-card-actions>\n        </md-card>\n      </div>\n      <div id=\"openAllYes\" layout=\"row\">\n        <!-- AEM Site Card -->\n        <md-card>\n          <md-card-title>AEM Site</md-card-title>\n          <md-card-subtitle>The Visa Corporate intranet is intended to be the source of authoritative information.</md-card-subtitle>\n          <md-divider></md-divider>\n          <md-card-content>\n            <div layout=\"row\">\n              <div class=\"md-card-content-prosconsSection\">\n                <h3>Pros</h3>\n                <ul>\n                  <li>Polished look and feel</li>\n                  <li>Included in Insite search</li>\n                  <li>Content authors to help publish content</li>\n                  <li>An Editor will curate your information</li>\n                </ul>\n              </div>\n              <div class=\"md-card-content-prosconsSection md-card-content-prosconsSection--cons\">\n                <h3>Cons</h3>\n                <ul>\n                  <li>Limited customization</li>\n                  <li>No forms</li>\n                  <li>No automation</li>\n                  <li>An Editor will curate your information</li>\n                  <li>Limited mobile options</li>\n                </ul>\n              </div>\n            </div>\n          </md-card-content>\n          <md-divider></md-divider>\n          <md-card-actions>\n            <button md-mini-fab color=\"accent\">\n              <md-icon>check circle</md-icon>\n            </button>\n          </md-card-actions>\n        </md-card>\n        <!-- SP Online Site Card -->\n        <md-card>\n          <md-card-title>SP Online Site</md-card-title>\n          <md-card-subtitle>A cloud version of the SharePoint team sites you've used previously on the Visa network.</md-card-subtitle>\n          <md-divider></md-divider>\n          <md-card-content>\n            <div layout=\"row\">\n              <div class=\"md-card-content-prosconsSection\">\n                <h3>Pros</h3>\n                <ul>\n                  <li>Core SharePoint feature set</li>\n                  <li>Full O365 services</li>\n                  <li>Mobile Access</li>\n                  <li>Some customizations possible</li>\n                  <li>Pages</li>\n                  <li>Lists</li>\n                  <li>Forms</li>\n                  <li>Apps</li>\n                </ul>\n              </div>\n              <div class=\"md-card-content-prosconsSection md-card-content-prosconsSection--cons\">\n                <h3>Cons</h3>\n                <ul>\n                  <li>More complex and advanced</li>\n                  <li>No integration with resources on the Visa network</li>\n                  <li>No Nintex</li>\n                  <li>No InfoPath</li>\n                  <li>Limited look and feel options</li>\n                  <li>Not included in Insite search</li>\n                </ul>\n              </div>\n            </div>\n          </md-card-content>\n          <md-divider></md-divider>\n          <md-card-actions>\n            <button md-mini-fab color=\"accent\">\n              <md-icon>check circle</md-icon>\n            </button>\n          </md-card-actions>\n        </md-card>\n        <!-- SP On-Prem Site Card -->\n        <md-card>\n          <md-card-title>SP On-Premises Site</md-card-title>\n          <md-card-subtitle>SP site hosted on our internal shared server farm to allow for more advanced customizations.</md-card-subtitle>\n          <md-divider></md-divider>\n          <md-card-content>\n            <div layout=\"row\">\n              <div class=\"md-card-content-prosconsSection\">\n                <h3>Pros</h3>\n                <ul>\n                  <li>Full SharePoint feature set</li>\n                  <li>Included in Insite Search</li>\n                  <li>Tighter network security</li>\n                  <li>Nintex</li>\n                  <li>InfoPath</li>\n                </ul>\n              </div>\n              <div class=\"md-card-content-prosconsSection md-card-content-prosconsSection--cons\">\n                <h3>Cons</h3>\n                <ul>\n                  <li>No O365 services</li>\n                  <li>No mobile access</li>\n                </ul>\n              </div>\n            </div>\n          </md-card-content>\n          <md-divider></md-divider>\n          <md-card-actions>\n            <button md-mini-fab color=\"accent\">\n              <md-icon>check circle</md-icon>\n            </button>\n          </md-card-actions>\n        </md-card>\n      </div>\n      <template td-step-actions>\n        <button md-raised-button (click)=\"step1.state='none'; step1.disabled=false; step1.open(); step2.disabled=true;\">Previous Step</button>\n        <button md-raised-button color=\"primary\" (click)=\"step2.state='complete'; step2.disabled=true; step3.disabled=false; step3.open();\">Next Step</button>\n      </template>\n    </td-step>\n\n    <td-step #step3 label=\"Site Name and Owners\" \n            [state]=\"none\" \n            [disabled]=\"disabled\">\n      <!-- Inputs -->\n      <form>\n        <div layout=\"row\" layout-margin>\n          <md-input-container flex>\n            <input md-input type=\"text\" placeholder=\"Proposed Site Name\" required>\n          </md-input-container>\n        </div>\n        <div layout=\"row\" layout-margin>\n          <md-input-container flex>\n            <input md-input type=\"text\" placeholder=\"Enter Name of Primary Site Owner\" required>\n          </md-input-container>\n        </div>\n        <div layout=\"row\" layout-margin>\n          <md-input-container flex>\n            <input md-input type=\"text\" placeholder=\"Enter Name of Secondary Site Owner\"required>\n          </md-input-container>\n        </div>\n      </form>\n      <template td-step-actions>\n        <button md-raised-button (click)=\"step2.state='none'; step2.disabled=false; step2.open(); step3.disabled=true;\">Previous Step</button>\n        <button md-raised-button color=\"primary\" (click)=\"step3.state='complete'; step3.disabled=true; step4.disabled=false; step4.open();\">Next Step</button>\n      </template>\n    </td-step>\n\n    <td-step #step4 label=\"Review Site Request\" \n            [state]=\"none\" \n            [disabled]=\"disabled\">\n      Review the options selected. Decide whether to create site or not...\n      <template td-step-actions>\n        <button md-raised-button (click)=\"step3.state='none'; step3.disabled=false; step3.open(); step4.disabled=true;\">Previous Step</button>\n        <button md-raised-button color=\"primary\" (click)=\"step4.state='complete'; step4.disabled=true; step5.disabled=false; step5.open();\">Next Step</button>\n      </template>\n    </td-step>\n\n    <td-step #step5 label=\"Request Complete\" \n            [state]=\"none\" \n            [disabled]=\"disabled\">\n      Is this step necessary? Should we just mark step as 'complete' then show Summary of process? Todo...\n      <template td-step-summary>\n        You have completed submitting a request for a SharePoint site. You will receive an email in a few moments with a link to your new site. Thank you!\n      </template>\n      <template td-step-actions>\n        <button md-raised-button (click)=\"step4.state='none'; step4.disabled=false; step4.open(); step5.disabled=true;\">Previous Step</button>\n        <button md-raised-button color=\"primary\" (click)=\"step5.state='complete'; step5.disabled=true;\">Create Site</button>\n      </template>\n    </td-step>\n  </td-steps>\n</div>\n"

/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(526);


/***/ })

},[978]);
//# sourceMappingURL=main.bundle.map