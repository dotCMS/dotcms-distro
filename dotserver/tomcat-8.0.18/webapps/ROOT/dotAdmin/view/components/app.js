System.register(['@angular/core', '../../api/services/system/dotcms-config', '../../api/services/not-licensed-service'], function(exports_1, context_1) {
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
    var core_1, dotcms_config_1, not_licensed_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dotcms_config_1_1) {
                dotcms_config_1 = dotcms_config_1_1;
            },
            function (not_licensed_service_1_1) {
                not_licensed_service_1 = not_licensed_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(dotcmsConfig, notLicensedService) {
                    this.dotcmsConfig = dotcmsConfig;
                    notLicensedService.init();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        directives: [],
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        moduleId: __moduleName,
                        providers: [],
                        selector: 'app',
                        styleUrls: ['app.css'],
                        templateUrl: ['app.html']
                    }), 
                    __metadata('design:paramtypes', [dotcms_config_1.DotcmsConfig, not_licensed_service_1.NotLicensedService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.js.map