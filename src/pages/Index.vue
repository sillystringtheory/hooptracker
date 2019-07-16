<template>
<q-page class="q-mt-md q-ml-md column">
  <q-btn
   label="Start a Session"
   ripple
   rounded
   :disabled="sessionActive"
   stack
   color="teal"
   class="q-mt-sm buttonWidth"
   @click="startSession"
  />
  <q-btn-dropdown
   label="Choose a Shot Type"
   ripple
   rounded
   :disabled="!sessionActive"
   color="blue-10"
   class="q-mt-sm buttonWidth"
  >
    <DropDownList :sourceList="shotTypes" @list-item-clicked="setShotType"/>
  </q-btn-dropdown>
  <q-btn-dropdown
   label="Choose Number of Reps"
   ripple
   rounded
   :disabled="!sessionActive"
   color="blue-8"
   class="q-mt-sm buttonWidth"
   @item-clicked="setShotType"
  >
    <DropDownList :sourceList="reps" @list-item-clicked="setNumReps"/>
  </q-btn-dropdown>
  <q-btn-dropdown
   label="Choose Shots per Rep"
   ripple
   rounded
   :disabled="!sessionActive"
   color="blue-6"
   class="q-mt-sm buttonWidth"
  >
    <DropDownList :sourceList="shotsPerRep" @list-item-clicked="setShotsPerRep"/>
  </q-btn-dropdown>
  <q-btn
   label="Start Tracking"
   to="repEntry"
   :disabled="!sessionActive"
   ripple
   rounded
   stack
   color="blue-4"
   class="q-mt-sm buttonWidth"
   @click="startSessionTrack"
  />
  <q-btn
   label="Finish a Session"
   :disabled="!sessionActive"
   ripple
   rounded
   stack
   color="green-10"
   class="q-mt-sm buttonWidth"
   @click="endSession"
  />
</q-page>
</template>

<style>
.buttonWidth {
  max-width: 250px;
}
</style>

<script>
import DropDownList from '../components/DropDownList'
export default {
  name: 'PageIndex',
  components: {
    DropDownList
  },
  data () {
    return {
      shotTypes: ['Free Throw', 'Jumper', 'Layup'],
      reps: [3, 5, 10],
      shotsPerRep: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  computed: {
    sessionActive () {
      return this.$store.getters['session/getSessionId']
    }
  },
  methods: {
    startSession () {
      this.$store.dispatch('session/startSessionAction', { 'vm': this })
      console.log('after startSessionAction dispatch, session is ' + JSON.stringify(this.$store.getters['session/getSessionData']))
    },
    endSession () {
      this.$store.dispatch('session/endSessionAction', { 'vm': this })
      // this.$store.dispatch('repset/endRepSetAction')
      // this.$store.commit('repset/endRepSet')
      // this.$store.commit('session/endSessionAction')
    },
    setShotType (val) {
      this.$store.commit('repset/setRepSetShotType', val)
    },
    setNumReps (val) {
      this.$store.commit('repset/setRepSetNumReps', val)
      let arr = []
      for (let x = 0; x < val; x++) {
        arr[x] = true
      }
      let obj = { 'arr': arr }
      this.$store.commit('shotMenu/setShotInputButtonStateArr', obj)
    },
    setShotsPerRep (val) {
      this.$store.commit('repset/setRepSetShotsPerRep', val)
    },
    startSessionTrack () {
      this.$store.commit('repset/setRepSetId')
      this.$store.commit('repset/setRepSetSessionId', this.$store.getters['session/getSessionId'])
      this.$store.commit('repset/setRepSetStartTime')
      // console.log('repset now contains ' + JSON.stringify(this.$store.getters['repset/getRepSetData']))
    }
  }
}
</script>
