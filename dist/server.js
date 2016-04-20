/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! /Users/standley/Documents/work_space/webpack-server-example/src/server */1);


/***/ },
/* 1 */
/*!************************!*\
  !*** ../src/server.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";
	
	var _babelPolyfill = __webpack_require__(/*! babel-polyfill */ 2);
	
	var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);
	
	var _koa = __webpack_require__(/*! koa */ 3);
	
	var _koa2 = _interopRequireDefault(_koa);
	
	var _koaStatic = __webpack_require__(/*! koa-static */ 4);
	
	var _koaStatic2 = _interopRequireDefault(_koaStatic);
	
	var _path = __webpack_require__(/*! path */ 5);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _server = __webpack_require__(/*! react-dom/server */ 6);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import routes from "./router";
	
	//react
	// ES6 ES7 套件
	var port = 3000;
	// node tools
	
	// web app
	
	var hostname = "localhost:";
	var app = (0, _koa2.default)();
	
	var staticPath = _path2.default.join(__dirname, "./static");
	var viewPath = _path2.default.join(__dirname, "/views");
	
	// 靜態檔案路徑
	app.use((0, _koaStatic2.default)(staticPath));
	
	app.use(regeneratorRuntime.mark(function _callee(next) {
	  return regeneratorRuntime.wrap(function _callee$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.next = 2;
	          return function () {};
	
	        case 2:
	        case "end":
	          return _context.stop();
	      }
	    }
	  }, _callee, this);
	}));
	
	app.listen(port, function () {
	  console.info('==> ✅  Server is listening');
	  console.info('==> 🌎  Go to http://%s:%s', hostname, port);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, "../src"))

/***/ },
/* 2 */
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/***/ function(module, exports) {

	module.exports = require("babel-polyfill");

/***/ },
/* 3 */
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ function(module, exports) {

	module.exports = require("koa");

/***/ },
/* 4 */
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ function(module, exports) {

	module.exports = require("koa-static");

/***/ },
/* 5 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 6 */
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 7 */
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map