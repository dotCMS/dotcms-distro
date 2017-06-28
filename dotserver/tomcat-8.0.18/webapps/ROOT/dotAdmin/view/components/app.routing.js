System.register(['./common/login/forgot-password-component/forgot-password-container', './common/iframe-legacy/iframe-legacy-component', './common/login/login-component/login-container', './common/login/login-page-component', './common/main-component/main-component', './common/pattern-library/pattern-library', './common/login/reset-password-component/reset-password-container', '@angular/router', '../../api/services/routing-public-auth-service', './rule-engine/rule-engine.container', '../constants', './main-core-component/MainCoreComponent', './not-licensed-component/not-licensed-component', './common/login/login-component/log-out-container', '../../api/services/routing-private-auth-service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var forgot_password_container_1, iframe_legacy_component_1, login_container_1, login_page_component_1, main_component_1, pattern_library_1, reset_password_container_1, router_1, routing_public_auth_service_1, rule_engine_container_1, constants_1, MainCoreComponent_1, not_licensed_component_1, log_out_container_1, routing_private_auth_service_1;
    var angularComponents, mainComponentChildren, fromCoreChildren, angularChildren, appRoutes, routing;
    return {
        setters:[
            function (forgot_password_container_1_1) {
                forgot_password_container_1 = forgot_password_container_1_1;
            },
            function (iframe_legacy_component_1_1) {
                iframe_legacy_component_1 = iframe_legacy_component_1_1;
            },
            function (login_container_1_1) {
                login_container_1 = login_container_1_1;
            },
            function (login_page_component_1_1) {
                login_page_component_1 = login_page_component_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            },
            function (pattern_library_1_1) {
                pattern_library_1 = pattern_library_1_1;
            },
            function (reset_password_container_1_1) {
                reset_password_container_1 = reset_password_container_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (routing_public_auth_service_1_1) {
                routing_public_auth_service_1 = routing_public_auth_service_1_1;
            },
            function (rule_engine_container_1_1) {
                rule_engine_container_1 = rule_engine_container_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            },
            function (MainCoreComponent_1_1) {
                MainCoreComponent_1 = MainCoreComponent_1_1;
            },
            function (not_licensed_component_1_1) {
                not_licensed_component_1 = not_licensed_component_1_1;
            },
            function (log_out_container_1_1) {
                log_out_container_1 = log_out_container_1_1;
            },
            function (routing_private_auth_service_1_1) {
                routing_private_auth_service_1 = routing_private_auth_service_1_1;
            }],
        execute: function() {
            angularComponents = [];
            angularComponents.push({ component: rule_engine_container_1.RuleEngineContainer, id: 'rules' });
            mainComponentChildren = [
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: (constants_1.CONSTANTS.ENV && constants_1.CONSTANTS.ENV === 'DEV') ? 'pl' : 'home',
                },
                {
                    component: pattern_library_1.PatternLibrary,
                    path: 'pl'
                },
                {
                    component: not_licensed_component_1.NotLicensedComponent,
                    path: 'notLicensed'
                },
                {
                    canActivate: [routing_private_auth_service_1.RoutingPrivateAuthService],
                    component: iframe_legacy_component_1.IframeLegacyComponent,
                    path: ':id'
                }
            ];
            fromCoreChildren = [];
            angularChildren = [
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: (constants_1.CONSTANTS.ENV && constants_1.CONSTANTS.ENV === 'DEV') ? 'c/pl' : 'c/home',
                },
                {
                    component: pattern_library_1.PatternLibrary,
                    path: 'c/pl'
                },
                {
                    component: not_licensed_component_1.NotLicensedComponent,
                    path: 'c/notLicensed'
                },
                {
                    canActivate: [routing_private_auth_service_1.RoutingPrivateAuthService],
                    component: iframe_legacy_component_1.IframeLegacyComponent,
                    path: 'c/:id',
                }
            ];
            angularComponents.forEach(function (component) {
                angularChildren.push({
                    canActivate: [routing_private_auth_service_1.RoutingPrivateAuthService],
                    component: component.component,
                    path: component.id
                });
                fromCoreChildren.push({
                    canActivate: [routing_private_auth_service_1.RoutingPrivateAuthService],
                    component: component.component,
                    path: component.id
                });
            });
            appRoutes = [
                {
                    canActivate: [routing_private_auth_service_1.RoutingPrivateAuthService],
                    children: angularChildren,
                    component: main_component_1.MainComponent,
                    path: '',
                },
                {
                    canActivate: [routing_private_auth_service_1.RoutingPrivateAuthService],
                    children: mainComponentChildren,
                    component: main_component_1.MainComponent,
                    path: 'c',
                },
                {
                    canActivate: [routing_public_auth_service_1.RoutingPublicAuthService],
                    children: [
                        {
                            component: forgot_password_container_1.ForgotPasswordContainer,
                            path: 'forgotPassword'
                        },
                        {
                            component: login_container_1.LoginContainer,
                            path: 'login'
                        },
                        {
                            component: reset_password_container_1.ResetPasswordContainer,
                            path: 'resetPassword/:token'
                        }
                    ],
                    component: login_page_component_1.LoginPageComponent,
                    path: 'public',
                },
                {
                    canActivate: [routing_private_auth_service_1.RoutingPrivateAuthService],
                    children: fromCoreChildren,
                    component: MainCoreComponent_1.MainCoreComponent,
                    path: 'fromCore'
                },
                {
                    component: log_out_container_1.LogOutContainer,
                    path: 'logout'
                }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routing.js.map