"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _warning = _interopRequireDefault(require("warning"));

var checkIndexBounds = function checkIndexBounds(props) {
  var index = props.index,
      children = props.children;

  var childrenCount = _react.default.Children.count(children);

  process.env.NODE_ENV !== "production" ? (0, _warning.default)(index >= 0 && index <= childrenCount, "react-swipeable-view: the new index: ".concat(index, " is out of bounds: [0-").concat(childrenCount, "].")) : void 0;
};

var _default = checkIndexBounds;
exports.default = _default;