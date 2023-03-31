import { reactive, toRefs } from 'vue'

export function useDialog() {
  const state = reactive({
    show: false
  })

  function handleOpen() {
    state.show = true
  }

  return {
    ...toRefs(state),
    handleOpen
  }
}
