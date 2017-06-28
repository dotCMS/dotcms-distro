System.register(['@angular/core', '../../api/services/messages-service'], function(exports_1, context_1) {
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
    var core_1, messages_service_1;
    var MessageKeyDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (messages_service_1_1) {
                messages_service_1 = messages_service_1_1;
            }],
        execute: function() {
            MessageKeyDirective = (function () {
                function MessageKeyDirective(el, messageService) {
                    this.el = el;
                    this.messageService = messageService;
                }
                MessageKeyDirective.prototype.ngOnInit = function () {
                    var _this = this;
                    this.key = this.el.nativeElement.innerText;
                    this.messageMapSubscription = this.messageService.getMessages([this.key]).subscribe(function (res) {
                        _this.el.nativeElement.innerText = res[_this.key];
                    });
                };
                MessageKeyDirective.prototype.ngOnDestroy = function () {
                    this.messageMapSubscription.unsubscribe();
                };
                MessageKeyDirective = __decorate([
                    core_1.Directive({
                        selector: '[messagekey]',
                        host: {}
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, messages_service_1.MessageService])
                ], MessageKeyDirective);
                return MessageKeyDirective;
            }());
            exports_1("MessageKeyDirective", MessageKeyDirective);
        }
    }
});
//# sourceMappingURL=message-keys.js.map