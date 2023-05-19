export default {
  'GET /api/home/info': ctx => {
    setTimeout(() => {
      ctx.res.send({
        title: 'Hello Taro'
      })
    }, 1500)
  }
}
