[**minchuan-lodash v1.0.1**](../../README.md)

***

[minchuan-lodash](../../README.md) / [array](../README.md) / concat

# Function: concat()

> **concat**\<`T`\>(...`arrays`): `T`[]

Defined in: [array/index.ts:38](https://github.com/min-chuan/minchuan-lodash/blob/98394d041c9ab9a54b4fe6833652c86e69f124e2/src/array/index.ts#L38)

合并多个数组或值到一个新数组

## Type Parameters

### T

`T`

数组元素类型

## Parameters

### arrays

...(`T` \| `T`[])[]

要合并的数组或值

## Returns

`T`[]

合并后的新数组

## Example

```ts
concat([1], 2, [3, 4]) // 返回 [1, 2, 3, 4]
```
