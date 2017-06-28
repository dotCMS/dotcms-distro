System.register(['@angular/core', './core-web-service', '@angular/http', 'rxjs/Subject', './login-service', './dotcms-events-service', './logger.service'], function(exports_1, context_1) {
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
    var core_1, core_web_service_1, http_1, Subject_1, login_service_1, dotcms_events_service_1, logger_service_1;
    var SiteService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_web_service_1_1) {
                core_web_service_1 = core_web_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (dotcms_events_service_1_1) {
                dotcms_events_service_1 = dotcms_events_service_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            SiteService = (function () {
                function SiteService(loginService, dotcmsEventsService, coreWebService, loggerService) {
                    var _this = this;
                    this.coreWebService = coreWebService;
                    this.loggerService = loggerService;
                    this._switchSite$ = new Subject_1.Subject();
                    this._sites$ = new Subject_1.Subject();
                    this._sitesCounter$ = new Subject_1.Subject();
                    this.events = ['SAVE_SITE', 'PUBLISH_SITE', 'UPDATE_SITE_PERMISSIONS', 'UN_ARCHIVE_SITE', 'UPDATE_SITE'];
                    this.eventsWithSwitch = ['ARCHIVE_SITE'];
                    this.urls = {
                        allSiteUrl: 'v1/site/currentSite',
                        sitesUrl: 'v1/site',
                        switchSiteUrl: 'v1/site/switch'
                    };
                    dotcmsEventsService.subscribeToEvents(this.events).subscribe(function (eventTypeWrapper) {
                        _this.loggerService.debug('Capturing Site event', eventTypeWrapper.eventType, eventTypeWrapper.data);
                        // Update the sites list
                        _this.loadSites();
                    });
                    dotcmsEventsService.subscribeToEvents(this.eventsWithSwitch).subscribe(function (eventTypeWrapper) {
                        _this.loggerService.debug('Capturing Site event', eventTypeWrapper.eventType, eventTypeWrapper.data);
                        // Update the sites list
                        _this.loadSitesAndSwitch(eventTypeWrapper.data.data.identifier);
                    });
                    loginService.watchUser(this.loadSites.bind(this));
                }
                Object.defineProperty(SiteService.prototype, "switchSite$", {
                    get: function () {
                        return this._switchSite$.asObservable();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SiteService.prototype, "sites$", {
                    get: function () {
                        return this._sites$.asObservable();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SiteService.prototype, "sitesCounter$", {
                    get: function () {
                        return this._sitesCounter$.asObservable();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SiteService.prototype, "currentSite", {
                    get: function () {
                        return this.selectedSite;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Return the sites available for an user paginated and filtered.
                 *
                 * @param filter (String) Text to filter the site names
                 * @param archived (Boolean) Indicate if the results should include the archived sites
                 * @param page (Int) Number of the page to display
                 * @param count (Int) number of sites to show per page
                 * @returns {Observable<R>} return a map with the list of paginated sites and if there
                 * is a previous and next page that can be displayed
                 */
                SiteService.prototype.paginateSites = function (filter, archived, page, count) {
                    var _this = this;
                    return this.coreWebService.requestView({
                        method: http_1.RequestMethod.Get,
                        url: this.urls.sitesUrl + "?filter=" + filter + "&archived=" + archived + "&page=" + page + "&count=" + count,
                    }).map(function (response) {
                        _this.setSites(response.entity.sites.results);
                        return response.entity;
                    });
                };
                SiteService.prototype.switchSite = function (siteId) {
                    var _this = this;
                    this.loggerService.debug('Applying a Site Switch', siteId);
                    return this.coreWebService.requestView({
                        method: http_1.RequestMethod.Put,
                        url: this.urls.switchSiteUrl + "/" + siteId,
                    }).map(function (response) {
                        _this.setCurrentSiteIdentifier(siteId);
                        return response;
                    });
                };
                SiteService.prototype.setCurrentSiteIdentifier = function (siteIdentifier) {
                    this.selectedSite = Object.assign({}, this.sites.filter(function (site) { return site.identifier === siteIdentifier; })[0]);
                    this._switchSite$.next(this.selectedSite);
                };
                SiteService.prototype.setNextAndSwitchSite = function (siteIdentifier) {
                    this.selectedSite = Object.assign({}, this.sites.filter(function (site) { return site.identifier !== siteIdentifier; })[0]);
                    this._switchSite$.next(this.selectedSite);
                    this.switchSite(this.selectedSite.identifier).subscribe(function (response) {
                        // For now do nothing....
                    });
                };
                SiteService.prototype.loadSites = function () {
                    var _this = this;
                    this.coreWebService.requestView({
                        method: http_1.RequestMethod.Get,
                        url: this.urls.allSiteUrl,
                    }).subscribe(function (response) {
                        _this.setSites(response.entity.sites);
                        _this.setSitesCounter(response.entity.sitesCounter);
                        _this.setCurrentSiteIdentifier(response.entity.currentSite);
                    });
                };
                SiteService.prototype.loadSitesAndSwitch = function (siteToExclude) {
                    var _this = this;
                    this.coreWebService.requestView({
                        method: http_1.RequestMethod.Get,
                        url: this.urls.allSiteUrl,
                    }).subscribe(function (response) {
                        _this.setSites(response.entity.sites);
                        _this.setSitesCounter(response.entity.sitesCounter);
                        if (siteToExclude === _this.selectedSite.identifier) {
                            _this.setNextAndSwitchSite(siteToExclude);
                        }
                        else {
                            _this.setCurrentSiteIdentifier(response.entity.currentSite);
                        }
                    });
                };
                SiteService.prototype.setSites = function (sites) {
                    this.sites = sites;
                    this._sites$.next(this.sites);
                };
                SiteService.prototype.setSitesCounter = function (counter) {
                    this.sitesCounter = counter;
                    this._sitesCounter$.next(this.sitesCounter);
                };
                SiteService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, dotcms_events_service_1.DotcmsEventsService, core_web_service_1.CoreWebService, logger_service_1.LoggerService])
                ], SiteService);
                return SiteService;
            }());
            exports_1("SiteService", SiteService);
        }
    }
});
//# sourceMappingURL=site-service.js.map