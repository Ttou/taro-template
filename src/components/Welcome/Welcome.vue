<template>
  <text :class="$style.welcome">{{ msg }}</text>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { welcomeProps } from './Welcome.constant'

export default defineComponent({
  name: 'Welcome',
  props: welcomeProps()
})
</script>

<style module>
.welcome {
  font-size: 36px;
  color: #8f8f94;
}
</style>
