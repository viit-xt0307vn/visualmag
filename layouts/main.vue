<template>
    <div class="container">

        <!-- Title -->
        <main class="main">
            <slot />
        </main>

        <!-- Sidebar -->
        <aside class="aside">
            <TheSidebar />
        </aside>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "default"
})
</script>

<style lang="scss" scoped>


.container {
    max-width: 1180px;
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
    .container {
        padding: 0 15px;
    }
}

@media screen and (max-width: 782px) {
    .container {
        display: flex;
        flex-direction: column;
        gap: 60px;
    }
}
</style>