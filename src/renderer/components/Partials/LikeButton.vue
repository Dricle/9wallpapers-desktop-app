<template>
    <button v-if="liked" @click="unlike" class="px-4 py-2 text-center text-green-500 bg-green-800 rounded-md">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
    </button>
    <button v-else @click="like" class="px-4 py-2 text-center text-green-500 bg-green-800 rounded-md">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
    </button>
</template>

<script>
export default {
    props: {
        wallpaper: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            liked: this.wallpaper.liked
        }
    },

    methods: {
        unlike() {
            this.$wallpaperRepository.unlike(this.wallpaper.id)
            .then(() => {
                this.liked = false
            })
        },
        like() {
            this.$wallpaperRepository.like(this.wallpaper.id)
            .then(() => {
                this.liked = true
            })
        },
    }
}
</script>
