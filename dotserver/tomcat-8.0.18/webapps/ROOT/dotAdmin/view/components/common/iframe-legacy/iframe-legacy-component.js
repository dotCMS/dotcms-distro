System.register(['@angular/core', '../../../../api/services/login-service', '@angular/router', '../../../../api/services/routing-service', '@angular/platform-browser', '../../../../api/util/site-change-listener', '../../../../api/services/site-service', '../../../../api/services/dotcms-events-service', '../../../../api/services/messages-service', '../../../../api/services/logger.service', '../../../../api/services/iframe-overlay-service'], function(exports_1, context_1) {
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
    var core_1, login_service_1, router_1, routing_service_1, platform_browser_1, site_change_listener_1, site_service_1, dotcms_events_service_1, messages_service_1, logger_service_1, iframe_overlay_service_1;
    var IframeLegacyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (routing_service_1_1) {
                routing_service_1 = routing_service_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (site_change_listener_1_1) {
                site_change_listener_1 = site_change_listener_1_1;
            },
            function (site_service_1_1) {
                site_service_1 = site_service_1_1;
            },
            function (dotcms_events_service_1_1) {
                dotcms_events_service_1 = dotcms_events_service_1_1;
            },
            function (messages_service_1_1) {
                messages_service_1 = messages_service_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (iframe_overlay_service_1_1) {
                iframe_overlay_service_1 = iframe_overlay_service_1_1;
            }],
        execute: function() {
            IframeLegacyComponent = (function (_super) {
                __extends(IframeLegacyComponent, _super);
                function IframeLegacyComponent(route, routingService, siteService, sanitizer, element, loginService, dotcmsEventsService, messageService, loggerService, iframeOverlayService) {
                    var _this = this;
                    _super.call(this, siteService, ['ask-reload-page-message'], messageService);
                    this.route = route;
                    this.routingService = routingService;
                    this.siteService = siteService;
                    this.sanitizer = sanitizer;
                    this.element = element;
                    this.loginService = loginService;
                    this.dotcmsEventsService = dotcmsEventsService;
                    this.loggerService = loggerService;
                    this.iframeOverlayService = iframeOverlayService;
                    this.loadingInProgress = true;
                    this.showOverlay = false;
                    /**
                     * Subscribe to the portletUrl$ changes to force the
                     * reload of a portlet in the iframe legacy component
                     * when the user click the subnav link and the user is on the
                     * same portlet or other
                     */
                    routingService.portletUrl$.subscribe(function (url) {
                        _this.reloadIframePortlet(url);
                    });
                }
                IframeLegacyComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.iframeOverlayService.overlay.subscribe(function (val) { return _this.showOverlay = val; });
                    this.initComponent();
                    var events = ['SAVE_FOLDER', 'UPDATE_FOLDER', 'DELETE_FOLDER', 'SAVE_PAGE_ASSET', 'UPDATE_PAGE_ASSET',
                        'ARCHIVE_PAGE_ASSET', 'UN_ARCHIVE_PAGE_ASSET', 'DELETE_PAGE_ASSET', 'PUBLISH_PAGE_ASSET', 'UN_PUBLISH_PAGE_ASSET',
                        'SAVE_FILE_ASSET', 'UPDATE_FILE_ASSET', 'ARCHIVE_FILE_ASSET', 'UN_ARCHIVE_FILE_ASSET', 'DELETE_FILE_ASSET',
                        'PUBLISH_FILE_ASSET', 'UN_PUBLISH_FILE_ASSET', 'SAVE_LINK', 'UPDATE_LINK', 'ARCHIVE_LINK', 'UN_ARCHIVE_LINK',
                        'MOVE_LINK', 'COPY_LINK', 'DELETE_LINK', 'PUBLISH_LINK', 'UN_PUBLISH_LINK', 'MOVE_FOLDER', 'COPY_FOLDER',
                        'MOVE_FILE_ASSET', 'COPY_FILE_ASSET', 'MOVE_PAGE_ASSET', 'COPY_PAGE_ASSET'
                    ];
                    this.dotcmsEventsService.subscribeToEvents(events).subscribe(function (eventTypeWrapper) {
                        if (_this.routingService.currentPortletId === 'site-browser') {
                            _this.loggerService.debug('Capturing Site Browser event', eventTypeWrapper.eventType, eventTypeWrapper.data);
                        }
                    });
                };
                IframeLegacyComponent.prototype.ngAfterViewInit = function () {
                    this.iframeElement = this.element.nativeElement.querySelector('iframe');
                    this.resizeComponent();
                };
                IframeLegacyComponent.prototype.resizeComponent = function () {
                    this.element.nativeElement.style.height = (window.innerHeight - 64) + 'px';
                };
                IframeLegacyComponent.prototype.reloadIframe = function () {
                    this.loadingInProgress = true;
                    this.iframeElement.contentWindow.location.reload();
                };
                IframeLegacyComponent.prototype.hideLoadingIndicator = function ($event) {
                    this.loadingInProgress = false;
                };
                /**
                 * Hide the loading indicator
                 * @param $event
                 */
                IframeLegacyComponent.prototype.hideLoadingIndicator = function ($event) {
                    this.loadingInProgress = false;
                };
                IframeLegacyComponent.prototype.initComponent = function () {
                    var _this = this;
                    this.route.params.pluck('id').subscribe(function (id) {
                        _this.iframe = _this.loadURL(_this.routingService.getPortletURL(id));
                    });
                    this.route.queryParams.pluck('url').subscribe(function (url) {
                        if (url) {
                            _this.iframe = _this.loadURL(url);
                        }
                    });
                };
                IframeLegacyComponent.prototype.changeSiteReload = function () {
                    if (!this.iframeElement) {
                        this.iframeElement = this.element.nativeElement.querySelector('iframe');
                    }
                    if (this.iframeElement &&
                        this.iframeElement.contentWindow &&
                        this.iframeElement.contentWindow.location.origin !== 'null' &&
                        this.routingService.currentPortletId !== 'sites') {
                        this.reloadIframe();
                    }
                };
                IframeLegacyComponent.prototype.loadURL = function (url) {
                    var urlWithParameters = url;
                    this.loadingInProgress = true;
                    urlWithParameters += urlWithParameters.indexOf('?') === -1 ? '?' : '&';
                    urlWithParameters += urlWithParameters.indexOf('in_frame') === -1 ? 'in_frame=true&frame=detailFrame&container=true' : '';
                    return this.sanitizer.bypassSecurityTrustResourceUrl(urlWithParameters);
                };
                /**
                 * Validate if the iframe window is send to the login page after jsessionid expired
                 * then logout the user from angular session
                 */
                IframeLegacyComponent.prototype.checkSessionExpired = function () {
                    var _this = this;
                    if (this.iframeElement && this.iframeElement.contentWindow) {
                        var currentPath = this.iframeElement.contentWindow.location.pathname;
                        if (currentPath.indexOf('/c/portal_public/login') !== -1) {
                            this.loginService.logOutUser().subscribe(function (data) {
                            }, function (error) {
                                _this.loggerService.error(error);
                            });
                        }
                    }
                };
                /**
                 * Force to reload the current iframe component portlet,
                 * with the specified portlet url
                 * @param url Url of the portlet to display
                 */
                IframeLegacyComponent.prototype.reloadIframePortlet = function (url) {
                    if (url !== undefined && url !== '') {
                        var urlSplit = url.split('/');
                        var id = urlSplit[urlSplit.length - 1];
                        this.iframe = this.loadURL(this.routingService.getPortletURL(id));
                    }
                };
                IframeLegacyComponent = __decorate([
                    core_1.Component({
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        moduleId: __moduleName,
                        selector: 'dot-iframe',
                        styleUrls: ['iframe-legacy-component.css'],
                        templateUrl: ['iframe-legacy-component.html'],
                        host: {
                            '(window:resize)': 'resizeComponent($event)'
                        }
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, routing_service_1.RoutingService, site_service_1.SiteService, platform_browser_1.DomSanitizer, core_1.ElementRef, login_service_1.LoginService, dotcms_events_service_1.DotcmsEventsService, messages_service_1.MessageService, logger_service_1.LoggerService, iframe_overlay_service_1.IframeOverlayService])
                ], IframeLegacyComponent);
                return IframeLegacyComponent;
            }(site_change_listener_1.SiteChangeListener));
            exports_1("IframeLegacyComponent", IframeLegacyComponent);
        }
    }
});
//# sourceMappingURL=iframe-legacy-component.js.map