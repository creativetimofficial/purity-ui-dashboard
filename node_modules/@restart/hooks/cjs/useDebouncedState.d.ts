import { Dispatch, SetStateAction } from 'react';
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
export default function useDebouncedState<T>(initialState: T, delay: number): [T, Dispatch<SetStateAction<T>>];
