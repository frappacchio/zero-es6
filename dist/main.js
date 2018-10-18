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

/***/ "./src/core/dom-reader.js":
/*!********************************!*\
  !*** ./src/core/dom-reader.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DomReader; });\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openmind/litelog */ \"./node_modules/@openmind/litelog/dist/logger.umd.js\");\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openmind_litelog__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Log = new _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default.a('DomReader');\nvar Defaults = {\n  selector: '[data-component]',\n  element: document\n};\n/**\n * Read the DOM and check for Zero Components\n * @class\n */\n\nvar DomReader =\n/*#__PURE__*/\nfunction () {\n  function DomReader() {\n    _classCallCheck(this, DomReader);\n  }\n\n  _createClass(DomReader, [{\n    key: \"check\",\n\n    /**\n       * Return the list of components matching given selector\n       *@returns {NodeList}\n       */\n    value: function check() {\n      var components = this.Element.querySelectorAll(this.Selector);\n      return components;\n    }\n  }, {\n    key: \"Element\",\n\n    /**\n       * Set the element for all operations\n       * If falsy value is passed it returns the default element `document`\n       * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy\n       * @param {Element} element\n       */\n    set: function set(element) {\n      this.element = element;\n    }\n    /**\n       * Get the element. If not defined return the document element\n       * @returns {Element|document}\n       * @see https://developer.mozilla.org/en-US/docs/Web/API/Element\n       */\n    ,\n    get: function get() {\n      return !this.element ? Defaults.element : this.element;\n    }\n    /**\n       * Set the element selector using CSS selector specs\n       * @see https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors\n       * If falsy value is passed it returns the default selector [data-component]\n       * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy\n       * @param {String} selector\n       */\n\n  }, {\n    key: \"Selector\",\n    set: function set(selector) {\n      this.selector = selector;\n    },\n    get: function get() {\n      return !this.selector ? Defaults.selector : this.selector;\n    }\n  }]);\n\n  return DomReader;\n}();\n\n\n\n//# sourceURL=webpack:///./src/core/dom-reader.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openmind/litelog */ \"./node_modules/@openmind/litelog/dist/logger.umd.js\");\n/* harmony import */ var _openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openmind_litelog__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_dom_reader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/dom-reader */ \"./src/core/dom-reader.js\");\n\n\nvar domReader = new _core_dom_reader__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nvar fakeNonEmptyDom = \"<div data-component=\\\"pippo\\\"></div>\\n      <div data-component=\\\"pippo\\\">\\n          <div data-component=\\\"gastone\\\"></div>\\n      </div>\";\nvar fakeEmptyDom = '<div>Fake</div>';\nvar fakeAlternativeDom = '<div data-alternative=\"component\">Fake</div>';\nvar emptyElement = document.getElementById('jhon-doe');\ndocument.body.innerHTML = '';\nvar domNode = document.createElement('main');\ndomNode.innerHTML = fakeAlternativeDom; // domNode.innerHTML = fakeNonEmptyDom;\n\ndocument.body.append(domNode);\ndomReader.Selector = null;\ndomReader.Element = emptyElement;\nvar components = domReader.check();\n_openmind_litelog__WEBPACK_IMPORTED_MODULE_0___default.a.log(components);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });