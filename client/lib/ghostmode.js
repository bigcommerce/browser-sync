"use strict";

var eventManager = require("./events").manager;

exports.plugins = {
    scroll: require("./ghostmode.scroll"),
    clicks: require("./ghostmode.clicks"),
    forms: require("./ghostmode.forms"),
    location: require("./ghostmode.location")
};

/**
 * Load plugins for enabled options
 * @param bs
 */
exports.init = function(bs) {
    for (var name in exports.plugins) {
        if (bs.options.ghostMode[name]) {
            exports.plugins[name].init(bs, eventManager);
        }
    }
};
