webpackJsonp([1,4],{524:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=524},525:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(655),i=n(0),d=n(713),o=n(712);d.a.production&&n.i(i.a)(),n.i(r.a)().bootstrapModule(o.a)},711:function(e,t,n){"use strict";var r=n(0),i=n(433);n.d(t,"a",function(){return a});var d,o=this&&this.__decorate||function(e,t,n,r){var i,d=arguments.length,o=d<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(d<3?i(o):d>3?i(t,n,o):i(t,n))||o);return d>3&&o&&Object.defineProperty(t,n,o),o},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e[e.closed_O365_Group_Site=0]="closed_O365_Group_Site",e[e.closed_SP_Online_Site=1]="closed_SP_Online_Site",e[e.closed_SP_OnPrem_Site=2]="closed_SP_OnPrem_Site",e[e.opened_AEM_Site=3]="opened_AEM_Site",e[e.opened_SP_Online_Site=4]="opened_SP_Online_Site",e[e.opened_SP_OnPrem_Site=5]="opened_SP_OnPrem_Site",e[e.dummy_site=6]="dummy_site"}(d||(d={}));var a=(function(){function e(){}return e}(),function(){function e(){}return e}(),function(){function e(){}return e}(),function(){function e(e){this.media=e,this.title="Site Requests App",this.disabled=!0}return e.prototype.ngOnInit=function(){this.setFormVariables(),this.setSiteCardFormVars()},e.prototype.setSiteCardFormVars=function(){this.sitecards=[{siteType:d.closed_O365_Group_Site,siteTypeText:"O365 Group Site",selectedClass:!1},{siteType:d.closed_SP_Online_Site,siteTypeText:"SP Online Site",selectedClass:!1},{siteType:d.closed_SP_OnPrem_Site,siteTypeText:"SP OnPrem Site",selectedClass:!1},{siteType:d.opened_AEM_Site,siteTypeText:"AEM Site",selectedClass:!1},{siteType:d.opened_SP_Online_Site,siteTypeText:"SP Online Site",selectedClass:!1},{siteType:d.opened_SP_OnPrem_Site,siteTypeText:"SP OnPrem Site",selectedClass:!1}]},e.prototype.setFormVariables=function(){this.checked=!1,this.siteCardSelected={siteType:d.dummy_site,siteTypeText:"",selectedClass:!1},this.siteRequestObj={open_site:!1,siteType:"",siteName:"",siteUrl:"",ownerPrimary:"",ownerSecondary:""},this.siteFormModel={siteName:"",siteOwnerPrimary:"",siteOwnerSecondary:""}},e.prototype.toggleCardSelected=function(e){this.resetSiteCardFormVars();var t=d[e];this.sitecards[t].selectedClass=!0,this.siteCardSelected=this.sitecards.filter(function(e){return e.selectedClass===!0})[0]},e.prototype.resetSiteCardFormVars=function(){this.setSiteCardFormVars()},e.prototype.resetEntireSiteRequestForm=function(){this.setSiteCardFormVars(),this.setFormVariables()},e.prototype.createSiteRequestObj=function(){this.siteRequestObj.open_site=this.checked,this.siteRequestObj.siteType=this.siteCardSelected.siteTypeText,this.siteRequestObj.siteName=this.siteFormModel.siteName,this.siteRequestObj.siteUrl="",this.siteRequestObj.ownerPrimary=this.siteFormModel.siteOwnerPrimary,this.siteRequestObj.ownerSecondary=this.siteFormModel.siteOwnerSecondary},e.prototype.change=function(e){},e=o([n.i(r.k)({selector:"app-root",template:n(930),styles:[n(929)]}),s("design:paramtypes",["function"==typeof(t="undefined"!=typeof i.b&&i.b)&&t||Object])],e);var t}())},712:function(e,t,n){"use strict";var r=n(48),i=n(0),d=n(11),o=n(112),s=n(9),a=n(864),c=(n.n(a),n(433)),l=n(711);n.d(t,"a",function(){return p});var m=this&&this.__decorate||function(e,t,n,r){var i,d=arguments.length,o=d<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(d<3?i(o):d>3?i(t,n,o):i(t,n))||o);return d>3&&o&&Object.defineProperty(t,n,o),o},u=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(){function e(){}return e=m([n.i(i.b)({declarations:[l.a],imports:[r.a,d.a,o.a,s.MaterialModule.forRoot(),c.a.forRoot()],providers:[],bootstrap:[l.a]}),u("design:paramtypes",[])],e)}()},713:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={production:!0}},929:function(e,t){e.exports='button{margin:5px}.card-selected{background-color:#ffd57f}.md-card-content-prosconsSections{height:200px}.md-card-content-prosconsSection h3{margin:0 0 12px;font-weight:100}.md-card-content-prosconsSection:first-child{margin-right:30px}.md-card-content-prosconsSection ul{list-style-type:none;margin:0;padding:0}.md-card-content-prosconsSection h3:after{background-color:#a4cf0c;border-radius:3px;content:"";display:block;height:8px}.md-card-content-prosconsSection--cons h3:after{background-color:#e74856}'},930:function(e,t){e.exports='<div>\r\n  <md-toolbar color="primary">\r\n    <span>{{title}}</span>\r\n  </md-toolbar>\r\n\r\n  <td-steps (stepChange)="change($event)" [mode]="(media.registerQuery(\'gt-sm\') | async) ? \'horizontal\' : \'vertical\'">\r\n    <td-step #step1 label="Start Site Request" \r\n            [state]="none"\r\n            [active]="true" \r\n            [disabled]="false">\r\n      <p>Does your site need to be opened to all of Visa?</p>\r\n      <md-checkbox [(ngModel)]="checked">\r\n        Yes, open to all of Visa Inc\r\n      </md-checkbox>\r\n      <template td-step-actions>\r\n        <button md-raised-button color="primary" (click)="step1.state=\'complete\'; step1.disabled=true; step2.disabled=false; step2.open();">Next Step</button>\r\n      </template>\r\n    </td-step>\r\n    \r\n    <td-step #step2 label="Select Site Type" \r\n            [state]="none" \r\n            [disabled]="disabled">\r\n      \r\n        <div *ngIf="!checked" id="openAllNo" layout="column" layout-gt-sm="row">\r\n          <div id=\'what1\' flex>\r\n            <!-- O365 Group Site Card -->\r\n            <md-card [ngClass]="{\'card-selected\': sitecards[0].selectedClass}">\r\n              <md-card-title>O365 Group Site</md-card-title>\r\n              <md-card-subtitle>A security/distribution group that can be used to manage access to sites and services across Office 365 and the Visa network.</md-card-subtitle>\r\n              <md-divider></md-divider>\r\n              <md-card-content class="md-card-content-prosconsSections">\r\n                <div layout="row" layout-align="center">\r\n                  <div class="md-card-content-prosconsSection">\r\n                    <h3>Pros</h3>\r\n                    <ul>\r\n                      <li>Simple document library (SP)</li>\r\n                      <li>Mobile Access</li>\r\n                      <li>Shared Mailbox (Exchange)</li>\r\n                      <li>Shared Calendar (Exchange)</li>\r\n                      <li>Distribution List (Exchange)</li>\r\n                      <li>Task Board (Planner)</li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class="md-card-content-prosconsSection md-card-content-prosconsSection--cons">\r\n                    <h3>Cons</h3>\r\n                    <ul>\r\n                      <li>No lists</li>\r\n                      <li>No forms</li>\r\n                      <li>No pages</li>\r\n                      <li>Basic UI</li>\r\n                      <li>No customization</li>\r\n                      <li>No apps</li>\r\n                      <li>Small audiences</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </md-card-content>\r\n              <md-divider></md-divider>\r\n              <md-card-actions>\r\n                <button md-mini-fab color="accent" (click)="toggleCardSelected(\'closed_O365_Group_Site\')" ngDefaultControl>\r\n                  <md-icon>check circle</md-icon>\r\n                </button>\r\n              </md-card-actions>\r\n            </md-card>\r\n          </div>\r\n            <!-- SP Online Site Card -->\r\n          <div id=\'what2\' flex>\r\n            <md-card [ngClass]="{\'card-selected\': sitecards[1].selectedClass}">\r\n              <md-card-title>SP Online Site</md-card-title>\r\n              <md-card-subtitle>A cloud version of the SharePoint team sites you\'ve used previously on the Visa network.</md-card-subtitle>\r\n              <md-divider></md-divider>\r\n              <md-card-content class="md-card-content-prosconsSections">\r\n                <div layout="row" layout-align="center">\r\n                  <div class="md-card-content-prosconsSection">\r\n                    <h3>Pros</h3>\r\n                    <ul>\r\n                      <li>Core SharePoint feature set</li>\r\n                      <li>Full O365 services</li>\r\n                      <li>Mobile Access</li>\r\n                      <li>Some customizations possible</li>\r\n                      <li>Pages</li>\r\n                      <li>Lists</li>\r\n                      <li>Forms</li>\r\n                      <li>Apps</li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class="md-card-content-prosconsSection md-card-content-prosconsSection--cons">\r\n                    <h3>Cons</h3>\r\n                    <ul>\r\n                      <li>More complex and advanced</li>\r\n                      <li>No integration with<br/> Visa network resources</li>\r\n                      <li>No Nintex</li>\r\n                      <li>No InfoPath</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </md-card-content>\r\n              <md-divider></md-divider>\r\n              <md-card-actions>\r\n                <button md-mini-fab color="accent" (click)="toggleCardSelected(\'closed_SP_Online_Site\')" ngDefaultControl>\r\n                  <md-icon>check circle</md-icon>\r\n                </button>\r\n              </md-card-actions>\r\n            </md-card>\r\n          </div>\r\n          <div id=\'what3\' flex>\r\n            <!-- SP On-Prem Site Card -->\r\n            <md-card [ngClass]="{\'card-selected\': sitecards[2].selectedClass}">\r\n              <md-card-title>SP On-Premises Site</md-card-title>\r\n              <md-card-subtitle>SP Publishing site hosted on our internal shared server farm to allow for more advanced customizations.</md-card-subtitle>\r\n              <md-divider></md-divider>\r\n              <md-card-content class="md-card-content-prosconsSections">\r\n                <div layout="row" layout-align="center">\r\n                  <div class="md-card-content-prosconsSection">\r\n                    <h3>Pros</h3>\r\n                    <ul>\r\n                      <li>Full SharePoint feature set</li>\r\n                      <li>Included in Insite Search</li>\r\n                      <li>Tighter network security</li>\r\n                      <li>Pages</li>\r\n                      <li>Lists</li>\r\n                      <li>Forms</li>\r\n                      <li>Apps</li>\r\n                      <li>Nintex</li>\r\n                      <li>InfoPath</li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class="md-card-content-prosconsSection md-card-content-prosconsSection--cons">\r\n                    <h3>Cons</h3>\r\n                    <ul>\r\n                      <li>No O365 services</li>\r\n                      <li>No mobile access</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </md-card-content>\r\n              <md-divider></md-divider>\r\n              <md-card-actions>\r\n                <button md-mini-fab color="accent" (click)="toggleCardSelected(\'closed_SP_OnPrem_Site\')" ngDefaultControl>\r\n                  <md-icon>check circle</md-icon>\r\n                </button>\r\n              </md-card-actions>\r\n            </md-card>\r\n          </div>\r\n        </div>\r\n        <div *ngIf="checked" id="openAllYes" layout="column" layout-gt-sm="row">\r\n          <!-- AEM Site Card -->\r\n          <div flex>\r\n            <md-card [ngClass]="{\'card-selected\': sitecards[3].selectedClass}">\r\n              <md-card-title>AEM Site</md-card-title>\r\n              <md-card-subtitle>The Visa Corporate intranet is intended to be the source of authoritative information.</md-card-subtitle>\r\n              <md-divider></md-divider>\r\n              <md-card-content class="md-card-content-prosconsSections">\r\n                <div layout="row" layout-align="center">\r\n                  <div class="md-card-content-prosconsSection">\r\n                    <h3>Pros</h3>\r\n                    <ul>\r\n                      <li>Polished look and feel</li>\r\n                      <li>Included in Insite search</li>\r\n                      <li>Content authors to help publish content</li>\r\n                      <li>An Editor will curate your information</li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class="md-card-content-prosconsSection md-card-content-prosconsSection--cons">\r\n                    <h3>Cons</h3>\r\n                    <ul>\r\n                      <li>Limited customization</li>\r\n                      <li>No forms</li>\r\n                      <li>No automation</li>\r\n                      <li>An Editor will curate your information</li>\r\n                      <li>Limited mobile options</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </md-card-content>\r\n              <md-divider></md-divider>\r\n              <md-card-actions>\r\n                <button md-mini-fab color="accent" (click)="toggleCardSelected(\'opened_AEM_Site\')" ngDefaultControl>\r\n                  <md-icon>check circle</md-icon>\r\n                </button>\r\n              </md-card-actions>\r\n            </md-card>\r\n          </div>\r\n          <!-- SP Online Site Card -->\r\n          <div flex>\r\n            <md-card [ngClass]="{\'card-selected\': sitecards[4].selectedClass}">\r\n              <md-card-title>SP Online Site</md-card-title>\r\n              <md-card-subtitle>A cloud version of the SharePoint team sites you\'ve used previously on the Visa network.</md-card-subtitle>\r\n              <md-divider></md-divider>\r\n              <md-card-content class="md-card-content-prosconsSections">\r\n                <div layout="row" layout-align="center">\r\n                  <div class="md-card-content-prosconsSection">\r\n                    <h3>Pros</h3>\r\n                    <ul>\r\n                      <li>Core SharePoint feature set</li>\r\n                      <li>Full O365 services</li>\r\n                      <li>Mobile Access</li>\r\n                      <li>Some customizations possible</li>\r\n                      <li>Pages</li>\r\n                      <li>Lists</li>\r\n                      <li>Forms</li>\r\n                      <li>Apps</li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class="md-card-content-prosconsSection md-card-content-prosconsSection--cons">\r\n                    <h3>Cons</h3>\r\n                    <ul>\r\n                      <li>More complex and advanced</li>\r\n                      <li>No integration with resources on the Visa network</li>\r\n                      <li>No Nintex</li>\r\n                      <li>No InfoPath</li>\r\n                      <li>Limited look and feel options</li>\r\n                      <li>Not included in Insite search</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </md-card-content>\r\n              <md-divider></md-divider>\r\n              <md-card-actions>\r\n                <button md-mini-fab color="accent" (click)="toggleCardSelected(\'opened_SP_Online_Site\')" ngDefaultControl>\r\n                  <md-icon>check circle</md-icon>\r\n                </button>\r\n              </md-card-actions>\r\n            </md-card>\r\n          </div>\r\n          <!-- SP On-Prem Site Card -->\r\n          <div flex>\r\n            <md-card [ngClass]="{\'card-selected\': sitecards[5].selectedClass}">\r\n              <md-card-title>SP On-Premises Site</md-card-title>\r\n              <md-card-subtitle>SP site hosted on our internal shared server farm to allow for more advanced customizations.</md-card-subtitle>\r\n              <md-divider></md-divider>\r\n              <md-card-content class="md-card-content-prosconsSections">\r\n                <div layout="row" layout-align="center">\r\n                  <div class="md-card-content-prosconsSection">\r\n                    <h3>Pros</h3>\r\n                    <ul>\r\n                      <li>Full SharePoint feature set</li>\r\n                      <li>Included in Insite Search</li>\r\n                      <li>Tighter network security</li>\r\n                      <li>Nintex</li>\r\n                      <li>InfoPath</li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class="md-card-content-prosconsSection md-card-content-prosconsSection--cons">\r\n                    <h3>Cons</h3>\r\n                    <ul>\r\n                      <li>No O365 services</li>\r\n                      <li>No mobile access</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </md-card-content>\r\n              <md-divider></md-divider>\r\n              <md-card-actions>\r\n                <button md-mini-fab color="accent" (click)="toggleCardSelected(\'opened_SP_OnPrem_Site\')" ngDefaultControl>\r\n                  <md-icon>check circle</md-icon>\r\n                </button>\r\n              </md-card-actions>\r\n            </md-card>\r\n          </div>\r\n        </div>\r\n      <template td-step-actions>\r\n        <button md-raised-button (click)="step1.state=\'none\'; step1.disabled=false; step1.open(); step2.disabled=true;">Previous Step</button>\r\n        <button md-raised-button color="primary" (click)="step2.state=\'complete\'; step2.disabled=true; step3.disabled=false; step3.open();" [disabled]="siteCardSelected.siteType === 6">Next Step</button>\r\n      </template>\r\n    </td-step>\r\n\r\n    <td-step #step3 label="Site Name and Owners" \r\n            [state]="none" \r\n            [disabled]="disabled">\r\n      <!-- Inputs -->\r\n      <form #siteInfoForm="ngForm">\r\n        <div layout="row" layout-margin>\r\n          <md-input-container flex>\r\n            <input md-input type="text" [(ngModel)]="siteFormModel.siteName" name="siteName" placeholder="Proposed Site Name" required>\r\n          </md-input-container>\r\n        </div>\r\n        <div layout="row" layout-margin>\r\n          <md-input-container flex>\r\n            <input md-input type="text" [(ngModel)]="siteFormModel.siteOwnerPrimary" name="siteOwnerPrimary" placeholder="Enter Name of Primary Site Owner" required>\r\n          </md-input-container>\r\n        </div>\r\n        <div layout="row" layout-margin>\r\n          <md-input-container flex>\r\n            <input md-input type="text" [(ngModel)]="siteFormModel.siteOwnerSecondary" name="siteOwnerSecondary" placeholder="Enter Name of Secondary Site Owner" required>\r\n          </md-input-container>\r\n        </div>\r\n      </form>\r\n      <template td-step-actions>\r\n        <button md-raised-button (click)="step2.state=\'none\'; step2.disabled=false; step2.open(); step3.disabled=true;">Previous Step</button>\r\n        <button md-raised-button color="primary" (click)="createSiteRequestObj(); step3.state=\'complete\'; step3.disabled=true; step4.disabled=false; step4.open();" [disabled]="!siteInfoForm.valid">Review Request</button>\r\n      </template>\r\n    </td-step>\r\n\r\n    <td-step #step4 label="Review Site Request" \r\n            [state]="none" \r\n            [disabled]="disabled">\r\n      <p></p>\r\n      <div>\r\n        <md-card>\r\n          <md-card-title>Site Request Info</md-card-title>\r\n          <md-card-subtitle>Information about your site request</md-card-subtitle>\r\n          <md-divider></md-divider>\r\n          <md-list>\r\n            <h3 md-subheader>Captured Metadata</h3>\r\n            <md-list-item>\r\n                <md-icon md-list-avatar *ngIf="!checked">lock</md-icon>\r\n                <md-icon md-list-avatar *ngIf="checked">lock_open</md-icon>\r\n                <h4 md-line>{{siteRequestObj.open_site ? "Yes":"No"}}</h4>\r\n                <p md-line>Open to all of Visa Inc</p>\r\n            </md-list-item>\r\n            <md-divider md-inset></md-divider>\r\n            <md-list-item>\r\n                <md-icon md-list-avatar>web</md-icon>\r\n                <h4 md-line>{{siteRequestObj.siteType}}</h4>\r\n                <p md-line>Site Type Requested</p>\r\n            </md-list-item>\r\n            <md-divider md-inset></md-divider>\r\n            <md-list-item>\r\n                <md-icon md-list-avatar>language</md-icon>\r\n                <h4 md-line>{{siteRequestObj.siteName}}</h4>\r\n                <p md-line>Proposed Site Name</p>\r\n            </md-list-item>\r\n            <md-divider md-inset></md-divider>\r\n            <md-list-item>\r\n                <md-icon md-list-avatar>account_box</md-icon>\r\n                <h4 md-line>{{siteRequestObj.ownerPrimary}}</h4>\r\n                <p md-line>Primary Site Owner</p>\r\n            </md-list-item>\r\n            <md-divider md-inset></md-divider>\r\n            <md-list-item>\r\n                <md-icon md-list-avatar>account_box</md-icon>\r\n                <h4 md-line>{{siteRequestObj.ownerSecondary}}</h4>\r\n                <p md-line>Secondary Site Owner</p>\r\n            </md-list-item>\r\n          </md-list>\r\n        </md-card>\r\n      </div>\r\n      <template td-step-actions>\r\n        <button md-raised-button (click)="step3.state=\'none\'; step3.disabled=false; step3.open(); step4.disabled=true;">Previous Step</button>\r\n        <button md-raised-button color="primary" (click)="step4.state=\'complete\'; step4.disabled=true; step5.disabled=false; step5.open(); step5.state=\'complete\'">Create Site</button>\r\n      </template>\r\n    </td-step>\r\n\r\n    <td-step #step5 label="Request Complete" \r\n            [state]="none" \r\n            [disabled]="disabled">\r\n      <md-card>\r\n        <md-card-title>Site Request Submitted</md-card-title>\r\n        <md-divider></md-divider>\r\n        <md-card-content>\r\n          <p>You have completed submitting a request for a SharePoint site.</p>\r\n          <p>You will receive an email in a few moments with a link to your new site.</p>\r\n          <p>In the meantime, please visit our <a href="#">Collaboration Technology</a> site for more information on how you can start leveraging your new site for productive and effective internal collaboration.</p>\r\n          <p>Have a great day!</p>\r\n        </md-card-content>\r\n        <md-divider></md-divider>\r\n        <md-card-actions>\r\n          <button md-raised-button color="accent" (click)="resetEntireSiteRequestForm(); siteInfoForm.reset(); step1.state = step2.state= step3.state = step4.state = step5.state =\'none\'; step5.disabled=true; step1.disabled=false; step1.open(); step2.disabled=true;">Start Again</button>\r\n        </md-card-actions>\r\n      </md-card>\r\n    </td-step>\r\n  </td-steps>\r\n</div>\r\n'},968:function(e,t,n){e.exports=n(525)}},[968]);