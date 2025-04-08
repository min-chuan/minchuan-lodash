import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/minchuan-lodash/',
  title: 'minchuan-lodash',
  description: 'A lightweight lodash alternative',
  themeConfig: {
    nav: [
      { text: 'API', link: '/api/' }
    ],
    sidebar: {
      '/api/': [
        {
          text: 'Array',
          items: [
            { text: 'chunk', link: '/api/array/functions/chunk.md' },
            { text: 'compact', link: '/api/array/functions/compact.md' },
            { text: 'concat', link: '/api/array/functions/concat.md' }
          ]
        },
        {
          text: 'Function',
          items: [
            { text: 'debounce', link: '/api/function/functions/debounce.md' },
            { text: 'throttle', link: '/api/function/functions/throttle.md' }
          ]
        },
        {
          text: 'Lang',
          items: [
            { text: 'isFunction', link: '/api/lang/functions/isFunction.md' },
            { text: 'isNil', link: '/api/lang/functions/isNil.md' },
            { text: 'isObject', link: '/api/lang/functions/isObject.md' }
          ]
        },
        {
          text: 'Object',
          items: [
            { text: 'cloneDeep', link: '/api/object/functions/cloneDeep.md' },
            { text: 'merge', link: '/api/object/functions/merge.md' },
            { text: 'pick', link: '/api/object/functions/pick.md' }
          ]
        }
      ]
    }
  }
})
