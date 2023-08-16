<template>
    <div class="container">

        <!-- Title -->
        <main class="main">

            <h1 class="section-heading">Advertising</h1>
            <p class="caption">Category description here</p>
            <div class="content">
                <slot />
            </div>
        </main>

        <!-- Sidebar -->
        <aside class="aside">
            <TheSidebar />
        </aside>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.section-heading {
    font-size: 28px;

}

.caption {
    margin-top: 10px;
    font-size: 15px;
}

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
</style>