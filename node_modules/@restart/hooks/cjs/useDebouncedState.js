"use strict";

exports.__esModule = true;
exports.default = useDebouncedState;

var _react = require("react");

var _useDebouncedCallback = _interopRequireDefault(require("./useDebouncedCallback"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Similar to `useState`, except the setter function is debounced by
 * the specified delay.
 *
 * ```ts
 * const [value, setValue] = useDebouncedState('test', 500)
 *
 * setValue('test2')
 * ```
 *
 * @param initialState initial state value
 * @param delay The milliseconds delay before a new value is set
 */
function useDebouncedState(initialState, delay) {
  var _useState = (0, _react.useState)(initialState),
      state = _useState[0],
      setState = _useState[1];

  var debouncedSetState = (0, _useDebouncedCallback.default)(setState, delay);
  return [state, debouncedSetState];
}