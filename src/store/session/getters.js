export function getSessionData (state) {
  return state.session
}

// helper getters
export function getSessionId (state) {
  return state.session.sessionId
}

export function getSessionStartTime (state) {
  return state.session.startTime
}

export function getSessionEndTime (state) {
  return state.session.endTime
}

export function getSessionTimeOutLength (state) {
  return state.sessionTimeOut
}

export function getSessionRepSets (state) {
  return state.session.repSets
}

// following would be nice but Vuex doesn't (yet)
// allow it as 2nd arg can be name of other getter
// so for now, we are stuck with each getter as it's own,
// although we can perhap use the mapSpread in computed
// properties???
// export function getSessionAttr (state, attribute) {
//   console.log('attribute is ' + attribute)
//   return state.session[attribute]
// }
