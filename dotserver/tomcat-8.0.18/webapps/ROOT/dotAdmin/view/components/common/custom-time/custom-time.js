System.register(['@angular/core', "../../../../api/services/format-date-service", 'rxjs/BehaviorSubject'], function(exports_1, context_1) {
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
    var core_1, format_date_service_1, BehaviorSubject_1;
    var CustomTimeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (format_date_service_1_1) {
                format_date_service_1 = format_date_service_1_1;
            },
            function (BehaviorSubject_1_1) {
                BehaviorSubject_1 = BehaviorSubject_1_1;
            }],
        execute: function() {
            CustomTimeComponent = (function () {
                function CustomTimeComponent(formatDateService) {
                    this.formatDateService = formatDateService;
                    this.formattedTime = new BehaviorSubject_1.BehaviorSubject('');
                }
                CustomTimeComponent.prototype.ngOnInit = function () {
                    this.formattedTime.next(this.formatDateService.getRelative(this.time));
                };
                // TODO: this it's running every time the UI changes no matter where, need to fix it, should only run when custom-time shows
                CustomTimeComponent.prototype.ngAfterViewChecked = function () {
                    // TODO: this is triggering even when open other dropdown component instance, need to check that.
                    this.formattedTime.next(this.formatDateService.getRelative(this.time));
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CustomTimeComponent.prototype, "time", void 0);
                CustomTimeComponent = __decorate([
                    core_1.Component({
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        moduleId: __moduleName,
                        selector: 'custom-time',
                        styleUrls: ['custom-time.css'],
                        templateUrl: ['custom-time.html'],
                    }), 
                    __metadata('design:paramtypes', [format_date_service_1.FormatDateService])
                ], CustomTimeComponent);
                return CustomTimeComponent;
            }());
            exports_1("CustomTimeComponent", CustomTimeComponent);
        }
    }
});
//# sourceMappingURL=custom-time.js.map