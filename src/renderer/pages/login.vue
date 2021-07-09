<template>
    <div>
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h1 class="font-extrabold tracking-wide text-green-500 uppercase text-center">
                9wallpapers.com
            </h1>
            <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
                Sign in to your account
            </h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                <form class="space-y-6" @submit.prevent="login">
                    <div>
                        <label for="email" class="label">
                            Email address
                        </label>
                        <div class="mt-1">
                            <base-input
                                v-model="formData.email"
                                name="email"
                                type="email"
                                required
                                :errors="errors"
                            />
                        </div>
                    </div>

                    <div>
                        <label for="password" class="label">
                            Password
                        </label>
                        <div class="mt-1">
                            <base-input
                                v-model="formData.password"
                                name="password"
                                type="password"
                                autocomplete="current-password"
                                required
                                :errors="errors"
                            />
                        </div>
                    </div>

                    <div class="flex justify-center">
                        <button
                            type="submit"
                            class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                            :class="{'loading': isLoading}"
                            :disabled="isLoading"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import loading from '~/mixins/loading'

export default {
    mixins: [loading],
    layout: 'auth',

    data () {
        return {
            formData: {
                email: undefined,
                password: undefined,
                device_name: 'nuxt'
            }
        }
    },

    methods: {
        login () {
            this.load()
            this.$auth
                .login({
                    data: this.formData
                })
                .then(() => {
                    this.$store.dispatch('clearAll')

                    this.done()

                    this.$router.push('/')
                })
                .catch((error) => {
                    this.doneWithErrors(error)
                })
        }
    }
}
</script>
