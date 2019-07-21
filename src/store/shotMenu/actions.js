export function setShotInputButtonStateArrAction (context, { vm, idx }) {
  // console.log('in shotInputButtonStateArrAction, instNumReps is ' + vm.instNumReps)
  let stateArr = []
  if (idx === undefined) {
    stateArr = [...Array(vm.instNumReps).fill(true)]
  } else {
    for (let x = 0; x < vm.instNumReps; x++) {
      if (x !== idx) {
        stateArr[x] = false
      } else {
        stateArr[x] = true
      }
    }
  }
  context.commit('setShotInputButtonStateArr', stateArr)
}

export function setShotsMadeAction (context, { vm, rep, choice }) {
  let arr = []
  if ((rep === undefined) && (choice === undefined)) {
    arr = [...Array(vm.instNumReps).fill(0)]
  } else {
    for (let x = 0; x < vm.instNumReps; x++) {
      if (x !== rep) {
        arr[x] = vm.shotsMadeArr[x]
      } else {
        arr[x] = choice
      }
    }
  }
  context.commit('setShotsMadeArr', arr)
}
