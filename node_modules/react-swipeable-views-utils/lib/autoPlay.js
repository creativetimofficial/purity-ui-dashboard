"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = autoPlay;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shallowEqual = require("shallow-equal");

var _reactEventListener = _interopRequireDefault(require("react-event-listener"));

var _reactSwipeableViewsCore = require("react-swipeable-views-core");

function autoPlay(MyComponent) {
  var AutoPlay =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(AutoPlay, _React$Component);

    function AutoPlay(props) {
      var _this;

      (0, _classCallCheck2.default)(this, AutoPlay);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AutoPlay).call(this, props));
      _this.timer = null;
      _this.state = {};

      _this.handleInterval = function () {
        var _this$props = _this.props,
            children = _this$props.children,
            direction = _this$props.direction,
            onChangeIndex = _this$props.onChangeIndex,
            slideCount = _this$props.slideCount;
        var indexLatest = _this.state.index;
        var indexNew = indexLatest;

        if (direction === 'incremental') {
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

      _this.handleSwitching = function (index, type) {
        if (_this.timer) {
          clearInterval(_this.timer);
          _this.timer = null;
        } else if (type === 'end') {
          _this.startInterval();
        }

        if (_this.props.onSwitching) {
          _this.props.onSwitching(index, type);
        }
      };

      _this.handleVisibilityChange = function (e) {
        if (e.target.hidden) {
          clearInterval(_this.timer);
        } else {
          _this.startInterval();
        }
      };

      _this.state.index = props.index || 0;
      return _this;
    }

    (0, _createClass2.default)(AutoPlay, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.startInterval();
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
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var shouldResetInterval = !(0, _shallowEqual.shallowEqualObjects)({
          index: prevProps.index,
          interval: prevProps.interval,
          autoplay: prevProps.autoplay
        }, {
          index: this.props.index,
          interval: this.props.interval,
          autoplay: this.props.autoplay
        });

        if (shouldResetInterval) {
          this.startInterval();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearInterval(this.timer);
      }
    }, {
      key: "startInterval",
      value: function startInterval() {
        var _this$props2 = this.props,
            autoplay = _this$props2.autoplay,
            interval = _this$props2.interval;
        clearInterval(this.timer);

        if (autoplay) {
          this.timer = setInterval(this.handleInterval, interval);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props3 = this.props,
            autoplay = _this$props3.autoplay,
            direction = _this$props3.direction,
            indexProp = _this$props3.index,
            interval = _this$props3.interval,
            onChangeIndex = _this$props3.onChangeIndex,
            other = (0, _objectWithoutProperties2.default)(_this$props3, ["autoplay", "direction", "index", "interval", "onChangeIndex"]);
        var index = this.state.index;

        if (!autoplay) {
          return _react.default.createElement(MyComponent, (0, _extends2.default)({
            index: index,
            onChangeIndex: onChangeIndex
          }, other));
        }

        return _react.default.createElement(_reactEventListener.default, {
          target: "document",
          onVisibilityChange: this.handleVisibilityChange
        }, _react.default.createElement(MyComponent, (0, _extends2.default)({
          index: index,
          onChangeIndex: this.handleChangeIndex,
          onSwitching: this.handleSwitching
        }, other)));
      }
    }]);
    return AutoPlay;
  }(_react.default.Component);

  AutoPlay.propTypes = process.env.NODE_ENV !== "production" ? {
    /**
     * If `false`, the auto play behavior is disabled.
     */
    autoplay: _propTypes.default.bool,

    /**
     * @ignore
     */
    children: _propTypes.default.node,

    /**
     * This is the auto play direction.
     */
    direction: _propTypes.default.oneOf(['incremental', 'decremental']),

    /**
     * @ignore
     */
    index: _propTypes.default.number,

    /**
     * Delay between auto play transitions (in ms).
     */
    interval: _propTypes.default.number,

    /**
     * @ignore
     */
    onChangeIndex: _propTypes.default.func,

    /**
     * @ignore
     */
    onSwitching: _propTypes.default.func,

    /**
     * @ignore
     */
    slideCount: _propTypes.default.number
  } : {};
  AutoPlay.defaultProps = {
    autoplay: true,
    direction: 'incremental',
    interval: 3000
  };
  return AutoPlay;
}