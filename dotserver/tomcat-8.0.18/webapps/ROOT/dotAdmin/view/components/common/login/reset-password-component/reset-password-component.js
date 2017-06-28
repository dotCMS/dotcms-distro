System.register(['@angular/core', '../../../../../api/services/login-service', '../../../../../api/services/logger.service'], function(exports_1, context_1) {
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
    var core_1, login_service_1, logger_service_1;
    var ResetPasswordComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            ResetPasswordComponent = (function () {
                function ResetPasswordComponent(loginService, loggerService) {
                    this.loginService = loginService;
                    this.loggerService = loggerService;
                    this.token = '';
                    this.message = '';
                    this.changePassword = new core_1.EventEmitter();
                    this.language = '';
                    // labels
                    this.resetPasswordLabel = '';
                    this.enterPasswordLabel = '';
                    this.confirmPasswordLabel = '';
                    this.changePasswordButton = '';
                    //Message
                    this.resetPasswordSuccessMessage = '';
                    this.resetPasswordConfirmationDoNotMessage = '';
                    this.mandatoryFieldError = '';
                    this.passwordMandatoryFieldError = '';
                    this.confirmPasswordMandatoryFieldError = '';
                    this.password = '';
                    this.confirmPassword = '';
                    this.i18nMessages = ['error.form.mandatory', 'reset-password', 'enter-password', 're-enter-password', 'change-password', 'reset-password-success', 'reset-password-confirmation-do-not-match'];
                }
                ResetPasswordComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.loginService.getLoginFormInfo(this.language, this.i18nMessages).subscribe(function (data) {
                        var dataI18n = data.i18nMessagesMap;
                        _this.resetPasswordLabel = dataI18n['reset-password'];
                        _this.enterPasswordLabel = dataI18n['enter-password'];
                        _this.confirmPasswordLabel = dataI18n['re-enter-password'];
                        _this.changePasswordButton = dataI18n['change-password'];
                        _this.mandatoryFieldError = dataI18n['error.form.mandatory'];
                        _this.passwordMandatoryFieldError = (_this.mandatoryFieldError).replace('{0}', _this.enterPasswordLabel);
                        _this.confirmPasswordMandatoryFieldError = (_this.mandatoryFieldError).replace('{0}', _this.confirmPasswordLabel);
                        _this.resetPasswordConfirmationDoNotMessage = dataI18n['reset-password-confirmation-do-not-match'];
                        _this.resetPasswordSuccessMessage = dataI18n['reset-password-success'];
                    }, function (error) {
                        _this.loggerService.error(error);
                    });
                };
                ResetPasswordComponent.prototype.ok = function () {
                    if (this.password == this.confirmPassword) {
                        this.changePassword.emit({
                            password: this.password,
                            token: this.token
                        });
                    }
                    else {
                        this.message = this.resetPasswordConfirmationDoNotMessage;
                    }
                };
                ResetPasswordComponent.prototype.cleanConfirmPassword = function () {
                    this.clean();
                    this.confirmPassword = '';
                };
                ResetPasswordComponent.prototype.clean = function () {
                    this.message = '';
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ResetPasswordComponent.prototype, "token", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ResetPasswordComponent.prototype, "message", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ResetPasswordComponent.prototype, "changePassword", void 0);
                ResetPasswordComponent = __decorate([
                    core_1.Component({
                        directives: [],
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        moduleId: __moduleName,
                        pipes: [],
                        providers: [],
                        selector: 'dot-reset-password-component',
                        styleUrls: [],
                        templateUrl: ['reset-password-component.html'],
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, logger_service_1.LoggerService])
                ], ResetPasswordComponent);
                return ResetPasswordComponent;
            }());
            exports_1("ResetPasswordComponent", ResetPasswordComponent);
        }
    }
});
//# sourceMappingURL=reset-password-component.js.map