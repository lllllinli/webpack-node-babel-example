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
	
	var _koaLogger = __webpack_require__(/*! koa-logger */ 4);
	
	var _koaLogger2 = _interopRequireDefault(_koaLogger);
	
	var _koaStatic = __webpack_require__(/*! koa-static */ 5);
	
	var _koaStatic2 = _interopRequireDefault(_koaStatic);
	
	var _koaRoute = __webpack_require__(/*! koa-route */ 6);
	
	var _koaRoute2 = _interopRequireDefault(_koaRoute);
	
	var _koaJade = __webpack_require__(/*! koa-jade */ 7);
	
	var _koaJade2 = _interopRequireDefault(_koaJade);
	
	var _path = __webpack_require__(/*! path */ 8);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _routerHandler = __webpack_require__(/*! ./router-handler */ 9);
	
	var _routerHandler2 = _interopRequireDefault(_routerHandler);
	
	var _api = __webpack_require__(/*! ./api/api */ 18);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _open = __webpack_require__(/*! open */ 19);
	
	var _open2 = _interopRequireDefault(_open);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// node tools
	// ES6 ES7 套件
	
	
	var app = (0, _koa2.default)();
	//
	
	// web app
	
	var port = 3000;
	var hostname = "localhost:";
	var staticPath = _path2.default.join(__dirname, "..", "./static");
	var viewPath = _path2.default.join(__dirname, "/views");
	var jade = new _koaJade2.default({
	  viewPath: _path2.default.join("./src", "/server", "/views"),
	  debug: true,
	  app: app
	});
	var isDev = function () {
	  return process.env.NODE_ENV === 'dev';
	}();
	
	app.use((0, _koaLogger2.default)());
	// 靜態檔案路徑
	app.use((0, _koaStatic2.default)("./static"));
	// API
	(0, _api2.default)(app);
	// react-router handler
	app.use(_routerHandler2.default);
	process.env.HELLO_MSG;
	// start app
	app.listen(port, function () {
	  console.info('==> ✅  Server is listening');
	  console.info('==> 🌎  Go to http://%s:%s', hostname, port);
	  if (isDev) {
	    (0, _open2.default)("http://localhost:3000");
	  }
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
  !*** external "koa-logger" ***!
  \*****************************/
/***/ function(module, exports) {

	module.exports = require("koa-logger");

/***/ },
/* 5 */
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ function(module, exports) {

	module.exports = require("koa-static");

/***/ },
/* 6 */
/*!****************************!*\
  !*** external "koa-route" ***!
  \****************************/
/***/ function(module, exports) {

	module.exports = require("koa-route");

/***/ },
/* 7 */
/*!***************************!*\
  !*** external "koa-jade" ***!
  \***************************/
/***/ function(module, exports) {

	module.exports = require("koa-jade");

/***/ },
/* 8 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 9 */
/*!***************************************!*\
  !*** ../src/server/router-handler.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _callee;
	
	var _koaJade = __webpack_require__(/*! koa-jade */ 7);
	
	var _koaJade2 = _interopRequireDefault(_koaJade);
	
	var _react = __webpack_require__(/*! react */ 10);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(/*! react-dom/server */ 11);
	
	var _server2 = _interopRequireDefault(_server);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 12);
	
	var _routes = __webpack_require__(/*! ./routes */ 13);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _marked = [_callee].map(regeneratorRuntime.mark);
	
	function _callee(next) {
	  var _this = this;
	
	  var location;
	  return regeneratorRuntime.wrap(function _callee$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          location = this.path;
	          /* - use React Router - */
	
	          (0, _reactRouter.match)({ routes: _routes2.default, location: location }, function (error, redirectLocation, renderProps) {
	            if (redirectLocation) {
	              _this.redirect(redirectLocation.pathname + redirectLocation.search, '/');
	              return;
	            }
	
	            if (error || !renderProps) {
	              return;
	            }
	
	            var content = _server2.default.renderToString(_react2.default.createElement(_reactRouter.RouterContext, renderProps));
	            // 每一頁引入 , 不同的 client js , 不同的 client css
	            var webTitle = 'Koa-jade: a Jade middleware for Ko';
	            var templeteOptions = {
	              title: webTitle,
	              content: content,
	              clientJs: ''
	            };
	
	            _this.render('index.jade', templeteOptions);
	          });
	          /* - match end - */
	          _context.next = 4;
	          return next;
	
	        case 4:
	        case "end":
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this);
	}

/***/ },
/* 10 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 11 */
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 12 */
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 13 */
/*!*******************************!*\
  !*** ../src/server/routes.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(/*! react */ 10);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 12);
	
	var _Main = __webpack_require__(/*! ./Main */ 14);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	var _About = __webpack_require__(/*! ./pages/About/About */ 16);
	
	var _About2 = _interopRequireDefault(_About);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * The React Router routes for both the server and the client.
	 */
	// 這裡要動態仔入，對應的頁面
	
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
/* 14 */
/*!*****************************!*\
  !*** ../src/server/Main.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 10);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Header = __webpack_require__(/*! ./widgets/Header/Header */ 15);
	
	var _Header2 = _interopRequireDefault(_Header);
	
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
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Header2.default, null),
	        this.props.children
	      );
	    }
	  }]);
	
	  return Main;
	}(_react2.default.Component);
	
	;
	
	exports.default = Main;

/***/ },
/* 15 */
/*!**********************************************!*\
  !*** ../src/server/widgets/Header/Header.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 10);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// import MyComponent from '../../widgets/MyComponent/MyComponent';
	
	var Header = function (_Component) {
	  _inherits(Header, _Component);
	
	  function Header() {
	    _classCallCheck(this, Header);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
	  }
	
	  _createClass(Header, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "nav",
	        { className: "navbar navbar-inverse navbar-fixed-top" },
	        _react2.default.createElement(
	          "div",
	          { className: "container" },
	          _react2.default.createElement(
	            "div",
	            { className: "navbar-header" },
	            _react2.default.createElement(
	              "button",
	              { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false" },
	              _react2.default.createElement(
	                "span",
	                { className: "sr-only" },
	                "Toggle navigation"
	              ),
	              _react2.default.createElement("span", { className: "icon-bar" }),
	              _react2.default.createElement("span", { className: "icon-bar" }),
	              _react2.default.createElement("span", { className: "icon-bar" })
	            ),
	            _react2.default.createElement(
	              "a",
	              { "class": "navbar-brand", href: "#" },
	              "Brand"
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { id: "navbar", className: "collapse navbar-collapse" },
	            _react2.default.createElement(
	              "ul",
	              { className: "nav navbar-nav" },
	              _react2.default.createElement(
	                "li",
	                null,
	                _react2.default.createElement(
	                  "a",
	                  { href: "#/about" },
	                  "About"
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Header;
	}(_react.Component);
	
	;
	
	Header.propTypes = {};
	Header.defaultProps = {};
	
	exports.default = Header;

/***/ },
/* 16 */
/*!******************************************!*\
  !*** ../src/server/pages/About/About.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 10);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _nodeFetch = __webpack_require__(/*! node-fetch */ 17);
	
	var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	* use node fetch
	**/
	// fetch('https://github.com/')
	//     .then(function(res) {
	//         return res.text();
	//     }).then(function(body) {
	//         console.log(body);
	//     });
	//
	
	// function getVideoInfo(callback) {
	//   fetch('http://test-eye-of-sauron.azurewebsites.net/').then(function(res) {
	//       return res.json();
	//   }).then(function(json) {
	//       console.log(`JAVA json:${json._links.videos.href}`);
	//       callback(json);
	//   });
	// }
	
	var About = function (_React$Component) {
	  _inherits(About, _React$Component);
	
	  function About(props) {
	    _classCallCheck(this, About);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(About).call(this, props));
	
	    _this.state = {
	      count: props.initialCount,
	      videos: props.videos
	    };
	    // ::this._handler;
	    // ::this._renderVedioInfo;
	    return _this;
	  }
	
	  _createClass(About, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {}
	    //todo fetch
	    // this._handler();
	
	    // _handler() {
	    //   getVideoInfo((json) => {
	    //
	    //   });
	    // }
	    // _renderVedioInfo() {
	    //   let vedioInfo = (<div></div>);
	    //   if (!this.state.videos._links) {
	    //     vedioInfo = (
	    //       <table>
	    //         <tr>
	    //           <td>videos link:</td>
	    //           <td></td>
	    //         </tr>
	    //       </table>
	    //     );
	    //   }
	    //   return vedioInfo;
	    // }
	
	  }, {
	    key: "render",
	    value: function render() {
	      var msg = "Abbot Page";
	      // const vedioInfo = this._renderVedioInfo();
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "h2",
	          null,
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
	
	About.propTypes = {
	  initialCount: _react2.default.PropTypes.number,
	  videos: _react2.default.PropTypes.object
	};
	About.defaultProps = {
	  initialCount: 10,
	  videos: null
	};
	
	exports.default = About;

/***/ },
/* 17 */
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ function(module, exports) {

	module.exports = require("node-fetch");

/***/ },
/* 18 */
/*!********************************!*\
  !*** ../src/server/api/api.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (app) {
	  app.use(_koaRoute2.default.get(apiPath.books, books));
	};
	
	var _koaRoute = __webpack_require__(/*! koa-route */ 6);
	
	var _koaRoute2 = _interopRequireDefault(_koaRoute);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _marked = [books].map(regeneratorRuntime.mark);
	
	var apiPath = {
	  books: "/api/books"
	};
	
	function books(next) {
	  return regeneratorRuntime.wrap(function books$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          this.body = '{\"name\":\"javascript cookbook\"}';
	
	        case 1:
	        case "end":
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this);
	};

/***/ },
/* 19 */
/*!***********************!*\
  !*** external "open" ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = require("open");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map