var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Optional } from "@angular/core";
import { Level } from "./level";
export class Options {
}
const CONSOLE_DEBUG_METHOD = console["debug"] ? "debug" : "log";
const DEFAULT_OPTIONS = {
    level: Level.WARN,
    global: true,
    globalAs: "logger",
    store: false,
    storeAs: "angular2.logger.level"
};
export let Logger = class Logger {
    constructor(options) {
        this.Level = Level;
        this._loadLevel = () => Number(localStorage.getItem(this._storeAs));
        this.global = () => window[this._globalAs] = this;
        this.isErrorEnabled = () => this.level >= Level.ERROR;
        this.isWarnEnabled = () => this.level >= Level.WARN;
        this.isInfoEnabled = () => this.level >= Level.INFO;
        this.isDebugEnabled = () => this.level >= Level.DEBUG;
        this.isLogEnabled = () => this.level >= Level.LOG;
        let { level, global, globalAs, store, storeAs } = Object.assign({}, DEFAULT_OPTIONS, options);
        this._level = level;
        this._globalAs = globalAs;
        this._storeAs = storeAs;
        global && this.global();
        if (store || this._loadLevel())
            this.store();
    }
    _storeLevel(level) { localStorage[this._storeAs] = level; }
    error(message, ...optionalParams) {
        this.isErrorEnabled() && console.error.apply(console, arguments);
    }
    warn(message, ...optionalParams) {
        this.isWarnEnabled() && console.warn.apply(console, arguments);
    }
    info(message, ...optionalParams) {
        this.isInfoEnabled() && console.info.apply(console, arguments);
    }
    debug(message, ...optionalParams) {
        this.isDebugEnabled() && console[CONSOLE_DEBUG_METHOD].apply(console, arguments);
    }
    log(message, ...optionalParams) {
        this.isLogEnabled() && console.log.apply(console, arguments);
    }
    store() {
        this._store = true;
        let storedLevel = this._loadLevel();
        if (storedLevel) {
            this._level = storedLevel;
        }
        else {
            this._storeLevel(this.level);
        }
        return this;
    }
    unstore() {
        this._store = false;
        localStorage.removeItem(this._storeAs);
        return this;
    }
    get level() { return this._level; }
    set level(level) {
        this._store && this._storeLevel(level);
        this._level = level;
    }
};
Logger = __decorate([
    Injectable(),
    __param(0, Optional()), 
    __metadata('design:paramtypes', [Options])
], Logger);
//# sourceMappingURL=logger.js.map