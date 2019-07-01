<template>
<div>
  <q-input
   v-model="stuff"
   v-model.number="number"
   type="number"
   :label="myLabel"
   mask="###"
   reverse-fill-mask
   debounce="500"
   class="q-pl-md madeShots"
   input-class="keepItRight q-pr-xs"
  ></q-input>
</div>
</template>

<script>
export default {
  props: ['myLabel', 'defaultVal'],
  data () {
    return {
      number: 0,
      stuff: {
        label: null,
        value: null
      }
    }
  }
}
</script>

<style>
.madeShots {
  max-width: 100px;
}
.keepItRight {
  text-align: right;
}
</style>
