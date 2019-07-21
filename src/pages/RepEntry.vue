<template>
<q-page class="q-mt-md q-ml-md column">
  <!-- <div v-for="rep of numReps" :key="rep" class="q-ma-xs"> -->
    <!-- <span class="font-weight-bold q-mr-sm" style="font-size: 1.2em">Rep {{ rep }}</span> -->
    <!-- <ButtonInputDialog :numInputs="makeable" ref="inputFields" :repNum="rep" :buttonColor="shotInputColorArray[rep]" @menu-show="menuShow(rep)" @menu-hide="menuHide"></ButtonInputDialog> -->
  <!-- </div> -->
  <RepeatedInputs></RepeatedInputs>
  <q-btn
   to="/"
   label="Save These Reps"
   ripple
   rounded
   stack
   color="green-10"
   class="q-mt-sm buttonWidth"
   @click="saveReps"
  />
</q-page>
</template>

<script>
// import ButtonInputDialog from '../components/ButtonInputDialog'
import RepeatedInputs from '../components/RepeatedInputs'
export default {
  name: 'PageIndex',
  components: {
    // ButtonInputDialog
    RepeatedInputs
  },
  data () {
    return {
      madeCount: 0,
      madeArr: new Array(this.numReps),
      buttonActiveColor: 'orange-9',
      buttonInActiveColor: 'grey-12'
    }
  },
  computed: {
    shotType () {
      return this.$store.getters['repset/getRepSetShotType']
    },
    numReps () {
      return this.$store.getters['repset/getRepSetNumReps']
    },
    shotsPerRep () {
      return this.$store.getters['repset/getRepSetShotsPerRep']
    },
    session () {
      return this.$store.getters['session/session']
    },
    fullHeightArr () {
      return [false, false]
    },
    makeable () {
      let x = 0
      let makeableArr = Array(this.shotsPerRep + 1)
      for (x = 0; x < makeableArr.length; x++) {
        makeableArr[x] = x
      }
      return makeableArr
    },
    shotMenuActive () {
      if (!this.$store.getters['shotMenu/getShotInputMenuActive']) {
        return 'orange-8'
      } else {
        return 'blue-8'
      }
    },
    fieldRefsRef () {
      return this.$refs.inputFields
    }
  },
  methods: {
    saveReps () {
      this.$store.dispatch('repset/postRepSetData', { 'vm': this })
    }
  }
}
</script>

<style>
.buttonWidth {
  max-width: 250px;
}
</style>
