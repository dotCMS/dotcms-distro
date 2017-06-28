System.register(['@angular/core', '../../../../api/services/login-service', '../../../../api/services/logger.service'], function(exports_1, context_1) {
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
    var LoginPageComponent;
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
            LoginPageComponent = (function () {
                function LoginPageComponent(loginService, loggerService) {
                    this.loginService = loginService;
                    this.loggerService = loggerService;
                    this.recoverPassword = new core_1.EventEmitter(false);
                }
                LoginPageComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.loginService.getLoginFormInfo('', []).subscribe(function (data) {
                        // Translate labels and messages
                        var entity = data.entity;
                        // Set background color and image with the values provided by the service
                        if (entity.backgroundColor !== 'undefined' && entity.backgroundColor !== '') {
                            document.body.style.backgroundColor = entity.backgroundColor;
                        }
                        if (entity.backgroundPicture !== 'undefined' && entity.backgroundPicture !== '') {
                            document.body.style.backgroundImage = 'url(' + entity.backgroundPicture + ')';
                        }
                    }, function (error) {
                        _this.loggerService.debug(error);
                    });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], LoginPageComponent.prototype, "recoverPassword", void 0);
                LoginPageComponent = __decorate([
                    core_1.Component({
                        encapsulation: core_1.ViewEncapsulation.None,
                        moduleId: __moduleName,
                        selector: 'dot-login-page-component',
                        styleUrls: ['login-page.css'],
                        templateUrl: ['login-page-component.html'],
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, logger_service_1.LoggerService])
                ], LoginPageComponent);
                return LoginPageComponent;
            }());
            exports_1("LoginPageComponent", LoginPageComponent);
        }
    }
});
//# sourceMappingURL=login-page-component.js.map