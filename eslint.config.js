// ESLint v9+ 配置文件
import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';

/**
 * ESLint配置说明：
 * 1. 使用ESLint v9+新配置格式
 * 2. 继承ESLint和TypeScript推荐规则
 * 3. 支持TypeScript类型检查
 * 4. 自定义规则覆盖
 */
export default tseslint.config(
  // 继承ESLint推荐规则
  js.configs.recommended,

  // 继承TypeScript推荐规则
  ...tseslint.configs.recommended,

  // Prettier配置
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // 自定义配置
  {
    // 语言选项配置
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020, // 使用ES2020语法
        sourceType: 'module', // 使用ES模块
        project: './tsconfig.json', // 关联TS配置
      },
    },

    // 自定义规则
    rules: {
      // 关闭显式函数返回类型要求
      '@typescript-eslint/explicit-function-return-type': 'off',

      // 禁止使用any类型(警告级别)
      '@typescript-eslint/no-explicit-any': 'warn',

      // 缩进2个空格
      indent: ['error', 2],

      // 使用单引号
      quotes: ['error', 'single'],

      // 必须使用分号
      semi: ['error', 'always'],
    },
  }
);
