System.register(['./core-web-service', '@angular/core', './login-service', '@angular/http', 'rxjs/Subject', './dotcms-events-service'], function(exports_1, context_1) {
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
    var core_web_service_1, core_1, login_service_1, http_1, Subject_1, dotcms_events_service_1;
    var ContentletService, StructureType;
    return {
        setters:[
            function (core_web_service_1_1) {
                core_web_service_1 = core_web_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (dotcms_events_service_1_1) {
                dotcms_events_service_1 = dotcms_events_service_1_1;
            }],
        execute: function() {
            ContentletService = (function () {
                function ContentletService(loginService, dotcmsEventsService, coreWebService) {
                    var _this = this;
                    this.coreWebService = coreWebService;
                    this._structureTypeView$ = new Subject_1.Subject();
                    loginService.watchUser(this.loadContentTypes.bind(this));
                    dotcmsEventsService.subscribeTo('SAVE_BASE_CONTENT_TYPE').pluck('data').subscribe(function (contentTypeView) {
                        var structureTypeView = _this.getStructureTypeView(contentTypeView.type);
                        structureTypeView.types.push(contentTypeView);
                        _this._structureTypeView$.next(_this.structureTypeView);
                    });
                    dotcmsEventsService.subscribeTo('UPDATE_BASE_CONTENT_TYPE').pluck('data').subscribe(function (contentTypeViewUpdated) {
                        var structureTypeView = _this.getStructureTypeView(contentTypeViewUpdated.type);
                        structureTypeView.types = structureTypeView.types.map(function (contentTypeView) { return contentTypeView.inode === contentTypeViewUpdated.inode ? contentTypeViewUpdated : contentTypeView; });
                        _this._structureTypeView$.next(_this.structureTypeView);
                    });
                    dotcmsEventsService.subscribeTo('DELETE_BASE_CONTENT_TYPE').pluck('data').subscribe(function (contentTypeViewRemoved) {
                        var structureTypeView = _this.getStructureTypeView(contentTypeViewRemoved.type);
                        structureTypeView.types = structureTypeView.types.filter(function (contentTypeView) { return contentTypeView.inode !== contentTypeViewRemoved.inode; });
                        _this._structureTypeView$.next(_this.structureTypeView);
                    });
                }
                Object.defineProperty(ContentletService.prototype, "structureTypeView$", {
                    get: function () {
                        return this._structureTypeView$.asObservable();
                    },
                    enumerable: true,
                    configurable: true
                });
                ContentletService.prototype.loadContentTypes = function () {
                    var _this = this;
                    this.coreWebService.requestView({
                        method: http_1.RequestMethod.Get,
                        url: 'v1/content/types'
                    }).pluck('entity').subscribe(function (structureTypeView) {
                        _this.structureTypeView = structureTypeView;
                        _this._structureTypeView$.next(structureTypeView);
                    });
                };
                ContentletService.prototype.getStructureTypeView = function (type) {
                    return this.structureTypeView.filter(function (structureTypeView) { return structureTypeView.name === type; })[0];
                };
                ContentletService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, dotcms_events_service_1.DotcmsEventsService, core_web_service_1.CoreWebService])
                ], ContentletService);
                return ContentletService;
            }());
            exports_1("ContentletService", ContentletService);
            (function (StructureType) {
                StructureType[StructureType["CONTENT"] = 0] = "CONTENT";
                StructureType[StructureType["HTMLPAGE"] = 1] = "HTMLPAGE";
                StructureType[StructureType["FILEASSET"] = 2] = "FILEASSET";
                StructureType[StructureType["WIDGET"] = 3] = "WIDGET";
                StructureType[StructureType["PERSONA"] = 4] = "PERSONA";
            })(StructureType || (StructureType = {}));
            exports_1("StructureType", StructureType);
        }
    }
});
//# sourceMappingURL=contentlet-service.js.map