<template>
    <div class="flex items-center justify-between pb-5 mb-10 border-b border-gray-200">
        <h3 class="text-lg font-extrabold leading-6 tracking-widest text-green-500 uppercase">
            <slot />
        </h3>

        <div class="flex items-center space-x-3">
            <slot name="header-right" />
        </div>
    </div>
</template>
