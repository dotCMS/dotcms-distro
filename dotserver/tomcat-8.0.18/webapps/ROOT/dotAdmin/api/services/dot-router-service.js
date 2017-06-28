System.register(['@angular/core', '@angular/router', './login-service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, login_service_1;
    var DotRouterService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            DotRouterService = (function () {
                function DotRouterService(router, loginService) {
                    this.router = router;
                    this.loginService = loginService;
                }
                DotRouterService.prototype.goToMain = function () {
                    this.router.navigate(['/c']);
                };
                DotRouterService.prototype.goToLogin = function (parameters) {
                    this.router.navigate(['/public/login'], parameters);
                };
                DotRouterService.prototype.goToURL = function (url) {
                    this.router.navigate([url]);
                };
                DotRouterService.prototype.isPublicUrl = function (url) {
                    return url.startsWith('/public');
                };
                DotRouterService.prototype.isFromCoreUrl = function (url) {
                    return url.startsWith('/fromCore');
                };
                DotRouterService.prototype.isRootUrl = function (url) {
                    return url === '/';
                };
                DotRouterService.prototype.goToRoot = function () {
                    if (!this.loginService.isLogin) {
                        this.goToLogin();
                    }
                    else {
                        this.goToMain();
                    }
                };
                DotRouterService.prototype.gotoPortlet = function (portletId) {
                    this.router.navigate([("c/" + portletId.replace(' ', '_'))]);
                };
                DotRouterService.prototype.goToForgotPassword = function () {
                    this.router.navigate(['/public/forgotPassword']);
                };
                DotRouterService.prototype.goToNotLicensed = function () {
                    this.router.navigate(['c/notLicensed']);
                };
                DotRouterService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService])
                ], DotRouterService);
                return DotRouterService;
            }());
            exports_1("DotRouterService", DotRouterService);
        }
    }
});
//# sourceMappingURL=dot-router-service.js.map