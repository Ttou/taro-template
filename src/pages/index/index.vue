<template>
  <view :class="$style.view">
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
    <nut-popup :visible="show">
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
import { defineComponent, reactive } from 'vue'
import { toRefs } from 'vue'

import { useCount, useDialog } from './hooks'

export default defineComponent({
  setup() {
    const state = reactive({
      title: 'Hello Taro'
    })

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
      ...toRefs(state),
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

.textWrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title {
  font-size: 72px;
  color: #8f8f94;
}

.count {
  margin: 40px auto;
}

.btn + .btn {
  margin-top: 40px;
}

.dialog {
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  font-size: 56px;
}
</style>
