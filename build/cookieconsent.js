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
    }).filter(obj => obj ? obj[Object.keys(obj)[0]] : false); // if they have already answered we still want it to create the popup anyways to display cookie info

    if (this.options.legal && this.options.legal.countryCode) {
      this.initializationComplete({
        code: this.options.legal.countryCode
      }, answers);
    } else if (this.options.location) {
      new _Location__WEBPACK_IMPORTED_MODULE_2__["default"](this.options.location).locate(this.initializationComplete.bind(this, {}, answers), this.initializationError.bind(this));
    } else {
      this.initializationComplete({}, answers);
    }
  }

  initializationComplete(result, answers) {
    if (result.code) {
      this.options = new _Legal__WEBPACK_IMPORTED_MODULE_1__["default"](this.options.legal).applyLaw(this.options, result.code);
    }

    this.popup = new _Popup__WEBPACK_IMPORTED_MODULE_3__["default"](this.options);
    if (answers.length == 0) setTimeout(() => this.emit("initialized", this.popup), 0);else {
      setTimeout(() => this.emit("initialized", answers));
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanMtY29va2llL3NyYy9qcy5jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9Db29raWVDb25zZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvTGVnYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9Mb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9vcHRpb25zL2xlZ2FsLmpzIiwid2VicGFjazovLy8uL3NyYy9vcHRpb25zL2xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9vcHRpb25zL3BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzNkNDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2FzeW5jLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92YWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbInN0YXR1c2VzIiwic3RhdHVzRGVueSIsInN0YXR1c0FsbG93Iiwic3RhdHVzRGlzbWlzcyIsImNhdGVnb3JpZXMiLCJleHBvcnRzIiwibW9kdWxlIiwiQ29va2llQ29uc2VudCIsIndpbmRvdyIsImVtaXR0ZXIiLCJFdmVudEVtaXR0ZXIiLCJCYXNlIiwiY29uc3RydWN0b3IiLCJkZWZhdWx0T3B0aW9ucyIsIm9wdGlvbnMiLCJtZXJnZU9wdGlvbnMiLCJvbiIsImJpbmQiLCJlbWl0IiwiYW5zd2VycyIsIm1hcCIsImNhdGVnb3J5IiwiY29va2llTmFtZSIsImNvb2tpZSIsIm5hbWUiLCJhbnN3ZXIiLCJnZXRDb29raWUiLCJpc1ZhbGlkU3RhdHVzIiwidW5kZWZpbmVkIiwiZmlsdGVyIiwib2JqIiwiT2JqZWN0Iiwia2V5cyIsImxlZ2FsIiwiY291bnRyeUNvZGUiLCJpbml0aWFsaXphdGlvbkNvbXBsZXRlIiwiY29kZSIsImxvY2F0aW9uIiwiTG9jYXRpb24iLCJsb2NhdGUiLCJpbml0aWFsaXphdGlvbkVycm9yIiwicmVzdWx0IiwiTGVnYWwiLCJhcHBseUxhdyIsInBvcHVwIiwiUG9wdXAiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJnZXRDb3VudHJ5TGF3cyIsImdldCIsImlzT3BlbiIsImNsb3NlIiwicmV2b2tlQ2hvaWNlIiwib3BlbiIsInRvZ2dsZVJldm9rZUJ1dHRvbiIsImJvb2wiLCJzZXRTdGF0dXNlcyIsInN0YXR1cyIsImNsZWFyU3RhdHVzZXMiLCJkZXN0cm95IiwicmVkdWNlIiwiZGVmaW5lUHJvcGVydHkiLCJzZXQiLCJlbnVtZXJhYmxlIiwid3JpdGVhYmxlIiwiY29uZmlndXJhYmxlIiwiaGFzTGF3IiwiaW5kZXhPZiIsInJldm9rYWJsZSIsImV4cGxpY2l0QWN0aW9uIiwiY291bnRyeSIsImVuYWJsZWQiLCJyZWdpb25hbExhdyIsImRpc21pc3NPblNjcm9sbCIsImRpc21pc3NPblRpbWVvdXQiLCJjdXJyZW50U2VydmljZUluZGV4IiwiZ2V0TmV4dFNlcnZpY2UiLCJzZXJ2aWNlIiwiZ2V0U2VydmljZUJ5SWR4Iiwic2VydmljZXMiLCJpZHgiLCJzZXJ2aWNlT3B0aW9uIiwiZHluYW1pY09wdHMiLCJhc3NpZ24iLCJzZXJ2aWNlRGVmaW5pdGlvbnMiLCJpc1BsYWluT2JqZWN0IiwiY29tcGxldGUiLCJFcnJvciIsImNhbGxiYWNrQ29tcGxldGUiLCJjYWxsYmFja0Vycm9yIiwicnVuU2VydmljZSIsInJ1bk5leHRTZXJ2aWNlT25FcnJvciIsInNldHVwVXJsIiwic2VydmljZU9wdHMiLCJnZXRDdXJyZW50U2VydmljZU9wdHMiLCJ1cmwiLCJyZXBsYWNlIiwiXyIsInBhcmFtIiwidGVtcE5hbWUiLCJEYXRlIiwibm93IiwicmVzIiwiX19KU09OUF9EQVRBIiwiSlNPTiIsInN0cmluZ2lmeSIsImludGVycG9sYXRlVXJsIiwiY2FsbGJhY2siLCJyZXF1ZXN0RnVuY3Rpb24iLCJpc1NjcmlwdCIsImdldFNjcmlwdCIsIm1ha2VBc3luY1JlcXVlc3QiLCJ4aHIiLCJyZXNwb25zZVRleHQiLCJydW5TZXJ2aWNlQ2FsbGJhY2siLCJjYWxsIiwidGltZW91dCIsImRhdGEiLCJoZWFkZXJzIiwic2VydmljZVJlc3VsdEhhbmRsZXIiLCJhc3luY1Jlc3VsdCIsIm9uU2VydmljZVJlc3VsdCIsImVyciIsImxvZ0Vycm9yIiwibmV4dFNlcnZpY2UiLCJjb21wbGV0ZVNlcnZpY2UiLCJ2YWwiLCJmbiIsImNvbnNvbGUiLCJ3YXJuIiwidXNlckNhdGVnb3JpZXMiLCJVTkNBVEVHT1JJWkVEIiwiRVNTRU5USUFMIiwiUEVSU09OQUxJWkFUSU9OIiwiQU5BTFlUSUNTIiwiTUFSS0VUSU5HIiwiY3VzdG9tU3R5bGVzIiwiaGFzVHJhbnNpdGlvbiIsImVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHJhbnMiLCJ0IiwiT1QiLCJtc1QiLCJNb3pUIiwiV2Via2l0VCIsInByZWZpeCIsImhhc093blByb3BlcnR5Iiwic3R5bGUiLCJjYW5Vc2VDb29raWVzIiwiYmxhY2tsaXN0UGFnZSIsImluY2x1ZGVzIiwicGF0aG5hbWUiLCJ3aGl0ZWxpc3RQYWdlIiwiY29va2llUG9wdXAiLCJnZXRQb3B1cENsYXNzZXMiLCJqb2luIiwiZ2V0UG9wdXBJbm5lck1hcmt1cCIsImN1c3RvbUhUTUwiLCJvdmVycmlkZUhUTUwiLCJzdGF0aWMiLCJ3cmFwcGVyIiwiYXBwZW5kTWFya3VwIiwiZGlzcGxheSIsImVsZW1lbnQiLCJmaXJzdENoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwbHlBdXRvRGlzbWlzcyIsImFwcGx5UmV2b2tlQnV0dG9uIiwiYXV0b09wZW4iLCJmYWRlSW4iLCJzaG93UmV2b2tlIiwiZmFkZU91dCIsImFmdGVyVHJhbnNpdGlvbiIsImFmdGVyRmFkZU91dCIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsIm1heEhlaWdodCIsImNsaWVudEhlaWdodCIsImZhZGVJblRpbWVvdXQiLCJvcGVuaW5nVGltZW91dCIsImFmdGVyRmFkZUluIiwicmVtb3ZlIiwiY2xlYXJUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRyYW5zaXRpb25FbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2hvdyIsInJldm9rZUJ0biIsInByZXZlbnRPcGVuIiwiaGFzQW5zd2VyZWQiLCJnZXRTdGF0dXNlcyIsInNvbWUiLCJoYXNDb25zZW50ZWQiLCJleHBpcnlEYXlzIiwiZG9tYWluIiwicGF0aCIsInNlY3VyZSIsInVwZGF0ZUNhdGVnb3J5U3RhdHVzIiwiY2F0ZWdvcnlOYW1lIiwiY2hvc2VuQmVmb3JlIiwic2V0Q29va2llIiwiYXJndW1lbnRzIiwiZm9yRWFjaCIsImNhdGVnb3J5U3RhdHVzIiwiaW5kZXgiLCJuYXZpZ2F0b3IiLCJjb29raWVFbmFibGVkIiwiQ29va2llc09LIiwic3RhdHVzZXNWYWx1ZXMiLCJtYXRjaGVzIiwiaGFzTWF0Y2hlcyIsIm1hdGNoIiwiZ2V0UG9zaXRpb25DbGFzc2VzIiwicG9zaXRpb24iLCJzcGxpdCIsInBvcyIsIm9wdHMiLCJwb3NpdGlvblN0eWxlIiwiaXNNb2JpbGUiLCJtb2JpbGVGb3JjZUZsb2F0IiwiY2xhc3NlcyIsInR5cGUiLCJ0aGVtZSIsInB1c2giLCJhcHBseSIsImF0dGFjaEN1c3RvbVBhbGV0dGUiLCJwYWxldHRlIiwiY3VzdG9tU3R5bGVTZWxlY3RvciIsImludGVycG9sYXRlZCIsInNob3dMaW5rIiwiZWxlbWVudHMiLCJsaW5rIiwibWVzc2FnZWxpbmsiLCJtZXNzYWdlIiwicHJvcCIsImludGVycG9sYXRlU3RyaW5nIiwic3RyIiwiY29udGVudCIsImNvbXBsaWFuY2VUeXBlIiwiY29tcGxpYW5jZSIsImluZm8iLCJsYXlvdXQiLCJsYXlvdXRzIiwiYmFzaWMiLCJtYXJrdXAiLCJkaXYiLCJjb250IiwiY29udGFpbmVyIiwibm9kZVR5cGUiLCJib2R5IiwiaW5uZXJIVE1MIiwiY2hpbGRyZW4iLCJldmVudCIsImhhbmRsZUJ1dHRvbkNsaWNrIiwicXVlcnlTZWxlY3RvckFsbCIsImNoZWNrYm94IiwiY2hlY2tlZCIsInN0b3BQcm9wYWdhdGlvbiIsInNob3dJbmZvIiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJwcmV2ZW50RGVmYXVsdCIsImF1dG9BdHRhY2giLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsImJ0biIsInRyYXZlcnNlRE9NUGF0aCIsInRhcmdldCIsImNsYXNzTmFtZSIsIlJlZ0V4cCIsImhhc2hTdHIiLCJoYXNoIiwic2VsZWN0b3IiLCJpc1ZhbGlkIiwiYWRkQ3VzdG9tU3R5bGVzaGVldCIsImdldEV2ZW50UGF0aCIsImNvbXBvc2VkUGF0aCIsImFyciIsImRlbGF5Iiwic2Nyb2xsUmFuZ2UiLCJkaXNtaXNzT25MaW5rQ2xpY2siLCJkaXNtaXNzT25XaW5kb3dDbGljayIsImRpc21pc3NPbktleVByZXNzIiwiZGlzbWlzc1RpbWVvdXQiLCJNYXRoIiwiZmxvb3IiLCJvbldpbmRvd1Njcm9sbCIsInBhZ2VZT2Zmc2V0IiwicGFzc2l2ZSIsIm9uV2luZG93Q2xpY2siLCJldnQiLCJpZ25vcmVDbGlja3NGcm9tIiwiaWdub3JlZENsaWNrIiwib25MaW5rQ2xpY2siLCJlbGVtIiwidGFnTmFtZSIsIm9uS2V5UHJlc3MiLCJrZXlDb2RlIiwiYW5pbWF0ZVJldm9rYWJsZSIsImxvZyIsInBvbGljeSIsIm9uTW91c2VNb3ZlIiwidGhyb3R0bGUiLCJhY3RpdmUiLCJtaW5ZIiwibWF4WSIsImlubmVySGVpZ2h0IiwiY2xpZW50WSIsInRvRXJyb3IiLCJpcGluZm8iLCJkb25lIiwicmVzcG9uc2UiLCJqc29uIiwicGFyc2UiLCJpcGluZm9kYiIsInN0YXR1c0NvZGUiLCJzdGF0dXNNZXNzYWdlIiwibWF4bWluZCIsImdlb2lwMiIsImlzb19jb2RlIiwiaGVhZGVyIiwiZGlzbWlzcyIsImFsbG93IiwiZGVueSIsImhyZWYiLCJ0b0xvd2VyQ2FzZSIsInNhdmUiLCJtb2RhbCIsInRpbWVvdXRJZHgiLCJzY3JpcHRUYWciLCJzcmMiLCJhc3luYyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInMiLCJvbmxvYWQiLCJzdGF0ZSIsInJlYWR5U3RhdGUiLCJ0ZXN0Iiwib25Db21wbGV0ZSIsInBvc3REYXRhIiwicmVxdWVzdEhlYWRlcnMiLCJYTUxIdHRwUmVxdWVzdCIsIkFjdGl2ZVhPYmplY3QiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImwiLCJzZW5kIiwiQ29va2llcyIsInZhbHVlIiwiY29va2llT3B0aW9ucyIsImV4cGlyZXMiLCJpZCIsImNvbG9yU3R5bGVzIiwiYnV0dG9uIiwiaGlnaGxpZ2h0Iiwic2F2ZUJ1dHRvbiIsInRleHQiLCJnZXRDb250cmFzdCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJwYWRkaW5nIiwiaG92ZXIiLCJnZXRIb3ZlckNvbG9yIiwiaGVhZCIsImVudHJpZXMiLCJzaGVldCIsImluc2VydFJ1bGUiLCJyZXBsYWNlZCIsImxpbWl0Iiwid2FpdCIsImhhc2hOdW0iLCJjaHIiLCJsZW4iLCJjaGFyQ29kZUF0Iiwibm9ybWFsaXplSGV4IiwiZ2V0THVtaW5hbmNlIiwiZG9tIiwidmFsaWRhdGlvbiIsImFzeW5jRm5zIiwibG9vcFByb3BlcnRpZXMiLCJvdmVyd3JpdGVzIiwia2V5IiwiZGVmYXVsdHMiLCJoZXgiLCJzdWJzdHIiLCJyIiwicGFyc2VJbnQiLCJnIiwiYiIsInlpcSIsIm51bSIsImFtdCIsIlIiLCJCIiwiRyIsInRvU3RyaW5nIiwic2xpY2UiLCJ1c2VyQWdlbnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSwyQkFBMkIsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsZUFBZSxlQUFlLHdDQUF3QyxxQ0FBcUMsb0NBQW9DLG1DQUFtQyxnQ0FBZ0MsRUFBRSw2QkFBNkIsZUFBZSxF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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5QkFBeUI7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUVBOzs7Ozs7QUFLTyxNQUFNMVcsYUFBYSxHQUFHK0IsTUFBTSxJQUFJMUQsbURBQVEsQ0FBQ29FLE9BQVQsQ0FBaUJWLE1BQWpCLEtBQTRCLENBQTVEO0FBRUEsTUFBTW9LLFFBQVEsR0FBRyxNQUN0QixpRUFBaUV1SCxJQUFqRSxDQUF1RXBJLFNBQVMsQ0FBQ2tNLFNBQWpGLENBREssQyxDQUdQOztBQUNPLE1BQU03VCxhQUFhLEdBQUd4RCxHQUFHLElBQUksT0FBT0EsR0FBUCxLQUFlLFFBQWYsSUFBMkJBLEdBQUcsS0FBSyxJQUFuQyxJQUEyQ0EsR0FBRyxDQUFDbEIsV0FBSixJQUFtQm1CLE1BQTNGLEMiLCJmaWxlIjoiY29va2llY29uc2VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2Mtd2luZG93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTsgfVxcblxcbi5jYy13aW5kb3cuY2MtaW52aXNpYmxlIHtcXG4gIG9wYWNpdHk6IDA7IH1cXG5cXG4vKiBvbmx5IGFuaW1hdGUgaWZoYXMgY2xhc3MgJ2NjLWFuaW1hdGUnICovXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy10b3Age1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWJvdHRvbSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMmVtKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1hY3RpdmUuY2MtdG9wIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1hY3RpdmUuY2MtYm90dG9tIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1yZXZva2U6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuXFxuLmNjLWdyb3dlciB7XFxuICAvKiBJbml0aWFsbHkgd2UgZG9uJ3Qgd2FudCBhbnkgaGVpZ2h0LCBhbmQgd2Ugd2FudCB0aGUgY29udGVudHMgdG8gYmUgaGlkZGVuICovXFxuICBtYXgtaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC8qIFNldCBvdXIgdHJhbnNpdGlvbnMgdXAuICovXFxuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtbXMtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1vLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzOyB9XFxuXFxuLyogdGhlIHBvcHVwIHdpbmRvdyAqL1xcbi5jYy13aW5kb3csXFxuLmNjLXJldm9rZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGV4Y2x1ZGUgcGFkZGluZyB3aGVuIGRlYWxpbmcgd2l0aCB3aWR0aCAqL1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQ2FsaWJyaSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICAvKiBieSBzZXR0aW5nIHRoZSBiYXNlIGZvbnQgaGVyZSwgd2UgY2FuIHNpemUgdGhlIHJlc3Qgb2YgdGhlIHBvcHVwIHVzaW5nIENTUyBgZW1gICovXFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICAvKiB0aGUgZm9sbG93aW5nIGFyZSByYW5kb20gdW5qdXN0aWZpZWQgc3R5bGVzIC0ganVzdCBiZWNhdXNlIC0gc2hvdWxkIHByb2JhYmx5IGJlIHJlbW92ZWQgKi9cXG4gIHotaW5kZXg6IDk5OTg7IH1cXG5cXG4uY2MtcmV2b2tlIHtcXG4gIHotaW5kZXg6IDk5OTk7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXN0YXRpYyB7XFxuICBwb3NpdGlvbjogc3RhdGljOyB9XFxuXFxuLyogMiBiYXNpYyB0eXBlcyBvZiB3aW5kb3cgLSBmbG9hdGluZyAvIGJhbm5lciAqL1xcbi5jYy13aW5kb3cuY2MtZmxvYXRpbmcge1xcbiAgcGFkZGluZzogMmVtO1xcbiAgbWF4LXdpZHRoOiAyNGVtO1xcbiAgLyogMWVtID09IDE2cHggdGhlcmVmb3JlIDI0ZW0gPT0gMzg0cHggKi9cXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICBwYWRkaW5nOiAxZW0gMS44ZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4uY2MtcmV2b2tlIHtcXG4gIHBhZGRpbmc6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4vKiBjbGlja2FibGUgdGhpbmdzICovXFxuLmNjLWJ0bixcXG4uY2MtbGluayxcXG4uY2MtY2xvc2UsXFxuLmNjLXJldm9rZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uY2MtbGluayB7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmNjLWxpbms6aG92ZXIge1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi5jYy1saW5rOmFjdGl2ZSxcXG4uY2MtbGluazp2aXNpdGVkIHtcXG4gIGNvbG9yOiBpbml0aWFsOyB9XFxuXFxuLmNjLWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuNGVtIDAuOGVtO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcblxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4uY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQ6aG92ZXIsXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cXG4uY2MtY2xvc2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAuNWVtO1xcbiAgcmlnaHQ6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIC8qIHNlZWluZyBhcyB0aGlzIGNvbnRhaW5zIHRleHQgYW5kIG5vdCBhbiBpbWFnZSwgdGhlIGVsZW1lbnQgdGFsbGVyIHRoYW4gaXQgaXMgd2lkZSAoYmVjYXVzZSBpdCBpcyB0ZXh0KSAqL1xcbiAgLyogIC0gd2Ugd2FudCBpdCB0byBiZSBhIHNxdWFyZSwgYmVjYXVzZSBpdCdzIGFjdGluZyBhcyBhbiBpY29uICovXFxuICAvKiAgLSBzZXR0aW5nIHRoZSBsaW5lIGhlaWdodCBub3JtYWxpemVzIHRoZSBoZWlnaHQgKi9cXG4gIGxpbmUtaGVpZ2h0OiAwLjc1OyB9XFxuXFxuLmNjLWNsb3NlOmhvdmVyLFxcbi5jYy1jbG9zZTpmb2N1cyB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLyogVGhpcyBmaWxlIHNob3VsZCBjb250YWluIHN0eWxlcyB0aGF0IG1vZGlmaWVzIHRoZSBwb3B1cCBsYXlvdXQuICovXFxuLyogQnkgbGF5b3V0LCB3ZSBtZWFuIHRoZSBwaHlzaWNhbCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudHMgb24gdGhlIHBvcHVwIHdpbmRvdywgYW5kIHRoZSBtYXJnaW4gLyBwYWRkaW5nIGFyb3VuZCB0aG9zZSBlbGVtZW50cy4gKi9cXG4uY2MtcmV2b2tlLmNjLXRvcCB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAzZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVlbTsgfVxcblxcbi5jYy1yZXZva2UuY2MtYm90dG9tIHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDNlbTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNWVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZS5jYy1sZWZ0IHtcXG4gIGxlZnQ6IDNlbTtcXG4gIHJpZ2h0OiB1bnNldDsgfVxcblxcbi5jYy1yZXZva2UuY2MtcmlnaHQge1xcbiAgcmlnaHQ6IDNlbTtcXG4gIGxlZnQ6IHVuc2V0OyB9XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogRkxPQVRJTkcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB0aGVzZSBjbGFzc2VzIHBvc2l0aW9uIHRoZSBmbG9hdGluZyBlbGVtZW50ICovXFxuLmNjLXRvcCB7XFxuICB0b3A6IDFlbTsgfVxcblxcbi5jYy1sZWZ0IHtcXG4gIGxlZnQ6IDFlbTsgfVxcblxcbi5jYy1yaWdodCB7XFxuICByaWdodDogMWVtOyB9XFxuXFxuLmNjLWJvdHRvbSB7XFxuICBib3R0b206IDFlbTsgfVxcblxcbi8qIGxpbmtzIHRoYXQgYXJlIGRpcmVjdCBkZWNlbmRhbnRzIHNob3VsZCBiZSBkaXNwbGF5ZWQgYXMgYmxvY2sgKi9cXG4uY2MtZmxvYXRpbmcgPiAuY2MtbGluayB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG5cXG4uY2MtZmxvYXRpbmcgLmNjLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG5cXG4uY2Mtd2luZG93LmNjLWZsb2F0aW5nIC5jYy1jb21wbGlhbmNlIHtcXG4gIGZsZXg6IDEgMCBhdXRvOyB9XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQkFOTkVSICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5jYy1iYW5uZXIuY2MtdG9wIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDsgfVxcblxcbi5jYy1iYW5uZXIuY2MtYm90dG9tIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDsgfVxcblxcbi5jYy1iYW5uZXIgLmNjLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMWVtOyB9XFxuXFxuLyogQ09NUExJQU5DRSBCT1ggKi9cXG4uY2MtY29tcGxpYW5jZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5jYy1mbG9hdGluZyAuY2MtY29tcGxpYW5jZSA+IC5jYy1idG4ge1xcbiAgZmxleDogMTsgfVxcblxcbi5jYy1idG4gKyAuY2MtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTsgfVxcblxcbi8qIENhdGVnb3JpZXMgTGF5b3V0ICovXFxuLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5mb3JtIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1idG4ge1xcbiAgICBtYXJnaW46IDA7IH1cXG4gICAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1zYXZlIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLmNjLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yeSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIDJweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgICBoZWlnaHQ6IDI2cHg7XFxuICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAyMnB4KTtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDJweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0bjpub3QoLmNjLWluZm8pOm5vdCguY2Mtc2F2ZSkge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMjZweDsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWluZm8ge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGZvbnQtdmFyaWFudDogYWxsLXNtYWxsLWNhcHM7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWluZm86Zm9jdXMgKyAuY2MtdG9vbHRpcCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICB3aWR0aDogMTkwcHg7XFxuICAgIGJvdHRvbTogNDZweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXI6IHRoaW4gc29saWQgbGlnaHRncmV5O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuNyk7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXA6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgIHdpZHRoOiAxMHB4O1xcbiAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogLTdweDtcXG4gICAgICBsZWZ0OiAxMHB4O1xcbiAgICAgIGJveC1zaGFkb3c6IDJweCAxcHggMXB4IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC41KTsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCBwIHtcXG4gICAgICBtYXJnaW46IDA7IH1cXG5cXG5AbWVkaWEgcHJpbnQge1xcbiAgLmNjLXdpbmRvdyxcXG4gIC5jYy1yZXZva2Uge1xcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmNjLWJ0biB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IH0gfVxcblxcbi8qIGRpbWVuc2lvbnMgZm9yICdpUGhvbmU2IFBsdXMnIGFuZCBsb3dlciAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcbiAgLmNjLXdpbmRvdy5jYy10b3Age1xcbiAgICB0b3A6IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYm90dG9tIHtcXG4gICAgYm90dG9tOiAwOyB9XFxuICAuY2Mtd2luZG93LmNjLWJhbm5lciwgLmNjLXdpbmRvdy5jYy1mbG9hdGluZywgLmNjLXdpbmRvdy5jYy1yaWdodCwgLmNjLXdpbmRvdy5jYy1sZWZ0IHtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHVuc2V0OyB9XFxuICAgIC5jYy13aW5kb3cuY2MtYmFubmVyIC5jYy1jb21wbGlhbmNlIHtcXG4gICAgICBmbGV4OiAxIDEgYXV0bzsgfVxcbiAgICAuY2Mtd2luZG93LmNjLWJhbm5lciAuY2MtbWVzc2FnZSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcbiAgLmNjLXdpbmRvdy5jYy1mbG9hdGluZyB7XFxuICAgIG1heC13aWR0aDogbm9uZTsgfVxcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuY2Mtd2luZG93IC5jYy1tZXNzYWdlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuICAuY2Mtd2luZG93IC5jYy1jYXRlZ29yaWVzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1yaWdodDogOHB4OyB9XFxuICAuY2Mtd2luZG93IC5jYy1jYXRlZ29yeSB7XFxuICAgIG1hcmdpbjogNHB4IDA7IH1cXG4gICAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bjpub3QoLmNjLWluZm8pIHtcXG4gICAgICB3aWR0aDogY2FsYyggMTAwJSAtIDE2cHgpO1xcbiAgICAgIG1pbi13aWR0aDogMTQwcHg7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1NHB4KSB7XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtYnRuLmNjLXNhdmUge1xcbiAgICBtYXJnaW46IDhweCAwOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTBweCkge1xcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcnkge1xcbiAgICBtYXJnaW46IDRweCAwOyB9XFxuICAuZm9ybSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDM1MHB4OyB9XFxuICAuY2MtYnRuOm5vdCguY2MtaW5mbyk6bm90KC5jYy1zYXZlKSB7XFxuICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMTZweCk7IH0gfVxcblxcbi8qIENsYXNzaWMgKi9cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtY2xhc3NpYyB7XFxuICBwYWRkaW5nOiAxLjJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10eXBlLWluZm8uY2MtdGhlbWUtY2xhc3NpYyAuY2MtY29tcGxpYW5jZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmbGV4OiBub25lOyB9XFxuXFxuLmNjLXRoZW1lLWNsYXNzaWMge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1idG4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuOmxhc3QtY2hpbGQge1xcbiAgICAgIG1pbi13aWR0aDogMTQwcHg7IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogLTFweDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDI2cHg7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgei1pbmRleDogMTsgfVxcbiAgICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgLmNjLWJ0bi1jaGVja2JveCB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMnB4O1xcbiAgICAgICAgbGVmdDogNnB4O1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgLmNjLWJ0bi1jaGVja2JveDpiZWZvcmUge1xcbiAgICAgICAgICBjb250ZW50OiBcXFwiXFxcXDFGNUY1XFxcIjsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLmNjLWJ0bi1jaGVja2JveDphZnRlciB7XFxuICAgICAgY29udGVudDogXFxcIlxcXFwyNzEzXFxcIjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAtNHB4O1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgZm9udC1zaXplOiAyLjNyZW07XFxuICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuNSk7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4uY2MtaW5mbyB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAgNHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuOmxhc3QtY2hpbGQge1xcbiAgICAgIG1pbi13aWR0aDogMDsgfVxcbiAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy10b29sdGlwIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtdG9vbHRpcDphZnRlciB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCBsaWdodGdyZXk7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiB0aGluIHNvbGlkIGxpZ2h0Z3JleTsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10eXBlLWluZm8uY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi8qIEVkZ2VsZXNzICovXFxuLmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXdpbmRvdyB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1tZXNzYWdlIHtcXG4gIG1hcmdpbjogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1idG4ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMC44ZW0gMS44ZW07XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1tZXNzYWdlIHtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLWJ0biArIC5jYy1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gIHBhZGRpbmc6IDAuNGVtIDAuOGVtO1xcbiAgcGFkZGluZy1sZWZ0OiAyNnB4OyB9XFxuICAuY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuLmNjLWluZm8ge1xcbiAgICBwYWRkaW5nOiAwLjRlbSA0cHg7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCB7XFxuICBib3JkZXI6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbiIsIi8qIVxuICogSmF2YVNjcmlwdCBDb29raWUgdjIuMi4xXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICpcbiAqIENvcHlyaWdodCAyMDA2LCAyMDE1IEtsYXVzIEhhcnRsICYgRmFnbmVyIEJyYWNrXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHR2YXIgcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyO1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKCFyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIpIHtcblx0XHR2YXIgT2xkQ29va2llcyA9IHdpbmRvdy5Db29raWVzO1xuXHRcdHZhciBhcGkgPSB3aW5kb3cuQ29va2llcyA9IGZhY3RvcnkoKTtcblx0XHRhcGkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5Db29raWVzID0gT2xkQ29va2llcztcblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fTtcblx0fVxufShmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIGV4dGVuZCAoKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRmb3IgKDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHNbIGkgXTtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdHJlc3VsdFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVjb2RlIChzKSB7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvKCVbMC05QS1aXXsyfSkrL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0IChjb252ZXJ0ZXIpIHtcblx0XHRmdW5jdGlvbiBhcGkoKSB7fVxuXG5cdFx0ZnVuY3Rpb24gc2V0IChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGF0dHJpYnV0ZXMgPSBleHRlbmQoe1xuXHRcdFx0XHRwYXRoOiAnLydcblx0XHRcdH0sIGFwaS5kZWZhdWx0cywgYXR0cmlidXRlcyk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpICogMSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGUrNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdlJ3JlIHVzaW5nIFwiZXhwaXJlc1wiIGJlY2F1c2UgXCJtYXgtYWdlXCIgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzID8gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdFx0aWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdHZhbHVlID0gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHR2YWx1ZSA9IGNvbnZlcnRlci53cml0ZSA/XG5cdFx0XHRcdGNvbnZlcnRlci53cml0ZSh2YWx1ZSwga2V5KSA6XG5cdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXG5cdFx0XHRrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpXG5cdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpXG5cdFx0XHRcdC5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xuXG5cdFx0XHR2YXIgc3RyaW5naWZpZWRBdHRyaWJ1dGVzID0gJyc7XG5cdFx0XHRmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc7ICcgKyBhdHRyaWJ1dGVOYW1lO1xuXHRcdFx0XHRpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ29uc2lkZXJzIFJGQyA2MjY1IHNlY3Rpb24gNS4yOlxuXHRcdFx0XHQvLyAuLi5cblx0XHRcdFx0Ly8gMy4gIElmIHRoZSByZW1haW5pbmcgdW5wYXJzZWQtYXR0cmlidXRlcyBjb250YWlucyBhICV4M0IgKFwiO1wiKVxuXHRcdFx0XHQvLyAgICAgY2hhcmFjdGVyOlxuXHRcdFx0XHQvLyBDb25zdW1lIHRoZSBjaGFyYWN0ZXJzIG9mIHRoZSB1bnBhcnNlZC1hdHRyaWJ1dGVzIHVwIHRvLFxuXHRcdFx0XHQvLyBub3QgaW5jbHVkaW5nLCB0aGUgZmlyc3QgJXgzQiAoXCI7XCIpIGNoYXJhY3Rlci5cblx0XHRcdFx0Ly8gLi4uXG5cdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnPScgKyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdLnNwbGl0KCc7JylbMF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoZG9jdW1lbnQuY29va2llID0ga2V5ICsgJz0nICsgdmFsdWUgKyBzdHJpbmdpZmllZEF0dHJpYnV0ZXMpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldCAoa2V5LCBqc29uKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBqYXIgPSB7fTtcblx0XHRcdC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcblx0XHRcdC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLlxuXHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcblx0XHRcdHZhciBpID0gMDtcblxuXHRcdFx0Zm9yICg7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKTtcblx0XHRcdFx0dmFyIGNvb2tpZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuXHRcdFx0XHRpZiAoIWpzb24gJiYgY29va2llLmNoYXJBdCgwKSA9PT0gJ1wiJykge1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvb2tpZS5zbGljZSgxLCAtMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBuYW1lID0gZGVjb2RlKHBhcnRzWzBdKTtcblx0XHRcdFx0XHRjb29raWUgPSAoY29udmVydGVyLnJlYWQgfHwgY29udmVydGVyKShjb29raWUsIG5hbWUpIHx8XG5cdFx0XHRcdFx0XHRkZWNvZGUoY29va2llKTtcblxuXHRcdFx0XHRcdGlmIChqc29uKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGphcltuYW1lXSA9IGNvb2tpZTtcblxuXHRcdFx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGtleSA/IGphcltrZXldIDogamFyO1xuXHRcdH1cblxuXHRcdGFwaS5zZXQgPSBzZXQ7XG5cdFx0YXBpLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCBmYWxzZSAvKiByZWFkIGFzIHJhdyAqLyk7XG5cdFx0fTtcblx0XHRhcGkuZ2V0SlNPTiA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCB0cnVlIC8qIHJlYWQgYXMganNvbiAqLyk7XG5cdFx0fTtcblx0XHRhcGkucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlcykge1xuXHRcdFx0c2V0KGtleSwgJycsIGV4dGVuZChhdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdGV4cGlyZXM6IC0xXG5cdFx0XHR9KSk7XG5cdFx0fTtcblxuXHRcdGFwaS5kZWZhdWx0cyA9IHt9O1xuXG5cdFx0YXBpLndpdGhDb252ZXJ0ZXIgPSBpbml0O1xuXG5cdFx0cmV0dXJuIGFwaTtcblx0fVxuXG5cdHJldHVybiBpbml0KGZ1bmN0aW9uICgpIHt9KTtcbn0pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuZXhwb3J0IGNvbnN0IHN0YXR1c2VzID0gWyBcIkRFTllcIiwgXCJBTExPV1wiLCBcIkRJU01JU1NcIiBdXHJcbmV4cG9ydCBjb25zdCBzdGF0dXNEZW55ID0gXCJERU5ZXCJcclxuZXhwb3J0IGNvbnN0IHN0YXR1c0FsbG93ID0gXCJBTExPV1wiXHJcbmV4cG9ydCBjb25zdCBzdGF0dXNEaXNtaXNzID0gXCJESVNNSVNTXCJcclxuXHJcbmV4cG9ydCBjb25zdCBjYXRlZ29yaWVzID0gWyBcIlVOQ0FURUdPUklaRURcIiwgXCJFU1NFTlRJQUxcIiwgXCJQRVJTT05BTElaQVRJT05cIiwgXCJBTkFMWVRJQ1NcIiwgXCJNQVJLRVRJTkdcIiBdIiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCBcIi4vc3R5bGVzL21haW4uc2Nzc1wiXHJcblxyXG5pbXBvcnQgQ29va2llQ29uc2VudCBmcm9tIFwiLi9tb2RlbHMvQ29va2llQ29uc2VudFwiXHJcblxyXG5pZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBDb29raWVDb25zZW50XHJcbn0gZWxzZSB7XHJcbiAgd2luZG93LkNvb2tpZUNvbnNlbnQgPSBDb29raWVDb25zZW50XHJcbn0iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0IHsgbWVyZ2VPcHRpb25zIH0gZnJvbSBcIi4uL3V0aWxzXCJcclxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRzXCJcclxuXHJcbmNvbnN0IGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKCBkZWZhdWx0T3B0aW9ucyA9IHt9LCBvcHRpb25zID0ge30gKXtcclxuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyggZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKVxyXG4gICAgdGhpcy5vbiA9IGVtaXR0ZXIub24uYmluZCggZW1pdHRlciApXHJcbiAgICB0aGlzLmVtaXQgPSBlbWl0dGVyLmVtaXQuYmluZCggZW1pdHRlciApXHJcbiAgfVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIlxyXG5pbXBvcnQgTGVnYWwgZnJvbSBcIi4vTGVnYWxcIlxyXG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4vTG9jYXRpb25cIlxyXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIlxyXG5cclxuaW1wb3J0IHsgc3RhdHVzZXMsIGNhdGVnb3JpZXMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcclxuaW1wb3J0IHsgZ2V0Q29va2llLCBpc1ZhbGlkU3RhdHVzIH0gZnJvbSBcIi4uL3V0aWxzXCJcclxuXHJcbi8vIFRoaXMgZnVuY3Rpb24gaW5pdGlhbGl6ZXMgdGhlIGFwcCBieSBjb21iaW5pbmcgdGhlIHVzZSBvZiB0aGUgUG9wdXAsIExvY2F0b3IgYW5kIExhdyBtb2R1bGVzXHJcbi8vIFlvdSBjYW4gc3RyaW5nIHRvZ2V0aGVyIHRoZXNlIHRocmVlIG1vZHVsZXMgeW91cnNlbGYgaG93ZXZlciB5b3Ugd2FudCwgYnkgd3JpdGluZyBhIG5ldyBmdW5jdGlvbi5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2tpZUNvbnNlbnQgZXh0ZW5kcyBCYXNlIHtcclxuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyA9IHt9ICl7XHJcbiAgICBzdXBlciggb3B0aW9ucyApXHJcblxyXG4gICAgY29uc3QgYW5zd2VycyA9IGNhdGVnb3JpZXMubWFwKCBjYXRlZ29yeSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvb2tpZU5hbWUgPSB0aGlzLm9wdGlvbnMuY29va2llICYmIHRoaXMub3B0aW9ucy5jb29raWUubmFtZSA/IHRoaXMub3B0aW9ucy5jb29raWUubmFtZSA6ICdjb29raWVjb25zZW50X3N0YXR1c18nXHJcbiAgICAgIGNvbnN0IGFuc3dlciA9IGdldENvb2tpZSggY29va2llTmFtZSArICdfJyArIGNhdGVnb3J5IClcclxuICAgICAgcmV0dXJuIGlzVmFsaWRTdGF0dXMoYW5zd2VyKSA/IHsgW2NhdGVnb3J5XTogYW5zd2VyIH0gOiB1bmRlZmluZWRcclxuICAgIH0pLmZpbHRlcihvYmogPT4gb2JqID8gb2JqW09iamVjdC5rZXlzKG9iailbMF1dIDogZmFsc2UpXHJcblxyXG4gICAgLy8gaWYgdGhleSBoYXZlIGFscmVhZHkgYW5zd2VyZWQgd2Ugc3RpbGwgd2FudCBpdCB0byBjcmVhdGUgdGhlIHBvcHVwIGFueXdheXMgdG8gZGlzcGxheSBjb29raWUgaW5mb1xyXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMubGVnYWwgJiYgdGhpcy5vcHRpb25zLmxlZ2FsLmNvdW50cnlDb2RlICkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemF0aW9uQ29tcGxldGUoIHsgY29kZTogdGhpcy5vcHRpb25zLmxlZ2FsLmNvdW50cnlDb2RlIH0sYW5zd2VycyApXHJcbiAgICB9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMubG9jYXRpb24gKSB7XHJcbiAgICAgIG5ldyBMb2NhdGlvbiggdGhpcy5vcHRpb25zLmxvY2F0aW9uICkubG9jYXRlKCB0aGlzLmluaXRpYWxpemF0aW9uQ29tcGxldGUuYmluZCggdGhpcywge30sYW5zd2VycyApLCB0aGlzLmluaXRpYWxpemF0aW9uRXJyb3IuYmluZCggdGhpcyApIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6YXRpb25Db21wbGV0ZSh7fSxhbnN3ZXJzKVxyXG4gICAgfVxyXG4gIH1cclxuICBpbml0aWFsaXphdGlvbkNvbXBsZXRlKCByZXN1bHQsIGFuc3dlcnMpe1xyXG4gICAgaWYgKHJlc3VsdC5jb2RlKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucyA9IG5ldyBMZWdhbCh0aGlzLm9wdGlvbnMubGVnYWwpLmFwcGx5TGF3KCB0aGlzLm9wdGlvbnMsIHJlc3VsdC5jb2RlIClcclxuICAgIH1cclxuICAgIHRoaXMucG9wdXAgPSBuZXcgUG9wdXAoIHRoaXMub3B0aW9ucyApXHJcbiAgICBpZihhbnN3ZXJzLmxlbmd0aCA9PSAwKVxyXG4gICAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLmVtaXQoXCJpbml0aWFsaXplZFwiLCB0aGlzLnBvcHVwICksIDAgKVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNldFRpbWVvdXQoICgpID0+IHRoaXMuZW1pdCggXCJpbml0aWFsaXplZFwiLCBhbnN3ZXJzICkgKTtcclxuICAgIH1cclxuICB9XHJcbiAgaW5pdGlhbGl6YXRpb25FcnJvciggZXJyb3IgKSB7XHJcbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLmVtaXQoIFwiZXJyb3JcIiwgZXJyb3IsIG5ldyBQb3B1cCggdGhpcy5vcHRpb25zICkgKSwgMCApXHJcbiAgfVxyXG4gIGdldENvdW50cnlMYXdzKCBjb3VudHJ5Q29kZSApe1xyXG4gICAgcmV0dXJuIG5ldyBMZWdhbCh0aGlzLm9wdGlvbnMubGVnYWwpLmdldCggY291bnRyeUNvZGUgKVxyXG4gIH1cclxuICBpc09wZW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wb3B1cC5pc09wZW4oKVxyXG4gIH1cclxuICBjbG9zZSgpe1xyXG4gICAgcmV0dXJuICggdGhpcy5wb3B1cC5jbG9zZSgpLCB0aGlzIClcclxuICB9XHJcbiAgcmV2b2tlQ2hvaWNlKCkge1xyXG4gICAgcmV0dXJuICggdGhpcy5wb3B1cC5yZXZva2VDaG9pY2UoKSwgdGhpcyApXHJcbiAgfVxyXG4gIG9wZW4oKXtcclxuICAgIHJldHVybiAoIHRoaXMucG9wdXAub3BlbigpLCB0aGlzIClcclxuICB9XHJcbiAgdG9nZ2xlUmV2b2tlQnV0dG9uKCBib29sICkge1xyXG4gICAgcmV0dXJuICggdGhpcy5wb3B1cC50b2dnbGVSZXZva2VCdXR0b24oIGJvb2wgKSwgdGhpcyApXHJcbiAgfVxyXG4gIHNldFN0YXR1c2VzKCBzdGF0dXMgKSB7XHJcbiAgICByZXR1cm4gKHRoaXMucG9wdXAuc2V0U3RhdHVzZXMoIHN0YXR1cyApLCB0aGlzIClcclxuICB9XHJcbiAgY2xlYXJTdGF0dXNlcygpe1xyXG4gICAgcmV0dXJuICggdGhpcy5wb3B1cC5jbGVhclN0YXR1c2VzKCksIHRoaXMgKVxyXG4gIH1cclxuICBkZXN0cm95KCl7XHJcbiAgICByZXR1cm4gKCB0aGlzLnBvcHVwLmRlc3Ryb3koKSwgdGhpcyApXHJcbiAgfVxyXG59XHJcblxyXG5zdGF0dXNlcy5yZWR1Y2UoICggb2JqLCBzdGF0dXMgKSA9PlxyXG4oIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggQ29va2llQ29uc2VudCwgc3RhdHVzLCB7XHJcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdGF0dXMgfSxcclxuICBzZXQ6IGZ1bmN0aW9uICgpIHt9LFxyXG4gIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gIHdyaXRlYWJsZTogZmFsc2UsXHJcbiAgY29uZmlndXJhYmxlOiBmYWxzZVxyXG59KSwgb2JqICksIENvb2tpZUNvbnNlbnQgKSIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlXCJcclxuaW1wb3J0IGRlZmF1bHRPcHRpb25zIGZyb20gXCIuLi9vcHRpb25zL2xlZ2FsXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZ2FsIGV4dGVuZHMgQmFzZSB7XHJcbiAgY29uc3RydWN0b3IoIG9wdGlvbnMgPSB7fSApIHtcclxuICAgIHN1cGVyKCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyApXHJcbiAgfVxyXG4gIGdldCggY291bnRyeUNvZGUgKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhhc0xhdzogdGhpcy5vcHRpb25zLmhhc0xhdy5pbmRleE9mKGNvdW50cnlDb2RlKSA+PSAwLFxyXG4gICAgICByZXZva2FibGU6IHRoaXMub3B0aW9ucy5yZXZva2FibGUuaW5kZXhPZihjb3VudHJ5Q29kZSkgPj0gMCxcclxuICAgICAgZXhwbGljaXRBY3Rpb246IHRoaXMub3B0aW9ucy5leHBsaWNpdEFjdGlvbi5pbmRleE9mKGNvdW50cnlDb2RlKSA+PSAwXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFwcGx5TGF3KCBvcHRpb25zLCBjb3VudHJ5Q29kZSApe1xyXG4gICAgY29uc3QgY291bnRyeSA9IHRoaXMuZ2V0KGNvdW50cnlDb2RlKVxyXG5cclxuICAgIGlmICghY291bnRyeS5oYXNMYXcpIHtcclxuICAgICAgLy8gVGhlIGNvdW50cnkgaGFzIG5vIGNvb2tpZSBsYXdcclxuICAgICAgb3B0aW9ucy5lbmFibGVkID0gZmFsc2VcclxuICAgICAgdGhpcy5lbWl0KCBcIm5vQ29va2llTGF3XCIsIGNvdW50cnlDb2RlLCBjb3VudHJ5IClcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZ2lvbmFsTGF3KSB7XHJcbiAgICAgIGlmIChjb3VudHJ5LnJldm9rYWJsZSkge1xyXG4gICAgICAgIC8vIFdlIG11c3QgcHJvdmlkZSBhbiBvcHRpb24gdG8gcmV2b2tlIGNvbnNlbnQgYXQgYSBsYXRlciB0aW1lXHJcbiAgICAgICAgb3B0aW9ucy5yZXZva2FibGUgPSB0cnVlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjb3VudHJ5LmV4cGxpY2l0QWN0aW9uKSB7XHJcbiAgICAgICAgLy8gVGhlIHVzZXIgbXVzdCBleHBsaWNpdGx5IGNsaWNrIHRoZSBjb25zZW50IGJ1dHRvblxyXG4gICAgICAgIG9wdGlvbnMuZGlzbWlzc09uU2Nyb2xsID0gZmFsc2VcclxuICAgICAgICBvcHRpb25zLmRpc21pc3NPblRpbWVvdXQgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3B0aW9uc1xyXG4gIH1cclxufSIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlXCJcclxuaW1wb3J0IGRlZmF1bHRPcHRpb25zIGZyb20gXCIuLi9vcHRpb25zL2xvY2F0aW9uXCJcclxuaW1wb3J0IHsgaXNQbGFpbk9iamVjdCwgZ2V0U2NyaXB0LCBtYWtlQXN5bmNSZXF1ZXN0IH0gZnJvbSBcIi4uL3V0aWxzXCJcclxuXHJcbi8vIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgbG9jYXRpb24gc2VydmljZXMgd2UgaGF2ZSBhbHJlYWR5IHNldCB1cC5cclxuLy8gV2hlbiB1c2luZyBhIHNlcnZpY2UsIGl0IGNvdWxkIGVpdGhlciByZXR1cm4gYSBkYXRhIHN0cnVjdHVyZSBpbiBwbGFpbiB0ZXh0IChsaWtlIGEgSlNPTiBvYmplY3QpIG9yIGFuIGV4ZWN1dGFibGUgc2NyaXB0XHJcbi8vIFdoZW4gdGhlIHJlc3BvbnNlIG5lZWRzIHRvIGJlIGV4ZWN1dGVkIGJ5IHRoZSBicm93c2VyLCB0aGVuIGBpc1NjcmlwdGAgbXVzdCBiZSBzZXQgdG8gdHJ1ZSwgb3RoZXJ3aXNlIGl0IHdvbid0IHdvcmsuXHJcblxyXG4vLyBXaGVuIHRoZSBzZXJ2aWNlIHVzZXMgYSBzY3JpcHQsIHRoZSBjaGFuY2VzIGFyZSB0aGF0IHlvdSdsbCBoYXZlIHRvIHVzZSB0aGUgc2NyaXB0IHRvIG1ha2UgYWRkaXRpb25hbCByZXF1ZXN0cy4gSW4gdGhlc2VcclxuLy8gY2FzZXMsIHRoZSBzZXJ2aWNlcyBgY2FsbGJhY2tgIHByb3BlcnR5IGlzIGNhbGxlZCB3aXRoIGEgYGRvbmVgIGZ1bmN0aW9uLiBXaGVuIHBlcmZvcm1pbmcgYXN5bmMgb3BlcmF0aW9ucywgdGhpcyBtdXN0IGJlIGNhbGxlZFxyXG4vLyB3aXRoIHRoZSBkYXRhIChvciBFcnJvciksIGFuZCBgY29va2llY29uc2VudC5sb2NhdGVgIHdpbGwgdGFrZSBjYXJlIG9mIHRoZSByZXN0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvbiBleHRlbmRzIEJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zICkge1xyXG4gICAgc3VwZXIoIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIClcclxuICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA9IC0xIC8vIHRoZSBpbmRleCAoaW4gb3B0aW9ucykgb2YgdGhlIHNlcnZpY2Ugd2UncmUgY3VycmVudGx5IHVzaW5nXHJcbiAgfVxyXG5cclxuICBnZXROZXh0U2VydmljZSgpIHtcclxuICAgIGxldCBzZXJ2aWNlXHJcbiAgICBkbyB7XHJcbiAgICAgIHNlcnZpY2UgPSB0aGlzLmdldFNlcnZpY2VCeUlkeCgrK3RoaXMuY3VycmVudFNlcnZpY2VJbmRleClcclxuICAgIH0gd2hpbGUgKFxyXG4gICAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPCB0aGlzLm9wdGlvbnMuc2VydmljZXMubGVuZ3RoICYmXHJcbiAgICAgICFzZXJ2aWNlXHJcbiAgICApXHJcblxyXG4gICAgcmV0dXJuIHNlcnZpY2VcclxuICB9XHJcblxyXG4gIGdldFNlcnZpY2VCeUlkeChpZHgpIHtcclxuICAgIC8vIFRoaXMgY2FuIGVpdGhlciBiZSB0aGUgbmFtZSBvZiBhIGRlZmF1bHQgbG9jYXRpb25TZXJ2aWNlLCBvciBhIGZ1bmN0aW9uLlxyXG4gICAgY29uc3Qgc2VydmljZU9wdGlvbiA9IHRoaXMub3B0aW9ucy5zZXJ2aWNlc1tpZHhdXHJcblxyXG4gICAgLy8gSWYgaXQncyBhIHN0cmluZywgdXNlIG9uZSBvZiB0aGUgbG9jYXRpb24gc2VydmljZXMuXHJcbiAgICBpZiAodHlwZW9mIHNlcnZpY2VPcHRpb24gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgY29uc3QgZHluYW1pY09wdHMgPSBzZXJ2aWNlT3B0aW9uKClcclxuICAgICAgcmV0dXJuIGR5bmFtaWNPcHRzLm5hbWUgPyBcclxuICAgICAgICBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgICAge30sXHJcbiAgICAgICAgICBkeW5hbWljT3B0cyxcclxuICAgICAgICAgIHRoaXMub3B0aW9ucy5zZXJ2aWNlRGVmaW5pdGlvbnNbIGR5bmFtaWNPcHRzLm5hbWUgXSggZHluYW1pY09wdHMgKVxyXG4gICAgICAgICkgOiBkeW5hbWljT3B0c1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIGl0J3MgYSBzdHJpbmcsIHVzZSBvbmUgb2YgdGhlIGxvY2F0aW9uIHNlcnZpY2VzLlxyXG4gICAgaWYgKHR5cGVvZiBzZXJ2aWNlT3B0aW9uID09PSAnc3RyaW5nJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1tzZXJ2aWNlT3B0aW9uXSgpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgaXQncyBhbiBvYmplY3QsIGFzc3VtZSB7bmFtZTogJ2lwaW5mbycsIC4uLm90aGVyT3B0aW9uc31cclxuICAgIC8vIEFsbG93cyB1c2VyIHRvIHBhc3MgaW4gQVBJIGtleXMgZXRjLlxyXG4gICAgaWYgKGlzUGxhaW5PYmplY3Qoc2VydmljZU9wdGlvbikpIHtcclxuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zZXJ2aWNlRGVmaW5pdGlvbnNbc2VydmljZU9wdGlvbi5uYW1lXShcclxuICAgICAgICBzZXJ2aWNlT3B0aW9uXHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgLy8gVGhpcyBydW5zIHRoZSBzZXJ2aWNlIGxvY2F0ZWQgYXQgaW5kZXggYGN1cnJlbnRTZXJ2aWNlSW5kZXhgLlxyXG4gIC8vIElmIHRoZSBzZXJ2aWNlIGZhaWxzLCBgcnVuTmV4dFNlcnZpY2VPbkVycm9yYCB3aWxsIGNvbnRpbnVlIHRyeWluZyBlYWNoIHNlcnZpY2UgdW50aWwgYWxsIGZhaWwsIG9yIG9uZSBjb21wbGV0ZXMgc3VjY2Vzc2Z1bGx5XHJcbiAgbG9jYXRlKGNvbXBsZXRlLCBlcnJvcikge1xyXG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXMuZ2V0TmV4dFNlcnZpY2UoKVxyXG5cclxuICAgIGlmICghc2VydmljZSkge1xyXG4gICAgICBlcnJvcihuZXcgRXJyb3IoJ05vIHNlcnZpY2VzIHRvIHJ1bicpKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNhbGxiYWNrQ29tcGxldGUgPSBjb21wbGV0ZVxyXG4gICAgdGhpcy5jYWxsYmFja0Vycm9yID0gZXJyb3JcclxuXHJcbiAgICB0aGlzLnJ1blNlcnZpY2Uoc2VydmljZSwgdGhpcy5ydW5OZXh0U2VydmljZU9uRXJyb3IuYmluZCh0aGlzKSlcclxuICB9XHJcblxyXG4gIC8vIFBvdGVudGlhbGx5IGFkZHMgYSBjYWxsYmFjayB0byBhIHVybCBmb3IganNvbnAuXHJcbiAgc2V0dXBVcmwoc2VydmljZSkge1xyXG4gICAgY29uc3Qgc2VydmljZU9wdHMgPSB0aGlzLmdldEN1cnJlbnRTZXJ2aWNlT3B0cygpXHJcbiAgICByZXR1cm4gc2VydmljZS51cmwucmVwbGFjZSgvXFx7KC4qPylcXH0vZywgZnVuY3Rpb24oXywgcGFyYW0pIHtcclxuICAgICAgaWYgKHBhcmFtID09PSAnY2FsbGJhY2snKSB7XHJcbiAgICAgICAgY29uc3QgdGVtcE5hbWUgPSAnY2FsbGJhY2snICsgRGF0ZS5ub3coKVxyXG4gICAgICAgIHdpbmRvd1t0ZW1wTmFtZV0gPSBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgIHNlcnZpY2UuX19KU09OUF9EQVRBID0gSlNPTi5zdHJpbmdpZnkocmVzKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVtcE5hbWVcclxuICAgICAgfVxyXG4gICAgICBpZiAocGFyYW0gaW4gc2VydmljZU9wdHMuaW50ZXJwb2xhdGVVcmwpIHtcclxuICAgICAgICByZXR1cm4gc2VydmljZU9wdHMuaW50ZXJwb2xhdGVVcmxbcGFyYW1dXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyByZXF1aXJlcyBhIGBzZXJ2aWNlYCBvYmplY3QgdGhhdCBkZWZpbmVzIGF0IGxlYXN0IGEgYHVybGAgYW5kIGBjYWxsYmFja2BcclxuICBydW5TZXJ2aWNlKHNlcnZpY2UsIGNvbXBsZXRlKSB7XHJcbiAgICAvLyBiYXNpYyBjaGVjayB0byBlbnN1cmUgaXQgcmVzZW1ibGVzIGEgYHNlcnZpY2VgXHJcbiAgICBpZiAoIXNlcnZpY2UgfHwgIXNlcnZpY2UudXJsIHx8ICFzZXJ2aWNlLmNhbGxiYWNrKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHdlIGNhbGwgZWl0aGVyIGBnZXRTY3JpcHRgIG9yIGBtYWtlQXN5bmNSZXF1ZXN0YCBkZXBlbmRpbmcgb24gdGhlIHR5cGUgb2YgcmVzb3VyY2VcclxuICAgIGNvbnN0IHJlcXVlc3RGdW5jdGlvbiA9IHNlcnZpY2UuaXNTY3JpcHQgPyBnZXRTY3JpcHQgOiBtYWtlQXN5bmNSZXF1ZXN0XHJcblxyXG4gICAgLy8gYm90aCBmdW5jdGlvbnMgaGF2ZSBzaW1pbGFyIHNpZ25hdHVyZXMgc28gd2UgY2FuIHBhc3MgdGhlIHNhbWUgYXJndW1lbnRzIHRvIGJvdGhcclxuICAgIHJlcXVlc3RGdW5jdGlvbihcclxuICAgICAgdGhpcy5zZXR1cFVybChzZXJ2aWNlKSxcclxuICAgICAgeGhyID0+IHtcclxuICAgICAgICAvLyBpZiBgIXhocmAsIHRoZW4gYGdldFNjcmlwdGAgZnVuY3Rpb24gd2FzIHVzZWQsIHNvIHRoZXJlIGlzIG5vIHJlc3BvbnNlIHRleHRcclxuICAgICAgICBsZXQgcmVzcG9uc2VUZXh0ID0geGhyID8geGhyLnJlc3BvbnNlVGV4dCA6ICcnXHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSByZXNvdXJjZSBpcyBhIHNjcmlwdCwgdGhlbiB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBhZnRlciB0aGUgc2NyaXB0IGhhcyBiZWVuIHJ1bi5cclxuICAgICAgICAvLyBpZiB0aGUgc2NyaXB0IGlzIEpTT05QLCB0aGVuIGEgdGltZSBkZWZpbmVkIGZ1bmN0aW9uIGBjYWxsYmFja197RGF0ZS5ub3d9YCBoYXMgYWxyZWFkeVxyXG4gICAgICAgIC8vIGJlZW4gY2FsbGVkIChhcyB0aGUgSlNPTlAgY2FsbGJhY2spLiBUaGlzIGNhbGxiYWNrIHNldHMgdGhlIF9fSlNPTlBfREFUQSBwcm9wZXJ0eVxyXG4gICAgICAgIGlmIChzZXJ2aWNlLl9fSlNPTlBfREFUQSkge1xyXG4gICAgICAgICAgcmVzcG9uc2VUZXh0ID0gc2VydmljZS5fX0pTT05QX0RBVEFcclxuICAgICAgICAgIGRlbGV0ZSBzZXJ2aWNlLl9fSlNPTlBfREFUQVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2FsbCB0aGUgc2VydmljZSBjYWxsYmFjayB3aXRoIHRoZSByZXNwb25zZSB0ZXh0IChzbyBpdCBjYW4gcGFyc2UgdGhlIHJlc3BvbnNlKVxyXG4gICAgICAgIHRoaXMucnVuU2VydmljZUNhbGxiYWNrLmNhbGwodGhpcywgY29tcGxldGUsIHNlcnZpY2UsIHJlc3BvbnNlVGV4dClcclxuICAgICAgfSxcclxuICAgICAgdGhpcy5vcHRpb25zLnRpbWVvdXQsXHJcbiAgICAgIHNlcnZpY2UuZGF0YSxcclxuICAgICAgc2VydmljZS5oZWFkZXJzXHJcbiAgICApXHJcblxyXG4gICAgLy8gYHNlcnZpY2UuZGF0YWAgYW5kIGBzZXJ2aWNlLmhlYWRlcnNgIGFyZSBvcHRpb25hbCAodGhleSBvbmx5IGNvdW50IGlmIGAhc2VydmljZS5pc1NjcmlwdGAgYW55d2F5KVxyXG4gIH1cclxuXHJcbiAgLy8gVGhlIHNlcnZpY2UgcmVxdWVzdCBoYXMgcnVuIChhbmQgcG9zc2libHkgaGFzIGEgYHJlc3BvbnNlVGV4dGApIFtubyBgcmVzcG9uc2VUZXh0YCBpZiBgaXNTY3JpcHRgXVxyXG4gIC8vIFdlIG5lZWQgdG8gcnVuIGl0cyBjYWxsYmFjayB3aGljaCBkZXRlcm1pbmVzIGlmIGl0cyBzdWNjZXNzZnVsIG9yIG5vdFxyXG4gIC8vIGBjb21wbGV0ZWAgaXMgY2FsbGVkIG9uIHN1Y2Nlc3Mgb3IgZmFpbHVyZVxyXG4gIHJ1blNlcnZpY2VDYWxsYmFjayggY29tcGxldGUsIHNlcnZpY2UsIHJlc3BvbnNlVGV4dCApIHtcclxuICAgIC8vIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGlmIHRoZSBzZXJ2aWNlIHVzZXMgdGhlIGFzeW5jIGNhbGxiYWNrIGluIGl0cyBoYW5kbGVyIG1ldGhvZFxyXG4gICAgY29uc3Qgc2VydmljZVJlc3VsdEhhbmRsZXIgPSBhc3luY1Jlc3VsdCA9PiB7XHJcbiAgICAgIC8vIGlmIGByZXN1bHRgIGlzIGEgdmFsaWQgdmFsdWUsIHRoZW4gdGhpcyBmdW5jdGlvbiBzaG91bGRuJ3QgcmVhbGx5IHJ1blxyXG4gICAgICAvLyBldmVuIGlmIGl0IGlzIGNhbGxlZCBieSBgc2VydmljZS5jYWxsYmFja2BcclxuICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICB0aGlzLm9uU2VydmljZVJlc3VsdCggY29tcGxldGUsIGFzeW5jUmVzdWx0KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhlIGZ1bmN0aW9uIGBzZXJ2aWNlLmNhbGxiYWNrYCB3aWxsIGVpdGhlciBleHRyYWN0IGEgY291bnRyeSBjb2RlIGZyb20gYHJlc3BvbnNlVGV4dGAgYW5kIHJldHVybiBpdCAoaW4gYHJlc3VsdGApXHJcbiAgICAvLyBvciAoaWYgaXQgaGFzIHRvIG1ha2UgYWRkaXRpb25hbCByZXF1ZXN0cykgaXQgd2lsbCBjYWxsIGEgYGRvbmVgIGNhbGxiYWNrIHdpdGggdGhlIGNvdW50cnkgY29kZSB3aGVuIGl0IGlzIHJlYWR5XHJcbiAgICBjb25zdCByZXN1bHQgPSBzZXJ2aWNlLmNhbGxiYWNrKHNlcnZpY2VSZXN1bHRIYW5kbGVyLCByZXNwb25zZVRleHQpXHJcblxyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICB0aGlzLm9uU2VydmljZVJlc3VsdCggY29tcGxldGUsIHJlc3VsdCApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBUaGlzIGlzIGNhbGxlZCB3aXRoIHRoZSBgcmVzdWx0YCBmcm9tIGBzZXJ2aWNlLmNhbGxiYWNrYCByZWdhcmRsZXNzIG9mIGhvdyBpdCBwcm92aWRlZCB0aGF0IHJlc3VsdCAoc3luYyBvciBhc3luYykuXHJcbiAgLy8gYHJlc3VsdGAgd2lsbCBiZSB3aGF0ZXZlciBpcyByZXR1cm5lZCBmcm9tIGBzZXJ2aWNlLmNhbGxiYWNrYC4gQSBzZXJ2aWNlIGNhbGxiYWNrIHNob3VsZCBwcm92aWRlIGFuIG9iamVjdCB3aXRoIGRhdGFcclxuICBvblNlcnZpY2VSZXN1bHQoY29tcGxldGUsIHJlc3VsdCkge1xyXG4gICAgLy8gY29udmVydCByZXN1bHQgdG8gbm9kZWpzIHN0eWxlIGFzeW5jIGNhbGxiYWNrXHJcbiAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IgfHwgKHJlc3VsdCAmJiByZXN1bHQuZXJyb3IpKSB7XHJcbiAgICAgIGNvbXBsZXRlLmNhbGwodGhpcywgcmVzdWx0LCBudWxsKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29tcGxldGUuY2FsbCh0aGlzLCBudWxsLCByZXN1bHQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBpZiBgZXJyYCBpcyBzZXQsIHRoZSBuZXh0IHNlcnZpY2UgaGFuZGxlciBpcyBjYWxsZWRcclxuICAvLyBpZiBgZXJyYCBpcyBudWxsLCB0aGUgYG9uQ29tcGxldGVgIGhhbmRsZXIgaXMgY2FsbGVkIHdpdGggYGRhdGFgXHJcbiAgcnVuTmV4dFNlcnZpY2VPbkVycm9yKGVyciwgZGF0YSkge1xyXG4gICAgaWYgKGVycikge1xyXG4gICAgICB0aGlzLmxvZ0Vycm9yKGVycilcclxuXHJcbiAgICAgIGNvbnN0IG5leHRTZXJ2aWNlID0gdGhpcy5nZXROZXh0U2VydmljZSgpXHJcblxyXG4gICAgICBpZiAobmV4dFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnJ1blNlcnZpY2UobmV4dFNlcnZpY2UsIHRoaXMucnVuTmV4dFNlcnZpY2VPbkVycm9yLmJpbmQodGhpcykpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZVNlcnZpY2UuY2FsbChcclxuICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICB0aGlzLmNhbGxiYWNrRXJyb3IsXHJcbiAgICAgICAgICBuZXcgRXJyb3IoJ0FsbCBzZXJ2aWNlcyBmYWlsZWQnKVxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jb21wbGV0ZVNlcnZpY2UuY2FsbCh0aGlzLCB0aGlzLmNhbGxiYWNrQ29tcGxldGUsIGRhdGEpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50U2VydmljZU9wdHMoKSB7XHJcbiAgICBjb25zdCB2YWwgPSB0aGlzLm9wdGlvbnMuc2VydmljZXNbdGhpcy5jdXJyZW50U2VydmljZUluZGV4XVxyXG5cclxuICAgIGlmICh0eXBlb2YgdmFsID09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiB7bmFtZTogdmFsfVxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcmV0dXJuIHZhbCgpXHJcbiAgICB9ZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XHJcbiAgICAgIHJldHVybiB2YWxcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB7fVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gY2FsbHMgdGhlIGBvbkNvbXBsZXRlYCBjYWxsYmFjayBhZnRlciByZXNldHRpbmcgdGhlIGBjdXJyZW50U2VydmljZUluZGV4YFxyXG4gIGNvbXBsZXRlU2VydmljZShmbiwgZGF0YSkge1xyXG4gICAgdGhpcy5jdXJyZW50U2VydmljZUluZGV4ID0gLTFcclxuXHJcbiAgICBmbiAmJiBmbihkYXRhKVxyXG4gIH1cclxuXHJcbiAgbG9nRXJyb3IoZXJyKSB7XHJcbiAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgIGBUaGUgc2VydmljZVske3RoaXMuY3VycmVudFNlcnZpY2VJbmRleH1dICgke3RoaXMuZ2V0U2VydmljZUJ5SWR4KHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCkudXJsfSkgcmVzcG9uZGVkIHdpdGggdGhlIGZvbGxvd2luZyBlcnJvcmAsXHJcbiAgICAgICBlcnJcclxuICAgIClcclxuICB9XHJcbn0iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZVwiXHJcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tIFwiLi4vb3B0aW9ucy9wb3B1cFwiXHJcbmltcG9ydCB7XHJcbiAgY2F0ZWdvcmllcyxcclxuICBzdGF0dXNlcyxcclxuICBzdGF0dXNEaXNtaXNzLFxyXG4gIHN0YXR1c0FsbG93XHJcbn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiXHJcbmltcG9ydCB7XHJcbiAgYWRkQ3VzdG9tU3R5bGVzaGVldCxcclxuICBnZXRDb29raWUsXHJcbiAgaGFzaCxcclxuICBpbnRlcnBvbGF0ZVN0cmluZyxcclxuICBpc01vYmlsZSxcclxuICBpc1BsYWluT2JqZWN0LFxyXG4gIGlzVmFsaWRTdGF0dXMsXHJcbiAgc2V0Q29va2llLFxyXG4gIHRocm90dGxlLFxyXG4gIHRyYXZlcnNlRE9NUGF0aCxcclxufSBmcm9tIFwiLi4vdXRpbHNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAgZXh0ZW5kcyBCYXNlIHtcclxuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApIHtcclxuICAgIHN1cGVyKCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyApXHJcbiAgICB0aGlzLnVzZXJDYXRlZ29yaWVzID0ge1xyXG4gICAgICBVTkNBVEVHT1JJWkVEICA6ICdESVNNSVNTJyxcclxuICAgICAgRVNTRU5USUFMICAgICAgOiAnQUxMT1cnLFxyXG4gICAgICBQRVJTT05BTElaQVRJT046ICdESVNNSVNTJyxcclxuICAgICAgQU5BTFlUSUNTICAgICAgOiAnRElTTUlTUycsXHJcbiAgICAgIE1BUktFVElORyAgICAgIDogJ0RJU01JU1MnXHJcbiAgICB9XHJcbiAgICB0aGlzLmN1c3RvbVN0eWxlcyA9IHt9XHJcbiAgICB0aGlzLmhhc1RyYW5zaXRpb24gPSAhIShmdW5jdGlvbigpIHtcclxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICBjb25zdCB0cmFucyA9IHtcclxuICAgICAgICB0OiAndHJhbnNpdGlvbmVuZCcsXHJcbiAgICAgICAgT1Q6ICdvVHJhbnNpdGlvbkVuZCcsXHJcbiAgICAgICAgbXNUOiAnTVNUcmFuc2l0aW9uRW5kJyxcclxuICAgICAgICBNb3pUOiAndHJhbnNpdGlvbmVuZCcsXHJcbiAgICAgICAgV2Via2l0VDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgZm9yIChsZXQgcHJlZml4IGluIHRyYW5zKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdHJhbnMuaGFzT3duUHJvcGVydHkocHJlZml4KSAmJlxyXG4gICAgICAgICAgdHlwZW9mIGVsLnN0eWxlW3ByZWZpeCArICdyYW5zaXRpb24nXSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJldHVybiB0cmFuc1twcmVmaXhdXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAnJ1xyXG4gICAgfSkoKVxyXG5cclxuICAgIC8vIHJldHVybnMgdHJ1ZSBpZiBgb25Db21wbGV0ZWAgd2FzIGNhbGxlZFxyXG4gICAgaWYgKHRoaXMuY2FuVXNlQ29va2llcygpKSB7XHJcbiAgICAgIC8vIHVzZXIgaGFzIGFscmVhZHkgYW5zd2VyZWRcclxuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgLy8gYXBwbHkgYmxhY2tsaXN0IC8gd2hpdGVsaXN0XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmJsYWNrbGlzdFBhZ2UuaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gZmFsc2VcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm9wdGlvbnMud2hpdGVsaXN0UGFnZS5pbmNsdWRlcyhsb2NhdGlvbi5wYXRobmFtZSkpIHtcclxuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhlIGZ1bGwgbWFya3VwIGVpdGhlciBjb250YWlucyB0aGUgd3JhcHBlciBvciBpdCBkb2VzIG5vdCAoZm9yIG11bHRpcGxlIGluc3RhbmNlcylcclxuICAgIGxldCBjb29raWVQb3B1cCA9IHRoaXMub3B0aW9ucy53aW5kb3dcclxuICAgICAgLnJlcGxhY2UoJ3t7Y2xhc3Nlc319JywgdGhpcy5nZXRQb3B1cENsYXNzZXMoKS5qb2luKCcgJykpXHJcbiAgICAgIC5yZXBsYWNlKCd7e2NoaWxkcmVufX0nLCB0aGlzLmdldFBvcHVwSW5uZXJNYXJrdXAoKSlcclxuXHJcbiAgICAvLyBpZiB1c2VyIHBhc3NlcyBodG1sLCB1c2UgaXQgaW5zdGVhZFxyXG4gICAgY29uc3QgY3VzdG9tSFRNTCA9IHRoaXMub3B0aW9ucy5vdmVycmlkZUhUTUxcclxuICAgIGlmICh0eXBlb2YgY3VzdG9tSFRNTCA9PSAnc3RyaW5nJyAmJiBjdXN0b21IVE1MLmxlbmd0aCApIHtcclxuICAgICAgY29va2llUG9wdXAgPSBjdXN0b21IVE1MXHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgc3RhdGljLCB3ZSBuZWVkIHRvIGdyb3cgdGhlIGVsZW1lbnQgZnJvbSAwIGhlaWdodCBzbyBpdCBkb2Vzbid0IGp1bXAgdGhlIHBhZ2VcclxuICAgIC8vIGNvbnRlbnQuIHdlIHdyYXAgYW4gZWxlbWVudCBhcm91bmQgaXQgd2hpY2ggd2lsbCBtYXNrIHRoZSBoaWRkZW4gY29udGVudFxyXG4gICAgXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpYykge1xyXG4gICAgICAvLyBgZ3Jvd2VyYCBpcyBhIHdyYXBwZXIgZGl2IHdpdGggYSBoaWRkZW4gb3ZlcmZsb3cgd2hvc2UgaGVpZ2h0IGlzIGFuaW1hdGVkXHJcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLmFwcGVuZE1hcmt1cChgPGRpdiBjbGFzcz1cImNjLWdyb3dlclwiPiR7Y29va2llUG9wdXB9PC9kaXY+YClcclxuXHJcbiAgICAgIHdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICcnIC8vIHNldCBpdCB0byB2aXNpYmxlIChiZWNhdXNlIGFwcGVuZE1hcmt1cCBoaWRlcyBpdClcclxuICAgICAgdGhpcy5lbGVtZW50ID0gd3JhcHBlci5maXJzdENoaWxkIC8vIGdldCB0aGUgYGVsZW1lbnRgIHJlZmVyZW5jZSBmcm9tIHRoZSB3cmFwcGVyXHJcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5hcHBlbmRNYXJrdXAoY29va2llUG9wdXApXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hcHBseUF1dG9EaXNtaXNzKClcclxuICAgIHRoaXMuYXBwbHlSZXZva2VCdXR0b24oKVxyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b09wZW4pIHtcclxuICAgICAgdGhpcy5hdXRvT3BlbigpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVyblxyXG5cclxuICAgIGlmICghdGhpcy5pc09wZW4oKSkge1xyXG4gICAgICBpZiAodGhpcy5oYXNUcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5mYWRlSW4oKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJydcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZVJldm9rZUJ1dHRvbigpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbWl0KCBcInBvcHVwT3BlbmVkXCIgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG5cclxuICBjbG9zZSggc2hvd1Jldm9rZSApIHtcclxuICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm5cclxuICAgIFxyXG4gICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcclxuICAgICAgaWYgKHRoaXMuaGFzVHJhbnNpdGlvbikge1xyXG4gICAgICAgIHRoaXMuZmFkZU91dCgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHNob3dSZXZva2UgJiYgdGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlUmV2b2tlQnV0dG9uKHRydWUpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbWl0KCBcInBvcHVwQ2xvc2VkXCIgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG5cclxuICBmYWRlSW4oKSB7XHJcbiAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudFxyXG5cclxuICAgIGlmICghdGhpcy5oYXNUcmFuc2l0aW9uIHx8ICFlbCkgcmV0dXJuXHJcblxyXG4gICAgLy8gVGhpcyBzaG91bGQgYWx3YXlzIGJlIGNhbGxlZCBBRlRFUiBmYWRlT3V0ICh3aGljaCBpcyBnb3Zlcm5lZCBieSB0aGUgJ3RyYW5zaXRpb25lbmQnIGV2ZW50KS5cclxuICAgIC8vICd0cmFuc2l0aW9uZW5kJyBpc24ndCBhbGwgdGhhdCByZWxpYWJsZSwgc28sIGlmIHdlIHRyeSBhbmQgZmFkZUluIGJlZm9yZSAndHJhbnNpdGlvbmVuZCcgaGFzXHJcbiAgICAvLyBoYXMgYSBjaGFuY2UgdG8gcnVuLCB0aGVuIHdlIHJ1biBpdCBvdXJzZWx2ZXNcclxuICAgIGlmICh0aGlzLmFmdGVyVHJhbnNpdGlvbikge1xyXG4gICAgICB0aGlzLmFmdGVyRmFkZU91dChlbClcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy1pbnZpc2libGUnKSkge1xyXG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJydcclxuXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhdGljKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCArICdweCdcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZmFkZUluVGltZW91dCA9IDIwIC8vIChtcykgRE8gTk9UIE1BS0UgVEhJUyBWQUxVRSBTTUFMTEVSLiBTZWUgYmVsb3dcclxuXHJcbiAgICAgIC8vIEFsdGhvdWdoIG1vc3QgYnJvd3NlcnMgY2FuIGhhbmRsZSB2YWx1ZXMgbGVzcyB0aGFuIDIwbXMsIGl0IHNob3VsZCByZW1haW4gYWJvdmUgdGhpcyB2YWx1ZS5cclxuICAgICAgLy8gVGhpcyBpcyBiZWNhdXNlIHdlIGFyZSB3YWl0aW5nIGZvciBhIFwiYnJvd3NlciByZWRyYXdcIiBiZWZvcmUgd2UgcmVtb3ZlIHRoZSAnY2MtaW52aXNpYmxlJyBjbGFzcy5cclxuICAgICAgLy8gSWYgdGhlIGNsYXNzIGlzIHJlbXZvZWQgYmVmb3JlIGEgcmVkcmF3IGNvdWxkIGhhcHBlbiwgdGhlbiB0aGUgZmFkZUluIGVmZmVjdCBXSUxMIE5PVCB3b3JrLCBhbmRcclxuICAgICAgLy8gdGhlIHBvcHVwIHdpbGwgYXBwZWFyIGZyb20gbm90aGluZy4gVGhlcmVmb3JlIHdlIE1VU1QgYWxsb3cgZW5vdWdoIHRpbWUgZm9yIHRoZSBicm93c2VyIHRvIGRvXHJcbiAgICAgIC8vIGl0cyB0aGluZy4gVGhlIGFjdHVhbGx5IGRpZmZlcmVuY2UgYmV0d2VlbiB1c2luZyAwIGFuZCAyMCBpbiBhIHNldCB0aW1lb3V0IGlzIG5lZ2xlZ2libGUgYW55d2F5XHJcbiAgICAgIHRoaXMub3BlbmluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICgpID0+IHRoaXMuYWZ0ZXJGYWRlSW4oZWwpLFxyXG4gICAgICAgIGZhZGVJblRpbWVvdXRcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBuZWVkcyB0byBiZSBjYWxsZWQgYWZ0ZXIgJ2ZhZGVJbicuIFRoaXMgaXMgdGhlIGNvZGUgdGhhdCBhY3R1YWxseSBjYXVzZXMgdGhlIGZhZGVJbiB0byB3b3JrXHJcbiAgICogVGhlcmUgaXMgYSBnb29kIHJlYXNvbiB3aHkgaXQncyBjYWxsZWQgaW4gYSB0aW1lb3V0LiBSZWFkICdmYWRlSW4nXHJcbiAgICovXHJcbiAgYWZ0ZXJGYWRlSW4oIGVsZW1lbnQgKSB7XHJcbiAgICB0aGlzLm9wZW5pbmdUaW1lb3V0ID0gbnVsbFxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjYy1pbnZpc2libGUnKVxyXG4gIH1cclxuICBcclxuICBmYWRlT3V0KCkge1xyXG4gICAgaWYgKCF0aGlzLmhhc1RyYW5zaXRpb24gfHwgIXRoaXMuZWxlbWVudCkgcmV0dXJuXHJcblxyXG4gICAgaWYgKHRoaXMub3BlbmluZ1RpbWVvdXQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMub3BlbmluZ1RpbWVvdXQpXHJcbiAgICAgIHRoaXMuYWZ0ZXJGYWRlSW4odGhpcy5lbGVtZW50KVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY2MtaW52aXNpYmxlJykpIHtcclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS5tYXhIZWlnaHQgPSAnJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFmdGVyVHJhbnNpdGlvbiA9ICgpID0+IHRoaXMuYWZ0ZXJGYWRlT3V0KHRoaXMuZWxlbWVudClcclxuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy50cmFuc2l0aW9uRW5kLCB0aGlzLmFmdGVyVHJhbnNpdGlvbilcclxuXHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBhZnRlckZhZGVPdXQoZWwpIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgLy8gYWZ0ZXIgY2xvc2UgYW5kIGJlZm9yZSBvcGVuLCB0aGUgZGlzcGxheSBzaG91bGQgYmUgbm9uZVxyXG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLnRyYW5zaXRpb25FbmQsIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uKVxyXG4gICAgdGhpcy5hZnRlclRyYW5zaXRpb24gPSBudWxsXHJcbiAgfVxyXG5cclxuICBpc09wZW4oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLmVsZW1lbnQgJiZcclxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICcnICYmXHJcbiAgICAgICh0aGlzLmhhc1RyYW5zaXRpb24gPyAhdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY2MtaW52aXNpYmxlJykgOiB0cnVlKVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUmV2b2tlQnV0dG9uKHNob3cpIHtcclxuICAgIGlmICh0aGlzLnJldm9rZUJ0bikgdGhpcy5yZXZva2VCdG4uc3R5bGUuZGlzcGxheSA9IHNob3cgPyAnJyA6ICdub25lJ1xyXG4gIH1cclxuXHJcbiAgcmV2b2tlQ2hvaWNlKHByZXZlbnRPcGVuKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRydWVcclxuICAgIHRoaXMuY2xlYXJTdGF0dXNlcygpXHJcblxyXG4gICAgdGhpcy5lbWl0KCBcInJldm9rZUNob2ljZVwiIClcclxuXHJcbiAgICBpZiAoIXByZXZlbnRPcGVuKSB7XHJcbiAgICAgIHRoaXMuYXV0b09wZW4oKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFzIHRoZSB1c2VyIHJlc3BvbmRlZCB0byB0aGUgYmFubmVyXHJcbiAgICogQHJldHVybiB7IGJvb2xlYW4gfSAtIHRydWUgaWYgYW55IGNvb2tpZXMgaGF2ZSBiZWVuIHNldFxyXG4gICAqL1xyXG4gIGhhc0Fuc3dlcmVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RhdHVzZXMoKS5zb21lKCBzdGF0dXMgPT4gISFzdGF0dXMgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGlmIHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvIGFsbCBvZiB0aGUgY2F0ZWdvcmllc1xyXG4gICAqIEByZXR1cm4geyBhcnJheTxib29sZWFuPiB9IC0gdHJ1ZSBpZiBjb25zZW50IGhhcyBiZWVuIGdpdmVuXHJcbiAgICovXHJcbiAgaGFzQ29uc2VudGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RhdHVzZXMoKS5tYXAoIHN0YXR1cyA9PiBzdGF0dXMgPT09IHN0YXR1c0FsbG93IHx8IHN0YXR1cyA9PT0gc3RhdHVzRGlzbWlzcyApXHJcbiAgfVxyXG5cclxuICAvLyBvcGVucyB0aGUgcG9wdXAgaWYgbm8gYW5zd2VyIGhhcyBiZWVuIGdpdmVuXHJcbiAgYXV0b09wZW4oKSB7XHJcbiAgICBjb25zdCBoYXNBbnN3ZXJlZCA9IHRoaXMuaGFzQW5zd2VyZWQoKVxyXG4gICAgaWYgKCFoYXNBbnN3ZXJlZCAmJiB0aGlzLm9wdGlvbnMuZW5hYmxlZCkge1xyXG4gICAgICB0aGlzLm9wZW4oKVxyXG4gICAgfSBlbHNlIGlmIChoYXNBbnN3ZXJlZCAmJiB0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlUmV2b2tlQnV0dG9uKHRydWUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogXHJcbiAgICogU2V0J3MgY29va2llIHN0YXR1c2VzXHJcbiAgICogQHBhcmFtIHsgc3RyaW5nPHN0YXR1cz4gfSBhbGxPclVuZGVmICAgICAgLSBJZiB0aGlzIGlzIHRoZSBvbmx5IHBhcmFtLCBzZXQgQUxMIGlmIG5vdCwgc2V0IFVuY2F0ZWdvcml6ZWQgY29va2llcyBzdGF0dXNlcyBzZXQgdG8gdmFsdWUuXHJcbiAgICogQHBhcmFtIHsgc3RyaW5nPHN0YXR1cz4gfSBlc3NlbnRpYWwgICAgICAgLSBFc3NlbnRpYWwgQ29va2llcyBzdGF0dXMgc2V0IHRvIHZhbHVlXHJcbiAgICogQHBhcmFtIHsgc3RyaW5nPHN0YXR1cz4gfSBwZXJzb25hbGl6YXRpb24gLSBQcmVmZXJlbmNlcyAvIEZ1bmN0aW9uYWxpdHkgc2V0IHRvIHZhbHVlXHJcbiAgICogQHBhcmFtIHsgc3RyaW5nPHN0YXR1cz4gfSBhbmFseXRpY3MgICAgICAgLSBBbmFseXRpcyBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcclxuICAgKiBAcGFyYW0geyBzdHJpbmc8c3RhdHVzPiB9IG1hcmtldGluZyAgICAgICAtIE1hcmtldGluZyBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcclxuICAgKiBAcmV0dXJuIHsgdW5kZWZpbmVkIH1cclxuICAqL1xyXG4gIHNldFN0YXR1c2VzKCkge1xyXG4gICAgY29uc3QgeyBuYW1lLCBleHBpcnlEYXlzLCBkb21haW4sIHBhdGgsIHNlY3VyZSB9ID0gdGhpcy5vcHRpb25zLmNvb2tpZVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUNhdGVnb3J5U3RhdHVzID0gKCBjYXRlZ29yeU5hbWUsIHN0YXR1cyApID0+IHtcclxuICAgICAgaWYgKGlzVmFsaWRTdGF0dXMoc3RhdHVzKSkge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZU5hbWUgPSBuYW1lKydfJytjYXRlZ29yeU5hbWVcclxuICAgICAgICBjb25zdCBjaG9zZW5CZWZvcmUgPSBzdGF0dXNlcy5pbmRleE9mKCBnZXRDb29raWUoY29va2llTmFtZSkgKSA+PSAwXHJcbiAgICAgICAgc2V0Q29va2llKGNvb2tpZU5hbWUsIHN0YXR1cywgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmUpXHJcbiAgICAgICAgdGhpcy5lbWl0KCBcInN0YXR1c0NoYW5nZWRcIiwgY29va2llTmFtZSwgc3RhdHVzLCBjaG9zZW5CZWZvcmUgKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2xlYXJTdGF0dXNlcygpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICggYXJndW1lbnRzLmxlbmd0aCA9PT0gMCApIHtcclxuICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKCBjYXRlZ29yeSA9PiB1cGRhdGVDYXRlZ29yeVN0YXR1cyggY2F0ZWdvcnksIHRoaXMudXNlckNhdGVnb3JpZXNbIGNhdGVnb3J5IF0gKSApXHJcbiAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpe1xyXG4gICAgICBjYXRlZ29yaWVzLmZvckVhY2goIGNhdGVnb3J5ID0+IHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCBjYXRlZ29yeSwgYXJndW1lbnRzWyAwIF0gKSApXHJcbiAgICB9IGVsc2UgaWYgKCBhcmd1bWVudHMubGVuZ3RoID4gMSApIHtcclxuICAgICAgYXJndW1lbnRzLmZvckVhY2goICggY2F0ZWdvcnlTdGF0dXMsIGluZGV4ICkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCB0aGlzLnVzZXJDYXRlZ29yaWVzWyBpbmRleCBdLCBjYXRlZ29yeVN0YXR1cyApXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYWxsIGNvb2tpZSBjYXRlZ29pZXMgc3RhdHVzZXNcclxuICAgKiBAcmV0dXJuIHsgYXJyYXk8c3RyaW5nPiB9IC0gY29va2llIGNhdGVnb3JpZXMgc3RhdHVzIGluIG9yZGVyIG9mIGNhdGVnb3JpZXNcclxuICAgKi9cclxuICBnZXRTdGF0dXNlcygpIHtcclxuICAgIHJldHVybiBjYXRlZ29yaWVzLm1hcCggY2F0ZWdvcnlOYW1lID0+IGdldENvb2tpZSh0aGlzLm9wdGlvbnMuY29va2llLm5hbWUrJ18nK2NhdGVnb3J5TmFtZSkgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgYWxsIGNvb2tpZSBjYXRlZ29pZXMgc3RhdHVzZXNcclxuICAgKi9cclxuICBjbGVhclN0YXR1c2VzKCkge1xyXG4gICAgY29uc3QgeyBuYW1lLCBkb21haW4sIHBhdGggfSA9IHRoaXMub3B0aW9ucy5jb29raWVcclxuICAgIGNhdGVnb3JpZXMuZm9yRWFjaCggY2F0ZWdvcnlOYW1lID0+IHtcclxuICAgICAgc2V0Q29va2llKG5hbWUrJ18nK2NhdGVnb3J5TmFtZSwgJycsIC0xLCBkb21haW4sIHBhdGgpXHJcbiAgICB9KVxyXG4gIH1cclxuICBcclxuICBjYW5Vc2VDb29raWVzKCkge1xyXG4gICAgaWYgKCF3aW5kb3cubmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQgfHwgd2luZG93LkNvb2tpZXNPSyB8fCB3aW5kb3cubmF2aWdhdG9yLkNvb2tpZXNPSyApIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGF0dXNlc1ZhbHVlcyA9IHRoaXMuZ2V0U3RhdHVzZXMoKVxyXG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0YXR1c2VzVmFsdWVzLm1hcCggKCBzdGF0dXMsIGluZGV4ICkgPT4gKCB7IFtjYXRlZ29yaWVzW2luZGV4XV06IGlzVmFsaWRTdGF0dXMoIHN0YXR1cyApIH0gKSApXHJcbiAgICBjb25zdCBoYXNNYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoIG1hdGNoID0+IG1hdGNoW09iamVjdC5rZXlzKG1hdGNoKVswXV0gKS5sZW5ndGggPiAwXHJcbiAgICBzdGF0dXNlc1ZhbHVlcy5mb3JFYWNoKCAoIHN0YXR1cywgaW5kZXggKSA9PlxyXG4gICAgICB0aGlzLnVzZXJDYXRlZ29yaWVzWyBjYXRlZ29yaWVzWyBpbmRleCBdIF0gPT09IHN0YXR1c1xyXG4gICAgICAgID8gc3RhdHVzIDogdGhpcy51c2VyQ2F0ZWdvcmllc1sgY2F0ZWdvcmllc1sgaW5kZXggXSBdIClcclxuXHJcbiAgICByZXR1cm4gaGFzTWF0Y2hlc1xyXG4gIH1cclxuXHJcbiAgLy8gdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0XHJcbiAgZ2V0UG9zaXRpb25DbGFzc2VzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5wb3NpdGlvbi5zcGxpdCggJy0nICkubWFwKCBwb3MgPT4gJ2NjLScrcG9zKVxyXG4gIH1cclxuXHJcbiAgZ2V0UG9wdXBDbGFzc2VzKCkge1xyXG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9uc1xyXG4gICAgbGV0IHBvc2l0aW9uU3R5bGUgPVxyXG4gICAgICBvcHRzLnBvc2l0aW9uID09ICd0b3AnIHx8IG9wdHMucG9zaXRpb24gPT0gJ2JvdHRvbSdcclxuICAgICAgICA/ICdiYW5uZXInXHJcbiAgICAgICAgOiAnZmxvYXRpbmcnXHJcblxyXG4gICAgaWYgKGlzTW9iaWxlKCkgJiYgb3B0cy5tb2JpbGVGb3JjZUZsb2F0KSB7XHJcbiAgICAgIHBvc2l0aW9uU3R5bGUgPSAnZmxvYXRpbmcnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IFtcclxuICAgICAgJ2NjLScgKyBwb3NpdGlvblN0eWxlLCAvLyBmbG9hdGluZyBvciBiYW5uZXJcclxuICAgICAgJ2NjLXR5cGUtJyArIG9wdHMudHlwZSwgLy8gYWRkIHRoZSBjb21wbGlhbmNlIHR5cGVcclxuICAgICAgJ2NjLXRoZW1lLScgKyBvcHRzLnRoZW1lLCAvLyBhZGQgdGhlIHRoZW1lXHJcbiAgICBdXHJcblxyXG4gICAgaWYgKG9wdHMuc3RhdGljKSB7XHJcbiAgICAgIGNsYXNzZXMucHVzaCgnY2Mtc3RhdGljJylcclxuICAgIH1cclxuXHJcbiAgICBjbGFzc2VzLnB1c2guYXBwbHkoY2xhc3NlcywgdGhpcy5nZXRQb3NpdGlvbkNsYXNzZXMoKSlcclxuXHJcbiAgICAvLyB3ZSBvbmx5IGFkZCBleHRyYSBzdHlsZXMgaWYgYHBhbGV0dGVgIGhhcyBiZWVuIHNldCB0byBhIHZhbGlkIHZhbHVlXHJcbiAgICB0aGlzLmF0dGFjaEN1c3RvbVBhbGV0dGUodGhpcy5vcHRpb25zLnBhbGV0dGUpXHJcblxyXG4gICAgLy8gaWYgd2Ugb3ZlcnJpZGUgdGhlIHBhbGV0dGUsIGFkZCB0aGUgY2xhc3MgdGhhdCBlbmFibGVzIHRoaXNcclxuICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpIHtcclxuICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3RvcilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xhc3Nlc1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9wdXBJbm5lck1hcmt1cCgpIHtcclxuICAgIGNvbnN0IGludGVycG9sYXRlZCA9IHt9XHJcbiAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zXHJcblxyXG4gICAgLy8gcmVtb3ZlcyBsaW5rIGlmIHNob3dMaW5rIGlzIGZhbHNlXHJcbiAgICBpZiAoIW9wdHMuc2hvd0xpbmspIHtcclxuICAgICAgb3B0cy5lbGVtZW50cy5saW5rID0gJycgXHJcbiAgICAgIG9wdHMuZWxlbWVudHMubWVzc2FnZWxpbmsgPSBvcHRzLmVsZW1lbnRzLm1lc3NhZ2VcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3Qua2V5cyhvcHRzLmVsZW1lbnRzKS5mb3JFYWNoKCBwcm9wID0+IHtcclxuICAgICAgaW50ZXJwb2xhdGVkW3Byb3BdID0gaW50ZXJwb2xhdGVTdHJpbmcoXHJcbiAgICAgICAgb3B0cy5lbGVtZW50c1twcm9wXSxcclxuICAgICAgICBuYW1lID0+IHtcclxuICAgICAgICAgIGNvbnN0IHN0ciA9IG9wdHMuY29udGVudFtuYW1lXVxyXG4gICAgICAgICAgcmV0dXJuIG5hbWUgJiYgdHlwZW9mIHN0ciA9PSAnc3RyaW5nJyAmJiBzdHIubGVuZ3RoID8gc3RyIDogJydcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgIH0pXHJcblxyXG4gICAgLy8gY2hlY2tzIGlmIHRoZSB0eXBlIGlzIHZhbGlkIGFuZCBkZWZhdWx0cyB0byBpbmZvIGlmIGl0J3Mgbm90XHJcbiAgICBsZXQgY29tcGxpYW5jZVR5cGUgPSBvcHRzLmNvbXBsaWFuY2Vbb3B0cy50eXBlXVxyXG4gICAgaWYgKCFjb21wbGlhbmNlVHlwZSkge1xyXG4gICAgICBjb21wbGlhbmNlVHlwZSA9IG9wdHMuY29tcGxpYW5jZS5pbmZvXHJcbiAgICB9XHJcblxyXG4gICAgLy8gYnVpbGQgdGhlIGNvbXBsaWFuY2UgdHlwZXMgZnJvbSB0aGUgYWxyZWFkeSBpbnRlcnBvbGF0ZWQgYGVsZW1lbnRzYFxyXG4gICAgaW50ZXJwb2xhdGVkLmNvbXBsaWFuY2UgPSBpbnRlcnBvbGF0ZVN0cmluZyggY29tcGxpYW5jZVR5cGUsIG5hbWUgPT4gaW50ZXJwb2xhdGVkW25hbWVdIClcclxuXHJcbiAgICAvLyBjaGVja3MgaWYgdGhlIGxheW91dCBpcyB2YWxpZCBhbmQgZGVmYXVsdHMgdG8gYmFzaWMgaWYgaXQncyBub3RcclxuICAgIGxldCBsYXlvdXQgPSBvcHRzLmxheW91dHNbb3B0cy5sYXlvdXRdXHJcbiAgICBpZiAoIWxheW91dCkge1xyXG4gICAgICBsYXlvdXQgPSBvcHRzLmxheW91dHMuYmFzaWNcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGludGVycG9sYXRlU3RyaW5nKGxheW91dCwgbWF0Y2ggPT5pbnRlcnBvbGF0ZWRbbWF0Y2hdIClcclxuICB9XHJcblxyXG4gIGFwcGVuZE1hcmt1cChtYXJrdXApIHtcclxuICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnNcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBjb250ID1cclxuICAgICAgb3B0cy5jb250YWluZXIgJiYgb3B0cy5jb250YWluZXIubm9kZVR5cGUgPT09IDFcclxuICAgICAgICA/IG9wdHMuY29udGFpbmVyXHJcbiAgICAgICAgOiBkb2N1bWVudC5ib2R5XHJcblxyXG4gICAgZGl2LmlubmVySFRNTCA9IG1hcmt1cFxyXG5cclxuICAgIGNvbnN0IGVsID0gZGl2LmNoaWxkcmVuWzBdXHJcblxyXG4gICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cclxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLXdpbmRvdycpICYmIHRoaXMuaGFzVHJhbnNpdGlvbikge1xyXG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKVxyXG4gICAgfVxyXG5cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5oYW5kbGVCdXR0b25DbGljayggZXZlbnQgKSApXHJcbiAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKCAnLmNjLWJ0biBbdHlwZT1cImNoZWNrYm94XCJdJyApLmZvckVhY2goIGNoZWNrYm94ID0+IHtcclxuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICB0aGlzLnVzZXJDYXRlZ29yaWVzWyBjaGVja2JveC5uYW1lIF0gPSBjaGVja2JveC5jaGVja2VkID8gJ0FMTE9XJyA6ICdERU5ZJ1xyXG4gICAgICB9KVxyXG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBldmVudCA9PiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkpIClcclxuICAgIH0pXHJcbiAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNjLWluZm9cIikuZm9yRWFjaCggc2hvd0luZm8gPT4ge1xyXG4gICAgICBzaG93SW5mby5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG4gICAgICAgIGlmICggdGhpcyA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAgKSB7XHJcbiAgICAgICAgICB0aGlzLmJsdXIoKVxyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKG9wdHMuYXV0b0F0dGFjaCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmICghY29udC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICBjb250LmFwcGVuZENoaWxkKGVsKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb250Lmluc2VydEJlZm9yZShlbCwgY29udC5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKCBlcnJvciApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiTm8gY29udGFpbmVyIHRvIGF0dGFjaCB0b28uIE1ha2Ugc3VyZSB0aGUgRE9NIGhhcyBsb2FkZWQuIElzIHlvdXIgc2NyaXB0IGxvYWRlZCBqdXN0IGJlZm9yZSB0aGUgYDwvYm9keT5gIHRhZz9cIiApXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZWxcclxuICB9XHJcblxyXG4gIGhhbmRsZUJ1dHRvbkNsaWNrKGV2ZW50KSB7XHJcbiAgICAvLyByZXR1cm5zIHRoZSBwYXJlbnQgZWxlbWVudCB3aXRoIHRoZSBzcGVjaWZpZWQgY2xhc3MsIG9yIHRoZSBvcmlnaW5hbCBlbGVtZW50IC0gbnVsbCBpZiBub3QgZm91bmRcclxuICAgIGNvbnN0IGJ0biA9IHRyYXZlcnNlRE9NUGF0aChldmVudC50YXJnZXQsICdjYy1idG4nKSB8fCBldmVudC50YXJnZXRcclxuICAgIFxyXG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1idG4nICkgJiYgYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLXNhdmUnICkpe1xyXG4gICAgICB0aGlzLnNldFN0YXR1c2VzKClcclxuICAgICAgdGhpcy5jbG9zZSh0cnVlKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYnRuJyApKSB7XHJcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBidG4uY2xhc3NOYW1lLm1hdGNoKFxyXG4gICAgICAgIG5ldyBSZWdFeHAoJ1xcXFxiY2MtKCcgKyBzdGF0dXNlcy5tYXAoIHN0ciA9PiBzdHIucmVwbGFjZSgvW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2csICdcXFxcJCYnKSApLmpvaW4oJ3wnKSArICcpXFxcXGInKVxyXG4gICAgICApXHJcbiAgICAgIGNvbnN0IG1hdGNoID0gKG1hdGNoZXMgJiYgbWF0Y2hlc1sxXSkgfHwgZmFsc2VcclxuICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhtYXRjaClcclxuICAgICAgICB0aGlzLmNsb3NlKHRydWUpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWNsb3NlJyApKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdHVzZXMoc3RhdHVzRGlzbWlzcylcclxuICAgICAgdGhpcy5jbG9zZSh0cnVlKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtcmV2b2tlJyApKSB7XHJcbiAgICAgIHRoaXMucmV2b2tlQ2hvaWNlKClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhdHRhY2hDdXN0b21QYWxldHRlKHBhbGV0dGUpIHtcclxuICAgIGNvbnN0IGhhc2hTdHIgPSBoYXNoKEpTT04uc3RyaW5naWZ5KHBhbGV0dGUpKVxyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSAnY2MtY29sb3Itb3ZlcnJpZGUtJyArIGhhc2hTdHJcclxuICAgIGNvbnN0IGlzVmFsaWQgPSBpc1BsYWluT2JqZWN0KHBhbGV0dGUpXHJcblxyXG4gICAgdGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yID0gaXNWYWxpZCA/IHNlbGVjdG9yIDogbnVsbFxyXG5cclxuICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgIGFkZEN1c3RvbVN0eWxlc2hlZXQoaGFzaFN0ciwgcGFsZXR0ZSwgJy4nICsgc2VsZWN0b3IpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNWYWxpZFxyXG4gIH1cclxuXHJcblxyXG4gIGdldEV2ZW50UGF0aCggZXZlbnQgKSB7XHJcbiAgICBjb25zdCBwYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoID8gZXZlbnQuY29tcG9zZWRQYXRoKCkgOiAoZnVuY3Rpb24gKCBhcnIsIGVsZW1lbnQgKSB7XHJcbiAgICAgIHdoaWxlICggZWxlbWVudCApIHtcclxuICAgICAgICBhcnIucHVzaCggZWxlbWVudCApXHJcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBhcnJcclxuICAgIH0pKFtdLGV2ZW50LnRhcmdldCApXHJcbiAgICBpZiAoICFwYXRoICkge1xyXG4gICAgICBjb25zb2xlLndhcm4oIFwiJy5wYXRoJyAmICcuY29tcG9zZWRQYXRoJyBmYWlsZWQgdG8gZ2VuZXJhdGUgYW4gZXZlbnQgcGF0aC5cIiApXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhdGhcclxuICB9XHJcblxyXG4gIGFwcGx5QXV0b0Rpc21pc3MoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGVuYWJsZWQsXHJcbiAgICAgIGRpc21pc3NPblRpbWVvdXQgIDogZGVsYXksXHJcbiAgICAgIGRpc21pc3NPblNjcm9sbCAgIDpzY3JvbGxSYW5nZSxcclxuICAgICAgZGlzbWlzc09uTGlua0NsaWNrLFxyXG4gICAgICBkaXNtaXNzT25XaW5kb3dDbGljayxcclxuICAgICAgZGlzbWlzc09uS2V5UHJlc3NcclxuICAgIH0gPSB0aGlzLm9wdGlvbnNcclxuXHJcbiAgICBpZiAoIGVuYWJsZWQgKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgZGVsYXkgPT0gJ251bWJlcicgJiYgZGVsYXkgPj0gMCkge1xyXG4gICAgICAgIHRoaXMuZGlzbWlzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KCAoKT0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoc3RhdHVzRGlzbWlzcylcclxuICAgICAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcclxuICAgICAgICB9LCBNYXRoLmZsb29yKGRlbGF5KSlcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2Nyb2xsUmFuZ2UgPT0gJ251bWJlcicgJiYgc2Nyb2xsUmFuZ2UgPj0gMCkge1xyXG4gICAgICAgIHRoaXMub25XaW5kb3dTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gTWF0aC5mbG9vcihzY3JvbGxSYW5nZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhzdGF0dXNEaXNtaXNzKVxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKHRydWUpXHJcblxyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vbldpbmRvd1Njcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pXHJcbiAgICAgICAgICAgIHRoaXMub25XaW5kb3dTY3JvbGwgPSBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uV2luZG93U2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSlcclxuICAgICAgfSBlbHNlIGlmIChkaXNtaXNzT25XaW5kb3dDbGljaykge1xyXG4gICAgICAgIHRoaXMub25XaW5kb3dDbGljayA9IGV2dCA9PiB7XHJcbiAgICAgICAgICBpZiAoICFnZXRFdmVudFBhdGgoIGV2dCApLnNvbWUoIGVsZW1lbnQgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlnbm9yZUNsaWNrc0Zyb20uc29tZSggaWdub3JlZENsaWNrID0+XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGlnbm9yZWRDbGljayApXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKHN0YXR1c0Rpc21pc3MpXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25XaW5kb3dDbGljaylcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbldpbmRvd0NsaWNrKVxyXG4gICAgICAgICAgICB0aGlzLm9uV2luZG93Q2xpY2sgPSBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uV2luZG93Q2xpY2spXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbldpbmRvd0NsaWNrKVxyXG4gICAgICB9IGVsc2UgaWYgKGRpc21pc3NPbkxpbmtDbGljaykge1xyXG4gICAgICAgIHRoaXMub25MaW5rQ2xpY2sgPSBldnQgPT4ge1xyXG4gICAgICAgICAgaWYgKCBnZXRFdmVudFBhdGgoIGV2dCApLnNvbWUoIGVsZW0gPT4gdHlwZW9mIGVsZW0udGFnTmFtZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbS50YWdOYW1lID09PSAnQScgKSApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyggc3RhdHVzRGlzbWlzcyApXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoIHRydWUgKVxyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTGlua0NsaWNrKVxyXG4gICAgICAgICAgICB0aGlzLm9uTGlua0NsaWNrID0gbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTGlua0NsaWNrKVxyXG4gICAgICB9IGVsc2UgaWYgKCBkaXNtaXNzT25LZXlQcmVzcyApIHtcclxuICAgICAgICAgIHRoaXMub25LZXlQcmVzcyA9IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudFxyXG4gICAgICAgICAgICBpZiAoIGtleUNvZGUgPT09IDEzICkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoIHN0YXR1c0FsbG93IClcclxuICAgICAgICAgICAgICB0aGlzLmNsb3NlKCB0cnVlIClcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgga2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKCBzdGF0dXNEaXNtaXNzIClcclxuICAgICAgICAgICAgICB0aGlzLmNsb3NlKCB0cnVlIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdvbmtleXByZXNzJywgdGhpcy5vbktleVByZXNzIClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXBwbHlSZXZva2VCdXR0b24oKSB7XHJcbiAgICAvLyByZXZva2FibGUgaXMgdHJ1ZSBpZiBhZHZhbmNlZCBjb21wbGlhbmNlIGlzIHNlbGVjdGVkXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnR5cGUgIT0gJ2luZm8nKSB0aGlzLm9wdGlvbnMucmV2b2thYmxlID0gdHJ1ZVxyXG4gICAgLy8gYW5pbWF0ZVJldm9rYWJsZSBmYWxzZSBmb3IgbW9iaWxlIGRldmljZXNcclxuICAgIGlmIChpc01vYmlsZSgpKSB0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSA9IGZhbHNlXHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcclxuICAgICAgY29uc3QgY2xhc3NlcyA9IHRoaXMuZ2V0UG9zaXRpb25DbGFzc2VzKClcclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRlUmV2b2thYmxlKSB7XHJcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdjYy1hbmltYXRlJylcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKSB7XHJcbiAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3RvcilcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnRoZW1lKSB7XHJcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdjYy10aGVtZS0nK3RoaXMub3B0aW9ucy50aGVtZSlcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyggdGhpcy5vcHRpb25zLmNvbnRlbnQucG9saWN5IClcclxuICAgICAgY29uc3QgcmV2b2tlQnRuID0gdGhpcy5vcHRpb25zLnJldm9rZUJ0blxyXG4gICAgICAgIC5yZXBsYWNlKCd7e2NsYXNzZXN9fScsIGNsYXNzZXMuam9pbignICcpKVxyXG4gICAgICAgIC5yZXBsYWNlKCd7e3BvbGljeX19JywgdGhpcy5vcHRpb25zLmNvbnRlbnQucG9saWN5KVxyXG5cclxuICAgICAgdGhpcy5yZXZva2VCdG4gPSB0aGlzLmFwcGVuZE1hcmt1cChyZXZva2VCdG4pXHJcblxyXG4gICAgICBjb25zdCBidG4gPSB0aGlzLnJldm9rZUJ0blxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUpIHtcclxuICAgICAgICBjb25zdCBvbk1vdXNlTW92ZSA9IHRocm90dGxlKGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgbGV0IGFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICBjb25zdCBtaW5ZID0gMjBcclxuICAgICAgICAgIGNvbnN0IG1heFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMFxyXG5cclxuICAgICAgICAgIGlmICggKCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtdG9wJyApICYmIGV2dC5jbGllbnRZIDwgbWluWSApIHx8XHJcbiAgICAgICAgICAgICAgICAoIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1ib3R0b20nICkgJiYgZXZ0LmNsaWVudFkgPiBtYXhZICkgKSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoYWN0aXZlICYmICFidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYWN0aXZlJyApICkge1xyXG4gICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCAnY2MtYWN0aXZlJyApXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCAhYWN0aXZlICYmIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1hY3RpdmUnICkgKSB7XHJcbiAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoICdjYy1hY3RpdmUnIClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCAyMDApXHJcblxyXG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSBvbk1vdXNlTW92ZVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBkZXN0cm95KCl7XHJcbiAgICBjb25zb2xlLndhcm4oIFwiRGVzdHJveWluZy4uLlwiKVxyXG4gICAgaWYgKCB0aGlzLmVsZW1lbnQgKXtcclxuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpXHJcbiAgICB9XHJcbiAgICBpZiAoIHRoaXMucmV2b2tlQnRuICl7XHJcbiAgICAgIHRoaXMucmV2b2tlQnRuLnJlbW92ZSgpXHJcbiAgICB9XHJcbiAgICBpZiAoIHRoaXMub25XaW5kb3dTY3JvbGwgKXtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25XaW5kb3dTY3JvbGwgKVxyXG4gICAgfVxyXG4gICAgaWYgKCB0aGlzLm9uV2luZG93Q2xpY2sgKSB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25XaW5kb3dDbGljayApXHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25XaW5kb3dDbGljaylcclxuICAgIH1cclxuICAgIGlmICggdGhpcy5vbkxpbmtDbGljayApIHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkxpbmtDbGljaylcclxuICAgIH1cclxuICAgIGlmICggdGhpcy5vbktleVByZXNzICkge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ29ua2V5cHJlc3MnLCB0aGlzLm9uS2V5UHJlc3MgKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8vIE1ha2UgdGhpcyBmYWxzZSBpZiB5b3Ugd2FudCB0byBkaXNhYmxlIGFsbCByZWdpb25hbCBvdmVycmlkZXMgZm9yIHNldHRpbmdzLlxyXG4gIC8vIElmIHRydWUsIG9wdGlvbnMgY2FuIGRpZmZlciBieSBjb3VudHJ5LCBkZXBlbmRpbmcgb24gdGhlaXIgY29va2llIGxhdy5cclxuICAvLyBJdCBkb2VzIG5vdCBhZmZlY3QgaGlkaW5nIHRoZSBwb3B1cCBmb3IgY291bnRyaWVzIHRoYXQgZG8gbm90IGhhdmUgY29va2llIGxhdy5cclxuICByZWdpb25hbExhdzogdHJ1ZSxcclxuXHJcbiAgLy8gY291bnRyaWVzIHRoYXQgZW5mb3JjZSBzb21lIHZlcnNpb24gb2YgYSBjb29raWUgbGF3XHJcbiAgaGFzTGF3OiBbXHJcbiAgICAnQVQnLFxyXG4gICAgJ0JFJyxcclxuICAgICdCRycsXHJcbiAgICAnSFInLFxyXG4gICAgJ0NaJyxcclxuICAgICdDWScsXHJcbiAgICAnREsnLFxyXG4gICAgJ0VFJyxcclxuICAgICdGSScsXHJcbiAgICAnRlInLFxyXG4gICAgJ0RFJyxcclxuICAgICdFTCcsXHJcbiAgICAnSFUnLFxyXG4gICAgJ0lFJyxcclxuICAgICdJVCcsXHJcbiAgICAnTFYnLFxyXG4gICAgJ0xUJyxcclxuICAgICdMVScsXHJcbiAgICAnTVQnLFxyXG4gICAgJ05MJyxcclxuICAgICdOTycsXHJcbiAgICAnUEwnLFxyXG4gICAgJ1BUJyxcclxuICAgICdTSycsXHJcbiAgICAnRVMnLFxyXG4gICAgJ1NFJyxcclxuICAgICdHQicsXHJcbiAgICAnVUsnLFxyXG4gICAgJ0dSJyxcclxuICAgICdFVScsXHJcbiAgICAnUk8nXHJcbiAgXSxcclxuXHJcbiAgLy8gY291bnRyaWVzIHRoYXQgc2F5IHRoYXQgYWxsIGNvb2tpZSBjb25zZW50IGNob2ljZXMgbXVzdCBiZSByZXZva2FibGUgKGEgdXNlciBtdXN0IGJlIGFibGUgdG9vIGNoYW5nZSB0aGVpciBtaW5kKVxyXG4gIHJldm9rYWJsZTogW1xyXG4gICAgJ0hSJyxcclxuICAgICdDWScsXHJcbiAgICAnREsnLFxyXG4gICAgJ0VFJyxcclxuICAgICdGUicsXHJcbiAgICAnREUnLFxyXG4gICAgJ0xWJyxcclxuICAgICdMVCcsXHJcbiAgICAnTkwnLFxyXG4gICAgJ05PJyxcclxuICAgICdQVCcsXHJcbiAgICAnRVMnXHJcbiAgXSxcclxuXHJcbiAgLy8gY291bnRyaWVzIHRoYXQgc2F5IHRoYXQgYSBwZXJzb24gY2FuIG9ubHkgXCJjb25zZW50XCIgaWYgdGhlIGV4cGxpY2l0bHkgY2xpY2sgb24gXCJJIGFncmVlXCIuXHJcbiAgLy8gaW4gdGhlc2UgY291bnRyaWVzLCBjb25zZW50IGNhbm5vdCBiZSBpbXBsaWVkIHZpYSBhIHRpbWVvdXQgb3IgYnkgc2Nyb2xsaW5nIGRvd24gdGhlIHBhZ2VcclxuICBleHBsaWNpdEFjdGlvbjogWydIUicsICdJVCcsICdFUycsICdOTyddXHJcbn0iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuY29uc3QgdG9FcnJvciA9IG9iaiA9PiBuZXcgRXJyb3IoJ0Vycm9yIFsnICsgKG9iai5jb2RlIHx8ICdVTktOT1dOJykgKyAnXTogJyArIG9iai5lcnJvcilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyBUaGUgZGVmYXVsdCB0aW1lb3V0IGlzIDUgc2Vjb25kcy4gVGhpcyBpcyBtYWlubHkgbmVlZGVkIHRvIGNhdGNoIEpTT05QIHJlcXVlc3RzIHRoYXQgZXJyb3IuXHJcbiAgLy8gT3RoZXJ3aXNlIHRoZXJlIGlzIG5vIGVhc3kgd2F5IHRvIGNhdGNoIEpTT05QIGVycm9ycy4gVGhhdCBtZWFucyB0aGF0IGlmIGEgSlNPTlAgZmFpbHMsIHRoZVxyXG4gIC8vIGFwcCB3aWxsIHRha2UgYHRpbWVvdXRgIG1pbGxpc2Vjb25kcyB0byByZWFjdCB0byBhIEpTT05QIG5ldHdvcmsgZXJyb3IuXHJcbiAgdGltZW91dDogNTAwMCxcclxuXHJcbiAgLy8gdGhlIG9yZGVyIHRoYXQgc2VydmljZXMgd2lsbCBiZSBhdHRlbXB0ZWQgaW5cclxuICBzZXJ2aWNlczogW1xyXG4gICAgJ2lwaW5mbydcclxuXHJcbiAgICAvKlxyXG5cclxuICAgIC8vICdpcGluZm9kYicgcmVxdWlyZXMgc29tZSBvcHRpb25zLCBzbyB3ZSBkZWZpbmUgaXQgdXNpbmcgYW4gb2JqZWN0XHJcbiAgICAvLyB0aGlzIG9iamVjdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIHRoZSBzZXJ2aWNlXHJcblxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnaXBpbmZvZGInLFxyXG4gICAgICBpbnRlcnBvbGF0ZVVybDoge1xyXG4gICAgICAgIC8vIG9idmlvdXNseSwgdGhpcyBpcyBhIGZha2Uga2V5XHJcbiAgICAgICAgYXBpX2tleTogJ3ZPZ0kzNzQ4ZG5JeXRJcnNKY3hTN3FzRGY2a2JKa0U5bE40eUVEclhBcVhjS1VOdmpqWlBveDNla1hxbU1NbGQnXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGFzIHdlbGwgYXMgZGVmaW5pbmcgYW4gb2JqZWN0LCB5b3UgY2FuIGRlZmluZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBvYmplY3RcclxuXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB7bmFtZTogJ2lwaW5mb2RiJ31cclxuICAgIH0sXHJcblxyXG4gICAgKi9cclxuICBdLFxyXG5cclxuICBzZXJ2aWNlRGVmaW5pdGlvbnM6IHtcclxuICAgIGlwaW5mbzogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggSlNPTiwgc28gd2Ugc2ltcGx5IG5lZWQgdG8gcGFyc2UgaXQgYW5kIHJldHVybiB0aGUgY291bnRyeSBjb2RlXHJcbiAgICAgICAgdXJsOiAnLy9pcGluZm8uaW8nLFxyXG4gICAgICAgIGhlYWRlcnM6IFsnQWNjZXB0OiBhcHBsaWNhdGlvbi9qc29uJ10sXHJcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGRvbmUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyZXNwb25zZSlcclxuICAgICAgICAgICAgcmV0dXJuIGpzb24uZXJyb3JcclxuICAgICAgICAgICAgICA/IHRvRXJyb3IoanNvbilcclxuICAgICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgICAgY29kZToganNvbi5jb3VudHJ5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRvRXJyb3Ioe2Vycm9yOiAnSW52YWxpZCByZXNwb25zZSAoJyArIGVyciArICcpJ30pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFRoaXMgc2VydmljZSByZXF1aXJlcyBhbiBvcHRpb24gdG8gZGVmaW5lIGBrZXlgLiBPcHRpb25zIGFyZSBwcm9pdmVkIHVzaW5nIG9iamVjdHMgb3IgZnVuY3Rpb25zXHJcbiAgICBpcGluZm9kYjogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggSlNPTiwgc28gd2Ugc2ltcGx5IG5lZWQgdG8gcGFyc2UgaXQgYW5kIHJldHVybiB0aGUgY291bnRyeSBjb2RlXHJcbiAgICAgICAgdXJsOlxyXG4gICAgICAgICAgJy8vYXBpLmlwaW5mb2RiLmNvbS92My9pcC1jb3VudHJ5Lz9rZXk9e2FwaV9rZXl9JmZvcm1hdD1qc29uJmNhbGxiYWNrPXtjYWxsYmFja30nLFxyXG4gICAgICAgIGlzU2NyaXB0OiB0cnVlLCAvLyB0aGlzIGlzIEpTT05QLCB0aGVyZWZvcmUgd2UgbXVzdCBzZXQgaXQgdG8gcnVuIGFzIGEgc2NyaXB0XHJcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGRvbmUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyZXNwb25zZSlcclxuICAgICAgICAgICAgcmV0dXJuIGpzb24uc3RhdHVzQ29kZSA9PSAnRVJST1InXHJcbiAgICAgICAgICAgICAgPyB0b0Vycm9yKHtlcnJvcjoganNvbi5zdGF0dXNNZXNzYWdlfSlcclxuICAgICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgICAgY29kZToganNvbi5jb3VudHJ5Q29kZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b0Vycm9yKHtlcnJvcjogJ0ludmFsaWQgcmVzcG9uc2UgKCcgKyBlcnIgKyAnKSd9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBtYXhtaW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBUaGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBhIEphdmFTY3JpcHQgZmlsZSB3aGljaCBkZWZpbmVzIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eS4gT25jZSBsb2FkZWQsIHdlIG11c3RcclxuICAgICAgICAvLyBtYWtlIGFuIGFkZGl0aW9uYWwgQUpBWCBjYWxsLiBUaGVyZWZvcmUgd2UgcHJvdmlkZSBhIGBkb25lYCBjYWxsYmFjayB0aGF0IGNhbiBiZSBjYWxsZWQgYXN5bmNocm9ub3VzbHlcclxuICAgICAgICB1cmw6ICcvL2pzLm1heG1pbmQuY29tL2pzL2FwaXMvZ2VvaXAyL3YyLjEvZ2VvaXAyLmpzJyxcclxuICAgICAgICBpc1NjcmlwdDogdHJ1ZSwgLy8gdGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggYSBKYXZhU2NyaXB0IGZpbGUsIHNvIGl0IG11c3QgYmUgcnVuIGFzIGEgc2NyaXB0XHJcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGRvbmUpIHtcclxuICAgICAgICAgIC8vIGlmIGV2ZXJ5dGhpbmcgd2VudCBva2F5IHRoZW4gYGdlb2lwMmAgV0lMTCBiZSBkZWZpbmVkXHJcbiAgICAgICAgICBpZiAoIXdpbmRvdy5nZW9pcDIpIHtcclxuICAgICAgICAgICAgZG9uZShcclxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICAnVW5leHBlY3RlZCByZXNwb25zZSBmb3JtYXQuIFRoZSBkb3dubG9hZGVkIHNjcmlwdCBzaG91bGQgaGF2ZSBleHBvcnRlZCBgZ2VvaXAyYCB0byB0aGUgZ2xvYmFsIHNjb3BlJ1xyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBnZW9pcDIuY291bnRyeShcclxuICAgICAgICAgICAgZnVuY3Rpb24obG9jYXRpb24pIHtcclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZG9uZSh7XHJcbiAgICAgICAgICAgICAgICAgIGNvZGU6IGxvY2F0aW9uLmNvdW50cnkuaXNvX2NvZGVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBkb25lKHRvRXJyb3IoZXJyKSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgICAgIGRvbmUodG9FcnJvcihlcnIpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgLy8gV2UgY2FuJ3QgcmV0dXJuIGFueXRoaW5nLCBiZWNhdXNlIHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIHNlY29uZCBBSkFYIGNhbGwgdG8gcmV0dXJuLlxyXG4gICAgICAgICAgLy8gVGhlbiB3ZSBjYW4gJ2NvbXBsZXRlJyB0aGUgc2VydmljZSBieSBwYXNzaW5nIGRhdGEgb3IgYW4gZXJyb3IgdG8gdGhlIGBkb25lYCBjYWxsYmFjay5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0IHsgc3RhdHVzRGVueSwgc3RhdHVzQWxsb3csIHN0YXR1c0Rpc21pc3MsIGNhdGVnb3JpZXMgfSAgZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgLy8gaWYgZmFsc2UsIHRoaXMgcHJldmVudHMgdGhlIHBvcHVwIGZyb20gc2hvd2luZyAodXNlZnVsIGZvciBnaXZpbmcgdG8gY29udHJvbCB0byBhbm90aGVyIHBpZWNlIG9mIGNvZGUpXHJcbiAgZW5hYmxlZDogdHJ1ZSxcclxuXHJcbiAgLy8gb3B0aW9uYWwgKGV4cGVjdGluZyBhIEhUTUwgZWxlbWVudCkgaWYgcGFzc2VkLCB0aGUgcG9wdXAgaXMgYXBwZW5kZWQgdG8gdGhpcyBlbGVtZW50LiBkZWZhdWx0IGlzIGBkb2N1bWVudC5ib2R5YFxyXG4gIGNvbnRhaW5lcjogbnVsbCxcclxuXHJcbiAgLy8gZGVmYXVsdHMgY29va2llIG9wdGlvbnMgLSBpdCBpcyBSRUNPTU1FTkRFRCB0byBzZXQgdGhlc2UgdmFsdWVzIHRvIGNvcnJlc3BvbmQgd2l0aCB5b3VyIHNlcnZlclxyXG4gIGNvb2tpZToge1xyXG4gICAgLy8gVGhpcyBpcyB0aGUgbmFtZSBvZiB0aGlzIGNvb2tpZSAtIHlvdSBjYW4gaWdub3JlIHRoaXNcclxuICAgIG5hbWU6ICdjb29raWVjb25zZW50X3N0YXR1cycsXHJcbiAgICAvLyBUaGlzIGlzIHRoZSB1cmwgcGF0aCB0aGF0IHRoZSBjb29raWUgJ25hbWUnIGJlbG9uZ3MgdG8uIFRoZSBjb29raWUgY2FuIG9ubHkgYmUgcmVhZCBhdCB0aGlzIGxvY2F0aW9uXHJcbiAgICBwYXRoOiBudWxsLFxyXG4gICAgLy8gVGhpcyBpcyB0aGUgZG9tYWluIHRoYXQgdGhlIGNvb2tpZSAnbmFtZScgYmVsb25ncyB0by4gVGhlIGNvb2tpZSBjYW4gb25seSBiZSByZWFkIG9uIHRoaXMgZG9tYWluLlxyXG4gICAgLy8gIC0gR3VpZGUgdG8gY29va2llIGRvbWFpbnMgLSBodHRwczovL3d3dy5teHNhc2hhLmV1L2Jsb2cvMjAxNC8wMy8wNC9kZWZpbml0aXZlLWd1aWRlLXRvLWNvb2tpZS1kb21haW5zL1xyXG4gICAgZG9tYWluOiBudWxsLFxyXG4gICAgLy8gVGhlIGNvb2tpZXMgZXhwaXJlIGRhdGUsIHNwZWNpZmllZCBpbiBkYXlzIChzcGVjaWZ5IC0xIGZvciBubyBleHBpcnkpXHJcbiAgICBleHBpcnlEYXlzOiBudWxsLFxyXG4gICAgLy8gSWYgdHJ1ZSB0aGUgY29va2llIHdpbGwgYmUgY3JlYXRlZCB3aXRoIHRoZSBzZWN1cmUgZmxhZy4gU2VjdXJlIGNvb2tpZXMgd2lsbCBvbmx5IGJlIHRyYW5zbWl0dGVkIHZpYSBIVFRQUy5cclxuICAgIHNlY3VyZTogbnVsbFxyXG4gIH0sXHJcblxyXG4gIC8vIGVhY2ggaXRlbSBkZWZpbmVzIHRoZSBpbm5lciB0ZXh0IGZvciB0aGUgZWxlbWVudCB0aGF0IGl0IHJlZmVyZW5jZXNcclxuICBjb250ZW50OiB7XHJcbiAgICBoZWFkZXIgOiAnQ29va2llcyB1c2VkIG9uIHRoZSB3ZWJzaXRlIScsXHJcbiAgICBtZXNzYWdlOiAnVGhpcyB3ZWJzaXRlIHVzZXMgY29va2llcyB0byBlbnN1cmUgeW91IGdldCB0aGUgYmVzdCBleHBlcmllbmNlIG9uIG91ciB3ZWJzaXRlLicsXHJcbiAgICBkaXNtaXNzOiAnR290IGl0IScsXHJcbiAgICBhbGxvdyAgOiAnQWxsb3cgY29va2llcycsXHJcbiAgICBkZW55ICAgOiAnRGVjbGluZScsXHJcbiAgICBsaW5rICAgOiAnTGVhcm4gbW9yZScsXHJcbiAgICBocmVmICAgOiAnaHR0cHM6Ly93d3cuY29va2llc2FuZHlvdS5jb20nLFxyXG4gICAgY2xvc2UgIDogJyYjeDI3NGMnLFxyXG4gICAgdGFyZ2V0IDogJ19ibGFuaycsXHJcbiAgICBwb2xpY3kgOiAnQ29va2llIFBvbGljeSdcclxuICB9LFxyXG5cclxuICAvLyBUaGlzIGlzIHRoZSBIVE1MIGZvciB0aGUgZWxlbWVudHMgYWJvdmUuIFRoZSBzdHJpbmcge3toZWFkZXJ9fSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhlIGVxdWl2YWxlbnQgdGV4dCBiZWxvdy5cclxuICAvLyBZb3UgY2FuIHJlbW92ZSBcInt7aGVhZGVyfX1cIiBhbmQgd3JpdGUgdGhlIGNvbnRlbnQgZGlyZWN0bHkgaW5zaWRlIHRoZSBIVE1MIGlmIHlvdSB3YW50LlxyXG4gIC8vXHJcbiAgLy8gIC0gQVJJQSBydWxlcyBzdWdnZXN0IHRvIGVuc3VyZSBjb250cm9scyBhcmUgdGFiYmFibGUgKHNvIHRoZSBicm93c2VyIGNhbiBmaW5kIHRoZSBmaXJzdCBjb250cm9sKSxcclxuICAvLyAgICBhbmQgdG8gc2V0IHRoZSBmb2N1cyB0byB0aGUgZmlyc3QgaW50ZXJhY3RpdmUgY29udHJvbCAoaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3VzaW5nLWFyaWEvKVxyXG4gIGVsZW1lbnRzOiB7XHJcbiAgICBoZWFkZXI6ICc8c3BhbiBjbGFzcz1cImNjLWhlYWRlclwiPnt7aGVhZGVyfX08L3NwYW4+Jm5ic3AnLFxyXG4gICAgbWVzc2FnZTpcclxuICAgICAgJzxzcGFuIGlkPVwiY29va2llY29uc2VudDpkZXNjXCIgY2xhc3M9XCJjYy1tZXNzYWdlXCI+e3ttZXNzYWdlfX08L3NwYW4+JyxcclxuICAgIG1lc3NhZ2VsaW5rOlxyXG4gICAgICAnPHNwYW4gaWQ9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLW1lc3NhZ2VcIj57e21lc3NhZ2V9fSA8YSBhcmlhLWxhYmVsPVwibGVhcm4gbW9yZSBhYm91dCBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1saW5rXCIgaHJlZj1cInt7aHJlZn19XCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBub2ZvbGxvd1wiIHRhcmdldD1cInt7dGFyZ2V0fX1cIj57e2xpbmt9fTwvYT48L3NwYW4+JyxcclxuICAgIGRpc21pc3M6XHJcbiAgICAgIGA8YSBhcmlhLWxhYmVsPVwiZGlzbWlzcyBjb29raWUgbWVzc2FnZVwiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtYnRuIGNjLSR7c3RhdHVzRGlzbWlzc31cIj57e2Rpc21pc3N9fTwvYT5gLFxyXG4gICAgYWxsb3c6XHJcbiAgICAgIGA8YSBhcmlhLWxhYmVsPVwiYWxsb3cgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiICBjbGFzcz1cImNjLWJ0biBjYy0ke3N0YXR1c0FsbG93fVwiPnt7YWxsb3d9fTwvYT5gLFxyXG4gICAgZGVueTpcclxuICAgICAgYDxhIGFyaWEtbGFiZWw9XCJkZW55IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWJ0biBjYy0ke3N0YXR1c0Rlbnl9XCI+e3tkZW55fX08L2E+YCxcclxuICAgIGxpbms6XHJcbiAgICAgICc8YSBhcmlhLWxhYmVsPVwibGVhcm4gbW9yZSBhYm91dCBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1saW5rXCIgaHJlZj1cInt7aHJlZn19XCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBub2ZvbGxvd1wiIHRhcmdldD1cInt7dGFyZ2V0fX1cIj57e2xpbmt9fTwvYT4nLFxyXG4gICAgY2xvc2U6XHJcbiAgICAgICc8c3BhbiBhcmlhLWxhYmVsPVwiZGlzbWlzcyBjb29raWUgbWVzc2FnZVwiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtY2xvc2VcIj57e2Nsb3NlfX08L3NwYW4+JyxcclxuICAgIGNhdGVnb3JpZXM6ICc8dWwgY2xhc3M9XCJjYy1jYXRlZ29yaWVzXCI+JyArXHJcbiAgICAgIGNhdGVnb3JpZXMubWFwKCAoIGNhdGVnb3J5LCBpbmRleCApID0+XHJcbiAgICAgICAgYDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuXCIgdGFiaW5kZXg9XCIwXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCIke2NhdGVnb3J5fVwiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj4ke2NhdGVnb3J5fTwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIiR7Y2F0ZWdvcnl9IERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCIke2luZGV4KzF9XCI+XjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cclxuICAgICAgICAgICAgPHA+VGhpcyBpcyB0aGUgY2F0ZWdvcnkgZm9yIGNvb2tpZXMgdGhhdCBkb24ndCBmaXQgdGhlICcke2NhdGVnb3J5LnRvTG93ZXJDYXNlKCl9JyBjYXRlZ29yeS48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPmBcclxuICAgICAgKS5qb2luKFwiXCIpXHJcbiAgICAgICsgJzwvdWw+JyxcclxuICAgIHNhdmU6IGA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLXNhdmVcIj5TYXZlPC9idXR0b24+YFxyXG4gICAgLy9jb21wbGlhbmNlOiBjb21wbGlhbmNlIGlzIGFsc28gYW4gZWxlbWVudCwgYnV0IGl0IGlzIGdlbmVyYXRlZCBieSB0aGUgYXBwbGljYXRpb24sIGRlcGVuZGluZyBvbiBgdHlwZWAgYmVsb3dcclxuICB9LFxyXG5cclxuICAvLyBUaGUgcGxhY2Vob2xkZXJzIHt7Y2xhc3Nlc319IGFuZCB7e2NoaWxkcmVufX0gYm90aCBnZXQgcmVwbGFjZWQgZHVyaW5nIGluaXRpYWxpc2F0aW9uOlxyXG4gIC8vICAtIHt7Y2xhc3Nlc319IGlzIHdoZXJlIGFkZGl0aW9uYWwgY2xhc3NlcyBnZXQgYWRkZWRcclxuICAvLyAgLSB7e2NoaWxkcmVufX0gaXMgd2hlcmUgdGhlIEhUTUwgY2hpbGRyZW4gYXJlIHBsYWNlZFxyXG4gIHdpbmRvdzpcclxuICAgICc8ZGl2IHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBhcmlhLWxhYmVsPVwiY29va2llY29uc2VudFwiIGFyaWEtZGVzY3JpYmVkYnk9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLXdpbmRvdyB7e2NsYXNzZXN9fVwiPjwhLS1nb29nbGVvZmY6IGFsbC0tPnt7Y2hpbGRyZW59fTwhLS1nb29nbGVvbjogYWxsLS0+PC9kaXY+JyxcclxuICBcclxuICBtb2RhbDogJycsXHJcblxyXG4gIC8vIFRoaXMgaXMgdGhlIGh0bWwgZm9yIHRoZSByZXZva2UgYnV0dG9uLiBUaGlzIG9ubHkgc2hvd3MgdXAgYWZ0ZXIgdGhlIHVzZXIgaGFzIHNlbGVjdGVkIHRoZWlyIGxldmVsIG9mIGNvbnNlbnRcclxuICAvLyBJdCBjYW4gYmUgZW5hYmxlZCBvZiBkaXNhYmxlZCB1c2luZyB0aGUgYHJldm9rYWJsZWAgb3B0aW9uXHJcbiAgcmV2b2tlQnRuOiAnPGRpdiBjbGFzcz1cImNjLXJldm9rZSB7e2NsYXNzZXN9fVwiPnt7cG9saWN5fX08L2Rpdj4nLFxyXG5cclxuICAvLyBkZWZpbmUgdHlwZXMgb2YgJ2NvbXBsaWFuY2UnIGhlcmUuICd7e3ZhbHVlfX0nIHN0cmluZ3MgaW4gaGVyZSBhcmUgbGlua2VkIHRvIGBlbGVtZW50c2BcclxuICBjb21wbGlhbmNlOiB7XHJcbiAgICBpbmZvOiAnPGRpdiBjbGFzcz1cImNjLWNvbXBsaWFuY2VcIj57e2Rpc21pc3N9fTwvZGl2PicsXHJcbiAgICAnb3B0LWluJzpcclxuICAgICAgJzxkaXYgY2xhc3M9XCJjYy1jb21wbGlhbmNlIGNjLWhpZ2hsaWdodFwiPnt7ZGlzbWlzc319e3thbGxvd319e3tjdXN0b21pemV9fTwvZGl2PicsXHJcbiAgICAnb3B0LW91dCc6XHJcbiAgICAgICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZSBjYy1oaWdobGlnaHRcIj57e2Rpc21pc3N9fXt7ZGVueX19PC9kaXY+JyxcclxuICAgIGNhdGVnb3JpZXM6ICc8ZGl2IGNsYXNzPVwiZm9ybVwiPnt7Y2F0ZWdvcmllc319e3tzYXZlfX08L2Rpdj4nXHJcbiAgfSxcclxuXHJcbiAgLy8gc2VsZWN0IHlvdXIgdHlwZSBvZiBwb3B1cCBoZXJlXHJcbiAgdHlwZTogJ2luZm8nLCAvLyByZWZlcnMgdG8gYGNvbXBsaWFuY2VgIChpbiBvdGhlciB3b3JkcywgdGhlIGJ1dHRvbnMgdGhhdCBhcmUgZGlzcGxheWVkKVxyXG5cclxuICAvLyBkZWZpbmUgbGF5b3V0IGxheW91dHMgaGVyZVxyXG4gIGxheW91dHM6IHtcclxuICAgIC8vIHRoZSAnYmxvY2snIGxheW91dCB0ZW5kIHRvIGJlIGZvciBzcXVhcmUgZmxvYXRpbmcgcG9wdXBzXHJcbiAgICBiYXNpYyAgICAgICAgIDogJ3t7bWVzc2FnZWxpbmt9fXt7Y29tcGxpYW5jZX19JyxcclxuICAgICdiYXNpYy1jbG9zZScgOiAne3ttZXNzYWdlbGlua319e3tjb21wbGlhbmNlfX17e2Nsb3NlfX0nLFxyXG4gICAgJ2Jhc2ljLWhlYWRlcic6ICd7e2hlYWRlcn19e3ttZXNzYWdlfX17e2xpbmt9fXt7Y29tcGxpYW5jZX19J1xyXG4gICAgLy8gYWRkIGEgY3VzdG9tIGxheW91dCBoZXJlLCB0aGVuIGFkZCBzb21lIG5ldyBjc3Mgd2l0aCB0aGUgY2xhc3MgJy5jYy1sYXlvdXQtbXktY29vbC1sYXlvdXQnXHJcbiAgICAvLydteS1jb29sLWxheW91dCc6ICc8ZGl2IGNsYXNzPVwibXktc3BlY2lhbC1sYXlvdXRcIj57e21lc3NhZ2V9fXt7Y29tcGxpYW5jZX19PC9kaXY+e3tjbG9zZX19JyxcclxuICB9LFxyXG5cclxuICAvLyBkZWZhdWx0IGxheW91dCAoc2VlIGFib3ZlKVxyXG4gIGxheW91dDogJ2Jhc2ljJyxcclxuXHJcbiAgLy8gdGhpcyByZWZlcnMgdG8gdGhlIHBvcHVwIHdpbmRvd3MgcG9zaXRpb24uIHdlIGN1cnJlbnRseSBzdXBwb3J0OlxyXG4gIC8vICAtIGJhbm5lciBwb3NpdGlvbnM6IHRvcCwgYm90dG9tXHJcbiAgLy8gIC0gZmxvYXRpbmcgcG9zaXRpb25zOiB0b3AtbGVmdCwgdG9wLXJpZ2h0LCBib3R0b20tbGVmdCwgYm90dG9tLXJpZ2h0XHJcbiAgLy9cclxuICAvLyBhZGRzIGEgY2xhc3MgYGNjLWZsb2F0aW5nYCBvciBgY2MtYmFubmVyYCB3aGljaCBoZWxwcyB3aGVuIHN0eWxpbmdcclxuICBwb3NpdGlvbjogJ2JvdHRvbScsIC8vIGRlZmF1bHQgcG9zaXRpb24gaXMgJ2JvdHRvbSdcclxuXHJcbiAgLy8gQXZhaWxhYmxlIHN0eWxlc1xyXG4gIC8vICAgIC1ibG9jayAoZGVmYXVsdCwgbm8gZXh0cmEgY2xhc3NlcylcclxuICAvLyAgICAtZWRnZWxlc3NcclxuICAvLyAgICAtY2xhc3NpY1xyXG4gIC8vIHVzZSB5b3VyIG93biBzdHlsZSBuYW1lIGFuZCB1c2UgYC5jYy10aGVtZS1TVFlMRU5BTUVgIGNsYXNzIGluIENTUyB0byBlZGl0LlxyXG4gIC8vIE5vdGU6IHN0eWxlIFwid2lyZVwiIGlzIHVzZWQgZm9yIHRoZSBjb25maWd1cmF0b3IsIGJ1dCBoYXMgbm8gQ1NTIHN0eWxlcyBvZiBpdHMgb3duLCBvbmx5IHBhbGV0dGUgaXMgdXNlZC5cclxuICB0aGVtZTogJ2Jsb2NrJyxcclxuXHJcbiAgLy8gVGhlIHBvcHVwIGlzIGBmaXhlZGAgYnkgZGVmYXVsdCwgYnV0IGlmIHlvdSB3YW50IGl0IHRvIGJlIHN0YXRpYyAoaW5saW5lIHdpdGggdGhlIHBhZ2UgY29udGVudCksIHNldCB0aGlzIHRvIGZhbHNlXHJcbiAgLy8gTm90ZTogYnkgZGVmYXVsdCwgd2UgYW5pbWF0ZSB0aGUgaGVpZ2h0IG9mIHRoZSBwb3B1cCBmcm9tIDAgdG8gZnVsbCBzaXplXHJcbiAgc3RhdGljOiBmYWxzZSxcclxuXHJcbiAgLy8gaWYgeW91IHdhbnQgY3VzdG9tIGNvbG91cnMsIHBhc3MgdGhlbSBpbiBoZXJlLiB0aGlzIG9iamVjdCBzaG91bGQgbG9vayBsaWtlIHRoaXMuXHJcbiAgLy8gaWRlYWxseSwgYW55IGN1c3RvbSBjb2xvdXJzL3RoZW1lcyBzaG91bGQgYmUgY3JlYXRlZCBpbiBhIHNlcGFyYXRlIHN0eWxlIHNoZWV0LCBhcyB0aGlzIGlzIG1vcmUgZWZmaWNpZW50LlxyXG4gIC8vICAge1xyXG4gIC8vICAgICBwb3B1cDoge2JhY2tncm91bmQ6ICcjMDAwMDAwJywgdGV4dDogJyNmZmYnLCBsaW5rOiAnI2ZmZid9LFxyXG4gIC8vICAgICBidXR0b246IHtiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBib3JkZXI6ICcjZjhlNzFjJywgdGV4dDogJyNmOGU3MWMnfSxcclxuICAvLyAgICAgaGlnaGxpZ2h0OiB7YmFja2dyb3VuZDogJyNmOGU3MWMnLCBib3JkZXI6ICcjZjhlNzFjJywgdGV4dDogJyMwMDAwMDAnfSxcclxuICAvLyAgIH1cclxuICAvLyBgaGlnaGxpZ2h0YCBpcyBvcHRpb25hbCBhbmQgZXh0ZW5kcyBgYnV0dG9uYC4gaWYgaXQgZXhpc3RzLCBpdCB3aWxsIGFwcGx5IHRvIHRoZSBmaXJzdCBidXR0b25cclxuICAvLyBvbmx5IGJhY2tncm91bmQgbmVlZHMgdG8gYmUgZGVmaW5lZCBmb3IgZXZlcnkgZWxlbWVudC4gaWYgbm90IHNldCwgb3RoZXIgY29sb3JzIGNhbiBiZSBjYWxjdWxhdGVkIGZyb20gaXRcclxuICBwYWxldHRlOiBudWxsLFxyXG5cclxuICAvLyBTb21lIGNvdW50cmllcyBSRVFVSVJFIHRoYXQgYSB1c2VyIGNhbiBjaGFuZ2UgdGhlaXIgbWluZC4gWW91IGNhbiBjb25maWd1cmUgdGhpcyB5b3Vyc2VsZi5cclxuICAvLyBNb3N0IG9mIHRoZSB0aW1lIHRoaXMgc2hvdWxkIGJlIGZhbHNlLCBidXQgdGhlIGBjb29raWVjb25zZW50LmxlZ2FsYCBjYW4gY2hhbmdlIHRoaXMgdG8gYHRydWVgIGlmIGl0IGRldGVjdHMgdGhhdCBpdCBzaG91bGRcclxuICByZXZva2FibGU6IGZhbHNlLFxyXG5cclxuICAvLyBpZiB0cnVlLCB0aGUgcmV2b2thYmxlIGJ1dHRvbiB3aWxsIHRyYW5sYXRlIGluIGFuZCBvdXRcclxuICBhbmltYXRlUmV2b2thYmxlOiB0cnVlLFxyXG5cclxuICAvLyB1c2VkIHRvIGRpc2FibGUgbGluayBvbiBleGlzdGluZyBsYXlvdXRzXHJcbiAgLy8gcmVwbGFjZXMgZWxlbWVudCBtZXNzYWdlbGluayB3aXRoIG1lc3NhZ2UgYW5kIHJlbW92ZXMgY29udGVudCBvZiBsaW5rXHJcbiAgc2hvd0xpbms6IHRydWUsXHJcblxyXG4gIC8vIHNldCB2YWx1ZSBhcyBzY3JvbGwgcmFuZ2UgdG8gZW5hYmxlXHJcbiAgZGlzbWlzc09uU2Nyb2xsOiBmYWxzZSxcclxuXHJcbiAgLy8gc2V0IHZhbHVlIGFzIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIGF1dG9kaXNtaXNzIGFmdGVyIHNldCB0aW1lXHJcbiAgZGlzbWlzc09uVGltZW91dDogZmFsc2UsXHJcblxyXG4gIC8vIHNldCB2YWx1ZSBhcyBjbGljayBhbnl0aGluZyBvbiB0aGUgcGFnZSwgZXhjbHVkaW5nIHRoZSBgaWdub3JlQ2xpY2tzRnJvbWAgYmVsb3cgKGlmIHdlIGNsaWNrIG9uIHRoZSByZXZva2UgYnV0dG9uIGV0YylcclxuICBkaXNtaXNzT25XaW5kb3dDbGljazogZmFsc2UsXHJcblxyXG4gIC8vIHNldCB2YWx1ZSBhcyBjbGljayBhbnl0aGluZyBvbiB0aGUgcGFnZSwgZXhjbHVkaW5nIHRoZSBgaWdub3JlQ2xpY2tzRnJvbWAgYmVsb3cgKGlmIHdlIGNsaWNrIG9uIHRoZSByZXZva2UgYnV0dG9uIGV0YylcclxuICBkaXNtaXNzT25MaW5rQ2xpY2s6IGZhbHNlLFxyXG5cclxuICAvLyBzZXQgdmFsdWUgYXMga2V5cyBhcmUgcHJlc3NlZCwgKCBhbGxvd0tleUNvZGUgPSAxMywgZGVueUtleUNvZGUgPSAyNyApXHJcbiAgZGlzbWlzc09uS2V5UHJlc3M6IGZhbHNlLFxyXG5cclxuICAvLyBJZiBgZGlzbWlzc09uV2luZG93Q2xpY2tgIGlzIHRydWUsIHdlIGNhbiBjbGljayBvbiAncmV2b2tlJyBhbmQgd2UnbGwgc3RpbGwgZGlzbWlzcyB0aGUgYmFubmVyLCBzbyB3ZSBuZWVkIGV4Y2VwdGlvbnMuXHJcbiAgLy8gc2hvdWxkIGJlIGFuIGFycmF5IG9mIGNsYXNzIG5hbWVzIChub3QgQ1NTIHNlbGVjdG9ycylcclxuICBpZ25vcmVDbGlja3NGcm9tOiBbJ2NjLXJldm9rZScsICdjYy1idG4nLCAnY2MtbGluayddLCAvLyBhbHJlYWR5IGluY2x1ZGVzIHRoZSByZXZva2UgYnV0dG9uIGFuZCB0aGUgYmFubmVyIGl0c2VsZlxyXG5cclxuICAvLyBUaGUgYXBwbGljYXRpb24gYXV0b21hdGljYWxseSBkZWNpZGUgd2hldGhlciB0aGUgcG9wdXAgc2hvdWxkIG9wZW4uXHJcbiAgLy8gU2V0IHRoaXMgdG8gZmFsc2UgdG8gcHJldmVudCB0aGlzIGZyb20gaGFwcGVuaW5nIGFuZCB0byBhbGxvdyB5b3UgdG8gY29udHJvbCB0aGUgYmVoYXZpb3VyIHlvdXJzZWxmXHJcbiAgYXV0b09wZW46IHRydWUsXHJcblxyXG4gIC8vIEJ5IGRlZmF1bHQgdGhlIGNyZWF0ZWQgSFRNTCBpcyBhdXRvbWF0aWNhbGx5IGFwcGVuZGVkIHRvIHRoZSBjb250YWluZXIgKHdoaWNoIGRlZmF1bHRzIHRvIDxib2R5PikuIFlvdSBjYW4gcHJldmVudCB0aGlzIGJlaGF2aW91clxyXG4gIC8vIGJ5IHNldHRpbmcgdGhpcyB0byBmYWxzZSwgYnV0IGlmIHlvdSBkbywgeW91IG11c3QgYXR0YWNoIHRoZSBgZWxlbWVudGAgeW91cnNlbGYsIHdoaWNoIGlzIGEgcHVibGljIHByb3BlcnR5IG9mIHRoZSBwb3B1cCBpbnN0YW5jZTpcclxuICAvL1xyXG4gIC8vICAgICBjb25zdCBpbnN0YW5jZSA9IGNvb2tpZWNvbnNlbnQuZmFjdG9yeShvcHRpb25zKVxyXG4gIC8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluc3RhbmNlLmVsZW1lbnQpXHJcbiAgLy9cclxuICBhdXRvQXR0YWNoOiB0cnVlLFxyXG5cclxuICAvLyBzZXQgdmFsdWUgaWYgZmxvYXRpbmcgbGF5b3V0IHNob3VsZCBiZSBmb3JjZWQgZm9yIG1vYmlsZSBkZXZpY2VzXHJcbiAgbW9iaWxlRm9yY2VGbG9hdDogdHJ1ZSxcclxuXHJcbiAgLy8gc2ltcGxlIHdoaXRlbGlzdC9ibGFja2xpc3QgZm9yIHBhZ2VzLiBzcGVjaWZ5IHBhZ2UgYnk6XHJcbiAgLy8gICAtIHVzaW5nIGEgc3RyaW5nIDogJy9pbmRleC5odG1sJyAgICAgICAgICAgKG1hdGNoZXMgJy9pbmRleC5odG1sJyBleGFjdGx5KSBPUlxyXG4gIC8vICAgLSB1c2luZyBSZWdFeHAgICA6IC9cXC9wYWdlX1tcXGRdK1xcLmh0bWwvICAgIChtYXRjaGVkICcvcGFnZV8xLmh0bWwnIGFuZCAnL3BhZ2VfMi5odG1sJyBldGMpXHJcbiAgd2hpdGVsaXN0UGFnZTogW10sXHJcbiAgYmxhY2tsaXN0UGFnZTogW10sXHJcblxyXG4gIC8vIElmIHRoaXMgaXMgZGVmaW5lZCwgdGhlbiBpdCBpcyB1c2VkIGFzIHRoZSBpbm5lciBodG1sIGluc3RlYWQgb2YgbGF5b3V0LiBUaGlzIGFsbG93cyBmb3IgdWx0aW1hdGUgY3VzdG9taXNhdGlvbi5cclxuICAvLyBCZSBzdXJlIHRvIHVzZSB0aGUgY2xhc3NlcyBgY2MtYnRuYCBhbmQgYGNjLUFMTE9XYCwgYGNjLURFTllgIG9yIGBjYy1ESVNNSVNTYC4gVGhleSBlbmFibGUgdGhlIGFwcCB0byByZWdpc3RlciBjbGlja1xyXG4gIC8vIGhhbmRsZXJzLiBZb3UgY2FuIHVzZSBvdGhlciBwcmUtZXhpc3RpbmcgY2xhc3NlcyB0b28uIFNlZSBgc3JjL3N0eWxlc2AgZm9sZGVyLlxyXG4gIG92ZXJyaWRlSFRNTDogbnVsbFxyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNjcmlwdCA9ICggdXJsLCBjYWxsYmFjaywgdGltZW91dCApID0+IHtcclxuICBsZXQgdGltZW91dElkeFxyXG4gIGNvbnN0IHNjcmlwdFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXHJcblxyXG4gIHNjcmlwdFRhZy50eXBlID0gJ3RleHQvJyArICh1cmwudHlwZSB8fCAnamF2YXNjcmlwdCcpXHJcbiAgc2NyaXB0VGFnLnNyYyA9IHVybC5zcmMgfHwgdXJsXHJcbiAgc2NyaXB0VGFnLmFzeW5jID0gZmFsc2VcclxuXHJcbiAgc2NyaXB0VGFnLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHMub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyB0aGlzIGNvZGUgaGFuZGxlcyB0d28gc2NlbmFyaW9zLCB3aGV0aGVyIGNhbGxlZCBieSBvbmxvYWQgb3Igb25yZWFkeXN0YXRlY2hhbmdlXHJcbiAgICBjb25zdCBzdGF0ZSA9IHNjcmlwdFRhZy5yZWFkeVN0YXRlXHJcblxyXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZHgpXHJcblxyXG4gICAgaWYgKCFjYWxsYmFjay5kb25lICYmICghc3RhdGUgfHwgL2xvYWRlZHxjb21wbGV0ZS8udGVzdChzdGF0ZSkpKSB7XHJcbiAgICAgIGNhbGxiYWNrLmRvbmUgPSB0cnVlXHJcbiAgICAgIGNhbGxiYWNrKClcclxuICAgICAgc2NyaXB0VGFnLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHNjcmlwdFRhZy5vbmxvYWQgPSBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdFRhZylcclxuXHJcbiAgLy8gWW91IGNhbid0IGNhdGNoIEpTT05QIEVycm9ycywgYmVjYXVzZSBpdCdzIGhhbmRsZWQgYnkgdGhlIHNjcmlwdCB0YWdcclxuICAvLyBvbmUgd2F5IGlzIHRvIHVzZSBhIHRpbWVvdXRcclxuICB0aW1lb3V0SWR4ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgIGNhbGxiYWNrLmRvbmUgPSB0cnVlXHJcbiAgICBjYWxsYmFjaygpXHJcbiAgICBzY3JpcHRUYWcub25yZWFkeXN0YXRlY2hhbmdlID0gc2NyaXB0VGFnLm9ubG9hZCA9IG51bGxcclxuICB9LCB0aW1lb3V0KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZUFzeW5jUmVxdWVzdCA9ICggdXJsLCBvbkNvbXBsZXRlLCB0aW1lb3V0LCBwb3N0RGF0YSwgcmVxdWVzdEhlYWRlcnMgKSA9PiB7XHJcbiAgY29uc3QgeGhyID0gbmV3ICh3aW5kb3cuWE1MSHR0cFJlcXVlc3QgfHwgd2luZG93LkFjdGl2ZVhPYmplY3QpKFxyXG4gICAgJ01TWE1MMi5YTUxIVFRQLjMuMCdcclxuICApXHJcblxyXG4gIHhoci5vcGVuKHBvc3REYXRhID8gJ1BPU1QnIDogJ0dFVCcsIHVybCwgMSlcclxuXHJcbiAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkocmVxdWVzdEhlYWRlcnMpKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHJlcXVlc3RIZWFkZXJzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICBjb25zdCBzcGxpdCA9IHJlcXVlc3RIZWFkZXJzW2ldLnNwbGl0KCc6JywgMilcclxuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXHJcbiAgICAgICAgc3BsaXRbMF0ucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLFxyXG4gICAgICAgIHNwbGl0WzFdLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9uQ29tcGxldGUgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPiAzKSB7XHJcbiAgICAgICAgb25Db21wbGV0ZSh4aHIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHhoci5zZW5kKHBvc3REYXRhKVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSBuYW1lID0+IHtcclxuICByZXR1cm4gQ29va2llcy5nZXQobmFtZSk7XHJcbiAgLy8gY29uc3QgdmFsdWUgPSAnICcgKyBkb2N1bWVudC5jb29raWVcclxuICAvLyBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KCcgJyArIG5hbWUgKyAnPScpXHJcbiAgLy8gcmV0dXJuIHBhcnRzLmxlbmd0aCA8IDJcclxuICAvLyAgID8gdW5kZWZpbmVkXHJcbiAgLy8gICA6IHBhcnRzXHJcbiAgLy8gICAgICAgLnBvcCgpXHJcbiAgLy8gICAgICAgLnNwbGl0KCc7JylcclxuICAvLyAgICAgICAuc2hpZnQoKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gZnVuY3Rpb24gKCBuYW1lLCB2YWx1ZSwgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmUgKSB7XHJcblxyXG4gIGxldCBjb29raWVPcHRpb25zID0ge307XHJcblxyXG4gIGlmKGV4cGlyeURheXMgIT09IG51bGwgJiYgZXhwaXJ5RGF5cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb29raWVPcHRpb25zLmV4cGlyZXMgPSBleHBpcnlEYXlzO1xyXG4gIH1cclxuXHJcbiAgaWYoZG9tYWluICE9PSBudWxsICYmIGRvbWFpbiAhPT0gdW5kZWZpbmVkKXtcclxuICAgIGNvb2tpZU9wdGlvbnMuZG9tYWluID0gZG9tYWluO1xyXG4gIH1cclxuXHJcbiAgaWYocGF0aCAhPT0gbnVsbCAmJiBwYXRoICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGNvb2tpZU9wdGlvbnMucGF0aCA9IHBhdGg7XHJcbiAgfVxyXG5cclxuICBpZihzZWN1cmUgIT09IG51bGwgJiYgc2VjdXJlICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGNvb2tpZU9wdGlvbnMuc2VjdXJlID0gc2VjdXJlO1xyXG4gIH1cclxuXHJcblxyXG4gIENvb2tpZXMuc2V0KG5hbWUsdmFsdWUsIGNvb2tpZU9wdGlvbnMpO1xyXG5cclxuICAvLyBjb25zdCBleGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgLy8gZXhkYXRlLnNldEhvdXJzKGV4ZGF0ZS5nZXRIb3VycygpICsgKCh0eXBlb2YgZXhwaXJ5RGF5cyAhPT0gXCJudW1iZXJcIiAgPyAzNjUgOiBleHBpcnlEYXlzICkgKiAyNCkpXHJcbiAgLy8gZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9JyArIHZhbHVlICtcclxuICAvLyAgICAgICAgICAgICAgICAgICAnLGV4cGlyZXM9JyArIGV4ZGF0ZS50b1VUQ1N0cmluZygpICtcclxuICAvLyAgICAgICAgICAgICAgICAgICAnLHBhdGg9JyArIChwYXRoIHx8ICcvJykgK1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICggZG9tYWluID8gJyxkb21haW49JyArIGRvbWFpbiA6ICcnICkgK1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICggc2VjdXJlID8gJyxzZWN1cmUnIDogJycgKVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCB7IGdldENvbnRyYXN0LCBnZXRIb3ZlckNvbG9yIH0gZnJvbSAnLi9zdHlsZSdcclxuXHJcbmV4cG9ydCBjb25zdCB0cmF2ZXJzZURPTVBhdGggPSAoIGVsZW0sIGNsYXNzTmFtZSApID0+XHJcbiAgIWVsZW0gfHwgIWVsZW0ucGFyZW50Tm9kZVxyXG4gID8gbnVsbCA6IGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcclxuICA/IGVsZW0gOiB0cmF2ZXJzZURPTVBhdGgoZWxlbS5wYXJlbnROb2RlLCBjbGFzc05hbWUpXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ3VzdG9tU3R5bGVzaGVldCA9IChpZCwgcGFsZXR0ZSwgcHJlZml4KSA9PiB7XHJcbiAgY29uc3QgY29sb3JTdHlsZXMgPSB7fVxyXG4gIGNvbnN0IHsgcG9wdXAsIGJ1dHRvbiwgaGlnaGxpZ2h0LCBzYXZlQnV0dG9uIH0gPSBwYWxldHRlXHJcblxyXG4gIC8vIG5lZWRzIGJhY2tncm91bmQgY29sb3VyLCB0ZXh0IGFuZCBsaW5rIHdpbGwgYmUgc2V0IHRvIGJsYWNrL3doaXRlIGlmIG5vdCBzcGVjaWZpZWRcclxuICBpZiAocG9wdXApIHtcclxuICAgICAgLy8gYXNzdW1lcyBwb3B1cC5iYWNrZ3JvdW5kIGlzIHNldFxyXG4gICAgICBwb3B1cC50ZXh0ID0gcG9wdXAudGV4dCA/IHBvcHVwLnRleHQgOiBnZXRDb250cmFzdChwb3B1cC5iYWNrZ3JvdW5kKVxyXG4gICAgICBwb3B1cC5saW5rID0gcG9wdXAubGluayA/IHBvcHVwLmxpbmsgOiBwb3B1cC50ZXh0XHJcbiAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLXRvb2x0aXAsICcgKyBwcmVmaXggKyAnIC5jYy10b29sdGlwOmFmdGVyJ10gPSBbXHJcbiAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBwb3B1cC5iYWNrZ3JvdW5kLFxyXG4gICAgICBdXHJcbiAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcuY2Mtd2luZG93J10gPSBbXHJcbiAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBwb3B1cC5iYWNrZ3JvdW5kLFxyXG4gICAgICBdXHJcbiAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcuY2MtcmV2b2tlJ10gPSBbXHJcbiAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBwb3B1cC5iYWNrZ3JvdW5kLFxyXG4gICAgICBdXHJcbiAgICAgIGNvbG9yU3R5bGVzW1xyXG4gICAgICAgICAgcHJlZml4ICsgJyAuY2MtbGluaywnICsgcHJlZml4ICsgJyAuY2MtbGluazphY3RpdmUsJyArIHByZWZpeCArICcgLmNjLWxpbms6dmlzaXRlZCdcclxuICAgICAgXSA9IFsnY29sb3I6ICcgKyBwb3B1cC5saW5rXVxyXG5cclxuICAgICAgaWYgKGJ1dHRvbikge1xyXG4gICAgICAgICAgLy8gYXNzdW1lcyBidXR0b24uYmFja2dyb3VuZCBpcyBzZXRcclxuICAgICAgICAgIGJ1dHRvbi50ZXh0ID0gYnV0dG9uLnRleHQgPyBidXR0b24udGV4dCA6IGdldENvbnRyYXN0KGJ1dHRvbi5iYWNrZ3JvdW5kKTtcclxuICAgICAgICAgIGJ1dHRvbi5ib3JkZXIgPSBidXR0b24uYm9yZGVyID8gYnV0dG9uLmJvcmRlciA6ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1idG4nXSA9IFtcclxuICAgICAgICAgICAgICAnY29sb3I6ICcgKyBidXR0b24udGV4dCxcclxuICAgICAgICAgICAgICAnYm9yZGVyLWNvbG9yOiAnICsgYnV0dG9uLmJvcmRlcixcclxuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIGJ1dHRvbi5iYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgXVxyXG5cclxuICAgICAgICAgIGlmIChidXR0b24ucGFkZGluZykge1xyXG4gICAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWJ0biddLnB1c2goJ3BhZGRpbmc6ICcgKyBidXR0b24ucGFkZGluZyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGJ1dHRvbi5iYWNrZ3JvdW5kICE9ICd0cmFuc3BhcmVudCcpIHtcclxuICAgICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1idG46aG92ZXIsICcgKyBwcmVmaXggKyAnIC5jYy1idG46Zm9jdXMnXSA9IFtcclxuICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyAoYnV0dG9uLmhvdmVyIHx8IGdldEhvdmVyQ29sb3IoYnV0dG9uLmJhY2tncm91bmQpKSxcclxuICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGhpZ2hsaWdodCkge1xyXG4gICAgICAgICAgICAgIC8vYXNzdW1lcyBoaWdobGlnaHQuYmFja2dyb3VuZCBpcyBzZXRcclxuICAgICAgICAgICAgICBoaWdobGlnaHQudGV4dCA9IGhpZ2hsaWdodC50ZXh0XHJcbiAgICAgICAgICAgICAgICAgID8gaGlnaGxpZ2h0LnRleHRcclxuICAgICAgICAgICAgICAgICAgOiBnZXRDb250cmFzdChoaWdobGlnaHQuYmFja2dyb3VuZCk7XHJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0LmJvcmRlciA9IGhpZ2hsaWdodC5ib3JkZXIgPyBoaWdobGlnaHQuYm9yZGVyIDogJ3RyYW5zcGFyZW50JztcclxuICAgICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCddID0gW1xyXG4gICAgICAgICAgICAgICAgICAnY29sb3I6ICcgKyBoaWdobGlnaHQudGV4dCxcclxuICAgICAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcjogJyArIGhpZ2hsaWdodC5ib3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgaGlnaGxpZ2h0LmJhY2tncm91bmQsXHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBzZXRzIGhpZ2hsaWdodCB0ZXh0IGNvbG9yIHRvIHBvcHVwIHRleHQuIGJhY2tncm91bmQgYW5kIGJvcmRlciBhcmUgdHJhbnNwYXJlbnQgYnkgZGVmYXVsdC5cclxuICAgICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCddID0gW1xyXG4gICAgICAgICAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHNhdmVCdXR0b24pIHtcclxuICAgICAgICAgIGNvbG9yU3R5bGVzW2Ake3ByZWZpeH0gLmNjLWJ0bi5jYy1zYXZlYF0gPSBbXHJcbiAgICAgICAgICAgICAgJ2NvbG9yOiAnICsgc2F2ZUJ1dHRvbi50ZXh0LFxyXG4gICAgICAgICAgICAgICdib3JkZXItY29sb3I6ICcgKyBzYXZlQnV0dG9uLmJvcmRlcixcclxuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHNhdmVCdXR0b24uYmFja2dyb3VuZCxcclxuICAgICAgICAgIF1cclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdGhpcyB3aWxsIGJlIGludGVycHJldHRlZCBhcyBDU1MuIHRoZSBrZXkgaXMgdGhlIHNlbGVjdG9yLCBhbmQgZWFjaCBhcnJheSBlbGVtZW50IGlzIGEgcnVsZVxyXG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxyXG4gIHN0eWxlLmlkID0gaWRcclxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCBzdHlsZSApXHJcbiAgT2JqZWN0LmVudHJpZXMoIGNvbG9yU3R5bGVzICkuZm9yRWFjaCggKCBbIHByb3AsIHZhbHVlIF0sIGluZGV4ICkgPT5cclxuICAgIHN0eWxlLnNoZWV0Lmluc2VydFJ1bGUoIGAke3Byb3B9eyR7dmFsdWUuam9pbignOycpfX1gLCBpbmRleCApXHJcbiAgKVxyXG4gIHJldHVybiBzdHlsZVxyXG59IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCAqIGFzIGNvb2tpZSBmcm9tIFwiLi9jb29raWVcIlxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gY29va2llLmdldENvb2tpZVxyXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gY29va2llLnNldENvb2tpZVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpbnRlcnBvbGF0ZVN0cmluZyA9ICggc3RyLCBjYWxsYmFjayApID0+XHJcbiAgc3RyLnJlcGxhY2UoIC97eyhbYS16XVthLXowLTlcXC1fXSopfX0vZ2kgLCAoIG1hdGNoZXMsIHJlcGxhY2VkICkgPT4gY2FsbGJhY2soIHJlcGxhY2VkICkgfHwgJycpXHJcblxyXG4vLyBvbmx5IHVzZWQgZm9yIHRocm90dGxpbmcgdGhlICdtb3VzZW1vdmUnIGV2ZW50ICh1c2VkIGZvciBhbmltYXRpbmcgdGhlIHJldm9rZSBidXR0b24gd2hlbiBgYW5pbWF0ZVJldm9rYWJsZWAgaXMgdHJ1ZSlcclxuZXhwb3J0IGNvbnN0IHRocm90dGxlID0gKGNhbGxiYWNrLCBsaW1pdCkgPT4ge1xyXG4gIGxldCB3YWl0ID0gZmFsc2VcclxuICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIXdhaXQpIHtcclxuICAgICAgY2FsbGJhY2soLi4uYXJndW1lbnRzKVxyXG4gICAgICB3YWl0ID0gdHJ1ZVxyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHdhaXQgPSBmYWxzZVxyXG4gICAgICB9LCBsaW1pdClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIG9ubHkgdXNlZCBmb3IgaGFzaGluZyBqc29uIG9iamVjdHMgKHVzZWQgZm9yIGhhc2ggbWFwcGluZyBwYWxldHRlIG9iamVjdHMsIHVzZWQgd2hlbiBjdXN0b20gY29sb3VycyBhcmUgcGFzc2VkIHRocm91Z2ggSmF2YVNjcmlwdClcclxuZXhwb3J0IGNvbnN0IGhhc2ggPSBzdHIgPT4ge1xyXG4gIGxldCBoYXNoTnVtID0gMCxcclxuICAgIGkgPSAwLFxyXG4gICAgY2hyLFxyXG4gICAgbGVuID0gc3RyLmxlbmd0aFxyXG4gIGlmIChzdHIubGVuZ3RoID09PSAwKSByZXR1cm4gaGFzaE51bVxyXG4gIGZvciAoIGk7IGkgPCBsZW47ICsraSApIHtcclxuICAgIGNociA9IHN0ci5jaGFyQ29kZUF0KCBpIClcclxuICAgIGhhc2hOdW0gPSAoIGhhc2hOdW0gPDwgNSApIC0gaGFzaE51bSArIGNoclxyXG4gICAgaGFzaE51bSB8PSAwXHJcbiAgfVxyXG4gIHJldHVybiBoYXNoTnVtXHJcbn1cclxuaW1wb3J0ICogYXMgc3R5bGUgZnJvbSBcIi4vc3R5bGVcIlxyXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplSGV4ID0gc3R5bGUubm9ybWFsaXplSGV4XHJcbmV4cG9ydCBjb25zdCBnZXRDb250cmFzdCA9IHN0eWxlLmdldENvbnRyYXN0XHJcbmV4cG9ydCBjb25zdCBnZXRMdW1pbmFuY2UgPSBzdHlsZS5nZXRMdW1pbmFuY2VcclxuZXhwb3J0IGNvbnN0IGdldEhvdmVyQ29sb3IgPXN0eWxlLmdldEhvdmVyQ29sb3JcclxuXHJcbmltcG9ydCAqIGFzIGRvbSBmcm9tIFwiLi9kb21cIlxyXG5leHBvcnQgY29uc3QgdHJhdmVyc2VET01QYXRoID0gZG9tLnRyYXZlcnNlRE9NUGF0aFxyXG5leHBvcnQgY29uc3QgYWRkQ3VzdG9tU3R5bGVzaGVldCA9IGRvbS5hZGRDdXN0b21TdHlsZXNoZWV0XHJcblxyXG5pbXBvcnQgKiBhcyB2YWxpZGF0aW9uIGZyb20gXCIuL3ZhbGlkYXRpb25cIlxyXG5leHBvcnQgY29uc3QgaXNWYWxpZFN0YXR1cyA9IHZhbGlkYXRpb24uaXNWYWxpZFN0YXR1c1xyXG5leHBvcnQgY29uc3QgaXNQbGFpbk9iamVjdCA9IHZhbGlkYXRpb24uaXNQbGFpbk9iamVjdFxyXG5leHBvcnQgY29uc3QgaXNNb2JpbGUgPSB2YWxpZGF0aW9uLmlzTW9iaWxlXHJcblxyXG5pbXBvcnQgKiBhcyBhc3luY0ZucyBmcm9tIFwiLi9hc3luY1wiXHJcbmV4cG9ydCBjb25zdCBnZXRTY3JpcHQgPSBhc3luY0Zucy5nZXRTY3JpcHRcclxuZXhwb3J0IGNvbnN0IG1ha2VBc3luY1JlcXVlc3QgPSBhc3luY0Zucy5tYWtlQXN5bmNSZXF1ZXN0XHJcblxyXG5jb25zdCBsb29wUHJvcGVydGllcyA9IG92ZXJ3cml0ZXMgPT4gKG9iaiwgW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgaWYgKCB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpICkge1xyXG4gICAgaWYgKCBvdmVyd3JpdGVzWyBrZXkgXSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhKG92ZXJ3cml0ZXNbIGtleSBdIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgIG9ialsga2V5IF0gPSBPYmplY3QuZW50cmllcyh2YWx1ZSkucmVkdWNlKGxvb3BQcm9wZXJ0aWVzKG92ZXJ3cml0ZXNba2V5XSksIHt9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb2JqWyBrZXkgXSA9IHZhbHVlXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICggb3ZlcndyaXRlcy5oYXNPd25Qcm9wZXJ0eSgga2V5ICkgKSB7XHJcbiAgICAgIG9ialsga2V5IF0gPSBvdmVyd3JpdGVzWyBrZXkgXVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICBvYmpbIGtleSBdID0gdmFsdWUgXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBvYmpcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1lcmdlT3B0aW9ucyA9ICggZGVmYXVsdHMsIG92ZXJ3cml0ZXMgKSA9PlxyXG4gIE9iamVjdC5lbnRyaWVzKGRlZmF1bHRzKS5yZWR1Y2UobG9vcFByb3BlcnRpZXMob3ZlcndyaXRlcyksIHt9KVxyXG4iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUhleCA9IGhleCA9PlxyXG4gIGhleFswXSA9PSAnIydcclxuICAgID8gaGV4LnN1YnN0cigxKSA6IGhleC5sZW5ndGggPT0gM1xyXG4gICAgPyBoZXhbMF0gKyBoZXhbMF0gKyBoZXhbMV0gKyBoZXhbMV0gKyBoZXhbMl0gKyBoZXhbMl0gOiBoZXhcclxuXHJcbi8vIHVzZWQgdG8gZ2V0IHRleHQgY29sb3JzIGlmIG5vdCBzZXRcclxuZXhwb3J0IGNvbnN0IGdldENvbnRyYXN0ID0gaGV4ID0+IHtcclxuICBoZXggPSBub3JtYWxpemVIZXgoaGV4KVxyXG4gIGNvbnN0IHIgPSBwYXJzZUludChoZXguc3Vic3RyKDAsIDIpLCAxNilcclxuICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnN1YnN0cigyLCAyKSwgMTYpXHJcbiAgY29uc3QgYiA9IHBhcnNlSW50KGhleC5zdWJzdHIoNCwgMiksIDE2KVxyXG4gIGNvbnN0IHlpcSA9IChyICogMjk5ICsgZyAqIDU4NyArIGIgKiAxMTQpIC8gMTAwMFxyXG4gIHJldHVybiB5aXEgPj0gMTI4ID8gJyMwMDAnIDogJyNmZmYnXHJcbn1cclxuXHJcbi8vIHVzZWQgdG8gY2hhbmdlIGNvbG9yIG9uIGhpZ2hsaWdodFxyXG5leHBvcnQgY29uc3QgZ2V0THVtaW5hbmNlID0gaGV4ID0+IHtcclxuICBjb25zdCBudW0gPSBwYXJzZUludChub3JtYWxpemVIZXgoaGV4KSwgMTYpLFxyXG4gICAgYW10ID0gMzgsXHJcbiAgICBSID0gKG51bSA+PiAxNikgKyBhbXQsXHJcbiAgICBCID0gKChudW0gPj4gOCkgJiAweDAwZmYpICsgYW10LFxyXG4gICAgRyA9IChudW0gJiAweDAwMDBmZikgKyBhbXRcclxuICAgIHJldHVybiAnIycgKyAoXHJcbiAgICAweDEwMDAwMDAgK1xyXG4gICAgKFIgPCAyNTUgPyAoUiA8IDEgPyAwIDogUikgOiAyNTUpICogMHgxMDAwMCArXHJcbiAgICAoQiA8IDI1NSA/IChCIDwgMSA/IDAgOiBCKSA6IDI1NSkgKiAweDEwMCArXHJcbiAgICAoRyA8IDI1NSA/IChHIDwgMSA/IDAgOiBHKSA6IDI1NSlcclxuICApXHJcbiAgICAudG9TdHJpbmcoMTYpXHJcbiAgICAuc2xpY2UoMSlcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0SG92ZXJDb2xvciA9IGhleCA9PiB7XHJcbiAgaGV4ID0gbm9ybWFsaXplSGV4KCBoZXggKVxyXG4gIC8vIGZvciBibGFjayBidXR0b25zXHJcbiAgcmV0dXJuIGhleCA9PT0gJzAwMDAwMCcgPyAnIzIyMicgOiBnZXRMdW1pbmFuY2UoIGhleCApXHJcbn0iLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0IHsgc3RhdHVzZXMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgYSBzdGF0dXMgaXMgaW4gdGhlIGNvbnN0YW50cyBsaXN0XHJcbiAqIEBwYXJhbSB7IHN0cmluZyB9IHN0YXR1cyAtIFN0YXR1cyBTdHJpbmcgdG9cclxuICogQHJldHVybiB7IGJvb2xlYW4gfSAtIGlmIHN0YXR1cyBpcyB2YWxpZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzVmFsaWRTdGF0dXMgPSBzdGF0dXMgPT4gc3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID49IDBcclxuXHJcbmV4cG9ydCBjb25zdCBpc01vYmlsZSA9ICgpID0+XHJcbiAgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50IClcclxuXHJcbi8vIFRoZSBjb2RlIFwidHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsXCIgYWxsb3dzIEFycmF5IG9iamVjdHNcclxuZXhwb3J0IGNvbnN0IGlzUGxhaW5PYmplY3QgPSBvYmogPT4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciA9PSBPYmplY3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==