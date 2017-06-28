System.register(['../_base/base-component', '../../../../api/pipes/capitalize-pipe', '@angular/core', '../custom-time/custom-time', '../../../../api/services/messages-service'], function(exports_1, context_1) {
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
    var base_component_1, capitalize_pipe_1, core_1, custom_time_1, messages_service_1;
    var NotificationsItem, NotificationsList;
    return {
        setters:[
            function (base_component_1_1) {
                base_component_1 = base_component_1_1;
            },
            function (capitalize_pipe_1_1) {
                capitalize_pipe_1 = capitalize_pipe_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (custom_time_1_1) {
                custom_time_1 = custom_time_1_1;
            },
            function (messages_service_1_1) {
                messages_service_1 = messages_service_1_1;
            }],
        execute: function() {
            NotificationsItem = (function (_super) {
                __extends(NotificationsItem, _super);
                function NotificationsItem(messageService) {
                    _super.call(this, ['notifications_dismiss'], messageService);
                    this.messageService = messageService;
                    this.clear = new core_1.EventEmitter();
                    this.notificationIcons = {
                        'WARNING': 'ban',
                        'ERROR': 'exclamation-triangle',
                        'INFO': 'info-circle'
                    };
                    this.showLinkAction = false;
                    this.showTitleLinked = false;
                }
                NotificationsItem.prototype.ngOnInit = function () {
                    // TODO: hand more than one action
                    var actions = this.data.actions ? this.data.actions[0] : null;
                    this.showLinkAction = actions && actions.actionType === 'LINK' && (actions.text || actions.text !== '') && actions.action && actions.action !== '';
                    this.showTitleLinked = actions && actions.actionType === 'LINK' && (!actions.text || actions.text === '') && actions.action && actions.action !== '';
                };
                NotificationsItem.prototype.getIconName = function (val) {
                    return 'notification-item__icon fa fa-' + this.notificationIcons[val];
                };
                NotificationsItem.prototype.onClear = function () {
                    this.clear.emit({
                        id: this.data.id
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NotificationsItem.prototype, "data", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], NotificationsItem.prototype, "clear", void 0);
                NotificationsItem = __decorate([
                    core_1.Component({
                        directives: [custom_time_1.CustomTimeComponent],
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        moduleId: __moduleName,
                        pipes: [capitalize_pipe_1.CapitalizePipe],
                        providers: [],
                        selector: 'dot-notifications-item',
                        styleUrls: ['notifications-item.css'],
                        templateUrl: ['notifications-item.html'],
                    }), 
                    __metadata('design:paramtypes', [messages_service_1.MessageService])
                ], NotificationsItem);
                return NotificationsItem;
            }(base_component_1.BaseComponent));
            exports_1("NotificationsItem", NotificationsItem);
            NotificationsList = (function () {
                function NotificationsList() {
                    this.dismissNotification = new core_1.EventEmitter();
                }
                NotificationsList.prototype.onClearNotification = function ($event) {
                    this.dismissNotification.emit($event);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NotificationsList.prototype, "notifications", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], NotificationsList.prototype, "dismissNotification", void 0);
                NotificationsList = __decorate([
                    core_1.Component({
                        directives: [NotificationsItem],
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        moduleId: __moduleName,
                        providers: [],
                        selector: 'dot-notifications-list',
                        styleUrls: ['notifications-list.css'],
                        templateUrl: ['notifications-list.html'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], NotificationsList);
                return NotificationsList;
            }());
            exports_1("NotificationsList", NotificationsList);
        }
    }
});
//# sourceMappingURL=notifications.js.map