/**
 * Created by oswaldogallango on 9/27/16.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HttpRequestUtils;
    return {
        setters:[],
        execute: function() {
            HttpRequestUtils = (function () {
                function HttpRequestUtils() {
                }
                /**
                 * Get a map with the url querystring parameters
                 * @returns {Map<string, string>}
                 */
                // TODO: change the getQueryParams() with an NG2 method equivalent to QueryParams on NGRX.
                HttpRequestUtils.prototype.getQueryParams = function () {
                    var split = window.location.search.substring(1).split('&');
                    var map = new Map();
                    split.forEach(function (param) {
                        var paramSplit = param.split('=');
                        map.set(paramSplit[0], paramSplit[1]);
                    });
                    return map;
                };
                /**
                 * Get a single parameter form the query string, null if does not exits.
                 * it is based on the window.location.href.
                 * @returns {string}
                 */
                HttpRequestUtils.prototype.getQueryStringParam = function (name) {
                    var value = null;
                    var regex = new RegExp("[?&]" + name.replace(/[\[\]]/g, "\\$&") + "(=([^&#]*)|&|#|$)");
                    var results = regex.exec(window.location.href);
                    if (results && results[2]) {
                        value = decodeURIComponent(results[2].replace(/\+/g, " "));
                    }
                    return value;
                }; // getQueryStringParam.
                return HttpRequestUtils;
            }());
            exports_1("HttpRequestUtils", HttpRequestUtils);
        }
    }
});
//# sourceMappingURL=httpRequestUtils.js.map