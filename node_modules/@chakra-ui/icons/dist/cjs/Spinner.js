"use strict";

exports.__esModule = true;
exports.SpinnerIcon = void 0;

var _icon = require("@chakra-ui/icon");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SpinnerIcon = (0, _icon.createIcon)({
  displayName: "SpinnerIcon",
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "28.154%",
    y1: "63.74%",
    x2: "74.629%",
    y2: "17.783%",
    id: "a"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "currentColor",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff",
    stopOpacity: "0",
    offset: "100%"
  }))), /*#__PURE__*/React.createElement("g", {
    transform: "translate(2)",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    stroke: "url(#a)",
    strokeWidth: "4",
    cx: "10",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 2C4.477 2 0 6.477 0 12",
    stroke: "currentColor",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("rect", {
    fill: "currentColor",
    x: "8",
    width: "4",
    height: "4",
    rx: "8"
  })))
});
exports.SpinnerIcon = SpinnerIcon;
//# sourceMappingURL=Spinner.js.map