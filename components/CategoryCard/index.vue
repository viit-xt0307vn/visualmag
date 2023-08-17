<template>
    <nuxt-link :to="param" class="category-cart"><p >{{ cardName }}</p></nuxt-link>
</template>

<script setup>
defineProps({
    cardName: "string",
    param: "string"
})
</script>

<style lang="scss" scoped>
.category-cart {
    font-size: 12px;
    line-height: 17px;
    padding: 4px 10px;
    text-transform: uppercase;
    background-color: #0099E5;
    color: #fff;

    p {
        font-size: 12px;
    }


    &:nth-child(2) {
        background-color: #00C16E;
    }

    &:nth-child(3) {
        background-color: #8E43E7;
    }

    &:nth-child(4) {
        background-color: #B84592;
    }

    &:nth-child(5) {
        background-color: #FF0000;
    }

    &:nth-child(6) {
        background-color: #ff6900;
    }

    &:nth-child(7) {
        background-color: #fcb900;
    }

    &:nth-child(8) {
        background-color: #27808c;
    }

    &:nth-child(9) {
        background-color: #ff6b98;
    }
}</style>