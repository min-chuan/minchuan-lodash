[**minchuan-lodash v1.0.1**](../../README.md)

***

[minchuan-lodash](../../README.md) / [lang](../README.md) / isFunction

# Function: isFunction()

> **isFunction**(`value`): `value is (args: unknown[]) => unknown`

Defined in: [lang/index.ts:36](https://github.com/min-chuan/minchuan-lodash/blob/98394d041c9ab9a54b4fe6833652c86e69f124e2/src/lang/index.ts#L36)

检查值是否为函数

## Parameters

### value

`unknown`

要检查的值

## Returns

`value is (args: unknown[]) => unknown`

如果是函数返回true

## Example

```ts
isFunction(() => {}) // true
isFunction(class {}) // true
isFunction({}) // false
```
