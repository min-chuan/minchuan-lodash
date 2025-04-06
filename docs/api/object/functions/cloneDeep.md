[**minchuan-lodash v1.0.1**](../../README.md)

***

[minchuan-lodash](../../README.md) / [object](../README.md) / cloneDeep

# Function: cloneDeep()

> **cloneDeep**\<`T`\>(`obj`): `T`

Defined in: [object/index.ts:10](https://github.com/min-chuan/minchuan-lodash/blob/98394d041c9ab9a54b4fe6833652c86e69f124e2/src/object/index.ts#L10)

深拷贝对象(通过JSON序列化实现)

## Type Parameters

### T

`T`

对象类型

## Parameters

### obj

`T`

要拷贝的对象

## Returns

`T`

深拷贝后的新对象

## Example

```ts
const obj = { a: 1, b: { c: 2 } };
const cloned = cloneDeep(obj);
```
