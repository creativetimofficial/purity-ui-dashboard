"use strict";

exports.__esModule = true;
exports.PlusSquareIcon = void 0;

var _icon = require("@chakra-ui/icon");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PlusSquareIcon = (0, _icon.createIcon)({
  displayName: "PlusSquareIcon",
  path: /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("rect", {
    height: "18",
    width: "18",
    rx: "2",
    ry: "2",
    x: "3",
    y: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12h8"
  }))
});
exports.PlusSquareIcon = PlusSquareIcon;
//# sourceMappingURL=PlusSquare.js.map