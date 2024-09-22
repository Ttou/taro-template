import Taro from '@tarojs/taro'
import type { Pinia } from 'pinia'
import PiniaPersistedstatePlugin, {
  type StorageLike
} from 'pinia-plugin-persistedstate'

export function usePersistedstatePlugin(pinia: Pinia) {
  pinia.use(PiniaPersistedstatePlugin)
}

export const customStorage: StorageLike = {
  getItem(key) {
    return Taro.getStorageSync(key)
  },
  setItem(key, value) {
    Taro.setStorageSync(key, value)
  }
}
