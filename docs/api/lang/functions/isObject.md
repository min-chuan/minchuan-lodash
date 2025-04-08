[**minchuan-lodash v1.0.1**](../../README.md)

***

[minchuan-lodash](../../README.md) / [lang](../README.md) / isObject

# Function: isObject()

> **isObject**(`value`): `value is object`

Defined in: [lang/index.ts:23](https://github.com/min-chuan/minchuan-lodash/blob/533b720297b85c3df23fa5b0d07b7dcb6c96c518/src/lang/index.ts#L23)

检查值是否为普通对象(非null)

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is object`

如果是对象返回true

## Example

```ts
isObject({}) // true
isObject(null) // false
isObject([]) // true
```
