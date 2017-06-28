System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var DropdownComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DropdownComponent = (function () {
                function DropdownComponent(elementRef) {
                    this.elementRef = elementRef;
                    this.disabled = false;
                    this.icon = null;
                    this.title = null;
                    this.alignRight = false;
                    this.inverse = false;
                    this.open = new core_1.EventEmitter();
                    this.toggle = new core_1.EventEmitter();
                    this.close = new core_1.EventEmitter();
                    this.show = false;
                }
                DropdownComponent.prototype.closeIt = function () {
                    this.show = false;
                };
                DropdownComponent.prototype.onToggle = function () {
                    this.show = !this.show;
                    if (this.show) {
                        this.open.emit(null);
                    }
                    else {
                        this.close.emit(null);
                    }
                    this.toggle.emit(this.show);
                };
                // TODO: we need doing this globally for all the components that need to detect if the click was outside it.
                DropdownComponent.prototype.handleClick = function ($event) {
                    var clickedComponent = $event.target;
                    var inside = false;
                    do {
                        if (clickedComponent === this.elementRef.nativeElement) {
                            inside = true;
                        }
                        clickedComponent = clickedComponent.parentNode;
                    } while (clickedComponent);
                    if (!inside) {
                        this.show = false;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], DropdownComponent.prototype, "disabled", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], DropdownComponent.prototype, "icon", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], DropdownComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], DropdownComponent.prototype, "alignRight", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], DropdownComponent.prototype, "inverse", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], DropdownComponent.prototype, "open", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], DropdownComponent.prototype, "toggle", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], DropdownComponent.prototype, "close", void 0);
                DropdownComponent = __decorate([
                    core_1.Component({
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        host: {
                            '(document:click)': 'handleClick($event)',
                        },
                        moduleId: __moduleName,
                        selector: 'dot-dropdown-component',
                        styleUrls: ['dropdown-component.css'],
                        templateUrl: ['dropdown-component.html']
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], DropdownComponent);
                return DropdownComponent;
            }());
            exports_1("DropdownComponent", DropdownComponent);
        }
    }
});
//# sourceMappingURL=dropdown-component.js.map