const uuidv4 = require('uuid/v4')

export function initRepSetAction (context, { vm }) {
  context.commit('setRepSetId', null)
  context.commit('setRepSetSessionId', null)
  context.commit('setRepSetStartTime', null)
  context.commit('setRepSetEndTime', null)
  context.commit('setRepSetShotType', null)
  context.commit('setRepSetNumReps', null)
  context.commit('setRepSetShotsPerRep', null)
  context.commit('setRepSetShotsMadeArr', [])
}

export function startRepSetAction (context, { vm, shotType, numReps, shotsPerRep }) {
  context.commit('setRepSetId', uuidv4())
  context.commit('setRepSetSessionId', vm.$store.getters['session/getSessionId'])
  context.commit('setRepSetStartTime', new Date())
  context.commit('setRepSetShotType', shotType)
  context.commit('setRepSetNumReps', numReps)
  context.commit('setRepSetShotsPerRep', shotsPerRep)
}

export function setShotTypeAction (context, { vm, shotType }) {
  context.commit('setRepSetShotType', shotType)
}

export function setRepSetNumRepsAction (context, { vm, numReps }) {
  context.commit('setRepSetNumReps', numReps)
  let arr = []
  for (let x = 0; x < numReps; x++) {
    arr[x] = true
  }
  let obj = { 'arr': arr }
  vm.$store.commit('shotMenu/setShotInputButtonStateArr', obj)
}

export function setRepSetShotsPerRepAction (context, { vm, shotsPerRep }) {
  context.commit('setRepSetShotsPerRep', shotsPerRep)
}

export function setRepSetIdAction (context, { vm }) {
  context.commit('setRepSetId', uuidv4())
}

export function setRepSetSessionIdAction (context, { vm, sessId }) {
  context.commit('setRepSetSessionId', sessId)
}

export function setRepSetStartTimeAction (context, { vm, startTime }) {
  context.commit('setRepSetStartTime', startTime)
}

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
