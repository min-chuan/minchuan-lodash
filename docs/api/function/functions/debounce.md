[**minchuan-lodash v1.0.1**](../../README.md)

***

[minchuan-lodash](../../README.md) / [function](../README.md) / debounce

# Function: debounce()

> **debounce**\<`T`\>(`func`, `wait`): (...`args`) => `void`

Defined in: [function/index.ts:11](https://github.com/min-chuan/minchuan-lodash/blob/98394d041c9ab9a54b4fe6833652c86e69f124e2/src/function/index.ts#L11)

创建一个防抖函数，在等待时间内只执行最后一次调用

## Type Parameters

### T

`T` *extends* (...`args`) => `unknown`

函数类型

## Parameters

### func

`T`

要防抖的函数

### wait

`number`

等待时间(毫秒)

## Returns

防抖后的函数

> (...`args`): `void`

### Parameters

#### args

...`Parameters`\<`T`\>

### Returns

`void`

## Example

```ts
const debouncedFn = debounce(() => console.log('resized'), 200);
window.addEventListener('resize', debouncedFn);
```
