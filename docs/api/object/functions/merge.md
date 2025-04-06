[**minchuan-lodash v1.0.1**](../../README.md)

***

[minchuan-lodash](../../README.md) / [object](../README.md) / merge

# Function: merge()

> **merge**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Defined in: [object/index.ts:24](https://github.com/min-chuan/minchuan-lodash/blob/98394d041c9ab9a54b4fe6833652c86e69f124e2/src/object/index.ts#L24)

合并两个对象(浅合并)

## Type Parameters

### T

`T` *extends* `object`

目标对象类型

### U

`U` *extends* `object`

源对象类型

## Parameters

### target

`T`

目标对象

### source

`U`

源对象

## Returns

`T` & `U`

合并后的新对象

## Example

```ts
merge({ a: 1 }, { b: 2 }) // { a: 1, b: 2 }
```
