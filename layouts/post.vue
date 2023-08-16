<template>
    <MainLayout>
        <!-- Post content -->
        <slot />


        <!-- Post comment Submit -->
        <div>
            <PostComment />
        </div>

    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/main.vue'
definePageMeta({
    component: "MainLayout"
})
</script>

<style lang="scss" scoped></style>