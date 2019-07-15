/*
export function someAction (context) {
}
*/
export function postRepSetData (context, { vm }) {
  let errorState = false
  context.commit('setRepSetShotsMadeArr', vm.$store.getters['shotMenu/getShotsMadeArr'])
  context.commit('setRepSetEndTime')
  vm.$store.commit('session/addRepSet', context.getters.getRepSetData)
  // console.log('after commit, repSetData is ' + JSON.stringify(this.$store.getters['repset/getRepSetData']))
  vm.$axios_appData.post(this.appBaseDataURL + '/savereps', context.getters.getRepSetData)
    .then((result) => {
      console.log('in axios post result and data is ' + JSON.stringify(result.data))
      // vm.$store.commit('repset/reInitRepSetData')
    })
    .catch((error) => {
      this.errorState = true
      console.log('receved error of ' + error)
    })
    .finally(() => {
      if (!errorState) {
        context.commit('reInitRepSetData')
        let obj = { 'arr': [] }
        vm.$store.commit('shotMenu/setShotsMadeArr', obj)
      } else {
        // TODO: emit an event so that button can be toggled
        console.log('data post failure, not clearing out repset data')
      }
      console.log('after axios post, repset data is ' + JSON.stringify(context.getters.getRepSetData))
      console.log('after axios post, session data is ' + JSON.stringify(vm.$store.getters['session/getSessionData']))
    })
}
