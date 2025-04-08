[**minchuan-lodash v1.0.1**](../../README.md)

***

[minchuan-lodash](../../README.md) / [array](../README.md) / chunk

# Function: chunk()

> **chunk**\<`T`\>(`array`, `size`): `T`[][]

Defined in: [array/index.ts:10](https://github.com/min-chuan/minchuan-lodash/blob/533b720297b85c3df23fa5b0d07b7dcb6c96c518/src/array/index.ts#L10)

将数组分割成指定大小的子数组

## Type Parameters

### T

`T`

数组元素类型

## Parameters

### array

`T`[]

要分割的原始数组

### size

`number`

每个子数组的大小

## Returns

`T`[][]

分割后的二维数组

## Example

```ts
chunk([1, 2, 3, 4], 2) // 返回 [[1, 2], [3, 4]]
```
