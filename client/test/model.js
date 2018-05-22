import Vue from 'vue'

const comp = {
  props: {
    propOne: String,
    active: Boolean
  },
  template: `<div>
    <input type="text" v-model="text">
    <span v-show="active" @click="handleChange">{{propOne}}</span>
  </div>`,
  methods: {
    handleChange () {
      this.$emit('change')
    }
  },
  data () {
    return {
      text: 0
    }
  }
}

new Vue({
  components: {
    CompOne: comp
  },
  data: {
    prop1: 'zhihui',
    act: true
  },
  el: '#root',
  template: `<div>
    <comp-one :prop-one="prop1" @change="handleChange" :active="act"></comp-one>
    <comp-one prop-one="zhihui11" :active="act"></comp-one>
  </div>`,
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  }
})
