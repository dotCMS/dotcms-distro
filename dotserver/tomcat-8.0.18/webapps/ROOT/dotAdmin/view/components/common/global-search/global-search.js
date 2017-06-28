System.register(['../_base/base-component', '@angular/core', '../../../../api/services/messages-service'], function(exports_1, context_1) {
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
    var base_component_1, core_1, messages_service_1;
    var GlobalSearch;
    return {
        setters:[
            function (base_component_1_1) {
                base_component_1 = base_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (messages_service_1_1) {
                messages_service_1 = messages_service_1_1;
            }],
        execute: function() {
            GlobalSearch = (function (_super) {
                __extends(GlobalSearch, _super);
                function GlobalSearch(messageService) {
                    _super.call(this, ['search'], messageService);
                    this.messageService = messageService;
                }
                GlobalSearch = __decorate([
                    core_1.Component({
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        moduleId: __moduleName,
                        selector: 'dot-global-search',
                        styleUrls: ['global-search.css'],
                        templateUrl: ['global-search.html'],
                    }), 
                    __metadata('design:paramtypes', [messages_service_1.MessageService])
                ], GlobalSearch);
                return GlobalSearch;
            }(base_component_1.BaseComponent));
            exports_1("GlobalSearch", GlobalSearch);
        }
    }
});
//# sourceMappingURL=global-search.js.map