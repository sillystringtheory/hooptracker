<template>
<q-page class="q-mt-md q-ml-md column">
<!--
  <ShotInput v-for="repNum in numReps" :key="repNum" :myLabel="'Made Rep ' + repNum" ref="inputFields">
  </ShotInput>
-->
  <div v-for="rep of numReps" :key="rep" class="q-ma-xs">
    <span class="font-weight-bold q-mr-sm" style="font-size: 1.2em">Rep {{ rep }}</span>
    <ButtonInputDialog :numInputs="makeable" ref="inputFields" :repNum="rep"></ButtonInputDialog>
  </div>
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
import ButtonInputDialog from '../components/ButtonInputDialog'
export default {
  name: 'PageIndex',
  components: {
    ButtonInputDialog
  },
  data () {
    return {
      madeCount: 0,
      madeArr: new Array(this.numReps)
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
      console.log('in makeable(), shotsPerRep is: ', this.shotsPerRep)
      let x = 0
      let makeableArr = Array(this.shotsPerRep + 1)
      for (x = 0; x < makeableArr.length; x++) {
        makeableArr[x] = x
      }
      console.log('makeableArr is ' + makeableArr)
      return makeableArr
    }
  },
  methods: {
    saveReps () {
      console.log('saveReps got called')
      let shotArr = []
      this.$refs.inputFields.forEach(function (elem) {
        shotArr.push(elem.val)
      })
      this.$store.commit('repset/setRepSetShotsMadeArr', shotArr)
      this.$store.commit('repset/setRepSetEndTime')
      this.$store.commit('session/addRepSet', this.$store.getters['repset/getRepSetData'])
      console.log('after commit, repSetData is ' + JSON.stringify(this.$store.getters['repset/getRepSetData']))
      console.log('after commit, sessionData is ' + JSON.stringify(this.$store.getters['session/getSessionData']))
    }
  }
}
</script>

<style>
.buttonWidth {
  max-width: 250px;
}
</style>
