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

/***/ "./node_modules/@openmind/litelog/dist/logger.umd.js":
/*!***********************************************************!*\
  !*** ./node_modules/@openmind/litelog/dist/logger.umd.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n!function (e, t) {\n  \"object\" == ( false ? undefined : _typeof(exports)) && \"undefined\" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;\n}(this, function () {\n  var e = [],\n      t = {\n    mute: !1,\n    all: !1\n  },\n      n = function n(o) {\n    for (var i = arguments.length, r = Array(i); i--;) {\n      r[i] = arguments[i];\n    }\n\n    this instanceof n ? (this.__instance_name__ = o || \"\", t.all && (this.mute = t.mute), e.push(this)) : n.print.apply(n, [\"\"].concat(r));\n  },\n      o = {\n    NAME: {\n      configurable: !0\n    },\n    mute: {\n      configurable: !0\n    }\n  };\n\n  return o.NAME.get = function () {\n    return this.__instance_name__;\n  }, n.mute = function (n, o) {\n    if ((t = {\n      mute: !!n,\n      all: !!o\n    }).all) for (var i = 0, r = e; i < r.length; i += 1) {\n      r[i].mute = t.mute;\n    }\n  }, o.mute.get = function () {\n    return this.__mute__;\n  }, o.mute.set = function (e) {\n    this.__mute__ = e;\n  }, n.print = function (e) {\n    for (var o, i = [], r = arguments.length - 1; r-- > 0;) {\n      i[r] = arguments[r + 1];\n    }\n\n    switch (e) {\n      case \"w\":\n        o = {\n          icon: \"✋\",\n          method: \"warn\"\n        };\n        break;\n\n      case \"i\":\n        o = {\n          icon: \"ℹ️\",\n          method: \"info\"\n        };\n        break;\n\n      case \"d\":\n        o = {\n          icon: \"🐛\",\n          method: void 0 !== console.debug ? \"debug\" : \"log\"\n        };\n        break;\n\n      case \"e\":\n        o = {\n          icon: \"‼️\",\n          method: \"error\"\n        };\n        break;\n\n      case \"l\":\n      default:\n        o = {\n          icon: \"👀\",\n          method: \"log\"\n        };\n    }\n\n    if (this instanceof n) {\n      if (this.mute) return;\n    } else if (t.mute) return;\n\n    return console[o.method].apply(console, [\"[~ \" + o.icon + \" \" + (this.NAME || \"\") + \" ~]\"].concat(i));\n  }, Object.defineProperties(n.prototype, o), [\"log\", \"warn\", \"info\", \"error\", \"debug\"].map(function (e) {\n    var t = e[0];\n    [e, t].map(function (e) {\n      return n[e] = n.prototype[e] = function () {\n        var e = Array.prototype.slice.call(arguments);\n        e.unshift(t), n.print.apply(this, e);\n      };\n    });\n  }), n;\n});\n\n//# sourceURL=webpack:///./node_modules/@openmind/litelog/dist/logger.umd.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n/** Built-in value references. */\n\n\nvar _Symbol = root.Symbol;\nmodule.exports = _Symbol;\n\n//# sourceURL=webpack:///./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n\n  return result;\n}\n\nmodule.exports = arrayMap;\n\n//# sourceURL=webpack:///./node_modules/lodash/_arrayMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayReduce.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayReduce.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.reduce` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @param {*} [accumulator] The initial value.\n * @param {boolean} [initAccum] Specify using the first element of `array` as\n *  the initial value.\n * @returns {*} Returns the accumulated value.\n */\nfunction arrayReduce(array, iteratee, accumulator, initAccum) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  if (initAccum && length) {\n    accumulator = array[++index];\n  }\n\n  while (++index < length) {\n    accumulator = iteratee(accumulator, array[index], index, array);\n  }\n\n  return accumulator;\n}\n\nmodule.exports = arrayReduce;\n\n//# sourceURL=webpack:///./node_modules/lodash/_arrayReduce.js?");

/***/ }),

/***/ "./node_modules/lodash/_asciiToArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_asciiToArray.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Converts an ASCII `string` to an array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the converted array.\n */\nfunction asciiToArray(string) {\n  return string.split('');\n}\n\nmodule.exports = asciiToArray;\n\n//# sourceURL=webpack:///./node_modules/lodash/_asciiToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_asciiWords.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_asciiWords.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to match words composed of alphanumeric characters. */\nvar reAsciiWord = /[^\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\x7f]+/g;\n/**\n * Splits an ASCII `string` into an array of its words.\n *\n * @private\n * @param {string} The string to inspect.\n * @returns {Array} Returns the words of `string`.\n */\n\nfunction asciiWords(string) {\n  return string.match(reAsciiWord) || [];\n}\n\nmodule.exports = asciiWords;\n\n//# sourceURL=webpack:///./node_modules/lodash/_asciiWords.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.findIndex` and `_.findLastIndex` without\n * support for iteratee shorthands.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {Function} predicate The function invoked per iteration.\n * @param {number} fromIndex The index to search from.\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction baseFindIndex(array, predicate, fromIndex, fromRight) {\n  var length = array.length,\n      index = fromIndex + (fromRight ? 1 : -1);\n\n  while (fromRight ? index-- : ++index < length) {\n    if (predicate(array[index], index, array)) {\n      return index;\n    }\n  }\n\n  return -1;\n}\n\nmodule.exports = baseFindIndex;\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseFindIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n/** `Object#toString` result references. */\n\n\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n/** Built-in value references. */\n\nvar symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\n\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n\n  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ \"./node_modules/lodash/_baseFindIndex.js\"),\n    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ \"./node_modules/lodash/_baseIsNaN.js\"),\n    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ \"./node_modules/lodash/_strictIndexOf.js\");\n/**\n * The base implementation of `_.indexOf` without `fromIndex` bounds checks.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} value The value to search for.\n * @param {number} fromIndex The index to search from.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\n\n\nfunction baseIndexOf(array, value, fromIndex) {\n  return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);\n}\n\nmodule.exports = baseIndexOf;\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseIndexOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsNaN.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsNaN.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.isNaN` without support for number objects.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.\n */\nfunction baseIsNaN(value) {\n  return value !== value;\n}\n\nmodule.exports = baseIsNaN;\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseIsNaN.js?");

/***/ }),

/***/ "./node_modules/lodash/_basePropertyOf.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_basePropertyOf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.propertyOf` without support for deep paths.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Function} Returns the new accessor function.\n */\nfunction basePropertyOf(object) {\n  return function (key) {\n    return object == null ? undefined : object[key];\n  };\n}\n\nmodule.exports = basePropertyOf;\n\n//# sourceURL=webpack:///./node_modules/lodash/_basePropertyOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.slice` without an iteratee call guard.\n *\n * @private\n * @param {Array} array The array to slice.\n * @param {number} [start=0] The start position.\n * @param {number} [end=array.length] The end position.\n * @returns {Array} Returns the slice of `array`.\n */\nfunction baseSlice(array, start, end) {\n  var index = -1,\n      length = array.length;\n\n  if (start < 0) {\n    start = -start > length ? 0 : length + start;\n  }\n\n  end = end > length ? length : end;\n\n  if (end < 0) {\n    end += length;\n  }\n\n  length = start > end ? 0 : end - start >>> 0;\n  start >>>= 0;\n  var result = Array(length);\n\n  while (++index < length) {\n    result[index] = array[index + start];\n  }\n\n  return result;\n}\n\nmodule.exports = baseSlice;\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseSlice.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n/** Used as references for various `Number` constants. */\n\n\nvar INFINITY = 1 / 0;\n/** Used to convert symbols to primitives and strings. */\n\nvar symbolProto = _Symbol ? _Symbol.prototype : undefined,\n    symbolToString = symbolProto ? symbolProto.toString : undefined;\n/**\n * The base implementation of `_.toString` which doesn't convert nullish\n * values to empty strings.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {string} Returns the string.\n */\n\nfunction baseToString(value) {\n  // Exit early for strings to avoid a performance hit in some environments.\n  if (typeof value == 'string') {\n    return value;\n  }\n\n  if (isArray(value)) {\n    // Recursively convert values (susceptible to call stack limits).\n    return arrayMap(value, baseToString) + '';\n  }\n\n  if (isSymbol(value)) {\n    return symbolToString ? symbolToString.call(value) : '';\n  }\n\n  var result = value + '';\n  return result == '0' && 1 / value == -INFINITY ? '-0' : result;\n}\n\nmodule.exports = baseToString;\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_castSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_castSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseSlice = __webpack_require__(/*! ./_baseSlice */ \"./node_modules/lodash/_baseSlice.js\");\n/**\n * Casts `array` to a slice if it's needed.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {number} start The start position.\n * @param {number} [end=array.length] The end position.\n * @returns {Array} Returns the cast slice.\n */\n\n\nfunction castSlice(array, start, end) {\n  var length = array.length;\n  end = end === undefined ? length : end;\n  return !start && end >= length ? array : baseSlice(array, start, end);\n}\n\nmodule.exports = castSlice;\n\n//# sourceURL=webpack:///./node_modules/lodash/_castSlice.js?");

/***/ }),

/***/ "./node_modules/lodash/_charsEndIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_charsEndIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ \"./node_modules/lodash/_baseIndexOf.js\");\n/**\n * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol\n * that is not found in the character symbols.\n *\n * @private\n * @param {Array} strSymbols The string symbols to inspect.\n * @param {Array} chrSymbols The character symbols to find.\n * @returns {number} Returns the index of the last unmatched string symbol.\n */\n\n\nfunction charsEndIndex(strSymbols, chrSymbols) {\n  var index = strSymbols.length;\n\n  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}\n\n  return index;\n}\n\nmodule.exports = charsEndIndex;\n\n//# sourceURL=webpack:///./node_modules/lodash/_charsEndIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/_charsStartIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_charsStartIndex.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ \"./node_modules/lodash/_baseIndexOf.js\");\n/**\n * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol\n * that is not found in the character symbols.\n *\n * @private\n * @param {Array} strSymbols The string symbols to inspect.\n * @param {Array} chrSymbols The character symbols to find.\n * @returns {number} Returns the index of the first unmatched string symbol.\n */\n\n\nfunction charsStartIndex(strSymbols, chrSymbols) {\n  var index = -1,\n      length = strSymbols.length;\n\n  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}\n\n  return index;\n}\n\nmodule.exports = charsStartIndex;\n\n//# sourceURL=webpack:///./node_modules/lodash/_charsStartIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/_createCaseFirst.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_createCaseFirst.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var castSlice = __webpack_require__(/*! ./_castSlice */ \"./node_modules/lodash/_castSlice.js\"),\n    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ \"./node_modules/lodash/_hasUnicode.js\"),\n    stringToArray = __webpack_require__(/*! ./_stringToArray */ \"./node_modules/lodash/_stringToArray.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n/**\n * Creates a function like `_.lowerFirst`.\n *\n * @private\n * @param {string} methodName The name of the `String` case method to use.\n * @returns {Function} Returns the new case function.\n */\n\n\nfunction createCaseFirst(methodName) {\n  return function (string) {\n    string = toString(string);\n    var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;\n    var chr = strSymbols ? strSymbols[0] : string.charAt(0);\n    var trailing = strSymbols ? castSlice(strSymbols, 1).join('') : string.slice(1);\n    return chr[methodName]() + trailing;\n  };\n}\n\nmodule.exports = createCaseFirst;\n\n//# sourceURL=webpack:///./node_modules/lodash/_createCaseFirst.js?");

/***/ }),

/***/ "./node_modules/lodash/_createCompounder.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_createCompounder.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ \"./node_modules/lodash/_arrayReduce.js\"),\n    deburr = __webpack_require__(/*! ./deburr */ \"./node_modules/lodash/deburr.js\"),\n    words = __webpack_require__(/*! ./words */ \"./node_modules/lodash/words.js\");\n/** Used to compose unicode capture groups. */\n\n\nvar rsApos = \"['\\u2019]\";\n/** Used to match apostrophes. */\n\nvar reApos = RegExp(rsApos, 'g');\n/**\n * Creates a function like `_.camelCase`.\n *\n * @private\n * @param {Function} callback The function to combine each word.\n * @returns {Function} Returns the new compounder function.\n */\n\nfunction createCompounder(callback) {\n  return function (string) {\n    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');\n  };\n}\n\nmodule.exports = createCompounder;\n\n//# sourceURL=webpack:///./node_modules/lodash/_createCompounder.js?");

/***/ }),

/***/ "./node_modules/lodash/_deburrLetter.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_deburrLetter.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ \"./node_modules/lodash/_basePropertyOf.js\");\n/** Used to map Latin Unicode letters to basic Latin letters. */\n\n\nvar deburredLetters = {\n  // Latin-1 Supplement block.\n  '\\xc0': 'A',\n  '\\xc1': 'A',\n  '\\xc2': 'A',\n  '\\xc3': 'A',\n  '\\xc4': 'A',\n  '\\xc5': 'A',\n  '\\xe0': 'a',\n  '\\xe1': 'a',\n  '\\xe2': 'a',\n  '\\xe3': 'a',\n  '\\xe4': 'a',\n  '\\xe5': 'a',\n  '\\xc7': 'C',\n  '\\xe7': 'c',\n  '\\xd0': 'D',\n  '\\xf0': 'd',\n  '\\xc8': 'E',\n  '\\xc9': 'E',\n  '\\xca': 'E',\n  '\\xcb': 'E',\n  '\\xe8': 'e',\n  '\\xe9': 'e',\n  '\\xea': 'e',\n  '\\xeb': 'e',\n  '\\xcc': 'I',\n  '\\xcd': 'I',\n  '\\xce': 'I',\n  '\\xcf': 'I',\n  '\\xec': 'i',\n  '\\xed': 'i',\n  '\\xee': 'i',\n  '\\xef': 'i',\n  '\\xd1': 'N',\n  '\\xf1': 'n',\n  '\\xd2': 'O',\n  '\\xd3': 'O',\n  '\\xd4': 'O',\n  '\\xd5': 'O',\n  '\\xd6': 'O',\n  '\\xd8': 'O',\n  '\\xf2': 'o',\n  '\\xf3': 'o',\n  '\\xf4': 'o',\n  '\\xf5': 'o',\n  '\\xf6': 'o',\n  '\\xf8': 'o',\n  '\\xd9': 'U',\n  '\\xda': 'U',\n  '\\xdb': 'U',\n  '\\xdc': 'U',\n  '\\xf9': 'u',\n  '\\xfa': 'u',\n  '\\xfb': 'u',\n  '\\xfc': 'u',\n  '\\xdd': 'Y',\n  '\\xfd': 'y',\n  '\\xff': 'y',\n  '\\xc6': 'Ae',\n  '\\xe6': 'ae',\n  '\\xde': 'Th',\n  '\\xfe': 'th',\n  '\\xdf': 'ss',\n  // Latin Extended-A block.\n  \"\\u0100\": 'A',\n  \"\\u0102\": 'A',\n  \"\\u0104\": 'A',\n  \"\\u0101\": 'a',\n  \"\\u0103\": 'a',\n  \"\\u0105\": 'a',\n  \"\\u0106\": 'C',\n  \"\\u0108\": 'C',\n  \"\\u010A\": 'C',\n  \"\\u010C\": 'C',\n  \"\\u0107\": 'c',\n  \"\\u0109\": 'c',\n  \"\\u010B\": 'c',\n  \"\\u010D\": 'c',\n  \"\\u010E\": 'D',\n  \"\\u0110\": 'D',\n  \"\\u010F\": 'd',\n  \"\\u0111\": 'd',\n  \"\\u0112\": 'E',\n  \"\\u0114\": 'E',\n  \"\\u0116\": 'E',\n  \"\\u0118\": 'E',\n  \"\\u011A\": 'E',\n  \"\\u0113\": 'e',\n  \"\\u0115\": 'e',\n  \"\\u0117\": 'e',\n  \"\\u0119\": 'e',\n  \"\\u011B\": 'e',\n  \"\\u011C\": 'G',\n  \"\\u011E\": 'G',\n  \"\\u0120\": 'G',\n  \"\\u0122\": 'G',\n  \"\\u011D\": 'g',\n  \"\\u011F\": 'g',\n  \"\\u0121\": 'g',\n  \"\\u0123\": 'g',\n  \"\\u0124\": 'H',\n  \"\\u0126\": 'H',\n  \"\\u0125\": 'h',\n  \"\\u0127\": 'h',\n  \"\\u0128\": 'I',\n  \"\\u012A\": 'I',\n  \"\\u012C\": 'I',\n  \"\\u012E\": 'I',\n  \"\\u0130\": 'I',\n  \"\\u0129\": 'i',\n  \"\\u012B\": 'i',\n  \"\\u012D\": 'i',\n  \"\\u012F\": 'i',\n  \"\\u0131\": 'i',\n  \"\\u0134\": 'J',\n  \"\\u0135\": 'j',\n  \"\\u0136\": 'K',\n  \"\\u0137\": 'k',\n  \"\\u0138\": 'k',\n  \"\\u0139\": 'L',\n  \"\\u013B\": 'L',\n  \"\\u013D\": 'L',\n  \"\\u013F\": 'L',\n  \"\\u0141\": 'L',\n  \"\\u013A\": 'l',\n  \"\\u013C\": 'l',\n  \"\\u013E\": 'l',\n  \"\\u0140\": 'l',\n  \"\\u0142\": 'l',\n  \"\\u0143\": 'N',\n  \"\\u0145\": 'N',\n  \"\\u0147\": 'N',\n  \"\\u014A\": 'N',\n  \"\\u0144\": 'n',\n  \"\\u0146\": 'n',\n  \"\\u0148\": 'n',\n  \"\\u014B\": 'n',\n  \"\\u014C\": 'O',\n  \"\\u014E\": 'O',\n  \"\\u0150\": 'O',\n  \"\\u014D\": 'o',\n  \"\\u014F\": 'o',\n  \"\\u0151\": 'o',\n  \"\\u0154\": 'R',\n  \"\\u0156\": 'R',\n  \"\\u0158\": 'R',\n  \"\\u0155\": 'r',\n  \"\\u0157\": 'r',\n  \"\\u0159\": 'r',\n  \"\\u015A\": 'S',\n  \"\\u015C\": 'S',\n  \"\\u015E\": 'S',\n  \"\\u0160\": 'S',\n  \"\\u015B\": 's',\n  \"\\u015D\": 's',\n  \"\\u015F\": 's',\n  \"\\u0161\": 's',\n  \"\\u0162\": 'T',\n  \"\\u0164\": 'T',\n  \"\\u0166\": 'T',\n  \"\\u0163\": 't',\n  \"\\u0165\": 't',\n  \"\\u0167\": 't',\n  \"\\u0168\": 'U',\n  \"\\u016A\": 'U',\n  \"\\u016C\": 'U',\n  \"\\u016E\": 'U',\n  \"\\u0170\": 'U',\n  \"\\u0172\": 'U',\n  \"\\u0169\": 'u',\n  \"\\u016B\": 'u',\n  \"\\u016D\": 'u',\n  \"\\u016F\": 'u',\n  \"\\u0171\": 'u',\n  \"\\u0173\": 'u',\n  \"\\u0174\": 'W',\n  \"\\u0175\": 'w',\n  \"\\u0176\": 'Y',\n  \"\\u0177\": 'y',\n  \"\\u0178\": 'Y',\n  \"\\u0179\": 'Z',\n  \"\\u017B\": 'Z',\n  \"\\u017D\": 'Z',\n  \"\\u017A\": 'z',\n  \"\\u017C\": 'z',\n  \"\\u017E\": 'z',\n  \"\\u0132\": 'IJ',\n  \"\\u0133\": 'ij',\n  \"\\u0152\": 'Oe',\n  \"\\u0153\": 'oe',\n  \"\\u0149\": \"'n\",\n  \"\\u017F\": 's'\n};\n/**\n * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A\n * letters to basic Latin letters.\n *\n * @private\n * @param {string} letter The matched letter to deburr.\n * @returns {string} Returns the deburred letter.\n */\n\nvar deburrLetter = basePropertyOf(deburredLetters);\nmodule.exports = deburrLetter;\n\n//# sourceURL=webpack:///./node_modules/lodash/_deburrLetter.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/** Detect free variable `global` from Node.js. */\nvar freeGlobal = (typeof global === \"undefined\" ? \"undefined\" : _typeof(global)) == 'object' && global && global.Object === Object && global;\nmodule.exports = freeGlobal;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n/** Used for built-in method references. */\n\n\nvar objectProto = Object.prototype;\n/** Used to check objects for own properties. */\n\nvar hasOwnProperty = objectProto.hasOwnProperty;\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\n\nvar nativeObjectToString = objectProto.toString;\n/** Built-in value references. */\n\nvar symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\n\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n//# sourceURL=webpack:///./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_hasUnicode.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to compose unicode character classes. */\nvar rsAstralRange = \"\\\\ud800-\\\\udfff\",\n    rsComboMarksRange = \"\\\\u0300-\\\\u036f\",\n    reComboHalfMarksRange = \"\\\\ufe20-\\\\ufe2f\",\n    rsComboSymbolsRange = \"\\\\u20d0-\\\\u20ff\",\n    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,\n    rsVarRange = \"\\\\ufe0e\\\\ufe0f\";\n/** Used to compose unicode capture groups. */\n\nvar rsZWJ = \"\\\\u200d\";\n/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */\n\nvar reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');\n/**\n * Checks if `string` contains Unicode symbols.\n *\n * @private\n * @param {string} string The string to inspect.\n * @returns {boolean} Returns `true` if a symbol is found, else `false`.\n */\n\nfunction hasUnicode(string) {\n  return reHasUnicode.test(string);\n}\n\nmodule.exports = hasUnicode;\n\n//# sourceURL=webpack:///./node_modules/lodash/_hasUnicode.js?");

/***/ }),

/***/ "./node_modules/lodash/_hasUnicodeWord.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_hasUnicodeWord.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to detect strings that need a more robust regexp to match words. */\nvar reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;\n/**\n * Checks if `string` contains a word composed of Unicode symbols.\n *\n * @private\n * @param {string} string The string to inspect.\n * @returns {boolean} Returns `true` if a word is found, else `false`.\n */\n\nfunction hasUnicodeWord(string) {\n  return reHasUnicodeWord.test(string);\n}\n\nmodule.exports = hasUnicodeWord;\n\n//# sourceURL=webpack:///./node_modules/lodash/_hasUnicodeWord.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\n\nvar nativeObjectToString = objectProto.toString;\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\n\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n//# sourceURL=webpack:///./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n/** Detect free variable `self`. */\n\n\nvar freeSelf = (typeof self === \"undefined\" ? \"undefined\" : _typeof(self)) == 'object' && self && self.Object === Object && self;\n/** Used as a reference to the global object. */\n\nvar root = freeGlobal || freeSelf || Function('return this')();\nmodule.exports = root;\n\n//# sourceURL=webpack:///./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/_strictIndexOf.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_strictIndexOf.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.indexOf` which performs strict equality\n * comparisons of values, i.e. `===`.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} value The value to search for.\n * @param {number} fromIndex The index to search from.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction strictIndexOf(array, value, fromIndex) {\n  var index = fromIndex - 1,\n      length = array.length;\n\n  while (++index < length) {\n    if (array[index] === value) {\n      return index;\n    }\n  }\n\n  return -1;\n}\n\nmodule.exports = strictIndexOf;\n\n//# sourceURL=webpack:///./node_modules/lodash/_strictIndexOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_stringToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_stringToArray.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ \"./node_modules/lodash/_asciiToArray.js\"),\n    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ \"./node_modules/lodash/_hasUnicode.js\"),\n    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ \"./node_modules/lodash/_unicodeToArray.js\");\n/**\n * Converts `string` to an array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the converted array.\n */\n\n\nfunction stringToArray(string) {\n  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);\n}\n\nmodule.exports = stringToArray;\n\n//# sourceURL=webpack:///./node_modules/lodash/_stringToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_unicodeToArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_unicodeToArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to compose unicode character classes. */\nvar rsAstralRange = \"\\\\ud800-\\\\udfff\",\n    rsComboMarksRange = \"\\\\u0300-\\\\u036f\",\n    reComboHalfMarksRange = \"\\\\ufe20-\\\\ufe2f\",\n    rsComboSymbolsRange = \"\\\\u20d0-\\\\u20ff\",\n    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,\n    rsVarRange = \"\\\\ufe0e\\\\ufe0f\";\n/** Used to compose unicode capture groups. */\n\nvar rsAstral = '[' + rsAstralRange + ']',\n    rsCombo = '[' + rsComboRange + ']',\n    rsFitz = \"\\\\ud83c[\\\\udffb-\\\\udfff]\",\n    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',\n    rsNonAstral = '[^' + rsAstralRange + ']',\n    rsRegional = \"(?:\\\\ud83c[\\\\udde6-\\\\uddff]){2}\",\n    rsSurrPair = \"[\\\\ud800-\\\\udbff][\\\\udc00-\\\\udfff]\",\n    rsZWJ = \"\\\\u200d\";\n/** Used to compose unicode regexes. */\n\nvar reOptMod = rsModifier + '?',\n    rsOptVar = '[' + rsVarRange + ']?',\n    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',\n    rsSeq = rsOptVar + reOptMod + rsOptJoin,\n    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';\n/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */\n\nvar reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');\n/**\n * Converts a Unicode `string` to an array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the converted array.\n */\n\nfunction unicodeToArray(string) {\n  return string.match(reUnicode) || [];\n}\n\nmodule.exports = unicodeToArray;\n\n//# sourceURL=webpack:///./node_modules/lodash/_unicodeToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_unicodeWords.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_unicodeWords.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to compose unicode character classes. */\nvar rsAstralRange = \"\\\\ud800-\\\\udfff\",\n    rsComboMarksRange = \"\\\\u0300-\\\\u036f\",\n    reComboHalfMarksRange = \"\\\\ufe20-\\\\ufe2f\",\n    rsComboSymbolsRange = \"\\\\u20d0-\\\\u20ff\",\n    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,\n    rsDingbatRange = \"\\\\u2700-\\\\u27bf\",\n    rsLowerRange = 'a-z\\\\xdf-\\\\xf6\\\\xf8-\\\\xff',\n    rsMathOpRange = '\\\\xac\\\\xb1\\\\xd7\\\\xf7',\n    rsNonCharRange = '\\\\x00-\\\\x2f\\\\x3a-\\\\x40\\\\x5b-\\\\x60\\\\x7b-\\\\xbf',\n    rsPunctuationRange = \"\\\\u2000-\\\\u206f\",\n    rsSpaceRange = \" \\\\t\\\\x0b\\\\f\\\\xa0\\\\ufeff\\\\n\\\\r\\\\u2028\\\\u2029\\\\u1680\\\\u180e\\\\u2000\\\\u2001\\\\u2002\\\\u2003\\\\u2004\\\\u2005\\\\u2006\\\\u2007\\\\u2008\\\\u2009\\\\u200a\\\\u202f\\\\u205f\\\\u3000\",\n    rsUpperRange = 'A-Z\\\\xc0-\\\\xd6\\\\xd8-\\\\xde',\n    rsVarRange = \"\\\\ufe0e\\\\ufe0f\",\n    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;\n/** Used to compose unicode capture groups. */\n\nvar rsApos = \"['\\u2019]\",\n    rsBreak = '[' + rsBreakRange + ']',\n    rsCombo = '[' + rsComboRange + ']',\n    rsDigits = '\\\\d+',\n    rsDingbat = '[' + rsDingbatRange + ']',\n    rsLower = '[' + rsLowerRange + ']',\n    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',\n    rsFitz = \"\\\\ud83c[\\\\udffb-\\\\udfff]\",\n    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',\n    rsNonAstral = '[^' + rsAstralRange + ']',\n    rsRegional = \"(?:\\\\ud83c[\\\\udde6-\\\\uddff]){2}\",\n    rsSurrPair = \"[\\\\ud800-\\\\udbff][\\\\udc00-\\\\udfff]\",\n    rsUpper = '[' + rsUpperRange + ']',\n    rsZWJ = \"\\\\u200d\";\n/** Used to compose unicode regexes. */\n\nvar rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',\n    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',\n    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',\n    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',\n    reOptMod = rsModifier + '?',\n    rsOptVar = '[' + rsVarRange + ']?',\n    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',\n    rsOrdLower = '\\\\d*(?:1st|2nd|3rd|(?![123])\\\\dth)(?=\\\\b|[A-Z_])',\n    rsOrdUpper = '\\\\d*(?:1ST|2ND|3RD|(?![123])\\\\dTH)(?=\\\\b|[a-z_])',\n    rsSeq = rsOptVar + reOptMod + rsOptJoin,\n    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;\n/** Used to match complex or compound words. */\n\nvar reUnicodeWord = RegExp([rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')', rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower, rsUpper + '+' + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join('|'), 'g');\n/**\n * Splits a Unicode `string` into an array of its words.\n *\n * @private\n * @param {string} The string to inspect.\n * @returns {Array} Returns the words of `string`.\n */\n\nfunction unicodeWords(string) {\n  return string.match(reUnicodeWord) || [];\n}\n\nmodule.exports = unicodeWords;\n\n//# sourceURL=webpack:///./node_modules/lodash/_unicodeWords.js?");

/***/ }),

/***/ "./node_modules/lodash/camelCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/camelCase.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var capitalize = __webpack_require__(/*! ./capitalize */ \"./node_modules/lodash/capitalize.js\"),\n    createCompounder = __webpack_require__(/*! ./_createCompounder */ \"./node_modules/lodash/_createCompounder.js\");\n/**\n * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category String\n * @param {string} [string=''] The string to convert.\n * @returns {string} Returns the camel cased string.\n * @example\n *\n * _.camelCase('Foo Bar');\n * // => 'fooBar'\n *\n * _.camelCase('--foo-bar--');\n * // => 'fooBar'\n *\n * _.camelCase('__FOO_BAR__');\n * // => 'fooBar'\n */\n\n\nvar camelCase = createCompounder(function (result, word, index) {\n  word = word.toLowerCase();\n  return result + (index ? capitalize(word) : word);\n});\nmodule.exports = camelCase;\n\n//# sourceURL=webpack:///./node_modules/lodash/camelCase.js?");

/***/ }),

/***/ "./node_modules/lodash/capitalize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/capitalize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\"),\n    upperFirst = __webpack_require__(/*! ./upperFirst */ \"./node_modules/lodash/upperFirst.js\");\n/**\n * Converts the first character of `string` to upper case and the remaining\n * to lower case.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category String\n * @param {string} [string=''] The string to capitalize.\n * @returns {string} Returns the capitalized string.\n * @example\n *\n * _.capitalize('FRED');\n * // => 'Fred'\n */\n\n\nfunction capitalize(string) {\n  return upperFirst(toString(string).toLowerCase());\n}\n\nmodule.exports = capitalize;\n\n//# sourceURL=webpack:///./node_modules/lodash/capitalize.js?");

/***/ }),

/***/ "./node_modules/lodash/deburr.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/deburr.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var deburrLetter = __webpack_require__(/*! ./_deburrLetter */ \"./node_modules/lodash/_deburrLetter.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n/** Used to match Latin Unicode letters (excluding mathematical operators). */\n\n\nvar reLatin = /[\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\xff\\u0100-\\u017f]/g;\n/** Used to compose unicode character classes. */\n\nvar rsComboMarksRange = \"\\\\u0300-\\\\u036f\",\n    reComboHalfMarksRange = \"\\\\ufe20-\\\\ufe2f\",\n    rsComboSymbolsRange = \"\\\\u20d0-\\\\u20ff\",\n    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;\n/** Used to compose unicode capture groups. */\n\nvar rsCombo = '[' + rsComboRange + ']';\n/**\n * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and\n * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).\n */\n\nvar reComboMark = RegExp(rsCombo, 'g');\n/**\n * Deburrs `string` by converting\n * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)\n * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)\n * letters to basic Latin letters and removing\n * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category String\n * @param {string} [string=''] The string to deburr.\n * @returns {string} Returns the deburred string.\n * @example\n *\n * _.deburr('déjà vu');\n * // => 'deja vu'\n */\n\nfunction deburr(string) {\n  string = toString(string);\n  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');\n}\n\nmodule.exports = deburr;\n\n//# sourceURL=webpack:///./node_modules/lodash/deburr.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\nmodule.exports = isArray;\n\n//# sourceURL=webpack:///./node_modules/lodash/isArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && _typeof(value) == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n//# sourceURL=webpack:///./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n/** `Object#toString` result references. */\n\n\nvar symbolTag = '[object Symbol]';\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\n\nfunction isSymbol(value) {\n  return _typeof(value) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;\n}\n\nmodule.exports = isSymbol;\n\n//# sourceURL=webpack:///./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/kebabCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/kebabCase.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createCompounder = __webpack_require__(/*! ./_createCompounder */ \"./node_modules/lodash/_createCompounder.js\");\n/**\n * Converts `string` to\n * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category String\n * @param {string} [string=''] The string to convert.\n * @returns {string} Returns the kebab cased string.\n * @example\n *\n * _.kebabCase('Foo Bar');\n * // => 'foo-bar'\n *\n * _.kebabCase('fooBar');\n * // => 'foo-bar'\n *\n * _.kebabCase('__FOO_BAR__');\n * // => 'foo-bar'\n */\n\n\nvar kebabCase = createCompounder(function (result, word, index) {\n  return result + (index ? '-' : '') + word.toLowerCase();\n});\nmodule.exports = kebabCase;\n\n//# sourceURL=webpack:///./node_modules/lodash/kebabCase.js?");

/***/ }),

/***/ "./node_modules/lodash/snakeCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/snakeCase.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createCompounder = __webpack_require__(/*! ./_createCompounder */ \"./node_modules/lodash/_createCompounder.js\");\n/**\n * Converts `string` to\n * [snake case](https://en.wikipedia.org/wiki/Snake_case).\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category String\n * @param {string} [string=''] The string to convert.\n * @returns {string} Returns the snake cased string.\n * @example\n *\n * _.snakeCase('Foo Bar');\n * // => 'foo_bar'\n *\n * _.snakeCase('fooBar');\n * // => 'foo_bar'\n *\n * _.snakeCase('--FOO-BAR--');\n * // => 'foo_bar'\n */\n\n\nvar snakeCase = createCompounder(function (result, word, index) {\n  return result + (index ? '_' : '') + word.toLowerCase();\n});\nmodule.exports = snakeCase;\n\n//# sourceURL=webpack:///./node_modules/lodash/snakeCase.js?");

/***/ }),

/***/ "./node_modules/lodash/startCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/startCase.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createCompounder = __webpack_require__(/*! ./_createCompounder */ \"./node_modules/lodash/_createCompounder.js\"),\n    upperFirst = __webpack_require__(/*! ./upperFirst */ \"./node_modules/lodash/upperFirst.js\");\n/**\n * Converts `string` to\n * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).\n *\n * @static\n * @memberOf _\n * @since 3.1.0\n * @category String\n * @param {string} [string=''] The string to convert.\n * @returns {string} Returns the start cased string.\n * @example\n *\n * _.startCase('--foo-bar--');\n * // => 'Foo Bar'\n *\n * _.startCase('fooBar');\n * // => 'Foo Bar'\n *\n * _.startCase('__FOO_BAR__');\n * // => 'FOO BAR'\n */\n\n\nvar startCase = createCompounder(function (result, word, index) {\n  return result + (index ? ' ' : '') + upperFirst(word);\n});\nmodule.exports = startCase;\n\n//# sourceURL=webpack:///./node_modules/lodash/startCase.js?");

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseToString = __webpack_require__(/*! ./_baseToString */ \"./node_modules/lodash/_baseToString.js\");\n/**\n * Converts `value` to a string. An empty string is returned for `null`\n * and `undefined` values. The sign of `-0` is preserved.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n * @example\n *\n * _.toString(null);\n * // => ''\n *\n * _.toString(-0);\n * // => '-0'\n *\n * _.toString([1, 2, 3]);\n * // => '1,2,3'\n */\n\n\nfunction toString(value) {\n  return value == null ? '' : baseToString(value);\n}\n\nmodule.exports = toString;\n\n//# sourceURL=webpack:///./node_modules/lodash/toString.js?");

/***/ }),

/***/ "./node_modules/lodash/trim.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/trim.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseToString = __webpack_require__(/*! ./_baseToString */ \"./node_modules/lodash/_baseToString.js\"),\n    castSlice = __webpack_require__(/*! ./_castSlice */ \"./node_modules/lodash/_castSlice.js\"),\n    charsEndIndex = __webpack_require__(/*! ./_charsEndIndex */ \"./node_modules/lodash/_charsEndIndex.js\"),\n    charsStartIndex = __webpack_require__(/*! ./_charsStartIndex */ \"./node_modules/lodash/_charsStartIndex.js\"),\n    stringToArray = __webpack_require__(/*! ./_stringToArray */ \"./node_modules/lodash/_stringToArray.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n/** Used to match leading and trailing whitespace. */\n\n\nvar reTrim = /^\\s+|\\s+$/g;\n/**\n * Removes leading and trailing whitespace or specified characters from `string`.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category String\n * @param {string} [string=''] The string to trim.\n * @param {string} [chars=whitespace] The characters to trim.\n * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.\n * @returns {string} Returns the trimmed string.\n * @example\n *\n * _.trim('  abc  ');\n * // => 'abc'\n *\n * _.trim('-_-abc-_-', '_-');\n * // => 'abc'\n *\n * _.map(['  foo  ', '  bar  '], _.trim);\n * // => ['foo', 'bar']\n */\n\nfunction trim(string, chars, guard) {\n  string = toString(string);\n\n  if (string && (guard || chars === undefined)) {\n    return string.replace(reTrim, '');\n  }\n\n  if (!string || !(chars = baseToString(chars))) {\n    return string;\n  }\n\n  var strSymbols = stringToArray(string),\n      chrSymbols = stringToArray(chars),\n      start = charsStartIndex(strSymbols, chrSymbols),\n      end = charsEndIndex(strSymbols, chrSymbols) + 1;\n  return castSlice(strSymbols, start, end).join('');\n}\n\nmodule.exports = trim;\n\n//# sourceURL=webpack:///./node_modules/lodash/trim.js?");

/***/ }),

/***/ "./node_modules/lodash/upperFirst.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/upperFirst.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createCaseFirst = __webpack_require__(/*! ./_createCaseFirst */ \"./node_modules/lodash/_createCaseFirst.js\");\n/**\n * Converts the first character of `string` to upper case.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category String\n * @param {string} [string=''] The string to convert.\n * @returns {string} Returns the converted string.\n * @example\n *\n * _.upperFirst('fred');\n * // => 'Fred'\n *\n * _.upperFirst('FRED');\n * // => 'FRED'\n */\n\n\nvar upperFirst = createCaseFirst('toUpperCase');\nmodule.exports = upperFirst;\n\n//# sourceURL=webpack:///./node_modules/lodash/upperFirst.js?");

/***/ }),

/***/ "./node_modules/lodash/words.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/words.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var asciiWords = __webpack_require__(/*! ./_asciiWords */ \"./node_modules/lodash/_asciiWords.js\"),\n    hasUnicodeWord = __webpack_require__(/*! ./_hasUnicodeWord */ \"./node_modules/lodash/_hasUnicodeWord.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\"),\n    unicodeWords = __webpack_require__(/*! ./_unicodeWords */ \"./node_modules/lodash/_unicodeWords.js\");\n/**\n * Splits `string` into an array of its words.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category String\n * @param {string} [string=''] The string to inspect.\n * @param {RegExp|string} [pattern] The pattern to match words.\n * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.\n * @returns {Array} Returns the words of `string`.\n * @example\n *\n * _.words('fred, barney, & pebbles');\n * // => ['fred', 'barney', 'pebbles']\n *\n * _.words('fred, barney, & pebbles', /[^, ]+/g);\n * // => ['fred', 'barney', '&', 'pebbles']\n */\n\n\nfunction words(string, pattern, guard) {\n  string = toString(string);\n  pattern = guard ? undefined : pattern;\n\n  if (pattern === undefined) {\n    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);\n  }\n\n  return string.match(pattern) || [];\n}\n\nmodule.exports = words;\n\n//# sourceURL=webpack:///./node_modules/lodash/words.js?");

/***/ }),

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var v1 = __webpack_require__(/*! ./v1 */ \"./node_modules/uuid/v1.js\");\n\nvar v4 = __webpack_require__(/*! ./v4 */ \"./node_modules/uuid/v4.js\");\n\nvar uuid = v4;\nuuid.v1 = v1;\nuuid.v4 = v4;\nmodule.exports = uuid;\n\n//# sourceURL=webpack:///./node_modules/uuid/index.js?");

/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex[i] = (i + 0x100).toString(16).substr(1);\n}\n\nfunction bytesToUuid(buf, offset) {\n  var i = offset || 0;\n  var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4\n\n  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');\n}\n\nmodule.exports = bytesToUuid;\n\n//# sourceURL=webpack:///./node_modules/uuid/lib/bytesToUuid.js?");

/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Unique ID creation requires a high quality random # generator.  In the\n// browser this is a little complicated due to unknown quality of Math.random()\n// and inconsistent support for the `crypto` API.  We do the best we can via\n// feature-detection\n// getRandomValues needs to be invoked in a context where \"this\" is a Crypto\n// implementation. Also, find the complete implementation of crypto on IE11.\nvar getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\nif (getRandomValues) {\n  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto\n  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef\n\n  module.exports = function whatwgRNG() {\n    getRandomValues(rnds8);\n    return rnds8;\n  };\n} else {\n  // Math.random()-based (RNG)\n  //\n  // If all else fails, use Math.random().  It's fast, but is of unspecified\n  // quality.\n  var rnds = new Array(16);\n\n  module.exports = function mathRNG() {\n    for (var i = 0, r; i < 16; i++) {\n      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;\n      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;\n    }\n\n    return rnds;\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/uuid/lib/rng-browser.js?");

/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var rng = __webpack_require__(/*! ./lib/rng */ \"./node_modules/uuid/lib/rng-browser.js\");\n\nvar bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ \"./node_modules/uuid/lib/bytesToUuid.js\"); // **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\n\n\nvar _nodeId;\n\nvar _clockseq; // Previous uuid creation time\n\n\nvar _lastMSecs = 0;\nvar _lastNSecs = 0; // See https://github.com/broofa/node-uuid for API details\n\nfunction v1(options, buf, offset) {\n  var i = buf && offset || 0;\n  var b = buf || [];\n  options = options || {};\n  var node = options.node || _nodeId;\n  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n\n  if (node == null || clockseq == null) {\n    var seedBytes = rng();\n\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];\n    }\n\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n\n\n  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime(); // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n\n  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)\n\n  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression\n\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n\n\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  } // Per 4.2.1.2 Throw error if too many uuids are requested\n\n\n  if (nsecs >= 10000) {\n    throw new Error('uuid.v1(): Can\\'t create more than 10M uuids/sec');\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n\n  msecs += 12219292800000; // `time_low`\n\n  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff; // `time_mid`\n\n  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff; // `time_high_and_version`\n\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n\n  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n\n  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`\n\n  b[i++] = clockseq & 0xff; // `node`\n\n  for (var n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf ? buf : bytesToUuid(b);\n}\n\nmodule.exports = v1;\n\n//# sourceURL=webpack:///./node_modules/uuid/v1.js?");

/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var rng = __webpack_require__(/*! ./lib/rng */ \"./node_modules/uuid/lib/rng-browser.js\");\n\nvar bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ \"./node_modules/uuid/lib/bytesToUuid.js\");\n\nfunction v4(options, buf, offset) {\n  var i = buf && offset || 0;\n\n  if (typeof options == 'string') {\n    buf = options === 'binary' ? new Array(16) : null;\n    options = null;\n  }\n\n  options = options || {};\n  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    for (var ii = 0; ii < 16; ++ii) {\n      buf[i + ii] = rnds[ii];\n    }\n  }\n\n  return buf || bytesToUuid(rnds);\n}\n\nmodule.exports = v4;\n\n//# sourceURL=webpack:///./node_modules/uuid/v4.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar g; // This works in non-strict mode\n\ng = function () {\n  return this;\n}();\n\ntry {\n  // This works if eval is allowed (see CSP)\n  g = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n  // This works if the window reference is available\n  if ((typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\") g = window;\n} // g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\n\nmodule.exports = g;\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/application/application.js":
/*!****************************************!*\
  !*** ./src/application/application.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openmind/litelog */ \"./node_modules/@openmind/litelog/dist/logger.umd.js\");\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openmind_litelog__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dom_dom_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/dom-wrapper */ \"./src/dom/dom-wrapper.js\");\n/* harmony import */ var _events_broadcats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/broadcats */ \"./src/events/broadcats.js\");\n/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/components */ \"./src/components/components.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Log = new _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default.a('Application');\n\nvar Application =\n/*#__PURE__*/\nfunction () {\n  function Application() {\n    _classCallCheck(this, Application);\n  }\n\n  _createClass(Application, [{\n    key: \"start\",\n    value: function start() {\n      var _this = this;\n\n      Log.log('app initialized');\n      var components = this.DOM.find('[data-component]');\n      components.forEach(function (element) {\n        _this.Components.create(element);\n      });\n    }\n  }, {\n    key: \"Broadcast\",\n\n    /**\n     * Get the application Broadcast\n     * @return {Broadcast}\n     * @readonly\n     * @memberOf Application\n     */\n    get: function get() {\n      return typeof this.broadcast !== 'undefined' ? this.dom : new _events_broadcats__WEBPACK_IMPORTED_MODULE_2__[\"default\"](document.createElement('span'));\n    }\n    /**\n     * Set the main broadcast for application\n     * @param {Broadcast} broadcast\n     * @memberOf Application\n     */\n    ,\n    set: function set(broadcast) {\n      this.broadcast = broadcast;\n    }\n    /**\n     * Get the application component list\n     * @return {Components}\n     * @readonly\n     * @memberOf Application\n     */\n\n  }, {\n    key: \"Components\",\n    get: function get() {\n      return typeof this.components !== 'undefined' ? this.components : _components_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n    }\n    /**\n     * Set the component list for application\n     * @param {Components} components\n     * @memberOf Application\n     */\n    ,\n    set: function set(components) {\n      this.components = components;\n    }\n    /**\n     * Get the application DOM\n     * @return {DomWrapper}\n     * @readonly\n     * @memberOf Application\n     */\n\n  }, {\n    key: \"DOM\",\n    get: function get() {\n      return typeof this.dom !== 'undefined' ? this.dom : new _dom_dom_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document);\n    }\n    /**\n     * Set the main DOM for application\n     * @param {DomWrapper} dom\n     * @memberOf Application\n     */\n    ,\n    set: function set(dom) {\n      this.dom = dom;\n    }\n  }]);\n\n  return Application;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Application);\n\n//# sourceURL=webpack:///./src/application/application.js?");

/***/ }),

/***/ "./src/components/component.js":
/*!*************************************!*\
  !*** ./src/components/component.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openmind/litelog */ \"./node_modules/@openmind/litelog/dist/logger.umd.js\");\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openmind_litelog__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_inflector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/inflector */ \"./src/utils/inflector.js\");\n/* harmony import */ var _events_event_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/event-wrapper */ \"./src/events/event-wrapper.js\");\n/* harmony import */ var _events_broadcats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/broadcats */ \"./src/events/broadcats.js\");\n/* harmony import */ var _events_event_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/event-map */ \"./src/events/event-map.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction set(target, property, value, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }\n\nfunction _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\nvar Log = new _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default.a('Component');\n/**\n * A basic component class\n * @param {element} element the DOM element which represents the component\n * @param {Broadcast} [broadcast = new Broadcast()] the Broadcast for this component\n * @class Component\n * @extends {EventWrapper}\n */\n\nvar Component =\n/*#__PURE__*/\nfunction (_EventWrapper) {\n  _inherits(Component, _EventWrapper);\n\n  _createClass(Component, [{\n    key: \"grab\",\n\n    /**\n     * An alias for {@link #componentlisten listen} method\n     * @param {string} msg message to broadcast\n     * @param {function} callback message to broadcast\n     * @returns {void}\n     * @deprecated use `listen`\n     */\n    value: function grab(msg) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n      this.listen(msg, callback);\n    }\n    /**\n     * Listen to the broadcast message\n     * @param {string} msg message to broadcast\n     * @param {function} [callback = ()=>{}] message to broadcast\n     * @returns {void}\n     */\n\n  }, {\n    key: \"listen\",\n    value: function listen(msg) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n      var emitter = this.Broadcast.listen(msg, callback);\n      this.broadcastMap.Map.push(emitter); // this.Broadcast.listen(msg, callback);\n    }\n    /**\n     * An alias for {@link #unlisten unlisten} method\n     * @param {string} msg message to broadcast\n     * @returns {void}\n     * @deprecated use `unlisten`\n     */\n\n  }, {\n    key: \"ungrab\",\n    value: function ungrab(msg) {\n      return this.unlisten(msg);\n    }\n    /**\n     * Stop listen to the given message\n     * @param {string} msg message to stop to listen to\n     * @param {string|function} [callback = ''] callback to stop exectue\n     * @returns {void}\n     */\n\n  }, {\n    key: \"unlisten\",\n    value: function unlisten(msg) {\n      var _this2 = this;\n\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n      var deletedEvents;\n\n      if (callback === '') {\n        deletedEvents = this.broadcastMap.Map.filter(function (obj) {\n          return obj.event === msg;\n        });\n      } else {\n        deletedEvents = this.broadcastMap.Map.filter(function (obj) {\n          return obj.event === msg && obj.callback.name === callback.name;\n        });\n      }\n\n      deletedEvents.forEach(function (obj) {\n        _this2.Broadcast.unlisten(obj);\n      });\n    }\n    /**\n     * An alias for {@link #componentcast cast} method\n     * @param {string} message\n     * @param {object} [object={}]\n     * @deprecated user `emit`\n     */\n\n  }, {\n    key: \"cast\",\n    value: function cast(message) {\n      var object = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      return this.emit(message, object);\n    }\n    /**\n     * Emit the message to the component Broadcast\n     * @param {string} message\n     * @param {object} [object={}]\n     */\n\n  }, {\n    key: \"emit\",\n    value: function emit(message) {\n      var object = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      this.Broadcast.emit(message, object);\n    }\n    /**\n     * Destroy and stop to listen for Broadcast messages\n     */\n\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      var _this3 = this;\n\n      this.broadcastMap.Map.forEach(function (obj) {\n        _this3.unlisten(obj.event);\n      });\n      Log.log('destroyed', this.constructor.name, 'on', this.element);\n      this.Broadcast.emit(\"\".concat(this.constructor.name, \":destroy\"));\n    }\n  }, {\n    key: \"addListeners\",\n    value: function addListeners() {\n      var _this4 = this;\n\n      Object.keys(this.Messages).forEach(function (key) {\n        _this4.listen(key, _this4.Messages[key]);\n      });\n    }\n  }, {\n    key: \"ClassName\",\n    get: function get() {\n      return this.className;\n    },\n    set: function set(name) {\n      this.className = name;\n    }\n  }, {\n    key: \"Name\",\n    get: function get() {\n      return this.name;\n    },\n    set: function set(name) {\n      this.name = name;\n      this.ClassName = new _utils_inflector__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.Name).camelize(true);\n    }\n    /**\n     * Gets the component UUID\n     * @returns {string}\n     * @readonly\n     * @memberof Component\n     */\n\n  }, {\n    key: \"UUID\",\n    get: function get() {\n      return this.uuid;\n    }\n    /**\n     * Set UUID of component\n     * by the Broadcast\n     * @param {string} uuidString\n     * @memberof Component\n     */\n    ,\n    set: function set(uuidString) {\n      this.uuid = uuidString;\n    }\n    /**\n     * Gets the component messages\n     * @returns {object}\n     * @readonly\n     * @memberof Component\n     */\n\n  }, {\n    key: \"Messages\",\n    get: function get() {\n      return this.messages;\n    }\n    /**\n     * Set all message which will be read from the component\n     * by the Broadcast\n     * @param {object} messages\n     * @memberof Component\n     */\n    ,\n    set: function set(messages) {\n      this.messages = messages;\n      this.addListeners();\n    }\n    /**\n     * Returns the Broadcast for the component instance\n     * @returns {Broadcast}\n     * @readonly\n     * @memberof Component\n     */\n\n  }, {\n    key: \"Broadcast\",\n    get: function get() {\n      return this.broadcast;\n    }\n    /**\n     * Set the broadcast\n     * @param {Broadcast} broadcast\n     * @memberof Component\n     */\n    ,\n    set: function set(broadcast) {\n      this.broadcast = broadcast;\n    }\n  }, {\n    key: \"innerHTML\",\n    set: function set(string) {\n      _set(_getPrototypeOf(Component.prototype), \"innerHTML\", string, this, true);\n\n      this.Broadcast.emit('domChanged');\n    }\n  }]);\n\n  function Component(element) {\n    var _this;\n\n    var broadcast = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _events_broadcats__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n\n    _classCallCheck(this, Component);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Component).call(this, element));\n    _this.Broadcast = broadcast;\n    _this.broadcastMap = new _events_event_map__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n    _this.Messages = Object.assign({}, _this.Messages);\n\n    _this.addListeners();\n\n    _this.UUID = Object(uuid__WEBPACK_IMPORTED_MODULE_1__[\"v4\"])();\n\n    if (element instanceof Element || element instanceof HTMLDocument) {\n      _this.element.dataset.uuid = _this.UUID;\n    }\n\n    return _this;\n  }\n\n  return Component;\n}(_events_event_wrapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\n//# sourceURL=webpack:///./src/components/component.js?");

/***/ }),

/***/ "./src/components/components.js":
/*!**************************************!*\
  !*** ./src/components/components.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openmind/litelog */ \"./node_modules/@openmind/litelog/dist/logger.umd.js\");\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openmind_litelog__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_user_exception__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/user-exception */ \"./src/core/user-exception.js\");\n\n\nvar Log = new _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default.a('Components');\n/**\n * It stores the list of components and instances and allow to register and create a component\n * @type {Object}\n */\n\nvar Components = {\n  List: new Map(),\n  Intances: new Map(),\n\n  /**\n   * Check if already exists a component within the list\n   * @param {*} component\n   * @returns {undefined|*}\n   */\n  exists: function exists(name) {\n    return Components.List.has(name);\n  },\n\n  /**\n   * Register new component and add it to the List\n   * @param {string} name the String name of component\n   * @param {*} component\n   */\n  register: function register(name, component) {\n    if (!Components.exists(name)) {\n      Components.List.set(name, component);\n    } else {\n      throw new _core_user_exception__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"The component '\".concat(component.name, \"' already exists\"));\n    }\n  },\n\n  /**\n   * Create an instance of the new component and add it to the Intances list\n   * @param {Element} element\n   * @param {*} component\n   * @returns {*} instance\n   * @throws {UserException} if the component has not been registered\n   */\n  create: function create(element) {\n    if ('component' in element.dataset) {\n      var componentClass = element.dataset.component.split(',');\n      componentClass.forEach(function (dataComponentValue) {\n        if (Components.List.has(dataComponentValue)) {\n          var ClassName = Components.List.get(dataComponentValue);\n          var instance = new ClassName(element);\n          instance.Name = dataComponentValue;\n          Components.Intances.set(element, instance);\n          instance.emit(\"\".concat(instance.Name, \":created\"));\n          return instance;\n        }\n\n        throw new _core_user_exception__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"You have to register class '\".concat(dataComponentValue, \"' before create a component\"));\n      });\n    } else {\n      throw new _core_user_exception__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"The element is not a valid component for '\".concat(dataComponentValue, \"' \"));\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Components);\n\n//# sourceURL=webpack:///./src/components/components.js?");

/***/ }),

/***/ "./src/core/user-exception.js":
/*!************************************!*\
  !*** ./src/core/user-exception.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * UserException\n * @param {string} message the message to Throw\n * @param {string} [type='UserException'] the type of exception\n * @class UserException\n */\nvar UserException = function UserException(message) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'UserException';\n\n  _classCallCheck(this, UserException);\n\n  this.message = message;\n  this.type = type;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserException);\n\n//# sourceURL=webpack:///./src/core/user-exception.js?");

/***/ }),

/***/ "./src/dom/dom-wrapper.js":
/*!********************************!*\
  !*** ./src/dom/dom-wrapper.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openmind/litelog */ \"./node_modules/@openmind/litelog/dist/logger.umd.js\");\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openmind_litelog__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Log = new _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default.a('DomWrapper');\n/**\n * A simple DOM wrapper\n * @class DomWrapper\n * @extends {Wrapper}\n */\n\nvar DomWrapper =\n/*#__PURE__*/\nfunction () {\n  _createClass(DomWrapper, [{\n    key: \"find\",\n\n    /**\n     * Find all the elements matching the query passed and return them\n     * as list of {@link #eventwrapper EventWrapper}\n     * @param {string} [selector='*']\n     * @returns {Array} all the dom elements returned by the query\n     */\n    value: function find() {\n      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';\n      return this.element.querySelectorAll(selector);\n    }\n  }, {\n    key: \"element\",\n\n    /**\n     * Get the Element which represent the current component\n     * @returns {Element}\n     * @readonly\n     * @memberof EventWrapper\n     */\n    get: function get() {\n      return this.domElement;\n    }\n    /**\n     * Set the Element which represent the current component\n     * @param {Element} domElement\n     * @readonly\n     * @memberof EventMap\n     */\n    ,\n    set: function set(domElement) {\n      this.domElement = domElement;\n    }\n  }, {\n    key: \"innerHTML\",\n    set: function set(string) {\n      var newElement = this.element.innerHTML = string;\n      Log.log(\"append: \".concat(string));\n      return newElement;\n    }\n    /**\n     * @todo fare in modo di sostituire un reale elmento del dom con uno fake\n     */\n\n  }]);\n\n  function DomWrapper() {\n    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.createElement('span');\n\n    _classCallCheck(this, DomWrapper);\n\n    this.element = element;\n  }\n\n  return DomWrapper;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DomWrapper);\n\n//# sourceURL=webpack:///./src/dom/dom-wrapper.js?");

/***/ }),

/***/ "./src/events/broadcats.js":
/*!*********************************!*\
  !*** ./src/events/broadcats.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openmind/litelog */ \"./node_modules/@openmind/litelog/dist/logger.umd.js\");\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openmind_litelog__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _event_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-wrapper */ \"./src/events/event-wrapper.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Log = new _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default.a('Broadcast'); // Log.mute = true;\n\n/**\n   * Creates a broadcast and emit/listen events\n   * throug the DOM\n   * @param {element|object} element\n   * @param {object} options\n   */\n\nvar Broadcast =\n/*#__PURE__*/\nfunction (_EventWrapper) {\n  _inherits(Broadcast, _EventWrapper);\n\n  function Broadcast() {\n    _classCallCheck(this, Broadcast);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Broadcast).apply(this, arguments));\n  }\n\n  _createClass(Broadcast, [{\n    key: \"cast\",\n\n    /**\n     * An alias for {@link #broadcastemit emit} method\n     * @param {string} msg message to cast\n     * @param {object} [obj={}] callback to execute on message receiving\n     * @deprecated use `emit`\n     */\n    value: function cast(msg) {\n      var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      return this.emit(msg, obj);\n    }\n    /**\n     * An alias for {@link #broadcastunlisten unlisten} method\n     * @param {string} msg message to remove the listen to\n     * @param {function} [callback=()=>{}] callback to execute on message receiving\n     * @deprecated use `unlisten`\n     */\n\n  }, {\n    key: \"ungrab\",\n    value: function ungrab(msg) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n      return this.unlisten(msg, callback);\n    }\n    /**\n     * An alias for {@link #broadcastlisten listen} method\n     * @param {string} msg message to cast\n     * @param {function} [callback=()=>{}]  callback to execute on message receiving\n     * @param {object} options\n     * @returns {void}\n     * @deprecated use `listen`\n     */\n\n  }, {\n    key: \"grab\",\n    value: function grab(msg) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      return this.listen(msg, callback, options);\n    }\n    /**\n     * Emit a message throug the Broadcast\n     * @param {string} msg message to cast\n     * @param {object} obj callback to execute on message receiving\n     */\n\n  }, {\n    key: \"emit\",\n    value: function emit(msg) {\n      var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      Log.log(\"emit => \".concat(msg));\n      return this.trigger(msg, obj);\n    }\n    /**\n     * Add the listener for given event and dispatch the event\n     * @param {string} msg message to cast\n     * @param {function} [callback=()=>{}] callback to execute on message receiving\n     * @param {object} options\n     */\n\n  }, {\n    key: \"listen\",\n    value: function listen(msg) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      Log.log(\"listen => \".concat(msg));\n      return this.addEventListener(msg, callback, options);\n    }\n    /**\n     * Remove the listener for given message\n     * @param {string} msg message to cast\n     * @param {string|function} [callback = ''] callback to stop exectue\n     */\n\n  }, {\n    key: \"unlisten\",\n    value: function unlisten(msg) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n      Log.log(\"unlisten => \".concat(msg));\n      this.removeEventListener(msg, callback);\n    }\n  }]);\n\n  return Broadcast;\n}(_event_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Broadcast);\n\n//# sourceURL=webpack:///./src/events/broadcats.js?");

/***/ }),

/***/ "./src/events/event-item.js":
/*!**********************************!*\
  !*** ./src/events/event-item.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n/**\n * An object which represent an Event\n * A `uuid` will be set in order to make the event unique\n * @see https://github.com/kelektiv/node-uuid\n * @param {string} event the name of the event\n * @param {function} [callback = ()=>{}] the callback to exectue\n * @class EventItem\n */\n\nvar EventItem = function EventItem(event) {\n  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n\n  _classCallCheck(this, EventItem);\n\n  this.event = event;\n  this.callback = callback;\n  this.uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_0__[\"v4\"])();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventItem);\n\n//# sourceURL=webpack:///./src/events/event-item.js?");

/***/ }),

/***/ "./src/events/event-map.js":
/*!*********************************!*\
  !*** ./src/events/event-map.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openmind/litelog */ \"./node_modules/@openmind/litelog/dist/logger.umd.js\");\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openmind_litelog__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _event_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-item */ \"./src/events/event-item.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Log = new _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default.a('EventMap');\n/**\n * Stores all the events to an `Array`\n *\n * @class EventMap\n */\n\nvar EventMap =\n/*#__PURE__*/\nfunction () {\n  _createClass(EventMap, [{\n    key: \"addEvent\",\n\n    /**\n     * Add event to the map\n     * @param {String} eventName\n     * @param {Function} callback\n     * @returns {EventItem}\n     */\n    value: function addEvent(eventName, callback) {\n      var eventItem = new _event_item__WEBPACK_IMPORTED_MODULE_1__[\"default\"](eventName, callback);\n      this.Map.push(eventItem);\n      return eventItem;\n    }\n    /**\n     * Remove an event from given object.\n     * If no callback has passed it removes anonimous functions\n     * such anonimous arrow functions\n     * @param {String} eventName\n     * @param {Function|Object} callback\n     * @returns {Array}\n     */\n\n  }, {\n    key: \"deleteEvent\",\n    value: function deleteEvent(eventName) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\n      if (Object.prototype.hasOwnProperty.call(callback, 'name')) {\n        return this.Map.filter(function (obj) {\n          return obj.event === eventName && obj.callback.name === callback.name;\n        });\n      }\n\n      return this.Map.filter(function (obj) {\n        return obj.event === eventName;\n      });\n    }\n  }, {\n    key: \"strictDeleteEvent\",\n    value: function strictDeleteEvent(eventObj) {\n      return this.Map.filter(function (obj) {\n        return obj.uuid === eventObj.uuid;\n      });\n    }\n    /**\n     * Remove an event from given object using the `uuid` of given event\n     * @param {String} eventName\n     * @param {String} uuid\n     * @returns {Array}\n     */\n\n    /* strictDeleteEvent(eventName, uuid) {\n      return this.Map.filter(obj => obj.event === eventName && obj.uuid === uuid);\n    } */\n\n  }, {\n    key: \"Map\",\n\n    /**\n     * Returns the Map\n     * @returns {Array}\n     * @readonly\n     * @memberof EventMap\n     */\n    get: function get() {\n      return this.map;\n    }\n  }]);\n\n  function EventMap() {\n    _classCallCheck(this, EventMap);\n\n    this.map = [];\n  }\n\n  return EventMap;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventMap);\n\n//# sourceURL=webpack:///./src/events/event-map.js?");

/***/ }),

/***/ "./src/events/event-wrapper.js":
/*!*************************************!*\
  !*** ./src/events/event-wrapper.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openmind/litelog */ \"./node_modules/@openmind/litelog/dist/logger.umd.js\");\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openmind_litelog__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _event_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-map */ \"./src/events/event-map.js\");\n/* harmony import */ var _dom_dom_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/dom-wrapper */ \"./src/dom/dom-wrapper.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Log = new _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default.a('EvenTwrapper');\n/**\n * A simple wrapper which allows to use method like .on(...), .off(...)\n * @param {element} [element = document.createElement('span')] the element to wrap\n * @class EventWrapper\n */\n\nvar EventWrapper =\n/*#__PURE__*/\nfunction (_DomWrapper) {\n  _inherits(EventWrapper, _DomWrapper);\n\n  _createClass(EventWrapper, [{\n    key: \"on\",\n\n    /**\n     * An alias for {@link #eventwrapperaddeventlistener addEventListener}\n     * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener\n     * @param  {string} event the event name\n     * @param {function} [callback = ()=>{}] the callback to exectue\n     * @param {object} [options={}] the options\n     * @return {EventItem}\n     */\n    value: function on(event) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      return this.addEventListener(event, callback, options);\n    }\n    /**\n     * It listen only for the first occurence of the event\n     * and then it removes the listner\n     * @see https://developers.google.com/web/updates/2016/10/addeventlistener-once\n     * @param  {string} event the event name\n     * @param {function} [callback = ()=>{}] the callback to exectue\n     * @param {object} [options={}] the options\n     * @return {EventItem}\n     */\n\n  }, {\n    key: \"one\",\n    value: function one(event) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      var params = Object.assign({}, options, {\n        once: true\n      });\n      return this.addEventListener(event, callback, params);\n    }\n    /**\n     * An alias for {@link #eventwrapperremoveeventlistener removeEventListener}\n     * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener\n     * @param {string} event the event name\n     * @param {function} [callback = ()=>{}] the callback to exectue\n     * @return {Array}\n     */\n\n  }, {\n    key: \"off\",\n    value: function off(event) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n      return this.removeEventListener(event, callback);\n    }\n    /**\n     * An alias for {@link #eventwrapperdispatchevent dispatchEvent}\n     * @param  {string} event the event to dispatch\n     * @param  {details} details params to dispatch with the event\n     * @see @see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill\n     * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent\n     */\n\n  }, {\n    key: \"trigger\",\n    value: function trigger(event) {\n      var details = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      return this.dispatchEvent(event, details);\n    }\n    /**\n     * Add event listener to the element\n     * @param  {string} event the event name\n     * @param {function} [callback = ()=>{}] the callback to exectue\n     * @param {object} [options={}] the options\n     * @return {EventItem}\n     */\n\n  }, {\n    key: \"addEventListener\",\n    value: function addEventListener(event) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      var eventItem = this.EventMap.addEvent(event, callback);\n      this.element.addEventListener(eventItem.event, eventItem.callback, options);\n      return eventItem;\n    }\n    /**\n     * Stop to Listen to given event\n     * @param {string} event the event to stop listen to\n     * @param {string|function} [callback = ''] callback to stop exectue\n     * @returns {Array}\n     */\n\n  }, {\n    key: \"removeEventListener\",\n    value: function removeEventListener(event) {\n      var _this2 = this;\n\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n      var deletedEvent;\n\n      if (Object.prototype.hasOwnProperty.call(event, 'event')) {\n        deletedEvent = this.EventMap.strictDeleteEvent(event, callback);\n      } else {\n        deletedEvent = this.EventMap.deleteEvent(event, callback);\n      }\n\n      deletedEvent.forEach(function (obj) {\n        _this2.element.removeEventListener(obj.event, obj.callback);\n\n        var index = _this2.EventMap.Map.indexOf(obj);\n\n        _this2.EventMap.Map.splice(index, 1);\n      });\n      return deletedEvent;\n    }\n    /**\n     * Dispatch the event\n     * @param  {string} event the event to dispatch\n     * @param  {details} details params to dispatch with the event\n     */\n\n  }, {\n    key: \"dispatchEvent\",\n    value: function dispatchEvent(event) {\n      var details = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var detail = Object.assign({}, {\n        detail: {}\n      }, {\n        detail: details\n      });\n      var customEvent = new CustomEvent(event, detail);\n      return this.element.dispatchEvent(customEvent);\n    }\n  }, {\n    key: \"EventMap\",\n\n    /**\n     * Returns the EventMap\n     * @returns {EventMap}\n     * @readonly\n     * @memberof EventWrapper\n     */\n    get: function get() {\n      return this.eventMap;\n    }\n    /**\n     * Set the event map\n     * @param {EventMap} map\n     */\n    ,\n    set: function set(map) {\n      this.eventMap = map;\n    }\n  }]);\n\n  function EventWrapper(element) {\n    var _this;\n\n    _classCallCheck(this, EventWrapper);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(EventWrapper).call(this, element));\n    _this.EventMap = new _event_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    return _this;\n  }\n\n  return EventWrapper;\n}(_dom_dom_wrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventWrapper);\n\n//# sourceURL=webpack:///./src/events/event-wrapper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Application, Components, Component, UserException, DomWrapper, Broadcast, EventWrapper, EventItem, EventMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _application_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application/application */ \"./src/application/application.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Application\", function() { return _application_application__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/components */ \"./src/components/components.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Components\", function() { return _components_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/component */ \"./src/components/component.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return _components_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _core_user_exception__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/user-exception */ \"./src/core/user-exception.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"UserException\", function() { return _core_user_exception__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _dom_dom_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/dom-wrapper */ \"./src/dom/dom-wrapper.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DomWrapper\", function() { return _dom_dom_wrapper__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _events_broadcats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/broadcats */ \"./src/events/broadcats.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Broadcast\", function() { return _events_broadcats__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _events_event_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/event-wrapper */ \"./src/events/event-wrapper.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"EventWrapper\", function() { return _events_event_wrapper__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _events_event_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events/event-item */ \"./src/events/event-item.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"EventItem\", function() { return _events_event_item__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _events_event_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events/event-map */ \"./src/events/event-map.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"EventMap\", function() { return _events_event_map__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils/inflector.js":
/*!********************************!*\
  !*** ./src/utils/inflector.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/trim */ \"./node_modules/lodash/trim.js\");\n/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_trim__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_snakeCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/snakeCase */ \"./node_modules/lodash/snakeCase.js\");\n/* harmony import */ var lodash_snakeCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_snakeCase__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/camelCase */ \"./node_modules/lodash/camelCase.js\");\n/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/upperFirst */ \"./node_modules/lodash/upperFirst.js\");\n/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_upperFirst__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/kebabCase */ \"./node_modules/lodash/kebabCase.js\");\n/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabCase__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/startCase */ \"./node_modules/lodash/startCase.js\");\n/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_startCase__WEBPACK_IMPORTED_MODULE_5__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n/**\n * String manipulation utility uses Lodash\n * @class\n */\n\nvar Inflector =\n/*#__PURE__*/\nfunction () {\n  _createClass(Inflector, [{\n    key: \"underscore\",\n\n    /**\n     * convert the string to snake case {'Foo Bar' => 'foo_bar'}\n     * @see https://lodash.com/docs/4.17.10#snakeCase\n     * @returns {String}\n     */\n    value: function underscore() {\n      return lodash_snakeCase__WEBPACK_IMPORTED_MODULE_1___default()(this.String);\n    }\n    /**\n     * convert the string to snake case {'Foo Bar' => 'fooBar'}\n     * @see https://lodash.com/docs/4.17.10#camelCase\n     * @returns {String}\n     */\n\n  }, {\n    key: \"camelize\",\n    value: function camelize() {\n      var firstUpperCase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      return firstUpperCase ? lodash_upperFirst__WEBPACK_IMPORTED_MODULE_3___default()(lodash_camelCase__WEBPACK_IMPORTED_MODULE_2___default()(this.String)) : lodash_camelCase__WEBPACK_IMPORTED_MODULE_2___default()(this.String);\n    }\n    /**\n     * convert the string to kebab case {'Foo Bar' => 'foo-bar'}\n     * @see https://lodash.com/docs/4.17.10#kebabCase\n     * @returns {String}\n     */\n\n  }, {\n    key: \"kebab\",\n    value: function kebab() {\n      return lodash_kebabCase__WEBPACK_IMPORTED_MODULE_4___default()(this.String);\n    }\n    /**\n     * @alias kebab\n     */\n\n  }, {\n    key: \"dasherize\",\n    value: function dasherize() {\n      return this.kebab();\n    }\n    /**\n     * convert the string to human readable string {'--foo-bar--' >= 'Foo Bar'}\n     * @see https://lodash.com/docs/4.17.10#startCase\n     * @returns {String}\n     */\n\n  }, {\n    key: \"humanize\",\n    value: function humanize() {\n      return lodash_startCase__WEBPACK_IMPORTED_MODULE_5___default()(this.String);\n    }\n    /**\n     *create an instance\n     * @param {String} string\n     * @returns {Inflector}\n     */\n\n  }, {\n    key: \"String\",\n\n    /**\n     * @type {String}\n     */\n    get: function get() {\n      return this.string;\n    }\n    /**\n     * @type {string}\n     * @param {String} string\n     */\n    ,\n    set: function set(string) {\n      this.string = lodash_trim__WEBPACK_IMPORTED_MODULE_0___default()(string);\n    }\n  }]);\n\n  function Inflector(string) {\n    _classCallCheck(this, Inflector);\n\n    this.String = string; // If you want to make a Singleton return This (nome della classe)\n    // return Inflector;\n  }\n\n  return Inflector;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Inflector);\n\n//# sourceURL=webpack:///./src/utils/inflector.js?");

/***/ })

/******/ });