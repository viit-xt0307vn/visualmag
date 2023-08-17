<template>
    <div class="post-horizontal">
        <nuxt-link :to="link"><img class="post-horizontal-image" :src="urlImage" alt="" /></nuxt-link>
        <div class="post-horizontal-content">
            <nuxt-link :to="link">
                <h2 class="post-horizontal-title">
                    {{ title }}
                </h2>
            </nuxt-link>
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

const {title} = defineProps({
    urlImage: "string",
    author: "string",
    date: "string",
    title: "string",
    desc: "string",
})

const link = ref("/"+title)


const route = useRoute()


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