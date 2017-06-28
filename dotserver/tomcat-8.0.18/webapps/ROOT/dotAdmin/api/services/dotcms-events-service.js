System.register(['@angular/core', './logger.service', 'rxjs/Subject', './protocol/socket-factory'], function(exports_1, context_1) {
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
    var core_1, logger_service_1, Subject_1, socket_factory_1;
    var DotcmsEventsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (socket_factory_1_1) {
                socket_factory_1 = socket_factory_1_1;
            }],
        execute: function() {
            DotcmsEventsService = (function () {
                function DotcmsEventsService(socketFactory, loggerService) {
                    this.socketFactory = socketFactory;
                    this.loggerService = loggerService;
                    this.subjects = [];
                }
                /**
                 * Close the socket
                 */
                DotcmsEventsService.prototype.destroy = function () {
                    this.socket.destroy();
                    this.socketFactory.clean();
                    this.socket = null;
                };
                /**
                 * Start the socket
                 */
                DotcmsEventsService.prototype.start = function () {
                    var _this = this;
                    this.loggerService.debug('start DotcmsEventsService');
                    if (!this.socket) {
                        this.socketFactory.createSocket().subscribe(function (socket) {
                            _this.socket = socket;
                            socket.message$().subscribe(function (data) {
                                _this.loggerService.debug('new event3:', data, socket.count);
                                if (!_this.subjects[data.event]) {
                                    _this.subjects[data.event] = new Subject_1.Subject();
                                }
                                _this.subjects[data.event].next(data.payload);
                            }, function (e) {
                                this.loggerService.debug('Error in the System Events service: ' + e.message);
                            }, function () {
                                this.loggerService.debug('Completed');
                            });
                            _this.loggerService.debug('Connecting with socket');
                            socket.start();
                        });
                    }
                };
                /**
                 * This method will be called by clients that want to receive notifications
                 * regarding incoming system events. The events they will receive will be
                 * based on the type of event clients register for.
                 *
                 * @param clientEventType - The type of event clients will get. For example,
                 *                          "notification" will allow a client to receive the
                 *                          messages in the Notification section.
                 * @returns {any} The system events that a client will receive.
                 */
                DotcmsEventsService.prototype.subscribeTo = function (clientEventType) {
                    if (!this.subjects[clientEventType]) {
                        this.subjects[clientEventType] = new Subject_1.Subject();
                    }
                    return this.subjects[clientEventType].asObservable();
                };
                DotcmsEventsService.prototype.subscribeToEvents = function (clientEventTypes) {
                    var _this = this;
                    var subject = new Subject_1.Subject();
                    clientEventTypes.forEach(function (eventType) { return _this.subscribeTo(eventType).subscribe(function (data) { return subject.next({
                        data: data,
                        eventType: eventType
                    }); }); });
                    return subject.asObservable();
                };
                DotcmsEventsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [socket_factory_1.SocketFactory, logger_service_1.LoggerService])
                ], DotcmsEventsService);
                return DotcmsEventsService;
            }());
            exports_1("DotcmsEventsService", DotcmsEventsService);
        }
    }
});
//# sourceMappingURL=dotcms-events-service.js.map