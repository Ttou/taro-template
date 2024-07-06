import { Image, Text, View } from '@tarojs/components'
import { navigateTo, useDidHide, useDidShow, useLoad } from '@tarojs/taro'
import { defineComponent } from 'vue'

import { Welcome } from '@/components'
import logoImg from '@/static/logo.png'

import { useCount, useDialog, useInit } from './hooks'
import styles from './index.module.css'

export default defineComponent({
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
  },
  render() {
    return (
      <View class={styles.view}>
        <View class={styles.logoWrap}>
          <Image class={styles.logo} src={logoImg} />
        </View>
        <View class={styles.textWrap}>
          <Welcome msg={this.title} />
          <Text class={styles.count}>{this.count}</Text>
          <View class={styles.btn}>
            <NutSpace>
              <NutButton type="primary" onClick={this.handleIncrement}>
                +
              </NutButton>
              <NutButton type="primary" onClick={this.handleDecrement}>
                -
              </NutButton>
            </NutSpace>
          </View>
          <NutButton
            class={styles.btn}
            type="primary"
            onClick={this.handleOpen}
          >
            弹窗
          </NutButton>
          <NutButton
            class={styles.btn}
            type="primary"
            onClick={this.handleJump}
          >
            跳转
          </NutButton>
        </View>
        <NutPopup v-model:visible={this.show} closeable>
          <View class={styles.dialog}>
            <View class={styles.content}>
              <Text>{this.title}</Text>
            </View>
          </View>
        </NutPopup>
      </View>
    )
  }
})
