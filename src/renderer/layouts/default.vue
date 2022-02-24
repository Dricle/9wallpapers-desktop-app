<template>
    <div>
        <app-navigation />
        <div class="p-10">
            <nuxt />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

// const Store = require('electron-store');

// const store = new Store();

export default {
    methods: {
        ...mapActions({
            setInterval: 'wallpaper/setInterval'
        })
    },

    created() {
        // this.setInterval(store.get('settings.interval', 10))
    }
}
</script>
