<template>
  <view>
    <nut-button @click="handleBack">返回</nut-button>
  </view>
</template>

<script lang="ts">
import Taro from '@tarojs/taro'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    function handleBack() {
      Taro.navigateBack()
    }

    return {
      handleBack
    }
  }
})
</script>
