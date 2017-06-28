System.register(['lodash', '@angular/core', '../../../../api/services/messages-service'], function(exports_1, context_1) {
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
    var lodash_1, core_1, messages_service_1;
    var BaseComponent;
    return {
        setters:[
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (messages_service_1_1) {
                messages_service_1 = messages_service_1_1;
            }],
        execute: function() {
            BaseComponent = (function () {
                function BaseComponent(i18nKeys, messageService) {
                    var _this = this;
                    this.messageService = messageService;
                    this.i18nMessages = {};
                    if (messageService !== null) {
                        this.messageMapSubscription = this.messageService.getMessages(i18nKeys).subscribe(function (res) {
                            _this.i18nMessages = lodash_1.default.pick(res, i18nKeys);
                        });
                    }
                }
                BaseComponent.prototype.ngOnDestroy = function () {
                    this.messageMapSubscription.unsubscribe();
                };
                BaseComponent = __decorate([
                    core_1.Component({
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        moduleId: __moduleName,
                        selector: 'base'
                    }), 
                    __metadata('design:paramtypes', [Array, messages_service_1.MessageService])
                ], BaseComponent);
                return BaseComponent;
            }());
            exports_1("BaseComponent", BaseComponent);
        }
    }
});
//# sourceMappingURL=base-component.js.map