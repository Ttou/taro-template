import './app.css'
import './theme.css'

import * as Pinia from 'pinia'
import { createApp } from 'vue'

const App = createApp({
  onShow(options: any) {
    console.log('app show', options)
  }
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
const pinia = Pinia.createPinia()

App.use(pinia)

export default App
