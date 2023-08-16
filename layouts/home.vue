<template>
    <slot />
</template>

<script setup>

</script>
    
<style lang="scss" scoped>



.container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 20px;

    .main {
        grid-column: 1/3;
    }
}


@media screen and (max-width: 782px) {
    .container {
        display: flex;
        flex-direction: column;
    }
}
</style>