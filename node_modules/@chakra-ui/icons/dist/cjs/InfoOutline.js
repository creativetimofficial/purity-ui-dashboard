"use strict";

exports.__esModule = true;
exports.InfoOutlineIcon = void 0;

var _icon = require("@chakra-ui/icon");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var InfoOutlineIcon = (0, _icon.createIcon)({
  displayName: "InfoOutlineIcon",
  path: /*#__PURE__*/React.createElement("g", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeLinecap: "square",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    fill: "none",
    r: "11",
    stroke: "currentColor"
  }), /*#__PURE__*/React.createElement("line", {
    fill: "none",
    x1: "11.959",
    x2: "11.959",
    y1: "11",
    y2: "17"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11.959",
    cy: "7",
    r: "1",
    stroke: "none"
  }))
});
exports.InfoOutlineIcon = InfoOutlineIcon;
//# sourceMappingURL=InfoOutline.js.map