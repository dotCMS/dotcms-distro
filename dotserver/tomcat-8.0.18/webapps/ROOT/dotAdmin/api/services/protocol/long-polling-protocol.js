System.register(['./protocol', '@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var protocol_1, http_1;
    var LongPollingProtocol;
    return {
        setters:[
            function (protocol_1_1) {
                protocol_1 = protocol_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            LongPollingProtocol = (function (_super) {
                __extends(LongPollingProtocol, _super);
                function LongPollingProtocol(url, loggerService, coreWebService, queryBuilder) {
                    _super.call(this, loggerService);
                    this.url = url;
                    this.coreWebService = coreWebService;
                    this.queryBuilder = queryBuilder;
                    this.isClosed = false;
                    if (!queryBuilder) {
                        this.queryBuilder = function (data) { return null; };
                    }
                }
                LongPollingProtocol.prototype.start = function (queryParameters) {
                    var _this = this;
                    this.isClosed = false;
                    this.loggerService.info('Starting long polling connection');
                    this.coreWebService.requestView({
                        method: http_1.RequestMethod.Get,
                        url: this.url.getUrlWith(queryParameters),
                    }).pluck('entity').subscribe(function (data) {
                        _this.loggerService.debug('new Events', data);
                        if (data instanceof Array) {
                            data.forEach(function (message) {
                                _this._message.next(message);
                            });
                        }
                        else {
                            _this._message.next(data);
                        }
                        if (!_this.isClosed) {
                            var query = _this.queryBuilder(data);
                            _this.start(query);
                        }
                    }, function () {
                        _this.loggerService.info('A error occur connecting through long polling');
                        if (!_this.isClosed) {
                            _this.start();
                        }
                    });
                };
                LongPollingProtocol.prototype.destroy = function () {
                    this.loggerService.info('destroying long polling');
                    this.isClosed = true;
                };
                return LongPollingProtocol;
            }(protocol_1.Protocol));
            exports_1("LongPollingProtocol", LongPollingProtocol);
        }
    }
});
//# sourceMappingURL=long-polling-protocol.js.map