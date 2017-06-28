System.register(['@angular/core', './routing-service', 'rxjs/Rx', './system/dotcms-config', './login-service', './dot-router-service'], function(exports_1, context_1) {
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
    var core_1, routing_service_1, Rx_1, dotcms_config_1, login_service_1, dot_router_service_1;
    var RoutingPrivateAuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (routing_service_1_1) {
                routing_service_1 = routing_service_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (dotcms_config_1_1) {
                dotcms_config_1 = dotcms_config_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (dot_router_service_1_1) {
                dot_router_service_1 = dot_router_service_1_1;
            }],
        execute: function() {
            RoutingPrivateAuthService = (function () {
                function RoutingPrivateAuthService(router, routingService, loginService, dotcmsConfig) {
                    this.router = router;
                    this.routingService = routingService;
                    this.loginService = loginService;
                    this.dotcmsConfig = dotcmsConfig;
                }
                RoutingPrivateAuthService.prototype.canActivate = function (route, state) {
                    var _this = this;
                    return Rx_1.Observable.create(function (obs) {
                        _this.loginService.isLogin$.subscribe(function (isLogin) {
                            if (isLogin) {
                                _this.dotcmsConfig.getConfig().subscribe(function (configParams) {
                                    if (state.url.indexOf('home') > -1) {
                                        if (_this.routingService.firstPortlet) {
                                            _this.goToFirstPortlet(obs);
                                        }
                                        else {
                                            _this.routingService.menusChange$.subscribe(function (res) {
                                                _this.goToFirstPortlet(obs);
                                            });
                                        }
                                    }
                                    else {
                                        _this.checkAccess(state.url).subscribe(function (checkAccess) {
                                            if (!checkAccess) {
                                                _this.router.goToMain();
                                            }
                                            obs.next(checkAccess);
                                        });
                                    }
                                });
                            }
                            else {
                                _this.router.goToLogin();
                                obs.next(false);
                            }
                        });
                    }).take(1);
                };
                RoutingPrivateAuthService.prototype.goToFirstPortlet = function (obs) {
                    this.router.goToURL("/c/" + this.routingService.firstPortlet);
                    obs.next(false);
                };
                RoutingPrivateAuthService.prototype.checkAccess = function (url) {
                    var _this = this;
                    return Rx_1.Observable.create(function (obs) {
                        if (_this.routingService.currentMenu) {
                            obs.next(_this.check(url));
                        }
                        else {
                            _this.routingService.menusChange$.subscribe(function () { return obs.next(_this.check(url)); });
                        }
                    }).take(1);
                };
                RoutingPrivateAuthService.prototype.check = function (url) {
                    var isRouteLoaded = true;
                    if (url !== '/c/pl') {
                        isRouteLoaded = this.routingService.isPortlet(url);
                        if (isRouteLoaded) {
                            this.routingService.setCurrentPortlet(url);
                        }
                        else {
                            this.router.goToLogin();
                        }
                    }
                    return isRouteLoaded;
                };
                RoutingPrivateAuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [dot_router_service_1.DotRouterService, routing_service_1.RoutingService, login_service_1.LoginService, dotcms_config_1.DotcmsConfig])
                ], RoutingPrivateAuthService);
                return RoutingPrivateAuthService;
            }());
            exports_1("RoutingPrivateAuthService", RoutingPrivateAuthService);
        }
    }
});
//# sourceMappingURL=routing-private-auth-service.js.map