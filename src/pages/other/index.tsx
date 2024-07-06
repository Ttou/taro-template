import { View } from '@tarojs/components'
import { navigateBack } from '@tarojs/taro'
import { defineComponent } from 'vue'

import styles from './index.module.css'

export default defineComponent({
  setup() {
    function handleBack() {
      navigateBack()
    }

    return {
      handleBack
    }
  },
  render() {
    return (
      <View class={styles.view}>
        <NutButton type="primary" onClick={this.handleBack}>
          返回
        </NutButton>
      </View>
    )
  }
})
