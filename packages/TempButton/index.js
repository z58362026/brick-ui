import Button from './src/main'
Button.install = function (Vue) {
    Vue.component('Boss' + Button.name, Button)
}

export default Button
