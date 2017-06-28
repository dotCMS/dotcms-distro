System.register(['@angular/platform-browser', '@angular/forms', '@angular/http', '@angular/core', 'angular2-logger/core', '@angular/common', './app.routing', '../../api/services/account-service', '../../api/persistence/ApiRoot', '../../api/services/bundle-service', '../../api/services/core-web-service', '../../api/services/system/dotcms-config', '../../api/services/dotcms-events-service', '../../api/services/format-date-service', '../../api/services/login-service', '../../api/services/messages-service', '../../api/services/notifications-service', '../../api/services/not-licensed-service', '../../api/services/routing-public-auth-service', '../../api/services/routing-private-auth-service', '../../api/services/routing-service', '../../api/services/site-service', '../../api/services/dot-router-service', '../../api/util/stringFormat', '../../api/services/iframe-overlay-service', '../../api/rule-engine/Action', '../../api/rule-engine/ConditionGroup', '../../api/rule-engine/Condition', '../../api/maps/GoogleMapService', '../../api/system/locale/I18n', '../../api/rule-engine/Rule', '../../api/auth/UserModel', './app', './common/accordion/accordion', './common/dot-loading-indicator/dot-loading-indicator', './common/custom-time/custom-time', './common/dropdown-component/dropdown-component', './common/login/forgot-password-component/forgot-password-component', './common/login/forgot-password-component/forgot-password-container', './common/global-search/global-search', './common/iframe-legacy/iframe-legacy-component', './common/login-as/login-as', './common/login/login-component/login-component', './common/login/login-component/login-container', './common/login/login-page-component', './common/main-component/main-component', './common/main-navigation/main-navigation', './my-account-component/dot-my-account-component', './common/notifications/notifications', './common/pattern-library/pattern-library', './common/login/reset-password-component/reset-password-component', './common/login/reset-password-component/reset-password-container', './site-selector/dot-site-selector-component', './toolbar-add-contentlet/toolbar-add-contentlet', './common/toolbar-notifications/toolbar-notifications', './common/toolbar-user/toolbar-user', './not-licensed-component/not-licensed-component', './common/push-publish/add-to-bundle-dialog-component', './common/push-publish/add-to-bundle-dialog-container', './common/google-map/area-picker-dialog.component', './rule-engine/rule-condition-component', './rule-engine/rule-condition-group-component', './semantic/modules/dropdown/dropdown', './semantic/elements/input-date/input-date', './semantic/elements/input-text/input-text', './input/toggle/inputToggle', './common/modal-dialog/dialog-component', './common/push-publish/push-publish-dialog-component', './common/push-publish/push-publish-dialog-container', './semantic/modules/restdropdown/RestDropdown', './rule-engine/rule-action-component', './rule-engine/rule-component', './rule-engine/rule-engine', './rule-engine/rule-engine.container', './rule-engine/condition-types/serverside-condition/serverside-condition', './rule-engine/custom-types/visitors-location/visitors-location.component', './rule-engine/custom-types/visitors-location/visitors-location.container', '../../api/pipes/capitalize-pipe', '../directives/message-keys', 'primeng/primeng', './main-core-component/MainCoreComponent', '../../api/services/logger.service', './common/login/login-component/log-out-container', '../../api/util/config', '../../api/util/string.utils', '../../api/services/protocol/socket-factory'], function(exports_1, context_1) {
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
    var platform_browser_1, forms_1, http_1, core_1, core_2, common_1, app_routing_1, account_service_1, ApiRoot_1, bundle_service_1, core_web_service_1, dotcms_config_1, dotcms_events_service_1, format_date_service_1, login_service_1, messages_service_1, notifications_service_1, not_licensed_service_1, routing_public_auth_service_1, routing_private_auth_service_1, routing_service_1, site_service_1, dot_router_service_1, stringFormat_1, iframe_overlay_service_1, Action_1, ConditionGroup_1, Condition_1, GoogleMapService_1, I18n_1, Rule_1, UserModel_1, app_1, accordion_1, dot_loading_indicator_1, custom_time_1, dropdown_component_1, forgot_password_component_1, forgot_password_container_1, global_search_1, iframe_legacy_component_1, login_as_1, login_component_1, login_container_1, login_page_component_1, main_component_1, main_navigation_1, dot_my_account_component_1, notifications_1, pattern_library_1, reset_password_component_1, reset_password_container_1, dot_site_selector_component_1, toolbar_add_contentlet_1, toolbar_notifications_1, toolbar_user_1, not_licensed_component_1, add_to_bundle_dialog_component_1, add_to_bundle_dialog_container_1, area_picker_dialog_component_1, rule_condition_component_1, rule_condition_group_component_1, dropdown_1, input_date_1, input_text_1, inputToggle_1, dialog_component_1, push_publish_dialog_component_1, push_publish_dialog_container_1, RestDropdown_1, rule_action_component_1, rule_component_1, rule_engine_1, rule_engine_container_1, serverside_condition_1, visitors_location_component_1, visitors_location_container_1, capitalize_pipe_1, message_keys_1, primeng_1, primeng_2, primeng_3, primeng_4, primeng_5, primeng_6, MainCoreComponent_1, primeng_7, primeng_8, primeng_9, logger_service_1, log_out_container_1, config_1, string_utils_1, socket_factory_1;
    var RULES_ENGINE_COMPONENTS, COMPONENTS, PIPES, DIRECTIVES, RULES_ENGINE_SERVICES, NGFACES_MODULES, AppModule;
    return {
        setters:[
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (ApiRoot_1_1) {
                ApiRoot_1 = ApiRoot_1_1;
            },
            function (bundle_service_1_1) {
                bundle_service_1 = bundle_service_1_1;
            },
            function (core_web_service_1_1) {
                core_web_service_1 = core_web_service_1_1;
            },
            function (dotcms_config_1_1) {
                dotcms_config_1 = dotcms_config_1_1;
            },
            function (dotcms_events_service_1_1) {
                dotcms_events_service_1 = dotcms_events_service_1_1;
            },
            function (format_date_service_1_1) {
                format_date_service_1 = format_date_service_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (messages_service_1_1) {
                messages_service_1 = messages_service_1_1;
            },
            function (notifications_service_1_1) {
                notifications_service_1 = notifications_service_1_1;
            },
            function (not_licensed_service_1_1) {
                not_licensed_service_1 = not_licensed_service_1_1;
            },
            function (routing_public_auth_service_1_1) {
                routing_public_auth_service_1 = routing_public_auth_service_1_1;
            },
            function (routing_private_auth_service_1_1) {
                routing_private_auth_service_1 = routing_private_auth_service_1_1;
            },
            function (routing_service_1_1) {
                routing_service_1 = routing_service_1_1;
            },
            function (site_service_1_1) {
                site_service_1 = site_service_1_1;
            },
            function (dot_router_service_1_1) {
                dot_router_service_1 = dot_router_service_1_1;
            },
            function (stringFormat_1_1) {
                stringFormat_1 = stringFormat_1_1;
            },
            function (iframe_overlay_service_1_1) {
                iframe_overlay_service_1 = iframe_overlay_service_1_1;
            },
            function (Action_1_1) {
                Action_1 = Action_1_1;
            },
            function (ConditionGroup_1_1) {
                ConditionGroup_1 = ConditionGroup_1_1;
            },
            function (Condition_1_1) {
                Condition_1 = Condition_1_1;
            },
            function (GoogleMapService_1_1) {
                GoogleMapService_1 = GoogleMapService_1_1;
            },
            function (I18n_1_1) {
                I18n_1 = I18n_1_1;
            },
            function (Rule_1_1) {
                Rule_1 = Rule_1_1;
            },
            function (UserModel_1_1) {
                UserModel_1 = UserModel_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (accordion_1_1) {
                accordion_1 = accordion_1_1;
            },
            function (dot_loading_indicator_1_1) {
                dot_loading_indicator_1 = dot_loading_indicator_1_1;
            },
            function (custom_time_1_1) {
                custom_time_1 = custom_time_1_1;
            },
            function (dropdown_component_1_1) {
                dropdown_component_1 = dropdown_component_1_1;
            },
            function (forgot_password_component_1_1) {
                forgot_password_component_1 = forgot_password_component_1_1;
            },
            function (forgot_password_container_1_1) {
                forgot_password_container_1 = forgot_password_container_1_1;
            },
            function (global_search_1_1) {
                global_search_1 = global_search_1_1;
            },
            function (iframe_legacy_component_1_1) {
                iframe_legacy_component_1 = iframe_legacy_component_1_1;
            },
            function (login_as_1_1) {
                login_as_1 = login_as_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
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
            function (main_navigation_1_1) {
                main_navigation_1 = main_navigation_1_1;
            },
            function (dot_my_account_component_1_1) {
                dot_my_account_component_1 = dot_my_account_component_1_1;
            },
            function (notifications_1_1) {
                notifications_1 = notifications_1_1;
            },
            function (pattern_library_1_1) {
                pattern_library_1 = pattern_library_1_1;
            },
            function (reset_password_component_1_1) {
                reset_password_component_1 = reset_password_component_1_1;
            },
            function (reset_password_container_1_1) {
                reset_password_container_1 = reset_password_container_1_1;
            },
            function (dot_site_selector_component_1_1) {
                dot_site_selector_component_1 = dot_site_selector_component_1_1;
            },
            function (toolbar_add_contentlet_1_1) {
                toolbar_add_contentlet_1 = toolbar_add_contentlet_1_1;
            },
            function (toolbar_notifications_1_1) {
                toolbar_notifications_1 = toolbar_notifications_1_1;
            },
            function (toolbar_user_1_1) {
                toolbar_user_1 = toolbar_user_1_1;
            },
            function (not_licensed_component_1_1) {
                not_licensed_component_1 = not_licensed_component_1_1;
            },
            function (add_to_bundle_dialog_component_1_1) {
                add_to_bundle_dialog_component_1 = add_to_bundle_dialog_component_1_1;
            },
            function (add_to_bundle_dialog_container_1_1) {
                add_to_bundle_dialog_container_1 = add_to_bundle_dialog_container_1_1;
            },
            function (area_picker_dialog_component_1_1) {
                area_picker_dialog_component_1 = area_picker_dialog_component_1_1;
            },
            function (rule_condition_component_1_1) {
                rule_condition_component_1 = rule_condition_component_1_1;
            },
            function (rule_condition_group_component_1_1) {
                rule_condition_group_component_1 = rule_condition_group_component_1_1;
            },
            function (dropdown_1_1) {
                dropdown_1 = dropdown_1_1;
            },
            function (input_date_1_1) {
                input_date_1 = input_date_1_1;
            },
            function (input_text_1_1) {
                input_text_1 = input_text_1_1;
            },
            function (inputToggle_1_1) {
                inputToggle_1 = inputToggle_1_1;
            },
            function (dialog_component_1_1) {
                dialog_component_1 = dialog_component_1_1;
            },
            function (push_publish_dialog_component_1_1) {
                push_publish_dialog_component_1 = push_publish_dialog_component_1_1;
            },
            function (push_publish_dialog_container_1_1) {
                push_publish_dialog_container_1 = push_publish_dialog_container_1_1;
            },
            function (RestDropdown_1_1) {
                RestDropdown_1 = RestDropdown_1_1;
            },
            function (rule_action_component_1_1) {
                rule_action_component_1 = rule_action_component_1_1;
            },
            function (rule_component_1_1) {
                rule_component_1 = rule_component_1_1;
            },
            function (rule_engine_1_1) {
                rule_engine_1 = rule_engine_1_1;
            },
            function (rule_engine_container_1_1) {
                rule_engine_container_1 = rule_engine_container_1_1;
            },
            function (serverside_condition_1_1) {
                serverside_condition_1 = serverside_condition_1_1;
            },
            function (visitors_location_component_1_1) {
                visitors_location_component_1 = visitors_location_component_1_1;
            },
            function (visitors_location_container_1_1) {
                visitors_location_container_1 = visitors_location_container_1_1;
            },
            function (capitalize_pipe_1_1) {
                capitalize_pipe_1 = capitalize_pipe_1_1;
            },
            function (message_keys_1_1) {
                message_keys_1 = message_keys_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
                primeng_2 = primeng_1_1;
                primeng_3 = primeng_1_1;
                primeng_4 = primeng_1_1;
                primeng_5 = primeng_1_1;
                primeng_6 = primeng_1_1;
                primeng_7 = primeng_1_1;
                primeng_8 = primeng_1_1;
                primeng_9 = primeng_1_1;
            },
            function (MainCoreComponent_1_1) {
                MainCoreComponent_1 = MainCoreComponent_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (log_out_container_1_1) {
                log_out_container_1 = log_out_container_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (string_utils_1_1) {
                string_utils_1 = string_utils_1_1;
            },
            function (socket_factory_1_1) {
                socket_factory_1 = socket_factory_1_1;
            }],
        execute: function() {
            RULES_ENGINE_COMPONENTS = [
                add_to_bundle_dialog_component_1.AddToBundleDialogComponent,
                add_to_bundle_dialog_container_1.AddToBundleDialogContainer,
                area_picker_dialog_component_1.AreaPickerDialogComponent,
                rule_condition_component_1.ConditionComponent,
                rule_condition_group_component_1.ConditionGroupComponent,
                dropdown_1.Dropdown,
                input_date_1.InputDate,
                dropdown_1.InputOption,
                input_text_1.InputText,
                inputToggle_1.InputToggle,
                dialog_component_1.ModalDialogComponent,
                push_publish_dialog_component_1.PushPublishDialogComponent,
                push_publish_dialog_container_1.PushPublishDialogContainer,
                RestDropdown_1.RestDropdown,
                rule_action_component_1.RuleActionComponent,
                rule_component_1.RuleComponent,
                rule_engine_1.RuleEngineComponent,
                rule_engine_container_1.RuleEngineContainer,
                serverside_condition_1.ServersideCondition,
                visitors_location_component_1.VisitorsLocationComponent,
                visitors_location_container_1.VisitorsLocationContainer,
            ];
            COMPONENTS = [
                accordion_1.Accordion,
                accordion_1.AccordionGroup,
                app_1.AppComponent,
                custom_time_1.CustomTimeComponent,
                dot_loading_indicator_1.DotLoadingIndicator,
                dropdown_component_1.DropdownComponent,
                forgot_password_component_1.ForgotPasswordComponent,
                forgot_password_container_1.ForgotPasswordContainer,
                global_search_1.GlobalSearch,
                iframe_legacy_component_1.IframeLegacyComponent,
                login_as_1.LoginAsComponent,
                login_component_1.LoginComponent,
                login_container_1.LoginContainer,
                login_page_component_1.LoginPageComponent,
                main_component_1.MainComponent,
                main_navigation_1.MainNavigation,
                dot_my_account_component_1.MyAccountComponent,
                notifications_1.NotificationsItem,
                notifications_1.NotificationsList,
                pattern_library_1.PatternLibrary,
                reset_password_component_1.ResetPasswordComponent,
                reset_password_container_1.ResetPasswordContainer,
                dot_site_selector_component_1.SiteSelectorComponent,
                toolbar_add_contentlet_1.ToolbarAddContenletBodyComponent,
                toolbar_add_contentlet_1.ToolbarAddContenletComponent,
                toolbar_notifications_1.ToolbarNotifications,
                toolbar_user_1.ToolbarUserComponent,
                MainCoreComponent_1.MainCoreComponent,
                not_licensed_component_1.NotLicensedComponent,
                log_out_container_1.LogOutContainer
            ];
            PIPES = [
                capitalize_pipe_1.CapitalizePipe
            ];
            DIRECTIVES = [
                message_keys_1.MessageKeyDirective
            ];
            RULES_ENGINE_SERVICES = [
                Action_1.ActionService,
                ConditionGroup_1.ConditionGroupService,
                Condition_1.ConditionService,
                GoogleMapService_1.GoogleMapService,
                I18n_1.I18nService,
                Rule_1.RuleService,
            ];
            NGFACES_MODULES = [
                primeng_1.InputTextModule,
                primeng_2.PasswordModule,
                primeng_3.CheckboxModule,
                primeng_9.RadioButtonModule,
                primeng_4.ButtonModule,
                primeng_5.DropdownModule,
                primeng_6.AutoCompleteModule,
                primeng_7.ToolbarModule,
                primeng_8.DialogModule
            ];
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        bootstrap: [app_1.AppComponent],
                        declarations: PIPES.concat(COMPONENTS, DIRECTIVES, RULES_ENGINE_COMPONENTS),
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            http_1.HttpModule,
                            forms_1.ReactiveFormsModule,
                            app_routing_1.routing
                        ].concat(NGFACES_MODULES),
                        providers: [
                            string_utils_1.StringUtils,
                            config_1.Config,
                            core_2.Logger,
                            logger_service_1.LoggerService,
                            core_web_service_1.CoreWebService,
                            not_licensed_service_1.NotLicensedService,
                            account_service_1.AccountService,
                            ApiRoot_1.ApiRoot,
                            bundle_service_1.BundleService,
                            dotcms_config_1.DotcmsConfig,
                            dotcms_events_service_1.DotcmsEventsService,
                            dot_router_service_1.DotRouterService,
                            format_date_service_1.FormatDateService,
                            login_service_1.LoginService,
                            messages_service_1.MessageService,
                            notifications_service_1.NotificationsService,
                            routing_public_auth_service_1.RoutingPublicAuthService,
                            routing_private_auth_service_1.RoutingPrivateAuthService,
                            routing_service_1.RoutingService,
                            site_service_1.SiteService,
                            stringFormat_1.StringFormat,
                            UserModel_1.UserModel,
                            iframe_overlay_service_1.IframeOverlayService
                        ].concat(RULES_ENGINE_SERVICES, [
                            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                            socket_factory_1.SocketFactory
                        ])
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map