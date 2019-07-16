// Basic mutators go here
export function setSessionId (state, val) {
  state.session.sessionId = val
}

export function setSessionStartTime (state, val) {
  state.session.startTime = val
}

export function setSessionEndTime (state, val) {
  state.session.endTime = val
}

export function setSessionRepSets (state, arr) {
  state.session.repSets = arr
}

// this function expects minutes as its input
// it's default value is 120 minutes
export function setSessionTimeOut (state, val) {
  state.session.sessionTime = 1000 * 60 * val
}
