// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/index.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"scripts/smooth-nav-min.js":[function(require,module,exports) {
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (a) {
  if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
    var b = $(this.hash);
    b = b.length ? b : $("[name=" + this.hash.slice(1) + "]"), b.length && (a.preventDefault(), $("html, body").animate({
      scrollTop: b.offset().top
    }, 1e3, function () {
      var a = $(b);
      return a.focus(), a.is(":focus") ? !1 : (a.attr("tabindex", "-1"), void a.focus());
    }));
  }
});
},{}],"scripts/sidebar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sidebar = void 0;

var sidebar = function sidebar() {
  var btnOpen = document.querySelector('#menu-open');
  var btnClose = document.querySelector('#menu-close');
  var sidebar = document.querySelector('#sidebar');
  var links = document.querySelector('#links');
  btnOpen.addEventListener('click', function (e) {
    e.preventDefault();
    sidebar.style.width = '250px';
    links.style.display = 'block';
  });
  btnClose.addEventListener('click', function (e) {
    e.preventDefault();
    sidebar.style.width = '0px';
    links.style.display = 'none';
  });
};

exports.sidebar = sidebar;
},{}],"assets/ss-img/iglesia1-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia1-min.d1cbab36.jpg";
},{}],"assets/ss-img/iglesia2-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia2-min.30a7cbb1.jpg";
},{}],"assets/ss-img/iglesia3-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia3-min.b0b75c2c.jpg";
},{}],"assets/ss-img/iglesia4-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia4-min.c3219773.jpg";
},{}],"assets/ss-img/iglesia5-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia5-min.d9029ec8.jpg";
},{}],"assets/ss-img/iglesia6-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia6-min.fcd34a44.jpg";
},{}],"assets/ss-img/iglesia7-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia7-min.11f99e3b.jpg";
},{}],"assets/ss-img/iglesia8-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia8-min.c91804c9.jpg";
},{}],"assets/ss-img/iglesia9-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia9-min.57b9f2c4.jpg";
},{}],"assets/ss-img/iglesia10-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia10-min.28c25af2.jpg";
},{}],"assets/ss-img/iglesia11-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia11-min.875215e5.jpg";
},{}],"assets/ss-img/iglesia12-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia12-min.14fc3d34.jpg";
},{}],"assets/ss-img/iglesia13-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia13-min.c745f038.jpg";
},{}],"assets/ss-img/iglesia14-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia14-min.90615f86.jpg";
},{}],"assets/ss-img/iglesia15-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia15-min.69d4432e.jpg";
},{}],"assets/ss-img/iglesia16-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia16-min.8a382204.jpg";
},{}],"assets/ss-img/iglesia17-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia17-min.504a8123.jpg";
},{}],"assets/ss-img/iglesia18-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia18-min.91c57583.jpg";
},{}],"assets/ss-img/iglesia19-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia19-min.56707af3.jpg";
},{}],"assets/ss-img/iglesia20-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia20-min.e7a4ceff.jpg";
},{}],"assets/ss-img/iglesia21-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia21-min.749b1a14.jpg";
},{}],"assets/ss-img/iglesia22-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia22-min.4d5eb4a5.jpg";
},{}],"assets/ss-img/iglesia23-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia23-min.bf94583a.jpg";
},{}],"assets/ss-img/iglesia24-min.jpg":[function(require,module,exports) {
module.exports = "/iglesia24-min.f4fd9806.jpg";
},{}],"scripts/slideshow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slideShow = void 0;

var _iglesia1Min = _interopRequireDefault(require("../assets/ss-img/iglesia1-min.jpg"));

var _iglesia2Min = _interopRequireDefault(require("../assets/ss-img/iglesia2-min.jpg"));

var _iglesia3Min = _interopRequireDefault(require("../assets/ss-img/iglesia3-min.jpg"));

var _iglesia4Min = _interopRequireDefault(require("../assets/ss-img/iglesia4-min.jpg"));

var _iglesia5Min = _interopRequireDefault(require("../assets/ss-img/iglesia5-min.jpg"));

var _iglesia6Min = _interopRequireDefault(require("../assets/ss-img/iglesia6-min.jpg"));

var _iglesia7Min = _interopRequireDefault(require("../assets/ss-img/iglesia7-min.jpg"));

var _iglesia8Min = _interopRequireDefault(require("../assets/ss-img/iglesia8-min.jpg"));

var _iglesia9Min = _interopRequireDefault(require("../assets/ss-img/iglesia9-min.jpg"));

var _iglesia10Min = _interopRequireDefault(require("../assets/ss-img/iglesia10-min.jpg"));

var _iglesia11Min = _interopRequireDefault(require("../assets/ss-img/iglesia11-min.jpg"));

var _iglesia12Min = _interopRequireDefault(require("../assets/ss-img/iglesia12-min.jpg"));

var _iglesia13Min = _interopRequireDefault(require("../assets/ss-img/iglesia13-min.jpg"));

var _iglesia14Min = _interopRequireDefault(require("../assets/ss-img/iglesia14-min.jpg"));

var _iglesia15Min = _interopRequireDefault(require("../assets/ss-img/iglesia15-min.jpg"));

var _iglesia16Min = _interopRequireDefault(require("../assets/ss-img/iglesia16-min.jpg"));

var _iglesia17Min = _interopRequireDefault(require("../assets/ss-img/iglesia17-min.jpg"));

var _iglesia18Min = _interopRequireDefault(require("../assets/ss-img/iglesia18-min.jpg"));

var _iglesia19Min = _interopRequireDefault(require("../assets/ss-img/iglesia19-min.jpg"));

var _iglesia20Min = _interopRequireDefault(require("../assets/ss-img/iglesia20-min.jpg"));

var _iglesia21Min = _interopRequireDefault(require("../assets/ss-img/iglesia21-min.jpg"));

var _iglesia22Min = _interopRequireDefault(require("../assets/ss-img/iglesia22-min.jpg"));

var _iglesia23Min = _interopRequireDefault(require("../assets/ss-img/iglesia23-min.jpg"));

var _iglesia24Min = _interopRequireDefault(require("../assets/ss-img/iglesia24-min.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// slide show function
var slideShow = function slideShow() {
  var images = [_iglesia1Min.default, _iglesia2Min.default, _iglesia3Min.default, _iglesia4Min.default, _iglesia5Min.default, _iglesia6Min.default, _iglesia7Min.default, _iglesia8Min.default, _iglesia9Min.default, _iglesia10Min.default, _iglesia11Min.default, _iglesia12Min.default, _iglesia13Min.default, _iglesia14Min.default, _iglesia15Min.default, _iglesia16Min.default, _iglesia17Min.default, _iglesia18Min.default, _iglesia19Min.default, _iglesia20Min.default, _iglesia21Min.default, _iglesia22Min.default, _iglesia23Min.default, _iglesia24Min.default]; // images list
  // selecting dom elements 

  var next = document.querySelector('#plus');
  var prev = document.querySelector('#prev');
  var content = document.querySelector('#content');
  var i = 0; // initial image index

  content.src = images[i]; //appending image to the dom element

  next.addEventListener('click', function (e) {
    //onclick increase image index
    e.preventDefault();
    i++;

    if (i === images.length) {
      // if the image index reaches its max length reset the index
      i = 0; // set the index back to 0
    }

    content.innerHTML = '';
    content.src = images[i];
  });
  prev.addEventListener('click', function (e) {
    //onclick decrease image index
    e.preventDefault();
    i--;

    if (i === -1) {
      // if the image index reaches negative digits reset the index
      i = images.length - 1; // set the index back to its max - 1
    }

    content.innerHTML = '';
    content.src = images[i];
  });
};

exports.slideShow = slideShow;
},{"../assets/ss-img/iglesia1-min.jpg":"assets/ss-img/iglesia1-min.jpg","../assets/ss-img/iglesia2-min.jpg":"assets/ss-img/iglesia2-min.jpg","../assets/ss-img/iglesia3-min.jpg":"assets/ss-img/iglesia3-min.jpg","../assets/ss-img/iglesia4-min.jpg":"assets/ss-img/iglesia4-min.jpg","../assets/ss-img/iglesia5-min.jpg":"assets/ss-img/iglesia5-min.jpg","../assets/ss-img/iglesia6-min.jpg":"assets/ss-img/iglesia6-min.jpg","../assets/ss-img/iglesia7-min.jpg":"assets/ss-img/iglesia7-min.jpg","../assets/ss-img/iglesia8-min.jpg":"assets/ss-img/iglesia8-min.jpg","../assets/ss-img/iglesia9-min.jpg":"assets/ss-img/iglesia9-min.jpg","../assets/ss-img/iglesia10-min.jpg":"assets/ss-img/iglesia10-min.jpg","../assets/ss-img/iglesia11-min.jpg":"assets/ss-img/iglesia11-min.jpg","../assets/ss-img/iglesia12-min.jpg":"assets/ss-img/iglesia12-min.jpg","../assets/ss-img/iglesia13-min.jpg":"assets/ss-img/iglesia13-min.jpg","../assets/ss-img/iglesia14-min.jpg":"assets/ss-img/iglesia14-min.jpg","../assets/ss-img/iglesia15-min.jpg":"assets/ss-img/iglesia15-min.jpg","../assets/ss-img/iglesia16-min.jpg":"assets/ss-img/iglesia16-min.jpg","../assets/ss-img/iglesia17-min.jpg":"assets/ss-img/iglesia17-min.jpg","../assets/ss-img/iglesia18-min.jpg":"assets/ss-img/iglesia18-min.jpg","../assets/ss-img/iglesia19-min.jpg":"assets/ss-img/iglesia19-min.jpg","../assets/ss-img/iglesia20-min.jpg":"assets/ss-img/iglesia20-min.jpg","../assets/ss-img/iglesia21-min.jpg":"assets/ss-img/iglesia21-min.jpg","../assets/ss-img/iglesia22-min.jpg":"assets/ss-img/iglesia22-min.jpg","../assets/ss-img/iglesia23-min.jpg":"assets/ss-img/iglesia23-min.jpg","../assets/ss-img/iglesia24-min.jpg":"assets/ss-img/iglesia24-min.jpg"}],"scripts/index.js":[function(require,module,exports) {
"use strict";

require("../styles/index.scss");

require("./smooth-nav-min");

var _sidebar = require("./sidebar");

var _slideshow = require("./slideshow");

// importing stylesheet
// importing smo0th nav script
// importing functions
(0, _slideshow.slideShow)();
(0, _sidebar.sidebar)();
console.log('app is running!');
},{"../styles/index.scss":"styles/index.scss","./smooth-nav-min":"scripts/smooth-nav-min.js","./sidebar":"scripts/sidebar.js","./slideshow":"scripts/slideshow.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49289" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/index.js"], null)
//# sourceMappingURL=/scripts.bcf3243b.map