[**minchuan-lodash v1.0.1**](../../README.md)

***

[minchuan-lodash](../../README.md) / [function](../README.md) / throttle

# Function: throttle()

> **throttle**\<`T`\>(`func`, `limit`): (...`args`) => `void`

Defined in: [function/index.ts:32](https://github.com/min-chuan/minchuan-lodash/blob/98394d041c9ab9a54b4fe6833652c86e69f124e2/src/function/index.ts#L32)

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
