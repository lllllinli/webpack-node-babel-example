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

	module.exports = __webpack_require__(/*! /Users/standley/Documents/work_space/webpack-server-example/src/server/server */1);


/***/ },
/* 1 */
/*!*******************************!*\
  !*** ../src/server/server.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";
	
	var _babelPolyfill = __webpack_require__(/*! babel-polyfill */ 2);
	
	var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);
	
	var _koa = __webpack_require__(/*! koa */ 3);
	
	var _koa2 = _interopRequireDefault(_koa);
	
	var _koaStatic = __webpack_require__(/*! koa-static */ 4);
	
	var _koaStatic2 = _interopRequireDefault(_koaStatic);
	
	var _koaJade = __webpack_require__(/*! koa-jade */ 5);
	
	var _koaJade2 = _interopRequireDefault(_koaJade);
	
	var _path = __webpack_require__(/*! path */ 6);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _react = __webpack_require__(/*! react */ 7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(/*! react-dom/server */ 8);
	
	var _server2 = _interopRequireDefault(_server);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 9);
	
	var _routes = __webpack_require__(/*! ./routes */ 10);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// React
	
	// Jade - Html Templete
	
	// web app
	
	
	var port = 3000;
	// node tools
	// ES6 ES7 套件
	
	var hostname = "localhost:";
	var app = (0, _koa2.default)();
	var staticPath = _path2.default.join(__dirname, "..", "./static");
	var viewPath = _path2.default.join(__dirname, "/views");
	var jade = new _koaJade2.default({
	  viewPath: _path2.default.join("./src", "/server", "/views"),
	  debug: true,
	  app: app
	});
	
	// 靜態檔案路徑
	app.use((0, _koaStatic2.default)("./static"));
	
	app.use(regeneratorRuntime.mark(function _callee(next) {
	  var _this = this;
	
	  var location;
	  return regeneratorRuntime.wrap(function _callee$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          location = this.path;
	          // use react router
	
	          (0, _reactRouter.match)({ routes: _routes2.default, location: location }, function (error, redirectLocation, renderProps) {
	            if (redirectLocation) {
	              _this.redirect(redirectLocation.pathname + redirectLocation.search, '/');
	              return;
	            }
	
	            if (error || !renderProps) {
	              return;
	            }
	
	            var content = _server2.default.renderToString(_react2.default.createElement(_reactRouter.RouterContext, renderProps));
	            var webTitle = 'Koa-jade: a Jade middleware for Koa';
	
	            //todo framework
	
	            _this.render('index.jade', {
	              title: webTitle,
	              content: content
	            });
	          }); /* - match end - */
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, "../src/server"))

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
/*!***************************!*\
  !*** external "koa-jade" ***!
  \***************************/
/***/ function(module, exports) {

	module.exports = require("koa-jade");

/***/ },
/* 6 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 7 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 8 */
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 9 */
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 10 */
/*!*******************************!*\
  !*** ../src/server/routes.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(/*! react */ 7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 9);
	
	var _Main = __webpack_require__(/*! ./Main */ 11);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	var _About = __webpack_require__(/*! ./pages/About/About */ 12);
	
	var _About2 = _interopRequireDefault(_About);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * The React Router routes for both the server and the client.
	 */
	
	var routes = _react2.default.createElement(
	  _reactRouter.Router,
	  null,
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: "/", component: _Main2.default },
	    _react2.default.createElement(_reactRouter.Route, { path: "/about", component: _About2.default })
	  )
	);
	
	module.exports = routes;

/***/ },
/* 11 */
/*!*****************************!*\
  !*** ../src/server/Main.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 7);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Main = function (_React$Component) {
	  _inherits(Main, _React$Component);
	
	  function Main() {
	    _classCallCheck(this, Main);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).apply(this, arguments));
	  }
	
	  _createClass(Main, [{
	    key: "render",
	    value: function render() {
	      var msg = "Main - Connent";
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "h1",
	          null,
	          msg
	        ),
	        this.props.children
	      );
	    }
	  }]);
	
	  return Main;
	}(_react2.default.Component);
	
	;
	
	exports.default = Main;

/***/ },
/* 12 */
/*!******************************************!*\
  !*** ../src/server/pages/About/About.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 7);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var About = function (_React$Component) {
	  _inherits(About, _React$Component);
	
	  function About(props) {
	    _classCallCheck(this, About);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(About).call(this, props));
	
	    _this.state = { count: props.initialCount };
	    _this._handler.bind(_this);
	    return _this;
	  }
	
	  _createClass(About, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this._handler();
	    }
	  }, {
	    key: "_handler",
	    value: function _handler() {
	      console.log("on handler");
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var msg = "Abbot Page";
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "h2",
	          { className: "title" },
	          msg
	        ),
	        _react2.default.createElement(
	          "div",
	          null,
	          "counts: ",
	          this.state.count
	        )
	      );
	    }
	  }]);
	
	  return About;
	}(_react2.default.Component);
	
	;
	
	About.propTypes = { initialCount: _react2.default.PropTypes.number };
	About.defaultProps = { initialCount: 10 };
	
	exports.default = About;

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map