import { hideLoading, showLoading, useLoad } from '@tarojs/taro'
import { reactive, toRefs } from 'vue'

export function useInit() {
  const state = reactive({
    title: '- -'
  })

  async function init() {
    showLoading({
      title: '加载中...'
    })

    setTimeout(() => {
      state.title = 'Hello Taro'
      hideLoading()
    }, 1500)
  }

  useLoad(() => {
    init()
  })

  return {
    ...toRefs(state)
  }
}
