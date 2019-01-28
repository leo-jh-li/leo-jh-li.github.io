(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  background-image: url('me.png');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nh1 {\r\n  display: none;\r\n  padding-top: 8em;\r\n}\r\n\r\np {\r\n  text-align: center;\r\n}\r\n\r\n#about-text {\r\n  font-size: xx-large;\r\n  padding-top: 14em;\r\n  padding-left: 3em;\r\n  padding-bottom: 8em;\r\n}\r\n\r\n#rwd-notice {\r\n  display: none;\r\n  padding-top: 4em;\r\n  margin-bottom: -1em;\r\n}\r\n\r\n@media only screen and (max-width: 1400px) {\r\n  .container {\r\n    background-position: 5%;\r\n  }\r\n  #about-text {\r\n    padding-left: 3em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1350px) {\r\n  #about-text {\r\n    padding-left: 5em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1260px) {\r\n  .container {\r\n    background-image: none;\r\n  }\r\n  h1 {\r\n    display: block;\r\n  }\r\n  #about-text {\r\n    padding-top: 0;\r\n    padding-left: 0;\r\n  }\r\n  #rwd-notice {\r\n    display: block;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 900px) {\r\n .line-break {\r\n    display: none;\r\n  }\r\n  h1 {\r\n    padding-top: 6em;\r\n  }\r\n  #about-text {\r\n    font-size: x-large;\r\n    padding-bottom: 4em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  h1 {\r\n    padding-top: 2.5em;\r\n  }\r\n  #about-text {\r\n    padding-bottom: 0.25em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 450px) {\r\n  #rwd-notice {\r\n    font-size: 0.8em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 400px) {\r\n  #rwd-notice {\r\n    font-size: 0.7em;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"anchor\" id=\"about-anchor\"></a>\n<section id=\"about\">\n  <div class=\"container\">\n    <h1>HEY, I'M LEO!</h1>\n    <p id=\"about-text\">I'm a programmer from Toronto with 8 years of experience. <br class=\"line-break\">I have a wide range of skills and I'm always eager <br class=\"line-break\">to learn more. I am currently available for hire!<br><a href=\"mailto:leojh.li@gmail.com\" target=\"_top\">leojh.li@gmail.com</a></p>\n    <p id=\"rwd-notice\">This site is viewed best on screens with higher resolutions!</p>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"content\">\n    <a id=\"top\"></a>\n    <app-navbar></app-navbar>\n    <app-about></app-about>\n    <app-skills></app-skills>\n    <app-projects></app-projects>\n    <app-footer></app-footer>\n  </div>\n</body>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Leo Li';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project-detail/project-detail.component */ "./src/app/project-detail/project-detail.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"],
                _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProjectDetailComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"]
            ],
            imports: [
                // BrowserModule, // ?? [TODO] commenting out for now
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot()
            ],
            entryComponents: [
                _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProjectDetailComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\r\n  text-align: center;\r\n}\r\n\r\n#footer a {\r\n  margin: 0 0.5em 0 0.5em;\r\n}\r\n\r\n.footer-icon {\r\n  max-width: 50px;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"footer\">\n  <a href=\"https://github.com/leo-jh-li\" target=\"_blank\"><img src=\"../../assets/github.svg\" class=\"footer-icon\"></a>\n  <a href=\"https://www.linkedin.com/in/leo-li-125858169/\" target=\"_blank\"><img src=\"../../assets/linkedin.svg\" class=\"footer-icon\"></a>\n  <a href=\"https://twitter.com/llcodes\" target=\"_blank\"><img src=\"../../assets/twitter.svg\" class=\"footer-icon\"></a>\n</section>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navbar {\r\n  position: fixed;\r\n  top: 0;\r\n  background-color: #1A5375;\r\n  width: 100%;\r\n  z-index: 1;\r\n  display: flex;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\n#to-top-button {\r\n  font-size: xx-large;\r\n  padding: 0.5em 2em 0.5em 2em;\r\n}\r\n\r\nnav a {\r\n  display: block;\r\n  white-space: nowrap;\r\n  font-size: x-large;\r\n  color: white;\r\n  padding: 22px 50px 25px 50px;\r\n  text-decoration: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\nnav a:hover {\r\n  color: #FFD870;\r\n  background-color: #133C55;\r\n  cursor: pointer;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n  #to-top-button {\r\n    font-size: x-large;\r\n    padding: 0.25em 1.5em 0.25em 1.5em;\r\n  }\r\n  nav a {\r\n    font-size: large;\r\n    padding: 11px 25px 12px 25px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n  #to-top-button {\r\n    display: none;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar\">\n    <a (click)=\"scrollTo('top')\" id=\"to-top-button\">LEO LI</a>\n    <a (click)=\"scrollTo('about-anchor')\">ABOUT</a>\n    <a (click)=\"scrollTo('skills-anchor')\">SKILLS</a>\n    <a (click)=\"scrollTo('projects-anchor')\">PROJECTS</a>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.scrollTo = function (elementId) {
        var element = document.getElementById(elementId);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/project-detail/project-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/project-detail/project-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  text-align: center;\r\n}\r\n\r\nh2 {\r\n  margin: 0.5em 0 0.5em 0;\r\n}\r\n\r\n.project-button {\r\n  margin: 0.2em;\r\n  border: 1px solid #CCCCCC;\r\n  padding: 2px 6px 2px 6px;\r\n}\r\n\r\n@media only screen and (max-width: 1049px), (max-height: 800px) {\r\n  img {\r\n    max-height: 500px;\r\n    width: auto;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 899px), (max-height: 750px) {\r\n  img {\r\n    max-height: 450px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 849px), (max-height: 649px) {\r\n  img {\r\n    display: none;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/project-detail/project-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/project-detail/project-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img src=\"{{data.image}}\"> \n  <h2>{{data.name}}</h2>\n  <div *ngFor=\"let tag of data.tags\" class=\"tag {{tag.styleClass}}\">{{tag.name}}</div>\n  <p *ngIf=\"data.name==='@DailySCP'\">Picks out random SCPs from <a href=\"http://www.scp-wiki.net/\" target=\"_blank\">the creative writing project</a> and tweets them each night. The bot can also respond to user queries for SCPs. Coded in Python.</p>\n  <p *ngIf=\"data.name!=='@DailySCP'\">{{data.about}}</p>\n  <a *ngFor=\"let button of data.buttons\" href=\"{{button.url}}\" target=\"_blank\" class=\"project-button\"><i *ngIf=\"button.icon\" class=\"fa {{button.icon}}\"></i>{{button.label}}</a>\n</div>"

/***/ }),

/***/ "./src/app/project-detail/project-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/project-detail/project-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailComponent", function() { return ProjectDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent(data) {
        this.data = data;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
    };
    ProjectDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-detail',
            template: __webpack_require__(/*! ./project-detail.component.html */ "./src/app/project-detail/project-detail.component.html"),
            styles: [__webpack_require__(/*! ./project-detail.component.css */ "./src/app/project-detail/project-detail.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());



/***/ }),

/***/ "./src/app/projects-data.ts":
/*!**********************************!*\
  !*** ./src/app/projects-data.ts ***!
  \**********************************/
/*! exports provided: PROJECTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS", function() { return PROJECTS; });
/* harmony import */ var _tags_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags-data */ "./src/app/tags-data.ts");

var PROJECTS = [
    { id: 1,
        name: 'Snakelike',
        desc: 'A Snake×Rogue game.',
        thumbnail: 'assets/snakelike.png',
        image: 'assets/snakelike-detail.png',
        tags: [_tags_data__WEBPACK_IMPORTED_MODULE_0__["TAGS"].GAME_DEV],
        about: 'Avoid walls and search for food while dungeon crawling in this genre mashup of Snake games and the roguelike genre. A windows console game made in C++.',
        buttons: [{ icon: 'fa-gamepad', label: 'Download on itch.io', url: 'https://leo-li.itch.io/snakelike?password=apples' },
            { icon: 'fa-github', label: 'GitHub', url: 'https://github.com/leo-jh-li/Snakelike' },
            { icon: 'fa-youtube', label: 'Watch gameplay', url: 'https://youtu.be/0FIhjqivlkU' },
            { icon: 'fa-file', label: 'Read dev retrospective', url: 'https://github.com/leo-jh-li/Snakelike/blob/master/Docs/Retrospective.md' }] },
    { id: 2,
        name: 'POND',
        desc: 'A simple game made with PICO-8.',
        thumbnail: 'assets/pond.png',
        image: 'assets/pond-detail.png',
        tags: [_tags_data__WEBPACK_IMPORTED_MODULE_0__["TAGS"].GAME_DEV],
        about: 'Swim and eat to score as high as possible in this retro style game. Made with PICO-8, a virtual console using a Lua-like language.',
        buttons: [{ icon: 'fa-gamepad', label: 'Play on itch.io', url: 'https://leo-li.itch.io/pond?password=fishies' },
            { icon: 'fa-github', label: 'GitHub', url: 'https://github.com/leo-jh-li/POND' }] },
    { id: 3,
        name: 'Nora and the Dream Forest',
        desc: 'A platformer made for MFGJ 2017.',
        thumbnail: 'assets/dream-forest.png',
        image: 'assets/dream-forest-detail.png',
        tags: [_tags_data__WEBPACK_IMPORTED_MODULE_0__["TAGS"].GAME_DEV, _tags_data__WEBPACK_IMPORTED_MODULE_0__["TAGS"].UNITY],
        about: 'A simple platform game starring the eponymous witch Nora. Made in Unity for My First Game Jam Summer 2017, for which the theme was "dreams."\
    I am currently working to add improvements on top of the original submission.',
        buttons: [] },
    { id: 4,
        name: 'Calvin Ball',
        desc: 'A party game made for Global Game Jam 2017.',
        thumbnail: 'assets/calvin-ball.png',
        image: 'assets/calvin-ball-detail.png',
        tags: [_tags_data__WEBPACK_IMPORTED_MODULE_0__["TAGS"].GAME_DEV, _tags_data__WEBPACK_IMPORTED_MODULE_0__["TAGS"].UNITY],
        about: 'This game pits two against two in a basketball game where the only way to jump or shoot is by sending shockwaves through the ground to launch\
    your teammate or the ball into the air. Made by a team in Unity and submitted to Global Game Jam 2017, for which the theme was "waves."',
        buttons: [{ icon: 'fa-gamepad', label: 'See GGJ 2017 page', url: 'https://globalgamejam.org/2017/games/calvin-ball' },
            { icon: 'fa-github', label: 'GitHub', url: 'https://github.com/allenaerostar/GlobalGameJam2017/tree/benji' }] },
    { id: 5, name: 'Colour Coded',
        desc: 'A short puzzle game made over 3 days.',
        thumbnail: 'assets/colour-coded.png',
        image: 'assets/colour-coded-detail.png',
        tags: [_tags_data__WEBPACK_IMPORTED_MODULE_0__["TAGS"].GAME_DEV, _tags_data__WEBPACK_IMPORTED_MODULE_0__["TAGS"].UNITY],
        about: 'A puzzle/stealth game where you must move cautiously and strategically absorb enemy blobs to take on their colour. Made in Unity by a group of\
    friends under game jam-like conditions.',
        buttons: [{ icon: 'fa-github', label: 'GitHub', url: 'https://github.com/allenaerostar/ArtificialJamDec2016' }] },
    { id: 6, name: 'Planet Home',
        desc: 'Survival game made for Global Game Jam 2019.',
        thumbnail: 'assets/planet-home.png',
        image: 'assets/planet-home-detail.png',
        tags: [_tags_data__WEBPACK_IMPORTED_MODULE_0__["TAGS"].GAME_DEV, _tags_data__WEBPACK_IMPORTED_MODULE_0__["TAGS"].UNITY],
        about: 'A survival game where you must pull floating islands into yours to expand your home and gather resources. Made in Unity by a small team in 48\
    hours. The theme was "what home means to you."',
        buttons: [{ icon: 'fa-gamepad', label: 'Play on itch.io', url: 'https://leo-li.itch.io/planet-home' },
            { icon: 'fa-gamepad', label: 'See GGJ 2019 page', url: 'https://globalgamejam.org/2019/games/planet-home-2' },
            { icon: 'fa-github', label: 'GitHub', url: 'https://github.com/nansonzheng/GGJ2019SCAF/' }] },
    { id: 7, name: 'My Music Player',
        desc: 'Chrome extension that plays music.',
        thumbnail: 'assets/my-music-player.png',
        image: 'assets/my-music-player-detail.png',
        tags: [_tags_data__WEBPACK_IMPORTED_MODULE_0__["TAGS"].WEB],
        about: 'A music player extension for Google Chrome. Features include searching and playing songs on YouTube; creating, exporting, and importing playlists;\
    and browsing YouTube\'s Top Charts. Made by a small team using JavaScript for a web programming course.',
        buttons: [{ icon: 'fa-github', label: 'GitHub', url: 'https://github.com/leo-jh-li/my-music-player' }] },
    { id: 8,
        name: '@DailySCP',
        desc: 'A Twitter bot that posts a random SCP daily.',
        thumbnail: 'assets/dailySCPbot.png',
        image: 'assets/dailySCPbot-detail.png',
        tags: [_tags_data__WEBPACK_IMPORTED_MODULE_0__["TAGS"].BOT],
        about: '',
        buttons: [{ icon: 'fa-twitter', label: 'Twitter', url: 'https://twitter.com/dailyscp' },
            { icon: 'fa-github', label: 'Github', url: 'https://github.com/leo-jh-li/dailySCPbot' }] },
    { id: 9,
        name: '@4d6bot',
        desc: 'Rolls random characters for those who ask.', thumbnail: 'assets/4d6bot.png',
        image: 'assets/4d6bot-detail.png',
        tags: [_tags_data__WEBPACK_IMPORTED_MODULE_0__["TAGS"].BOT],
        about: 'Generates an array of stats and traits for Twitter users. Uses JavaScript, the twit library, and Node.js.',
        buttons: [{ icon: 'fa-twitter', label: 'Twitter', url: 'https://twitter.com/4d6bot' },
            { icon: 'fa-github', label: 'Github', url: 'https://github.com/leo-jh-li/4d6bot' }] }
];


/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projects {\r\n  list-style-type: none;\r\n}\r\n\r\np {\r\n  margin-left: 8px;\r\n  margin-right: 8px;\r\n}\r\n\r\nh4 {\r\n  font-weight: bold;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  margin: 0 auto;\r\n}\r\n\r\n.projects li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  background-color: #FFFFFF;\r\n  margin: 1em;\r\n  height: 20em;\r\n  width: 24em;\r\n  border-radius: 0 0 6px 6px;\r\n  text-align: center;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n.projects li:hover {\r\n  opacity: .8;\r\n  -webkit-filter: brightness(60%);\r\n}\r\n\r\nimg {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 400px) {\r\n  .projects li {\r\n    height: 18em;\r\n    max-width: 275px;\r\n  }\r\n  .projects img {\r\n    max-width: 275px;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"anchor\" id=\"projects-anchor\"></a>\n<section id=\"projects\">\n  <div class=\"container\">\n    <h1>PROJECTS</h1>\n    <ul class=\"projects\" (window:resize)=\"onResize($event)\">\n      <div *ngFor=\"let project of projects; let i = index\">\n        <div *ngIf=\"i % cols == 0\" class=\"row\">\n          <li class=\"project {{cols}}\" (click)=\"openProjectDetails(projects[i].id)\">\n            <img src=\"{{projects[i].thumbnail}}\"> \n            <h4>{{projects[i].name}}</h4>\n            <p>{{projects[i].desc}}</p>\n            <p *ngFor=\"let tag of projects[i].tags\" class=\"tag {{tag.styleClass}}\">{{tag.name}}</p>\n          </li>\n          <li *ngIf=\"projects.length > i+1\" (click)=\"openProjectDetails(projects[i+1].id)\">\n            <img src=\"{{projects[i+1].thumbnail}}\"> \n            <h4>{{projects[i+1].name}}</h4>\n            <p>{{projects[i+1].desc}}</p>\n            <div *ngFor=\"let tag of projects[i+1].tags\" class=\"tag {{tag.styleClass}}\">{{tag.name}}</div>\n          </li>\n          <li *ngIf=\"projects.length > i+2 && cols >= 3\" (click)=\"openProjectDetails(projects[i+2].id)\">\n            <img src=\"{{projects[i+2].thumbnail}}\"> \n            <h4>{{projects[i+2].name}}</h4>\n            <p>{{projects[i+2].desc}}</p>\n            <div *ngFor=\"let tag of projects[i+2].tags\" class=\"tag {{tag.styleClass}}\">{{tag.name}}</div>\n          </li>\n        </div>\n      </div>\n    </ul>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _projects_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects-data */ "./src/app/projects-data.ts");
/* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project-detail/project-detail.component */ "./src/app/project-detail/project-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(dialog) {
        this.dialog = dialog;
        this.projects = _projects_data__WEBPACK_IMPORTED_MODULE_2__["PROJECTS"];
        this.cols = 3;
    }
    ProjectsComponent.prototype.openProjectDetails = function (id) {
        var focusProject = this.projects.find(function (project) { return project.id === id; });
        var dialogRef = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogRef.maxHeight = '850px';
        dialogRef.maxWidth = '1200px';
        dialogRef.autoFocus = false;
        dialogRef.data = focusProject;
        this.dialog.open(_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProjectDetailComponent"], dialogRef);
    };
    ProjectsComponent.prototype.ngOnInit = function () {
        this.resize();
    };
    ProjectsComponent.prototype.onResize = function (event) {
        this.resize();
    };
    ProjectsComponent.prototype.resize = function () {
        this.cols = (window.innerWidth >= 1250) ? 3 : 2;
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  padding-bottom: 0.5em;\r\n}\r\n\r\nh3 {\r\n  padding-top: 0.75em;\r\n}\r\n\r\n.main-skills {\r\n  list-style: none;\r\n}\r\n\r\n.main-skills li {\r\n  font-size: 1.5em;\r\n}\r\n\r\n.other-skills-list li {\r\n  font-size: 1.1em;\r\n}\r\n\r\n.rwd-skills {\r\n  display: none;\r\n  width: 250px;\r\n  margin: 0 auto;\r\n}\r\n\r\n#rwd-other-skills-list {\r\n  padding-left: 1.5em;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  ul {\r\n    padding-left: 1.5em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 560px) {\r\n  .browser-skills-list {\r\n    display: none;\r\n  }\r\n  .rwd-skills {\r\n    display: block;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 420px) {\r\n  h2 {\r\n    font-size: x-large;\r\n    font-weight: bold;\r\n  }\r\n\r\n  h3 {\r\n    font-size: large;\r\n    font-weight: bold;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"anchor\" id=\"skills-anchor\"></a>\n<section id=\"skills\">\n  <div class=\"container\">\n    <h1>SKILLS</h1>\n\n    <h2>I am proficient with:</h2>\n    <div class=\"row browser-skills-list\">\n      <ul class=\"main-skills\">\n        <li>Java: ★★★★</li>\n        <li>Python: ★★★★</li>\n        <li>JavaScript: ★★★</li>\n        <li>C: ★★★</li>\n      </ul>\n\n      <ul class=\"main-skills\">\n        <li>CSS: ★★</li>\n        <li>jQuery: ★★</li>\n        <li>Angular: ★★</li>\n        <li>Bootstrap: ★★</li>\n      </ul>\n    </div>\n    <div class=\"rwd-skills\">\n      <ul class=\"main-skills\">\n        <li>Java: ★★★★</li>\n        <li>Python: ★★★★</li>\n        <li>JavaScript: ★★★</li>\n        <li>C: ★★★</li>\n        <li>CSS: ★★</li>\n        <li>jQuery: ★★</li>\n        <li>Angular: ★★</li>\n        <li>Bootstrap: ★★</li>\n      </ul>\n    </div>\n\n    <h3>I also have experience with:</h3>\n    <div class=\"row browser-skills-list other-skills-list\">\n      <ul>\n        <li>App Development</li>\n        <li>Node.js</li>\n        <li>SQL and NoSQL</li>\n      </ul>\n      <ul>\n        <li>Functional Programming</li>\n        <li>Kernel Programming</li>\n        <li>Shell Scripting</li>\n      </ul>\n      <ul>\n        <li>HCI Principles</li>\n        <li>Algorithm Analysis</li>\n        <li>Computer Security</li>\n      </ul>\n    </div>\n    <div class=\"rwd-skills other-skills-list\" id=\"rwd-other-skills-list\">\n      <ul >\n        <li>App Development</li>\n        <li>Node.js</li>\n        <li>SQL and NoSQL</li>\n        <li>Functional Programming</li>\n        <li>Kernel Programming</li>\n        <li>Shell Scripting</li>\n        <li>HCI Principles</li>\n        <li>Algorithm Analysis</li>\n        <li>Computer Security</li>\n      </ul>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/tags-data.ts":
/*!******************************!*\
  !*** ./src/app/tags-data.ts ***!
  \******************************/
/*! exports provided: TAGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGS", function() { return TAGS; });
var TAGS = {
    BOT: { name: 'Bot', styleClass: 'bot' },
    GAME_DEV: { name: 'Game Dev', styleClass: 'game-dev' },
    UNITY: { name: 'Unity', styleClass: 'unity' },
    WEB: { name: 'Web', styleClass: 'web' }
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! I:\Leo\Documents\GitHub\private-site-work\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map