<template>
  <view :class="$style.view">
    <view :class="$style.logoWrap">
      <image :class="$style.logo" src="@/static/logo.png" />
    </view>
    <view :class="$style.textWrap">
      <text :class="$style.title">{{ title }}</text>
      <text :class="$style.count">{{ count }}</text>
      <nut-button :class="$style.btn" type="primary" @click="handleCount">
        计数
      </nut-button>
      <nut-button :class="$style.btn" type="primary" @click="handleOpen">
        弹窗
      </nut-button>
    </view>
    <nut-popup v-model:visible="show" closeable>
      <view :class="$style.dialog">
        <view :class="$style.content">
          <text>Hello World</text>
        </view>
      </view>
    </nut-popup>
  </view>
</template>

<script lang="ts">
import { useDidHide, useDidShow, useLoad } from '@tarojs/taro'
import { defineComponent } from 'vue'

import { useCount, useDialog, useInit } from './hooks'

export default defineComponent({
  setup() {
    const initHook = useInit()
    const countHook = useCount()
    const dialogHook = useDialog()

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
      ...initHook,
      ...countHook,
      ...dialogHook
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

.logoWrap {
  display: flex;
  justify-content: center;
  align-self: center;
  height: 200px;
  width: 200px;
  padding: 20px;
  background-image: linear-gradient(180deg, #0000c2, #0000c2);
  box-sizing: border-box;
}

.logo {
  width: 100%;
  height: 100%;
}

.textWrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
}

.title {
  font-size: 36px;
  color: #8f8f94;
}

.count {
  margin: 20px auto;
}

.btn + .btn {
  margin-top: 20px;
}

.dialog {
  width: 400px;
  height: 200px;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 28px;
}
</style>
