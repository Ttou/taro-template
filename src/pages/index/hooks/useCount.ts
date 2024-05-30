import { computed } from 'vue'

import { useMainStore } from '@/store'

export function useCount() {
  const mainStore = useMainStore()

  const count = computed(() => mainStore.count)

  function handleIncrement() {
    mainStore.increment()
  }

  function handleDecrement() {
    mainStore.decrement()
  }

  return {
    count,
    handleIncrement,
    handleDecrement
  }
}
