import { debounce, throttle } from '../function';

describe('function utilities', () => {
  jest.useFakeTimers();

  test('debounce', () => {
    const mockFn = jest.fn();
    const debounced = debounce(mockFn, 100);

    debounced();
    debounced();
    debounced();

    jest.advanceTimersByTime(50);
    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('throttle', () => {
    const mockFn = jest.fn();
    const throttled = throttle(mockFn, 100);

    throttled();
    expect(mockFn).toHaveBeenCalledTimes(1);

    throttled();
    throttled();
    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    throttled();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
