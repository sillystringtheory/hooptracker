export function setShotInputMenuActive (state, val) {
  state.shotInputMenuActive = val
}

export function setShotInputMenuActiveRepNum (state, repNum) {
  state.shotInputMenuActive = repNum
}

export function setShotInputButtonColors (state, obj) {
  if (state.shotInputButtonColors === null) {
    state.shotInputButtonColors = []
  }
  state.shotInputButtonColors[obj.idx] = obj.color
}

export function setShotInputActiveButtonColor (state, obj) {
  state.shotInputActiveButtonColor = obj.color
}

export function setShotInputDisabledButtonColor (state, obj) {
  state.shotInputDisabledButtonColor = obj.color
}

export function setShotInputButtonStateArr (state, arr) {
  state.shotInputButtonStateArr = arr
}

export function setShotsMadeArr (state, arr) {
  state.shotsMadeArr = arr
}
