System.register(['@angular/core', './protocol', '../system/dotcms-config', '../logger.service', './socket', 'rxjs/Rx', '../core-web-service'], function(exports_1, context_1) {
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
    var core_1, protocol_1, dotcms_config_1, logger_service_1, socket_1, Rx_1, core_web_service_1;
    var SocketFactory;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (protocol_1_1) {
                protocol_1 = protocol_1_1;
            },
            function (dotcms_config_1_1) {
                dotcms_config_1 = dotcms_config_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (socket_1_1) {
                socket_1 = socket_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (core_web_service_1_1) {
                core_web_service_1 = core_web_service_1_1;
            }],
        execute: function() {
            SocketFactory = (function () {
                function SocketFactory(dotcmsConfig, loggerService, coreWebService) {
                    this.dotcmsConfig = dotcmsConfig;
                    this.loggerService = loggerService;
                    this.coreWebService = coreWebService;
                }
                SocketFactory.prototype.createSocket = function () {
                    var _this = this;
                    this.loggerService.debug('Creating socket object');
                    return Rx_1.Observable.create(function (observer) {
                        _this.dotcmsConfig.getConfig().subscribe(function (configParams) {
                            var url = new protocol_1.Url(configParams.websocketProtocol, configParams.websocketBaseURL, configParams.websocketsSystemEventsEndpoint);
                            if (!_this.socket) {
                                _this.socket = new socket_1.EventsSocket(url, configParams, _this.loggerService, _this.coreWebService);
                            }
                            observer.next(_this.socket);
                            observer.complete();
                        });
                    });
                };
                SocketFactory.prototype.clean = function () {
                    this.socket = null;
                };
                SocketFactory = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [dotcms_config_1.DotcmsConfig, logger_service_1.LoggerService, core_web_service_1.CoreWebService])
                ], SocketFactory);
                return SocketFactory;
            }());
            exports_1("SocketFactory", SocketFactory);
        }
    }
});
//# sourceMappingURL=socket-factory.js.map