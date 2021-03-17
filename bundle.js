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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/scss/autoComplete.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/dist/cjs.js!./src/scss/autoComplete.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".autoComplete_wrapper {\n  position: absolute;\n  display: inline-block; }\n\n#autoComplete {\n  margin: 0;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  font-size: 1rem;\n  text-overflow: ellipsis;\n  color: rgba(79, 41, 240, 0.3);\n  outline: none;\n  border-radius: 10px;\n  border: 0;\n  border: 0.05rem solid rgba(79, 41, 240, 0.5);\n  /* background-image: url(./images/search.svg); */\n  background-size: 1.4rem;\n  background-position: left 1.05rem top 0.8rem;\n  background-repeat: no-repeat;\n  background-origin: border-box;\n  background-color: #fff;\n  transition: all 0.4s ease;\n  -webkit-transition: all -webkit-transform 0.4s ease; }\n\n#autoComplete::-moz-placeholder {\n  color: rgba(79, 41, 240, 0.5);\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  -webkit-transition: all -webkit-transform 0.3s ease; }\n\n#autoComplete:-ms-input-placeholder {\n  color: rgba(79, 41, 240, 0.5);\n  -ms-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  -webkit-transition: all -webkit-transform 0.3s ease; }\n\n#autoComplete::placeholder {\n  color: rgba(79, 41, 240, 0.5);\n  transition: all 0.3s ease;\n  -webkit-transition: all -webkit-transform 0.3s ease; }\n\n#autoComplete:hover::-moz-placeholder {\n  color: rgba(79, 41, 240, 0.6);\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  -webkit-transition: all -webkit-transform 0.3s ease; }\n\n#autoComplete:hover:-ms-input-placeholder {\n  color: rgba(79, 41, 240, 0.6);\n  -ms-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  -webkit-transition: all -webkit-transform 0.3s ease; }\n\n#autoComplete:hover::placeholder {\n  color: rgba(79, 41, 240, 0.6);\n  transition: all 0.3s ease;\n  -webkit-transition: all -webkit-transform 0.3s ease; }\n\n#autoComplete:focus::-moz-placeholder {\n  padding: 0.1rem 0.6rem;\n  font-size: 0.95rem;\n  color: rgba(79, 41, 240, 0.4); }\n\n#autoComplete:focus:-ms-input-placeholder {\n  padding: 0.1rem 0.6rem;\n  font-size: 0.95rem;\n  color: rgba(79, 41, 240, 0.4); }\n\n#autoComplete:focus::placeholder {\n  padding: 0.1rem 0.6rem;\n  font-size: 0.95rem;\n  color: rgba(79, 41, 240, 0.4); }\n\n#autoComplete:focus::-moz-selection {\n  background-color: rgba(79, 41, 240, 0.15); }\n\n#autoComplete:focus::selection {\n  background-color: rgba(79, 41, 240, 0.15); }\n\n#autoComplete::-moz-selection {\n  background-color: rgba(79, 41, 240, 0.15); }\n\n#autoComplete::selection {\n  background-color: rgba(79, 41, 240, 0.15); }\n\n#autoComplete:hover {\n  color: rgba(79, 41, 240, 0.8);\n  transition: all 0.3s ease;\n  -webkit-transition: all -webkit-transform 0.3s ease; }\n\n#autoComplete:focus {\n  color: #4f29f0;\n  border: 0.06rem solid rgba(79, 41, 240, 0.8); }\n\n.autoComplete_list {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  padding: 0;\n  margin-top: 55px;\n  border-radius: 0.6rem;\n  background-color: #fff;\n  box-shadow: 0 3px 6px rgba(149, 157, 165, 0.15);\n  border: 1px solid rgba(33, 33, 33, 0.07);\n  z-index: 1000;\n  outline: none; }\n\n.autoComplete_result, .no_result {\n  margin: 0.3rem;\n  min-width: 190px;\n  padding: 0.3rem 0.5rem;\n  list-style: none;\n  text-align: left;\n  font-size: 1rem;\n  color: #212121;\n  transition: all 0.1s ease-in-out;\n  border-radius: 0.35rem;\n  background-color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: all 0.2s ease; }\n\n.autoComplete_result::-moz-selection {\n  color: rgba(255, 255, 255, 0);\n  background-color: rgba(255, 255, 255, 0); }\n\n.autoComplete_result::selection {\n  color: rgba(255, 255, 255, 0);\n  background-color: rgba(255, 255, 255, 0); }\n\n.autoComplete_result:hover {\n  cursor: pointer;\n  background-color: rgba(79, 41, 240, 0.15); }\n\n.autoComplete_highlighted {\n  color: #4f29f0;\n  font-weight: bold; }\n\n.autoComplete_highlighted::-moz-selection {\n  color: rgba(255, 255, 255, 0);\n  background-color: rgba(255, 255, 255, 0); }\n\n.autoComplete_highlighted::selection {\n  color: rgba(255, 255, 255, 0);\n  background-color: rgba(255, 255, 255, 0); }\n\n.autoComplete_selected {\n  cursor: pointer;\n  background-color: rgba(79, 41, 240, 0.15); }\n\n@media only screen and (max-width: 600px) {\n  .autoComplete_wrapper {\n    width: 320px; }\n  #autoComplete {\n    width: 18rem;\n    background-size: 1.6rem;\n    background-position: left 1.1rem top 0.75rem; }\n  #autoComplete_list {\n    margin: 10px; } }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  #autoComplete {\n    border-width: 1px; } }\n\n@-moz-document url-prefix() {\n  #autoComplete {\n    background-size: 1.2rem;\n    background-origin: border-box;\n    border-width: 1px;\n    background-position: left 1.1rem top 0.8rem; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/scss/compass.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/dist/cjs.js!./src/scss/compass.scss ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Dosis:200,400,500,600);"]);
// Module
exports.push([module.i, ".compass {\n  display: block;\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.85);\n  position: absolute;\n  left: 500px;\n  bottom: 90px;\n  font-family: 'Dosis';\n  color: #555;\n  text-shadow: 1px 1px 1px white; }\n  .compass:before {\n    font-weight: bold;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    content: \"N\";\n    font-size: 14px;\n    top: -2px; }\n  .compass .direction {\n    height: 100%;\n    width: 100%;\n    display: block;\n    background: #f2f6f5;\n    background: -o-linear-gradient(top, #f2f6f5 0%, #cbd5d6 100%);\n    border-radius: 100%; }\n    .compass .direction p {\n      text-align: center;\n      margin: 0;\n      padding: 0;\n      position: absolute;\n      top: 50%;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      line-height: 80px;\n      display: block;\n      margin-top: -45px;\n      font-size: 28px;\n      font-weight: bold; }\n      .compass .direction p span {\n        display: block;\n        line-height: normal;\n        margin-top: -24px;\n        font-size: 11px;\n        text-transform: uppercase;\n        font-weight: normal; }\n  .compass .arrow {\n    width: 100%;\n    height: 100%;\n    display: block;\n    position: absolute;\n    top: 0; }\n    .compass .arrow:after {\n      content: \"\";\n      width: 0;\n      height: 0;\n      border-left: 5px solid transparent;\n      border-right: 5px solid transparent;\n      border-bottom: 10px solid red;\n      position: absolute;\n      top: -6px;\n      left: 50%;\n      margin-left: -5px;\n      z-index: 99; }\n    .compass .arrow.nne {\n      transform: rotate(22.5deg); }\n    .compass .arrow.ne {\n      transform: rotate(45deg); }\n    .compass .arrow.ene {\n      transform: rotate(67.5deg); }\n    .compass .arrow.e {\n      transform: rotate(90deg); }\n    .compass .arrow.ese {\n      transform: rotate(112.5deg); }\n    .compass .arrow.se {\n      transform: rotate(135deg); }\n    .compass .arrow.sse {\n      transform: rotate(157.5deg); }\n    .compass .arrow.s {\n      transform: rotate(180deg); }\n    .compass .arrow.ssw {\n      transform: rotate(202.5deg); }\n    .compass .arrow.sw {\n      transform: rotate(-135deg); }\n    .compass .arrow.wsw {\n      transform: rotate(-114.5deg); }\n    .compass .arrow.w {\n      transform: rotate(-90deg); }\n    .compass .arrow.wnw {\n      transform: rotate(-69.5deg); }\n    .compass .arrow.nw {\n      transform: rotate(-45deg); }\n    .compass .arrow.nnw {\n      transform: rotate(-24.5deg); }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/scss/search.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/dist/cjs.js!./src/scss/search.scss ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".search {\n  --background: #ffffff;\n  --text-color: #414856;\n  --primary-color: #4F29F0;\n  --border-radius: 10px;\n  --width: 190px;\n  --height: 55px;\n  font: 400 16px \"Varela Round\", sans-serif;\n  background: var(--background);\n  width: auto;\n  height: var(--height);\n  position: absolute;\n  overflow: hidden;\n  border-radius: var(--border-radius);\n  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);\n  display: inline-block;\n  justify-content: center;\n  align-items: center; }\n  .search input[type=\"text\"] {\n    position: relative;\n    width: var(--height);\n    height: var(--height);\n    font: 400 16px 'Varela Round', sans-serif;\n    color: var(--text-color);\n    border: 0;\n    box-sizing: border-box;\n    outline: none;\n    padding: 0 0 0 40px;\n    transition: width .6s ease;\n    z-index: 10;\n    opacity: 0;\n    cursor: pointer; }\n    .search input[type=\"text\"]:focus {\n      z-index: 0;\n      opacity: 1;\n      width: var(--width); }\n      .search input[type=\"text\"]:focus ~ .symbol::before {\n        width: 0%; }\n      .search input[type=\"text\"]:focus ~ .symbol:after {\n        -webkit-clip-path: inset(0% 0% 0% 100%);\n                clip-path: inset(0% 0% 0% 100%);\n        transition: -webkit-clip-path .04s linear .105s;\n        transition: clip-path .04s linear .105s;\n        transition: clip-path .04s linear .105s, -webkit-clip-path .04s linear .105s; }\n      .search input[type=\"text\"]:focus ~ .symbol .cloud {\n        top: -30px;\n        left: -30px;\n        transform: translate(0, 0);\n        transition: all .6s ease; }\n      .search input[type=\"text\"]:focus ~ .symbol .lens {\n        top: 20px;\n        left: 15px;\n        transform: translate(0, 0);\n        fill: var(--primary-color);\n        transition: top .5s ease .1s, left .5s ease .1s, fill .3s ease; }\n  .search .symbol {\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    z-index: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n    .search .symbol:before {\n      content: \"\";\n      position: absolute;\n      right: 0;\n      width: 100%;\n      height: 100%;\n      background: var(--primary-color);\n      z-index: -1;\n      transition: width .6s ease; }\n    .search .symbol:after {\n      content: \"\";\n      position: absolute;\n      top: 21px;\n      left: 21px;\n      width: 20px;\n      height: 20px;\n      border-radius: 50%;\n      background: var(--primary-color);\n      z-index: 1;\n      -webkit-clip-path: inset(0% 0% 0% 0%);\n              clip-path: inset(0% 0% 0% 0%);\n      transition: -webkit-clip-path .04s linear .225s;\n      transition: clip-path .04s linear .225s;\n      transition: clip-path .04s linear .225s, -webkit-clip-path .04s linear .225s; }\n    .search .symbol .cloud,\n    .search .symbol .lens {\n      position: absolute;\n      fill: #fff;\n      stroke: none;\n      top: 50%;\n      left: 50%; }\n    .search .symbol .cloud {\n      width: 35px;\n      height: 32px;\n      transform: translate(-50%, -60%);\n      transition: all .6s ease; }\n    .search .symbol .lens {\n      fill: #fff;\n      width: 16px;\n      height: 16px;\n      z-index: 2;\n      top: 24px;\n      left: 24px;\n      transition: top .3s ease, left .3s ease, fill .2s ease .2s; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/clear.jpg */ "./src/img/clear.jpg");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../img/clouds.jpg */ "./src/img/clouds.jpg");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../img/fog.jpg */ "./src/img/fog.jpg");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../img/rain.jpg */ "./src/img/rain.jpg");
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../img/snow.jpg */ "./src/img/snow.jpg");
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../img/thunderstorm.jpg */ "./src/img/thunderstorm.jpg");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Anton&display=swap);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
// Module
exports.push([module.i, "body {\n  font-family: 'Noto Sans', sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0px; }\n\n#background {\n  background: #e8ebf3;\n  height: 100vh;\n  width: 100%;\n  background-size: cover; }\n  #background.clear {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n  #background.clouds {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); }\n  #background.fog {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + "); }\n  #background.rain {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + "); }\n  #background.snow {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + "); }\n  #background.thunderstorm {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + "); }\n\n#title {\n  font-family: 'Permanent Marker', cursive;\n  font-size: 5rem;\n  position: absolute;\n  top: 20%; }\n  #title.open {\n    font-size: 3rem;\n    top: 2%;\n    right: 5%; }\n\n.weather-info {\n  position: absolute;\n  width: 80%;\n  top: 10%;\n  left: 10%;\n  display: none; }\n\n.location {\n  font-size: 2rem;\n  line-height: 3.5rem;\n  margin: 0px; }\n\n.conditions {\n  font-size: 2.2rem;\n  letter-spacing: 0.1rem;\n  padding-left: 0.3rem;\n  margin: 0px; }\n\n.icon {\n  position: absolute;\n  bottom: 50%;\n  left: 25%; }\n\n.current-temp {\n  font-family: 'Anton', sans-serif;\n  font-size: 10rem;\n  position: relative; }\n\n.current-temp::after {\n  content: '\\00B0 F';\n  font-size: 3rem;\n  position: absolute;\n  top: 1.8rem;\n  left: 10rem; }\n\n.details {\n  font-size: 1.5rem;\n  font-weight: 900;\n  letter-spacing: 0.1rem;\n  position: absolute;\n  border-left: 0.2rem solid rgba(255, 255, 255, 0.5);\n  top: 42%;\n  left: 15rem;\n  padding-left: 2.5rem;\n  justify-content: space-between; }\n  .details p:first-child {\n    margin-top: 0px; }\n  .details p:last-child {\n    margin-bottom: 0px; }\n\n.feels-like {\n  position: relative; }\n  .feels-like::after {\n    content: '\\00B0 F';\n    position: absolute;\n    left: 1.8rem;\n    font-size: 1rem; }\n\n.humidity {\n  position: relative; }\n  .humidity::after {\n    content: '%';\n    position: absolute;\n    font-size: 1.2rem; }\n\n#date {\n  font-size: xx-small; }\n", ""]);
// Exports
module.exports = exports;


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
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
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
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

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

  if (sourceMap && typeof btoa !== 'undefined') {
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

/***/ "./src/img/clear.jpg":
/*!***************************!*\
  !*** ./src/img/clear.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2d6ffea519a58714185087ae1476c80d.jpg");

/***/ }),

/***/ "./src/img/clouds.jpg":
/*!****************************!*\
  !*** ./src/img/clouds.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9174c4fb4dc0bc499b7d3aae0cfe39c4.jpg");

/***/ }),

/***/ "./src/img/fog.jpg":
/*!*************************!*\
  !*** ./src/img/fog.jpg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "55fbfe5e5d4d2326acc37c87e5e8e7c1.jpg");

/***/ }),

/***/ "./src/img/rain.jpg":
/*!**************************!*\
  !*** ./src/img/rain.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f96fc3e2efe42d5042497032cc8b6573.jpg");

/***/ }),

/***/ "./src/img/snow.jpg":
/*!**************************!*\
  !*** ./src/img/snow.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6d36f73fcade9733ee0ec4825a1a2a21.jpg");

/***/ }),

/***/ "./src/img/thunderstorm.jpg":
/*!**********************************!*\
  !*** ./src/img/thunderstorm.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "94068eebffdd6ed702a9142c76084914.jpg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main */ "./src/js/main.js");
/* harmony import */ var _js_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/autocomplete */ "./src/js/autocomplete.js");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_search_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/search.scss */ "./src/scss/search.scss");
/* harmony import */ var _scss_search_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_search_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scss_compass_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/compass.scss */ "./src/scss/compass.scss");
/* harmony import */ var _scss_compass_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_compass_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scss_autoComplete_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scss/autoComplete.scss */ "./src/scss/autoComplete.scss");
/* harmony import */ var _scss_autoComplete_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scss_autoComplete_scss__WEBPACK_IMPORTED_MODULE_5__);







/***/ }),

/***/ "./src/js/autocomplete.js":
/*!********************************!*\
  !*** ./src/js/autocomplete.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/js/main.js");
 //import autoCompleteJS from '@tarekraafat/autocomplete.js';

const autoCompleteJS = new autoComplete({
  data: {
    // Data src [Array, Function, Async] | (REQUIRED)
    src: async () => {
      // API key token
      const token = "this_is_the_API_token_number"; // User search query

      const query = document.querySelector("#autoComplete").value; // Fetch External Data Source

      const source = await fetch('./location_data.json'); // Format data into JSON

      const data = await source.json(); // Return Fetched data

      return data;
    },
    key: ["name"],
    cache: true
  },
  sort: (a, b) => {
    // Sort rendered results ascendingly | (Optional)
    if (a.match < b.match) return -1;
    if (a.match > b.match) return 1;
    return 0;
  },
  placeHolder: "City...",
  // Place Holder text                 | (Optional)
  selector: "#autoComplete",
  // Input field selector              | (Optional)
  observer: true,
  // Input field observer | (Optional)
  threshold: 3,
  // Min. Chars length to start Engine | (Optional)
  debounce: 300,
  // Post duration for engine to start | (Optional)
  searchEngine: "strict",
  // Search Engine type/mode           | (Optional)
  resultsList: {
    // Rendered results list object      | (Optional)
    container: source => {
      source.setAttribute("id", "locations");
    },
    destination: ".search",
    position: "afterend",
    element: "ul"
  },
  maxResults: 5,
  // Max. number of rendered results | (Optional)
  highlight: {
    render: true // Highlight matching results        | (Optional)

  },
  resultItem: {
    // Rendered result item            | (Optional)
    content: (data, element) => {
      element.style = "display: flex; justify-content: space-between;";
      element.innerHTML = `
            <span>
                ${data.match}
            </span>
            <span style="color: rgba(0,0,0,.2);">
                ${data.value.state}
            </span>`;
    },
    element: "li"
  },
  noResults: (dataFeedback, generateList) => {
    // Generate autoComplete List
    generateList(autoCompleteJS, dataFeedback, dataFeedback.results); // No Results List Item

    const result = document.createElement("li");
    result.setAttribute("class", "no_result");
    result.setAttribute("tabindex", "1");
    result.innerHTML = `<span style="display: flex; align-items: center; font-weight: 100; color: rgba(0,0,0,.2);">Found No Results for "${dataFeedback.query}"</span>`; //document.querySelector(`#${autoCompleteJS.resultsList.idName}`).appendChild(result);

    document.querySelector('#locations').appendChild(result);
  },
  onSelection: feedback => {
    // Action script onSelection event | (Optional)
    //console.log(feedback.selection.value);
    Object(_main__WEBPACK_IMPORTED_MODULE_0__["default"])(feedback.selection.value);
  }
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fetchWeatherData; });
//TODOs: -keep search box active on results view
//       -change units option - api has 'units' parameter
//       -add non-US cities
const API_KEY = 'e8556c4fa07ab331b78b7bd73055b650';
const background = document.getElementById('background');
const title = document.getElementById('title');
const input = document.querySelector('input');
const output = document.querySelector('.weather-info');
const city = document.querySelector('.location');
const icon = document.querySelector('.icon');
const conditions = document.querySelector('.conditions');
const currentTemp = document.querySelector('.current-temp');
const feelsLike = document.querySelector('.feels-like');
const wind = document.querySelector('.wind-speed');
const humidity = document.querySelector('.humidity'); //const pressure = document.getElementById('pressure');

const compass = document.querySelector('.compass');
const date = document.getElementById('date');
const celsius = false; //input.addEventListener('keydown', getWeather);
// async function getWeather(e) {
// if (e.keyCode != 13 || input.value == '') return;
//   e.preventDefault();
//   //const location = input.value || '33064';
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}`;
//   const result = await fetch(url);
//   const data = await result.json();
//   render(data);
//   input.value = '';
//   console.log(data)
// }

async function fetchWeatherData(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${location.id}&appid=${API_KEY}`;
  const result = await fetch(url);
  const data = await result.json();
  console.log(data);
  input.value = '';
  render(data, location);
}

function convertTemp(temp, celsius) {
  const degC = temp - 273.15;
  const degF = degC * (9 / 5) + 32;
  return celsius ? degC.toFixed(1) : degF.toFixed(0);
}

function getHeading(deg) {
  const val = Math.floor(deg / 22.5 + 0.5);
  const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return arr[val % 16];
}

function render(data, location) {
  city.innerHTML = `${location.name}, ${location.state}`;
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  conditions.innerHTML = data.weather[0].main; //const units = (celsius) ? "&#x2103" : "&#x2109"

  currentTemp.innerHTML = convertTemp(data.main.temp, celsius);
  feelsLike.innerHTML = convertTemp(data.main.feels_like, celsius);
  wind.innerHTML = `${Math.floor(data.wind.speed)} mph`;
  humidity.innerHTML = data.main.humidity; //pressure.innerHTML = data.main.pressure;

  compass.querySelector('p').innerHTML = `${getHeading(data.wind.deg)}<span>${Math.floor(data.wind.speed)} MPH</span>`;
  compass.querySelector('.arrow').style.transform = `rotate(${data.wind.deg}deg)`;
  date.innerHTML = new Date(data.dt * 1000);
  background.classList = data.weather[0].main.toLowerCase();
  title.classList = 'open';
  output.style.display = 'block';
}



/***/ }),

/***/ "./src/scss/autoComplete.scss":
/*!************************************!*\
  !*** ./src/scss/autoComplete.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src??ref--5-2!../../node_modules/sass-loader/dist/cjs.js!./autoComplete.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/scss/autoComplete.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/compass.scss":
/*!*******************************!*\
  !*** ./src/scss/compass.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src??ref--5-2!../../node_modules/sass-loader/dist/cjs.js!./compass.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/scss/compass.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/search.scss":
/*!******************************!*\
  !*** ./src/scss/search.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src??ref--5-2!../../node_modules/sass-loader/dist/cjs.js!./search.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/scss/search.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src??ref--5-2!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map