System.register(['../../view/components/common/_base/base-component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var base_component_1;
    var SiteChangeListener;
    return {
        setters:[
            function (base_component_1_1) {
                base_component_1 = base_component_1_1;
            }],
        execute: function() {
            SiteChangeListener = (function (_super) {
                __extends(SiteChangeListener, _super);
                function SiteChangeListener(siteService, i18nKeys, messageService) {
                    var _this = this;
                    _super.call(this, i18nKeys, messageService);
                    this.siteService = siteService;
                    this.messageService = messageService;
                    siteService.switchSite$.subscribe(function (site) { return _this.changeSiteReload(site); });
                }
                return SiteChangeListener;
            }(base_component_1.BaseComponent));
            exports_1("SiteChangeListener", SiteChangeListener);
        }
    }
});
//# sourceMappingURL=site-change-listener.js.map