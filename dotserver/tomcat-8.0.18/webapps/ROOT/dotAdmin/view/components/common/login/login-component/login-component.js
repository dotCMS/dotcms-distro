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
    var LoginComponent;
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
            LoginComponent = (function () {
                function LoginComponent(loginService, ngZone, loggerService) {
                    this.loginService = loginService;
                    this.ngZone = ngZone;
                    this.loggerService = loggerService;
                    this.isLoginInProgress = false;
                    this.message = '';
                    this.passwordChanged = false;
                    this.resetEmailSent = false;
                    this.resetEmail = '';
                    this.recoverPassword = new core_1.EventEmitter();
                    this.login = new core_1.EventEmitter();
                    this.myAccountRememberMe = false;
                    this.language = '';
                    this.languages = [];
                    // labels
                    this.cancelButton = '';
                    this.communityLicenseInfoMessage = '';
                    this.dotcmsBuildDateString = '';
                    this.dotcmscompanyLogo = '';
                    this.dotcmslicenceLevel = '';
                    this.dotcmsServerId = '';
                    this.dotcmsVersion = '';
                    this.emailAddressLabel = '';
                    this.forgotPasswordButton = '';
                    this.loginButton = '';
                    this.loginLabel = '';
                    this.mandatoryFieldError = '';
                    this.passwordLabel = '';
                    this.rememberMeLabel = '';
                    this.resetEmailMessage = '';
                    this.resetPasswordSuccess = '';
                    this.serverLabel = '';
                    this.userIdOrEmailLabel = '';
                    this.isCommunityLicense = true;
                    this.i18nMessages = ['Login', 'email-address', 'user-id', 'password', 'remember-me', 'sign-in',
                        'get-new-password', 'cancel', 'Server', 'error.form.mandatory',
                        'angular.login.component.community.licence.message', 'reset-password-success',
                        'a-new-password-has-been-sent-to-x'];
                    this.language = '';
                    this.renderPageData();
                }
                LoginComponent.prototype.ngAfterViewInit = function () {
                    this.ngZone.runOutsideAngular(function () {
                        return setTimeout(function () { return document.getElementById('login-component-login-input').focus(); });
                    });
                };
                /**
                 *  Executes the logIn service
                 */
                LoginComponent.prototype.logInUser = function () {
                    var isSetUserId = this.myAccountLogin !== undefined && this.myAccountLogin.length > 0;
                    var isSetPassword = this.password !== undefined && this.password.length > 0;
                    this.message = '';
                    if (isSetUserId && isSetPassword) {
                        this.login.emit({
                            login: this.myAccountLogin,
                            password: this.password,
                            remenberMe: this.myAccountRememberMe,
                            language: this.language
                        });
                    }
                    else {
                        var error = '';
                        if (!isSetUserId) {
                            error += (this.mandatoryFieldError).replace('{0}', this.emailAddressLabel);
                        }
                        if (!isSetPassword) {
                            if (error !== '') {
                                error += '<br>';
                            }
                            error += (this.mandatoryFieldError).replace('{0}', this.passwordLabel);
                        }
                        this.message = error;
                        this.isLoginInProgress = false;
                    }
                };
                /**
                 * Execute the change language service
                 */
                LoginComponent.prototype.changeLanguage = function (lang) {
                    this.language = lang;
                    this.renderPageData();
                };
                /**
                 * Renders all the labels, images, and placeholder values for the Log In page.
                 */
                LoginComponent.prototype.renderPageData = function () {
                    var _this = this;
                    this.loginService.getLoginFormInfo(this.language, this.i18nMessages).subscribe(function (data) {
                        // Translate labels and messages
                        var dataI18n = data.i18nMessagesMap;
                        var entity = data.entity;
                        _this.loginLabel = dataI18n.Login;
                        _this.emailAddressLabel = 'emailAddress' === entity.authorizationType ? _this.userIdOrEmailLabel = dataI18n['email-address'] : _this.userIdOrEmailLabel = dataI18n['user-id'];
                        _this.passwordLabel = dataI18n.password;
                        _this.rememberMeLabel = dataI18n['remember-me'];
                        _this.loginButton = dataI18n['sign-in'].toUpperCase();
                        _this.forgotPasswordButton = dataI18n['get-new-password'];
                        _this.cancelButton = dataI18n.cancel;
                        _this.serverLabel = dataI18n.Server;
                        _this.mandatoryFieldError = dataI18n['error.form.mandatory'];
                        _this.communityLicenseInfoMessage = dataI18n['angular.login.component.community.licence.message'];
                        _this.resetPasswordSuccess = dataI18n['reset-password-success'];
                        _this.resetEmailMessage = dataI18n['a-new-password-has-been-sent-to-x'];
                        // Set dotCMS Info
                        _this.dotcmscompanyLogo = entity.logo;
                        _this.dotcmsServerId = entity.serverId;
                        _this.dotcmslicenceLevel = entity.levelName;
                        if (_this.dotcmslicenceLevel.indexOf('COMMUNITY') !== -1) {
                            _this.isCommunityLicense = true;
                        }
                        else {
                            _this.isCommunityLicense = false;
                        }
                        _this.dotcmsVersion = entity.version;
                        _this.dotcmsBuildDateString = entity.buildDateString;
                        // Configure languages
                        if (_this.languages.length === 0) {
                            var currentLanguage = entity.currentLanguage;
                            entity.languages.forEach(function (lang) {
                                _this.languages.push({
                                    label: lang.displayName,
                                    value: lang.language + '_' + lang.country,
                                });
                            });
                            _this.language = currentLanguage.language + '_' + currentLanguage.country;
                        }
                        if (_this.passwordChanged) {
                            _this.message = _this.resetPasswordSuccess;
                        }
                        if (_this.resetEmailSent) {
                            _this.message = _this.resetEmailMessage.replace('{0}', _this.resetEmail);
                        }
                    }, function (error) {
                        _this.loggerService.debug(error);
                    });
                };
                /**
                 * Display the forgot password card
                 */
                LoginComponent.prototype.showForgotPassword = function () {
                    this.recoverPassword.emit();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], LoginComponent.prototype, "isLoginInProgress", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], LoginComponent.prototype, "message", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], LoginComponent.prototype, "passwordChanged", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], LoginComponent.prototype, "resetEmailSent", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], LoginComponent.prototype, "resetEmail", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], LoginComponent.prototype, "recoverPassword", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], LoginComponent.prototype, "login", void 0);
                LoginComponent = __decorate([
                    core_1.Component({
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        moduleId: __moduleName,
                        selector: 'dot-login-component',
                        templateUrl: ['login-component.html'],
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, core_1.NgZone, logger_service_1.LoggerService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login-component.js.map