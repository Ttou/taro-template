<template>
  <text :class="styles.welcome">{{ msg }}</text>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { welcomeProps } from './Welcome.constant'

export default defineComponent({
  name: 'Welcome',
  props: welcomeProps()
})
</script>

<style module="styles">
.welcome {
  font-size: 36px;
  color: #8f8f94;
}
</style>
