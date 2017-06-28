System.register(['@angular/core', '../common/dropdown-component/dropdown-component', '../../../api/services/contentlet-service', '../../../api/services/routing-service', '../common/_base/base-component', '../../../api/services/messages-service', "../../../api/services/iframe-overlay-service"], function(exports_1, context_1) {
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
    var core_1, dropdown_component_1, contentlet_service_1, routing_service_1, base_component_1, messages_service_1, iframe_overlay_service_1;
    var ToolbarAddContenletBodyComponent, ToolbarAddContenletComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dropdown_component_1_1) {
                dropdown_component_1 = dropdown_component_1_1;
            },
            function (contentlet_service_1_1) {
                contentlet_service_1 = contentlet_service_1_1;
            },
            function (routing_service_1_1) {
                routing_service_1 = routing_service_1_1;
            },
            function (base_component_1_1) {
                base_component_1 = base_component_1_1;
            },
            function (messages_service_1_1) {
                messages_service_1 = messages_service_1_1;
            },
            function (iframe_overlay_service_1_1) {
                iframe_overlay_service_1 = iframe_overlay_service_1_1;
            }],
        execute: function() {
            ToolbarAddContenletBodyComponent = (function () {
                function ToolbarAddContenletBodyComponent(routingService) {
                    this.routingService = routingService;
                    this.showMore = false;
                    this.select = new core_1.EventEmitter();
                    this.more = new core_1.EventEmitter();
                }
                ToolbarAddContenletBodyComponent.prototype.goToAddContent = function (contentTypeView) {
                    this.routingService.goToPortlet(contentTypeView.name);
                    this.select.emit();
                    return false;
                };
                ToolbarAddContenletBodyComponent.prototype.clickMore = function (event) {
                    event.preventDefault();
                    this.more.emit();
                    return false;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], ToolbarAddContenletBodyComponent.prototype, "structureTypeViews", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], ToolbarAddContenletBodyComponent.prototype, "showMore", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ToolbarAddContenletBodyComponent.prototype, "select", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ToolbarAddContenletBodyComponent.prototype, "more", void 0);
                ToolbarAddContenletBodyComponent = __decorate([
                    core_1.Component({
                        directives: [],
                        moduleId: __moduleName,
                        selector: 'toolbar-add-contentlet-body',
                        styleUrls: ['toolbar-add-contentlet-body.css'],
                        templateUrl: ['toolbar-add-contentlet-body.html'],
                    }), 
                    __metadata('design:paramtypes', [routing_service_1.RoutingService])
                ], ToolbarAddContenletBodyComponent);
                return ToolbarAddContenletBodyComponent;
            }());
            exports_1("ToolbarAddContenletBodyComponent", ToolbarAddContenletBodyComponent);
            ToolbarAddContenletComponent = (function (_super) {
                __extends(ToolbarAddContenletComponent, _super);
                function ToolbarAddContenletComponent(contentletService, routingService, messageService, iframeOverlayService) {
                    _super.call(this, ['more'], messageService);
                    this.contentletService = contentletService;
                    this.routingService = routingService;
                    this.iframeOverlayService = iframeOverlayService;
                    this.typesIcons = {
                        "Content": 'fa-table',
                        "Widget": 'fa-cog',
                        "File": 'fa-picture-o',
                        "Page": 'fa-file-text-o',
                        "Persona": 'fa-user',
                    };
                    this.showMore = false;
                    this.NUMBER_BY_PAGE = 4;
                    this.currentPage = -1;
                    this.selectedName = '';
                }
                ToolbarAddContenletComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.contentletService.structureTypeView$.subscribe(function (structures) {
                        _this.types = structures;
                        _this.recent = [];
                        _this.types = _this.types.filter(function (structure) {
                            if (structure.name.startsWith('RECENT')) {
                                _this.recent.push(structure);
                            }
                            else {
                                structure.types.forEach(function (type) {
                                    _this.routingService.addPortletURL(type.name, type.action);
                                });
                            }
                            return !structure.name.startsWith('RECENT');
                        });
                        _this.nextRecent();
                    });
                };
                ToolbarAddContenletComponent.prototype.select = function (selected) {
                    if (this.structureTypeViewSelected !== this.recent && this.structureTypeViewSelected[0] === selected) {
                        this.currentPage = -1;
                        this.nextRecent();
                        this.selectedName = '';
                    }
                    else {
                        this.structureTypeViewSelected = [selected];
                        this.showMore = false;
                        this.selectedName = selected.name;
                    }
                };
                ToolbarAddContenletComponent.prototype.close = function () {
                    this.dropdown.closeIt();
                };
                ToolbarAddContenletComponent.prototype.nextRecent = function () {
                    var _this = this;
                    this.currentPage++;
                    this.showMore = false;
                    this.structureTypeViewSelected = this.recent.map(function (structureTypeView) {
                        var currentPage = _this.currentPage % (structureTypeView.types.length / _this.NUMBER_BY_PAGE);
                        _this.showMore = _this.showMore || structureTypeView.types.length > _this.NUMBER_BY_PAGE;
                        var startIndex = currentPage * _this.NUMBER_BY_PAGE;
                        var endIndex = startIndex + _this.NUMBER_BY_PAGE;
                        return {
                            label: structureTypeView.label,
                            name: structureTypeView.name,
                            types: structureTypeView.types.slice(startIndex, endIndex)
                        };
                    });
                };
                __decorate([
                    core_1.ViewChild(dropdown_component_1.DropdownComponent), 
                    __metadata('design:type', dropdown_component_1.DropdownComponent)
                ], ToolbarAddContenletComponent.prototype, "dropdown", void 0);
                ToolbarAddContenletComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        providers: [contentlet_service_1.ContentletService],
                        selector: 'toolbar-add-contentlet',
                        styleUrls: ['toolbar-add-contentlet.css'],
                        templateUrl: ['toolbar-add-contentlet.html'],
                    }), 
                    __metadata('design:paramtypes', [contentlet_service_1.ContentletService, routing_service_1.RoutingService, messages_service_1.MessageService, iframe_overlay_service_1.IframeOverlayService])
                ], ToolbarAddContenletComponent);
                return ToolbarAddContenletComponent;
            }(base_component_1.BaseComponent));
            exports_1("ToolbarAddContenletComponent", ToolbarAddContenletComponent);
        }
    }
});
//# sourceMappingURL=toolbar-add-contentlet.js.map