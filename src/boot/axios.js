import axios from 'axios'

export default async ({ Vue, store }) => {
  Vue.prototype.$axios_appData = axios.create({
    baseURL: store.getters['appconfig/getAppDataBaseURL']
  })
}
