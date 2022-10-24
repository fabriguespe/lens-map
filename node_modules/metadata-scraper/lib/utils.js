"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvider = exports.parseUrl = exports.makeUrlSecure = exports.makeUrlAbsolute = void 0;
var url_1 = __importDefault(require("url"));
function makeUrlAbsolute(base, relative) {
    var relativeParsed = url_1.default.parse(relative);
    if (relativeParsed.host === null) {
        return url_1.default.resolve(base, relative);
    }
    return relative;
}
exports.makeUrlAbsolute = makeUrlAbsolute;
function makeUrlSecure(url) {
    return url.replace(/^http:/, 'https:');
}
exports.makeUrlSecure = makeUrlSecure;
function parseUrl(url) {
    return url_1.default.parse(url).hostname || '';
}
exports.parseUrl = parseUrl;
function getProvider(host) {
    return host
        .replace(/www[a-zA-Z0-9]*\./, '')
        .replace('.co.', '.')
        .split('.')
        .slice(0, -1)
        .join(' ');
}
exports.getProvider = getProvider;
