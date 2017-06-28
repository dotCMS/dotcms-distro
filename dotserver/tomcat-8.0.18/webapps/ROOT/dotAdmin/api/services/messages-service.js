System.register(['lodash', './core-web-service', './format-date-service', '@angular/core', './login-service', 'rxjs/Observable', '@angular/http', 'rxjs/Subject'], function(exports_1, context_1) {
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
    var lodash_1, core_web_service_1, format_date_service_1, core_1, login_service_1, Observable_1, http_1, Subject_1;
    var MessageService;
    return {
        setters:[
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (core_web_service_1_1) {
                core_web_service_1 = core_web_service_1_1;
            },
            function (format_date_service_1_1) {
                format_date_service_1 = format_date_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            MessageService = (function () {
                function MessageService(loginService, formatDateService, coreWebService) {
                    var _this = this;
                    this.formatDateService = formatDateService;
                    this.coreWebService = coreWebService;
                    this._messageMap$ = new Subject_1.Subject();
                    // There are tons of components asking for messages at the same time, when messages are not loaded yet
                    // instead of doing tons of request, we acumulate the keys every component is asking for and then do one
                    // request with all of them. More info: https://lodash.com/docs/4.15.0#debounce
                    this.doMessageLoad = lodash_1.default.debounce(this.requestMessages, 100);
                    this.i18nUrl = 'v1/languages/i18n';
                    this.lang = loginService.auth.user.languageId;
                    this.messageKeys = [];
                    this.messagesLoaded = {};
                    this.setRelativeDateMessages();
                    loginService.auth$.pluck('user').subscribe(function (user) {
                        if (user && _this.lang !== user.languageId) {
                            _this.messagesLoaded = {};
                            _this.messageKeys = [];
                            _this.lang = user.languageId;
                            _this.setRelativeDateMessages();
                        }
                    });
                }
                MessageService.prototype.setRelativeDateMessages = function () {
                    var _this = this;
                    var relativeDateKeys = [
                        'relativetime.future',
                        'relativetime.past',
                        'relativetime.s',
                        'relativetime.m',
                        'relativetime.mm',
                        'relativetime.h',
                        'relativetime.hh',
                        'relativetime.d',
                        'relativetime.dd',
                        'relativetime.M',
                        'relativetime.MM',
                        'relativetime.y',
                        'relativetime.yy'
                    ];
                    this.getMessages(relativeDateKeys).subscribe(function (res) {
                        var relativeDateMessages = lodash_1.default.mapKeys(res, function (value, key) {
                            return key.replace('relativetime.', '');
                        });
                        _this.formatDateService.setLang(_this.lang.split('_')[0], relativeDateMessages);
                    });
                };
                Object.defineProperty(MessageService.prototype, "messageMap$", {
                    /**
                     * Get the messages objects as an Observable
                     * @returns {Observable<any>}
                     */
                    get: function () {
                        return this._messageMap$.asObservable();
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Do the request to the server to get messages
                 */
                MessageService.prototype.requestMessages = function () {
                    var _this = this;
                    this.coreWebService.requestView({
                        body: {
                            messagesKey: this.messageKeys
                        },
                        method: http_1.RequestMethod.Post,
                        url: this.i18nUrl,
                    }).pluck('i18nMessagesMap').subscribe(function (messages) {
                        _this.messageKeys = [];
                        _this.messagesLoaded = Object.assign({}, _this.messagesLoaded, messages);
                        _this._messageMap$.next(_this.messagesLoaded);
                    });
                };
                /**
                 * Public method to get messages, will get from cache or the server.
                 * @param keys
                 * @returns {any}
                 */
                MessageService.prototype.getMessages = function (keys) {
                    var _this = this;
                    return Observable_1.Observable.create(function (observer) {
                        if (lodash_1.default.every(keys, lodash_1.default.partial(lodash_1.default.has, _this.messagesLoaded))) {
                            observer.next(lodash_1.default.pick(_this.messagesLoaded, keys));
                        }
                        else {
                            _this.messageKeys = lodash_1.default.concat(_this.messageKeys, lodash_1.default.difference(keys, _this.messageKeys));
                            _this.doMessageLoad();
                            var messageMapSub_1 = _this.messageMap$.subscribe(function (res) {
                                observer.next(lodash_1.default.pick(res, keys));
                                messageMapSub_1.unsubscribe();
                            });
                        }
                    });
                };
                MessageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, format_date_service_1.FormatDateService, core_web_service_1.CoreWebService])
                ], MessageService);
                return MessageService;
            }());
            exports_1("MessageService", MessageService);
        }
    }
});
//# sourceMappingURL=messages-service.js.map