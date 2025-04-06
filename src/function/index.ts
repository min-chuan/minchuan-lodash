/**
 * 创建一个防抖函数，在等待时间内只执行最后一次调用
 * @template T 函数类型
 * @param {T} func 要防抖的函数
 * @param {number} wait 等待时间(毫秒)
 * @returns {(...args: Parameters<T>) => void} 防抖后的函数
 * @example
 * const debouncedFn = debounce(() => console.log('resized'), 200);
 * window.addEventListener('resize', debouncedFn);
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * 创建一个节流函数，在限流时间内只执行一次调用
 * @template T 函数类型
 * @param {T} func 要节流的函数
 * @param {number} limit 限流时间(毫秒)
 * @returns {(...args: Parameters<T>) => void} 节流后的函数
 * @example
 * const throttledFn = throttle(() => console.log('scrolled'), 200);
 * window.addEventListener('scroll', throttledFn);
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
