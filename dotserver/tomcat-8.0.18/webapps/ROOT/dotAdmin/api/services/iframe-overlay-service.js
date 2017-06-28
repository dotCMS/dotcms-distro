System.register(['@angular/core', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, Rx_1;
    var IframeOverlayService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            IframeOverlayService = (function () {
                function IframeOverlayService() {
                    this.$overlay = new Rx_1.BehaviorSubject();
                }
                IframeOverlayService.prototype.show = function () {
                    this.$overlay.next(true);
                };
                IframeOverlayService.prototype.hide = function () {
                    this.$overlay.next(false);
                };
                IframeOverlayService.prototype.toggle = function () {
                    this.$overlay.next(!this.$overlay.getValue());
                };
                Object.defineProperty(IframeOverlayService.prototype, "overlay", {
                    get: function () {
                        return this.$overlay.asObservable();
                    },
                    enumerable: true,
                    configurable: true
                });
                IframeOverlayService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], IframeOverlayService);
                return IframeOverlayService;
            }());
            exports_1("IframeOverlayService", IframeOverlayService);
        }
    }
});
//# sourceMappingURL=iframe-overlay-service.js.map