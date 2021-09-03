"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bindKeyboard;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _keycode = _interopRequireDefault(require("keycode"));

var _reactEventListener = _interopRequireDefault(require("react-event-listener"));

var _reactSwipeableViewsCore = require("react-swipeable-views-core");

function bindKeyboard(MyComponent) {
  var BindKeyboard =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(BindKeyboard, _React$Component);

    function BindKeyboard() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, BindKeyboard);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(BindKeyboard)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.state = {};

      _this.handleKeyDown = function (event) {
        var action;
        var _this$props = _this.props,
            _this$props$axis = _this$props.axis,
            axis = _this$props$axis === void 0 ? 'x' : _this$props$axis,
            children = _this$props.children,
            onChangeIndex = _this$props.onChangeIndex,
            slideCount = _this$props.slideCount;

        switch ((0, _keycode.default)(event)) {
          case 'page down':
          case 'down':
            if (axis === 'y') {
              action = 'decrease';
            } else if (axis === 'y-reverse') {
              action = 'increase';
            }

            break;

          case 'left':
            if (axis === 'x') {
              action = 'decrease';
            } else if (axis === 'x-reverse') {
              action = 'increase';
            }

            break;

          case 'page up':
          case 'up':
            if (axis === 'y') {
              action = 'increase';
            } else if (axis === 'y-reverse') {
              action = 'decrease';
            }

            break;

          case 'right':
            if (axis === 'x') {
              action = 'increase';
            } else if (axis === 'x-reverse') {
              action = 'decrease';
            }

            break;

          default:
            break;
        }

        if (action) {
          var indexLatest = _this.state.index;
          var indexNew = indexLatest;

          if (action === 'increase') {
            indexNew += 1;
          } else {
            indexNew -= 1;
          }

          if (slideCount || children) {
            indexNew = (0, _reactSwipeableViewsCore.mod)(indexNew, slideCount || _react.default.Children.count(children));
          } // Is uncontrolled


          if (_this.props.index === undefined) {
            _this.setState({
              index: indexNew
            });
          }

          if (onChangeIndex) {
            onChangeIndex(indexNew, indexLatest);
          }
        }
      };

      _this.handleChangeIndex = function (index, indexLatest) {
        // Is uncontrolled
        if (_this.props.index === undefined) {
          _this.setState({
            index: index
          });
        }

        if (_this.props.onChangeIndex) {
          _this.props.onChangeIndex(index, indexLatest);
        }
      };

      return _this;
    }

    (0, _createClass2.default)(BindKeyboard, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this.setState({
          index: this.props.index || 0
        });
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var index = nextProps.index;

        if (typeof index === 'number' && index !== this.props.index) {
          this.setState({
            index: index
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            indexProp = _this$props2.index,
            onChangeIndex = _this$props2.onChangeIndex,
            other = (0, _objectWithoutProperties2.default)(_this$props2, ["index", "onChangeIndex"]);
        var index = this.state.index;
        return _react.default.createElement(_reactEventListener.default, {
          target: "window",
          onKeyDown: this.handleKeyDown
        }, _react.default.createElement(MyComponent, (0, _extends2.default)({
          index: index,
          onChangeIndex: this.handleChangeIndex
        }, other)));
      }
    }]);
    return BindKeyboard;
  }(_react.default.Component);

  BindKeyboard.propTypes = process.env.NODE_ENV !== "production" ? {
    /**
     * @ignore
     */
    axis: _propTypes.default.oneOf(['x', 'x-reverse', 'y', 'y-reverse']),

    /**
     * @ignore
     */
    children: _propTypes.default.node,

    /**
     * @ignore
     */
    index: _propTypes.default.number,

    /**
     * @ignore
     */
    onChangeIndex: _propTypes.default.func,

    /**
     * @ignore
     */
    slideCount: _propTypes.default.number
  } : {};
  return BindKeyboard;
}