System.register(['@angular/core', './routing-service', './core-web-service', './dot-router-service'], function(exports_1, context_1) {
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
    var core_1, routing_service_1, core_web_service_1, dot_router_service_1;
    var NotLicensedService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (routing_service_1_1) {
                routing_service_1 = routing_service_1_1;
            },
            function (core_web_service_1_1) {
                core_web_service_1 = core_web_service_1_1;
            },
            function (dot_router_service_1_1) {
                dot_router_service_1 = dot_router_service_1_1;
            }],
        execute: function() {
            NotLicensedService = (function () {
                function NotLicensedService(routingService, coreWebService, router) {
                    this.routingService = routingService;
                    this.coreWebService = coreWebService;
                    this.router = router;
                }
                NotLicensedService.prototype.init = function () {
                    var _this = this;
                    this.coreWebService.subscribeTo(403).subscribe(function (res) { return _this.router.goToNotLicensed(); });
                };
                NotLicensedService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [routing_service_1.RoutingService, core_web_service_1.CoreWebService, dot_router_service_1.DotRouterService])
                ], NotLicensedService);
                return NotLicensedService;
            }());
            exports_1("NotLicensedService", NotLicensedService);
        }
    }
});
//# sourceMappingURL=not-licensed-service.js.map