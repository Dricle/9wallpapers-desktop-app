<template>
    <div class="relative">
        <input
            :id="name"
            :name="name"
            :type="type"
            class="w-full rounded"
            :class="{
                'border-red-400': errors && errors[name],
            }"
            :value="value"
            v-bind="$attrs"
            @keyup="$emit('input', $event.target.value)"
            @change="$emit('input', $event.target.value)"
            @blur="$emit('blur')"
        >
        <p v-if="help" class="text-sm text-gray-600" v-text="help" />
        <p v-if="errors && errors[name]" class="mt-1 text-xs text-red-500" v-text="errors[name][0]" />
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        name: {
            type: String,
            required: true
        },
        help: {
            type: String,
            required: false,
            default: null
        },
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: [String, Number],
            required: false,
            default: null
        },
        errors: {
            type: Object,
            required: false,
            default: null
        }
    }
}
</script>
