import store from 'store'

export default {
  //保存到localStorage中
  save(key, value) {
    store.set(key, value)
  },

  //从localStorage中获取到key对应的数据
  get(key) {
    return store.get(key) || []
  },

  //删除localStorage中key对应的数据
  remove(key) {
    store.remove(key)
  }
}