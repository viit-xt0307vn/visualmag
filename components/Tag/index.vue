<template>
    <nuxt-link :to="param"><p class="tag">{{ tagName }}</p></nuxt-link>
</template>

<script setup>
defineProps({
    tagName: "string",
    param: "string"
})
</script>

<style lang="scss" scoped>
.tag {
    padding: 4px 8px;
    background-color: #F0F0F0;
    color: #555555;
    display: inline-block;
    font-size: 13px;
    cursor: pointer;
}
</style>