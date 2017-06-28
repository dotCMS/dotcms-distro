System.register(['../core-web-service', '@angular/http', '@angular/core', 'rxjs/Rx', '../logger.service'], function(exports_1, context_1) {
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
    var core_web_service_1, http_1, core_1, Rx_1, logger_service_1;
    var DEFAULT_REST_PAGE_COUNT, DOTCMS_WEBSOCKET_RECONNECT_TIME, DOTCMS_WEBSOCKET_ENDPOINTS, WEBSOCKET_SYSTEMEVENTS_ENDPOINT, DOTCMS_WEBSOCKET_BASEURL, DOTCMS_WEBSOCKET_PROTOCOL, DOTCMS_DISABLE_WEBSOCKET_PROTOCOL, DotcmsConfig;
    return {
        setters:[
            function (core_web_service_1_1) {
                core_web_service_1 = core_web_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            /**
             * Created by josecastro on 7/29/16.
             *
             * Wraps the configuration properties for dotCMS in order to provide an
             * easier way to access the information.
             *
             */
            DEFAULT_REST_PAGE_COUNT = 'DEFAULT_REST_PAGE_COUNT';
            DOTCMS_WEBSOCKET_RECONNECT_TIME = 'dotcms.websocket.reconnect.time';
            DOTCMS_WEBSOCKET_ENDPOINTS = 'dotcms.websocket.endpoints';
            WEBSOCKET_SYSTEMEVENTS_ENDPOINT = 'websocket.systemevents.endpoint';
            DOTCMS_WEBSOCKET_BASEURL = 'dotcms.websocket.baseurl';
            DOTCMS_WEBSOCKET_PROTOCOL = 'dotcms.websocket.protocol';
            DOTCMS_DISABLE_WEBSOCKET_PROTOCOL = 'dotcms.websocket.disable';
            DotcmsConfig = (function () {
                /**
                 * Initializes this class with the dotCMS core configuration parameters.
                 *
                 * @param configParams - The configuration properties for the current instance.
                 */
                function DotcmsConfig(coreWebService, loggerService) {
                    this.coreWebService = coreWebService;
                    this.loggerService = loggerService;
                    this.waiting = [];
                    this.configUrl = 'v1/appconfiguration';
                    this.loadConfig();
                }
                DotcmsConfig.prototype.getConfig = function () {
                    var _this = this;
                    return Rx_1.Observable.create(function (obs) {
                        if (_this.configParams) {
                            obs.next(_this.configParams);
                        }
                        else {
                            _this.waiting.push(obs);
                        }
                    });
                };
                DotcmsConfig.prototype.loadConfig = function () {
                    var _this = this;
                    this.loggerService.debug('Loading configuration on: ', this.configUrl);
                    this.coreWebService.requestView({
                        method: http_1.RequestMethod.Get,
                        url: this.configUrl
                    }).pluck('entity').subscribe(function (res) {
                        _this.loggerService.debug('Configuration Loaded!', res);
                        _this.configParams = {
                            defaultRestPageCount: res.config[DEFAULT_REST_PAGE_COUNT],
                            disabledWebsockets: res.config[DOTCMS_DISABLE_WEBSOCKET_PROTOCOL],
                            menu: res.menu,
                            websocketBaseURL: res.config[DOTCMS_WEBSOCKET_BASEURL],
                            websocketEndpoints: res.config[DOTCMS_WEBSOCKET_ENDPOINTS],
                            websocketProtocol: res.config[DOTCMS_WEBSOCKET_PROTOCOL],
                            websocketReconnectTime: res.config[DOTCMS_WEBSOCKET_RECONNECT_TIME],
                            websocketsSystemEventsEndpoint: res.config[DOTCMS_WEBSOCKET_ENDPOINTS][WEBSOCKET_SYSTEMEVENTS_ENDPOINT],
                        };
                        _this.loggerService.debug('this.configParams', _this.configParams);
                        _this.waiting.forEach(function (obs) { return obs.next(_this.configParams); });
                        _this.waiting = null;
                        return res;
                    });
                };
                DotcmsConfig = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [core_web_service_1.CoreWebService, logger_service_1.LoggerService])
                ], DotcmsConfig);
                return DotcmsConfig;
            }());
            exports_1("DotcmsConfig", DotcmsConfig);
        }
    }
});
//# sourceMappingURL=dotcms-config.js.map