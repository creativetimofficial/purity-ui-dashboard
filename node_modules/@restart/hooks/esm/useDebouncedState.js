import { useState } from 'react';
import useDebouncedCallback from './useDebouncedCallback';
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

export default function useDebouncedState(initialState, delay) {
  var _useState = useState(initialState),
      state = _useState[0],
      setState = _useState[1];

  var debouncedSetState = useDebouncedCallback(setState, delay);
  return [state, debouncedSetState];
}