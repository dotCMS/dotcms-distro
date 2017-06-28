System.register(['lodash', 'rxjs/Subject', './protocol'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var lodash_1, Subject_1, protocol_1;
    var WebSocketProtocol;
    return {
        setters:[
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (protocol_1_1) {
                protocol_1 = protocol_1_1;
            }],
        execute: function() {
            WebSocketProtocol = (function (_super) {
                __extends(WebSocketProtocol, _super);
                function WebSocketProtocol(url, loggerService, config, protocols) {
                    _super.call(this, loggerService, config);
                    this.url = url;
                    this.protocols = protocols;
                    this.sendQueue = [];
                    this.readyStateConstants = {
                        'CONNECTING': 0,
                        'OPEN': 1,
                        'CLOSING': 2,
                        'CLOSED': 3,
                        'RECONNECT_ABORTED': 4
                    };
                    this.normalCloseCode = 1000;
                    this.reconnectableStatusCodes = [4000];
                    var match = new RegExp('wss?:\/\/').test(url.url);
                    if (!match) {
                        throw new Error('Invalid url provided [' + url.url + ']');
                    }
                    this.reconnectIfNotNormalClose = config && config.reconnectIfNotNormalClose ? config.reconnectIfNotNormalClose : false;
                    this.dataStream = new Subject_1.Subject();
                }
                WebSocketProtocol.prototype.connect = function (force) {
                    var _this = this;
                    if (force === void 0) { force = false; }
                    var self = this;
                    if (force || !this.socket || this.socket.readyState !== this.readyStateConstants.OPEN) {
                        this.loggerService.debug('Connecting with Web socket', this.url.url);
                        try {
                            self.socket = this.protocols ? new WebSocket(this.url.url, this.protocols) : new WebSocket(this.url.url);
                            self.socket.onopen = function (ev) {
                                _this.loggerService.debug('Web EventsSocket connection opened', ev, _this.count);
                                _this._open.next(ev);
                            };
                            self.socket.onmessage = function (ev) {
                                _this.loggerService.debug('Message:', ev, _this.count);
                                _this._message.next(JSON.parse(ev.data));
                            };
                            this.socket.onclose = function (ev) {
                                _this.loggerService.debug('Web EventsSocket connection closed', ev, _this.count);
                                if ((_this.reconnectIfNotNormalClose && ev.code !== _this.normalCloseCode) || _this.reconnectableStatusCodes.indexOf(ev.code) > -1) {
                                    _this.loggerService.debug('Reconnecting Web EventsSocket connection');
                                    _this.reconnect();
                                }
                                else {
                                    _this._close.next(ev);
                                    _this._message.complete();
                                }
                            };
                            this.socket.onerror = function (ev) {
                                _this.loggerService.debug('Web EventsSocket connection error', ev, _this.count);
                                _this._error.next(ev);
                            };
                        }
                        catch (error) {
                            this.loggerService.debug('Web EventsSocket connection error', error);
                            this._error.next(error);
                        }
                    }
                };
                WebSocketProtocol.prototype.send = function (data) {
                    var self = this;
                    if (this.getReadyState() !== this.readyStateConstants.OPEN && this.getReadyState() !== this.readyStateConstants.CONNECTING) {
                        this.connect();
                    }
                    // TODO: change this for an observer
                    return new Promise(function (resolve, reject) {
                        if (self.socket.readyState === self.readyStateConstants.RECONNECT_ABORTED) {
                            reject('EventsSocket connection has been closed');
                        }
                        else {
                            self.sendQueue.push({ message: data });
                            self.fireQueue();
                        }
                    });
                };
                WebSocketProtocol.prototype.fireQueue = function () {
                    while (this.sendQueue.length && this.socket.readyState === this.readyStateConstants.OPEN) {
                        var data = this.sendQueue.shift();
                        this.socket.send(lodash_1.default.isString(data.message) ? data.message : JSON.stringify(data.message));
                        data.deferred.resolve();
                    }
                };
                WebSocketProtocol.prototype.close = function (force) {
                    if (force || !this.socket.bufferedAmount) {
                        this.socket.close();
                    }
                    return this;
                };
                WebSocketProtocol.prototype.setInternalState = function (state) {
                    if (Math.floor(state) !== state || state < 0 || state > 4) {
                        throw new Error('state must be an integer between 0 and 4, got: ' + state);
                    }
                    this.internalConnectionState = state;
                };
                /**
                 * Could be -1 if not initzialized yet
                 * @returns {number}
                 */
                WebSocketProtocol.prototype.getReadyState = function () {
                    if (this.socket == null) {
                        return -1;
                    }
                    return this.internalConnectionState || this.socket.readyState;
                };
                WebSocketProtocol.prototype.start = function () {
                    this.connect();
                };
                WebSocketProtocol.prototype.destroy = function () {
                    this.loggerService.debug('Closing Web EventsSocket');
                    this.close(true);
                };
                return WebSocketProtocol;
            }(protocol_1.Protocol));
            exports_1("WebSocketProtocol", WebSocketProtocol);
        }
    }
});
//# sourceMappingURL=websockets-protocol.js.map