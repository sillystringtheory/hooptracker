const uuidv4 = require('uuid/v4')
/*
export function someAction (context) {
}
*/
export function startSessionAction (context, { vm }) {
  context.commit('setSessionId', uuidv4())
  context.commit('setSessionStartTime', new Date())
  let mySession = context.getters.getSessionData
  vm.$axios_appData.post('/startsession', mySession)
}

export function endSessionAction (context, { vm }) {
  let errorState = false
  context.commit('setSessionEndTime', new Date())
  let mySession = context.getters.getSessionData
  vm.$axios_appData.put('updateSession', mySession)
    .then((result) => {
      console.log('session put returned ' + JSON.stringify(result.data))
    })
    .catch((err) => {
      errorState = true
      console.log('err was ' + err)
      // TODO figure out what to do
    })
    .finally(() => {
      if (!errorState) {
        context.commit('setSessionId', null)
        context.commit('setSessionStartTime', null)
        context.commit('setSessionEndTime', null)
        context.commit('setSessionRepSets', [])
      } else {
        // emit some kind of event here that prevents destruction of session information
      }
    })
  // less obvious way of same effect as finally could be as follows
  // for (let x in mySession) {
  //   if (x instanceof Array) {
  //     mySession['x'] = []
  //   } else if (x instanceof Object) {
  //     mySession['x'] = {}
  //   } else {
  //     mySession['x'] = null
  //   }
}

export function addRepSetAction (context, { vm, repset }) {
  context.commit('addRepSet', repset)
}
