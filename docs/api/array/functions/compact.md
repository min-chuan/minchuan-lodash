[**minchuan-lodash v1.0.1**](../../README.md)

***

[minchuan-lodash](../../README.md) / [array](../README.md) / compact

# Function: compact()

> **compact**\<`T`\>(`array`): `T`[]

Defined in: [array/index.ts:26](https://github.com/min-chuan/minchuan-lodash/blob/533b720297b85c3df23fa5b0d07b7dcb6c96c518/src/array/index.ts#L26)

过滤数组中的假值(null, undefined, false, 0, "")

## Type Parameters

### T

`T`

数组元素类型

## Parameters

### array

(`undefined` \| `null` \| `false` \| `""` \| `0` \| `T`)[]

要过滤的数组

## Returns

`T`[]

过滤后的数组

## Example

```ts
compact([0, 1, false, 2, '', 3]) // 返回 [1, 2, 3]
```
