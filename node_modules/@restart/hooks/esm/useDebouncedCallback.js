import { useCallback } from 'react';
import useTimeout from './useTimeout';
/**
 * Creates a debounced function that will invoke the input function after the
 * specified delay.
 *
 * @param fn a function that will be debounced
 * @param delay The milliseconds delay before invoking the function
 */

export default function useDebouncedCallback(fn, delay) {
  var timeout = useTimeout();
  return useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    timeout.set(function () {
      fn.apply(void 0, args);
    }, delay);
  }, [fn, delay]);
}