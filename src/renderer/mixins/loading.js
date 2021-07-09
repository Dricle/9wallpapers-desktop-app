export default {
    data () {
        return {
            isLoading: false,
            errors: {}
        }
    },

    methods: {
        load () {
            this.isLoading = true
            this.errors = null
        },
        done (message = null) {
            this.isLoading = false
            this.errors = null

            if (message) {
                this.$toast.success({ title: message })
            }
        },

        doneWithErrors (errors) {
            if (errors.response && errors.response.data) {
                if (errors.response.data.error) {
                    this.$toast.error({ title: 'An error occured', message: errors.response.data.error })
                } else {
                    this.errors = errors.response.data.errors
                }
            } else {
                this.pageError(errors)
            }
            this.isLoading = false
        },

        pageError (error) {
            this.isLoading = false
            let buttons, message

            if (error && error.message && error.response && error.response.status === 401) {
                buttons = [{ title: 'Login', handler: () => { window.location = '/login' } }]
            } else {
                buttons = [{ title: 'Close' }]
            }

            if (error.message) {
                message = error.message
            } else if (error.response && error.response.data && error.response.data.message) {
                message = error.response.data.message
            } else if (error.response && error.response.message) {
                message = error.response.message
            } else {
                message = 'Error'
            }

            this.$dialog.show({
                title: 'Error',
                text: message,
                buttons
            })
        }
    }
}
