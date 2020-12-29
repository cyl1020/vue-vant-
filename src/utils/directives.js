import Vue from 'vue'

Vue.directive('has', {
  inserted(el, binding) {
    binding.value != 'index' ? el.parentNode.removeChild(el) : {}
  }
})