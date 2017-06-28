System.register(['@angular/core', '../../../../../api/services/login-service', "../../../../../api/services/logger.service"], function(exports_1, context_1) {
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
    var ForgotPasswordComponent;
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
            ForgotPasswordComponent = (function () {
                function ForgotPasswordComponent(loginService, loggerService) {
                    this.loginService = loginService;
                    this.loggerService = loggerService;
                    this.cancel = new core_1.EventEmitter();
                    this.recoverPassword = new core_1.EventEmitter();
                    this.language = '';
                    // labels
                    this.forgotPasswordLabel = '';
                    this.forgotPasswordButton = '';
                    this.cancelButton = '';
                    this.userIdOrEmailLabel = '';
                    //Messages
                    this.emailMandatoryFieldError = '';
                    this.forgotPasswordConfirmationMessage = '';
                    this.i18nMessages = ['error.form.mandatory', 'user-id', 'email-address', 'forgot-password',
                        'get-new-password', 'cancel', 'an-email-with-instructions-will-be-sent'];
                }
                ForgotPasswordComponent.prototype.ngOnInit = function () {
                    this.loadLabels();
                };
                /**
                 * Executes the recover password service
                 */
                ForgotPasswordComponent.prototype.ok = function () {
                    if (confirm(this.forgotPasswordConfirmationMessage)) {
                        this.recoverPassword.emit(this.forgotPasswordLogin);
                    }
                };
                /**
                 * Update the color and or image according to the values specified
                 */
                ForgotPasswordComponent.prototype.loadLabels = function () {
                    var _this = this;
                    this.loginService.getLoginFormInfo(this.language, this.i18nMessages).subscribe(function (data) {
                        // Translate labels and messages
                        var dataI18n = data.i18nMessagesMap;
                        var entity = data.entity;
                        if ('emailAddress' === entity.authorizationType) {
                            _this.userIdOrEmailLabel = dataI18n['email-address'];
                        }
                        else {
                            _this.userIdOrEmailLabel = dataI18n['user-id'];
                        }
                        _this.forgotPasswordLabel = dataI18n['forgot-password'];
                        _this.forgotPasswordButton = dataI18n['get-new-password'];
                        _this.cancelButton = dataI18n.cancel;
                        _this.forgotPasswordConfirmationMessage = dataI18n['an-email-with-instructions-will-be-sent'];
                        _this.emailMandatoryFieldError = (dataI18n['error.form.mandatory']).replace('{0}', _this.userIdOrEmailLabel);
                    }, function (error) {
                        _this.loggerService.error(error);
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ForgotPasswordComponent.prototype, "message", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ForgotPasswordComponent.prototype, "cancel", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ForgotPasswordComponent.prototype, "recoverPassword", void 0);
                ForgotPasswordComponent = __decorate([
                    core_1.Component({
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        moduleId: __moduleName,
                        selector: 'dot-forgot-password-component',
                        templateUrl: ['forgot-password-component.html'],
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, logger_service_1.LoggerService])
                ], ForgotPasswordComponent);
                return ForgotPasswordComponent;
            }());
            exports_1("ForgotPasswordComponent", ForgotPasswordComponent);
        }
    }
});
//# sourceMappingURL=forgot-password-component.js.map