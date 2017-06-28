System.register(['@angular/core', './login-service', './dot-router-service'], function(exports_1, context_1) {
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
    var core_1, login_service_1, dot_router_service_1;
    var RoutingPublicAuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (dot_router_service_1_1) {
                dot_router_service_1 = dot_router_service_1_1;
            }],
        execute: function() {
            RoutingPublicAuthService = (function () {
                function RoutingPublicAuthService(router, loginService) {
                    this.router = router;
                    this.loginService = loginService;
                }
                RoutingPublicAuthService.prototype.canActivate = function (route, state) {
                    var _this = this;
                    return this.loginService.isLogin$.map(function (isLogin) {
                        if (isLogin) {
                            _this.router.goToMain();
                            return false;
                        }
                        else {
                            return true;
                        }
                    }).take(1);
                };
                RoutingPublicAuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [dot_router_service_1.DotRouterService, login_service_1.LoginService])
                ], RoutingPublicAuthService);
                return RoutingPublicAuthService;
            }());
            exports_1("RoutingPublicAuthService", RoutingPublicAuthService);
        }
    }
});
//# sourceMappingURL=routing-public-auth-service.js.map