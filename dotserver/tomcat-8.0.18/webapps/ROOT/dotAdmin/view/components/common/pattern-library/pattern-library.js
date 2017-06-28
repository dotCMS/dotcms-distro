System.register(['@angular/core', "primeng/primeng"], function(exports_1, context_1) {
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
    var core_1, primeng_1;
    var PatternLibrary;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
            }],
        execute: function() {
            PatternLibrary = (function () {
                function PatternLibrary() {
                    this.checkBoxValues = ['val3'];
                    this.radioBoxValues = ['val3'];
                    this.radioBoxDisabledValues = ['val'];
                    this.autocompleteResults = [];
                    this.displayDialog = false;
                    this.cities = [];
                    this.cities.push({ label: 'Select City', value: null });
                    this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
                    this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
                    this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
                    this.cities.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
                    this.cities.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });
                }
                PatternLibrary.prototype.autocompleteComplete = function ($event) {
                    this.autocompleteResults = [];
                    this.autocompleteResults = ['Hello', 'World'];
                };
                PatternLibrary.prototype.autocompleteCompleteDropdownClick = function (event) {
                    // TODO: get rid of this lines when this is fixed: https://github.com/primefaces/primeng/issues/745
                    event.originalEvent.preventDefault();
                    event.originalEvent.stopPropagation();
                    if (this.autoCompleteComponent.panelVisible) {
                        this.autoCompleteComponent.onDropdownBlur();
                        this.autoCompleteComponent.hide();
                    }
                    else {
                        this.autoCompleteComponent.onDropdownFocus();
                        this.autoCompleteComponent.show();
                    }
                    this.autocompleteResults = ['Hello', 'World'];
                };
                PatternLibrary.prototype.showDialog = function () {
                    this.displayDialog = true;
                };
                __decorate([
                    core_1.ViewChild(primeng_1.AutoComplete), 
                    __metadata('design:type', primeng_1.AutoComplete)
                ], PatternLibrary.prototype, "autoCompleteComponent", void 0);
                PatternLibrary = __decorate([
                    core_1.Component({
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        moduleId: __moduleName,
                        selector: 'pattern-library',
                        styleUrls: ['pattern-library.css'],
                        templateUrl: ['pattern-library.html']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PatternLibrary);
                return PatternLibrary;
            }());
            exports_1("PatternLibrary", PatternLibrary);
        }
    }
});
//# sourceMappingURL=pattern-library.js.map