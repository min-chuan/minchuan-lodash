/**
 * 检查值是否为null或undefined
 * @param {unknown} value 要检查的值
 * @returns {value is null | undefined} 如果是null或undefined返回true
 * @example
 * isNil(null) // true
 * isNil(undefined) // true
 * isNil(0) // false
 */
export function isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

/**
 * 检查值是否为普通对象(非null)
 * @param {unknown} value 要检查的值
 * @returns {value is object} 如果是对象返回true
 * @example
 * isObject({}) // true
 * isObject(null) // false
 * isObject([]) // true
 */
export function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}

/**
 * 检查值是否为函数
 * @param {unknown} value 要检查的值
 * @returns {value is (...args: unknown[]) => unknown} 如果是函数返回true
 * @example
 * isFunction(() => {}) // true
 * isFunction(class {}) // true
 * isFunction({}) // false
 */
export function isFunction(value: unknown): value is (...args: unknown[]) => unknown {
  return typeof value === 'function';
}
