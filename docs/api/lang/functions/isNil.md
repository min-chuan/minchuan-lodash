[**minchuan-lodash v1.0.1**](../../README.md)

***

[minchuan-lodash](../../README.md) / [lang](../README.md) / isNil

# Function: isNil()

> **isNil**(`value`): value is undefined \| null

Defined in: [lang/index.ts:10](https://github.com/min-chuan/minchuan-lodash/blob/533b720297b85c3df23fa5b0d07b7dcb6c96c518/src/lang/index.ts#L10)

检查值是否为null或undefined

## Parameters

### value

`unknown`

要检查的值

## Returns

value is undefined \| null

如果是null或undefined返回true

## Example

```ts
isNil(null) // true
isNil(undefined) // true
isNil(0) // false
```
