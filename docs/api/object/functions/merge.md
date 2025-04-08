[**minchuan-lodash v1.0.1**](../../README.md)

***

[minchuan-lodash](../../README.md) / [object](../README.md) / merge

# Function: merge()

> **merge**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Defined in: [object/index.ts:25](https://github.com/min-chuan/minchuan-lodash/blob/533b720297b85c3df23fa5b0d07b7dcb6c96c518/src/object/index.ts#L25)

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
