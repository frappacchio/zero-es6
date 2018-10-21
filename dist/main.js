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

eval("!function(e,t){ true?module.exports=t():undefined}(this,function(){var e=[],t={mute:!1,all:!1},n=function n(o){for(var i=arguments.length,r=Array(i);i--;)r[i]=arguments[i];this instanceof n?(this.__instance_name__=o||\"\",t.all&&(this.mute=t.mute),e.push(this)):n.print.apply(n,[\"\"].concat(r))},o={NAME:{configurable:!0},mute:{configurable:!0}};return o.NAME.get=function(){return this.__instance_name__},n.mute=function(n,o){if((t={mute:!!n,all:!!o}).all)for(var i=0,r=e;i<r.length;i+=1){r[i].mute=t.mute}},o.mute.get=function(){return this.__mute__},o.mute.set=function(e){this.__mute__=e},n.print=function(e){for(var o,i=[],r=arguments.length-1;r-- >0;)i[r]=arguments[r+1];switch(e){case\"w\":o={icon:\"✋\",method:\"warn\"};break;case\"i\":o={icon:\"ℹ️\",method:\"info\"};break;case\"d\":o={icon:\"🐛\",method:void 0!==console.debug?\"debug\":\"log\"};break;case\"e\":o={icon:\"‼️\",method:\"error\"};break;case\"l\":default:o={icon:\"👀\",method:\"log\"}}if(this instanceof n){if(this.mute)return}else if(t.mute)return;return console[o.method].apply(console,[\"[~ \"+o.icon+\" \"+(this.NAME||\"\")+\" ~]\"].concat(i))},Object.defineProperties(n.prototype,o),[\"log\",\"warn\",\"info\",\"error\",\"debug\"].map(function(e){var t=e[0];[e,t].map(function(e){return n[e]=n.prototype[e]=function(){var e=Array.prototype.slice.call(arguments);e.unshift(t),n.print.apply(this,e)}})}),n});\n\n\n//# sourceURL=webpack:///./node_modules/@openmind/litelog/dist/logger.umd.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n  return result;\n}\n\nmodule.exports = arrayMap;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_arrayMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayReduce.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayReduce.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.reduce` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @param {*} [accumulator] The initial value.\n * @param {boolean} [initAccum] Specify using the first element of `array` as\n *  the initial value.\n * @returns {*} Returns the accumulated value.\n */\nfunction arrayReduce(array, iteratee, accumulator, initAccum) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  if (initAccum && length) {\n    accumulator = array[++index];\n  }\n  while (++index < length) {\n    accumulator = iteratee(accumulator, array[index], index, array);\n  }\n  return accumulator;\n}\n\nmodule.exports = arrayReduce;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_arrayReduce.js?");

/***/ }),

/***/ "./node_modules/lodash/_asciiWords.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_asciiWords.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to match words composed of alphanumeric characters. */\nvar reAsciiWord = /[^\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\x7f]+/g;\n\n/**\n * Splits an ASCII `string` into an array of its words.\n *\n * @private\n * @param {string} The string to inspect.\n * @returns {Array} Returns the words of `string`.\n */\nfunction asciiWords(string) {\n  return string.match(reAsciiWord) || [];\n}\n\nmodule.exports = asciiWords;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_asciiWords.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_basePropertyOf.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_basePropertyOf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.propertyOf` without support for deep paths.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Function} Returns the new accessor function.\n */\nfunction basePropertyOf(object) {\n  return function(key) {\n    return object == null ? undefined : object[key];\n  };\n}\n\nmodule.exports = basePropertyOf;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_basePropertyOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolToString = symbolProto ? symbolProto.toString : undefined;\n\n/**\n * The base implementation of `_.toString` which doesn't convert nullish\n * values to empty strings.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {string} Returns the string.\n */\nfunction baseToString(value) {\n  // Exit early for strings to avoid a performance hit in some environments.\n  if (typeof value == 'string') {\n    return value;\n  }\n  if (isArray(value)) {\n    // Recursively convert values (susceptible to call stack limits).\n    return arrayMap(value, baseToString) + '';\n  }\n  if (isSymbol(value)) {\n    return symbolToString ? symbolToString.call(value) : '';\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = baseToString;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_createCompounder.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_createCompounder.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ \"./node_modules/lodash/_arrayReduce.js\"),\n    deburr = __webpack_require__(/*! ./deburr */ \"./node_modules/lodash/deburr.js\"),\n    words = __webpack_require__(/*! ./words */ \"./node_modules/lodash/words.js\");\n\n/** Used to compose unicode capture groups. */\nvar rsApos = \"['\\u2019]\";\n\n/** Used to match apostrophes. */\nvar reApos = RegExp(rsApos, 'g');\n\n/**\n * Creates a function like `_.camelCase`.\n *\n * @private\n * @param {Function} callback The function to combine each word.\n * @returns {Function} Returns the new compounder function.\n */\nfunction createCompounder(callback) {\n  return function(string) {\n    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');\n  };\n}\n\nmodule.exports = createCompounder;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_createCompounder.js?");

/***/ }),

/***/ "./node_modules/lodash/_deburrLetter.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_deburrLetter.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ \"./node_modules/lodash/_basePropertyOf.js\");\n\n/** Used to map Latin Unicode letters to basic Latin letters. */\nvar deburredLetters = {\n  // Latin-1 Supplement block.\n  '\\xc0': 'A',  '\\xc1': 'A', '\\xc2': 'A', '\\xc3': 'A', '\\xc4': 'A', '\\xc5': 'A',\n  '\\xe0': 'a',  '\\xe1': 'a', '\\xe2': 'a', '\\xe3': 'a', '\\xe4': 'a', '\\xe5': 'a',\n  '\\xc7': 'C',  '\\xe7': 'c',\n  '\\xd0': 'D',  '\\xf0': 'd',\n  '\\xc8': 'E',  '\\xc9': 'E', '\\xca': 'E', '\\xcb': 'E',\n  '\\xe8': 'e',  '\\xe9': 'e', '\\xea': 'e', '\\xeb': 'e',\n  '\\xcc': 'I',  '\\xcd': 'I', '\\xce': 'I', '\\xcf': 'I',\n  '\\xec': 'i',  '\\xed': 'i', '\\xee': 'i', '\\xef': 'i',\n  '\\xd1': 'N',  '\\xf1': 'n',\n  '\\xd2': 'O',  '\\xd3': 'O', '\\xd4': 'O', '\\xd5': 'O', '\\xd6': 'O', '\\xd8': 'O',\n  '\\xf2': 'o',  '\\xf3': 'o', '\\xf4': 'o', '\\xf5': 'o', '\\xf6': 'o', '\\xf8': 'o',\n  '\\xd9': 'U',  '\\xda': 'U', '\\xdb': 'U', '\\xdc': 'U',\n  '\\xf9': 'u',  '\\xfa': 'u', '\\xfb': 'u', '\\xfc': 'u',\n  '\\xdd': 'Y',  '\\xfd': 'y', '\\xff': 'y',\n  '\\xc6': 'Ae', '\\xe6': 'ae',\n  '\\xde': 'Th', '\\xfe': 'th',\n  '\\xdf': 'ss',\n  // Latin Extended-A block.\n  '\\u0100': 'A',  '\\u0102': 'A', '\\u0104': 'A',\n  '\\u0101': 'a',  '\\u0103': 'a', '\\u0105': 'a',\n  '\\u0106': 'C',  '\\u0108': 'C', '\\u010a': 'C', '\\u010c': 'C',\n  '\\u0107': 'c',  '\\u0109': 'c', '\\u010b': 'c', '\\u010d': 'c',\n  '\\u010e': 'D',  '\\u0110': 'D', '\\u010f': 'd', '\\u0111': 'd',\n  '\\u0112': 'E',  '\\u0114': 'E', '\\u0116': 'E', '\\u0118': 'E', '\\u011a': 'E',\n  '\\u0113': 'e',  '\\u0115': 'e', '\\u0117': 'e', '\\u0119': 'e', '\\u011b': 'e',\n  '\\u011c': 'G',  '\\u011e': 'G', '\\u0120': 'G', '\\u0122': 'G',\n  '\\u011d': 'g',  '\\u011f': 'g', '\\u0121': 'g', '\\u0123': 'g',\n  '\\u0124': 'H',  '\\u0126': 'H', '\\u0125': 'h', '\\u0127': 'h',\n  '\\u0128': 'I',  '\\u012a': 'I', '\\u012c': 'I', '\\u012e': 'I', '\\u0130': 'I',\n  '\\u0129': 'i',  '\\u012b': 'i', '\\u012d': 'i', '\\u012f': 'i', '\\u0131': 'i',\n  '\\u0134': 'J',  '\\u0135': 'j',\n  '\\u0136': 'K',  '\\u0137': 'k', '\\u0138': 'k',\n  '\\u0139': 'L',  '\\u013b': 'L', '\\u013d': 'L', '\\u013f': 'L', '\\u0141': 'L',\n  '\\u013a': 'l',  '\\u013c': 'l', '\\u013e': 'l', '\\u0140': 'l', '\\u0142': 'l',\n  '\\u0143': 'N',  '\\u0145': 'N', '\\u0147': 'N', '\\u014a': 'N',\n  '\\u0144': 'n',  '\\u0146': 'n', '\\u0148': 'n', '\\u014b': 'n',\n  '\\u014c': 'O',  '\\u014e': 'O', '\\u0150': 'O',\n  '\\u014d': 'o',  '\\u014f': 'o', '\\u0151': 'o',\n  '\\u0154': 'R',  '\\u0156': 'R', '\\u0158': 'R',\n  '\\u0155': 'r',  '\\u0157': 'r', '\\u0159': 'r',\n  '\\u015a': 'S',  '\\u015c': 'S', '\\u015e': 'S', '\\u0160': 'S',\n  '\\u015b': 's',  '\\u015d': 's', '\\u015f': 's', '\\u0161': 's',\n  '\\u0162': 'T',  '\\u0164': 'T', '\\u0166': 'T',\n  '\\u0163': 't',  '\\u0165': 't', '\\u0167': 't',\n  '\\u0168': 'U',  '\\u016a': 'U', '\\u016c': 'U', '\\u016e': 'U', '\\u0170': 'U', '\\u0172': 'U',\n  '\\u0169': 'u',  '\\u016b': 'u', '\\u016d': 'u', '\\u016f': 'u', '\\u0171': 'u', '\\u0173': 'u',\n  '\\u0174': 'W',  '\\u0175': 'w',\n  '\\u0176': 'Y',  '\\u0177': 'y', '\\u0178': 'Y',\n  '\\u0179': 'Z',  '\\u017b': 'Z', '\\u017d': 'Z',\n  '\\u017a': 'z',  '\\u017c': 'z', '\\u017e': 'z',\n  '\\u0132': 'IJ', '\\u0133': 'ij',\n  '\\u0152': 'Oe', '\\u0153': 'oe',\n  '\\u0149': \"'n\", '\\u017f': 's'\n};\n\n/**\n * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A\n * letters to basic Latin letters.\n *\n * @private\n * @param {string} letter The matched letter to deburr.\n * @returns {string} Returns the deburred letter.\n */\nvar deburrLetter = basePropertyOf(deburredLetters);\n\nmodule.exports = deburrLetter;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_deburrLetter.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\nmodule.exports = freeGlobal;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_hasUnicodeWord.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_hasUnicodeWord.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to detect strings that need a more robust regexp to match words. */\nvar reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;\n\n/**\n * Checks if `string` contains a word composed of Unicode symbols.\n *\n * @private\n * @param {string} string The string to inspect.\n * @returns {boolean} Returns `true` if a word is found, else `false`.\n */\nfunction hasUnicodeWord(string) {\n  return reHasUnicodeWord.test(string);\n}\n\nmodule.exports = hasUnicodeWord;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_hasUnicodeWord.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/_unicodeWords.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_unicodeWords.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to compose unicode character classes. */\nvar rsAstralRange = '\\\\ud800-\\\\udfff',\n    rsComboMarksRange = '\\\\u0300-\\\\u036f',\n    reComboHalfMarksRange = '\\\\ufe20-\\\\ufe2f',\n    rsComboSymbolsRange = '\\\\u20d0-\\\\u20ff',\n    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,\n    rsDingbatRange = '\\\\u2700-\\\\u27bf',\n    rsLowerRange = 'a-z\\\\xdf-\\\\xf6\\\\xf8-\\\\xff',\n    rsMathOpRange = '\\\\xac\\\\xb1\\\\xd7\\\\xf7',\n    rsNonCharRange = '\\\\x00-\\\\x2f\\\\x3a-\\\\x40\\\\x5b-\\\\x60\\\\x7b-\\\\xbf',\n    rsPunctuationRange = '\\\\u2000-\\\\u206f',\n    rsSpaceRange = ' \\\\t\\\\x0b\\\\f\\\\xa0\\\\ufeff\\\\n\\\\r\\\\u2028\\\\u2029\\\\u1680\\\\u180e\\\\u2000\\\\u2001\\\\u2002\\\\u2003\\\\u2004\\\\u2005\\\\u2006\\\\u2007\\\\u2008\\\\u2009\\\\u200a\\\\u202f\\\\u205f\\\\u3000',\n    rsUpperRange = 'A-Z\\\\xc0-\\\\xd6\\\\xd8-\\\\xde',\n    rsVarRange = '\\\\ufe0e\\\\ufe0f',\n    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;\n\n/** Used to compose unicode capture groups. */\nvar rsApos = \"['\\u2019]\",\n    rsBreak = '[' + rsBreakRange + ']',\n    rsCombo = '[' + rsComboRange + ']',\n    rsDigits = '\\\\d+',\n    rsDingbat = '[' + rsDingbatRange + ']',\n    rsLower = '[' + rsLowerRange + ']',\n    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',\n    rsFitz = '\\\\ud83c[\\\\udffb-\\\\udfff]',\n    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',\n    rsNonAstral = '[^' + rsAstralRange + ']',\n    rsRegional = '(?:\\\\ud83c[\\\\udde6-\\\\uddff]){2}',\n    rsSurrPair = '[\\\\ud800-\\\\udbff][\\\\udc00-\\\\udfff]',\n    rsUpper = '[' + rsUpperRange + ']',\n    rsZWJ = '\\\\u200d';\n\n/** Used to compose unicode regexes. */\nvar rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',\n    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',\n    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',\n    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',\n    reOptMod = rsModifier + '?',\n    rsOptVar = '[' + rsVarRange + ']?',\n    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',\n    rsOrdLower = '\\\\d*(?:1st|2nd|3rd|(?![123])\\\\dth)(?=\\\\b|[A-Z_])',\n    rsOrdUpper = '\\\\d*(?:1ST|2ND|3RD|(?![123])\\\\dTH)(?=\\\\b|[a-z_])',\n    rsSeq = rsOptVar + reOptMod + rsOptJoin,\n    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;\n\n/** Used to match complex or compound words. */\nvar reUnicodeWord = RegExp([\n  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',\n  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',\n  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,\n  rsUpper + '+' + rsOptContrUpper,\n  rsOrdUpper,\n  rsOrdLower,\n  rsDigits,\n  rsEmoji\n].join('|'), 'g');\n\n/**\n * Splits a Unicode `string` into an array of its words.\n *\n * @private\n * @param {string} The string to inspect.\n * @returns {Array} Returns the words of `string`.\n */\nfunction unicodeWords(string) {\n  return string.match(reUnicodeWord) || [];\n}\n\nmodule.exports = unicodeWords;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_unicodeWords.js?");

/***/ }),

/***/ "./node_modules/lodash/deburr.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/deburr.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var deburrLetter = __webpack_require__(/*! ./_deburrLetter */ \"./node_modules/lodash/_deburrLetter.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/** Used to match Latin Unicode letters (excluding mathematical operators). */\nvar reLatin = /[\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\xff\\u0100-\\u017f]/g;\n\n/** Used to compose unicode character classes. */\nvar rsComboMarksRange = '\\\\u0300-\\\\u036f',\n    reComboHalfMarksRange = '\\\\ufe20-\\\\ufe2f',\n    rsComboSymbolsRange = '\\\\u20d0-\\\\u20ff',\n    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;\n\n/** Used to compose unicode capture groups. */\nvar rsCombo = '[' + rsComboRange + ']';\n\n/**\n * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and\n * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).\n */\nvar reComboMark = RegExp(rsCombo, 'g');\n\n/**\n * Deburrs `string` by converting\n * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)\n * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)\n * letters to basic Latin letters and removing\n * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category String\n * @param {string} [string=''] The string to deburr.\n * @returns {string} Returns the deburred string.\n * @example\n *\n * _.deburr('déjà vu');\n * // => 'deja vu'\n */\nfunction deburr(string) {\n  string = toString(string);\n  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');\n}\n\nmodule.exports = deburr;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/deburr.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** `Object#toString` result references. */\nvar asyncTag = '[object AsyncFunction]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    proxyTag = '[object Proxy]';\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  if (!isObject(value)) {\n    return false;\n  }\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 9 which returns 'object' for typed arrays and other constructors.\n  var tag = baseGetTag(value);\n  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;\n}\n\nmodule.exports = isFunction;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isFunction.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/kebabCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/kebabCase.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createCompounder = __webpack_require__(/*! ./_createCompounder */ \"./node_modules/lodash/_createCompounder.js\");\n\n/**\n * Converts `string` to\n * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category String\n * @param {string} [string=''] The string to convert.\n * @returns {string} Returns the kebab cased string.\n * @example\n *\n * _.kebabCase('Foo Bar');\n * // => 'foo-bar'\n *\n * _.kebabCase('fooBar');\n * // => 'foo-bar'\n *\n * _.kebabCase('__FOO_BAR__');\n * // => 'foo-bar'\n */\nvar kebabCase = createCompounder(function(result, word, index) {\n  return result + (index ? '-' : '') + word.toLowerCase();\n});\n\nmodule.exports = kebabCase;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/kebabCase.js?");

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseToString = __webpack_require__(/*! ./_baseToString */ \"./node_modules/lodash/_baseToString.js\");\n\n/**\n * Converts `value` to a string. An empty string is returned for `null`\n * and `undefined` values. The sign of `-0` is preserved.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n * @example\n *\n * _.toString(null);\n * // => ''\n *\n * _.toString(-0);\n * // => '-0'\n *\n * _.toString([1, 2, 3]);\n * // => '1,2,3'\n */\nfunction toString(value) {\n  return value == null ? '' : baseToString(value);\n}\n\nmodule.exports = toString;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/toString.js?");

/***/ }),

/***/ "./node_modules/lodash/words.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/words.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var asciiWords = __webpack_require__(/*! ./_asciiWords */ \"./node_modules/lodash/_asciiWords.js\"),\n    hasUnicodeWord = __webpack_require__(/*! ./_hasUnicodeWord */ \"./node_modules/lodash/_hasUnicodeWord.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\"),\n    unicodeWords = __webpack_require__(/*! ./_unicodeWords */ \"./node_modules/lodash/_unicodeWords.js\");\n\n/**\n * Splits `string` into an array of its words.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category String\n * @param {string} [string=''] The string to inspect.\n * @param {RegExp|string} [pattern] The pattern to match words.\n * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.\n * @returns {Array} Returns the words of `string`.\n * @example\n *\n * _.words('fred, barney, & pebbles');\n * // => ['fred', 'barney', 'pebbles']\n *\n * _.words('fred, barney, & pebbles', /[^, ]+/g);\n * // => ['fred', 'barney', '&', 'pebbles']\n */\nfunction words(string, pattern, guard) {\n  string = toString(string);\n  pattern = guard ? undefined : pattern;\n\n  if (pattern === undefined) {\n    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);\n  }\n  return string.match(pattern) || [];\n}\n\nmodule.exports = words;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/words.js?");

/***/ }),

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var v1 = __webpack_require__(/*! ./v1 */ \"./node_modules/uuid/v1.js\");\nvar v4 = __webpack_require__(/*! ./v4 */ \"./node_modules/uuid/v4.js\");\n\nvar uuid = v4;\nuuid.v1 = v1;\nuuid.v4 = v4;\n\nmodule.exports = uuid;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/index.js?");

/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\nvar byteToHex = [];\nfor (var i = 0; i < 256; ++i) {\n  byteToHex[i] = (i + 0x100).toString(16).substr(1);\n}\n\nfunction bytesToUuid(buf, offset) {\n  var i = offset || 0;\n  var bth = byteToHex;\n  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4\n  return ([bth[buf[i++]], bth[buf[i++]], \n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]],\n\tbth[buf[i++]], bth[buf[i++]],\n\tbth[buf[i++]], bth[buf[i++]]]).join('');\n}\n\nmodule.exports = bytesToUuid;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/lib/bytesToUuid.js?");

/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Unique ID creation requires a high quality random # generator.  In the\n// browser this is a little complicated due to unknown quality of Math.random()\n// and inconsistent support for the `crypto` API.  We do the best we can via\n// feature-detection\n\n// getRandomValues needs to be invoked in a context where \"this\" is a Crypto\n// implementation. Also, find the complete implementation of crypto on IE11.\nvar getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||\n                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));\n\nif (getRandomValues) {\n  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto\n  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef\n\n  module.exports = function whatwgRNG() {\n    getRandomValues(rnds8);\n    return rnds8;\n  };\n} else {\n  // Math.random()-based (RNG)\n  //\n  // If all else fails, use Math.random().  It's fast, but is of unspecified\n  // quality.\n  var rnds = new Array(16);\n\n  module.exports = function mathRNG() {\n    for (var i = 0, r; i < 16; i++) {\n      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;\n      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;\n    }\n\n    return rnds;\n  };\n}\n\n\n//# sourceURL=webpack:///./node_modules/uuid/lib/rng-browser.js?");

/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var rng = __webpack_require__(/*! ./lib/rng */ \"./node_modules/uuid/lib/rng-browser.js\");\nvar bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ \"./node_modules/uuid/lib/bytesToUuid.js\");\n\n// **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\n\nvar _nodeId;\nvar _clockseq;\n\n// Previous uuid creation time\nvar _lastMSecs = 0;\nvar _lastNSecs = 0;\n\n// See https://github.com/broofa/node-uuid for API details\nfunction v1(options, buf, offset) {\n  var i = buf && offset || 0;\n  var b = buf || [];\n\n  options = options || {};\n  var node = options.node || _nodeId;\n  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;\n\n  // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n  if (node == null || clockseq == null) {\n    var seedBytes = rng();\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [\n        seedBytes[0] | 0x01,\n        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]\n      ];\n    }\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  }\n\n  // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();\n\n  // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;\n\n  // Time since last uuid creation (in msecs)\n  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;\n\n  // Per 4.2.1.2, Bump clockseq on clock regression\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  }\n\n  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  }\n\n  // Per 4.2.1.2 Throw error if too many uuids are requested\n  if (nsecs >= 10000) {\n    throw new Error('uuid.v1(): Can\\'t create more than 10M uuids/sec');\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq;\n\n  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n  msecs += 12219292800000;\n\n  // `time_low`\n  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff;\n\n  // `time_mid`\n  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff;\n\n  // `time_high_and_version`\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n  b[i++] = tmh >>> 16 & 0xff;\n\n  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n  b[i++] = clockseq >>> 8 | 0x80;\n\n  // `clock_seq_low`\n  b[i++] = clockseq & 0xff;\n\n  // `node`\n  for (var n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf ? buf : bytesToUuid(b);\n}\n\nmodule.exports = v1;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/v1.js?");

/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var rng = __webpack_require__(/*! ./lib/rng */ \"./node_modules/uuid/lib/rng-browser.js\");\nvar bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ \"./node_modules/uuid/lib/bytesToUuid.js\");\n\nfunction v4(options, buf, offset) {\n  var i = buf && offset || 0;\n\n  if (typeof(options) == 'string') {\n    buf = options === 'binary' ? new Array(16) : null;\n    options = null;\n  }\n  options = options || {};\n\n  var rnds = options.random || (options.rng || rng)();\n\n  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n  rnds[6] = (rnds[6] & 0x0f) | 0x40;\n  rnds[8] = (rnds[8] & 0x3f) | 0x80;\n\n  // Copy bytes to buffer, if provided\n  if (buf) {\n    for (var ii = 0; ii < 16; ++ii) {\n      buf[i + ii] = rnds[ii];\n    }\n  }\n\n  return buf || bytesToUuid(rnds);\n}\n\nmodule.exports = v4;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/v4.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\r\n} catch (e) {\r\n\t// This works if the window reference is available\r\n\tif (typeof window === \"object\") g = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/components/component.js":
/*!*************************************!*\
  !*** ./src/components/component.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openmind/litelog */ \"./node_modules/@openmind/litelog/dist/logger.umd.js\");\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openmind_litelog__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/kebabCase */ \"./node_modules/lodash/kebabCase.js\");\n/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabCase__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _events_event_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/event-wrapper */ \"./src/events/event-wrapper.js\");\n/* harmony import */ var _events_broadcats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/broadcats */ \"./src/events/broadcats.js\");\n/* harmony import */ var _events_event_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/event-map */ \"./src/events/event-map.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar Log = new _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default.a('Component');\n/**\n * A basic component class\n * @param {element} element the DOM element which represents the component\n * @param {Broadcast} [broadcast = new Broadcast()] the Broadcast for this component\n * @class Component\n * @extends {EventWrapper}\n */\n\nvar Component =\n/*#__PURE__*/\nfunction (_EventWrapper) {\n  _inherits(Component, _EventWrapper);\n\n  _createClass(Component, [{\n    key: \"grab\",\n\n    /**\n     * An alias for {@link #componentlisten listen} method\n     * @param {string} msg message to broadcast\n     * @param {function} callback message to broadcast\n     * @returns {void}\n     * @deprecated use `listen`\n     */\n    value: function grab(msg) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n      this.listen(msg, callback);\n    }\n    /**\n     * Listen to the broadcast message\n     * @param {string} msg message to broadcast\n     * @param {function} [callback = ()=>{}] message to broadcast\n     * @returns {void}\n     */\n\n  }, {\n    key: \"listen\",\n    value: function listen(msg) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n      var emitter = this.Broadcast.listen(msg, callback);\n      this.broadcastMap.Map.push(emitter); // this.Broadcast.listen(msg, callback);\n    }\n    /**\n     * An alias for {@link #componentunlisten unlisten} method\n     * @param {string} msg message to broadcast\n     * @returns {void}\n     * @deprecated use `unlisten`\n     */\n\n  }, {\n    key: \"ungrab\",\n    value: function ungrab(msg) {\n      return this.unlisten(msg);\n    }\n    /**\n     * Stop listen to the given message\n     * @param {string} msg message to stop to listen to\n     * @param {string|function} [callback = ''] callback to stop exectue\n     * @returns {void}\n     * @deprecated use `unlisten`\n     */\n\n  }, {\n    key: \"unlisten\",\n    value: function unlisten(msg) {\n      var _this2 = this;\n\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n      var deletedEvents;\n\n      if (callback === '') {\n        deletedEvents = this.broadcastMap.Map.filter(function (obj) {\n          return obj.event === msg;\n        });\n      } else {\n        deletedEvents = this.broadcastMap.Map.filter(function (obj) {\n          return obj.event === msg && obj.callback.name === callback.name;\n        });\n      }\n\n      deletedEvents.forEach(function (obj) {\n        _this2.Broadcast.unlisten(obj);\n      });\n    }\n    /**\n     * An alias for {@link #componentcast cast} method\n     * @param {string} message\n     * @param {object} [object={}]\n     * @deprecated user `emit`\n     */\n\n  }, {\n    key: \"cast\",\n    value: function cast(message) {\n      var object = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      return this.emit(message, object);\n    }\n    /**\n     * Emit the message to the component Broadcast\n     * @param {string} message\n     * @param {object} [object={}]\n     */\n\n  }, {\n    key: \"emit\",\n    value: function emit(message) {\n      var object = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      this.Broadcast.emit(message, object);\n    }\n    /**\n     * Destroy and stop to listen for Broadcast messages\n     */\n\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      var _this3 = this;\n\n      this.broadcastMap.Map.forEach(function (obj) {\n        _this3.unlisten(obj.event);\n      });\n      Log.log('destroyed', this.constructor.name, 'on', this.element);\n      this.Broadcast.emit(\"\".concat(this.constructor.name, \":destroy\"));\n    }\n  }, {\n    key: \"Name\",\n\n    /**\n     * Gets the kebab-case name of component\n     * @example `SuperClass` will returns `super-class`\n     * @readonly\n     * @memberof Component\n     * @returns {string}\n     */\n    get: function get() {\n      return lodash_kebabCase__WEBPACK_IMPORTED_MODULE_1___default()(this.constructor.name);\n    }\n    /**\n     * Gets the component messages\n     * @returns {object}\n     * @readonly\n     * @memberof Component\n     */\n\n  }, {\n    key: \"Messages\",\n    get: function get() {\n      return this.messages;\n    }\n    /**\n     * Set all message which will be read from the component\n     * by the Broadcast\n     * @param {object} messages\n     * @memberof Component\n     */\n    ,\n    set: function set(messages) {\n      this.messages = messages;\n    }\n    /**\n     * Returns the Broadcast for the component instance\n     * @returns {Broadcast}\n     * @readonly\n     * @memberof Component\n     */\n\n  }, {\n    key: \"Broadcast\",\n    get: function get() {\n      return this.broadcast;\n    }\n    /**\n     * Set the broadcast\n     * @param {Broadcast} broadcast\n     * @memberof Component\n     */\n    ,\n    set: function set(broadcast) {\n      this.broadcast = broadcast;\n    }\n  }]);\n\n  function Component(element) {\n    var _this;\n\n    var broadcast = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _events_broadcats__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n    _classCallCheck(this, Component);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Component).call(this, element));\n\n    if (!_this.element.getAttribute('[data-component]')) {\n      _this.element.setAttribute('data-component', _this.Name);\n    }\n\n    _this.Broadcast = broadcast;\n    _this.broadcastMap = new _events_event_map__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    _this.Messages = Object.assign({}, _this.Messages);\n    Object.keys(_this.Messages).forEach(function (key) {\n      _this.listen(key, _this.Messages[key]);\n    });\n    Log.log(\"initializing \".concat(_this.constructor.name, \" with [data-component=\\\"\").concat(_this.Name, \"\\\"]\"));\n\n    _this.Broadcast.emit(\"\".concat(_this.constructor.name, \":create\"));\n\n    return _this;\n  }\n\n  return Component;\n}(_events_event_wrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\n//# sourceURL=webpack:///./src/components/component.js?");

/***/ }),

/***/ "./src/components/components.js":
/*!**************************************!*\
  !*** ./src/components/components.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_user_exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/user-exception */ \"./src/core/user-exception.js\");\n\n/**\n * It stores the list of components and instances and allow to register and create a component\n * @type {Object}\n */\n\nvar Components = {\n  List: new Map(),\n  Intances: new Map(),\n\n  /**\n   * Check if already exists a component within the list\n   * @param {*} component\n   * @returns {undefined|*}\n   */\n  exists: function exists(component) {\n    return Components.List.has(component.name);\n  },\n\n  /**\n   * Register new component and add it to the List\n   * @param {*} component\n   */\n  register: function register(component) {\n    if (!Components.exists(component)) {\n      Components.List.set(component.name, component);\n    } else {\n      throw new _core_user_exception__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"The component '\".concat(component.name, \"' already exists\"));\n    }\n  },\n\n  /**\n   * Create an instance of the new component and add it to the Intances list\n   * @param {Element} element\n   * @param {*} component\n   * @returns {*} instance\n   * @throws {UserException} if the component has not been registered\n   */\n  create: function create(element, component) {\n    if (Components.List.has(component.name)) {\n      var ClassName = Components.List.get(component.name);\n      var instance = new ClassName(element);\n      Components.Intances.set(element, instance);\n      return instance;\n    }\n\n    throw new _core_user_exception__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"You have to register class '\".concat(component.name, \"' before create a component\"));\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Components);\n\n//# sourceURL=webpack:///./src/components/components.js?");

/***/ }),

/***/ "./src/core/dom-reader.js":
/*!********************************!*\
  !*** ./src/core/dom-reader.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openmind/litelog */ \"./node_modules/@openmind/litelog/dist/logger.umd.js\");\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openmind_litelog__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Log = new _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default.a('DomReader');\nvar Defaults = {\n  selector: '[data-component]',\n  element: document\n};\n/**\n * Read the DOM and check for Zero Components\n * @class\n */\n\nvar DomReader =\n/*#__PURE__*/\nfunction () {\n  function DomReader() {\n    _classCallCheck(this, DomReader);\n  }\n\n  _createClass(DomReader, [{\n    key: \"check\",\n\n    /**\n       * Return the list of components matching given selector\n       *@returns {NodeList}\n       */\n    value: function check() {\n      var components = this.Element.querySelectorAll(this.Selector);\n      return components;\n    }\n  }, {\n    key: \"Element\",\n\n    /**\n       * Set the element for all operations\n       * If falsy value is passed it returns the default element `document`\n       * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy\n       * @param {Element} element\n       */\n    set: function set(element) {\n      this.element = element;\n    }\n    /**\n       * Get the element. If not defined return the document element\n       * @returns {Element|document}\n       * @see https://developer.mozilla.org/en-US/docs/Web/API/Element\n       */\n    ,\n    get: function get() {\n      return !this.element ? Defaults.element : this.element;\n    }\n    /**\n       * Set the element selector using CSS selector specs\n       * @see https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors\n       * If falsy value is passed it returns the default selector [data-component]\n       * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy\n       * @param {String} selector\n       */\n\n  }, {\n    key: \"Selector\",\n    set: function set(selector) {\n      this.selector = selector;\n    },\n    get: function get() {\n      return !this.selector ? Defaults.selector : this.selector;\n    }\n  }]);\n\n  return DomReader;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DomReader);\n\n//# sourceURL=webpack:///./src/core/dom-reader.js?");

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

/***/ "./src/events/broadcats.js":
/*!*********************************!*\
  !*** ./src/events/broadcats.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openmind/litelog */ \"./node_modules/@openmind/litelog/dist/logger.umd.js\");\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openmind_litelog__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _event_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-wrapper */ \"./src/events/event-wrapper.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Log = new _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default.a('Broadcast');\nLog.mute = true;\n/**\n   * Creates a broadcast and emit/listen events\n   * throug the DOM\n   * @param {element|object} element\n   * @param {object} options\n   */\n\nvar Broadcast =\n/*#__PURE__*/\nfunction (_EventWrapper) {\n  _inherits(Broadcast, _EventWrapper);\n\n  _createClass(Broadcast, [{\n    key: \"cast\",\n\n    /**\n     * An alias for {@link #broadcastemit emit} method\n     * @param {string} msg message to cast\n     * @param {object} [obj={}] callback to execute on message receiving\n     * @deprecated use `emit`\n     */\n    value: function cast(msg) {\n      var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      return this.emit(msg, obj);\n    }\n    /**\n     * An alias for {@link #broadcastunlisten unlisten} method\n     * @param {string} msg message to remove the listen to\n     * @param {function} [callback=()=>{}] callback to execute on message receiving\n     * @deprecated use `unlisten`\n     */\n\n  }, {\n    key: \"ungrab\",\n    value: function ungrab(msg) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n      return this.unlisten(msg, callback);\n    }\n    /**\n     * An alias for {@link #broadcastlisten listen} method\n     * @param {string} msg message to cast\n     * @param {function} [callback=()=>{}]  callback to execute on message receiving\n     * @param {object} options\n     * @returns {void}\n     * @deprecated use `listen`\n     */\n\n  }, {\n    key: \"grab\",\n    value: function grab(msg) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      return this.listen(msg, callback, options);\n    }\n    /**\n     * Emit a message throug the Broadcast\n     * @param {string} msg message to cast\n     * @param {object} obj callback to execute on message receiving\n     */\n\n  }, {\n    key: \"emit\",\n    value: function emit(msg) {\n      var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      Log.log(\"emit => \".concat(msg));\n      return this.trigger(msg, obj);\n    }\n    /**\n     * Add the listener for given event and dispatch the event\n     * @param {string} msg message to cast\n     * @param {function} [callback=()=>{}] callback to execute on message receiving\n     * @param {object} options\n     */\n\n  }, {\n    key: \"listen\",\n    value: function listen(msg) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      Log.log(\"listen => \".concat(msg));\n      return this.addEventListener(msg, callback, options);\n    }\n    /**\n     * Remove the listener for given message\n     * @param {string} msg message to cast\n     * @param {string|function} [callback = ''] callback to stop exectue\n     */\n\n  }, {\n    key: \"unlisten\",\n    value: function unlisten(msg) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n      Log.log(\"unlisten => \".concat(msg));\n      this.removeEventListener(msg, callback);\n    }\n  }, {\n    key: \"Defaults\",\n\n    /**\n     * Get the default settings\n     * @return {object}\n     * @memberof Broadcast\n     */\n    get: function get() {\n      return this.defaults;\n    }\n    /**\n     * Set the configuration\n     * @param {object} options\n     * @memberof Broadcast\n     */\n    ,\n    set: function set(options) {\n      this.defaults = options;\n    }\n  }]);\n\n  function Broadcast(element) {\n    var _this;\n\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n      namespace: 'msg'\n    };\n\n    _classCallCheck(this, Broadcast);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Broadcast).call(this, element));\n    _this.Defaults = Object.assign({}, options);\n    return _this;\n  }\n\n  return Broadcast;\n}(_event_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Broadcast);\n\n//# sourceURL=webpack:///./src/events/broadcats.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openmind/litelog */ \"./node_modules/@openmind/litelog/dist/logger.umd.js\");\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openmind_litelog__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _event_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-item */ \"./src/events/event-item.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Log = new _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default.a('EventMap');\n/**\n * Stores all the events to an `Array`\n *\n * @class EventMap\n */\n\nvar EventMap =\n/*#__PURE__*/\nfunction () {\n  _createClass(EventMap, [{\n    key: \"addEvent\",\n\n    /**\n     * Add event to the map\n     * @param {String} eventName\n     * @param {Function} callback\n     * @returns {EventItem}\n     */\n    value: function addEvent(eventName, callback) {\n      var eventItem = new _event_item__WEBPACK_IMPORTED_MODULE_1__[\"default\"](eventName, callback);\n      this.Map.push(eventItem);\n      return eventItem;\n    }\n    /**\n     * Remove an event from given object.\n     * If no callback has passed it removes anonimous functions\n     * such anonimous arrow functions\n     * @param {String} eventName\n     * @param {Function|Object} callback\n     * @returns {Array}\n     */\n\n  }, {\n    key: \"deleteEvent\",\n    value: function deleteEvent(eventName) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\n      if (callback === '') {\n        return this.Map.filter(function (obj) {\n          return obj.event === eventName;\n        });\n      }\n\n      return this.Map.filter(function (obj) {\n        return obj.event === eventName && obj.callback.name === callback.name;\n      });\n    }\n  }, {\n    key: \"strictDeleteEvent\",\n    value: function strictDeleteEvent(eventObj) {\n      return this.Map.filter(function (obj) {\n        return obj.uuid === eventObj.uuid;\n      });\n    }\n    /**\n     * Remove an event from given object using the `uuid` of given event\n     * @param {String} eventName\n     * @param {String} uuid\n     * @returns {Array}\n     */\n\n    /* strictDeleteEvent(eventName, uuid) {\n      return this.Map.filter(obj => obj.event === eventName && obj.uuid === uuid);\n    } */\n\n  }, {\n    key: \"Map\",\n\n    /**\n     * Returns the Map\n     * @returns {Array}\n     * @readonly\n     * @memberof EventMap\n     */\n    get: function get() {\n      return this.map;\n    }\n  }]);\n\n  function EventMap() {\n    _classCallCheck(this, EventMap);\n\n    this.map = [];\n  }\n\n  return EventMap;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventMap);\n\n//# sourceURL=webpack:///./src/events/event-map.js?");

/***/ }),

/***/ "./src/events/event-wrapper.js":
/*!*************************************!*\
  !*** ./src/events/event-wrapper.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openmind/litelog */ \"./node_modules/@openmind/litelog/dist/logger.umd.js\");\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openmind_litelog__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isFunction */ \"./node_modules/lodash/isFunction.js\");\n/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _event_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-map */ \"./src/events/event-map.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Log = new _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default.a('EvenTwrapper');\n/**\n * A simple wrapper which allows to use method like .on(...), .off(...)\n * @param {element} [element = document.createElement('span')] the element to wrap\n * @class EventWrapper\n */\n\nvar EventWrapper =\n/*#__PURE__*/\nfunction () {\n  _createClass(EventWrapper, [{\n    key: \"on\",\n\n    /**\n     * An alias for {@link #eventwrapperaddeventlistener addEventListener}\n     * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener\n     * @param  {string} event the event name\n     * @param {function} [callback = ()=>{}] the callback to exectue\n     * @param {object} [options={}] the options\n     * @return {EventItem}\n     */\n    value: function on(event) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      return this.addEventListener(event, callback, options);\n    }\n    /**\n     * It listen only for the first occurence of the event\n     * and then it removes the listner\n     * @see https://developers.google.com/web/updates/2016/10/addeventlistener-once\n     * @param  {string} event the event name\n     * @param {function} [callback = ()=>{}] the callback to exectue\n     * @param {object} [options={}] the options\n     * @return {EventItem}\n     */\n\n  }, {\n    key: \"one\",\n    value: function one(event) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      var params = Object.assign({}, options, {\n        once: true\n      });\n      return this.addEventListener(event, callback, params);\n    }\n    /**\n     * An alias for {@link #eventwrapperremoveeventlistener removeEventListener}\n     * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener\n     * @param {string} event the event name\n     * @param {function} [callback = ()=>{}] the callback to exectue\n     * @return {Array}\n     */\n\n  }, {\n    key: \"off\",\n    value: function off(event) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n      return this.removeEventListener(event, callback);\n    }\n    /**\n     * An alias for {@link #eventwrapperdispatchevent dispatchEvent}\n     * @param  {string} event the event to dispatch\n     * @param  {details} details params to dispatch with the event\n     * @see @see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill\n     * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent\n     */\n\n  }, {\n    key: \"trigger\",\n    value: function trigger(event) {\n      var details = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      return this.dispatchEvent(event, details);\n    }\n    /**\n     * Add event listener to the element\n     * @param  {string} event the event name\n     * @param {function} [callback = ()=>{}] the callback to exectue\n     * @param {object} [options={}] the options\n     * @return {EventItem}\n     */\n\n  }, {\n    key: \"addEventListener\",\n    value: function addEventListener(event) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      var eventItem = this.EventMap.addEvent(event, callback);\n      this.element.addEventListener(eventItem.event, eventItem.callback, options);\n      return eventItem;\n    }\n    /**\n     * Stop to Listen to given event\n     * @param {string} event the event to stop listen to\n     * @param {string|function} [callback = ''] callback to stop exectue\n     * @returns {Array}\n     */\n\n  }, {\n    key: \"removeEventListener\",\n    value: function removeEventListener(event) {\n      var _this = this;\n\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n      var deletedEvent;\n\n      if (typeof event === 'string') {\n        deletedEvent = this.EventMap.deleteEvent(event, callback);\n      } else if (_typeof(event) === 'object') {\n        deletedEvent = this.EventMap.strictDeleteEvent(event, callback);\n      }\n\n      deletedEvent.forEach(function (obj) {\n        _this.element.removeEventListener(obj.event, obj.callback);\n\n        var index = _this.EventMap.Map.indexOf(obj);\n\n        _this.EventMap.Map.splice(index, 1);\n      });\n      return deletedEvent;\n    }\n    /**\n     * Dispatch the event\n     * @param  {string} event the event to dispatch\n     * @param  {details} details params to dispatch with the event\n     */\n\n  }, {\n    key: \"dispatchEvent\",\n    value: function dispatchEvent(event) {\n      var details = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var detail = Object.assign({}, {\n        detail: {}\n      }, {\n        detail: details\n      });\n      var customEvent = new CustomEvent(event, detail);\n      return this.element.dispatchEvent(customEvent);\n    }\n  }, {\n    key: \"EventMap\",\n\n    /**\n     * Returns the EventMap\n     * @returns {EventMap}\n     * @readonly\n     * @memberof EventWrapper\n     */\n    get: function get() {\n      return this.eventMap;\n    }\n    /**\n     * Set the event map\n     * @param {EventMap} map\n     */\n    ,\n    set: function set(map) {\n      this.eventMap = map;\n    }\n    /**\n     * Get the Element which represent the current component\n     * @returns {Element}\n     * @readonly\n     * @memberof EventWrapper\n     */\n\n  }, {\n    key: \"element\",\n    get: function get() {\n      return this.domElement;\n    }\n    /**\n     * Set the Element which represent the current component\n     * @param {Element} domElement\n     * @readonly\n     * @memberof EventMap\n     */\n    ,\n    set: function set(domElement) {\n      this.domElement = domElement;\n    }\n  }]);\n\n  function EventWrapper() {\n    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.createElement('span');\n\n    _classCallCheck(this, EventWrapper);\n\n    // Controllo sulla configurazione dell'app\n    this.element = element;\n    this.EventMap = new _event_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  }\n\n  return EventWrapper;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventWrapper);\n\n//# sourceURL=webpack:///./src/events/event-wrapper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openmind/litelog */ \"./node_modules/@openmind/litelog/dist/logger.umd.js\");\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openmind_litelog__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/component */ \"./src/components/component.js\");\n/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components */ \"./src/components/components.js\");\n/* harmony import */ var _core_dom_reader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/dom-reader */ \"./src/core/dom-reader.js\");\n/* harmony import */ var _events_event_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/event-wrapper */ \"./src/events/event-wrapper.js\");\n/* harmony import */ var _events_broadcats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/broadcats */ \"./src/events/broadcats.js\");\n\n\n\n\n\n\nvar Log = new _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default.a('MAIN');\nvar component = new _components_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.createElement('span'));\n\nvar mockCallbackA = function mockCallbackA() {\n  Log.log('A');\n};\n\nvar mockCallbackB = function mockCallbackB() {\n  Log.log('B');\n};\n\nvar mockCallbackC = function mockCallbackC() {\n  Log.log('A');\n};\n\ncomponent.on('messaggio', mockCallbackA);\ncomponent.on('messaggio', mockCallbackB);\ncomponent.trigger('messaggio');\ncomponent.trigger('messaggio');\ncomponent.trigger('messaggio');\ncomponent.off('messaggio', mockCallbackA);\ncomponent.trigger('messaggio');\ncomponent.trigger('messaggio');\ncomponent.trigger('messaggio');\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });