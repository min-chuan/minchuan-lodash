/**
 * 将数组分割成指定大小的子数组
 * @template T 数组元素类型
 * @param {T[]} array 要分割的原始数组
 * @param {number} size 每个子数组的大小
 * @returns {T[][]} 分割后的二维数组
 * @example
 * chunk([1, 2, 3, 4], 2) // 返回 [[1, 2], [3, 4]]
 */
export function chunk<T>(array: T[], size: number): T[][] {
  if (size <= 0) throw new Error('Size must be greater than 0');
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

/**
 * 过滤数组中的假值(null, undefined, false, 0, "")
 * @template T 数组元素类型
 * @param {(T | null | undefined | false | 0 | '')[]} array 要过滤的数组
 * @returns {T[]} 过滤后的数组
 * @example
 * compact([0, 1, false, 2, '', 3]) // 返回 [1, 2, 3]
 */
export function compact<T>(array: (T | null | undefined | false | 0 | '')[]): T[] {
  return array.filter(Boolean) as T[];
}

/**
 * 合并多个数组或值到一个新数组
 * @template T 数组元素类型
 * @param {...(T | T[])} arrays 要合并的数组或值
 * @returns {T[]} 合并后的新数组
 * @example
 * concat([1], 2, [3, 4]) // 返回 [1, 2, 3, 4]
 */
export function concat<T>(...arrays: (T | T[])[]): T[] {
  return arrays.flat() as T[];
}

/**
 * 将数组分割成指定大小的子数组
 * @template T 数组元素类型
 * @param {T[]} array 要分割的原始数组
 * @param {number} size 每个子数组的大小
 * @returns {T[][]} 分割后的二维数组
 * @example
 * chunk([1,2,3,4], 2) // 返回 [[1,2],[3,4]]
 */
export function chunk2<T>(array: T[], size: number): T[][] {
  if (size <= 0) throw new Error('Size must be greater than 0');

  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

/**
 * 过滤数组中的假值
 * @template T 数组元素类型
 * @param {(T | null | undefined | 0 | '' | false)[]} array 要过滤的数组
 * @returns {T[]} 过滤后的数组
 * @example
 * compact([0, 1, false, 2, '', 3]) // 返回 [1, 2, 3]
 */
export function compact2<T>(array: (T | null | undefined | false | 0 | '')[]): T[] {
  return array.filter((ele) => !!ele) as T[];
}

/**
 * 合并多个数组或值到一个数组
 * @template T 数组元素类型
 * @param {...(T | T[])} arrays 要合并的数组或值
 * @return {T[]} 合并后的新数组
 * @example
 * concat([1], 2, [3, 4]) // 返回 [1, 2, 3, 4]
 */
export function concat2<T>(...arrays: (T | T[])[]): T[] {}
