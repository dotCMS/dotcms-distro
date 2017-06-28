System.register(['../../common/_base/base-component', '@angular/core', '../../../../api/services/dot-router-service', '../dropdown-component/dropdown-component', '../../../../api/services/login-service', '../../../../api/services/messages-service', '../../../../api/services/logger.service', "../../../../api/services/iframe-overlay-service"], function(exports_1, context_1) {
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
    var base_component_1, core_1, dot_router_service_1, dropdown_component_1, login_service_1, messages_service_1, logger_service_1, iframe_overlay_service_1;
    var ToolbarUserComponent;
    return {
        setters:[
            function (base_component_1_1) {
                base_component_1 = base_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dot_router_service_1_1) {
                dot_router_service_1 = dot_router_service_1_1;
            },
            function (dropdown_component_1_1) {
                dropdown_component_1 = dropdown_component_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (messages_service_1_1) {
                messages_service_1 = messages_service_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (iframe_overlay_service_1_1) {
                iframe_overlay_service_1 = iframe_overlay_service_1_1;
            }],
        execute: function() {
            ToolbarUserComponent = (function (_super) {
                __extends(ToolbarUserComponent, _super);
                function ToolbarUserComponent(router, loginService, messageService, loggerService, iframeOverlayService) {
                    _super.call(this, ['my-account'], messageService);
                    this.router = router;
                    this.loginService = loginService;
                    this.messageService = messageService;
                    this.loggerService = loggerService;
                    this.iframeOverlayService = iframeOverlayService;
                    this.showLoginAs = false;
                    this.showMyAccount = false;
                }
                ToolbarUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.loginService.watchUser(function (auth) {
                        _this.auth = auth;
                    });
                };
                /**
                 * Call the logout service
                 */
                ToolbarUserComponent.prototype.logout = function () {
                    var _this = this;
                    this.loginService.logOutUser().subscribe(function (data) {
                    }, function (error) {
                        _this.loggerService.error(error);
                    });
                    return false;
                };
                ToolbarUserComponent.prototype.logoutAs = function ($event) {
                    var _this = this;
                    $event.preventDefault();
                    this.loginService.logoutAs().subscribe(function (data) {
                        _this.router.goToMain();
                        _this.dropdown.closeIt();
                    }, function (error) {
                        _this.loggerService.error(error);
                    });
                };
                ToolbarUserComponent.prototype.tooggleLoginAs = function () {
                    this.dropdown.closeIt();
                    this.showLoginAs = !this.showLoginAs;
                    return false;
                };
                ToolbarUserComponent.prototype.toggleMyAccount = function () {
                    this.showMyAccount = !this.showMyAccount;
                    return false;
                };
                __decorate([
                    core_1.ViewChild(dropdown_component_1.DropdownComponent), 
                    __metadata('design:type', dropdown_component_1.DropdownComponent)
                ], ToolbarUserComponent.prototype, "dropdown", void 0);
                ToolbarUserComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'toolbar-user',
                        styleUrls: ['toolbar-user.css'],
                        templateUrl: ['toolbar-user.html'],
                    }), 
                    __metadata('design:paramtypes', [dot_router_service_1.DotRouterService, login_service_1.LoginService, messages_service_1.MessageService, logger_service_1.LoggerService, iframe_overlay_service_1.IframeOverlayService])
                ], ToolbarUserComponent);
                return ToolbarUserComponent;
            }(base_component_1.BaseComponent));
            exports_1("ToolbarUserComponent", ToolbarUserComponent);
        }
    }
});
//# sourceMappingURL=toolbar-user.js.map