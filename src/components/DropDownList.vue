<template>
  <!-- <q-list @foobar="$emit('foobar', this.$store.getters('repset/getRepSetShotType'))"> -->
  <q-list>
    <!-- <q-item v-for="item in sourceList" :key="item" clickable v-close-popup @click="clickMethod(item)"> -->
    <q-item v-for="item in sourceList" :key="item" clickable v-close-popup @click="$emit('list-item-clicked', item)">
      <q-item-section>
        <q-item-label>{{ item }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<style>
</style>

<script>
export default {
  name: 'DropDownList',
  props: ['sourceList'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
