System.register(['@angular/core', '../../view/constants', './httpRequestUtils'], function(exports_1, context_1) {
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
    var core_1, constants_1, httpRequestUtils_1;
    var DEV_MODE_PARAM, Config;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            },
            function (httpRequestUtils_1_1) {
                httpRequestUtils_1 = httpRequestUtils_1_1;
            }],
        execute: function() {
            DEV_MODE_PARAM = 'devMode';
            /**
             * Encapsulates generic configuration, such as the dev mode, etc.
             * @author jsanca
             */
            Config = (function () {
                function Config() {
                    this.httpRequestUtils = new httpRequestUtils_1.HttpRequestUtils();
                }
                /**
                 * Determine if angular is running in a Production way
                 * @returns {boolean}
                 */
                Config.prototype.isProduction = function () {
                    var runningMode = constants_1.CONSTANTS.ENV;
                    var devMode = this.httpRequestUtils.getQueryStringParam(DEV_MODE_PARAM);
                    if (devMode) {
                        console.log('Found a parameter in the url with a devMode: ', devMode);
                        runningMode = devMode === 'on' ? constants_1.CONSTANTS.DEV_MODE : constants_1.CONSTANTS.PROD_MODE;
                    }
                    return runningMode === constants_1.CONSTANTS.PROD_MODE;
                }; // isProduction.
                Config = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Config);
                return Config;
            }());
            exports_1("Config", Config); // E:O:F:Config
        }
    }
});
//# sourceMappingURL=config.js.map