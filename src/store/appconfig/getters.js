/*
export function someGetter (state) {
}
*/
export function getAppDataScheme (state) {
  return state.appDataScheme
}

export function getAppDataHost (state) {
  return state.appDataHost
}

export function getAppDataPort (state) {
  return state.appDataPort
}

export function getAppDataBaseURL (state) {
  let baseURL = state.appDataScheme + '://' + state.appDataHost
  if (state.appDataPort !== null && state.appDataPort !== undefined) {
    baseURL += ':' + state.appDataPort
  }
  return baseURL
}
