import testPanel from './panel.vue'
import testToast from './toast.vue'

const test = {}

test.install = function(Vue, options) {
  Vue.prototype.$msg = 'Hello I am test.js'
  Vue.prototype.$myMethod = function(arr) {
    if (arr.length < 0) {
      return false
    } else {
      arr = arr.join('connect me and u')
      return arr
    }
  }
  Vue.component(testPanel.name, testPanel)
  Vue.component(testToast.name, testToast)
}
export default test
