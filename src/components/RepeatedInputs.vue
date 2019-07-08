<template>
<div>
  <div v-for="rep in numRepArr" :key="rep" class="q-ma-sm" ref="inputDivs">
    <div class="font-weight-bold q-mr-md text-right" style="font-size: 1.2em; display: inline-block; min-width: 4em; max-width: 4em">Rep {{ rep + 1 }}</div>
    <q-btn round :label="shotsMadeArr[rep]" :color="buttonColor(rep)" @click="bclick(rep)" :disable="!inputButtonStateArr[rep]"></q-btn>
      <q-menu :offset="[-150, -50]" :content-class="{ 'my-menu-bg': true}" @before-hide="reactivate" auto-close>
        <div class="row" style="max-width: 9em">
          <div class="text-h6 text-center q-ml-xs" style="min-width: 6em">Rep {{ rep + 1 }}</div>
          <div class="text-h6 text-center q-ml-xs">Made Shots</div>
          <q-btn v-for="choice of numInputs" :key="choice" round :color="shotMadeButtonColor" :label="choice" @click="updateVal(rep, choice)" class="q-ma-sm"></q-btn>
        </div>
      </q-menu>
  </div>
</div>
</template>

<script>
export default {
  name: 'RepeatedInputs',
  data () {
    return {
      instNumReps: this.$store.getters['repset/getRepSetNumReps'],
      instShotsPerRep: this.$store.getters['repset/getRepSetShotsPerRep'],
      val: 0,
      shotMadeButtonColor: 'orange-9'
    }
  },
  methods: {
    bclick (idx) {
      let stateArr = []
      for (let x = 0; x < this.instNumReps; x++) {
        if (x !== idx) {
          stateArr[x] = false
        } else {
          stateArr[x] = true
        }
      }
      let obj = { 'arr': stateArr }
      this.$store.commit('shotMenu/setShotInputButtonStateArr', obj)
    },
    buttonColor (idx) {
      if (this.inputButtonStateArr[idx] === true) {
        return this.$store.getters['shotMenu/getShotInputActiveButtonColor']
      } else {
        return this.$store.getters['shotMenu/getShotInputDisabledButtonColor']
      }
    },
    reactivate () {
      let x = Array(this.instNumReps).fill(true)
      let obj = { 'arr': x }
      this.$store.commit('shotMenu/setShotInputButtonStateArr', obj)
    },
    updateVal (rep, choice) {
      let obj = { 'arr': [] }
      for (let x = 0; x < this.instNumReps; x++) {
        if (x !== rep) {
          obj.arr[x] = this.shotsMadeArr[x]
        } else {
          obj.arr[x] = choice
        }
      }
      this.$store.commit('shotMenu/setShotsMadeArr', obj)
    }
  },
  computed: {
    numRepArr () {
      return [...Array(this.instNumReps).keys()]
    },
    numInputs () {
      // have to add one here because makeable shots
      // span 0 to max Shots Per Rep
      return [...Array(this.instShotsPerRep + 1).keys()]
    },
    inputButtonStateArr () {
      if (this.$store.getters['shotMenu/getShotInputButtonStateArr'].length === 0) {
        let arr = []
        for (let x = 0; x < this.instNumReps; x++) {
          arr[x] = true
        }
        let obj = { 'arr': arr }
        this.$store.commit('shotMenu/setShotInputButtonStateArr', obj)
      }
      return this.$store.getters['shotMenu/getShotInputButtonStateArr']
    },
    shotsMadeArr () {
      if (this.$store.getters['shotMenu/getShotsMadeArr'].length === 0) {
        let obj = { 'arr': [] }
        obj.arr = Array(this.instNumReps).fill(0)
        this.$store.commit('shotMenu/setShotsMadeArr', obj)
      }
      return this.$store.getters['shotMenu/getShotsMadeArr']
    }
  }
}
</script>

<style lang="stylus">
.my-menu-bg
  background-color $grey-4

</style>
