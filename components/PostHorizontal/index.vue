<template>
    <div class="post-horizontal">
        <img class="post-horizontal-image" :src="urlImage" alt="" />
        <div class="post-horizontal-content">
            <h2 class="post-horizontal-title">
                {{ title }}
            </h2>
            <div class="post-horizontal-metadata">
                <h6 class="post-large-author">{{ author }}</h6>
                <p class="post-large-date">
                    {{ date }}
                </p>
            </div>
            <p class="post-horizontal-desc">
                {{ desc }}
            </p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    urlImage: "string",
    author: "string",
    date: "string",
    title: "string",
    desc: "string",
})
</script>

<style lang="scss" scoped>
.post-horizontal {
    width: 100%;
    display: flex;
    gap: 23px;

    &-image {
        width: 240px;
        height: 160px;


    }

    &-content {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &-metadata {
        display: flex;
        gap: 15px;
        margin-top: 16px;
    }

    &-desc {
        display: -webkit-box;
        width: 100%;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        color: #888888;
        line-height: 22px;
    }

    &-title {
        font-size: 1.5rem;

        &:hover {
            color: #0099E5;
        }
    }
}
</style>