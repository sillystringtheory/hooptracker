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
      this.$store.commit('session/startSession')
      console.log('sessionId now is ' + this.$store.getters['session/getSessionId'])
      console.log('sessionStartTime now is ' + this.$store.getters['session/getSessionStartTime'])
    },
    endSession () {
      this.$store.commit('repset/endRepSet')
      this.$store.commit('session/endSession')
      console.log('sessionId now is ' + this.$store.getters['session/getSessionId'])
      console.log('sessionStartTime now is ' + this.$store.getters['session/getSessionStartTime'])
      console.log('sessionEndTime now is ' + this.$store.getters['session/getSessionEndTime'])
    },
    setShotType (val) {
      console.log('setShotType has been called with ' + val)
      this.$store.commit('repset/setRepSetShotType', val)
      console.log('The shot type val passed was ' + val)
      console.log('ShotType in store is ' + this.$store.getters['repset/getRepSetShotType'])
    },
    setNumReps (val) {
      console.log('setNumReps has been called with ' + val)
      this.$store.commit('repset/setRepSetNumReps', val)
      console.log('Num Reps passed was ' + val)
      console.log('Num Reps in store is ' + this.$store.getters['repset/getRepSetNumReps'])
    },
    setShotsPerRep (val) {
      this.$store.commit('repset/setRepSetShotsPerRep', val)
      console.log('Shots per rep passed was ' + val)
      console.log('Shots per rep in store is ' + this.$store.getters['repset/getRepSetShotsPerRep'])
    },
    startSessionTrack () {
      this.$store.commit('repset/setRepSetId')
      this.$store.commit('repset/setRepSetSessionId', this.$store.getters['session/getSessionId'])
      this.$store.commit('repset/setRepSetStartTime')
      console.log('repset now contains ' + JSON.stringify(this.$store.getters['repset/getRepSetData']))
    }
  }
}
</script>
