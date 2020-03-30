/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/styles/main.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/styles/main.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".cc-window {\n  opacity: 1;\n  -webkit-transition: opacity 1s ease;\n  -moz-transition: opacity 1s ease;\n  -ms-transition: opacity 1s ease;\n  -o-transition: opacity 1s ease;\n  transition: opacity 1s ease; }\n\n.cc-window.cc-invisible {\n  opacity: 0; }\n\n/* only animate ifhas class 'cc-animate' */\n.cc-animate.cc-revoke {\n  -webkit-transition: transform 1s ease;\n  -moz-transition: transform 1s ease;\n  -ms-transition: transform 1s ease;\n  -o-transition: transform 1s ease;\n  transition: transform 1s ease; }\n\n.cc-animate.cc-revoke.cc-top {\n  transform: translateY(-2em); }\n\n.cc-animate.cc-revoke.cc-bottom {\n  transform: translateY(2em); }\n\n.cc-animate.cc-revoke.cc-active.cc-top {\n  transform: translateY(0); }\n\n.cc-animate.cc-revoke.cc-active.cc-bottom {\n  transform: translateY(0); }\n\n.cc-revoke:hover {\n  transform: translateY(0); }\n\n.cc-grower {\n  /* Initially we don't want any height, and we want the contents to be hidden */\n  max-height: 0;\n  overflow: hidden;\n  /* Set our transitions up. */\n  -webkit-transition: max-height 1s;\n  -moz-transition: max-height 1s;\n  -ms-transition: max-height 1s;\n  -o-transition: max-height 1s;\n  transition: max-height 1s; }\n\n/* the popup window */\n.cc-window,\n.cc-revoke {\n  position: fixed;\n  overflow: hidden;\n  box-sizing: border-box;\n  /* exclude padding when dealing with width */\n  font-family: Helvetica, Calibri, Arial, sans-serif;\n  font-size: 16px;\n  /* by setting the base font here, we can size the rest of the popup using CSS `em` */\n  line-height: 1.5em;\n  display: flex;\n  flex-wrap: nowrap;\n  /* the following are random unjustified styles - just because - should probably be removed */\n  z-index: 9998; }\n\n.cc-revoke {\n  z-index: 9999; }\n\n.cc-window.cc-static {\n  position: static; }\n\n/* 2 basic types of window - floating / banner */\n.cc-window.cc-floating {\n  padding: 2em;\n  max-width: 24em;\n  /* 1em == 16px therefore 24em == 384px */\n  flex-direction: column; }\n\n.cc-window.cc-banner {\n  padding: 1em 1.8em;\n  width: 100%;\n  flex-direction: row; }\n\n.cc-revoke {\n  padding: 0.5em; }\n\n.cc-revoke:hover {\n  text-decoration: underline; }\n\n.cc-header {\n  font-size: 18px;\n  font-weight: bold; }\n\n/* clickable things */\n.cc-btn,\n.cc-link,\n.cc-close,\n.cc-revoke {\n  cursor: pointer; }\n\n.cc-link {\n  opacity: 0.8;\n  display: inline-block;\n  padding: 0.2em;\n  text-decoration: underline; }\n\n.cc-link:hover {\n  opacity: 1; }\n\n.cc-link:active,\n.cc-link:visited {\n  color: initial; }\n\n.cc-btn {\n  display: block;\n  padding: 0.4em 0.8em;\n  font-size: 0.9em;\n  font-weight: bold;\n  border-width: 2px;\n  border-style: solid;\n  text-align: center;\n  white-space: nowrap; }\n\n.cc-highlight .cc-btn:first-child {\n  background-color: transparent;\n  border-color: transparent; }\n\n.cc-highlight .cc-btn:first-child:hover,\n.cc-highlight .cc-btn:first-child:focus {\n  background-color: transparent;\n  text-decoration: underline; }\n\n.cc-close {\n  display: block;\n  position: absolute;\n  top: 0.5em;\n  right: 0.5em;\n  font-size: 1.6em;\n  opacity: 0.9;\n  /* seeing as this contains text and not an image, the element taller than it is wide (because it is text) */\n  /*  - we want it to be a square, because it's acting as an icon */\n  /*  - setting the line height normalizes the height */\n  line-height: 0.75; }\n\n.cc-close:hover,\n.cc-close:focus {\n  opacity: 1; }\n\n/* This file should contain styles that modifies the popup layout. */\n/* By layout, we mean the physical position of the elements on the popup window, and the margin / padding around those elements. */\n.cc-revoke.cc-top {\n  top: 0;\n  left: 3em;\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em; }\n\n.cc-revoke.cc-bottom {\n  bottom: 0;\n  left: 3em;\n  border-top-left-radius: 0.5em;\n  border-top-right-radius: 0.5em; }\n\n.cc-revoke.cc-left {\n  left: 3em;\n  right: unset; }\n\n.cc-revoke.cc-right {\n  right: 3em;\n  left: unset; }\n\n/**************************************** FLOATING ****************************************/\n/* these classes position the floating element */\n.cc-top {\n  top: 1em; }\n\n.cc-left {\n  left: 1em; }\n\n.cc-right {\n  right: 1em; }\n\n.cc-bottom {\n  bottom: 1em; }\n\n/* links that are direct decendants should be displayed as block */\n.cc-floating > .cc-link {\n  margin-bottom: 1em; }\n\n.cc-floating .cc-message {\n  display: block;\n  margin-bottom: 1em; }\n\n.cc-window.cc-floating .cc-compliance {\n  flex: 1 0 auto; }\n\n/**************************************** BANNER ****************************************/\n.cc-window.cc-banner {\n  align-items: center; }\n\n.cc-banner.cc-top {\n  left: 0;\n  right: 0;\n  top: 0; }\n\n.cc-banner.cc-bottom {\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.cc-banner .cc-message {\n  display: block;\n  flex: 1 1 auto;\n  max-width: 100%;\n  margin-right: 1em; }\n\n/* COMPLIANCE BOX */\n.cc-compliance {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.cc-floating .cc-compliance > .cc-btn {\n  flex: 1; }\n\n.cc-btn + .cc-btn {\n  margin-left: 0.5em; }\n\n/* Categories Layout */\n.cc-window.cc-type-categories {\n  display: inline-flex;\n  flex-direction: column;\n  overflow: visible; }\n  .cc-window.cc-type-categories .form {\n    text-align: right; }\n  .cc-window.cc-type-categories .cc-btn {\n    margin: 0; }\n    .cc-window.cc-type-categories .cc-btn.cc-save {\n      margin: 0;\n      display: inline-block; }\n\n.cc-categories {\n  display: inline-flex; }\n  .cc-categories .cc-category {\n    display: flex;\n    max-width: 100%;\n    margin: 0 2px;\n    position: relative; }\n  .cc-categories .cc-btn {\n    border-right: none;\n    outline: none;\n    text-transform: capitalize; }\n    .cc-categories .cc-btn input[type=checkbox] {\n      float: left;\n      height: 26px;\n      width: calc( 100% - 22px);\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 2px;\n      cursor: pointer; }\n    .cc-categories .cc-btn:not(.cc-info):not(.cc-save) {\n      padding-left: 26px; }\n  .cc-categories .cc-info {\n    border-left: none;\n    border-right: 2px solid lightgrey;\n    padding: 4px;\n    font-variant: all-small-caps; }\n    .cc-categories .cc-info:focus + .cc-tooltip {\n      display: block; }\n  .cc-categories .cc-tooltip {\n    display: none;\n    position: absolute;\n    z-index: 3;\n    width: 190px;\n    bottom: 46px;\n    padding: 8px;\n    border: thin solid lightgrey;\n    box-shadow: 1px 1px 4px rgba(150, 150, 150, 0.7); }\n    .cc-categories .cc-tooltip:after {\n      content: \"\";\n      width: 10px;\n      height: 10px;\n      transform: rotate(45deg);\n      position: absolute;\n      bottom: -7px;\n      left: 10px;\n      box-shadow: 2px 1px 1px rgba(200, 200, 200, 0.5); }\n    .cc-categories .cc-tooltip p {\n      margin: 0; }\n\n@media print {\n  .cc-window,\n  .cc-revoke {\n    display: none; } }\n\n@media screen and (max-width: 900px) {\n  .cc-btn {\n    white-space: normal; } }\n\n/* dimensions for 'iPhone6 Plus' and lower */\n@media screen and (max-width: 414px) and (orientation: portrait), screen and (max-width: 736px) and (orientation: landscape) {\n  .cc-window.cc-top {\n    top: 0; }\n  .cc-window.cc-bottom {\n    bottom: 0; }\n  .cc-window.cc-banner, .cc-window.cc-floating, .cc-window.cc-right, .cc-window.cc-left {\n    left: 0;\n    right: 0; }\n  .cc-window.cc-banner {\n    flex-direction: column;\n    align-items: unset; }\n    .cc-window.cc-banner .cc-compliance {\n      flex: 1 1 auto; }\n    .cc-window.cc-banner .cc-message {\n      margin-right: 0;\n      margin-bottom: 1em; }\n  .cc-window.cc-floating {\n    max-width: none; }\n  .cc-window.cc-type-categories {\n    flex-direction: column; }\n  .cc-window .cc-message {\n    margin-bottom: 1em; }\n  .cc-window .cc-categories {\n    flex-direction: column;\n    width: 100%;\n    margin-right: 8px; }\n  .cc-window .cc-category {\n    margin: 4px 0; }\n    .cc-window .cc-category .cc-btn:not(.cc-info) {\n      width: calc( 100% - 16px);\n      min-width: 140px; } }\n\n@media screen and (max-width: 854px) {\n  .cc-window.cc-type-categories .cc-btn.cc-save {\n    margin: 8px 0; } }\n\n@media screen and (max-width: 790px) {\n  .cc-window.cc-type-categories .cc-categories {\n    display: flex;\n    flex-direction: column; }\n  .cc-categories .cc-category {\n    margin: 4px 0; }\n  .form {\n    width: 100%;\n    max-width: 350px; }\n  .cc-btn:not(.cc-info):not(.cc-save) {\n    width: calc( 100% - 16px); } }\n\n/* Classic */\n.cc-floating.cc-theme-classic {\n  padding: 1.2em;\n  border-radius: 5px; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-compliance {\n  text-align: center;\n  display: inline;\n  flex: none; }\n\n.cc-theme-classic {\n  overflow: visible;\n  justify-content: space-between; }\n  .cc-theme-classic .cc-btn {\n    position: relative;\n    border-radius: 5px;\n    outline: none; }\n    .cc-theme-classic .cc-btn:last-child {\n      min-width: 140px; }\n  .cc-theme-classic .cc-category .cc-btn {\n    border-radius: 5px 0 0 5px;\n    padding-right: 2px;\n    padding-left: 28px;\n    font-weight: normal;\n    border-right: none;\n    box-sizing: border-box; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox] {\n      position: absolute;\n      left: 0;\n      top: -1px;\n      width: 100%;\n      height: 26px;\n      opacity: 0;\n      cursor: pointer;\n      z-index: 1; }\n      .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox {\n        display: block;\n        font-size: 2rem;\n        position: absolute;\n        top: 2px;\n        left: 6px;\n        z-index: 0;\n        outline: none; }\n        .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox:before {\n          content: \"\\1F5F5\"; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox]:checked + .cc-btn-checkbox:after {\n      content: \"\\2713\";\n      position: absolute;\n      top: -4px;\n      left: 0;\n      font-size: 2.3rem;\n      text-shadow: 0 1px 3px rgba(150, 150, 150, 0.5); }\n    .cc-theme-classic .cc-category .cc-btn.cc-info {\n      margin: 0;\n      padding: 0 4px;\n      border-radius: 0 5px 5px 0; }\n    .cc-theme-classic .cc-category .cc-btn:last-child {\n      min-width: 0; }\n  .cc-theme-classic .cc-category .cc-tooltip {\n    border-radius: 5px; }\n    .cc-theme-classic .cc-category .cc-tooltip:after {\n      border-bottom: thin solid lightgrey;\n      border-right: thin solid lightgrey; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-btn {\n  display: inline-block; }\n\n/* Edgeless */\n.cc-theme-edgeless.cc-window {\n  padding: 0; }\n\n.cc-floating.cc-theme-edgeless .cc-message {\n  margin: 2em;\n  margin-bottom: 1.5em; }\n\n.cc-banner.cc-theme-edgeless .cc-btn {\n  margin: 0;\n  padding: 0.8em 1.8em;\n  height: 100%; }\n\n.cc-banner.cc-theme-edgeless .cc-message {\n  margin-left: 1em; }\n\n.cc-floating.cc-theme-edgeless .cc-btn + .cc-btn {\n  margin-left: 0; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn {\n  padding: 0.4em 0.8em;\n  padding-left: 26px; }\n  .cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn.cc-info {\n    padding: 0.4em 4px; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-tooltip {\n  border: none; }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: statuses, statusDeny, statusAllow, statusDismiss, categories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statuses", function() { return statuses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusDeny", function() { return statusDeny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusAllow", function() { return statusAllow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusDismiss", function() { return statusDismiss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function() { return categories; });


const statuses = ["DENY", "ALLOW", "DISMISS"];
const statusDeny = "DENY";
const statusAllow = "ALLOW";
const statusDismiss = "DISMISS";
const categories = ["UNCATEGORIZED", "ESSENTIAL", "PERSONALIZATION", "ANALYTICS", "MARKETING"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_CookieConsent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/CookieConsent */ "./src/models/CookieConsent.js");





if (typeof exports !== 'undefined') {
  module.exports = _models_CookieConsent__WEBPACK_IMPORTED_MODULE_1__["default"];
} else {
  window.CookieConsent = _models_CookieConsent__WEBPACK_IMPORTED_MODULE_1__["default"];
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/models/Base.js":
/*!****************************!*\
  !*** ./src/models/Base.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);




const emitter = new events__WEBPACK_IMPORTED_MODULE_1___default.a();
class Base {
  constructor(defaultOptions = {}, options = {}) {
    this.options = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["mergeOptions"])(defaultOptions, options);
    this.on = emitter.on.bind(emitter);
    this.emit = emitter.emit.bind(emitter);
  }

}

/***/ }),

/***/ "./src/models/CookieConsent.js":
/*!*************************************!*\
  !*** ./src/models/CookieConsent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CookieConsent; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _Legal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Legal */ "./src/models/Legal.js");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Location */ "./src/models/Location.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Popup */ "./src/models/Popup.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");







 // This function initializes the app by combining the use of the Popup, Locator and Law modules
// You can string together these three modules yourself however you want, by writing a new function.

class CookieConsent extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options = {}) {
    super(options);
    const answers = _constants__WEBPACK_IMPORTED_MODULE_4__["categories"].map(category => {
      const cookieName = this.options.cookie && this.options.cookie.name ? this.options.cookie.name : 'cookieconsent_status_';
      const answer = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getCookie"])(cookieName + '_' + category);
      return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isValidStatus"])(answer) ? {
        [category]: answer
      } : undefined;
    }).filter(obj => obj ? obj[Object.keys(obj)[0]] : false); // if they have already answered

    if (answers.length > 0) {
      setTimeout(() => this.emit("initialized", answers));
    } else if (this.options.legal && this.options.legal.countryCode) {
      this.initializationComplete({
        code: this.options.legal.countryCode
      });
    } else if (this.options.location) {
      new _Location__WEBPACK_IMPORTED_MODULE_2__["default"](this.options.location).locate(this.initializationComplete.bind(this), this.initializationError.bind(this));
    } else {
      this.initializationComplete({});
    }
  }

  initializationComplete(result) {
    if (result.code) {
      this.options = new _Legal__WEBPACK_IMPORTED_MODULE_1__["default"](this.options.legal).applyLaw(this.options, result.code);
    }

    this.popup = new _Popup__WEBPACK_IMPORTED_MODULE_3__["default"](this.options);
    setTimeout(() => this.emit("initialized", this.popup), 0);
  }

  initializationError(error) {
    setTimeout(() => this.emit("error", error, new _Popup__WEBPACK_IMPORTED_MODULE_3__["default"](this.options)), 0);
  }

  getCountryLaws(countryCode) {
    return new _Legal__WEBPACK_IMPORTED_MODULE_1__["default"](this.options.legal).get(countryCode);
  }

  isOpen() {
    return this.popup.isOpen();
  }

  close() {
    return this.popup.close(), this;
  }

  revokeChoice() {
    return this.popup.revokeChoice(), this;
  }

  open() {
    return this.popup.open(), this;
  }

  toggleRevokeButton(bool) {
    return this.popup.toggleRevokeButton(bool), this;
  }

  setStatuses(status) {
    return this.popup.setStatuses(status), this;
  }

  clearStatuses() {
    return this.popup.clearStatuses(), this;
  }

  destroy() {
    return this.popup.destroy(), this;
  }

}
_constants__WEBPACK_IMPORTED_MODULE_4__["statuses"].reduce((obj, status) => (Object.defineProperty(CookieConsent, status, {
  get: function () {
    return status;
  },
  set: function () {},
  enumerable: false,
  writeable: false,
  configurable: false
}), obj), CookieConsent);

/***/ }),

/***/ "./src/models/Legal.js":
/*!*****************************!*\
  !*** ./src/models/Legal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Legal; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_legal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/legal */ "./src/options/legal.js");




class Legal extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options = {}) {
    super(_options_legal__WEBPACK_IMPORTED_MODULE_1__["default"], options);
  }

  get(countryCode) {
    return {
      hasLaw: this.options.hasLaw.indexOf(countryCode) >= 0,
      revokable: this.options.revokable.indexOf(countryCode) >= 0,
      explicitAction: this.options.explicitAction.indexOf(countryCode) >= 0
    };
  }

  applyLaw(options, countryCode) {
    const country = this.get(countryCode);

    if (!country.hasLaw) {
      // The country has no cookie law
      options.enabled = false;
      this.emit("noCookieLaw", countryCode, country);
    }

    if (this.options.regionalLaw) {
      if (country.revokable) {
        // We must provide an option to revoke consent at a later time
        options.revokable = true;
      }

      if (country.explicitAction) {
        // The user must explicitly click the consent button
        options.dismissOnScroll = false;
        options.dismissOnTimeout = false;
      }
    }

    return options;
  }

}

/***/ }),

/***/ "./src/models/Location.js":
/*!********************************!*\
  !*** ./src/models/Location.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Location; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/location */ "./src/options/location.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");




 // An object containing all the location services we have already set up.
// When using a service, it could either return a data structure in plain text (like a JSON object) or an executable script
// When the response needs to be executed by the browser, then `isScript` must be set to true, otherwise it won't work.
// When the service uses a script, the chances are that you'll have to use the script to make additional requests. In these
// cases, the services `callback` property is called with a `done` function. When performing async operations, this must be called
// with the data (or Error), and `cookieconsent.locate` will take care of the rest

class Location extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(_options_location__WEBPACK_IMPORTED_MODULE_1__["default"], options);
    this.currentServiceIndex = -1; // the index (in options) of the service we're currently using
  }

  getNextService() {
    let service;

    do {
      service = this.getServiceByIdx(++this.currentServiceIndex);
    } while (this.currentServiceIndex < this.options.services.length && !service);

    return service;
  }

  getServiceByIdx(idx) {
    // This can either be the name of a default locationService, or a function.
    const serviceOption = this.options.services[idx]; // If it's a string, use one of the location services.

    if (typeof serviceOption === 'function') {
      const dynamicOpts = serviceOption();
      return dynamicOpts.name ? Object.assign({}, dynamicOpts, this.options.serviceDefinitions[dynamicOpts.name](dynamicOpts)) : dynamicOpts;
    } // If it's a string, use one of the location services.


    if (typeof serviceOption === 'string') {
      return this.options.serviceDefinitions[serviceOption]();
    } // If it's an object, assume {name: 'ipinfo', ...otherOptions}
    // Allows user to pass in API keys etc.


    if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(serviceOption)) {
      return this.options.serviceDefinitions[serviceOption.name](serviceOption);
    }

    return null;
  } // This runs the service located at index `currentServiceIndex`.
  // If the service fails, `runNextServiceOnError` will continue trying each service until all fail, or one completes successfully


  locate(complete, error) {
    const service = this.getNextService();

    if (!service) {
      error(new Error('No services to run'));
      return;
    }

    this.callbackComplete = complete;
    this.callbackError = error;
    this.runService(service, this.runNextServiceOnError.bind(this));
  } // Potentially adds a callback to a url for jsonp.


  setupUrl(service) {
    const serviceOpts = this.getCurrentServiceOpts();
    return service.url.replace(/\{(.*?)\}/g, function (_, param) {
      if (param === 'callback') {
        const tempName = 'callback' + Date.now();

        window[tempName] = function (res) {
          service.__JSONP_DATA = JSON.stringify(res);
        };

        return tempName;
      }

      if (param in serviceOpts.interpolateUrl) {
        return serviceOpts.interpolateUrl[param];
      }
    });
  } // requires a `service` object that defines at least a `url` and `callback`


  runService(service, complete) {
    // basic check to ensure it resembles a `service`
    if (!service || !service.url || !service.callback) {
      return;
    } // we call either `getScript` or `makeAsyncRequest` depending on the type of resource


    const requestFunction = service.isScript ? _utils__WEBPACK_IMPORTED_MODULE_2__["getScript"] : _utils__WEBPACK_IMPORTED_MODULE_2__["makeAsyncRequest"]; // both functions have similar signatures so we can pass the same arguments to both

    requestFunction(this.setupUrl(service), xhr => {
      // if `!xhr`, then `getScript` function was used, so there is no response text
      let responseText = xhr ? xhr.responseText : ''; // if the resource is a script, then this function is called after the script has been run.
      // if the script is JSONP, then a time defined function `callback_{Date.now}` has already
      // been called (as the JSONP callback). This callback sets the __JSONP_DATA property

      if (service.__JSONP_DATA) {
        responseText = service.__JSONP_DATA;
        delete service.__JSONP_DATA;
      } // call the service callback with the response text (so it can parse the response)


      this.runServiceCallback.call(this, complete, service, responseText);
    }, this.options.timeout, service.data, service.headers); // `service.data` and `service.headers` are optional (they only count if `!service.isScript` anyway)
  } // The service request has run (and possibly has a `responseText`) [no `responseText` if `isScript`]
  // We need to run its callback which determines if its successful or not
  // `complete` is called on success or failure


  runServiceCallback(complete, service, responseText) {
    // this is the function that is called if the service uses the async callback in its handler method
    const serviceResultHandler = asyncResult => {
      // if `result` is a valid value, then this function shouldn't really run
      // even if it is called by `service.callback`
      if (!result) {
        this.onServiceResult(complete, asyncResult);
      }
    }; // the function `service.callback` will either extract a country code from `responseText` and return it (in `result`)
    // or (if it has to make additional requests) it will call a `done` callback with the country code when it is ready


    const result = service.callback(serviceResultHandler, responseText);

    if (result) {
      this.onServiceResult(complete, result);
    }
  } // This is called with the `result` from `service.callback` regardless of how it provided that result (sync or async).
  // `result` will be whatever is returned from `service.callback`. A service callback should provide an object with data


  onServiceResult(complete, result) {
    // convert result to nodejs style async callback
    if (result instanceof Error || result && result.error) {
      complete.call(this, result, null);
    } else {
      complete.call(this, null, result);
    }
  } // if `err` is set, the next service handler is called
  // if `err` is null, the `onComplete` handler is called with `data`


  runNextServiceOnError(err, data) {
    if (err) {
      this.logError(err);
      const nextService = this.getNextService();

      if (nextService) {
        this.runService(nextService, this.runNextServiceOnError.bind(this));
      } else {
        this.completeService.call(this, this.callbackError, new Error('All services failed'));
      }
    } else {
      this.completeService.call(this, this.callbackComplete, data);
    }
  }

  getCurrentServiceOpts() {
    const val = this.options.services[this.currentServiceIndex];

    if (typeof val == 'string') {
      return {
        name: val
      };
    } else if (typeof val == 'function') {
      return val();
    } else if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(val)) {
      return val;
    } else {
      return {};
    }
  } // calls the `onComplete` callback after resetting the `currentServiceIndex`


  completeService(fn, data) {
    this.currentServiceIndex = -1;
    fn && fn(data);
  }

  logError(err) {
    console.warn(`The service[${this.currentServiceIndex}] (${this.getServiceByIdx(this.currentServiceIndex).url}) responded with the following error`, err);
  }

}

/***/ }),

/***/ "./src/models/Popup.js":
/*!*****************************!*\
  !*** ./src/models/Popup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popup; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/popup */ "./src/options/popup.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");






class Popup extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(_options_popup__WEBPACK_IMPORTED_MODULE_1__["default"], options);
    this.userCategories = {
      UNCATEGORIZED: 'DISMISS',
      ESSENTIAL: 'ALLOW',
      PERSONALIZATION: 'DISMISS',
      ANALYTICS: 'DISMISS',
      MARKETING: 'DISMISS'
    };
    this.customStyles = {};
    this.hasTransition = !!function () {
      const el = document.createElement('div');
      const trans = {
        t: 'transitionend',
        OT: 'oTransitionEnd',
        msT: 'MSTransitionEnd',
        MozT: 'transitionend',
        WebkitT: 'webkitTransitionEnd'
      };

      for (let prefix in trans) {
        if (trans.hasOwnProperty(prefix) && typeof el.style[prefix + 'ransition'] !== 'undefined') {
          return trans[prefix];
        }
      }

      return '';
    }(); // returns true if `onComplete` was called

    if (this.canUseCookies()) {
      // user has already answered
      this.options.enabled = false;
    } // apply blacklist / whitelist


    if (this.options.blacklistPage.includes(location.pathname)) {
      this.options.enabled = false;
    }

    if (this.options.whitelistPage.includes(location.pathname)) {
      this.options.enabled = true;
    } // the full markup either contains the wrapper or it does not (for multiple instances)


    let cookiePopup = this.options.window.replace('{{classes}}', this.getPopupClasses().join(' ')).replace('{{children}}', this.getPopupInnerMarkup()); // if user passes html, use it instead

    const customHTML = this.options.overrideHTML;

    if (typeof customHTML == 'string' && customHTML.length) {
      cookiePopup = customHTML;
    } // if static, we need to grow the element from 0 height so it doesn't jump the page
    // content. we wrap an element around it which will mask the hidden content


    if (this.options.static) {
      // `grower` is a wrapper div with a hidden overflow whose height is animated
      const wrapper = this.appendMarkup(`<div class="cc-grower">${cookiePopup}</div>`);
      wrapper.style.display = ''; // set it to visible (because appendMarkup hides it)

      this.element = wrapper.firstChild; // get the `element` reference from the wrapper

      this.element.style.display = 'none';
      this.element.classList.add('cc-invisible');
    } else {
      this.element = this.appendMarkup(cookiePopup);
    }

    this.applyAutoDismiss();
    this.applyRevokeButton();

    if (this.options.autoOpen) {
      this.autoOpen();
    }
  }

  open() {
    if (!this.element) return;

    if (!this.isOpen()) {
      if (this.hasTransition) {
        this.fadeIn();
      } else {
        this.element.style.display = '';
      }

      if (this.options.revokable) {
        this.toggleRevokeButton();
      }

      this.emit("popupOpened");
    }

    return this;
  }

  close(showRevoke) {
    if (!this.element) return;

    if (this.isOpen()) {
      if (this.hasTransition) {
        this.fadeOut();
      } else {
        this.element.style.display = 'none';
      }

      if (showRevoke && this.options.revokable) {
        this.toggleRevokeButton(true);
      }

      this.emit("popupClosed");
    }

    return this;
  }

  fadeIn() {
    const el = this.element;
    if (!this.hasTransition || !el) return; // This should always be called AFTER fadeOut (which is governed by the 'transitionend' event).
    // 'transitionend' isn't all that reliable, so, if we try and fadeIn before 'transitionend' has
    // has a chance to run, then we run it ourselves

    if (this.afterTransition) {
      this.afterFadeOut(el);
    }

    if (el.classList.contains('cc-invisible')) {
      el.style.display = '';

      if (this.options.static) {
        this.element.parentNode.style.maxHeight = this.element.clientHeight + 'px';
      }

      const fadeInTimeout = 20; // (ms) DO NOT MAKE THIS VALUE SMALLER. See below
      // Although most browsers can handle values less than 20ms, it should remain above this value.
      // This is because we are waiting for a "browser redraw" before we remove the 'cc-invisible' class.
      // If the class is remvoed before a redraw could happen, then the fadeIn effect WILL NOT work, and
      // the popup will appear from nothing. Therefore we MUST allow enough time for the browser to do
      // its thing. The actually difference between using 0 and 20 in a set timeout is neglegible anyway

      this.openingTimeout = setTimeout(() => this.afterFadeIn(el), fadeInTimeout);
    }
  }
  /**
   * This needs to be called after 'fadeIn'. This is the code that actually causes the fadeIn to work
   * There is a good reason why it's called in a timeout. Read 'fadeIn'
   */


  afterFadeIn(element) {
    this.openingTimeout = null;
    element.classList.remove('cc-invisible');
  }

  fadeOut() {
    if (!this.hasTransition || !this.element) return;

    if (this.openingTimeout) {
      clearTimeout(this.openingTimeout);
      this.afterFadeIn(this.element);
    }

    if (!this.element.classList.contains('cc-invisible')) {
      if (this.options.static) {
        this.element.parentNode.style.maxHeight = '';
      }

      this.afterTransition = () => this.afterFadeOut(this.element);

      this.element.addEventListener(this.transitionEnd, this.afterTransition);
      this.element.classList.add('cc-invisible');
    }
  }

  afterFadeOut(el) {
    el.style.display = 'none'; // after close and before open, the display should be none

    el.removeEventListener(this.transitionEnd, this.afterTransition);
    this.afterTransition = null;
  }

  isOpen() {
    return this.element && this.element.style.display === '' && (this.hasTransition ? !this.element.classList.contains('cc-invisible') : true);
  }

  toggleRevokeButton(show) {
    if (this.revokeBtn) this.revokeBtn.style.display = show ? '' : 'none';
  }

  revokeChoice(preventOpen) {
    this.options.enabled = true;
    this.clearStatuses();
    this.emit("revokeChoice");

    if (!preventOpen) {
      this.autoOpen();
    }
  }
  /**
   * Has the user responded to the banner
   * @return { boolean } - true if any cookies have been set
   */


  hasAnswered() {
    return this.getStatuses().some(status => !!status);
  }
  /**
   * Indicates if the user has given consent to all of the categories
   * @return { array<boolean> } - true if consent has been given
   */


  hasConsented() {
    return this.getStatuses().map(status => status === _constants__WEBPACK_IMPORTED_MODULE_2__["statusAllow"] || status === _constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
  } // opens the popup if no answer has been given


  autoOpen() {
    const hasAnswered = this.hasAnswered();

    if (!hasAnswered && this.options.enabled) {
      this.open();
    } else if (hasAnswered && this.options.revokable) {
      this.toggleRevokeButton(true);
    }
  }
  /** 
   * Set's cookie statuses
   * @param { string<status> } allOrUndef      - If this is the only param, set ALL if not, set Uncategorized cookies statuses set to value.
   * @param { string<status> } essential       - Essential Cookies status set to value
   * @param { string<status> } personalization - Preferences / Functionality set to value
   * @param { string<status> } analytics       - Analytis Cookies status set to value
   * @param { string<status> } marketing       - Marketing Cookies status set to value
   * @return { undefined }
  */


  setStatuses() {
    const {
      name,
      expiryDays,
      domain,
      path,
      secure
    } = this.options.cookie;

    const updateCategoryStatus = (categoryName, status) => {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isValidStatus"])(status)) {
        const cookieName = name + '_' + categoryName;
        const chosenBefore = _constants__WEBPACK_IMPORTED_MODULE_2__["statuses"].indexOf(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getCookie"])(cookieName)) >= 0;
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setCookie"])(cookieName, status, expiryDays, domain, path, secure);
        this.emit("statusChanged", cookieName, status, chosenBefore);
      } else {
        this.clearStatuses();
      }
    };

    if (arguments.length === 0) {
      _constants__WEBPACK_IMPORTED_MODULE_2__["categories"].forEach(category => updateCategoryStatus(category, this.userCategories[category]));
    } else if (arguments.length === 1) {
      _constants__WEBPACK_IMPORTED_MODULE_2__["categories"].forEach(category => updateCategoryStatus(category, arguments[0]));
    } else if (arguments.length > 1) {
      arguments.forEach((categoryStatus, index) => {
        updateCategoryStatus(this.userCategories[index], categoryStatus);
      });
    }
  }
  /**
   * Get all cookie categoies statuses
   * @return { array<string> } - cookie categories status in order of categories
   */


  getStatuses() {
    return _constants__WEBPACK_IMPORTED_MODULE_2__["categories"].map(categoryName => Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getCookie"])(this.options.cookie.name + '_' + categoryName));
  }
  /**
   * Clear all cookie categoies statuses
   */


  clearStatuses() {
    const {
      name,
      domain,
      path
    } = this.options.cookie;
    _constants__WEBPACK_IMPORTED_MODULE_2__["categories"].forEach(categoryName => {
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setCookie"])(name + '_' + categoryName, '', -1, domain, path);
    });
  }

  canUseCookies() {
    if (!window.navigator.cookieEnabled || window.CookiesOK || window.navigator.CookiesOK) {
      return true;
    }

    const statusesValues = this.getStatuses();
    const matches = statusesValues.map((status, index) => ({
      [_constants__WEBPACK_IMPORTED_MODULE_2__["categories"][index]]: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isValidStatus"])(status)
    }));
    const hasMatches = matches.filter(match => match[Object.keys(match)[0]]).length > 0;
    statusesValues.forEach((status, index) => this.userCategories[_constants__WEBPACK_IMPORTED_MODULE_2__["categories"][index]] === status ? status : this.userCategories[_constants__WEBPACK_IMPORTED_MODULE_2__["categories"][index]]);
    return hasMatches;
  } // top, bottom, left, right


  getPositionClasses() {
    return this.options.position.split('-').map(pos => 'cc-' + pos);
  }

  getPopupClasses() {
    const opts = this.options;
    let positionStyle = opts.position == 'top' || opts.position == 'bottom' ? 'banner' : 'floating';

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isMobile"])() && opts.mobileForceFloat) {
      positionStyle = 'floating';
    }

    const classes = ['cc-' + positionStyle, // floating or banner
    'cc-type-' + opts.type, // add the compliance type
    'cc-theme-' + opts.theme];

    if (opts.static) {
      classes.push('cc-static');
    }

    classes.push.apply(classes, this.getPositionClasses()); // we only add extra styles if `palette` has been set to a valid value

    this.attachCustomPalette(this.options.palette); // if we override the palette, add the class that enables this

    if (this.customStyleSelector) {
      classes.push(this.customStyleSelector);
    }

    return classes;
  }

  getPopupInnerMarkup() {
    const interpolated = {};
    const opts = this.options; // removes link if showLink is false

    if (!opts.showLink) {
      opts.elements.link = '';
      opts.elements.messagelink = opts.elements.message;
    }

    Object.keys(opts.elements).forEach(prop => {
      interpolated[prop] = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["interpolateString"])(opts.elements[prop], name => {
        const str = opts.content[name];
        return name && typeof str == 'string' && str.length ? str : '';
      });
    }); // checks if the type is valid and defaults to info if it's not

    let complianceType = opts.compliance[opts.type];

    if (!complianceType) {
      complianceType = opts.compliance.info;
    } // build the compliance types from the already interpolated `elements`


    interpolated.compliance = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["interpolateString"])(complianceType, name => interpolated[name]); // checks if the layout is valid and defaults to basic if it's not

    let layout = opts.layouts[opts.layout];

    if (!layout) {
      layout = opts.layouts.basic;
    }

    return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["interpolateString"])(layout, match => interpolated[match]);
  }

  appendMarkup(markup) {
    const opts = this.options;
    const div = document.createElement('div');
    const cont = opts.container && opts.container.nodeType === 1 ? opts.container : document.body;
    div.innerHTML = markup;
    const el = div.children[0];
    el.style.display = 'none';

    if (el.classList.contains('cc-window') && this.hasTransition) {
      el.classList.add('cc-invisible');
    }

    el.addEventListener('click', event => this.handleButtonClick(event));
    el.querySelectorAll('.cc-btn [type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        this.userCategories[checkbox.name] = checkbox.checked ? 'ALLOW' : 'DENY';
      });
      checkbox.addEventListener('click', event => event.stopPropagation());
    });
    el.querySelectorAll(".cc-info").forEach(showInfo => {
      showInfo.addEventListener('mousedown', function (event) {
        if (this === document.activeElement) {
          this.blur();
          event.preventDefault();
        }
      });
    });

    if (opts.autoAttach) {
      try {
        if (!cont.firstChild) {
          cont.appendChild(el);
        } else {
          cont.insertBefore(el, cont.firstChild);
        }
      } catch (error) {
        throw new Error("No container to attach too. Make sure the DOM has loaded. Is your script loaded just before the `</body>` tag?");
      }
    }

    return el;
  }

  handleButtonClick(event) {
    // returns the parent element with the specified class, or the original element - null if not found
    const btn = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["traverseDOMPath"])(event.target, 'cc-btn') || event.target;

    if (btn.classList.contains('cc-btn') && btn.classList.contains('cc-save')) {
      this.setStatuses();
      this.close(true);
      return;
    }

    if (btn.classList.contains('cc-btn')) {
      const matches = btn.className.match(new RegExp('\\bcc-(' + _constants__WEBPACK_IMPORTED_MODULE_2__["statuses"].map(str => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')).join('|') + ')\\b'));
      const match = matches && matches[1] || false;

      if (match) {
        this.setStatuses(match);
        this.close(true);
      }

      return;
    }

    if (btn.classList.contains('cc-close')) {
      this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
      this.close(true);
      return;
    }

    if (btn.classList.contains('cc-revoke')) {
      this.revokeChoice();
      return;
    }
  }

  attachCustomPalette(palette) {
    const hashStr = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["hash"])(JSON.stringify(palette));
    const selector = 'cc-color-override-' + hashStr;
    const isValid = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"])(palette);
    this.customStyleSelector = isValid ? selector : null;

    if (isValid) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["addCustomStylesheet"])(hashStr, palette, '.' + selector);
    }

    return isValid;
  }

  getEventPath(event) {
    const path = event.composedPath ? event.composedPath() : function (arr, element) {
      while (element) {
        arr.push(element);
        element = element.parentNode;
      }

      return arr;
    }([], event.target);

    if (!path) {
      console.warn("'.path' & '.composedPath' failed to generate an event path.");
      return;
    }

    return path;
  }

  applyAutoDismiss() {
    const {
      enabled,
      dismissOnTimeout: delay,
      dismissOnScroll: scrollRange,
      dismissOnLinkClick,
      dismissOnWindowClick,
      dismissOnKeyPress
    } = this.options;

    if (enabled) {
      if (typeof delay == 'number' && delay >= 0) {
        this.dismissTimeout = setTimeout(() => {
          this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
          this.close(true);
        }, Math.floor(delay));
      } else if (typeof scrollRange == 'number' && scrollRange >= 0) {
        this.onWindowScroll = () => {
          if (window.pageYOffset > Math.floor(scrollRange)) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
            this.close(true);
            window.removeEventListener('scroll', this.onWindowScroll, {
              passive: true
            });
            this.onWindowScroll = null;
          }
        };

        window.addEventListener('scroll', this.onWindowScroll, {
          passive: true
        });
      } else if (dismissOnWindowClick) {
        this.onWindowClick = evt => {
          if (!getEventPath(evt).some(element => this.options.ignoreClicksFrom.some(ignoredClick => element.classList && element.classList.contains(ignoredClick)))) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
            this.close(true);
            window.removeEventListener('click', this.onWindowClick);
            window.removeEventListener('touchend', this.onWindowClick);
            this.onWindowClick = null;
          }
        };

        window.addEventListener('click', this.onWindowClick);
        window.addEventListener('touchend', this.onWindowClick);
      } else if (dismissOnLinkClick) {
        this.onLinkClick = evt => {
          if (getEventPath(evt).some(elem => typeof elem.tagName !== 'undefined' && elem.tagName === 'A')) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
            this.close(true);
            window.removeEventListener('click', this.onLinkClick);
            this.onLinkClick = null;
          }
        };

        window.addEventListener('click', this.onLinkClick);
      } else if (dismissOnKeyPress) {
        this.onKeyPress = event => {
          const {
            keyCode
          } = event;

          if (keyCode === 13) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusAllow"]);
            this.close(true);
          } else if (keyCode === 27) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
            this.close(true);
          }
        };

        window.addEventListener('onkeypress', this.onKeyPress);
      }
    }
  }

  applyRevokeButton() {
    // revokable is true if advanced compliance is selected
    if (this.options.type != 'info') this.options.revokable = true; // animateRevokable false for mobile devices

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isMobile"])()) this.options.animateRevokable = false;

    if (this.options.revokable) {
      const classes = this.getPositionClasses();

      if (this.options.animateRevokable) {
        classes.push('cc-animate');
      }

      if (this.customStyleSelector) {
        classes.push(this.customStyleSelector);
      }

      if (this.options.theme) {
        classes.push('cc-theme-' + this.options.theme);
      }

      console.log(this.options.content.policy);
      const revokeBtn = this.options.revokeBtn.replace('{{classes}}', classes.join(' ')).replace('{{policy}}', this.options.content.policy);
      this.revokeBtn = this.appendMarkup(revokeBtn);
      const btn = this.revokeBtn;

      if (this.options.animateRevokable) {
        const onMouseMove = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["throttle"])(function (evt) {
          let active = false;
          const minY = 20;
          const maxY = window.innerHeight - 20;

          if (btn.classList.contains('cc-top') && evt.clientY < minY || btn.classList.contains('cc-bottom') && evt.clientY > maxY) {
            active = true;
          }

          if (active && !btn.classList.contains('cc-active')) {
            btn.classList.add('cc-active');
          } else if (!active && btn.classList.contains('cc-active')) {
            btn.classList.remove('cc-active');
          }
        }, 200);
        this.onMouseMove = onMouseMove;
        window.addEventListener('mousemove', onMouseMove);
      }
    }
  }

  destroy() {
    console.warn("Destroying...");

    if (this.element) {
      this.element.remove();
    }

    if (this.revokeBtn) {
      this.revokeBtn.remove();
    }

    if (this.onWindowScroll) {
      window.removeEventListener('scroll', this.onWindowScroll);
    }

    if (this.onWindowClick) {
      window.removeEventListener('click', this.onWindowClick);
      window.removeEventListener('touchend', this.onWindowClick);
    }

    if (this.onLinkClick) {
      window.removeEventListener('click', this.onLinkClick);
    }

    if (this.onKeyPress) {
      window.addEventListener('onkeypress', this.onKeyPress);
    }
  }

}

/***/ }),

/***/ "./src/options/legal.js":
/*!******************************!*\
  !*** ./src/options/legal.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = ({
  // Make this false if you want to disable all regional overrides for settings.
  // If true, options can differ by country, depending on their cookie law.
  // It does not affect hiding the popup for countries that do not have cookie law.
  regionalLaw: true,
  // countries that enforce some version of a cookie law
  hasLaw: ['AT', 'BE', 'BG', 'HR', 'CZ', 'CY', 'DK', 'EE', 'FI', 'FR', 'DE', 'EL', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'NO', 'PL', 'PT', 'SK', 'ES', 'SE', 'GB', 'UK', 'GR', 'EU', 'RO'],
  // countries that say that all cookie consent choices must be revokable (a user must be able too change their mind)
  revokable: ['HR', 'CY', 'DK', 'EE', 'FR', 'DE', 'LV', 'LT', 'NL', 'NO', 'PT', 'ES'],
  // countries that say that a person can only "consent" if the explicitly click on "I agree".
  // in these countries, consent cannot be implied via a timeout or by scrolling down the page
  explicitAction: ['HR', 'IT', 'ES', 'NO']
});

/***/ }),

/***/ "./src/options/location.js":
/*!*********************************!*\
  !*** ./src/options/location.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const toError = obj => new Error('Error [' + (obj.code || 'UNKNOWN') + ']: ' + obj.error);

/* harmony default export */ __webpack_exports__["default"] = ({
  // The default timeout is 5 seconds. This is mainly needed to catch JSONP requests that error.
  // Otherwise there is no easy way to catch JSONP errors. That means that if a JSONP fails, the
  // app will take `timeout` milliseconds to react to a JSONP network error.
  timeout: 5000,
  // the order that services will be attempted in
  services: ['ipinfo'
  /*
    // 'ipinfodb' requires some options, so we define it using an object
  // this object will be passed to the function that defines the service
    {
    name: 'ipinfodb',
    interpolateUrl: {
      // obviously, this is a fake key
      api_key: 'vOgI3748dnIytIrsJcxS7qsDf6kbJkE9lN4yEDrXAqXcKUNvjjZPox3ekXqmMMld'
    },
  },
    // as well as defining an object, you can define a function that returns an object
    function () {
    return {name: 'ipinfodb'}
  },
    */
  ],
  serviceDefinitions: {
    ipinfo: function () {
      return {
        // This service responds with JSON, so we simply need to parse it and return the country code
        url: '//ipinfo.io',
        headers: ['Accept: application/json'],
        callback: function (done, response) {
          try {
            const json = JSON.parse(response);
            return json.error ? toError(json) : {
              code: json.country
            };
          } catch (err) {
            return toError({
              error: 'Invalid response (' + err + ')'
            });
          }
        }
      };
    },
    // This service requires an option to define `key`. Options are proived using objects or functions
    ipinfodb: function () {
      return {
        // This service responds with JSON, so we simply need to parse it and return the country code
        url: '//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}',
        isScript: true,
        // this is JSONP, therefore we must set it to run as a script
        callback: function (done, response) {
          try {
            const json = JSON.parse(response);
            return json.statusCode == 'ERROR' ? toError({
              error: json.statusMessage
            }) : {
              code: json.countryCode
            };
          } catch (err) {
            return toError({
              error: 'Invalid response (' + err + ')'
            });
          }
        }
      };
    },
    maxmind: function () {
      return {
        // This service responds with a JavaScript file which defines additional functionality. Once loaded, we must
        // make an additional AJAX call. Therefore we provide a `done` callback that can be called asynchronously
        url: '//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js',
        isScript: true,
        // this service responds with a JavaScript file, so it must be run as a script
        callback: function (done) {
          // if everything went okay then `geoip2` WILL be defined
          if (!window.geoip2) {
            done(new Error('Unexpected response format. The downloaded script should have exported `geoip2` to the global scope'));
            return;
          }

          geoip2.country(function (location) {
            try {
              done({
                code: location.country.iso_code
              });
            } catch (err) {
              done(toError(err));
            }
          }, function (err) {
            done(toError(err));
          }); // We can't return anything, because we need to wait for the second AJAX call to return.
          // Then we can 'complete' the service by passing data or an error to the `done` callback.
        }
      };
    }
  }
});

/***/ }),

/***/ "./src/options/popup.js":
/*!******************************!*\
  !*** ./src/options/popup.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/index.js */ "./src/constants/index.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  // if false, this prevents the popup from showing (useful for giving to control to another piece of code)
  enabled: true,
  // optional (expecting a HTML element) if passed, the popup is appended to this element. default is `document.body`
  container: null,
  // defaults cookie options - it is RECOMMENDED to set these values to correspond with your server
  cookie: {
    // This is the name of this cookie - you can ignore this
    name: 'cookieconsent_status',
    // This is the url path that the cookie 'name' belongs to. The cookie can only be read at this location
    path: null,
    // This is the domain that the cookie 'name' belongs to. The cookie can only be read on this domain.
    //  - Guide to cookie domains - https://www.mxsasha.eu/blog/2014/03/04/definitive-guide-to-cookie-domains/
    domain: null,
    // The cookies expire date, specified in days (specify -1 for no expiry)
    expiryDays: null,
    // If true the cookie will be created with the secure flag. Secure cookies will only be transmitted via HTTPS.
    secure: null
  },
  // each item defines the inner text for the element that it references
  content: {
    header: 'Cookies used on the website!',
    message: 'This website uses cookies to ensure you get the best experience on our website.',
    dismiss: 'Got it!',
    allow: 'Allow cookies',
    deny: 'Decline',
    link: 'Learn more',
    href: 'https://www.cookiesandyou.com',
    close: '&#x274c',
    target: '_blank',
    policy: 'Cookie Policy'
  },
  // This is the HTML for the elements above. The string {{header}} will be replaced with the equivalent text below.
  // You can remove "{{header}}" and write the content directly inside the HTML if you want.
  //
  //  - ARIA rules suggest to ensure controls are tabbable (so the browser can find the first control),
  //    and to set the focus to the first interactive control (https://w3c.github.io/using-aria/)
  elements: {
    header: '<span class="cc-header">{{header}}</span>&nbsp',
    message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
    messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a></span>',
    dismiss: `<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-${_constants_index_js__WEBPACK_IMPORTED_MODULE_0__["statusDismiss"]}">{{dismiss}}</a>`,
    allow: `<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-${_constants_index_js__WEBPACK_IMPORTED_MODULE_0__["statusAllow"]}">{{allow}}</a>`,
    deny: `<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-${_constants_index_js__WEBPACK_IMPORTED_MODULE_0__["statusDeny"]}">{{deny}}</a>`,
    link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',
    close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>',
    categories: '<ul class="cc-categories">' + _constants_index_js__WEBPACK_IMPORTED_MODULE_0__["categories"].map((category, index) => `<li class="cc-category">
          <button class="cc-btn" tabindex="0"><input type="checkbox" name="${category}"/><span class="cc-btn-checkbox"></span>${category}</button>
          <button class="cc-btn cc-info" aria-label="${category} Definition Button" tabindex="${index + 1}">^</button>
          <div class="cc-tooltip">
            <p>This is the category for cookies that don't fit the '${category.toLowerCase()}' category.</p>
          </div>
        </li>`).join("") + '</ul>',
    save: `<button class="cc-btn cc-save">Save</button>` //compliance: compliance is also an element, but it is generated by the application, depending on `type` below

  },
  // The placeholders {{classes}} and {{children}} both get replaced during initialisation:
  //  - {{classes}} is where additional classes get added
  //  - {{children}} is where the HTML children are placed
  window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}"><!--googleoff: all-->{{children}}<!--googleon: all--></div>',
  modal: '',
  // This is the html for the revoke button. This only shows up after the user has selected their level of consent
  // It can be enabled of disabled using the `revokable` option
  revokeBtn: '<div class="cc-revoke {{classes}}">{{policy}}</div>',
  // define types of 'compliance' here. '{{value}}' strings in here are linked to `elements`
  compliance: {
    info: '<div class="cc-compliance">{{dismiss}}</div>',
    'opt-in': '<div class="cc-compliance cc-highlight">{{dismiss}}{{allow}}{{customize}}</div>',
    'opt-out': '<div class="cc-compliance cc-highlight">{{dismiss}}{{deny}}</div>',
    categories: '<div class="form">{{categories}}{{save}}</div>'
  },
  // select your type of popup here
  type: 'info',
  // refers to `compliance` (in other words, the buttons that are displayed)
  // define layout layouts here
  layouts: {
    // the 'block' layout tend to be for square floating popups
    basic: '{{messagelink}}{{compliance}}',
    'basic-close': '{{messagelink}}{{compliance}}{{close}}',
    'basic-header': '{{header}}{{message}}{{link}}{{compliance}}' // add a custom layout here, then add some new css with the class '.cc-layout-my-cool-layout'
    //'my-cool-layout': '<div class="my-special-layout">{{message}}{{compliance}}</div>{{close}}',

  },
  // default layout (see above)
  layout: 'basic',
  // this refers to the popup windows position. we currently support:
  //  - banner positions: top, bottom
  //  - floating positions: top-left, top-right, bottom-left, bottom-right
  //
  // adds a class `cc-floating` or `cc-banner` which helps when styling
  position: 'bottom',
  // default position is 'bottom'
  // Available styles
  //    -block (default, no extra classes)
  //    -edgeless
  //    -classic
  // use your own style name and use `.cc-theme-STYLENAME` class in CSS to edit.
  // Note: style "wire" is used for the configurator, but has no CSS styles of its own, only palette is used.
  theme: 'block',
  // The popup is `fixed` by default, but if you want it to be static (inline with the page content), set this to false
  // Note: by default, we animate the height of the popup from 0 to full size
  static: false,
  // if you want custom colours, pass them in here. this object should look like this.
  // ideally, any custom colours/themes should be created in a separate style sheet, as this is more efficient.
  //   {
  //     popup: {background: '#000000', text: '#fff', link: '#fff'},
  //     button: {background: 'transparent', border: '#f8e71c', text: '#f8e71c'},
  //     highlight: {background: '#f8e71c', border: '#f8e71c', text: '#000000'},
  //   }
  // `highlight` is optional and extends `button`. if it exists, it will apply to the first button
  // only background needs to be defined for every element. if not set, other colors can be calculated from it
  palette: null,
  // Some countries REQUIRE that a user can change their mind. You can configure this yourself.
  // Most of the time this should be false, but the `cookieconsent.legal` can change this to `true` if it detects that it should
  revokable: false,
  // if true, the revokable button will tranlate in and out
  animateRevokable: true,
  // used to disable link on existing layouts
  // replaces element messagelink with message and removes content of link
  showLink: true,
  // set value as scroll range to enable
  dismissOnScroll: false,
  // set value as time in milliseconds to autodismiss after set time
  dismissOnTimeout: false,
  // set value as click anything on the page, excluding the `ignoreClicksFrom` below (if we click on the revoke button etc)
  dismissOnWindowClick: false,
  // set value as click anything on the page, excluding the `ignoreClicksFrom` below (if we click on the revoke button etc)
  dismissOnLinkClick: false,
  // set value as keys are pressed, ( allowKeyCode = 13, denyKeyCode = 27 )
  dismissOnKeyPress: false,
  // If `dismissOnWindowClick` is true, we can click on 'revoke' and we'll still dismiss the banner, so we need exceptions.
  // should be an array of class names (not CSS selectors)
  ignoreClicksFrom: ['cc-revoke', 'cc-btn', 'cc-link'],
  // already includes the revoke button and the banner itself
  // The application automatically decide whether the popup should open.
  // Set this to false to prevent this from happening and to allow you to control the behaviour yourself
  autoOpen: true,
  // By default the created HTML is automatically appended to the container (which defaults to <body>). You can prevent this behaviour
  // by setting this to false, but if you do, you must attach the `element` yourself, which is a public property of the popup instance:
  //
  //     const instance = cookieconsent.factory(options)
  //     document.body.appendChild(instance.element)
  //
  autoAttach: true,
  // set value if floating layout should be forced for mobile devices
  mobileForceFloat: true,
  // simple whitelist/blacklist for pages. specify page by:
  //   - using a string : '/index.html'           (matches '/index.html' exactly) OR
  //   - using RegExp   : /\/page_[\d]+\.html/    (matched '/page_1.html' and '/page_2.html' etc)
  whitelistPage: [],
  blacklistPage: [],
  // If this is defined, then it is used as the inner html instead of layout. This allows for ultimate customisation.
  // Be sure to use the classes `cc-btn` and `cc-ALLOW`, `cc-DENY` or `cc-DISMISS`. They enable the app to register click
  // handlers. You can use other pre-existing classes too. See `src/styles` folder.
  overrideHTML: null
});

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/postcss-loader/src!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/styles/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/utils/async.js":
/*!****************************!*\
  !*** ./src/utils/async.js ***!
  \****************************/
/*! exports provided: getScript, makeAsyncRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScript", function() { return getScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAsyncRequest", function() { return makeAsyncRequest; });


const getScript = (url, callback, timeout) => {
  let timeoutIdx;
  const scriptTag = document.createElement('script');
  scriptTag.type = 'text/' + (url.type || 'javascript');
  scriptTag.src = url.src || url;
  scriptTag.async = false;

  scriptTag.onreadystatechange = s.onload = function () {
    // this code handles two scenarios, whether called by onload or onreadystatechange
    const state = scriptTag.readyState;
    clearTimeout(timeoutIdx);

    if (!callback.done && (!state || /loaded|complete/.test(state))) {
      callback.done = true;
      callback();
      scriptTag.onreadystatechange = scriptTag.onload = null;
    }
  };

  document.body.appendChild(scriptTag); // You can't catch JSONP Errors, because it's handled by the script tag
  // one way is to use a timeout

  timeoutIdx = setTimeout(function () {
    callback.done = true;
    callback();
    scriptTag.onreadystatechange = scriptTag.onload = null;
  }, timeout);
};
const makeAsyncRequest = (url, onComplete, timeout, postData, requestHeaders) => {
  const xhr = new (window.XMLHttpRequest || window.ActiveXObject)('MSXML2.XMLHTTP.3.0');
  xhr.open(postData ? 'POST' : 'GET', url, 1);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  if (Array.isArray(requestHeaders)) {
    for (let i = 0, l = requestHeaders.length; i < l; ++i) {
      const split = requestHeaders[i].split(':', 2);
      xhr.setRequestHeader(split[0].replace(/^\s+|\s+$/g, ''), split[1].replace(/^\s+|\s+$/g, ''));
    }
  }

  if (typeof onComplete == 'function') {
    xhr.onreadystatechange = function () {
      if (xhr.readyState > 3) {
        onComplete(xhr);
      }
    };
  }

  xhr.send(postData);
};

/***/ }),

/***/ "./src/utils/cookie.js":
/*!*****************************!*\
  !*** ./src/utils/cookie.js ***!
  \*****************************/
/*! exports provided: getCookie, setCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);



const getCookie = name => {
  return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(name); // const value = ' ' + document.cookie
  // const parts = value.split(' ' + name + '=')
  // return parts.length < 2
  //   ? undefined
  //   : parts
  //       .pop()
  //       .split(';')
  //       .shift()
};
const setCookie = function (name, value, expiryDays, domain, path, secure) {
  let cookieOptions = {};

  if (expiryDays !== null && expiryDays !== undefined) {
    cookieOptions.expires = expiryDays;
  }

  if (domain !== null && domain !== undefined) {
    cookieOptions.domain = domain;
  }

  if (path !== null && path !== undefined) {
    cookieOptions.path = path;
  }

  if (secure !== null && secure !== undefined) {
    cookieOptions.secure = secure;
  }

  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(name, value, cookieOptions); // const exdate = new Date()
  // exdate.setHours(exdate.getHours() + ((typeof expiryDays !== "number"  ? 365 : expiryDays ) * 24))
  // document.cookie = name + '=' + value +
  //                   ',expires=' + exdate.toUTCString() +
  //                   ',path=' + (path || '/') +
  //                   ( domain ? ',domain=' + domain : '' ) +
  //                   ( secure ? ',secure' : '' )
};

/***/ }),

/***/ "./src/utils/dom.js":
/*!**************************!*\
  !*** ./src/utils/dom.js ***!
  \**************************/
/*! exports provided: traverseDOMPath, addCustomStylesheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseDOMPath", function() { return traverseDOMPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomStylesheet", function() { return addCustomStylesheet; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./src/utils/style.js");



const traverseDOMPath = (elem, className) => !elem || !elem.parentNode ? null : elem.classList.contains(className) ? elem : traverseDOMPath(elem.parentNode, className);
const addCustomStylesheet = (id, palette, prefix) => {
  const colorStyles = {};
  const {
    popup,
    button,
    highlight,
    saveButton
  } = palette; // needs background colour, text and link will be set to black/white if not specified

  if (popup) {
    // assumes popup.background is set
    popup.text = popup.text ? popup.text : Object(_style__WEBPACK_IMPORTED_MODULE_0__["getContrast"])(popup.background);
    popup.link = popup.link ? popup.link : popup.text;
    colorStyles[prefix + ' .cc-tooltip, ' + prefix + ' .cc-tooltip:after'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + '.cc-window'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + '.cc-revoke'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + ' .cc-link,' + prefix + ' .cc-link:active,' + prefix + ' .cc-link:visited'] = ['color: ' + popup.link];

    if (button) {
      // assumes button.background is set
      button.text = button.text ? button.text : Object(_style__WEBPACK_IMPORTED_MODULE_0__["getContrast"])(button.background);
      button.border = button.border ? button.border : 'transparent';
      colorStyles[prefix + ' .cc-btn'] = ['color: ' + button.text, 'border-color: ' + button.border, 'background-color: ' + button.background];

      if (button.padding) {
        colorStyles[prefix + ' .cc-btn'].push('padding: ' + button.padding);
      }

      if (button.background != 'transparent') {
        colorStyles[prefix + ' .cc-btn:hover, ' + prefix + ' .cc-btn:focus'] = ['background-color: ' + (button.hover || Object(_style__WEBPACK_IMPORTED_MODULE_0__["getHoverColor"])(button.background))];
      }

      if (highlight) {
        //assumes highlight.background is set
        highlight.text = highlight.text ? highlight.text : Object(_style__WEBPACK_IMPORTED_MODULE_0__["getContrast"])(highlight.background);
        highlight.border = highlight.border ? highlight.border : 'transparent';
        colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = ['color: ' + highlight.text, 'border-color: ' + highlight.border, 'background-color: ' + highlight.background];
      } else {
        // sets highlight text color to popup text. background and border are transparent by default.
        colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = ['color: ' + popup.text];
      }
    }

    if (saveButton) {
      colorStyles[`${prefix} .cc-btn.cc-save`] = ['color: ' + saveButton.text, 'border-color: ' + saveButton.border, 'background-color: ' + saveButton.background];
    }
  } // this will be interpretted as CSS. the key is the selector, and each array element is a rule


  const style = document.createElement('style');
  style.id = id;
  document.head.appendChild(style);
  Object.entries(colorStyles).forEach(([prop, value], index) => style.sheet.insertRule(`${prop}{${value.join(';')}}`, index));
  return style;
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: getCookie, setCookie, interpolateString, throttle, hash, normalizeHex, getContrast, getLuminance, getHoverColor, traverseDOMPath, addCustomStylesheet, isValidStatus, isPlainObject, isMobile, getScript, makeAsyncRequest, mergeOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return interpolateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHex", function() { return normalizeHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrast", function() { return getContrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoverColor", function() { return getHoverColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseDOMPath", function() { return traverseDOMPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomStylesheet", function() { return addCustomStylesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidStatus", function() { return isValidStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScript", function() { return getScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAsyncRequest", function() { return makeAsyncRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return mergeOptions; });
/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie */ "./src/utils/cookie.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/utils/style.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/utils/dom.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation */ "./src/utils/validation.js");
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./async */ "./src/utils/async.js");



const getCookie = _cookie__WEBPACK_IMPORTED_MODULE_0__["getCookie"];
const setCookie = _cookie__WEBPACK_IMPORTED_MODULE_0__["setCookie"];
const interpolateString = (str, callback) => str.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, (matches, replaced) => callback(replaced) || ''); // only used for throttling the 'mousemove' event (used for animating the revoke button when `animateRevokable` is true)

const throttle = (callback, limit) => {
  let wait = false;
  return function () {
    if (!wait) {
      callback(...arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}; // only used for hashing json objects (used for hash mapping palette objects, used when custom colours are passed through JavaScript)

const hash = str => {
  let hashNum = 0,
      i = 0,
      chr,
      len = str.length;
  if (str.length === 0) return hashNum;

  for (i; i < len; ++i) {
    chr = str.charCodeAt(i);
    hashNum = (hashNum << 5) - hashNum + chr;
    hashNum |= 0;
  }

  return hashNum;
};

const normalizeHex = _style__WEBPACK_IMPORTED_MODULE_1__["normalizeHex"];
const getContrast = _style__WEBPACK_IMPORTED_MODULE_1__["getContrast"];
const getLuminance = _style__WEBPACK_IMPORTED_MODULE_1__["getLuminance"];
const getHoverColor = _style__WEBPACK_IMPORTED_MODULE_1__["getHoverColor"];

const traverseDOMPath = _dom__WEBPACK_IMPORTED_MODULE_2__["traverseDOMPath"];
const addCustomStylesheet = _dom__WEBPACK_IMPORTED_MODULE_2__["addCustomStylesheet"];

const isValidStatus = _validation__WEBPACK_IMPORTED_MODULE_3__["isValidStatus"];
const isPlainObject = _validation__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"];
const isMobile = _validation__WEBPACK_IMPORTED_MODULE_3__["isMobile"];

const getScript = _async__WEBPACK_IMPORTED_MODULE_4__["getScript"];
const makeAsyncRequest = _async__WEBPACK_IMPORTED_MODULE_4__["makeAsyncRequest"];

const loopProperties = overwrites => (obj, [key, value]) => {
  if (value instanceof Object && !(value instanceof Array)) {
    if (overwrites[key] instanceof Object && !(overwrites[key] instanceof Array)) {
      obj[key] = Object.entries(value).reduce(loopProperties(overwrites[key]), {});
    } else {
      obj[key] = value;
    }
  } else {
    if (overwrites.hasOwnProperty(key)) {
      obj[key] = overwrites[key];
    } else {
      obj[key] = value;
    }
  }

  return obj;
};

const mergeOptions = (defaults, overwrites) => Object.entries(defaults).reduce(loopProperties(overwrites), {});

/***/ }),

/***/ "./src/utils/style.js":
/*!****************************!*\
  !*** ./src/utils/style.js ***!
  \****************************/
/*! exports provided: normalizeHex, getContrast, getLuminance, getHoverColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHex", function() { return normalizeHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrast", function() { return getContrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoverColor", function() { return getHoverColor; });


const normalizeHex = hex => hex[0] == '#' ? hex.substr(1) : hex.length == 3 ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] : hex; // used to get text colors if not set

const getContrast = hex => {
  hex = normalizeHex(hex);
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000' : '#fff';
}; // used to change color on highlight

const getLuminance = hex => {
  const num = parseInt(normalizeHex(hex), 16),
        amt = 38,
        R = (num >> 16) + amt,
        B = (num >> 8 & 0x00ff) + amt,
        G = (num & 0x0000ff) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
};
const getHoverColor = hex => {
  hex = normalizeHex(hex); // for black buttons

  return hex === '000000' ? '#222' : getLuminance(hex);
};

/***/ }),

/***/ "./src/utils/validation.js":
/*!*********************************!*\
  !*** ./src/utils/validation.js ***!
  \*********************************/
/*! exports provided: isValidStatus, isMobile, isPlainObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidStatus", function() { return isValidStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");



/**
 * Checks if a status is in the constants list
 * @param { string } status - Status String to
 * @return { boolean } - if status is valid
 */

const isValidStatus = status => _constants__WEBPACK_IMPORTED_MODULE_0__["statuses"].indexOf(status) >= 0;
const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); // The code "typeof obj === 'object' && obj !== null" allows Array objects

const isPlainObject = obj => typeof obj === 'object' && obj !== null && obj.constructor == Object;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanMtY29va2llL3NyYy9qcy5jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9Db29raWVDb25zZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvTGVnYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9Mb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9vcHRpb25zL2xlZ2FsLmpzIiwid2VicGFjazovLy8uL3NyYy9vcHRpb25zL2xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9vcHRpb25zL3BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzNkNDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2FzeW5jLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92YWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbInN0YXR1c2VzIiwic3RhdHVzRGVueSIsInN0YXR1c0FsbG93Iiwic3RhdHVzRGlzbWlzcyIsImNhdGVnb3JpZXMiLCJleHBvcnRzIiwibW9kdWxlIiwiQ29va2llQ29uc2VudCIsIndpbmRvdyIsImVtaXR0ZXIiLCJFdmVudEVtaXR0ZXIiLCJCYXNlIiwiY29uc3RydWN0b3IiLCJkZWZhdWx0T3B0aW9ucyIsIm9wdGlvbnMiLCJtZXJnZU9wdGlvbnMiLCJvbiIsImJpbmQiLCJlbWl0IiwiYW5zd2VycyIsIm1hcCIsImNhdGVnb3J5IiwiY29va2llTmFtZSIsImNvb2tpZSIsIm5hbWUiLCJhbnN3ZXIiLCJnZXRDb29raWUiLCJpc1ZhbGlkU3RhdHVzIiwidW5kZWZpbmVkIiwiZmlsdGVyIiwib2JqIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJsZWdhbCIsImNvdW50cnlDb2RlIiwiaW5pdGlhbGl6YXRpb25Db21wbGV0ZSIsImNvZGUiLCJsb2NhdGlvbiIsIkxvY2F0aW9uIiwibG9jYXRlIiwiaW5pdGlhbGl6YXRpb25FcnJvciIsInJlc3VsdCIsIkxlZ2FsIiwiYXBwbHlMYXciLCJwb3B1cCIsIlBvcHVwIiwiZXJyb3IiLCJnZXRDb3VudHJ5TGF3cyIsImdldCIsImlzT3BlbiIsImNsb3NlIiwicmV2b2tlQ2hvaWNlIiwib3BlbiIsInRvZ2dsZVJldm9rZUJ1dHRvbiIsImJvb2wiLCJzZXRTdGF0dXNlcyIsInN0YXR1cyIsImNsZWFyU3RhdHVzZXMiLCJkZXN0cm95IiwicmVkdWNlIiwiZGVmaW5lUHJvcGVydHkiLCJzZXQiLCJlbnVtZXJhYmxlIiwid3JpdGVhYmxlIiwiY29uZmlndXJhYmxlIiwiaGFzTGF3IiwiaW5kZXhPZiIsInJldm9rYWJsZSIsImV4cGxpY2l0QWN0aW9uIiwiY291bnRyeSIsImVuYWJsZWQiLCJyZWdpb25hbExhdyIsImRpc21pc3NPblNjcm9sbCIsImRpc21pc3NPblRpbWVvdXQiLCJjdXJyZW50U2VydmljZUluZGV4IiwiZ2V0TmV4dFNlcnZpY2UiLCJzZXJ2aWNlIiwiZ2V0U2VydmljZUJ5SWR4Iiwic2VydmljZXMiLCJpZHgiLCJzZXJ2aWNlT3B0aW9uIiwiZHluYW1pY09wdHMiLCJhc3NpZ24iLCJzZXJ2aWNlRGVmaW5pdGlvbnMiLCJpc1BsYWluT2JqZWN0IiwiY29tcGxldGUiLCJFcnJvciIsImNhbGxiYWNrQ29tcGxldGUiLCJjYWxsYmFja0Vycm9yIiwicnVuU2VydmljZSIsInJ1bk5leHRTZXJ2aWNlT25FcnJvciIsInNldHVwVXJsIiwic2VydmljZU9wdHMiLCJnZXRDdXJyZW50U2VydmljZU9wdHMiLCJ1cmwiLCJyZXBsYWNlIiwiXyIsInBhcmFtIiwidGVtcE5hbWUiLCJEYXRlIiwibm93IiwicmVzIiwiX19KU09OUF9EQVRBIiwiSlNPTiIsInN0cmluZ2lmeSIsImludGVycG9sYXRlVXJsIiwiY2FsbGJhY2siLCJyZXF1ZXN0RnVuY3Rpb24iLCJpc1NjcmlwdCIsImdldFNjcmlwdCIsIm1ha2VBc3luY1JlcXVlc3QiLCJ4aHIiLCJyZXNwb25zZVRleHQiLCJydW5TZXJ2aWNlQ2FsbGJhY2siLCJjYWxsIiwidGltZW91dCIsImRhdGEiLCJoZWFkZXJzIiwic2VydmljZVJlc3VsdEhhbmRsZXIiLCJhc3luY1Jlc3VsdCIsIm9uU2VydmljZVJlc3VsdCIsImVyciIsImxvZ0Vycm9yIiwibmV4dFNlcnZpY2UiLCJjb21wbGV0ZVNlcnZpY2UiLCJ2YWwiLCJmbiIsImNvbnNvbGUiLCJ3YXJuIiwidXNlckNhdGVnb3JpZXMiLCJVTkNBVEVHT1JJWkVEIiwiRVNTRU5USUFMIiwiUEVSU09OQUxJWkFUSU9OIiwiQU5BTFlUSUNTIiwiTUFSS0VUSU5HIiwiY3VzdG9tU3R5bGVzIiwiaGFzVHJhbnNpdGlvbiIsImVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHJhbnMiLCJ0IiwiT1QiLCJtc1QiLCJNb3pUIiwiV2Via2l0VCIsInByZWZpeCIsImhhc093blByb3BlcnR5Iiwic3R5bGUiLCJjYW5Vc2VDb29raWVzIiwiYmxhY2tsaXN0UGFnZSIsImluY2x1ZGVzIiwicGF0aG5hbWUiLCJ3aGl0ZWxpc3RQYWdlIiwiY29va2llUG9wdXAiLCJnZXRQb3B1cENsYXNzZXMiLCJqb2luIiwiZ2V0UG9wdXBJbm5lck1hcmt1cCIsImN1c3RvbUhUTUwiLCJvdmVycmlkZUhUTUwiLCJzdGF0aWMiLCJ3cmFwcGVyIiwiYXBwZW5kTWFya3VwIiwiZGlzcGxheSIsImVsZW1lbnQiLCJmaXJzdENoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwbHlBdXRvRGlzbWlzcyIsImFwcGx5UmV2b2tlQnV0dG9uIiwiYXV0b09wZW4iLCJmYWRlSW4iLCJzaG93UmV2b2tlIiwiZmFkZU91dCIsImFmdGVyVHJhbnNpdGlvbiIsImFmdGVyRmFkZU91dCIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsIm1heEhlaWdodCIsImNsaWVudEhlaWdodCIsImZhZGVJblRpbWVvdXQiLCJvcGVuaW5nVGltZW91dCIsImFmdGVyRmFkZUluIiwicmVtb3ZlIiwiY2xlYXJUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRyYW5zaXRpb25FbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2hvdyIsInJldm9rZUJ0biIsInByZXZlbnRPcGVuIiwiaGFzQW5zd2VyZWQiLCJnZXRTdGF0dXNlcyIsInNvbWUiLCJoYXNDb25zZW50ZWQiLCJleHBpcnlEYXlzIiwiZG9tYWluIiwicGF0aCIsInNlY3VyZSIsInVwZGF0ZUNhdGVnb3J5U3RhdHVzIiwiY2F0ZWdvcnlOYW1lIiwiY2hvc2VuQmVmb3JlIiwic2V0Q29va2llIiwiYXJndW1lbnRzIiwiZm9yRWFjaCIsImNhdGVnb3J5U3RhdHVzIiwiaW5kZXgiLCJuYXZpZ2F0b3IiLCJjb29raWVFbmFibGVkIiwiQ29va2llc09LIiwic3RhdHVzZXNWYWx1ZXMiLCJtYXRjaGVzIiwiaGFzTWF0Y2hlcyIsIm1hdGNoIiwiZ2V0UG9zaXRpb25DbGFzc2VzIiwicG9zaXRpb24iLCJzcGxpdCIsInBvcyIsIm9wdHMiLCJwb3NpdGlvblN0eWxlIiwiaXNNb2JpbGUiLCJtb2JpbGVGb3JjZUZsb2F0IiwiY2xhc3NlcyIsInR5cGUiLCJ0aGVtZSIsInB1c2giLCJhcHBseSIsImF0dGFjaEN1c3RvbVBhbGV0dGUiLCJwYWxldHRlIiwiY3VzdG9tU3R5bGVTZWxlY3RvciIsImludGVycG9sYXRlZCIsInNob3dMaW5rIiwiZWxlbWVudHMiLCJsaW5rIiwibWVzc2FnZWxpbmsiLCJtZXNzYWdlIiwicHJvcCIsImludGVycG9sYXRlU3RyaW5nIiwic3RyIiwiY29udGVudCIsImNvbXBsaWFuY2VUeXBlIiwiY29tcGxpYW5jZSIsImluZm8iLCJsYXlvdXQiLCJsYXlvdXRzIiwiYmFzaWMiLCJtYXJrdXAiLCJkaXYiLCJjb250IiwiY29udGFpbmVyIiwibm9kZVR5cGUiLCJib2R5IiwiaW5uZXJIVE1MIiwiY2hpbGRyZW4iLCJldmVudCIsImhhbmRsZUJ1dHRvbkNsaWNrIiwicXVlcnlTZWxlY3RvckFsbCIsImNoZWNrYm94IiwiY2hlY2tlZCIsInN0b3BQcm9wYWdhdGlvbiIsInNob3dJbmZvIiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJwcmV2ZW50RGVmYXVsdCIsImF1dG9BdHRhY2giLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsImJ0biIsInRyYXZlcnNlRE9NUGF0aCIsInRhcmdldCIsImNsYXNzTmFtZSIsIlJlZ0V4cCIsImhhc2hTdHIiLCJoYXNoIiwic2VsZWN0b3IiLCJpc1ZhbGlkIiwiYWRkQ3VzdG9tU3R5bGVzaGVldCIsImdldEV2ZW50UGF0aCIsImNvbXBvc2VkUGF0aCIsImFyciIsImRlbGF5Iiwic2Nyb2xsUmFuZ2UiLCJkaXNtaXNzT25MaW5rQ2xpY2siLCJkaXNtaXNzT25XaW5kb3dDbGljayIsImRpc21pc3NPbktleVByZXNzIiwiZGlzbWlzc1RpbWVvdXQiLCJNYXRoIiwiZmxvb3IiLCJvbldpbmRvd1Njcm9sbCIsInBhZ2VZT2Zmc2V0IiwicGFzc2l2ZSIsIm9uV2luZG93Q2xpY2siLCJldnQiLCJpZ25vcmVDbGlja3NGcm9tIiwiaWdub3JlZENsaWNrIiwib25MaW5rQ2xpY2siLCJlbGVtIiwidGFnTmFtZSIsIm9uS2V5UHJlc3MiLCJrZXlDb2RlIiwiYW5pbWF0ZVJldm9rYWJsZSIsImxvZyIsInBvbGljeSIsIm9uTW91c2VNb3ZlIiwidGhyb3R0bGUiLCJhY3RpdmUiLCJtaW5ZIiwibWF4WSIsImlubmVySGVpZ2h0IiwiY2xpZW50WSIsInRvRXJyb3IiLCJpcGluZm8iLCJkb25lIiwicmVzcG9uc2UiLCJqc29uIiwicGFyc2UiLCJpcGluZm9kYiIsInN0YXR1c0NvZGUiLCJzdGF0dXNNZXNzYWdlIiwibWF4bWluZCIsImdlb2lwMiIsImlzb19jb2RlIiwiaGVhZGVyIiwiZGlzbWlzcyIsImFsbG93IiwiZGVueSIsImhyZWYiLCJ0b0xvd2VyQ2FzZSIsInNhdmUiLCJtb2RhbCIsInRpbWVvdXRJZHgiLCJzY3JpcHRUYWciLCJzcmMiLCJhc3luYyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInMiLCJvbmxvYWQiLCJzdGF0ZSIsInJlYWR5U3RhdGUiLCJ0ZXN0Iiwib25Db21wbGV0ZSIsInBvc3REYXRhIiwicmVxdWVzdEhlYWRlcnMiLCJYTUxIdHRwUmVxdWVzdCIsIkFjdGl2ZVhPYmplY3QiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImwiLCJzZW5kIiwiQ29va2llcyIsInZhbHVlIiwiY29va2llT3B0aW9ucyIsImV4cGlyZXMiLCJpZCIsImNvbG9yU3R5bGVzIiwiYnV0dG9uIiwiaGlnaGxpZ2h0Iiwic2F2ZUJ1dHRvbiIsInRleHQiLCJnZXRDb250cmFzdCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJwYWRkaW5nIiwiaG92ZXIiLCJnZXRIb3ZlckNvbG9yIiwiaGVhZCIsImVudHJpZXMiLCJzaGVldCIsImluc2VydFJ1bGUiLCJyZXBsYWNlZCIsImxpbWl0Iiwid2FpdCIsImhhc2hOdW0iLCJjaHIiLCJsZW4iLCJjaGFyQ29kZUF0Iiwibm9ybWFsaXplSGV4IiwiZ2V0THVtaW5hbmNlIiwiZG9tIiwidmFsaWRhdGlvbiIsImFzeW5jRm5zIiwibG9vcFByb3BlcnRpZXMiLCJvdmVyd3JpdGVzIiwia2V5IiwiZGVmYXVsdHMiLCJoZXgiLCJzdWJzdHIiLCJyIiwicGFyc2VJbnQiLCJnIiwiYiIsInlpcSIsIm51bSIsImFtdCIsIlIiLCJCIiwiRyIsInRvU3RyaW5nIiwic2xpY2UiLCJ1c2VyQWdlbnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSwyQkFBMkIsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsZUFBZSxlQUFlLHdDQUF3QyxxQ0FBcUMsb0NBQW9DLG1DQUFtQyxnQ0FBZ0MsRUFBRSw2QkFBNkIsZUFBZSxF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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5QkFBeUI7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FB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QUFJMUQsbURBQVEsQ0FBQ29FLE9BQVQsQ0FBaUJWLE1BQWpCLEtBQTRCLENBQTVEO0FBRUEsTUFBTW9LLFFBQVEsR0FBRyxNQUN0QixpRUFBaUV1SCxJQUFqRSxDQUF1RXBJLFNBQVMsQ0FBQ2tNLFNBQWpGLENBREssQyxDQUdQOztBQUNPLE1BQU03VCxhQUFhLEdBQUd4RCxHQUFHLElBQUksT0FBT0EsR0FBUCxLQUFlLFFBQWYsSUFBMkJBLEdBQUcsS0FBSyxJQUFuQyxJQUEyQ0EsR0FBRyxDQUFDbEIsV0FBSixJQUFtQm1CLE1BQTNGLEMiLCJmaWxlIjoiY29va2llY29uc2VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2Mtd2luZG93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTsgfVxcblxcbi5jYy13aW5kb3cuY2MtaW52aXNpYmxlIHtcXG4gIG9wYWNpdHk6IDA7IH1cXG5cXG4vKiBvbmx5IGFuaW1hdGUgaWZoYXMgY2xhc3MgJ2NjLWFuaW1hdGUnICovXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy10b3Age1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWJvdHRvbSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMmVtKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1hY3RpdmUuY2MtdG9wIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1hY3RpdmUuY2MtYm90dG9tIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1yZXZva2U6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuXFxuLmNjLWdyb3dlciB7XFxuICAvKiBJbml0aWFsbHkgd2UgZG9uJ3Qgd2FudCBhbnkgaGVpZ2h0LCBhbmQgd2Ugd2FudCB0aGUgY29udGVudHMgdG8gYmUgaGlkZGVuICovXFxuICBtYXgtaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC8qIFNldCBvdXIgdHJhbnNpdGlvbnMgdXAuICovXFxuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtbXMtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1vLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzOyB9XFxuXFxuLyogdGhlIHBvcHVwIHdpbmRvdyAqL1xcbi5jYy13aW5kb3csXFxuLmNjLXJldm9rZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGV4Y2x1ZGUgcGFkZGluZyB3aGVuIGRlYWxpbmcgd2l0aCB3aWR0aCAqL1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQ2FsaWJyaSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICAvKiBieSBzZXR0aW5nIHRoZSBiYXNlIGZvbnQgaGVyZSwgd2UgY2FuIHNpemUgdGhlIHJlc3Qgb2YgdGhlIHBvcHVwIHVzaW5nIENTUyBgZW1gICovXFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICAvKiB0aGUgZm9sbG93aW5nIGFyZSByYW5kb20gdW5qdXN0aWZpZWQgc3R5bGVzIC0ganVzdCBiZWNhdXNlIC0gc2hvdWxkIHByb2JhYmx5IGJlIHJlbW92ZWQgKi9cXG4gIHotaW5kZXg6IDk5OTg7IH1cXG5cXG4uY2MtcmV2b2tlIHtcXG4gIHotaW5kZXg6IDk5OTk7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXN0YXRpYyB7XFxuICBwb3NpdGlvbjogc3RhdGljOyB9XFxuXFxuLyogMiBiYXNpYyB0eXBlcyBvZiB3aW5kb3cgLSBmbG9hdGluZyAvIGJhbm5lciAqL1xcbi5jYy13aW5kb3cuY2MtZmxvYXRpbmcge1xcbiAgcGFkZGluZzogMmVtO1xcbiAgbWF4LXdpZHRoOiAyNGVtO1xcbiAgLyogMWVtID09IDE2cHggdGhlcmVmb3JlIDI0ZW0gPT0gMzg0cHggKi9cXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICBwYWRkaW5nOiAxZW0gMS44ZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4uY2MtcmV2b2tlIHtcXG4gIHBhZGRpbmc6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4vKiBjbGlja2FibGUgdGhpbmdzICovXFxuLmNjLWJ0bixcXG4uY2MtbGluayxcXG4uY2MtY2xvc2UsXFxuLmNjLXJldm9rZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uY2MtbGluayB7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmNjLWxpbms6aG92ZXIge1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi5jYy1saW5rOmFjdGl2ZSxcXG4uY2MtbGluazp2aXNpdGVkIHtcXG4gIGNvbG9yOiBpbml0aWFsOyB9XFxuXFxuLmNjLWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuNGVtIDAuOGVtO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcblxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4uY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQ6aG92ZXIsXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cXG4uY2MtY2xvc2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAuNWVtO1xcbiAgcmlnaHQ6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIC8qIHNlZWluZyBhcyB0aGlzIGNvbnRhaW5zIHRleHQgYW5kIG5vdCBhbiBpbWFnZSwgdGhlIGVsZW1lbnQgdGFsbGVyIHRoYW4gaXQgaXMgd2lkZSAoYmVjYXVzZSBpdCBpcyB0ZXh0KSAqL1xcbiAgLyogIC0gd2Ugd2FudCBpdCB0byBiZSBhIHNxdWFyZSwgYmVjYXVzZSBpdCdzIGFjdGluZyBhcyBhbiBpY29uICovXFxuICAvKiAgLSBzZXR0aW5nIHRoZSBsaW5lIGhlaWdodCBub3JtYWxpemVzIHRoZSBoZWlnaHQgKi9cXG4gIGxpbmUtaGVpZ2h0OiAwLjc1OyB9XFxuXFxuLmNjLWNsb3NlOmhvdmVyLFxcbi5jYy1jbG9zZTpmb2N1cyB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLyogVGhpcyBmaWxlIHNob3VsZCBjb250YWluIHN0eWxlcyB0aGF0IG1vZGlmaWVzIHRoZSBwb3B1cCBsYXlvdXQuICovXFxuLyogQnkgbGF5b3V0LCB3ZSBtZWFuIHRoZSBwaHlzaWNhbCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudHMgb24gdGhlIHBvcHVwIHdpbmRvdywgYW5kIHRoZSBtYXJnaW4gLyBwYWRkaW5nIGFyb3VuZCB0aG9zZSBlbGVtZW50cy4gKi9cXG4uY2MtcmV2b2tlLmNjLXRvcCB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAzZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVlbTsgfVxcblxcbi5jYy1yZXZva2UuY2MtYm90dG9tIHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDNlbTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNWVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZS5jYy1sZWZ0IHtcXG4gIGxlZnQ6IDNlbTtcXG4gIHJpZ2h0OiB1bnNldDsgfVxcblxcbi5jYy1yZXZva2UuY2MtcmlnaHQge1xcbiAgcmlnaHQ6IDNlbTtcXG4gIGxlZnQ6IHVuc2V0OyB9XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogRkxPQVRJTkcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB0aGVzZSBjbGFzc2VzIHBvc2l0aW9uIHRoZSBmbG9hdGluZyBlbGVtZW50ICovXFxuLmNjLXRvcCB7XFxuICB0b3A6IDFlbTsgfVxcblxcbi5jYy1sZWZ0IHtcXG4gIGxlZnQ6IDFlbTsgfVxcblxcbi5jYy1yaWdodCB7XFxuICByaWdodDogMWVtOyB9XFxuXFxuLmNjLWJvdHRvbSB7XFxuICBib3R0b206IDFlbTsgfVxcblxcbi8qIGxpbmtzIHRoYXQgYXJlIGRpcmVjdCBkZWNlbmRhbnRzIHNob3VsZCBiZSBkaXNwbGF5ZWQgYXMgYmxvY2sgKi9cXG4uY2MtZmxvYXRpbmcgPiAuY2MtbGluayB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG5cXG4uY2MtZmxvYXRpbmcgLmNjLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG5cXG4uY2Mtd2luZG93LmNjLWZsb2F0aW5nIC5jYy1jb21wbGlhbmNlIHtcXG4gIGZsZXg6IDEgMCBhdXRvOyB9XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQkFOTkVSICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5jYy1iYW5uZXIuY2MtdG9wIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDsgfVxcblxcbi5jYy1iYW5uZXIuY2MtYm90dG9tIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDsgfVxcblxcbi5jYy1iYW5uZXIgLmNjLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMWVtOyB9XFxuXFxuLyogQ09NUExJQU5DRSBCT1ggKi9cXG4uY2MtY29tcGxpYW5jZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5jYy1mbG9hdGluZyAuY2MtY29tcGxpYW5jZSA+IC5jYy1idG4ge1xcbiAgZmxleDogMTsgfVxcblxcbi5jYy1idG4gKyAuY2MtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTsgfVxcblxcbi8qIENhdGVnb3JpZXMgTGF5b3V0ICovXFxuLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5mb3JtIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1idG4ge1xcbiAgICBtYXJnaW46IDA7IH1cXG4gICAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1zYXZlIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLmNjLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yeSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIDJweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgICBoZWlnaHQ6IDI2cHg7XFxuICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAyMnB4KTtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDJweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0bjpub3QoLmNjLWluZm8pOm5vdCguY2Mtc2F2ZSkge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMjZweDsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWluZm8ge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGZvbnQtdmFyaWFudDogYWxsLXNtYWxsLWNhcHM7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWluZm86Zm9jdXMgKyAuY2MtdG9vbHRpcCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICB3aWR0aDogMTkwcHg7XFxuICAgIGJvdHRvbTogNDZweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXI6IHRoaW4gc29saWQgbGlnaHRncmV5O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuNyk7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXA6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgIHdpZHRoOiAxMHB4O1xcbiAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogLTdweDtcXG4gICAgICBsZWZ0OiAxMHB4O1xcbiAgICAgIGJveC1zaGFkb3c6IDJweCAxcHggMXB4IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC41KTsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCBwIHtcXG4gICAgICBtYXJnaW46IDA7IH1cXG5cXG5AbWVkaWEgcHJpbnQge1xcbiAgLmNjLXdpbmRvdyxcXG4gIC5jYy1yZXZva2Uge1xcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmNjLWJ0biB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IH0gfVxcblxcbi8qIGRpbWVuc2lvbnMgZm9yICdpUGhvbmU2IFBsdXMnIGFuZCBsb3dlciAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcbiAgLmNjLXdpbmRvdy5jYy10b3Age1xcbiAgICB0b3A6IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYm90dG9tIHtcXG4gICAgYm90dG9tOiAwOyB9XFxuICAuY2Mtd2luZG93LmNjLWJhbm5lciwgLmNjLXdpbmRvdy5jYy1mbG9hdGluZywgLmNjLXdpbmRvdy5jYy1yaWdodCwgLmNjLXdpbmRvdy5jYy1sZWZ0IHtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHVuc2V0OyB9XFxuICAgIC5jYy13aW5kb3cuY2MtYmFubmVyIC5jYy1jb21wbGlhbmNlIHtcXG4gICAgICBmbGV4OiAxIDEgYXV0bzsgfVxcbiAgICAuY2Mtd2luZG93LmNjLWJhbm5lciAuY2MtbWVzc2FnZSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcbiAgLmNjLXdpbmRvdy5jYy1mbG9hdGluZyB7XFxuICAgIG1heC13aWR0aDogbm9uZTsgfVxcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuY2Mtd2luZG93IC5jYy1tZXNzYWdlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuICAuY2Mtd2luZG93IC5jYy1jYXRlZ29yaWVzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1yaWdodDogOHB4OyB9XFxuICAuY2Mtd2luZG93IC5jYy1jYXRlZ29yeSB7XFxuICAgIG1hcmdpbjogNHB4IDA7IH1cXG4gICAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bjpub3QoLmNjLWluZm8pIHtcXG4gICAgICB3aWR0aDogY2FsYyggMTAwJSAtIDE2cHgpO1xcbiAgICAgIG1pbi13aWR0aDogMTQwcHg7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1NHB4KSB7XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtYnRuLmNjLXNhdmUge1xcbiAgICBtYXJnaW46IDhweCAwOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTBweCkge1xcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcnkge1xcbiAgICBtYXJnaW46IDRweCAwOyB9XFxuICAuZm9ybSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDM1MHB4OyB9XFxuICAuY2MtYnRuOm5vdCguY2MtaW5mbyk6bm90KC5jYy1zYXZlKSB7XFxuICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMTZweCk7IH0gfVxcblxcbi8qIENsYXNzaWMgKi9cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtY2xhc3NpYyB7XFxuICBwYWRkaW5nOiAxLjJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10eXBlLWluZm8uY2MtdGhlbWUtY2xhc3NpYyAuY2MtY29tcGxpYW5jZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmbGV4OiBub25lOyB9XFxuXFxuLmNjLXRoZW1lLWNsYXNzaWMge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1idG4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuOmxhc3QtY2hpbGQge1xcbiAgICAgIG1pbi13aWR0aDogMTQwcHg7IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogLTFweDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDI2cHg7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgei1pbmRleDogMTsgfVxcbiAgICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgLmNjLWJ0bi1jaGVja2JveCB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMnB4O1xcbiAgICAgICAgbGVmdDogNnB4O1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgLmNjLWJ0bi1jaGVja2JveDpiZWZvcmUge1xcbiAgICAgICAgICBjb250ZW50OiBcXFwiXFxcXDFGNUY1XFxcIjsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLmNjLWJ0bi1jaGVja2JveDphZnRlciB7XFxuICAgICAgY29udGVudDogXFxcIlxcXFwyNzEzXFxcIjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAtNHB4O1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgZm9udC1zaXplOiAyLjNyZW07XFxuICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuNSk7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4uY2MtaW5mbyB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAgNHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuOmxhc3QtY2hpbGQge1xcbiAgICAgIG1pbi13aWR0aDogMDsgfVxcbiAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy10b29sdGlwIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtdG9vbHRpcDphZnRlciB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCBsaWdodGdyZXk7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiB0aGluIHNvbGlkIGxpZ2h0Z3JleTsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10eXBlLWluZm8uY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi8qIEVkZ2VsZXNzICovXFxuLmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXdpbmRvdyB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1tZXNzYWdlIHtcXG4gIG1hcmdpbjogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1idG4ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMC44ZW0gMS44ZW07XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1tZXNzYWdlIHtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLWJ0biArIC5jYy1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gIHBhZGRpbmc6IDAuNGVtIDAuOGVtO1xcbiAgcGFkZGluZy1sZWZ0OiAyNnB4OyB9XFxuICAuY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuLmNjLWluZm8ge1xcbiAgICBwYWRkaW5nOiAwLjRlbSA0cHg7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCB7XFxuICBib3JkZXI6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbiIsIi8qIVxuICogSmF2YVNjcmlwdCBDb29raWUgdjIuMi4xXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICpcbiAqIENvcHlyaWdodCAyMDA2LCAyMDE1IEtsYXVzIEhhcnRsICYgRmFnbmVyIEJyYWNrXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHR2YXIgcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyO1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKCFyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIpIHtcblx0XHR2YXIgT2xkQ29va2llcyA9IHdpbmRvdy5Db29raWVzO1xuXHRcdHZhciBhcGkgPSB3aW5kb3cuQ29va2llcyA9IGZhY3RvcnkoKTtcblx0XHRhcGkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5Db29raWVzID0gT2xkQ29va2llcztcblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fTtcblx0fVxufShmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIGV4dGVuZCAoKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRmb3IgKDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHNbIGkgXTtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdHJlc3VsdFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVjb2RlIChzKSB7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvKCVbMC05QS1aXXsyfSkrL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0IChjb252ZXJ0ZXIpIHtcblx0XHRmdW5jdGlvbiBhcGkoKSB7fVxuXG5cdFx0ZnVuY3Rpb24gc2V0IChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGF0dHJpYnV0ZXMgPSBleHRlbmQoe1xuXHRcdFx0XHRwYXRoOiAnLydcblx0XHRcdH0sIGFwaS5kZWZhdWx0cywgYXR0cmlidXRlcyk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpICogMSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGUrNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdlJ3JlIHVzaW5nIFwiZXhwaXJlc1wiIGJlY2F1c2UgXCJtYXgtYWdlXCIgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzID8gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdFx0aWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdHZhbHVlID0gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHR2YWx1ZSA9IGNvbnZlcnRlci53cml0ZSA/XG5cdFx0XHRcdGNvbnZlcnRlci53cml0ZSh2YWx1ZSwga2V5KSA6XG5cdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXG5cdFx0XHRrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpXG5cdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpXG5cdFx0XHRcdC5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xuXG5cdFx0XHR2YXIgc3RyaW5naWZpZWRBdHRyaWJ1dGVzID0gJyc7XG5cdFx0XHRmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc7ICcgKyBhdHRyaWJ1dGVOYW1lO1xuXHRcdFx0XHRpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ29uc2lkZXJzIFJGQyA2MjY1IHNlY3Rpb24gNS4yOlxuXHRcdFx0XHQvLyAuLi5cblx0XHRcdFx0Ly8gMy4gIElmIHRoZSByZW1haW5pbmcgdW5wYXJzZWQtYXR0cmlidXRlcyBjb250YWlucyBhICV4M0IgKFwiO1wiKVxuXHRcdFx0XHQvLyAgICAgY2hhcmFjdGVyOlxuXHRcdFx0XHQvLyBDb25zdW1lIHRoZSBjaGFyYWN0ZXJzIG9mIHRoZSB1bnBhcnNlZC1hdHRyaWJ1dGVzIHVwIHRvLFxuXHRcdFx0XHQvLyBub3QgaW5jbHVkaW5nLCB0aGUgZmlyc3QgJXgzQiAoXCI7XCIpIGNoYXJhY3Rlci5cblx0XHRcdFx0Ly8gLi4uXG5cdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnPScgKyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdLnNwbGl0KCc7JylbMF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoZG9jdW1lbnQuY29va2llID0ga2V5ICsgJz0nICsgdmFsdWUgKyBzdHJpbmdpZmllZEF0dHJpYnV0ZXMpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldCAoa2V5LCBqc29uKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBqYXIgPSB7fTtcblx0XHRcdC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcblx0XHRcdC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLlxuXHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcblx0XHRcdHZhciBpID0gMDtcblxuXHRcdFx0Zm9yICg7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKTtcblx0XHRcdFx0dmFyIGNvb2tpZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuXHRcdFx0XHRpZiAoIWpzb24gJiYgY29va2llLmNoYXJBdCgwKSA9PT0gJ1wiJykge1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvb2tpZS5zbGljZSgxLCAtMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBuYW1lID0gZGVjb2RlKHBhcnRzWzBdKTtcblx0XHRcdFx0XHRjb29raWUgPSAoY29udmVydGVyLnJlYWQgfHwgY29udmVydGVyKShjb29raWUsIG5hbWUpIHx8XG5cdFx0XHRcdFx0XHRkZWNvZGUoY29va2llKTtcblxuXHRcdFx0XHRcdGlmIChqc29uKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGphcltuYW1lXSA9IGNvb2tpZTtcblxuXHRcdFx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGtleSA/IGphcltrZXldIDogamFyO1xuXHRcdH1cblxuXHRcdGFwaS5zZXQgPSBzZXQ7XG5cdFx0YXBpLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCBmYWxzZSAvKiByZWFkIGFzIHJhdyAqLyk7XG5cdFx0fTtcblx0XHRhcGkuZ2V0SlNPTiA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCB0cnVlIC8qIHJlYWQgYXMganNvbiAqLyk7XG5cdFx0fTtcblx0XHRhcGkucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlcykge1xuXHRcdFx0c2V0KGtleSwgJycsIGV4dGVuZChhdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdGV4cGlyZXM6IC0xXG5cdFx0XHR9KSk7XG5cdFx0fTtcblxuXHRcdGFwaS5kZWZhdWx0cyA9IHt9O1xuXG5cdFx0YXBpLndpdGhDb252ZXJ0ZXIgPSBpbml0O1xuXG5cdFx0cmV0dXJuIGFwaTtcblx0fVxuXG5cdHJldHVybiBpbml0KGZ1bmN0aW9uICgpIHt9KTtcbn0pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuZXhwb3J0IGNvbnN0IHN0YXR1c2VzID0gWyBcIkRFTllcIiwgXCJBTExPV1wiLCBcIkRJU01JU1NcIiBdXHJcbmV4cG9ydCBjb25zdCBzdGF0dXNEZW55ID0gXCJERU5ZXCJcclxuZXhwb3J0IGNvbnN0IHN0YXR1c0FsbG93ID0gXCJBTExPV1wiXHJcbmV4cG9ydCBjb25zdCBzdGF0dXNEaXNtaXNzID0gXCJESVNNSVNTXCJcclxuXHJcbmV4cG9ydCBjb25zdCBjYXRlZ29yaWVzID0gWyBcIlVOQ0FURUdPUklaRURcIiwgXCJFU1NFTlRJQUxcIiwgXCJQRVJTT05BTElaQVRJT05cIiwgXCJBTkFMWVRJQ1NcIiwgXCJNQVJLRVRJTkdcIiBdIiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCBcIi4vc3R5bGVzL21haW4uc2Nzc1wiXHJcblxyXG5pbXBvcnQgQ29va2llQ29uc2VudCBmcm9tIFwiLi9tb2RlbHMvQ29va2llQ29uc2VudFwiXHJcblxyXG5pZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBDb29raWVDb25zZW50XHJcbn0gZWxzZSB7XHJcbiAgd2luZG93LkNvb2tpZUNvbnNlbnQgPSBDb29raWVDb25zZW50XHJcbn0iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0IHsgbWVyZ2VPcHRpb25zIH0gZnJvbSBcIi4uL3V0aWxzXCJcclxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRzXCJcclxuXHJcbmNvbnN0IGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKCBkZWZhdWx0T3B0aW9ucyA9IHt9LCBvcHRpb25zID0ge30gKXtcclxuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyggZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKVxyXG4gICAgdGhpcy5vbiA9IGVtaXR0ZXIub24uYmluZCggZW1pdHRlciApXHJcbiAgICB0aGlzLmVtaXQgPSBlbWl0dGVyLmVtaXQuYmluZCggZW1pdHRlciApXHJcbiAgfVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIlxyXG5pbXBvcnQgTGVnYWwgZnJvbSBcIi4vTGVnYWxcIlxyXG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4vTG9jYXRpb25cIlxyXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIlxyXG5cclxuaW1wb3J0IHsgc3RhdHVzZXMsIGNhdGVnb3JpZXMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcclxuaW1wb3J0IHsgZ2V0Q29va2llLCBpc1ZhbGlkU3RhdHVzIH0gZnJvbSBcIi4uL3V0aWxzXCJcclxuXHJcbi8vIFRoaXMgZnVuY3Rpb24gaW5pdGlhbGl6ZXMgdGhlIGFwcCBieSBjb21iaW5pbmcgdGhlIHVzZSBvZiB0aGUgUG9wdXAsIExvY2F0b3IgYW5kIExhdyBtb2R1bGVzXHJcbi8vIFlvdSBjYW4gc3RyaW5nIHRvZ2V0aGVyIHRoZXNlIHRocmVlIG1vZHVsZXMgeW91cnNlbGYgaG93ZXZlciB5b3Ugd2FudCwgYnkgd3JpdGluZyBhIG5ldyBmdW5jdGlvbi5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2tpZUNvbnNlbnQgZXh0ZW5kcyBCYXNlIHtcclxuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyA9IHt9ICl7XHJcbiAgICBzdXBlciggb3B0aW9ucyApXHJcblxyXG4gICAgY29uc3QgYW5zd2VycyA9IGNhdGVnb3JpZXMubWFwKCBjYXRlZ29yeSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvb2tpZU5hbWUgPSB0aGlzLm9wdGlvbnMuY29va2llICYmIHRoaXMub3B0aW9ucy5jb29raWUubmFtZSA/IHRoaXMub3B0aW9ucy5jb29raWUubmFtZSA6ICdjb29raWVjb25zZW50X3N0YXR1c18nXHJcbiAgICAgIGNvbnN0IGFuc3dlciA9IGdldENvb2tpZSggY29va2llTmFtZSArICdfJyArIGNhdGVnb3J5IClcclxuICAgICAgcmV0dXJuIGlzVmFsaWRTdGF0dXMoYW5zd2VyKSA/IHsgW2NhdGVnb3J5XTogYW5zd2VyIH0gOiB1bmRlZmluZWRcclxuICAgIH0pLmZpbHRlcihvYmogPT4gb2JqID8gb2JqW09iamVjdC5rZXlzKG9iailbMF1dIDogZmFsc2UpXHJcblxyXG4gICAgLy8gaWYgdGhleSBoYXZlIGFscmVhZHkgYW5zd2VyZWRcclxuICAgIGlmIChhbnN3ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy5lbWl0KCBcImluaXRpYWxpemVkXCIsIGFuc3dlcnMgKSApXHJcbiAgICB9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMubGVnYWwgJiYgdGhpcy5vcHRpb25zLmxlZ2FsLmNvdW50cnlDb2RlICkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemF0aW9uQ29tcGxldGUoIHsgY29kZTogdGhpcy5vcHRpb25zLmxlZ2FsLmNvdW50cnlDb2RlIH0gKVxyXG4gICAgfSBlbHNlIGlmICggdGhpcy5vcHRpb25zLmxvY2F0aW9uICkge1xyXG4gICAgICBuZXcgTG9jYXRpb24oIHRoaXMub3B0aW9ucy5sb2NhdGlvbiApLmxvY2F0ZSggdGhpcy5pbml0aWFsaXphdGlvbkNvbXBsZXRlLmJpbmQoIHRoaXMgKSwgdGhpcy5pbml0aWFsaXphdGlvbkVycm9yLmJpbmQoIHRoaXMgKSApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemF0aW9uQ29tcGxldGUoe30pXHJcbiAgICB9XHJcbiAgfVxyXG4gIGluaXRpYWxpemF0aW9uQ29tcGxldGUoIHJlc3VsdCApe1xyXG4gICAgaWYgKHJlc3VsdC5jb2RlKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucyA9IG5ldyBMZWdhbCh0aGlzLm9wdGlvbnMubGVnYWwpLmFwcGx5TGF3KCB0aGlzLm9wdGlvbnMsIHJlc3VsdC5jb2RlIClcclxuICAgIH1cclxuICAgIHRoaXMucG9wdXAgPSBuZXcgUG9wdXAoIHRoaXMub3B0aW9ucyApXHJcbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLmVtaXQoXCJpbml0aWFsaXplZFwiLCB0aGlzLnBvcHVwICksIDAgKVxyXG4gIH1cclxuICBpbml0aWFsaXphdGlvbkVycm9yKCBlcnJvciApIHtcclxuICAgIHNldFRpbWVvdXQoICgpID0+IHRoaXMuZW1pdCggXCJlcnJvclwiLCBlcnJvciwgbmV3IFBvcHVwKCB0aGlzLm9wdGlvbnMgKSApLCAwIClcclxuICB9XHJcbiAgZ2V0Q291bnRyeUxhd3MoIGNvdW50cnlDb2RlICl7XHJcbiAgICByZXR1cm4gbmV3IExlZ2FsKHRoaXMub3B0aW9ucy5sZWdhbCkuZ2V0KCBjb3VudHJ5Q29kZSApXHJcbiAgfVxyXG4gIGlzT3BlbigpIHtcclxuICAgIHJldHVybiB0aGlzLnBvcHVwLmlzT3BlbigpXHJcbiAgfVxyXG4gIGNsb3NlKCl7XHJcbiAgICByZXR1cm4gKCB0aGlzLnBvcHVwLmNsb3NlKCksIHRoaXMgKVxyXG4gIH1cclxuICByZXZva2VDaG9pY2UoKSB7XHJcbiAgICByZXR1cm4gKCB0aGlzLnBvcHVwLnJldm9rZUNob2ljZSgpLCB0aGlzIClcclxuICB9XHJcbiAgb3Blbigpe1xyXG4gICAgcmV0dXJuICggdGhpcy5wb3B1cC5vcGVuKCksIHRoaXMgKVxyXG4gIH1cclxuICB0b2dnbGVSZXZva2VCdXR0b24oIGJvb2wgKSB7XHJcbiAgICByZXR1cm4gKCB0aGlzLnBvcHVwLnRvZ2dsZVJldm9rZUJ1dHRvbiggYm9vbCApLCB0aGlzIClcclxuICB9XHJcbiAgc2V0U3RhdHVzZXMoIHN0YXR1cyApIHtcclxuICAgIHJldHVybiAodGhpcy5wb3B1cC5zZXRTdGF0dXNlcyggc3RhdHVzICksIHRoaXMgKVxyXG4gIH1cclxuICBjbGVhclN0YXR1c2VzKCl7XHJcbiAgICByZXR1cm4gKCB0aGlzLnBvcHVwLmNsZWFyU3RhdHVzZXMoKSwgdGhpcyApXHJcbiAgfVxyXG4gIGRlc3Ryb3koKXtcclxuICAgIHJldHVybiAoIHRoaXMucG9wdXAuZGVzdHJveSgpLCB0aGlzIClcclxuICB9XHJcbn1cclxuXHJcbnN0YXR1c2VzLnJlZHVjZSggKCBvYmosIHN0YXR1cyApID0+XHJcbiggT2JqZWN0LmRlZmluZVByb3BlcnR5KCBDb29raWVDb25zZW50LCBzdGF0dXMsIHtcclxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0YXR1cyB9LFxyXG4gIHNldDogZnVuY3Rpb24gKCkge30sXHJcbiAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgd3JpdGVhYmxlOiBmYWxzZSxcclxuICBjb25maWd1cmFibGU6IGZhbHNlXHJcbn0pLCBvYmogKSwgQ29va2llQ29uc2VudCApIiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIlxyXG5pbXBvcnQgZGVmYXVsdE9wdGlvbnMgZnJvbSBcIi4uL29wdGlvbnMvbGVnYWxcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVnYWwgZXh0ZW5kcyBCYXNlIHtcclxuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyA9IHt9ICkge1xyXG4gICAgc3VwZXIoIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIClcclxuICB9XHJcbiAgZ2V0KCBjb3VudHJ5Q29kZSApe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaGFzTGF3OiB0aGlzLm9wdGlvbnMuaGFzTGF3LmluZGV4T2YoY291bnRyeUNvZGUpID49IDAsXHJcbiAgICAgIHJldm9rYWJsZTogdGhpcy5vcHRpb25zLnJldm9rYWJsZS5pbmRleE9mKGNvdW50cnlDb2RlKSA+PSAwLFxyXG4gICAgICBleHBsaWNpdEFjdGlvbjogdGhpcy5vcHRpb25zLmV4cGxpY2l0QWN0aW9uLmluZGV4T2YoY291bnRyeUNvZGUpID49IDBcclxuICAgIH1cclxuICB9XHJcbiAgYXBwbHlMYXcoIG9wdGlvbnMsIGNvdW50cnlDb2RlICl7XHJcbiAgICBjb25zdCBjb3VudHJ5ID0gdGhpcy5nZXQoY291bnRyeUNvZGUpXHJcblxyXG4gICAgaWYgKCFjb3VudHJ5Lmhhc0xhdykge1xyXG4gICAgICAvLyBUaGUgY291bnRyeSBoYXMgbm8gY29va2llIGxhd1xyXG4gICAgICBvcHRpb25zLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICB0aGlzLmVtaXQoIFwibm9Db29raWVMYXdcIiwgY291bnRyeUNvZGUsIGNvdW50cnkgKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVnaW9uYWxMYXcpIHtcclxuICAgICAgaWYgKGNvdW50cnkucmV2b2thYmxlKSB7XHJcbiAgICAgICAgLy8gV2UgbXVzdCBwcm92aWRlIGFuIG9wdGlvbiB0byByZXZva2UgY29uc2VudCBhdCBhIGxhdGVyIHRpbWVcclxuICAgICAgICBvcHRpb25zLnJldm9rYWJsZSA9IHRydWVcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvdW50cnkuZXhwbGljaXRBY3Rpb24pIHtcclxuICAgICAgICAvLyBUaGUgdXNlciBtdXN0IGV4cGxpY2l0bHkgY2xpY2sgdGhlIGNvbnNlbnQgYnV0dG9uXHJcbiAgICAgICAgb3B0aW9ucy5kaXNtaXNzT25TY3JvbGwgPSBmYWxzZVxyXG4gICAgICAgIG9wdGlvbnMuZGlzbWlzc09uVGltZW91dCA9IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvcHRpb25zXHJcbiAgfVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIlxyXG5pbXBvcnQgZGVmYXVsdE9wdGlvbnMgZnJvbSBcIi4uL29wdGlvbnMvbG9jYXRpb25cIlxyXG5pbXBvcnQgeyBpc1BsYWluT2JqZWN0LCBnZXRTY3JpcHQsIG1ha2VBc3luY1JlcXVlc3QgfSBmcm9tIFwiLi4vdXRpbHNcIlxyXG5cclxuLy8gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcyB3ZSBoYXZlIGFscmVhZHkgc2V0IHVwLlxyXG4vLyBXaGVuIHVzaW5nIGEgc2VydmljZSwgaXQgY291bGQgZWl0aGVyIHJldHVybiBhIGRhdGEgc3RydWN0dXJlIGluIHBsYWluIHRleHQgKGxpa2UgYSBKU09OIG9iamVjdCkgb3IgYW4gZXhlY3V0YWJsZSBzY3JpcHRcclxuLy8gV2hlbiB0aGUgcmVzcG9uc2UgbmVlZHMgdG8gYmUgZXhlY3V0ZWQgYnkgdGhlIGJyb3dzZXIsIHRoZW4gYGlzU2NyaXB0YCBtdXN0IGJlIHNldCB0byB0cnVlLCBvdGhlcndpc2UgaXQgd29uJ3Qgd29yay5cclxuXHJcbi8vIFdoZW4gdGhlIHNlcnZpY2UgdXNlcyBhIHNjcmlwdCwgdGhlIGNoYW5jZXMgYXJlIHRoYXQgeW91J2xsIGhhdmUgdG8gdXNlIHRoZSBzY3JpcHQgdG8gbWFrZSBhZGRpdGlvbmFsIHJlcXVlc3RzLiBJbiB0aGVzZVxyXG4vLyBjYXNlcywgdGhlIHNlcnZpY2VzIGBjYWxsYmFja2AgcHJvcGVydHkgaXMgY2FsbGVkIHdpdGggYSBgZG9uZWAgZnVuY3Rpb24uIFdoZW4gcGVyZm9ybWluZyBhc3luYyBvcGVyYXRpb25zLCB0aGlzIG11c3QgYmUgY2FsbGVkXHJcbi8vIHdpdGggdGhlIGRhdGEgKG9yIEVycm9yKSwgYW5kIGBjb29raWVjb25zZW50LmxvY2F0ZWAgd2lsbCB0YWtlIGNhcmUgb2YgdGhlIHJlc3RcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uIGV4dGVuZHMgQmFzZSB7XHJcbiAgY29uc3RydWN0b3IoIG9wdGlvbnMgKSB7XHJcbiAgICBzdXBlciggZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKVxyXG4gICAgdGhpcy5jdXJyZW50U2VydmljZUluZGV4ID0gLTEgLy8gdGhlIGluZGV4IChpbiBvcHRpb25zKSBvZiB0aGUgc2VydmljZSB3ZSdyZSBjdXJyZW50bHkgdXNpbmdcclxuICB9XHJcblxyXG4gIGdldE5leHRTZXJ2aWNlKCkge1xyXG4gICAgbGV0IHNlcnZpY2VcclxuICAgIGRvIHtcclxuICAgICAgc2VydmljZSA9IHRoaXMuZ2V0U2VydmljZUJ5SWR4KCsrdGhpcy5jdXJyZW50U2VydmljZUluZGV4KVxyXG4gICAgfSB3aGlsZSAoXHJcbiAgICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA8IHRoaXMub3B0aW9ucy5zZXJ2aWNlcy5sZW5ndGggJiZcclxuICAgICAgIXNlcnZpY2VcclxuICAgIClcclxuXHJcbiAgICByZXR1cm4gc2VydmljZVxyXG4gIH1cclxuXHJcbiAgZ2V0U2VydmljZUJ5SWR4KGlkeCkge1xyXG4gICAgLy8gVGhpcyBjYW4gZWl0aGVyIGJlIHRoZSBuYW1lIG9mIGEgZGVmYXVsdCBsb2NhdGlvblNlcnZpY2UsIG9yIGEgZnVuY3Rpb24uXHJcbiAgICBjb25zdCBzZXJ2aWNlT3B0aW9uID0gdGhpcy5vcHRpb25zLnNlcnZpY2VzW2lkeF1cclxuXHJcbiAgICAvLyBJZiBpdCdzIGEgc3RyaW5nLCB1c2Ugb25lIG9mIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcy5cclxuICAgIGlmICh0eXBlb2Ygc2VydmljZU9wdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBjb25zdCBkeW5hbWljT3B0cyA9IHNlcnZpY2VPcHRpb24oKVxyXG4gICAgICByZXR1cm4gZHluYW1pY09wdHMubmFtZSA/IFxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAgICB7fSxcclxuICAgICAgICAgIGR5bmFtaWNPcHRzLFxyXG4gICAgICAgICAgdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1sgZHluYW1pY09wdHMubmFtZSBdKCBkeW5hbWljT3B0cyApXHJcbiAgICAgICAgKSA6IGR5bmFtaWNPcHRzXHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgaXQncyBhIHN0cmluZywgdXNlIG9uZSBvZiB0aGUgbG9jYXRpb24gc2VydmljZXMuXHJcbiAgICBpZiAodHlwZW9mIHNlcnZpY2VPcHRpb24gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2VydmljZURlZmluaXRpb25zW3NlcnZpY2VPcHRpb25dKClcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBpdCdzIGFuIG9iamVjdCwgYXNzdW1lIHtuYW1lOiAnaXBpbmZvJywgLi4ub3RoZXJPcHRpb25zfVxyXG4gICAgLy8gQWxsb3dzIHVzZXIgdG8gcGFzcyBpbiBBUEkga2V5cyBldGMuXHJcbiAgICBpZiAoaXNQbGFpbk9iamVjdChzZXJ2aWNlT3B0aW9uKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1tzZXJ2aWNlT3B0aW9uLm5hbWVdKFxyXG4gICAgICAgIHNlcnZpY2VPcHRpb25cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICAvLyBUaGlzIHJ1bnMgdGhlIHNlcnZpY2UgbG9jYXRlZCBhdCBpbmRleCBgY3VycmVudFNlcnZpY2VJbmRleGAuXHJcbiAgLy8gSWYgdGhlIHNlcnZpY2UgZmFpbHMsIGBydW5OZXh0U2VydmljZU9uRXJyb3JgIHdpbGwgY29udGludWUgdHJ5aW5nIGVhY2ggc2VydmljZSB1bnRpbCBhbGwgZmFpbCwgb3Igb25lIGNvbXBsZXRlcyBzdWNjZXNzZnVsbHlcclxuICBsb2NhdGUoY29tcGxldGUsIGVycm9yKSB7XHJcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXROZXh0U2VydmljZSgpXHJcblxyXG4gICAgaWYgKCFzZXJ2aWNlKSB7XHJcbiAgICAgIGVycm9yKG5ldyBFcnJvcignTm8gc2VydmljZXMgdG8gcnVuJykpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2FsbGJhY2tDb21wbGV0ZSA9IGNvbXBsZXRlXHJcbiAgICB0aGlzLmNhbGxiYWNrRXJyb3IgPSBlcnJvclxyXG5cclxuICAgIHRoaXMucnVuU2VydmljZShzZXJ2aWNlLCB0aGlzLnJ1bk5leHRTZXJ2aWNlT25FcnJvci5iaW5kKHRoaXMpKVxyXG4gIH1cclxuXHJcbiAgLy8gUG90ZW50aWFsbHkgYWRkcyBhIGNhbGxiYWNrIHRvIGEgdXJsIGZvciBqc29ucC5cclxuICBzZXR1cFVybChzZXJ2aWNlKSB7XHJcbiAgICBjb25zdCBzZXJ2aWNlT3B0cyA9IHRoaXMuZ2V0Q3VycmVudFNlcnZpY2VPcHRzKClcclxuICAgIHJldHVybiBzZXJ2aWNlLnVybC5yZXBsYWNlKC9cXHsoLio/KVxcfS9nLCBmdW5jdGlvbihfLCBwYXJhbSkge1xyXG4gICAgICBpZiAocGFyYW0gPT09ICdjYWxsYmFjaycpIHtcclxuICAgICAgICBjb25zdCB0ZW1wTmFtZSA9ICdjYWxsYmFjaycgKyBEYXRlLm5vdygpXHJcbiAgICAgICAgd2luZG93W3RlbXBOYW1lXSA9IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgc2VydmljZS5fX0pTT05QX0RBVEEgPSBKU09OLnN0cmluZ2lmeShyZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChwYXJhbSBpbiBzZXJ2aWNlT3B0cy5pbnRlcnBvbGF0ZVVybCkge1xyXG4gICAgICAgIHJldHVybiBzZXJ2aWNlT3B0cy5pbnRlcnBvbGF0ZVVybFtwYXJhbV1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIHJlcXVpcmVzIGEgYHNlcnZpY2VgIG9iamVjdCB0aGF0IGRlZmluZXMgYXQgbGVhc3QgYSBgdXJsYCBhbmQgYGNhbGxiYWNrYFxyXG4gIHJ1blNlcnZpY2Uoc2VydmljZSwgY29tcGxldGUpIHtcclxuICAgIC8vIGJhc2ljIGNoZWNrIHRvIGVuc3VyZSBpdCByZXNlbWJsZXMgYSBgc2VydmljZWBcclxuICAgIGlmICghc2VydmljZSB8fCAhc2VydmljZS51cmwgfHwgIXNlcnZpY2UuY2FsbGJhY2spIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2UgY2FsbCBlaXRoZXIgYGdldFNjcmlwdGAgb3IgYG1ha2VBc3luY1JlcXVlc3RgIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiByZXNvdXJjZVxyXG4gICAgY29uc3QgcmVxdWVzdEZ1bmN0aW9uID0gc2VydmljZS5pc1NjcmlwdCA/IGdldFNjcmlwdCA6IG1ha2VBc3luY1JlcXVlc3RcclxuXHJcbiAgICAvLyBib3RoIGZ1bmN0aW9ucyBoYXZlIHNpbWlsYXIgc2lnbmF0dXJlcyBzbyB3ZSBjYW4gcGFzcyB0aGUgc2FtZSBhcmd1bWVudHMgdG8gYm90aFxyXG4gICAgcmVxdWVzdEZ1bmN0aW9uKFxyXG4gICAgICB0aGlzLnNldHVwVXJsKHNlcnZpY2UpLFxyXG4gICAgICB4aHIgPT4ge1xyXG4gICAgICAgIC8vIGlmIGAheGhyYCwgdGhlbiBgZ2V0U2NyaXB0YCBmdW5jdGlvbiB3YXMgdXNlZCwgc28gdGhlcmUgaXMgbm8gcmVzcG9uc2UgdGV4dFxyXG4gICAgICAgIGxldCByZXNwb25zZVRleHQgPSB4aHIgPyB4aHIucmVzcG9uc2VUZXh0IDogJydcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIHJlc291cmNlIGlzIGEgc2NyaXB0LCB0aGVuIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGFmdGVyIHRoZSBzY3JpcHQgaGFzIGJlZW4gcnVuLlxyXG4gICAgICAgIC8vIGlmIHRoZSBzY3JpcHQgaXMgSlNPTlAsIHRoZW4gYSB0aW1lIGRlZmluZWQgZnVuY3Rpb24gYGNhbGxiYWNrX3tEYXRlLm5vd31gIGhhcyBhbHJlYWR5XHJcbiAgICAgICAgLy8gYmVlbiBjYWxsZWQgKGFzIHRoZSBKU09OUCBjYWxsYmFjaykuIFRoaXMgY2FsbGJhY2sgc2V0cyB0aGUgX19KU09OUF9EQVRBIHByb3BlcnR5XHJcbiAgICAgICAgaWYgKHNlcnZpY2UuX19KU09OUF9EQVRBKSB7XHJcbiAgICAgICAgICByZXNwb25zZVRleHQgPSBzZXJ2aWNlLl9fSlNPTlBfREFUQVxyXG4gICAgICAgICAgZGVsZXRlIHNlcnZpY2UuX19KU09OUF9EQVRBXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjYWxsIHRoZSBzZXJ2aWNlIGNhbGxiYWNrIHdpdGggdGhlIHJlc3BvbnNlIHRleHQgKHNvIGl0IGNhbiBwYXJzZSB0aGUgcmVzcG9uc2UpXHJcbiAgICAgICAgdGhpcy5ydW5TZXJ2aWNlQ2FsbGJhY2suY2FsbCh0aGlzLCBjb21wbGV0ZSwgc2VydmljZSwgcmVzcG9uc2VUZXh0KVxyXG4gICAgICB9LFxyXG4gICAgICB0aGlzLm9wdGlvbnMudGltZW91dCxcclxuICAgICAgc2VydmljZS5kYXRhLFxyXG4gICAgICBzZXJ2aWNlLmhlYWRlcnNcclxuICAgIClcclxuXHJcbiAgICAvLyBgc2VydmljZS5kYXRhYCBhbmQgYHNlcnZpY2UuaGVhZGVyc2AgYXJlIG9wdGlvbmFsICh0aGV5IG9ubHkgY291bnQgaWYgYCFzZXJ2aWNlLmlzU2NyaXB0YCBhbnl3YXkpXHJcbiAgfVxyXG5cclxuICAvLyBUaGUgc2VydmljZSByZXF1ZXN0IGhhcyBydW4gKGFuZCBwb3NzaWJseSBoYXMgYSBgcmVzcG9uc2VUZXh0YCkgW25vIGByZXNwb25zZVRleHRgIGlmIGBpc1NjcmlwdGBdXHJcbiAgLy8gV2UgbmVlZCB0byBydW4gaXRzIGNhbGxiYWNrIHdoaWNoIGRldGVybWluZXMgaWYgaXRzIHN1Y2Nlc3NmdWwgb3Igbm90XHJcbiAgLy8gYGNvbXBsZXRlYCBpcyBjYWxsZWQgb24gc3VjY2VzcyBvciBmYWlsdXJlXHJcbiAgcnVuU2VydmljZUNhbGxiYWNrKCBjb21wbGV0ZSwgc2VydmljZSwgcmVzcG9uc2VUZXh0ICkge1xyXG4gICAgLy8gdGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgaWYgdGhlIHNlcnZpY2UgdXNlcyB0aGUgYXN5bmMgY2FsbGJhY2sgaW4gaXRzIGhhbmRsZXIgbWV0aG9kXHJcbiAgICBjb25zdCBzZXJ2aWNlUmVzdWx0SGFuZGxlciA9IGFzeW5jUmVzdWx0ID0+IHtcclxuICAgICAgLy8gaWYgYHJlc3VsdGAgaXMgYSB2YWxpZCB2YWx1ZSwgdGhlbiB0aGlzIGZ1bmN0aW9uIHNob3VsZG4ndCByZWFsbHkgcnVuXHJcbiAgICAgIC8vIGV2ZW4gaWYgaXQgaXMgY2FsbGVkIGJ5IGBzZXJ2aWNlLmNhbGxiYWNrYFxyXG4gICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgIHRoaXMub25TZXJ2aWNlUmVzdWx0KCBjb21wbGV0ZSwgYXN5bmNSZXN1bHQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGUgZnVuY3Rpb24gYHNlcnZpY2UuY2FsbGJhY2tgIHdpbGwgZWl0aGVyIGV4dHJhY3QgYSBjb3VudHJ5IGNvZGUgZnJvbSBgcmVzcG9uc2VUZXh0YCBhbmQgcmV0dXJuIGl0IChpbiBgcmVzdWx0YClcclxuICAgIC8vIG9yIChpZiBpdCBoYXMgdG8gbWFrZSBhZGRpdGlvbmFsIHJlcXVlc3RzKSBpdCB3aWxsIGNhbGwgYSBgZG9uZWAgY2FsbGJhY2sgd2l0aCB0aGUgY291bnRyeSBjb2RlIHdoZW4gaXQgaXMgcmVhZHlcclxuICAgIGNvbnN0IHJlc3VsdCA9IHNlcnZpY2UuY2FsbGJhY2soc2VydmljZVJlc3VsdEhhbmRsZXIsIHJlc3BvbnNlVGV4dClcclxuXHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIHRoaXMub25TZXJ2aWNlUmVzdWx0KCBjb21wbGV0ZSwgcmVzdWx0IClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFRoaXMgaXMgY2FsbGVkIHdpdGggdGhlIGByZXN1bHRgIGZyb20gYHNlcnZpY2UuY2FsbGJhY2tgIHJlZ2FyZGxlc3Mgb2YgaG93IGl0IHByb3ZpZGVkIHRoYXQgcmVzdWx0IChzeW5jIG9yIGFzeW5jKS5cclxuICAvLyBgcmVzdWx0YCB3aWxsIGJlIHdoYXRldmVyIGlzIHJldHVybmVkIGZyb20gYHNlcnZpY2UuY2FsbGJhY2tgLiBBIHNlcnZpY2UgY2FsbGJhY2sgc2hvdWxkIHByb3ZpZGUgYW4gb2JqZWN0IHdpdGggZGF0YVxyXG4gIG9uU2VydmljZVJlc3VsdChjb21wbGV0ZSwgcmVzdWx0KSB7XHJcbiAgICAvLyBjb252ZXJ0IHJlc3VsdCB0byBub2RlanMgc3R5bGUgYXN5bmMgY2FsbGJhY2tcclxuICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvciB8fCAocmVzdWx0ICYmIHJlc3VsdC5lcnJvcikpIHtcclxuICAgICAgY29tcGxldGUuY2FsbCh0aGlzLCByZXN1bHQsIG51bGwpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb21wbGV0ZS5jYWxsKHRoaXMsIG51bGwsIHJlc3VsdClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGlmIGBlcnJgIGlzIHNldCwgdGhlIG5leHQgc2VydmljZSBoYW5kbGVyIGlzIGNhbGxlZFxyXG4gIC8vIGlmIGBlcnJgIGlzIG51bGwsIHRoZSBgb25Db21wbGV0ZWAgaGFuZGxlciBpcyBjYWxsZWQgd2l0aCBgZGF0YWBcclxuICBydW5OZXh0U2VydmljZU9uRXJyb3IoZXJyLCBkYXRhKSB7XHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgIHRoaXMubG9nRXJyb3IoZXJyKVxyXG5cclxuICAgICAgY29uc3QgbmV4dFNlcnZpY2UgPSB0aGlzLmdldE5leHRTZXJ2aWNlKClcclxuXHJcbiAgICAgIGlmIChuZXh0U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMucnVuU2VydmljZShuZXh0U2VydmljZSwgdGhpcy5ydW5OZXh0U2VydmljZU9uRXJyb3IuYmluZCh0aGlzKSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlU2VydmljZS5jYWxsKFxyXG4gICAgICAgICAgdGhpcyxcclxuICAgICAgICAgIHRoaXMuY2FsbGJhY2tFcnJvcixcclxuICAgICAgICAgIG5ldyBFcnJvcignQWxsIHNlcnZpY2VzIGZhaWxlZCcpXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbXBsZXRlU2VydmljZS5jYWxsKHRoaXMsIHRoaXMuY2FsbGJhY2tDb21wbGV0ZSwgZGF0YSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRTZXJ2aWNlT3B0cygpIHtcclxuICAgIGNvbnN0IHZhbCA9IHRoaXMub3B0aW9ucy5zZXJ2aWNlc1t0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXhdXHJcblxyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuIHtuYW1lOiB2YWx9XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXR1cm4gdmFsKClcclxuICAgIH1lbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbCkpIHtcclxuICAgICAgcmV0dXJuIHZhbFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHt9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBjYWxscyB0aGUgYG9uQ29tcGxldGVgIGNhbGxiYWNrIGFmdGVyIHJlc2V0dGluZyB0aGUgYGN1cnJlbnRTZXJ2aWNlSW5kZXhgXHJcbiAgY29tcGxldGVTZXJ2aWNlKGZuLCBkYXRhKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPSAtMVxyXG5cclxuICAgIGZuICYmIGZuKGRhdGEpXHJcbiAgfVxyXG5cclxuICBsb2dFcnJvcihlcnIpIHtcclxuICAgIGNvbnNvbGUud2FybihcclxuICAgICAgYFRoZSBzZXJ2aWNlWyR7dGhpcy5jdXJyZW50U2VydmljZUluZGV4fV0gKCR7dGhpcy5nZXRTZXJ2aWNlQnlJZHgodGhpcy5jdXJyZW50U2VydmljZUluZGV4KS51cmx9KSByZXNwb25kZWQgd2l0aCB0aGUgZm9sbG93aW5nIGVycm9yYCxcclxuICAgICAgIGVyclxyXG4gICAgKVxyXG4gIH1cclxufSIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlXCJcclxuaW1wb3J0IGRlZmF1bHRPcHRpb25zIGZyb20gXCIuLi9vcHRpb25zL3BvcHVwXCJcclxuaW1wb3J0IHtcclxuICBjYXRlZ29yaWVzLFxyXG4gIHN0YXR1c2VzLFxyXG4gIHN0YXR1c0Rpc21pc3MsXHJcbiAgc3RhdHVzQWxsb3dcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcclxuaW1wb3J0IHtcclxuICBhZGRDdXN0b21TdHlsZXNoZWV0LFxyXG4gIGdldENvb2tpZSxcclxuICBoYXNoLFxyXG4gIGludGVycG9sYXRlU3RyaW5nLFxyXG4gIGlzTW9iaWxlLFxyXG4gIGlzUGxhaW5PYmplY3QsXHJcbiAgaXNWYWxpZFN0YXR1cyxcclxuICBzZXRDb29raWUsXHJcbiAgdGhyb3R0bGUsXHJcbiAgdHJhdmVyc2VET01QYXRoLFxyXG59IGZyb20gXCIuLi91dGlsc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCBleHRlbmRzIEJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zICkge1xyXG4gICAgc3VwZXIoIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIClcclxuICAgIHRoaXMudXNlckNhdGVnb3JpZXMgPSB7XHJcbiAgICAgIFVOQ0FURUdPUklaRUQgIDogJ0RJU01JU1MnLFxyXG4gICAgICBFU1NFTlRJQUwgICAgICA6ICdBTExPVycsXHJcbiAgICAgIFBFUlNPTkFMSVpBVElPTjogJ0RJU01JU1MnLFxyXG4gICAgICBBTkFMWVRJQ1MgICAgICA6ICdESVNNSVNTJyxcclxuICAgICAgTUFSS0VUSU5HICAgICAgOiAnRElTTUlTUydcclxuICAgIH1cclxuICAgIHRoaXMuY3VzdG9tU3R5bGVzID0ge31cclxuICAgIHRoaXMuaGFzVHJhbnNpdGlvbiA9ICEhKGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgIGNvbnN0IHRyYW5zID0ge1xyXG4gICAgICAgIHQ6ICd0cmFuc2l0aW9uZW5kJyxcclxuICAgICAgICBPVDogJ29UcmFuc2l0aW9uRW5kJyxcclxuICAgICAgICBtc1Q6ICdNU1RyYW5zaXRpb25FbmQnLFxyXG4gICAgICAgIE1velQ6ICd0cmFuc2l0aW9uZW5kJyxcclxuICAgICAgICBXZWJraXRUOiAnd2Via2l0VHJhbnNpdGlvbkVuZCdcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBmb3IgKGxldCBwcmVmaXggaW4gdHJhbnMpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0cmFucy5oYXNPd25Qcm9wZXJ0eShwcmVmaXgpICYmXHJcbiAgICAgICAgICB0eXBlb2YgZWwuc3R5bGVbcHJlZml4ICsgJ3JhbnNpdGlvbiddICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmV0dXJuIHRyYW5zW3ByZWZpeF1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICcnXHJcbiAgICB9KSgpXHJcblxyXG4gICAgLy8gcmV0dXJucyB0cnVlIGlmIGBvbkNvbXBsZXRlYCB3YXMgY2FsbGVkXHJcbiAgICBpZiAodGhpcy5jYW5Vc2VDb29raWVzKCkpIHtcclxuICAgICAgLy8gdXNlciBoYXMgYWxyZWFkeSBhbnN3ZXJlZFxyXG4gICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICAvLyBhcHBseSBibGFja2xpc3QgLyB3aGl0ZWxpc3RcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuYmxhY2tsaXN0UGFnZS5pbmNsdWRlcyhsb2NhdGlvbi5wYXRobmFtZSkpIHtcclxuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy53aGl0ZWxpc3RQYWdlLmluY2x1ZGVzKGxvY2F0aW9uLnBhdGhuYW1lKSkge1xyXG4gICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGUgZnVsbCBtYXJrdXAgZWl0aGVyIGNvbnRhaW5zIHRoZSB3cmFwcGVyIG9yIGl0IGRvZXMgbm90IChmb3IgbXVsdGlwbGUgaW5zdGFuY2VzKVxyXG4gICAgbGV0IGNvb2tpZVBvcHVwID0gdGhpcy5vcHRpb25zLndpbmRvd1xyXG4gICAgICAucmVwbGFjZSgne3tjbGFzc2VzfX0nLCB0aGlzLmdldFBvcHVwQ2xhc3NlcygpLmpvaW4oJyAnKSlcclxuICAgICAgLnJlcGxhY2UoJ3t7Y2hpbGRyZW59fScsIHRoaXMuZ2V0UG9wdXBJbm5lck1hcmt1cCgpKVxyXG5cclxuICAgIC8vIGlmIHVzZXIgcGFzc2VzIGh0bWwsIHVzZSBpdCBpbnN0ZWFkXHJcbiAgICBjb25zdCBjdXN0b21IVE1MID0gdGhpcy5vcHRpb25zLm92ZXJyaWRlSFRNTFxyXG4gICAgaWYgKHR5cGVvZiBjdXN0b21IVE1MID09ICdzdHJpbmcnICYmIGN1c3RvbUhUTUwubGVuZ3RoICkge1xyXG4gICAgICBjb29raWVQb3B1cCA9IGN1c3RvbUhUTUxcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiBzdGF0aWMsIHdlIG5lZWQgdG8gZ3JvdyB0aGUgZWxlbWVudCBmcm9tIDAgaGVpZ2h0IHNvIGl0IGRvZXNuJ3QganVtcCB0aGUgcGFnZVxyXG4gICAgLy8gY29udGVudC4gd2Ugd3JhcCBhbiBlbGVtZW50IGFyb3VuZCBpdCB3aGljaCB3aWxsIG1hc2sgdGhlIGhpZGRlbiBjb250ZW50XHJcbiAgICBcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhdGljKSB7XHJcbiAgICAgIC8vIGBncm93ZXJgIGlzIGEgd3JhcHBlciBkaXYgd2l0aCBhIGhpZGRlbiBvdmVyZmxvdyB3aG9zZSBoZWlnaHQgaXMgYW5pbWF0ZWRcclxuICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuYXBwZW5kTWFya3VwKGA8ZGl2IGNsYXNzPVwiY2MtZ3Jvd2VyXCI+JHtjb29raWVQb3B1cH08L2Rpdj5gKVxyXG5cclxuICAgICAgd3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJycgLy8gc2V0IGl0IHRvIHZpc2libGUgKGJlY2F1c2UgYXBwZW5kTWFya3VwIGhpZGVzIGl0KVxyXG4gICAgICB0aGlzLmVsZW1lbnQgPSB3cmFwcGVyLmZpcnN0Q2hpbGQgLy8gZ2V0IHRoZSBgZWxlbWVudGAgcmVmZXJlbmNlIGZyb20gdGhlIHdyYXBwZXJcclxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NjLWludmlzaWJsZScpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmFwcGVuZE1hcmt1cChjb29raWVQb3B1cClcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFwcGx5QXV0b0Rpc21pc3MoKVxyXG4gICAgdGhpcy5hcHBseVJldm9rZUJ1dHRvbigpXHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvT3Blbikge1xyXG4gICAgICB0aGlzLmF1dG9PcGVuKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuXHJcblxyXG4gICAgaWYgKCF0aGlzLmlzT3BlbigpKSB7XHJcbiAgICAgIGlmICh0aGlzLmhhc1RyYW5zaXRpb24pIHtcclxuICAgICAgICB0aGlzLmZhZGVJbigpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlUmV2b2tlQnV0dG9uKClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVtaXQoIFwicG9wdXBPcGVuZWRcIiApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcblxyXG4gIGNsb3NlKCBzaG93UmV2b2tlICkge1xyXG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVyblxyXG4gICAgXHJcbiAgICBpZiAodGhpcy5pc09wZW4oKSkge1xyXG4gICAgICBpZiAodGhpcy5oYXNUcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5mYWRlT3V0KClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc2hvd1Jldm9rZSAmJiB0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24odHJ1ZSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVtaXQoIFwicG9wdXBDbG9zZWRcIiApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcblxyXG4gIGZhZGVJbigpIHtcclxuICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50XHJcblxyXG4gICAgaWYgKCF0aGlzLmhhc1RyYW5zaXRpb24gfHwgIWVsKSByZXR1cm5cclxuXHJcbiAgICAvLyBUaGlzIHNob3VsZCBhbHdheXMgYmUgY2FsbGVkIEFGVEVSIGZhZGVPdXQgKHdoaWNoIGlzIGdvdmVybmVkIGJ5IHRoZSAndHJhbnNpdGlvbmVuZCcgZXZlbnQpLlxyXG4gICAgLy8gJ3RyYW5zaXRpb25lbmQnIGlzbid0IGFsbCB0aGF0IHJlbGlhYmxlLCBzbywgaWYgd2UgdHJ5IGFuZCBmYWRlSW4gYmVmb3JlICd0cmFuc2l0aW9uZW5kJyBoYXNcclxuICAgIC8vIGhhcyBhIGNoYW5jZSB0byBydW4sIHRoZW4gd2UgcnVuIGl0IG91cnNlbHZlc1xyXG4gICAgaWYgKHRoaXMuYWZ0ZXJUcmFuc2l0aW9uKSB7XHJcbiAgICAgIHRoaXMuYWZ0ZXJGYWRlT3V0KGVsKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpKSB7XHJcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnJ1xyXG5cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgJ3B4J1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBmYWRlSW5UaW1lb3V0ID0gMjAgLy8gKG1zKSBETyBOT1QgTUFLRSBUSElTIFZBTFVFIFNNQUxMRVIuIFNlZSBiZWxvd1xyXG5cclxuICAgICAgLy8gQWx0aG91Z2ggbW9zdCBicm93c2VycyBjYW4gaGFuZGxlIHZhbHVlcyBsZXNzIHRoYW4gMjBtcywgaXQgc2hvdWxkIHJlbWFpbiBhYm92ZSB0aGlzIHZhbHVlLlxyXG4gICAgICAvLyBUaGlzIGlzIGJlY2F1c2Ugd2UgYXJlIHdhaXRpbmcgZm9yIGEgXCJicm93c2VyIHJlZHJhd1wiIGJlZm9yZSB3ZSByZW1vdmUgdGhlICdjYy1pbnZpc2libGUnIGNsYXNzLlxyXG4gICAgICAvLyBJZiB0aGUgY2xhc3MgaXMgcmVtdm9lZCBiZWZvcmUgYSByZWRyYXcgY291bGQgaGFwcGVuLCB0aGVuIHRoZSBmYWRlSW4gZWZmZWN0IFdJTEwgTk9UIHdvcmssIGFuZFxyXG4gICAgICAvLyB0aGUgcG9wdXAgd2lsbCBhcHBlYXIgZnJvbSBub3RoaW5nLiBUaGVyZWZvcmUgd2UgTVVTVCBhbGxvdyBlbm91Z2ggdGltZSBmb3IgdGhlIGJyb3dzZXIgdG8gZG9cclxuICAgICAgLy8gaXRzIHRoaW5nLiBUaGUgYWN0dWFsbHkgZGlmZmVyZW5jZSBiZXR3ZWVuIHVzaW5nIDAgYW5kIDIwIGluIGEgc2V0IHRpbWVvdXQgaXMgbmVnbGVnaWJsZSBhbnl3YXlcclxuICAgICAgdGhpcy5vcGVuaW5nVGltZW91dCA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgKCkgPT4gdGhpcy5hZnRlckZhZGVJbihlbCksXHJcbiAgICAgICAgZmFkZUluVGltZW91dFxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG5lZWRzIHRvIGJlIGNhbGxlZCBhZnRlciAnZmFkZUluJy4gVGhpcyBpcyB0aGUgY29kZSB0aGF0IGFjdHVhbGx5IGNhdXNlcyB0aGUgZmFkZUluIHRvIHdvcmtcclxuICAgKiBUaGVyZSBpcyBhIGdvb2QgcmVhc29uIHdoeSBpdCdzIGNhbGxlZCBpbiBhIHRpbWVvdXQuIFJlYWQgJ2ZhZGVJbidcclxuICAgKi9cclxuICBhZnRlckZhZGVJbiggZWxlbWVudCApIHtcclxuICAgIHRoaXMub3BlbmluZ1RpbWVvdXQgPSBudWxsXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NjLWludmlzaWJsZScpXHJcbiAgfVxyXG4gIFxyXG4gIGZhZGVPdXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuaGFzVHJhbnNpdGlvbiB8fCAhdGhpcy5lbGVtZW50KSByZXR1cm5cclxuXHJcbiAgICBpZiAodGhpcy5vcGVuaW5nVGltZW91dCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5vcGVuaW5nVGltZW91dClcclxuICAgICAgdGhpcy5hZnRlckZhZGVJbih0aGlzLmVsZW1lbnQpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy1pbnZpc2libGUnKSkge1xyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpYykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLm1heEhlaWdodCA9ICcnXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uID0gKCkgPT4gdGhpcy5hZnRlckZhZGVPdXQodGhpcy5lbGVtZW50KVxyXG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLnRyYW5zaXRpb25FbmQsIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uKVxyXG5cclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NjLWludmlzaWJsZScpXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGFmdGVyRmFkZU91dChlbCkge1xyXG4gICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJyAvLyBhZnRlciBjbG9zZSBhbmQgYmVmb3JlIG9wZW4sIHRoZSBkaXNwbGF5IHNob3VsZCBiZSBub25lXHJcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMudHJhbnNpdGlvbkVuZCwgdGhpcy5hZnRlclRyYW5zaXRpb24pXHJcbiAgICB0aGlzLmFmdGVyVHJhbnNpdGlvbiA9IG51bGxcclxuICB9XHJcblxyXG4gIGlzT3BlbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuZWxlbWVudCAmJlxyXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJycgJiZcclxuICAgICAgKHRoaXMuaGFzVHJhbnNpdGlvbiA/ICF0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy1pbnZpc2libGUnKSA6IHRydWUpXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICB0b2dnbGVSZXZva2VCdXR0b24oc2hvdykge1xyXG4gICAgaWYgKHRoaXMucmV2b2tlQnRuKSB0aGlzLnJldm9rZUJ0bi5zdHlsZS5kaXNwbGF5ID0gc2hvdyA/ICcnIDogJ25vbmUnXHJcbiAgfVxyXG5cclxuICByZXZva2VDaG9pY2UocHJldmVudE9wZW4pIHtcclxuICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdHJ1ZVxyXG4gICAgdGhpcy5jbGVhclN0YXR1c2VzKClcclxuXHJcbiAgICB0aGlzLmVtaXQoIFwicmV2b2tlQ2hvaWNlXCIgKVxyXG5cclxuICAgIGlmICghcHJldmVudE9wZW4pIHtcclxuICAgICAgdGhpcy5hdXRvT3BlbigpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYXMgdGhlIHVzZXIgcmVzcG9uZGVkIHRvIHRoZSBiYW5uZXJcclxuICAgKiBAcmV0dXJuIHsgYm9vbGVhbiB9IC0gdHJ1ZSBpZiBhbnkgY29va2llcyBoYXZlIGJlZW4gc2V0XHJcbiAgICovXHJcbiAgaGFzQW5zd2VyZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRTdGF0dXNlcygpLnNvbWUoIHN0YXR1cyA9PiAhIXN0YXR1cyApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgdG8gYWxsIG9mIHRoZSBjYXRlZ29yaWVzXHJcbiAgICogQHJldHVybiB7IGFycmF5PGJvb2xlYW4+IH0gLSB0cnVlIGlmIGNvbnNlbnQgaGFzIGJlZW4gZ2l2ZW5cclxuICAgKi9cclxuICBoYXNDb25zZW50ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRTdGF0dXNlcygpLm1hcCggc3RhdHVzID0+IHN0YXR1cyA9PT0gc3RhdHVzQWxsb3cgfHwgc3RhdHVzID09PSBzdGF0dXNEaXNtaXNzIClcclxuICB9XHJcblxyXG4gIC8vIG9wZW5zIHRoZSBwb3B1cCBpZiBubyBhbnN3ZXIgaGFzIGJlZW4gZ2l2ZW5cclxuICBhdXRvT3BlbigpIHtcclxuICAgIGNvbnN0IGhhc0Fuc3dlcmVkID0gdGhpcy5oYXNBbnN3ZXJlZCgpXHJcbiAgICBpZiAoIWhhc0Fuc3dlcmVkICYmIHRoaXMub3B0aW9ucy5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMub3BlbigpXHJcbiAgICB9IGVsc2UgaWYgKGhhc0Fuc3dlcmVkICYmIHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcclxuICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24odHJ1ZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBcclxuICAgKiBTZXQncyBjb29raWUgc3RhdHVzZXNcclxuICAgKiBAcGFyYW0geyBzdHJpbmc8c3RhdHVzPiB9IGFsbE9yVW5kZWYgICAgICAtIElmIHRoaXMgaXMgdGhlIG9ubHkgcGFyYW0sIHNldCBBTEwgaWYgbm90LCBzZXQgVW5jYXRlZ29yaXplZCBjb29raWVzIHN0YXR1c2VzIHNldCB0byB2YWx1ZS5cclxuICAgKiBAcGFyYW0geyBzdHJpbmc8c3RhdHVzPiB9IGVzc2VudGlhbCAgICAgICAtIEVzc2VudGlhbCBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcclxuICAgKiBAcGFyYW0geyBzdHJpbmc8c3RhdHVzPiB9IHBlcnNvbmFsaXphdGlvbiAtIFByZWZlcmVuY2VzIC8gRnVuY3Rpb25hbGl0eSBzZXQgdG8gdmFsdWVcclxuICAgKiBAcGFyYW0geyBzdHJpbmc8c3RhdHVzPiB9IGFuYWx5dGljcyAgICAgICAtIEFuYWx5dGlzIENvb2tpZXMgc3RhdHVzIHNldCB0byB2YWx1ZVxyXG4gICAqIEBwYXJhbSB7IHN0cmluZzxzdGF0dXM+IH0gbWFya2V0aW5nICAgICAgIC0gTWFya2V0aW5nIENvb2tpZXMgc3RhdHVzIHNldCB0byB2YWx1ZVxyXG4gICAqIEByZXR1cm4geyB1bmRlZmluZWQgfVxyXG4gICovXHJcbiAgc2V0U3RhdHVzZXMoKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlIH0gPSB0aGlzLm9wdGlvbnMuY29va2llXHJcblxyXG4gICAgY29uc3QgdXBkYXRlQ2F0ZWdvcnlTdGF0dXMgPSAoIGNhdGVnb3J5TmFtZSwgc3RhdHVzICkgPT4ge1xyXG4gICAgICBpZiAoaXNWYWxpZFN0YXR1cyhzdGF0dXMpKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llTmFtZSA9IG5hbWUrJ18nK2NhdGVnb3J5TmFtZVxyXG4gICAgICAgIGNvbnN0IGNob3NlbkJlZm9yZSA9IHN0YXR1c2VzLmluZGV4T2YoIGdldENvb2tpZShjb29raWVOYW1lKSApID49IDBcclxuICAgICAgICBzZXRDb29raWUoY29va2llTmFtZSwgc3RhdHVzLCBleHBpcnlEYXlzLCBkb21haW4sIHBhdGgsIHNlY3VyZSlcclxuICAgICAgICB0aGlzLmVtaXQoIFwic3RhdHVzQ2hhbmdlZFwiLCBjb29raWVOYW1lLCBzdGF0dXMsIGNob3NlbkJlZm9yZSApXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbGVhclN0YXR1c2VzKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCBhcmd1bWVudHMubGVuZ3RoID09PSAwICkge1xyXG4gICAgICBjYXRlZ29yaWVzLmZvckVhY2goIGNhdGVnb3J5ID0+IHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCBjYXRlZ29yeSwgdGhpcy51c2VyQ2F0ZWdvcmllc1sgY2F0ZWdvcnkgXSApIClcclxuICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XHJcbiAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaCggY2F0ZWdvcnkgPT4gdXBkYXRlQ2F0ZWdvcnlTdGF0dXMoIGNhdGVnb3J5LCBhcmd1bWVudHNbIDAgXSApIClcclxuICAgIH0gZWxzZSBpZiAoIGFyZ3VtZW50cy5sZW5ndGggPiAxICkge1xyXG4gICAgICBhcmd1bWVudHMuZm9yRWFjaCggKCBjYXRlZ29yeVN0YXR1cywgaW5kZXggKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlQ2F0ZWdvcnlTdGF0dXMoIHRoaXMudXNlckNhdGVnb3JpZXNbIGluZGV4IF0sIGNhdGVnb3J5U3RhdHVzIClcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhbGwgY29va2llIGNhdGVnb2llcyBzdGF0dXNlc1xyXG4gICAqIEByZXR1cm4geyBhcnJheTxzdHJpbmc+IH0gLSBjb29raWUgY2F0ZWdvcmllcyBzdGF0dXMgaW4gb3JkZXIgb2YgY2F0ZWdvcmllc1xyXG4gICAqL1xyXG4gIGdldFN0YXR1c2VzKCkge1xyXG4gICAgcmV0dXJuIGNhdGVnb3JpZXMubWFwKCBjYXRlZ29yeU5hbWUgPT4gZ2V0Q29va2llKHRoaXMub3B0aW9ucy5jb29raWUubmFtZSsnXycrY2F0ZWdvcnlOYW1lKSApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhciBhbGwgY29va2llIGNhdGVnb2llcyBzdGF0dXNlc1xyXG4gICAqL1xyXG4gIGNsZWFyU3RhdHVzZXMoKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGRvbWFpbiwgcGF0aCB9ID0gdGhpcy5vcHRpb25zLmNvb2tpZVxyXG4gICAgY2F0ZWdvcmllcy5mb3JFYWNoKCBjYXRlZ29yeU5hbWUgPT4ge1xyXG4gICAgICBzZXRDb29raWUobmFtZSsnXycrY2F0ZWdvcnlOYW1lLCAnJywgLTEsIGRvbWFpbiwgcGF0aClcclxuICAgIH0pXHJcbiAgfVxyXG4gIFxyXG4gIGNhblVzZUNvb2tpZXMoKSB7XHJcbiAgICBpZiAoIXdpbmRvdy5uYXZpZ2F0b3IuY29va2llRW5hYmxlZCB8fCB3aW5kb3cuQ29va2llc09LIHx8IHdpbmRvdy5uYXZpZ2F0b3IuQ29va2llc09LICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0YXR1c2VzVmFsdWVzID0gdGhpcy5nZXRTdGF0dXNlcygpXHJcbiAgICBjb25zdCBtYXRjaGVzID0gc3RhdHVzZXNWYWx1ZXMubWFwKCAoIHN0YXR1cywgaW5kZXggKSA9PiAoIHsgW2NhdGVnb3JpZXNbaW5kZXhdXTogaXNWYWxpZFN0YXR1cyggc3RhdHVzICkgfSApIClcclxuICAgIGNvbnN0IGhhc01hdGNoZXMgPSBtYXRjaGVzLmZpbHRlciggbWF0Y2ggPT4gbWF0Y2hbT2JqZWN0LmtleXMobWF0Y2gpWzBdXSApLmxlbmd0aCA+IDBcclxuICAgIHN0YXR1c2VzVmFsdWVzLmZvckVhY2goICggc3RhdHVzLCBpbmRleCApID0+XHJcbiAgICAgIHRoaXMudXNlckNhdGVnb3JpZXNbIGNhdGVnb3JpZXNbIGluZGV4IF0gXSA9PT0gc3RhdHVzXHJcbiAgICAgICAgPyBzdGF0dXMgOiB0aGlzLnVzZXJDYXRlZ29yaWVzWyBjYXRlZ29yaWVzWyBpbmRleCBdIF0gKVxyXG5cclxuICAgIHJldHVybiBoYXNNYXRjaGVzXHJcbiAgfVxyXG5cclxuICAvLyB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHRcclxuICBnZXRQb3NpdGlvbkNsYXNzZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnBvc2l0aW9uLnNwbGl0KCAnLScgKS5tYXAoIHBvcyA9PiAnY2MtJytwb3MpXHJcbiAgfVxyXG5cclxuICBnZXRQb3B1cENsYXNzZXMoKSB7XHJcbiAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zXHJcbiAgICBsZXQgcG9zaXRpb25TdHlsZSA9XHJcbiAgICAgIG9wdHMucG9zaXRpb24gPT0gJ3RvcCcgfHwgb3B0cy5wb3NpdGlvbiA9PSAnYm90dG9tJ1xyXG4gICAgICAgID8gJ2Jhbm5lcidcclxuICAgICAgICA6ICdmbG9hdGluZydcclxuXHJcbiAgICBpZiAoaXNNb2JpbGUoKSAmJiBvcHRzLm1vYmlsZUZvcmNlRmxvYXQpIHtcclxuICAgICAgcG9zaXRpb25TdHlsZSA9ICdmbG9hdGluZydcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gW1xyXG4gICAgICAnY2MtJyArIHBvc2l0aW9uU3R5bGUsIC8vIGZsb2F0aW5nIG9yIGJhbm5lclxyXG4gICAgICAnY2MtdHlwZS0nICsgb3B0cy50eXBlLCAvLyBhZGQgdGhlIGNvbXBsaWFuY2UgdHlwZVxyXG4gICAgICAnY2MtdGhlbWUtJyArIG9wdHMudGhlbWUsIC8vIGFkZCB0aGUgdGhlbWVcclxuICAgIF1cclxuXHJcbiAgICBpZiAob3B0cy5zdGF0aWMpIHtcclxuICAgICAgY2xhc3Nlcy5wdXNoKCdjYy1zdGF0aWMnKVxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzZXMucHVzaC5hcHBseShjbGFzc2VzLCB0aGlzLmdldFBvc2l0aW9uQ2xhc3NlcygpKVxyXG5cclxuICAgIC8vIHdlIG9ubHkgYWRkIGV4dHJhIHN0eWxlcyBpZiBgcGFsZXR0ZWAgaGFzIGJlZW4gc2V0IHRvIGEgdmFsaWQgdmFsdWVcclxuICAgIHRoaXMuYXR0YWNoQ3VzdG9tUGFsZXR0ZSh0aGlzLm9wdGlvbnMucGFsZXR0ZSlcclxuXHJcbiAgICAvLyBpZiB3ZSBvdmVycmlkZSB0aGUgcGFsZXR0ZSwgYWRkIHRoZSBjbGFzcyB0aGF0IGVuYWJsZXMgdGhpc1xyXG4gICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3Rvcikge1xyXG4gICAgICBjbGFzc2VzLnB1c2godGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjbGFzc2VzXHJcbiAgfVxyXG5cclxuICBnZXRQb3B1cElubmVyTWFya3VwKCkge1xyXG4gICAgY29uc3QgaW50ZXJwb2xhdGVkID0ge31cclxuICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnNcclxuXHJcbiAgICAvLyByZW1vdmVzIGxpbmsgaWYgc2hvd0xpbmsgaXMgZmFsc2VcclxuICAgIGlmICghb3B0cy5zaG93TGluaykge1xyXG4gICAgICBvcHRzLmVsZW1lbnRzLmxpbmsgPSAnJyBcclxuICAgICAgb3B0cy5lbGVtZW50cy5tZXNzYWdlbGluayA9IG9wdHMuZWxlbWVudHMubWVzc2FnZVxyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5rZXlzKG9wdHMuZWxlbWVudHMpLmZvckVhY2goIHByb3AgPT4ge1xyXG4gICAgICBpbnRlcnBvbGF0ZWRbcHJvcF0gPSBpbnRlcnBvbGF0ZVN0cmluZyhcclxuICAgICAgICBvcHRzLmVsZW1lbnRzW3Byb3BdLFxyXG4gICAgICAgIG5hbWUgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc3RyID0gb3B0cy5jb250ZW50W25hbWVdXHJcbiAgICAgICAgICByZXR1cm4gbmFtZSAmJiB0eXBlb2Ygc3RyID09ICdzdHJpbmcnICYmIHN0ci5sZW5ndGggPyBzdHIgOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBjaGVja3MgaWYgdGhlIHR5cGUgaXMgdmFsaWQgYW5kIGRlZmF1bHRzIHRvIGluZm8gaWYgaXQncyBub3RcclxuICAgIGxldCBjb21wbGlhbmNlVHlwZSA9IG9wdHMuY29tcGxpYW5jZVtvcHRzLnR5cGVdXHJcbiAgICBpZiAoIWNvbXBsaWFuY2VUeXBlKSB7XHJcbiAgICAgIGNvbXBsaWFuY2VUeXBlID0gb3B0cy5jb21wbGlhbmNlLmluZm9cclxuICAgIH1cclxuXHJcbiAgICAvLyBidWlsZCB0aGUgY29tcGxpYW5jZSB0eXBlcyBmcm9tIHRoZSBhbHJlYWR5IGludGVycG9sYXRlZCBgZWxlbWVudHNgXHJcbiAgICBpbnRlcnBvbGF0ZWQuY29tcGxpYW5jZSA9IGludGVycG9sYXRlU3RyaW5nKCBjb21wbGlhbmNlVHlwZSwgbmFtZSA9PiBpbnRlcnBvbGF0ZWRbbmFtZV0gKVxyXG5cclxuICAgIC8vIGNoZWNrcyBpZiB0aGUgbGF5b3V0IGlzIHZhbGlkIGFuZCBkZWZhdWx0cyB0byBiYXNpYyBpZiBpdCdzIG5vdFxyXG4gICAgbGV0IGxheW91dCA9IG9wdHMubGF5b3V0c1tvcHRzLmxheW91dF1cclxuICAgIGlmICghbGF5b3V0KSB7XHJcbiAgICAgIGxheW91dCA9IG9wdHMubGF5b3V0cy5iYXNpY1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gaW50ZXJwb2xhdGVTdHJpbmcobGF5b3V0LCBtYXRjaCA9PmludGVycG9sYXRlZFttYXRjaF0gKVxyXG4gIH1cclxuXHJcbiAgYXBwZW5kTWFya3VwKG1hcmt1cCkge1xyXG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9uc1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGNvbnQgPVxyXG4gICAgICBvcHRzLmNvbnRhaW5lciAmJiBvcHRzLmNvbnRhaW5lci5ub2RlVHlwZSA9PT0gMVxyXG4gICAgICAgID8gb3B0cy5jb250YWluZXJcclxuICAgICAgICA6IGRvY3VtZW50LmJvZHlcclxuXHJcbiAgICBkaXYuaW5uZXJIVE1MID0gbWFya3VwXHJcblxyXG4gICAgY29uc3QgZWwgPSBkaXYuY2hpbGRyZW5bMF1cclxuXHJcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblxyXG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnY2Mtd2luZG93JykgJiYgdGhpcy5oYXNUcmFuc2l0aW9uKSB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2NjLWludmlzaWJsZScpXHJcbiAgICB9XHJcblxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrKCBldmVudCApIClcclxuICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoICcuY2MtYnRuIFt0eXBlPVwiY2hlY2tib3hcIl0nICkuZm9yRWFjaCggY2hlY2tib3ggPT4ge1xyXG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXNlckNhdGVnb3JpZXNbIGNoZWNrYm94Lm5hbWUgXSA9IGNoZWNrYm94LmNoZWNrZWQgPyAnQUxMT1cnIDogJ0RFTlknXHJcbiAgICAgIH0pXHJcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGV2ZW50ID0+IChldmVudC5zdG9wUHJvcGFnYXRpb24oKSkgKVxyXG4gICAgfSlcclxuICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2MtaW5mb1wiKS5mb3JFYWNoKCBzaG93SW5mbyA9PiB7XHJcbiAgICAgIHNob3dJbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcbiAgICAgICAgaWYgKCB0aGlzID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICApIHtcclxuICAgICAgICAgIHRoaXMuYmx1cigpXHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAob3B0cy5hdXRvQXR0YWNoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKCFjb250LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgIGNvbnQuYXBwZW5kQ2hpbGQoZWwpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnQuaW5zZXJ0QmVmb3JlKGVsLCBjb250LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoIGVycm9yICkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvciggXCJObyBjb250YWluZXIgdG8gYXR0YWNoIHRvby4gTWFrZSBzdXJlIHRoZSBET00gaGFzIGxvYWRlZC4gSXMgeW91ciBzY3JpcHQgbG9hZGVkIGp1c3QgYmVmb3JlIHRoZSBgPC9ib2R5PmAgdGFnP1wiIClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlbFxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQnV0dG9uQ2xpY2soZXZlbnQpIHtcclxuICAgIC8vIHJldHVybnMgdGhlIHBhcmVudCBlbGVtZW50IHdpdGggdGhlIHNwZWNpZmllZCBjbGFzcywgb3IgdGhlIG9yaWdpbmFsIGVsZW1lbnQgLSBudWxsIGlmIG5vdCBmb3VuZFxyXG4gICAgY29uc3QgYnRuID0gdHJhdmVyc2VET01QYXRoKGV2ZW50LnRhcmdldCwgJ2NjLWJ0bicpIHx8IGV2ZW50LnRhcmdldFxyXG4gICAgXHJcbiAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWJ0bicgKSAmJiBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2Mtc2F2ZScgKSl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdHVzZXMoKVxyXG4gICAgICB0aGlzLmNsb3NlKHRydWUpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1idG4nICkpIHtcclxuICAgICAgY29uc3QgbWF0Y2hlcyA9IGJ0bi5jbGFzc05hbWUubWF0Y2goXHJcbiAgICAgICAgbmV3IFJlZ0V4cCgnXFxcXGJjYy0oJyArIHN0YXR1c2VzLm1hcCggc3RyID0+IHN0ci5yZXBsYWNlKC9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZywgJ1xcXFwkJicpICkuam9pbignfCcpICsgJylcXFxcYicpXHJcbiAgICAgIClcclxuICAgICAgY29uc3QgbWF0Y2ggPSAobWF0Y2hlcyAmJiBtYXRjaGVzWzFdKSB8fCBmYWxzZVxyXG4gICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXR1c2VzKG1hdGNoKVxyXG4gICAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcclxuICAgICAgfVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtY2xvc2UnICkpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0dXNlcyhzdGF0dXNEaXNtaXNzKVxyXG4gICAgICB0aGlzLmNsb3NlKHRydWUpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1yZXZva2UnICkpIHtcclxuICAgICAgdGhpcy5yZXZva2VDaG9pY2UoKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF0dGFjaEN1c3RvbVBhbGV0dGUocGFsZXR0ZSkge1xyXG4gICAgY29uc3QgaGFzaFN0ciA9IGhhc2goSlNPTi5zdHJpbmdpZnkocGFsZXR0ZSkpXHJcbiAgICBjb25zdCBzZWxlY3RvciA9ICdjYy1jb2xvci1vdmVycmlkZS0nICsgaGFzaFN0clxyXG4gICAgY29uc3QgaXNWYWxpZCA9IGlzUGxhaW5PYmplY3QocGFsZXR0ZSlcclxuXHJcbiAgICB0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IgPSBpc1ZhbGlkID8gc2VsZWN0b3IgOiBudWxsXHJcblxyXG4gICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgYWRkQ3VzdG9tU3R5bGVzaGVldChoYXNoU3RyLCBwYWxldHRlLCAnLicgKyBzZWxlY3RvcilcclxuICAgIH1cclxuICAgIHJldHVybiBpc1ZhbGlkXHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0RXZlbnRQYXRoKCBldmVudCApIHtcclxuICAgIGNvbnN0IHBhdGggPSBldmVudC5jb21wb3NlZFBhdGggPyBldmVudC5jb21wb3NlZFBhdGgoKSA6IChmdW5jdGlvbiAoIGFyciwgZWxlbWVudCApIHtcclxuICAgICAgd2hpbGUgKCBlbGVtZW50ICkge1xyXG4gICAgICAgIGFyci5wdXNoKCBlbGVtZW50IClcclxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGFyclxyXG4gICAgfSkoW10sZXZlbnQudGFyZ2V0IClcclxuICAgIGlmICggIXBhdGggKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybiggXCInLnBhdGgnICYgJy5jb21wb3NlZFBhdGgnIGZhaWxlZCB0byBnZW5lcmF0ZSBhbiBldmVudCBwYXRoLlwiIClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF0aFxyXG4gIH1cclxuXHJcbiAgYXBwbHlBdXRvRGlzbWlzcygpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgZW5hYmxlZCxcclxuICAgICAgZGlzbWlzc09uVGltZW91dCAgOiBkZWxheSxcclxuICAgICAgZGlzbWlzc09uU2Nyb2xsICAgOnNjcm9sbFJhbmdlLFxyXG4gICAgICBkaXNtaXNzT25MaW5rQ2xpY2ssXHJcbiAgICAgIGRpc21pc3NPbldpbmRvd0NsaWNrLFxyXG4gICAgICBkaXNtaXNzT25LZXlQcmVzc1xyXG4gICAgfSA9IHRoaXMub3B0aW9uc1xyXG5cclxuICAgIGlmICggZW5hYmxlZCApIHtcclxuICAgICAgaWYgKHR5cGVvZiBkZWxheSA9PSAnbnVtYmVyJyAmJiBkZWxheSA+PSAwKSB7XHJcbiAgICAgICAgdGhpcy5kaXNtaXNzVGltZW91dCA9IHNldFRpbWVvdXQoICgpPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhzdGF0dXNEaXNtaXNzKVxyXG4gICAgICAgICAgdGhpcy5jbG9zZSh0cnVlKVxyXG4gICAgICAgIH0sIE1hdGguZmxvb3IoZGVsYXkpKVxyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzY3JvbGxSYW5nZSA9PSAnbnVtYmVyJyAmJiBzY3JvbGxSYW5nZSA+PSAwKSB7XHJcbiAgICAgICAgdGhpcy5vbldpbmRvd1Njcm9sbCA9ICgpID0+IHtcclxuICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBNYXRoLmZsb29yKHNjcm9sbFJhbmdlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKHN0YXR1c0Rpc21pc3MpXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uV2luZG93U2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSlcclxuICAgICAgICAgICAgdGhpcy5vbldpbmRvd1Njcm9sbCA9IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25XaW5kb3dTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxyXG4gICAgICB9IGVsc2UgaWYgKGRpc21pc3NPbldpbmRvd0NsaWNrKSB7XHJcbiAgICAgICAgdGhpcy5vbldpbmRvd0NsaWNrID0gZXZ0ID0+IHtcclxuICAgICAgICAgIGlmICggIWdldEV2ZW50UGF0aCggZXZ0ICkuc29tZSggZWxlbWVudCA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaWdub3JlQ2xpY2tzRnJvbS5zb21lKCBpZ25vcmVkQ2xpY2sgPT5cclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdCAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggaWdub3JlZENsaWNrIClcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoc3RhdHVzRGlzbWlzcylcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSh0cnVlKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbldpbmRvd0NsaWNrKVxyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uV2luZG93Q2xpY2spXHJcbiAgICAgICAgICAgIHRoaXMub25XaW5kb3dDbGljayA9IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25XaW5kb3dDbGljaylcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uV2luZG93Q2xpY2spXHJcbiAgICAgIH0gZWxzZSBpZiAoZGlzbWlzc09uTGlua0NsaWNrKSB7XHJcbiAgICAgICAgdGhpcy5vbkxpbmtDbGljayA9IGV2dCA9PiB7XHJcbiAgICAgICAgICBpZiAoIGdldEV2ZW50UGF0aCggZXZ0ICkuc29tZSggZWxlbSA9PiB0eXBlb2YgZWxlbS50YWdOYW1lICE9PSAndW5kZWZpbmVkJyAmJiBlbGVtLnRhZ05hbWUgPT09ICdBJyApICkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKCBzdGF0dXNEaXNtaXNzIClcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSggdHJ1ZSApXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25MaW5rQ2xpY2spXHJcbiAgICAgICAgICAgIHRoaXMub25MaW5rQ2xpY2sgPSBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25MaW5rQ2xpY2spXHJcbiAgICAgIH0gZWxzZSBpZiAoIGRpc21pc3NPbktleVByZXNzICkge1xyXG4gICAgICAgICAgdGhpcy5vbktleVByZXNzID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50XHJcbiAgICAgICAgICAgIGlmICgga2V5Q29kZSA9PT0gMTMgKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyggc3RhdHVzQWxsb3cgKVxyXG4gICAgICAgICAgICAgIHRoaXMuY2xvc2UoIHRydWUgKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBrZXlDb2RlID09PSAyNykge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoIHN0YXR1c0Rpc21pc3MgKVxyXG4gICAgICAgICAgICAgIHRoaXMuY2xvc2UoIHRydWUgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ29ua2V5cHJlc3MnLCB0aGlzLm9uS2V5UHJlc3MgKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcHBseVJldm9rZUJ1dHRvbigpIHtcclxuICAgIC8vIHJldm9rYWJsZSBpcyB0cnVlIGlmIGFkdmFuY2VkIGNvbXBsaWFuY2UgaXMgc2VsZWN0ZWRcclxuICAgIGlmICh0aGlzLm9wdGlvbnMudHlwZSAhPSAnaW5mbycpIHRoaXMub3B0aW9ucy5yZXZva2FibGUgPSB0cnVlXHJcbiAgICAvLyBhbmltYXRlUmV2b2thYmxlIGZhbHNlIGZvciBtb2JpbGUgZGV2aWNlc1xyXG4gICAgaWYgKGlzTW9iaWxlKCkpIHRoaXMub3B0aW9ucy5hbmltYXRlUmV2b2thYmxlID0gZmFsc2VcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xyXG4gICAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5nZXRQb3NpdGlvbkNsYXNzZXMoKVxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUpIHtcclxuICAgICAgICBjbGFzc2VzLnB1c2goJ2NjLWFuaW1hdGUnKVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpIHtcclxuICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudGhlbWUpIHtcclxuICAgICAgICBjbGFzc2VzLnB1c2goJ2NjLXRoZW1lLScrdGhpcy5vcHRpb25zLnRoZW1lKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCB0aGlzLm9wdGlvbnMuY29udGVudC5wb2xpY3kgKVxyXG4gICAgICBjb25zdCByZXZva2VCdG4gPSB0aGlzLm9wdGlvbnMucmV2b2tlQnRuXHJcbiAgICAgICAgLnJlcGxhY2UoJ3t7Y2xhc3Nlc319JywgY2xhc3Nlcy5qb2luKCcgJykpXHJcbiAgICAgICAgLnJlcGxhY2UoJ3t7cG9saWN5fX0nLCB0aGlzLm9wdGlvbnMuY29udGVudC5wb2xpY3kpXHJcblxyXG4gICAgICB0aGlzLnJldm9rZUJ0biA9IHRoaXMuYXBwZW5kTWFya3VwKHJldm9rZUJ0bilcclxuXHJcbiAgICAgIGNvbnN0IGJ0biA9IHRoaXMucmV2b2tlQnRuXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSkge1xyXG4gICAgICAgIGNvbnN0IG9uTW91c2VNb3ZlID0gdGhyb3R0bGUoZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgICBsZXQgYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgIGNvbnN0IG1pblkgPSAyMFxyXG4gICAgICAgICAgY29uc3QgbWF4WSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDIwXHJcblxyXG4gICAgICAgICAgaWYgKCAoIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy10b3AnICkgJiYgZXZ0LmNsaWVudFkgPCBtaW5ZICkgfHxcclxuICAgICAgICAgICAgICAgICggYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWJvdHRvbScgKSAmJiBldnQuY2xpZW50WSA+IG1heFkgKSApIHtcclxuICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChhY3RpdmUgJiYgIWJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1hY3RpdmUnICkgKSB7XHJcbiAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoICdjYy1hY3RpdmUnIClcclxuICAgICAgICAgIH0gZWxzZSBpZiAoICFhY3RpdmUgJiYgYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWFjdGl2ZScgKSApIHtcclxuICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSggJ2NjLWFjdGl2ZScgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDIwMClcclxuXHJcbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZSA9IG9uTW91c2VNb3ZlXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRlc3Ryb3koKXtcclxuICAgIGNvbnNvbGUud2FybiggXCJEZXN0cm95aW5nLi4uXCIpXHJcbiAgICBpZiAoIHRoaXMuZWxlbWVudCApe1xyXG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKClcclxuICAgIH1cclxuICAgIGlmICggdGhpcy5yZXZva2VCdG4gKXtcclxuICAgICAgdGhpcy5yZXZva2VCdG4ucmVtb3ZlKClcclxuICAgIH1cclxuICAgIGlmICggdGhpcy5vbldpbmRvd1Njcm9sbCApe1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vbldpbmRvd1Njcm9sbCApXHJcbiAgICB9XHJcbiAgICBpZiAoIHRoaXMub25XaW5kb3dDbGljayApIHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbldpbmRvd0NsaWNrIClcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbldpbmRvd0NsaWNrKVxyXG4gICAgfVxyXG4gICAgaWYgKCB0aGlzLm9uTGlua0NsaWNrICkge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTGlua0NsaWNrKVxyXG4gICAgfVxyXG4gICAgaWYgKCB0aGlzLm9uS2V5UHJlc3MgKSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnb25rZXlwcmVzcycsIHRoaXMub25LZXlQcmVzcyApXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgLy8gTWFrZSB0aGlzIGZhbHNlIGlmIHlvdSB3YW50IHRvIGRpc2FibGUgYWxsIHJlZ2lvbmFsIG92ZXJyaWRlcyBmb3Igc2V0dGluZ3MuXHJcbiAgLy8gSWYgdHJ1ZSwgb3B0aW9ucyBjYW4gZGlmZmVyIGJ5IGNvdW50cnksIGRlcGVuZGluZyBvbiB0aGVpciBjb29raWUgbGF3LlxyXG4gIC8vIEl0IGRvZXMgbm90IGFmZmVjdCBoaWRpbmcgdGhlIHBvcHVwIGZvciBjb3VudHJpZXMgdGhhdCBkbyBub3QgaGF2ZSBjb29raWUgbGF3LlxyXG4gIHJlZ2lvbmFsTGF3OiB0cnVlLFxyXG5cclxuICAvLyBjb3VudHJpZXMgdGhhdCBlbmZvcmNlIHNvbWUgdmVyc2lvbiBvZiBhIGNvb2tpZSBsYXdcclxuICBoYXNMYXc6IFtcclxuICAgICdBVCcsXHJcbiAgICAnQkUnLFxyXG4gICAgJ0JHJyxcclxuICAgICdIUicsXHJcbiAgICAnQ1onLFxyXG4gICAgJ0NZJyxcclxuICAgICdESycsXHJcbiAgICAnRUUnLFxyXG4gICAgJ0ZJJyxcclxuICAgICdGUicsXHJcbiAgICAnREUnLFxyXG4gICAgJ0VMJyxcclxuICAgICdIVScsXHJcbiAgICAnSUUnLFxyXG4gICAgJ0lUJyxcclxuICAgICdMVicsXHJcbiAgICAnTFQnLFxyXG4gICAgJ0xVJyxcclxuICAgICdNVCcsXHJcbiAgICAnTkwnLFxyXG4gICAgJ05PJyxcclxuICAgICdQTCcsXHJcbiAgICAnUFQnLFxyXG4gICAgJ1NLJyxcclxuICAgICdFUycsXHJcbiAgICAnU0UnLFxyXG4gICAgJ0dCJyxcclxuICAgICdVSycsXHJcbiAgICAnR1InLFxyXG4gICAgJ0VVJyxcclxuICAgICdSTydcclxuICBdLFxyXG5cclxuICAvLyBjb3VudHJpZXMgdGhhdCBzYXkgdGhhdCBhbGwgY29va2llIGNvbnNlbnQgY2hvaWNlcyBtdXN0IGJlIHJldm9rYWJsZSAoYSB1c2VyIG11c3QgYmUgYWJsZSB0b28gY2hhbmdlIHRoZWlyIG1pbmQpXHJcbiAgcmV2b2thYmxlOiBbXHJcbiAgICAnSFInLFxyXG4gICAgJ0NZJyxcclxuICAgICdESycsXHJcbiAgICAnRUUnLFxyXG4gICAgJ0ZSJyxcclxuICAgICdERScsXHJcbiAgICAnTFYnLFxyXG4gICAgJ0xUJyxcclxuICAgICdOTCcsXHJcbiAgICAnTk8nLFxyXG4gICAgJ1BUJyxcclxuICAgICdFUydcclxuICBdLFxyXG5cclxuICAvLyBjb3VudHJpZXMgdGhhdCBzYXkgdGhhdCBhIHBlcnNvbiBjYW4gb25seSBcImNvbnNlbnRcIiBpZiB0aGUgZXhwbGljaXRseSBjbGljayBvbiBcIkkgYWdyZWVcIi5cclxuICAvLyBpbiB0aGVzZSBjb3VudHJpZXMsIGNvbnNlbnQgY2Fubm90IGJlIGltcGxpZWQgdmlhIGEgdGltZW91dCBvciBieSBzY3JvbGxpbmcgZG93biB0aGUgcGFnZVxyXG4gIGV4cGxpY2l0QWN0aW9uOiBbJ0hSJywgJ0lUJywgJ0VTJywgJ05PJ11cclxufSIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5jb25zdCB0b0Vycm9yID0gb2JqID0+IG5ldyBFcnJvcignRXJyb3IgWycgKyAob2JqLmNvZGUgfHwgJ1VOS05PV04nKSArICddOiAnICsgb2JqLmVycm9yKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8vIFRoZSBkZWZhdWx0IHRpbWVvdXQgaXMgNSBzZWNvbmRzLiBUaGlzIGlzIG1haW5seSBuZWVkZWQgdG8gY2F0Y2ggSlNPTlAgcmVxdWVzdHMgdGhhdCBlcnJvci5cclxuICAvLyBPdGhlcndpc2UgdGhlcmUgaXMgbm8gZWFzeSB3YXkgdG8gY2F0Y2ggSlNPTlAgZXJyb3JzLiBUaGF0IG1lYW5zIHRoYXQgaWYgYSBKU09OUCBmYWlscywgdGhlXHJcbiAgLy8gYXBwIHdpbGwgdGFrZSBgdGltZW91dGAgbWlsbGlzZWNvbmRzIHRvIHJlYWN0IHRvIGEgSlNPTlAgbmV0d29yayBlcnJvci5cclxuICB0aW1lb3V0OiA1MDAwLFxyXG5cclxuICAvLyB0aGUgb3JkZXIgdGhhdCBzZXJ2aWNlcyB3aWxsIGJlIGF0dGVtcHRlZCBpblxyXG4gIHNlcnZpY2VzOiBbXHJcbiAgICAnaXBpbmZvJ1xyXG5cclxuICAgIC8qXHJcblxyXG4gICAgLy8gJ2lwaW5mb2RiJyByZXF1aXJlcyBzb21lIG9wdGlvbnMsIHNvIHdlIGRlZmluZSBpdCB1c2luZyBhbiBvYmplY3RcclxuICAgIC8vIHRoaXMgb2JqZWN0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgdGhlIHNlcnZpY2VcclxuXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdpcGluZm9kYicsXHJcbiAgICAgIGludGVycG9sYXRlVXJsOiB7XHJcbiAgICAgICAgLy8gb2J2aW91c2x5LCB0aGlzIGlzIGEgZmFrZSBrZXlcclxuICAgICAgICBhcGlfa2V5OiAndk9nSTM3NDhkbkl5dElyc0pjeFM3cXNEZjZrYkprRTlsTjR5RURyWEFxWGNLVU52ampaUG94M2VrWHFtTU1sZCdcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gYXMgd2VsbCBhcyBkZWZpbmluZyBhbiBvYmplY3QsIHlvdSBjYW4gZGVmaW5lIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIG9iamVjdFxyXG5cclxuICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtuYW1lOiAnaXBpbmZvZGInfVxyXG4gICAgfSxcclxuXHJcbiAgICAqL1xyXG4gIF0sXHJcblxyXG4gIHNlcnZpY2VEZWZpbml0aW9uczoge1xyXG4gICAgaXBpbmZvOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBUaGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBKU09OLCBzbyB3ZSBzaW1wbHkgbmVlZCB0byBwYXJzZSBpdCBhbmQgcmV0dXJuIHRoZSBjb3VudHJ5IGNvZGVcclxuICAgICAgICB1cmw6ICcvL2lwaW5mby5pbycsXHJcbiAgICAgICAgaGVhZGVyczogWydBY2NlcHQ6IGFwcGxpY2F0aW9uL2pzb24nXSxcclxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZG9uZSwgcmVzcG9uc2UpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICByZXR1cm4ganNvbi5lcnJvclxyXG4gICAgICAgICAgICAgID8gdG9FcnJvcihqc29uKVxyXG4gICAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgICBjb2RlOiBqc29uLmNvdW50cnlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gdG9FcnJvcih7ZXJyb3I6ICdJbnZhbGlkIHJlc3BvbnNlICgnICsgZXJyICsgJyknfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gVGhpcyBzZXJ2aWNlIHJlcXVpcmVzIGFuIG9wdGlvbiB0byBkZWZpbmUgYGtleWAuIE9wdGlvbnMgYXJlIHByb2l2ZWQgdXNpbmcgb2JqZWN0cyBvciBmdW5jdGlvbnNcclxuICAgIGlwaW5mb2RiOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBUaGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBKU09OLCBzbyB3ZSBzaW1wbHkgbmVlZCB0byBwYXJzZSBpdCBhbmQgcmV0dXJuIHRoZSBjb3VudHJ5IGNvZGVcclxuICAgICAgICB1cmw6XHJcbiAgICAgICAgICAnLy9hcGkuaXBpbmZvZGIuY29tL3YzL2lwLWNvdW50cnkvP2tleT17YXBpX2tleX0mZm9ybWF0PWpzb24mY2FsbGJhY2s9e2NhbGxiYWNrfScsXHJcbiAgICAgICAgaXNTY3JpcHQ6IHRydWUsIC8vIHRoaXMgaXMgSlNPTlAsIHRoZXJlZm9yZSB3ZSBtdXN0IHNldCBpdCB0byBydW4gYXMgYSBzY3JpcHRcclxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZG9uZSwgcmVzcG9uc2UpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICByZXR1cm4ganNvbi5zdGF0dXNDb2RlID09ICdFUlJPUidcclxuICAgICAgICAgICAgICA/IHRvRXJyb3Ioe2Vycm9yOiBqc29uLnN0YXR1c01lc3NhZ2V9KVxyXG4gICAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgICBjb2RlOiBqc29uLmNvdW50cnlDb2RlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRvRXJyb3Ioe2Vycm9yOiAnSW52YWxpZCByZXNwb25zZSAoJyArIGVyciArICcpJ30pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG1heG1pbmQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIGEgSmF2YVNjcmlwdCBmaWxlIHdoaWNoIGRlZmluZXMgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5LiBPbmNlIGxvYWRlZCwgd2UgbXVzdFxyXG4gICAgICAgIC8vIG1ha2UgYW4gYWRkaXRpb25hbCBBSkFYIGNhbGwuIFRoZXJlZm9yZSB3ZSBwcm92aWRlIGEgYGRvbmVgIGNhbGxiYWNrIHRoYXQgY2FuIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseVxyXG4gICAgICAgIHVybDogJy8vanMubWF4bWluZC5jb20vanMvYXBpcy9nZW9pcDIvdjIuMS9nZW9pcDIuanMnLFxyXG4gICAgICAgIGlzU2NyaXB0OiB0cnVlLCAvLyB0aGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBhIEphdmFTY3JpcHQgZmlsZSwgc28gaXQgbXVzdCBiZSBydW4gYXMgYSBzY3JpcHRcclxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZG9uZSkge1xyXG4gICAgICAgICAgLy8gaWYgZXZlcnl0aGluZyB3ZW50IG9rYXkgdGhlbiBgZ2VvaXAyYCBXSUxMIGJlIGRlZmluZWRcclxuICAgICAgICAgIGlmICghd2luZG93Lmdlb2lwMikge1xyXG4gICAgICAgICAgICBkb25lKFxyXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAgICdVbmV4cGVjdGVkIHJlc3BvbnNlIGZvcm1hdC4gVGhlIGRvd25sb2FkZWQgc2NyaXB0IHNob3VsZCBoYXZlIGV4cG9ydGVkIGBnZW9pcDJgIHRvIHRoZSBnbG9iYWwgc2NvcGUnXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGdlb2lwMi5jb3VudHJ5KFxyXG4gICAgICAgICAgICBmdW5jdGlvbihsb2NhdGlvbikge1xyXG4gICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBkb25lKHtcclxuICAgICAgICAgICAgICAgICAgY29kZTogbG9jYXRpb24uY291bnRyeS5pc29fY29kZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGRvbmUodG9FcnJvcihlcnIpKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAgICAgZG9uZSh0b0Vycm9yKGVycikpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAvLyBXZSBjYW4ndCByZXR1cm4gYW55dGhpbmcsIGJlY2F1c2Ugd2UgbmVlZCB0byB3YWl0IGZvciB0aGUgc2Vjb25kIEFKQVggY2FsbCB0byByZXR1cm4uXHJcbiAgICAgICAgICAvLyBUaGVuIHdlIGNhbiAnY29tcGxldGUnIHRoZSBzZXJ2aWNlIGJ5IHBhc3NpbmcgZGF0YSBvciBhbiBlcnJvciB0byB0aGUgYGRvbmVgIGNhbGxiYWNrLlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5pbXBvcnQgeyBzdGF0dXNEZW55LCBzdGF0dXNBbGxvdywgc3RhdHVzRGlzbWlzcywgY2F0ZWdvcmllcyB9ICBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyBpZiBmYWxzZSwgdGhpcyBwcmV2ZW50cyB0aGUgcG9wdXAgZnJvbSBzaG93aW5nICh1c2VmdWwgZm9yIGdpdmluZyB0byBjb250cm9sIHRvIGFub3RoZXIgcGllY2Ugb2YgY29kZSlcclxuICBlbmFibGVkOiB0cnVlLFxyXG5cclxuICAvLyBvcHRpb25hbCAoZXhwZWN0aW5nIGEgSFRNTCBlbGVtZW50KSBpZiBwYXNzZWQsIHRoZSBwb3B1cCBpcyBhcHBlbmRlZCB0byB0aGlzIGVsZW1lbnQuIGRlZmF1bHQgaXMgYGRvY3VtZW50LmJvZHlgXHJcbiAgY29udGFpbmVyOiBudWxsLFxyXG5cclxuICAvLyBkZWZhdWx0cyBjb29raWUgb3B0aW9ucyAtIGl0IGlzIFJFQ09NTUVOREVEIHRvIHNldCB0aGVzZSB2YWx1ZXMgdG8gY29ycmVzcG9uZCB3aXRoIHlvdXIgc2VydmVyXHJcbiAgY29va2llOiB7XHJcbiAgICAvLyBUaGlzIGlzIHRoZSBuYW1lIG9mIHRoaXMgY29va2llIC0geW91IGNhbiBpZ25vcmUgdGhpc1xyXG4gICAgbmFtZTogJ2Nvb2tpZWNvbnNlbnRfc3RhdHVzJyxcclxuICAgIC8vIFRoaXMgaXMgdGhlIHVybCBwYXRoIHRoYXQgdGhlIGNvb2tpZSAnbmFtZScgYmVsb25ncyB0by4gVGhlIGNvb2tpZSBjYW4gb25seSBiZSByZWFkIGF0IHRoaXMgbG9jYXRpb25cclxuICAgIHBhdGg6IG51bGwsXHJcbiAgICAvLyBUaGlzIGlzIHRoZSBkb21haW4gdGhhdCB0aGUgY29va2llICduYW1lJyBiZWxvbmdzIHRvLiBUaGUgY29va2llIGNhbiBvbmx5IGJlIHJlYWQgb24gdGhpcyBkb21haW4uXHJcbiAgICAvLyAgLSBHdWlkZSB0byBjb29raWUgZG9tYWlucyAtIGh0dHBzOi8vd3d3Lm14c2FzaGEuZXUvYmxvZy8yMDE0LzAzLzA0L2RlZmluaXRpdmUtZ3VpZGUtdG8tY29va2llLWRvbWFpbnMvXHJcbiAgICBkb21haW46IG51bGwsXHJcbiAgICAvLyBUaGUgY29va2llcyBleHBpcmUgZGF0ZSwgc3BlY2lmaWVkIGluIGRheXMgKHNwZWNpZnkgLTEgZm9yIG5vIGV4cGlyeSlcclxuICAgIGV4cGlyeURheXM6IG51bGwsXHJcbiAgICAvLyBJZiB0cnVlIHRoZSBjb29raWUgd2lsbCBiZSBjcmVhdGVkIHdpdGggdGhlIHNlY3VyZSBmbGFnLiBTZWN1cmUgY29va2llcyB3aWxsIG9ubHkgYmUgdHJhbnNtaXR0ZWQgdmlhIEhUVFBTLlxyXG4gICAgc2VjdXJlOiBudWxsXHJcbiAgfSxcclxuXHJcbiAgLy8gZWFjaCBpdGVtIGRlZmluZXMgdGhlIGlubmVyIHRleHQgZm9yIHRoZSBlbGVtZW50IHRoYXQgaXQgcmVmZXJlbmNlc1xyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGhlYWRlciA6ICdDb29raWVzIHVzZWQgb24gdGhlIHdlYnNpdGUhJyxcclxuICAgIG1lc3NhZ2U6ICdUaGlzIHdlYnNpdGUgdXNlcyBjb29raWVzIHRvIGVuc3VyZSB5b3UgZ2V0IHRoZSBiZXN0IGV4cGVyaWVuY2Ugb24gb3VyIHdlYnNpdGUuJyxcclxuICAgIGRpc21pc3M6ICdHb3QgaXQhJyxcclxuICAgIGFsbG93ICA6ICdBbGxvdyBjb29raWVzJyxcclxuICAgIGRlbnkgICA6ICdEZWNsaW5lJyxcclxuICAgIGxpbmsgICA6ICdMZWFybiBtb3JlJyxcclxuICAgIGhyZWYgICA6ICdodHRwczovL3d3dy5jb29raWVzYW5keW91LmNvbScsXHJcbiAgICBjbG9zZSAgOiAnJiN4Mjc0YycsXHJcbiAgICB0YXJnZXQgOiAnX2JsYW5rJyxcclxuICAgIHBvbGljeSA6ICdDb29raWUgUG9saWN5J1xyXG4gIH0sXHJcblxyXG4gIC8vIFRoaXMgaXMgdGhlIEhUTUwgZm9yIHRoZSBlbGVtZW50cyBhYm92ZS4gVGhlIHN0cmluZyB7e2hlYWRlcn19IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCB0aGUgZXF1aXZhbGVudCB0ZXh0IGJlbG93LlxyXG4gIC8vIFlvdSBjYW4gcmVtb3ZlIFwie3toZWFkZXJ9fVwiIGFuZCB3cml0ZSB0aGUgY29udGVudCBkaXJlY3RseSBpbnNpZGUgdGhlIEhUTUwgaWYgeW91IHdhbnQuXHJcbiAgLy9cclxuICAvLyAgLSBBUklBIHJ1bGVzIHN1Z2dlc3QgdG8gZW5zdXJlIGNvbnRyb2xzIGFyZSB0YWJiYWJsZSAoc28gdGhlIGJyb3dzZXIgY2FuIGZpbmQgdGhlIGZpcnN0IGNvbnRyb2wpLFxyXG4gIC8vICAgIGFuZCB0byBzZXQgdGhlIGZvY3VzIHRvIHRoZSBmaXJzdCBpbnRlcmFjdGl2ZSBjb250cm9sIChodHRwczovL3czYy5naXRodWIuaW8vdXNpbmctYXJpYS8pXHJcbiAgZWxlbWVudHM6IHtcclxuICAgIGhlYWRlcjogJzxzcGFuIGNsYXNzPVwiY2MtaGVhZGVyXCI+e3toZWFkZXJ9fTwvc3Bhbj4mbmJzcCcsXHJcbiAgICBtZXNzYWdlOlxyXG4gICAgICAnPHNwYW4gaWQ9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLW1lc3NhZ2VcIj57e21lc3NhZ2V9fTwvc3Bhbj4nLFxyXG4gICAgbWVzc2FnZWxpbms6XHJcbiAgICAgICc8c3BhbiBpZD1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiIGNsYXNzPVwiY2MtbWVzc2FnZVwiPnt7bWVzc2FnZX19IDxhIGFyaWEtbGFiZWw9XCJsZWFybiBtb3JlIGFib3V0IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWxpbmtcIiBocmVmPVwie3tocmVmfX1cIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93XCIgdGFyZ2V0PVwie3t0YXJnZXR9fVwiPnt7bGlua319PC9hPjwvc3Bhbj4nLFxyXG4gICAgZGlzbWlzczpcclxuICAgICAgYDxhIGFyaWEtbGFiZWw9XCJkaXNtaXNzIGNvb2tpZSBtZXNzYWdlXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1idG4gY2MtJHtzdGF0dXNEaXNtaXNzfVwiPnt7ZGlzbWlzc319PC9hPmAsXHJcbiAgICBhbGxvdzpcclxuICAgICAgYDxhIGFyaWEtbGFiZWw9XCJhbGxvdyBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgIGNsYXNzPVwiY2MtYnRuIGNjLSR7c3RhdHVzQWxsb3d9XCI+e3thbGxvd319PC9hPmAsXHJcbiAgICBkZW55OlxyXG4gICAgICBgPGEgYXJpYS1sYWJlbD1cImRlbnkgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtYnRuIGNjLSR7c3RhdHVzRGVueX1cIj57e2Rlbnl9fTwvYT5gLFxyXG4gICAgbGluazpcclxuICAgICAgJzxhIGFyaWEtbGFiZWw9XCJsZWFybiBtb3JlIGFib3V0IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWxpbmtcIiBocmVmPVwie3tocmVmfX1cIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93XCIgdGFyZ2V0PVwie3t0YXJnZXR9fVwiPnt7bGlua319PC9hPicsXHJcbiAgICBjbG9zZTpcclxuICAgICAgJzxzcGFuIGFyaWEtbGFiZWw9XCJkaXNtaXNzIGNvb2tpZSBtZXNzYWdlXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1jbG9zZVwiPnt7Y2xvc2V9fTwvc3Bhbj4nLFxyXG4gICAgY2F0ZWdvcmllczogJzx1bCBjbGFzcz1cImNjLWNhdGVnb3JpZXNcIj4nICtcclxuICAgICAgY2F0ZWdvcmllcy5tYXAoICggY2F0ZWdvcnksIGluZGV4ICkgPT5cclxuICAgICAgICBgPGxpIGNsYXNzPVwiY2MtY2F0ZWdvcnlcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjBcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIiR7Y2F0ZWdvcnl9XCIvPjxzcGFuIGNsYXNzPVwiY2MtYnRuLWNoZWNrYm94XCI+PC9zcGFuPiR7Y2F0ZWdvcnl9PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiJHtjYXRlZ29yeX0gRGVmaW5pdGlvbiBCdXR0b25cIiB0YWJpbmRleD1cIiR7aW5kZXgrMX1cIj5ePC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPlxyXG4gICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB0aGF0IGRvbid0IGZpdCB0aGUgJyR7Y2F0ZWdvcnkudG9Mb3dlckNhc2UoKX0nIGNhdGVnb3J5LjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+YFxyXG4gICAgICApLmpvaW4oXCJcIilcclxuICAgICAgKyAnPC91bD4nLFxyXG4gICAgc2F2ZTogYDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2Mtc2F2ZVwiPlNhdmU8L2J1dHRvbj5gXHJcbiAgICAvL2NvbXBsaWFuY2U6IGNvbXBsaWFuY2UgaXMgYWxzbyBhbiBlbGVtZW50LCBidXQgaXQgaXMgZ2VuZXJhdGVkIGJ5IHRoZSBhcHBsaWNhdGlvbiwgZGVwZW5kaW5nIG9uIGB0eXBlYCBiZWxvd1xyXG4gIH0sXHJcblxyXG4gIC8vIFRoZSBwbGFjZWhvbGRlcnMge3tjbGFzc2VzfX0gYW5kIHt7Y2hpbGRyZW59fSBib3RoIGdldCByZXBsYWNlZCBkdXJpbmcgaW5pdGlhbGlzYXRpb246XHJcbiAgLy8gIC0ge3tjbGFzc2VzfX0gaXMgd2hlcmUgYWRkaXRpb25hbCBjbGFzc2VzIGdldCBhZGRlZFxyXG4gIC8vICAtIHt7Y2hpbGRyZW59fSBpcyB3aGVyZSB0aGUgSFRNTCBjaGlsZHJlbiBhcmUgcGxhY2VkXHJcbiAgd2luZG93OlxyXG4gICAgJzxkaXYgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGFyaWEtbGFiZWw9XCJjb29raWVjb25zZW50XCIgYXJpYS1kZXNjcmliZWRieT1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiIGNsYXNzPVwiY2Mtd2luZG93IHt7Y2xhc3Nlc319XCI+PCEtLWdvb2dsZW9mZjogYWxsLS0+e3tjaGlsZHJlbn19PCEtLWdvb2dsZW9uOiBhbGwtLT48L2Rpdj4nLFxyXG4gIFxyXG4gIG1vZGFsOiAnJyxcclxuXHJcbiAgLy8gVGhpcyBpcyB0aGUgaHRtbCBmb3IgdGhlIHJldm9rZSBidXR0b24uIFRoaXMgb25seSBzaG93cyB1cCBhZnRlciB0aGUgdXNlciBoYXMgc2VsZWN0ZWQgdGhlaXIgbGV2ZWwgb2YgY29uc2VudFxyXG4gIC8vIEl0IGNhbiBiZSBlbmFibGVkIG9mIGRpc2FibGVkIHVzaW5nIHRoZSBgcmV2b2thYmxlYCBvcHRpb25cclxuICByZXZva2VCdG46ICc8ZGl2IGNsYXNzPVwiY2MtcmV2b2tlIHt7Y2xhc3Nlc319XCI+e3twb2xpY3l9fTwvZGl2PicsXHJcblxyXG4gIC8vIGRlZmluZSB0eXBlcyBvZiAnY29tcGxpYW5jZScgaGVyZS4gJ3t7dmFsdWV9fScgc3RyaW5ncyBpbiBoZXJlIGFyZSBsaW5rZWQgdG8gYGVsZW1lbnRzYFxyXG4gIGNvbXBsaWFuY2U6IHtcclxuICAgIGluZm86ICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZVwiPnt7ZGlzbWlzc319PC9kaXY+JyxcclxuICAgICdvcHQtaW4nOlxyXG4gICAgICAnPGRpdiBjbGFzcz1cImNjLWNvbXBsaWFuY2UgY2MtaGlnaGxpZ2h0XCI+e3tkaXNtaXNzfX17e2FsbG93fX17e2N1c3RvbWl6ZX19PC9kaXY+JyxcclxuICAgICdvcHQtb3V0JzpcclxuICAgICAgJzxkaXYgY2xhc3M9XCJjYy1jb21wbGlhbmNlIGNjLWhpZ2hsaWdodFwiPnt7ZGlzbWlzc319e3tkZW55fX08L2Rpdj4nLFxyXG4gICAgY2F0ZWdvcmllczogJzxkaXYgY2xhc3M9XCJmb3JtXCI+e3tjYXRlZ29yaWVzfX17e3NhdmV9fTwvZGl2PidcclxuICB9LFxyXG5cclxuICAvLyBzZWxlY3QgeW91ciB0eXBlIG9mIHBvcHVwIGhlcmVcclxuICB0eXBlOiAnaW5mbycsIC8vIHJlZmVycyB0byBgY29tcGxpYW5jZWAgKGluIG90aGVyIHdvcmRzLCB0aGUgYnV0dG9ucyB0aGF0IGFyZSBkaXNwbGF5ZWQpXHJcblxyXG4gIC8vIGRlZmluZSBsYXlvdXQgbGF5b3V0cyBoZXJlXHJcbiAgbGF5b3V0czoge1xyXG4gICAgLy8gdGhlICdibG9jaycgbGF5b3V0IHRlbmQgdG8gYmUgZm9yIHNxdWFyZSBmbG9hdGluZyBwb3B1cHNcclxuICAgIGJhc2ljICAgICAgICAgOiAne3ttZXNzYWdlbGlua319e3tjb21wbGlhbmNlfX0nLFxyXG4gICAgJ2Jhc2ljLWNsb3NlJyA6ICd7e21lc3NhZ2VsaW5rfX17e2NvbXBsaWFuY2V9fXt7Y2xvc2V9fScsXHJcbiAgICAnYmFzaWMtaGVhZGVyJzogJ3t7aGVhZGVyfX17e21lc3NhZ2V9fXt7bGlua319e3tjb21wbGlhbmNlfX0nXHJcbiAgICAvLyBhZGQgYSBjdXN0b20gbGF5b3V0IGhlcmUsIHRoZW4gYWRkIHNvbWUgbmV3IGNzcyB3aXRoIHRoZSBjbGFzcyAnLmNjLWxheW91dC1teS1jb29sLWxheW91dCdcclxuICAgIC8vJ215LWNvb2wtbGF5b3V0JzogJzxkaXYgY2xhc3M9XCJteS1zcGVjaWFsLWxheW91dFwiPnt7bWVzc2FnZX19e3tjb21wbGlhbmNlfX08L2Rpdj57e2Nsb3NlfX0nLFxyXG4gIH0sXHJcblxyXG4gIC8vIGRlZmF1bHQgbGF5b3V0IChzZWUgYWJvdmUpXHJcbiAgbGF5b3V0OiAnYmFzaWMnLFxyXG5cclxuICAvLyB0aGlzIHJlZmVycyB0byB0aGUgcG9wdXAgd2luZG93cyBwb3NpdGlvbi4gd2UgY3VycmVudGx5IHN1cHBvcnQ6XHJcbiAgLy8gIC0gYmFubmVyIHBvc2l0aW9uczogdG9wLCBib3R0b21cclxuICAvLyAgLSBmbG9hdGluZyBwb3NpdGlvbnM6IHRvcC1sZWZ0LCB0b3AtcmlnaHQsIGJvdHRvbS1sZWZ0LCBib3R0b20tcmlnaHRcclxuICAvL1xyXG4gIC8vIGFkZHMgYSBjbGFzcyBgY2MtZmxvYXRpbmdgIG9yIGBjYy1iYW5uZXJgIHdoaWNoIGhlbHBzIHdoZW4gc3R5bGluZ1xyXG4gIHBvc2l0aW9uOiAnYm90dG9tJywgLy8gZGVmYXVsdCBwb3NpdGlvbiBpcyAnYm90dG9tJ1xyXG5cclxuICAvLyBBdmFpbGFibGUgc3R5bGVzXHJcbiAgLy8gICAgLWJsb2NrIChkZWZhdWx0LCBubyBleHRyYSBjbGFzc2VzKVxyXG4gIC8vICAgIC1lZGdlbGVzc1xyXG4gIC8vICAgIC1jbGFzc2ljXHJcbiAgLy8gdXNlIHlvdXIgb3duIHN0eWxlIG5hbWUgYW5kIHVzZSBgLmNjLXRoZW1lLVNUWUxFTkFNRWAgY2xhc3MgaW4gQ1NTIHRvIGVkaXQuXHJcbiAgLy8gTm90ZTogc3R5bGUgXCJ3aXJlXCIgaXMgdXNlZCBmb3IgdGhlIGNvbmZpZ3VyYXRvciwgYnV0IGhhcyBubyBDU1Mgc3R5bGVzIG9mIGl0cyBvd24sIG9ubHkgcGFsZXR0ZSBpcyB1c2VkLlxyXG4gIHRoZW1lOiAnYmxvY2snLFxyXG5cclxuICAvLyBUaGUgcG9wdXAgaXMgYGZpeGVkYCBieSBkZWZhdWx0LCBidXQgaWYgeW91IHdhbnQgaXQgdG8gYmUgc3RhdGljIChpbmxpbmUgd2l0aCB0aGUgcGFnZSBjb250ZW50KSwgc2V0IHRoaXMgdG8gZmFsc2VcclxuICAvLyBOb3RlOiBieSBkZWZhdWx0LCB3ZSBhbmltYXRlIHRoZSBoZWlnaHQgb2YgdGhlIHBvcHVwIGZyb20gMCB0byBmdWxsIHNpemVcclxuICBzdGF0aWM6IGZhbHNlLFxyXG5cclxuICAvLyBpZiB5b3Ugd2FudCBjdXN0b20gY29sb3VycywgcGFzcyB0aGVtIGluIGhlcmUuIHRoaXMgb2JqZWN0IHNob3VsZCBsb29rIGxpa2UgdGhpcy5cclxuICAvLyBpZGVhbGx5LCBhbnkgY3VzdG9tIGNvbG91cnMvdGhlbWVzIHNob3VsZCBiZSBjcmVhdGVkIGluIGEgc2VwYXJhdGUgc3R5bGUgc2hlZXQsIGFzIHRoaXMgaXMgbW9yZSBlZmZpY2llbnQuXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIHBvcHVwOiB7YmFja2dyb3VuZDogJyMwMDAwMDAnLCB0ZXh0OiAnI2ZmZicsIGxpbms6ICcjZmZmJ30sXHJcbiAgLy8gICAgIGJ1dHRvbjoge2JhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIGJvcmRlcjogJyNmOGU3MWMnLCB0ZXh0OiAnI2Y4ZTcxYyd9LFxyXG4gIC8vICAgICBoaWdobGlnaHQ6IHtiYWNrZ3JvdW5kOiAnI2Y4ZTcxYycsIGJvcmRlcjogJyNmOGU3MWMnLCB0ZXh0OiAnIzAwMDAwMCd9LFxyXG4gIC8vICAgfVxyXG4gIC8vIGBoaWdobGlnaHRgIGlzIG9wdGlvbmFsIGFuZCBleHRlbmRzIGBidXR0b25gLiBpZiBpdCBleGlzdHMsIGl0IHdpbGwgYXBwbHkgdG8gdGhlIGZpcnN0IGJ1dHRvblxyXG4gIC8vIG9ubHkgYmFja2dyb3VuZCBuZWVkcyB0byBiZSBkZWZpbmVkIGZvciBldmVyeSBlbGVtZW50LiBpZiBub3Qgc2V0LCBvdGhlciBjb2xvcnMgY2FuIGJlIGNhbGN1bGF0ZWQgZnJvbSBpdFxyXG4gIHBhbGV0dGU6IG51bGwsXHJcblxyXG4gIC8vIFNvbWUgY291bnRyaWVzIFJFUVVJUkUgdGhhdCBhIHVzZXIgY2FuIGNoYW5nZSB0aGVpciBtaW5kLiBZb3UgY2FuIGNvbmZpZ3VyZSB0aGlzIHlvdXJzZWxmLlxyXG4gIC8vIE1vc3Qgb2YgdGhlIHRpbWUgdGhpcyBzaG91bGQgYmUgZmFsc2UsIGJ1dCB0aGUgYGNvb2tpZWNvbnNlbnQubGVnYWxgIGNhbiBjaGFuZ2UgdGhpcyB0byBgdHJ1ZWAgaWYgaXQgZGV0ZWN0cyB0aGF0IGl0IHNob3VsZFxyXG4gIHJldm9rYWJsZTogZmFsc2UsXHJcblxyXG4gIC8vIGlmIHRydWUsIHRoZSByZXZva2FibGUgYnV0dG9uIHdpbGwgdHJhbmxhdGUgaW4gYW5kIG91dFxyXG4gIGFuaW1hdGVSZXZva2FibGU6IHRydWUsXHJcblxyXG4gIC8vIHVzZWQgdG8gZGlzYWJsZSBsaW5rIG9uIGV4aXN0aW5nIGxheW91dHNcclxuICAvLyByZXBsYWNlcyBlbGVtZW50IG1lc3NhZ2VsaW5rIHdpdGggbWVzc2FnZSBhbmQgcmVtb3ZlcyBjb250ZW50IG9mIGxpbmtcclxuICBzaG93TGluazogdHJ1ZSxcclxuXHJcbiAgLy8gc2V0IHZhbHVlIGFzIHNjcm9sbCByYW5nZSB0byBlbmFibGVcclxuICBkaXNtaXNzT25TY3JvbGw6IGZhbHNlLFxyXG5cclxuICAvLyBzZXQgdmFsdWUgYXMgdGltZSBpbiBtaWxsaXNlY29uZHMgdG8gYXV0b2Rpc21pc3MgYWZ0ZXIgc2V0IHRpbWVcclxuICBkaXNtaXNzT25UaW1lb3V0OiBmYWxzZSxcclxuXHJcbiAgLy8gc2V0IHZhbHVlIGFzIGNsaWNrIGFueXRoaW5nIG9uIHRoZSBwYWdlLCBleGNsdWRpbmcgdGhlIGBpZ25vcmVDbGlja3NGcm9tYCBiZWxvdyAoaWYgd2UgY2xpY2sgb24gdGhlIHJldm9rZSBidXR0b24gZXRjKVxyXG4gIGRpc21pc3NPbldpbmRvd0NsaWNrOiBmYWxzZSxcclxuXHJcbiAgLy8gc2V0IHZhbHVlIGFzIGNsaWNrIGFueXRoaW5nIG9uIHRoZSBwYWdlLCBleGNsdWRpbmcgdGhlIGBpZ25vcmVDbGlja3NGcm9tYCBiZWxvdyAoaWYgd2UgY2xpY2sgb24gdGhlIHJldm9rZSBidXR0b24gZXRjKVxyXG4gIGRpc21pc3NPbkxpbmtDbGljazogZmFsc2UsXHJcblxyXG4gIC8vIHNldCB2YWx1ZSBhcyBrZXlzIGFyZSBwcmVzc2VkLCAoIGFsbG93S2V5Q29kZSA9IDEzLCBkZW55S2V5Q29kZSA9IDI3IClcclxuICBkaXNtaXNzT25LZXlQcmVzczogZmFsc2UsXHJcblxyXG4gIC8vIElmIGBkaXNtaXNzT25XaW5kb3dDbGlja2AgaXMgdHJ1ZSwgd2UgY2FuIGNsaWNrIG9uICdyZXZva2UnIGFuZCB3ZSdsbCBzdGlsbCBkaXNtaXNzIHRoZSBiYW5uZXIsIHNvIHdlIG5lZWQgZXhjZXB0aW9ucy5cclxuICAvLyBzaG91bGQgYmUgYW4gYXJyYXkgb2YgY2xhc3MgbmFtZXMgKG5vdCBDU1Mgc2VsZWN0b3JzKVxyXG4gIGlnbm9yZUNsaWNrc0Zyb206IFsnY2MtcmV2b2tlJywgJ2NjLWJ0bicsICdjYy1saW5rJ10sIC8vIGFscmVhZHkgaW5jbHVkZXMgdGhlIHJldm9rZSBidXR0b24gYW5kIHRoZSBiYW5uZXIgaXRzZWxmXHJcblxyXG4gIC8vIFRoZSBhcHBsaWNhdGlvbiBhdXRvbWF0aWNhbGx5IGRlY2lkZSB3aGV0aGVyIHRoZSBwb3B1cCBzaG91bGQgb3Blbi5cclxuICAvLyBTZXQgdGhpcyB0byBmYWxzZSB0byBwcmV2ZW50IHRoaXMgZnJvbSBoYXBwZW5pbmcgYW5kIHRvIGFsbG93IHlvdSB0byBjb250cm9sIHRoZSBiZWhhdmlvdXIgeW91cnNlbGZcclxuICBhdXRvT3BlbjogdHJ1ZSxcclxuXHJcbiAgLy8gQnkgZGVmYXVsdCB0aGUgY3JlYXRlZCBIVE1MIGlzIGF1dG9tYXRpY2FsbHkgYXBwZW5kZWQgdG8gdGhlIGNvbnRhaW5lciAod2hpY2ggZGVmYXVsdHMgdG8gPGJvZHk+KS4gWW91IGNhbiBwcmV2ZW50IHRoaXMgYmVoYXZpb3VyXHJcbiAgLy8gYnkgc2V0dGluZyB0aGlzIHRvIGZhbHNlLCBidXQgaWYgeW91IGRvLCB5b3UgbXVzdCBhdHRhY2ggdGhlIGBlbGVtZW50YCB5b3Vyc2VsZiwgd2hpY2ggaXMgYSBwdWJsaWMgcHJvcGVydHkgb2YgdGhlIHBvcHVwIGluc3RhbmNlOlxyXG4gIC8vXHJcbiAgLy8gICAgIGNvbnN0IGluc3RhbmNlID0gY29va2llY29uc2VudC5mYWN0b3J5KG9wdGlvbnMpXHJcbiAgLy8gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5zdGFuY2UuZWxlbWVudClcclxuICAvL1xyXG4gIGF1dG9BdHRhY2g6IHRydWUsXHJcblxyXG4gIC8vIHNldCB2YWx1ZSBpZiBmbG9hdGluZyBsYXlvdXQgc2hvdWxkIGJlIGZvcmNlZCBmb3IgbW9iaWxlIGRldmljZXNcclxuICBtb2JpbGVGb3JjZUZsb2F0OiB0cnVlLFxyXG5cclxuICAvLyBzaW1wbGUgd2hpdGVsaXN0L2JsYWNrbGlzdCBmb3IgcGFnZXMuIHNwZWNpZnkgcGFnZSBieTpcclxuICAvLyAgIC0gdXNpbmcgYSBzdHJpbmcgOiAnL2luZGV4Lmh0bWwnICAgICAgICAgICAobWF0Y2hlcyAnL2luZGV4Lmh0bWwnIGV4YWN0bHkpIE9SXHJcbiAgLy8gICAtIHVzaW5nIFJlZ0V4cCAgIDogL1xcL3BhZ2VfW1xcZF0rXFwuaHRtbC8gICAgKG1hdGNoZWQgJy9wYWdlXzEuaHRtbCcgYW5kICcvcGFnZV8yLmh0bWwnIGV0YylcclxuICB3aGl0ZWxpc3RQYWdlOiBbXSxcclxuICBibGFja2xpc3RQYWdlOiBbXSxcclxuXHJcbiAgLy8gSWYgdGhpcyBpcyBkZWZpbmVkLCB0aGVuIGl0IGlzIHVzZWQgYXMgdGhlIGlubmVyIGh0bWwgaW5zdGVhZCBvZiBsYXlvdXQuIFRoaXMgYWxsb3dzIGZvciB1bHRpbWF0ZSBjdXN0b21pc2F0aW9uLlxyXG4gIC8vIEJlIHN1cmUgdG8gdXNlIHRoZSBjbGFzc2VzIGBjYy1idG5gIGFuZCBgY2MtQUxMT1dgLCBgY2MtREVOWWAgb3IgYGNjLURJU01JU1NgLiBUaGV5IGVuYWJsZSB0aGUgYXBwIHRvIHJlZ2lzdGVyIGNsaWNrXHJcbiAgLy8gaGFuZGxlcnMuIFlvdSBjYW4gdXNlIG90aGVyIHByZS1leGlzdGluZyBjbGFzc2VzIHRvby4gU2VlIGBzcmMvc3R5bGVzYCBmb2xkZXIuXHJcbiAgb3ZlcnJpZGVIVE1MOiBudWxsXHJcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2NyaXB0ID0gKCB1cmwsIGNhbGxiYWNrLCB0aW1lb3V0ICkgPT4ge1xyXG4gIGxldCB0aW1lb3V0SWR4XHJcbiAgY29uc3Qgc2NyaXB0VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcclxuXHJcbiAgc2NyaXB0VGFnLnR5cGUgPSAndGV4dC8nICsgKHVybC50eXBlIHx8ICdqYXZhc2NyaXB0JylcclxuICBzY3JpcHRUYWcuc3JjID0gdXJsLnNyYyB8fCB1cmxcclxuICBzY3JpcHRUYWcuYXN5bmMgPSBmYWxzZVxyXG5cclxuICBzY3JpcHRUYWcub25yZWFkeXN0YXRlY2hhbmdlID0gcy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIHRoaXMgY29kZSBoYW5kbGVzIHR3byBzY2VuYXJpb3MsIHdoZXRoZXIgY2FsbGVkIGJ5IG9ubG9hZCBvciBvbnJlYWR5c3RhdGVjaGFuZ2VcclxuICAgIGNvbnN0IHN0YXRlID0gc2NyaXB0VGFnLnJlYWR5U3RhdGVcclxuXHJcbiAgICBjbGVhclRpbWVvdXQodGltZW91dElkeClcclxuXHJcbiAgICBpZiAoIWNhbGxiYWNrLmRvbmUgJiYgKCFzdGF0ZSB8fCAvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KHN0YXRlKSkpIHtcclxuICAgICAgY2FsbGJhY2suZG9uZSA9IHRydWVcclxuICAgICAgY2FsbGJhY2soKVxyXG4gICAgICBzY3JpcHRUYWcub25yZWFkeXN0YXRlY2hhbmdlID0gc2NyaXB0VGFnLm9ubG9hZCA9IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0VGFnKVxyXG5cclxuICAvLyBZb3UgY2FuJ3QgY2F0Y2ggSlNPTlAgRXJyb3JzLCBiZWNhdXNlIGl0J3MgaGFuZGxlZCBieSB0aGUgc2NyaXB0IHRhZ1xyXG4gIC8vIG9uZSB3YXkgaXMgdG8gdXNlIGEgdGltZW91dFxyXG4gIHRpbWVvdXRJZHggPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgY2FsbGJhY2suZG9uZSA9IHRydWVcclxuICAgIGNhbGxiYWNrKClcclxuICAgIHNjcmlwdFRhZy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBzY3JpcHRUYWcub25sb2FkID0gbnVsbFxyXG4gIH0sIHRpbWVvdXQpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlQXN5bmNSZXF1ZXN0ID0gKCB1cmwsIG9uQ29tcGxldGUsIHRpbWVvdXQsIHBvc3REYXRhLCByZXF1ZXN0SGVhZGVycyApID0+IHtcclxuICBjb25zdCB4aHIgPSBuZXcgKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCB8fCB3aW5kb3cuQWN0aXZlWE9iamVjdCkoXHJcbiAgICAnTVNYTUwyLlhNTEhUVFAuMy4wJ1xyXG4gIClcclxuXHJcbiAgeGhyLm9wZW4ocG9zdERhdGEgPyAnUE9TVCcgOiAnR0VUJywgdXJsLCAxKVxyXG5cclxuICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShyZXF1ZXN0SGVhZGVycykpIHtcclxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gcmVxdWVzdEhlYWRlcnMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgIGNvbnN0IHNwbGl0ID0gcmVxdWVzdEhlYWRlcnNbaV0uc3BsaXQoJzonLCAyKVxyXG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcclxuICAgICAgICBzcGxpdFswXS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyksXHJcbiAgICAgICAgc3BsaXRbMV0ucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb25Db21wbGV0ZSA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA+IDMpIHtcclxuICAgICAgICBvbkNvbXBsZXRlKHhocilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgeGhyLnNlbmQocG9zdERhdGEpXHJcbn0iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IG5hbWUgPT4ge1xyXG4gIHJldHVybiBDb29raWVzLmdldChuYW1lKTtcclxuICAvLyBjb25zdCB2YWx1ZSA9ICcgJyArIGRvY3VtZW50LmNvb2tpZVxyXG4gIC8vIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoJyAnICsgbmFtZSArICc9JylcclxuICAvLyByZXR1cm4gcGFydHMubGVuZ3RoIDwgMlxyXG4gIC8vICAgPyB1bmRlZmluZWRcclxuICAvLyAgIDogcGFydHNcclxuICAvLyAgICAgICAucG9wKClcclxuICAvLyAgICAgICAuc3BsaXQoJzsnKVxyXG4gIC8vICAgICAgIC5zaGlmdCgpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSBmdW5jdGlvbiAoIG5hbWUsIHZhbHVlLCBleHBpcnlEYXlzLCBkb21haW4sIHBhdGgsIHNlY3VyZSApIHtcclxuXHJcbiAgbGV0IGNvb2tpZU9wdGlvbnMgPSB7fTtcclxuXHJcbiAgaWYoZXhwaXJ5RGF5cyAhPT0gbnVsbCAmJiBleHBpcnlEYXlzICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGNvb2tpZU9wdGlvbnMuZXhwaXJlcyA9IGV4cGlyeURheXM7XHJcbiAgfVxyXG5cclxuICBpZihkb21haW4gIT09IG51bGwgJiYgZG9tYWluICE9PSB1bmRlZmluZWQpe1xyXG4gICAgY29va2llT3B0aW9ucy5kb21haW4gPSBkb21haW47XHJcbiAgfVxyXG5cclxuICBpZihwYXRoICE9PSBudWxsICYmIHBhdGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgY29va2llT3B0aW9ucy5wYXRoID0gcGF0aDtcclxuICB9XHJcblxyXG4gIGlmKHNlY3VyZSAhPT0gbnVsbCAmJiBzZWN1cmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgY29va2llT3B0aW9ucy5zZWN1cmUgPSBzZWN1cmU7XHJcbiAgfVxyXG5cclxuXHJcbiAgQ29va2llcy5zZXQobmFtZSx2YWx1ZSwgY29va2llT3B0aW9ucyk7XHJcblxyXG4gIC8vIGNvbnN0IGV4ZGF0ZSA9IG5ldyBEYXRlKClcclxuICAvLyBleGRhdGUuc2V0SG91cnMoZXhkYXRlLmdldEhvdXJzKCkgKyAoKHR5cGVvZiBleHBpcnlEYXlzICE9PSBcIm51bWJlclwiICA/IDM2NSA6IGV4cGlyeURheXMgKSAqIDI0KSlcclxuICAvLyBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz0nICsgdmFsdWUgK1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICcsZXhwaXJlcz0nICsgZXhkYXRlLnRvVVRDU3RyaW5nKCkgK1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICcscGF0aD0nICsgKHBhdGggfHwgJy8nKSArXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgKCBkb21haW4gPyAnLGRvbWFpbj0nICsgZG9tYWluIDogJycgKSArXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgKCBzZWN1cmUgPyAnLHNlY3VyZScgOiAnJyApXHJcbn0iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0IHsgZ2V0Q29udHJhc3QsIGdldEhvdmVyQ29sb3IgfSBmcm9tICcuL3N0eWxlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyYXZlcnNlRE9NUGF0aCA9ICggZWxlbSwgY2xhc3NOYW1lICkgPT5cclxuICAhZWxlbSB8fCAhZWxlbS5wYXJlbnROb2RlXHJcbiAgPyBudWxsIDogZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKVxyXG4gID8gZWxlbSA6IHRyYXZlcnNlRE9NUGF0aChlbGVtLnBhcmVudE5vZGUsIGNsYXNzTmFtZSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDdXN0b21TdHlsZXNoZWV0ID0gKGlkLCBwYWxldHRlLCBwcmVmaXgpID0+IHtcclxuICBjb25zdCBjb2xvclN0eWxlcyA9IHt9XHJcbiAgY29uc3QgeyBwb3B1cCwgYnV0dG9uLCBoaWdobGlnaHQsIHNhdmVCdXR0b24gfSA9IHBhbGV0dGVcclxuXHJcbiAgLy8gbmVlZHMgYmFja2dyb3VuZCBjb2xvdXIsIHRleHQgYW5kIGxpbmsgd2lsbCBiZSBzZXQgdG8gYmxhY2svd2hpdGUgaWYgbm90IHNwZWNpZmllZFxyXG4gIGlmIChwb3B1cCkge1xyXG4gICAgICAvLyBhc3N1bWVzIHBvcHVwLmJhY2tncm91bmQgaXMgc2V0XHJcbiAgICAgIHBvcHVwLnRleHQgPSBwb3B1cC50ZXh0ID8gcG9wdXAudGV4dCA6IGdldENvbnRyYXN0KHBvcHVwLmJhY2tncm91bmQpXHJcbiAgICAgIHBvcHVwLmxpbmsgPSBwb3B1cC5saW5rID8gcG9wdXAubGluayA6IHBvcHVwLnRleHRcclxuICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtdG9vbHRpcCwgJyArIHByZWZpeCArICcgLmNjLXRvb2x0aXA6YWZ0ZXInXSA9IFtcclxuICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHBvcHVwLmJhY2tncm91bmQsXHJcbiAgICAgIF1cclxuICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJy5jYy13aW5kb3cnXSA9IFtcclxuICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHBvcHVwLmJhY2tncm91bmQsXHJcbiAgICAgIF1cclxuICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJy5jYy1yZXZva2UnXSA9IFtcclxuICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHBvcHVwLmJhY2tncm91bmQsXHJcbiAgICAgIF1cclxuICAgICAgY29sb3JTdHlsZXNbXHJcbiAgICAgICAgICBwcmVmaXggKyAnIC5jYy1saW5rLCcgKyBwcmVmaXggKyAnIC5jYy1saW5rOmFjdGl2ZSwnICsgcHJlZml4ICsgJyAuY2MtbGluazp2aXNpdGVkJ1xyXG4gICAgICBdID0gWydjb2xvcjogJyArIHBvcHVwLmxpbmtdXHJcblxyXG4gICAgICBpZiAoYnV0dG9uKSB7XHJcbiAgICAgICAgICAvLyBhc3N1bWVzIGJ1dHRvbi5iYWNrZ3JvdW5kIGlzIHNldFxyXG4gICAgICAgICAgYnV0dG9uLnRleHQgPSBidXR0b24udGV4dCA/IGJ1dHRvbi50ZXh0IDogZ2V0Q29udHJhc3QoYnV0dG9uLmJhY2tncm91bmQpO1xyXG4gICAgICAgICAgYnV0dG9uLmJvcmRlciA9IGJ1dHRvbi5ib3JkZXIgPyBidXR0b24uYm9yZGVyIDogJ3RyYW5zcGFyZW50JztcclxuICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWJ0biddID0gW1xyXG4gICAgICAgICAgICAgICdjb2xvcjogJyArIGJ1dHRvbi50ZXh0LFxyXG4gICAgICAgICAgICAgICdib3JkZXItY29sb3I6ICcgKyBidXR0b24uYm9yZGVyLFxyXG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgYnV0dG9uLmJhY2tncm91bmQsXHJcbiAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgaWYgKGJ1dHRvbi5wYWRkaW5nKSB7XHJcbiAgICAgICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtYnRuJ10ucHVzaCgncGFkZGluZzogJyArIGJ1dHRvbi5wYWRkaW5nKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoYnV0dG9uLmJhY2tncm91bmQgIT0gJ3RyYW5zcGFyZW50Jykge1xyXG4gICAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWJ0bjpob3ZlciwgJyArIHByZWZpeCArICcgLmNjLWJ0bjpmb2N1cyddID0gW1xyXG4gICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIChidXR0b24uaG92ZXIgfHwgZ2V0SG92ZXJDb2xvcihidXR0b24uYmFja2dyb3VuZCkpLFxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoaGlnaGxpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgLy9hc3N1bWVzIGhpZ2hsaWdodC5iYWNrZ3JvdW5kIGlzIHNldFxyXG4gICAgICAgICAgICAgIGhpZ2hsaWdodC50ZXh0ID0gaGlnaGxpZ2h0LnRleHRcclxuICAgICAgICAgICAgICAgICAgPyBoaWdobGlnaHQudGV4dFxyXG4gICAgICAgICAgICAgICAgICA6IGdldENvbnRyYXN0KGhpZ2hsaWdodC5iYWNrZ3JvdW5kKTtcclxuICAgICAgICAgICAgICBoaWdobGlnaHQuYm9yZGVyID0gaGlnaGxpZ2h0LmJvcmRlciA/IGhpZ2hsaWdodC5ib3JkZXIgOiAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkJ10gPSBbXHJcbiAgICAgICAgICAgICAgICAgICdjb2xvcjogJyArIGhpZ2hsaWdodC50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAnYm9yZGVyLWNvbG9yOiAnICsgaGlnaGxpZ2h0LmJvcmRlcixcclxuICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBoaWdobGlnaHQuYmFja2dyb3VuZCxcclxuICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIHNldHMgaGlnaGxpZ2h0IHRleHQgY29sb3IgdG8gcG9wdXAgdGV4dC4gYmFja2dyb3VuZCBhbmQgYm9yZGVyIGFyZSB0cmFuc3BhcmVudCBieSBkZWZhdWx0LlxyXG4gICAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkJ10gPSBbXHJcbiAgICAgICAgICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc2F2ZUJ1dHRvbikge1xyXG4gICAgICAgICAgY29sb3JTdHlsZXNbYCR7cHJlZml4fSAuY2MtYnRuLmNjLXNhdmVgXSA9IFtcclxuICAgICAgICAgICAgICAnY29sb3I6ICcgKyBzYXZlQnV0dG9uLnRleHQsXHJcbiAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcjogJyArIHNhdmVCdXR0b24uYm9yZGVyLFxyXG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgc2F2ZUJ1dHRvbi5iYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0aGlzIHdpbGwgYmUgaW50ZXJwcmV0dGVkIGFzIENTUy4gdGhlIGtleSBpcyB0aGUgc2VsZWN0b3IsIGFuZCBlYWNoIGFycmF5IGVsZW1lbnQgaXMgYSBydWxlXHJcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXHJcbiAgc3R5bGUuaWQgPSBpZFxyXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHN0eWxlIClcclxuICBPYmplY3QuZW50cmllcyggY29sb3JTdHlsZXMgKS5mb3JFYWNoKCAoIFsgcHJvcCwgdmFsdWUgXSwgaW5kZXggKSA9PlxyXG4gICAgc3R5bGUuc2hlZXQuaW5zZXJ0UnVsZSggYCR7cHJvcH17JHt2YWx1ZS5qb2luKCc7Jyl9fWAsIGluZGV4IClcclxuICApXHJcbiAgcmV0dXJuIHN0eWxlXHJcbn0iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0ICogYXMgY29va2llIGZyb20gXCIuL2Nvb2tpZVwiXHJcbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSBjb29raWUuZ2V0Q29va2llXHJcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSBjb29raWUuc2V0Q29va2llXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGludGVycG9sYXRlU3RyaW5nID0gKCBzdHIsIGNhbGxiYWNrICkgPT5cclxuICBzdHIucmVwbGFjZSggL3t7KFthLXpdW2EtejAtOVxcLV9dKil9fS9naSAsICggbWF0Y2hlcywgcmVwbGFjZWQgKSA9PiBjYWxsYmFjayggcmVwbGFjZWQgKSB8fCAnJylcclxuXHJcbi8vIG9ubHkgdXNlZCBmb3IgdGhyb3R0bGluZyB0aGUgJ21vdXNlbW92ZScgZXZlbnQgKHVzZWQgZm9yIGFuaW1hdGluZyB0aGUgcmV2b2tlIGJ1dHRvbiB3aGVuIGBhbmltYXRlUmV2b2thYmxlYCBpcyB0cnVlKVxyXG5leHBvcnQgY29uc3QgdGhyb3R0bGUgPSAoY2FsbGJhY2ssIGxpbWl0KSA9PiB7XHJcbiAgbGV0IHdhaXQgPSBmYWxzZVxyXG4gIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgIGlmICghd2FpdCkge1xyXG4gICAgICBjYWxsYmFjayguLi5hcmd1bWVudHMpXHJcbiAgICAgIHdhaXQgPSB0cnVlXHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgd2FpdCA9IGZhbHNlXHJcbiAgICAgIH0sIGxpbWl0KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gb25seSB1c2VkIGZvciBoYXNoaW5nIGpzb24gb2JqZWN0cyAodXNlZCBmb3IgaGFzaCBtYXBwaW5nIHBhbGV0dGUgb2JqZWN0cywgdXNlZCB3aGVuIGN1c3RvbSBjb2xvdXJzIGFyZSBwYXNzZWQgdGhyb3VnaCBKYXZhU2NyaXB0KVxyXG5leHBvcnQgY29uc3QgaGFzaCA9IHN0ciA9PiB7XHJcbiAgbGV0IGhhc2hOdW0gPSAwLFxyXG4gICAgaSA9IDAsXHJcbiAgICBjaHIsXHJcbiAgICBsZW4gPSBzdHIubGVuZ3RoXHJcbiAgaWYgKHN0ci5sZW5ndGggPT09IDApIHJldHVybiBoYXNoTnVtXHJcbiAgZm9yICggaTsgaSA8IGxlbjsgKytpICkge1xyXG4gICAgY2hyID0gc3RyLmNoYXJDb2RlQXQoIGkgKVxyXG4gICAgaGFzaE51bSA9ICggaGFzaE51bSA8PCA1ICkgLSBoYXNoTnVtICsgY2hyXHJcbiAgICBoYXNoTnVtIHw9IDBcclxuICB9XHJcbiAgcmV0dXJuIGhhc2hOdW1cclxufVxyXG5pbXBvcnQgKiBhcyBzdHlsZSBmcm9tIFwiLi9zdHlsZVwiXHJcbmV4cG9ydCBjb25zdCBub3JtYWxpemVIZXggPSBzdHlsZS5ub3JtYWxpemVIZXhcclxuZXhwb3J0IGNvbnN0IGdldENvbnRyYXN0ID0gc3R5bGUuZ2V0Q29udHJhc3RcclxuZXhwb3J0IGNvbnN0IGdldEx1bWluYW5jZSA9IHN0eWxlLmdldEx1bWluYW5jZVxyXG5leHBvcnQgY29uc3QgZ2V0SG92ZXJDb2xvciA9c3R5bGUuZ2V0SG92ZXJDb2xvclxyXG5cclxuaW1wb3J0ICogYXMgZG9tIGZyb20gXCIuL2RvbVwiXHJcbmV4cG9ydCBjb25zdCB0cmF2ZXJzZURPTVBhdGggPSBkb20udHJhdmVyc2VET01QYXRoXHJcbmV4cG9ydCBjb25zdCBhZGRDdXN0b21TdHlsZXNoZWV0ID0gZG9tLmFkZEN1c3RvbVN0eWxlc2hlZXRcclxuXHJcbmltcG9ydCAqIGFzIHZhbGlkYXRpb24gZnJvbSBcIi4vdmFsaWRhdGlvblwiXHJcbmV4cG9ydCBjb25zdCBpc1ZhbGlkU3RhdHVzID0gdmFsaWRhdGlvbi5pc1ZhbGlkU3RhdHVzXHJcbmV4cG9ydCBjb25zdCBpc1BsYWluT2JqZWN0ID0gdmFsaWRhdGlvbi5pc1BsYWluT2JqZWN0XHJcbmV4cG9ydCBjb25zdCBpc01vYmlsZSA9IHZhbGlkYXRpb24uaXNNb2JpbGVcclxuXHJcbmltcG9ydCAqIGFzIGFzeW5jRm5zIGZyb20gXCIuL2FzeW5jXCJcclxuZXhwb3J0IGNvbnN0IGdldFNjcmlwdCA9IGFzeW5jRm5zLmdldFNjcmlwdFxyXG5leHBvcnQgY29uc3QgbWFrZUFzeW5jUmVxdWVzdCA9IGFzeW5jRm5zLm1ha2VBc3luY1JlcXVlc3RcclxuXHJcbmNvbnN0IGxvb3BQcm9wZXJ0aWVzID0gb3ZlcndyaXRlcyA9PiAob2JqLCBba2V5LCB2YWx1ZV0pID0+IHtcclxuICBpZiAoIHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmICEodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkgKSB7XHJcbiAgICBpZiAoIG92ZXJ3cml0ZXNbIGtleSBdIGluc3RhbmNlb2YgT2JqZWN0ICYmICEob3ZlcndyaXRlc1sga2V5IF0gaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgb2JqWyBrZXkgXSA9IE9iamVjdC5lbnRyaWVzKHZhbHVlKS5yZWR1Y2UobG9vcFByb3BlcnRpZXMob3ZlcndyaXRlc1trZXldKSwge30pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvYmpbIGtleSBdID0gdmFsdWVcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKCBvdmVyd3JpdGVzLmhhc093blByb3BlcnR5KCBrZXkgKSApIHtcclxuICAgICAgb2JqWyBrZXkgXSA9IG92ZXJ3cml0ZXNbIGtleSBdXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIG9ialsga2V5IF0gPSB2YWx1ZSBcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG9ialxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWVyZ2VPcHRpb25zID0gKCBkZWZhdWx0cywgb3ZlcndyaXRlcyApID0+XHJcbiAgT2JqZWN0LmVudHJpZXMoZGVmYXVsdHMpLnJlZHVjZShsb29wUHJvcGVydGllcyhvdmVyd3JpdGVzKSwge30pXHJcbiIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplSGV4ID0gaGV4ID0+XHJcbiAgaGV4WzBdID09ICcjJ1xyXG4gICAgPyBoZXguc3Vic3RyKDEpIDogaGV4Lmxlbmd0aCA9PSAzXHJcbiAgICA/IGhleFswXSArIGhleFswXSArIGhleFsxXSArIGhleFsxXSArIGhleFsyXSArIGhleFsyXSA6IGhleFxyXG5cclxuLy8gdXNlZCB0byBnZXQgdGV4dCBjb2xvcnMgaWYgbm90IHNldFxyXG5leHBvcnQgY29uc3QgZ2V0Q29udHJhc3QgPSBoZXggPT4ge1xyXG4gIGhleCA9IG5vcm1hbGl6ZUhleChoZXgpXHJcbiAgY29uc3QgciA9IHBhcnNlSW50KGhleC5zdWJzdHIoMCwgMiksIDE2KVxyXG4gIGNvbnN0IGcgPSBwYXJzZUludChoZXguc3Vic3RyKDIsIDIpLCAxNilcclxuICBjb25zdCBiID0gcGFyc2VJbnQoaGV4LnN1YnN0cig0LCAyKSwgMTYpXHJcbiAgY29uc3QgeWlxID0gKHIgKiAyOTkgKyBnICogNTg3ICsgYiAqIDExNCkgLyAxMDAwXHJcbiAgcmV0dXJuIHlpcSA+PSAxMjggPyAnIzAwMCcgOiAnI2ZmZidcclxufVxyXG5cclxuLy8gdXNlZCB0byBjaGFuZ2UgY29sb3Igb24gaGlnaGxpZ2h0XHJcbmV4cG9ydCBjb25zdCBnZXRMdW1pbmFuY2UgPSBoZXggPT4ge1xyXG4gIGNvbnN0IG51bSA9IHBhcnNlSW50KG5vcm1hbGl6ZUhleChoZXgpLCAxNiksXHJcbiAgICBhbXQgPSAzOCxcclxuICAgIFIgPSAobnVtID4+IDE2KSArIGFtdCxcclxuICAgIEIgPSAoKG51bSA+PiA4KSAmIDB4MDBmZikgKyBhbXQsXHJcbiAgICBHID0gKG51bSAmIDB4MDAwMGZmKSArIGFtdFxyXG4gICAgcmV0dXJuICcjJyArIChcclxuICAgIDB4MTAwMDAwMCArXHJcbiAgICAoUiA8IDI1NSA/IChSIDwgMSA/IDAgOiBSKSA6IDI1NSkgKiAweDEwMDAwICtcclxuICAgIChCIDwgMjU1ID8gKEIgPCAxID8gMCA6IEIpIDogMjU1KSAqIDB4MTAwICtcclxuICAgIChHIDwgMjU1ID8gKEcgPCAxID8gMCA6IEcpIDogMjU1KVxyXG4gIClcclxuICAgIC50b1N0cmluZygxNilcclxuICAgIC5zbGljZSgxKVxyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRIb3ZlckNvbG9yID0gaGV4ID0+IHtcclxuICBoZXggPSBub3JtYWxpemVIZXgoIGhleCApXHJcbiAgLy8gZm9yIGJsYWNrIGJ1dHRvbnNcclxuICByZXR1cm4gaGV4ID09PSAnMDAwMDAwJyA/ICcjMjIyJyA6IGdldEx1bWluYW5jZSggaGV4IClcclxufSIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5pbXBvcnQgeyBzdGF0dXNlcyB9IGZyb20gXCIuLi9jb25zdGFudHNcIlxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiBhIHN0YXR1cyBpcyBpbiB0aGUgY29uc3RhbnRzIGxpc3RcclxuICogQHBhcmFtIHsgc3RyaW5nIH0gc3RhdHVzIC0gU3RhdHVzIFN0cmluZyB0b1xyXG4gKiBAcmV0dXJuIHsgYm9vbGVhbiB9IC0gaWYgc3RhdHVzIGlzIHZhbGlkXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNWYWxpZFN0YXR1cyA9IHN0YXR1cyA9PiBzdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPj0gMFxyXG5cclxuZXhwb3J0IGNvbnN0IGlzTW9iaWxlID0gKCkgPT5cclxuICAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoIG5hdmlnYXRvci51c2VyQWdlbnQgKVxyXG5cclxuLy8gVGhlIGNvZGUgXCJ0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGxcIiBhbGxvd3MgQXJyYXkgb2JqZWN0c1xyXG5leHBvcnQgY29uc3QgaXNQbGFpbk9iamVjdCA9IG9iaiA9PiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yID09IE9iamVjdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9