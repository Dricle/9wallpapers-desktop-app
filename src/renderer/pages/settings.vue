<template>
    <div class="pt-6 divide-y divide-gray-200">
        <div class="px-4 sm:px-6">
            <div>
                <h2 class="text-lg font-medium leading-6 text-white">Settings</h2>
                <p class="mt-1 text-sm text-gray-300">You can tweak this application's settings to your liking.</p>
            </div>
            <ul role="list" class="mt-2 divide-y divide-gray-200">
                <li class="flex items-center justify-between py-4">
                    <div class="flex flex-col">
                        <p class="text-sm font-medium text-gray-200">Change interval</p>
                        <p class="text-sm text-gray-400">Number of minutes after which a new wallpaper will be set.</p>
                    </div>
                    <base-input name="interval" v-model="formData.interval" @input="setValue('interval', $event)" />
                </li>
                <li class="flex items-center justify-between py-4">
                    <div class="flex flex-col">
                        <p class="text-sm font-medium text-gray-200">Allow Unliked Wallpapers</p>
                        <p class="text-sm text-gray-400">Every now and then, we'll pick a new random wallpaper. If you like it, you can add it to your collection !</p>
                    </div>
                    <toggle-input name="allow_unliked" v-model="formData.allow_unliked" @input="setValue('allow_unliked', $event)" />
                </li>
                <li class="flex items-center justify-between py-4">
                    <div class="flex flex-col">
                        <p class="text-sm font-medium text-gray-200">Allow Mobile Wallpapers</p>
                        <p class="text-sm text-gray-400">If this is turned on, we will include wallpapers that have a mobile layout (portrait).</p>
                    </div>
                    <toggle-input name="allow_layout_mobile" v-model="formData.allow_layout_mobile" @input="setValue('allow_layout_mobile', $event)" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
const Store = require('electron-store');

const store = new Store();

export default {
    data() {
        return {
            formData: {
                allow_unliked: store.get('settings.allow_unliked', false),
                allow_layout_mobile: store.get('settings.allow_layout_mobile', true),
                interval: store.get('settings.interval', 10)
            }
        }
    },

    methods: {
        ...mapActions({
            setSettings: 'wallpaper/setSettings'
        }),
        setValue(key, $event) {
            store.set('settings.' + key, this.formData[key]);

            this.setSettings(JSON.parse(JSON.stringify(this.formData)))
        }
    }
}
</script>
