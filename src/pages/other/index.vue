<template>
  <view :class="styles.view">
    <nut-button type="primary" @click="handleBack">返回</nut-button>
  </view>
</template>

<script lang="ts">
import { navigateBack } from '@tarojs/taro'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    function handleBack() {
      navigateBack()
    }

    return {
      handleBack
    }
  }
})
</script>

<style module="styles">
.view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
