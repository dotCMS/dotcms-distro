System.register(['./components/app.module', '@angular/platform-browser-dynamic', '@angular/core', './constants'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_module_1, platform_browser_dynamic_1, core_1, constants_1;
    var platform;
    return {
        setters:[
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }],
        execute: function() {
            if (constants_1.CONSTANTS.ENV === 'PROD') {
                core_1.enableProdMode();
            }
            platform = platform_browser_dynamic_1.platformBrowserDynamic();
            platform.bootstrapModule(app_module_1.AppModule);
        }
    }
});
//# sourceMappingURL=main.js.map