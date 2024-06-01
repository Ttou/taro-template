<template>
  <view :class="styles.view">
    <view :class="styles.logoWrap">
      <image :class="styles.logo" src="@/static/logo.png" />
    </view>
    <view :class="styles.textWrap">
      <Welcome :msg="title" />
      <text :class="styles.count">{{ count }}</text>
      <view :class="styles.btn">
        <nut-space>
          <nut-button type="primary" @click="handleIncrement"> + </nut-button>
          <nut-button type="primary" @click="handleDecrement"> - </nut-button>
        </nut-space>
      </view>
      <nut-button :class="styles.btn" type="primary" @click="handleOpen">
        弹窗
      </nut-button>
      <nut-button :class="styles.btn" type="primary" @click="handleJump">
        跳转
      </nut-button>
    </view>
    <nut-popup v-model:visible="show" closeable>
      <view :class="styles.dialog">
        <view :class="styles.content">
          <text>Hello World</text>
        </view>
      </view>
    </nut-popup>
  </view>
</template>

<script lang="ts">
import { navigateTo, useDidHide, useDidShow, useLoad } from '@tarojs/taro'
import { defineComponent } from 'vue'

import { Welcome } from '@/components'

import { useCount, useDialog, useInit } from './hooks'

export default defineComponent({
  components: {
    Welcome
  },
  setup() {
    const initHook = useInit()
    const countHook = useCount()
    const dialogHook = useDialog()

    function handleJump() {
      navigateTo({ url: '/pages/other/index' })
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
      ...initHook,
      ...countHook,
      ...dialogHook,
      handleJump
    }
  }
})
</script>

<style lang="scss" module="styles" src="./index.module.scss"></style>
