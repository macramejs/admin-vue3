<template>
    <div class="grid h-screen grid-cols-1 md:grid-cols-2">
        <div
            class="flex flex-col items-center justify-center h-screen col-span-1"
        >
            <Logo dark show class="!h-10 mb-12" />
            <div class="flex justify-center w-full">
                <slot />
            </div>
        </div>
        <div
            class="relative items-center justify-center hidden h-screen col-span-1 overflow-hidden gradient md:flex"
        >
            <svg
                width="429"
                height="697"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute bottom-0 right-0 scale-150 blur-lg"
            >
                <defs>
                    <linearGradient
                        x1="99.777%"
                        y1="49.777%"
                        x2=".223%"
                        y2="49.777%"
                        id="a"
                    >
                        <stop stop-color="#FFA84B" offset="0%" />
                        <stop stop-color="#FF6D7F" offset="100%" />
                    </linearGradient>
                </defs>
                <path
                    d="M349.314 12.557c37.107 0 67.187 30.08 67.187 67.188 0 37.106-30.08 67.187-67.187 67.187s-67.188 30.082-67.188 67.19c0 37.106 30.081 67.187 67.188 67.187s67.187 30.08 67.187 67.187-30.08 67.188-67.187 67.188-67.188-30.081-67.188-67.188c0-37.106-30.08-67.187-67.187-67.187-37.108 0-67.19 30.08-67.19 67.187s-30.08 67.188-67.187 67.188c-37.106 0-67.187 30.082-67.187 67.189 0 37.107 30.08 67.187 67.187 67.187h-2.487c37.106 0 67.187 30.081 67.187 67.188s30.081 67.187 67.188 67.187c37.106 0 67.187-30.08 67.187-67.187s-30.08-67.188-67.187-67.188"
                    stroke="url(#a)"
                    stroke-width="25"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                />
            </svg>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Logo from './components/SidebarPrimary/Logo.vue';
//
</script>

<style>
.gradient {
    background: linear-gradient(180deg, #1f1f2c, #0e0e1a);
}
</style>
