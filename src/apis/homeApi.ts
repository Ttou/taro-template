import { ajax } from '@/utils'

export default {
  getInfo(): Promise<IGetInfoRes> {
    return ajax.get('/home/info')
  }
}
