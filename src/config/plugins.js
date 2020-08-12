import http from './http'
import mixin from "./mixin";
export default {
  install(Vue) {
    Vue.component('mEchart', () => import('@/components/M/mEchart'))
    Vue.component('mSidebar', () => import('@/components/M/mSidebar'))
    Vue.component('mPagination', () => import('@/components/M/mPagination'))
    Vue.component('mOVher', () => import('@/components/M/mOVher'))
    Vue.component('mNullPage', () => import('@/components/M/mNullpage'))
    Vue.component('mForm', () => import('@/components/M/mForm'))
    Vue.component('mFromList', () => import('@/components/M/mFromList'))
    Vue.component('mTable', () => import('@/components/M/mTable'))
    Vue.component('mPopup', () => import('@/components/M/mPopup'))
    Vue.component('mUpload', () => import('@/components/M/mUpload'))
    Vue.component('mUploadFlie', () => import('@/components/M/mUploadFlie'))
    Vue.prototype.$http = http
    Vue.prototype.goTo = function (obj) {
      if (obj.name === 'back') {
        this.$router.go(obj.count || -1)
      } else if (obj.type === 'replace') {
        this.$router.replace(obj)
      } else {
        this.$router.push(obj)
      }
    }
    // Vue.prototype.routerQuery = this.$route.query
    Vue.mixin(mixin)
  }
}