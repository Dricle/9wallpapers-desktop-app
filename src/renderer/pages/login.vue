<template>
    <v-main class="grey lighten-3">
        <v-container>
            <v-row>
                <v-col>
                    <v-sheet
                        min-height="70vh"
                        rounded="lg"
                    >
                        <!--  -->
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
export default {
    layout: 'login',

    data () {
        return {
            formData: {}
        }
    },

    methods: {
        submit () {
            if (this.$refs.form.validate()) {
                this.$refs.form.$el.submit()
            }
        }
    }
}
</script>
