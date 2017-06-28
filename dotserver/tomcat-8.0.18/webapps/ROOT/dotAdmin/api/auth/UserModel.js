System.register(['@angular/core', "../services/logger.service", "../../view/constants"], function(exports_1, context_1) {
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
    var core_1, logger_service_1, constants_1;
    var UserModel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }],
        execute: function() {
            UserModel = (function () {
                function UserModel(loggerService) {
                    this.loggerService = loggerService;
                    this.suppressAlerts = false;
                    this.locale = constants_1.CONSTANTS.DEFAULT_LOCALE; // default to 'en-US'
                    try {
                        var url = window.location.search.substring(1);
                        this.locale = this.checkQueryForUrl(url);
                    }
                    catch (e) {
                        this.loggerService.error("Could not set locale from URL.");
                    }
                }
                UserModel.prototype.checkQueryForUrl = function (locationQuery) {
                    var locale = this.locale;
                    if (locationQuery && locationQuery.length) {
                        var q = locationQuery;
                        var token = 'locale=';
                        var idx = q.indexOf(token);
                        if (idx >= 0) {
                            var end = q.indexOf('&', idx);
                            end = end != -1 ? end : q.indexOf('#', idx);
                            end = end != -1 ? end : q.length;
                            locale = q.substring(idx + token.length, end);
                        }
                    }
                    return locale;
                };
                UserModel = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], UserModel);
                return UserModel;
            }());
            exports_1("UserModel", UserModel);
        }
    }
});
//# sourceMappingURL=UserModel.js.map