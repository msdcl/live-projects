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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title{\n    font-size: 6vw;\n    padding-left: 2%;\n    padding-right: 2%;\n    font-family: 'EB Garamond', serif;\n    background-color:#4484CE;\n}\n/* .selectOpt{\n    color: black;\n    font-size: 3vw;\n}\n.option{\n    background-color: #F19F4D;\n    font-size: 4.5vw;\n    padding-left: 2%;\n}\n.card{\n    padding-left: 2%;\n    margin-top: 3%;\n    color:black;\n    margin-bottom: 3%;\n}\n.character{\nborder: 2px solid red;\n}\n.book{\n    border: 2px solid blue;\n}\n.house{\n    border: 2px solid green;\n} */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row title\">\n    <em>{{title}}</em>\n  </div>\n  <!-- <div class=\"row option\">Select your option to get information :\n    <select class=\"selectOpt\" [(ngModel)]=\"selectedOption\" #i=\"ngModel\" name=\"selectedOption\" (change)=\"selectChangeHandler($event.target.value)\">\n      <option class=\"optionc\" *ngFor=\"let i of category\"  [value]=\"i\">{{i}}</option>\n    </select>\n  </div>\n  <div class=\"row\" *ngIf=\"allData?.length > 0\">\n    <div *ngFor=\"let data of allData\" class=\"col-sm-12 \">\n      <div *ngIf=\"house\" class=\"card house text-white bg-info mb-3\" style=\"max-width: 70rem;\">\n        <div class=\"card-header\">\n          <b>Name</b> : {{data.name}}</div>\n        <div class=\"card-body\">\n\n          <p class=\"card-text\">\n            <b>Region</b> : {{data.region}}\n            <br>\n            <b>CoatOfArms</b> : {{data.coatOfArms}}\n          </p>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"button\" class=\"btn btn-info\" [routerLink]=\"['/view2']\">Details</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"character\" class=\"card character text-white bg-info mb-3\" style=\"max-width: 70rem;\">\n        <div class=\"card-header\">\n          <b>Name</b> : {{data.name}}</div>\n        <div class=\"card-body\">\n\n          <p class=\"card-text\">\n            <b>Gender</b> : {{data.gender}}\n            <br>\n            <b>Culture</b> : {{data.culture}}\n          </p>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"button\" class=\"btn btn-info\" [routerLink]=\"['/view2']\" >Details</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"book\" class=\"card book text-white bg-info mb-3\" style=\"max-width: 70rem;\">\n        <div class=\"card-header\">\n          <b>Name</b> : {{data.name}}</div>\n        <div class=\"card-body\">\n          <p class=\"card-text\">\n            <b>Authors</b> : {{data.authors}}\n            <br>\n            <b>Publisher</b> : {{data.publisher}}\n            <br>\n            <b>Released</b> : {{data.released | date}}\n            <br>\n            <b>Country</b> : {{data.country}}\n          </p>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"button\" class=\"btn btn-info\" [routerLink]=\"['/view2']\">Details</button>\n        </div>\n      </div>\n\n\n    </div>\n  </div> -->\n</div>\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _my_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-service.service */ "./src/app/my-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { View1Component } from './view1/view1.component';
var AppComponent = /** @class */ (function () {
    // category=['characters','books','houses'];
    //  public input ='houses';
    //  public selectedOption:string;
    //  public allData:any;
    //  public house:Boolean;
    //  public book:Boolean;
    //  public character:Boolean;
    function AppComponent(httpService, router, mysevice) {
        //    this.selectedOption='houses';
        this.httpService = httpService;
        this.router = router;
        this.mysevice = mysevice;
        this.title = 'Angular application : Ice and Fire';
        //   this.character=false;
        //   this.house=true;
        //   this.book=false;
        //  this.requestToGetData('houses');
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _my_service_service__WEBPACK_IMPORTED_MODULE_3__["MyServiceService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _my_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-service.service */ "./src/app/my-service.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _view2_view2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view2/view2.component */ "./src/app/view2/view2.component.ts");
/* harmony import */ var _view1_view1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view1/view1.component */ "./src/app/view1/view1.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { View1Component } from './view1/view1.component'
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                _view2_view2_component__WEBPACK_IMPORTED_MODULE_9__["View2Component"],
                _view1_view1_component__WEBPACK_IMPORTED_MODULE_10__["View1Component"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: "view2/:type/:id", component: _view2_view2_component__WEBPACK_IMPORTED_MODULE_9__["View2Component"] },
                    { path: "view1/:event", component: _view1_view1_component__WEBPACK_IMPORTED_MODULE_10__["View1Component"] },
                    { path: '', redirectTo: 'view1/books', pathMatch: 'full' },
                    { path: "**", component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"] }
                ])
            ],
            providers: [_my_service_service__WEBPACK_IMPORTED_MODULE_4__["MyServiceService"], _http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http_get) {
        this.http_get = http_get;
        this.baseUrl = 'https://anapioficeandfire.com/api/';
        console.log('service constructor is called.');
    }
    // function to make http get request to get all data of book/character/house one at a time
    HttpService.prototype.getAllData = function (dataType) {
        var myResponse = this.http_get.get(this.baseUrl + dataType);
        this.allData = myResponse;
        /// console.log("all data : "+this.allData);
        return myResponse;
    };
    // function to make http get request to get data of particular book/character/house
    HttpService.prototype.getDataForView = function (type, id) {
        console.log("Hamara url : " + this.baseUrl + type + '/' + id);
        var response = this.http_get.get(this.baseUrl + type + '/' + id);
        return response;
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/my-service.service.ts":
/*!***************************************!*\
  !*** ./src/app/my-service.service.ts ***!
  \***************************************/
/*! exports provided: MyServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyServiceService", function() { return MyServiceService; });
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

var MyServiceService = /** @class */ (function () {
    function MyServiceService() {
        console.log("mysevice is called");
    }
    MyServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MyServiceService);
    return MyServiceService;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"font-size: 30px; text-align:center\" >\n  <b>Page not found</b>\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/view1/view1.component.css":
/*!*******************************************!*\
  !*** ./src/app/view1/view1.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selectOpt{\n    color: black;\n    font-size: 3vw;\n}\n.option{\n    background-color: #F19F4D;\n    font-size: 4.5vw;\n    padding-left: 2%;\n}\n.card{\n    padding-left: 2%;\n    margin-top: 3%;\n    color:black;\n    margin-bottom: 3%;\n}\n.character{\nborder: 2px solid red;\n}\n.book{\n    border: 2px solid blue;\n}\n.house{\n    border: 2px solid green;\n}"

/***/ }),

/***/ "./src/app/view1/view1.component.html":
/*!********************************************!*\
  !*** ./src/app/view1/view1.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row option\">Select your option to get information :\n        <select class=\"selectOpt\" [(ngModel)]=\"selectedOption\" #i=\"ngModel\" name=\"selectedOption\" (change)=\"selectChangeHandler($event.target.value)\">\n          <option class=\"optionc\" *ngFor=\"let i of category\"  [value]=\"i\">{{i}}</option>\n        </select>\n      </div>\n      <div class=\"row\" *ngIf=\"allData?.length > 0\">\n        <div *ngFor=\"let data of allData; let i=index\" class=\"col-sm-12 \">\n          \n          <div *ngIf=\"house\" class=\"card house text-white bg-info mb-3\" style=\"max-width: 70rem;\">\n            <div class=\"card-header\">\n              <b>Name</b> : {{data.name}}</div>\n            <div class=\"card-body\">\n    \n              <p class=\"card-text\">\n                <b>Region</b> : {{data.region}}\n                <br>\n                <b>CoatOfArms</b> : {{data.coatOfArms}}\n              </p>\n            </div>\n            <div class=\"card-footer\">\n              <button type=\"button\" class=\"btn btn-info\" [routerLink]=\"['/view2','houses',i+1]\" >Details</button>\n            </div>\n          </div>\n    \n          <div *ngIf=\"character\" class=\"card character text-white bg-info mb-3\" style=\"max-width: 70rem;\">\n            <div class=\"card-header\">\n              <b>Name</b> : {{data.name}}</div>\n            <div class=\"card-body\">\n    \n              <p class=\"card-text\">\n                <b>Gender</b> : {{data.gender}}\n                <br>\n                <b>Culture</b> : {{data.culture}}\n              </p>\n            </div>\n            <div class=\"card-footer\">\n              <button type=\"button\" class=\"btn btn-info\" [routerLink]=\"['/view2','characters',i+1]\" >Details</button>\n            </div>\n          </div>\n    \n          <div *ngIf=\"book\" class=\"card book text-white bg-info mb-3\" style=\"max-width: 70rem;\">\n            <div class=\"card-header\">\n              <b>Name</b> : {{data.name}}</div>\n            <div class=\"card-body\">\n              <p class=\"card-text\">\n                <b>Authors</b> : {{data.authors}}\n                <br>\n                <b>Publisher</b> : {{data.publisher}}\n                <br>\n                <b>Released</b> : {{data.released | date}}\n                <br>\n                <b>Country</b> : {{data.country}}\n              </p>\n            </div>\n            <div class=\"card-footer\">\n              <button type=\"button\" class=\"btn btn-info\" [routerLink]=\"['/view2','books',i+1]\">Details</button>\n            </div>\n          </div>\n    \n    \n        </div>\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/view1/view1.component.ts":
/*!******************************************!*\
  !*** ./src/app/view1/view1.component.ts ***!
  \******************************************/
/*! exports provided: View1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View1Component", function() { return View1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var View1Component = /** @class */ (function () {
    function View1Component(httpService, router, route) {
        this.httpService = httpService;
        this.router = router;
        this.route = route;
        this.category = ['characters', 'books', 'houses']; // option available
        this.event = this.route.snapshot.paramMap.get('event');
        this.selectedOption = this.event;
        this.character = false;
        this.house = true;
        this.book = false;
        this.requestToGetData(this.selectedOption);
    }
    View1Component.prototype.ngOnInit = function () {
    };
    // function to get all data of one option book/character/house at time
    View1Component.prototype.requestToGetData = function (type) {
        var _this = this;
        // console.log("THIS TIME :::: "+type);
        if (type == 'houses') {
            this.house = true;
            this.character = false;
            this.book = false;
        }
        else if (type == 'books') {
            this.book = true;
            this.character = false;
            this.house = false;
        }
        else {
            this.character = true;
            this.house = false;
            this.book = false;
        }
        this.allData = this.httpService.getAllData(type).subscribe(function (data) {
            _this.allData = data;
            console.log("view1 all data : " + _this.allData);
        }, function (error) {
            console.log("some error has occured.");
            console.log(error.errorMessage);
        });
    };
    // function ill trigger whenever an option is selected from dropdown
    View1Component.prototype.selectChangeHandler = function (event) {
        //update the ui
        console.log("Event is change happen.");
        var givenInput = this.selectedOption;
        //  console.log("Given input is :  "+givenInput);
        this.requestToGetData(givenInput);
        this.router.navigate(['view1/', event]); // got to view page
        //  this.view1.makeRequest();
    };
    View1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view1',
            template: __webpack_require__(/*! ./view1.component.html */ "./src/app/view1/view1.component.html"),
            styles: [__webpack_require__(/*! ./view1.component.css */ "./src/app/view1/view1.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], View1Component);
    return View1Component;
}());



/***/ }),

/***/ "./src/app/view2/view2.component.css":
/*!*******************************************!*\
  !*** ./src/app/view2/view2.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n    padding-left: 1%;\n    margin-top: 3%;\n    margin-left: 3%;\n    color:black;\n    margin-bottom: 3%;\n    margin-right: 3%;\n    padding-right: 1%;\n    \n}\n.urls{\n    padding-left: 2%;\n    padding-right: 2%;\n}\n.character{\n    border: 2px solid red;\n    }\n.book{\n        border: 2px solid blue;\n    }\n.house{\n        border: 2px solid green;\n    }\n.btn{\n      margin-bottom: 2%;\n      margin-top:1%;\n   } "

/***/ }),

/***/ "./src/app/view2/view2.component.html":
/*!********************************************!*\
  !*** ./src/app/view2/view2.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" *ngIf=\"currentData\">\n    <div *ngIf='book' class=\"card book text-white bg-info mb-3\" style=\"max-width: 100rem;\">\n      <div class=\"card-header\">\n        <b>Url</b> : {{currentData.url}}</div>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">\n          <b>Name</b> : {{currentData.name}}</h5>\n        <p class=\"card-text\">\n          <b>isbn</b> : {{currentData.isbn}}\n          <br>\n          <b>Authors</b> : {{currentData.authors}}\n          <br>\n          <b>NumberOfPages</b> : {{currentData.numberOfPages}}\n          <br>\n          <b>Publisher</b> : {{currentData.publisher}}\n          <br>\n          <b>Country</b> : {{currentData.country}}\n          <br>\n          <b>MediaType</b> : {{currentData.mediaType}}\n          <br>\n          <b>Released</b> : {{currentData.released | date}}\n          <br>\n          <b>Character's urls </b> :\n          <br>\n          <span class=\"urls\" *ngFor=\"let urls of currentData.characters; let last=last\">\n            {{urls}}{{last?'':','}}\n            <br>\n          </span>\n          <b>PovCharacters's urls </b> :\n          <br>\n          <span class=\"urls\" *ngFor=\"let urls of currentData.povCharacters; let last=last\">\n            {{urls}}{{last?'':','}}\n            <br>\n          </span>\n        </p>\n\n      </div>\n      <div class=\"card-footer\">\n          <button type=\"button\" class=\"btn btn-info\" (click)=\"goBackFunction()\">go back</button>\n      </div>\n    </div>\n    <div *ngIf='character' class=\"card character text-white bg-info mb-3\" style=\"max-width: 100rem;\">\n      <div class=\"card-header\">\n        <b>Url</b> : {{currentData.url}}</div>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">\n          <b>Name</b> : {{currentData.name}}</h5>\n        <p class=\"card-text\">\n          <b>Gender</b> : {{currentData.gender}}\n          <br>\n          <b>Culture</b> : {{currentData.culture}}\n          <br>\n          <b>Born</b> : {{currentData.born}}\n          <br>\n          <b>Died</b> : {{currentData.died}}\n          <br>\n          <b>Titles</b> :<br>\n          <span class=\"urls\" *ngFor=\"let title of currentData.titles; let last=last\">\n            {{title}}{{last?'':','}}\n            <br>\n          </span>\n          <br>\n          <b>Aliases</b> : <br>\n          <span class=\"title\" *ngFor=\"let title of currentData.aliases; let last=last\"> \n            {{title}}{{last?'':','}}\n          <br>\n          </span>\n          <br>\n          <b>Father</b> : {{currentData.father}}\n          <br>\n          <b>Mother</b> : {{currentData.mother}}\n          <br>\n          <b>Spouse</b> : {{currentData.spouse}}\n          <br>\n          <b>Allegiances</b> :\n          <br>\n          <span class=\"urls\" *ngFor=\"let urls of currentData.allegiances; let last=last\">\n            {{urls}}{{last?'':','}}\n            <br>\n          </span><br>\n          <b>Books's urls for character</b> :\n          <br>\n          <span class=\"urls\" *ngFor=\"let urls of currentData.books; let last=last\">\n            {{urls}}{{last?'':','}}\n            <br>\n          </span><br>\n          <b>Povbooks's urls for character</b> :<br>\n          <span class=\"urls\" *ngFor=\"let urls of currentData.povBooks; let last=last\">\n              {{urls}}{{last?'':','}}\n              <br>\n            </span><br>\n            <b>TvSeries</b> :<br>\n          <span class=\"urls\" *ngFor=\"let urls of currentData.tvSeries; let last=last\">\n              {{urls}}{{last?'':','}}\n              <br>\n            </span><br>\n            <b>PlayedBy</b> :\n            <span class=\"urls\" *ngFor=\"let urls of currentData.playedBy; let last=last\">\n                {{urls}}{{last?'':','}}\n                <br>\n              </span>\n        </p>\n\n      </div>\n      <div class=\"card-footer\">\n          <button type=\"button\" class=\"btn btn-info\" (click)=\"goBackFunction()\">go back</button>\n      </div>\n    </div>\n    <div *ngIf='house' class=\"card house text-white bg-info mb-3\" style=\"max-width: 100rem;\">\n      <div class=\"card-header\">\n        <b>Url</b> : {{currentData.url}}</div>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">\n          <b>Name</b> : {{currentData.name}}</h5>\n        <p class=\"card-text\">\n          <b>Region</b> : {{currentData.region}}\n          <br>\n          <b>CoatOfArms</b> : {{currentData.coatOfArms}}\n          <br>\n          <b>Words</b> : {{currentData.words}}\n          <br>\n          <b>Titles</b> :<br>\n          <span class=\"urls\" *ngFor=\"let title of currentData.titles; let last=last\">\n            {{title}}{{last?'':','}}\n            <br>\n          </span>\n          <br>\n          <b>Seats</b> :<br>\n          <span class=\"urls\" *ngFor=\"let seat of currentData.seats; let last=last\">\n            {{seat}}{{last?'':','}}\n            <br>\n          </span>\n          <br>\n          <b>CurrentLord</b> : {{currentData.currentLord}}\n          <br>\n          <b>Heir</b> : {{currentData.heir}}\n          <br>\n          <b>OverLord</b> : {{currentData.overLord}}\n          <br>\n          <b>Founded</b> : {{currentData.founded}}\n          <br>\n          <b>Founder</b> : {{currentData.founder}}\n          <br>\n          <b>DiedOut</b> : {{currentData.diedOut}}\n          <br>\n          <b>AncestralWeapons </b> : <br>\n          <span class=\"urls\" *ngFor=\"let weapon of currentData.ancestralWeapons; let last=last\">\n            {{weapon}}{{last?'':','}}\n            <br>\n          </span>\n          <b>CadetBranches </b> :<br>\n          <span class=\"urls\" *ngFor=\"let branch of currentData.cadetBranches; let last=last\">\n            {{branch}}{{last?'':','}}\n            <br>\n          </span>\n          <br>\n          <b>SwornMembers</b>:<br>\n          <span class=\"urls\" *ngFor=\"let member of currentData.swornMembers; let last=last\">\n            {{member}}{{last?'':','}}\n            <br>\n          </span>\n        </p>\n\n      </div>\n      <div class=\"card-footer\">\n          <button type=\"button\" class=\"btn btn-info\" (click)=\"goBackFunction()\">go back</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/view2/view2.component.ts":
/*!******************************************!*\
  !*** ./src/app/view2/view2.component.ts ***!
  \******************************************/
/*! exports provided: View2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View2Component", function() { return View2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var View2Component = /** @class */ (function () {
    function View2Component(http, route, router, location) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.location = location;
        this.character = false;
        this.house = true;
        this.book = false;
    }
    View2Component.prototype.ngOnInit = function () {
        this.currentId = Number(this.route.snapshot.paramMap.get('id'));
        this.type = this.route.snapshot.paramMap.get('type');
        if (this.type == 'houses') {
            this.house = true;
            this.character = false;
            this.book = false;
        }
        else if (this.type == 'books') {
            this.book = true;
            this.character = false;
            this.house = false;
        }
        else {
            this.character = true;
            this.house = false;
            this.book = false;
        }
        console.log("this time id : " + this.currentId);
        this.func(this.currentId, this.type);
    };
    // function to get data of particular book/character/house
    View2Component.prototype.func = function (id, type) {
        var _this = this;
        this.currentData = this.http.getDataForView(this.type, this.currentId).subscribe(function (data) {
            console.log(data);
            _this.currentData = data;
        }, function (error) {
            console.log("some error has occured.");
            console.log(error.errorMessage);
        });
        console.log(this.currentData);
    };
    // function to go back to previous page
    View2Component.prototype.goBackFunction = function () {
        return this.location.back();
    };
    View2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view2',
            template: __webpack_require__(/*! ./view2.component.html */ "./src/app/view2/view2.component.html"),
            styles: [__webpack_require__(/*! ./view2.component.css */ "./src/app/view2/view2.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], View2Component);
    return View2Component;
}());



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

module.exports = __webpack_require__(/*! /home/msc/Desktop/basic-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map