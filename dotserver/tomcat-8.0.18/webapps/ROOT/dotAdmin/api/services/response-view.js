System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ResponseView;
    return {
        setters:[],
        execute: function() {
            /**
             *
             *
             * <code>
             * {
             *   "errors":[],
             *   "entity":{},
             *   "messages":[],
             *   "i18nMessagesMap":{}
             * }
             * </code>
             */
            ResponseView = (function () {
                function ResponseView(resp) {
                    this.resp = resp;
                    try {
                        this.bodyJsonObject = JSON.parse(resp._body);
                    }
                    catch (e) {
                        this.bodyJsonObject = {};
                    }
                }
                Object.defineProperty(ResponseView.prototype, "i18nMessagesMap", {
                    get: function () {
                        return this.bodyJsonObject.i18nMessagesMap;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResponseView.prototype, "entity", {
                    get: function () {
                        return this.bodyJsonObject.entity;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResponseView.prototype, "errorsMessages", {
                    get: function () {
                        var errorMessages = '';
                        if (this.bodyJsonObject.errors) {
                            this.bodyJsonObject.errors.forEach(function (e) {
                                errorMessages += e.message;
                            });
                        }
                        else {
                            errorMessages = this.bodyJsonObject.message;
                        }
                        return errorMessages;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResponseView.prototype, "status", {
                    get: function () {
                        return this.resp.status;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ResponseView.prototype, "response", {
                    get: function () {
                        return this.resp;
                    },
                    enumerable: true,
                    configurable: true
                });
                ResponseView.prototype.existError = function (errorCode) {
                    return this.bodyJsonObject.errors &&
                        this.bodyJsonObject.errors.filter(function (e) { return e.errorCode === errorCode; }).length > 0;
                };
                return ResponseView;
            }());
            exports_1("ResponseView", ResponseView);
        }
    }
});
//# sourceMappingURL=response-view.js.map