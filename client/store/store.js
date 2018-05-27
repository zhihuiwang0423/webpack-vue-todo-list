import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    // state: {
    //   count: 0
    // },
    strict: isDev, // 开发环境使用参数，
    state: defaultState, // 数据
    mutations, // 操作定义
    getters,
    actions, // 异步操作数据
    // vuex热更替
    modules: {
      a: {
        namespaced: true,
        state: {
          text: 18888,
          count: 'abc'
        },
        mutations: {
          updateText (state, text) {
            console.log('a.context', state)
            state.text = text
          }
        },
        getters: {
          textPlus (state, getters, rootState) {
            return state.text + rootState.firstName + rootState.b.text
          }
        },
        actions: {
          add ({state, commit, rootState}) {
            commit('updateText', rootState.count)
            commit('updateCount', {num: 'abcdezhihui'}, {root: true})
          }
        }
      },
      b: {
        namespaced: true,
        state: {
          text: 2
        },
        actions: {
          diaoyonga ({commit}) {
            commit('a/updateText', 'diaoyonga', {root: true})
          }
        }
      }
    }
    // mutations: {
    //   updateCount (state, num) {
    //     state.count = num
    //   }
    // }
  })
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './actions/actions',
      './getters/getters'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newActions = require('./actions/actions').default
      const newGetters = require('./getters/getters').default
      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }
  return store
}
