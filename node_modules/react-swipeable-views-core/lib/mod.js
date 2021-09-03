"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// Extended version of % with negative integer support.
function mod(n, m) {
  var q = n % m;
  return q < 0 ? q + m : q;
}

var _default = mod;
exports.default = _default;