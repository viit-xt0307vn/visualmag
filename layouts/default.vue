<template>
    <TheHeader />
    <main class="main">
        <slot />
    </main>
    
    <TheFooter />
</template>

<script setup>
</script>

<style lang="scss" scoped>
    .main {
        max-width: 1180px;
        margin: 0 auto;
    }

    @media screen and (max-width: 1180px) {
        .main {
        padding: 0 15px;
    } 
    }
</style>