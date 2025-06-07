import { chunk2, compact2 } from '../array';

describe('数组工具函数', () => {
  describe('compact2', () => {
    it('应过滤掉所有假值', () => {
      expect(compact2([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
    });

    it('应处理空数组', () => {
      expect(compact2([])).toEqual([]);
    });

    it('应处理全假值数组', () => {
      expect(compact2([null, undefined, false, 0, ''])).toEqual([]);
    });

    it('应保留真值对象', () => {
      const obj = { a: 1 };
      expect(compact2([null, obj, undefined])).toEqual([obj]);
    });

    it('应处理混合类型数组', () => {
      expect(compact2([0, 'hello', null, 42, undefined, false, ''])).toEqual(['hello', 42]);
    });
  });

  describe('chunk2', () => {
    it('输入空数组时应返回空数组', () => {
      expect(chunk2([], 2)).toEqual([]);
    });

    it('当size大于数组长度时应返回包含原数组的单个子数组', () => {
      expect(chunk2([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
    });

    it('当size为0或负数时应抛出错误', () => {
      expect(() => chunk2([1, 2, 3], 0)).toThrow();
      expect(() => chunk2([1, 2, 3], -1)).toThrow();
    });

    it('应按指定size分割数组', () => {
      expect(chunk2([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
      expect(chunk2([1, 2, 3, 4], 2)).toEqual([
        [1, 2],
        [3, 4],
      ]);
    });

    it('应处理数组长度不能被size整除的情况', () => {
      expect(chunk2([1, 2, 3, 4, 5], 3)).toEqual([
        [1, 2, 3],
        [4, 5],
      ]);
    });

    it('应正确处理复杂对象数组', () => {
      const objArray = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
        { id: 4, name: 'David' },
      ];
      expect(chunk2(objArray, 2)).toEqual([
        [
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' },
        ],
        [
          { id: 3, name: 'Charlie' },
          { id: 4, name: 'David' },
        ],
      ]);
    });

    it('应正确处理复杂嵌套对象数组', () => {
      const nestedObjArray = [
        {
          id: 1,
          profile: { name: 'Alice', age: 25 },
          tags: ['dev', 'manager'],
        },
        {
          id: 2,
          profile: { name: 'Bob', age: 30 },
          tags: ['designer'],
        },
        {
          id: 3,
          profile: { name: 'Charlie', age: 28 },
          tags: ['qa', 'support'],
        },
      ];
      expect(chunk2(nestedObjArray, 2)).toEqual([
        [
          {
            id: 1,
            profile: { name: 'Alice', age: 25 },
            tags: ['dev', 'manager'],
          },
          {
            id: 2,
            profile: { name: 'Bob', age: 30 },
            tags: ['designer'],
          },
        ],
        [
          {
            id: 3,
            profile: { name: 'Charlie', age: 28 },
            tags: ['qa', 'support'],
          },
        ],
      ]);
    });
  });
});
