export function setRepSetId (state, val) {
  state.repSetId = val
}

export function setRepSetSessionId (state, val) {
  state.repSetSessionId = val
}

export function setRepSetStartTime (state, val) {
  state.repSetStartTime = val
}

export function setRepSetEndTime (state, val) {
  state.repSetEndTime = val
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
// helper functions about to be exported to actions

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
  state.repSetNumReps = null
  state.repSetShotsPerRep = null
  state.repSetNumReps = []
}

// Has been renamed to initRepSetAction in actions
export function reInitRepSetData (state) {
  state.repSetId = null
  state.repSetSessionId = null
  state.repSetStartTime = null
  state.repSetEndTime = null
  state.repSetShotType = null
  state.repSetNumReps = null
  state.repSetShotsPerRep = null
  state.repSetShotsMadeArr = []
}
