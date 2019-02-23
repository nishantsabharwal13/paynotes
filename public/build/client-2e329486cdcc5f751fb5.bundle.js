webpackJsonp([2],{

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


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.notesReducer = notesReducer;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function notesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    notes: [],
    count: 0
  };
  var action = arguments[1];


  switch (action.type) {
    case 'GET_FABRICS':
      return _extends({}, state, {
        notes: [].concat(_toConsumableArray(action.payload.fabrics)),
        count: action.payload.count
      });
  }
  return state;
}

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

var _header = __webpack_require__(112);

var _header2 = _interopRequireDefault(_header);

var _loadableComponents = __webpack_require__(34);

var _loadableComponents2 = _interopRequireDefault(_loadableComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// END REACT- ROUTER


// RETRIVES COMPONENTS BASED ON STATUS
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

// REACT-ROUTER

//import {Router, Route, IndexRoute, browserHistory} from 'react-router';
// REACT
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
  return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 114));
});
var Login = (0, _loadableComponents2.default)(function () {
  return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 115));
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
  )
);

if (false) require.ensure = function (d, c) {
  c(require);
};
if (false) require.include = function () {};

exports.default = routes;

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h1',
        null,
        'Let us Header'
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

Header.propTypes = {
  name: _propTypes2.default.string
};

Header.defaultProps = {};

exports.default = Header;

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
//# sourceMappingURL=client-2e329486cdcc5f751fb5.bundle.js.map