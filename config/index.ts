import { resolve } from 'node:path'

import NutUIResolver from '@nutui/nutui-taro/dist/resolver'
import { defineConfig, type UserConfigExport } from '@tarojs/cli'
import Components from 'unplugin-vue-components/webpack'

import devConfig from './dev'
import prodConfig from './prod'

export default defineConfig(async (merge, { command, mode }) => {
  const baseConfig: UserConfigExport = {
    projectName: 'taro-template',
    date: '2023-3-22',
    designWidth(input) {
      if (input?.file?.replace(/\\+/g, '/').indexOf('@nutui') > -1) {
        return 375
      }
      return 750
    },
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      828: 1.81 / 2,
      375: 2 / 1
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    plugins: ['@tarojs/plugin-html', '@tarojs/plugin-http'],
    alias: {
      '@/apis': resolve(__dirname, '..', 'src/apis'),
      '@/static': resolve(__dirname, '..', 'src/static'),
      '@/store': resolve(__dirname, '..', 'src/store'),
      '@/utils': resolve(__dirname, '..', 'src/utils')
    },
    defineConstants: {},
    copy: {
      patterns: [],
      options: {}
    },
    framework: 'vue3',
    compiler: {
      type: 'webpack5',
      prebundle: { enable: false }
    },
    cache: {
      enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
    },
    sass: {
      data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`
    },
    mini: {
      postcss: {
        pxtransform: {
          enable: true,
          config: {}
        },
        url: {
          enable: true,
          config: {
            limit: 1024 // 设定转换尺寸上限
          }
        },
        cssModules: {
          enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[local]___[hash:base64:5]'
          }
        }
      },
      webpackChain(chain, webpack) {
        chain.plugin('unplugin-vue-components').use(
          Components({
            dts: 'types/components.d.ts',
            resolvers: [NutUIResolver({ taro: true })]
          })
        )
      }
    },
    h5: {
      publicPath: '/',
      staticDirectory: 'static',
      esnextModules: ['nutui-taro', 'icons-vue-taro'],
      postcss: {
        autoprefixer: {
          enable: true,
          config: {}
        },
        cssModules: {
          enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[local]___[hash:base64:5]'
          }
        }
      },
      webpackChain(chain, webpack) {
        chain.plugin('unplugin-vue-components').use(
          Components({
            dts: 'types/components.d.ts',
            resolvers: [NutUIResolver({ taro: true })]
          })
        )
        chain.merge({
          stats: 'errors-warnings'
        })
      },
      devServer: {
        open: false,
        proxy: {}
      }
    }
  }

  if (process.env.NODE_ENV === 'development') {
    // 本地开发构建配置（不混淆压缩）
    return merge({}, baseConfig, devConfig)
  }
  // 生产构建配置（默认开启压缩混淆等）
  return merge({}, baseConfig, prodConfig)
})
