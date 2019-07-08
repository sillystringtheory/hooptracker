<template>
<q-btn round :label="val" @click="bclick" :color="buttonColors[repNum - 1]" :repNum="repNum">
  <q-menu :offset="[-50, -50]" :content-class="{ 'my-menu-bg': true}" auto-close>
    <div class="row" style="max-width: 9em">
      <div class="text-h6 text-center q-ml-xs" style="min-width: 6em">Rep {{ repNum }}</div>
      <div class="text-h6 text-center q-ml-xs">Made Shots</div>
      <q-btn v-for="choice of numInputs" :key="choice" round color="orange-9" :label="choice" class="q-ma-sm" @click="updateVal(choice)"></q-btn>
    </div>
  </q-menu>
</q-btn>
</template>

<script>
export default {
  name: 'ButtonInputDialog',
  props: ['numInputs', 'repNum', 'buttonColor'],
  data () {
    return {
      val: 0
    }
  },
  methods: {
    bclick (repNum) {
      this.$emit('menu-show', repNum)
    },
    updateVal (value) {
      this.val = value
    },
    greyOut (repNum) {
      // let stdRepNum = repNum - 1
      // let numReps = this.$store.getters['repset/getRepSetNumReps']
      // for (let elem = 0; elem < numReps; elem++) {
      //   if (elem !== stdRepNum) {
      //     this.$store.commit('shotMenu/setShotInputButtonColors', { 'idx': elem, 'color': 'grey-12' })
      //     // console.log('in loop elem=' + elem + ' ' + this.$store.getters['shotMenu/getShotInputButtonColors'])
      //     console.log('in loop elem=' + elem + ' ' + 'foo')
      //   } else {
      //     console.log('elem is ' + elem + ' and repNum is ' + stdRepNum)
      //   }
      // }
      // this.$nextTick(function () {
      //   console.log('in next tick')
      // })
      console.log('after loop ' + this.$store.getters['shotMenu/getShotInputButtonColors'])
      // this.$store.commit('shotMenu/setShotInputMenuActive', true)
      // this.$store.commit('shotMenu/setShotInputMenuActiveRepNum', repNum)
      this.$emit('menu-show', repNum)
    },
    reOrange (repNum) {
      // console.log('reOrange got called')
      // let numReps = this.$store.getters['repset/getRepSetNumReps']
      // let x = 0
      // for (x = 0; x < numReps; x++) {
      //   this.$store.commit('shotMenu/setShotInputButtonColors', { 'idx': x, 'color': 'orange-9' })
      // }
      // this.$store.commit('shotMenu/setShotInputMenuActive', false)
      this.$emit('menu-hide', repNum)
    }
  },
  computed: {
    buttonColors () {
      return this.$store.getters['shotMenu/getShotInputButtonColors']
    }
  }
}
</script>

<style lang="stylus">
.my-menu-bg
  background-color $grey-4

.my-disabled-shot-input
  background-color $grey-4
</style>
