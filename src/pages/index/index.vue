<template>
  <view :class="$style.view">
    <text :class="$style.count">{{ count }}</text>
    <nut-button :class="$style.btn" @click="handleCount">计算</nut-button>
    <nut-button :class="$style.btn" @click="handleJump">跳转</nut-button>
  </view>
</template>

<script lang="ts">
import Taro, { useDidHide, useDidShow, useLoad } from '@tarojs/taro'
import { defineComponent } from 'vue'

import { useCount } from './hooks'

export default defineComponent({
  setup() {
    const countHook = useCount()

    function handleJump() {
      Taro.navigateTo({ url: '/pages/other/index' })
    }

    useLoad(options => {
      console.log('page load', options)
    })

    useDidShow(options => {
      console.log('page show', options)
    })

    useDidHide(() => {
      console.log('page hide')
    })

    return {
      ...countHook,
      handleJump
    }
  }
})
</script>

<style module>
.view {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  min-height: 100%;
}

.count {
  font-size: 40px;
}

.btn {
  width: 200px;
  margin-top: 30px;
}
</style>
