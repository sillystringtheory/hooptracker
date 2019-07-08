const uuidv4 = require('uuid/v4')

export function startRepSet (state, shotType, shotsPerRep) {
  setRepSetId()
  setRepSetSessionId()
  setRepSetStartTime()
  setRepSetShotType(shotType)
  setRepSetShotsPerRep(shotsPerRep)
}

export function endRepSet (state) {
  state.repSetId = null
  state.repSetSessionId = null
  state.repSetStartTime = null
  state.repSetEndTime = null
  state.repSetShotType = null
  state.repSetShotsPerRep = null
  state.repSetNumReps = null
}

export function setRepSetId (state) {
  state.repSetId = uuidv4()
}

export function setRepSetSessionId (state, val) {
  state.repSetSessionId = val
}

export function setRepSetStartTime (state) {
  state.repSetStartTime = new Date()
}

export function setRepSetEndTime (state) {
  state.repSetEndTime = new Date()
}

export function setRepSetShotType (state, val) {
  state.repSetShotType = val
}

export function setRepSetNumReps (state, val) {
  state.repSetNumReps = val
}

export function setRepSetShotsPerRep (state, val) {
  state.repSetShotsPerRep = val
}

export function setRepSetShotsMadeArr (state, arr) {
  state.repSetShotsMadeArr = arr
}
