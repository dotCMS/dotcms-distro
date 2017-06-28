System.register(['@angular/core', '../services/core-web-service', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, core_web_service_1, http_1;
    var NotificationsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_web_service_1_1) {
                core_web_service_1 = core_web_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            NotificationsService = (function () {
                function NotificationsService(coreWebService) {
                    this.coreWebService = coreWebService;
                    this.urls = {
                        dismissNotificationsUrl: 'v1/notification/delete',
                        getNotificationsUrl: 'v1/notification/getNotifications/offset/0/limit/25',
                        markAsReadNotificationsUrl: 'v1/notification/markAsRead'
                    };
                }
                NotificationsService.prototype.getNotifications = function () {
                    return this.coreWebService.request({
                        method: http_1.RequestMethod.Get,
                        url: this.urls.getNotificationsUrl
                    });
                };
                NotificationsService.prototype.dismissNotifications = function (items) {
                    return this.coreWebService.request({
                        body: items,
                        method: http_1.RequestMethod.Put,
                        url: this.urls.dismissNotificationsUrl,
                    });
                };
                NotificationsService.prototype.markAllAsRead = function () {
                    return this.coreWebService.request({
                        method: http_1.RequestMethod.Put,
                        url: this.urls.markAsReadNotificationsUrl,
                    });
                };
                NotificationsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [core_web_service_1.CoreWebService])
                ], NotificationsService);
                return NotificationsService;
            }());
            exports_1("NotificationsService", NotificationsService);
        }
    }
});
//# sourceMappingURL=notifications-service.js.map