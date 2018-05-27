<template>
<div id="app">
  <div id="cover"></div>
  <Header></Header>
  <p>{{counter}}</p>
  <p>{{fullName}}</p>
  <p>{{textA}}</p>
  <p>{{textPlus}}</p>
  <p>c: {{textC}}</p>
  <!-- <Todo></Todo> -->
  <router-link to="/app/1">app</router-link>
  <router-link to="/login">login</router-link>
  <transition name="fade">
    <router-view />
  </transition>
  <Footer></Footer>
</div>
</template>
<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'
export default {
  components: {
    Header,
    Footer
    // Todo
  },
  mounted () {
    console.log(this.$store)
    this.updateCountAsync({
      num: 57777,
      time: 2000
    })
    // this['a/add']()
    this['b/diaoyonga']()
    // this['a/updateText']('666888')
    // this.$store.dispatch('updateCountAsync', {
    //   num: 5,
    //   time: 2000
    // })
    // this.$store.state.count = 3;
    let i = 1
    setInterval(() => {
      console.log(this.$store)
      // this.$store.commit('updateCount', {
      //   num: i++,
      //   num2: i++
      // })
      this.updateCount({num: i++})
    }, 10000)
  },
  computed: {
    // ...mapState(['count'])
    // ...mapState({
    //   counter: 'count'
    // }),
    // textA () {
    //   return this.$store.state.a.text
    // },
    ...mapState({
      counter: (state) => state.count,
      textA: (state) => state.a.text,
      textC: (state) => state.c.text
    }),
    // count () {
    //   return this.$store.state.count
    // },
    ...mapGetters({
      'fullName': 'fullName',
      'textPlus': 'a/textPlus'
    })
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  },

  methods: {
    ...mapActions(['updateCountAsync', 'a/add', 'b/diaoyonga']),
    ...mapMutations(['updateCount', 'a/updateText'])
  }
}
</script>
<style lang="stylus" scoped>
 #app {
 position absolute
 left 0
 right 0
 top 0
 bottom 0
 }
 #cover {
 position absolute
 left 0
 right 0
 top 0
 bottom 0
 background-color #999
 opacity .9
 z-index -1
 }
</style>
