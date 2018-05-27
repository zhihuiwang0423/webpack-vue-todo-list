export default {
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', {num: data.num})
    }, data.time)
  }
}
// 异步数据修改方法
