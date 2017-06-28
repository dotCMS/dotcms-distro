System.register(['./core-web-service', '@angular/core', './login-service', './dotcms-events-service', '@angular/http', './dot-router-service', 'rxjs/Subject'], function(exports_1, context_1) {
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
    var core_web_service_1, core_1, login_service_1, dotcms_events_service_1, http_1, dot_router_service_1, Subject_1;
    var RoutingService;
    return {
        setters:[
            function (core_web_service_1_1) {
                core_web_service_1 = core_web_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (dotcms_events_service_1_1) {
                dotcms_events_service_1 = dotcms_events_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (dot_router_service_1_1) {
                dot_router_service_1 = dot_router_service_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            RoutingService = (function () {
                // TODO: I think we should be able to remove the routing injection
                function RoutingService(loginService, router, coreWebService, dotcmsEventsService) {
                    this.router = router;
                    this.coreWebService = coreWebService;
                    this._menusChange$ = new Subject_1.Subject();
                    this._portletUrlSource$ = new Subject_1.Subject();
                    this._currentPortlet$ = new Subject_1.Subject();
                    this.urlMenus = 'v1/CORE_WEB/menu';
                    this.portlets = new Map();
                    loginService.watchUser(this.loadMenus.bind(this));
                    dotcmsEventsService.subscribeTo('UPDATE_PORTLET_LAYOUTS').subscribe(this.loadMenus.bind(this));
                }
                Object.defineProperty(RoutingService.prototype, "currentPortletId", {
                    get: function () {
                        return this._currentPortletId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RoutingService.prototype, "currentMenu", {
                    get: function () {
                        return this.menus;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RoutingService.prototype, "menusChange$", {
                    get: function () {
                        return this._menusChange$.asObservable();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RoutingService.prototype, "portletUrl$", {
                    get: function () {
                        return this._portletUrlSource$.asObservable();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RoutingService.prototype, "firstPortlet", {
                    get: function () {
                        var porlets = this.portlets.entries().next().value;
                        return porlets ? porlets[0] : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                RoutingService.prototype.addPortletURL = function (portletId, url) {
                    this.portlets.set(portletId.replace(' ', '_'), url);
                };
                RoutingService.prototype.getPortletURL = function (portletId) {
                    return this.portlets.get(portletId);
                };
                RoutingService.prototype.goToPortlet = function (portletId) {
                    this.router.gotoPortlet(portletId);
                    this._currentPortletId = portletId;
                };
                RoutingService.prototype.isPortlet = function (url) {
                    var urlSplit = url.split('/');
                    var id = urlSplit[urlSplit.length - 1];
                    if (id.indexOf('?') >= 0) {
                        id = id.substr(0, id.indexOf('?'));
                    }
                    return this.portlets.has(id);
                };
                RoutingService.prototype.setCurrentPortlet = function (url) {
                    var urlSplit = url.split('/');
                    var id = urlSplit[urlSplit.length - 1];
                    if (id.indexOf('?') >= 0) {
                        id = id.substr(0, id.indexOf('?'));
                    }
                    this._currentPortletId = id;
                    this._currentPortlet$.next(id);
                };
                Object.defineProperty(RoutingService.prototype, "currentPortlet$", {
                    get: function () {
                        return this._currentPortlet$;
                    },
                    enumerable: true,
                    configurable: true
                });
                RoutingService.prototype.setMenus = function (menus) {
                    this.menus = menus;
                    if (this.menus.length) {
                        this.portlets = new Map();
                        for (var i = 0; i < this.menus.length; i++) {
                            var menu = this.menus[i];
                            for (var k = 0; k < menu.menuItems.length; k++) {
                                var subMenuItem = menu.menuItems[k];
                                if (subMenuItem.angular) {
                                    this.portlets.set(subMenuItem.id, subMenuItem.url);
                                }
                                else {
                                    subMenuItem.menuLink = '/c/' + subMenuItem.id;
                                    this.portlets.set(subMenuItem.id, subMenuItem.url);
                                }
                            }
                        }
                        this._menusChange$.next(this.menus);
                    }
                };
                /**
                 * Refresh the portlet displayed. with the
                 * @param url portlet url
                 */
                RoutingService.prototype.changeRefreshPortlet = function (url) {
                    this._portletUrlSource$.next(url);
                };
                RoutingService.prototype.loadMenus = function () {
                    var _this = this;
                    this.coreWebService.requestView({
                        method: http_1.RequestMethod.Get,
                        url: this.urlMenus,
                    }).subscribe(function (response) {
                        _this.setMenus(response.entity);
                    }, function (error) { return _this._menusChange$.error(error); });
                };
                RoutingService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, dot_router_service_1.DotRouterService, core_web_service_1.CoreWebService, dotcms_events_service_1.DotcmsEventsService])
                ], RoutingService);
                return RoutingService;
            }());
            exports_1("RoutingService", RoutingService);
        }
    }
});
//# sourceMappingURL=routing-service.js.map