System.register(['rxjs/Subject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Subject_1;
    var Url, Protocol;
    return {
        setters:[
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            Url = (function () {
                function Url(protocol, baseUrl, endPoint) {
                    this.protocol = protocol;
                    this.baseUrl = baseUrl;
                    this.endPoint = endPoint;
                }
                Object.defineProperty(Url.prototype, "url", {
                    get: function () {
                        return this.protocol + "://" + this.baseUrl + this.endPoint;
                    },
                    enumerable: true,
                    configurable: true
                });
                Url.prototype.getHttpUrl = function () {
                    return new Url(this.protocol === 'ws' ? 'http' : 'https', this.baseUrl, this.endPoint);
                };
                Url.prototype.getUrlWith = function (queryParameters) {
                    var buffer = '';
                    for (var propt in queryParameters) {
                        if (buffer.length > 0) {
                            buffer += '&';
                        }
                        buffer += propt + '=' + encodeURIComponent(queryParameters[propt]);
                    }
                    return this.url + (queryParameters ? '?' + buffer : '');
                };
                return Url;
            }());
            exports_1("Url", Url);
            Protocol = (function () {
                function Protocol(loggerService, protocolConfig) {
                    this.loggerService = loggerService;
                    this.protocolConfig = protocolConfig;
                    this._open = new Subject_1.Subject();
                    this._close = new Subject_1.Subject();
                    this._message = new Subject_1.Subject();
                    this._error = new Subject_1.Subject();
                    this.reconnectAttempts = 0;
                    if (!protocolConfig) {
                        this.protocolConfig = {
                            initialTimeout: 500,
                            maxTimeout: 300000,
                        };
                    }
                }
                Protocol.prototype.message$ = function () {
                    return this._message.asObservable();
                };
                Protocol.prototype.open$ = function () {
                    return this._open.asObservable();
                };
                Protocol.prototype.close$ = function () {
                    return this._close.asObservable();
                };
                Protocol.prototype.error$ = function () {
                    return this._error.asObservable();
                };
                Protocol.prototype.reconnect = function () {
                    this.destroy();
                    var backoffDelay = this.getBackoffDelay(++this.reconnectAttempts);
                    var backoffDelaySeconds = backoffDelay / 1000;
                    this.loggerService.debug('Reconnecting in ' + backoffDelaySeconds + ' seconds');
                    setTimeout(this.start(), backoffDelay);
                };
                // Exponential Backoff Formula by Prof. Douglas Thain
                // http://dthain.blogspot.co.uk/2009/02/exponential-backoff-in-distributed.html
                Protocol.prototype.getBackoffDelay = function (attempt) {
                    if (this.protocolConfig && !this.protocolConfig.timeWaitToReconnect) {
                        var R = Math.random() + 1;
                        var T = this.protocolConfig.initialTimeout;
                        var F = 2;
                        var N = attempt;
                        var M = this.protocolConfig.maxTimeout;
                        return Math.floor(Math.min(R * T * Math.pow(F, N), M));
                    }
                    else {
                        return this.protocolConfig.timeWaitToReconnect;
                    }
                };
                return Protocol;
            }());
            exports_1("Protocol", Protocol);
        }
    }
});
//# sourceMappingURL=protocol.js.map