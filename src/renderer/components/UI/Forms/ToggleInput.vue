<template>
    <button
        type="button"
        class="relative inline-flex h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer shrink-0 w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        aria-pressed="false"
        :class="{
            'bg-green-500 border-green-500': shouldBeChecked,
            'bg-gray-200 border-gray-200': !shouldBeChecked
        }"
        @click="toggle"
    >
        <span
            class="relative inline-block w-5 h-5 transition-all duration-200 ease-in-out transform bg-white rounded-full shadow pointer-events-none ring-0"
            :class="{
                'translate-x-5': shouldBeChecked,
                'translate-x-0': !shouldBeChecked
            }"
        >
            <span
                :class="{
                    'opacity-0 ease-out duration-100': shouldBeChecked,
                    'opacity-100 ease-in duration-200': !shouldBeChecked
                }"
                class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity"
                aria-hidden="true"
            >
                <svg class="w-3 h-3 text-gray-400 bg-white" fill="none" viewBox="0 0 12 12">
                    <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
            <span
                class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity"
                aria-hidden="true"
                :class="{
                    'opacity-100 ease-in duration-200': shouldBeChecked,
                    'opacity-0 ease-out duration-100': !shouldBeChecked
                }"
            >
                <svg class="w-3 h-3 text-green-500 bg-white" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                </svg>
            </span>
        </span>
    </button>
</template>

<script>
export default {
    props: {
        value: {
            type: [String, Array, Boolean],
            default: false
        },
        name: {
            type: String,
            required: true
        }
    },

    computed: {
        shouldBeChecked () {
            return this.value === true
        },

        hasSlot () {
            return this.$slots && this.$slots.default && this.$slots.default.length
        }
    },

    methods: {
        toggle () {
            this.$emit('input', !this.shouldBeChecked)
        }
    }
}
</script>
