"use strict";

exports.__esModule = true;
exports.SunIcon = void 0;

var _icon = require("@chakra-ui/icon");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SunIcon = (0, _icon.createIcon)({
  displayName: "SunIcon",
  path: /*#__PURE__*/React.createElement("g", {
    strokeLinejoin: "round",
    strokeLinecap: "round",
    strokeWidth: "2",
    fill: "none",
    stroke: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 1v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 21v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.22 4.22l1.42 1.42"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.36 18.36l1.42 1.42"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 12h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.22 19.78l1.42-1.42"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.36 5.64l1.42-1.42"
  }))
});
exports.SunIcon = SunIcon;
//# sourceMappingURL=Sun.js.map