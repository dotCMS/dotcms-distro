System.register(['@angular/core', 'angular2-logger/core', '../util/config', '../util/string.utils'], function(exports_1, context_1) {
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
    var core_1, core_2, config_1, string_utils_1;
    var LoggerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (string_utils_1_1) {
                string_utils_1 = string_utils_1_1;
            }],
        execute: function() {
            /**
             * LoggerService to log.  Allows logger to be changed at runtime
             * To set the logger level in the console run logger.level=logger.Level.DEBUG
             */
            LoggerService = (function () {
                function LoggerService(logger, config, stringUtils) {
                    this.logger = logger;
                    this.config = config;
                    this.stringUtils = stringUtils;
                    this.isProduction = true;
                    console.log('Setting the logger...');
                    this.isProduction = this.config.isProduction();
                    if (!this.isProduction) {
                        console.log('Developer mode logger on');
                        logger.level = logger.Level.LOG;
                    }
                }
                LoggerService.prototype.info = function (message) {
                    var optionalParams = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        optionalParams[_i - 1] = arguments[_i];
                    }
                    if (optionalParams && optionalParams.length > 0) {
                        this.logger.info(this.wrapMessage(message), optionalParams);
                    }
                    else {
                        this.logger.info(this.wrapMessage(message));
                    }
                };
                LoggerService.prototype.error = function (message) {
                    var optionalParams = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        optionalParams[_i - 1] = arguments[_i];
                    }
                    if (optionalParams && optionalParams.length > 0) {
                        this.logger.error(this.wrapMessage(message), optionalParams);
                    }
                    else {
                        this.logger.error(this.wrapMessage(message));
                    }
                };
                LoggerService.prototype.warn = function (message) {
                    var optionalParams = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        optionalParams[_i - 1] = arguments[_i];
                    }
                    if (optionalParams && optionalParams.length > 0) {
                        this.logger.warn(this.wrapMessage(message), optionalParams);
                    }
                    else {
                        this.logger.warn(this.wrapMessage(message));
                    }
                };
                LoggerService.prototype.debug = function (message) {
                    var optionalParams = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        optionalParams[_i - 1] = arguments[_i];
                    }
                    if (optionalParams && optionalParams.length > 0) {
                        this.logger.debug(this.wrapMessage(message), optionalParams);
                    }
                    else {
                        this.logger.debug(this.wrapMessage(message));
                    }
                };
                LoggerService.prototype.wrapMessage = function (message) {
                    // on prod, we do not attach the caller.
                    return this.isProduction ? message :
                        this.getCaller() + '>> ' + message;
                };
                LoggerService.prototype.getCaller = function () {
                    var caller = 'unknown';
                    try {
                        throw new Error();
                    }
                    catch (e) {
                        caller = this.cleanCaller(this.stringUtils.getLine(e.stack, 4));
                    }
                    return caller;
                };
                LoggerService.prototype.cleanCaller = function (caller) {
                    return (caller) ? caller.trim().substr(3) : 'unknown';
                };
                LoggerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [core_2.Logger, config_1.Config, string_utils_1.StringUtils])
                ], LoggerService);
                return LoggerService;
            }());
            exports_1("LoggerService", LoggerService);
        }
    }
});
//# sourceMappingURL=logger.service.js.map