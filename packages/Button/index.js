import Button from './src/main'

import bem from '../../src/mixin/bem'

Button.mixins = [bem]

Button.install = function (Vue) {
    Vue.component('Boss' + Button.name, Button)
}

export default Button