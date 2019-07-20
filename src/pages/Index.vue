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
      this.$store.dispatch('repset/initRepSetAction', { 'vm': this })
    },
    endSession () {
      // this.$store.dispatch('repset/endRepSetAction')
      // this.$store.commit('repset/endRepSet')
      this.$store.dispatch('session/endSessionAction', { 'vm': this })
    },
    setShotType (val) {
      this.$store.dispatch('repset/setShotTypeAction', val)
    },
    setNumReps (val) {
      // this action also resets thte state of the shotMenu/setShotInputButtonStateArr
      this.$store.dispatch('repset/setRepSetNumRepsAction', { 'vm': this, 'numReps': val })
    },
    setShotsPerRep (val) {
      this.$store.dispatch('repset/setRepSetShotsPerRepAction', { 'vm': this, 'shotsPerRep': val })
    },
    startSessionTrack () {
      this.$store.dispatch('repset/setRepSetIdAction', { 'vm': this })
      this.$store.dispatch('repset/setRepSetSessionIdAction', { 'vm': this, 'sessId': this.$store.getters['session/getSessionId'] })
      this.$store.dispatch('repset/setRepSetStartTimeAction', { 'vm': this, 'startTime': new Date() })
    }
  }
}
</script>
