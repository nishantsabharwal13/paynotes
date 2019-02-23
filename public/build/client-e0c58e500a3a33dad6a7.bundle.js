webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(16);

var _notesReducer = __webpack_require__(110);

//combine reducers
exports.default = (0, _redux.combineReducers)({
  notes: _notesReducer.notesReducer
});

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactRouterDom = __webpack_require__(18);

var _header = __webpack_require__(113);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \".././components/footer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _footer2 = _interopRequireDefault(_footer);

var _loadableComponents = __webpack_require__(34);

var _loadableComponents2 = _interopRequireDefault(_loadableComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// END REACT- ROUTER


// RETRIVES COMPONENTS BASED ON STATUS

// REACT-ROUTER

//import {Router, Route, IndexRoute, browserHistory} from 'react-router';
// REACT
var Status = function Status(_ref) {
  var code = _ref.code,
      children = _ref.children;

  return _react2.default.createElement(_reactRouterDom.Route, { render: function render(_ref2) {
      var staticContext = _ref2.staticContext;

      if (staticContext) staticContext.status = code;
      return children;
    } });
};

//NOT-FOUND COMPONENT
var NotFound = function NotFound() {
  return _react2.default.createElement(
    Status,
    { code: 404 },
    _react2.default.createElement(
      'div',
      { className: 'error-404' },
      _react2.default.createElement('img', { src: '/images/404/error-404.png' })
    )
  );
};

//Loadable Components
var Home = (0, _loadableComponents2.default)(function () {
  return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 115));
});
var Login = (0, _loadableComponents2.default)(function () {
  return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 114));
});

// CLIENT-SERVER SHARED ROUTES
var routes = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(_header2.default, null),
  _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: Home }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/login/:path?', component: Login }),
    _react2.default.createElement(_reactRouterDom.Route, { component: NotFound })
  ),
  _react2.default.createElement(_footer2.default, null)
);

if (false) require.ensure = function (d, c) {
  c(require);
};
if (false) require.include = function () {};

exports.default = routes;

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactRedux = __webpack_require__(50);

var _loadableComponents = __webpack_require__(34);

var _reactRouterDom = __webpack_require__(18);

var _redux = __webpack_require__(16);

var _reduxLogger = __webpack_require__(107);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = __webpack_require__(108);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = __webpack_require__(109);

var _index2 = _interopRequireDefault(_index);

var _routes = __webpack_require__(111);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, _reduxLogger2.default);

// IMPORT COMBINED REDUCERS
// REACT


var initialState = window.INITIAL_STATE;
var store = (0, _redux.createStore)(_index2.default, initialState, middleware);

var Routes = _react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _routes2.default
  )
);

setTimeout(function () {
  (0, _loadableComponents.loadComponents)().then(function () {
    return (0, _reactDom.hydrate)(Routes, document.getElementById('app'));
  });
}, 0);

/***/ })

},[43]);
//# sourceMappingURL=client-e0c58e500a3a33dad6a7.bundle.js.map