<template>
    <button
        type="button"
        :class="bem({ primary, secondary: !primary, [size]: true })"
        @click="onClick"
        :style="style"
    >
        {{ label }}
    </button>
</template>

<script>
export default {
    name: 'Button',

    props: {
        label: {
            type: String,
            required: true,
        },
        primary: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: 'medium',
            validator: function (value) {
                return ['small', 'medium', 'large'].indexOf(value) !== -1
            },
        },
        backgroundColor: {
            type: String,
        },
    },

    computed: {
        style() {
            return {
                backgroundColor: this.backgroundColor,
            }
        },
    },

    methods: {
        onClick() {
            console.log(this.bem('test', { abc: true }))
            this.$emit('onClick')
        },
    },
}
</script>
