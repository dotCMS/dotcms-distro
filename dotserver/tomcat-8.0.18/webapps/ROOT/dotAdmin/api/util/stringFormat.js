System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var StringFormat;
    return {
        setters:[],
        execute: function() {
            StringFormat = (function () {
                function StringFormat() {
                }
                StringFormat.prototype.formatMessage = function () {
                    var s = arguments[0];
                    if (s) {
                        for (var i = 0; i < arguments.length - 1; i++) {
                            var reg = new RegExp('\\{' + i + '\\}', 'gm');
                            s = s.replace(reg, arguments[i + 1]);
                        }
                        return s;
                    }
                };
                return StringFormat;
            }());
            exports_1("StringFormat", StringFormat);
        }
    }
});
//# sourceMappingURL=stringFormat.js.map