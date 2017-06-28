System.register(['./websockets-protocol', './protocol', './long-polling-protocol'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var websockets_protocol_1, protocol_1, long_polling_protocol_1;
    var CONNECTION_STATUS, WEB_SOCKET_SERVER_SUPPORT, EventsSocket;
    return {
        setters:[
            function (websockets_protocol_1_1) {
                websockets_protocol_1 = websockets_protocol_1_1;
            },
            function (protocol_1_1) {
                protocol_1 = protocol_1_1;
            },
            function (long_polling_protocol_1_1) {
                long_polling_protocol_1 = long_polling_protocol_1_1;
            }],
        execute: function() {
            (function (CONNECTION_STATUS) {
                CONNECTION_STATUS[CONNECTION_STATUS["NONE"] = 0] = "NONE";
                CONNECTION_STATUS[CONNECTION_STATUS["CONNECTING"] = 1] = "CONNECTING";
                CONNECTION_STATUS[CONNECTION_STATUS["CONNECTED"] = 2] = "CONNECTED";
                CONNECTION_STATUS[CONNECTION_STATUS["CLOSED"] = 3] = "CLOSED";
            })(CONNECTION_STATUS || (CONNECTION_STATUS = {}));
            (function (WEB_SOCKET_SERVER_SUPPORT) {
                WEB_SOCKET_SERVER_SUPPORT[WEB_SOCKET_SERVER_SUPPORT["NOT_SUPPORTED"] = 0] = "NOT_SUPPORTED";
                WEB_SOCKET_SERVER_SUPPORT[WEB_SOCKET_SERVER_SUPPORT["SUPPORTED"] = 1] = "SUPPORTED";
                WEB_SOCKET_SERVER_SUPPORT[WEB_SOCKET_SERVER_SUPPORT["DONT_NOW"] = 2] = "DONT_NOW";
            })(WEB_SOCKET_SERVER_SUPPORT || (WEB_SOCKET_SERVER_SUPPORT = {}));
            EventsSocket = (function (_super) {
                __extends(EventsSocket, _super);
                /**
                * Initializes this service with the configuration properties that are
                * necessary for opening the Websocket with the System Events end-point.
                *
                * @param dotcmsConfig - The dotCMS configuration properties that include
                *                        the Websocket parameters.
                */
                function EventsSocket(url, configParams, loggerService, coreWebService) {
                    _super.call(this, loggerService, configParams.websocketReconnectTime);
                    this.url = url;
                    this.coreWebService = coreWebService;
                    this.closedOnLogout = false;
                    this.isWebSocketServerSupport = WEB_SOCKET_SERVER_SUPPORT.DONT_NOW;
                    this.status = CONNECTION_STATUS.NONE;
                    this.isWebSocketServerSupport = configParams.disabledWebsockets ? WEB_SOCKET_SERVER_SUPPORT.NOT_SUPPORTED
                        : WEB_SOCKET_SERVER_SUPPORT.DONT_NOW;
                }
                EventsSocket.prototype.start = function () {
                    var _this = this;
                    if (!this.protocolImpl && this.url) {
                        this.loggerService.debug('Creating a new socket connection', this.url.url);
                        this.protocolImpl = this.getProtocol();
                        this.status = CONNECTION_STATUS.CONNECTING;
                        this.protocolImpl.start();
                        this.protocolImpl.open$().subscribe(function () {
                            if (_this.isWebSocketProtocol()) {
                                _this.isWebSocketServerSupport = WEB_SOCKET_SERVER_SUPPORT.SUPPORTED;
                            }
                            _this.status = CONNECTION_STATUS.CONNECTED;
                            _this._open.next();
                        });
                        this.protocolImpl.error$().subscribe(function (error) {
                            if (_this.status === CONNECTION_STATUS.CONNECTING && _this.isWebSocketProtocol()) {
                                _this.loggerService.info('Error connecting with Websockets, trying again with long polling');
                                _this.status = CONNECTION_STATUS.NONE;
                                _this.isWebSocketServerSupport = WEB_SOCKET_SERVER_SUPPORT.NOT_SUPPORTED;
                                _this.protocolImpl = null;
                                _this.start();
                            }
                            else {
                                _this._error.next(error);
                            }
                        });
                        this.protocolImpl.close$().subscribe(function (event) {
                            if (_this.closedOnLogout) {
                                // If we closed the socket for a logout we need to reset the closedOnLogout flag
                                _this.closedOnLogout = false;
                                _this.protocolImpl = null; // Cleaning up the socket as we explicitly closed the socket
                            }
                            else if (_this.status === CONNECTION_STATUS.CONNECTED) {
                                _this.reconnect();
                            }
                            _this.status = CONNECTION_STATUS.CLOSED;
                        });
                        this.protocolImpl.message$().subscribe(function (res) { return _this._message.next(res); }, function (e) { return _this.loggerService.debug('Error in the System Events service: ' + e.message); }, function () { return _this.loggerService.debug('Completed'); });
                    }
                };
                EventsSocket.prototype.destroy = function () {
                    // On logout, meaning no authenticated user lets try to close the socket
                    if (this.protocolImpl) {
                        this.loggerService.debug('Closing socket');
                        this.closedOnLogout = true;
                        this.protocolImpl.destroy();
                        this._close.next();
                    }
                };
                EventsSocket.prototype.getProtocol = function () {
                    var _this = this;
                    var isWebSocketBrowserSupport = this.isWebSocketsBrowserSupport();
                    if (isWebSocketBrowserSupport && this.isWebSocketServerSupport !== WEB_SOCKET_SERVER_SUPPORT.NOT_SUPPORTED) {
                        return new websockets_protocol_1.WebSocketProtocol(this.url, this.loggerService);
                    }
                    else {
                        return new long_polling_protocol_1.LongPollingProtocol(this.url.getHttpUrl(), this.loggerService, this.coreWebService, function (data) {
                            var result = {};
                            if (data.length > 0) {
                                _this.lastcallback = data[data.length - 1].creationDate + 1;
                                result.lastcallback = _this.lastcallback;
                            }
                            else if (_this.lastcallback) {
                                result.lastcallback = _this.lastcallback;
                            }
                            return result;
                        });
                    }
                };
                EventsSocket.prototype.isWebSocketsBrowserSupport = function () {
                    return 'WebSocket' in window || 'MozWebSocket' in window;
                };
                EventsSocket.prototype.isWebSocketProtocol = function () {
                    return this.protocolImpl instanceof websockets_protocol_1.WebSocketProtocol;
                };
                return EventsSocket;
            }(protocol_1.Protocol));
            exports_1("EventsSocket", EventsSocket);
        }
    }
});
//# sourceMappingURL=socket.js.map