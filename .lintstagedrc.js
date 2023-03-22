const { defineLintStagedConfig } = require('@ttou/define-config')

module.exports = defineLintStagedConfig({
  '*.{ts,vue}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss,vue}': [
    'stylelint --fix --allow-empty-input',
    'prettier --write'
  ]
})
