System.register(['../_base/base-component', '@angular/core', '../../../../api/services/dotcms-events-service', '../../../../api/services/notifications-service', '../../../../api/services/messages-service', '../../../../api/services/login-service', "../../../../api/services/iframe-overlay-service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var base_component_1, core_1, dotcms_events_service_1, notifications_service_1, messages_service_1, login_service_1, iframe_overlay_service_1;
    var ToolbarNotifications;
    return {
        setters:[
            function (base_component_1_1) {
                base_component_1 = base_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dotcms_events_service_1_1) {
                dotcms_events_service_1 = dotcms_events_service_1_1;
            },
            function (notifications_service_1_1) {
                notifications_service_1 = notifications_service_1_1;
            },
            function (messages_service_1_1) {
                messages_service_1 = messages_service_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (iframe_overlay_service_1_1) {
                iframe_overlay_service_1 = iframe_overlay_service_1_1;
            }],
        execute: function() {
            ToolbarNotifications = (function (_super) {
                __extends(ToolbarNotifications, _super);
                function ToolbarNotifications(dotcmsEventsService, notificationService, myElement, messageService, loginService, iframeOverlayService) {
                    _super.call(this, ['notifications_dismissall', 'notifications_title'], messageService);
                    this.dotcmsEventsService = dotcmsEventsService;
                    this.notificationService = notificationService;
                    this.messageService = messageService;
                    this.loginService = loginService;
                    this.iframeOverlayService = iframeOverlayService;
                    this.isNotificationsMarkedAsRead = false;
                    this.notifications = [];
                    this.notificationsUnreadCount = 0;
                    this.showNotifications = false;
                    this.notificationsQuatity = 5;
                    this.elementRef = myElement;
                }
                ToolbarNotifications.prototype.ngOnInit = function () {
                    this.getNotifications();
                    this.subscribeToNotifications();
                    this.loginService.watchUser(this.getNotifications.bind(this));
                };
                ToolbarNotifications.prototype.clearNotitications = function () {
                    this.notifications = [];
                    this.notificationsUnreadCount = 0;
                    this.showNotifications = false;
                };
                ToolbarNotifications.prototype.dismissAllNotifications = function () {
                    var _this = this;
                    var items = this.notifications.map(function (item) { return item.id; });
                    this.notificationService.dismissNotifications({ 'items': items }).subscribe(function (res) {
                        // TODO: I think we should get here res and err
                        if (res.errors.length) {
                            return;
                        }
                        _this.clearNotitications();
                    });
                };
                ToolbarNotifications.prototype.getNotifications = function () {
                    var _this = this;
                    this.notificationService.getNotifications().subscribe(function (res) {
                        _this.notifications = res.entity.notifications.slice(0, _this.notificationsQuatity);
                        _this.notificationsUnreadCount = res.entity.count > _this.notificationsQuatity ? _this.notificationsQuatity : res.entity.count;
                    });
                };
                ToolbarNotifications.prototype.markAllAsRead = function () {
                    var _this = this;
                    this.notificationService.markAllAsRead().subscribe(function (res) {
                        _this.isNotificationsMarkedAsRead = true;
                        _this.notificationsUnreadCount = 0;
                    });
                };
                ToolbarNotifications.prototype.onDismissNotification = function ($event) {
                    var _this = this;
                    var notificationId = $event.id;
                    this.notificationService.dismissNotifications({ items: [notificationId] }).subscribe(function (res) {
                        if (res.errors.length) {
                            return;
                        }
                        _this.notifications = _this.notifications.filter(function (item) {
                            return item.id !== notificationId;
                        });
                        if (_this.notificationsUnreadCount) {
                            _this.notificationsUnreadCount--;
                        }
                        if (!_this.notifications.length && !_this.notificationsUnreadCount) {
                            _this.clearNotitications();
                        }
                    });
                };
                ToolbarNotifications.prototype.subscribeToNotifications = function () {
                    var _this = this;
                    this.dotcmsEventsService.subscribeTo('NOTIFICATION').subscribe(function (res) {
                        _this.notifications.unshift(res.data);
                        _this.notifications = _this.notifications.slice(0, _this.notificationsQuatity);
                        if (_this.notificationsUnreadCount < _this.notificationsQuatity) {
                            _this.notificationsUnreadCount++;
                        }
                        _this.isNotificationsMarkedAsRead = false;
                    });
                };
                ToolbarNotifications.prototype.toggleNotifications = function () {
                    this.showNotifications = !this.showNotifications;
                    if (this.showNotifications && !this.isNotificationsMarkedAsRead) {
                        this.markAllAsRead();
                    }
                };
                ToolbarNotifications = __decorate([
                    core_1.Component({
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        moduleId: __moduleName,
                        selector: 'dot-toolbar-notifications',
                        styleUrls: ['toolbar-notifications.css'],
                        templateUrl: ['toolbar-notifications.html']
                    }), 
                    __metadata('design:paramtypes', [dotcms_events_service_1.DotcmsEventsService, notifications_service_1.NotificationsService, core_1.ElementRef, messages_service_1.MessageService, login_service_1.LoginService, iframe_overlay_service_1.IframeOverlayService])
                ], ToolbarNotifications);
                return ToolbarNotifications;
            }(base_component_1.BaseComponent));
            exports_1("ToolbarNotifications", ToolbarNotifications);
        }
    }
});
//# sourceMappingURL=toolbar-notifications.js.map