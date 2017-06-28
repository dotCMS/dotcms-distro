System.register(['@angular/http', 'rxjs/Rx', '@angular/core', 'rxjs/Subject', '../system/http-response-util', '../persistence/ApiRoot', './response-view', "./logger.service"], function(exports_1, context_1) {
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
    var http_1, Rx_1, core_1, Subject_1, http_response_util_1, ApiRoot_1, response_view_1, logger_service_1;
    var RULE_CREATE, RULE_DELETE, RULE_UPDATE_NAME, RULE_UPDATE_ENABLED_STATE, V_RULE_UPDATE_EXPANDED_STATE, RULE_UPDATE_FIRE_ON, RULE_RULE_ACTION_CREATE, RULE_RULE_ACTION_DELETE, RULE_RULE_ACTION_UPDATE_TYPE, RULE_RULE_ACTION_UPDATE_PARAMETER, RULE_CONDITION_GROUP_UPDATE_OPERATOR, RULE_CONDITION_GROUP_DELETE, RULE_CONDITION_GROUP_CREATE, RULE_CONDITION_CREATE, RULE_CONDITION_DELETE, RULE_CONDITION_UPDATE_TYPE, RULE_CONDITION_UPDATE_PARAMETER, RULE_CONDITION_UPDATE_OPERATOR, CoreWebService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (http_response_util_1_1) {
                http_response_util_1 = http_response_util_1_1;
            },
            function (ApiRoot_1_1) {
                ApiRoot_1 = ApiRoot_1_1;
            },
            function (response_view_1_1) {
                response_view_1 = response_view_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            exports_1("RULE_CREATE", RULE_CREATE = 'RULE_CREATE');
            exports_1("RULE_DELETE", RULE_DELETE = 'RULE_DELETE');
            exports_1("RULE_UPDATE_NAME", RULE_UPDATE_NAME = 'RULE_UPDATE_NAME');
            exports_1("RULE_UPDATE_ENABLED_STATE", RULE_UPDATE_ENABLED_STATE = 'RULE_UPDATE_ENABLED_STATE');
            exports_1("V_RULE_UPDATE_EXPANDED_STATE", V_RULE_UPDATE_EXPANDED_STATE = 'V_RULE_UPDATE_EXPANDED_STATE');
            exports_1("RULE_UPDATE_FIRE_ON", RULE_UPDATE_FIRE_ON = 'RULE_UPDATE_FIRE_ON');
            exports_1("RULE_RULE_ACTION_CREATE", RULE_RULE_ACTION_CREATE = 'RULE_RULE_ACTION_CREATE');
            exports_1("RULE_RULE_ACTION_DELETE", RULE_RULE_ACTION_DELETE = 'RULE_RULE_ACTION_DELETE');
            exports_1("RULE_RULE_ACTION_UPDATE_TYPE", RULE_RULE_ACTION_UPDATE_TYPE = 'RULE_RULE_ACTION_UPDATE_TYPE');
            exports_1("RULE_RULE_ACTION_UPDATE_PARAMETER", RULE_RULE_ACTION_UPDATE_PARAMETER = 'RULE_RULE_ACTION_UPDATE_PARAMETER');
            exports_1("RULE_CONDITION_GROUP_UPDATE_OPERATOR", RULE_CONDITION_GROUP_UPDATE_OPERATOR = 'RULE_CONDITION_GROUP_UPDATE_OPERATOR');
            exports_1("RULE_CONDITION_GROUP_DELETE", RULE_CONDITION_GROUP_DELETE = 'RULE_CONDITION_GROUP_DELETE');
            exports_1("RULE_CONDITION_GROUP_CREATE", RULE_CONDITION_GROUP_CREATE = 'RULE_CONDITION_GROUP_CREATE');
            exports_1("RULE_CONDITION_CREATE", RULE_CONDITION_CREATE = 'RULE_CONDITION_CREATE');
            exports_1("RULE_CONDITION_DELETE", RULE_CONDITION_DELETE = 'RULE_CONDITION_DELETE');
            exports_1("RULE_CONDITION_UPDATE_TYPE", RULE_CONDITION_UPDATE_TYPE = 'RULE_CONDITION_UPDATE_TYPE');
            exports_1("RULE_CONDITION_UPDATE_PARAMETER", RULE_CONDITION_UPDATE_PARAMETER = 'RULE_CONDITION_UPDATE_PARAMETER');
            exports_1("RULE_CONDITION_UPDATE_OPERATOR", RULE_CONDITION_UPDATE_OPERATOR = 'RULE_CONDITION_UPDATE_OPERATOR');
            CoreWebService = (function () {
                function CoreWebService(_apiRoot, _http, loggerService) {
                    this._apiRoot = _apiRoot;
                    this._http = _http;
                    this.loggerService = loggerService;
                    this.httpErrosSubjects = [];
                }
                CoreWebService.prototype.request = function (options) {
                    var _this = this;
                    var request = this.getRequestOpts(options);
                    var source = options.body;
                    return this._http.request(request)
                        .map(function (resp) {
                        return http_response_util_1.hasContent(resp) ? resp.json() : resp;
                    })
                        .catch(function (response, original) {
                        if (response) {
                            _this.handleHttpError(response);
                            if (response.status === 500) {
                                if (response.text() && response.text().indexOf('ECONNREFUSED') >= 0) {
                                    throw new http_response_util_1.CwError(http_response_util_1.NETWORK_CONNECTION_ERROR, http_response_util_1.CLIENTS_ONLY_MESSAGES[http_response_util_1.NETWORK_CONNECTION_ERROR], request, response, source);
                                }
                                else {
                                    throw new http_response_util_1.CwError(http_response_util_1.SERVER_RESPONSE_ERROR, response.headers.get('error-message'), request, response, source);
                                }
                            }
                            else if (response.status === 404) {
                                _this.loggerService.error('Could not execute request: 404 path not valid.', options.url);
                                throw new http_response_util_1.CwError(http_response_util_1.UNKNOWN_RESPONSE_ERROR, response.headers.get('error-message'), request, response, source);
                            }
                        }
                        return null;
                    });
                };
                /**
                 * Return a response adapted to the follow json format:
                 *
                 * <code>
                 * {
                 *   "errors":[],
                 *   "entity":{},
                 *   "messages":[],
                 *   "i18nMessagesMap":{}
                 * }
                 * </code>
                 *
                 * @param options
                 * @returns {DotCMSHttpResponse}
                 */
                CoreWebService.prototype.requestView = function (options) {
                    var _this = this;
                    var request = this.getRequestOpts(options);
                    return Rx_1.Observable.create(function (observer) {
                        _this._http.request(request).subscribe(function (resp) {
                            if (resp._body.errors && resp._body.errors.length > 0) {
                                observer.error(new response_view_1.ResponseView(resp));
                            }
                            else {
                                observer.next(new response_view_1.ResponseView(resp));
                            }
                        }, function (resp) {
                            _this.handleHttpError(resp);
                            observer.error(new response_view_1.ResponseView(resp));
                        });
                    });
                };
                CoreWebService.prototype.subscribeTo = function (httpErrorCode) {
                    if (!this.httpErrosSubjects[httpErrorCode]) {
                        this.httpErrosSubjects[httpErrorCode] = new Subject_1.Subject();
                    }
                    return this.httpErrosSubjects[httpErrorCode].asObservable();
                };
                CoreWebService.prototype.getRequestOpts = function (options) {
                    var headers = this._apiRoot.getDefaultRequestHeaders();
                    var tempHeaders = options.headers ? options.headers : { 'Content-Type': 'application/json' };
                    Object.keys(tempHeaders).forEach(function (key) {
                        headers.set(key, tempHeaders[key]);
                    });
                    // https://github.com/angular/angular/issues/10612#issuecomment-238712920
                    options.body = options.body && typeof options.body !== 'string' ? JSON.stringify(options.body) :
                        options.body ? options.body : '';
                    options.headers = headers;
                    if (options.url.indexOf('://') === -1) {
                        options.url = this._apiRoot.baseUrl + "api/" + options.url;
                    }
                    return new http_1.Request(options);
                };
                CoreWebService.prototype.handleHttpError = function (response) {
                    if (!this.httpErrosSubjects[response.status]) {
                        this.httpErrosSubjects[response.status] = new Subject_1.Subject();
                    }
                    this.httpErrosSubjects[response.status].next(response);
                };
                CoreWebService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [ApiRoot_1.ApiRoot, http_1.Http, logger_service_1.LoggerService])
                ], CoreWebService);
                return CoreWebService;
            }());
            exports_1("CoreWebService", CoreWebService);
        }
    }
});
//# sourceMappingURL=core-web-service.js.map