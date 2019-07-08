const uuidv4 = require('uuid/v4')

export function startSession (state) {
  state.session.sessionId = uuidv4()
  state.session.startTime = new Date()
}

export function endSession (state) {
  state.session.endTime = new Date()
  state.session.sessionId = null
  state.session.startTime = null
  state.session.endTime = null
  // should write back all unwritten sessionData here
  // then reset the session data bits to null
}

// this function expects minutes as its input
// it's default value is 120 minutes
export function setSessionTimeOut (state, val) {
  state.session.sessionTime = 1000 * 60 * val
}

export function addRepSet (state, obj) {
  state.session.repSets.push(obj)
}
