System.register(['@angular/core', '../../../../api/services/routing-service'], function(exports_1, context_1) {
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
    var core_1, routing_service_1;
    var MainNavigation;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (routing_service_1_1) {
                routing_service_1 = routing_service_1_1;
            }],
        execute: function() {
            MainNavigation = (function () {
                function MainNavigation(routingService) {
                    var _this = this;
                    this.routingService = routingService;
                    this.open = true;
                    if (routingService.menus) {
                        this.menuItems = routingService.menus;
                    }
                    routingService.menusChange$.subscribe(function (menu) {
                        _this.menuItems = menu;
                    });
                    routingService.currentPortlet$.subscribe(function (id) {
                        _this.open = !_this.open;
                        _this.menuItemIdActive = id;
                        _this.menuActiveTabName = _this.getMenuSelected(id).tabName;
                    });
                }
                /**
                 * Change or refresh the portlets from the main menu
                 * @param menuItem portlet url
                 */
                MainNavigation.prototype.gotToPage = function (link) {
                    this.routingService.changeRefreshPortlet(link);
                };
                MainNavigation.prototype.getMenuSelected = function (menuItemSelectedId) {
                    return this.menuItems.filter(function (menu) { return menu.menuItems.filter(function (menuItem) { return menuItem.id === menuItemSelectedId; }).length > 0; })[0];
                };
                MainNavigation = __decorate([
                    core_1.Component({
                        encapsulation: core_1.ViewEncapsulation.None,
                        moduleId: __moduleName,
                        providers: [],
                        selector: 'dot-main-nav',
                        styleUrls: ['main-navigation.css'],
                        templateUrl: ['main-navigation.html'],
                    }), 
                    __metadata('design:paramtypes', [routing_service_1.RoutingService])
                ], MainNavigation);
                return MainNavigation;
            }());
            exports_1("MainNavigation", MainNavigation);
        }
    }
});
//# sourceMappingURL=main-navigation.js.map