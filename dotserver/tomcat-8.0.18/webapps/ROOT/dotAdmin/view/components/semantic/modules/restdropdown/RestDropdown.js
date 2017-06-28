System.register(['@angular/core', '@angular/forms', '@angular/http', "../../../../../api/validation/Verify", "../../../../../api/persistence/ApiRoot", 'lodash'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, core_2, forms_1, http_1, Verify_1, ApiRoot_1, lodash_1;
    var RestDropdown;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Verify_1_1) {
                Verify_1 = Verify_1_1;
            },
            function (ApiRoot_1_1) {
                ApiRoot_1 = ApiRoot_1_1;
            },
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            }],
        execute: function() {
            RestDropdown = (function () {
                function RestDropdown(_http, _apiRoot, control) {
                    this._http = _http;
                    this._apiRoot = _apiRoot;
                    this.control = control;
                    this.change = new core_1.EventEmitter();
                    this.touch = new core_1.EventEmitter();
                    this.onChange = function () { };
                    this.onTouched = function () { };
                    if (control) {
                        control.valueAccessor = this;
                    }
                    this.placeholder = "";
                    this.optionValueField = "key";
                    this.optionLabelField = "value";
                    this.allowAdditions = false;
                    this.minSelections = 0;
                    this.maxSelections = 1;
                }
                RestDropdown.prototype.ngAfterViewInit = function () {
                };
                RestDropdown.prototype.writeValue = function (value) {
                    if (value && value.indexOf(',') > -1) {
                        this._modelValue = value.split(',');
                    }
                    else {
                        this._modelValue = lodash_1.default.isEmpty(value) ? '' : value;
                    }
                };
                RestDropdown.prototype.registerOnChange = function (fn) {
                    this.onChange = fn;
                };
                RestDropdown.prototype.registerOnTouched = function (fn) {
                    this.onTouched = fn;
                };
                RestDropdown.prototype.fireChange = function ($event) {
                    this.change.emit($event);
                    this.onChange($event);
                };
                RestDropdown.prototype.fireTouch = function ($event) {
                    this.touch.emit($event);
                    this.onTouched($event);
                };
                RestDropdown.prototype.ngOnChanges = function (change) {
                    var _this = this;
                    if (change.optionUrl) {
                        var requestOptionArgs = this._apiRoot.getDefaultRequestOptions();
                        this._options = this._http.get(change.optionUrl.currentValue, requestOptionArgs)
                            .map(function (res) { return _this.jsonEntriesToOptions(res); });
                    }
                    if (change.value && change.value.currentValue && change.value.currentValue.indexOf(',') > -1) {
                        this._modelValue = change.value.currentValue.split(',');
                    }
                };
                RestDropdown.prototype.jsonEntriesToOptions = function (res) {
                    var _this = this;
                    var valuesJson = res.json();
                    var ary = [];
                    if (Verify_1.Verify.isArray(valuesJson)) {
                        ary = valuesJson.map(function (valueJson) { return _this.jsonEntryToOption(valueJson); });
                    }
                    else {
                        ary = Object.keys(valuesJson).map(function (key) {
                            return _this.jsonEntryToOption(valuesJson[key], key);
                        });
                    }
                    return ary;
                };
                ;
                RestDropdown.prototype.jsonEntryToOption = function (json, key) {
                    if (key === void 0) { key = null; }
                    var opt = { value: null, label: null };
                    if (!json[this.optionValueField] && this.optionValueField === 'key' && key != null) {
                        opt.value = key;
                    }
                    else {
                        opt.value = json[this.optionValueField];
                    }
                    opt.label = json[this.optionLabelField];
                    return opt;
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], RestDropdown.prototype, "placeholder", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Boolean)
                ], RestDropdown.prototype, "allowAdditions", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Number)
                ], RestDropdown.prototype, "minSelections", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Number)
                ], RestDropdown.prototype, "maxSelections", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], RestDropdown.prototype, "optionUrl", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], RestDropdown.prototype, "optionValueField", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], RestDropdown.prototype, "optionLabelField", void 0);
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', String)
                ], RestDropdown.prototype, "value", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], RestDropdown.prototype, "change", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], RestDropdown.prototype, "touch", void 0);
                RestDropdown = __decorate([
                    core_1.Component({
                        selector: 'cw-input-rest-dropdown',
                        template: "\n  <cw-input-dropdown \n      [value]=\"_modelValue\"\n      placeholder=\"{{placeholder}}\"\n      [maxSelections]=\"maxSelections\"\n      [minSelections]=\"minSelections\"\n       [allowAdditions]=\"allowAdditions\"\n      (change)=\"fireChange($event)\"\n      (touch)=\"fireTouch($event)\"\n      >\n        <cw-input-option *ngFor=\"let opt of _options | async\" [value]=\"opt.value\" [label]=\"opt.label\" [icon]=\"opt.icon\"></cw-input-option>\n      </cw-input-dropdown>",
                        changeDetection: core_2.ChangeDetectionStrategy.OnPush,
                    }),
                    __param(2, core_1.Optional()), 
                    __metadata('design:paramtypes', [http_1.Http, ApiRoot_1.ApiRoot, forms_1.NgControl])
                ], RestDropdown);
                return RestDropdown;
            }());
            exports_1("RestDropdown", RestDropdown);
        }
    }
});
//# sourceMappingURL=RestDropdown.js.map