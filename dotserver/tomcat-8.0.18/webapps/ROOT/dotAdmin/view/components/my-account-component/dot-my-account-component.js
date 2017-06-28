System.register(['../common/_base/base-component', '../../../api/services/account-service', '@angular/core', '../../../api/services/login-service', '../../../api/services/messages-service', '../../../api/util/stringFormat'], function(exports_1, context_1) {
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
    var base_component_1, account_service_1, core_1, login_service_1, messages_service_1, stringFormat_1;
    var MyAccountComponent;
    return {
        setters:[
            function (base_component_1_1) {
                base_component_1 = base_component_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (messages_service_1_1) {
                messages_service_1 = messages_service_1_1;
            },
            function (stringFormat_1_1) {
                stringFormat_1 = stringFormat_1_1;
            }],
        execute: function() {
            MyAccountComponent = (function (_super) {
                __extends(MyAccountComponent, _super);
                function MyAccountComponent(loginService, accountService, messageService, stringFormat) {
                    _super.call(this, ['my-account', 'modes.Close', 'save', 'error.form.mandatory', 'errors.email', 'First-Name',
                        'Last-Name', 'email-address', 'new-password', 're-enter-new-password', 'error.forgot.password.passwords.dont.match',
                        'message.createaccount.success', 'Error-communicating-with-server-Please-try-again', 'change-password', 'current-password'], messageService);
                    this.loginService = loginService;
                    this.accountService = accountService;
                    this.messageService = messageService;
                    this.stringFormat = stringFormat;
                    this.close = new core_1.EventEmitter();
                    this.accountUser = {
                        currentPassword: '',
                        email: '',
                        givenName: '',
                        surname: '',
                        userId: ''
                    };
                    this.message = null;
                    this.changePasswordOption = false;
                    this.passwordMatch = false;
                    this.changePasswordOption = false;
                    this.loginService.watchUser(this.loadUser.bind(this));
                }
                MyAccountComponent.prototype.checkPasswords = function () {
                    if (this.message) {
                        this.message = null;
                    }
                    this.passwordMatch = this.accountUser.newPassword !== '' && this.passwordConfirm !== '' &&
                        this.accountUser.newPassword === this.passwordConfirm;
                };
                MyAccountComponent.prototype.toggleChangePasswordOption = function () {
                    this.changePasswordOption = !this.changePasswordOption;
                };
                MyAccountComponent.prototype.getRequiredMessage = function (item) {
                    return this.stringFormat.formatMessage(this.i18nMessages['error.form.mandatory'], item);
                };
                MyAccountComponent.prototype.loadUser = function (auth) {
                    var user = auth.user;
                    this.accountUser = {
                        email: user.emailAddress,
                        givenName: user.firstName,
                        surname: user.lastName,
                        userId: user.userId
                    };
                    this.accountUser.newPassword = null;
                    this.passwordConfirm = null;
                };
                MyAccountComponent.prototype.save = function () {
                    var _this = this;
                    this.accountService.updateUser(this.accountUser).subscribe(function (response) {
                        // TODO: replace the alert with a Angular components
                        alert(_this.i18nMessages['message.createaccount.success']);
                        _this.close.emit();
                        if (response.entity.reauthenticate) {
                            _this.loginService.logOutUser().subscribe(function () { });
                        }
                        else {
                            _this.loginService.setAuth({
                                loginAsUser: null,
                                user: response.entity.user
                            });
                        }
                    }, function (response) {
                        // TODO: We have to define how must be the user feedback in case of error
                        _this.message = response.errorsMessages;
                    });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MyAccountComponent.prototype, "close", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], MyAccountComponent.prototype, "visible", void 0);
                MyAccountComponent = __decorate([
                    core_1.Component({
                        encapsulation: core_1.ViewEncapsulation.None,
                        moduleId: __moduleName,
                        selector: 'dot-my-account',
                        styleUrls: ['dot-my-account-component.css'],
                        templateUrl: ['dot-my-account-component.html'],
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, account_service_1.AccountService, messages_service_1.MessageService, stringFormat_1.StringFormat])
                ], MyAccountComponent);
                return MyAccountComponent;
            }(base_component_1.BaseComponent));
            exports_1("MyAccountComponent", MyAccountComponent);
        }
    }
});
//# sourceMappingURL=dot-my-account-component.js.map