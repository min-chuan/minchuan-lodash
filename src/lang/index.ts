export function isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

export function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}

export function isFunction(value: unknown): value is (...args: unknown[]) => unknown {
  return typeof value === 'function';
}
