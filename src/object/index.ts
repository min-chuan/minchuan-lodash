/**
 * 深拷贝对象(通过JSON序列化实现)
 * @template T 对象类型
 * @param {T} obj 要拷贝的对象
 * @returns {T} 深拷贝后的新对象
 * @example
 * const obj = { a: 1, b: { c: 2 } };
 * const cloned = cloneDeep(obj);
 */
export function cloneDeep<T>(obj: T): T {
  const result = JSON.parse(JSON.stringify(obj));
  return result;
}

/**
 * 合并两个对象(浅合并)
 * @template T 目标对象类型
 * @template U 源对象类型
 * @param {T} target 目标对象
 * @param {U} source 源对象
 * @returns {T & U} 合并后的新对象
 * @example
 * merge({ a: 1 }, { b: 2 }) // { a: 1, b: 2 }
 */
export function merge<T extends object, U extends object>(target: T, source: U): T & U {
  return Object.assign({}, target, source);
}

/**
 * 从对象中挑选指定属性
 * @template T 源对象类型
 * @template K 选择的属性键类型
 * @param {T} obj 源对象
 * @param {K[]} keys 要挑选的属性键数组
 * @returns {Pick<T, K>} 包含挑选属性的新对象
 * @example
 * pick({ a: 1, b: 2, c: 3 }, ['a', 'c']) // { a: 1, c: 3 }
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}
