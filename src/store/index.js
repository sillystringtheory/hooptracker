import Vue from 'vue'
import Vuex from 'vuex'

import appconfig from './appconfig'
import session from './session'
import repset from './repset'
import shotMenu from './shotMenu'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      appconfig,
      session,
      repset,
      shotMenu
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
