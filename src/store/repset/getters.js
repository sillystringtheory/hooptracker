export function getRepSetId (state) {
  return state.repSetId
}

export function getRepSetSessionId (state) {
  return state.repSetSessionId
}

export function getRepSetStartTime (state) {
  return state.repSetStartTime
}

export function getRepSetEndTime (state) {
  return state.repSetEndTime
}

export function getRepSetShotType (state) {
  return state.repSetShotType
}

export function getRepSetNumReps (state) {
  return state.repSetNumReps
}

export function getRepSetShotsPerRep (state) {
  return state.repSetShotsPerRep
}

export function getRepSetShotsMadeArr (state) {
  return state.repSetShotsMadeArr
}

export function getRepSetData (state) {
  return {
    'repSetId': state.repSetId,
    'repSetSessionId': state.repSetSessionId,
    'repSetStartTime': state.repSetStartTime,
    'repSetEndTime': state.repSetEndTime,
    'repSetShotType': state.repSetShotType,
    'repSetNumReps': state.repSetNumReps,
    'repSetShotsPerRep': state.repSetShotsPerRep,
    'repSetShotsMadeArr': state.repSetShotsMadeArr
  }
}
