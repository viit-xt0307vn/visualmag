<template>
    <!-- Header -->
    <TheHeader />

    <!-- Main -->
    <slot />


    <!-- Footer -->
    <TheFooter />
</template>

<script setup>
</script>

<style lang="scss" scoped>
.container {
    width: 1180px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 20px;

    .main {
        grid-column: 1/3;
    }
}

@media screen and (max-width: 1180px) {
    .main {
        padding: 0 15px;
    }
}
</style>