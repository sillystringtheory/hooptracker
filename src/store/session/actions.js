/*
export function someAction (context) {
}
*/
export function startSessionAction (context, { vm }) {
  context.commit('startSession', context.state)
  let mySession = context.getters.getSessionData
  vm.$axios_appData.post('/startsession', mySession)
}
