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
    var Accordion, AccordionGroup;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Accordion = (function () {
                function Accordion() {
                    this.groups = [];
                }
                Accordion.prototype.addGroup = function (group) {
                    this.groups.push(group);
                };
                Accordion.prototype.closeOthers = function (openGroup) {
                    this.groups.forEach(function (group) {
                        if (group !== openGroup) {
                        }
                    });
                };
                Accordion.prototype.removeGroup = function (group) {
                    var index = this.groups.indexOf(group);
                    if (index !== -1) {
                        this.groups.splice(index, 1);
                    }
                };
                Accordion = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'accordion',
                        template: "\n        <ng-content></ng-content>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Accordion);
                return Accordion;
            }());
            exports_1("Accordion", Accordion);
            AccordionGroup = (function () {
                function AccordionGroup(accordion) {
                    this.accordion = accordion;
                    this._isOpen = false;
                    this.accordion.addGroup(this);
                }
                Object.defineProperty(AccordionGroup.prototype, "isOpen", {
                    get: function () {
                        return this._isOpen;
                    },
                    set: function (value) {
                        this._isOpen = value;
                        if (this._isOpen) {
                            this.accordion.closeOthers(this);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                AccordionGroup.prototype.open = function () {
                    this._isOpen = true;
                };
                AccordionGroup.prototype.toggleOpen = function (event) {
                    event.preventDefault();
                    this.isOpen = !this.isOpen;
                };
                AccordionGroup.prototype.ngOnDestroy = function () {
                    this.accordion.removeGroup(this);
                };
                __decorate([
                    core_1.Input('open'), 
                    __metadata('design:type', Boolean)
                ], AccordionGroup.prototype, "_isOpen", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AccordionGroup.prototype, "heading", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AccordionGroup.prototype, "icon", void 0);
                AccordionGroup = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'accordion-group',
                        template: "\n        <a href=\"#\" (click)=\"toggleOpen($event)\" class=\"accordion-group__title\" [ngClass]=\"{'is-active': isOpen}\">\n            <i class=\"fa fa-th-list {{icon}}\" aria-hidden=\"true\" *ngIf=\"icon\"></i>\n            <span class=\"accordion-group__title-text\">\n                {{heading}}\n            </span>\n            \n        </a>\n        <div class=\"accordion-group__content\" [ngClass]=\"{'is-open': isOpen}\">\n            <ng-content></ng-content>\n        </div>\n    ",
                        styleUrls: ['accordion-group.css']
                    }), 
                    __metadata('design:paramtypes', [Accordion])
                ], AccordionGroup);
                return AccordionGroup;
            }());
            exports_1("AccordionGroup", AccordionGroup);
        }
    }
});
//# sourceMappingURL=accordion.js.map