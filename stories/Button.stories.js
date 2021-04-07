import BossButton from '../packages/Button'
import '../packages/Button/index.less'

export default {
    title: 'UI组件/Button',
    component: BossButton,
    argTypes: {
        backgroundColor: { control: 'color' },
        size: {
            control: { type: 'select', options: ['small', 'medium', 'large'] },
        },
    },
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { BossButton },
    template: '<boss-button @onClick="onClick" v-bind="$props" />',
})

export const Primary = Template.bind({})
Primary.args = {
    primary: true,
    label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
    label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
    size: 'large',
    label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
    size: 'small',
    label: 'Button',
}
