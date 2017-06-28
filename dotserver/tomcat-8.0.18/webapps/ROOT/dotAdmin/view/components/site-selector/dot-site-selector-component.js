System.register(['@angular/core', '../../../api/services/system/dotcms-config', '../../../api/services/site-service', '../../../api/services/messages-service', '../common/_base/base-component', 'primeng/primeng', '../../../api/services/iframe-overlay-service'], function(exports_1, context_1) {
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
    var core_1, dotcms_config_1, site_service_1, messages_service_1, base_component_1, primeng_1, iframe_overlay_service_1;
    var SiteSelectorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dotcms_config_1_1) {
                dotcms_config_1 = dotcms_config_1_1;
            },
            function (site_service_1_1) {
                site_service_1 = site_service_1_1;
            },
            function (messages_service_1_1) {
                messages_service_1 = messages_service_1_1;
            },
            function (base_component_1_1) {
                base_component_1 = base_component_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
            },
            function (iframe_overlay_service_1_1) {
                iframe_overlay_service_1 = iframe_overlay_service_1_1;
            }],
        execute: function() {
            SiteSelectorComponent = (function (_super) {
                __extends(SiteSelectorComponent, _super);
                function SiteSelectorComponent(siteService, messageService, config, iframeOverlayService) {
                    var _this = this;
                    _super.call(this, ['updated-current-site-message', 'archived-current-site-message', 'modes.Close'], messageService);
                    this.siteService = siteService;
                    this.iframeOverlayService = iframeOverlayService;
                    this.paginationPage = 1;
                    this.paginationQuery = '';
                    config.getConfig().subscribe(function (configParams) { return _this.paginationPerPage = configParams.defaultRestPageCount; });
                }
                SiteSelectorComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.siteService.switchSite$.subscribe(function (site) { return _this.currentSite = {
                        label: site.hostname,
                        value: site.identifier,
                    }; });
                    this.siteService.sites$.subscribe(function (sites) { return _this.sites = sites; });
                    this.siteService.sitesCounter$.subscribe(function (counter) { return _this.sitesCounter = counter; });
                };
                /**
                 * This method changes the current site for the new one
                 * clicked on the site selector.
                 *
                 * @param option the selected Site identifier
                 */
                SiteSelectorComponent.prototype.switchSite = function (option) {
                    this.siteService.switchSite(option.value).subscribe(function (response) {
                    });
                    this.iframeOverlayService.hide();
                };
                /**
                 * Filter the users displayed in the dropdown by comparing if
                 * the user name characters set on the drowpdown search box matches
                 * some on the user names set on the userlist variable loaded on the
                 * ngOnInit method
                 *
                 * @param event - The event with the query parameter to filter the users
                 */
                SiteSelectorComponent.prototype.filterSites = function (event) {
                    this.filteredSitesResults = [];
                    /**
                     * only execute the search if there is at least 3 characters
                     */
                    if (event.query.length >= 3) {
                        /**
                         * If the query change then clean the paginationPage
                         * and paginationQuery variables
                         */
                        if (this.paginationQuery !== event.query) {
                            this.paginationPage = 1;
                            this.paginationQuery = event.query;
                        }
                        this.showPaginateSites();
                    }
                };
                /**
                 * Display all the existing login as users availables loaded on the
                 * userList variable initialized on the ngOnInit method
                 *
                 * @param event - The click event to display the dropdown options
                 */
                SiteSelectorComponent.prototype.handleSitesDropdownClick = function (event) {
                    this.iframeOverlayService.toggle();
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
                    this.filteredSitesResults = [];
                    this.paginationPage = 1;
                    this.paginationQuery = 'all';
                    this.showPaginateSites();
                };
                /**
                 * Call the SiteService paginateSite method with the values set on the
                 * paginationQuery, paginationPage and paginationPerPage variables
                 */
                SiteSelectorComponent.prototype.showPaginateSites = function () {
                    var _this = this;
                    /**
                     * Call the web resource to get the subset of site results
                     */
                    this.siteService.paginateSites(this.paginationQuery, false, this.paginationPage, this.paginationPerPage).subscribe(function (response) {
                        var results = response.sites.results;
                        if (results.length) {
                            _this.iframeOverlayService.show();
                        }
                        else {
                            _this.iframeOverlayService.hide();
                        }
                        /*
                         Include the sites results for the current pagination page
                         */
                        results.forEach(function (site) {
                            _this.filteredSitesResults.push({
                                label: site.hostname,
                                value: site.identifier,
                            });
                        });
                    });
                };
                __decorate([
                    core_1.ViewChild(primeng_1.AutoComplete), 
                    __metadata('design:type', primeng_1.AutoComplete)
                ], SiteSelectorComponent.prototype, "autoCompleteComponent", void 0);
                SiteSelectorComponent = __decorate([
                    core_1.Component({
                        encapsulation: core_1.ViewEncapsulation.None,
                        moduleId: __moduleName,
                        pipes: [],
                        providers: [],
                        selector: 'dot-site-selector-component',
                        styleUrls: ['dot-site-selector-component.css'],
                        templateUrl: ['dot-site-selector-component.html'],
                    }), 
                    __metadata('design:paramtypes', [site_service_1.SiteService, messages_service_1.MessageService, dotcms_config_1.DotcmsConfig, iframe_overlay_service_1.IframeOverlayService])
                ], SiteSelectorComponent);
                return SiteSelectorComponent;
            }(base_component_1.BaseComponent));
            exports_1("SiteSelectorComponent", SiteSelectorComponent);
        }
    }
});
//# sourceMappingURL=dot-site-selector-component.js.map