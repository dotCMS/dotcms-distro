System.register(['../_base/base-component', '@angular/core', '../../../../api/services/login-service', '../../../../api/services/messages-service', '../../../../api/services/dot-router-service', "primeng/primeng"], function(exports_1, context_1) {
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
    var base_component_1, core_1, login_service_1, messages_service_1, dot_router_service_1, primeng_1;
    var LoginAsComponent;
    return {
        setters:[
            function (base_component_1_1) {
                base_component_1 = base_component_1_1;
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
            function (dot_router_service_1_1) {
                dot_router_service_1 = dot_router_service_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
            }],
        execute: function() {
            LoginAsComponent = (function (_super) {
                __extends(LoginAsComponent, _super);
                function LoginAsComponent(loginService, router, messageService) {
                    _super.call(this, ['Change', 'cancel', 'password', 'loginas.select.loginas.user', 'login-as'], messageService);
                    this.loginService = loginService;
                    this.router = router;
                    this.messageService = messageService;
                    this.cancel = new core_1.EventEmitter();
                    this.needPassword = false;
                }
                LoginAsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.loginService.getLoginAsUsersList().subscribe(function (data) {
                        _this.userLists = data;
                    });
                };
                LoginAsComponent.prototype.close = function () {
                    this.cancel.emit(true);
                    return false;
                };
                /**
                 * Calls the back-end service that will change the appropriate request and session
                 * attributes in order to impersonate the specified user. If an error occurs, a
                 * message will be displayed to the user indicating so.
                 *
                 * @param options - The parameters required by the back-end service.
                 */
                LoginAsComponent.prototype.dolLoginAs = function (options) {
                    var _this = this;
                    var parameters = { userId: options.user.value, password: options.password };
                    this.loginService.loginAs(parameters).subscribe(function (data) {
                        if (data) {
                            _this.router.goToMain();
                            _this.close();
                        }
                        // TODO: Replace the alert below with a modal error message.
                    }, function (message) { return alert(message); });
                };
                LoginAsComponent.prototype.userSelectedHandler = function ($event) {
                    this.needPassword = this.loginService.getLoginAsUser($event.value).requestPassword || false;
                };
                /**
                 * Filter the users displayed in the dropdown by comparing if
                 * the user name characters set on the drowpdown search box matches
                 * some on the user names set on the userlist variable loaded on the
                 * ngOnInit method
                 *
                 * @param event - The event with the query parameter to filter the users
                 */
                LoginAsComponent.prototype.filterUsers = function (event) {
                    this.filteredLoginAsUsersResults = this.userLists.
                        filter(function (user) { return user.fullName.toLowerCase().indexOf(event.query.toLowerCase()) >= 0; })
                        .map(function (user) {
                        return {
                            label: user.fullName,
                            value: user.userId
                        };
                    });
                };
                /**
                 * Display all the existing login as users availables loaded on the
                 * userList variable initialized on the ngOnInit method
                 *
                 * @param event - The click event to display the dropdown options
                 */
                LoginAsComponent.prototype.handleLoginAsUsersDropdownClick = function (event) {
                    var _this = this;
                    // TODO: get rid of this lines when this is fixed: https://github.com/primefaces/primeng/issues/745
                    event.originalEvent.preventDefault();
                    event.originalEvent.stopPropagation();
                    if (this.autoCompleteComponent.panelVisible) {
                        this.autoCompleteComponent.onDropdownBlur();
                        this.autoCompleteComponent.hide();
                    }
                    else {
                        this.autoCompleteComponent.onDropdownFocus();
                        this.autoCompleteComponent.show();
                    }
                    this.filteredLoginAsUsersResults = [];
                    /**
                     * This time out is included to imitate a remote call and
                     * avoid that the suggestion box is not displayed, because
                     * the autocomplete hide method is execute after the the show
                     * method.
                     *
                     * TODO - remove the setTimeout when we add the pagination option
                     * making a call to the login service to get a subset of login as users
                     * paginated to display on the dropdown sugestions pannel.
                     *
                     */
                    setTimeout(function () {
                        _this.filteredLoginAsUsersResults = _this.userLists.map(function (user) {
                            return {
                                label: user.fullName,
                                value: user.userId,
                            };
                        });
                    }, 100);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], LoginAsComponent.prototype, "cancel", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], LoginAsComponent.prototype, "visible", void 0);
                __decorate([
                    core_1.ViewChild(primeng_1.AutoComplete), 
                    __metadata('design:type', primeng_1.AutoComplete)
                ], LoginAsComponent.prototype, "autoCompleteComponent", void 0);
                LoginAsComponent = __decorate([
                    core_1.Component({
                        directives: [],
                        encapsulation: core_1.ViewEncapsulation.None,
                        moduleId: __moduleName,
                        providers: [],
                        selector: 'dot-login-as',
                        styleUrls: ['login-as.css'],
                        templateUrl: ['login-as.html']
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, dot_router_service_1.DotRouterService, messages_service_1.MessageService])
                ], LoginAsComponent);
                return LoginAsComponent;
            }(base_component_1.BaseComponent));
            exports_1("LoginAsComponent", LoginAsComponent);
        }
    }
});
//# sourceMappingURL=login-as.js.map