[**minchuan-lodash v1.0.1**](../../README.md)

***

[minchuan-lodash](../../README.md) / [object](../README.md) / pick

# Function: pick()

> **pick**\<`T`, `K`\>(`obj`, `keys`): `Pick`\<`T`, `K`\>

Defined in: [object/index.ts:38](https://github.com/min-chuan/minchuan-lodash/blob/98394d041c9ab9a54b4fe6833652c86e69f124e2/src/object/index.ts#L38)

从对象中挑选指定属性

## Type Parameters

### T

`T` *extends* `object`

源对象类型

### K

`K` *extends* `string` \| `number` \| `symbol`

选择的属性键类型

## Parameters

### obj

`T`

源对象

### keys

`K`[]

要挑选的属性键数组

## Returns

`Pick`\<`T`, `K`\>

包含挑选属性的新对象

## Example

```ts
pick({ a: 1, b: 2, c: 3 }, ['a', 'c']) // { a: 1, c: 3 }
```
