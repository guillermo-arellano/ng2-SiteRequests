webpackJsonp([2,4],{

/***/ 526:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 526;


/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(657);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(435);
/* unused harmony export SiteCard */
/* unused harmony export SiteRequest */
/* unused harmony export SiteInfo */
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


var SiteType;
(function (SiteType) {
    SiteType[SiteType["closed_O365_Group_Site"] = 0] = "closed_O365_Group_Site";
    SiteType[SiteType["closed_SP_Online_Site"] = 1] = "closed_SP_Online_Site";
    SiteType[SiteType["closed_SP_OnPrem_Site"] = 2] = "closed_SP_OnPrem_Site";
    SiteType[SiteType["opened_AEM_Site"] = 3] = "opened_AEM_Site";
    SiteType[SiteType["opened_SP_Online_Site"] = 4] = "opened_SP_Online_Site";
    SiteType[SiteType["opened_SP_OnPrem_Site"] = 5] = "opened_SP_OnPrem_Site";
    SiteType[SiteType["dummy_site"] = 6] = "dummy_site";
})(SiteType || (SiteType = {}));
var SiteCard = (function () {
    function SiteCard() {
    }
    return SiteCard;
}());
var SiteRequest = (function () {
    function SiteRequest() {
    }
    return SiteRequest;
}());
var SiteInfo = (function () {
    function SiteInfo() {
    }
    return SiteInfo;
}());
var AppComponent = (function () {
    function AppComponent(media) {
        this.media = media;
        this.title = 'Site Requests App';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setFormVariables();
        this.setSiteCardFormVars();
    };
    AppComponent.prototype.setSiteCardFormVars = function () {
        this.sitecards = [
            { siteType: SiteType.closed_O365_Group_Site, siteTypeText: "O365 Group Site", selectedClass: false },
            { siteType: SiteType.closed_SP_Online_Site, siteTypeText: "SP Online Site", selectedClass: false },
            { siteType: SiteType.closed_SP_OnPrem_Site, siteTypeText: "SP OnPrem Site", selectedClass: false },
            { siteType: SiteType.opened_AEM_Site, siteTypeText: "AEM Site", selectedClass: false },
            { siteType: SiteType.opened_SP_Online_Site, siteTypeText: "SP Online Site", selectedClass: false },
            { siteType: SiteType.opened_SP_OnPrem_Site, siteTypeText: "SP OnPrem Site", selectedClass: false }
        ];
    };
    AppComponent.prototype.setFormVariables = function () {
        this.checked = false;
        this.siteCardSelected = {
            siteType: SiteType.dummy_site,
            siteTypeText: '',
            selectedClass: false
        };
        this.siteRequestObj = {
            open_site: false,
            siteType: '',
            siteName: '',
            siteUrl: '',
            ownerPrimary: '',
            ownerSecondary: ''
        };
        this.siteFormModel = {
            siteName: '',
            siteOwnerPrimary: '',
            siteOwnerSecondary: ''
        };
    };
    AppComponent.prototype.toggleCardSelected = function (type) {
        this.resetSiteCardFormVars();
        var siteTypeEnumValue = SiteType[type];
        this.sitecards[siteTypeEnumValue].selectedClass = true;
        this.siteCardSelected = this.sitecards.filter(function (item) { return item.selectedClass === true; })[0];
    };
    AppComponent.prototype.resetSiteCardFormVars = function () {
        this.setSiteCardFormVars();
    };
    AppComponent.prototype.resetEntireSiteRequestForm = function () {
        this.setSiteCardFormVars();
        this.setFormVariables();
    };
    AppComponent.prototype.createSiteRequestObj = function () {
        this.siteRequestObj.open_site = this.checked;
        this.siteRequestObj.siteType = this.siteCardSelected.siteTypeText;
        this.siteRequestObj.siteName = this.siteFormModel.siteName;
        this.siteRequestObj.siteUrl = '';
        this.siteRequestObj.ownerPrimary = this.siteFormModel.siteOwnerPrimary;
        this.siteRequestObj.ownerSecondary = this.siteFormModel.siteOwnerSecondary;
    };
    AppComponent.prototype.change = function (event) {
        //console.log(event);
    };
    ;
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(937),
            styles: [__webpack_require__(936)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["b" /* TdMediaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["b" /* TdMediaService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__covalent_core__ = __webpack_require__(435);
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

module.exports = "/* This adds spacing between the material design buttons */\r\nbutton {\r\n    margin: 5px;\r\n}\r\n\r\n/* Material Card custom stylings */\r\n.card-selected {\r\n    background-color: #ffd57f;\r\n}\r\n\r\n/* Pros/Cons styles inside card content */\r\n.md-card-content-prosconsSections {\r\n    height: 200px;\r\n}\r\n\r\n.md-card-content-prosconsSection h3 {\r\n    margin: 0px 0px 12px 0px;\r\n    font-weight: 100;\r\n}\r\n\r\n.md-card-content-prosconsSection:first-child {\r\n    margin-right: 30px;\r\n}\r\n\r\n.md-card-content-prosconsSection ul {\r\n    list-style-type: none;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.md-card-content-prosconsSection h3::after {\r\n    background-color: #a4cf0c;\r\n    border-radius: 3px;\r\n    content: '';\r\n    display: block;\r\n    height: 8px;\r\n}\r\n\r\n.md-card-content-prosconsSection--cons h3::after {\r\n    background-color: #e74856;\r\n}"

/***/ }),

/***/ 937:
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <md-toolbar color=\"primary\">\r\n    <span>{{title}}</span>\r\n  </md-toolbar>\r\n\r\n  <td-steps (stepChange)=\"change($event)\" [mode]=\"(media.registerQuery('gt-sm') | async) ? 'horizontal' : 'vertical'\">\r\n    <td-step #step1 label=\"Start Site Request\" \r\n            [state]=\"none\"\r\n            [active]=\"true\" \r\n            [disabled]=\"false\">\r\n      <p>Does your site need to be opened to all of Visa?</p>\r\n      <md-checkbox [(ngModel)]=\"checked\">\r\n        Yes, open to all of Visa Inc\r\n      </md-checkbox>\r\n      <template td-step-actions>\r\n        <button md-raised-button color=\"primary\" (click)=\"step1.state='complete'; step1.disabled=true; step2.disabled=false; step2.open();\">Next Step</button>\r\n      </template>\r\n    </td-step>\r\n    \r\n    <td-step #step2 label=\"Select Site Type\" \r\n            [state]=\"none\" \r\n            [disabled]=\"disabled\">\r\n      \r\n        <div *ngIf=\"!checked\" id=\"openAllNo\" layout=\"column\" layout-gt-sm=\"row\">\r\n          <div id='what1' flex>\r\n            <!-- O365 Group Site Card -->\r\n            <md-card [ngClass]=\"{'card-selected': sitecards[0].selectedClass}\">\r\n              <md-card-title>O365 Group Site</md-card-title>\r\n              <md-card-subtitle>A security/distribution group that can be used to manage access to sites and services across Office 365 and the Visa network.</md-card-subtitle>\r\n              <md-divider></md-divider>\r\n              <md-card-content class=\"md-card-content-prosconsSections\">\r\n                <div layout=\"row\" layout-align=\"center\">\r\n                  <div class=\"md-card-content-prosconsSection\">\r\n                    <h3>Pros</h3>\r\n                    <ul>\r\n                      <li>Simple document library (SP)</li>\r\n                      <li>Mobile Access</li>\r\n                      <li>Shared Mailbox (Exchange)</li>\r\n                      <li>Shared Calendar (Exchange)</li>\r\n                      <li>Distribution List (Exchange)</li>\r\n                      <li>Task Board (Planner)</li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"md-card-content-prosconsSection md-card-content-prosconsSection--cons\">\r\n                    <h3>Cons</h3>\r\n                    <ul>\r\n                      <li>No lists</li>\r\n                      <li>No forms</li>\r\n                      <li>No pages</li>\r\n                      <li>Basic UI</li>\r\n                      <li>No customization</li>\r\n                      <li>No apps</li>\r\n                      <li>Small audiences</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </md-card-content>\r\n              <md-divider></md-divider>\r\n              <md-card-actions>\r\n                <button md-mini-fab color=\"accent\" (click)=\"toggleCardSelected('closed_O365_Group_Site')\" ngDefaultControl>\r\n                  <md-icon>check circle</md-icon>\r\n                </button>\r\n              </md-card-actions>\r\n            </md-card>\r\n          </div>\r\n            <!-- SP Online Site Card -->\r\n          <div id='what2' flex>\r\n            <md-card [ngClass]=\"{'card-selected': sitecards[1].selectedClass}\">\r\n              <md-card-title>SP Online Site</md-card-title>\r\n              <md-card-subtitle>A cloud version of the SharePoint team sites you've used previously on the Visa network.</md-card-subtitle>\r\n              <md-divider></md-divider>\r\n              <md-card-content class=\"md-card-content-prosconsSections\">\r\n                <div layout=\"row\" layout-align=\"center\">\r\n                  <div class=\"md-card-content-prosconsSection\">\r\n                    <h3>Pros</h3>\r\n                    <ul>\r\n                      <li>Core SharePoint feature set</li>\r\n                      <li>Full O365 services</li>\r\n                      <li>Mobile Access</li>\r\n                      <li>Some customizations possible</li>\r\n                      <li>Pages</li>\r\n                      <li>Lists</li>\r\n                      <li>Forms</li>\r\n                      <li>Apps</li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"md-card-content-prosconsSection md-card-content-prosconsSection--cons\">\r\n                    <h3>Cons</h3>\r\n                    <ul>\r\n                      <li>More complex and advanced</li>\r\n                      <li>No integration with<br/> Visa network resources</li>\r\n                      <li>No Nintex</li>\r\n                      <li>No InfoPath</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </md-card-content>\r\n              <md-divider></md-divider>\r\n              <md-card-actions>\r\n                <button md-mini-fab color=\"accent\" (click)=\"toggleCardSelected('closed_SP_Online_Site')\" ngDefaultControl>\r\n                  <md-icon>check circle</md-icon>\r\n                </button>\r\n              </md-card-actions>\r\n            </md-card>\r\n          </div>\r\n          <div id='what3' flex>\r\n            <!-- SP On-Prem Site Card -->\r\n            <md-card [ngClass]=\"{'card-selected': sitecards[2].selectedClass}\">\r\n              <md-card-title>SP On-Premises Site</md-card-title>\r\n              <md-card-subtitle>SP Publishing site hosted on our internal shared server farm to allow for more advanced customizations.</md-card-subtitle>\r\n              <md-divider></md-divider>\r\n              <md-card-content class=\"md-card-content-prosconsSections\">\r\n                <div layout=\"row\" layout-align=\"center\">\r\n                  <div class=\"md-card-content-prosconsSection\">\r\n                    <h3>Pros</h3>\r\n                    <ul>\r\n                      <li>Full SharePoint feature set</li>\r\n                      <li>Included in Insite Search</li>\r\n                      <li>Tighter network security</li>\r\n                      <li>Pages</li>\r\n                      <li>Lists</li>\r\n                      <li>Forms</li>\r\n                      <li>Apps</li>\r\n                      <li>Nintex</li>\r\n                      <li>InfoPath</li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"md-card-content-prosconsSection md-card-content-prosconsSection--cons\">\r\n                    <h3>Cons</h3>\r\n                    <ul>\r\n                      <li>No O365 services</li>\r\n                      <li>No mobile access</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </md-card-content>\r\n              <md-divider></md-divider>\r\n              <md-card-actions>\r\n                <button md-mini-fab color=\"accent\" (click)=\"toggleCardSelected('closed_SP_OnPrem_Site')\" ngDefaultControl>\r\n                  <md-icon>check circle</md-icon>\r\n                </button>\r\n              </md-card-actions>\r\n            </md-card>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"checked\" id=\"openAllYes\" layout=\"column\" layout-gt-sm=\"row\">\r\n          <!-- AEM Site Card -->\r\n          <div flex>\r\n            <md-card [ngClass]=\"{'card-selected': sitecards[3].selectedClass}\">\r\n              <md-card-title>AEM Site</md-card-title>\r\n              <md-card-subtitle>The Visa Corporate intranet is intended to be the source of authoritative information.</md-card-subtitle>\r\n              <md-divider></md-divider>\r\n              <md-card-content class=\"md-card-content-prosconsSections\">\r\n                <div layout=\"row\" layout-align=\"center\">\r\n                  <div class=\"md-card-content-prosconsSection\">\r\n                    <h3>Pros</h3>\r\n                    <ul>\r\n                      <li>Polished look and feel</li>\r\n                      <li>Included in Insite search</li>\r\n                      <li>Content authors to help publish content</li>\r\n                      <li>An Editor will curate your information</li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"md-card-content-prosconsSection md-card-content-prosconsSection--cons\">\r\n                    <h3>Cons</h3>\r\n                    <ul>\r\n                      <li>Limited customization</li>\r\n                      <li>No forms</li>\r\n                      <li>No automation</li>\r\n                      <li>An Editor will curate your information</li>\r\n                      <li>Limited mobile options</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </md-card-content>\r\n              <md-divider></md-divider>\r\n              <md-card-actions>\r\n                <button md-mini-fab color=\"accent\" (click)=\"toggleCardSelected('opened_AEM_Site')\" ngDefaultControl>\r\n                  <md-icon>check circle</md-icon>\r\n                </button>\r\n              </md-card-actions>\r\n            </md-card>\r\n          </div>\r\n          <!-- SP Online Site Card -->\r\n          <div flex>\r\n            <md-card [ngClass]=\"{'card-selected': sitecards[4].selectedClass}\">\r\n              <md-card-title>SP Online Site</md-card-title>\r\n              <md-card-subtitle>A cloud version of the SharePoint team sites you've used previously on the Visa network.</md-card-subtitle>\r\n              <md-divider></md-divider>\r\n              <md-card-content class=\"md-card-content-prosconsSections\">\r\n                <div layout=\"row\" layout-align=\"center\">\r\n                  <div class=\"md-card-content-prosconsSection\">\r\n                    <h3>Pros</h3>\r\n                    <ul>\r\n                      <li>Core SharePoint feature set</li>\r\n                      <li>Full O365 services</li>\r\n                      <li>Mobile Access</li>\r\n                      <li>Some customizations possible</li>\r\n                      <li>Pages</li>\r\n                      <li>Lists</li>\r\n                      <li>Forms</li>\r\n                      <li>Apps</li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"md-card-content-prosconsSection md-card-content-prosconsSection--cons\">\r\n                    <h3>Cons</h3>\r\n                    <ul>\r\n                      <li>More complex and advanced</li>\r\n                      <li>No integration with resources on the Visa network</li>\r\n                      <li>No Nintex</li>\r\n                      <li>No InfoPath</li>\r\n                      <li>Limited look and feel options</li>\r\n                      <li>Not included in Insite search</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </md-card-content>\r\n              <md-divider></md-divider>\r\n              <md-card-actions>\r\n                <button md-mini-fab color=\"accent\" (click)=\"toggleCardSelected('opened_SP_Online_Site')\" ngDefaultControl>\r\n                  <md-icon>check circle</md-icon>\r\n                </button>\r\n              </md-card-actions>\r\n            </md-card>\r\n          </div>\r\n          <!-- SP On-Prem Site Card -->\r\n          <div flex>\r\n            <md-card [ngClass]=\"{'card-selected': sitecards[5].selectedClass}\">\r\n              <md-card-title>SP On-Premises Site</md-card-title>\r\n              <md-card-subtitle>SP site hosted on our internal shared server farm to allow for more advanced customizations.</md-card-subtitle>\r\n              <md-divider></md-divider>\r\n              <md-card-content class=\"md-card-content-prosconsSections\">\r\n                <div layout=\"row\" layout-align=\"center\">\r\n                  <div class=\"md-card-content-prosconsSection\">\r\n                    <h3>Pros</h3>\r\n                    <ul>\r\n                      <li>Full SharePoint feature set</li>\r\n                      <li>Included in Insite Search</li>\r\n                      <li>Tighter network security</li>\r\n                      <li>Nintex</li>\r\n                      <li>InfoPath</li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"md-card-content-prosconsSection md-card-content-prosconsSection--cons\">\r\n                    <h3>Cons</h3>\r\n                    <ul>\r\n                      <li>No O365 services</li>\r\n                      <li>No mobile access</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </md-card-content>\r\n              <md-divider></md-divider>\r\n              <md-card-actions>\r\n                <button md-mini-fab color=\"accent\" (click)=\"toggleCardSelected('opened_SP_OnPrem_Site')\" ngDefaultControl>\r\n                  <md-icon>check circle</md-icon>\r\n                </button>\r\n              </md-card-actions>\r\n            </md-card>\r\n          </div>\r\n        </div>\r\n      <template td-step-actions>\r\n        <button md-raised-button (click)=\"step1.state='none'; step1.disabled=false; step1.open(); step2.disabled=true;\">Previous Step</button>\r\n        <button md-raised-button color=\"primary\" (click)=\"step2.state='complete'; step2.disabled=true; step3.disabled=false; step3.open();\" [disabled]=\"siteCardSelected.siteType === 6\">Next Step</button>\r\n      </template>\r\n    </td-step>\r\n\r\n    <td-step #step3 label=\"Site Name and Owners\" \r\n            [state]=\"none\" \r\n            [disabled]=\"disabled\">\r\n      <!-- Inputs -->\r\n      <form #siteInfoForm=\"ngForm\">\r\n        <div layout=\"row\" layout-margin>\r\n          <md-input-container flex>\r\n            <input md-input type=\"text\" [(ngModel)]=\"siteFormModel.siteName\" name=\"siteName\" placeholder=\"Proposed Site Name\" required>\r\n          </md-input-container>\r\n        </div>\r\n        <div layout=\"row\" layout-margin>\r\n          <md-input-container flex>\r\n            <input md-input type=\"text\" [(ngModel)]=\"siteFormModel.siteOwnerPrimary\" name=\"siteOwnerPrimary\" placeholder=\"Enter Name of Primary Site Owner\" required>\r\n          </md-input-container>\r\n        </div>\r\n        <div layout=\"row\" layout-margin>\r\n          <md-input-container flex>\r\n            <input md-input type=\"text\" [(ngModel)]=\"siteFormModel.siteOwnerSecondary\" name=\"siteOwnerSecondary\" placeholder=\"Enter Name of Secondary Site Owner\" required>\r\n          </md-input-container>\r\n        </div>\r\n      </form>\r\n      <template td-step-actions>\r\n        <button md-raised-button (click)=\"step2.state='none'; step2.disabled=false; step2.open(); step3.disabled=true;\">Previous Step</button>\r\n        <button md-raised-button color=\"primary\" (click)=\"createSiteRequestObj(); step3.state='complete'; step3.disabled=true; step4.disabled=false; step4.open();\" [disabled]=\"!siteInfoForm.valid\">Review Request</button>\r\n      </template>\r\n    </td-step>\r\n\r\n    <td-step #step4 label=\"Review Site Request\" \r\n            [state]=\"none\" \r\n            [disabled]=\"disabled\">\r\n      <p></p>\r\n      <div>\r\n        <md-card>\r\n          <md-card-title>Site Request Info</md-card-title>\r\n          <md-card-subtitle>Information about your site request</md-card-subtitle>\r\n          <md-divider></md-divider>\r\n          <md-list>\r\n            <h3 md-subheader>Captured Metadata</h3>\r\n            <md-list-item>\r\n                <md-icon md-list-avatar *ngIf=\"!checked\">lock</md-icon>\r\n                <md-icon md-list-avatar *ngIf=\"checked\">lock_open</md-icon>\r\n                <h4 md-line>{{siteRequestObj.open_site ? \"Yes\":\"No\"}}</h4>\r\n                <p md-line>Open to all of Visa Inc</p>\r\n            </md-list-item>\r\n            <md-divider md-inset></md-divider>\r\n            <md-list-item>\r\n                <md-icon md-list-avatar>web</md-icon>\r\n                <h4 md-line>{{siteRequestObj.siteType}}</h4>\r\n                <p md-line>Site Type Requested</p>\r\n            </md-list-item>\r\n            <md-divider md-inset></md-divider>\r\n            <md-list-item>\r\n                <md-icon md-list-avatar>language</md-icon>\r\n                <h4 md-line>{{siteRequestObj.siteName}}</h4>\r\n                <p md-line>Proposed Site Name</p>\r\n            </md-list-item>\r\n            <md-divider md-inset></md-divider>\r\n            <md-list-item>\r\n                <md-icon md-list-avatar>account_box</md-icon>\r\n                <h4 md-line>{{siteRequestObj.ownerPrimary}}</h4>\r\n                <p md-line>Primary Site Owner</p>\r\n            </md-list-item>\r\n            <md-divider md-inset></md-divider>\r\n            <md-list-item>\r\n                <md-icon md-list-avatar>account_box</md-icon>\r\n                <h4 md-line>{{siteRequestObj.ownerSecondary}}</h4>\r\n                <p md-line>Secondary Site Owner</p>\r\n            </md-list-item>\r\n          </md-list>\r\n        </md-card>\r\n      </div>\r\n      <template td-step-actions>\r\n        <button md-raised-button (click)=\"step3.state='none'; step3.disabled=false; step3.open(); step4.disabled=true;\">Previous Step</button>\r\n        <button md-raised-button color=\"primary\" (click)=\"step4.state='complete'; step4.disabled=true; step5.disabled=false; step5.open(); step5.state='complete'\">Create Site</button>\r\n      </template>\r\n    </td-step>\r\n\r\n    <td-step #step5 label=\"Request Complete\" \r\n            [state]=\"none\" \r\n            [disabled]=\"disabled\">\r\n      <md-card>\r\n        <md-card-title>Site Request Submitted</md-card-title>\r\n        <md-divider></md-divider>\r\n        <md-card-content>\r\n          <p>You have completed submitting a request for a SharePoint site.</p>\r\n          <p>You will receive an email in a few moments with a link to your new site.</p>\r\n          <p>In the meantime, please visit our <a href=\"#\">Collaboration Technology</a> site for more information on how you can start leveraging your new site for productive and effective internal collaboration.</p>\r\n          <p>Have a great day!</p>\r\n        </md-card-content>\r\n        <md-divider></md-divider>\r\n        <md-card-actions>\r\n          <button md-raised-button color=\"accent\" (click)=\"resetEntireSiteRequestForm(); siteInfoForm.reset(); step1.state = step2.state= step3.state = step4.state = step5.state ='none'; step1.disabled=false; step1.open(); step2.disabled=true;\">Start Again</button>\r\n        </md-card-actions>\r\n      </md-card>\r\n    </td-step>\r\n  </td-steps>\r\n</div>\r\n"

/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(527);


/***/ })

},[978]);
//# sourceMappingURL=main.bundle.map