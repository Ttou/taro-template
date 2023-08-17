# Taro Template

## 简介

Taro Template 是一个开源的小程序模版。

## 特性

- **技术栈**：使用 Vue3/Taro3/Axios 等前端前沿技术开发
- **TypeScript**：应用程序级 JavaScript 的语言

## 准备

- [Node](http://nodejs.org/) 和 [Git](https://git-scm.com/)
- [Vue3](https://cn.vuejs.org/guide/introduction.html)
- [Taro3](https://taro-docs.jd.com/docs)

## 安装使用

- 获取项目代码

```bash
git clone https://gitee.com/jh_shot/taro-template.git
```

- 安装依赖

```bash
npm i
```

- 运行

```bash
npm run dev:weapp
```

- 打包

```bash
npm run build:weapp
```

## 注意事项

- 装上 volar 插件后更好的支持模板开发
- 使用 Axios 作为跨端网络请求库，上传需要用小程序自己的API
- 使用 npm 安装依赖，以免使用 pnpm 导致支付宝小程序编译失败
- 微信小程序要支持 `vue3`，需设置基础库最低版本为 `2.11.2` 或以上，`2.11.2` 对应 `chrome>=53,ios>=10`
