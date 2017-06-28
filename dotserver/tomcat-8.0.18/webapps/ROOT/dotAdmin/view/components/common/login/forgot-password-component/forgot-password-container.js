System.register(['@angular/core', './forgot-password-component', '../../../../../api/services/login-service', '../../../../../api/services/dot-router-service'], function(exports_1, context_1) {
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
    var core_1, forgot_password_component_1, login_service_1, dot_router_service_1;
    var ForgotPasswordContainer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forgot_password_component_1_1) {
                forgot_password_component_1 = forgot_password_component_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (dot_router_service_1_1) {
                dot_router_service_1 = dot_router_service_1_1;
            }],
        execute: function() {
            ForgotPasswordContainer = (function () {
                function ForgotPasswordContainer(loginService, router) {
                    this.loginService = loginService;
                    this.router = router;
                    this.message = '';
                    this.email = '';
                }
                ForgotPasswordContainer.prototype.recoverPassword = function (forgotPasswordLogin) {
                    var _this = this;
                    this.message = '';
                    this.email = forgotPasswordLogin;
                    this.loginService.recoverPassword(forgotPasswordLogin).subscribe(function (resp) {
                        _this.goToLogin();
                    }, function (resp) {
                        if (!resp.existError('a-new-password-has-been-sent-to-x')) {
                            _this.message = resp.errorsMessages;
                        }
                        else {
                            _this.goToLogin();
                        }
                    });
                };
                ForgotPasswordContainer.prototype.goToLogin = function () {
                    this.router.goToLogin({ 'resetEmailSent': true, 'resetEmail': this.email });
                };
                ForgotPasswordContainer = __decorate([
                    core_1.Component({
                        directives: [forgot_password_component_1.ForgotPasswordComponent],
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        moduleId: __moduleName,
                        selector: 'dot-forgot-password-container',
                        template: "\n        <dot-forgot-password-component\n            [message]=\"message\"\n            (cancel)=\"goToLogin()\"\n            (recoverPassword)=\"recoverPassword($event)\"\n        ></dot-forgot-password-component>\n    ",
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, dot_router_service_1.DotRouterService])
                ], ForgotPasswordContainer);
                return ForgotPasswordContainer;
            }());
            exports_1("ForgotPasswordContainer", ForgotPasswordContainer);
        }
    }
});
//# sourceMappingURL=forgot-password-container.js.map