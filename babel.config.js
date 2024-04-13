// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
/**
 * @type {import('@babel/core').TransformOptions}
 */
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'vue3',
        ts: true
      }
    ]
  ]
}
