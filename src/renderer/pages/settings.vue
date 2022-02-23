<template>
    <div class="pt-6 divide-y divide-gray-200">
        <div class="px-4 sm:px-6">
            <div>
                <h2 class="text-lg font-medium leading-6 text-gray-100">Settings</h2>
                <p class="mt-1 text-sm text-gray-300">You can tweak this application's settings to your liking.</p>
            </div>
            <ul role="list" class="mt-2 divide-y divide-gray-200">
                <li class="flex items-center justify-between py-4">
                    <div class="flex flex-col">
                        <p class="text-sm font-medium text-gray-900" id="privacy-option-1-label">Allow Unliked Wallpapers</p>
                        <p class="text-sm text-gray-500" id="privacy-option-1-description">Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.</p>
                    </div>
                    <toggle-input name="allow_unliked" v-model="formData.allow_unliked" @input="setValue('allow_unliked', $event)" />
                </li>
                  <li class="flex items-center justify-between py-4">
                    <div class="flex flex-col">
                      <p class="text-sm font-medium text-gray-900" id="privacy-option-2-label">Make account private</p>
                      <p class="text-sm text-gray-500" id="privacy-option-2-description">Pharetra morbi dui mi mattis tellus sollicitudin cursus pharetra.</p>
                    </div>
                    <!-- Enabled: "bg-teal-500", Not Enabled: "bg-gray-200" -->
                    <button type="button" class="relative inline-flex flex-shrink-0 h-6 ml-4 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500" role="switch" aria-checked="false" aria-labelledby="privacy-option-2-label" aria-describedby="privacy-option-2-description">
                      <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                      <span aria-hidden="true" class="inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow ring-0"></span>
                    </button>
                  </li>
                  <li class="flex items-center justify-between py-4">
                    <div class="flex flex-col">
                      <p class="text-sm font-medium text-gray-900" id="privacy-option-3-label">Allow commenting</p>
                      <p class="text-sm text-gray-500" id="privacy-option-3-description">Integer amet, nunc hendrerit adipiscing nam. Elementum ame</p>
                    </div>
                    <!-- Enabled: "bg-teal-500", Not Enabled: "bg-gray-200" -->
                    <button type="button" class="relative inline-flex flex-shrink-0 h-6 ml-4 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500" role="switch" aria-checked="true" aria-labelledby="privacy-option-3-label" aria-describedby="privacy-option-3-description">
                      <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                      <span aria-hidden="true" class="inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow ring-0"></span>
                    </button>
                  </li>
                  <li class="flex items-center justify-between py-4">
                    <div class="flex flex-col">
                      <p class="text-sm font-medium text-gray-900" id="privacy-option-4-label">Allow mentions</p>
                      <p class="text-sm text-gray-500" id="privacy-option-4-description">Adipiscing est venenatis enim molestie commodo eu gravid</p>
                    </div>
                    <!-- Enabled: "bg-teal-500", Not Enabled: "bg-gray-200" -->
                    <button type="button" class="relative inline-flex flex-shrink-0 h-6 ml-4 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500" role="switch" aria-checked="true" aria-labelledby="privacy-option-4-label" aria-describedby="privacy-option-4-description">
                      <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                      <span aria-hidden="true" class="inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow ring-0"></span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
</template>

<script>
const Store = require('electron-store');

const store = new Store();

export default {
    data() {
        return {
            formData: {
                allow_unliked: store.get('settings.allow_unliked') || false
            }
        }
    },

    methods: {
        setValue(key, $event) {
            store.set('settings.' + key, this.formData[key]);
        }
    }
}
</script>
