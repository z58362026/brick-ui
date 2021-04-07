import Button from '../packages/Button'

const components = {
    Button,
}

function install(Vue) {
    Object.values(components).forEach((component) => {
        if (component.install) {
            Vue.use(component)
        } else if (component.name) {
            Vue.component('Boss' + component.name, component)
        }
    })
}

export const exportObject = { install, ...components }

export default { install, ...components }
