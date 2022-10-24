"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaDataRules = void 0;
var utils_1 = require("./utils");
exports.metaDataRules = {
    title: {
        rules: [
            ['meta[property="og:title"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="og:title"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="twitter:title"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="twitter:title"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="parsely-title"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="parsely-title"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="sailthru.title"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="sailthru.title"][content]', function (element) { return element.getAttribute('content'); }],
            ['title', function (element) { return element.text; }]
        ]
    },
    description: {
        rules: [
            ['meta[property="og:description"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="og:description"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="description" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="description" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="sailthru.description"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="sailthru.description"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="twitter:description"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="twitter:description"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="summary" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="summary" i][content]', function (element) { return element.getAttribute('content'); }]
        ]
    },
    language: {
        rules: [
            ['html[lang]', function (element) { return element.getAttribute('lang'); }],
            ['meta[property="language" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="language" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="og:locale"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="og:locale"][content]', function (element) { return element.getAttribute('content'); }]
        ],
        processor: function (language) { return language.split('-')[0]; }
    },
    type: {
        rules: [
            ['meta[property="og:type"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="og:type"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="parsely-type"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="parsely-type"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="medium"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="medium"][content]', function (element) { return element.getAttribute('content'); }]
        ]
    },
    url: {
        rules: [
            ['meta[property="og:url"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="og:url"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="al:web:url"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="al:web:url"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="parsely-link"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="parsely-link"][content]', function (element) { return element.getAttribute('content'); }],
            ['a.amp-canurl', function (element) { return element.getAttribute('href'); }],
            ['link[rel="canonical"][href]', function (element) { return element.getAttribute('href'); }]
        ],
        defaultValue: function (context) { return context.url; },
        processor: function (url, context) { return (0, utils_1.makeUrlAbsolute)(context.url, url); }
    },
    provider: {
        rules: [
            ['meta[property="og:site_name"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="og:site_name"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="publisher" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="publisher" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="application-name" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="application-name" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="al:android:app_name"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="al:android:app_name"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="al:iphone:app_name"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="al:iphone:app_name"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="al:ipad:app_name"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="al:ipad:app_name"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="al:ios:app_name"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="al:ios:app_name"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="twitter:app:name:iphone"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="twitter:app:name:iphone"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="twitter:app:name:ipad"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="twitter:app:name:ipad"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="twitter:app:name:googleplay"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="twitter:app:name:googleplay"][content]', function (element) { return element.getAttribute('content'); }]
        ],
        defaultValue: function (context) { return (0, utils_1.getProvider)((0, utils_1.parseUrl)(context.url)); }
    },
    keywords: {
        rules: [
            ['meta[property="keywords" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="keywords" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="parsely-tags"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="parsely-tags"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="sailthru.tags"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="sailthru.tags"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="article:tag" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="article:tag" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="book:tag" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="book:tag" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="topic" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="topic" i][content]', function (element) { return element.getAttribute('content'); }]
        ],
        processor: function (keywords) { return keywords.split(',').map(function (keyword) { return keyword.trim(); }); }
    },
    section: {
        rules: [
            ['meta[property="article:section"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="article:section"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="category"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="category"][content]', function (element) { return element.getAttribute('content'); }]
        ]
    },
    author: {
        rules: [
            ['meta[property="author" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="author" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="article:author"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="article:author"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="book:author"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="book:author"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="parsely-author"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="parsely-author"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="sailthru.author"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="sailthru.author"][content]', function (element) { return element.getAttribute('content'); }],
            ['a[class*="author" i]', function (element) { return element.text; }],
            ['[rel="author"]', function (element) { return element.text; }],
            ['meta[property="twitter:creator"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="twitter:creator"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="profile:username"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="profile:username"][content]', function (element) { return element.getAttribute('content'); }]
        ]
    },
    published: {
        rules: [
            ['meta[property="article:published_time"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="article:published_time"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="published_time"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="published_time"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="parsely-pub-date"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="parsely-pub-date"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="sailthru.date"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="sailthru.date"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="date" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="date" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="release_date" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="release_date" i][content]', function (element) { return element.getAttribute('content'); }],
            ['time[datetime]', function (element) { return element.getAttribute('datetime'); }],
            ['time[datetime][pubdate]', function (element) { return element.getAttribute('datetime'); }]
        ],
        processor: function (value) { return Date.parse(value.toString()) ? new Date(value.toString()).toISOString() : undefined; }
    },
    modified: {
        rules: [
            ['meta[property="og:updated_time"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="og:updated_time"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="article:modified_time"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="article:modified_time"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="updated_time" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="updated_time" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="modified_time"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="modified_time"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="revised"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="revised"][content]', function (element) { return element.getAttribute('content'); }]
        ],
        processor: function (value) { return Date.parse(value.toString()) ? new Date(value.toString()).toISOString() : undefined; }
    },
    robots: {
        rules: [
            ['meta[property="robots" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="robots" i][content]', function (element) { return element.getAttribute('content'); }]
        ],
        processor: function (keywords) { return keywords.split(',').map(function (keyword) { return keyword.trim(); }); }
    },
    copyright: {
        rules: [
            ['meta[property="copyright" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="copyright" i][content]', function (element) { return element.getAttribute('content'); }]
        ]
    },
    email: {
        rules: [
            ['meta[property="email" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="email" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="reply-to" i][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="reply-to" i][content]', function (element) { return element.getAttribute('content'); }]
        ]
    },
    twitter: {
        rules: [
            ['meta[property="twitter:site"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="twitter:site"][content]', function (element) { return element.getAttribute('content'); }]
        ]
    },
    facebook: {
        rules: [
            ['meta[property="fb:pages"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="fb:pages"][content]', function (element) { return element.getAttribute('content'); }]
        ]
    },
    image: {
        rules: [
            ['meta[property="og:image:secure_url"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="og:image:secure_url"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="og:image:url"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="og:image:url"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="og:image"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="og:image"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="twitter:image"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="twitter:image"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="twitter:image:src"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="twitter:image:src"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="thumbnail"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="thumbnail"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="parsely-image-url"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="parsely-image-url"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="sailthru.image.full"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="sailthru.image.full"][content]', function (element) { return element.getAttribute('content'); }]
        ],
        processor: function (imageUrl, context) { return context.options.forceImageHttps === true ? (0, utils_1.makeUrlSecure)((0, utils_1.makeUrlAbsolute)(context.url, imageUrl)) : (0, utils_1.makeUrlAbsolute)(context.url, imageUrl); }
    },
    icon: {
        rules: [
            ['link[rel="apple-touch-icon"][href]', function (element) { return element.getAttribute('href'); }],
            ['link[rel="apple-touch-icon-precomposed"][href]', function (element) { return element.getAttribute('href'); }],
            ['link[rel="icon" i][href]', function (element) { return element.getAttribute('href'); }],
            ['link[rel="fluid-icon"][href]', function (element) { return element.getAttribute('href'); }],
            ['link[rel="shortcut icon"][href]', function (element) { return element.getAttribute('href'); }],
            ['link[rel="Shortcut Icon"][href]', function (element) { return element.getAttribute('href'); }],
            ['link[rel="mask-icon"][href]', function (element) { return element.getAttribute('href'); }]
        ],
        scorer: function (element) {
            var sizes = element.getAttribute('sizes');
            if (sizes) {
                var sizeMatches = sizes.match(/\d+/g);
                if (sizeMatches) {
                    var parsed = parseInt(sizeMatches[0]);
                    if (!isNaN(parsed)) {
                        return parsed;
                    }
                }
            }
        },
        defaultValue: function (context) { return (0, utils_1.makeUrlAbsolute)(context.url, '/favicon.ico'); },
        processor: function (iconUrl, context) { return context.options.forceImageHttps === true ? (0, utils_1.makeUrlSecure)((0, utils_1.makeUrlAbsolute)(context.url, iconUrl)) : (0, utils_1.makeUrlAbsolute)(context.url, iconUrl); }
    },
    video: {
        rules: [
            ['meta[property="og:video:secure_url"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="og:video:secure_url"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="og:video:url"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="og:video:url"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="og:video"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="og:video"][content]', function (element) { return element.getAttribute('content'); }]
        ],
        processor: function (imageUrl, context) { return context.options.forceImageHttps === true ? (0, utils_1.makeUrlSecure)((0, utils_1.makeUrlAbsolute)(context.url, imageUrl)) : (0, utils_1.makeUrlAbsolute)(context.url, imageUrl); }
    },
    audio: {
        rules: [
            ['meta[property="og:audio:secure_url"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="og:audio:secure_url"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="og:audio:url"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="og:audio:url"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[property="og:audio"][content]', function (element) { return element.getAttribute('content'); }],
            ['meta[name="og:audio"][content]', function (element) { return element.getAttribute('content'); }]
        ],
        processor: function (imageUrl, context) { return context.options.forceImageHttps === true ? (0, utils_1.makeUrlSecure)((0, utils_1.makeUrlAbsolute)(context.url, imageUrl)) : (0, utils_1.makeUrlAbsolute)(context.url, imageUrl); }
    }
};
