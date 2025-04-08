[**minchuan-lodash v1.0.1**](../../README.md)

***

[minchuan-lodash](../../README.md) / [function](../README.md) / throttle

# Function: throttle()

> **throttle**\<`T`\>(`func`, `limit`): (...`args`) => `void`

Defined in: [function/index.ts:32](https://github.com/min-chuan/minchuan-lodash/blob/533b720297b85c3df23fa5b0d07b7dcb6c96c518/src/function/index.ts#L32)

创建一个节流函数，在限流时间内只执行一次调用

## Type Parameters

### T

`T` *extends* (...`args`) => `unknown`

函数类型

## Parameters

### func

`T`

要节流的函数

### limit

`number`

限流时间(毫秒)

## Returns

节流后的函数

> (...`args`): `void`

### Parameters

#### args

...`Parameters`\<`T`\>

### Returns

`void`

## Example

```ts
const throttledFn = throttle(() => console.log('scrolled'), 200);
window.addEventListener('scroll', throttledFn);
```
