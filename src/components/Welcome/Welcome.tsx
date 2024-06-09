import { Text } from '@tarojs/components'
import { defineComponent } from 'vue'

import { welcomeProps } from './Welcome.define'
import styles from './Welcome.module.css'

export default defineComponent({
  name: 'Welcome',
  props: welcomeProps(),
  render() {
    return <Text class={styles.welcome}>{this.msg}</Text>
  }
})
