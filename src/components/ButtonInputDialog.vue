<template>
<q-btn round :label="val" @click="bclick" color="orange-9" :repNum="repNum">
  <q-dialog v-model="fullHeight" auto-close position="steve">
    <div class="row" style="max-width: 9em">
      <div class="text-h6 text-center q-ml-xs" style="min-width: 6em">Rep {{ repNum }}</div>
      <div class="text-h6 text-center q-ml-xs">Made Shots</div>
      <q-btn v-for="choice of numInputs" :key="choice" round color="orange-9" :label="choice" class="q-ma-sm" @click="updateVal(choice)"></q-btn>
    </div>
  </q-dialog>
</q-btn>
</template>

<script>
export default {
  name: 'ButtonInputDialog',
  props: ['numInputs', 'repNum'],
  data () {
    return {
      val: 0,
      fullHeight: false
    }
  },
  methods: {
    bclick () {
      this.fullHeight = true
      console.log('numInputs is ' + this.numInputs)
    },
    updateVal (value) {
      this.val = value
    }
  }
}
</script>

<style>
.nextToButton {
  position: absolute;
  top: 0px;
  left: 30px;
  min-width: 9em;
  max-width: 9em;
}
</style>
