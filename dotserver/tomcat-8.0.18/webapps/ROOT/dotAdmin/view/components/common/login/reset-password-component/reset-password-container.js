System.register(['@angular/router', '@angular/core', '../../../../../api/services/login-service', './reset-password-component'], function(exports_1, context_1) {
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
    var router_1, core_1, login_service_1, reset_password_component_1;
    var ResetPasswordContainer;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (reset_password_component_1_1) {
                reset_password_component_1 = reset_password_component_1_1;
            }],
        execute: function() {
            ResetPasswordContainer = (function () {
                function ResetPasswordContainer(loginService, router, route) {
                    var _this = this;
                    this.loginService = loginService;
                    this.router = router;
                    this.route = route;
                    this.message = '';
                    this.login = '';
                    this.token = '';
                    this.route.params.pluck('token').subscribe(function (token) {
                        _this.token = token;
                    });
                    this.loginService.getLoginFormInfo('', ['message.forgot.password.password.updated']).subscribe(function (data) {
                        var dataI18n = data.i18nMessagesMap;
                        var entity = data.entity;
                        _this.changePasswordSuccessfully = dataI18n['message.forgot.password.password.updated'];
                    }, function (error) {
                        console.log(error);
                    });
                }
                ResetPasswordContainer.prototype.changePassword = function (changePasswordData) {
                    var _this = this;
                    this.cleanMessage();
                    this.loginService.changePassword(changePasswordData.password, changePasswordData.token)
                        .subscribe(function (result) {
                        //alert(this.resetPasswordSuccessMessage);
                        // TODO need to use internationalization
                        alert(_this.changePasswordSuccessfully);
                        _this.goToLogin();
                    }, function (error) {
                        _this.message = error.errorsMessages;
                    });
                };
                ResetPasswordContainer.prototype.goToLogin = function () {
                    this.router.navigate(['/public/login', { 'changedPassword': true }]);
                };
                ResetPasswordContainer.prototype.cleanMessage = function () {
                    this.message = '';
                };
                ResetPasswordContainer = __decorate([
                    core_1.Component({
                        directives: [reset_password_component_1.ResetPasswordComponent],
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        moduleId: __moduleName,
                        pipes: [],
                        providers: [login_service_1.LoginService],
                        selector: 'dot-reset-password-container',
                        styleUrls: [],
                        template: "\n        <dot-reset-password-component\n            [token]=\"token\"\n            [message]=\"message\"\n            (changePassword)=\"changePassword($event)\">\n        </dot-reset-password-component>\n    "
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router, router_1.ActivatedRoute])
                ], ResetPasswordContainer);
                return ResetPasswordContainer;
            }());
            exports_1("ResetPasswordContainer", ResetPasswordContainer);
        }
    }
});
//# sourceMappingURL=reset-password-container.js.map