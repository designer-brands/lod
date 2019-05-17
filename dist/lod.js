var lod =
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

/***/ "./src/chain.js":
/*!**********************!*\
  !*** ./src/chain.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const defaultToArray = __webpack_require__(/*! ./defaultToArray.js */ \"./src/defaultToArray.js\");\nconst defaultToNumber = __webpack_require__(/*! ./defaultToNumber.js */ \"./src/defaultToNumber.js\");\nconst defaultToObject = __webpack_require__(/*! ./defaultToObject.js */ \"./src/defaultToObject.js\");\nconst defaultToString = __webpack_require__(/*! ./defaultToString.js */ \"./src/defaultToString.js\");\nconst get = __webpack_require__(/*! ./get.js */ \"./src/get.js\");\nconst getAsArray = __webpack_require__(/*! ./getAsArray.js */ \"./src/getAsArray.js\");\nconst getAsNumber = __webpack_require__(/*! ./getAsNumber.js */ \"./src/getAsNumber.js\");\nconst getAsObject = __webpack_require__(/*! ./getAsObject.js */ \"./src/getAsObject.js\");\nconst getAsString = __webpack_require__(/*! ./getAsString.js */ \"./src/getAsString.js\");\nconst groupBy = __webpack_require__(/*! ./groupBy.js */ \"./src/groupBy.js\");\nconst pick = __webpack_require__(/*! ./pick.js */ \"./src/pick.js\");\nconst uniqBy = __webpack_require__(/*! ./uniqBy.js */ \"./src/uniqBy.js\");\n\nmodule.exports = function chain (value) {\n\tlet val = value;\n\n\tfunction wrap (fn) {\n\t\treturn (...args) => {\n\t\t\tval = fn(val, ...args);\n\t\t\t// eslint-disable-next-line no-use-before-define\n\t\t\treturn result;\n\t\t};\n\t}\n\n\tlet result = {\n\t\tdefaultToArray: wrap(defaultToArray),\n\t\tdefaultToNumber: wrap(defaultToNumber),\n\t\tdefaultToObject: wrap(defaultToObject),\n\t\tdefaultToString: wrap(defaultToString),\n\t\tget: wrap(get),\n\t\tgetAsArray: wrap(getAsArray),\n\t\tgetAsNumber: wrap(getAsNumber),\n\t\tgetAsObject: wrap(getAsObject),\n\t\tgetAsString: wrap(getAsString),\n\t\tgroupBy: wrap(groupBy),\n\t\tpick: wrap(pick),\n\t\tuniqBy: wrap(uniqBy),\n\t\tinvoke: (fn, ...args) => {\n\t\t\tval = fn(val, ...args);\n\t\t\treturn result;\n\t\t},\n\t\tvalue: () => val\n\t};\n\n\treturn result;\n};\n\n//# sourceURL=webpack://lod/./src/chain.js?");

/***/ }),

/***/ "./src/debounce.js":
/*!*************************!*\
  !*** ./src/debounce.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function debounce (fn, wait) {\n\tif (typeof wait !== \"number\" || !isFinite(wait)) {\n\t\twait = 100;\n\t}\n\n\tlet timeout;\n\n\treturn function debounced () {\n\t\tif (timeout) {\n\t\t\tclearTimeout(timeout);\n\t\t}\n\n\t\ttimeout = setTimeout(() => {\n\t\t\tfn.apply(this, arguments);\n\t\t\ttimeout = null;\n\t\t}, wait, ...arguments);\n\t};\n};\n\n//# sourceURL=webpack://lod/./src/debounce.js?");

/***/ }),

/***/ "./src/defaultToArray.js":
/*!*******************************!*\
  !*** ./src/defaultToArray.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function defaultToArray (value) {\n\treturn Array.isArray(value) ? value : [];\n};\n\n//# sourceURL=webpack://lod/./src/defaultToArray.js?");

/***/ }),

/***/ "./src/defaultToNumber.js":
/*!********************************!*\
  !*** ./src/defaultToNumber.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function defaultToNumber (value) {\n\treturn \"number\" === typeof value ? value : 0;\n};\n\n//# sourceURL=webpack://lod/./src/defaultToNumber.js?");

/***/ }),

/***/ "./src/defaultToObject.js":
/*!********************************!*\
  !*** ./src/defaultToObject.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const isObject = __webpack_require__(/*! ./isObject.js */ \"./src/isObject.js\");\n\nmodule.exports = function defaultToObject (value) {\n\treturn isObject(value) ? value : {};\n};\n\n//# sourceURL=webpack://lod/./src/defaultToObject.js?");

/***/ }),

/***/ "./src/defaultToString.js":
/*!********************************!*\
  !*** ./src/defaultToString.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function defaultToString (value) {\n\treturn \"string\" === typeof value ? value : \"\";\n};\n\n//# sourceURL=webpack://lod/./src/defaultToString.js?");

/***/ }),

/***/ "./src/get.js":
/*!********************!*\
  !*** ./src/get.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const isNullOrUndefined = __webpack_require__(/*! ./isNullOrUndefined.js */ \"./src/isNullOrUndefined.js\");\n\nmodule.exports = function get (obj, path, defaultValue) {\n\tif (isNullOrUndefined(obj)) {\n\t\treturn defaultValue;\n\t}\n\n\tif (\"string\" !== typeof path) {\n\t\tlet value = obj[path];\n\t\treturn void 0 === value ? defaultValue : value;\n\t}\n\n\tlet parts = path.split(\".\");\n\n\tfor (let i = 0, l = parts.length; i < l; ++i) {\n\t\tif (isNullOrUndefined(obj)) {\n\t\t\treturn defaultValue;\n\t\t}\n\n\t\tlet part = parts[i];\n\t\tobj = obj[part];\n\t}\n\n\treturn void 0 === obj ? defaultValue : obj;\n};\n\n//# sourceURL=webpack://lod/./src/get.js?");

/***/ }),

/***/ "./src/getAsArray.js":
/*!***************************!*\
  !*** ./src/getAsArray.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const get = __webpack_require__(/*! ./get.js */ \"./src/get.js\");\nconst defaultToArray = __webpack_require__(/*! ./defaultToArray.js */ \"./src/defaultToArray.js\");\n\nmodule.exports = function getAsArray (obj, path) {\n\treturn defaultToArray(get(obj, path));\n};\n\n//# sourceURL=webpack://lod/./src/getAsArray.js?");

/***/ }),

/***/ "./src/getAsNumber.js":
/*!****************************!*\
  !*** ./src/getAsNumber.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const get = __webpack_require__(/*! ./get.js */ \"./src/get.js\");\nconst defaultToNumber = __webpack_require__(/*! ./defaultToNumber.js */ \"./src/defaultToNumber.js\");\n\nmodule.exports = function getAsNumber (obj, path) {\n\treturn defaultToNumber(get(obj, path));\n};\n\n//# sourceURL=webpack://lod/./src/getAsNumber.js?");

/***/ }),

/***/ "./src/getAsObject.js":
/*!****************************!*\
  !*** ./src/getAsObject.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const get = __webpack_require__(/*! ./get.js */ \"./src/get.js\");\nconst defaultToObject = __webpack_require__(/*! ./defaultToObject.js */ \"./src/defaultToObject.js\");\n\nmodule.exports = function getAsObject (obj, path) {\n\treturn defaultToObject(get(obj, path));\n};\n\n//# sourceURL=webpack://lod/./src/getAsObject.js?");

/***/ }),

/***/ "./src/getAsString.js":
/*!****************************!*\
  !*** ./src/getAsString.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const get = __webpack_require__(/*! ./get.js */ \"./src/get.js\");\nconst defaultToString = __webpack_require__(/*! ./defaultToString.js */ \"./src/defaultToString.js\");\n\nmodule.exports = function getAsString (obj, path) {\n\treturn defaultToString(get(obj, path));\n};\n\n//# sourceURL=webpack://lod/./src/getAsString.js?");

/***/ }),

/***/ "./src/groupBy.js":
/*!************************!*\
  !*** ./src/groupBy.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function groupBy (arr, iteratee = a => a) {\n\tif (!Array.isArray(arr)) {\n\t\treturn [];\n\t}\n\n\treturn arr.reduce((acc, cur) => {\n\t\tlet key = iteratee(cur);\n\n\t\tif (!acc[key]) {\n\t\t\tacc[key] = [];\n\t\t}\n\n\t\tacc[key].push(cur);\n\n\t\treturn acc;\n\t}, {});\n};\n\n//# sourceURL=webpack://lod/./src/groupBy.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const chain = __webpack_require__(/*! ./chain.js */ \"./src/chain.js\");\nconst debounce = __webpack_require__(/*! ./debounce.js */ \"./src/debounce.js\");\nconst defaultToArray = __webpack_require__(/*! ./defaultToArray.js */ \"./src/defaultToArray.js\");\nconst defaultToNumber = __webpack_require__(/*! ./defaultToNumber.js */ \"./src/defaultToNumber.js\");\nconst defaultToObject = __webpack_require__(/*! ./defaultToObject.js */ \"./src/defaultToObject.js\");\nconst defaultToString = __webpack_require__(/*! ./defaultToString.js */ \"./src/defaultToString.js\");\nconst get = __webpack_require__(/*! ./get.js */ \"./src/get.js\");\nconst getAsArray = __webpack_require__(/*! ./getAsArray.js */ \"./src/getAsArray.js\");\nconst getAsNumber = __webpack_require__(/*! ./getAsNumber.js */ \"./src/getAsNumber.js\");\nconst getAsObject = __webpack_require__(/*! ./getAsObject.js */ \"./src/getAsObject.js\");\nconst getAsString = __webpack_require__(/*! ./getAsString.js */ \"./src/getAsString.js\");\nconst groupBy = __webpack_require__(/*! ./groupBy.js */ \"./src/groupBy.js\");\nconst isNonEmptyObject = __webpack_require__(/*! ./isNonEmptyObject.js */ \"./src/isNonEmptyObject.js\");\nconst isNullOrUndefined = __webpack_require__(/*! ./isNullOrUndefined.js */ \"./src/isNullOrUndefined.js\");\nconst isObject = __webpack_require__(/*! ./isObject.js */ \"./src/isObject.js\");\nconst pick = __webpack_require__(/*! ./pick.js */ \"./src/pick.js\");\nconst range = __webpack_require__(/*! ./range.js */ \"./src/range.js\");\nconst toCamelCase = __webpack_require__(/*! ./toCamelCase.js */ \"./src/toCamelCase.js\");\nconst uniqBy = __webpack_require__(/*! ./uniqBy.js */ \"./src/uniqBy.js\");\nconst uniqueId = __webpack_require__(/*! ./uniqueId.js */ \"./src/uniqueId.js\");\nconst upperFirst = __webpack_require__(/*! ./upperFirst.js */ \"./src/upperFirst.js\");\n\nmodule.exports = {\n\tchain,\n\tdebounce,\n\tdefaultToArray,\n\tdefaultToNumber,\n\tdefaultToObject,\n\tdefaultToString,\n\tget,\n\tgetAsArray,\n\tgetAsNumber,\n\tgetAsObject,\n\tgetAsString,\n\tgroupBy,\n\tisNonEmptyObject,\n\tisNullOrUndefined,\n\tisObject,\n\tpick,\n\trange,\n\ttoCamelCase,\n\tuniqBy,\n\tuniqueId,\n\tupperFirst\n};\n\n//# sourceURL=webpack://lod/./src/index.js?");

/***/ }),

/***/ "./src/isNonEmptyObject.js":
/*!*********************************!*\
  !*** ./src/isNonEmptyObject.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const isObject = __webpack_require__(/*! ./isObject.js */ \"./src/isObject.js\");\n\nmodule.exports = function isNonEmptyObject (obj) {\n\treturn Boolean(\n\t\tisObject(obj) && Object.keys(obj).length\n\t);\n};\n\n//# sourceURL=webpack://lod/./src/isNonEmptyObject.js?");

/***/ }),

/***/ "./src/isNullOrUndefined.js":
/*!**********************************!*\
  !*** ./src/isNullOrUndefined.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function isNullOrUndefined (value) {\n\t// eslint-disable-next-line eqeqeq\n\treturn value == null;\n};\n\n//# sourceURL=webpack://lod/./src/isNullOrUndefined.js?");

/***/ }),

/***/ "./src/isObject.js":
/*!*************************!*\
  !*** ./src/isObject.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const isObjectOrArray = __webpack_require__(/*! ./isObjectOrArray.js */ \"./src/isObjectOrArray.js\");\n\nmodule.exports = function isObject (obj) {\n\treturn Boolean(\n\t\tisObjectOrArray(obj) && (!Array.isArray(obj))\n\t);\n};\n\n//# sourceURL=webpack://lod/./src/isObject.js?");

/***/ }),

/***/ "./src/isObjectOrArray.js":
/*!********************************!*\
  !*** ./src/isObjectOrArray.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function isObjectOrArray (value) {\n\treturn value instanceof Object && typeof value !== \"function\";\n};\n\n//# sourceURL=webpack://lod/./src/isObjectOrArray.js?");

/***/ }),

/***/ "./src/pick.js":
/*!*********************!*\
  !*** ./src/pick.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const set = __webpack_require__(/*! ./set.js */ \"./src/set.js\");\nconst isNonEmptyObject = __webpack_require__(/*! ./isNonEmptyObject.js */ \"./src/isNonEmptyObject.js\");\nconst isNullOrUndefined = __webpack_require__(/*! ./isNullOrUndefined.js */ \"./src/isNullOrUndefined.js\");\n\nmodule.exports = function pick (obj, ...paths) {\n\tif (!isNonEmptyObject(obj)) {\n\t\treturn {};\n\t}\n\n\tlet result = {};\n\n\tpaths.forEach(path => {\n\t\tlet parts = path.split(\".\");\n\t\tlet pointer = obj;\n\t\tlet lastPart = parts.pop();\n\n\t\tfor (let i = 0, l = parts.length; i < l; ++i) {\n\t\t\tlet part = parts[i];\n\n\t\t\tif (isNullOrUndefined(pointer) || !pointer.hasOwnProperty(part)) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t// go deeper\n\t\t\tpointer = pointer[part];\n\t\t}\n\n\t\tif (pointer.hasOwnProperty(lastPart)) {\n\t\t\tset(result, path, pointer[lastPart]);\n\t\t}\n\t});\n\n\treturn result;\n};\n\n//# sourceURL=webpack://lod/./src/pick.js?");

/***/ }),

/***/ "./src/range.js":
/*!**********************!*\
  !*** ./src/range.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function range (start, end, step) {\n\tlet args = [...arguments];\n\n\t// every arg must be a finite number\n\tlet isEveryArgFinite = args.every(\n\t\targ => (\"number\" === typeof arg) && isFinite(arg)\n\t);\n\n\tif (!isEveryArgFinite) {\n\t\treturn [];\n\t}\n\n\t// normalize args\n\tswitch (args.length) {\n\t// if 1 arg, imply it's end, start = 0 and step is 1 or -1\n\tcase 1:\n\t\tstart = 0;\n\t\tend = args[0];\n\t\tstep = (start <= end ? 1 : -1);\n\t\tbreak;\n\t\t// if 2 args, imply they're start and end, and step is 1 or -1\n\tcase 2:\n\t\tstep = (start <= end ? 1 : -1);\n\t\tbreak;\n\t}\n\n\t// in case passing in all 3 args but step has a wrong sign\n\tif (start < end && step < 0 || start > end && step > 0) {\n\t\treturn [];\n\t}\n\n\tif (start === end) {\n\t\treturn [start];\n\t}\n\n\tif (step === 0) {\n\t\treturn [];\n\t}\n\n\tlet result = [];\n\tfor (\n\t\tlet n = start;\n\t\t(start < end && n <= end) || (start > end && n >= end);\n\t\tn += step\n\t) {\n\n\t\tresult.push(Number(n.toFixed(2)));\n\t}\n\n\treturn result;\n};\n\n//# sourceURL=webpack://lod/./src/range.js?");

/***/ }),

/***/ "./src/set.js":
/*!********************!*\
  !*** ./src/set.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const isObjectOrArray = __webpack_require__(/*! ./isObjectOrArray.js */ \"./src/isObjectOrArray.js\");\n\nmodule.exports = function set (obj, path, value) {\n\tif (!isObjectOrArray(obj)) {\n\t\treturn obj;\n\t}\n\n\tif (\"string\" !== typeof path) {\n\t\tobj[path] = value;\n\n\t\treturn obj;\n\t}\n\n\tlet parts = path.split(\".\");\n\tlet pointer = obj;\n\n\tlet l = parts.length;\n\tlet lastPart = parts[l - 1];\n\n\tfor (let i = 0; i < l - 1; ++i) {\n\t\tlet part = parts[i];\n\t\tlet nextPart = parts[i + 1];\n\n\t\t// create [] or {} as needed\n\t\tif (!isObjectOrArray(pointer[part])) {\n\t\t\tlet isNumerical = nextPart.match(/^\\d+$/);\n\t\t\tpointer[part] = isNumerical ? [] : {};\n\t\t}\n\n\t\t// go deeper\n\t\tpointer = pointer[part];\n\t}\n\n\tpointer[lastPart] = value;\n\n\treturn obj;\n};\n\n//# sourceURL=webpack://lod/./src/set.js?");

/***/ }),

/***/ "./src/toCamelCase.js":
/*!****************************!*\
  !*** ./src/toCamelCase.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function toCamelCase (str) {\n\treturn str.toLowerCase()\n\t\t.replace(\n\t\t\t/[^a-zA-Z0-9]+(.)/g,\n\t\t\t(match, char) => char.toUpperCase()\n\t\t);\n};\n\n//# sourceURL=webpack://lod/./src/toCamelCase.js?");

/***/ }),

/***/ "./src/uniqBy.js":
/*!***********************!*\
  !*** ./src/uniqBy.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function uniqBy (arr, iteratee = val => val) {\n\tif (!Array.isArray(arr)) {\n\t\treturn [];\n\t}\n\n\tlet mappedSet = new Set();\n\tlet result = [];\n\n\tarr.forEach(element => {\n\t\tlet mapped = iteratee(element);\n\n\t\tif (!mappedSet.has(mapped)) {\n\t\t\tmappedSet.add(mapped);\n\t\t\tresult.push(element);\n\t\t}\n\t});\n\n\treturn result;\n};\n\n//# sourceURL=webpack://lod/./src/uniqBy.js?");

/***/ }),

/***/ "./src/uniqueId.js":
/*!*************************!*\
  !*** ./src/uniqueId.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let counter = 0;\n\nmodule.exports = function uniqueId (prefix = \"\") {\n\treturn String(prefix) + (++counter);\n};\n\n//# sourceURL=webpack://lod/./src/uniqueId.js?");

/***/ }),

/***/ "./src/upperFirst.js":
/*!***************************!*\
  !*** ./src/upperFirst.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function upperFirst (str) {\n\tif (\"string\" !== typeof str) {\n\t\treturn \"\";\n\t}\n\n\treturn str.slice(0, 1).toUpperCase() + str.slice(1);\n};\n\n//# sourceURL=webpack://lod/./src/upperFirst.js?");

/***/ })

/******/ });