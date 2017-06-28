System.register(['@angular/core', '../../../../../api/util/httpRequestUtils', '../../../../../api/services/login-service', '../../../../../api/services/dot-router-service', '../../../../../api/services/logger.service'], function(exports_1, context_1) {
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
    var core_1, httpRequestUtils_1, login_service_1, dot_router_service_1, logger_service_1;
    var LoginContainer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (httpRequestUtils_1_1) {
                httpRequestUtils_1 = httpRequestUtils_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (dot_router_service_1_1) {
                dot_router_service_1 = dot_router_service_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            LoginContainer = (function () {
                function LoginContainer(loginService, router, httprequestUtils, loggerService) {
                    this.loginService = loginService;
                    this.router = router;
                    this.httprequestUtils = httprequestUtils;
                    this.loggerService = loggerService;
                    this.isLoginInProgress = false;
                    this.passwordChanged = false;
                    this.resetEmail = '';
                    this.resetEmailSent = false;
                    // TODO: change the httpRequestUtils.getQueryParams() with an NG2 method equivalent to QueryParams on NGRX.
                    var queryParams = this.httprequestUtils.getQueryParams();
                    if (queryParams.get('changedPassword')) {
                        this.passwordChanged = queryParams.get('changedPassword');
                    }
                    else if (queryParams.get('resetEmailSent')) {
                        this.resetEmailSent = queryParams.get('resetEmailSent');
                        this.resetEmail = decodeURIComponent(queryParams.get('resetEmail'));
                    }
                }
                LoginContainer.prototype.logInUser = function (loginData) {
                    var _this = this;
                    this.isLoginInProgress = true;
                    this.message = '';
                    this.loginService.loginUser(loginData.login, loginData.password, loginData.remenberMe, loginData.language).subscribe(function (result) {
                        _this.message = '';
                        _this.router.goToMain();
                    }, function (error) {
                        if (error.response.status === 400 || error.response.status === 401) {
                            _this.message = error.errorsMessages;
                        }
                        else {
                            _this.loggerService.debug(error);
                        }
                        _this.isLoginInProgress = false;
                    });
                };
                /**
                 * Display the forgot password card
                 */
                LoginContainer.prototype.showForgotPassword = function () {
                    this.router.goToForgotPassword();
                };
                LoginContainer = __decorate([
                    core_1.Component({
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        moduleId: __moduleName,
                        providers: [httpRequestUtils_1.HttpRequestUtils],
                        selector: 'dot-login-container',
                        template: "\n        <dot-login-component\n            [message]=\"message\"\n            [isLoginInProgress] = \"isLoginInProgress\"\n            (login)=\"logInUser($event)\"\n            (recoverPassword)=\"showForgotPassword()\"\n            [passwordChanged]=\"passwordChanged\"\n            [resetEmailSent]=\"resetEmailSent\"\n            [resetEmail]=\"resetEmail\"\n        >\n        </dot-login-component>\n    ",
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, dot_router_service_1.DotRouterService, httpRequestUtils_1.HttpRequestUtils, logger_service_1.LoggerService])
                ], LoginContainer);
                return LoginContainer;
            }());
            exports_1("LoginContainer", LoginContainer);
        }
    }
});
//# sourceMappingURL=login-container.js.map