import { hideLoading, showLoading, useLoad } from '@tarojs/taro'
import { reactive, toRefs } from 'vue'

import { homeApi } from '@/apis'

export function useInit() {
  const state = reactive({
    title: '- -'
  })

  async function init() {
    showLoading({
      title: '加载中...'
    })

    try {
      const data = await homeApi.getInfo()

      state.title = data.title
    } finally {
      hideLoading()
    }
  }

  useLoad(() => {
    init()
  })

  return {
    ...toRefs(state)
  }
}
